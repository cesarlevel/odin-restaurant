/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/home.jpg */ "./src/assets/images/home.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html, body {\n    height: 100%;\n    padding: 0;\n    margin: 0;\n    background-color: #ededed;\n    color: #333333\n}\n\nheader {\n    padding: 20px 40px;\n    font-size: 18px;\n    margin-bottom: 10px;\n    position: sticky;\n    top: 0;\n    color: #995C14;\n    display: flex;\n    align-items: center;\n    z-index: 500;\n    background-color: #ededed;\n    justify-content: space-between;\n}\n\nheader.is-scroll {\n    box-shadow: 0 2px 4px rgba(0,0,0,0.15);\n}\n\nfooter {\n    padding: 20px 40px;\n    background-color: #995C14;\n    color: #ffffff;\n    text-align: center;\n}\n\n.logo {\n    border: 2px solid #995C14;\n    position: relative;\n    padding: 10px 20px;\n    display: inline-flex;\n    align-items: center;\n    cursor: pointer;\n    box-shadow: 0 0 0 4px #ededed, 0 0 0 5px #995C14;\n}\n\n.logo span {\n    font-weight: bolder;\n}\n\n.logo i {\n    font-size: 24px;\n    margin-right: 6px;\n}\n\n.logo::before {\n    content: '';\n    position: absolute;\n    \n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    font-family: Georgia, serif;\n}\n\n#content {\n    flex: 2;\n    display: flex;\n    flex-direction: column;\n}\n\nnav {\n    display: flex;\n    justify-content: center;\n    border-bottom: 1px solid #995C14;\n}\n\nnav li {\n    list-style: none;\n    padding: 20px 40px 16px;\n    border-bottom: 4px solid transparent;\n    cursor: pointer;\n    color: #995C14;\n    transition: all ease-in-out 0.2s;\n    box-sizing: border-box;\n    text-transform: capitalize;\n}\n\nnav li:hover {\n    border-bottom: 4px solid #995C1470;\n}\n\nnav li.is-active {\n    border-bottom: 4px solid #995C14;\n}\n\n#page-container {\n    position: relative;\n    overflow: hidden;\n    flex: 2;\n}\n\nsection {\n    position: relative;\n    margin: 0 auto 40px;\n    display: none;\n    opacity: 0;\n    box-sizing: border-box;\n}\n\n@keyframes slideIn {\n    from {\n        top: -20px;\n        opacity: 0;\n    }\n    to {\n        top : 0;\n        opacity: 1;\n    }\n}\n\nsection.is-active {\n    animation-name: slideIn;\n    animation-duration: 0.25s;\n    animation-timing-function: ease-in-out;\n    left: 0;\n    opacity: 1;\n    display: block;\n}\n\nsection .container {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 40px\n}\n\n@keyframes slideOut {\n    from {\n        top: 0;\n        opacity: 1;\n    }\n    to {\n        top : 20px;\n        opacity: 0;\n    }\n}\n\nsection.is-out {\n    animation-name: slideOut;\n    animation-duration: 0.25s;\n    animation-timing-function: ease-in-out;\n    opacity: 0;\n}\n\nsection .container h1.title {\n    color: #995C14;\n    position: relative;\n    display: inline-block;\n}\n\nsection .container h1.title::before {\n    content: '';\n    position: absolute;\n    bottom: -10px;\n    width: 50%;\n    height: 4px;\n    background: #995C14;\n}\n\n/* Home */\n.hero {\n    height: 300px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n    background-position: center;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    -webkit-filter: sepia(100%);\n    filter: sepia(100%);\n    position: relative;\n}\n\n.hero::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: rgb(255,255,255);\n    background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(153,92,16,1) 100%);\n}\n\n.hero h1 {\n    margin: 0;\n    color: #ffffff;\n    font-size: 280%;\n    font-weight: lighter;\n    position: relative;\n    z-index: 100;\n}\n\n.hero button {\n    border: 1px solid #ffffff;\n    color: #ffffff;\n    font-weight: bold;\n    padding: 20px 40px;\n    font-size: 20px;\n    font-family: Georgia, serif;\n    margin-top: 20px;\n    background: transparent;\n    position: relative;\n    z-index: 100;\n    cursor: pointer;\n    transition: all ease-in-out 0.2s;\n}\n\n.hero button:hover {\n    background: #ffffff;\n    color: #995C14;\n}\n\n/* Menu */\n#menu {\n    max-width: 600px;\n    padding: 60px 40px;\n    box-sizing: border-box;\n    margin: 40px auto 0;\n    background: #ffffff;\n    border: 2px solid #995C14;\n    box-shadow: 0 0 0 4px #ededed, 0 0 0 5px #995C14;\n}\n\n#menu h2 {\n    margin: 0;\n    border-bottom: 1px solid;\n    text-align: center;\n    text-transform: uppercase;\n    font-size: 16px;\n    letter-spacing: 4px;\n    padding-bottom: 10px;\n    margin-bottom: 40px;\n}\n\n#menu ul {\n    margin: 0;\n    padding: 0;\n}\n\n#menu ul li {\n    text-align: center;\n    list-style: none;\n}\n\n#menu ul li strong {\n    margin-right: 10px;\n}\n\n#menu ul li + li {\n    margin-top: 40px;\n}\n\n#menu ul li:last-child {\n    margin-bottom: 60px;\n}\n\n#menu ul:last-of-type li:last-child {\n    margin-bottom: 0;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["html, body {\n    height: 100%;\n    padding: 0;\n    margin: 0;\n    background-color: #ededed;\n    color: #333333\n}\n\nheader {\n    padding: 20px 40px;\n    font-size: 18px;\n    margin-bottom: 10px;\n    position: sticky;\n    top: 0;\n    color: #995C14;\n    display: flex;\n    align-items: center;\n    z-index: 500;\n    background-color: #ededed;\n    justify-content: space-between;\n}\n\nheader.is-scroll {\n    box-shadow: 0 2px 4px rgba(0,0,0,0.15);\n}\n\nfooter {\n    padding: 20px 40px;\n    background-color: #995C14;\n    color: #ffffff;\n    text-align: center;\n}\n\n.logo {\n    border: 2px solid #995C14;\n    position: relative;\n    padding: 10px 20px;\n    display: inline-flex;\n    align-items: center;\n    cursor: pointer;\n    box-shadow: 0 0 0 4px #ededed, 0 0 0 5px #995C14;\n}\n\n.logo span {\n    font-weight: bolder;\n}\n\n.logo i {\n    font-size: 24px;\n    margin-right: 6px;\n}\n\n.logo::before {\n    content: '';\n    position: absolute;\n    \n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    font-family: Georgia, serif;\n}\n\n#content {\n    flex: 2;\n    display: flex;\n    flex-direction: column;\n}\n\nnav {\n    display: flex;\n    justify-content: center;\n    border-bottom: 1px solid #995C14;\n}\n\nnav li {\n    list-style: none;\n    padding: 20px 40px 16px;\n    border-bottom: 4px solid transparent;\n    cursor: pointer;\n    color: #995C14;\n    transition: all ease-in-out 0.2s;\n    box-sizing: border-box;\n    text-transform: capitalize;\n}\n\nnav li:hover {\n    border-bottom: 4px solid #995C1470;\n}\n\nnav li.is-active {\n    border-bottom: 4px solid #995C14;\n}\n\n#page-container {\n    position: relative;\n    overflow: hidden;\n    flex: 2;\n}\n\nsection {\n    position: relative;\n    margin: 0 auto 40px;\n    display: none;\n    opacity: 0;\n    box-sizing: border-box;\n}\n\n@keyframes slideIn {\n    from {\n        top: -20px;\n        opacity: 0;\n    }\n    to {\n        top : 0;\n        opacity: 1;\n    }\n}\n\nsection.is-active {\n    animation-name: slideIn;\n    animation-duration: 0.25s;\n    animation-timing-function: ease-in-out;\n    left: 0;\n    opacity: 1;\n    display: block;\n}\n\nsection .container {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 40px\n}\n\n@keyframes slideOut {\n    from {\n        top: 0;\n        opacity: 1;\n    }\n    to {\n        top : 20px;\n        opacity: 0;\n    }\n}\n\nsection.is-out {\n    animation-name: slideOut;\n    animation-duration: 0.25s;\n    animation-timing-function: ease-in-out;\n    opacity: 0;\n}\n\nsection .container h1.title {\n    color: #995C14;\n    position: relative;\n    display: inline-block;\n}\n\nsection .container h1.title::before {\n    content: '';\n    position: absolute;\n    bottom: -10px;\n    width: 50%;\n    height: 4px;\n    background: #995C14;\n}\n\n/* Home */\n.hero {\n    height: 300px;\n    background-image: url(./assets/images/home.jpg);\n    background-size: cover;\n    background-position: center;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    -webkit-filter: sepia(100%);\n    filter: sepia(100%);\n    position: relative;\n}\n\n.hero::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: rgb(255,255,255);\n    background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(153,92,16,1) 100%);\n}\n\n.hero h1 {\n    margin: 0;\n    color: #ffffff;\n    font-size: 280%;\n    font-weight: lighter;\n    position: relative;\n    z-index: 100;\n}\n\n.hero button {\n    border: 1px solid #ffffff;\n    color: #ffffff;\n    font-weight: bold;\n    padding: 20px 40px;\n    font-size: 20px;\n    font-family: Georgia, serif;\n    margin-top: 20px;\n    background: transparent;\n    position: relative;\n    z-index: 100;\n    cursor: pointer;\n    transition: all ease-in-out 0.2s;\n}\n\n.hero button:hover {\n    background: #ffffff;\n    color: #995C14;\n}\n\n/* Menu */\n#menu {\n    max-width: 600px;\n    padding: 60px 40px;\n    box-sizing: border-box;\n    margin: 40px auto 0;\n    background: #ffffff;\n    border: 2px solid #995C14;\n    box-shadow: 0 0 0 4px #ededed, 0 0 0 5px #995C14;\n}\n\n#menu h2 {\n    margin: 0;\n    border-bottom: 1px solid;\n    text-align: center;\n    text-transform: uppercase;\n    font-size: 16px;\n    letter-spacing: 4px;\n    padding-bottom: 10px;\n    margin-bottom: 40px;\n}\n\n#menu ul {\n    margin: 0;\n    padding: 0;\n}\n\n#menu ul li {\n    text-align: center;\n    list-style: none;\n}\n\n#menu ul li strong {\n    margin-right: 10px;\n}\n\n#menu ul li + li {\n    margin-top: 40px;\n}\n\n#menu ul li:last-child {\n    margin-bottom: 60px;\n}\n\n#menu ul:last-of-type li:last-child {\n    margin-bottom: 0;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/data/menu.js":
/*!**************************!*\
  !*** ./src/data/menu.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([
    {
        name: 'Starters',
        items: [
            {
                name: 'Lobster bisque',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                price: 8
            },
            {
                name: 'House salad',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                price: 12
            },
            {
                name: 'Carpaccio di polipo',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                price: 6
            }
        ]
    },
    {
        name: 'Entrees',
        items: [
            {
                name: 'Filet au poivre',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                price: 24
            },
            {
                name: 'Thai salmon and shrimp',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                price: 32
            },
            {
                name: 'Chicken Pasquale',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                price: 18
            }
        ]
    },
    {
        name: 'Desserts',
        items: [
            {
                name: 'Honey lemon panna cotta',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                price: 6
            },
            {
                name: 'Malted mousse cake',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                price: 8
            },
            {
                name: 'Dark chocolate chesse cake',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                price: 6
            }
        ]
    } 
]);

/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const html = `
    <div class="container">
    <h1 class="title">Contact us</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur, risus ut feugiat posuere, ligula tortor tincidunt ante, at pulvinar dui tellus sed velit. Duis sed nunc risus. Maecenas ac neque dolor. Suspendisse luctus sem vitae leo posuere, ac suscipit orci finibus. Praesent viverra ullamcorper quam id blandit. Suspendisse ante velit, semper et dictum ac, malesuada vitae sem. Proin a mauris dignissim, pretium est eget, bibendum lorem.</p>
    <address>
        6696 Rue de Saint-Vallier<br>  
        Montreal, QC, H2S 2P7<br>
        +1 124-647-8878<br>
        reservations@odinrestaurant.com
    </address>
    <p><strong>Open for brunch Wedenesday to Sunday 9h - 14h</strong></p>
`;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    title: 'contact',
    icon: '<i class="uil uil-comment-medical"></i>',
    html,
});


/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const html = `
    <div class="hero">
        <h1>Discover fine Dinning</h1>
        <button>Check our menu</button>
    </div>
    <div class="container">
        <h1 class="title">About us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur, risus ut feugiat posuere, ligula tortor tincidunt ante, at pulvinar dui tellus sed velit. Duis sed nunc risus. Maecenas ac neque dolor. Suspendisse luctus sem vitae leo posuere, ac suscipit orci finibus. Praesent viverra ullamcorper quam id blandit. Suspendisse ante velit, semper et dictum ac, malesuada vitae sem. Proin a mauris dignissim, pretium est eget, bibendum lorem. Morbi feugiat, nisl non viverra aliquam, orci dui tincidunt enim, et molestie libero ex eget nulla. Nulla ullamcorper posuere ante, non fringilla nibh euismod sit amet. Phasellus velit arcu, tristique sed pellentesque euismod, sodales eget sem.</p>
        <p>Mauris eget libero dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed iaculis ipsum eu accumsan pretium. Nulla egestas quam ultrices vestibulum ornare. Etiam sollicitudin imperdiet ex quis consectetur. Nam blandit dui quis facilisis rhoncus. Sed consequat velit sit amet ornare bibendum. Nulla facilisi. Sed ac eros iaculis lacus auctor dapibus. Aliquam erat volutpat. Vestibulum tempus augue nec eros rhoncus accumsan. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
    </div>
`;

const checkMenu = (handler) => {
    const el = document.querySelector('.hero button');
    el.addEventListener('click', () => {
        handler('menu');
    });
} 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    title: 'home',
    icon: '<i class="uil uil-house-user"></i>',
    events: [
        {
            type: 'navigation',
            func: checkMenu,
        }
    ],
    html,
});

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/pages/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/pages/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/pages/contact.js");




class Pages {
    constructor({title, icon = '', events = [], html} = {}) {
        this.title = title;
        this.icon = icon;
        this.events = events;
        this.html = html;
    }

    get hasEvents() {
        return Boolean(this.events.length);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([
    new Pages(_home__WEBPACK_IMPORTED_MODULE_0__["default"]), 
    new Pages(_menu__WEBPACK_IMPORTED_MODULE_1__["default"]), 
    new Pages(_contact__WEBPACK_IMPORTED_MODULE_2__["default"])
]);


/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/menu */ "./src/data/menu.js");


const html = `
    <div class="container">
        <h1 class="title">Our menu</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur, risus ut feugiat posuere, ligula tortor tincidunt ante, at pulvinar dui tellus sed velit. Duis sed nunc risus. Maecenas ac neque dolor. Suspendisse luctus sem vitae leo posuere, ac suscipit orci finibus. Praesent viverra ullamcorper quam id blandit. Suspendisse ante velit, semper et dictum ac, malesuada vitae sem. Proin a mauris dignissim, pretium est eget, bibendum lorem.</p>
        <div id="menu">
            ${
                _data_menu__WEBPACK_IMPORTED_MODULE_0__["default"].map(menuSection => {
                    return `
                        <h2>${menuSection.name}</h2>
                        <ul>
                            ${
                                menuSection.items.map(item => {
                                    return `
                                        <li>
                                            <p><strong>${item.name}</strong><i>${priceFormat(item.price)}</i></p>
                                            <p>${item.description}</p>
                                        </li>
                                    `;
                                }).join('')
                            }
                        </ul>
                    `;
                }).join('')
            }
        </div>
    </div>
`;

function priceFormat(amount) {
    return new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(amount);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    title: 'menu',
    icon: '<i class="uil uil-utensils"></i>',
    html,
});

/***/ }),

/***/ "./src/state.js":
/*!**********************!*\
  !*** ./src/state.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class WebsiteState {
    constructor() {
        this.menu = [];
        this.currentPage = 'home';
    }

    setCurrentPage(page) {
        this.currentPage = page;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new WebsiteState());

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages */ "./src/pages/index.js");


class WebsiteView {
    constructor(pages, menu) {
        this.pages = pages;
        this.menu = menu;
        this.DOM = {};
    }

    init() {
        this.renderContent();
        this.renderHeader();
        this.renderNavigation();
        this.renderPages();
        this.renderFooter();
        this.bindLocalListeners();
    }

    renderContent() {
        document.body.innerHTML = `
            <div id="content"></div>
        `;
        this.DOM.content = document.querySelector('#content');
    }

    renderHeader() {
        const html = `
            <header>
                <div class="logo">
                    <i class="uil uil-restaurant"></i> <span>Odin</span>Restaurant
                </div>
                <div><i class="uil uil-phone-volume"></i> +1 124-647-8878</div>
            </header>
        `;
        this.DOM.content.insertAdjacentHTML('afterbegin', html);

        this.DOM.header = document.querySelector('header');
        this.DOM.logo = document.querySelector('.logo');
    }

    renderNavigation() {
        this.DOM.header.insertAdjacentHTML('afterend', `<nav></nav>`);
        this.DOM.contentNav = document.querySelector('nav');

        this.pages.forEach((page, i) => {
            this.DOM.contentNav.insertAdjacentHTML('beforeend', `
                <li data-title="${page.title}" class="${!i ? 'is-active' : ''}">
                    ${page.icon} ${page.title}
                </li>
            `);
        });
    
        this.DOM.navItems = document.querySelectorAll('nav li');
    }

    renderPages() {
        this.DOM.contentNav.insertAdjacentHTML('afterend', `<div id="pages"></div>`);
        this.DOM.contentPages = document.querySelector('#pages');

        this.pages.forEach((page, i) => {
            this.DOM.contentPages.insertAdjacentHTML('beforeend', `
                <section data-page="${page.title}" class="${!i ? 'is-active' : ''}">
                    ${page.html}
                </section>
            `);
        });

        this.DOM.renderedPages = document.querySelectorAll('section');
    }

    renderFooter() {
        const year = new Date().getFullYear();
        const html = `
            <footer>OdinRestaurant<i class="uil uil-registered"></i> ${year}</footer>
        `;
        
        document.body.insertAdjacentHTML('beforeend', html);
        this.DOM.footer = document.querySelector('footer');
    }

    bindNavigationListeners(handler) {
        // Header
        this.DOM.logo.addEventListener('click', () => {
            handler('home');
        });
        // Nav
        this.DOM.navItems.forEach(navItem => {
            navItem.addEventListener('click', function(e) {
                e.stopPropagation();
                handler(this.dataset.title);
            });
        });
        // Pages
        this.pages.forEach((page, i) => { 
            if (page.hasEvents) {
                page.events.forEach(event => {
                    if (event.type === 'navigation') {
                        event.func(handler)
                    }
                }); 
            }
        });
    }

    bindLocalListeners() {
        document.addEventListener('scroll', () => {
            let {scrollY} = window;
            if (scrollY >= 92) {
                this.DOM.header.classList.add('is-scroll');
            } else {
                this.DOM.header.classList.remove('is-scroll');
            }
        });
    }

    goToPage(title, prevPage) {
        this.DOM.navItems.forEach(navItem => navItem.classList.remove('is-active'));
        [...this.DOM.navItems]
            .find(navItem => navItem.dataset.title === title)
            .classList.add('is-active');
        
        prevPage.classList.add('is-out');

        const selectedPage = [...this.DOM.renderedPages].find(page => page.dataset.page === title);

        setTimeout(() => {
            this.DOM.renderedPages.forEach(page => {
                page.classList.remove('is-out');
                page.classList.remove('is-active');
            });
            selectedPage.classList.add('is-active');
        }, 250);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new WebsiteView(_pages__WEBPACK_IMPORTED_MODULE_0__["default"]));

/***/ }),

/***/ "./src/assets/images/home.jpg":
/*!************************************!*\
  !*** ./src/assets/images/home.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "66cba9b847b4bf6f9264.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/state.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/view.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




class Website {
    constructor(websiteState, websiteView) {
        this.websiteState = websiteState;
        this.websiteView = websiteView;
        this.init();

        this.websiteView.bindNavigationListeners(this.handleNavigationActions.bind(this));
    }

    init() {
        this.websiteView.init();
    }

    handleNavigationActions(title) {
        if (this.websiteState.currentPage != title) {
            const prevPage = [...this.websiteView.DOM.renderedPages]
                .find(page => page.dataset.page === this.websiteState.currentPage);

            this.websiteView.goToPage(title, prevPage);
            this.websiteState.setCurrentPage(title);
        }
    }
}

const website = new Website(_state__WEBPACK_IMPORTED_MODULE_0__["default"], _view__WEBPACK_IMPORTED_MODULE_1__["default"]);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLEtBQUssTUFBTSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLFVBQVUsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxV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Q0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7O0FDckJtQztBQUNGO0FBQ1o7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEIsOENBQVksRUFBRSw2Q0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdC12ZXIyLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXJlc3QtdmVyMi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0LXZlcjIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4tcmVzdC12ZXIyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0LXZlcjIvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0LXZlcjIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0LXZlcjIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tcmVzdC12ZXIyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tcmVzdC12ZXIyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tcmVzdC12ZXIyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0LXZlcjIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3QtdmVyMi8uL3NyYy9kYXRhL21lbnUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0LXZlcjIvLi9zcmMvcGFnZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3QtdmVyMi8uL3NyYy9wYWdlcy9ob21lLmpzIiwid2VicGFjazovL29kaW4tcmVzdC12ZXIyLy4vc3JjL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tcmVzdC12ZXIyLy4vc3JjL3BhZ2VzL21lbnUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0LXZlcjIvLi9zcmMvc3RhdGUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0LXZlcjIvLi9zcmMvdmlldy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3QtdmVyMi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXJlc3QtdmVyMi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXJlc3QtdmVyMi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0LXZlcjIvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXJlc3QtdmVyMi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tcmVzdC12ZXIyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0LXZlcjIvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0LXZlcjIvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0LXZlcjIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ltYWdlcy9ob21lLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsIGJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcXG4gICAgY29sb3I6ICMzMzMzMzNcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgcGFkZGluZzogMjBweCA0MHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogMDtcXG4gICAgY29sb3I6ICM5OTVDMTQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHotaW5kZXg6IDUwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5oZWFkZXIuaXMtc2Nyb2xsIHtcXG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwwLDAsMC4xNSk7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIHBhZGRpbmc6IDIwcHggNDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk5NUMxNDtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmxvZ28ge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjOTk1QzE0O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm94LXNoYWRvdzogMCAwIDAgNHB4ICNlZGVkZWQsIDAgMCAwIDVweCAjOTk1QzE0O1xcbn1cXG5cXG4ubG9nbyBzcGFuIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLmxvZ28gaSB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA2cHg7XFxufVxcblxcbi5sb2dvOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIHNlcmlmO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGZsZXg6IDI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbm5hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzk5NUMxNDtcXG59XFxuXFxubmF2IGxpIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZzogMjBweCA0MHB4IDE2cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogIzk5NUMxNDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuMnM7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbn1cXG5cXG5uYXYgbGk6aG92ZXIge1xcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzk5NUMxNDcwO1xcbn1cXG5cXG5uYXYgbGkuaXMtYWN0aXZlIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICM5OTVDMTQ7XFxufVxcblxcbiNwYWdlLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgZmxleDogMjtcXG59XFxuXFxuc2VjdGlvbiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luOiAwIGF1dG8gNDBweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZUluIHtcXG4gICAgZnJvbSB7XFxuICAgICAgICB0b3A6IC0yMHB4O1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgICB0byB7XFxuICAgICAgICB0b3AgOiAwO1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbn1cXG5cXG5zZWN0aW9uLmlzLWFjdGl2ZSB7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZUluO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMjVzO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG4gICAgbGVmdDogMDtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbnNlY3Rpb24gLmNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogODAwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBwYWRkaW5nOiA0MHB4XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGVPdXQge1xcbiAgICBmcm9tIHtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgdG9wIDogMjBweDtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG59XFxuXFxuc2VjdGlvbi5pcy1vdXQge1xcbiAgICBhbmltYXRpb24tbmFtZTogc2xpZGVPdXQ7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4yNXM7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG5zZWN0aW9uIC5jb250YWluZXIgaDEudGl0bGUge1xcbiAgICBjb2xvcjogIzk5NUMxNDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbnNlY3Rpb24gLmNvbnRhaW5lciBoMS50aXRsZTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAtMTBweDtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiA0cHg7XFxuICAgIGJhY2tncm91bmQ6ICM5OTVDMTQ7XFxufVxcblxcbi8qIEhvbWUgKi9cXG4uaGVybyB7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIC13ZWJraXQtZmlsdGVyOiBzZXBpYSgxMDAlKTtcXG4gICAgZmlsdGVyOiBzZXBpYSgxMDAlKTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uaGVybzo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LDI1NSwyNTUpO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjU1LDI1NSwyNTUsMCkgMCUsIHJnYmEoMTUzLDkyLDE2LDEpIDEwMCUpO1xcbn1cXG5cXG4uaGVybyBoMSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGZvbnQtc2l6ZTogMjgwJTtcXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMTAwO1xcbn1cXG5cXG4uaGVybyBidXR0b24ge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmc6IDIwcHggNDBweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgc2VyaWY7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDEwMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC4ycztcXG59XFxuXFxuLmhlcm8gYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gICAgY29sb3I6ICM5OTVDMTQ7XFxufVxcblxcbi8qIE1lbnUgKi9cXG4jbWVudSB7XFxuICAgIG1heC13aWR0aDogNjAwcHg7XFxuICAgIHBhZGRpbmc6IDYwcHggNDBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiA0MHB4IGF1dG8gMDtcXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzk5NUMxNDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDAgNHB4ICNlZGVkZWQsIDAgMCAwIDVweCAjOTk1QzE0O1xcbn1cXG5cXG4jbWVudSBoMiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxufVxcblxcbiNtZW51IHVsIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4jbWVudSB1bCBsaSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuI21lbnUgdWwgbGkgc3Ryb25nIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4jbWVudSB1bCBsaSArIGxpIHtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG59XFxuXFxuI21lbnUgdWwgbGk6bGFzdC1jaGlsZCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XFxufVxcblxcbiNtZW51IHVsOmxhc3Qtb2YtdHlwZSBsaTpsYXN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsU0FBUztJQUNULHlCQUF5QjtJQUN6QjtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLE1BQU07SUFDTixjQUFjO0lBQ2QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdEQUFnRDtBQUNwRDs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLE9BQU87SUFDUCxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLG9DQUFvQztJQUNwQyxlQUFlO0lBQ2YsY0FBYztJQUNkLGdDQUFnQztJQUNoQyxzQkFBc0I7SUFDdEIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixPQUFPO0FBQ1g7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsVUFBVTtJQUNkO0lBQ0E7UUFDSSxPQUFPO1FBQ1AsVUFBVTtJQUNkO0FBQ0o7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLHNDQUFzQztJQUN0QyxPQUFPO0lBQ1AsVUFBVTtJQUNWLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLE1BQU07UUFDTixVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7UUFDVixVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4Qix5QkFBeUI7SUFDekIsc0NBQXNDO0lBQ3RDLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsVUFBVTtJQUNWLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBRUEsU0FBUztBQUNUO0lBQ0ksYUFBYTtJQUNiLHlEQUErQztJQUMvQyxzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNSLDRCQUE0QjtJQUM1QixrRkFBa0Y7QUFDdEY7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsY0FBYztJQUNkLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZUFBZTtJQUNmLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBLFNBQVM7QUFDVDtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGdEQUFnRDtBQUNwRDs7QUFFQTtJQUNJLFNBQVM7SUFDVCx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLCBib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZWQ7XFxuICAgIGNvbG9yOiAjMzMzMzMzXFxufVxcblxcbmhlYWRlciB7XFxuICAgIHBhZGRpbmc6IDIwcHggNDBweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDA7XFxuICAgIGNvbG9yOiAjOTk1QzE0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB6LWluZGV4OiA1MDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuaGVhZGVyLmlzLXNjcm9sbCB7XFxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsMCwwLDAuMTUpO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBwYWRkaW5nOiAyMHB4IDQwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5OTVDMTQ7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5sb2dvIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzk5NUMxNDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDRweCAjZWRlZGVkLCAwIDAgMCA1cHggIzk5NUMxNDtcXG59XFxuXFxuLmxvZ28gc3BhbiB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi5sb2dvIGkge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIG1hcmdpbi1yaWdodDogNnB4O1xcbn1cXG5cXG4ubG9nbzo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgXFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBzZXJpZjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBmbGV4OiAyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5uYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5OTVDMTQ7XFxufVxcblxcbm5hdiBsaSB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDIwcHggNDBweCAxNnB4O1xcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6ICM5OTVDMTQ7XFxuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjJzO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG59XFxuXFxubmF2IGxpOmhvdmVyIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICM5OTVDMTQ3MDtcXG59XFxuXFxubmF2IGxpLmlzLWFjdGl2ZSB7XFxuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjOTk1QzE0O1xcbn1cXG5cXG4jcGFnZS1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGZsZXg6IDI7XFxufVxcblxcbnNlY3Rpb24ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbjogMCBhdXRvIDQwcHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGVJbiB7XFxuICAgIGZyb20ge1xcbiAgICAgICAgdG9wOiAtMjBweDtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgdG9wIDogMDtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG59XFxuXFxuc2VjdGlvbi5pcy1hY3RpdmUge1xcbiAgICBhbmltYXRpb24tbmFtZTogc2xpZGVJbjtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjI1cztcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxuICAgIGxlZnQ6IDA7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5zZWN0aW9uIC5jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgcGFkZGluZzogNDBweFxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlT3V0IHtcXG4gICAgZnJvbSB7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICAgIHRvcCA6IDIwcHg7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxufVxcblxcbnNlY3Rpb24uaXMtb3V0IHtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlT3V0O1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMjVzO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuc2VjdGlvbiAuY29udGFpbmVyIGgxLnRpdGxlIHtcXG4gICAgY29sb3I6ICM5OTVDMTQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG5zZWN0aW9uIC5jb250YWluZXIgaDEudGl0bGU6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogLTEwcHg7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDogNHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjOTk1QzE0O1xcbn1cXG5cXG4vKiBIb21lICovXFxuLmhlcm8ge1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3NldHMvaW1hZ2VzL2hvbWUuanBnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgLXdlYmtpdC1maWx0ZXI6IHNlcGlhKDEwMCUpO1xcbiAgICBmaWx0ZXI6IHNlcGlhKDEwMCUpO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5oZXJvOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsMjU1LDI1NSk7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyNTUsMjU1LDI1NSwwKSAwJSwgcmdiYSgxNTMsOTIsMTYsMSkgMTAwJSk7XFxufVxcblxcbi5oZXJvIGgxIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgZm9udC1zaXplOiAyODAlO1xcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAxMDA7XFxufVxcblxcbi5oZXJvIGJ1dHRvbiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZzogMjBweCA0MHB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBzZXJpZjtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMTAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjJzO1xcbn1cXG5cXG4uaGVybyBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgICBjb2xvcjogIzk5NUMxNDtcXG59XFxuXFxuLyogTWVudSAqL1xcbiNtZW51IHtcXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcXG4gICAgcGFkZGluZzogNjBweCA0MHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDQwcHggYXV0byAwO1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjOTk1QzE0O1xcbiAgICBib3gtc2hhZG93OiAwIDAgMCA0cHggI2VkZWRlZCwgMCAwIDAgNXB4ICM5OTVDMTQ7XFxufVxcblxcbiNtZW51IGgyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG59XFxuXFxuI21lbnUgdWwge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbiNtZW51IHVsIGxpIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4jbWVudSB1bCBsaSBzdHJvbmcge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbiNtZW51IHVsIGxpICsgbGkge1xcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcbn1cXG5cXG4jbWVudSB1bCBsaTpsYXN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcXG59XFxuXFxuI21lbnUgdWw6bGFzdC1vZi10eXBlIGxpOmxhc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgW1xuICAgIHtcbiAgICAgICAgbmFtZTogJ1N0YXJ0ZXJzJyxcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnTG9ic3RlciBiaXNxdWUnLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuJyxcbiAgICAgICAgICAgICAgICBwcmljZTogOFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnSG91c2Ugc2FsYWQnLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuJyxcbiAgICAgICAgICAgICAgICBwcmljZTogMTJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ0NhcnBhY2NpbyBkaSBwb2xpcG8nLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuJyxcbiAgICAgICAgICAgICAgICBwcmljZTogNlxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdFbnRyZWVzJyxcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnRmlsZXQgYXUgcG9pdnJlJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLicsXG4gICAgICAgICAgICAgICAgcHJpY2U6IDI0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdUaGFpIHNhbG1vbiBhbmQgc2hyaW1wJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLicsXG4gICAgICAgICAgICAgICAgcHJpY2U6IDMyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdDaGlja2VuIFBhc3F1YWxlJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLicsXG4gICAgICAgICAgICAgICAgcHJpY2U6IDE4XG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0Rlc3NlcnRzJyxcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnSG9uZXkgbGVtb24gcGFubmEgY290dGEnLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuJyxcbiAgICAgICAgICAgICAgICBwcmljZTogNlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnTWFsdGVkIG1vdXNzZSBjYWtlJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLicsXG4gICAgICAgICAgICAgICAgcHJpY2U6IDhcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ0RhcmsgY2hvY29sYXRlIGNoZXNzZSBjYWtlJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLicsXG4gICAgICAgICAgICAgICAgcHJpY2U6IDZcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0gXG5dOyIsImNvbnN0IGh0bWwgPSBgXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgIDxoMSBjbGFzcz1cInRpdGxlXCI+Q29udGFjdCB1czwvaDE+XG4gICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTnVsbGFtIGNvbnNlY3RldHVyLCByaXN1cyB1dCBmZXVnaWF0IHBvc3VlcmUsIGxpZ3VsYSB0b3J0b3IgdGluY2lkdW50IGFudGUsIGF0IHB1bHZpbmFyIGR1aSB0ZWxsdXMgc2VkIHZlbGl0LiBEdWlzIHNlZCBudW5jIHJpc3VzLiBNYWVjZW5hcyBhYyBuZXF1ZSBkb2xvci4gU3VzcGVuZGlzc2UgbHVjdHVzIHNlbSB2aXRhZSBsZW8gcG9zdWVyZSwgYWMgc3VzY2lwaXQgb3JjaSBmaW5pYnVzLiBQcmFlc2VudCB2aXZlcnJhIHVsbGFtY29ycGVyIHF1YW0gaWQgYmxhbmRpdC4gU3VzcGVuZGlzc2UgYW50ZSB2ZWxpdCwgc2VtcGVyIGV0IGRpY3R1bSBhYywgbWFsZXN1YWRhIHZpdGFlIHNlbS4gUHJvaW4gYSBtYXVyaXMgZGlnbmlzc2ltLCBwcmV0aXVtIGVzdCBlZ2V0LCBiaWJlbmR1bSBsb3JlbS48L3A+XG4gICAgPGFkZHJlc3M+XG4gICAgICAgIDY2OTYgUnVlIGRlIFNhaW50LVZhbGxpZXI8YnI+ICBcbiAgICAgICAgTW9udHJlYWwsIFFDLCBIMlMgMlA3PGJyPlxuICAgICAgICArMSAxMjQtNjQ3LTg4Nzg8YnI+XG4gICAgICAgIHJlc2VydmF0aW9uc0BvZGlucmVzdGF1cmFudC5jb21cbiAgICA8L2FkZHJlc3M+XG4gICAgPHA+PHN0cm9uZz5PcGVuIGZvciBicnVuY2ggV2VkZW5lc2RheSB0byBTdW5kYXkgOWggLSAxNGg8L3N0cm9uZz48L3A+XG5gO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgdGl0bGU6ICdjb250YWN0JyxcbiAgICBpY29uOiAnPGkgY2xhc3M9XCJ1aWwgdWlsLWNvbW1lbnQtbWVkaWNhbFwiPjwvaT4nLFxuICAgIGh0bWwsXG59XG4iLCJjb25zdCBodG1sID0gYFxuICAgIDxkaXYgY2xhc3M9XCJoZXJvXCI+XG4gICAgICAgIDxoMT5EaXNjb3ZlciBmaW5lIERpbm5pbmc8L2gxPlxuICAgICAgICA8YnV0dG9uPkNoZWNrIG91ciBtZW51PC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICA8aDEgY2xhc3M9XCJ0aXRsZVwiPkFib3V0IHVzPC9oMT5cbiAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTnVsbGFtIGNvbnNlY3RldHVyLCByaXN1cyB1dCBmZXVnaWF0IHBvc3VlcmUsIGxpZ3VsYSB0b3J0b3IgdGluY2lkdW50IGFudGUsIGF0IHB1bHZpbmFyIGR1aSB0ZWxsdXMgc2VkIHZlbGl0LiBEdWlzIHNlZCBudW5jIHJpc3VzLiBNYWVjZW5hcyBhYyBuZXF1ZSBkb2xvci4gU3VzcGVuZGlzc2UgbHVjdHVzIHNlbSB2aXRhZSBsZW8gcG9zdWVyZSwgYWMgc3VzY2lwaXQgb3JjaSBmaW5pYnVzLiBQcmFlc2VudCB2aXZlcnJhIHVsbGFtY29ycGVyIHF1YW0gaWQgYmxhbmRpdC4gU3VzcGVuZGlzc2UgYW50ZSB2ZWxpdCwgc2VtcGVyIGV0IGRpY3R1bSBhYywgbWFsZXN1YWRhIHZpdGFlIHNlbS4gUHJvaW4gYSBtYXVyaXMgZGlnbmlzc2ltLCBwcmV0aXVtIGVzdCBlZ2V0LCBiaWJlbmR1bSBsb3JlbS4gTW9yYmkgZmV1Z2lhdCwgbmlzbCBub24gdml2ZXJyYSBhbGlxdWFtLCBvcmNpIGR1aSB0aW5jaWR1bnQgZW5pbSwgZXQgbW9sZXN0aWUgbGliZXJvIGV4IGVnZXQgbnVsbGEuIE51bGxhIHVsbGFtY29ycGVyIHBvc3VlcmUgYW50ZSwgbm9uIGZyaW5naWxsYSBuaWJoIGV1aXNtb2Qgc2l0IGFtZXQuIFBoYXNlbGx1cyB2ZWxpdCBhcmN1LCB0cmlzdGlxdWUgc2VkIHBlbGxlbnRlc3F1ZSBldWlzbW9kLCBzb2RhbGVzIGVnZXQgc2VtLjwvcD5cbiAgICAgICAgPHA+TWF1cmlzIGVnZXQgbGliZXJvIGR1aS4gUGVsbGVudGVzcXVlIGhhYml0YW50IG1vcmJpIHRyaXN0aXF1ZSBzZW5lY3R1cyBldCBuZXR1cyBldCBtYWxlc3VhZGEgZmFtZXMgYWMgdHVycGlzIGVnZXN0YXMuIFNlZCBpYWN1bGlzIGlwc3VtIGV1IGFjY3Vtc2FuIHByZXRpdW0uIE51bGxhIGVnZXN0YXMgcXVhbSB1bHRyaWNlcyB2ZXN0aWJ1bHVtIG9ybmFyZS4gRXRpYW0gc29sbGljaXR1ZGluIGltcGVyZGlldCBleCBxdWlzIGNvbnNlY3RldHVyLiBOYW0gYmxhbmRpdCBkdWkgcXVpcyBmYWNpbGlzaXMgcmhvbmN1cy4gU2VkIGNvbnNlcXVhdCB2ZWxpdCBzaXQgYW1ldCBvcm5hcmUgYmliZW5kdW0uIE51bGxhIGZhY2lsaXNpLiBTZWQgYWMgZXJvcyBpYWN1bGlzIGxhY3VzIGF1Y3RvciBkYXBpYnVzLiBBbGlxdWFtIGVyYXQgdm9sdXRwYXQuIFZlc3RpYnVsdW0gdGVtcHVzIGF1Z3VlIG5lYyBlcm9zIHJob25jdXMgYWNjdW1zYW4uIFBlbGxlbnRlc3F1ZSBoYWJpdGFudCBtb3JiaSB0cmlzdGlxdWUgc2VuZWN0dXMgZXQgbmV0dXMgZXQgbWFsZXN1YWRhIGZhbWVzIGFjIHR1cnBpcyBlZ2VzdGFzLjwvcD5cbiAgICA8L2Rpdj5cbmA7XG5cbmNvbnN0IGNoZWNrTWVudSA9IChoYW5kbGVyKSA9PiB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVybyBidXR0b24nKTtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaGFuZGxlcignbWVudScpO1xuICAgIH0pO1xufSBcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHRpdGxlOiAnaG9tZScsXG4gICAgaWNvbjogJzxpIGNsYXNzPVwidWlsIHVpbC1ob3VzZS11c2VyXCI+PC9pPicsXG4gICAgZXZlbnRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICduYXZpZ2F0aW9uJyxcbiAgICAgICAgICAgIGZ1bmM6IGNoZWNrTWVudSxcbiAgICAgICAgfVxuICAgIF0sXG4gICAgaHRtbCxcbn0iLCJpbXBvcnQgaG9tZSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IG1lbnUgZnJvbSAnLi9tZW51JztcbmltcG9ydCBjb250YWN0IGZyb20gJy4vY29udGFjdCc7XG5cbmNsYXNzIFBhZ2VzIHtcbiAgICBjb25zdHJ1Y3Rvcih7dGl0bGUsIGljb24gPSAnJywgZXZlbnRzID0gW10sIGh0bWx9ID0ge30pIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmljb24gPSBpY29uO1xuICAgICAgICB0aGlzLmV2ZW50cyA9IGV2ZW50cztcbiAgICAgICAgdGhpcy5odG1sID0gaHRtbDtcbiAgICB9XG5cbiAgICBnZXQgaGFzRXZlbnRzKCkge1xuICAgICAgICByZXR1cm4gQm9vbGVhbih0aGlzLmV2ZW50cy5sZW5ndGgpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFtcbiAgICBuZXcgUGFnZXMoaG9tZSksIFxuICAgIG5ldyBQYWdlcyhtZW51KSwgXG4gICAgbmV3IFBhZ2VzKGNvbnRhY3QpXG5dO1xuIiwiaW1wb3J0IG1lbnUgZnJvbSAnLi4vZGF0YS9tZW51JztcblxuY29uc3QgaHRtbCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxoMSBjbGFzcz1cInRpdGxlXCI+T3VyIG1lbnU8L2gxPlxuICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBOdWxsYW0gY29uc2VjdGV0dXIsIHJpc3VzIHV0IGZldWdpYXQgcG9zdWVyZSwgbGlndWxhIHRvcnRvciB0aW5jaWR1bnQgYW50ZSwgYXQgcHVsdmluYXIgZHVpIHRlbGx1cyBzZWQgdmVsaXQuIER1aXMgc2VkIG51bmMgcmlzdXMuIE1hZWNlbmFzIGFjIG5lcXVlIGRvbG9yLiBTdXNwZW5kaXNzZSBsdWN0dXMgc2VtIHZpdGFlIGxlbyBwb3N1ZXJlLCBhYyBzdXNjaXBpdCBvcmNpIGZpbmlidXMuIFByYWVzZW50IHZpdmVycmEgdWxsYW1jb3JwZXIgcXVhbSBpZCBibGFuZGl0LiBTdXNwZW5kaXNzZSBhbnRlIHZlbGl0LCBzZW1wZXIgZXQgZGljdHVtIGFjLCBtYWxlc3VhZGEgdml0YWUgc2VtLiBQcm9pbiBhIG1hdXJpcyBkaWduaXNzaW0sIHByZXRpdW0gZXN0IGVnZXQsIGJpYmVuZHVtIGxvcmVtLjwvcD5cbiAgICAgICAgPGRpdiBpZD1cIm1lbnVcIj5cbiAgICAgICAgICAgICR7XG4gICAgICAgICAgICAgICAgbWVudS5tYXAobWVudVNlY3Rpb24gPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPiR7bWVudVNlY3Rpb24ubmFtZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbnVTZWN0aW9uLml0ZW1zLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48c3Ryb25nPiR7aXRlbS5uYW1lfTwvc3Ryb25nPjxpPiR7cHJpY2VGb3JtYXQoaXRlbS5wcmljZSl9PC9pPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JHtpdGVtLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuam9pbignJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICBgO1xuICAgICAgICAgICAgICAgIH0pLmpvaW4oJycpXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuYDtcblxuZnVuY3Rpb24gcHJpY2VGb3JtYXQoYW1vdW50KSB7XG4gICAgcmV0dXJuIG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZW4tVVMnLCB7c3R5bGU6ICdjdXJyZW5jeScsIGN1cnJlbmN5OiAnVVNEJ30pLmZvcm1hdChhbW91bnQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgdGl0bGU6ICdtZW51JyxcbiAgICBpY29uOiAnPGkgY2xhc3M9XCJ1aWwgdWlsLXV0ZW5zaWxzXCI+PC9pPicsXG4gICAgaHRtbCxcbn0iLCJjbGFzcyBXZWJzaXRlU3RhdGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm1lbnUgPSBbXTtcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9ICdob21lJztcbiAgICB9XG5cbiAgICBzZXRDdXJyZW50UGFnZShwYWdlKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSBwYWdlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFdlYnNpdGVTdGF0ZSgpOyIsImltcG9ydCBwYWdlcyBmcm9tICcuL3BhZ2VzJztcblxuY2xhc3MgV2Vic2l0ZVZpZXcge1xuICAgIGNvbnN0cnVjdG9yKHBhZ2VzLCBtZW51KSB7XG4gICAgICAgIHRoaXMucGFnZXMgPSBwYWdlcztcbiAgICAgICAgdGhpcy5tZW51ID0gbWVudTtcbiAgICAgICAgdGhpcy5ET00gPSB7fTtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLnJlbmRlckNvbnRlbnQoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJIZWFkZXIoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJOYXZpZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMucmVuZGVyUGFnZXMoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJGb290ZXIoKTtcbiAgICAgICAgdGhpcy5iaW5kTG9jYWxMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICByZW5kZXJDb250ZW50KCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjb250ZW50XCI+PC9kaXY+XG4gICAgICAgIGA7XG4gICAgICAgIHRoaXMuRE9NLmNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIH1cblxuICAgIHJlbmRlckhlYWRlcigpIHtcbiAgICAgICAgY29uc3QgaHRtbCA9IGBcbiAgICAgICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ29cIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJ1aWwgdWlsLXJlc3RhdXJhbnRcIj48L2k+IDxzcGFuPk9kaW48L3NwYW4+UmVzdGF1cmFudFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+PGkgY2xhc3M9XCJ1aWwgdWlsLXBob25lLXZvbHVtZVwiPjwvaT4gKzEgMTI0LTY0Ny04ODc4PC9kaXY+XG4gICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgYDtcbiAgICAgICAgdGhpcy5ET00uY29udGVudC5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBodG1sKTtcblxuICAgICAgICB0aGlzLkRPTS5oZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcbiAgICAgICAgdGhpcy5ET00ubG9nbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dvJyk7XG4gICAgfVxuXG4gICAgcmVuZGVyTmF2aWdhdGlvbigpIHtcbiAgICAgICAgdGhpcy5ET00uaGVhZGVyLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJlbmQnLCBgPG5hdj48L25hdj5gKTtcbiAgICAgICAgdGhpcy5ET00uY29udGVudE5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ25hdicpO1xuXG4gICAgICAgIHRoaXMucGFnZXMuZm9yRWFjaCgocGFnZSwgaSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ET00uY29udGVudE5hdi5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGBcbiAgICAgICAgICAgICAgICA8bGkgZGF0YS10aXRsZT1cIiR7cGFnZS50aXRsZX1cIiBjbGFzcz1cIiR7IWkgPyAnaXMtYWN0aXZlJyA6ICcnfVwiPlxuICAgICAgICAgICAgICAgICAgICAke3BhZ2UuaWNvbn0gJHtwYWdlLnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICBgKTtcbiAgICAgICAgfSk7XG4gICAgXG4gICAgICAgIHRoaXMuRE9NLm5hdkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbmF2IGxpJyk7XG4gICAgfVxuXG4gICAgcmVuZGVyUGFnZXMoKSB7XG4gICAgICAgIHRoaXMuRE9NLmNvbnRlbnROYXYuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmVuZCcsIGA8ZGl2IGlkPVwicGFnZXNcIj48L2Rpdj5gKTtcbiAgICAgICAgdGhpcy5ET00uY29udGVudFBhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BhZ2VzJyk7XG5cbiAgICAgICAgdGhpcy5wYWdlcy5mb3JFYWNoKChwYWdlLCBpKSA9PiB7XG4gICAgICAgICAgICB0aGlzLkRPTS5jb250ZW50UGFnZXMuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gZGF0YS1wYWdlPVwiJHtwYWdlLnRpdGxlfVwiIGNsYXNzPVwiJHshaSA/ICdpcy1hY3RpdmUnIDogJyd9XCI+XG4gICAgICAgICAgICAgICAgICAgICR7cGFnZS5odG1sfVxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIGApO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLkRPTS5yZW5kZXJlZFBhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VjdGlvbicpO1xuICAgIH1cblxuICAgIHJlbmRlckZvb3RlcigpIHtcbiAgICAgICAgY29uc3QgeWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgY29uc3QgaHRtbCA9IGBcbiAgICAgICAgICAgIDxmb290ZXI+T2RpblJlc3RhdXJhbnQ8aSBjbGFzcz1cInVpbCB1aWwtcmVnaXN0ZXJlZFwiPjwvaT4gJHt5ZWFyfTwvZm9vdGVyPlxuICAgICAgICBgO1xuICAgICAgICBcbiAgICAgICAgZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGh0bWwpO1xuICAgICAgICB0aGlzLkRPTS5mb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb290ZXInKTtcbiAgICB9XG5cbiAgICBiaW5kTmF2aWdhdGlvbkxpc3RlbmVycyhoYW5kbGVyKSB7XG4gICAgICAgIC8vIEhlYWRlclxuICAgICAgICB0aGlzLkRPTS5sb2dvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaGFuZGxlcignaG9tZScpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gTmF2XG4gICAgICAgIHRoaXMuRE9NLm5hdkl0ZW1zLmZvckVhY2gobmF2SXRlbSA9PiB7XG4gICAgICAgICAgICBuYXZJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgaGFuZGxlcih0aGlzLmRhdGFzZXQudGl0bGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBQYWdlc1xuICAgICAgICB0aGlzLnBhZ2VzLmZvckVhY2goKHBhZ2UsIGkpID0+IHsgXG4gICAgICAgICAgICBpZiAocGFnZS5oYXNFdmVudHMpIHtcbiAgICAgICAgICAgICAgICBwYWdlLmV2ZW50cy5mb3JFYWNoKGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICduYXZpZ2F0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuZnVuYyhoYW5kbGVyKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7IFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBiaW5kTG9jYWxMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgICAgICAgICAgIGxldCB7c2Nyb2xsWX0gPSB3aW5kb3c7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsWSA+PSA5Mikge1xuICAgICAgICAgICAgICAgIHRoaXMuRE9NLmhlYWRlci5jbGFzc0xpc3QuYWRkKCdpcy1zY3JvbGwnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ET00uaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXNjcm9sbCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnb1RvUGFnZSh0aXRsZSwgcHJldlBhZ2UpIHtcbiAgICAgICAgdGhpcy5ET00ubmF2SXRlbXMuZm9yRWFjaChuYXZJdGVtID0+IG5hdkl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJykpO1xuICAgICAgICBbLi4udGhpcy5ET00ubmF2SXRlbXNdXG4gICAgICAgICAgICAuZmluZChuYXZJdGVtID0+IG5hdkl0ZW0uZGF0YXNldC50aXRsZSA9PT0gdGl0bGUpXG4gICAgICAgICAgICAuY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XG4gICAgICAgIFxuICAgICAgICBwcmV2UGFnZS5jbGFzc0xpc3QuYWRkKCdpcy1vdXQnKTtcblxuICAgICAgICBjb25zdCBzZWxlY3RlZFBhZ2UgPSBbLi4udGhpcy5ET00ucmVuZGVyZWRQYWdlc10uZmluZChwYWdlID0+IHBhZ2UuZGF0YXNldC5wYWdlID09PSB0aXRsZSk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLkRPTS5yZW5kZXJlZFBhZ2VzLmZvckVhY2gocGFnZSA9PiB7XG4gICAgICAgICAgICAgICAgcGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vdXQnKTtcbiAgICAgICAgICAgICAgICBwYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZWxlY3RlZFBhZ2UuY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XG4gICAgICAgIH0sIDI1MCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgV2Vic2l0ZVZpZXcocGFnZXMpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0IHdlYnNpdGVTdGF0ZSBmcm9tICcuL3N0YXRlJztcbmltcG9ydCB3ZWJzaXRlVmlldyBmcm9tICcuL3ZpZXcnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmNsYXNzIFdlYnNpdGUge1xuICAgIGNvbnN0cnVjdG9yKHdlYnNpdGVTdGF0ZSwgd2Vic2l0ZVZpZXcpIHtcbiAgICAgICAgdGhpcy53ZWJzaXRlU3RhdGUgPSB3ZWJzaXRlU3RhdGU7XG4gICAgICAgIHRoaXMud2Vic2l0ZVZpZXcgPSB3ZWJzaXRlVmlldztcbiAgICAgICAgdGhpcy5pbml0KCk7XG5cbiAgICAgICAgdGhpcy53ZWJzaXRlVmlldy5iaW5kTmF2aWdhdGlvbkxpc3RlbmVycyh0aGlzLmhhbmRsZU5hdmlnYXRpb25BY3Rpb25zLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMud2Vic2l0ZVZpZXcuaW5pdCgpO1xuICAgIH1cblxuICAgIGhhbmRsZU5hdmlnYXRpb25BY3Rpb25zKHRpdGxlKSB7XG4gICAgICAgIGlmICh0aGlzLndlYnNpdGVTdGF0ZS5jdXJyZW50UGFnZSAhPSB0aXRsZSkge1xuICAgICAgICAgICAgY29uc3QgcHJldlBhZ2UgPSBbLi4udGhpcy53ZWJzaXRlVmlldy5ET00ucmVuZGVyZWRQYWdlc11cbiAgICAgICAgICAgICAgICAuZmluZChwYWdlID0+IHBhZ2UuZGF0YXNldC5wYWdlID09PSB0aGlzLndlYnNpdGVTdGF0ZS5jdXJyZW50UGFnZSk7XG5cbiAgICAgICAgICAgIHRoaXMud2Vic2l0ZVZpZXcuZ29Ub1BhZ2UodGl0bGUsIHByZXZQYWdlKTtcbiAgICAgICAgICAgIHRoaXMud2Vic2l0ZVN0YXRlLnNldEN1cnJlbnRQYWdlKHRpdGxlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3Qgd2Vic2l0ZSA9IG5ldyBXZWJzaXRlKHdlYnNpdGVTdGF0ZSwgd2Vic2l0ZVZpZXcpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9