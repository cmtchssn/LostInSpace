# Web Audio API
## Flow of site
Check out [this flowchart](https://developer.mozilla.org/en-US/docs/Web/API/AudioNode) of the `AudioNode` in action.  
A simple, typical workflow for web audio would look something like this:  
1. Create audio context
2. Inside the context, create sources — such as <audio>, oscillator, stream
3. Create effects nodes, such as reverb, biquad filter, panner, compressor
4. Choose final destination of audio, for example your system speakers
5. Connect the sources up to the effects, and the effects to the destination.  
## Problems
Obviously, smartphones with only one speaker cannot pan audio left to right. Headphones are the first thought at fixing this, but it defeats the purpose of using the collective users as performers and spatializing the piece.
