# Bluetooth Beacon Testing
I followed instructions on Gimbal's website and manager app to activate and configure three Gimbal Series 10 beacons. I had to manually input my GPS coordinates for each beacon to ensure accuracy and consistency in proximity tests. The first test run placed each beacon in a unique spot in my apartment. I then read the signal strength on the Gimbal Manager app to gauge general accuracy. There was a remarkable sensitivity in signal strength changes when facing the beacon versus having my back turned to the same beacon. I cannot rely on a single beacon's signal strength to gauge physical location in a room, and must begin tests to triangulate/trilaterate my position.
Since I am only using Gimbal's app at the moment, I need to run tests on getting bluetooth signal readings in the browser, which is more relevant to my project.
This is frustrating. It seems everyone wants you to build an app, not a website, so finding ble js info is tough. Noble-js, an npm package, seems promising. Though, I think I'll have to make a web application using Cordova (PhoneGap?) to access proximity as it seems inaccessible in a browser.
What about wifi?  
What I think is happening is the bluetooth information is available on the server, but not directly in the browser. *I need to research that a little better.*  
I need to structure the project around what is currently possible in the web with the Web Bluetooth API.
## Web Bluetooth API
Apparently this is what I'm looking for:
```
interface BluetoothAdvertisingData {
  readonly attribute unsigned short? appearance;
  readonly attribute byte? txPower;
  readonly attribute byte? rssi;
  readonly attribute Map manufacturerData;
  readonly attribute Map serviceData;
};
```
A readonly attribute is suitable for my needs.
I can develop on localhost, but must deploy with HTTPS on my server to ensure secure context. To do that, I need a TLS certificate, which is made available through [Let's Encrypt](https://letsencrypt.org/).   

iOS is an unsupported platform for Web Bluetooth, and everything else is unstable at best. Despite that I will continue with Android Chrome support.  
1. User visits website
2. Press a button to calibrate current position.
3. Walk around room and listen to sound in virtual space.
## Proximity Beacon API
Uses REST API. I'll write more when I know what that is, but it seems like a mobile app, not a web app.
## Web App 
Using a web app, I should be able to access the bluetooth strength (RSSI) info, which doesn't seem available in the browser with javascript. I'm going to try the Angular CLI tutorial to see if it is relevant.  
I finished half the tutorial but felt sidetracked by it. It seems like an excellent platform in general, but not sure if it is what I need right now. There is a Web Bluetooth module for it that I need to investigate though.  
I tried the Web Bluetooth Module from [@manekinekko](https://github.com/manekinekko/angular-web-bluetooth-starter) and it seems to run fine, however, the 3 Gimbal series 10 beacons do not show up as bluetooth devices. This seems to make sense because they contain no information. They are currently set up with Eddystone-UID configurations, which I read was Windows and Mac friendly. My next step is to discover how to get these beacons to be discoverable by my computer.
## Noble
I'm going to try [Noble](https://github.com/noble/noble) now. It has scanning and peripherals that include updating RSSI, which is basically all I want. I don't want to connect, I just want to observe.  
It turns out you need a bluetooth usb adapter to scan, and cannot use the built in bluetooth on Windows. Not cool. Unless I get an adapter, I'll have to look elsewhere.  
## AltBeacon  
Mobile apps, not interested. 
## Cordova
Turns HTML/CSS/JS into mobile apps for any platform. [Cordova](https://cordova.apache.org/) uses a Bluetooth Low Energy Central Plugin to communicate with BLEs. Wern Ancheta uses Cordova with the BLE Central Plugin and bleno to make a mobile app [here](https://www.sitepoint.com/communicating-with-bluetooth-low-energy-devices-in-cordova/). Still unconvinced a mobile app is what I want. Maybe I'll check bleno to see how it works with the web.  
## Noble-uwp
**Eureka!** [jasongin](https://www.npmjs.com/package/noble-uwp) created bindings for noble that use Windows 10 bluetooth. My first several attempts failed due to discrepancies between noble code and noble-uwp instructions. Alas, I think I figured out how to get things working. I ran the noble example 'advertising-discovery.js' while requiring noble-uwp and it actually scanned for bluetooth. There was an error with `.toString` being called, so I commented it out, and the code actually ran. I was unable to get all the data I wanted but RSSI was available!  
Next I'll bring noble and noble-uwp into the LostInSpace project. I need to fine tune the scanning to only look for my specific beacons. After that I need to try to run it on a mobile device and see if I can get the beacon strength to vary as I walk around a room.  
I've successfully tracked a single beacon using a primitive BLE scan. I have identified my first beacon, in iBeacon configuration, to have the service UUID 'fefd'. I will follow up with the other two beacons to find their service UUID's so I can track them exclusively. I tested the service UUID of Beacon 1 a second time, after removing and replacing the battery, and the 'fefd' UUID remained the same. I hope it never changes!  
Beacon 2 is in Eddystone configuration. 'fefd' works just the same with Beacon 2. I assume it has something to do with both beacons being made by the same company. Beacon 3, on Eddystone configuration as well, showed up as 'fefd' as well. Fortunately I can allow duplicates in my UUID seach filter. I made a dry run with no beacons active and no 'fefd' beacons were found. This should work for prototyping, but I'd prefer a more specific way to identify beacons when I am not in a controlled environment.  
A challenge for this is presented by a changing address. each beacon will display 2+ addresses while the scan is running. I need to find a way to differentiate between three 'fefd' beacons.  
I'm going to add the scanning script `BLEScan.js` to `index.html` and see how it runs on mobile.  

# Raspberry Pi  
What if the Pi scans the room for any discoverable mobile bluetooth devices? Instead of users scanning for beacons, the Pi scans for users. The Pi configuration can have beacons around it with known static distances, which will set up the room into quadrants. The Pi then scans for discoverable bluetooth devices and compares the txPower and RSSI information to the known static beacons to figure out general location. The general location in the room will generate (x,y) coordinates. The coordinates are sent from the app to a web server. The web server sends the coordinates to the audio listener in the web browser.  
How do I have mobile devices discoverable and on a website at the same time? How do I know what device is on what instance of the website? Each user has an ID on the server on which the website is hosted. Perhaps that ID could be attached to the bluetooth ID? Maybe the website has a prompt that pairs the ID on the server to the discoverable bluetooth ID.
  
# Wifi RSSI Testing
## node-wifi-scanner
This seems like a simple enough tool. I'm going to try it out.  
  
Finally got it to work with rhizome. It seems the scanning is actually done in the server, not in the browser. I'd like to make it work in the browser. Right now, it is only logging the networks once. I'd like to make it update constantly so I can read the rssi changes. Then I can try to define corners of a room based on signal strengths of multiple routers. Following that, I will try to determine relative position based on signal strength in relation to corners of a room.

# Server vs. Client
## Server  
Rhizome will be my web server. `BLEScan.js` is for the server? I hope not, because I need mobile devices to use their bluetooth to scan the room. This may be the downfall of this project.  

# Android App Development
## Lost in Space App
I have no idea what I'm doing. I do not know java, and the Android Development API is for people who know what they are doing. They give great tips on what code to use, but I don't know where the code goes. Surely, not everything belongs in the `onCreate()` function. I've used the Android suggested code snippets and have errors pop up that I don't know how to resolve. I'm currently fighting an `Intent` that is just a random symbol to Android Studio, signifying nothing. This was mostly to vent.  
I need to use BLE which requires permissions and a `BluetoothAdapter`. Using `BluetoothManager`, I can call `getAdapter()` to get a bluetooth adapter. It seems the `BluetoothManager` business is in an API later than that of the older devices I could target. Due to this, I must annotate with `@TargetApi(18)` so no devices with earlier API's will be able to run the app. Then I check to make sure the adapter is enabled, and request it to be enabled if it is turned off.  
Today I learned about importing sample code. There are various code samples that introduce all kinds of functionality to Android apps that you can find in Android Studio. I found a BLE scan sample and ran it on two Android devices. Unfortunately, the BLE scan did not find my Gimbal beacons. I will update the configuration of the beacons to see if anything changes. If that is successful, I will just need to add a web view to the app that will display my website and insert code to send RSSI values to my website. It might be reasonable to use the BLE scan sample code as a template and then change code snippets to get what I need from the app (following the Android Studio guides online). This, of course, revolves around learning how to read Java.  
I've decided to use Gimbal's SDK to build my app since I'm using Gimbal beacons already. There are sample applications that I can build off in Android Studio, but I have no idea what I'm doing. There is plenty of documentation on getting beacons, RSSI, UUID, etc. but I can't tell where any of the code goes. Android Studio keeps telling me about unused imports and methods that cannot be resolved. I've spent about 3 hours today trying to add to the sample applications and have had no success. Talking to Jesse will probably enlighten me. Until then, I desperately need to work on the web audio portion of this project.  
I worked all day trying to figure out Web Audio API on my own. Still too confusing for me. I'm about to start tests with `Tone.js` with which I am already familiar. Surely I'll get it this time. Once I get audio to play in a browser with `Tone.js`, I will try to attach it to `PannerNode` in the Web Audio API. **UPDATE:** It was so fucking easy to do with `Tone.js`.  
It was all going smoothly until I tried `var listener = new Tone.Listener();` and received an error saying `Tone.Listener` is not a constructor. The `Tone.js` website clearly says it is a constructor. I'm not sure what to think about this.