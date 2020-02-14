// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, cache, entry, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject.parcelRequire === 'function' &&
    globalObject.parcelRequire;
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
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
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  globalObject.parcelRequire = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"afc120c43055839d3525d4fb072e0726":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Apiy = void 0;

var _core = require("./core");

/* main apiy entry */
class Apiy {
  get(opt) {
    return (0, _core.Get)({
      method: 'GET',
      ...opt
    });
  }

  post(opt) {
    return 'post';
  }

  put(opt) {
    return 'put';
  }

  patch(opt) {
    return 'patch';
  }

  delete(opt) {
    return 'delete';
  }

  options(opt) {
    return 'options';
  }

}

exports.Apiy = Apiy;
},{"./core":"dff201b9493679a97db759d7cf07eb4c"}],"dff201b9493679a97db759d7cf07eb4c":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Get", {
  enumerable: true,
  get: function () {
    return _Get.Get;
  }
});

var _Get = require("./methods/Get");
},{"./methods/Get":"78677fdb79b7c77ef5bf9b92a0ed4878"}],"78677fdb79b7c77ef5bf9b92a0ed4878":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Get = void 0;

var _utils = require("../../utils");

/* Apiy get function */
const Get = options => {
  const req = new Promise(async (resolve, reject) => {
    if (!(0, _utils.optionsValidator)(options)) {
      reject('Some Apiy Options Missed!');
    }

    const xhr = new XMLHttpRequest();
    xhr.responseType = options.responseType || 'json';
    xhr.withCredentials = true;
    await xhr.open(options.method, options.url);
    await xhr.send(); // @TODO: UTIL THIS TO READ FROM options
    // xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = async () => {
      try {
        resolve((await (0, _utils.onloadHandler)(xhr)));
      } catch (error) {
        reject(new Error('Whoops!'));
      }
    };

    xhr.onprogress = event => {
      /* @TODO: HANDLE FOR DOWNLOAD CASES. */
    };

    xhr.onreadystatechange = () => {
      // @TODO: UtIL WITH RXJS
      if (xhr.readyState == 3 || xhr.readyState == 1) {
        options.loading = true;
      }

      if (xhr.readyState == 4) {
        options.loading = false;
      }
    };

    xhr.onerror = () => reject(new Error('⛔ Ooops!'));
  });
  return req;
};

exports.Get = Get;
},{"../../utils":"8600f86eebfc54b441cff8d4e9659355"}],"8600f86eebfc54b441cff8d4e9659355":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "responseTypeHandler", {
  enumerable: true,
  get: function () {
    return _responseTypeHandler.responseTypeHandler;
  }
});
Object.defineProperty(exports, "onloadHandler", {
  enumerable: true,
  get: function () {
    return _onloadHandler.onloadHandler;
  }
});
Object.defineProperty(exports, "optionsValidator", {
  enumerable: true,
  get: function () {
    return _optionsValidator.optionsValidator;
  }
});

var _responseTypeHandler = require("./handlers/responseTypeHandler");

var _onloadHandler = require("./handlers/onloadHandler");

var _optionsValidator = require("./validators/optionsValidator");
},{"./handlers/onloadHandler":"018b13b2f35cf5967605c88fcac00c18","./validators/optionsValidator":"e5c653245e2b05fdcaed457ff9834f80","./handlers/responseTypeHandler":"cabe0166707d8cdfb1041960a8e08660"}],"018b13b2f35cf5967605c88fcac00c18":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onloadHandler = void 0;

const onloadHandler = async xhr => {
  try {
    // @TODO: UTIL HANDLE THIS, TAKE STATUS ONLY.
    //@TODO: HANDLE RESOLVE PURE OBJECT
    const response = xhr.response;
    return response;
  } catch (error) {
    return error;
  } // return promis((resolve, reject) => {
  //     xhr.onload = () => {
  //         // @TODO: UTIL HANDLE THIS, TAKE STATUS ONLY.
  //         if (xhr.status != 200) {
  //             reject(new Error("Whoops!"));
  //         } else {
  //             //@TODO: HANDLE RESOLVE PURE OBJECT
  //             const response = xhr.response;
  //             resolve(response);
  //         }
  //     };
  // })

};

exports.onloadHandler = onloadHandler;
},{}],"e5c653245e2b05fdcaed457ff9834f80":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.optionsValidator = void 0;

const optionsValidator = options => {
  if (!options || !options.url) {
    return false;
  }

  return true; // @TODO: EXTEND VALIDATION RULES TO HANDLE body AND query WHEN POST, PUT, DELETE
};

exports.optionsValidator = optionsValidator;
},{}],"cabe0166707d8cdfb1041960a8e08660":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.responseTypeHandler = void 0;

// @TODO: EXTEND VALIDATION
const responseTypeHandler = responseType => responseType;

exports.responseTypeHandler = responseTypeHandler;
},{}],"d347dc37b6ca23899ffbbc32fd87b43f":[function(require,module,exports) {
var global = arguments[3];
var __PARCEL_HMR_ENV_HASH = "d751713988987e9331980363e24189ce";var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function(fn) {
      this._acceptCallbacks.push(fn || function() {});
    },
    dispose: function(fn) {
      this._disposeCallbacks.push(fn);
    },
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept, acceptedAssets;

// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = location.hostname;
  var port = location.port ? ':' + location.port : '';
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + port + '/');
  ws.onmessage = function(event) {
    checkedAssets = {};
    assetsToAccept = [];
    acceptedAssets = {};

    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();

      let assets = data.assets.filter(
        // eslint-disable-next-line no-undef
        asset => asset.envHash === __PARCEL_HMR_ENV_HASH,
      );

      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
        if (didAccept) {
          handled = true;
        }
      });

      if (handled) {
        console.clear();

        assets.forEach(function(asset) {
          hmrApply(global.parcelRequire, asset);
        });

        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe
          ? ansiDiagnostic.codeframe
          : ansiDiagnostic.stack;

        console.error(
          '🚨 [parcel]: ' +
            ansiDiagnostic.message +
            '\n' +
            stack +
            '\n\n' +
            ansiDiagnostic.hints.join('\n'),
        );
      }

      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function(e) {
    console.error(e.message);
  };
  ws.onclose = function(e) {
    console.warn('[parcel] 🚨 Connection to the HMR server was lost');
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ✨ Error resolved');
  }
}

function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  let errorHTML =
    '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';

  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;

    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }

  errorHTML += '</div>';

  overlay.innerHTML = errorHTML;

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

      if (dep === id || (Array.isArray(dep) && dep[dep.length - 1] === id)) {
        parents.push([bundle, k]);
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
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;

  var cached = bundle.cache[id];

  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function(v) {
    return hmrAcceptCheck(v[0], v[1]);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function(cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function(cb) {
      var assetsToAlsoAccept = cb(function() {
        return getParents(global.parcelRequire, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}]},{},["d347dc37b6ca23899ffbbc32fd87b43f","afc120c43055839d3525d4fb072e0726"], null)

//# sourceMappingURL=app.d204f418.js.map
