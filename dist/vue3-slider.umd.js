(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue3-slider"] = factory(require("vue"));
	else
		root["vue3-slider"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "23d8":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".fade-enter-active,.fade-leave-active{transition:opacity .2s}.fade-enter,.fade-leave-to{opacity:0}.vue3-slider{box-sizing:border-box;width:var(--width,100%);height:var(--height,6px);position:relative;margin:3px 0;cursor:pointer;font-family:inherit}.vue3-slider.vertical{width:var(--height,6px);height:var(--width,100%)}.vue3-slider.vertical .track-filled{width:100%;bottom:0;top:auto}.vue3-slider.vertical .handle{top:unset;bottom:0;left:0}.vue3-slider.vertical .tooltip{bottom:0;top:auto}.vue3-slider.circular{height:var(--width,100%);margin:0}.vue3-slider.circular .round-end{position:absolute;margin:0 auto;width:var(--height,6px);height:var(--height,6px);transform:scale(1);left:0;right:0;top:calc(var(--height, 6px)*-0.5)}.vue3-slider.circular .handle-container{-webkit-user-select:none;-ms-user-select:none;user-select:none;width:100%;height:100%;position:absolute;top:0;left:0;transform-origin:center;display:flex;justify-content:center;align-items:center}.vue3-slider.circular .handle-container .handle{top:calc(var(--height, 6px)*-0.5);width:var(--height,6px);height:var(--height,6px);transform:scale(1)}.vue3-slider.circular .handle-container .handle.hover{transform:scale(1.5)}.vue3-slider.circular .handle-container .tooltip{position:absolute;bottom:auto;left:unset}.vue3-slider *{-webkit-user-drag:none;-webkit-app-region:no-drag}.vue3-slider .tooltip{position:absolute;left:0;height:25px;background-color:var(--tooltip-color);color:var(--tooltip-text-color);font-family:inherit;padding:3px 7px;border-radius:4px;font-weight:700;display:flex;align-items:center}.vue3-slider .track,.vue3-slider .track-filled{background-color:var(--track-color,rgba(241,246,248,.156863));width:100%;height:100%;border-radius:calc(var(--height, 6px)/2)}.vue3-slider .track-filled{left:0;width:auto;opacity:1}.vue3-slider .handle,.vue3-slider .track-filled{position:absolute;top:0;background-color:var(--color,#fb2727)}.vue3-slider .handle{width:var(--height,6px);height:var(--height,6px);border-radius:calc(var(--height, 6px)/2);transform:scale(1.4);transition:transform .2s ease;-webkit-user-select:none;-ms-user-select:none;user-select:none}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "24fb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesClient; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "a142":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_vue3_slider_vue_vue_type_style_index_0_id_7e75451f_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a261");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_vue3_slider_vue_vue_type_style_index_0_id_7e75451f_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_vue3_slider_vue_vue_type_style_index_0_id_7e75451f_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "a261":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("23d8");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("5dae6fb5", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./src/entry.esm.ts
var entry_esm_namespaceObject = {};
__webpack_require__.r(entry_esm_namespaceObject);
__webpack_require__.d(entry_esm_namespaceObject, "default", function() { return entry_esm; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/vue3-slider.vue?vue&type=template&id=7e75451f
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var _hoisted_1 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
  class: "track"
}, null, -1);

var _hoisted_2 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
  class: "track"
}, null, -1);

var _hoisted_3 = {
  width: "100%",
  height: "100%",
  viewBox: "0 0 100 100",
  style: {
    "overflow": "visible"
  }
};

var _hoisted_4 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("circle", {
  stroke: "var(--track-color)",
  "vector-effect": "non-scaling-stroke",
  fill: "none",
  "stroke-width": "var(--height)",
  r: "50%",
  cx: "50",
  cy: "50"
}, null, -1);

var _hoisted_5 = ["stroke-dasharray", "stroke-dashoffset"];

var _hoisted_6 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
  class: "handle round-end"
}, null, -1);

var _hoisted_7 = [_hoisted_6];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.orientation === 'horizontal' ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    key: "horizontal",
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])(_objectSpread({}, _ctx.vars)),
    class: "vue3-slider",
    tabindex: "0",
    ref: "slider",
    onTouchstart: _cache[0] || (_cache[0] = function () {
      return _ctx.clickHandler && _ctx.clickHandler.apply(_ctx, arguments);
    }),
    onMousedown: _cache[1] || (_cache[1] = function () {
      return _ctx.clickHandler && _ctx.clickHandler.apply(_ctx, arguments);
    }),
    onMouseenter: _cache[2] || (_cache[2] = function ($event) {
      return _ctx.hovering = true;
    }),
    onMouseleave: _cache[3] || (_cache[3] = function ($event) {
      return _ctx.hovering = false;
    }),
    onKeydown: _cache[4] || (_cache[4] = function () {
      return _ctx.handleKeydown && _ctx.handleKeydown.apply(_ctx, arguments);
    })
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Transition"], {
    name: "fade"
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
        class: "tooltip",
        ref: "tooltip",
        style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({
          transform: _ctx.flip ? "translate(".concat(-_ctx.tooltipOffset, "px)") : "translate(".concat(_ctx.tooltipOffset, "px)"),
          right: _ctx.flip ? '0px' : undefined,
          left: _ctx.flip ? 'auto' : undefined,
          bottom: "max(calc(var(--height, 6px) + 12px), calc(var(--height, 6px) * 1.35))"
        })
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default", {}, function () {
        return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.tooltipText), 1)];
      })], 4), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.showTooltip]])];
    }),
    _: 3
  }), _hoisted_1, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
    class: "track-filled",
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({
      width: _ctx.filledWidth + 'px',
      right: _ctx.flip ? '0px' : undefined,
      left: _ctx.flip ? 'auto' : undefined
    })
  }, null, 4), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["handle", {
      hover: _ctx.applyHandleHoverClass
    }]),
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])(_defineProperty({}, _ctx.flip ? 'right' : 'left', _ctx.filledWidth - _ctx.height * 1.35 / 2 + 'px'))
  }, null, 6)], 36)) : _ctx.orientation === 'vertical' ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    key: "vertical",
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])(_objectSpread({}, _ctx.vars)),
    class: "vue3-slider vertical",
    tabindex: "0",
    ref: "slider",
    onTouchstart: _cache[5] || (_cache[5] = function () {
      return _ctx.clickHandler && _ctx.clickHandler.apply(_ctx, arguments);
    }),
    onMousedown: _cache[6] || (_cache[6] = function () {
      return _ctx.clickHandler && _ctx.clickHandler.apply(_ctx, arguments);
    }),
    onMouseenter: _cache[7] || (_cache[7] = function ($event) {
      return _ctx.hovering = true;
    }),
    onMouseleave: _cache[8] || (_cache[8] = function ($event) {
      return _ctx.hovering = false;
    }),
    onKeydown: _cache[9] || (_cache[9] = function () {
      return _ctx.handleKeydown && _ctx.handleKeydown.apply(_ctx, arguments);
    })
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Transition"], {
    name: "fade"
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
        class: "tooltip",
        ref: "tooltip",
        style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({
          transform: _ctx.flip ? "translateY(".concat(_ctx.tooltipOffset, "px)") : "translateY(".concat(-_ctx.tooltipOffset, "px)"),
          top: _ctx.flip ? '0px' : undefined,
          bottom: _ctx.flip ? 'auto' : undefined,
          left: "max(calc(var(--height, 6px) + 14px), calc(var(--height, 6px) * 1.35))"
        })
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default", {}, function () {
        return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.tooltipText), 1)];
      })], 4), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.showTooltip]])];
    }),
    _: 3
  }), _hoisted_2, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
    class: "track-filled",
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({
      height: _ctx.filledWidth + 'px',
      top: _ctx.flip ? '0px' : undefined,
      bottom: _ctx.flip ? 'auto' : undefined
    })
  }, null, 4), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["handle", {
      hover: _ctx.applyHandleHoverClass
    }]),
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])(_defineProperty({}, _ctx.flip ? 'top' : 'bottom', _ctx.filledWidth - _ctx.height * 1.35 / 2 + 'px'))
  }, null, 6)], 36)) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    key: "circular",
    class: "vue3-slider circular",
    tabindex: "0",
    ref: "slider",
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])(_objectSpread({}, _ctx.vars)),
    onTouchstart: _cache[10] || (_cache[10] = function () {
      return _ctx.clickHandler && _ctx.clickHandler.apply(_ctx, arguments);
    }),
    onMousedown: _cache[11] || (_cache[11] = function () {
      return _ctx.clickHandler && _ctx.clickHandler.apply(_ctx, arguments);
    }),
    onMouseenter: _cache[12] || (_cache[12] = function ($event) {
      return _ctx.hovering = true;
    }),
    onMouseleave: _cache[13] || (_cache[13] = function ($event) {
      return _ctx.hovering = false;
    }),
    onKeydown: _cache[14] || (_cache[14] = function () {
      return _ctx.handleKeydown && _ctx.handleKeydown.apply(_ctx, arguments);
    })
  }, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("svg", _hoisted_3, [_hoisted_4, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("circle", {
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])([{
      transform: "rotate(".concat(-90 + _ctx.circleOffset, "deg) ").concat(_ctx.flip ? 'scaleY(-1)' : '')
    }, {
      "transform-origin": "center"
    }]),
    stroke: "var(--color)",
    "vector-effect": "non-scaling-stroke",
    fill: "none",
    "stroke-width": "var(--height)",
    r: "50%",
    cx: "50",
    cy: "50",
    "stroke-dasharray": _ctx.circumference,
    "stroke-dashoffset": _ctx.strokeOffset
  }, null, 12, _hoisted_5)])), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
    class: "handle-container",
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({
      transform: "rotate(".concat(_ctx.circleOffset, "deg)")
    })
  }, _hoisted_7, 4), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
    class: "handle-container",
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({
      transform: "rotate(".concat(_ctx.sliderValueDegrees + _ctx.circleOffset, "deg)")
    })
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["handle", {
      hover: _ctx.applyHandleHoverClass
    }])
  }, null, 2), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Transition"], {
    name: "fade"
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
        class: "tooltip",
        ref: "tooltip",
        style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({
          transform: "rotate(".concat(-_ctx.sliderValueDegrees - _ctx.circleOffset, "deg)"),
          top: "calc(max(calc(".concat(_ctx.tooltipOffset, "px + 34px), calc(").concat(_ctx.tooltipOffset, "px + var(--height) * 1.3)) * -1)")
        })
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default", {}, function () {
        return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.tooltipText), 1)];
      })], 4), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.showTooltip]])];
    }),
    _: 3
  })], 4)], 36));
}
// CONCATENATED MODULE: ./src/vue3-slider.vue?vue&type=template&id=7e75451f

// CONCATENATED MODULE: ./src/utils/validateLength.ts
var lengthRegex = /(\d*\.?\d+)\s?(cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|vmin|vmax|%+)/i;
/* harmony default export */ var validateLength = (function (val) {
  var result = val.match(lengthRegex);
  return result !== null && result.length <= 3;
});
// CONCATENATED MODULE: ./src/props.ts

/* harmony default export */ var src_props = ({
  width: {
    type: String,
    default: "100%",
    validator: validateLength
  },
  height: {
    type: Number,
    default: 6
  },
  color: {
    type: String,
    default: "#FB2727"
  },
  trackColor: {
    type: String,
    default: "#f1f6f828"
  },
  max: {
    type: Number,
    default: 100
  },
  min: {
    type: Number,
    default: 0
  },
  step: {
    type: Number,
    default: 1,
    validator: function validator(val) {
      if (val !== 0) {
        return true;
      } else {
        console.error("[Vue3Slider] Error: Step cannot be 0");
        return false;
      }
    }
  },
  tooltip: {
    type: String,
    default: 'auto'
  },
  tooltipText: {
    type: String,
    default: "%v",
    validator: function validator(val) {
      if (!val.includes("%v")) {
        console.error("[Vue3Slider] Error: tooltip text must contain %v");
        return false;
      }

      return true;
    }
  },
  tooltipColor: {
    type: String,
    default: "#FFFFFF"
  },
  tooltipTextColor: {
    type: String,
    default: "#000000"
  },
  formatTooltip: {
    validator: function validator(val) {
      if (typeof val !== "function") {
        console.error("[Vue3Slider] Error: formatTooltip must be a function");
        return false;
      } else if (typeof val(0) !== "string") {
        console.error("[Vue3Slider] Error: formatTooltip must return a string");
        return false;
      }

      return true;
    }
  },
  orientation: {
    type: String,
    default: "horizontal",
    validator: function validator(val) {
      return val === "horizontal" || val === "vertical" || val === "circular";
    }
  },
  modelValue: {
    type: Number,
    default: 0,
    required: true
  },
  repeat: {
    type: Boolean,
    default: false
  },
  sticky: {
    type: Boolean,
    default: false
  },
  flip: {
    type: Boolean,
    default: false
  },
  circleOffset: {
    type: Number,
    default: 0,
    validator: function validator(val) {
      return val >= 0 && val <= 360;
    }
  }
});
// CONCATENATED MODULE: ./src/store.ts

function useStore(props) {
  // slider dom ref
  var slider = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(document.createElement("div")); // unrounded raw slider value

  var modelValueUnrounded = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(props.modelValue);
  if (props.min !== 0) modelValueUnrounded.value -= props.min;
  var formattedSliderValue = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(0);
  var sliderWidth = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(0);
  var filledWidth = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(0);
  var pixelsPerStep = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(1);
  var sliderRange = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
    var range = 0;

    if (props.min < 0) {
      range = props.max + Math.abs(props.min);
    } else {
      range = props.max - props.min;
    }

    return range;
  });
  var sliderValueDegrees = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
    if (props.orientation !== "circular") return 0;
    var degrees = modelValueUnrounded.value / (sliderRange.value / 360);
    return props.flip ? -degrees : degrees;
  });
  var holding = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(false);
  var store = {
    slider: slider,
    modelValueUnrounded: modelValueUnrounded,
    formattedSliderValue: formattedSliderValue,
    filledWidth: filledWidth,
    pixelsPerStep: pixelsPerStep,
    sliderRange: sliderRange,
    sliderValueDegrees: sliderValueDegrees,
    sliderWidth: sliderWidth,
    holding: holding
  };
  return store;
}
// CONCATENATED MODULE: ./src/hooks/observers.ts
 // filled width (observers slider element)

function useFilledWidthObserver(store, props) {
  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watchEffect"])(function () {
    store.filledWidth.value = getNewFilledWidth(store, props);
  });
  var observer = new ResizeObserver(function (entries) {
    store.filledWidth.value = getNewFilledWidth(store, props);
    store.sliderWidth.value = store.slider.value ? props.orientation === "vertical" ? store.slider.value.clientHeight : store.slider.value.clientWidth : 0;

    if (store.slider.value !== entries[0].target && store.slider.value instanceof Element) {
      observer.unobserve(entries[0].target);
      observer.observe(store.slider.value);
    }
  });
  if (store.slider.value) observer.observe(store.slider.value);
}

function getNewFilledWidth(store, props) {
  var slider = store.slider;
  if (!slider.value) return 0;
  var sliderWidth = props.orientation === "vertical" ? slider.value.clientHeight : slider.value.clientWidth;
  store.pixelsPerStep.value = sliderWidth / store.sliderRange.value; // clamp value between 0 and the maximum width of the slider

  var clamped = Math.max(Math.min(store.modelValueUnrounded.value * store.pixelsPerStep.value, sliderWidth), 0);
  return clamped;
} // tooltip


function useTooltipObserver(tooltip, tooltipWidth) {
  var observer = new ResizeObserver(function (entries) {
    if (tooltip.value) {
      tooltipWidth.value = tooltip.value.clientWidth;

      if (tooltip.value !== entries[0].target) {
        observer.unobserve(entries[0].target);
        if (tooltip.value) observer.observe(tooltip.value);
      }
    }
  });
  if (tooltip.value) observer.observe(tooltip.value);
}
// CONCATENATED MODULE: ./src/hooks/useKeyboardControls.ts
/* harmony default export */ var useKeyboardControls = (function (store, props, updateModelValue) {
  var calculateValueFromDiff = function calculateValueFromDiff(diff) {
    var newVal = store.modelValueUnrounded.value + diff;

    if (newVal <= 0) {
      updateModelValue(0);
    } else if (newVal >= store.sliderRange.value) {
      updateModelValue(store.sliderRange.value);
    } else {
      updateModelValue(newVal);
    }
  };

  var handleKeydown = function handleKeydown(e) {
    switch (e.key) {
      case "ArrowRight":
      case "ArrowUp":
        calculateValueFromDiff(props.step);
        break;

      case "ArrowLeft":
      case "ArrowDown":
        calculateValueFromDiff(-props.step);
        break;

      default:
        break;
    }
  };

  return {
    handleKeydown: handleKeydown
  };
});
// CONCATENATED MODULE: ./src/hooks/useModelValue.ts

/* harmony default export */ var useModelValue = (function (store, props, emit) {
  // watchers to update slider value if modelValue is changed from outside component
  var modelValueRef = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(props.modelValue);
  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watchEffect"])(function () {
    return modelValueRef.value = props.modelValue;
  });
  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(modelValueRef, function (val) {
    if (store.formattedSliderValue.value !== val) {
      var newValue = 0;

      if (props.min < 0) {
        newValue = val + Math.abs(props.min);
      } else {
        newValue = val - props.min;
      }

      if (newValue > store.sliderRange.value) newValue = store.sliderRange.value;
      updateModelValue(newValue);
    }
  }); // format model value to fit within min and max defined in props

  var formatModelValue = function formatModelValue(val) {
    var step = props.step;
    var roundedVal = 0; // round number to the nearest multiple of step (round up or down)

    if (val > 0) {
      roundedVal = Math.round(val / step) * step;
    } else {
      roundedVal = 0;
    }

    return roundedVal + props.min;
  }; // update model value and related refs


  var updateModelValue = function updateModelValue(val) {
    store.formattedSliderValue.value = formatModelValue(val); // make slider stick to nearest multiple of step

    if (props.sticky) {
      store.modelValueUnrounded.value = store.formattedSliderValue.value - props.min;
    } else {
      store.modelValueUnrounded.value = val;
    }

    emit("update:modelValue", store.formattedSliderValue.value);
    emit("change", store.formattedSliderValue.value);
  };

  return {
    formatModelValue: formatModelValue,
    updateModelValue: updateModelValue,
    modelValueRef: modelValueRef
  };
});
// CONCATENATED MODULE: ./src/hooks/useDragHandler.ts
/* harmony default export */ var useDragHandler = (function (store, props, emit, updateModelValue) {
  var previousSliderValue = store.formattedSliderValue.value;

  var calcSliderValue = function calcSliderValue(mouseX, mouseY, dragging) {
    var rect = store.slider.value.getBoundingClientRect();
    var value = 0;

    if (props.orientation === "horizontal") {
      value = (mouseX - rect.x) / store.pixelsPerStep.value;

      if (props.flip) {
        value = store.sliderRange.value - value;
      }
    } else if (props.orientation === "vertical") {
      value = (rect.y + rect.height - mouseY) / store.pixelsPerStep.value;

      if (props.flip) {
        value = store.sliderRange.value - value;
      }
    } else {
      var sliderX = mouseX - rect.x;
      var sliderY = mouseY - rect.y;
      var centerX = rect.width / 2;
      var centerY = rect.height / 2;
      var gradient = (sliderY - centerY) / (sliderX - centerX);
      var angle = Math.atan(gradient) * 180 / Math.PI; // correct angle in circle quadrants
      // right

      if (sliderX >= centerX) {
        // top
        if (sliderY < centerY) {
          if (Math.ceil(angle) === 180) {
            angle = 0;
          } else {
            angle = 90 - Math.abs(angle);
          }
        } else {
          // bottom
          angle += 90;
        } // left

      } else {
        // top
        if (sliderY < centerY) {
          angle = 270 + angle;
        } else {
          // bottom
          angle = 270 + angle;
        }
      }

      var valPerDeg = store.sliderRange.value / 360;
      value = angle * valPerDeg - props.circleOffset * valPerDeg;

      if (value < 0) {
        value += store.sliderRange.value;
      }

      if (props.flip) {
        value = store.sliderRange.value - value;
      } // stop value from going to 0 when at max


      if (!props.repeat && dragging) {
        var diff = Math.abs(value - previousSliderValue);

        if (diff > valPerDeg * 30) {
          value = previousSliderValue;
        }
      }
    }

    previousSliderValue = value;
    return value;
  }; // dragging handlers
  // ------------------------------------------------------------------------


  var draggingHandler = function draggingHandler(e) {
    // check what event has been triggered
    var tap;

    if (e.type === "mousemove") {
      e = e;
      tap = e;
    } else {
      e = e;
      if (e.touches.length > 1) return;
      tap = e.touches[0];
    }

    if (store.holding.value) {
      var rect = store.slider.value.getBoundingClientRect();
      var tapPosInsideSlider = props.orientation === "vertical" ? rect.y + rect.height - tap.pageY : tap.pageX - rect.x;

      if (props.orientation === "circular" || tapPosInsideSlider >= 0 && tapPosInsideSlider <= store.sliderWidth.value) {
        updateModelValue(calcSliderValue(tap.pageX, tap.pageY, true));
      }

      emit("dragging", store.formattedSliderValue.value, tap);
    }
  };

  var releaseDragHandler = function releaseDragHandler(e) {
    if (store.holding.value) store.holding.value = false;

    if (e.type === "mouseup") {
      window.removeEventListener("mouseup", releaseDragHandler);
      window.removeEventListener("mousemove", draggingHandler);
    } else {
      window.removeEventListener("touchend", releaseDragHandler);
      window.removeEventListener("touchmove", draggingHandler);
    }

    emit("drag-end", store.formattedSliderValue.value, e);
  }; // ------------------------------------------------------------------------


  var clickHandler = function clickHandler(e) {
    e.preventDefault();
    store.holding.value = true;
    emit("drag-start", store.formattedSliderValue.value, e);

    if (e.type === "touchstart") {
      e = e;
      if (e.touches.length > 1) return;
      var t = e.touches[0]; // do initial slider calculation

      updateModelValue(calcSliderValue(t.pageX, t.pageY, false)); // add event listeners

      window.addEventListener("touchend", releaseDragHandler);
      window.addEventListener("touchmove", draggingHandler);
    } else {
      e = e; // do initial slider calculation

      updateModelValue(calcSliderValue(e.pageX, e.pageY, false)); // add event listeners

      window.addEventListener("mouseup", releaseDragHandler);
      window.addEventListener("mousemove", draggingHandler);
    }
  };

  return {
    clickHandler: clickHandler
  };
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/vue3-slider.vue?vue&type=script&lang=ts







/* harmony default export */ var vue3_slidervue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: "vue3-slider",
  props: src_props,
  setup: function setup(props, _ref) {
    var emit = _ref.emit;

    // error checking
    if (props.modelValue < props.min || props.modelValue > props.max) {
      console.error("[Vue3Slider] Error: value exceeds limits of slider");
    } // validate min and max


    if (props.max <= props.min) {
      console.error("[Vue3Slider] Error: Max value cannot be less than or equal to the min value. This will cause unexpected errors to occur, please fix.");
    } // setup store values


    var store = useStore(props); // setup hooks

    var _useModelValue = useModelValue(store, props, emit),
        updateModelValue = _useModelValue.updateModelValue,
        formatModelValue = _useModelValue.formatModelValue;

    var _useKeyBoardControls = useKeyboardControls(store, props, updateModelValue),
        handleKeydown = _useKeyBoardControls.handleKeydown;

    var _useDragHandler = useDragHandler(store, props, emit, updateModelValue),
        clickHandler = _useDragHandler.clickHandler; // Apply hover styles to handle


    var hovering = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(false);
    var applyHandleHoverClass = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      if (store.holding.value) {
        return true;
      } else {
        return hovering.value;
      }
    }); // tooltip setup

    var tooltip = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(); // replace %v with sliders value in tooltip text

    var tooltipText = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      if (!props.tooltip) return "";
      var stringValue = ""; // if format function is provided then use that
      // else just convert raw value to string

      if (props.formatTooltip !== null && typeof props.formatTooltip === "function") {
        stringValue = props.formatTooltip(store.formattedSliderValue.value || formatModelValue(store.modelValueUnrounded.value));
      } else {
        stringValue = (store.formattedSliderValue.value || formatModelValue(store.modelValueUnrounded.value)).toString();
      }

      return props.tooltipText.replace("%v", stringValue);
    }); // watch tooltip width

    var tooltipWidth = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(0); // calculate tooltip offset

    var tooltipOffset = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      if (!props.tooltip) return 0;
      var width = tooltipWidth.value; // estimate width if it cant be found

      if (props.orientation !== "horizontal") {
        var _tooltip$value;

        width = (_tooltip$value = tooltip.value) === null || _tooltip$value === void 0 ? void 0 : _tooltip$value.clientHeight;

        if (!width) {
          width = 20;
        }

        if (props.orientation !== "vertical") {
          return width;
        }
      } else {
        if (!width) {
          width = 14 + store.formattedSliderValue.value.toString().length * 9;
        } else {
          width += props.height / 3;
        }
      }

      return store.filledWidth.value - width / 2;
    }); // calculate stroke offset for circular slider

    var circumference = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      if (!store.slider.value || props.orientation !== "circular") return 1;
      return 2 * Math.PI * (store.sliderWidth.value / 2);
    });
    var strokeOffset = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      if (props.orientation !== "circular") return 0;
      return (store.sliderRange.value - store.modelValueUnrounded.value) / store.sliderRange.value * circumference.value;
    });
    var vars = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return {
        "--width": props.width,
        "--height": props.height + "px",
        "--color": props.color,
        "--track-color": props.trackColor,
        "--tooltip-color": props.tooltipColor,
        "--tooltip-text-color": props.tooltipTextColor
      };
    }); // start observers when component loads

    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onMounted"])(function () {
      useFilledWidthObserver(store, props);
      useTooltipObserver(tooltip, tooltipWidth);
    });
    return {
      filledWidth: store.filledWidth,
      slider: store.slider,
      holding: store.holding,
      flip: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
        return props.flip;
      }),
      clickHandler: clickHandler,
      handleKeydown: handleKeydown,
      applyHandleHoverClass: applyHandleHoverClass,
      hovering: hovering,
      showTooltip: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
        return props.tooltip === 'always' || (hovering || store.holding) && props.tooltip === 'auto';
      }),
      tooltip: tooltip,
      tooltipText: tooltipText,
      tooltipOffset: tooltipOffset,
      vars: vars,
      circumference: circumference,
      strokeOffset: strokeOffset,
      circleOffset: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
        return props.circleOffset;
      }),
      sliderValueDegrees: store.sliderValueDegrees
    };
  }
}));
// CONCATENATED MODULE: ./src/vue3-slider.vue?vue&type=script&lang=ts
 
// EXTERNAL MODULE: ./src/vue3-slider.vue?vue&type=style&index=0&id=7e75451f&lang=scss
var vue3_slidervue_type_style_index_0_id_7e75451f_lang_scss = __webpack_require__("a142");

// CONCATENATED MODULE: ./src/vue3-slider.vue





vue3_slidervue_type_script_lang_ts.render = render

/* harmony default export */ var vue3_slider = (vue3_slidervue_type_script_lang_ts);
// CONCATENATED MODULE: ./src/entry.esm.ts
// Import vue component
 // Default export is installable instance of component.
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),

/* harmony default export */ var entry_esm = (/*#__PURE__*/(function () {
  // Assign InstallableComponent type
  var installable = vue3_slider; // Attach install function executed by Vue.use()

  installable.install = function (app) {
    app.component('Vue3Slider', installable);
  };

  return installable;
})()); // It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;
// CONCATENATED MODULE: ./src/entry.ts
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// iife/cjs usage extends esm default export - so import it all
 // Attach named exports directly to component. IIFE/CJS will
// only expose one global var, with named exports exposed as properties of
// that global var (eg. plugin.namedExport)

Object.entries(entry_esm_namespaceObject).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      exportName = _ref2[0],
      exported = _ref2[1];

  if (exportName !== 'default') entry_esm[exportName] = exported;
});
/* harmony default export */ var entry = (entry_esm);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (entry);



/***/ })

/******/ });
});
//# sourceMappingURL=vue3-slider.umd.js.map