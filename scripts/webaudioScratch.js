var player00 = new Tone.Player("../audio/dianaFire.wav");
//play as soon as the buffer is loaded
player00.autostart = true;
player00.loop = true;

var player01 = new Tone.Player("../audio/lab5ChillBeats.wav");
//play as soon as the buffer is loaded
player01.autostart = true;
player01.loop = true;

var panner00 = new Tone.Panner3D(-10, 0, 0);    // Negative X => Right Channel; Positive X => Left Channel
var panner01 = new Tone.Panner3D(10, 0, 0);     // Negative Y =>? Sent Downward; Positive Y =>? Sent Upward
                                                // Z is ambiguous on heaphones. Large range though. ~2000.

player00.connect(panner00);
player01.connect(panner01);

panner00.toMaster();
panner01.toMaster();