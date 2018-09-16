## Title Slide 1
- Lost In Space: Indoor Localization for Virtual Environment Exploration
## Web Audio Slide 2
- Web Audio API – modular routing and processing for audio on the web
- Tone.js – framework for interactive music
- Mobile performance pieces
## Bluetooth Slide 3
- Bluetooth Low Energy (BLE) – transmit ultrawide band frequencies, can be scanned by mobile devices
- BLE Beacons – can be grouped to represent a geographic location
- Indoor Localization – use beacon signal strength in a know area to trilaterate a specific point in a room
## Why on the Web Slide 4
- Simplicity – Web Standards
- Universal – Android vs. iOS
- No External Applications – Browser already on mobile devices
## Bluetooth on the Web Slide 5
- Web Bluetooth API – currently experimental and unstable, little to no support in mobile browsers
- Android Studio – Android apps can access mobile devices’ bluetooth and access websites with a Web View tool. Combining those properties will enable Bluetooth on the web.
## Lost In Space App Slide 6
- Tone.js – create several speakers spread out in a virtual space
- BLE Beacons – set out at least 3 beacons in a room to do indoor localization
- Android App – scan for beacons, determine distance to beacons, send data to website
- Website – receive beacon distance data, apply trilateration to determine indoor location, map indoor location to the virtual space created with Tone.js
## Virtual Sound Environment Slide 7
- Speaker Position – mapped with Tone.js using right-hand Cartesian coordinates
- Listener Position – indoor location mapped to the Tone.js virtual space
- Audio – Output through mobile device speakers. As a user gets closer to a virtual speaker, the audio gets louder
## Slide 8 - Diagram
## Slide 9 - Diagram
## Slide 10 - Diagram
## Why Bother - Slide 11
- Virtual Soundwalks
- Participative performances
- Spatialization in challenging environments