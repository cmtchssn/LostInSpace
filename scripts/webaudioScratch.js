//const trilateration = require('trilateration'); //figure out require js for this to work
var myVar = null;

var beacon1 = {
    "id" : "35467",
    "positionX" : -10,
    "positionY" : 0,
    "positionZ" : 0   
};
var beacon2 = {
    "id" : "35468",
    "positionX" : -10,
    "positionY" : 0,
    "positionZ" : 10   
};
var beacon3 = {
    "id" : "35469",
    "positionX" : -10,
    "positionY" : 0,
    "positionZ" : 20   
};

var listenerRange = {
    "distToBeacon1" : 10,
    "distToBeacon2" : 14.14,
    "distToBeacon3" : 22.36
};
/*
trilateration.addBeacon(0, trilateration.vector(-10, 0));
trilateration.addBeacon(1, trilateration.vector(-10, 10));
trilateration.addBeacon(2, trilateration.vector(-10, 20));

trilateration.setDistance(0, listenerRange.distToBeacon1);
trilateration.setDistance(1, listenerRange.distToBeacon2);
trilateration.setDistance(2, listenerRange.distToBeacon3);

var pos = trilateration.calculatePosition(); 

console.log("X: " + pos.x + "; Y: " + pos.y); 
*/
var player00 = new Tone.Player("../audio/clar00.wav");
//play as soon as the buffer is loaded
player00.autostart = true;
player00.loop = true;

var player01 = new Tone.Player("../audio/clar01.wav");
player01.autostart = true;
player01.loop = true;

var player02 = new Tone.Player("../audio/clar02.wav");
player02.autostart = true;
player02.loop = true;

var player03 = new Tone.Player("../audio/clar03.wav");
player03.autostart = true;
player03.loop = true;

var player04 = new Tone.Player("../audio/clar04.wav");
player04.autostart = true;
player04.loop = true;

var player05 = new Tone.Player("../audio/clar05.wav");
player05.autostart = true;
player05.loop = true;

var player06 = new Tone.Player("../audio/clar06.wav");
player06.autostart = true;
player06.loop = true;

var player07 = new Tone.Player("../audio/clar07.wav");
player07.autostart = true;
player07.loop = true;


var panner00 = new Tone.Panner3D({  // Right Hand Cartesian coordinates
    "positionX" : -10,
    "positionY" : 0, 
    "positionZ" : 0,
    "panningModel" : "HRTF",
    "maxDistance" : 1,
    "refDistance" : 0.1
}).toMaster(); 

var panner01 = new Tone.Panner3D({  // Right Hand Cartesian coordinates
    "positionX" : 10,
    "positionY" : 0, 
    "positionZ" : 0,
    "panningModel" : "HRTF",
    "maxDistance" : 1,
    "refDistance" : 0.1
}).toMaster();  

var panner02 = new Tone.Panner3D({  // Right Hand Cartesian coordinates
    "positionX" : -10,
    "positionY" : 0, 
    "positionZ" : 10,
    "panningModel" : "HRTF",
    "maxDistance" : 1,
    "refDistance" : 0.1
}).toMaster();  

var panner03 = new Tone.Panner3D({  // Right Hand Cartesian coordinates
    "positionX" : 10,
    "positionY" : 0, 
    "positionZ" : 10,
    "panningModel" : "HRTF",
    "maxDistance" : 1,
    "refDistance" : 0.1
}).toMaster();  

var panner04 = new Tone.Panner3D({  // Right Hand Cartesian coordinates
    "positionX" : -10,
    "positionY" : 0, 
    "positionZ" : 20,
    "panningModel" : "HRTF",
    "maxDistance" : 1,
    "refDistance" : 0.1
}).toMaster();  

var panner05 = new Tone.Panner3D({  // Right Hand Cartesian coordinates
    "positionX" : 10,
    "positionY" : 0, 
    "positionZ" : 20,
    "panningModel" : "HRTF",
    "maxDistance" : 1,
    "refDistance" : 0.1
}).toMaster();  

var panner06 = new Tone.Panner3D({  // Right Hand Cartesian coordinates
    "positionX" : -10,
    "positionY" : 0, 
    "positionZ" : 30,
    "panningModel" : "HRTF",
    "maxDistance" : 1,
    "refDistance" : 0.1
}).toMaster();  

var panner07 = new Tone.Panner3D({  // Right Hand Cartesian coordinates
    "positionX" : 10,
    "positionY" : 0, 
    "positionZ" : 30,
    "panningModel" : "HRTF",
    "maxDistance" : 1,
    "refDistance" : 0.1
}).toMaster(); 

player00.connect(panner00);
player01.connect(panner01);
player02.connect(panner02);
player03.connect(panner03);
player04.connect(panner04);
player05.connect(panner05);
player06.connect(panner06);
player07.connect(panner07);

/*
getFromAndroid();

function getFromAndroid() {
    myVar = Android.getFromAndroid();
    alert(myVar);
    return myVar;
}
*/