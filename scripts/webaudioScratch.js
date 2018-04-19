//var listener = new Tone.Listener();

var player00 = new Tone.Player("../audio/dianaFire.wav");
//play as soon as the buffer is loaded
player00.autostart = true;
player00.loop = true;

var player01 = new Tone.Player("../audio/lab5ChillBeats.wav");
player01.autostart = true;
player01.loop = true;

/*
var player02 = new Tone.Player("TBD");
player02.autostart = true;
player02.loop = true;

var player03 = new Tone.Player("TBD");
player03.autostart = true;
player03.loop = true;

var player04 = new Tone.Player("TBD");
player04.autostart = true;
player04.loop = true;

var player05 = new Tone.Player("tbd");
player05.autostart = true;
player05.loop = true;

var player06 = new Tone.Player("TBD");
player06.autostart = true;
player06.loop = true;

var player07 = new Tone.Player("TBD");
player07.autostart = true;
player07.loop = true;
*/

var panner00 = new Tone.Panner3D({  // Right Hand Cartesian coordinates
    "positionX" : -1,
    "positionY" : 0, 
    "positionZ" : 0,
    "panningModel" : "equalpower",
    "maxDistance" : 1,
    "refDistance" : 0.1
}).toMaster(); 

var panner01 = new Tone.Panner3D({  // Right Hand Cartesian coordinates
    "positionX" : 1,
    "positionY" : 0, 
    "positionZ" : 0,
    "panningModel" : "equalpower",
    "maxDistance" : 1,
    "refDistance" : 0.1
}).toMaster();  

/*
var panner02 = new Tone.Panner3D(-10, 0, 10);
var panner03 = new Tone.Panner3D(10, 0, 10);
var panner04 = new Tone.Panner3D(-10, 0, 20);
var panner05 = new Tone.Panner3D(10, 0, 20);
var panner06 = new Tone.Panner3D(-10, 0, 30);
var panner07 = new Tone.Panner3D(10, 0, 30);
*/

player00.connect(panner00);
player01.connect(panner01);
/*
player02.connect(panner02);
player03.connect(panner03);
player04.connect(panner04);
player05.connect(panner05);
player06.connect(panner06);
player07.connect(panner07);
*/