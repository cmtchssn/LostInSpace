// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({7:[function(require,module,exports) {
//const trilateration = require('trilateration'); //figure out require js for this to work

var beacon1 = {
    "id": "35467",
    "positionX": -10,
    "positionY": 0,
    "positionZ": 0
};
var beacon2 = {
    "id": "35468",
    "positionX": -10,
    "positionY": 0,
    "positionZ": 10
};
var beacon3 = {
    "id": "35469",
    "positionX": -10,
    "positionY": 0,
    "positionZ": 20
};

var listenerRange = {
    "distToBeacon1": 10,
    "distToBeacon2": 14.14,
    "distToBeacon3": 22.36
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

var panner00 = new Tone.Panner3D({ // Right Hand Cartesian coordinates
    "positionX": -10,
    "positionY": 0,
    "positionZ": 0,
    "panningModel": "HRTF",
    "maxDistance": 1,
    "refDistance": 0.1
}).toMaster();

var panner01 = new Tone.Panner3D({ // Right Hand Cartesian coordinates
    "positionX": 10,
    "positionY": 0,
    "positionZ": 0,
    "panningModel": "HRTF",
    "maxDistance": 1,
    "refDistance": 0.1
}).toMaster();

var panner02 = new Tone.Panner3D({ // Right Hand Cartesian coordinates
    "positionX": -10,
    "positionY": 0,
    "positionZ": 10,
    "panningModel": "HRTF",
    "maxDistance": 1,
    "refDistance": 0.1
}).toMaster();

var panner03 = new Tone.Panner3D({ // Right Hand Cartesian coordinates
    "positionX": 10,
    "positionY": 0,
    "positionZ": 10,
    "panningModel": "HRTF",
    "maxDistance": 1,
    "refDistance": 0.1
}).toMaster();

var panner04 = new Tone.Panner3D({ // Right Hand Cartesian coordinates
    "positionX": -10,
    "positionY": 0,
    "positionZ": 20,
    "panningModel": "HRTF",
    "maxDistance": 1,
    "refDistance": 0.1
}).toMaster();

var panner05 = new Tone.Panner3D({ // Right Hand Cartesian coordinates
    "positionX": 10,
    "positionY": 0,
    "positionZ": 20,
    "panningModel": "HRTF",
    "maxDistance": 1,
    "refDistance": 0.1
}).toMaster();

var panner06 = new Tone.Panner3D({ // Right Hand Cartesian coordinates
    "positionX": -10,
    "positionY": 0,
    "positionZ": 30,
    "panningModel": "HRTF",
    "maxDistance": 1,
    "refDistance": 0.1
}).toMaster();

var panner07 = new Tone.Panner3D({ // Right Hand Cartesian coordinates
    "positionX": 10,
    "positionY": 0,
    "positionZ": 30,
    "panningModel": "HRTF",
    "maxDistance": 1,
    "refDistance": 0.1
}).toMaster();

player00.connect(panner00);
player01.connect(panner01);
player02.connect(panner02);
player03.connect(panner03);
player04.connect(panner04);
player05.connect(panner05);
player06.connect(panner06);
player07.connect(panner07);
},{}],39:[function(require,module,exports) {

var OVERLAY_ID = '__parcel__error__overlay__';

var global = (1, eval)('this');
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '53015' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},[39,7])
//# sourceMappingURL=/webaudioScratch.92236616.map