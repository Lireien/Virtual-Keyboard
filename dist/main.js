/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* * {\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\nhtml {\r\n  scroll-behavior: smooth;\r\n  overflow-x: hidden;\r\n}\r\nbody {\r\n  min-height: 100vh;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n.container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\ntextarea {\r\n  position: absolute;\r\n  min-width: 320px;\r\n  width: 40%;\r\n  top: 100px;\r\n  resize: none;\r\n}\r\n\r\n.keyboard {\r\n  position: fixed;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  padding: 5px 0;\r\n  background-color: lightslategrey;\r\n  box-shadow: 0 0 50px rgba(0, 0, 0, 0.05);\r\n  user-select: none;\r\n  transition: bottom 0.5s;\r\n}\r\n\r\n.keyboard--hidden {\r\n  bottom: -100%;\r\n}\r\n.keyboard__keys {\r\n  text-align: center;\r\n}\r\n.keyboard__key {\r\n  height: 45px;\r\n  width: 6%;\r\n  max-width: 90px;\r\n  margin: 3px;\r\n  border-radius: 4px;\r\n  border: none;\r\n  background: darkslategrey;\r\n  color: antiquewhite;\r\n  font-size: 1.05rem;\r\n  outline: none;\r\n  cursor: pointer;\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  vertical-align: top;\r\n  padding: 0;\r\n  position: relative;\r\n}\r\n.arrows {\r\n  max-width: 50%;\r\n  max-height: 80%;\r\n}\r\n\r\n.keyboard__key:active {\r\n  background-color: rgba(0, 0, 0, 0.6);\r\n}\r\n..keyboard__key--big {\r\n  width: 8%;\r\n}\r\n.keyboard__key--wide {\r\n  width: 10%;\r\n}\r\n.keyboard__key--widely {\r\n  width: 12%;\r\n}\r\n.keyboard__key--extra-wide {\r\n  width: 36%;\r\n  max-width: 500px;\r\n}\r\n.keyboard__key--activatable::after {\r\n  content: '';\r\n  top: 6px;\r\n  left: 6px;\r\n  position: absolute;\r\n  width: 7px;\r\n  height: 7px;\r\n  border-radius: 50%;\r\n  background: rgba(255, 255, 255, 0.3);\r\n}\r\n.keyboard__key--active::after {\r\n  background: #ffffff;\r\n} */\r\n\r\n@charset \"UTF-8\";\r\n/*Обнуление*/\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  border: 0;\r\n}\r\n\r\n*,\r\n*:before,\r\n*:after {\r\n  -moz-box-sizing: border-box;\r\n  -webkit-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n}\r\n\r\n:focus,\r\n:active {\r\n  outline: none;\r\n}\r\n\r\na:focus,\r\na:active {\r\n  outline: none;\r\n}\r\n\r\nnav,\r\nfooter,\r\nheader,\r\naside {\r\n  display: block;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n  width: 100%;\r\n  font-size: 100%;\r\n  line-height: 1;\r\n  font-size: 14px;\r\n}\r\n\r\ninput,\r\nbutton,\r\ntextarea {\r\n  font-family: inherit;\r\n}\r\n\r\ninput::-ms-clear {\r\n  display: none;\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n}\r\n\r\nbutton::-moz-focus-inner {\r\n  padding: 0;\r\n  border: 0;\r\n}\r\n\r\na,\r\na:visited {\r\n  text-decoration: none;\r\n}\r\n\r\na:hover {\r\n  text-decoration: none;\r\n}\r\n\r\nul li {\r\n  list-style: none;\r\n}\r\n\r\nimg {\r\n  vertical-align: top;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  font-size: inherit;\r\n  font-weight: 400;\r\n}\r\n\r\nbody {\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.wrapper {\r\n  min-height: 100vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n/* \r\n[class*='__container'] {\r\n  max-width: 1200px;\r\n  margin: 0px auto;\r\n  padding: 0 15px;\r\n} */\r\n\r\n.keyboard__container {\r\n  max-width: 1200px;\r\n  height: 100%;\r\n  margin: 0px auto;\r\n  padding: 0 15px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.title {\r\n  font-size: 3rem;\r\n  padding: 20px;\r\n}\r\n\r\n.keyboard__output {\r\n  width: 90%;\r\n  border: 2px solid rgba(0, 0, 0, 0.8);\r\n  border-radius: 10px;\r\n  font-size: 1.2rem;\r\n  padding: 15px;\r\n  resize: none;\r\n}\r\n\r\n.keyboard__keys {\r\n  margin-top: 20px;\r\n  padding: 20px;\r\n  border: 2px solid rgba(0, 0, 0, 0.8);\r\n  background: darkslategray;\r\n  border-radius: 7px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.keyboard__row {\r\n  display: flex;\r\n}\r\n\r\n.key {\r\n  height: 45px;\r\n  width: 45px;\r\n  border: 1px solid rgb(151, 12, 12);\r\n  border-radius: 4px;\r\n  margin: 5px;\r\n  cursor: pointer;\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 1.2rem;\r\n  font-weight: bold;\r\n  color: white;\r\n  background: rgba(26, 23, 23, 0.9);\r\n}\r\n.key:hover {\r\n  color: rgba(0, 0, 0, 0.9);\r\n  background: rgba(255, 255, 255, 0.9);\r\n  transition: all 0.5s ease-out;\r\n}\r\n.key.active {\r\n  background: rgb(0, 255, 0);\r\n  transition: all 0.3s ease-out;\r\n}\r\n\r\n.key__wide {\r\n  width: 100px;\r\n}\r\n\r\n.key__extra-wide {\r\n  width: 375px;\r\n}\r\n\r\n.keyboard__description {\r\n  margin-top: 20px;\r\n}\r\n.keyboard__description p {\r\n  padding: 10px 0;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GAmGG;;AAEH,gBAAgB;AAChB,YAAY;AACZ;EACE,UAAU;EACV,SAAS;EACT,SAAS;AACX;;AAEA;;;EAGE,2BAA2B;EAC3B,8BAA8B;EAC9B,sBAAsB;AACxB;;AAEA;;EAEE,aAAa;AACf;;AAEA;;EAEE,aAAa;AACf;;AAEA;;;;EAIE,cAAc;AAChB;;AAEA;;EAEE,YAAY;EACZ,WAAW;EACX,eAAe;EACf,cAAc;EACd,eAAe;AACjB;;AAEA;;;EAGE,oBAAoB;AACtB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,UAAU;EACV,SAAS;AACX;;AAEA;;EAEE,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;;;;;;EAME,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;;;;;GAKG;;AAEH;EACE,iBAAiB;EACjB,YAAY;EACZ,gBAAgB;EAChB,eAAe;EACf,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,aAAa;AACf;;AAEA;EACE,UAAU;EACV,oCAAoC;EACpC,mBAAmB;EACnB,iBAAiB;EACjB,aAAa;EACb,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,oCAAoC;EACpC,yBAAyB;EACzB,kBAAkB;EAClB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,kCAAkC;EAClC,kBAAkB;EAClB,WAAW;EACX,eAAe;EACf,oBAAoB;EACpB,mBAAmB;EACnB,uBAAuB;EACvB,iBAAiB;EACjB,iBAAiB;EACjB,YAAY;EACZ,iCAAiC;AACnC;AACA;EACE,yBAAyB;EACzB,oCAAoC;EACpC,6BAA6B;AAC/B;AACA;EACE,0BAA0B;EAC1B,6BAA6B;AAC/B;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,gBAAgB;AAClB;AACA;EACE,eAAe;AACjB","sourcesContent":["/* * {\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\nhtml {\r\n  scroll-behavior: smooth;\r\n  overflow-x: hidden;\r\n}\r\nbody {\r\n  min-height: 100vh;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n.container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\ntextarea {\r\n  position: absolute;\r\n  min-width: 320px;\r\n  width: 40%;\r\n  top: 100px;\r\n  resize: none;\r\n}\r\n\r\n.keyboard {\r\n  position: fixed;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  padding: 5px 0;\r\n  background-color: lightslategrey;\r\n  box-shadow: 0 0 50px rgba(0, 0, 0, 0.05);\r\n  user-select: none;\r\n  transition: bottom 0.5s;\r\n}\r\n\r\n.keyboard--hidden {\r\n  bottom: -100%;\r\n}\r\n.keyboard__keys {\r\n  text-align: center;\r\n}\r\n.keyboard__key {\r\n  height: 45px;\r\n  width: 6%;\r\n  max-width: 90px;\r\n  margin: 3px;\r\n  border-radius: 4px;\r\n  border: none;\r\n  background: darkslategrey;\r\n  color: antiquewhite;\r\n  font-size: 1.05rem;\r\n  outline: none;\r\n  cursor: pointer;\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  vertical-align: top;\r\n  padding: 0;\r\n  position: relative;\r\n}\r\n.arrows {\r\n  max-width: 50%;\r\n  max-height: 80%;\r\n}\r\n\r\n.keyboard__key:active {\r\n  background-color: rgba(0, 0, 0, 0.6);\r\n}\r\n..keyboard__key--big {\r\n  width: 8%;\r\n}\r\n.keyboard__key--wide {\r\n  width: 10%;\r\n}\r\n.keyboard__key--widely {\r\n  width: 12%;\r\n}\r\n.keyboard__key--extra-wide {\r\n  width: 36%;\r\n  max-width: 500px;\r\n}\r\n.keyboard__key--activatable::after {\r\n  content: '';\r\n  top: 6px;\r\n  left: 6px;\r\n  position: absolute;\r\n  width: 7px;\r\n  height: 7px;\r\n  border-radius: 50%;\r\n  background: rgba(255, 255, 255, 0.3);\r\n}\r\n.keyboard__key--active::after {\r\n  background: #ffffff;\r\n} */\r\n\r\n@charset \"UTF-8\";\r\n/*Обнуление*/\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  border: 0;\r\n}\r\n\r\n*,\r\n*:before,\r\n*:after {\r\n  -moz-box-sizing: border-box;\r\n  -webkit-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n}\r\n\r\n:focus,\r\n:active {\r\n  outline: none;\r\n}\r\n\r\na:focus,\r\na:active {\r\n  outline: none;\r\n}\r\n\r\nnav,\r\nfooter,\r\nheader,\r\naside {\r\n  display: block;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n  width: 100%;\r\n  font-size: 100%;\r\n  line-height: 1;\r\n  font-size: 14px;\r\n}\r\n\r\ninput,\r\nbutton,\r\ntextarea {\r\n  font-family: inherit;\r\n}\r\n\r\ninput::-ms-clear {\r\n  display: none;\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n}\r\n\r\nbutton::-moz-focus-inner {\r\n  padding: 0;\r\n  border: 0;\r\n}\r\n\r\na,\r\na:visited {\r\n  text-decoration: none;\r\n}\r\n\r\na:hover {\r\n  text-decoration: none;\r\n}\r\n\r\nul li {\r\n  list-style: none;\r\n}\r\n\r\nimg {\r\n  vertical-align: top;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  font-size: inherit;\r\n  font-weight: 400;\r\n}\r\n\r\nbody {\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.wrapper {\r\n  min-height: 100vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n/* \r\n[class*='__container'] {\r\n  max-width: 1200px;\r\n  margin: 0px auto;\r\n  padding: 0 15px;\r\n} */\r\n\r\n.keyboard__container {\r\n  max-width: 1200px;\r\n  height: 100%;\r\n  margin: 0px auto;\r\n  padding: 0 15px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.title {\r\n  font-size: 3rem;\r\n  padding: 20px;\r\n}\r\n\r\n.keyboard__output {\r\n  width: 90%;\r\n  border: 2px solid rgba(0, 0, 0, 0.8);\r\n  border-radius: 10px;\r\n  font-size: 1.2rem;\r\n  padding: 15px;\r\n  resize: none;\r\n}\r\n\r\n.keyboard__keys {\r\n  margin-top: 20px;\r\n  padding: 20px;\r\n  border: 2px solid rgba(0, 0, 0, 0.8);\r\n  background: darkslategray;\r\n  border-radius: 7px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.keyboard__row {\r\n  display: flex;\r\n}\r\n\r\n.key {\r\n  height: 45px;\r\n  width: 45px;\r\n  border: 1px solid rgb(151, 12, 12);\r\n  border-radius: 4px;\r\n  margin: 5px;\r\n  cursor: pointer;\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 1.2rem;\r\n  font-weight: bold;\r\n  color: white;\r\n  background: rgba(26, 23, 23, 0.9);\r\n}\r\n.key:hover {\r\n  color: rgba(0, 0, 0, 0.9);\r\n  background: rgba(255, 255, 255, 0.9);\r\n  transition: all 0.5s ease-out;\r\n}\r\n.key.active {\r\n  background: rgb(0, 255, 0);\r\n  transition: all 0.3s ease-out;\r\n}\r\n\r\n.key__wide {\r\n  width: 100px;\r\n}\r\n\r\n.key__extra-wide {\r\n  width: 375px;\r\n}\r\n\r\n.keyboard__description {\r\n  margin-top: 20px;\r\n}\r\n.keyboard__description p {\r\n  padding: 10px 0;\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

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

/***/ "./src/assets/utils/keysLayout.js":
/*!****************************************!*\
  !*** ./src/assets/utils/keysLayout.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const keysLayout = [
  { code: 'Backquote', eng: '`', ru: 'ё', newRow: true },
  { code: 'Digit1', eng: '1' },
  { code: 'Digit2', eng: '2' },
  { code: 'Digit3', eng: '3' },
  { code: 'Digit4', eng: '4' },
  { code: 'Digit5', eng: '5' },
  { code: 'Digit6', eng: '6' },
  { code: 'Digit7', eng: '7' },
  { code: 'Digit8', eng: '8' },
  { code: 'Digit9', eng: '9' },
  { code: 'Digit0', eng: '0' },
  { code: 'Minus', eng: '-' },
  { code: 'Equal', eng: '=' },
  { code: 'Backspace', eng: 'Backspace', service: true, wide: true },
  { code: 'Tab', eng: 'Tab', service: true, newRow: true },
  { code: 'KeyQ', eng: 'q', ru: 'й' },
  { code: 'KeyW', eng: 'w', ru: 'ц' },
  { code: 'KeyE', eng: 'e', ru: 'у' },
  { code: 'KeyR', eng: 'r', ru: 'к' },
  { code: 'KeyT', eng: 't', ru: 'е' },
  { code: 'KeyY', eng: 'y', ru: 'н' },
  { code: 'KeyU', eng: 'u', ru: 'г' },
  { code: 'KeyI', eng: 'i', ru: 'ш' },
  { code: 'KeyO', eng: 'o', ru: 'щ' },
  { code: 'KeyP', eng: 'p', ru: 'з' },
  { code: 'BracketLeft', eng: '[', ru: 'х' },
  { code: 'BracketRight', eng: ']', ru: 'ъ' },
  { code: 'Backslash', eng: '\\' },
  { code: 'Delete', eng: 'Del', service: true },
  { code: 'CapsLock', eng: 'CapsLk', service: true, wide: true, newRow: true },
  { code: 'KeyA', eng: 'a', ru: 'ф' },
  { code: 'KeyS', eng: 's', ru: 'ы' },
  { code: 'KeyD', eng: 'd', ru: 'в' },
  { code: 'KeyF', eng: 'f', ru: 'а' },
  { code: 'KeyG', eng: 'g', ru: 'п' },
  { code: 'KeyH', eng: 'h', ru: 'р' },
  { code: 'KeyJ', eng: 'j', ru: 'о' },
  { code: 'KeyK', eng: 'k', ru: 'л' },
  { code: 'KeyL', eng: 'l', ru: 'д' },
  { code: 'Semicolon', eng: ';', ru: 'ж' },
  { code: 'Quote', eng: "'", ru: 'э' },
  { code: 'Enter', eng: 'Enter', service: true, wide: true },
  { code: 'ShiftLeft', eng: 'Shift', service: true, wide: true, newRow: true },
  { code: 'KeyZ', eng: 'z', ru: 'я' },
  { code: 'KeyX', eng: 'x', ru: 'ч' },
  { code: 'KeyC', eng: 'c', ru: 'с' },
  { code: 'KeyV', eng: 'v', ru: 'м' },
  { code: 'KeyB', eng: 'b', ru: 'и' },
  { code: 'KeyN', eng: 'n', ru: 'т' },
  { code: 'KeyM', eng: 'm', ru: 'ь' },
  { code: 'Comma', eng: ',', ru: 'б' },
  { code: 'Period', eng: '.', ru: 'ю' },
  { code: 'Slash', eng: '/', ru: '.' },
  { code: 'ArrowUp', eng: '▲' },
  { code: 'ShiftRight', eng: 'Shift', service: true, wide: true },
  { code: 'ControlLeft', eng: 'Ctrl', service: true, newRow: true },
  { code: 'MetaLeft', eng: 'win', service: true },
  { code: 'AltLeft', eng: 'Alt', service: true },
  { code: 'Space', eng: ' ', extra__wide: true },
  { code: 'AltRight', eng: 'alt' },
  { code: 'ArrowLeft', eng: '◄' },
  { code: 'ArrowDown', eng: '▼' },
  { code: 'ArrowRight', eng: '►' },
  { code: 'ControlRight', eng: 'Ctrl', service: true },
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keysLayout);

/***/ }),

/***/ "./src/js/helpers/activeClasses.js":
/*!*****************************************!*\
  !*** ./src/js/helpers/activeClasses.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addActiveClassHandler": () => (/* binding */ addActiveClassHandler),
/* harmony export */   "removeActiveClassHandler": () => (/* binding */ removeActiveClassHandler)
/* harmony export */ });
/* harmony import */ var _capitalizer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./capitalizer */ "./src/js/helpers/capitalizer.js");


const addActiveClassHandler = (key) => {
  if (key.id === 'CapsLock') {
    key.classList.toggle('active');
    (0,_capitalizer__WEBPACK_IMPORTED_MODULE_0__["default"])(key.classList.contains('active'));
  } else key.classList.add('active');
};

const removeActiveClassHandler = (key) => {
  if (key && key.id !== 'CapsLock') key.classList.remove('active');
};



/***/ }),

/***/ "./src/js/helpers/capitalizer.js":
/*!***************************************!*\
  !*** ./src/js/helpers/capitalizer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ capitalizeHandler)
/* harmony export */ });
function capitalizeHandler(capsLock = false) {
  const letterKeys = document.querySelectorAll('.key__letter');
  letterKeys.forEach((elem) => {
    capsLock
      ? (elem.innerHTML = elem.innerHTML.toUpperCase())
      : (elem.innerHTML = elem.innerHTML.toLowerCase());
  });
}


/***/ }),

/***/ "./src/js/helpers/translator.js":
/*!**************************************!*\
  !*** ./src/js/helpers/translator.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ changeLanguageHandler)
/* harmony export */ });
function changeLanguageHandler(layout, en = true) {
  let ruKey;
  const keys = document.querySelectorAll('.key');
  keys.forEach((elem) => {
    ruKey = layout.find((item) => item.code === elem.id);
    if (ruKey.ru) {
      en ? (elem.innerHTML = ruKey.eng) : (elem.innerHTML = ruKey.ru);
    }
  });
}

/***/ }),

/***/ "./src/js/keyboard.js":
/*!****************************!*\
  !*** ./src/js/keyboard.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ keyboardLayoutRender)
/* harmony export */ });
/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keys */ "./src/js/keys.js");



function keyboardLayoutRender() {
  document.body.innerHTML = `
  <div class="wrapper">
      <div class="keyboard keyboard__container">
          <h1 class="title">Virtual Keyboard</h1>
          <textarea name="textarea" id="textarea" class="keyboard__output" autofocus cols="30" rows="10"></textarea>
          <div class="keyboard__keys">
          </div>
          <div class="keyboard__description">
            <p>Press *Alt+Shift* for change language</p>
            <p>Keyboard is created in Windows OS</p>              
          </div>
      </div>
  </div>`;
  (0,_keys__WEBPACK_IMPORTED_MODULE_0__["default"])();
}

/***/ }),

/***/ "./src/js/keys.js":
/*!************************!*\
  !*** ./src/js/keys.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ keyboardRender)
/* harmony export */ });
/* harmony import */ var _assets_utils_keysLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/utils/keysLayout */ "./src/assets/utils/keysLayout.js");


function keyboardRender() {
  const keyboardKeys = document.querySelector('.keyboard__keys');

  let keyboardRow = document.createElement('div');
  _assets_utils_keysLayout__WEBPACK_IMPORTED_MODULE_0__["default"].forEach((key) => {
    if (key.newRow) {
      keyboardRow = document.createElement('div');
      keyboardRow.classList.add('keyboard__row');
      keyboardKeys.append(keyboardRow);
    }

    const keyElement = document.createElement('div');

    keyElement.className = 'keyboard__keys_key key';
    if (key.wide) keyElement.classList.add('key__wide');
    if (key.extra__wide) keyElement.classList.add('key__extra-wide');
    if (key.code.indexOf('Key') !== -1) keyElement.classList.add('key__letter');
    //
    if (key.service) keyElement.classList.add('key__service');
    keyElement.setAttribute('id', key.code);
    keyElement.innerHTML = key.eng;
    keyboardRow.append(keyElement);
  });
}

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyboard */ "./src/js/keyboard.js");
/* harmony import */ var _assets_utils_keysLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/utils/keysLayout */ "./src/assets/utils/keysLayout.js");
/* harmony import */ var _helpers_translator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/translator */ "./src/js/helpers/translator.js");
/* harmony import */ var _helpers_activeClasses__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/activeClasses */ "./src/js/helpers/activeClasses.js");






let langEn = true;

(0,_keyboard__WEBPACK_IMPORTED_MODULE_1__["default"])();

if (localStorage.getItem('lang') === 'ru') {
  langEn = false;
  (0,_helpers_translator__WEBPACK_IMPORTED_MODULE_3__["default"])(_assets_utils_keysLayout__WEBPACK_IMPORTED_MODULE_2__["default"], langEn);
}

const textareaElement = document.querySelector('.keyboard__output');

document.addEventListener('keydown', (e) => {
  const key = document.querySelector(`#${e.code}`);
  if (!key) return;

  textareaElement.focus();
  (0,_helpers_activeClasses__WEBPACK_IMPORTED_MODULE_4__.addActiveClassHandler)(key);

  if (key.id === 'Tab') e.preventDefault();
  if (
    ((e.code === 'ShiftLeft' || e.code === 'ShiftRight') &&
      e.altKey) ||
    ((e.code === 'AltLeft' || e.code === 'AltRight') && e.shiftKey)
  ) {
    langEn = !langEn;
    langEn
      ? localStorage.setItem('lang', 'en')
      : localStorage.setItem('lang', 'ru');
    (0,_helpers_translator__WEBPACK_IMPORTED_MODULE_3__["default"])(_assets_utils_keysLayout__WEBPACK_IMPORTED_MODULE_2__["default"], langEn);
  }
});

document.addEventListener('keyup', (e) => {
  const key = document.querySelector(`#${e.code}`);
  (0,_helpers_activeClasses__WEBPACK_IMPORTED_MODULE_4__.removeActiveClassHandler)(key);
});

document
  .querySelector('.keyboard__keys')
  .addEventListener('mousedown', (e) => {
    const key = e.target;
    if (key.closest('.key')) {
      (0,_helpers_activeClasses__WEBPACK_IMPORTED_MODULE_4__.addActiveClassHandler)(key);
      if (!key.classList.contains('key__service'))
        textareaElement.value += key.innerHTML;
      else {
        switch (key.id) {
          case 'Enter':
            textareaElement.value += `\n`;
            break;
          case 'Backspace':
            textareaElement.value = textareaElement.value.slice(
              0,
              textareaElement.value.length - 1
            );
            break;
          case 'Delete':
            if (textareaElement.value.length > textareaElement.selectionStart) {
              textareaElement.value =
                textareaElement.value.slice(
                  0,
                  textareaElement.selectionStart - 1
                ) +
                textareaElement.value.slice(
                  textareaElement.selectionStart,
                  textareaElement.length
                );
            }
            textareaElement.focus();
            break;
        }
      }
    }
  });

document
  .querySelector('.keyboard__keys')
  .addEventListener('mouseup', (e) => {
    document.querySelectorAll('.key').forEach((key) => {
      (0,_helpers_activeClasses__WEBPACK_IMPORTED_MODULE_4__.removeActiveClassHandler)(key);
    });
  });

})();

/******/ })()
;
//# sourceMappingURL=main.js.map