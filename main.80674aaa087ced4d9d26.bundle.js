(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ 1122:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(7);

__webpack_require__(44);

__webpack_require__(40);

__webpack_require__(34);

__webpack_require__(37);

__webpack_require__(76);

__webpack_require__(77);

__webpack_require__(6);

__webpack_require__(41);

var _clientApi = __webpack_require__(61);

var _clientLogger = __webpack_require__(48);

var _configFilename = __webpack_require__(1175);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

if (_configFilename.args || _configFilename.argTypes) {
  _clientLogger.logger.warn('Invalid args/argTypes in config, ignoring.', JSON.stringify({
    args: _configFilename.args,
    argTypes: _configFilename.argTypes
  }));
}

if (_configFilename.decorators) {
  _configFilename.decorators.forEach(function (decorator) {
    return (0, _clientApi.addDecorator)(decorator, false);
  });
}

if (_configFilename.loaders) {
  _configFilename.loaders.forEach(function (loader) {
    return (0, _clientApi.addLoader)(loader, false);
  });
}

if (_configFilename.parameters || _configFilename.globals || _configFilename.globalTypes) {
  (0, _clientApi.addParameters)(_objectSpread(_objectSpread({}, _configFilename.parameters), {}, {
    globals: _configFilename.globals,
    globalTypes: _configFilename.globalTypes
  }), false);
}

if (_configFilename.argTypesEnhancers) {
  _configFilename.argTypesEnhancers.forEach(function (enhancer) {
    return (0, _clientApi.addArgTypesEnhancer)(enhancer);
  });
}

/***/ }),

/***/ 1128:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _frameworkImportPath = __webpack_require__(135);
/* eslint-disable import/no-unresolved */


(0, _frameworkImportPath.configure)([__webpack_require__(1129), __webpack_require__(1130), __webpack_require__(1134), __webpack_require__(1143), __webpack_require__(1150), __webpack_require__(1155)], module, false);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(92)(module)))

/***/ }),

/***/ 1129:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./welcome.stories.mdx": 508
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 1129;

/***/ }),

/***/ 1130:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./changelog.stories.mdx": 1131,
	"./development.stories.mdx": 1132,
	"./usage.stories.mdx": 1133,
	"./welcome.stories.mdx": 508
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 1130;

/***/ }),

/***/ 1131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__page", function() { return __page; });
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
/* harmony import */ var _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__);




function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsxRuntime classic */

/* @jsx mdx */



var layoutProps = {};
var MDXLayout = "wrapper";

function MDXContent(_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__["Meta"], {
    title: "Intro / Changelog",
    mdxType: "Meta"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h1", {
    "id": "changelog"
  }, "Changelog"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("br", null), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    "id": "211-december-14-2020"
  }, "2.1.1 (December 14, 2020)"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "React \u043E\u0431\u043D\u043E\u0432\u043B\u0451\u043D \u0434\u043E 17-\u043E\u0439 \u0432\u0435\u0440\u0441\u0438\u0438.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    "id": "210-april-26-2020"
  }, "2.1.0 (April 26, 2020)"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u0423\u0431\u0440\u0430\u043D\u043E \u043D\u0435\u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0449\u0435\u0435 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u0448\u0440\u0438\u0444\u0442\u043E\u0432 \u0447\u0435\u0440\u0435\u0437 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "global.fonts.fontFace"), ". \u0422\u0435\u043F\u0435\u0440\u044C css \u0441 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "@font-face"), " \u043F\u0435\u0440\u0435\u0434\u0430\u0451\u0442\u0441\u044F \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E (\u0432 \u044D\u0442\u043E \u0436\u0435 \u043F\u043E\u043B\u0435)."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 vf \u0438 stacks \u0448\u0440\u0438\u0444\u0442\u043E\u0432 \u043F\u0435\u0440\u0435\u0448\u043B\u0438 \u0432 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "global.fonts.families"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u0418\u0437 \u0431\u0430\u0437\u043E\u0432\u043E\u0439 \u0442\u0435\u043C\u044B \u0443\u0431\u0440\u0430\u043D \u0432\u0430\u0440\u0438\u0430\u0442\u0438\u0432\u043D\u044B\u0439 \u0448\u0440\u0438\u0444\u0442.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    "id": "201-april-1-2020"
  }, "2.0.1 (April 1, 2020)"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0425\u043E\u0442\u0444\u0438\u043A\u0441, \u043F\u0440\u0430\u0432\u044F\u0449\u0438\u0439 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B \u0441 tree shaking \u0438 \u0441\u0442\u0438\u043B\u044F\u043C\u0438 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0433\u043E \u0440\u0435\u043B\u0438\u0437\u0430."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u0412\u043E\u0437\u0432\u0440\u0430\u0449\u0435\u043D\u044B \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0438\u0438 \u0431\u0438\u043B\u0434\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "esm"), " / ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "cjs"), " / ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "types"), " \u0432\u043C\u0435\u0441\u0442\u043E ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "dist"), " \u0441 \u0440\u0430\u0437\u0431\u0438\u0435\u043D\u0438\u0435\u043C \u0431\u0430\u043D\u0434\u043B\u043E\u0432 \u043D\u0430 \u0444\u0430\u0439\u043B\u044B, \u0442.\u043A. \u044D\u0442\u043E \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B tree shaking"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u0423\u0434\u0430\u043B\u0451\u043D ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "rollup-plugin-typescript2"), " \u0438 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D \u0442\u0440\u0430\u043D\u0441\u043F\u0430\u0439\u043B\u0438\u043D\u0433 \u0447\u0435\u0440\u0435\u0437 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "rollup-plugin-babel"), ". \u0412 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u043C \u0440\u0435\u043B\u0438\u0437\u0435 \u0431\u044B\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E \u0441\u0442\u0438\u043B\u044F\u043C\u0438, \u0442.\u043A. \u043F\u043B\u0430\u0433\u0438\u043D ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "@emotion/babel-preset-css-prop"), " \u043D\u0435 \u043E\u0442\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u043B. \u0413\u0435\u043D\u0435\u0440\u0430\u0446\u0438\u044F \u0434\u0435\u043A\u043B\u0430\u0440\u0430\u0446\u0438\u0439 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0441\u044F \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E \u0447\u0435\u0440\u0435\u0437 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "tsc")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u0423\u0431\u0440\u0430\u043D \u044D\u043A\u0441\u043F\u043E\u0440\u0442 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "Theme"), ", \u0442.\u043A. ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "babel"), " \u043F\u043B\u0430\u0433\u0438\u043D \u0434\u043B\u044F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "rollup"), " \u043D\u0435 \u043F\u043E\u0434\u043E\u0431\u043D\u044B\u0439 \u044D\u043A\u0441\u043F\u043E\u0440\u0442. \u042D\u043A\u0441\u043F\u043E\u0440\u0442 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043E\u0432 \u043F\u043E\u043A\u0430 \u043E\u043F\u0443\u0449\u0435\u043D \u0437\u0430 \u043D\u0435\u043D\u0443\u0436\u043D\u043E\u0441\u0442\u044C\u044E"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u0412 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "createTheme"), " \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E, \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u044E\u0449\u0438\u0439 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u044D\u0442\u0443 \u0443\u0442\u0438\u043B\u0438\u0442\u0443 \u0431\u0435\u0437 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u043E\u0432"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u0423\u0431\u0440\u0430\u043D\u044B \u043D\u0435\u043D\u0443\u0436\u043D\u044B\u0435 \u044D\u043A\u0441\u043F\u043E\u0440\u0442\u044B \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432, \u043E\u0434\u043D\u043E\u0438\u043C\u0451\u043D\u043D\u044B\u0435 \u0434\u0435\u0444\u043E\u043B\u0442\u043D\u044B\u043C \u044D\u043A\u0441\u043F\u043E\u0440\u0442\u0430\u043C. \u0420\u0430\u043D\u0435\u0435 \u044D\u0442\u043E\u0433\u043E \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043B ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "docgen")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u0410\u0432\u0442\u043E\u043A\u0438\u0442\u044B \u043F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u044B \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441\u043E \u0432\u0441\u0435\u043C\u0438 \u043E\u0441\u0442\u0430\u043B\u044C\u043D\u044B\u043C\u0438 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430\u043C\u0438: \u0438\u043C\u044F \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u0435\u0442 \u0441 \u0438\u043C\u0435\u043D\u0435\u043C \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0438\u0438"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u044B \u043A\u043E\u043C\u0430\u043D\u0434\u044B \u0441\u0431\u043E\u0440\u043A\u0438. \u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0437\u0430\u0444\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u044B \u0432 Development \u0433\u0430\u0439\u0434\u0435"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u0418\u0441\u043F\u0440\u0430\u0432\u043B\u0435\u043D \u043F\u0440\u0438\u043C\u0435\u0440 \u043A\u043E\u0434\u0430 \u0432 Theming \u0433\u0430\u0439\u0434\u0435")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    "id": "200-april-1-2020"
  }, "2.0.0 (April 1, 2020)"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u042D\u0442\u043E\u0442 \u0440\u0435\u043B\u0438\u0437 \u043D\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u0442 \u043D\u043E\u0432\u043E\u0433\u043E \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u0430, \u0438 \u043F\u0440\u0435\u0436\u0434\u0435 \u0432\u0441\u0435\u0433\u043E \u043D\u0430\u0446\u0435\u043B\u0435\u043D \u043D\u0430 \u043F\u0435\u0440\u0435\u0432\u043E\u0434 \u043D\u0430 Typescript \u0434\u043B\u044F \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u044F \u0443\u0434\u043E\u0431\u0441\u0442\u0432\u0430 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u043E\u0439 \u0438 \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u044F \u0441\u0442\u0440\u043E\u0433\u043E\u0441\u0442\u0438 \u043F\u0440\u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0435. \u041E\u0441\u0442\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u043F\u043E \u0431\u043E\u043B\u044C\u0448\u0435\u0439 \u0447\u0430\u0441\u0442\u0438 \u043D\u0430\u0446\u0435\u043B\u0435\u043D\u044B \u043D\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0432 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0434\u0438\u0437\u0430\u0439\u043D-\u0441\u0438\u0441\u0442\u0435\u043C\u044B. \u0415\u0441\u0442\u044C \u0440\u044F\u0434 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439 \u0432 \u043F\u0443\u0431\u043B\u0438\u0447\u043D\u043E\u043C API."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h3", {
    "id": "typescript"
  }, "Typescript"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u041A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B \u0438 \u0430\u0432\u0442\u043E\u043A\u0438\u0442\u044B \u043F\u0435\u0440\u0435\u043F\u0438\u0441\u0430\u043D\u044B \u043D\u0430 Typescript"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u0423\u0442\u0438\u043B\u0438\u0442\u044B \u0438 \u0445\u0435\u043B\u043F\u0435\u0440\u044B \u043F\u0435\u0440\u0435\u0432\u0435\u0434\u0435\u043D\u044B \u043D\u0430 Typescript"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u041F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u043F\u0435\u0440\u0435\u0440\u0430\u0431\u043E\u0442\u0430\u043D \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0442\u0435\u043C\u044B"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u0412\u0441\u0435 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u044B \u0434\u043E\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u044B, \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u043E\u0445\u043E\u0434\u0438\u0442\u044C \u0432\u0430\u043B\u0438\u0434\u0430\u0446\u0438\u044E ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "tsc")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "TSDoc"), " \u043F\u0435\u0440\u0435\u0432\u0435\u0434\u0451\u043D \u043D\u0430 \u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u0438\u0439")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h3", {
    "id": "other-changes"
  }, "Other changes"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u041F\u0435\u0440\u0435\u0445\u043E\u0434 \u043D\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "yarn v2")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0430 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u044C \u043E\u0442 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "deepmerge")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "rollup"), " \u0431\u043E\u043B\u0435\u0435 \u043D\u0435 \u0433\u0435\u043D\u0435\u0440\u0438\u0440\u0443\u0435\u0442 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "cjs"), " \u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "esm"), " \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0438\u0438. \u0412\u043C\u0435\u0441\u0442\u043E \u044D\u0442\u043E\u0433\u043E \u0441\u043E\u0437\u0434\u0430\u0451\u0442\u0441\u044F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "dist"), ", \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0449\u0438\u0439 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "esm"), " \u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "cjs"), " \u0431\u0438\u043B\u0434\u044B \u043E\u0434\u0438\u043D\u043E\u0447\u043D\u044B\u043C\u0438 \u0444\u0430\u0439\u043B\u0430\u043C\u0438 \u0438 \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0438\u044E ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "types"), " \u0441 d.ts \u0434\u0435\u043A\u043B\u0430\u0440\u0430\u0446\u0438\u044F\u043C\u0438, \u043F\u043E\u0432\u0442\u043E\u0440\u044F\u044E\u0449\u0438\u043C\u0438 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0443 \u043F\u0440\u043E\u0435\u043A\u0442\u0430"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0430 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u044D\u043A\u0441\u043F\u043E\u0440\u0442\u043E\u0432 \u0430\u0432\u0442\u043E\u043A\u0438\u0442\u043E\u0432: \u0443\u0431\u0440\u0430\u043D\u0430 \u043E\u0431\u0451\u0440\u0442\u043A\u0430 \u0432 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "autokits"), ", \u0430\u0432\u0442\u043E\u043A\u0438\u0442\u044B \u043F\u043E\u043B\u0443\u0447\u0430\u044E\u0442\u0441\u044F \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E \u043F\u043E \u0438\u043C\u0435\u043D\u0438, \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "ColorsAutokit")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u0412 \u044D\u043A\u0441\u043F\u043E\u0440\u0442\u044B \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "Theme")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0430 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u044F \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0440\u0435\u043B\u0438\u0437\u043E\u043C"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u0418\u0437\u043C\u0435\u043D\u0451\u043D \u0444\u043E\u0440\u043C\u0430\u0442 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043E\u0432 \u0442\u0435\u043C: \u0432\u043C\u0435\u0441\u0442\u043E \u0441\u043D\u0438\u043F\u043F\u0435\u0442\u043E\u0432 \u0432\u044B\u0432\u043E\u0434\u044F\u0442\u0441\u044F \u0442\u0430\u0431\u043B\u0438\u0446\u044B \u043F\u043E \u0430\u043D\u0430\u043B\u043E\u0433\u0438\u0438 \u0441 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0435\u0439 \u043F\u0440\u043E\u043F\u0441\u043E\u0432"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u044F \u0441\u043E\u0441\u0442\u0430\u0432\u043D\u044B\u0445 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432/\u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043E\u0432 \u0437\u0430\u043C\u0435\u043D\u0435\u043D\u0430 \u0442\u0430\u0431\u0430\u043C\u0438 \u0432\u043C\u0435\u0441\u0442\u043E \u043F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0432\u044B\u0432\u043E\u0434\u0430 \u0442\u0430\u0431\u043B\u0438\u0446"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u041A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "Layout"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "Section"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "Container"), " \u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "VisuallyHidden"), " \u0441\u0433\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u044B \u0432 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "helpers")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0438 Storybook \u043F\u0435\u0440\u0435\u043F\u0438\u0441\u0430\u043D\u044B \u043D\u0430 \u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u043E\u043C, \u0442.\u043A. \u043D\u0430 \u043A\u0438\u0440\u0438\u043B\u043B\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0430\u0445 \u043D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442 \u0433\u0438\u043F\u0435\u0440\u0441\u0441\u044B\u043B\u043A\u0438"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u0423\u0434\u0430\u043B\u0435\u043D\u0430 \u043A\u0430\u0441\u0442\u043E\u043C\u043D\u0430\u044F \u0442\u0435\u043C\u0430 Storybook, \u0432\u043A\u043B\u044E\u0447\u0430\u044F \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u044B\u0439 \u043B\u043E\u0433\u043E\u0442\u0438\u043F"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u044B \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0438")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h3", {
    "id": "components"
  }, "Components"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u041F\u0440\u043E\u043F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "external"), " \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "Button"), " \u0442\u0435\u043F\u0435\u0440\u044C \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u0442 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "nofollow"), " \u0432 \u0430\u0442\u0440\u0438\u0431\u0443\u0442 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "rel")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u0423\u0431\u0440\u0430\u043D\u0430 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u043F\u0435\u0440\u0435\u0434\u0430\u0442\u044C jsx \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "Icon"), " \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "Button")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u041F\u0435\u0440\u0435\u0440\u0430\u0431\u043E\u0442\u0430\u043D \u043F\u0440\u043E\u043F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "as"), ", \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "href"), " \u0442\u0435\u043F\u0435\u0440\u044C \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u043F\u0440\u044F\u043C\u043E\u0433\u043E \u0443\u043A\u0430\u0437\u0430\u043D\u0438\u044F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "as=\"a\""))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h3", {
    "id": "theme"
  }, "Theme"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F Theming API \u043D\u0430\u0446\u0435\u043B\u0435\u043D\u044B \u043D\u0430 \u0443\u0445\u043E\u0434 \u043E\u0442 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u0438 \u0434\u043E\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0442\u044C \u0432 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u0445 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u044E\u0442\u0441\u044F \u0442\u043E\u043A\u0435\u043D\u0430\u043C \u2013 \u0432\u0441\u0435 \u043F\u043E\u0434\u043E\u0431\u043D\u044B\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043F\u0435\u0440\u0435\u043D\u0435\u0441\u0435\u043D\u044B \u0432 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "global"), ". \u0422\u0430\u043A\u0436\u0435 \u0443\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u0430 \u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0441\u0442\u044C \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u044B \u0442\u0435\u043C\u044B \u0437\u0430 \u0441\u0447\u0451\u0442 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0433\u0440\u0443\u043F\u043F \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "placeholder"), " \u043F\u0435\u0440\u0435\u043D\u0435\u0441\u0451\u043D \u0432 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "global")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "stacks"), " \u043F\u0435\u0440\u0435\u043D\u0435\u0441\u0435\u043D\u044B \u0432 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "global.fonts")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u041E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u0448\u0440\u0438\u0444\u0442\u043E\u0432 \u0432 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "global.fonts"), " \u043E\u0431\u0451\u0440\u043D\u0443\u0442\u044B \u0432 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "fontFace")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "fluid"), " \u0443\u0431\u0440\u0430\u043D\u044B \u0438\u0437 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "typography"), " \u0438 \u0442\u0435\u043F\u0435\u0440\u044C \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u044F\u0442\u0441\u044F \u0432 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "global.fonts")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u0413\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u044B\u0439 css \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442\u0441\u044F \u0432\u044B\u043D\u0435\u0441\u0435\u043D \u0438\u0437 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "global"), " \u0432 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "global.base")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u0421\u0442\u0438\u043B\u0438 \u0442\u0438\u043F\u043E\u0433\u0440\u0430\u0444\u0438\u043A\u0438 \u043E\u0431\u043E\u0440\u0430\u0447\u0438\u0432\u0430\u044E\u0442\u0441\u044F \u0432 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "styles")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u0422\u0435\u043C\u0438\u0437\u0430\u0446\u0438\u044F \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "Button"), " \u0432 \u0434\u0435\u0444\u043E\u043B\u0442\u043D\u043E\u043C \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0438 \u043E\u0431\u043E\u0440\u0430\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0432 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "default")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u0414\u043B\u044F \u043A\u043D\u043E\u043F\u043A\u0438 \u0443\u0431\u0440\u0430\u043D\u0430 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u043F\u0435\u0440\u0435\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0442\u044C \u043B\u044E\u0431\u044B\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0432 \u043B\u044E\u0431\u043E\u043C \u043C\u0435\u0441\u0442\u0435: \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "sizes"), " \u0447\u0451\u0442\u043A\u043E \u043E\u0442\u0434\u0435\u043B\u0435\u043D\u044B \u043E\u0442 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "themes"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h3", {
    "id": "development"
  }, "Development"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u042D\u0442\u0438 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u043D\u0435 \u043D\u0435\u0441\u0443\u0442 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439 \u0432 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0438 \u043F\u0430\u043A\u0435\u0442\u0430, \u0438 \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u044B \u0434\u043B\u044F \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u043E\u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u044B."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D \u043F\u043B\u0430\u0433\u0438\u043D Typescript \u0434\u043B\u044F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "yarn")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u044B \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "@types")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u041F\u0435\u0440\u0435\u0440\u0430\u0431\u043E\u0442\u0430\u043D ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "eslint"), " \u043A\u043E\u043D\u0444\u0438\u0433: \u043E\u0442\u043A\u0430\u0437 \u043E\u0442 \u043A\u043E\u043D\u0444\u0438\u0433\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "AirBnB"), " \u0438 \u043F\u043E\u043B\u043D\u0430\u044F \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 Typescript"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D \u043B\u0438\u043D\u0442\u0438\u043D\u0433 \u0434\u043B\u044F mdx \u0444\u0430\u0439\u043B\u043E\u0432 \u0447\u0435\u0440\u0435\u0437 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "eslint-plugin-mdx")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u0423\u0434\u0430\u043B\u0435\u043D\u044B d.ts \u0444\u0430\u0439\u043B\u044B \u0432 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430\u0445, \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u044B \u0432\u043D\u0435\u0441\u0435\u043D\u044B \u0432 tsx"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u041A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044F Storybook \u043F\u0435\u0440\u0435\u0432\u0435\u0434\u0435\u043D\u0430 \u043D\u0430 Typescript"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u0425\u0435\u043B\u043F\u0435\u0440 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "customTypography"), " \u043F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D \u0432 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "typography")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u0425\u0435\u043B\u043F\u0435\u0440 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "Item"), " \u043F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D \u0432 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "Placeholder")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u0425\u0435\u043B\u043F\u0435\u0440 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "Dropdown"), " \u043F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D \u0432 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "Tooltip")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u041F\u0435\u0440\u0435\u0440\u0430\u0431\u043E\u0442\u0430\u043D \u043A\u0430\u0441\u0442\u043E\u043C\u043D\u044B\u0439 \u0445\u0443\u043A ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "useCSSProperty")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D \u043A\u0430\u0441\u0442\u043E\u043C\u043D\u044B\u0439 \u0445\u0443\u043A ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "useComponentTheme"), " \u0434\u043B\u044F \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u043E\u0439 \u0432 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0435 \u0442\u0435\u043C\u044B"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D \u043A\u0430\u0441\u0442\u043E\u043C\u043D\u044B\u0439 \u0445\u0443\u043A ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "useLayout"), " \u0434\u043B\u044F \u0440\u0430\u0431\u043E\u0442\u044B \u0441 \u043A\u043E\u043D\u0442\u0435\u043A\u0441\u0442\u043E\u043C \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "Layout")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u0421\u043E\u0441\u0442\u0430\u0432\u043D\u044B\u0435 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B \u0440\u0430\u0437\u0431\u0438\u0442\u044B \u043D\u0430 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0435 \u0444\u0430\u0439\u043B\u044B"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u041A\u043E\u043D\u0441\u0442\u0430\u043D\u0442\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "MAJOR_STEP_DEFAULT"), " \u043F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0430 \u0432 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "MAJOR_STEP")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u041F\u0435\u0440\u0435\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u0430 \u043B\u043E\u0433\u0438\u043A\u0430 \u0440\u0430\u0431\u043E\u0442\u044B \u0441\u043E \u0441\u0442\u0438\u043B\u044F\u043C\u0438 \u0432 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "Button")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u044B \u043D\u0435\u0439\u043C\u0438\u043D\u0433\u0438 \u0432 \u0430\u0432\u0442\u043E\u043A\u0438\u0442\u0430\u0445: \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B \u0430\u0432\u0442\u043E\u043A\u0438\u0442\u043E\u0432 \u0438\u043C\u0435\u044E\u0442 \u0441\u0443\u0444\u0444\u0438\u043A\u0441 Autokit, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0435 \u0432 \u043D\u0438\u0445 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B \u043D\u0435 \u0438\u0437\u043C\u0435\u043D\u044F\u044E\u0442 \u043D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u0423\u0434\u0430\u043B\u0451\u043D \u0445\u0435\u043B\u043F\u0435\u0440 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "cloneElement")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u0418\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u044B \u0442\u0435\u043C \u0432\u044B\u043D\u0435\u0441\u0435\u043D\u044B \u0432 \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0438\u044E ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "types")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u0418\u0437\u043C\u0435\u043D\u0451\u043D \u043D\u0435\u0439\u043C\u0438\u043D\u0433 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043E\u0432: \"I\"-\u043D\u043E\u0442\u0430\u0446\u0438\u044F \u0431\u043E\u043B\u0435\u0435 \u043D\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D \u0441\u043A\u0440\u0438\u043F\u0442 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "tsc"), " \u0434\u043B\u044F \u0440\u0443\u0447\u043D\u043E\u0439 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u043D\u0430 \u0432\u0430\u043B\u0438\u0434\u043D\u043E\u0441\u0442\u044C Typescript, \u0435\u0433\u043E \u0437\u0430\u043F\u0443\u0441\u043A\u0442 \u0442\u0430\u043A\u0436\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D \u043D\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "precommit hook")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u0423\u0431\u0440\u0430\u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0447\u0435\u0440\u0435\u0437 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "babel"), ". \u0422\u0440\u0430\u043D\u0441\u043F\u0430\u0439\u043B\u0438\u043D\u0433 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0441\u044F \u0447\u0435\u0440\u0435\u0437 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "rollup-plugin-typescript2")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u041E\u0431\u0449\u0438\u0435 stories \u0432\u044B\u043D\u0435\u0441\u0435\u043D\u044B \u0438\u0437 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, ".storybook/docs"), " \u0432 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u0443\u044E \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0438\u044E ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "stories"), ", \u0447\u0442\u043E\u0431\u044B \u043E\u0431\u043E\u0439\u0442\u0438 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0443 \u0441 \u043D\u0435\u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0449\u0438\u043C \u043B\u0438\u043D\u0442\u0438\u043D\u0433\u043E\u043C mdx \u0432\u043D\u0443\u0442\u0440\u0438 dot-\u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0438\u0438"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u0412 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, ".storybook"), " \u0441\u043E\u0437\u0434\u0430\u043D\u0430 \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0438\u044F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "docgen"), " \u0434\u043B\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432, \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u044E\u0449\u0438\u0445 \u0432\u044B\u0432\u043E\u0434\u0438\u0442\u044C \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u044B \u0442\u0435\u043C \u0432 \u0432\u0438\u0434\u0435 \u0442\u0430\u0431\u043B\u0438\u0446 Storybook + \u0432\u044B\u0432\u043E\u0434\u0438\u0442\u044C \u0443\u043F\u0440\u043E\u0449\u0451\u043D\u043D\u044B\u0435 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u044B \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    "id": "100-february-11-2020"
  }, "1.0.0 (February 11, 2020)"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h3", {
    "id": "features"
  }, "Features"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\uD83D\uDD25 Core: ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "ThemeProvider"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "createTheme"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "useTheme"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "baseTheme")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\uD83E\uDDF1 Components: ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "Button"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "Layout"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "Section"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "Container"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "VisuallyHidden")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u2699\uFE0F Helpers: ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "typography"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "scale")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\uD83E\uDD16 Autokits: ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "Palettes"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "Colors"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "Typography"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "Icons"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "Layout"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "Shadows"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "Button")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u2728 Tokens: ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "palettes"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "colors"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "typography"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "icons"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "layout"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "shadows"))));
}

MDXContent.displayName = "MDXContent";
;
MDXContent.isMDXComponent = true;
var __page = function __page() {
  throw new Error("Docs-only story");
};
__page.parameters = {
  docsOnly: true
};
var componentMeta = {
  title: 'Intro / Changelog',
  includeStories: ["__page"]
};
var mdxStoryNameToKey = {};
componentMeta.parameters = componentMeta.parameters || {};
componentMeta.parameters.docs = Object.assign({}, componentMeta.parameters.docs || {}, {
  page: function page() {
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__["AddContext"], {
      mdxStoryNameToKey: mdxStoryNameToKey,
      mdxComponentMeta: componentMeta
    }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(MDXContent, null));
  }
});
/* harmony default export */ __webpack_exports__["default"] = (componentMeta);

/***/ }),

/***/ 1132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__page", function() { return __page; });
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
/* harmony import */ var _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__);




function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsxRuntime classic */

/* @jsx mdx */



var layoutProps = {};
var MDXLayout = "wrapper";

function MDXContent(_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__["Meta"], {
    title: "Intro / Development Guide",
    mdxType: "Meta"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h1", {
    "id": "development-guide"
  }, "Development Guide"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043D\u0430 \u044D\u0442\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0430 \u0434\u043B\u044F \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u043E\u0432 GDS."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    "id": "scripts"
  }, "Scripts"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("table", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("thead", {
    parentName: "table"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("tr", {
    parentName: "thead"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("th", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "th"
  }, "yarn <command>")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("th", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("tbody", {
    parentName: "table"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("tr", {
    parentName: "tbody"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("td", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "td"
  }, "build")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("td", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), "\u0412\u044B\u043F\u043E\u043B\u043D\u044F\u0435\u0442 \u043F\u043E\u043B\u043D\u0443\u044E \u0441\u0431\u043E\u0440\u043A\u0443 \u043F\u0430\u043A\u0435\u0442\u0430 \u0441 \u043E\u0447\u0438\u0441\u0442\u043A\u043E\u0439, \u0441\u0431\u043E\u0440\u043A\u043E\u0439 \u0431\u0430\u043D\u0434\u043B\u043E\u0432 \u0438 \u0442\u0438\u043F\u043E\u0432")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("tr", {
    parentName: "tbody"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("td", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "td"
  }, "build:main")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("td", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), "\u041F\u0430\u0440\u0430\u043B\u043B\u0435\u043B\u044C\u043D\u043E \u0441\u043E\u0431\u0438\u0440\u0430\u0435\u0442 \u0431\u0430\u043D\u0434\u043B\u044B \u0438 \u0442\u0438\u043F\u044B. \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0432 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "td"
  }, "build"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("tr", {
    parentName: "tbody"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("td", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "td"
  }, "build:rollup")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("td", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), "\u0421\u043E\u0431\u0438\u0440\u0430\u0435\u0442 \u0431\u0430\u043D\u0434\u043B \u0447\u0435\u0440\u0435\u0437 rollup. \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0432 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "td"
  }, "build:main"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("tr", {
    parentName: "tbody"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("td", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "td"
  }, "build:types")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("td", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), "\u0421\u043E\u0431\u0438\u0440\u0430\u0435\u0442 \u0442\u0438\u043F\u044B \u0447\u0435\u0440\u0435\u0437 tsc. \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0432 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "td"
  }, "build:main"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("tr", {
    parentName: "tbody"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("td", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "td"
  }, "clear")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("td", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), "\u041E\u0447\u0438\u0449\u0430\u0435\u0442 \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0438\u0438 \u0441\u0431\u043E\u0440\u043A\u0438")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("tr", {
    parentName: "tbody"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("td", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "td"
  }, "deploy")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("td", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), "\u0421\u043E\u0431\u0438\u0440\u0430\u0435\u0442 Storybook \u0438 \u0432\u044B\u0433\u0440\u0443\u0436\u0430\u0435\u0442 \u043D\u0430 Github Pages")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("tr", {
    parentName: "tbody"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("td", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "td"
  }, "eslint")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("td", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), "\u041B\u0438\u043D\u0442\u0438\u043D\u0433 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "td"
  }, ".js"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "td"
  }, ".ts"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "td"
  }, ".tsx"), " \u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "td"
  }, ".mdx"), " \u0444\u0430\u0439\u043B\u043E\u0432")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("tr", {
    parentName: "tbody"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("td", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "td"
  }, "lint-staged")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("td", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "td"
  }, "lint-staged"), " \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D \u0432 \u0441\u043A\u0440\u0438\u043F\u0442\u044B \u0434\u043B\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0441 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "td"
  }, "run-p"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("tr", {
    parentName: "tbody"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("td", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "td"
  }, "prepublishOnly")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("td", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), "\u0425\u0443\u043A, \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u044E\u0449\u0438\u0439 \u0441\u0431\u043E\u0440\u043A\u0443 \u043F\u0440\u0438 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438 \u0447\u0435\u0440\u0435\u0437 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "td"
  }, "npm publish"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("tr", {
    parentName: "tbody"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("td", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "td"
  }, "storybook")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("td", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), "\u0417\u0430\u043F\u0443\u0441\u043A\u0430\u0435\u0442 Storybook \u0432 dev \u0440\u0435\u0436\u0438\u043C\u0435")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("tr", {
    parentName: "tbody"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("td", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "td"
  }, "storybook:build")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("td", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), "\u0421\u043E\u0431\u0438\u0440\u0430\u0435\u0442 \u0441\u0442\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u0432\u0435\u0440\u0441\u0438\u044E Storybook \u0432 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "td"
  }, "docs"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("tr", {
    parentName: "tbody"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("td", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "td"
  }, "storybook:serve")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("td", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), "\u0417\u0430\u043F\u0443\u0441\u043A\u0430\u0435\u0442 \u0441\u0435\u0440\u0432\u0435\u0440 \u0434\u043B\u044F \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0430 \u0441\u0442\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0432\u0435\u0440\u0441\u0438\u0438")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("tr", {
    parentName: "tbody"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("td", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "td"
  }, "tokens")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("td", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), "\u041E\u0431\u043D\u043E\u0432\u043B\u044F\u0435\u0442 \u0442\u043E\u043A\u0435\u043D\u044B Figma \u0438\u0437 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0430")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("tr", {
    parentName: "tbody"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("td", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "td"
  }, "tokens:dev")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("td", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), "\u041E\u0431\u043D\u043E\u0432\u043B\u044F\u0435\u0442 \u0442\u043E\u043A\u0435\u043D\u044B Figma \u0438\u0437 development \u043F\u0440\u043E\u0435\u043A\u0442\u0430")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("tr", {
    parentName: "tbody"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("td", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "td"
  }, "tsc")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("td", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), "\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 Typescript (noEmit)")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    "id": "docs"
  }, "Docs"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0412 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0437\u0430\u0444\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0437\u0434\u0435\u0441\u044C \u0441\u043F\u0438\u0441\u043E\u043A emojis:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u2705 \u2013 \u0443\u0441\u043F\u0435\u0445, \xABdo\xBB"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u26D4 \u2013 \u043E\u0448\u0438\u0431\u043A\u0430, \xABdon't\xBB"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u2757\uFE0F \u2013 \u0432\u0430\u0436\u043D\u043E\u0435 \u0437\u0430\u043C\u0435\u0447\u0430\u043D\u0438\u0435"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\uD83D\uDCAC \u2013 \u0441\u043D\u043E\u0441\u043A\u0430"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u2728 \u2013 \u0434\u0438\u0437\u0430\u0439\u043D\u2013\u0442\u043E\u043A\u0435\u043D\u044B"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\uD83E\uDDF1 \u2013 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u2699\uFE0F \u2013 \u0443\u0442\u0438\u043B\u0438\u0442\u044B"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\uD83E\uDD16 \u2013 \u0430\u0432\u0442\u043E\u043A\u0438\u0442\u044B"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\uD83D\uDD25 - \u044F\u0434\u0440\u043E, \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\uD83C\uDFC6 \u2013 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0438, \u043B\u0443\u0447\u0448\u0438\u0435 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0438"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u267F\uFE0F \u2013 accessibility"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u23F1 \u2013 performance"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\uD83D\uDCDA \u2013 \u0441\u0441\u044B\u043B\u043A\u0438 \u043D\u0430 \u0441\u0442\u0430\u0442\u044C\u0438"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\uD83D\uDD28 \u2013 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044F"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\uD83D\uDEA7 \u2013 \u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0435")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0412\u0441\u0435 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0438 \u0432 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438 \u043F\u0438\u0441\u0430\u0442\u044C \u043D\u0430 \u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u043E\u043C, \u0442.\u043A. \u043D\u0430 \u043A\u0438\u0440\u0438\u043B\u043B\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442 \u0441\u0441\u044B\u043B\u043A\u0438."));
}

MDXContent.displayName = "MDXContent";
;
MDXContent.isMDXComponent = true;
var __page = function __page() {
  throw new Error("Docs-only story");
};
__page.parameters = {
  docsOnly: true
};
var componentMeta = {
  title: 'Intro / Development Guide',
  includeStories: ["__page"]
};
var mdxStoryNameToKey = {};
componentMeta.parameters = componentMeta.parameters || {};
componentMeta.parameters.docs = Object.assign({}, componentMeta.parameters.docs || {}, {
  page: function page() {
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__["AddContext"], {
      mdxStoryNameToKey: mdxStoryNameToKey,
      mdxComponentMeta: componentMeta
    }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(MDXContent, null));
  }
});
/* harmony default export */ __webpack_exports__["default"] = (componentMeta);

/***/ }),

/***/ 1133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__page", function() { return __page; });
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
/* harmony import */ var _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__);




function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsxRuntime classic */

/* @jsx mdx */



var layoutProps = {};
var MDXLayout = "wrapper";

function MDXContent(_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__["Meta"], {
    title: "Intro / Usage Guide",
    mdxType: "Meta"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h1", {
    "id": "usage-guide"
  }, "Usage Guide"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("code", _extends({
    parentName: "pre"
  }, {
    "className": "language-bash"
  }), "yarn add @greensight/gds\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "p"
  }, "\u0421\u0438\u0441\u0442\u0435\u043C\u043D\u044B\u0435 \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F:"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "react"), " \u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "react-dom"), " \u0432\u0435\u0440\u0441\u0438\u0438 16.8.0 \u0438 \u0432\u044B\u0448\u0435 (hooks support)."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    "id": "theme"
  }, "Theme"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "GDS \u043F\u043E\u0441\u0442\u0440\u043E\u0435\u043D \u043D\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Emotion"), " \u0438 \u043E\u0436\u0438\u0434\u0430\u0435\u0442 \u0443\u0432\u0438\u0434\u0435\u0442\u044C \u043E\u0431\u044A\u0435\u043A\u0442 \u0442\u0435\u043C\u044B. \u0427\u0435\u0440\u0435\u0437 \u0442\u0435\u043C\u0438\u0437\u0430\u0446\u0438\u044E \u0434\u043E\u0441\u0442\u0438\u0433\u0430\u0435\u0442\u0441\u044F \u043C\u0443\u043B\u044C\u0442\u0438\u0431\u0440\u0435\u043D\u0434\u043E\u0432\u043E\u0441\u0442\u044C \u0441\u0438\u0441\u0442\u0435\u043C\u044B."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0427\u0442\u043E\u0431\u044B \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C GDS \u0442\u0435\u043C\u0443, \u043E\u0431\u0435\u0440\u043D\u0438\u0442\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0432 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "ThemeProvider"), " \u0438 \u043F\u0435\u0440\u0435\u0434\u0430\u0439\u0442\u0435 \u0432 \u043D\u0435\u0433\u043E \u0432\u0430\u0448\u0443 \u0442\u0435\u043C\u0443:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("code", _extends({
    parentName: "pre"
  }, {
    "className": "language-js"
  }), "import { ThemeProvider } from '@greensight/gds';\nimport theme from './scripts/theme';\n\nhydrate(\n    <ThemeProvider theme={theme}>\n        <App />\n    </ThemeProvider>\n    document.querySelector('#root'),\n);\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\uD83D\uDCAC \u0414\u043B\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0439 \u0442\u0435\u043C\u044B \u043F\u0435\u0440\u0435\u0434\u0430\u0439\u0442\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "baseTheme"), " \u0438\u0437 GDS."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0422\u0435\u043C\u0430 \u0441\u043E\u0437\u0434\u0430\u0451\u0442\u0441\u044F \u0447\u0435\u0440\u0435\u0437 \u0443\u0442\u0438\u043B\u0438\u0442\u0443 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "createTheme"), " \u0438 \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u044F\u0435\u0442 \u0442\u043E\u043A\u0435\u043D\u044B \u0438 \u0440\u0443\u0447\u043D\u044B\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("code", _extends({
    parentName: "pre"
  }, {
    "className": "language-js"
  }), "import { createTheme } from '@greensight/gds';\n\nconst theme = createTheme({\n    tokens,\n    settings,\n});\n\nexport default theme;\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0417\u0434\u0435\u0441\u044C \u0432 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "tokens"), " \u043D\u0443\u0436\u043D\u043E \u043F\u0435\u0440\u0435\u0434\u0430\u0442\u044C \u043E\u0431\u044A\u0435\u043A\u0442 \u0438\u0437 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "tokens.json"), " \u0438\u043B\u0438 \u043E\u043F\u0443\u0441\u0442\u0438\u0442\u044C, \u0435\u0441\u043B\u0438 \u0442\u043E\u043A\u0435\u043D\u043E\u0432 \u043D\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u0435 \u043D\u0435\u0442."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\uD83D\uDCAC \u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u0441 webpack \u043E\u0431\u044A\u0435\u043A\u0442 \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0447\u0435\u0440\u0435\u0437 import json-\u0444\u0430\u0439\u043B\u0430."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "settings"), " - \u044D\u0442\u043E \u043E\u0431\u044A\u0435\u043A\u0442 \u0441 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u043C\u0438, \u0438\u043C\u0435\u044E\u0449\u0438\u0439 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0442\u0435\u043C\u044B. \u0418\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0441\u043E\u0441\u0442\u043E\u0438\u0442 \u0438\u0437 \u043D\u0430\u0431\u043E\u0440\u0430 \u043F\u043E\u043B\u0435\u0439, \u0444\u043E\u0440\u043C\u0430\u0442 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u043E\u043F\u0438\u0441\u0430\u043D \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0445 \u0440\u0430\u0437\u0434\u0435\u043B\u0430\u0445 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\uD83D\uDCAC \u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 \u043F\u0440\u043E \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u0442\u0435\u043C\u044B \u0441\u043C\u043E\u0442\u0440\u0438 \u0433\u0430\u0439\u0434 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "p"
  }, "Dev / Theming"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u041F\u043E\u0441\u043B\u0435 \u044D\u0442\u043E\u0433\u043E ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "ThemeProvider"), " \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438\u0442 \u043A\u043E\u043D\u0442\u0435\u043A\u0441\u0442 \u0432\u0441\u0435\u043C GDS \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430\u043C \u0438 \u043F\u043E\u0437\u0432\u043E\u043B\u0438\u0442 \u043E\u0431\u0440\u0430\u0449\u0430\u0442\u044C\u0441\u044F \u043A \u0442\u0435\u043C\u0435 \u0432\u043D\u0443\u0442\u0440\u0438 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432 \u0447\u0435\u0440\u0435\u0437 \u0445\u0443\u043A ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "useTheme"), ":"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("code", _extends({
    parentName: "pre"
  }, {
    "className": "language-js"
  }), "import { useTheme } from '@greensight/gds';\n\nconst Example = () => {\n    const { colors } = useTheme();\n    return <div css={{ backgroundColor: colors.brand }}>Example</div>;\n};\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    "id": "components"
  }, "Components"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u041F\u043E\u0441\u043B\u0435 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u044F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "ThemeProvider"), " \u0432\u0430\u043C \u0441\u0442\u0430\u043D\u0443\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("code", _extends({
    parentName: "pre"
  }, {
    "className": "language-js"
  }), "import { Button } from '@greensight/gds';\n\nconst Example = () => {\n    return <Button>Click me</Button>;\n};\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0412\u0441\u0435 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B \u043E\u043F\u0438\u0441\u0430\u043D\u044B \u0432 \u0440\u0430\u0437\u0434\u0435\u043B\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "p"
  }, "Components"), " \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    "id": "autokits"
  }, "Autokits"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u041D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0434\u0438\u0437\u0430\u0439\u043D-\u0441\u0438\u0441\u0442\u0435\u043C\u044B \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0442 \u0430\u0432\u0442\u043E\u043A\u0438\u0442\u044B \u2013 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B \u0434\u043B\u044F \u0434\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0445 \u0432\u0430\u0440\u0438\u0430\u0446\u0438\u0439 \u044D\u0442\u043E\u0433\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430, \u043F\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u044B\u0435 \u043D\u0430 \u0430\u043D\u0430\u043B\u0438\u0437\u0435 \u043E\u0431\u044A\u0435\u043A\u0442\u0430 \u0442\u0435\u043C\u044B."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u0441 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430\u043C\u0438 \u0438\u0434\u0451\u0442 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u0442\u0435\u043C\u044B, \u0430 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044F \u0432 \u0430\u0432\u0442\u043E\u043A\u0438\u0442\u0435."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0447\u0442\u043E\u0431\u044B \u0432\u044B\u0432\u0435\u0441\u0442\u0438 \u0432 Storybook \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u043D\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u0435 \u043A\u043D\u043E\u043F\u043A\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0430\u0432\u0442\u043E\u043A\u0438\u0442 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Button"), ":"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("code", _extends({
    parentName: "pre"
  }, {
    "className": "language-md"
  }), "import { Meta, Preview, Story } from '@storybook/addon-docs/blocks';\nimport { ButtonAutokit } from '@greensight/gds';\n\n<Meta title=\"Autokits / Button\" />\n\n# Button\n\n<Preview>\n    <Story name=\"basic\">\n        <ButtonAutokit />\n    </Story>\n</Preview>\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0412\u0441\u0435 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u0430\u0432\u0442\u043E\u043A\u0438\u0442\u044B \u043E\u043F\u0438\u0441\u0430\u043D\u044B \u0432 \u0440\u0430\u0437\u0434\u0435\u043B\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Autokits"), " \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    "id": "tokens"
  }, "Tokens"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\uD83C\uDFC6 \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0434\u0438\u0437\u0430\u0439\u043D-\u0442\u043E\u043A\u0435\u043D\u043E\u0432 \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u043E\u043F\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E, \u043D\u043E \u043D\u0430\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0412 GDS \u043C\u044B \u0434\u0435\u043B\u0430\u0435\u043C Figma \u0446\u0435\u043D\u0442\u0440\u043E\u043C \u0438\u0441\u0442\u0438\u043D\u044B \u0438 \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u043C \u0442\u043E\u043A\u0435\u043D\u044B \u0447\u0435\u0440\u0435\u0437 Figma API, \u0437\u0430\u0434\u0430\u0432 \u0441\u0442\u0440\u043E\u0433\u0443\u044E \u0441\u0438\u0441\u0442\u0435\u043C\u0443 \u043C\u0430\u043A\u0435\u0442\u043E\u0432 \u0434\u043B\u044F \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u043F\u0430\u0440\u0441\u0438\u043D\u0433\u0430."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0414\u043B\u044F \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0442\u043E\u043A\u0435\u043D\u043E\u0432 GDS \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 CLI \u0441\u043A\u0440\u0438\u043F\u0442 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "gds-tokens"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0422.\u043A. GDS \u043D\u0435 \u0441\u0442\u0430\u0432\u0438\u0442\u0441\u044F \u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u043E, \u0442\u043E \u0434\u043B\u044F \u0437\u0430\u043F\u0443\u0441\u043A\u0430 \u0434\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u0443 \u0432 \u0441\u043A\u0440\u0438\u043F\u0442\u044B ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "package.json"), " \u0438\u043B\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "npx"), ". \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("code", _extends({
    parentName: "pre"
  }, {
    "className": "language-json"
  }), "\"scripts\": {\n    \"tokens\": \"gds-tokens\"\n}\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("code", _extends({
    parentName: "pre"
  }, {
    "className": "language-bash"
  }), "yarn tokens\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0414\u043B\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0441\u043A\u0440\u0438\u043F\u0442\u0430 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u0444\u0430\u0439\u043B \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "gds.config.json"), " \u0432 \u043A\u043E\u0440\u043D\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u0430."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\uD83D\uDCAC \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0438 \u0438\u043C\u044F \u0444\u0430\u0439\u043B\u0430 \u0447\u0435\u0440\u0435\u0437 \u043E\u043F\u0446\u0438\u044E ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "p"
  }, "-c"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0432 \u0444\u0430\u0439\u043B\u0435 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u043B\u0438\u0447\u043D\u044B\u0439 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", _extends({
    parentName: "p"
  }, {
    "href": "https://www.figma.com/developers/api#authentication",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer"
  }), "Figma token"), " \u0432 \u043F\u043E\u043B\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "figmaToken"), " \u0438 id \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u0432 \u043F\u043E\u043B\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "figmaId"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\uD83D\uDCAC Figma Id \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C, \u043E\u0442\u043A\u0440\u044B\u0432 \u0441\u043F\u0438\u0441\u043E\u043A \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432 -> \u043F\u0440\u0430\u0432\u044B\u0439 \u043A\u043B\u0438\u043A \u043D\u0430 \u043F\u0440\u043E\u0435\u043A\u0442 -> \"Copy Link\" -> \"figma.com/file/", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "p"
  }, "FIGMA_ID"), "/project-name\"."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u2757\uFE0F Figma token - \u044D\u0442\u043E \u0441\u0435\u043A\u0440\u0435\u0442\u043D\u044B\u0439 \u043A\u043B\u044E\u0447, \u0442\u0430\u043A \u0447\u0442\u043E \u0443\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044C, \u0447\u0442\u043E \u0444\u0430\u0439\u043B \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D \u0432 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, ".gitignore"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u041F\u043E\u0441\u043B\u0435 \u044D\u0442\u043E\u0433\u043E \u0441\u043A\u0440\u0438\u043F\u0442 \u0441\u043C\u043E\u0436\u0435\u0442 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C\u0441\u044F \u043A \u0432\u0430\u0448\u0435\u043C\u0443 \u043F\u0440\u043E\u0435\u043A\u0442\u0443 \u0438 \u0441\u043A\u0430\u0447\u0430\u0442\u044C \u0442\u043E\u043A\u0435\u043D\u044B \u0438\u0437 \u0432\u0441\u0435\u0445 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0445 \u0444\u0440\u0435\u0439\u043C\u043E\u0432 \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Tokens"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\uD83D\uDCAC \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0431\u043D\u043E\u0432\u043B\u044F\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0435 \u0442\u043E\u043A\u0435\u043D\u044B, \u043F\u0435\u0440\u0435\u0434\u0430\u0432 \u0438\u0445 \u0438\u043C\u0435\u043D\u0430 \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u043E\u0432. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440: ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "--palettes --colors"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u041F\u043E\u0441\u043B\u0435 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u0441\u043A\u0440\u0438\u043F\u0442\u0430 \u0432\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 json \u0444\u0430\u0439\u043B \u0441\u043E \u0432\u0441\u0435\u043C\u0438 \u0442\u043E\u043A\u0435\u043D\u0430\u043C\u0438 \u0432 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "public/tokens.json"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0415\u0441\u043B\u0438 \u0432\u044B \u0441\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0438\u0440\u0443\u0435\u0442\u0435 \u0438\u043A\u043E\u043D\u043A\u0438, \u0442\u043E \u043E\u043D\u0438 \u0431\u0443\u0434\u0443\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B \u043F\u043E \u0430\u0434\u0440\u0435\u0441\u0443 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "src/client/images/icons/tokens"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "p"
  }, "\u041F\u043E\u043B\u043D\u044B\u0439 \u0441\u043F\u0438\u0441\u043E\u043A \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A:")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("table", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("thead", {
    parentName: "table"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("tr", {
    parentName: "thead"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("th", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), "\u041F\u043E\u043B\u0435"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("th", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("th", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), "\u0414\u0435\u0444\u043E\u043B\u0442\u043D\u044B\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("tbody", {
    parentName: "table"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("tr", {
    parentName: "tbody"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("td", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "td"
  }, "figmaToken")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("td", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), "\u041B\u0438\u0447\u043D\u044B\u0439 Figma token"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("td", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), "\u2013")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("tr", {
    parentName: "tbody"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("td", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "td"
  }, "figmaId")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("td", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), "id \u043F\u0440\u043E\u0435\u043A\u0442\u0430"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("td", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), "\u2013")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("tr", {
    parentName: "tbody"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("td", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "td"
  }, "tokensDir")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("td", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), "\u041F\u0443\u0442\u044C \u0434\u043B\u044F \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "td"
  }, "tokens.json")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("td", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), "'public'")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("tr", {
    parentName: "tbody"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("td", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "td"
  }, "iconsDir")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("td", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), "\u041F\u0443\u0442\u044C \u0434\u043B\u044F \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0438\u043A\u043E\u043D\u043E\u043A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("td", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), "'src/client/images/icons/tokens'")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("tr", {
    parentName: "tbody"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("td", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "td"
  }, "page")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("td", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B Figma \u0441 \u0442\u043E\u043A\u0435\u043D\u0430\u043C\u0438"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("td", _extends({
    parentName: "tr"
  }, {
    "align": null
  }), "'Tokens'")))));
}

MDXContent.displayName = "MDXContent";
;
MDXContent.isMDXComponent = true;
var __page = function __page() {
  throw new Error("Docs-only story");
};
__page.parameters = {
  docsOnly: true
};
var componentMeta = {
  title: 'Intro / Usage Guide',
  includeStories: ["__page"]
};
var mdxStoryNameToKey = {};
componentMeta.parameters = componentMeta.parameters || {};
componentMeta.parameters.docs = Object.assign({}, componentMeta.parameters.docs || {}, {
  page: function page() {
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__["AddContext"], {
      mdxStoryNameToKey: mdxStoryNameToKey,
      mdxComponentMeta: componentMeta
    }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(MDXContent, null));
  }
});
/* harmony default export */ __webpack_exports__["default"] = (componentMeta);

/***/ }),

/***/ 1134:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./button.stories.mdx": 1135,
	"./colors.stories.mdx": 1136,
	"./icons.stories.mdx": 1137,
	"./layout.stories.mdx": 1138,
	"./palettes.stories.mdx": 1139,
	"./shadows.stories.mdx": 1140,
	"./spacings.stories.mdx": 1141,
	"./typography.stories.mdx": 1142
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 1134;

/***/ }),

/***/ 1135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__page", function() { return __page; });
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
/* harmony import */ var _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__);




function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsxRuntime classic */

/* @jsx mdx */



var layoutProps = {};
var MDXLayout = "wrapper";

function MDXContent(_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__["Meta"], {
    title: "Design / Button",
    mdxType: "Meta"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h1", {
    "id": "button-🧱"
  }, "Button \uD83E\uDDF1\uD83E\uDD16"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0414\u0438\u0437\u0430\u0439\u043D\u0435\u0440 \u0440\u0438\u0441\u0443\u0435\u0442 \u043A\u043D\u043E\u043F\u043A\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u043D\u0430 \u0444\u0440\u0435\u0439\u043C\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Button"), " \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Ui-kit"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0414\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043E\u0442\u0440\u0438\u0441\u043E\u0432\u0430\u043D\u043E:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("ol", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ol"
  }, "\u0412\u0441\u0435 \u0442\u0435\u043C\u044B \u0432 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0445 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F\u0445"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ol"
  }, "\u0420\u0430\u0437\u043C\u0435\u0440\u044B \u043F\u043E\u0434 \u043E\u0441\u043D\u043E\u0432\u043D\u0443\u044E \u0442\u0435\u043C\u0443")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("img", {
    src: "images/buttons/frame.png",
    alt: "\u0424\u0440\u0435\u0439\u043C Button",
    width: "700"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("em", {
    parentName: "p"
  }, "\u0424\u0440\u0435\u0439\u043C Button")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0412\u0441\u0435 \u043E\u0441\u0442\u0430\u043B\u044C\u043D\u044B\u0435 \u0432\u0430\u0440\u0438\u0430\u0446\u0438\u0438 \u0431\u0443\u0434\u0443\u0442 \u0441\u043E\u0437\u0434\u0430\u043D\u044B \u043D\u0430 \u0444\u0440\u043E\u043D\u0442\u0435\u043D\u0434\u0435 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438: \u0431\u043B\u043E\u0447\u043D\u044B\u0435 \u043A\u043D\u043E\u043F\u043A\u0438, \u0438\u043A\u043E\u043D\u043E\u0447\u043D\u044B\u0435, \u043C\u043D\u043E\u0433\u043E\u0441\u0442\u0440\u043E\u0447\u043D\u044B\u0435, \u0441\u043E\u0447\u0435\u0442\u0430\u043D\u0438\u044F \u043A\u0430\u0436\u0434\u043E\u0439 \u0442\u0435\u043C\u044B \u0441 \u0440\u0430\u0437\u043C\u0435\u0440\u0430\u043C\u0438 \u0438 \u0442.\u0434. \u041E\u043D\u0438 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B \u0434\u043B\u044F \u0434\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0447\u0435\u0440\u0435\u0437 \u0430\u0432\u0442\u043E\u043A\u0438\u0442 (\u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u0430\u0432\u0442\u043E\u043A\u0438\u0442 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Button"), ")."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("img", {
    src: "images/buttons/result.png",
    alt: "\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u0432\u0430\u0440\u0438\u0430\u0446\u0438\u0438",
    width: "700"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("em", {
    parentName: "p"
  }, "\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u0432\u0430\u0440\u0438\u0430\u0446\u0438\u0438")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u041D\u0438\u0447\u0442\u043E \u043D\u0435 \u043C\u0435\u0448\u0430\u0435\u0442 \u043E\u0442\u0440\u0438\u0441\u043E\u0432\u0430\u0442\u044C \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u0446\u0438\u0438. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0431\u043B\u043E\u0447\u043D\u0443\u044E \u0438 \u043C\u043D\u043E\u0433\u043E\u0441\u0442\u0440\u043E\u0447\u043D\u0443\u044E, \u0447\u0442\u043E\u0431\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0438\u0445 \u0432 \u043C\u0430\u043A\u0435\u0442\u0430\u0445."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0422\u0430\u043A\u0436\u0435 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E \u043D\u0443\u0436\u043D\u043E \u043E\u0442\u0440\u0438\u0441\u043E\u0432\u0430\u0442\u044C \u043A\u0440\u0443\u0433\u043B\u0443\u044E \u0438\u043A\u043E\u043D\u043E\u0447\u043D\u0443\u044E \u043A\u043D\u043E\u043F\u043A\u0443, \u0435\u0441\u043B\u0438 \u0434\u043B\u044F \u0432\u0430\u0440\u0438\u0430\u0446\u0438\u0438 \u0431\u0435\u0437 \u0442\u0435\u043A\u0441\u0442\u0430 \u043D\u0443\u0436\u043D\u043E \u043F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u043E\u043B\u043D\u043E\u0435 \u0441\u043A\u0440\u0443\u0433\u043B\u0435\u043D\u0438\u0435."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    "id": "themes"
  }, "Themes"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "p"
  }, "\u0422\u0435\u043C\u0430"), " \u2014 \u044D\u0442\u043E \u0435\u0434\u0438\u043D\u043E\u0435 \u0441\u0442\u0438\u043B\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u0432 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u0445 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F\u0445."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\uD83C\uDFC6 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "primary"), " \u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "secondary"), " \u2013 \u0445\u043E\u0440\u043E\u0448\u0438\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F \u0434\u043B\u044F \u0442\u0435\u043C."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0412\u0441\u0435\u0433\u043E \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E 5 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0439:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("ol", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ol"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "default"), " \u2013 \u043E\u0431\u044B\u0447\u043D\u043E\u0435"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ol"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "hover"), " \u2013 \u043F\u0440\u0438 \u043D\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u0438"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ol"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "active"), " \u2013 \u043F\u0440\u0438 \u043D\u0430\u0436\u0430\u0442\u0438\u0438"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ol"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "disabled"), " \u2013 \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u043E"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ol"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "focus"), " \u2013 \u0444\u043E\u043A\u0443\u0441 \u0441 \u043A\u043B\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u044B")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u043C\u0438 \u0434\u043B\u044F \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u043E\u043C \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F 3 \u0438\u0437 \u043D\u0438\u0445: ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "p"
  }, "default"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "p"
  }, "hover"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "p"
  }, "disabled"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "p"
  }, "active"), " \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u0435\u0442 \u0441 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "p"
  }, "hover"), ", \u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "p"
  }, "focus"), " \u043D\u0430\u0441\u043B\u0435\u0434\u0443\u0435\u0442 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0444\u043E\u043A\u0443\u0441\u0430 \u0432\u0441\u0435\u0433\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0430 (\u043E\u0431\u044B\u0447\u043D\u043E \u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u044B\u0439 \u0431\u043E\u043A\u0441)."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    "id": "sizes"
  }, "Sizes"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0414\u0438\u0437\u0430\u0439\u043D\u0435\u0440 \u0440\u0438\u0441\u0443\u0435\u0442 \u0440\u0430\u0437\u043C\u0435\u0440\u044B \u043D\u0430 \u043F\u0440\u0438\u043C\u0435\u0440\u0435 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u0442\u0435\u043C\u044B. \u042D\u0442\u0438 \u0440\u0430\u0437\u043C\u0435\u0440\u044B \u0431\u0443\u0434\u0443\u0442 \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u044B \u043A\u043E \u0432\u0441\u0435\u043C \u0442\u0435\u043C\u0430\u043C. \u041E\u0431\u044B\u0447\u043D\u043E \u0438\u0445 \u0442\u0440\u0438, \u0433\u0434\u0435 \u0441\u0440\u0435\u0434\u043D\u044F\u044F \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0439, \u043D\u043E \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u0439 \u043D\u0430 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043D\u0435\u0442."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\uD83C\uDFC6 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "lg"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "md"), " \u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "sm"), " \u2013 \u0445\u043E\u0440\u043E\u0448\u0438\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F \u0434\u043B\u044F \u0440\u0430\u0437\u043C\u0435\u0440\u043E\u0432."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u041F\u0440\u0438 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0438 \u0440\u0430\u0437\u043C\u0435\u0440\u0430 \u0432 \u043A\u043D\u043E\u043F\u043A\u0435 \u043C\u043E\u0433\u0443\u0442 \u043C\u0435\u043D\u044F\u0442\u044C\u0441\u044F \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u0441\u0442\u0438\u043B\u0438:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("ol", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ol"
  }, "\u0422\u0438\u043F\u043E\u0433\u0440\u0430\u0444\u0438\u043A\u0430"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ol"
  }, "\u0412\u044B\u0441\u043E\u0442\u0430"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ol"
  }, "\u0413\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u044B\u0435 \u043F\u043E\u043B\u044F"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ol"
  }, "\u0420\u0430\u0437\u043C\u0435\u0440 \u0438\u043A\u043E\u043D\u043A\u0438"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ol"
  }, "\u041E\u0442\u0441\u0442\u0443\u043F \u043C\u0435\u0436\u0434\u0443 \u0438\u043A\u043E\u043D\u043A\u043E\u0439 \u0438 \u0442\u0435\u043A\u0441\u0442\u043E\u043C")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u041A\u043D\u043E\u043F\u043A\u0438 \u0434\u0435\u043B\u0430\u044E\u0442\u0441\u044F \u0432 Auto Layout."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u041F\u043E\u0441\u043A\u043E\u043B\u044C\u043A\u0443 Auto Layout \u043C\u043E\u0436\u0435\u0442 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u043C\u0435\u043D\u044F\u0442\u044C \u0448\u0438\u0440\u0438\u043D\u0443, \u0432 \u043A\u043D\u043E\u043F\u043A\u0443 \u043B\u0443\u0447\u0448\u0435 \u0441\u0440\u0430\u0437\u0443 \u043F\u043E\u043B\u043E\u0436\u0438\u0442\u044C \u0438\u043A\u043E\u043D\u043A\u0443 \u0441\u043B\u0435\u0432\u0430 \u0438 \u0441\u043F\u0440\u0430\u0432\u0430 \u043E\u0442 \u0442\u0435\u043A\u0441\u0442\u0430 \u0438 \u0441\u043A\u0440\u044B\u0442\u044C. \u042D\u0442\u043E \u043F\u043E\u0437\u0432\u043E\u043B\u0438\u0442 \u0433\u0438\u0431\u043A\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043D\u044B\u0439 \u043F\u043E\u0434\u0445\u043E\u0434."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0418\u043A\u043E\u043D\u043A\u0438 \u0438 \u0442\u0435\u043A\u0441\u0442 \u0432\u044B\u0440\u0430\u0432\u043D\u0438\u0432\u0430\u044E\u0442\u0441\u044F \u043F\u043E \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u043E\u043C\u0443 \u0446\u0435\u043D\u0442\u0440\u0443, \u0442\u0435\u043A\u0441\u0442\u0443 \u0437\u0430\u0434\u0430\u0451\u0442\u0441\u044F \u0441\u0442\u0438\u043B\u044C \u0438\u0437 \u0442\u0438\u043F\u043E\u0433\u0440\u0430\u0444\u0438\u043A\u0438."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0412 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u0445 \u0437\u0430\u0434\u0430\u0451\u0442\u0441\u044F \u0444\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0432\u044B\u0441\u043E\u0442\u0430, \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u044B\u0435 \u043E\u0442\u0441\u0442\u0443\u043F\u044B \u0438 \u043E\u0442\u0441\u0442\u0443\u043F \u043C\u0435\u0436\u0434\u0443 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u043C\u0438 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u043C\u0438."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("img", {
    src: "images/buttons/auto-layout.png",
    alt: "\u041F\u0430\u043D\u0435\u043B\u044C Auto Layout \u0432 Figma",
    width: "400"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("em", {
    parentName: "p"
  }, "\u041F\u0430\u043D\u0435\u043B\u044C Auto Layout \u0432 Figma")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0411\u043B\u043E\u0447\u043D\u044B\u0435 \u043A\u043D\u043E\u043F\u043A\u0438 \u0434\u0435\u043B\u0430\u044E\u0442\u0441\u044F \u043F\u043E \u0441\u0442\u0430\u0440\u043E\u043C\u0443 \u043F\u0440\u0438\u043D\u0446\u0438\u043F\u0443 \u0431\u0435\u0437 Auto Layout."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0414\u043B\u044F \u0437\u0430\u0434\u0430\u043D\u0438\u044F \u0442\u0438\u043F\u043E\u0433\u0440\u0430\u0444\u0438\u043A\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442\u0441\u044F \u0441\u0442\u0438\u043B\u0438 \u0438\u0437 \u0444\u0440\u0435\u0439\u043C\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Typography"), ". \u041E\u0431\u044B\u0447\u043D\u043E \u044D\u0442\u043E \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u043F\u043E\u0434 \u043A\u0430\u0436\u0434\u044B\u0439 \u0440\u0430\u0437\u043C\u0435\u0440 \u0431\u0435\u0437 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "mobile"), " \u0432\u0435\u0440\u0441\u0438\u0438 (\u0442.\u0435. \u0441\u0442\u0430\u0442\u0438\u0447\u043D\u044B\u0435)."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u041D\u0430 \u043F\u0440\u0438\u043C\u0435\u0440\u0435 GDS:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("ol", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ol"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "buttonLg"), " \u2013 \u0431\u043E\u043B\u044C\u0448\u0430\u044F"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ol"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "buttonMd"), " \u2013 \u0441\u0440\u0435\u0434\u043D\u044F\u044F"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ol"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "buttonSm"), " \u2013 \u043C\u0430\u043B\u0430\u044F")));
}

MDXContent.displayName = "MDXContent";
;
MDXContent.isMDXComponent = true;
var __page = function __page() {
  throw new Error("Docs-only story");
};
__page.parameters = {
  docsOnly: true
};
var componentMeta = {
  title: 'Design / Button',
  includeStories: ["__page"]
};
var mdxStoryNameToKey = {};
componentMeta.parameters = componentMeta.parameters || {};
componentMeta.parameters.docs = Object.assign({}, componentMeta.parameters.docs || {}, {
  page: function page() {
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__["AddContext"], {
      mdxStoryNameToKey: mdxStoryNameToKey,
      mdxComponentMeta: componentMeta
    }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(MDXContent, null));
  }
});
/* harmony default export */ __webpack_exports__["default"] = (componentMeta);

/***/ }),

/***/ 1136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__page", function() { return __page; });
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
/* harmony import */ var _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__);




function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsxRuntime classic */

/* @jsx mdx */



var layoutProps = {};
var MDXLayout = "wrapper";

function MDXContent(_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__["Meta"], {
    title: "Design / Colors",
    mdxType: "Meta"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h1", {
    "id": "colors-"
  }, "Colors \u2728\uD83E\uDD16"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u041D\u0430 \u0444\u0440\u0435\u0439\u043C\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Colors"), " \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u044E\u0442\u0441\u044F \u0446\u0432\u0435\u0442\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u0430, \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u043C\u044B\u0435 \u0438\u0437 \u043F\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u044B\u0445 \u043F\u0430\u043B\u0438\u0442\u0440."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u2757\uFE0F \u0421\u0435\u0439\u0447\u0430\u0441 \u043D\u0435\u0442 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u043F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C \u0442\u043E\u043A\u0435\u043D\u0438\u0437\u0430\u0446\u0438\u044E \u0434\u043B\u044F \u0433\u0440\u0430\u0434\u0438\u0435\u043D\u0442\u043E\u0432, \u0442\u0430\u043A \u0447\u0442\u043E \u043E\u043D\u0438 \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u044E\u0442\u0441\u044F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "p"
  }, "\u043D\u0430 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E\u043C \u0444\u0440\u0435\u0439\u043C\u0435"), ", \u0438 \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u044F\u0442\u0441\u044F \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u043E\u043C \u0432\u0440\u0443\u0447\u043D\u0443\u044E."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("img", {
    src: "images/colors/structure-colors.png",
    alt: "\u0421\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u0444\u0440\u0435\u0439\u043C\u0430 Colors",
    width: "400"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("em", {
    parentName: "p"
  }, "\u0421\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u0444\u0440\u0435\u0439\u043C\u0430 Colors")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u041D\u0430 \u0444\u0440\u0435\u0439\u043C\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Colors"), " \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043B\u044E\u0431\u043E\u0435 \u0440\u0430\u0437\u0443\u043C\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0446\u0432\u0435\u0442\u043E\u0432. \u0414\u0438\u0437\u0430\u0439\u043D\u0435\u0440 \u043F\u0440\u0435\u0434\u043F\u043E\u043B\u0430\u0433\u0430\u0435\u0442, \u0433\u0434\u0435 \u0432 \u043F\u0440\u043E\u0435\u043A\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0446\u0432\u0435\u0442, \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u0442 \u0444\u0440\u0435\u0439\u043C \u0438 \u0434\u0430\u0435\u0442 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u043F\u0438\u0448\u0435\u0442\u0441\u044F \u0442\u0435\u043A\u0441\u0442\u043E\u043C \u043D\u0430 \u0446\u0432\u0435\u0442\u0435. \u0412 \u0441\u043B\u043E\u044F\u0445 \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u044B\u0432\u0430\u0435\u0442\u0441\u044F."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0426\u0432\u0435\u0442\u0430 \u0433\u0440\u0443\u043F\u043F\u0438\u0440\u0443\u044E\u0442\u0441\u044F \u0432\u0438\u0437\u0443\u0430\u043B\u044C\u043D\u043E \u043F\u043E \u043F\u0440\u0438\u043D\u0446\u0438\u043F\u0443 \xAB\u041D\u0435\u0439\u0442\u0440\u0430\u043B\u044C\u043D\u044B\u0435\xBB \u0438 \xAB\u0424\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435\xBB:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("img", {
    src: "images/colors/neutrals.png",
    alt: "\u041D\u0435\u0439\u0442\u0440\u0430\u043B\u044C\u043D\u044B\u0435 \u0446\u0432\u0435\u0442\u0430"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("em", {
    parentName: "p"
  }, "\u041D\u0435\u0439\u0442\u0440\u0430\u043B\u044C\u043D\u044B\u0435 \u0446\u0432\u0435\u0442\u0430")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("img", {
    src: "images/colors/functional.png",
    alt: "\u0424\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0446\u0432\u0435\u0442\u0430"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("em", {
    parentName: "p"
  }, "\u0424\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0446\u0432\u0435\u0442\u0430")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\uD83C\uDFC6 \u0423 \u0446\u0432\u0435\u0442\u0430 \u0435\u0441\u0442\u044C \u043F\u043E\u043B\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u044F. \u041E\u043D\u043E \u043E\u043F\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E, \u043D\u043E \u0435\u0433\u043E \u043C\u043E\u0436\u043D\u043E \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u044C, \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043D\u0442\u0435\u043A\u0441\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445 \u0434\u0440\u0443\u0433\u0438\u043C \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0430\u043C/\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u0430\u043C."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0424\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0446\u0432\u0435\u0442\u0430 \u043C\u043E\u0436\u043D\u043E \u0440\u0430\u0437\u0431\u0438\u0442\u044C \u043D\u0430 \u0433\u0440\u0443\u043F\u043F\u044B:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0435"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u0444\u0443\u043D\u043A\u0446\u0438\u0438"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0435")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "p"
  }, "\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u0446\u0432\u0435\u0442\u0430"), " \u0441\u0442\u0440\u043E\u044F\u0442\u0441\u044F \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0438 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0451\u043D\u043D\u044B\u0445 \u0440\u0430\u043D\u0435\u0435 \u043F\u0430\u043B\u0438\u0442\u0440. \u042D\u0442\u043E \u0431\u043E\u043B\u044C\u0448\u0438\u043D\u0441\u0442\u0432\u043E \u0446\u0432\u0435\u0442\u043E\u0432 \u043F\u0440\u043E\u0435\u043A\u0442\u0430, \u0432\u0441\u0451 \u043E\u0441\u0442\u0430\u043B\u044C\u043D\u043E\u0435 \u2013 \u044D\u0442\u043E \u0443\u0436\u0435 \u0438\u0441\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "p"
  }, "\u0426\u0432\u0435\u0442\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0439"), " \u2013 \u044D\u0442\u043E error, success \u0438 warning. \u042D\u0442\u043E \u0432\u0441\u0435\u0433\u0434\u0430 \u043A\u0440\u0430\u0441\u043D\u044B\u0439, \u0437\u0435\u043B\u0451\u043D\u044B\u0439 \u0438 \u0436\u0451\u043B\u0442\u044B\u0439 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E. \u041E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u044D\u0442\u0438\u0445 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445 \u0432 \u0442\u043E\u043C, \u0447\u0442\u043E \u043E\u043D\u0438 \u0430\u0441\u0441\u043E\u0446\u0438\u0438\u0440\u0443\u044E\u0442\u0441\u044F \u0441 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0451\u043D\u043D\u044B\u043C\u0438 \u0446\u0432\u0435\u0442\u0430\u043C\u0438 (\u043A\u0440\u0430\u0441\u043D\u044B\u0439, \u0437\u0435\u043B\u0451\u043D\u044B\u0439 \u0438 \u0436\u0451\u043B\u0442\u044B\u0439), \u0447\u0442\u043E \u0434\u0435\u043B\u0430\u0435\u0442 \u0438\u0445 \u0438\u0441\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F\u043C\u0438 \u2013 \u043E\u043D\u0438 \u043C\u043E\u0433\u0443\u0442 \u0431\u0440\u0430\u0442\u044C\u0441\u044F \u043D\u0435 \u0438\u0437 \u043F\u0430\u043B\u0438\u0442\u0440\u044B. \u041E\u0434\u043D\u0430\u043A\u043E \u0435\u0441\u043B\u0438 \u0432 \u043F\u0430\u043B\u0438\u0442\u0440\u0435 \u043F\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043E\u0442\u0442\u0435\u043D\u043E\u043A \u0438\u0437 \u044D\u0442\u0438\u0445 \u0442\u0440\u0451\u0445 \u0446\u0432\u0435\u0442\u043E\u0432, \u0446\u0432\u0435\u0442 \u0444\u0443\u043D\u043A\u0446\u0438\u0438 \u043B\u0443\u0447\u0448\u0435 \u043F\u043E\u0434\u0431\u0438\u0440\u0430\u0442\u044C \u0438\u0437 \u043F\u0430\u043B\u0438\u0442\u0440\u044B."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("img", {
    src: "images/colors/functions.png",
    alt: "\u0426\u0432\u0435\u0442\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0439",
    width: "550"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("em", {
    parentName: "p"
  }, "\u0426\u0432\u0435\u0442\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0439")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0415\u0434\u0438\u043D\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u043C \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u0446\u0432\u0435\u0442\u043E\u043C \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F error, \u0442.\u043A. \u043D\u0430 \u0432\u0441\u0435\u0445 \u043F\u0440\u043E\u0435\u043A\u0442\u0430\u0445 \u0435\u0441\u0442\u044C \u0432\u0430\u043B\u0438\u0434\u0430\u0446\u0438\u044F, \u0430 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F \u043E\u0431 \u043E\u0448\u0438\u0431\u043A\u0430\u0445. \u042D\u0442\u043E \u0441\u043F\u0440\u0430\u0432\u0435\u0434\u043B\u0438\u0432\u043E \u0434\u0430\u0436\u0435 \u0432 \u0442\u0435\u0445 \u0441\u043B\u0443\u0447\u0430\u044F\u0445, \u043A\u043E\u0433\u0434\u0430 \u043E\u0448\u0438\u0431\u043A\u0438 \u043D\u0435 \u043E\u0442\u0440\u0430\u0436\u0435\u043D\u044B \u0432 \u043C\u0430\u043A\u0435\u0442\u0430\u0445."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "p"
  }, "\u0423\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0446\u0432\u0435\u0442\u0430"), " \u2013 \u044D\u0442\u043E \u043F\u0440\u043E\u0447\u0438\u0435 \u0446\u0432\u0435\u0442\u0430-\u0438\u0441\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0440\u0430\u0437\u043D\u043E\u0446\u0432\u0435\u0442\u043D\u044B\u0435 \u0448\u0438\u043B\u044C\u0434\u0438\u043A\u0438, \u043D\u0435 \u043D\u0435\u0441\u0443\u0449\u0438\u0435 \u0437\u0430 \u0441\u043E\u0431\u043E\u0439 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0451\u043D\u043D\u044B\u0439 \u0446\u0432\u0435\u0442."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("img", {
    src: "images/colors/tags.png",
    alt: "\u0426\u0432\u0435\u0442\u0430 \u0448\u0438\u043B\u044C\u0434\u0438\u043A\u043E\u0432",
    width: "650"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("em", {
    parentName: "p"
  }, "\u0426\u0432\u0435\u0442\u0430 \u0448\u0438\u043B\u044C\u0434\u0438\u043A\u043E\u0432")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u041F\u043E\u0441\u043B\u0435 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u0446\u0432\u0435\u0442\u043E\u0432 \u043D\u0430 \u0444\u0440\u0435\u0439\u043C\u0430\u0445 \u043E\u043D\u0438 \u0441\u0442\u0430\u043D\u043E\u0432\u044F\u0442\u0441\u044F \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u0430\u043C \u0432 \u0432\u0438\u0434\u0435 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445, \u0430 \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u044B \u0432\u044B\u0434\u0435\u043B\u044F\u044E\u0442 \u0438\u0445 \u0432 \u0441\u0442\u0438\u043B\u0438 Figma. \u0412 \u0438\u0442\u043E\u0433\u0435 \u043E\u0431\u0430 \u043E\u0442\u0434\u0435\u043B\u0430 \u043E\u0431\u0449\u0430\u044E\u0442\u0441\u044F \u043D\u0430 \u043E\u0434\u043D\u043E\u043C \u044F\u0437\u044B\u043A\u0435, \u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u043E\u043C \u0441\u0442\u0438\u043B\u044F \u043F\u0440\u0438\u0432\u043E\u0434\u0438\u0442 \u043A \u043C\u0433\u043D\u043E\u0432\u0435\u043D\u043D\u043E\u043C\u0443 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044E \u044D\u0442\u043E\u0433\u043E \u0446\u0432\u0435\u0442\u0430 \u043D\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u0435 (\u043F\u043E\u0441\u043B\u0435 \u0432\u044B\u043A\u0430\u0447\u0438\u0432\u0430\u043D\u0438\u044F \u0442\u043E\u043A\u0435\u043D\u043E\u0432)."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("img", {
    src: "images/colors/figma-styles.png",
    alt: "\u0421\u0442\u0438\u043B\u0438 \u0446\u0432\u0435\u0442\u043E\u0432 \u0432 Figma",
    width: "250"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("em", {
    parentName: "p"
  }, "\u0421\u0442\u0438\u043B\u0438 \u0446\u0432\u0435\u0442\u043E\u0432 \u0432 Figma")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    "id": "variables-names"
  }, "Variables names"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0417\u0430\u0434\u0430\u0447\u0430 \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0430 \u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u0434\u043E\u0431\u0440\u0430\u0442\u044C \u0446\u0432\u0435\u0442\u0430, \u043D\u043E \u0438 \u043F\u0440\u0438\u0441\u0432\u043E\u0438\u0442\u044C \u0438\u043C \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435. \u042D\u0442\u043E \u0434\u0435\u043B\u0430\u0435\u0442\u0441\u044F \u0432\u043E \u0444\u0440\u0435\u0439\u043C\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Colors"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u041F\u0440\u0430\u0432\u0438\u043B\u0430:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u041F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442 \u0444\u043E\u0440\u043C\u0430\u0442 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", _extends({
    parentName: "li"
  }, {
    "href": "https://ru.wikipedia.org/wiki/CamelCase",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer"
  }), "lowerCamelCase"), ": \u043F\u0435\u0440\u0432\u043E\u0435 \u0441\u043B\u043E\u0432\u043E \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442\u0441\u044F \u0441\u043E \u0441\u0442\u0440\u043E\u0447\u043D\u043E\u0439, \u043A\u0430\u0436\u0434\u043E\u0435 \u043F\u043E\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0435 \u2014 \u0441 \u043F\u0440\u043E\u043F\u0438\u0441\u043D\u043E\u0439. \u041D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u043B\u043E\u0432 \u043F\u0438\u0448\u0443\u0442\u0441\u044F \u0441\u043B\u0438\u0442\u043D\u043E \u0431\u0435\u0437 \u043F\u0440\u043E\u0431\u0435\u043B\u0430, \u0434\u0435\u0444\u0438\u0441\u0430 \u0438\u043B\u0438 \u043D\u0438\u0436\u043D\u0435\u0433\u043E \u043F\u043E\u0434\u0447\u0435\u0440\u043A\u0438\u0432\u0430\u043D\u0438\u044F."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u041C\u044B \u043D\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C \u0442\u0440\u0430\u043D\u0441\u043B\u0438\u0442\u0435\u0440\u0430\u0446\u0438\u044E \u2014 \u0432\u0441\u0435 \u0441\u043B\u043E\u0432\u0430 \u043F\u0438\u0448\u0443\u0442\u0441\u044F \u043D\u0430 \u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u043E\u043C.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0418\u0434\u0435\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043C\u0435\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445 \u043D\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442 \u0432 \u043E\u0431\u043E\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F\u0445 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F \u0446\u0432\u0435\u0442\u043E\u0432 \u0438 \u043D\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442 \u043F\u0440\u0438\u0432\u044F\u0437\u043A\u0438 \u043A \u0441\u0435\u043C\u0430\u043D\u0442\u0438\u043A\u0435, \u0442.\u043A. \u0432 \u043F\u0435\u0440\u0432\u043E\u043C \u0441\u043B\u0443\u0447\u0430\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043C\u043E\u0436\u0435\u0442 \u043F\u043E\u0442\u0435\u0440\u044F\u0442\u044C \u0441\u043C\u044B\u0441\u043B \u043F\u0440\u0438 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0438 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F, \u0430 \u0432\u043E \u0432\u0442\u043E\u0440\u043E\u043C \u2013 \u043F\u0440\u0438 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0438 \u043D\u043E\u0432\u043E\u0439 \u0444\u0443\u043D\u043A\u0446\u0438\u0438 \u043A \u0442\u043E\u043C\u0443 \u0436\u0435 \u0446\u0432\u0435\u0442\u0443."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u26D4\uFE0F h2Grey"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u26D4\uFE0F paragraphBlue70"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u26D4\uFE0F Black_button"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u2705 titlePromo"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u2705 link"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u2705 dark"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0414\u043B\u044F \u0433\u0440\u0443\u043F\u043F\u044B \u043D\u0435\u0439\u0442\u0440\u0430\u043B\u044C\u043D\u044B\u0445 \u0446\u0432\u0435\u0442\u043E\u0432 \u0432\u0441\u0451 \u043F\u0440\u043E\u0449\u0435 \u2013 \u043D\u0435\u0439\u043C\u0438\u043D\u0433\u0438 \u0441\u0442\u0440\u043E\u044F\u0442\u0441\u044F \u043D\u0430 \u0433\u0440\u0430\u0434\u0430\u0446\u0438\u0438 \u0442\u043E\u043D\u043E\u0432 (\u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F\u043C \u0438\u0437 \u043F\u0430\u043B\u0438\u0442\u0440\u044B).\u0412 \u043D\u0435\u0439\u0442\u0440\u0430\u043B\u044C\u043D\u044B\u0445 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445 \u0432 \u043D\u0435\u0439\u043C\u0438\u043D\u0433\u0435 \u043D\u0443\u0436\u043D\u043E \u043F\u0440\u0438\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0442\u044C\u0441\u044F \u0433\u0440\u0430\u0434\u0430\u0446\u0438\u0438 \u0442\u043E\u043D\u043E\u0432: grey0, grey20, grey40... \u041F\u0440\u0438 \u044D\u0442\u043E\u043C \u043D\u0435 \u0441\u0442\u043E\u0438\u0442 \u0432\u044B\u043D\u043E\u0441\u0438\u0442\u044C \u0441\u0440\u0430\u0437\u0443 \u0432\u0441\u0435 \u2013 \u044D\u0442\u043E \u0441\u043E\u0437\u0434\u0430\u0451\u0442 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0443 \u0441 \u043F\u0435\u0440\u0435\u0438\u0437\u0431\u044B\u0442\u043A\u043E\u043C \u0446\u0432\u0435\u0442\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u043C\u044B \u043A\u0430\u043A \u0440\u0430\u0437 \u043F\u044B\u0442\u0430\u0435\u043C\u0441\u044F \u0440\u0435\u0448\u0438\u0442\u044C."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0421\u0438\u0441\u0442\u0435\u043C\u043D\u044B\u0435 \u0446\u0432\u0435\u0442\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "black"), " \u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "white"), " \u0437\u0430\u043D\u043E\u0441\u044F\u0442\u0441\u044F \u0432 \u043D\u0435\u0439\u0442\u0440\u0430\u043B\u044C\u043D\u044B\u0435 \u043E\u0442\u0442\u0435\u043D\u043A\u0438 \u0432\u0441\u0435\u0433\u0434\u0430 \u0438 \u043D\u0435 \u0443\u0447\u0430\u0441\u0442\u0432\u0443\u044E\u0442 \u0432 \u043F\u0430\u043B\u0438\u0442\u0440\u0430\u0445."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0422\u0430\u043A\u0436\u0435 \u0432 \u043D\u0435\u0439\u0442\u0440\u0430\u043B\u044C\u043D\u044B\u0445 \u0446\u0432\u0435\u0442\u0430\u0445 \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u043F\u043E\u043B\u0443\u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u044B\u0435 \u0432\u0430\u0440\u0438\u0430\u0446\u0438\u0438, \u043F\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u044B\u0435 \u043D\u0430 \u0446\u0432\u0435\u0442\u0430\u0445 \u043F\u0430\u043B\u0438\u0442\u0440\u044B \u0441 \u043F\u0440\u0438\u043C\u0435\u043D\u0451\u043D\u043D\u044B\u043C \u0430\u043B\u044C\u0444\u0430-\u043A\u0430\u043D\u0430\u043B\u043E\u043C. \u041F\u0440\u0438\u043C\u0435\u0440\u043E\u043C \u043C\u043E\u0436\u0435\u0442 \u0441\u043B\u0443\u0436\u0438\u0442\u044C \u043F\u043E\u0434\u043B\u043E\u0436\u043A\u0430 \u0443 \u043F\u043E\u043F\u0430\u043F\u043E\u0432 \u2013 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u0430\u044F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "fade"), " \u0432 GDS."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u2757\uFE0F \u041A\u0440\u0430\u0439\u043D\u0435 \u043D\u0435 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F \u0438\u0437\u043C\u0435\u043D\u044F\u0442\u044C \u0438\u043C\u0435\u043D\u0430 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445 \u043F\u043E\u0441\u043B\u0435 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u044D\u043A\u0441\u043F\u043E\u0440\u0442\u0430 \u0442\u043E\u043A\u0435\u043D\u043E\u0432. \u041F\u043E\u0434\u043E\u0431\u043D\u043E\u0435 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u043F\u043E\u0432\u043B\u0435\u0447\u0451\u0442 \u0437\u0430 \u0441\u043E\u0431\u043E\u0439 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u044C \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u0443 \u0432\u0440\u0443\u0447\u043D\u0443\u044E \u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0432\u0441\u0435 \u0432\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u044D\u0442\u0438\u0445 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445. \u0415\u0441\u043B\u0438 \u0438\u043C\u044F \u0432\u0441\u0451-\u0442\u0430\u043A\u0438 \u043D\u0443\u0436\u043D\u043E \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C, \u043E\u0431 \u044D\u0442\u043E\u043C \u0441\u0442\u043E\u0438\u0442 \u0443\u0432\u0435\u0434\u043E\u043C\u0438\u0442\u044C \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u0430."));
}

MDXContent.displayName = "MDXContent";
;
MDXContent.isMDXComponent = true;
var __page = function __page() {
  throw new Error("Docs-only story");
};
__page.parameters = {
  docsOnly: true
};
var componentMeta = {
  title: 'Design / Colors',
  includeStories: ["__page"]
};
var mdxStoryNameToKey = {};
componentMeta.parameters = componentMeta.parameters || {};
componentMeta.parameters.docs = Object.assign({}, componentMeta.parameters.docs || {}, {
  page: function page() {
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__["AddContext"], {
      mdxStoryNameToKey: mdxStoryNameToKey,
      mdxComponentMeta: componentMeta
    }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(MDXContent, null));
  }
});
/* harmony default export */ __webpack_exports__["default"] = (componentMeta);

/***/ }),

/***/ 1137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__page", function() { return __page; });
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
/* harmony import */ var _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__);




function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsxRuntime classic */

/* @jsx mdx */



var layoutProps = {};
var MDXLayout = "wrapper";

function MDXContent(_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__["Meta"], {
    title: "Design / Icons",
    mdxType: "Meta"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h1", {
    "id": "icons-"
  }, "Icons \u2728\uD83E\uDD16"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0412\u0441\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0435 \u043D\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u0435 \u0438\u043A\u043E\u043D\u043A\u0438 \u0432\u044B\u043D\u043E\u0441\u044F\u0442\u0441\u044F \u043D\u0430 \u0444\u0440\u0435\u0439\u043C ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Icons"), " \u0438 \u0440\u0430\u0437\u0431\u0438\u0432\u0430\u044E\u0442\u0441\u044F \u043F\u043E \u0433\u0440\u0443\u043F\u043F\u0430\u043C. \u042D\u0442\u0438 \u0438\u043A\u043E\u043D\u043A\u0438 \u0441\u0442\u0430\u043D\u043E\u0432\u044F\u0442\u0441\u044F \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0430\u043C \u0447\u0435\u0440\u0435\u0437 \u0441\u0442\u0438\u043B\u0438 \u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u0430\u043C, \u0442.\u043A. \u043E\u043D\u0438 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0432\u044B\u043A\u0430\u0447\u0438\u0432\u0430\u044E\u0442\u0441\u044F \u043D\u0430 \u043F\u0440\u043E\u0435\u043A\u0442."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0418\u043A\u043E\u043D\u043A\u0438 \u044D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u0443\u044E\u0442\u0441\u044F \u0432 \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u0430\u0445 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0445 \u0440\u0430\u0437\u043C\u0435\u0440\u043E\u0432."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u041A\u0430\u0436\u0434\u0430\u044F \u0438\u043A\u043E\u043D\u043A\u0430 \u0441\u043E\u0441\u0442\u043E\u0438\u0442 \u0438\u0437 \u0432\u0435\u043A\u0442\u043E\u0440\u043D\u044B\u0445 \u0441\u043B\u043E\u0435\u0432 \u0438 \u043E\u0431\u0451\u0440\u0442\u043A\u0438-\u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("img", {
    src: "images/icons/structure.png",
    alt: "\u0421\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u0444\u0440\u0435\u0439\u043C\u0430 Icons",
    width: "300"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("em", {
    parentName: "p"
  }, "\u0421\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u0444\u0440\u0435\u0439\u043C\u0430 Icons")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u2757\uFE0F \u0418\u043A\u043E\u043D\u043A\u0438 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u0441\u0434\u0435\u043B\u0430\u043D\u044B \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430 fill. \u041C\u044B \u043D\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C \u0430\u0443\u0442\u043B\u0430\u0439\u043D\u043E\u0432\u044B\u0435 \u0438\u043A\u043E\u043D\u043A\u0438 \u0441 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u043E\u043C stroke, \u0442.\u043A. \u0441\u043C\u0435\u0448\u0435\u043D\u0438\u0435 \u0434\u0432\u0443\u0445 \u0432\u0438\u0434\u043E\u0432 \u0438\u043A\u043E\u043D\u043E\u043A \u043F\u0440\u0438\u0432\u043E\u0434\u0438\u0442 \u043A \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u0433\u0438\u0431\u043A\u043E\u0439 \u0441\u0442\u0438\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u043D\u0430 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0435."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0421\u0442\u0440\u043E\u043A\u043E\u0432\u044B\u0435 \u0441\u043B\u043E\u0438 \u043C\u043E\u0436\u043D\u043E \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u0438\u0442\u044C \u0432 Union Selection \u0438 \u043D\u0435 \u043F\u0440\u0438\u043C\u0435\u043D\u044F\u0442\u044C \u043A \u043D\u0438\u043C Outline Stroke \u0438\u043B\u0438 Flatten. Union \u043D\u0430 \u044D\u043A\u0441\u043F\u043E\u0440\u0442\u0435 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0442 \u0438\u043A\u043E\u043D\u043A\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0443\u044E \u0437\u0430\u043B\u0438\u0432\u043A\u0443, \u043E\u0441\u0442\u0430\u0432\u043B\u044F\u044F \u043E\u0440\u0438\u0433\u0438\u043D\u0430\u043B \u0438\u043A\u043E\u043D\u043A\u0438 \u0432\u043D\u0443\u0442\u0440\u0438 \u0441\u0435\u0431\u044F:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("img", {
    src: "images/icons/union.png",
    alt: "\u041E\u0431\u044A\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435 \u0441\u043B\u043E\u0451\u0432 \u0447\u0435\u0440\u0435\u0437 Union",
    width: "300"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("em", {
    parentName: "p"
  }, "\u041E\u0431\u044A\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435 \u0441\u043B\u043E\u0451\u0432 \u0447\u0435\u0440\u0435\u0437 Union")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u041F\u0440\u0438 \u0434\u0430\u043B\u044C\u043D\u0435\u0439\u0448\u0435\u043C \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0438 \u043A \u043E\u0440\u0438\u0433\u0438\u043D\u0430\u043B\u0443 \u0432\u0441\u0435\u0433\u0434\u0430 \u043C\u043E\u0436\u043D\u043E \u0432\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u0438 \u0447\u0442\u043E-\u043B\u0438\u0431\u043E \u043F\u043E\u0434\u043F\u0440\u0430\u0432\u0438\u0442\u044C. \u042D\u0442\u043E \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u0435\u0439 \u0441 \u043E\u0434\u043D\u0438\u043C \u0446\u0432\u0435\u0442\u043E\u043C \u0437\u0430\u043B\u0438\u0432\u043A\u0438."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    "id": "sizes"
  }, "Sizes"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0418\u043A\u043E\u043D\u043A\u0430 \u0434\u043E\u043B\u0436\u043D\u0430 \u0437\u0430\u043A\u043B\u044E\u0447\u0430\u0442\u044C\u0441\u044F \u0432 \u0441\u0442\u0440\u043E\u0433\u0438\u0439 \u043A\u0432\u0430\u0434\u0440\u0430\u0442 \u2014 \u044D\u0442\u043E \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u0443\u0435\u0442 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0435 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0438\u043A\u043E\u043D\u043A\u0438 \u0432 \u043C\u0430\u043A\u0435\u0442\u0430\u0445 \u0438 \u043D\u0430 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0435."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0420\u0430\u0437\u043C\u0435\u0440\u044B \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u043E\u0432 \u0432\u0441\u0435\u0433\u0434\u0430 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0442 \u0441\u0438\u0441\u0442\u0435\u043C\u0435 \u0441\u043F\u0435\u0439\u0441\u0438\u043D\u0433\u043E\u0432."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("img", {
    src: "images/spacings/scale.png",
    alt: "\u0428\u043A\u0430\u043B\u044B minor \u0438 major",
    width: "800"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("em", {
    parentName: "p"
  }, "\u0428\u043A\u0430\u043B\u044B minor \u0438 major")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\uD83C\uDFC6 \u041F\u0440\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0432 \u043B\u044E\u0431\u043E\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u0435 \u043C\u043E\u0436\u043D\u043E \u043E\u0431\u043E\u0439\u0442\u0438\u0441\u044C \u043C\u0430\u043A\u0441\u0438\u043C\u0443\u043C \u0442\u0440\u0435\u043C\u044F \u0440\u0430\u0437\u043C\u0435\u0440\u0430\u043C\u0438 \u0438\u043A\u043E\u043D\u043E\u043A."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0418\u043A\u043E\u043D\u043A\u0438 \u0440\u0438\u0441\u0443\u044E\u0442\u0441\u044F \u043D\u0430 \u0431\u0430\u0437\u0435 24px \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u0430 \u0438 \u0438\u043C\u0435\u044E\u0442 \u0444\u043E\u0440\u043C\u0443 \u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A\u0430 \u0438\u043B\u0438 \u043A\u0440\u0443\u0433\u0430:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("img", {
    src: "images/icons/forms.png",
    alt: "\u0424\u043E\u0440\u043C\u044B \u0438\u043A\u043E\u043D\u043E\u043A",
    width: "400"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("em", {
    parentName: "p"
  }, "\u0424\u043E\u0440\u043C\u044B \u0438\u043A\u043E\u043D\u043E\u043A")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0421\u0442\u0440\u043E\u0433\u043E \u0441\u043E\u0431\u043B\u044E\u0434\u0430\u0442\u044C \u0441\u0435\u0442\u043A\u0443 \u0432\u044B\u0448\u0435 \u043D\u0435 \u0441\u043B\u0435\u0434\u0443\u0435\u0442, \u043D\u0443\u0436\u043D\u043E \u0431\u043E\u043B\u044C\u0448\u0435 \u043E\u0440\u0438\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u0432\u0438\u0437\u0443\u0430\u043B\u044C\u043D\u0443\u044E \u043E\u0446\u0435\u043D\u043A\u0443. \u0421\u0435\u0442\u043A\u0430 \u043B\u0438\u0448\u044C \u0434\u0430\u0451\u0442 \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0443."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    "id": "variables-names"
  }, "Variables names"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0417\u0430\u0434\u0430\u0447\u0430 \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0430 \u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u043E\u0442\u0440\u0438\u0441\u043E\u0432\u0430\u0442\u044C \u0438\u043A\u043E\u043D\u043A\u0438, \u043D\u043E \u0438 \u043F\u0440\u0438\u0441\u0432\u043E\u0438\u0442\u044C \u0438\u043C \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u041F\u0440\u0430\u0432\u0438\u043B\u0430:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u041F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442 \u0444\u043E\u0440\u043C\u0430\u0442 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", _extends({
    parentName: "li"
  }, {
    "href": "https://ru.wikipedia.org/wiki/CamelCase",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer"
  }), "lowerCamelCase"), ": \u043F\u0435\u0440\u0432\u043E\u0435 \u0441\u043B\u043E\u0432\u043E \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442\u0441\u044F \u0441\u043E \u0441\u0442\u0440\u043E\u0447\u043D\u043E\u0439, \u043A\u0430\u0436\u0434\u043E\u0435 \u043F\u043E\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0435 \u2014 \u0441 \u043F\u0440\u043E\u043F\u0438\u0441\u043D\u043E\u0439. \u041D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u043B\u043E\u0432 \u043F\u0438\u0448\u0443\u0442\u0441\u044F \u0441\u043B\u0438\u0442\u043D\u043E \u0431\u0435\u0437 \u043F\u0440\u043E\u0431\u0435\u043B\u0430, \u0434\u0435\u0444\u0438\u0441\u0430 \u0438\u043B\u0438 \u043D\u0438\u0436\u043D\u0435\u0433\u043E \u043F\u043E\u0434\u0447\u0435\u0440\u043A\u0438\u0432\u0430\u043D\u0438\u044F."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u041C\u044B \u043D\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C \u0442\u0440\u0430\u043D\u0441\u043B\u0438\u0442\u0435\u0440\u0430\u0446\u0438\u044E \u2014 \u0432\u0441\u0435 \u0441\u043B\u043E\u0432\u0430 \u043F\u0438\u0448\u0443\u0442\u0441\u044F \u043D\u0430 \u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u043E\u043C.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("img", {
    src: "images/icons/names.png",
    alt: "\u0421\u0438\u0441\u0442\u0435\u043C\u0430 \u043D\u0435\u0439\u043C\u0438\u043D\u0433\u0430",
    width: "600"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("em", {
    parentName: "p"
  }, "\u0421\u0438\u0441\u0442\u0435\u043C\u0430 \u043D\u0435\u0439\u043C\u0438\u043D\u0433\u0430")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u26D4\uFE0F idea"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u26D4\uFE0F closed"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u26D4\uFE0F strelkaGalkaRight"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u2705 lamp"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u2705 cross"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u2705 shevronRight \u0438\u043B\u0438 shevron/right"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    "id": "grouping"
  }, "Grouping"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0418\u043A\u043E\u043D\u043A\u0438 \u0440\u0430\u0437\u0431\u0438\u0432\u0430\u044E\u0442\u0441\u044F \u043D\u0430 \u0433\u0440\u0443\u043F\u043F\u044B \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0438 \u043E\u0442 \u043C\u0435\u0441\u0442\u0430, \u0433\u0434\u0435 \u0431\u0443\u0434\u0443\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0412 GDS \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u044B \u0433\u0440\u0443\u043F\u043F\u044B ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "small"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "medium"), " \u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "large"), ", \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0442 \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u0430\u043C 12, 24 \u0438 32px. \u042D\u0442\u043E \u043F\u0440\u043E\u0441\u0442\u043E \u043F\u0440\u0438\u043C\u0435\u0440, \u043D\u0438\u0447\u0442\u043E \u043D\u0435 \u043C\u0435\u0448\u0430\u0435\u0442 \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0443 \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u0433\u0440\u0443\u043F\u043F\u0443 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "catalog"), ", \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u0431\u0443\u0434\u0443\u0442 \u043B\u0435\u0436\u0430\u0442\u044C \u0438\u043A\u043E\u043D\u043A\u0438 \u0434\u043B\u044F \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0430."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("img", {
    src: "images/icons/groups.png",
    alt: "\u0412\u044B\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u0433\u0440\u0443\u043F\u043F",
    width: "400"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("em", {
    parentName: "p"
  }, "\u0412\u044B\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u0433\u0440\u0443\u043F\u043F")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    "id": "recommendations"
  }, "Recommendations"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("ol", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ol"
  }, "\u0417\u0430\u043D\u043E\u0441\u0438\u0442\u044C \u0432 \u043A\u0438\u0442 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u043A\u043E\u043B-\u0432\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0445 \u0438\u043A\u043E\u043D\u043E\u043A. \u042D\u0442\u043E \u0437\u043D\u0430\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0443\u0441\u043A\u043E\u0440\u044F\u0435\u0442 \u043F\u0440\u043E\u0446\u0435\u0441\u0441 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ol"
  }, "\u0425\u043E\u0440\u043E\u0448\u043E \u043A\u043E\u0433\u0434\u0430 \u0432 \u043A\u0438\u0442\u0435 \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u0430\u044F \u043B\u043E\u0433\u0438\u043A\u0430 \u0438\u043A\u043E\u043D\u043E\u043A: \u0441\u0442\u0438\u043B\u044C, \u0442\u043E\u043B\u0449\u0438\u043D\u0430 \u043B\u0438\u043D\u0438\u0439, \u0446\u0432\u0435\u0442\u0430, \u0440\u0430\u0437\u043C\u0435\u0440\u044B, \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435, \u0441\u043A\u0440\u0443\u0433\u043B\u0435\u043D\u0438\u0435 \u0443\u0433\u043B\u043E\u0432."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ol"
  }, "\u041E\u0434\u043D\u043E\u0446\u0432\u0435\u0442\u043D\u044B\u0435 \u0438\u043A\u043E\u043D\u043A\u0438 \u0441\u043E\u0441\u0442\u043E\u044F\u0442 \u0438\u0437 \u043E\u0434\u043D\u043E\u0433\u043E \u0441\u043B\u043E\u044F, \u0435\u0441\u043B\u0438 \u044D\u0442\u043E \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ol"
  }, "\u0413\u0440\u0430\u043D\u0438\u0446\u044B \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432 \u043F\u0440\u0438\u0432\u044F\u0437\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u043A \u043F\u0438\u043A\u0441\u0435\u043B\u044C\u043D\u043E\u0439 \u0441\u0435\u0442\u043A\u0435.")));
}

MDXContent.displayName = "MDXContent";
;
MDXContent.isMDXComponent = true;
var __page = function __page() {
  throw new Error("Docs-only story");
};
__page.parameters = {
  docsOnly: true
};
var componentMeta = {
  title: 'Design / Icons',
  includeStories: ["__page"]
};
var mdxStoryNameToKey = {};
componentMeta.parameters = componentMeta.parameters || {};
componentMeta.parameters.docs = Object.assign({}, componentMeta.parameters.docs || {}, {
  page: function page() {
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__["AddContext"], {
      mdxStoryNameToKey: mdxStoryNameToKey,
      mdxComponentMeta: componentMeta
    }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(MDXContent, null));
  }
});
/* harmony default export */ __webpack_exports__["default"] = (componentMeta);

/***/ }),

/***/ 1138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__page", function() { return __page; });
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
/* harmony import */ var _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__);




function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsxRuntime classic */

/* @jsx mdx */



var layoutProps = {};
var MDXLayout = "wrapper";

function MDXContent(_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__["Meta"], {
    title: "Design / Layout",
    mdxType: "Meta"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h1", {
    "id": "layout-🧱"
  }, "Layout \u2728\uD83E\uDDF1\uD83E\uDD16"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0424\u0440\u0435\u0439\u043C ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Layout"), " \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442 \u043E\u0441\u043D\u043E\u0432\u043D\u0443\u044E \u0441\u0435\u0442\u043A\u0443 \u0438 \u0431\u0440\u0435\u0439\u043A\u043F\u043E\u0438\u043D\u0442\u044B \u043F\u0440\u043E\u0435\u043A\u0442\u0430."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("img", {
    src: "images/layout/frame.png",
    alt: "\u0424\u0440\u0435\u0439\u043C Layout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("em", {
    parentName: "p"
  }, "\u0424\u0440\u0435\u0439\u043C Layout")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u041F\u0440\u043E\u0435\u043A\u0442 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 9 \u0431\u0440\u0435\u0439\u043A\u043F\u043E\u0438\u043D\u0442\u043E\u0432, \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u044B \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0432 \u0441\u0435\u0442\u043A\u0435. \u041A\u043E\u043B-\u0432\u043E \u0431\u0440\u0435\u0439\u043A\u043F\u043E\u0438\u043D\u0442\u043E\u0432 \u043D\u0435 \u043E\u0437\u043D\u0430\u0447\u0430\u0435\u0442 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u044C \u043E\u0442\u0440\u0438\u0441\u043E\u0432\u043A\u0438 \u043C\u0430\u043A\u0435\u0442\u043E\u0432 \u043F\u043E\u0434 \u043A\u0430\u0436\u0434\u044B\u0439 \u2013 \u043E\u043D\u0438 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u044E\u0442 \u043D\u0430\u0431\u043E\u0440 \u0442\u043E\u0447\u0435\u043A, \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A \u043C\u043E\u0436\u0435\u0442 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0438\u0442\u044C \u043F\u0435\u0440\u0435\u0445\u043E\u0434."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u041D\u0430 \u043A\u0430\u0436\u0434\u043E\u043C \u0431\u0440\u0435\u0439\u043A\u043F\u043E\u0438\u043D\u0442\u0435 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442\u0441\u044F:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0431\u0440\u0435\u0439\u043A\u043F\u043E\u0438\u043D\u0442\u0430"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u0447\u0438\u0441\u043B\u043E \u043A\u043E\u043B\u043E\u043D\u043E\u043A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u043E\u0442\u0441\u0442\u0443\u043F\u044B \u043C\u0435\u0436\u0434\u0443 \u043A\u043E\u043B\u043E\u043D\u043A\u0430\u043C\u0438"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u0448\u0438\u0440\u0438\u043D\u0430 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u0430"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u0432\u044B\u0440\u0430\u0432\u043D\u0438\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u0430"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u043F\u043E\u043B\u044F")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u2757\uFE0F \u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0431\u0440\u0435\u0439\u043A\u043F\u043E\u0438\u043D\u0442\u043E\u0432 \u043C\u0435\u043D\u044F\u0442\u044C \u043D\u0435\u043B\u044C\u0437\u044F, \u0442.\u043A. \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440 \u043D\u0435 \u0437\u0430\u0434\u0430\u0451\u0442 \u0438\u043C\u0435\u043D\u0430 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445, \u0438 \u043E\u043D\u0438 \u0437\u0430\u0448\u0438\u0432\u0430\u044E\u0442\u0441\u044F \u0441\u043E \u0441\u0442\u043E\u0440\u043E\u043D\u044B \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u0432 \u0440\u0430\u0441\u0447\u0451\u0442\u0435 \u043D\u0430 \u0442\u043E, \u0447\u0442\u043E \u0438\u0445 \u0431\u0443\u0434\u0435\u0442 \u0440\u043E\u0432\u043D\u043E 9."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u041F\u0440\u0438 \u0442\u043E\u043A\u0435\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0431\u0435\u0440\u0443\u0442\u0441\u044F \u0438\u0437 \u0444\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0440\u0430\u0437\u043C\u0435\u0440\u0430 \u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A\u043E\u0432 \u0438 \u0444\u0440\u0435\u0439\u043C\u043E\u0432, \u0442\u0430\u043A \u0447\u0442\u043E \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440 \u0441\u043B\u0435\u0434\u0438\u0442, \u0447\u0442\u043E\u0431\u044B \u0433\u0440\u0430\u043D\u0438\u0446\u044B \u0444\u0440\u0435\u0439\u043C\u043E\u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043E\u0432\u0430\u043B\u0438 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044E \u0431\u0440\u0435\u0439\u043A\u043F\u043E\u0438\u043D\u0442\u0430."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("img", {
    src: "images/layout/breakpoint-good.png",
    alt: "\u041F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E: \u0440\u0430\u0437\u043C\u0435\u0440 \u0444\u0440\u0435\u0439\u043C\u0430 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0431\u0440\u0435\u0439\u043A\u043F\u043E\u0438\u043D\u0442\u0443"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("em", {
    parentName: "p"
  }, "\u041F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E: \u0440\u0430\u0437\u043C\u0435\u0440 \u0444\u0440\u0435\u0439\u043C\u0430 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0431\u0440\u0435\u0439\u043A\u043F\u043E\u0438\u043D\u0442\u0443")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("img", {
    src: "images/layout/breakpoint-bad.png",
    alt: "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E: \u0440\u0430\u0437\u043C\u0435\u0440 \u0444\u0440\u0435\u0439\u043C\u0430 \u0431\u043E\u043B\u044C\u0448\u0435 \u0431\u0440\u0435\u0439\u043A\u043F\u043E\u0438\u043D\u0442\u0430"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("em", {
    parentName: "p"
  }, "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E: \u0440\u0430\u0437\u043C\u0435\u0440 \u0444\u0440\u0435\u0439\u043C\u0430 \u0431\u043E\u043B\u044C\u0448\u0435 \u0431\u0440\u0435\u0439\u043A\u043F\u043E\u0438\u043D\u0442\u0430")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0421\u0442\u0438\u043B\u0438 \u0441\u0435\u0442\u043A\u0438 \u0432 Figma \u0434\u043E\u043B\u0436\u043D\u044B \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0442\u043E\u043C\u0443, \u0447\u0442\u043E \u043D\u0430\u0440\u0438\u0441\u043E\u0432\u0430\u043D\u043E \u043D\u0430 \u0431\u0440\u0435\u0439\u043A\u043F\u043E\u0438\u043D\u0442\u0435:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("img", {
    src: "images/layout/breakpoint-grid.png",
    alt: "\u0417\u0430\u0434\u0430\u043D\u043D\u044B\u0439 \u0441\u0442\u0438\u043B\u044C \u0434\u043B\u044F \u0441\u0435\u0442\u043A\u0438"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("em", {
    parentName: "p"
  }, "\u0417\u0430\u0434\u0430\u043D\u043D\u044B\u0439 \u0441\u0442\u0438\u043B\u044C \u0434\u043B\u044F \u0441\u0435\u0442\u043A\u0438")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    "id": "container-usage"
  }, "Container usage"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0421\u0430\u043C\u044B\u0439 \u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u0431\u0440\u0435\u0439\u043A\u043F\u043E\u0438\u043D\u0442 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442 \u0435\u0433\u043E \u043F\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u043D\u0430 \u0431\u043E\u043B\u044C\u0448\u0438\u0445 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u044F\u0445. \u041D\u0430 \u043F\u0440\u0438\u043C\u0435\u0440\u0435 GDS, \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440 \u0444\u0438\u043A\u0441\u0438\u0440\u0443\u0435\u0442\u0441\u044F \u043F\u043E \u0448\u0438\u0440\u0438\u043D\u0435 \u0438 \u0432\u044B\u0440\u0430\u0432\u043D\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043F\u043E \u0446\u0435\u043D\u0442\u0440\u0443."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u041D\u0430\u043B\u0438\u0447\u0438\u0435 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u0430 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442\u0441\u044F \u043F\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044E ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "auto"), " \u0443 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "padding"), ". \u041A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440 \u043C\u043E\u0436\u043D\u043E \u0446\u0435\u043D\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0438\u043B\u0438 \u0432\u044B\u0440\u0430\u0432\u043D\u044F\u0442\u044C \u043F\u043E \u043B\u0435\u0432\u043E\u043C\u0443 \u043A\u0440\u0430\u044E. \u0411\u0435\u0437 \u0443\u043A\u0430\u0437\u0430\u043D\u0438\u044F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "auto"), " \u043C\u0430\u043A\u0435\u0442 \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0441\u044F \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u0440\u0435\u0437\u0438\u043D\u043E\u0432\u044B\u0439."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("img", {
    src: "images/layout/container-center.png",
    alt: "\u0426\u0435\u043D\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("em", {
    parentName: "p"
  }, "\u0426\u0435\u043D\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("img", {
    src: "images/layout/container-left.png",
    alt: "\u0411\u043E\u043A\u043E\u0432\u043E\u0439 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("em", {
    parentName: "p"
  }, "\u0411\u043E\u043A\u043E\u0432\u043E\u0439 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("img", {
    src: "images/layout/container-none.png",
    alt: "\u0411\u0435\u0437 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u0430"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("em", {
    parentName: "p"
  }, "\u0411\u0435\u0437 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u0430")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    "id": "subgrids"
  }, "Subgrids"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0421\u0438\u0441\u0442\u0435\u043C\u0430 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0441\u0442\u0440\u043E\u0438\u0442\u044C \u0441\u0435\u0442\u043A\u0443 \u0432\u043D\u0443\u0442\u0440\u0438 \u043A\u043E\u043B\u043E\u043D\u043E\u043A. \u041D\u0430\u0440\u0438\u0441\u0443\u0435\u043C \u043D\u0435\u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u043B\u043E\u043A:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("img", {
    src: "images/layout/uncommon-grid-1.png",
    alt: "\u0428\u0430\u0433 1"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("em", {
    parentName: "p"
  }, "\u0428\u0430\u0433 1")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u041D\u0430 \u043F\u0435\u0440\u0432\u044B\u0439 \u0432\u0437\u0433\u043B\u044F\u0434, \u043E\u043D \u043D\u0435 \u043F\u043E\u043F\u0430\u0434\u0430\u0435\u0442 \u0432 \u0441\u0435\u0442\u043A\u0443, \u043D\u043E \u0440\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u0438\u043C \u0435\u0433\u043E \u0432\u043D\u0438\u043C\u0430\u0442\u0435\u043B\u044C\u043D\u0435\u0435 \u2014 \u043B\u0435\u0432\u0430\u044F \u043A\u043E\u043B\u043E\u043D\u043A\u0430 \u0437\u0430\u043D\u0438\u043C\u0430\u0435\u0442 \u0440\u043E\u0432\u043D\u043E 1/5 \u043E\u0442 \u0448\u0438\u0440\u0438\u043D\u044B \u0431\u043B\u043E\u043A\u0430:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("img", {
    src: "images/layout/uncommon-grid-2.png",
    alt: "\u0428\u0430\u0433 2"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("em", {
    parentName: "p"
  }, "\u0428\u0430\u0433 2")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0415\u0441\u043B\u0438 \u0440\u0430\u0437\u0431\u0438\u0442\u044C \u044D\u0442\u043E\u0442 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440 \u043D\u0430 \u0434\u0432\u0435 \u0447\u0430\u0441\u0442\u0438, \u0441\u043F\u0440\u0430\u0432\u0430 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0441\u044F 4/5:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("img", {
    src: "images/layout/uncommon-grid-3.png",
    alt: "\u0428\u0430\u0433 3"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("em", {
    parentName: "p"
  }, "\u0428\u0430\u0433 3")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0412 \u043F\u0440\u0430\u0432\u043E\u0439 \u0447\u0430\u0441\u0442\u0438 \u043C\u043E\u0436\u043D\u043E \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u0444\u0440\u0435\u0439\u043C \u0438 \u0437\u0430\u0434\u0430\u0442\u044C \u0435\u043C\u0443 \u0441\u0432\u043E\u044E \u0441\u0438\u0441\u0442\u0435\u043C\u0443 \u043A\u043E\u043B\u043E\u043D\u043E\u043A. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, 6:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("img", {
    src: "images/layout/uncommon-grid-4.png",
    alt: "\u0428\u0430\u0433 4"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("em", {
    parentName: "p"
  }, "\u0428\u0430\u0433 4")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u041F\u043E \u044D\u0442\u0438\u043C \u043A\u043E\u043B\u043E\u043D\u043A\u0430\u043C \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0431\u043B\u043E\u043A\u0438:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("img", {
    src: "images/layout/uncommon-grid-5.png",
    alt: "\u0428\u0430\u0433 5"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("em", {
    parentName: "p"
  }, "\u0428\u0430\u0433 5")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0422\u0430\u043A\u0438\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C \u043C\u044B \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u043C \u043D\u0435\u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0431\u043B\u043E\u043A, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A \u0441\u043C\u043E\u0436\u0435\u0442 \u0441 \u043B\u0451\u0433\u043A\u043E\u0441\u0442\u044C\u044E \u0432\u043E\u0441\u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0441\u0442\u0438 \u0432 \u043A\u043E\u0434\u0435."));
}

MDXContent.displayName = "MDXContent";
;
MDXContent.isMDXComponent = true;
var __page = function __page() {
  throw new Error("Docs-only story");
};
__page.parameters = {
  docsOnly: true
};
var componentMeta = {
  title: 'Design / Layout',
  includeStories: ["__page"]
};
var mdxStoryNameToKey = {};
componentMeta.parameters = componentMeta.parameters || {};
componentMeta.parameters.docs = Object.assign({}, componentMeta.parameters.docs || {}, {
  page: function page() {
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__["AddContext"], {
      mdxStoryNameToKey: mdxStoryNameToKey,
      mdxComponentMeta: componentMeta
    }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(MDXContent, null));
  }
});
/* harmony default export */ __webpack_exports__["default"] = (componentMeta);

/***/ }),

/***/ 1139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__page", function() { return __page; });
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
/* harmony import */ var _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__);




function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsxRuntime classic */

/* @jsx mdx */



var layoutProps = {};
var MDXLayout = "wrapper";

function MDXContent(_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__["Meta"], {
    title: "Design / Palettes",
    mdxType: "Meta"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h1", {
    "id": "palettes-"
  }, "Palettes \u2728\uD83E\uDD16"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u041E\u043F\u0438\u0441\u0430\u043D\u043D\u044B\u0435 \u0437\u0434\u0435\u0441\u044C \u043F\u0440\u0438\u043D\u0446\u0438\u043F\u044B \u0440\u0430\u0431\u043E\u0442\u044B \u0441 \u043F\u0430\u043B\u0438\u0442\u0440\u0430\u043C\u0438 \u043D\u0430\u0446\u0435\u043B\u0435\u043D\u044B \u043D\u0430 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0430\u043C \u0440\u0430\u0431\u043E\u0447\u0435\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u043F\u043E\u0434\u0431\u043E\u0440\u0430 \u043F\u0430\u043B\u0438\u0442\u0440, \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u0430 \u2014 \u043C\u0435\u043D\u0435\u0435 \xAB50-\u0442\u0438 \u043E\u0442\u0442\u0435\u043D\u043A\u043E\u0432 \u0441\u0435\u0440\u043E\u0433\u043E\xBB \u043D\u0430 \u0432\u044B\u0445\u043E\u0434\u0435. \u0412\u043C\u0435\u0441\u0442\u0435 \u043C\u044B \u0443\u0441\u043A\u043E\u0440\u044F\u0435\u043C \u0440\u0430\u0431\u043E\u0447\u0438\u0439 \u043F\u0440\u043E\u0446\u0435\u0441\u0441 \u0438 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043C \u043F\u043E\u0440\u044F\u0434\u043E\u043A \u0432 \u043F\u0440\u043E\u0435\u043A\u0442\u0435."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0412 \u0431\u043E\u043B\u044C\u0448\u0438\u043D\u0441\u0442\u0432\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432 \u0437\u0430 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 \u0433\u043E\u0434\u044B \u043A\u043B\u0438\u0435\u043D\u0442\u044B \u043F\u0440\u0438\u0445\u043E\u0434\u044F\u0442 \u043A \u043D\u0430\u043C \u0441\u043E \u0441\u0432\u043E\u0438\u043C\u0438 \u0446\u0432\u0435\u0442\u0430\u043C\u0438 \u0432 \u043B\u043E\u0433\u043E\u0442\u0438\u043F\u0435 \u0438\u043B\u0438 \u0431\u0440\u0435\u043D\u0434\u0431\u0443\u043A\u0435. \u041D\u0430\u0448\u0430 \u0437\u0430\u0434\u0430\u0447\u0430: \u043D\u0435 \u0442\u0440\u043E\u0433\u0430\u0442\u044C \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u0446\u0432\u0435\u0442\u0430 \u0438 \u043F\u043E\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u043F\u0430\u043B\u0438\u0442\u0440\u0443 \u043E\u0442\u0442\u0435\u043D\u043A\u043E\u0432."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u041F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u043C\u044B\u0435 \u0432 \u044D\u0442\u043E\u043C \u0433\u0430\u0439\u0434\u0435 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B \u2014 \u043D\u0435 \u043F\u0430\u043D\u0430\u0446\u0435\u044F. \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u043E\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u043F\u0430\u043B\u0438\u0442\u0440\u0443 \u043F\u043E \u0441\u0432\u043E\u0435\u043C\u0443 \u0443\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u0438\u044E, \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u0440\u043E\u0441\u043B\u0435\u0434\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0433\u043B\u0430\u0432\u043D\u044B\u0435 \u0446\u0432\u0435\u0442\u0430 \u043E\u0442 \u043A\u043B\u0438\u0435\u043D\u0442\u0430 \u043E\u0441\u0442\u0430\u043B\u0438\u0441\u044C \u043D\u0435\u0438\u0437\u043C\u0435\u043D\u043D\u044B\u043C\u0438."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    "id": "hsl-color-model-hsla"
  }, "HSL color model (HSLA)"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "p"
  }, "HSL"), " \u2014 \u0446\u0432\u0435\u0442\u043E\u0432\u0430\u044F \u043C\u043E\u0434\u0435\u043B\u044C, \u0432 \u043E\u0441\u043D\u043E\u0432\u0435 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u043B\u0435\u0436\u0430\u0442 \u0442\u0440\u0438 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430: ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "p"
  }, "Hue"), " (\u043E\u0442\u0442\u0435\u043D\u043E\u043A), ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "p"
  }, "Saturation"), " (\u041D\u0430\u0441\u044B\u0449\u0435\u043D\u043D\u043E\u0441\u0442\u044C) \u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "p"
  }, "Lightness"), " (\u0421\u0432\u0435\u0442\u043B\u043E\u0442\u0430)."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0427\u0430\u0441\u0442\u043D\u044B\u0439 \u0441\u043B\u0443\u0447\u0430\u0439 HSL \u2014 \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u0432 \u043F\u0430\u043B\u0438\u0442\u0440\u0443 \u0447\u0435\u0442\u0432\u0435\u0440\u0442\u043E\u0433\u043E \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430: \u0430\u043B\u044C\u0444\u0430-\u043A\u0430\u043D\u0430\u043B\u0430 \u0434\u043B\u044F \u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0441\u0442\u0438. \u0412 \u044D\u0442\u043E\u043C \u0441\u043B\u0443\u0447\u0430\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0435\u0439 \u043D\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0441\u0438\u0441\u0442\u0435\u043C\u0443 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "p"
  }, "HSLA"), ". \u041C\u044B \u0441\u0442\u0440\u043E\u0438\u043C \u043F\u0430\u043B\u0438\u0442\u0440\u0443 \u0432 HSL, \u0430 HSLA \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C, \u0442\u043E\u043B\u044C\u043A\u043E \u043A\u043E\u0433\u0434\u0430 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u0430 \u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0441\u0442\u044C \u0434\u043B\u044F \u0446\u0432\u0435\u0442\u0430."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("img", {
    src: "images/colors/figma-hsl.png",
    alt: "\u041F\u0430\u043D\u0435\u043B\u044C \u0432\u044B\u0431\u043E\u0440\u0430 \u0446\u0432\u0435\u0442\u0430 \u0432 Figma \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 HSL",
    width: "250"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("em", {
    parentName: "p"
  }, "\u041F\u0430\u043D\u0435\u043B\u044C \u0432\u044B\u0431\u043E\u0440\u0430 \u0446\u0432\u0435\u0442\u0430 \u0432 Figma \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 HSL")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    "id": "automatic-palettes-creation"
  }, "Automatic palettes creation"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", _extends({
    parentName: "p"
  }, {
    "href": "https://www.colorbox.io/",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer"
  }), "ColorBox"), " \u043E\u0442 Lyft Design \u2013 \u0433\u0438\u0431\u043A\u0438\u0439 \u0438 \u0438\u043D\u0442\u0443\u0438\u0442\u0438\u0432\u043D\u043E \u043F\u043E\u043D\u044F\u0442\u043D\u044B\u0439 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442 \u0434\u043B\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0446\u0432\u0435\u0442\u043E\u0432\u044B\u0445 \u043F\u0430\u043B\u0438\u0442\u0440 \u0441 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u043E\u0439 \u0446\u0432\u0435\u0442\u043E\u0432\u043E\u0433\u043E \u043A\u043E\u043D\u0442\u0440\u0430\u0441\u0442\u0430."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("img", {
    src: "images/colors/ColorBox.jpg",
    alt: "\u0418\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441 ColorBox"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("em", {
    parentName: "p"
  }, "\u0418\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441 ColorBox")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0414\u043B\u044F \u043F\u0440\u0438\u043C\u0435\u0440\u0430 \u043C\u044B \u0432\u043E\u0437\u044C\u043C\u0435\u043C \u0441\u0438\u043D\u0438\u0439 \u0446\u0432\u0435\u0442 \u0438 \u0431\u0443\u0434\u0435\u043C \u0441\u0442\u0440\u043E\u0438\u0442\u044C \u0434\u043B\u044F \u043D\u0435\u0433\u043E \u043F\u0430\u043B\u0438\u0442\u0440\u0443:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "p"
  }, "HEX"), ": #005BAD"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "p"
  }, "HSL"), ": 208, 100, 34"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("img", {
    src: "images/colors/basic-color.png",
    alt: "\u041D\u0430\u0447\u0430\u043B\u044C\u043D\u044B\u0439 \u0446\u0432\u0435\u0442",
    width: "200"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("em", {
    parentName: "p"
  }, "\u041D\u0430\u0447\u0430\u043B\u044C\u043D\u044B\u0439 \u0446\u0432\u0435\u0442")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u041E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u043C\u0441\u044F \u0441 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E\u043C \u0448\u0430\u0433\u043E\u0432 \u0438 \u0432\u044B\u0441\u0442\u0430\u0432\u0438\u043C \u043D\u0443\u0436\u043D\u043E\u0435 \u043D\u0430\u043C: 10 \u0431\u0443\u0434\u0435\u0442 \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("img", {
    src: "images/colors/major-steps.png",
    alt: "\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440 Major steps",
    width: "300"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("em", {
    parentName: "p"
  }, "\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440 Major steps")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0412 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u0445 Hue \u043F\u0440\u043E\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u043E\u0442\u0442\u0435\u043D\u043E\u043A. \u041F\u043E \u043C\u043E\u0434\u0435\u043B\u0438 HSL \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440 \u043D\u0430\u0448\u0435\u0433\u043E \u043E\u0442\u0442\u0435\u043D\u043A\u0430 208. \u0421\u0442\u0430\u0432\u0438\u043C \u044D\u0442\u0438 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u043D\u0430 Start \u0438 End \u0434\u043B\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u043F\u0430\u043B\u0438\u0442\u0440\u044B \u0432 \u043D\u0430\u0448\u0435\u043C \u043E\u0442\u0442\u0435\u043D\u043A\u0435."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u041C\u043E\u0436\u043D\u043E \u0437\u0430\u0434\u0430\u0442\u044C \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D \u0434\u043B\u044F \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u043E\u0442\u0442\u0435\u043D\u043A\u0430 \u0432 \u0441\u043E\u0441\u0435\u0434\u043D\u0438\u0435 \u0446\u0432\u0435\u0442\u0430 \u043D\u0430 \u043F\u0440\u043E\u0442\u044F\u0436\u0435\u043D\u0438\u0438 \u043F\u0430\u043B\u0438\u0442\u0440\u044B. \u042D\u0442\u043E \u0441\u0434\u0435\u043B\u0430\u0435\u0442 \u043F\u0430\u043B\u0438\u0442\u0440\u0443 \u043D\u0435\u0440\u0430\u0432\u043D\u043E\u043C\u0435\u0440\u043D\u043E\u0439 \u043F\u043E \u0446\u0432\u0435\u0442\u0443, \u043D\u043E \u043C\u043E\u0436\u0435\u0442 \u043F\u043E\u0434\u0442\u043E\u043B\u043A\u043D\u0443\u0442\u044C \u043A \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u043E\u0439 \u0438\u0434\u0435\u0435."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("img", {
    src: "images/colors/hue.png",
    alt: "\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440 Hue",
    width: "300"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("em", {
    parentName: "p"
  }, "\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440 Hue")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "Saturation \u0440\u0435\u0433\u0443\u043B\u0438\u0440\u0443\u0435\u0442 \u043D\u0430\u0441\u044B\u0449\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u0432 \u043F\u0430\u043B\u0438\u0442\u0440\u0435."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("img", {
    src: "images/colors/saturation.png",
    alt: "\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440 Saturation",
    width: "300"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("em", {
    parentName: "p"
  }, "\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440 Saturation")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "Brightness \u0443\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u0442 \u044F\u0440\u043A\u043E\u0441\u0442\u044C \u043F\u0430\u043B\u0438\u0442\u0440\u044B."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("img", {
    src: "images/colors/brightness.png",
    alt: "\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440 Brightness",
    width: "300"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("em", {
    parentName: "p"
  }, "\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440 Brightness")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u041D\u0435 \u0437\u0430\u0431\u0443\u0434\u044C\u0442\u0435 \u0437\u0430\u0444\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0446\u0432\u0435\u0442, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0434\u0430\u043B \u043A\u043B\u0438\u0435\u043D\u0442. \u042D\u0442\u0430 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u0432\u043D\u0438\u0437\u0443 \u0438 \u0434\u0435\u043B\u0430\u0435\u0442 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u043D\u0430\u043B\u0438\u0447\u0438\u0435 \u0438\u0441\u0445\u043E\u0434\u043D\u043E\u0433\u043E \u0446\u0432\u0435\u0442\u0430 \u0432 \u043F\u0430\u043B\u0438\u0442\u0440\u0435."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("img", {
    src: "images/colors/lock-color.png",
    alt: "\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440 Lock Color",
    width: "300"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("em", {
    parentName: "p"
  }, "\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440 Lock Color")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u041D\u0430 \u0432\u044B\u0445\u043E\u0434\u0435 \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u043C \u043F\u0430\u043B\u0438\u0442\u0440\u0443 \u0441 10 \u0446\u0432\u0435\u0442\u0430\u043C\u0438. \u041D\u0430 \u043A\u0430\u0436\u0434\u043E\u043C \u0446\u0432\u0435\u0442\u0435 \u043E\u0431\u043E\u0437\u043D\u0430\u0447\u0435\u043D \u043A\u043E\u043D\u0442\u0440\u0430\u0441\u0442 \u0434\u043B\u044F \u0447\u0435\u0440\u043D\u043E\u0433\u043E \u0438 \u0431\u0435\u043B\u043E\u0433\u043E \u0442\u0435\u043A\u0441\u0442\u0430 \u0438 \u0434\u0430\u043D hex-\u043A\u043E\u0434. \u041D\u0430\u0447\u0430\u043B\u044C\u043D\u044B\u0439 \u0446\u0432\u0435\u0442 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D \u0432 \u043F\u0430\u043B\u0438\u0442\u0440\u0435 \u0438 \u043E\u0441\u0442\u0430\u043B\u0441\u044F \u043D\u0435\u0438\u0437\u043C\u0435\u043D\u043D\u044B\u043C."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("img", {
    src: "images/colors/palette.png",
    alt: "\u0418\u0442\u043E\u0433\u043E\u0432\u0430\u044F \u043F\u0430\u043B\u0438\u0442\u0440\u0430 \u0438\u0437 ColorBox",
    width: "250"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("em", {
    parentName: "p"
  }, "\u0418\u0442\u043E\u0433\u043E\u0432\u0430\u044F \u043F\u0430\u043B\u0438\u0442\u0440\u0430 \u0438\u0437 ColorBox")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    "id": "manual-palettes-creation"
  }, "Manual palettes creation"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0420\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u0438\u043C \xAB\u0440\u0443\u0447\u043D\u043E\u0439\xBB \u043C\u0435\u0442\u043E\u0434 \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0430\u043B\u044C\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u044B."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0412\u043E\u0437\u044C\u043C\u0451\u043C \u0432\u0441\u0451 \u0442\u043E\u0442 \u0436\u0435 \u0441\u0438\u043D\u0438\u0439 \u0446\u0432\u0435\u0442 \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0431\u0430\u0437\u043E\u0432\u043E\u0433\u043E (208, 100, 34) \u0438 \u043F\u043E\u0441\u0442\u0440\u043E\u0438\u043C \u043F\u0430\u043B\u0438\u0442\u0440\u0443 \u0438\u0437 10 \u0446\u0432\u0435\u0442\u043E\u0432. \u0411\u0443\u0434\u0435\u043C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0434\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u043F\u043B\u0430\u0433\u0438\u043D ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "p"
  }, "Color Designer"), " \u0434\u043B\u044F Figma."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "p"
  }, "L"), " \u0443 \u043D\u0430\u0448\u0435\u0433\u043E \u0446\u0432\u0435\u0442\u0430 \u0440\u0430\u0432\u0435\u043D 34 \u0438\u0437 100. \u0417\u043D\u0430\u0447\u0438\u0442 \u0432 \u043F\u0430\u043B\u0438\u0442\u0440\u0435 \u043F\u043E \u0441\u0432\u0435\u0442\u043B\u043E\u0441\u0442\u0438 \u043E\u043D \u0431\u0443\u0434\u0435\u0442 \u0442\u0440\u0435\u0442\u044C\u0438\u043C. \u041D\u0443\u0436\u043D\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C 7 \u0446\u0432\u0435\u0442\u043E\u0432 \u0432 \u0441\u0442\u043E\u0440\u043E\u043D\u0443 \u0441\u0432\u0435\u0442\u043B\u044B\u0445 \u043E\u0442\u0442\u0435\u043D\u043A\u043E\u0432 \u0438 2 \u0432 \u0441\u0442\u043E\u0440\u043E\u043D\u0443 \u0442\u0435\u043C\u043D\u044B\u0445."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u041F\u043E\u0434\u0431\u0435\u0440\u0451\u043C \u0441\u0432\u0435\u0442\u043B\u044B\u0435 \u043E\u0442\u0442\u0435\u043D\u043A\u0438."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("img", {
    src: "images/colors/color-designer-tints.png",
    alt: "\u041F\u043E\u0434\u0431\u043E\u0440 \u0441\u0432\u0435\u0442\u043B\u044B\u0445 \u043E\u0442\u0442\u0435\u043D\u043A\u043E\u0432 \u0447\u0435\u0440\u0435\u0437 Color Designer",
    width: "600"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("em", {
    parentName: "p"
  }, "\u041F\u043E\u0434\u0431\u043E\u0440 \u0441\u0432\u0435\u0442\u043B\u044B\u0445 \u043E\u0442\u0442\u0435\u043D\u043A\u043E\u0432 \u0447\u0435\u0440\u0435\u0437 Color Designer")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0446\u0432\u0435\u0442 \u0432 \u043F\u0430\u043B\u0438\u0442\u0440\u0435 \u043F\u043B\u0430\u0433\u0438\u043D\u0430 \u0432\u0441\u0435\u0433\u0434\u0430 \u0431\u0435\u043B\u044B\u0439. \u041C\u044B \u0435\u0433\u043E \u043D\u0435 \u0431\u0435\u0440\u0435\u043C, \u043D\u0430\u043C \u043D\u0443\u0436\u043D\u044B \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0435 \u0441\u0435\u043C\u044C. \u0418\u0445 \u043C\u044B \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u0438\u043C \u0432\n\u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A\u0438."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("img", {
    src: "images/colors/palette-tints.png",
    alt: "\u041F\u0430\u043B\u0438\u0442\u0440\u0430 \u0441\u0432\u0435\u0442\u043B\u044B\u0445 \u043E\u0442\u0442\u0435\u043D\u043A\u043E\u0432",
    width: "250"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("em", {
    parentName: "p"
  }, "\u041F\u0430\u043B\u0438\u0442\u0440\u0430 \u0441\u0432\u0435\u0442\u043B\u044B\u0445 \u043E\u0442\u0442\u0435\u043D\u043A\u043E\u0432")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0418 \u0442\u0435\u043F\u0435\u0440\u044C \u0430\u043D\u0430\u043B\u043E\u0433\u0438\u0447\u043D\u043E \u0442\u0451\u043C\u043D\u044B\u0435 \u043E\u0442\u0442\u0435\u043D\u043A\u0438."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("img", {
    src: "images/colors/color-designer-shades.png",
    alt: "\u041F\u043E\u0434\u0431\u043E\u0440 \u0442\u0451\u043C\u043D\u044B\u0445 \u043E\u0442\u0442\u0435\u043D\u043A\u043E\u0432 \u0447\u0435\u0440\u0435\u0437 Color Designer",
    width: "600"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("em", {
    parentName: "p"
  }, "\u041F\u043E\u0434\u0431\u043E\u0440 \u0442\u0451\u043C\u043D\u044B\u0445 \u043E\u0442\u0442\u0435\u043D\u043A\u043E\u0432 \u0447\u0435\u0440\u0435\u0437 Color Designer")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0446\u0432\u0435\u0442 \u0432 \u044D\u0442\u043E\u043C \u0441\u043B\u0443\u0447\u0430\u0435 \u0432\u0441\u0435\u0433\u0434\u0430 \u0447\u0451\u0440\u043D\u044B\u0439 \u2013 \u0435\u0433\u043E \u043C\u044B \u0442\u043E\u0436\u0435 \u043D\u0435 \u0431\u0435\u0440\u0435\u043C. \u041E\u0441\u0442\u0430\u043B\u044C\u043D\u044B\u0435 \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u0438\u043C."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("img", {
    src: "images/colors/palette-shades.png",
    alt: "\u041F\u0430\u043B\u0438\u0442\u0440\u0430 \u0442\u0451\u043C\u043D\u044B\u0445 \u043E\u0442\u0442\u0435\u043D\u043A\u043E\u0432",
    width: "250"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("em", {
    parentName: "p"
  }, "\u041F\u0430\u043B\u0438\u0442\u0440\u0430 \u0442\u0451\u043C\u043D\u044B\u0445 \u043E\u0442\u0442\u0435\u043D\u043A\u043E\u0432")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u041D\u0430\u043A\u043E\u043D\u0435\u0446, \u0441\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u0438\u0440\u0443\u0435\u043C \u043E\u0442\u0442\u0435\u043D\u043A\u0438 \u043F\u043E \u043D\u0430\u0441\u044B\u0449\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u2014 \u044D\u0442\u0438\u043C \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "p"
  }, "S"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "p"
  }, "\u041F\u0440\u043E\u0441\u0442\u043E\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u043E:"), " \u0447\u0435\u043C \u0442\u0435\u043C\u043D\u0435\u0435 \u0446\u0432\u0435\u0442, \u0442\u0435\u043C \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0430\u0441\u044B\u0449\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u0438 \u043D\u0430\u043E\u0431\u043E\u0440\u043E\u0442. \u041D\u0435 \u0437\u0430\u0431\u044B\u0432\u0430\u0439\u0442\u0435 \u043F\u0440\u043E \u0433\u043B\u0430\u0437 \u2013 \u0435\u0433\u043E \u043D\u0435 \u0437\u0430\u043C\u0435\u043D\u0438\u0442 \u043D\u0430\u0431\u043E\u0440 \u043F\u0440\u0430\u0432\u0438\u043B."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u041F\u043E\u0441\u043B\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u043A\u0438 \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u043C \u0446\u0432\u0435\u0442\u043E\u0432\u0443\u044E \u043F\u0430\u043B\u0438\u0442\u0440\u0443 \u0438\u0437 10 \u043E\u0442\u0442\u0435\u043D\u043A\u043E\u0432. \u041F\u0440\u0438 \u044D\u0442\u043E\u043C \u0433\u043B\u0430\u0432\u043D\u043E\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u0435 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043E: \u0446\u0432\u0435\u0442, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043F\u0440\u0438\u0448\u0435\u043B\n\u043E\u0442 \u043A\u043B\u0438\u0435\u043D\u0442\u0430, \u043E\u0441\u0442\u0430\u043B\u0441\u044F \u043D\u0435\u0438\u0437\u043C\u0435\u043D\u043D\u044B\u043C."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("img", {
    src: "images/colors/palette-final.png",
    alt: "\u0418\u0442\u043E\u0433\u043E\u0432\u0430\u044F \u043F\u0430\u043B\u0438\u0442\u0440\u0430 \u0447\u0435\u0440\u0435\u0437 Color Designer",
    width: "250"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("em", {
    parentName: "p"
  }, "\u0418\u0442\u043E\u0433\u043E\u0432\u0430\u044F \u043F\u0430\u043B\u0438\u0442\u0440\u0430 \u0447\u0435\u0440\u0435\u0437 Color Designer")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    "id": "color-contrast-checks"
  }, "Color contrast checks"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u267F\uFE0F \u041D\u0430\u043C \u0432\u0430\u0436\u043D\u043E \u0441\u043E\u0431\u043B\u044E\u0441\u0442\u0438 \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0435 \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F \u043F\u043E \u0446\u0432\u0435\u0442\u043E\u0432\u043E\u043C\u0443 \u043A\u043E\u043D\u0442\u0440\u0430\u0441\u0442\u0443, \u0434\u0438\u043A\u0442\u0443\u0435\u043C\u044B\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", _extends({
    parentName: "p"
  }, {
    "href": "https://www.w3.org/TR/WCAG21/#contrast-minimum",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer"
  }), "\u0441\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0435\u0439 WCAG (Level AA)"), ": ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "p"
  }, "\u043A\u043E\u044D\u0444\u0444\u0438\u0446\u0438\u0435\u043D\u0442 4.5 \u0434\u043B\u044F \u043E\u0431\u044B\u0447\u043D\u043E\u0433\u043E \u0442\u0435\u043A\u0441\u0442\u0430 \u0438 3 \u0434\u043B\u044F \u043A\u0440\u0443\u043F\u043D\u043E\u0433\u043E"), " (\u043E\u0431\u044B\u0447\u043D\u043E\u0435 \u043D\u0430\u0447\u0435\u0440\u0442\u0430\u043D\u0438\u0435 >= 18px \u0438\u043B\u0438 \u0436\u0438\u0440\u043D\u043E\u0435 >= 14px)."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u041A\u043E\u043D\u0442\u0440\u0430\u0441\u0442 \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u0442 \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440 \u0432 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435 \u043F\u043E\u0434\u0431\u043E\u0440\u0430 \u043F\u0430\u043B\u0438\u0442\u0440 \u0438 \u0444\u0440\u043E\u043D\u0442\u0435\u043D\u0434-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A \u0432 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435 \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438. \u041E\u0431\u0449\u0435\u0439 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0435\u0439 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u043E\u043C \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0445 \u0446\u0432\u0435\u0442\u043E\u0432\u044B\u0445 \u043F\u0430\u0440 \u0438 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430 \u043D\u0430 \u0444\u0440\u043E\u043D\u0442\u0435\u043D\u0434\u0435."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0414\u043B\u044F \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0430:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "li"
  }, "ColorBox"), " \u0432\u044B\u0432\u043E\u0434\u0438\u0442 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u043A\u043E\u043D\u0442\u0440\u0430\u0441\u0442\u0430 \u0434\u043B\u044F \u0447\u0451\u0440\u043D\u043E\u0433\u043E \u0438 \u0431\u0435\u043B\u043E\u0433\u043E \u0442\u0435\u043A\u0441\u0442\u0430 \u043D\u0430 \u0432\u0441\u0435\u0445 \u0446\u0432\u0435\u0442\u0430\u0445 \u0441\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0439 \u043F\u0430\u043B\u0438\u0442\u0440\u044B."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u041F\u043B\u0430\u0433\u0438\u043D ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "li"
  }, "\u041011y Color Contrast Checker"), " \u0434\u043B\u044F \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u043D\u0443\u0436\u043D\u044B\u0445 \u043F\u0430\u0440 \u043D\u0430 \u0443\u0440\u043E\u0432\u043D\u0435 Figma. \u041E\u043D \u043F\u0440\u0438\u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u043A \u0444\u0440\u0435\u0439\u043C\u0443 \u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u0442 \u0432\u0441\u0435 \u0442\u0435\u043A\u0441\u0442\u044B \u043D\u0430 \u043D\u0435\u043C."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u041C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u043E \u043E\u043D\u043B\u0430\u0439\u043D-\u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u043E\u0432. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", _extends({
    parentName: "li"
  }, {
    "href": "https://webaim.org/resources/contrastchecker/",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer"
  }), "WebAIM: Contrast Checker"), " \u0438\u043B\u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", _extends({
    parentName: "li"
  }, {
    "href": "https://marijohannessen.github.io/color-contrast-checker/",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer"
  }), "Color Contrast Checker"), ".")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0414\u043B\u044F \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u0430:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", _extends({
    parentName: "li"
  }, {
    "href": "https://www.npmjs.com/package/@storybook/addon-a11y",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer"
  }), "Storybook A11y Addon"), " \u2013 \u0432\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043F\u0430\u043D\u0435\u043B\u0438 \u0432 Storybook. \u0418\u0437\u043D\u0443\u0442\u0440\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "li"
  }, "aXe"), ". \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u043D\u0430 \u044D\u0442\u0430\u043F\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0441\u0442\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", _extends({
    parentName: "li"
  }, {
    "href": "https://chrome.google.com/webstore/detail/axe-web-accessibility-tes/lhdoppojpmngadmnindnejefpokejbdd",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer"
  }), "aXe Chrome Extension"), " \u2013 \u0432\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u0442 aXe \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u043D\u043E\u0433\u043E \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u0438\u044F. \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u043D\u0430 \u044D\u0442\u0430\u043F\u0435 \u0444\u0438\u043D\u0430\u043B\u044C\u043D\u043E\u0439 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u0441\u0442\u0440\u0430\u043D\u0438\u0446.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("img", {
    src: "images/colors/contrast.png",
    alt: "\u0424\u0440\u0435\u0439\u043C\u044B \u0434\u043B\u044F \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u043A\u043E\u043D\u0442\u0440\u0430\u0441\u0442\u0430 \u0447\u0435\u0440\u0435\u0437 \u041011y Color Contrast Checker"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("em", {
    parentName: "p"
  }, "\u0424\u0440\u0435\u0439\u043C\u044B \u0434\u043B\u044F \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u043A\u043E\u043D\u0442\u0440\u0430\u0441\u0442\u0430 \u0447\u0435\u0440\u0435\u0437 \u041011y Color Contrast Checker")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    "id": "figma-usage"
  }, "Figma usage"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u041F\u043E\u0434 \u043F\u0430\u043B\u0438\u0442\u0440\u044B \u0432\u044B\u0434\u0435\u043B\u0435\u043D \u0444\u0440\u0435\u0439\u043C ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Palettes"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("img", {
    src: "images/colors/structure-palettes.png",
    alt: "\u0421\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u0444\u0440\u0435\u0439\u043C\u0430 Palletes",
    width: "400"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("em", {
    parentName: "p"
  }, "\u0421\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u0444\u0440\u0435\u0439\u043C\u0430 Palletes")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u041D\u0430 \u043F\u0440\u0438\u043C\u0435\u0440\u0435 GDS, \u0432\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435 \u0444\u0440\u0435\u0439\u043C\u044B ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "blue"), " \u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "red"), " \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442 \u043F\u0430\u043B\u0438\u0442\u0440\u044B \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0445 \u0446\u0432\u0435\u0442\u043E\u0432 \u043F\u0440\u043E\u0435\u043A\u0442\u0430, \u0432\u043E \u0444\u0440\u0435\u0439\u043C\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "grey"), " \u043B\u0435\u0436\u0438\u0442 \u043F\u0430\u043B\u0438\u0442\u0440\u0430 \u043E\u0442\u0442\u0435\u043D\u043A\u043E\u0432 \u0441\u0435\u0440\u043E\u0433\u043E. \u041C\u044B \u0434\u043E\u0431\u0430\u0432\u0438\u043B\u0438 \u043F\u043E 10 \u043E\u0442\u0442\u0435\u043D\u043A\u043E\u0432 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0446\u0432\u0435\u0442\u0430 \u2013 \u0442\u0430\u043A\u043E\u0433\u043E \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u043A\u0440\u044B\u0442\u044C \u043D\u0443\u0436\u043D\u044B\u0435 \u043A\u0440\u0430\u0435\u0432\u044B\u0435 \u043E\u0442\u0442\u0435\u043D\u043A\u0438."));
}

MDXContent.displayName = "MDXContent";
;
MDXContent.isMDXComponent = true;
var __page = function __page() {
  throw new Error("Docs-only story");
};
__page.parameters = {
  docsOnly: true
};
var componentMeta = {
  title: 'Design / Palettes',
  includeStories: ["__page"]
};
var mdxStoryNameToKey = {};
componentMeta.parameters = componentMeta.parameters || {};
componentMeta.parameters.docs = Object.assign({}, componentMeta.parameters.docs || {}, {
  page: function page() {
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__["AddContext"], {
      mdxStoryNameToKey: mdxStoryNameToKey,
      mdxComponentMeta: componentMeta
    }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(MDXContent, null));
  }
});
/* harmony default export */ __webpack_exports__["default"] = (componentMeta);

/***/ }),

/***/ 1140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__page", function() { return __page; });
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
/* harmony import */ var _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__);




function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsxRuntime classic */

/* @jsx mdx */



var layoutProps = {};
var MDXLayout = "wrapper";

function MDXContent(_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__["Meta"], {
    title: "Design / Shadows",
    mdxType: "Meta"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h1", {
    "id": "shadows-"
  }, "Shadows \u2728\uD83E\uDD16"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0422\u0435\u043D\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u044E\u0442\u0441\u044F \u043D\u0430 \u0444\u0440\u0435\u0439\u043C\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Shadows"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("img", {
    src: "images/shadows/structure.png",
    alt: "\u0421\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u0444\u0440\u0435\u0439\u043C\u0430 Shadows",
    width: "600"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("em", {
    parentName: "p"
  }, "\u0421\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u0444\u0440\u0435\u0439\u043C\u0430 Shadows")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0412\u043D\u0443\u0442\u0440\u0438 \u0444\u0440\u0435\u0439\u043C\u0430 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043B\u044E\u0431\u043E\u0435 \u0440\u0430\u0437\u0443\u043C\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0442\u0435\u043D\u0435\u0439."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("img", {
    src: "images/shadows/frame.png",
    alt: "\u0424\u0440\u0435\u0439\u043C Shadows",
    width: "600"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("em", {
    parentName: "p"
  }, "\u0424\u0440\u0435\u0439\u043C Shadows")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0414\u0438\u0437\u0430\u0439\u043D\u0435\u0440 \u043F\u0440\u0435\u0434\u043F\u043E\u043B\u0430\u0433\u0430\u0435\u0442, \u0433\u0434\u0435 \u0432 \u043F\u0440\u043E\u0435\u043A\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0442\u0435\u043D\u044C, \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u0442 \u0444\u0440\u0435\u0439\u043C \u0438 \u043F\u0440\u0438\u0441\u0432\u0430\u0438\u0432\u0430\u0435\u0442 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u043F\u0438\u0448\u0435\u0442\u0441\u044F \u0442\u0435\u043A\u0441\u0442\u043E\u043C \u043D\u0430 \u0431\u043B\u043E\u043A\u0435. \u0412 \u0441\u043B\u043E\u044F\u0445 \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u044B\u0432\u0430\u0435\u0442\u0441\u044F."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0422\u0435\u043D\u0438 \u0437\u0430\u043D\u043E\u0441\u044F\u0442\u0441\u044F \u0432 \u0441\u0442\u0438\u043B\u0438 \u044D\u0444\u0444\u0435\u043A\u0442\u043E\u0432 Figma."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("img", {
    src: "images/shadows/styles.png",
    alt: "\u0421\u0442\u0438\u043B\u0438 Figma",
    width: "250"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("em", {
    parentName: "p"
  }, "\u0421\u0442\u0438\u043B\u0438 Figma")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    "id": "variables-names"
  }, "Variables names"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0417\u0430\u0434\u0430\u0447\u0430 \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0430 \u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u0434\u043E\u0431\u0440\u0430\u0442\u044C \u0442\u0435\u043D\u0438, \u043D\u043E \u0438 \u043F\u0440\u0438\u0441\u0432\u043E\u0438\u0442\u044C \u0438\u043C \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u041F\u0440\u0430\u0432\u0438\u043B\u0430:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u041F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442 \u0444\u043E\u0440\u043C\u0430\u0442 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", _extends({
    parentName: "li"
  }, {
    "href": "https://ru.wikipedia.org/wiki/CamelCase",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer"
  }), "lowerCamelCase"), ": \u043F\u0435\u0440\u0432\u043E\u0435 \u0441\u043B\u043E\u0432\u043E \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442\u0441\u044F \u0441\u043E \u0441\u0442\u0440\u043E\u0447\u043D\u043E\u0439, \u043A\u0430\u0436\u0434\u043E\u0435 \u043F\u043E\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0435 \u2014 \u0441 \u043F\u0440\u043E\u043F\u0438\u0441\u043D\u043E\u0439. \u041D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u043B\u043E\u0432 \u043F\u0438\u0448\u0443\u0442\u0441\u044F \u0441\u043B\u0438\u0442\u043D\u043E \u0431\u0435\u0437 \u043F\u0440\u043E\u0431\u0435\u043B\u0430, \u0434\u0435\u0444\u0438\u0441\u0430 \u0438\u043B\u0438 \u043D\u0438\u0436\u043D\u0435\u0433\u043E \u043F\u043E\u0434\u0447\u0435\u0440\u043A\u0438\u0432\u0430\u043D\u0438\u044F."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u041C\u044B \u043D\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C \u0442\u0440\u0430\u043D\u0441\u043B\u0438\u0442\u0435\u0440\u0430\u0446\u0438\u044E \u2014 \u0432\u0441\u0435 \u0441\u043B\u043E\u0432\u0430 \u043F\u0438\u0448\u0443\u0442\u0441\u044F \u043D\u0430 \u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u043E\u043C.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u26D4\uFE0F shadow1"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u26D4\uFE0F SmallShadow"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u26D4\uFE0F super-inside-btn"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u2705 big"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u2705 small"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u2705 inner"));
}

MDXContent.displayName = "MDXContent";
;
MDXContent.isMDXComponent = true;
var __page = function __page() {
  throw new Error("Docs-only story");
};
__page.parameters = {
  docsOnly: true
};
var componentMeta = {
  title: 'Design / Shadows',
  includeStories: ["__page"]
};
var mdxStoryNameToKey = {};
componentMeta.parameters = componentMeta.parameters || {};
componentMeta.parameters.docs = Object.assign({}, componentMeta.parameters.docs || {}, {
  page: function page() {
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__["AddContext"], {
      mdxStoryNameToKey: mdxStoryNameToKey,
      mdxComponentMeta: componentMeta
    }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(MDXContent, null));
  }
});
/* harmony default export */ __webpack_exports__["default"] = (componentMeta);

/***/ }),

/***/ 1141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__page", function() { return __page; });
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
/* harmony import */ var _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__);




function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsxRuntime classic */

/* @jsx mdx */



var layoutProps = {};
var MDXLayout = "wrapper";

function MDXContent(_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__["Meta"], {
    title: "Design / Spacings",
    mdxType: "Meta"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h1", {
    "id": "spacings-️"
  }, "Spacings \u2699\uFE0F"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u041F\u043E \u0434\u0430\u043D\u043D\u044B\u043C \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0438, \u0432 \u0440\u0430\u0431\u043E\u0442\u0435 \u043D\u0430\u0434 \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0449\u0438\u043C\u0438 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u043C\u0438 \u2014 \u043A\u043D\u043E\u043F\u043A\u0430\u043C\u0438, \u0438\u043A\u043E\u043D\u043A\u0430\u043C\u0438, \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u043C\u0438 \u0444\u043E\u0440\u043C \u2014 \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u0442 \u043E\u0442\u0441\u0442\u0443\u043F\u044B, \u043D\u0435 \u043A\u0440\u0430\u0442\u043D\u044B\u0435 8."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u041A\u0440\u043E\u043C\u0435 \u0442\u043E\u0433\u043E \u043D\u0430 \u0443\u0440\u043E\u0432\u043D\u0435 \u043C\u0430\u043A\u0435\u0442\u043E\u0432 \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440 \u043D\u0443\u0436\u0434\u0430\u0435\u0442\u0441\u044F \u0432 \u043A\u0443\u0434\u0430 \u0431\u043E\u043B\u044C\u0448\u0438\u0445 \u043E\u0442\u0441\u0442\u0443\u043F\u0430\u0445, \u0447\u0435\u043C \u043F\u0440\u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0435 \u043C\u0438\u043A\u0440\u043E\u043C\u043E\u0434\u0443\u043B\u0435\u0439. \u0417\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u043C\u043E\u0433\u0443\u0442 \u0434\u043E\u0445\u043E\u0434\u0438\u0442\u044C \u0434\u043E 160 \u0438 \u0432\u044B\u0448\u0435."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u041D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 \u044D\u0442\u0438\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u043C\u044B \u043F\u0440\u0438\u043C\u0435\u043D\u0438\u043B\u0438 \u043D\u0435\u043B\u0438\u043D\u0435\u0439\u043D\u0443\u044E \u0448\u043A\u0430\u043B\u0443 \u0434\u043B\u044F \u043E\u0442\u0441\u0442\u0443\u043F\u043E\u0432 \u0438 \u0443\u0431\u0440\u0430\u043B\u0438 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F \u043F\u043E \u043D\u0430\u0431\u043E\u0440\u0443 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("img", {
    src: "images/spacings/scale.png",
    alt: "\u0428\u043A\u0430\u043B\u044B minor \u0438 major",
    width: "800"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("em", {
    parentName: "p"
  }, "\u0428\u043A\u0430\u043B\u044B minor \u0438 major")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0428\u043A\u0430\u043B\u0430 \u0441\u043E\u0441\u0442\u043E\u0438\u0442 \u0438\u0437 \u0434\u0432\u0443\u0445 \u0443\u0447\u0430\u0441\u0442\u043A\u043E\u0432 \u2014 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "p"
  }, "minor"), " \u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "p"
  }, "major"), ". \u041C\u0438\u043D\u043E\u0440\u043D\u0430\u044F \u0448\u043A\u0430\u043B\u0430 \u0438\u043C\u0435\u0435\u0442 \u043A\u0440\u0430\u0442\u043D\u043E\u0441\u0442\u044C 4px, \u043C\u0430\u0436\u043E\u0440\u043D\u0430\u044F \u2014 8px. \u041C\u0430\u0436\u043E\u0440\u043D\u0430\u044F \u0448\u043A\u0430\u043B\u0430 \u043D\u0435 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0430 \u0432 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F\u0445, \u043C\u0438\u043D\u043E\u0440\u043D\u0430\u044F \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0430 \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043E 40px."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "p"
  }, "\u041E\u0431\u0449\u0435\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u043E:"), " \u043E\u0431\u044B\u0447\u043D\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "p"
  }, "major"), ", \u043D\u043E \u043D\u0430 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F\u0445, \u043C\u0435\u043D\u044C\u0448\u0438\u0445 40px \u043C\u043E\u0436\u0435\u0442 \u043F\u0440\u0438\u043C\u0435\u043D\u044F\u0442\u044C\u0441\u044F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "p"
  }, "minor"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u041D\u0430 \u044D\u0442\u0430\u043F\u0435 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0451\u043D\u043D\u044B\u0435 \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u043E\u043C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0437\u0430\u043C\u0435\u043D\u044F\u0442\u0441\u044F \u043D\u0430 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0445\u0435\u043B\u043F\u0435\u0440\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "scale"), ", \u0432 \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043F\u0435\u0440\u0435\u0434\u0430\u0451\u0442\u0441\u044F \u043C\u043D\u043E\u0436\u0438\u0442\u0435\u043B\u044C, \u0430 \u0432\u0442\u043E\u0440\u043E\u0439 \u0430\u0440\u0433\u0443\u043C\u0435\u043D\u0442 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "true"), " \u0430\u043A\u0442\u0438\u0432\u0438\u0440\u0443\u0435\u0442 \u043C\u0438\u043D\u043E\u0440\u043D\u0443\u044E \u0448\u043A\u0430\u043B\u0443."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "p"
  }, "\u041F\u0440\u0438\u043C\u0435\u0440\u044B:")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "4px \u2013 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "scale(1, true)")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "16px \u2013 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "scale(2)"), " \u0438\u043B\u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "scale(4, true)")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "40px \u2013 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "scale(5)"), " \u0438\u043B\u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "scale(10, true)")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "64px \u2013 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "scale(8)")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "96px \u2013 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "scale(12)"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0412 \u0441\u043B\u0443\u0447\u0430\u0435, \u0435\u0441\u043B\u0438 \u043A\u043B\u0438\u0435\u043D\u0442 \u043F\u0440\u0438\u0445\u043E\u0434\u0438\u0442 \u0441\u043E \u0441\u0432\u043E\u0438\u043C \u0434\u0438\u0437\u0430\u0439\u043D\u043E\u043C, \u0431\u0430\u0437\u043E\u0432\u044B\u0439 \u0448\u0430\u0433 \u0441\u0435\u0442\u043A\u0438 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0440\u0430\u0432\u0435\u043D 10. \u0412 \u0442\u0430\u043A\u043E\u043C \u0441\u043B\u0443\u0447\u0430\u0435 \u0445\u0435\u043B\u043F\u0435\u0440 \u043C\u043E\u0436\u043D\u043E \u043F\u0435\u0440\u0435\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C \u0441 \u043D\u043E\u0432\u044B\u043C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435\u043C, \u0430 \u043C\u0438\u043D\u043E\u0440\u043D\u044B\u0439 \u0448\u0430\u0433 \u0441\u0442\u0430\u043D\u0435\u0442 \u0440\u0430\u0432\u0435\u043D 5. \u041B\u043E\u0433\u0438\u043A\u0430 \u0432\u0441\u0435\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u043F\u0440\u0438 \u044D\u0442\u043E\u043C \u043E\u0441\u0442\u0430\u0451\u0442\u0441\u044F \u043F\u0440\u0435\u0436\u043D\u0435\u0439."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    "id": "vertical-rhytm"
  }, "Vertical rhytm"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0412\u0441\u0435 \u043E\u0442\u0441\u0442\u0443\u043F\u044B \u0432\u043D\u0443\u0442\u0440\u0438 \u043C\u0430\u043A\u0435\u0442\u0430 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u044E\u0442\u0441\u044F \u043A\u043E\u043D\u0435\u0447\u043D\u044B\u043C\u0438 \u043E\u0442\u0441\u0442\u0443\u043F\u0430\u043C\u0438 \u043E\u0442 \u0431\u043B\u043E\u043A\u043E\u0432."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("img", {
    src: "images/spacings/product-card.jpg",
    alt: "\u041E\u0442\u0441\u0442\u0443\u043F\u044B \u043D\u0430 \u043F\u0440\u0438\u043C\u0435\u0440\u0435 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u0442\u043E\u0432\u0430\u0440\u0430",
    width: "400"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("em", {
    parentName: "p"
  }, "\u041E\u0442\u0441\u0442\u0443\u043F\u044B \u043D\u0430 \u043F\u0440\u0438\u043C\u0435\u0440\u0435 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u0442\u043E\u0432\u0430\u0440\u0430")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0411\u0430\u0437\u043E\u0432\u044B\u0435 \u043B\u0438\u043D\u0438\u0438 \u0442\u0435\u043A\u0441\u0442\u0430 \u043C\u043E\u0433\u0443\u0442 \u043D\u0435 \u043F\u043E\u043F\u0430\u0434\u0430\u0442\u044C \u0432 \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u0443\u044E \u0441\u0435\u0442\u043A\u0443 \u043C\u0430\u043A\u0435\u0442\u0430 \u2014 \u044D\u0442\u043E \u043D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u043E. \u0412\u0430\u0436\u043D\u043E \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0442\u044C \u043E\u0442\u0441\u0442\u0443\u043F\u044B \u043C\u0435\u0436\u0434\u0443 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u043C\u0438, \u043A\u0440\u0430\u0442\u043D\u044B\u043C\u0438 4 \u0438\u043B\u0438 8:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("img", {
    src: "images/spacings/text.png",
    alt: "\u0412\u044B\u0440\u0430\u0432\u043D\u0438\u0432\u0430\u043D\u0438\u0435 \u0442\u0435\u043A\u0441\u0442\u0430 \u0432 Figma",
    width: "400"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("em", {
    parentName: "p"
  }, "\u0412\u044B\u0440\u0430\u0432\u043D\u0438\u0432\u0430\u043D\u0438\u0435 \u0442\u0435\u043A\u0441\u0442\u0430 \u0432 Figma")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    "id": "recommendations"
  }, "Recommendations"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u0421\u043E\u0431\u043B\u044E\u0434\u0430\u0439\u0442\u0435 \u0435\u0434\u0438\u043D\u0441\u0442\u0432\u043E \u0432 \u043E\u0442\u0441\u0442\u0443\u043F\u0430\u0445 \u0432 \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u044B\u0445 \u043C\u0435\u0441\u0442\u0430\u0445."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u041D\u0435 \u0438\u0437\u043C\u0435\u043D\u044F\u0439\u0442\u0435 \u0432\u0440\u0443\u0447\u043D\u0443\u044E \u0432\u044B\u0441\u043E\u0442\u0443 \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u044B\u0445 \u0431\u043B\u043E\u043A\u043E\u0432 \u2014 \u044D\u0442\u043E \u0437\u0430\u0442\u0440\u0443\u0434\u043D\u0438\u0442 \u0440\u0430\u0431\u043E\u0442\u0443 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u0430.")));
}

MDXContent.displayName = "MDXContent";
;
MDXContent.isMDXComponent = true;
var __page = function __page() {
  throw new Error("Docs-only story");
};
__page.parameters = {
  docsOnly: true
};
var componentMeta = {
  title: 'Design / Spacings',
  includeStories: ["__page"]
};
var mdxStoryNameToKey = {};
componentMeta.parameters = componentMeta.parameters || {};
componentMeta.parameters.docs = Object.assign({}, componentMeta.parameters.docs || {}, {
  page: function page() {
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__["AddContext"], {
      mdxStoryNameToKey: mdxStoryNameToKey,
      mdxComponentMeta: componentMeta
    }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(MDXContent, null));
  }
});
/* harmony default export */ __webpack_exports__["default"] = (componentMeta);

/***/ }),

/***/ 1142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__page", function() { return __page; });
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
/* harmony import */ var _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__);




function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsxRuntime classic */

/* @jsx mdx */



var layoutProps = {};
var MDXLayout = "wrapper";

function MDXContent(_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__["Meta"], {
    title: "Design / Typography",
    mdxType: "Meta"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h1", {
    "id": "typography-️"
  }, "Typography \u2728\u2699\uFE0F\uD83E\uDD16"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0424\u0440\u0435\u0439\u043C ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Typography"), " Figma \u0445\u0440\u0430\u043D\u0438\u0442 \u0434\u0430\u043D\u043D\u044B\u0435 \u043E \u0442\u0438\u043F\u043E\u0433\u0440\u0430\u0444\u0438\u043A\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u0430. \u041E\u043D\u0438 \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u0441\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u044B \u0441 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u043E\u0439 \u0447\u0435\u0440\u0435\u0437 \u0434\u0438\u0437\u0430\u0439\u043D-\u0442\u043E\u043A\u0435\u043D\u044B. \u0420\u0435\u0448\u0435\u043D\u0438\u0435 \u0434\u0438\u043A\u0442\u0443\u0435\u0442 \u0441\u0442\u0440\u043E\u0433\u043E\u0441\u0442\u044C \u0432 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0438 \u0441\u0442\u0438\u043B\u0435\u0439, \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0442 \u0432\u0440\u0435\u043C\u044F \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0438 \u0443\u043F\u0440\u043E\u0449\u0430\u0435\u0442 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u043A\u0443 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("img", {
    src: "images/typography/frame.png",
    alt: "\u0424\u0440\u0435\u0439\u043C Typography",
    width: "600"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("em", {
    parentName: "p"
  }, "\u0424\u0440\u0435\u0439\u043C Typography")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0414\u0438\u0437\u0430\u0439\u043D\u0435\u0440 \u043F\u043E\u0434\u0431\u0438\u0440\u0430\u0435\u0442 \u0442\u0438\u043F\u043E\u0433\u0440\u0430\u0444\u0438\u043A\u0443 \u0438 \u043C\u0435\u043D\u044F\u0435\u0442 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u043F\u043E \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u043D\u043E\u043C\u0443 \u0448\u0430\u0431\u043B\u043E\u043D\u0443. \u041D\u043E\u0432\u044B\u0435 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0432 \u043A\u043E\u043D\u0435\u0446 \u0441\u043F\u0438\u0441\u043A\u0430, \u0441\u043E\u0431\u043B\u044E\u0434\u0430\u044F \u043E\u0440\u0438\u0433\u0438\u043D\u0430\u043B\u044C\u043D\u0443\u044E \u0432\u043B\u043E\u0436\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u0438 \u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0441\u043B\u043E\u0435\u0432. \u0418\u0437 \u043F\u043E\u0434\u043E\u0431\u0440\u0430\u043D\u043D\u044B\u0445 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440 \u0441\u043E\u0437\u0434\u0430\u0435\u0442 \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u044B\u0435 \u0441\u0442\u0438\u043B\u0438 Figma \u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u0438\u0445 \u043D\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u0435."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    "id": "frame-structure"
  }, "Frame structure"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0421\u0438\u043D\u0438\u043C \u0446\u0432\u0435\u0442\u043E\u043C \u043E\u0431\u043E\u0437\u043D\u0430\u0447\u0435\u043D\u044B \u0441\u043B\u043E\u0438, \u0432 \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440 \u0432\u043D\u043E\u0441\u0438\u0442 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("img", {
    src: "images/typography/structure.png",
    alt: "\u0421\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u0444\u0440\u0435\u0439\u043C\u0430 Typography",
    width: "600"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("em", {
    parentName: "p"
  }, "\u0421\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u0444\u0440\u0435\u0439\u043C\u0430 Typography")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "description"), " \u2013 \u0432\u0441\u043F\u043E\u043C\u043E\u0433\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0444\u0440\u0435\u0439\u043C \u0434\u043B\u044F \u043F\u043E\u0434\u043F\u0438\u0441\u0435\u0439, \u043E\u043D \u043D\u0435 \u044D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u0443\u0435\u0442\u0441\u044F."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "breakpoints"), " \u0437\u0430\u0434\u0430\u0451\u0442 \u0442\u043E\u0447\u043A\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u043C \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0442 \u0441\u0442\u0438\u043B\u0438 \u0438\u0437 \u0444\u0440\u0435\u0439\u043C\u043E\u0432 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "desktop"), " \u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "mobile"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u044F \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445 \u0432\u043E \u0444\u0440\u0435\u0439\u043C\u0430\u0445 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "desktop"), " \u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "mobile"), " \u0434\u043E\u043B\u0436\u043D\u044B \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u0442\u044C. \u0414\u043E\u043F\u0443\u0441\u043A\u0430\u0435\u0442\u0441\u044F, \u0447\u0442\u043E \u0432\u043E \u0444\u0440\u0435\u0439\u043C\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "mobile"), " \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044E\u0442 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435,\n\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0435\u0441\u0442\u044C \u0432 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "desktop"), " \u2013 \u044D\u0442\u043E \u0434\u0435\u043B\u0430\u0435\u0442 \u0440\u0430\u0437\u043C\u0435\u0440 \u0444\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u043C."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    "id": "fluid-typography"
  }, "Fluid typography"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u0434\u043B\u044F \u0442\u0435\u043A\u0441\u0442\u0430 \u043D\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u0430\u0445 \u043F\u0440\u0438\u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u043F\u043B\u0430\u0432\u043D\u043E\u0435 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u0440\u0430\u0437\u043C\u0435\u0440\u0430 \u043A\u0435\u0433\u043B\u044F \u043C\u0435\u0436\u0434\u0443 \u0434\u0432\u0443\u043C\u044F \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0451\u043D\u043D\u044B\u043C\u0438 \u0431\u0440\u0435\u0439\u043A\u043F\u043E\u0438\u043D\u0442\u0430\u043C\u0438. \u0412\u043D\u0435 \u044D\u0442\u043E\u0433\u043E \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D\u0430 \u0440\u0430\u0437\u043C\u0435\u0440 \u0444\u0438\u043A\u0441\u0438\u0440\u0443\u0435\u0442\u0441\u044F, \u0447\u0442\u043E\u0431\u044B \u0438\u0437\u0431\u0435\u0436\u0430\u0442\u044C \u0447\u0440\u0435\u0437\u043C\u0435\u0440\u043D\u043E\u0433\u043E \u0443\u043C\u0435\u043D\u044C\u0448\u0435\u043D\u0438\u044F/\u0443\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u0438\u044F."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0411\u0440\u0435\u0439\u043A\u043F\u043E\u0438\u043D\u0442\u044B \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u0432\u043E \u0444\u0440\u0435\u0439\u043C\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "breakpoints"), ". \u0414\u043B\u044F GDS \u044D\u0442\u043E ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "p"
  }, "1440"), " \u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "p"
  }, "768"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u2757\uFE0F \u0427\u0438\u0441\u043B\u043E \u0431\u0440\u0435\u0439\u043A\u043F\u043E\u0438\u043D\u0442\u043E\u0432 \u0431\u043E\u043B\u0435\u0435 2 \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044F."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "p"
  }, "\u041F\u0440\u0438 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0438 \u044D\u043A\u0440\u0430\u043D\u0430 1920"), " \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044E \u043E\u0442\u043E\u0431\u0440\u0430\u0437\u044F\u0442\u0441\u044F \u0440\u0430\u0437\u043C\u0435\u0440\u044B \u0438\u0437 \u043D\u0430\u0431\u043E\u0440\u0430 \u0444\u0440\u0435\u0439\u043C\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "desktop"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "p"
  }, "\u041F\u0440\u0438 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0438 \u044D\u043A\u0440\u0430\u043D\u0430 375"), " \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044E \u043E\u0442\u043E\u0431\u0440\u0430\u0437\u044F\u0442\u0441\u044F \u0440\u0430\u0437\u043C\u0435\u0440\u044B \u0438\u0437 \u043D\u0430\u0431\u043E\u0440\u0430 \u0444\u0440\u0435\u0439\u043C\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "mobile"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "p"
  }, "\u041F\u0440\u0438 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0438 \u044D\u043A\u0440\u0430\u043D\u0430 960 \u0438\u043B\u0438 1280"), " \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044E \u043E\u0442\u043E\u0431\u0440\u0430\u0437\u044F\u0442\u0441\u044F \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u043F\u043E\u0434\u043E\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0432 \u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B\u0435 \u043C\u0435\u0436\u0434\u0443 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "p"
  }, "768"), " \u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "p"
  }, "1440"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\uD83D\uDCAC \u0415\u0441\u043B\u0438 \u0432\u0430\u043C \u043F\u043E \u043A\u0430\u043A\u043E\u0439-\u0442\u043E \u043F\u0440\u0438\u0447\u0438\u043D\u0435 \u043D\u0435 \u043D\u0443\u0436\u043D\u043E \u043F\u043B\u0430\u0432\u043D\u043E\u0435 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u0448\u0440\u0438\u0444\u0442\u0430, \u0442\u043E \u0435\u0433\u043E \u043C\u043E\u0436\u043D\u043E \u043E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043D\u0430 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0435 \u043B\u0438\u0431\u043E \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E, \u043B\u0438\u0431\u043E \u0434\u043B\u044F \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0445 \u0441\u0442\u0438\u043B\u0435\u0439. \u0423\u0432\u0435\u0434\u043E\u043C\u0438\u0442\u0435 \u043E\u0431 \u044D\u0442\u043E\u043C \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u0430."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    "id": "variables-names"
  }, "Variables names"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("img", {
    src: "images/typography/variables.png",
    alt: "\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u044F \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445",
    width: "450"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("em", {
    parentName: "p"
  }, "\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u044F \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0414\u043B\u044F \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u043D\u0430\u043C \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u043D\u0430\u0431\u043E\u0440 \u0442\u0438\u043F\u043E\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "li"
  }, "h1, h2, h3, h4, h5, h6"), " \u2014 \u0441\u0442\u0438\u043B\u0438 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u043E\u0432"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "li"
  }, "subheading"), " \u2014 \u043F\u043E\u0434\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0438"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "li"
  }, "body"), " \u2014 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u0442\u0435\u043A\u0441\u0442"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "li"
  }, "small"), " \u2014 \u043C\u0435\u043B\u043A\u0438\u0435 \u0442\u0435\u043A\u0441\u0442\u044B"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "li"
  }, "caption"), " \u2014 \u043F\u043E\u0434\u043F\u0438\u0441\u0438"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "li"
  }, "button"), " \u2014 \u0442\u0435\u043A\u0441\u0442\u044B \u043D\u0430 \u043A\u043D\u043E\u043F\u043A\u0430\u0445")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0417\u0430\u0434\u0430\u0447\u0430 \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0430 \u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C \u0441\u0442\u0438\u043B\u0438 \u0442\u0438\u043F\u043E\u0433\u0440\u0430\u0444\u0438\u043A\u0438, \u043D\u043E \u0438 \u043F\u0440\u0438\u0441\u0432\u043E\u0438\u0442\u044C \u0438\u043C \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u041F\u0440\u0430\u0432\u0438\u043B\u0430:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u041F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442 \u0444\u043E\u0440\u043C\u0430\u0442 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", _extends({
    parentName: "li"
  }, {
    "href": "https://ru.wikipedia.org/wiki/CamelCase",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer"
  }), "lowerCamelCase"), ": \u043F\u0435\u0440\u0432\u043E\u0435 \u0441\u043B\u043E\u0432\u043E \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442\u0441\u044F \u0441\u043E \u0441\u0442\u0440\u043E\u0447\u043D\u043E\u0439, \u043A\u0430\u0436\u0434\u043E\u0435 \u043F\u043E\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0435 \u2014 \u0441 \u043F\u0440\u043E\u043F\u0438\u0441\u043D\u043E\u0439. \u041D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u043B\u043E\u0432 \u043F\u0438\u0448\u0443\u0442\u0441\u044F \u0441\u043B\u0438\u0442\u043D\u043E \u0431\u0435\u0437 \u043F\u0440\u043E\u0431\u0435\u043B\u0430, \u0434\u0435\u0444\u0438\u0441\u0430 \u0438\u043B\u0438 \u043D\u0438\u0436\u043D\u0435\u0433\u043E \u043F\u043E\u0434\u0447\u0435\u0440\u043A\u0438\u0432\u0430\u043D\u0438\u044F."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u041C\u044B \u043D\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C \u0442\u0440\u0430\u043D\u0441\u043B\u0438\u0442\u0435\u0440\u0430\u0446\u0438\u044E \u2014 \u0432\u0441\u0435 \u0441\u043B\u043E\u0432\u0430 \u043F\u0438\u0448\u0443\u0442\u0441\u044F \u043D\u0430 \u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u043E\u043C.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    "id": "similar-styles"
  }, "Similar styles"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0414\u043B\u044F \u043E\u0434\u043D\u043E\u0439 \u0444\u0443\u043D\u043A\u0446\u0438\u0438 \u043C\u043E\u0433\u0443\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u0445\u043E\u0436\u0438\u0445 \u0441\u0442\u0438\u043B\u0435\u0439, \u043D\u0435\u0437\u043D\u0430\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043E\u0442\u043B\u0438\u0447\u0430\u044E\u0449\u0438\u0445\u0441\u044F \u0434\u0440\u0443\u0433 \u043E\u0442 \u0434\u0440\u0443\u0433\u0430. \u0414\u043E\u043F\u0443\u0441\u043A\u0430\u0435\u0442\u0441\u044F \u0437\u0430\u043F\u0438\u0441\u044B\u0432\u0430\u0442\u044C \u0438\u0445 \u043D\u0430 \u043E\u0434\u043D\u043E\u0439 \u0441\u0442\u0440\u043E\u043A\u0435:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("img", {
    src: "images/typography/multiple-styles.png",
    alt: "\u041D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u0442\u0438\u043B\u0435\u0439 \u0434\u043B\u044F \u043E\u0434\u043D\u043E\u0439 \u0444\u0443\u043D\u043A\u0446\u0438\u0438",
    width: "500"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("em", {
    parentName: "p"
  }, "\u041D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u0442\u0438\u043B\u0435\u0439 \u0434\u043B\u044F \u043E\u0434\u043D\u043E\u0439 \u0444\u0443\u043D\u043A\u0446\u0438\u0438")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0414\u043B\u044F \u0442\u0430\u043A\u0438\u0445 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0441\u0442\u0438\u043B\u0435\u0439 \u043D\u0443\u0436\u043D\u043E \u0441\u043E\u0431\u043B\u044E\u0434\u0430\u0442\u044C \u043B\u043E\u0433\u0438\u043A\u0443 \u0438 \u043F\u0440\u0438\u043D\u0446\u0438\u043F\u044B \u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u044F \u0441\u043B\u043E\u0435\u0432:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u26D4\uFE0Fbody"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u26D4\uFE0F small"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u26D4\uFE0F caption"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u2705 bodyBold"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u2705 smallBold"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u2705 captionUppercase"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    "id": "recommendations"
  }, "Recommendations"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("ol", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ol"
  }, "\u0423\u043A\u0430\u0437\u044B\u0432\u0430\u0439\u0442\u0435 line-height \u0432 \u043F\u0440\u043E\u0446\u0435\u043D\u0442\u0430\u0445. \u042D\u0442\u043E \u043F\u043E\u0437\u0432\u043E\u043B\u0438\u0442 \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u043E \u0432\u044B\u0441\u0442\u0430\u0432\u043B\u044F\u0442\u044C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u0440\u0430\u0437\u043D\u044B\u0445 \u043A\u0435\u0433\u043B\u0435\u0439 \u0438 \u043D\u0435 \u043C\u0435\u043D\u044F\u0442\u044C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u0440\u0438 \u0441\u043C\u0435\u043D\u0435 \u043A\u0435\u0433\u043B\u044F. \u0420\u0430\u0437\u0443\u043C\u043D\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435, \u043A\u0440\u0430\u0442\u043D\u043E\u0435 \u0434\u0435\u0441\u044F\u0442\u0438: 120%, 130%, 140%, 150% \u0438 \u0442.\u0434."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ol"
  }, "\u041D\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0431\u043E\u043B\u0435\u0435 \u0434\u0432\u0443\u0445 \u0440\u0430\u0437\u043D\u044B\u0445 \u043D\u0435\u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0445 \u0448\u0440\u0438\u0444\u0442\u043E\u0432 \u0432 \u043F\u0440\u043E\u0435\u043A\u0442\u0435, \u0435\u0441\u043B\u0438 \u044D\u0442\u043E \u043D\u0438\u0447\u0435\u043C \u043D\u0435 \u043E\u043F\u0440\u0430\u0432\u0434\u0430\u043D\u043E. \u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043F\u0440\u043E\u043F\u043E\u0440\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0443 \u043D\u0430\u0447\u0435\u0440\u0442\u0430\u043D\u0438\u0439."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ol"
  }, "\u041F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0439\u0442\u0435 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u0430\u043C \u0432\u0430\u0440\u0438\u0430\u0442\u0438\u0432\u043D\u0443\u044E \u0432\u0435\u0440\u0441\u0438\u044E \u0448\u0440\u0438\u0444\u0442\u0430, \u0435\u0441\u043B\u0438 \u043E\u043D\u0430 \u0438\u043C\u0435\u0435\u0442\u0441\u044F. \u041D\u0430 \u0442\u0435\u043A\u0443\u0449\u0438\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438 \u0432\u0430\u0440\u0438\u0430\u0442\u0438\u0432\u043D\u044B\u0445 \u0448\u0440\u0438\u0444\u0442\u043E\u0432 \u0432 Figma \u043D\u0435\u0442, \u043D\u043E \u0435\u0433\u043E \u043C\u043E\u0436\u043D\u043E \u0432\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0432\u043C\u0435\u0441\u0442\u043E \u043E\u0431\u044B\u0447\u043D\u043E\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u043D\u0430 \u044D\u0442\u0430\u043F\u0435 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438, \u0447\u0442\u043E \u0437\u043D\u0430\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043F\u043E\u043D\u0438\u0437\u0438\u0442 \u043E\u0431\u0449\u0438\u0439 \u0432\u0435\u0441 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043C\u044B\u0445 \u0430\u0441\u0441\u0435\u0442\u043E\u0432."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ol"
  }, "\u041F\u043E\u0434\u0431\u0438\u0440\u0430\u0439\u0442\u0435 \u0444\u043E\u043B\u043B\u0431\u0435\u043A\u0438 \u0434\u043B\u044F \u043D\u0435\u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0445 \u0448\u0440\u0438\u0444\u0442\u043E\u0432. \u0424\u043E\u043B\u043B\u0431\u0435\u043A \u2014 \u0441\u0438\u0441\u0442\u0435\u043C\u043D\u044B\u0439 \u0448\u0440\u0438\u0444\u0442, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0432\u0438\u0434\u0438\u0442 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C, \u043F\u043E\u043A\u0430 \u043D\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0441\u044F \u043D\u0435\u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0448\u0440\u0438\u0444\u0442. \u0414\u043B\u044F \u0443\u043C\u0435\u043D\u044C\u0448\u0435\u043D\u0438\u044F \u0432\u0438\u0437\u0443\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0441\u043A\u0430\u0447\u043A\u0430 \u043F\u043E\u0434\u0431\u0438\u0440\u0430\u0439\u0442\u0435 \u043F\u043E\u0445\u043E\u0436\u0438\u0439 \u043F\u043E \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430\u043C \u0448\u0440\u0438\u0444\u0442 \u0438\u0437 \u0441\u0438\u0441\u0442\u0435\u043C\u043D\u044B\u0445."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ol"
  }, "\u041D\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 line-height \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043E\u0442\u0441\u0442\u0443\u043F\u043E\u0432 \u043F\u0440\u0438 \u043F\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u0438 \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0445 \u0441\u043F\u0438\u0441\u043A\u043E\u0432. \u042D\u0442\u043E \u0440\u0443\u0448\u0438\u0442 \u043B\u043E\u0433\u0438\u043A\u0443 \u0440\u0430\u0431\u043E\u0442\u044B \u0441 \u0442\u0435\u043A\u0441\u0442\u043E\u043C, \u0430 \u043F\u0440\u0438 \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u0435 \u0441\u0442\u0440\u043E\u043A\u0438 \u043C\u044B \u0438\u043C\u0435\u0435\u043C \u043D\u0435\u0430\u0434\u0435\u043A\u0432\u0430\u0442\u043D\u044B\u0439 line-height. \u042D\u0442\u043E \u043C\u0435\u0448\u0430\u0435\u0442 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u0430\u043C \u0432\u044B\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0442\u043E\u0447\u043D\u044B\u0435 \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u0438. \u042D\u0442\u043E \u043D\u0430\u0440\u0443\u0448\u0430\u0435\u0442 \u0440\u0430\u0431\u043E\u0442\u0443 \u0441\u043E \u0441\u0442\u0438\u043B\u044F\u043C\u0438.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("img", {
    src: "images/typography/list-incorrect.jpg",
    alt: "\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E\u0435 \u0432\u044B\u0440\u0430\u0432\u043D\u0438\u0432\u0430\u043D\u0438\u0435 \u0447\u0435\u0440\u0435\u0437 line-height",
    width: "500"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("em", {
    parentName: "p"
  }, "\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E\u0435 \u0432\u044B\u0440\u0430\u0432\u043D\u0438\u0432\u0430\u043D\u0438\u0435 \u0447\u0435\u0440\u0435\u0437 line-height")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u041F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0435\u0435 \u0432 \u044D\u0442\u043E\u043C \u0441\u043B\u0443\u0447\u0430\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043E\u0442\u0441\u0442\u0443\u043F \u043C\u0435\u0436\u0434\u0443 \u0430\u0431\u0437\u0430\u0446\u0430\u043C\u0438:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("img", {
    src: "images/typography/list-correct.png",
    alt: "\u041A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E\u0435 \u0432\u044B\u0440\u0430\u0432\u043D\u0438\u0432\u0430\u043D\u0438\u0435 \u0447\u0435\u0440\u0435\u0437 \u043E\u0442\u0441\u0442\u0443\u043F\u044B \u043F\u0430\u0440\u0430\u0433\u0440\u0430\u0444\u043E\u0432",
    width: "400"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("em", {
    parentName: "p"
  }, "\u041A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E\u0435 \u0432\u044B\u0440\u0430\u0432\u043D\u0438\u0432\u0430\u043D\u0438\u0435 \u0447\u0435\u0440\u0435\u0437 \u043E\u0442\u0441\u0442\u0443\u043F\u044B \u043F\u0430\u0440\u0430\u0433\u0440\u0430\u0444\u043E\u0432")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    "id": "resources"
  }, "Resources"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u041C\u044B \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u043E\u043C\u043E\u0433\u0443\u0442 \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0443 \u0441\u043F\u0440\u043E\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0440\u0430\u0432\u043D\u043E\u043C\u0435\u0440\u043D\u044B\u0439 \u0440\u0438\u0442\u043C \u0440\u0430\u0437\u043C\u0435\u0440\u0430 \u0448\u0440\u0438\u0444\u0442\u0430 \u0432 \u043F\u0440\u043E\u0435\u043A\u0442\u0435. \u0421\u0435\u0440\u0432\u0438\u0441\u044B \u2014 \u043D\u0435 \u043F\u0430\u043D\u0430\u0446\u0435\u044F, \u0430 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442 \u043F\u043E\u043C\u043E\u0449\u0438 \u0438 \u0441\u0438\u0441\u0442\u0435\u043C\u043D\u044B\u0439 \u043F\u043E\u0434\u0445\u043E\u0434 \u043A \u043F\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u044E \u0442\u0438\u043F\u043E\u0433\u0440\u0430\u0444\u0438\u043A\u0438."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\uD83D\uDCDA ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", _extends({
    parentName: "li"
  }, {
    "href": "https://www.modularscale.com/",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer"
  }), "Modular Scale")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\uD83D\uDCDA ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", _extends({
    parentName: "li"
  }, {
    "href": "https://type-scale.com/",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer"
  }), "A Visual Type Scale"))));
}

MDXContent.displayName = "MDXContent";
;
MDXContent.isMDXComponent = true;
var __page = function __page() {
  throw new Error("Docs-only story");
};
__page.parameters = {
  docsOnly: true
};
var componentMeta = {
  title: 'Design / Typography',
  includeStories: ["__page"]
};
var mdxStoryNameToKey = {};
componentMeta.parameters = componentMeta.parameters || {};
componentMeta.parameters.docs = Object.assign({}, componentMeta.parameters.docs || {}, {
  page: function page() {
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__["AddContext"], {
      mdxStoryNameToKey: mdxStoryNameToKey,
      mdxComponentMeta: componentMeta
    }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(MDXContent, null));
  }
});
/* harmony default export */ __webpack_exports__["default"] = (componentMeta);

/***/ }),

/***/ 1143:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./colors.stories.mdx": 1144,
	"./global.stories.mdx": 1182,
	"./icons.stories.mdx": 1145,
	"./layout.stories.mdx": 1146,
	"./palettes.stories.mdx": 1147,
	"./shadows.stories.mdx": 1148,
	"./spacings.stories.mdx": 1149,
	"./theming.stories.mdx": 1183,
	"./typography.stories.mdx": 1184
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 1143;

/***/ }),

/***/ 1144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__page", function() { return __page; });
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
/* harmony import */ var _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__);




function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsxRuntime classic */

/* @jsx mdx */



var layoutProps = {};
var MDXLayout = "wrapper";

function MDXContent(_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__["Meta"], {
    title: "Dev / Colors",
    mdxType: "Meta"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h1", {
    "id": "colors-"
  }, "Colors \u2728\uD83E\uDD16"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u042D\u0442\u043E \u0444\u0438\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435, \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0437\u0430\u0432\u043E\u0434\u044F\u0442\u0441\u044F \u0441\u0442\u0438\u043B\u0438. \u0412\u044B \u0434\u043E\u043B\u0436\u043D\u044B \u0434\u043B\u044F \u0432\u0441\u0435\u0445 \u0446\u0432\u0435\u0442\u043E\u0432 \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u044D\u0442\u0438 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u2757\uFE0F \u0415\u0441\u043B\u0438 \u0432\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0435 \u0442\u043E\u043A\u0435\u043D\u044B, \u0442\u043E \u043D\u0435 \u0434\u043E\u043B\u0436\u043D\u044B \u0441\u0430\u043C\u0438 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0442\u044C \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435. \u0415\u0441\u043B\u0438 \u043F\u043E\u044F\u0432\u0438\u043B\u0430\u0441\u044C \u0442\u0430\u043A\u0430\u044F \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u044C, \u0442\u043E \u0432\u0435\u0440\u043E\u044F\u0442\u043D\u0435\u0435 \u0432\u0441\u0435\u0433\u043E, \u0447\u0442\u043E \u044D\u0442\u043E \u043E\u0448\u0438\u0431\u043A\u0430 \u043C\u0430\u043A\u0435\u0442\u0430. \u041E\u0431\u0441\u0443\u0436\u0434\u0430\u0439\u0442\u0435 \u0442\u0430\u043A\u0438\u0435 \u043C\u043E\u043C\u0435\u043D\u0442\u044B \u0441 \u0432\u0435\u0434\u0443\u0449\u0438\u043C \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u043E\u043C \u043F\u0440\u043E\u0435\u043A\u0442\u0430."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    "id": "usage"
  }, "Usage"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u041D\u0443\u0436\u043D\u043E \u0437\u0430\u0434\u0430\u0442\u044C \u0446\u0432\u0435\u0442 \u0444\u043E\u043D\u0430 \u0434\u043B\u044F \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430. \u0412 \u043C\u0430\u043A\u0435\u0442\u0435 \u0443 \u044D\u0442\u043E\u0433\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u0443\u043A\u0430\u0437\u0430\u043D \u0441\u0442\u0438\u043B\u044C:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("img", {
    src: "images/colors/style.png",
    alt: "\u0421\u0442\u0438\u043B\u044C \u0446\u0432\u0435\u0442\u0430 \u0432 Figma",
    width: "300"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("em", {
    parentName: "p"
  }, "\u0421\u0442\u0438\u043B\u044C \u0446\u0432\u0435\u0442\u0430 \u0432 Figma")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0412\u044B \u0437\u043D\u0430\u0435\u0442\u0435 \u0438\u043C\u044F \u0441\u0442\u0438\u043B\u044F \u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u044C\u0441\u044F \u043A \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u0439 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u0442\u0435\u043C\u044B:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("code", _extends({
    parentName: "pre"
  }, {
    "className": "language-js"
  }), "import { useTheme } from '@greensight/gds';\n\nconst Example = () => {\n    const { colors } = useTheme();\n    return <div css={{ backgroundColor: colors.brand }}>Example</div>;\n};\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u2757\uFE0F \u0412 \u0438\u0434\u0435\u0430\u043B\u0435 \u0438\u043C\u0435\u043D\u0430 \u0441\u0442\u0438\u043B\u0435\u0439 \u0434\u043E\u043B\u0436\u043D\u044B \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u0442\u044C \u0441 \u0438\u043C\u0435\u043D\u0430\u043C\u0438 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445 \u043D\u0430 \u0444\u0440\u0435\u0439\u043C\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Colors"), ". \u0415\u0441\u043B\u0438 \u044D\u0442\u043E \u043D\u0435 \u0442\u0430\u043A, \u0442\u043E \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044C \u043A \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0443. \u0412 \u043F\u0440\u043E\u0442\u0438\u0432\u043D\u043E\u043C \u0441\u043B\u0443\u0447\u0430\u0435 \u043F\u0440\u0438\u0434\u0451\u0442\u0441\u044F \u043A\u0430\u0436\u0434\u044B\u0439 \u0440\u0430\u0437 \u0438\u0441\u043A\u0430\u0442\u044C \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u044F \u043C\u0435\u0436\u0434\u0443 \u0441\u0442\u0438\u043B\u044F\u043C\u0438 \u0438 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u043C\u0438."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\uD83D\uDCAC \u0414\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u044B \u043C\u043E\u0433\u0443\u0442 \u0433\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0442\u0438\u043B\u0438 \u0434\u043B\u044F \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u0443\u0434\u043E\u0431\u0441\u0442\u0432\u0430. \u042D\u0442\u043E \u0432\u044B\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044F \u0441\u043B\u0435\u0448\u0430\u043C\u0438 \u0432 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F\u0445 \u2013 \u0438\u0445 \u043F\u0440\u043E\u0441\u0442\u043E \u0438\u0433\u043D\u043E\u0440\u0438\u0440\u0443\u0439\u0442\u0435."));
}

MDXContent.displayName = "MDXContent";
;
MDXContent.isMDXComponent = true;
var __page = function __page() {
  throw new Error("Docs-only story");
};
__page.parameters = {
  docsOnly: true
};
var componentMeta = {
  title: 'Dev / Colors',
  includeStories: ["__page"]
};
var mdxStoryNameToKey = {};
componentMeta.parameters = componentMeta.parameters || {};
componentMeta.parameters.docs = Object.assign({}, componentMeta.parameters.docs || {}, {
  page: function page() {
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__["AddContext"], {
      mdxStoryNameToKey: mdxStoryNameToKey,
      mdxComponentMeta: componentMeta
    }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(MDXContent, null));
  }
});
/* harmony default export */ __webpack_exports__["default"] = (componentMeta);

/***/ }),

/***/ 1145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__page", function() { return __page; });
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
/* harmony import */ var _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__);




function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsxRuntime classic */

/* @jsx mdx */



var layoutProps = {};
var MDXLayout = "wrapper";

function MDXContent(_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__["Meta"], {
    title: "Dev / Icons",
    mdxType: "Meta"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h1", {
    "id": "icons-"
  }, "Icons \u2728\uD83E\uDD16"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    "id": "design-tokens"
  }, "Design tokens"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0418\u043A\u043E\u043D\u043A\u0438 \u0442\u043E\u043A\u0435\u043D\u0438\u0437\u0438\u0440\u0443\u044E\u0442\u0441\u044F, \u043D\u043E \u043D\u0435 \u043A\u0430\u043A \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u0432 \u043E\u0431\u044A\u0435\u043A\u0442\u0435 \u0442\u0435\u043C\u044B, \u0430 \u0444\u0430\u0439\u043B\u044B. \u0414\u0438\u0437\u0430\u0439\u043D\u0435\u0440 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0435 \u0438\u043A\u043E\u043D\u043A\u0438 \u0432 Figma, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F \u0443\u0434\u043E\u0431\u043D\u043E\u0435 \u0435\u043C\u0443 \u0440\u0430\u0437\u0431\u0438\u0435\u043D\u0438\u0435 \u043F\u043E \u0433\u0440\u0443\u043F\u043F\u0430\u043C. \u0418\u043C\u0435\u043D\u0430 \u0444\u043E\u0440\u043C\u0438\u0440\u0443\u044E\u0442\u0441\u044F \u0438\u0437 \u0440\u0430\u0437\u0431\u0438\u0435\u043D\u0438\u0439 \u043F\u043E \u0441\u043B\u0435\u0448\u0430\u043C, \u0447\u0442\u043E \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0433\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0438\u0445 \u0432 \u043C\u0435\u043D\u044E Figma \u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0431\u044B\u0441\u0442\u0440\u044B\u043C \u0434\u043E\u0441\u0442\u0443\u043F\u043E\u043C. \u041F\u0440\u0438 \u0432\u044B\u043A\u0430\u0447\u0438\u0432\u0430\u043D\u0438\u0438 \u0442\u043E\u043A\u0435\u043D\u043E\u0432 \u0444\u0430\u0439\u043B\u044B \u0438\u043A\u043E\u043D\u043E\u043A \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u044E\u0442\u0441\u044F \u043D\u0430 \u043F\u0440\u043E\u0435\u043A\u0442 \u0432 \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0438\u044E, \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u0443\u044E \u0432 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0435 \u043A\u043E\u043D\u0444\u0438\u0433\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "iconsDir"), " (\u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E: ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "src/client/images/icons/tokens"), "). \u0418\u0437 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0439 \u0444\u043E\u0440\u043C\u0438\u0440\u0443\u044E\u0442\u0441\u044F \u0434\u0435\u0440\u0435\u0432\u043E \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0438\u0439."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0412\u0441\u0435 \u0438\u043A\u043E\u043D\u043A\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442 fill, \u0447\u0442\u043E\u0431\u044B \u0431\u044B\u043B\u0430 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u043E \u0441\u0442\u0438\u043B\u0438\u0437\u043E\u0432\u0430\u0442\u044C \u0438\u043A\u043E\u043D\u043A\u0438 \u0441\u043E \u0441\u0442\u043E\u0440\u043E\u043D\u044B \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432 (\u0438\u043D\u0430\u0447\u0435 \u0432\u043E\u0437\u043D\u0438\u043A \u0431\u044B \u043A\u043E\u043D\u0444\u043B\u0438\u043A\u0442 \u0441\u043E stroke \u2013 \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C \u0442\u0438\u043F \u0438\u043A\u043E\u043D\u043A\u0438). \u0412 Figma \u043F\u0440\u0438 \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u043D\u0438\u0438 fill \u043E\u043D \u043F\u0440\u043E\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0432 \u0438\u043A\u043E\u043D\u043A\u0443 \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430, \u0447\u0442\u043E \u0431\u043B\u043E\u043A\u0438\u0440\u0443\u0435\u0442 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u043F\u0435\u0440\u0435\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C \u0446\u0432\u0435\u0442 \u0437\u0430\u043B\u0438\u0432\u043A\u0438 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043D\u043E. \u041F\u043E\u044D\u0442\u043E\u043C\u0443 \u043D\u0430 \u044D\u0442\u0430\u043F\u0435 \u0441\u043A\u0430\u0447\u0438\u0432\u0430\u043D\u0438\u044F \u0438\u0437 \u0440\u0430\u0437\u043C\u0435\u0442\u043A\u0438 \u0443\u0434\u0430\u043B\u044F\u044E\u0442\u0441\u044F \u0432\u0441\u0435 fill \u2013 \u0432\u0441\u0435 \u0438\u043A\u043E\u043D\u043A\u0438 \u0441\u0442\u0430\u043D\u043E\u0432\u044F\u0442\u0441\u044F \u0447\u0451\u0440\u043D\u044B\u043C\u0438 \u0438 \u043F\u0435\u0440\u0435\u043A\u0440\u0430\u0448\u0438\u0432\u0430\u044E\u0442\u0441\u044F \u0441\u043E \u0441\u0442\u043E\u0440\u043E\u043D\u044B \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u2757\uFE0F \u0418\u0437 \u043C\u043D\u043E\u0433\u043E\u0446\u0432\u0435\u0442\u043D\u044B\u0445 \u0438\u043A\u043E\u043D\u043E\u043A \u0442\u0430\u043A\u0436\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u0441\u044F fill, \u0442\u0430\u043A \u0447\u0442\u043E \u0442\u0430\u043A\u0438\u0435 \u0438\u043A\u043E\u043D\u043A\u0438 \u043D\u0443\u0436\u043D\u043E \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u0438\u0442\u044C \u0440\u0443\u043A\u0430\u043C\u0438."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u2757\uFE0F \u0414\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0438\u044F \u0441 \u0442\u043E\u043A\u0435\u043D\u0430\u043C\u0438 \u043F\u0440\u0438 \u0441\u043A\u0430\u0447\u0438\u0432\u0430\u043D\u0438\u0438 \u043D\u0435 \u043F\u0435\u0440\u0435\u0441\u043E\u0437\u0434\u0430\u0451\u0442\u0441\u044F \u043A\u0430\u0436\u0434\u044B\u0439 \u0440\u0430\u0437 \u0441 \u043D\u0443\u043B\u044F, \u0430 \u0434\u043E\u0437\u0430\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u0442\u0441\u044F, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u043F\u0440\u0438 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0438 \u0438\u043A\u043E\u043D\u043E\u043A \u0438\u043B\u0438 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0438 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u044B \u0438\u043A\u043E\u043D\u043E\u043A (\u0440\u0435\u0434\u043A\u0438\u0439 \u043A\u0435\u0439\u0441) \u043C\u043E\u0433\u0443\u0442 \u043E\u0441\u0442\u0430\u0432\u0430\u0442\u044C\u0441\u044F \u043D\u0435\u0430\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u0444\u0430\u0439\u043B\u044B/\u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0438\u0438. \u0415\u0441\u043B\u0438 \u0432\u044B \u0437\u0430\u043C\u0435\u0442\u0438\u043B\u0438, \u0447\u0442\u043E \u044D\u0442\u043E \u0432\u0430\u0448 \u0441\u043B\u0443\u0447\u0430\u0439, \u0442\u043E \u043F\u0440\u043E\u0441\u0442\u043E \u0443\u0434\u0430\u043B\u0438\u0442\u0435 \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0438\u044E \u0442\u043E\u043A\u0435\u043D\u043E\u0432 \u0438 \u043F\u0435\u0440\u0435\u043A\u0430\u0447\u0430\u0439\u0442\u0435 \u0442\u043E\u043A\u0435\u043D\u044B \u0437\u0430\u043D\u043E\u0432\u043E."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0422\u043E\u043A\u0435\u043D\u044B \u0445\u0440\u0430\u043D\u044F\u0442\u0441\u044F \u0432 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E\u0439 \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0438\u0438 \u0432\u043D\u0443\u0442\u0440\u0438 \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0438\u0438 \u0441 \u0438\u043A\u043E\u043D\u043A\u0430\u043C\u0438, \u0442\u0430\u043A \u0447\u0442\u043E \u0443 \u0432\u0430\u0441 \u0435\u0441\u0442\u044C \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0442\u044C \u0441\u0432\u043E\u0438 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435 \u0438\u043A\u043E\u043D\u043A\u0438 (\u0438 \u0434\u0430\u0436\u0435 \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0438\u0438) \u2013 \u043F\u0440\u043E\u0441\u0442\u043E \u0432\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0438\u0445 \u0432\u043D\u0435 \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0438\u0438 \u0442\u043E\u043A\u0435\u043D\u043E\u0432. \u041E\u0434\u043D\u0430\u043A\u043E \u0432 \u0431\u043E\u043B\u044C\u0448\u0438\u043D\u0441\u0442\u0432\u0435 \u0441\u043B\u0443\u0447\u0430\u0435\u0432, \u0435\u0441\u043B\u0438 \u0438\u043A\u043E\u043D\u043A\u0430 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0432 \u043C\u0430\u043A\u0435\u0442\u0430\u0445, \u0442\u043E \u043E\u043D\u0430 \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C \u0438 \u0432 \u043A\u0438\u0442\u0435 \u2013 \u043F\u0440\u043E\u0441\u0438\u0442\u0435 \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0430 \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u2757\uFE0F \u0414\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0438\u044F \u0441 \u0442\u043E\u043A\u0435\u043D\u0430\u043C\u0438 \u043D\u0435 \u0434\u043E\u043B\u0436\u043D\u0430 \u043F\u0440\u0430\u0432\u0438\u0442\u044C\u0441\u044F \u0432\u0440\u0443\u0447\u043D\u0443\u044E. \u0412\u0430\u0448\u0438 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u043F\u0435\u0440\u0435\u0437\u0430\u043F\u0438\u0448\u0443\u0442\u0441\u044F \u043D\u0430 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0439 \u0441\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0430\u0446\u0438\u0438. \u0415\u0441\u043B\u0438 \u0432\u0430\u043C \u043D\u0443\u0436\u043D\u043E \u0432\u043D\u0435\u0441\u0442\u0438 \u043F\u0440\u0430\u0432\u043A\u0438 \u0432 \u0440\u0430\u0437\u043C\u0435\u0442\u043A\u0435 \u0438\u043A\u043E\u043D\u043A\u0438, \u0442\u043E \u0441\u043A\u043E\u043F\u0438\u0440\u0443\u0439\u0442\u0435 \u0435\u0451 \u0438 \u043F\u043E\u043C\u0435\u0441\u0442\u0438\u0442\u0435 \u0432\u043D\u0435 \u044D\u0442\u043E\u0439 \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0438\u0438."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    "id": "sizes"
  }, "Sizes"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0418\u043A\u043E\u043D\u043A\u0438 \u0440\u0438\u0441\u0443\u044E\u0442\u0441\u044F \u0438 \u0438\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u0443\u044E\u0442\u0441\u044F \u0432 \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u0430\u0445 \u0441 \u043F\u043E\u043B\u044F\u043C\u0438 \u2013 \u0442\u0430\u043A\u043E\u0439 \u043F\u043E\u0434\u0445\u043E\u0434 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u0438\u0437\u0438\u0440\u0443\u0435\u0442 \u0440\u0430\u0437\u043C\u0435\u0440\u044B \u0438\u043A\u043E\u043D\u043E\u043A \u043D\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u0435 \u0438 \u0434\u0435\u043B\u0430\u0435\u0442 \u0438\u0445 \u0432\u0437\u0430\u0438\u043C\u043E\u0437\u0430\u043C\u0435\u043D\u044F\u0435\u043C\u044B\u043C\u0438. \u041A\u0430\u043A \u043F\u0440\u0430\u0432\u0438\u043B\u043E \u043D\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F 1-3 \u0440\u0430\u0437\u043C\u0435\u0440\u0430. \u041F\u0440\u0438 \u044D\u0442\u043E\u043C \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u044B \u0437\u0430\u0447\u0430\u0441\u0442\u0443\u044E (\u043D\u043E \u043D\u0435 \u0432\u0441\u0435\u0433\u0434\u0430) \u0441\u0442\u0440\u043E\u044F\u0442 \u0441\u0432\u043E\u0438 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0438 \u0440\u0430\u0437\u043C\u0435\u0440\u043E\u0432, \u0442\u0430\u043A \u0447\u0442\u043E \u0432 \u0442\u0430\u043A\u0438\u0445 \u0441\u043B\u0443\u0447\u0430\u044F\u0445 \u0432\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0438\u0438 \u0438\u043A\u043E\u043D\u043E\u043A, \u0441\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u043F\u043E \u0440\u0430\u0437\u043C\u0435\u0440\u0443."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u041F\u0435\u0440\u0435\u043D\u043E\u0441 \u0440\u0430\u0437\u043C\u0435\u0440\u043E\u0432 \u043D\u0430 \u0444\u0440\u043E\u043D\u0442 \u0441 \u043E\u0434\u043D\u043E\u0439 \u0441\u0442\u043E\u0440\u043E\u043D\u044B \u0441\u043E\u0437\u0434\u0430\u0451\u0442 \u043B\u0438\u0448\u043D\u0438\u0435 \u0438\u043A\u043E\u043D\u043A\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043C\u043E\u0436\u043D\u043E \u0431\u044B\u043B\u043E \u0431\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043C\u0435\u0442\u043E\u0434\u043E\u043C \u0441\u043A\u0435\u0439\u043B\u0438\u043D\u0433\u0430, \u043D\u043E \u0441 \u0434\u0440\u0443\u0433\u043E\u0439 \u043D\u0430\u043B\u0430\u0436\u0438\u0432\u0430\u0435\u0442 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u043C\u0435\u0436\u0434\u0443 \u043E\u0442\u0434\u0435\u043B\u0430\u043C\u0438: \u0432\u044B\u0431\u043E\u0440 \u0438\u043A\u043E\u043D\u043A\u0438 \u0432 \u043C\u0430\u043A\u0435\u0442\u0435 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u0435\u0451 \u043F\u043E\u043B\u043D\u043E\u0435 \u0438\u043C\u044F \u0441\u043E \u0441\u043B\u0435\u0448\u0430\u043C\u0438, \u0447\u0442\u043E \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 1:1 \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044E \u0438\u043A\u043E\u043D\u043A\u0438 \u0432 \u0432\u0430\u0448\u0435\u0439 \u0444\u0430\u0439\u043B\u043E\u0432\u043E\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u0435. \u0412 \u0434\u0430\u043D\u043D\u043E\u0439 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0438 \u0434\u0443\u0431\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0438\u043A\u043E\u043D\u043E\u043A \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043D\u0435\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u043C, \u0442.\u043A. \u0431\u0435\u0437 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0441\u043F\u0440\u0430\u0439\u0442\u0430 \u043E\u043D\u0438 \u0432 \u043B\u044E\u0431\u043E\u043C \u0441\u043B\u0443\u0447\u0430\u0435 \u0431\u0443\u0434\u0443\u0442 \u0432\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u044B \u0438\u043D\u043B\u0430\u0439\u043D\u043E\u043C \u0432 \u043A\u043E\u0434 \u0438 \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0438 \u0432\u044B \u043D\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    "id": "usage"
  }, "Usage"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u043E\u0432\u0430\u043D\u043D\u044B\u043C \u043C\u0435\u0442\u043E\u0434\u043E\u043C \u0440\u0430\u0431\u043E\u0442\u044B \u0441 \u0438\u043A\u043E\u043D\u043A\u0430\u043C\u0438 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", _extends({
    parentName: "p"
  }, {
    "href": "https://www.smooth-code.com/open-source/svgr/",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer"
  }), "svgr"), ": \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442, \u043A\u043E\u043D\u0432\u0435\u0440\u0442\u0438\u0440\u0443\u044E\u0449\u0438\u0439 svg-\u0444\u0430\u0439\u043B\u044B \u0432 react-\u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B. \u0421 \u043D\u0438\u043C \u0432\u044B \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442\u0435 \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u044B\u0439 \u043F\u043E\u0434\u0445\u043E\u0434 \u043A \u0440\u0430\u0431\u043E\u0442\u0435 \u0441\u043E \u0441\u0442\u043E\u0440\u043E\u043D\u044B \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0438 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435/\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u043D\u0430 \u0432\u044B\u0445\u043E\u0434\u0435 (\u0432 html \u0432\u0441\u0442\u0430\u0432\u0438\u0442\u0441\u044F inline svg). GDS \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "svgr"), " \u0432\u043D\u0443\u0442\u0440\u0438, \u043D\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043D\u0443\u0436\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0435\u0433\u043E \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0443 \u0447\u0435\u0440\u0435\u0437 \u043B\u043E\u0430\u0434\u0435\u0440 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", _extends({
    parentName: "p"
  }, {
    "href": "https://github.com/smooth-code/svgr/tree/master/packages/webpack",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer"
  }), "@svgr/webpack"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0414\u043B\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0438\u043A\u043E\u043D\u043A\u0438 \u043D\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u0435 \u043E\u043D\u0430 \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C \u0438\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0430 \u0438 \u0432\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0430, \u043A\u0430\u043A React \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("code", _extends({
    parentName: "pre"
  }, {
    "className": "language-js"
  }), "import CheckCircle from '@icons/tokens/medium/checkCircle.svg';\n\nconst Example = () => (\n    <div>\n        <CheckCircle /> Done!\n    </div>\n);\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\uD83C\uDFC6 \u0422.\u043A. \u043A\u0430\u0436\u0434\u0430\u044F \u0438\u043A\u043E\u043D\u043A\u0430 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u043C, \u0442\u043E \u0435\u0451 \u0438\u043C\u044F \u0434\u043E\u043B\u0436\u043D\u043E \u043D\u0430\u0447\u0438\u043D\u0430\u0442\u044C\u0441\u044F \u0441 \u0437\u0430\u0433\u043B\u0430\u0432\u043D\u043E\u0439 \u0431\u0443\u043A\u0432\u044B."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u041A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442 svg-\u0430\u0442\u0440\u0438\u0431\u0443\u0442\u044B \u0447\u0435\u0440\u0435\u0437 props. \u0422.\u043E. \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0437\u0430\u0434\u0430\u0442\u044C \u0446\u0432\u0435\u0442 \u0447\u0435\u0440\u0435\u0437 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "fill"), ", \u043F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u043A\u0435\u0439\u043B\u0438\u043D\u0433 \u0447\u0435\u0440\u0435\u0437 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "width"), "/", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "height"), " \u0438 \u0432\u0441\u0442\u0440\u043E\u0438\u0442\u044C css \u0447\u0435\u0440\u0435\u0437 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "style"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\uD83D\uDCDA \u0421\u0440\u0430\u0432\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0430\u043D\u0430\u043B\u0438\u0437 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0445 \u043F\u043E\u0434\u0445\u043E\u0434\u043E\u0432 \u0440\u0430\u0431\u043E\u0442\u044B \u0441 svg \u0441 \u0442\u043E\u0447\u043A\u0438 \u0437\u0440\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438: ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", _extends({
    parentName: "p"
  }, {
    "href": "https://medium.com/@marcintreder/design-system-sprint-6-the-fastest-icons-on-earth-bf91c0a47ef9",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer"
  }), "Design System Sprint 6: The Fastest Icons on Earth\n"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    "id": "accessibility"
  }, "Accessibility"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u267F\uFE0F \u0415\u0441\u043B\u0438 \u0438\u043A\u043E\u043D\u043A\u0430 \u043D\u0435\u0441\u0451\u0442 \u043D\u0435 \u043F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440, \u0442\u043E \u0434\u043B\u044F \u043D\u0435\u0451 \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u043F\u0440\u043E\u043F\u0438\u0441\u0430\u043D \u043D\u0435\u0439\u043C\u0438\u043D\u0433, \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0439 \u0434\u043B\u044F \u0432\u0441\u0435\u0445 AT."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0438\u043D\u043B\u0430\u0439\u043D\u043E\u0432\u044B\u0445 \u0438\u043A\u043E\u043D\u043E\u043A \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043D\u0430\u043C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0434\u043B\u044F \u044D\u0442\u043E\u0439 \u0446\u0435\u043B\u0438 \u0442\u0435\u0433 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "title"), ". \u0412 \u0441\u043B\u0443\u0447\u0430\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "svgr"), " \u0443\u043A\u0430\u0437\u0430\u043D\u0438\u0435 \u044D\u0442\u043E\u0433\u043E \u0442\u0435\u0433\u0430 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E \u0447\u0435\u0440\u0435\u0437 \u043F\u0440\u043E\u043F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "title"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\uD83D\uDD28 \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "title"), " \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043E\u043F\u0446\u0438\u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "titleProp: true"), " \u0432 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044E ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "@svgr/webpack"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\uD83D\uDCDA \u0421\u0440\u0430\u0432\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0430\u043D\u0430\u043B\u0438\u0437 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0445 \u043F\u043E\u0434\u0445\u043E\u0434\u043E\u0432 \u043F\u043E \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u044E \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0441\u0442\u0438: ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", _extends({
    parentName: "p"
  }, {
    "href": "https://www.deque.com/blog/creating-accessible-svgs/",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer"
  }), "Creating Accessible SVGs"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    "id": "placeholder"
  }, "Placeholder"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u041D\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0437\u0430\u0434\u0430\u043D\u0430 \u0438\u043A\u043E\u043D\u043A\u0430-\u043F\u043B\u0435\u0439\u0441\u0445\u043E\u043B\u0434\u0435\u0440 \u2013 \u044D\u0442\u043E \u0438\u043A\u043E\u043D\u043A\u0430, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0432\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u0440\u0435\u0437\u0435\u0440\u0432\u0430 \u043C\u0435\u0441\u0442\u0430 \u0432 \u043F\u0440\u043E\u0442\u043E\u0442\u0438\u043F\u0430\u0445, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0432\u043F\u043E\u0441\u043B\u0435\u0434\u0441\u0442\u0432\u0438\u0438 \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u043C\u0435\u043D\u0435\u043D\u0430 \u043D\u0430 \u0430\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u0443\u044E. \u0422\u0430\u043A\u0436\u0435 \u044D\u0442\u0443 \u0438\u043A\u043E\u043D\u043A\u0443 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B \u0430\u0432\u0442\u043E\u043A\u0438\u0442\u043E\u0432."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0427\u0442\u043E\u0431\u044B \u0437\u0430\u0434\u0430\u0442\u044C \u043F\u043B\u0435\u0439\u0441\u0445\u043E\u043B\u0434\u0435\u0440 \u0434\u043B\u044F \u043F\u0440\u043E\u0435\u043A\u0442\u0430, \u043F\u0435\u0440\u0435\u0434\u0430\u0439\u0442\u0435 svgr-\u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0432 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "placeholder"), " \u0432\u0430\u0448\u0435\u0433\u043E \u043E\u0431\u044A\u0435\u043A\u0442\u0430 \u0442\u0435\u043C\u044B."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u041F\u043B\u0435\u0439\u0441\u0445\u043E\u043B\u0434\u0435\u0440 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u043F\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u043C. \u0415\u0441\u043B\u0438 \u0435\u0433\u043E \u043D\u0435 \u0437\u0430\u0434\u0430\u0432\u0430\u0442\u044C, \u0442\u043E \u0430\u0432\u0442\u043E\u043A\u0438\u0442\u044B \u0431\u0443\u0434\u0443\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043F\u043B\u0435\u0439\u0441\u0445\u043E\u043B\u0434\u0435\u0440 \u0438\u0437 \u0431\u0430\u0437\u043E\u0432\u043E\u0439 \u0442\u0435\u043C\u044B GDS."));
}

MDXContent.displayName = "MDXContent";
;
MDXContent.isMDXComponent = true;
var __page = function __page() {
  throw new Error("Docs-only story");
};
__page.parameters = {
  docsOnly: true
};
var componentMeta = {
  title: 'Dev / Icons',
  includeStories: ["__page"]
};
var mdxStoryNameToKey = {};
componentMeta.parameters = componentMeta.parameters || {};
componentMeta.parameters.docs = Object.assign({}, componentMeta.parameters.docs || {}, {
  page: function page() {
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__["AddContext"], {
      mdxStoryNameToKey: mdxStoryNameToKey,
      mdxComponentMeta: componentMeta
    }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(MDXContent, null));
  }
});
/* harmony default export */ __webpack_exports__["default"] = (componentMeta);

/***/ }),

/***/ 1146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__page", function() { return __page; });
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
/* harmony import */ var _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _storybook_docgen_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(236);




function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsxRuntime classic */

/* @jsx mdx */




var layoutProps = {};
var MDXLayout = "wrapper";

function MDXContent(_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__["Meta"], {
    title: "Dev / Layout",
    mdxType: "Meta"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h1", {
    "id": "layout-🧱"
  }, "Layout \u2728\uD83E\uDDF1\uD83E\uDD16"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0414\u043B\u044F \u0443\u043F\u0440\u043E\u0449\u0435\u043D\u0438\u044F \u0440\u0430\u0431\u043E\u0442\u044B \u0441 \u0441\u0435\u0442\u043A\u0430\u043C\u0438 GDS \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "Layout"), " \u2013 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0434\u043B\u044F \u043F\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u044F \u0441\u0435\u0442\u043E\u043A \u043D\u0430 \u0433\u0440\u0438\u0434\u0430\u0445 \u0438 \u0444\u043B\u0435\u043A\u0441\u0430\u0445"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "Section"), " \u2013 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0434\u043B\u044F \u0432\u0441\u0442\u0430\u0432\u043A\u0438 \u0440\u0430\u0437\u0434\u0435\u043B\u0430 \u0432 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0435 \u0442\u0435\u043B\u043E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "Container"), " \u2013 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0434\u043B\u044F \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043E\u0431\u0451\u0440\u0442\u043A\u0438 \u0432 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 \u043E\u0431 \u044D\u0442\u0438\u0445 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430\u0445 \u0441\u043C\u043E\u0442\u0440\u0438 \u0432 \u0438\u0445 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0421\u043E \u0441\u0442\u043E\u0440\u043E\u043D\u044B Figma \u0437\u0430\u0434\u0430\u044E\u0442\u0441\u044F \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0442\u0438\u043F\u043E\u0432\u043E\u0439 \u0441\u0435\u0442\u043A\u0438 \u0438 \u0431\u0440\u0435\u0439\u043A\u043F\u043E\u0438\u043D\u0442\u044B \u043F\u0440\u043E\u0435\u043A\u0442\u0430. \u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0441\u0435\u0442\u043A\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442\u0441\u044F \u043F\u0440\u0435\u0436\u0434\u0435 \u0432\u0441\u0435\u0433\u043E \u0432\u043D\u0443\u0442\u0440\u0438 \u044D\u0442\u0438\u0445 \u0432\u0441\u043F\u043E\u043C\u043E\u0433\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432 \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0434\u0435\u0444\u043E\u043B\u0442\u043D\u044B\u0445. \u041F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u0431\u0440\u0435\u0439\u043A\u043F\u043E\u0438\u043D\u0442\u043E\u0432 \u0431\u0443\u0434\u0443\u0442 \u043F\u043E\u043B\u0435\u0437\u043D\u044B \u0434\u043B\u044F \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u043E\u0432 \u043F\u043E Media \u0438 \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u0438\u044F \u0430\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u044B\u0445 \u0441\u0442\u0438\u043B\u0435\u0439."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    "id": "theme"
  }, "Theme"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__["Props"], {
    of: _storybook_docgen_Layout__WEBPACK_IMPORTED_MODULE_6__[/* LayoutTheme */ "b"],
    mdxType: "Props"
  }));
}

MDXContent.displayName = "MDXContent";
;
MDXContent.isMDXComponent = true;
var __page = function __page() {
  throw new Error("Docs-only story");
};
__page.parameters = {
  docsOnly: true
};
var componentMeta = {
  title: 'Dev / Layout',
  includeStories: ["__page"]
};
var mdxStoryNameToKey = {};
componentMeta.parameters = componentMeta.parameters || {};
componentMeta.parameters.docs = Object.assign({}, componentMeta.parameters.docs || {}, {
  page: function page() {
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__["AddContext"], {
      mdxStoryNameToKey: mdxStoryNameToKey,
      mdxComponentMeta: componentMeta
    }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(MDXContent, null));
  }
});
/* harmony default export */ __webpack_exports__["default"] = (componentMeta);

/***/ }),

/***/ 1147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__page", function() { return __page; });
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
/* harmony import */ var _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__);




function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsxRuntime classic */

/* @jsx mdx */



var layoutProps = {};
var MDXLayout = "wrapper";

function MDXContent(_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__["Meta"], {
    title: "Dev / Palettes",
    mdxType: "Meta"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h1", {
    "id": "palettes-"
  }, "Palettes \u2728\uD83E\uDD16"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0418\u0437 \u044D\u0442\u0438\u0445 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440 \u0441\u0442\u0440\u043E\u0438\u0442 \u043A\u043E\u043D\u0435\u0447\u043D\u044B\u0435 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u0432 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Colors"), ". \u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A \u043D\u0435\u043F\u043E\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0435\u043D\u043D\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0438\u0437 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Palettes"), " \u043D\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442. \u042D\u0442\u0438 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0442\u044F\u043D\u0443\u0442\u0441\u044F \u0434\u043B\u044F \u0434\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u043F\u0430\u0442\u0442\u0435\u0440\u043D\u043E\u0432 \u043D\u0430 \u0443\u0440\u043E\u0432\u043D\u0435 \u0441\u0430\u043C\u043E\u0439 \u0434\u0438\u0437\u0430\u0439\u043D-\u0441\u0438\u0441\u0442\u0435\u043C\u044B. \u041D\u0430 \u0443\u0440\u043E\u0432\u043D\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u0438\u0445 \u043C\u043E\u0436\u043D\u043E \u0432\u044B\u0432\u0435\u0441\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 \u0430\u0432\u0442\u043E\u043A\u0438\u0442, \u043D\u043E \u044D\u0442\u0438\u043C \u0438\u0445 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F."));
}

MDXContent.displayName = "MDXContent";
;
MDXContent.isMDXComponent = true;
var __page = function __page() {
  throw new Error("Docs-only story");
};
__page.parameters = {
  docsOnly: true
};
var componentMeta = {
  title: 'Dev / Palettes',
  includeStories: ["__page"]
};
var mdxStoryNameToKey = {};
componentMeta.parameters = componentMeta.parameters || {};
componentMeta.parameters.docs = Object.assign({}, componentMeta.parameters.docs || {}, {
  page: function page() {
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__["AddContext"], {
      mdxStoryNameToKey: mdxStoryNameToKey,
      mdxComponentMeta: componentMeta
    }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(MDXContent, null));
  }
});
/* harmony default export */ __webpack_exports__["default"] = (componentMeta);

/***/ }),

/***/ 1148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__page", function() { return __page; });
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
/* harmony import */ var _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__);




function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsxRuntime classic */

/* @jsx mdx */



var layoutProps = {};
var MDXLayout = "wrapper";

function MDXContent(_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__["Meta"], {
    title: "Dev / Shadows",
    mdxType: "Meta"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h1", {
    "id": "shadows-"
  }, "Shadows \u2728\uD83E\uDD16"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0412 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445 \u0442\u0435\u043D\u0435\u0439 \u0445\u0440\u044F\u043D\u044F\u0442\u0441\u044F \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u0432 CSS \u043F\u0440\u0430\u0432\u0438\u043B\u043E ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "box-shadow"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u2757\uFE0F \u0415\u0441\u043B\u0438 \u0432\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0435 \u0442\u043E\u043A\u0435\u043D\u044B, \u0442\u043E \u043D\u0435 \u0434\u043E\u043B\u0436\u043D\u044B \u0441\u0430\u043C\u0438 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0442\u044C \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435. \u0415\u0441\u043B\u0438 \u043F\u043E\u044F\u0432\u0438\u043B\u0430\u0441\u044C \u0442\u0430\u043A\u0430\u044F \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u044C, \u0442\u043E \u0432\u0435\u0440\u043E\u044F\u0442\u043D\u0435\u0435 \u0432\u0441\u0435\u0433\u043E, \u0447\u0442\u043E \u044D\u0442\u043E \u043E\u0448\u0438\u0431\u043A\u0430 \u043C\u0430\u043A\u0435\u0442\u0430. \u041E\u0431\u0441\u0443\u0436\u0434\u0430\u0439\u0442\u0435 \u0442\u0430\u043A\u0438\u0435 \u043C\u043E\u043C\u0435\u043D\u0442\u044B \u0441 \u0432\u0435\u0434\u0443\u0449\u0438\u043C \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u043E\u043C \u043F\u0440\u043E\u0435\u043A\u0442\u0430."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    "id": "usage"
  }, "Usage"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u041D\u0443\u0436\u043D\u043E \u0437\u0430\u0434\u0430\u0442\u044C \u0442\u0435\u043D\u044C \u0434\u043B\u044F \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430. \u0412 \u043C\u0430\u043A\u0435\u0442\u0435 \u0443 \u044D\u0442\u043E\u0433\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u0443\u043A\u0430\u0437\u0430\u043D \u0441\u0442\u0438\u043B\u044C:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("img", {
    src: "images/shadows/style.png",
    alt: "\u0421\u0442\u0438\u043B\u044C \u0442\u0435\u043D\u0438 \u0432 Figma",
    width: "300"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("em", {
    parentName: "p"
  }, "\u0421\u0442\u0438\u043B\u044C \u0442\u0435\u043D\u0438 \u0432 Figma")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0412\u044B \u0437\u043D\u0430\u0435\u0442\u0435 \u0438\u043C\u044F \u0441\u0442\u0438\u043B\u044F \u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u044C\u0441\u044F \u043A \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u0439 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u0442\u0435\u043C\u044B:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("code", _extends({
    parentName: "pre"
  }, {
    "className": "language-js"
  }), "import { useTheme } from '@greensight/gds';\n\nconst Example = () => {\n    const { shadows } = useTheme();\n    return <div css={{ boxShadow: shadows.inner }}>Example</div>;\n};\n")));
}

MDXContent.displayName = "MDXContent";
;
MDXContent.isMDXComponent = true;
var __page = function __page() {
  throw new Error("Docs-only story");
};
__page.parameters = {
  docsOnly: true
};
var componentMeta = {
  title: 'Dev / Shadows',
  includeStories: ["__page"]
};
var mdxStoryNameToKey = {};
componentMeta.parameters = componentMeta.parameters || {};
componentMeta.parameters.docs = Object.assign({}, componentMeta.parameters.docs || {}, {
  page: function page() {
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__["AddContext"], {
      mdxStoryNameToKey: mdxStoryNameToKey,
      mdxComponentMeta: componentMeta
    }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(MDXContent, null));
  }
});
/* harmony default export */ __webpack_exports__["default"] = (componentMeta);

/***/ }),

/***/ 1149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__page", function() { return __page; });
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
/* harmony import */ var _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__);




function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsxRuntime classic */

/* @jsx mdx */



var layoutProps = {};
var MDXLayout = "wrapper";

function MDXContent(_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__["Meta"], {
    title: "Dev / Spacings",
    mdxType: "Meta"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h1", {
    "id": "spacings-️"
  }, "Spacings \u2699\uFE0F"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0414\u043B\u044F \u0437\u0430\u0434\u0430\u043D\u0438\u044F \u0440\u0430\u0437\u043C\u0435\u0440\u043E\u0432 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432, \u043F\u043E\u043B\u0435\u0439 \u0438 \u043E\u0442\u0441\u0442\u0443\u043F\u043E\u0432 \u0432\u043C\u0435\u0441\u0442\u043E \u043F\u0440\u044F\u043C\u043E\u0433\u043E \u0443\u043A\u0430\u0437\u0430\u043D\u0438\u044F \u0447\u0438\u0441\u043B\u0430 \u043F\u0438\u043A\u0441\u0435\u043B\u0435\u0439 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0445\u0435\u043B\u043F\u0435\u0440 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "scale"), ". \u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u043E\u043D \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u043F\u043E major scale, \u043F\u0440\u0438 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0435 \u0432\u0442\u043E\u0440\u044B\u043C \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u043E\u043C ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "true"), " \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F minor scale."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u041F\u0440\u0438\u043C\u0435\u0440:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("code", _extends({
    parentName: "pre"
  }, {
    "className": "language-js"
  }), "<Example\n    css={{\n        width: scale(20),\n        height: scale(6),\n        padding: `${scale(1, true)}px ${scale(1)}px`,\n        marginBottom: scale(2),\n    }}\n/>\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    "id": "custom-grid-step"
  }, "Custom grid step"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0415\u0441\u043B\u0438 \u043D\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u0435 \u0431\u0430\u0437\u043E\u0432\u044B\u0439 \u0440\u0430\u0437\u043C\u0435\u0440 \u0441\u0435\u0442\u043A\u0438 \u043E\u0442\u043B\u0438\u0447\u0430\u0435\u0442\u0441\u044F \u043E\u0442 8, \u0442\u043E \u0432\u0430\u043C \u043D\u0443\u0436\u043D\u043E \u043F\u0435\u0440\u0435\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C \u0445\u0435\u043B\u043F\u0435\u0440 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "scale"), " \u043F\u043E\u0434 \u0432\u0430\u0448 \u043F\u0440\u043E\u0435\u043A\u0442. \u0414\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u043D\u0443\u0436\u043D\u043E \u043F\u0435\u0440\u0435\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C \u0445\u0435\u043B\u043F\u0435\u0440 \u0441 \u0432\u044B\u0437\u043E\u0432\u043E\u043C 3-\u0433\u043E \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430 \u0438 \u0432\u044B\u0437\u044B\u0432\u0430\u0442\u044C \u0435\u0433\u043E \u0432\u043C\u0435\u0441\u0442\u043E \u043F\u0440\u044F\u043C\u043E\u0433\u043E \u0432\u044B\u0437\u043E\u0432\u0430 \u0445\u0435\u043B\u043F\u0435\u0440\u0430 \u0438\u0437 \u043F\u0430\u043A\u0435\u0442\u0430 GDS."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0412 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E\u043C \u0444\u0430\u0439\u043B\u0435:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("code", _extends({
    parentName: "pre"
  }, {
    "className": "language-js"
  }), "import { scale as gdsScale } from '@greensight/gds';\n\nconst scale = (multiplier, isMinor) => gdsScale(multiplier, isMinor, 10);\n\nexport default scale;\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u2757\uFE0F \u042D\u0442\u043E \u0435\u0434\u0438\u043D\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u043C\u0435\u0441\u0442\u043E \u043D\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u0435, \u0433\u0434\u0435 \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u0443\u043A\u0430\u0437\u0430\u043D 3-\u0438\u0439 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440. \u041D\u0435 \u0434\u043E\u043F\u0443\u0441\u043A\u0430\u0435\u0442\u0441\u044F \u043F\u0435\u0440\u0435\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u0448\u0430\u0433\u0430 \u043F\u043E \u043C\u0435\u0441\u0442\u0443, \u0445\u043E\u0442\u044F \u0444\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u043E \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u044D\u0442\u043E \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0441\u0434\u0435\u043B\u0430\u0442\u044C. \u041C\u043E\u0436\u0435\u0442\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0438\u0442\u044C pull request \u0441 \u0431\u043E\u043B\u0435\u0435 \u044D\u043B\u0435\u0433\u0430\u043D\u0442\u043D\u044B\u043C \u043F\u043E\u0434\u0445\u043E\u0434\u043E\u043C \u043A \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0445\u0435\u043B\u043F\u0435\u0440\u0430."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    "id": "common-rules"
  }, "Common rules"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("ol", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ol"
  }, "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0445\u0435\u043B\u043F\u0435\u0440 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "scale"), " \u0434\u043B\u044F \u0437\u0430\u0434\u0430\u043D\u0438\u044F \u0432\u0441\u0435\u0445 \u0440\u0430\u0437\u043C\u0435\u0440\u043E\u0432, \u0433\u0434\u0435 \u0438\u043C\u0435\u0435\u0442 \u043C\u0435\u0441\u0442\u043E \u0441\u0435\u0442\u043A\u0430: padding \u2013 \u0445\u043E\u0440\u043E\u0448\u043E, borderRadius \u2013 \u043F\u0438\u0448\u0435\u043C \u0432 px."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ol"
  }, "minor \u043D\u0435 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0451\u043D \u0434\u043B\u044F \u0440\u0430\u0437\u043C\u0435\u0440\u043E\u0432 \u0432\u044B\u0448\u0435 40px. \u0425\u0435\u043B\u043F\u0435\u0440 \u0432\u044B\u0432\u0435\u0434\u0435\u0442 \u043F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435 \u0438 \u043E\u043A\u0440\u0443\u0433\u043B\u0438\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0434\u043E 8."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ol"
  }, "\u0412 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043C\u043D\u043E\u0436\u0438\u0442\u0435\u043B\u044F \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u044E\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u0446\u0435\u043B\u044B\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F. \u0425\u0435\u043B\u043F\u0435\u0440 \u0432\u044B\u0432\u0435\u0434\u0435\u0442 \u043F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435 \u0438 \u043E\u043A\u0440\u0443\u0433\u043B\u0438\u0442 \u043C\u043D\u043E\u0436\u0438\u0442\u0435\u043B\u044C \u0434\u043E \u0446\u0435\u043B\u043E\u0433\u043E."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ol"
  }, "\u041F\u0440\u0438\u043C\u0435\u043D\u044F\u0442\u044C minor scale \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F \u0440\u0430\u0437\u043C\u0435\u0440\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0447\u0435\u0440\u0435\u0437 major (\u043D\u0435\u043A\u0440\u0430\u0442\u043D\u044B\u0435 8): ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "scale(2)"), " \u2013 \u0445\u043E\u0440\u043E\u0448\u043E, ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "scale(4, true)"), " \u2013 \u0431\u0435\u0441\u0441\u043C\u044B\u0441\u043B\u0435\u043D\u043D\u043E.")));
}

MDXContent.displayName = "MDXContent";
;
MDXContent.isMDXComponent = true;
var __page = function __page() {
  throw new Error("Docs-only story");
};
__page.parameters = {
  docsOnly: true
};
var componentMeta = {
  title: 'Dev / Spacings',
  includeStories: ["__page"]
};
var mdxStoryNameToKey = {};
componentMeta.parameters = componentMeta.parameters || {};
componentMeta.parameters.docs = Object.assign({}, componentMeta.parameters.docs || {}, {
  page: function page() {
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__["AddContext"], {
      mdxStoryNameToKey: mdxStoryNameToKey,
      mdxComponentMeta: componentMeta
    }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(MDXContent, null));
  }
});
/* harmony default export */ __webpack_exports__["default"] = (componentMeta);

/***/ }),

/***/ 1150:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Button/Button.stories.mdx": 1176,
	"./Container/Container.stories.mdx": 1151,
	"./Layout/Layout.stories.mdx": 1152,
	"./Section/Section.stories.mdx": 1185,
	"./VisuallyHidden/VisuallyHidden.stories.mdx": 1154
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 1150;

/***/ }),

/***/ 1151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basic", function() { return basic; });
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
/* harmony import */ var _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_Placeholder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(127);




function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsxRuntime classic */

/* @jsx mdx */





var layoutProps = {};
var MDXLayout = "wrapper";

function MDXContent(_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__["Meta"], {
    title: "Components / Helpers / Container",
    component: ___WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"],
    mdxType: "Meta"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h1", {
    "id": "container"
  }, "Container"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__["Preview"], {
    mdxType: "Preview"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__["Story"], {
    name: "Basic",
    mdxType: "Story"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(___WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    mdxType: "Container"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_helpers_Placeholder__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    mdxType: "Placeholder"
  }, "Content")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Container"), " \u2013 \u044D\u0442\u043E \u043E\u0431\u0451\u0440\u0442\u043A\u0430 \u0434\u043B\u044F \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0430 \u043F\u043E \u0448\u0438\u0440\u0438\u043D\u0435. \u042D\u0442\u043E\u0442 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0441\u0442\u0438\u043B\u0438\u0437\u043E\u0432\u0430\u043D \u0447\u0435\u0440\u0435\u0437 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0448\u0438\u0440\u0438\u043D\u044B \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u0430 \u0438 \u043F\u043E\u043B\u0435\u0439, \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043D\u044B\u0445 \u0447\u0435\u0440\u0435\u0437 \u0442\u043E\u043A\u0435\u043D\u044B \u0438 \u0445\u0440\u0430\u043D\u044F\u0449\u0438\u0445\u0441\u044F \u0432 \u043E\u0431\u044A\u0435\u043A\u0442\u0435 \u0442\u0435\u043C\u044B."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u041A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0432 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Section"), ", \u043D\u043E \u043C\u043E\u0436\u0435\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0438 \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E \u0432 \u0434\u0440\u0443\u0433\u0438\u0445 \u043C\u0435\u0441\u0442\u0430\u0445, \u0433\u0434\u0435 \u0442\u0435\u0433 section \u043D\u0435 \u043D\u0443\u0436\u0435\u043D."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\uD83D\uDCAC \u0412 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Placeholder"), " \u0447\u0438\u0441\u0442\u043E \u0432 \u0434\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0430\u0442\u0438\u0432\u043D\u044B\u0445 \u0446\u0435\u043B\u044F\u0445 \u2013 \u0432\u0438\u0437\u0443\u0430\u043B\u044C\u043D\u043E \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0431\u043E\u043A\u0441 \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0430. \u042D\u0442\u043E \u0432\u0441\u043F\u043E\u043C\u043E\u0433\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 GDS \u0438 \u043D\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u0435 \u0435\u0433\u043E \u043D\u0435 \u0431\u0443\u0434\u0435\u0442."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    "id": "props"
  }, "Props"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__["Props"], {
    of: ___WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"],
    mdxType: "Props"
  }));
}

MDXContent.displayName = "MDXContent";
;
MDXContent.isMDXComponent = true;
var basic = function basic() {
  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(___WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_helpers_Placeholder__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], null, "Content"));
};
basic.displayName = "basic";
basic.storyName = 'Basic';
basic.parameters = {
  storySource: {
    source: '<Container>\n            <Placeholder>Content</Placeholder>\n        </Container>'
  }
};
var componentMeta = {
  title: 'Components / Helpers / Container',
  component: ___WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"],
  includeStories: ["basic"]
};
var mdxStoryNameToKey = {
  "Basic": "basic"
};
componentMeta.parameters = componentMeta.parameters || {};
componentMeta.parameters.docs = Object.assign({}, componentMeta.parameters.docs || {}, {
  page: function page() {
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__["AddContext"], {
      mdxStoryNameToKey: mdxStoryNameToKey,
      mdxComponentMeta: componentMeta
    }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(MDXContent, null));
  }
});
/* harmony default export */ __webpack_exports__["default"] = (componentMeta);

/***/ }),

/***/ 1152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "knobs", function() { return knobs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basic", function() { return basic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customCols", function() { return customCols; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customRows", function() { return customRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autoMode", function() { return autoMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemColRow", function() { return itemColRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areas", function() { return areas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediaQueries", function() { return mediaQueries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignment", function() { return alignment; });
/* harmony import */ var core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(509);
/* harmony import */ var core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);
/* harmony import */ var _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2);
/* harmony import */ var _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10);
/* harmony import */ var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_scale__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4);
/* harmony import */ var _helpers_Placeholder__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(26);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(13);
/* harmony import */ var _storybook_docgen_Layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(236);






function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsxRuntime classic */

/* @jsx mdx */








var layoutProps = {};
var MDXLayout = "wrapper";

function MDXContent(_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_7__["Meta"], {
    title: "Components / Helpers / Layout",
    component: ___WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"],
    mdxType: "Meta"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])("h1", {
    "id": "layout"
  }, "Layout"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_7__["Story"], {
    name: "Knobs",
    mdxType: "Story"
  }, function () {
    var itemsCount = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__["number"])('Items count (demo)', 6, {
      range: true,
      min: 2,
      max: 16,
      step: 1
    }, 'Layout');
    var type = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__["radios"])('Type', ['grid', 'flex'], 'grid', 'Layout');
    var cols = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__["number"])('Columns count', 12, {
      range: true,
      min: 1,
      max: 16,
      step: 1
    }, 'Layout');
    var columnGap = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__["number"])('Gap (columns)', 16, {
      min: 0,
      max: 160,
      step: 4
    }, 'Layout');
    var rowGap = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__["number"])('Gap (rows)', 16, {
      min: 0,
      max: 160,
      step: 4
    }, 'Layout');
    var justify = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__["select"])('Alignment (horizontal)', ['', 'start', 'end', 'center', 'stretch', 'space-around', 'space-between', 'space-evenly'], '', 'Layout');
    var align = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__["select"])('Alignment (vertical)', ['', 'start', 'end', 'center', 'stretch'], '', 'Layout');
    var auto = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__["number"])('Auto mode', 0, {
      min: 0,
      max: 400,
      step: 8
    }, 'Layout');

    var inline = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__["boolean"])('inline', false, 'Layout (hardcore)');

    var colsHard = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__["text"])('cols', '', 'Layout (hardcore)');
    var rows = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__["text"])('rows', '', 'Layout (hardcore)');
    var areas = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__["array"])('areas (grid)', [], ', ', 'Layout (hardcore)');
    var direction = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__["radios"])('direction', ['row', 'column'], 'row', 'Layout (hardcore)');

    var reverse = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__["boolean"])('reverse (flex)', false, 'Layout (hardcore)');

    var wrap = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__["boolean"])('wrap (flex)', true, 'Layout (hardcore)');

    var autoRows = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__["text"])('autoRows (grid)', '', 'Layout (hardcore)');
    var autoCols = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__["text"])('autoCols (grid)', '', 'Layout (hardcore)');

    var dense = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__["boolean"])('dense (grid)', false, 'Layout (hardcore)');

    var layoutProps = {
      type: type,
      cols: colsHard || cols,
      inline: inline,
      rows: rows,
      areas: areas.length ? areas : undefined,
      gap: [rowGap, columnGap],
      justify: justify,
      align: align,
      direction: direction,
      reverse: reverse,
      wrap: wrap,
      autoRows: autoRows,
      autoCols: autoCols,
      dense: dense,
      auto: auto !== 0 ? auto : undefined
    };
    var col = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__["number"])('Columns count', 1, {
      range: true,
      min: 1,
      max: 16,
      step: 1
    }, 'All items');
    var row = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__["number"])('Rows count', 1, {
      range: true,
      min: 1,
      max: 16,
      step: 1
    }, 'All items');
    var colHard = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__["text"])('col', '', 'All items (hardcore)');
    var rowHard = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__["text"])('row', '', 'All items (hardcore)');

    var grow = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__["boolean"])('grow', false, 'All items (hardcore)');

    var allItemsProps = {
      col: colHard || col,
      row: rowHard || row,
      grow: grow
    };
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(___WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], _extends({}, layoutProps, {
      mdxType: "Layout"
    }), new Array(itemsCount).fill('').map(function (item, index) {
      index++;
      var col = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__["text"])("Item ".concat(index, " col"), '', 'Item (hardcore)') || allItemsProps.col;
      var row = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__["text"])("Item ".concat(index, " row"), '', 'Item (hardcore)') || allItemsProps.row;
      var area = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__["text"])("Item ".concat(index, " area (grid)"), '', 'Item (hardcore)');
      var justify = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__["select"])("Item ".concat(index, " justify"), ['', 'start', 'end', 'center', 'stretch'], '', 'Item (hardcore)');
      var align = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__["select"])("Item ".concat(index, " align"), ['', 'start', 'end', 'center', 'stretch'], '', 'Item (hardcore)');
      var order = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__["number"])("Item ".concat(index, " order"), 0, {}, 'Item (hardcore)');
      var itemProps = {
        col: col,
        row: row,
        area: area,
        justify: justify,
        align: align,
        order: order,
        grow: allItemsProps.grow
      };
      return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(___WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].Item, _extends({
        key: index
      }, itemProps), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(_helpers_Placeholder__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
        mdxType: "Placeholder"
      }, "Item ", index));
    }));
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])("p", null, "\u041A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Layout"), " \u043F\u043E\u043C\u043E\u0433\u0430\u0435\u0442 \u0441\u0442\u0440\u043E\u0438\u0442\u044C \u0441\u0435\u0442\u043A\u0438. \u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u043E\u043D \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 CSS Grid, \u043D\u043E \u0435\u0441\u0442\u044C \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C CSS Flex \u0447\u0435\u0440\u0435\u0437 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])("inlineCode", {
    parentName: "p"
  }, "type"), ". \u041F\u043E \u0441\u0443\u0442\u0438 \u044D\u0442\u043E React \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0437\u0430\u0434\u0430\u0442\u044C \u0441\u0435\u0442\u043A\u0443, \u043A\u0430\u043A \u0432 CSS, \u043D\u043E \u0447\u0435\u0440\u0435\u0437 props \u0438 \u0441 \u0443\u043F\u0440\u043E\u0449\u0451\u043D\u043D\u044B\u043C API."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])("p", null, "\u0421\u0435\u0442\u043A\u0430 \u0432\u0441\u0435\u0433\u0434\u0430 \u0441\u0442\u0440\u043E\u0438\u0442\u0441\u044F \u0447\u0435\u0440\u0435\u0437 \u0441\u043E\u0447\u0435\u0442\u0430\u043D\u0438\u0435 \u043E\u0431\u0451\u0440\u0442\u043A\u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Layout"), " \u0438 \u043E\u0447\u0435\u0440\u0451\u0434\u043D\u043E\u0441\u0442\u0438 \u043A\u043E\u043B\u043E\u043D\u043E\u043A \u0447\u0435\u0440\u0435\u0437 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Layout.Item"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])("h2", {
    "id": "props"
  }, "Props"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_7__["Props"], {
    components: {
      Layout: _storybook_docgen_Layout__WEBPACK_IMPORTED_MODULE_12__[/* LayoutProps */ "a"],
      'Layout.Item': ___WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].Item
    },
    mdxType: "Props"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])("h2", {
    "id": "use-cases"
  }, "Use cases"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])("h3", {
    "id": "basic"
  }, "Basic"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])("p", null, "\u0412 \u043F\u0440\u043E\u0441\u0442\u0435\u0439\u0448\u0435\u043C \u0441\u043B\u0443\u0447\u0430\u0435 \u0431\u0435\u0437 \u0443\u043A\u0430\u0437\u0430\u043D\u0438\u044F props \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0434\u043B\u044F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])("inlineCode", {
    parentName: "p"
  }, "cols"), " \u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])("inlineCode", {
    parentName: "p"
  }, "gap"), " \u0432\u043E\u0437\u044C\u043C\u0443\u0442\u0441\u044F \u0438\u0437 \u043E\u0431\u044A\u0435\u043A\u0442\u0430 \u0442\u0435\u043C\u044B, \u0440\u0430\u0437\u0434\u0435\u043B\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])("inlineCode", {
    parentName: "p"
  }, "layout"), ". \u0412 \u0442\u0430\u043A\u043E\u043C \u0441\u043B\u0443\u0447\u0430\u0435 \u0441\u0435\u0442\u043A\u0430 \u0431\u0443\u0434\u0435\u0442 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0441\u0435\u0442\u043A\u0435 \u0438\u0437 \u0444\u0440\u0435\u0439\u043C\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Layout"), " \u0432 Figma."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_7__["Preview"], {
    mdxType: "Preview"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_7__["Story"], {
    name: "Basic",
    mdxType: "Story"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(___WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
    mdxType: "Layout"
  }, [1, 2, 3, 4, 5, 6].map(function (item) {
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(___WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].Item, {
      key: item
    }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(_helpers_Placeholder__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
      mdxType: "Placeholder"
    }, "Item ", item));
  })))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])("h3", {
    "id": "custom-cols--gap"
  }, "Custom cols & gap"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])("p", null, "\u041F\u0440\u0438 \u0443\u043A\u0430\u0437\u0430\u043D\u0438\u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])("inlineCode", {
    parentName: "p"
  }, "cols"), " \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 \u0447\u0438\u0441\u043B\u0430 \u0434\u043B\u044F \u0433\u0440\u0438\u0434\u043E\u0432 \u043F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u0441\u044F repeat, \u0442.\u0435. \u0431\u0443\u0434\u0435\u0442 \u0441\u043E\u0437\u0434\u0430\u043D\u043E \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0440\u0430\u0432\u043D\u044B\u0445 \u043F\u043E \u0440\u0430\u0437\u043C\u0435\u0440\u0443 \u043A\u043E\u043B\u043E\u043D\u043E\u043A. \u0414\u043B\u044F \u0444\u043B\u0435\u043A\u0441\u043E\u0432 \u0447\u0438\u0441\u043B\u0435\u043D\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0442\u0430\u043A\u0436\u0435 \u0441\u043E\u0437\u0434\u0430\u0441\u0442 \u043A\u043E\u043B\u043E\u043D\u043A\u0438 \u0440\u0430\u0432\u043D\u043E\u0439 \u0448\u0438\u0440\u0438\u043D\u044B."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])("p", null, "\u0422\u0430\u043A\u0436\u0435 \u0434\u043B\u044F \u0433\u0440\u0438\u0434\u043E\u0432 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B \u0437\u0430\u043F\u0438\u0441\u0438 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 \u0441\u0442\u0440\u043E\u043A\u0438 \u0438 \u043C\u0430\u0441\u0441\u0438\u0432\u0430, \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u044E\u0449\u0438\u0435 \u0437\u0430\u0434\u0430\u0432\u0430\u0442\u044C \u0431\u043E\u043B\u0435\u0435 \u0441\u043B\u043E\u0436\u043D\u044B\u0435 \u0441\u0435\u0442\u043A\u0438 \u2013 \u044D\u0442\u0438 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u043F\u0435\u0440\u0435\u0434\u0430\u044E\u0442\u0441\u044F \u0432 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])("inlineCode", {
    parentName: "p"
  }, "gridTemplateColumns"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])("p", null, "\u041E\u0442\u0441\u0442\u0443\u043F\u044B \u043C\u0435\u0436\u0434\u0443 \u043A\u043E\u043B\u043E\u043D\u043A\u0430\u043C\u0438 \u043C\u043E\u0436\u043D\u043E \u043C\u0435\u043D\u044F\u0442\u044C \u0447\u0435\u0440\u0435\u0437 \u043F\u0440\u043E\u043F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])("inlineCode", {
    parentName: "p"
  }, "gap"), ". \u041C\u043E\u0436\u043D\u043E \u0437\u0430\u0434\u0430\u0432\u0430\u0442\u044C \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0435 \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u044B\u0435 \u0438 \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u043E\u0442\u0441\u0442\u0443\u043F\u044B \u2013 \u0434\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0437\u0430\u043F\u0438\u0441\u044C \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 \u043C\u0430\u0441\u0441\u0438\u0432\u0430, \u0438\u043D\u0430\u0447\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u0440\u0438\u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u043E\u0431\u043E\u0438\u0445 \u0442\u0438\u043F\u043E\u0432 \u043E\u0442\u0441\u0442\u0443\u043F\u043E\u0432."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])("p", null, "\u041E\u0442\u0441\u0442\u0443\u043F\u044B \u043C\u0435\u0436\u0434\u0443 \u043A\u043E\u043B\u043E\u043D\u043A\u0430\u043C\u0438 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u043A\u0440\u0430\u0442\u043D\u044B\u043C\u0438 \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u043C\u0443 \u0448\u0430\u0433\u0443 \u0441\u0435\u0442\u043A\u0438 \u2013 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0445\u0435\u043B\u043F\u0435\u0440 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])("inlineCode", {
    parentName: "p"
  }, "scale"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])("p", null, "\uD83D\uDCAC \u0412\u0441\u0435 \u043F\u0440\u043E\u0441\u0442\u044B\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0437\u0430\u0434\u0430\u044E\u0442 \u0441\u0435\u0442\u043A\u0438 \u0431\u0435\u0437 \u0443\u0447\u0451\u0442\u0430 \u0430\u0434\u0430\u043F\u0442\u0438\u0432\u0430, \u0442.\u0435. \u044D\u0442\u0430 \u0441\u0435\u0442\u043A\u0430 \u0431\u0443\u0434\u0435\u0442 \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0430 \u043D\u0430 \u0432\u0441\u0435\u0445 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u044F\u0445. \u0414\u043B\u044F \u0443\u043A\u0430\u0437\u0430\u043D\u0438\u044F \u0430\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u044B\u0445 \u0441\u0435\u0442\u043E\u043A \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043E\u0431\u044A\u0435\u043A\u0442\u043D\u0443\u044E \u0437\u0430\u043F\u0438\u0441\u044C (\u043E \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u0434\u0430\u043B\u044C\u0448\u0435)."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_7__["Preview"], {
    mdxType: "Preview"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_7__["Story"], {
    name: "Custom Cols",
    mdxType: "Story"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(___WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
    cols: 3,
    gap: Object(_utils_scale__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(2),
    mdxType: "Layout"
  }, [1, 2, 3, 4, 5, 6].map(function (item) {
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(___WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].Item, {
      key: item
    }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(_helpers_Placeholder__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
      mdxType: "Placeholder"
    }, "Item ", item));
  })))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])("h3", {
    "id": "custom-rows"
  }, "Custom Rows"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])("p", null, "CSS Grid \u0434\u0435\u043B\u0430\u0435\u0442 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u044B\u043C \u0437\u0430\u0434\u0430\u0432\u0430\u0442\u044C two-dimensional grids, \u0442.\u0435. \u043F\u043E\u043C\u0438\u043C\u043E \u043A\u043E\u043B\u043E\u043D\u043E\u043A \u0437\u0430\u0434\u0430\u0432\u0430\u0442\u044C \u0435\u0449\u0451 \u0438 \u0441\u0442\u0440\u043E\u043A\u0438. \u042D\u0442\u043E \u043C\u043E\u0436\u043D\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0447\u0435\u0440\u0435\u0437 \u043F\u0440\u043E\u043F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])("inlineCode", {
    parentName: "p"
  }, "rows"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_7__["Preview"], {
    mdxType: "Preview"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_7__["Story"], {
    name: "Custom Rows",
    mdxType: "Story"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(___WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
    cols: 2,
    rows: [2, 1, 2],
    mdxType: "Layout"
  }, [1, 2, 3, 4, 5, 6].map(function (item) {
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(___WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].Item, {
      key: item
    }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(_helpers_Placeholder__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
      mdxType: "Placeholder"
    }, "Item ", item));
  })))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])("h3", {
    "id": "auto-mode"
  }, "Auto mode"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])("p", null, "\u041A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Layout"), " \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u043F\u0440\u0435\u0441\u0435\u0442 \u0434\u043B\u044F \xAB\u0430\u0432\u0442\u043E\u0440\u0435\u0436\u0438\u043C\u0430\xBB \u2013 \u0441\u0435\u0442\u043A\u0438 \u0441 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u0440\u0430\u0441\u0447\u0451\u0442\u043E\u043C \u043A\u043E\u043B\u043E\u043D\u043E\u043A: \u0447\u0435\u0440\u0435\u0437 \u043D\u0435\u0433\u043E \u043C\u043E\u0436\u043D\u043E \u0441\u0442\u0440\u043E\u0438\u0442\u044C \u0430\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u044B\u0435 \u0441\u0435\u0442\u043A\u0438 \u0431\u0435\u0437 \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u0438\u044F \u043C\u0435\u0434\u0438\u0430\u0437\u0430\u043F\u0440\u043E\u0441\u043E\u0432. \u0414\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u043D\u0443\u0436\u043D\u043E \u0443\u043A\u0430\u0437\u0430\u0442\u044C \u043F\u0440\u043E\u043F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])("inlineCode", {
    parentName: "p"
  }, "auto"), " \u0441\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435\u043C \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0439 \u0448\u0438\u0440\u0438\u043D\u044B \u043A\u043E\u043B\u043E\u043D\u043A\u0438 \u2013 \u0447\u0438\u0441\u043B\u043E \u043A\u043E\u043B\u043E\u043D\u043E\u043A \u0431\u0443\u0434\u0435\u0442 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043E \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438, \u0442.\u0435. \u043E\u043D\u0438 \u0431\u0443\u0434\u0443\u0442 \u0442\u044F\u043D\u0443\u0442\u044C\u0441\u044F \u043F\u043E \u0448\u0438\u0440\u0438\u043D\u0435, \u043F\u043E\u043A\u0430 \u043D\u0435 \u043F\u043E\u044F\u0432\u0438\u0442\u0441\u044F \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0432\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0435\u0449\u0451 \u043E\u0434\u043D\u0443. \u0414\u043B\u044F \u0433\u0440\u0438\u0434\u043E\u0432 \u044D\u0442\u0430 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u0430 \u0447\u0435\u0440\u0435\u0437 \u0441\u0432\u044F\u0437\u043A\u0443 auto-fill \u0438 minmax, \u0434\u043B\u044F \u0444\u043B\u0435\u043A\u0441\u043E\u0432 \u0447\u0435\u0440\u0435\u0437 \u0441\u043E\u0447\u0435\u0442\u0430\u043D\u0438\u0435 flex-basis \u0438 flex-grow."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])("p", null, "\u0415\u0441\u043B\u0438 \u0432\u0430\u043C \u043D\u0443\u0436\u043D\u043E, \u0447\u0442\u043E\u0431\u044B \u043A\u043E\u043B\u043E\u043D\u043A\u0438 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0439 \u0441\u0442\u0440\u043E\u043A\u0438 \u0440\u0430\u0441\u0442\u044F\u0433\u0438\u0432\u0430\u043B\u0438\u0441\u044C \u043F\u043E \u0448\u0438\u0440\u0438\u043D\u0435, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])("inlineCode", {
    parentName: "p"
  }, "type"), " \u0441\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435\u043C ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])("inlineCode", {
    parentName: "p"
  }, "flex"), " \u2013 \u0432 \u043E\u0442\u043B\u0438\u0447\u0438\u0435 \u043E\u0442 \u0433\u0440\u0438\u0434\u043E\u0432 \u0434\u043B\u044F \u0444\u043B\u0435\u043A\u0441\u043E\u0432 \u044D\u0442\u043E \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0437\u0430\u0441\u0447\u0451\u0442 flex-grow."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_7__["Preview"], {
    mdxType: "Preview"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_7__["Story"], {
    name: "Auto mode",
    mdxType: "Story"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(___WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
    auto: Object(_utils_scale__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(18),
    mdxType: "Layout"
  }, [1, 2, 3, 4, 5, 6].map(function (item) {
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(___WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].Item, {
      key: item
    }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(_helpers_Placeholder__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
      mdxType: "Placeholder"
    }, "Item ", item));
  })))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])("h3", {
    "id": "item-col--row"
  }, "Item Col & Row"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])("p", null, "\u041C\u043E\u0436\u043D\u043E \u0437\u0430\u0434\u0430\u0432\u0430\u0442\u044C \u0440\u0430\u0437\u043C\u0435\u0440\u044B \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u043C \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u043C \u0441\u0435\u0442\u043A\u0438 \u0447\u0435\u0440\u0435\u0437 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])("inlineCode", {
    parentName: "p"
  }, "col"), " \u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])("inlineCode", {
    parentName: "p"
  }, "row"), ". \u041A\u043E\u043B\u043E\u043D\u043A\u0438 \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442 \u0438 \u0434\u043B\u044F \u0444\u043B\u0435\u043A\u0441\u043E\u0432, \u0441\u0442\u0440\u043E\u043A\u0438 \u2013 \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F \u0433\u0440\u0438\u0434\u043E\u0432."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_7__["Preview"], {
    mdxType: "Preview"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_7__["Story"], {
    name: "Item Col & Row",
    mdxType: "Story"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(___WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
    cols: 6,
    mdxType: "Layout"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(___WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].Item, {
    col: 2,
    row: 2
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(_helpers_Placeholder__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
    mdxType: "Placeholder"
  }, "Item 1")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(___WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].Item, null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(_helpers_Placeholder__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
    mdxType: "Placeholder"
  }, "Item 2")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(___WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].Item, null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(_helpers_Placeholder__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
    mdxType: "Placeholder"
  }, "Item 3")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(___WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].Item, null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(_helpers_Placeholder__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
    mdxType: "Placeholder"
  }, "Item 4")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(___WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].Item, null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(_helpers_Placeholder__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
    mdxType: "Placeholder"
  }, "Item 5")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(___WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].Item, {
    col: 4
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(_helpers_Placeholder__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
    mdxType: "Placeholder"
  }, "Item 6"))))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])("h3", {
    "id": "areas"
  }, "Areas"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])("p", null, "\u0414\u043B\u044F \u0433\u0440\u0438\u0434\u043E\u0432 \u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D \u043C\u0435\u0445\u0430\u043D\u0438\u0437\u043C \u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u0437\u043E\u043D \u0447\u0435\u0440\u0435\u0437 \u0441\u0432\u044F\u0437\u043A\u0443 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])("inlineCode", {
    parentName: "p"
  }, "areas"), " \u0434\u043B\u044F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Layout"), " \u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])("inlineCode", {
    parentName: "p"
  }, "area"), " \u0434\u043B\u044F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Layout.Item"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_7__["Preview"], {
    mdxType: "Preview"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_7__["Story"], {
    name: "Areas",
    mdxType: "Story"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(___WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
    areas: ['item1 item2 item3', 'item1 item2 item3', 'item1 item4 item3', 'item5 item4 item3', 'item5 item6 item3', 'item5 item6 item3'],
    mdxType: "Layout"
  }, [1, 2, 3, 4, 5, 6].map(function (item) {
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(___WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].Item, {
      key: item,
      area: "item".concat(item)
    }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(_helpers_Placeholder__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
      mdxType: "Placeholder"
    }, "Item ", item));
  })))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])("h3", {
    "id": "media-queries"
  }, "Media Queries"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])("p", null, "\u041F\u0440\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0432\u0441\u0435 \u043F\u0440\u043E\u043F\u0441\u044B ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Layout"), " \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u044E\u0442 \u0444\u043E\u0440\u043C\u0430\u0442 \u043E\u0431\u044A\u0435\u043A\u0442\u0430 \u0441 \u0431\u0440\u0435\u0439\u043A\u043F\u043E\u0438\u043D\u0442\u0430\u043C\u0438. \u0422\u0430\u043A\u0438\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C \u043C\u043E\u0436\u043D\u043E \u0437\u0430\u0434\u0430\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0441\u0435\u0442\u043A\u0438 \u043D\u0430 \u0430\u0434\u0430\u043F\u0442\u0438\u0432\u0435."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])("p", null, "\u0412 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043F\u043E\u043B\u0435\u0439 \u043E\u0431\u044A\u0435\u043A\u0442\u0430 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442\u0441\u044F \u0438\u043C\u0435\u043D\u0430 \u0431\u0440\u0435\u0439\u043A\u043F\u043E\u0438\u043D\u0442\u043E\u0432. \u0414\u043B\u044F \u0432\u0441\u0435\u0445 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0449\u0438\u0445 GDS \u043E\u043D\u0438 \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u044B, \u043C\u0435\u043D\u044F\u0442\u044C\u0441\u044F \u043C\u043E\u0433\u0443\u0442 \u0442\u043E\u043B\u044C\u043A\u043E \u0438\u0445 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0442\u044F\u043D\u0443\u0442\u0441\u044F \u0438\u0437 \u043C\u0430\u043A\u0435\u0442\u0430 Figma."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])("code", _extends({
    parentName: "pre"
  }, {
    "className": "language-js"
  }), "type Breakpoint = 'xxxl' | 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'xxs' | 'xxxs';\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])("p", null, "\u041F\u0440\u0438 \u0443\u043A\u0430\u0437\u0430\u043D\u0438\u0438 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u043F\u043E\u0434 \u0438\u043C\u0435\u043D\u0435\u043C \u0431\u0440\u0435\u0439\u043A\u043F\u043E\u0438\u043D\u0442\u0430 \u044D\u0442\u043E \u043F\u0440\u0430\u0432\u0438\u043B\u043E \u043F\u0440\u0438\u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0439, \u043C\u0435\u043D\u044C\u0448\u0438\u0445 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0433\u043E \u0437\u0430 \u043D\u0438\u043C, \u0442.\u0435. \u043F\u0440\u0438 \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u043C\u0430\u043A\u0435\u0442\u0430 \u043D\u0430 768 \u0432\u044B \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0432\u0443\u044E\u0449\u0435\u0435 \u044D\u0442\u043E\u043C\u0443 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044E \u0438\u043C\u044F, \u0442.\u0435. sm, \u0438 \u043F\u043E\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u044C\u0441\u044F \u043C\u0435\u0434\u0438\u0430\u0432\u044B\u0440\u0430\u0436\u0435\u043D\u0438\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])("strong", {
    parentName: "p"
  }, "< 960"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_7__["Preview"], {
    mdxType: "Preview"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_7__["Story"], {
    name: "Media Queries",
    mdxType: "Story"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(___WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
    cols: 12,
    gap: {
      xxxl: Object(_utils_scale__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(4),
      lg: Object(_utils_scale__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(3),
      sm: Object(_utils_scale__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(2),
      xs: Object(_utils_scale__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(1)
    },
    mdxType: "Layout"
  }, [1, 2, 3, 4, 5, 6].map(function (item) {
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(___WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].Item, {
      key: item,
      col: {
        xxxl: 2,
        lg: 3,
        sm: 4,
        xs: 6,
        xxs: 12
      }
    }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(_helpers_Placeholder__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
      mdxType: "Placeholder"
    }, "Item ", item));
  })))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])("h3", {
    "id": "alignment"
  }, "Alignment"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])("p", null, "\u0412\u044B\u0440\u0430\u0432\u043D\u0438\u0432\u0430\u043D\u0438\u0435 \u0438 \u0434\u043B\u044F \u0433\u0440\u0438\u0434\u043E\u0432 \u0438 \u0434\u043B\u044F \u0444\u043B\u0435\u043A\u0441\u043E\u0432 \u0437\u0430\u0434\u0430\u044E\u0442\u0441\u044F \u0447\u0435\u0440\u0435\u0437 \u043F\u0440\u043E\u043F\u0441\u044B ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])("inlineCode", {
    parentName: "p"
  }, "justify"), " \u0434\u043B\u044F \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u043E\u0441\u0438 \u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])("inlineCode", {
    parentName: "p"
  }, "align"), " \u0434\u043B\u044F \u043F\u043E\u0431\u043E\u0447\u043D\u043E\u0439. \u042D\u0442\u0438 \u043F\u0440\u043E\u043F\u0441\u044B \u0437\u0430\u0434\u0430\u044E\u0442 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0435 CSS \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430 \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0438 \u043E\u0442 \u0442\u0438\u043F\u0430. \u0422\u0430\u043A\u0436\u0435 \u0443\u043F\u0440\u043E\u0449\u0435\u043D\u044B \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F, \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0434\u043B\u044F \u0432\u0441\u0435\u0445 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])("inlineCode", {
    parentName: "p"
  }, "start"), " \u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])("inlineCode", {
    parentName: "p"
  }, "end"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])("p", null, "\u041C\u043E\u0436\u043D\u043E \u0437\u0430\u0434\u0430\u0442\u044C \u0441\u0432\u043E\u0451 \u0432\u044B\u0440\u0430\u0432\u043D\u0438\u0432\u0430\u043D\u0438\u0435 \u0434\u043B\u044F \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0445 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432. \u0414\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u044D\u0442\u0438 \u043F\u0440\u043E\u043F\u0441\u044B \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u0441\u0430\u043C\u0438\u043C \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u043C."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_7__["Preview"], {
    mdxType: "Preview"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_7__["Story"], {
    name: "Alignment",
    mdxType: "Story"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(___WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
    cols: 3,
    justify: "end",
    align: "center",
    css: {
      height: Object(_utils_scale__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(30)
    },
    mdxType: "Layout"
  }, [1, 2, 3, 4, 5, 6].map(function (item) {
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(___WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].Item, {
      key: item
    }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(_helpers_Placeholder__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
      mdxType: "Placeholder"
    }, "Item ", item));
  })))));
}

MDXContent.displayName = "MDXContent";
;
MDXContent.isMDXComponent = true;
var knobs = function knobs() {
  var itemsCount = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__["number"])('Items count (demo)', 6, {
    range: true,
    min: 2,
    max: 16,
    step: 1
  }, 'Layout');
  var type = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__["radios"])('Type', ['grid', 'flex'], 'grid', 'Layout');
  var cols = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__["number"])('Columns count', 12, {
    range: true,
    min: 1,
    max: 16,
    step: 1
  }, 'Layout');
  var columnGap = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__["number"])('Gap (columns)', 16, {
    min: 0,
    max: 160,
    step: 4
  }, 'Layout');
  var rowGap = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__["number"])('Gap (rows)', 16, {
    min: 0,
    max: 160,
    step: 4
  }, 'Layout');
  var justify = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__["select"])('Alignment (horizontal)', ['', 'start', 'end', 'center', 'stretch', 'space-around', 'space-between', 'space-evenly'], '', 'Layout');
  var align = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__["select"])('Alignment (vertical)', ['', 'start', 'end', 'center', 'stretch'], '', 'Layout');
  var auto = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__["number"])('Auto mode', 0, {
    min: 0,
    max: 400,
    step: 8
  }, 'Layout');

  var inline = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__["boolean"])('inline', false, 'Layout (hardcore)');

  var colsHard = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__["text"])('cols', '', 'Layout (hardcore)');
  var rows = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__["text"])('rows', '', 'Layout (hardcore)');
  var areas = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__["array"])('areas (grid)', [], ', ', 'Layout (hardcore)');
  var direction = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__["radios"])('direction', ['row', 'column'], 'row', 'Layout (hardcore)');

  var reverse = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__["boolean"])('reverse (flex)', false, 'Layout (hardcore)');

  var wrap = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__["boolean"])('wrap (flex)', true, 'Layout (hardcore)');

  var autoRows = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__["text"])('autoRows (grid)', '', 'Layout (hardcore)');
  var autoCols = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__["text"])('autoCols (grid)', '', 'Layout (hardcore)');

  var dense = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__["boolean"])('dense (grid)', false, 'Layout (hardcore)');

  var layoutProps = {
    type: type,
    cols: colsHard || cols,
    inline: inline,
    rows: rows,
    areas: areas.length ? areas : undefined,
    gap: [rowGap, columnGap],
    justify: justify,
    align: align,
    direction: direction,
    reverse: reverse,
    wrap: wrap,
    autoRows: autoRows,
    autoCols: autoCols,
    dense: dense,
    auto: auto !== 0 ? auto : undefined
  };
  var col = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__["number"])('Columns count', 1, {
    range: true,
    min: 1,
    max: 16,
    step: 1
  }, 'All items');
  var row = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__["number"])('Rows count', 1, {
    range: true,
    min: 1,
    max: 16,
    step: 1
  }, 'All items');
  var colHard = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__["text"])('col', '', 'All items (hardcore)');
  var rowHard = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__["text"])('row', '', 'All items (hardcore)');

  var grow = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__["boolean"])('grow', false, 'All items (hardcore)');

  var allItemsProps = {
    col: colHard || col,
    row: rowHard || row,
    grow: grow
  };
  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(___WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], layoutProps, new Array(itemsCount).fill('').map(function (item, index) {
    index++;
    var col = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__["text"])("Item ".concat(index, " col"), '', 'Item (hardcore)') || allItemsProps.col;
    var row = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__["text"])("Item ".concat(index, " row"), '', 'Item (hardcore)') || allItemsProps.row;
    var area = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__["text"])("Item ".concat(index, " area (grid)"), '', 'Item (hardcore)');
    var justify = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__["select"])("Item ".concat(index, " justify"), ['', 'start', 'end', 'center', 'stretch'], '', 'Item (hardcore)');
    var align = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__["select"])("Item ".concat(index, " align"), ['', 'start', 'end', 'center', 'stretch'], '', 'Item (hardcore)');
    var order = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__["number"])("Item ".concat(index, " order"), 0, {}, 'Item (hardcore)');
    var itemProps = {
      col: col,
      row: row,
      area: area,
      justify: justify,
      align: align,
      order: order,
      grow: allItemsProps.grow
    };
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(___WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].Item, _extends({
      key: index
    }, itemProps), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(_helpers_Placeholder__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], null, "Item ", index));
  }));
};
knobs.displayName = "knobs";
knobs.storyName = 'Knobs';
knobs.parameters = {
  storySource: {
    source: '() => {\n  const itemsCount = number(\'Items count (demo)\', 6, {\n    range: true,\n    min: 2,\n    max: 16,\n    step: 1\n  }, \'Layout\');\n  const type = radios(\'Type\', [\'grid\', \'flex\'], \'grid\', \'Layout\');\n  const cols = number(\'Columns count\', 12, {\n    range: true,\n    min: 1,\n    max: 16,\n    step: 1\n  }, \'Layout\');\n  const columnGap = number(\'Gap (columns)\', 16, {\n    min: 0,\n    max: 160,\n    step: 4\n  }, \'Layout\');\n  const rowGap = number(\'Gap (rows)\', 16, {\n    min: 0,\n    max: 160,\n    step: 4\n  }, \'Layout\');\n  const justify = select(\'Alignment (horizontal)\', [\'\', \'start\', \'end\', \'center\', \'stretch\', \'space-around\', \'space-between\', \'space-evenly\'], \'\', \'Layout\');\n  const align = select(\'Alignment (vertical)\', [\'\', \'start\', \'end\', \'center\', \'stretch\'], \'\', \'Layout\');\n  const auto = number(\'Auto mode\', 0, {\n    min: 0,\n    max: 400,\n    step: 8\n  }, \'Layout\');\n  const inline = boolean(\'inline\', false, \'Layout (hardcore)\');\n  const colsHard = text(\'cols\', \'\', \'Layout (hardcore)\');\n  const rows = text(\'rows\', \'\', \'Layout (hardcore)\');\n  const areas = array(\'areas (grid)\', [], \', \', \'Layout (hardcore)\');\n  const direction = radios(\'direction\', [\'row\', \'column\'], \'row\', \'Layout (hardcore)\');\n  const reverse = boolean(\'reverse (flex)\', false, \'Layout (hardcore)\');\n  const wrap = boolean(\'wrap (flex)\', true, \'Layout (hardcore)\');\n  const autoRows = text(\'autoRows (grid)\', \'\', \'Layout (hardcore)\');\n  const autoCols = text(\'autoCols (grid)\', \'\', \'Layout (hardcore)\');\n  const dense = boolean(\'dense (grid)\', false, \'Layout (hardcore)\');\n  const layoutProps = {\n    type,\n    cols: colsHard || cols,\n    inline,\n    rows,\n    areas: areas.length ? areas : undefined,\n    gap: [rowGap, columnGap],\n    justify,\n    align,\n    direction,\n    reverse,\n    wrap,\n    autoRows,\n    autoCols,\n    dense,\n    auto: auto !== 0 ? auto : undefined\n  };\n  const col = number(\'Columns count\', 1, {\n    range: true,\n    min: 1,\n    max: 16,\n    step: 1\n  }, \'All items\');\n  const row = number(\'Rows count\', 1, {\n    range: true,\n    min: 1,\n    max: 16,\n    step: 1\n  }, \'All items\');\n  const colHard = text(\'col\', \'\', \'All items (hardcore)\');\n  const rowHard = text(\'row\', \'\', \'All items (hardcore)\');\n  const grow = boolean(\'grow\', false, \'All items (hardcore)\');\n  const allItemsProps = {\n    col: colHard || col,\n    row: rowHard || row,\n    grow\n  };\n  return <Layout {...layoutProps}>\n                {new Array(itemsCount).fill(\'\').map((item, index) => {\n      index++;\n      const col = text(`Item ${index} col`, \'\', \'Item (hardcore)\') || allItemsProps.col;\n      const row = text(`Item ${index} row`, \'\', \'Item (hardcore)\') || allItemsProps.row;\n      const area = text(`Item ${index} area (grid)`, \'\', \'Item (hardcore)\');\n      const justify = select(`Item ${index} justify`, [\'\', \'start\', \'end\', \'center\', \'stretch\'], \'\', \'Item (hardcore)\');\n      const align = select(`Item ${index} align`, [\'\', \'start\', \'end\', \'center\', \'stretch\'], \'\', \'Item (hardcore)\');\n      const order = number(`Item ${index} order`, 0, {}, \'Item (hardcore)\');\n      const itemProps = {\n        col,\n        row,\n        area,\n        justify,\n        align,\n        order,\n        grow: allItemsProps.grow\n      };\n      return <Layout.Item key={index} {...itemProps}>\n                            <Placeholder>Item {index}</Placeholder>\n                        </Layout.Item>;\n    })}\n            </Layout>;\n}'
  }
};
var basic = function basic() {
  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(___WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], null, [1, 2, 3, 4, 5, 6].map(function (item) {
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(___WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].Item, {
      key: item
    }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(_helpers_Placeholder__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], null, "Item ", item));
  }));
};
basic.displayName = "basic";
basic.storyName = 'Basic';
basic.parameters = {
  storySource: {
    source: '<Layout>\n            {[1, 2, 3, 4, 5, 6].map(item => <Layout.Item key={item}>\n                    <Placeholder>Item {item}</Placeholder>\n                </Layout.Item>)}\n        </Layout>'
  }
};
var customCols = function customCols() {
  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(___WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
    cols: 3,
    gap: Object(_utils_scale__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(2)
  }, [1, 2, 3, 4, 5, 6].map(function (item) {
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(___WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].Item, {
      key: item
    }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(_helpers_Placeholder__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], null, "Item ", item));
  }));
};
customCols.displayName = "customCols";
customCols.storyName = 'Custom Cols';
customCols.parameters = {
  storySource: {
    source: '<Layout cols={3} gap={scale(2)}>\n            {[1, 2, 3, 4, 5, 6].map(item => <Layout.Item key={item}>\n                    <Placeholder>Item {item}</Placeholder>\n                </Layout.Item>)}\n        </Layout>'
  }
};
var customRows = function customRows() {
  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(___WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
    cols: 2,
    rows: [2, 1, 2]
  }, [1, 2, 3, 4, 5, 6].map(function (item) {
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(___WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].Item, {
      key: item
    }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(_helpers_Placeholder__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], null, "Item ", item));
  }));
};
customRows.displayName = "customRows";
customRows.storyName = 'Custom Rows';
customRows.parameters = {
  storySource: {
    source: '<Layout cols={2} rows={[2, 1, 2]}>\n            {[1, 2, 3, 4, 5, 6].map(item => <Layout.Item key={item}>\n                    <Placeholder>Item {item}</Placeholder>\n                </Layout.Item>)}\n        </Layout>'
  }
};
var autoMode = function autoMode() {
  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(___WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
    auto: Object(_utils_scale__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(18)
  }, [1, 2, 3, 4, 5, 6].map(function (item) {
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(___WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].Item, {
      key: item
    }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(_helpers_Placeholder__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], null, "Item ", item));
  }));
};
autoMode.displayName = "autoMode";
autoMode.storyName = 'Auto mode';
autoMode.parameters = {
  storySource: {
    source: '<Layout auto={scale(18)}>\n            {[1, 2, 3, 4, 5, 6].map(item => <Layout.Item key={item}>\n                    <Placeholder>Item {item}</Placeholder>\n                </Layout.Item>)}\n        </Layout>'
  }
};
var itemColRow = function itemColRow() {
  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(___WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
    cols: 6
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(___WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].Item, {
    col: 2,
    row: 2
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(_helpers_Placeholder__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], null, "Item 1")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(___WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].Item, null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(_helpers_Placeholder__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], null, "Item 2")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(___WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].Item, null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(_helpers_Placeholder__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], null, "Item 3")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(___WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].Item, null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(_helpers_Placeholder__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], null, "Item 4")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(___WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].Item, null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(_helpers_Placeholder__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], null, "Item 5")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(___WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].Item, {
    col: 4
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(_helpers_Placeholder__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], null, "Item 6")));
};
itemColRow.displayName = "itemColRow";
itemColRow.storyName = 'Item Col & Row';
itemColRow.parameters = {
  storySource: {
    source: '<Layout cols={6}>\n            <Layout.Item col={2} row={2}>\n                <Placeholder>Item 1</Placeholder>\n            </Layout.Item>\n            <Layout.Item>\n                <Placeholder>Item 2</Placeholder>\n            </Layout.Item>\n            <Layout.Item>\n                <Placeholder>Item 3</Placeholder>\n            </Layout.Item>\n            <Layout.Item>\n                <Placeholder>Item 4</Placeholder>\n            </Layout.Item>\n            <Layout.Item>\n                <Placeholder>Item 5</Placeholder>\n            </Layout.Item>\n            <Layout.Item col={4}>\n                <Placeholder>Item 6</Placeholder>\n            </Layout.Item>\n        </Layout>'
  }
};
var areas = function areas() {
  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(___WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
    areas: ['item1 item2 item3', 'item1 item2 item3', 'item1 item4 item3', 'item5 item4 item3', 'item5 item6 item3', 'item5 item6 item3']
  }, [1, 2, 3, 4, 5, 6].map(function (item) {
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(___WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].Item, {
      key: item,
      area: "item".concat(item)
    }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(_helpers_Placeholder__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], null, "Item ", item));
  }));
};
areas.displayName = "areas";
areas.storyName = 'Areas';
areas.parameters = {
  storySource: {
    source: '<Layout areas={[\'item1 item2 item3\', \'item1 item2 item3\', \'item1 item4 item3\', \'item5 item4 item3\', \'item5 item6 item3\', \'item5 item6 item3\']}>\n            {[1, 2, 3, 4, 5, 6].map(item => <Layout.Item key={item} area={`item${item}`}>\n                    <Placeholder>Item {item}</Placeholder>\n                </Layout.Item>)}\n        </Layout>'
  }
};
var mediaQueries = function mediaQueries() {
  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(___WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
    cols: 12,
    gap: {
      xxxl: Object(_utils_scale__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(4),
      lg: Object(_utils_scale__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(3),
      sm: Object(_utils_scale__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(2),
      xs: Object(_utils_scale__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(1)
    }
  }, [1, 2, 3, 4, 5, 6].map(function (item) {
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(___WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].Item, {
      key: item,
      col: {
        xxxl: 2,
        lg: 3,
        sm: 4,
        xs: 6,
        xxs: 12
      }
    }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(_helpers_Placeholder__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], null, "Item ", item));
  }));
};
mediaQueries.displayName = "mediaQueries";
mediaQueries.storyName = 'Media Queries';
mediaQueries.parameters = {
  storySource: {
    source: '<Layout cols={12} gap={{\n  xxxl: scale(4),\n  lg: scale(3),\n  sm: scale(2),\n  xs: scale(1)\n}}>\n            {[1, 2, 3, 4, 5, 6].map(item => <Layout.Item key={item} col={{\n    xxxl: 2,\n    lg: 3,\n    sm: 4,\n    xs: 6,\n    xxs: 12\n  }}>\n                    <Placeholder>Item {item}</Placeholder>\n                </Layout.Item>)}\n        </Layout>'
  }
};
var alignment = function alignment() {
  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(___WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
    cols: 3,
    justify: "end",
    align: "center",
    css: {
      height: Object(_utils_scale__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(30)
    }
  }, [1, 2, 3, 4, 5, 6].map(function (item) {
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(___WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].Item, {
      key: item
    }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(_helpers_Placeholder__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], null, "Item ", item));
  }));
};
alignment.displayName = "alignment";
alignment.storyName = 'Alignment';
alignment.parameters = {
  storySource: {
    source: '<Layout cols={3} justify=\"end\" align=\"center\" css={{\n  height: scale(30)\n}}>\n            {[1, 2, 3, 4, 5, 6].map(item => <Layout.Item key={item}>\n                    <Placeholder>Item {item}</Placeholder>\n                </Layout.Item>)}\n        </Layout>'
  }
};
var componentMeta = {
  title: 'Components / Helpers / Layout',
  component: ___WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"],
  includeStories: ["knobs", "basic", "customCols", "customRows", "autoMode", "itemColRow", "areas", "mediaQueries", "alignment"]
};
var mdxStoryNameToKey = {
  "Knobs": "knobs",
  "Basic": "basic",
  "Custom Cols": "customCols",
  "Custom Rows": "customRows",
  "Auto mode": "autoMode",
  "Item Col & Row": "itemColRow",
  "Areas": "areas",
  "Media Queries": "mediaQueries",
  "Alignment": "alignment"
};
componentMeta.parameters = componentMeta.parameters || {};
componentMeta.parameters.docs = Object.assign({}, componentMeta.parameters.docs || {}, {
  page: function page() {
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_7__["AddContext"], {
      mdxStoryNameToKey: mdxStoryNameToKey,
      mdxComponentMeta: componentMeta
    }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"])(MDXContent, null));
  }
});
/* harmony default export */ __webpack_exports__["default"] = (componentMeta);

/***/ }),

/***/ 1154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basic", function() { return basic; });
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
/* harmony import */ var _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(126);




function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsxRuntime classic */

/* @jsx mdx */




var layoutProps = {};
var MDXLayout = "wrapper";

function MDXContent(_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__["Meta"], {
    title: "Components / Helpers / VisuallyHidden",
    component: ___WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"],
    mdxType: "Meta"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h1", {
    "id": "visuallyhidden"
  }, "VisuallyHidden"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__["Preview"], {
    mdxType: "Preview"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__["Story"], {
    name: "Basic",
    mdxType: "Story"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(___WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    mdxType: "VisuallyHidden"
  }, "I'm watching you", ' ', Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("span", {
    role: "img",
    "aria-label": "Eyes Emoji"
  }, "\uD83D\uDC40")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u041A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0434\u043B\u044F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "p"
  }, "\u0432\u0438\u0437\u0443\u0430\u043B\u044C\u043D\u043E\u0433\u043E"), " \u0441\u043A\u0440\u044B\u0442\u0438\u044F \u0442\u0435\u043A\u0441\u0442\u0430."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u042D\u0442\u043E \u043F\u0430\u0442\u0442\u0435\u0440\u043D, \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u044E\u0449\u0438\u0439 \u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043D\u0442\u0435\u043D\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u043C \u0434\u043B\u044F AT, \u043D\u043E \u0441\u043A\u0440\u044B\u0442\u044C \u0432\u0438\u0437\u0443\u0430\u043B\u044C\u043D\u043E."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u267F\uFE0F \u041D\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0434\u043B\u044F \u044D\u0442\u0438\u0445 \u0446\u0435\u043B\u0435\u0439 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "display: none"), " \u0438\u043B\u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "visibility: hidden"), ", \u0442.\u043A. \u044D\u0442\u0438 \u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u0434\u0435\u043B\u0430\u044E\u0442 \u043A\u043E\u043D\u0442\u0435\u043D\u0442 \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u043C."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "p"
  }, "\u041F\u0440\u0438\u043C\u0435\u0440\u044B:")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("ol", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ol"
  }, "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0438 \u0434\u043E\u043B\u0436\u043D\u044B \u0438\u043C\u0435\u0442\u044C \u0434\u0440\u0435\u0432\u043E\u0432\u0438\u0434\u043D\u0443\u044E \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0443 \u0438 \u0432\u0441\u0435\u0433\u0434\u0430 \u0434\u043E\u043B\u0436\u0435\u043D \u043F\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "h1"), ", \u043D\u043E \u0432 \u043C\u0430\u043A\u0435\u0442\u0430\u0445 \u043B\u0438\u0431\u043E \u043D\u0435\u0442 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u043E\u0432, \u043B\u0438\u0431\u043E \u043E\u043D\u0438 \u043F\u0440\u043E\u043F\u0443\u0441\u043A\u0430\u044E\u0442\u0441\u044F."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ol"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "label"), " \u0438\u043B\u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "legend"), " \u0434\u043E\u043B\u0436\u043D\u044B \u0430\u0441\u0441\u043E\u0446\u0438\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0441 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "input"), " \u0438\u043B\u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "fieldset"), " \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E, \u043D\u043E \u0432\u0438\u0437\u0443\u0430\u043B\u044C\u043D\u043E \u043D\u0430 \u0434\u0438\u0437\u0430\u0439\u043D\u0435 \u043E\u043D\u0438 \u043D\u0435 \u043F\u043E\u043A\u0430\u0437\u0430\u043D\u044B."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ol"
  }, "CTA \u043A\u043D\u043E\u043F\u043A\u0438 \u0438\u043C\u0435\u044E\u0442 \u043A\u0440\u0430\u0442\u043A\u0438\u0435 \u043D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0432\u0440\u043E\u0434\u0435 \"\u041A\u0443\u043F\u0438\u0442\u044C\". \u0417\u0440\u044F\u0447\u0438\u043C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u043C \u043F\u0440\u0435\u0434\u043C\u0435\u0442 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u043F\u043E\u043D\u044F\u0442\u0435\u043D \u0438\u0437 \u043A\u043E\u043D\u0442\u0435\u043A\u0441\u0442\u0430, \u0430 \u0443 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0441\u043A\u0440\u0438\u043D\u0440\u0438\u0434\u0435\u0440\u0430 \u044D\u0442\u043E\u0433\u043E \u043A\u043E\u043D\u0442\u0435\u043A\u0441\u0442\u0430 \u043D\u0435\u0442. \u0412 \u044D\u0442\u043E\u043C \u0441\u043B\u0443\u0447\u0430\u0435 \u043C\u043E\u0436\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432\u0438\u0437\u0443\u0430\u043B\u044C\u043D\u043E \u0441\u043A\u0440\u044B\u0442\u043E\u0435 \u0438\u043C\u044F \u0442\u043E\u0432\u0430\u0440\u0430 \u043F\u043E\u0441\u043B\u0435 \u0441\u043B\u043E\u0432\u0430 \"\u041A\u0443\u043F\u0438\u0442\u044C\"."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ol"
  }, "\u041F\u0440\u043E\u0447\u0438\u0435 \u0441\u043B\u0443\u0447\u0430\u0438 \u0441 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435\u043C \u043A\u043E\u043D\u0442\u0435\u043A\u0441\u0442\u0430, \u0432 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044E AT \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u0432 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438, \u0442\u0430\u043A\u0438\u0435 \u043A\u0430\u043A \u0445\u043B\u0435\u0431\u043D\u044B\u0435 \u043A\u0440\u043E\u0448\u043A\u0438 \u0438 \u043F\u0430\u0433\u0438\u043D\u0430\u0446\u0438\u044F.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\uD83C\uDFC6 \u0420\u0430\u0437\u0434\u0435\u043B\u044B \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0437\u0430\u0447\u0430\u0441\u0442\u0443\u044E \u0438\u0434\u0443\u0442 \u0431\u0435\u0437 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u043E\u0432, \u043D\u043E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u043C \u0441\u043A\u0440\u0438\u043D\u0440\u0438\u0434\u0435\u0440\u043E\u0432 \u0443\u0434\u043E\u0431\u043D\u043E \u043E\u0440\u0438\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u043F\u043E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u0447\u0435\u0440\u0435\u0437 \u0434\u0435\u0440\u0435\u0432\u043E \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u043E\u0432. \u0422\u0430\u043A \u0447\u0442\u043E \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F \u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0442\u044C \u0432 \u0442\u0430\u043A\u0438\u0445 \u0441\u043B\u0443\u0447\u0430\u044F\u0445 \u0441\u043A\u0440\u044B\u0442\u044B\u0435 \u0432\u0438\u0437\u0443\u0430\u043B\u044C\u043D\u043E \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0438."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\uD83C\uDFC6 \u0412 \u0441\u0442\u0438\u043B\u0438 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043E \u043F\u0440\u0430\u0432\u0438\u043B\u043E ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "white-space: nowrap"), ", \u0447\u0442\u043E\u0431\u044B \u0438\u0437\u0431\u0435\u0436\u0430\u0442\u044C \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B \u0441 \u043D\u0435\u043E\u0437\u0432\u0443\u0447\u0438\u0432\u0430\u043D\u0438\u0435\u043C \u043F\u0440\u043E\u0431\u0435\u043B\u043E\u0432: ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", _extends({
    parentName: "p"
  }, {
    "href": "https://medium.com/@jessebeach/beware-smushed-off-screen-accessible-text-5952a4c2cbfe",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer"
  }), "Beware smushed off-screen accessible text")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\uD83D\uDCDA \u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 \u043F\u0440\u043E \u043F\u0430\u0442\u0442\u0435\u0440\u043D: ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", _extends({
    parentName: "p"
  }, {
    "href": "https://webaim.org/techniques/css/invisiblecontent/",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer"
  }), "Invisible Content Just for Screen Reader Users")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    "id": "props"
  }, "Props"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__["Props"], {
    of: ___WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"],
    mdxType: "Props"
  }));
}

MDXContent.displayName = "MDXContent";
;
MDXContent.isMDXComponent = true;
var basic = function basic() {
  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(___WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], null, "I'm watching you", ' ', Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("span", {
    role: "img",
    "aria-label": "Eyes Emoji"
  }, "\uD83D\uDC40"));
};
basic.displayName = "basic";
basic.storyName = 'Basic';
basic.parameters = {
  storySource: {
    source: '<VisuallyHidden>\n            I&apos;m watching you{\' \'}\n            <span role=\"img\" aria-label=\"Eyes Emoji\">\n                👀\n            </span>\n        </VisuallyHidden>'
  }
};
var componentMeta = {
  title: 'Components / Helpers / VisuallyHidden',
  component: ___WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"],
  includeStories: ["basic"]
};
var mdxStoryNameToKey = {
  "Basic": "basic"
};
componentMeta.parameters = componentMeta.parameters || {};
componentMeta.parameters.docs = Object.assign({}, componentMeta.parameters.docs || {}, {
  page: function page() {
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__["AddContext"], {
      mdxStoryNameToKey: mdxStoryNameToKey,
      mdxComponentMeta: componentMeta
    }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(MDXContent, null));
  }
});
/* harmony default export */ __webpack_exports__["default"] = (componentMeta);

/***/ }),

/***/ 1155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ButtonAutokit/ButtonAutokit.stories.mdx": 1186,
	"./ColorsAutokit/ColorsAutokit.stories.mdx": 1177,
	"./IconsAutokit/IconsAutokit.stories.mdx": 1178,
	"./LayoutAutokit/LayoutAutokit.stories.mdx": 1179,
	"./PalettesAutokit/PalettesAutokit.stories.mdx": 1180,
	"./ShadowsAutokit/ShadowsAutokit.stories.mdx": 1181,
	"./TypographyAutokit/TypographyAutokit.stories.mdx": 1187
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 1155;

/***/ }),

/***/ 1161:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./tokens/large/checkCircle.svg": 1162,
	"./tokens/large/crossCircle.svg": 1163,
	"./tokens/large/placeholder.svg": 1164,
	"./tokens/medium/checkCircle.svg": 1165,
	"./tokens/medium/crossCircle.svg": 1166,
	"./tokens/medium/placeholder.svg": 1167,
	"./tokens/small/checkCircle.svg": 1168,
	"./tokens/small/crossCircle.svg": 1169,
	"./tokens/small/placeholder.svg": 1170
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 1161;

/***/ }),

/***/ 1162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M13.282 3.962a12.333 12.333 0 017.738.765 1 1 0 10.814-1.827 14.333 14.333 0 108.5 13.1v-1.226a1 1 0 10-2 0V16a12.336 12.336 0 01-16.608 11.562 12.334 12.334 0 011.556-23.6z"
});

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M30.04 6.04a1 1 0 00-1.414-1.413L16 17.264l-3.293-3.292a1 1 0 00-1.414 1.414l4 4a1 1 0 001.415 0L30.04 6.04z"
});

function SvgCheckCircle(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 32,
    height: 32,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _ref, _ref2);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgCheckCircle);

/***/ }),

/***/ 1163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M16 3.667C9.19 3.667 3.667 9.189 3.667 16c0 6.812 5.522 12.333 12.333 12.333 6.812 0 12.334-5.521 12.334-12.333C28.334 9.19 22.812 3.667 16 3.667zM1.667 16C1.667 8.084 8.084 1.667 16 1.667S30.334 8.084 30.334 16 23.916 30.333 16 30.333C8.084 30.333 1.667 23.916 1.667 16zm19.04-4.707a1 1 0 010 1.414L17.414 16l3.293 3.293a1 1 0 01-1.414 1.414L16 17.414l-3.293 3.293a1 1 0 01-1.414-1.414L14.586 16l-3.293-3.293a1 1 0 011.414-1.414L16 14.586l3.293-3.293a1 1 0 011.414 0z"
});

function SvgCrossCircle(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 32,
    height: 32,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgCrossCircle);

/***/ }),

/***/ 1164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M8.333 11.333a3 3 0 116 0 3 3 0 01-6 0zm3-1a1 1 0 100 2 1 1 0 000-2z"
});

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M29 19.974V6.667A3.667 3.667 0 0025.333 3H6.667A3.667 3.667 0 003 6.667v18.666A3.667 3.667 0 006.667 29h18.666A3.667 3.667 0 0029 25.333v-5.307-.052zM6.667 5C5.747 5 5 5.746 5 6.667v18.666c0 .793.553 1.456 1.294 1.625l14.333-14.332a1 1 0 011.414 0L27 17.586V6.665C27 5.747 26.254 5 25.333 5H6.667zM27 20.414l-5.666-5.667L9.08 27h16.252c.92 0 1.667-.746 1.667-1.667v-4.92z"
});

function SvgPlaceholder(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 32,
    height: 32,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _ref, _ref2);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgPlaceholder);

/***/ }),

/***/ 1165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M10.017 3.216a9 9 0 015.646.558 1 1 0 10.814-1.827A11 11 0 1023 12v-.92a1 1 0 10-2 0v.918a9 9 0 11-10.983-8.783zm12.69 1.49a1 1 0 00-1.415-1.413L12 12.595l-2.293-2.292a1 1 0 10-1.414 1.414l3 3a1 1 0 001.415 0l10-10.01z"
});

function SvgCheckCircle(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 24,
    height: 24,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgCheckCircle);

/***/ }),

/***/ 1166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm14.707-3.707a1 1 0 010 1.414L13.414 12l2.293 2.293a1 1 0 01-1.414 1.414L12 13.414l-2.293 2.293a1 1 0 01-1.414-1.414L10.586 12 8.293 9.707a1 1 0 011.414-1.414L12 10.586l2.293-2.293a1 1 0 011.414 0z"
});

function SvgCrossCircle(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 24,
    height: 24,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgCrossCircle);

/***/ }),

/***/ 1167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M6 8.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zM8.5 8a.5.5 0 100 1 .5.5 0 000-1z"
});

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M22 5a3 3 0 00-3-3H5a3 3 0 00-3 3v14a3 3 0 003 3h14a3 3 0 003-3V5zM5 4a1 1 0 00-1 1v14a1 1 0 00.65.937L15.292 9.293a1 1 0 011.414 0L20 12.586V5a1 1 0 00-1-1H5zm15 11.414l-4-4L7.414 20H19a1 1 0 001-1v-3.586z"
});

function SvgPlaceholder(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 24,
    height: 24,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _ref, _ref2);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgPlaceholder);

/***/ }),

/***/ 1168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M6.64 1.981a6.167 6.167 0 013.87.382.5.5 0 00.406-.913A7.167 7.167 0 1015.166 8v-.613a.5.5 0 10-1 0V8A6.168 6.168 0 116.641 1.98z"
});

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M15.02 3.02a.5.5 0 10-.707-.707L8 8.633 6.354 6.987a.5.5 0 00-.708.707l2 2a.5.5 0 00.708 0L15.02 3.02z"
});

function SvgCheckCircle(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 16,
    height: 16,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _ref, _ref2);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgCheckCircle);

/***/ }),

/***/ 1169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M10.354 5.646a.5.5 0 010 .708L8.707 8l1.647 1.646a.5.5 0 01-.708.708L8 8.707l-1.646 1.647a.5.5 0 01-.708-.708L7.293 8 5.646 6.354a.5.5 0 11.708-.708L8 7.293l1.646-1.647a.5.5 0 01.708 0z"
});

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M8 .833a7.167 7.167 0 100 14.334A7.167 7.167 0 008 .833zm0 1a6.167 6.167 0 100 12.334A6.167 6.167 0 008 1.833z"
});

function SvgCrossCircle(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 16,
    height: 16,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _ref, _ref2);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgCrossCircle);

/***/ }),

/***/ 1170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M3.333 2.5a.833.833 0 00-.833.833v9.334c0 .396.276.727.647.812l7.166-7.166a.5.5 0 01.707 0l2.48 2.48v-5.46a.833.833 0 00-.833-.833H3.333zM13.5 10.207l-2.834-2.833L4.54 13.5h8.127c.46 0 .833-.373.833-.833v-2.46zM3.342 14.5h9.325c1.012 0 1.833-.82 1.833-1.833V3.333c0-1.012-.82-1.833-1.833-1.833H3.333C2.321 1.5 1.5 2.32 1.5 3.333v9.334A1.833 1.833 0 003.342 14.5zm2.325-9.333a.5.5 0 100 1 .5.5 0 000-1zm-1.5.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
});

function SvgPlaceholder(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 16,
    height: 16,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgPlaceholder);

/***/ }),

/***/ 1175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(7);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(16);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__(31);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__(33);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.is-array.js
var es_array_is_array = __webpack_require__(22);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(24);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(19);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(17);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.date.to-string.js
var es_date_to_string = __webpack_require__(29);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(12);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.entries.js
var es_object_entries = __webpack_require__(67);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(15);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(30);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(25);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(28);

// EXTERNAL MODULE: ./.yarn/$$virtual/@storybook-react-virtual-9be243b8b7/0/cache/@storybook-react-npm-6.1.11-dbcf1891be-2.zip/node_modules/@storybook/react/dist/client/index.js
var client = __webpack_require__(135);

// EXTERNAL MODULE: ./.yarn/$$virtual/@storybook-addon-knobs-virtual-81ddf6b808/0/cache/@storybook-addon-knobs-npm-6.1.11-0b8041dc51-2.zip/node_modules/@storybook/addon-knobs/dist/index.js
var dist = __webpack_require__(10);

// EXTERNAL MODULE: ./.yarn/$$virtual/@storybook-addon-a11y-virtual-0434be6fdb/0/cache/@storybook-addon-a11y-npm-6.1.11-26fbbdc265-2.zip/node_modules/@storybook/addon-a11y/dist/index.js
var addon_a11y_dist = __webpack_require__(519);

// EXTERNAL MODULE: ./.yarn/$$virtual/@storybook-addon-viewport-virtual-d48f8b0b2f/0/cache/@storybook-addon-viewport-npm-6.1.11-ec130013a1-2.zip/node_modules/@storybook/addon-viewport/dist/preview.js
var preview = __webpack_require__(520);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(27);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(44);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__(40);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.define-properties.js
var es_object_define_properties = __webpack_require__(34);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.define-property.js
var es_object_define_property = __webpack_require__(37);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(76);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__(77);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(6);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(41);

// EXTERNAL MODULE: ./.yarn/$$virtual/@emotion-core-virtual-9244315116/0/cache/@emotion-core-npm-10.1.1-f084e0eeac-2.zip/node_modules/@emotion/core/dist/core.browser.esm.js + 4 modules
var core_browser_esm = __webpack_require__(3);

// EXTERNAL MODULE: ./.yarn/$$virtual/emotion-theming-virtual-bf90c49370/0/cache/emotion-theming-npm-10.0.27-c90b72b72a-2.zip/node_modules/emotion-theming/dist/emotion-theming.browser.esm.js
var emotion_theming_browser_esm = __webpack_require__(185);

// EXTERNAL MODULE: ./.yarn/cache/focus-visible-npm-5.2.0-0a54ff0da1-2.zip/node_modules/focus-visible/dist/focus-visible.js
var focus_visible = __webpack_require__(1125);

// EXTERNAL MODULE: ./.yarn/cache/normalize.css-npm-8.0.1-6124fb39b6-2.zip/node_modules/normalize.css/normalize.css
var normalize = __webpack_require__(1126);

// EXTERNAL MODULE: ./src/utils/typography.ts
var typography = __webpack_require__(123);

// EXTERNAL MODULE: ./src/utils/baseTheme.ts + 1 modules
var baseTheme = __webpack_require__(21);

// CONCATENATED MODULE: ./src/components/ThemeProvider/index.tsx











function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}








/**
 * Component for providing theme context for app.
 */

var ThemeProvider_ThemeProvider = function ThemeProvider(_ref) {
  var _global$fonts;

  var theme = _ref.theme,
      children = _ref.children;
  var global = theme.global || baseTheme["a" /* default */].global;
  var fontFaceStyles = ((_global$fonts = global.fonts) === null || _global$fonts === void 0 ? void 0 : _global$fonts.fontFace) || [];

  var _ref2 = global.base || baseTheme["a" /* default */].global.base,
      selection = _ref2.selection,
      focus = _ref2.focus,
      body = _ref2.body,
      css = _ref2.css;

  var baseStyles = [{
    '*, ::before, ::after': {
      boxSizing: 'border-box',
      padding: 0,
      margin: 0
    },
    '::selection': _objectSpread({
      color: selection === null || selection === void 0 ? void 0 : selection.color,
      backgroundColor: selection === null || selection === void 0 ? void 0 : selection.bg
    }, selection === null || selection === void 0 ? void 0 : selection.css),
    ':focus': _objectSpread({
      outline: "".concat((focus === null || focus === void 0 ? void 0 : focus.width) || 2, "px solid ").concat((focus === null || focus === void 0 ? void 0 : focus.color) || baseTheme["a" /* default */].colors.black),
      outlineOffset: focus === null || focus === void 0 ? void 0 : focus.offset
    }, focus === null || focus === void 0 ? void 0 : focus.css),
    '.js-focus-visible :focus:not(.focus-visible)': {
      outline: 'none'
    },
    'html, body': {
      minHeight: '100%'
    },
    body: _objectSpread(_objectSpread({}, body && Object(typography["a" /* default */])(body.typography, theme.typography ? theme : baseTheme["a" /* default */])), {}, {
      color: body === null || body === void 0 ? void 0 : body.color,
      backgroundColor: body === null || body === void 0 ? void 0 : body.bg
    }, body === null || body === void 0 ? void 0 : body.css),
    img: {
      maxWidth: '100%',
      height: 'auto'
    },
    a: {
      display: 'inline-block',
      textDecoration: 'none',
      color: 'inherit'
    },
    'h1, h2, h3, h4, h5, h6': {
      margin: 0
    },
    'ul li, ol li': {
      listStyle: 'none'
    },
    button: {
      border: 'none',
      background: 'none',
      cursor: 'pointer'
    },
    'input[type="number"]': {
      appearance: 'textfield'
    },
    'input[type="number"]::-webkit-outer-spin-button, input[type="number"]::-webkit-inner-spin-button': {
      margin: 0,
      appearance: 'none'
    },
    fieldset: {
      padding: 0,
      border: 'none'
    }
  }];
  return Object(core_browser_esm["jsx"])(emotion_theming_browser_esm["ThemeProvider"], {
    theme: theme
  }, Object(core_browser_esm["jsx"])(core_browser_esm["Global"], {
    styles: [fontFaceStyles, baseStyles, css]
  }), children);
};

/* harmony default export */ var components_ThemeProvider = (ThemeProvider_ThemeProvider);

try {
  // @ts-ignore
  ThemeProvider_ThemeProvider.displayName = "ThemeProvider"; // @ts-ignore

  ThemeProvider_ThemeProvider.__docgenInfo = {
    "description": "Component for providing theme context for app.",
    "displayName": "ThemeProvider",
    "props": {
      "theme": {
        "defaultValue": null,
        "description": "Theme object.",
        "name": "theme",
        "required": true,
        "type": {
          "name": "Theme | ({ palettes: { grey: string[]; blue: string[]; red: string[]; }; colors: { black: string; grey0: string; grey20: string; grey40: string; grey60: string; grey70: string; grey90: string; white: string; ... 10 more ...; tagNew: string; }; typography: { ...; }; layout: { ...; }; shadows: { ...; }; } & { ...; })"
        }
      },
      "children": {
        "defaultValue": null,
        "description": "Project code with access to provided theme.",
        "name": "children",
        "required": true,
        "type": {
          "name": "ReactNode"
        }
      }
    }
  }; // @ts-ignore

  if (typeof STORYBOOK_REACT_CLASSES !== "undefined") // @ts-ignore
    STORYBOOK_REACT_CLASSES["src/components/ThemeProvider/index.tsx#ThemeProvider"] = {
      docgenInfo: ThemeProvider_ThemeProvider.__docgenInfo,
      name: "ThemeProvider",
      path: "src/components/ThemeProvider/index.tsx#ThemeProvider"
    };
} catch (__react_docgen_typescript_loader_error) {}
// CONCATENATED MODULE: ./.storybook/decorators/themeDecorator.tsx




var themeDecorator_themeDecorator = function themeDecorator(storyFn) {
  return Object(core_browser_esm["jsx"])(components_ThemeProvider, {
    theme: baseTheme["a" /* default */]
  }, storyFn());
};

/* harmony default export */ var decorators_themeDecorator = (themeDecorator_themeDecorator);
// CONCATENATED MODULE: ./.storybook/preview.ts
















function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}







Object(client["addParameters"])({
  options: {
    showRoots: true
  },
  grid: {
    cellSize: 8
  },
  viewport: {
    viewports: preview["INITIAL_VIEWPORTS"]
  },
  backgrounds: {
    values: Object.entries(baseTheme["a" /* default */].colors).map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          name = _ref2[0],
          value = _ref2[1];

      return {
        name: name,
        value: value
      };
    })
  }
});
Object(client["addDecorator"])(dist["withKnobs"]);
Object(client["addDecorator"])(addon_a11y_dist["withA11y"]);
Object(client["addDecorator"])(decorators_themeDecorator);

/***/ }),

/***/ 1176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "knobs", function() { return /* binding */ Button_stories_knobs; });
__webpack_require__.d(__webpack_exports__, "basic", function() { return /* binding */ Button_stories_basic; });
__webpack_require__.d(__webpack_exports__, "secondaryTheme", function() { return /* binding */ Button_stories_secondaryTheme; });
__webpack_require__.d(__webpack_exports__, "largeSize", function() { return /* binding */ Button_stories_largeSize; });
__webpack_require__.d(__webpack_exports__, "smallSize", function() { return /* binding */ Button_stories_smallSize; });
__webpack_require__.d(__webpack_exports__, "block", function() { return /* binding */ Button_stories_block; });
__webpack_require__.d(__webpack_exports__, "disabled", function() { return /* binding */ Button_stories_disabled; });
__webpack_require__.d(__webpack_exports__, "withIconBefore", function() { return /* binding */ Button_stories_withIconBefore; });
__webpack_require__.d(__webpack_exports__, "withIconAfter", function() { return /* binding */ Button_stories_withIconAfter; });
__webpack_require__.d(__webpack_exports__, "hiddenMode", function() { return /* binding */ Button_stories_hiddenMode; });
__webpack_require__.d(__webpack_exports__, "link", function() { return /* binding */ Button_stories_link; });
__webpack_require__.d(__webpack_exports__, "externalLink", function() { return /* binding */ Button_stories_externalLink; });
__webpack_require__.d(__webpack_exports__, "multilineModeBr", function() { return /* binding */ Button_stories_multilineModeBr; });
__webpack_require__.d(__webpack_exports__, "multilineModeFixedWidth", function() { return /* binding */ Button_stories_multilineModeFixedWidth; });

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__(11);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(5);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(6);

// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.0-ac51e3f61d-2.zip/node_modules/react/index.js
var react = __webpack_require__(1);

// EXTERNAL MODULE: ./.yarn/$$virtual/@mdx-js-react-virtual-8208367119/0/cache/@mdx-js-react-npm-1.6.22-57e4c05c2b-2.zip/node_modules/@mdx-js/react/dist/esm.js
var esm = __webpack_require__(0);

// EXTERNAL MODULE: ./.yarn/$$virtual/@storybook-addon-docs-virtual-45dd9fae32/0/cache/@storybook-addon-docs-npm-6.1.11-e93c9ca8c3-2.zip/node_modules/@storybook/addon-docs/blocks.js
var blocks = __webpack_require__(2);

// EXTERNAL MODULE: ./.yarn/$$virtual/@storybook-addon-knobs-virtual-81ddf6b808/0/cache/@storybook-addon-knobs-npm-6.1.11-0b8041dc51-2.zip/node_modules/@storybook/addon-knobs/dist/index.js
var dist = __webpack_require__(10);

// EXTERNAL MODULE: ./.yarn/$$virtual/@storybook-addon-actions-virtual-e454e02df4/0/cache/@storybook-addon-actions-npm-6.1.11-cdd6648094-2.zip/node_modules/@storybook/addon-actions/dist/index.js
var addon_actions_dist = __webpack_require__(186);

// EXTERNAL MODULE: ./.yarn/cache/@emotion-css-npm-10.0.27-3fd4a0c157-2.zip/node_modules/@emotion/css/dist/css.browser.esm.js
var css_browser_esm = __webpack_require__(14);

// EXTERNAL MODULE: ./src/utils/scale.ts
var scale = __webpack_require__(4);

// EXTERNAL MODULE: ./.yarn/$$virtual/@emotion-core-virtual-9244315116/0/cache/@emotion-core-npm-10.1.1-f084e0eeac-2.zip/node_modules/@emotion/core/dist/core.browser.esm.js + 4 modules
var core_browser_esm = __webpack_require__(3);

// CONCATENATED MODULE: ./.storybook/decorators/centeredDecorator.tsx




var centeredDecorator_centeredDecorator = function centeredDecorator(storyFn) {
  return Object(core_browser_esm["jsx"])("div", {
    css:
    /*#__PURE__*/

    /*#__PURE__*/
    Object(css_browser_esm["a" /* default */])({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: Object(scale["a" /* default */])(2)
    },  true ? "" : undefined, ";label:css;" + ( true ? "" : undefined))
  }, storyFn());
};

/* harmony default export */ var decorators_centeredDecorator = (centeredDecorator_centeredDecorator);
// EXTERNAL MODULE: ./src/utils/baseTheme.ts + 1 modules
var baseTheme = __webpack_require__(21);

// EXTERNAL MODULE: ./src/components/Button/index.tsx
var Button = __webpack_require__(32);

// CONCATENATED MODULE: ./.storybook/docgen/Button.tsx

var Button_ButtonTheme = function ButtonTheme() {
  return Object(core_browser_esm["jsx"])("div", null);
};
var Button_ButtonSizeProperties = function ButtonSizeProperties() {
  return Object(core_browser_esm["jsx"])("div", null);
};
var Button_ButtonStates = function ButtonStates() {
  return Object(core_browser_esm["jsx"])("div", null);
};
var Button_ButtonThemeProperties = function ButtonThemeProperties() {
  return Object(core_browser_esm["jsx"])("div", null);
};
var Button_ButtonStateProperties = function ButtonStateProperties() {
  return Object(core_browser_esm["jsx"])("div", null);
};
var Button_ButtonProps = function ButtonProps() {
  return Object(core_browser_esm["jsx"])("div", null);
};

try {
  // @ts-ignore
  Button_ButtonTheme.displayName = "ButtonTheme"; // @ts-ignore

  Button_ButtonTheme.__docgenInfo = {
    "description": "",
    "displayName": "ButtonTheme",
    "props": {
      "base": {
        "defaultValue": null,
        "description": "Common settings for all themes.",
        "name": "base",
        "required": false,
        "type": {
          "name": "ButtonStates | undefined"
        }
      },
      "themes": {
        "defaultValue": null,
        "description": "Available themes. Any button can have theme from this list. You must define at least `primary` theme.",
        "name": "themes",
        "required": true,
        "type": {
          "name": "RequireAtLeastOne<Record<string, ButtonStates>, \"primary\">"
        }
      },
      "sizes": {
        "defaultValue": null,
        "description": "Available sizes. Any button can have size from this list. You must define at least `md` size.",
        "name": "sizes",
        "required": true,
        "type": {
          "name": "RequireAtLeastOne<Record<string, ButtonSizeProperties>, \"md\">"
        }
      }
    }
  }; // @ts-ignore

  if (typeof STORYBOOK_REACT_CLASSES !== "undefined") // @ts-ignore
    STORYBOOK_REACT_CLASSES[".storybook/docgen/Button.tsx#ButtonTheme"] = {
      docgenInfo: Button_ButtonTheme.__docgenInfo,
      name: "ButtonTheme",
      path: ".storybook/docgen/Button.tsx#ButtonTheme"
    };
} catch (__react_docgen_typescript_loader_error) {}

try {
  // @ts-ignore
  Button_ButtonSizeProperties.displayName = "ButtonSizeProperties"; // @ts-ignore

  Button_ButtonSizeProperties.__docgenInfo = {
    "description": "",
    "displayName": "ButtonSizeProperties",
    "props": {
      "height": {
        "defaultValue": null,
        "description": "Height. Equals `scale(6)` by default.",
        "name": "height",
        "required": false,
        "type": {
          "name": "number | undefined"
        }
      },
      "padding": {
        "defaultValue": null,
        "description": "Horizontal paddings. Equals `scale(3)` by default.",
        "name": "padding",
        "required": false,
        "type": {
          "name": "number | undefined"
        }
      },
      "iconSize": {
        "defaultValue": null,
        "description": "Icon size. Equals `scale(3)` by default.",
        "name": "iconSize",
        "required": false,
        "type": {
          "name": "number | undefined"
        }
      },
      "iconOffset": {
        "defaultValue": null,
        "description": "Offset between icon and text. Equals `scale(1)` by default.",
        "name": "iconOffset",
        "required": false,
        "type": {
          "name": "number | undefined"
        }
      },
      "typography": {
        "defaultValue": null,
        "description": "Typography style. Can be omitted if `fontSize` and `lineHeight` properties are defined via `css` settings. Equals `'1rem'` and `1.4` by default.",
        "name": "typography",
        "required": false,
        "type": {
          "name": "string | undefined"
        }
      },
      "css": {
        "defaultValue": null,
        "description": "Additional CSS.",
        "name": "css",
        "required": false,
        "type": {
          "name": "CSSObject | undefined"
        }
      }
    }
  }; // @ts-ignore

  if (typeof STORYBOOK_REACT_CLASSES !== "undefined") // @ts-ignore
    STORYBOOK_REACT_CLASSES[".storybook/docgen/Button.tsx#ButtonSizeProperties"] = {
      docgenInfo: Button_ButtonSizeProperties.__docgenInfo,
      name: "ButtonSizeProperties",
      path: ".storybook/docgen/Button.tsx#ButtonSizeProperties"
    };
} catch (__react_docgen_typescript_loader_error) {}

try {
  // @ts-ignore
  Button_ButtonStates.displayName = "ButtonStates"; // @ts-ignore

  Button_ButtonStates.__docgenInfo = {
    "description": "",
    "displayName": "ButtonStates",
    "props": {
      "default": {
        "defaultValue": null,
        "description": "",
        "name": "default",
        "required": true,
        "type": {
          "name": "ButtonThemeProperties"
        }
      },
      "hover": {
        "defaultValue": null,
        "description": "",
        "name": "hover",
        "required": false,
        "type": {
          "name": "ButtonStateProperties | undefined"
        }
      },
      "active": {
        "defaultValue": null,
        "description": "",
        "name": "active",
        "required": false,
        "type": {
          "name": "ButtonStateProperties | undefined"
        }
      },
      "disabled": {
        "defaultValue": null,
        "description": "",
        "name": "disabled",
        "required": false,
        "type": {
          "name": "ButtonStateProperties | undefined"
        }
      },
      "focus": {
        "defaultValue": null,
        "description": "",
        "name": "focus",
        "required": false,
        "type": {
          "name": "ButtonStateProperties | undefined"
        }
      }
    }
  }; // @ts-ignore

  if (typeof STORYBOOK_REACT_CLASSES !== "undefined") // @ts-ignore
    STORYBOOK_REACT_CLASSES[".storybook/docgen/Button.tsx#ButtonStates"] = {
      docgenInfo: Button_ButtonStates.__docgenInfo,
      name: "ButtonStates",
      path: ".storybook/docgen/Button.tsx#ButtonStates"
    };
} catch (__react_docgen_typescript_loader_error) {}

try {
  // @ts-ignore
  Button_ButtonThemeProperties.displayName = "ButtonThemeProperties"; // @ts-ignore

  Button_ButtonThemeProperties.__docgenInfo = {
    "description": "",
    "displayName": "ButtonThemeProperties",
    "props": {
      "borderWidth": {
        "defaultValue": null,
        "description": "Border width. Equals `1` by default if `border` property is defined.",
        "name": "borderWidth",
        "required": false,
        "type": {
          "name": "number | undefined"
        }
      },
      "borderStyle": {
        "defaultValue": null,
        "description": "Border style. `'solid'` by default.",
        "name": "borderStyle",
        "required": false,
        "type": {
          "name": "string | undefined"
        }
      },
      "borderRadius": {
        "defaultValue": null,
        "description": "Border radius.",
        "name": "borderRadius",
        "required": false,
        "type": {
          "name": "string | number | undefined"
        }
      },
      "half": {
        "defaultValue": null,
        "description": "Half mode. Redefines `border-radius` with value equals half of button height.",
        "name": "half",
        "required": false,
        "type": {
          "name": "boolean | undefined"
        }
      },
      "round": {
        "defaultValue": null,
        "description": "Round mode. Redefines `border-radius` with `'50%'` value for `hidden` mode. Doesn't affect buttons with visible text.",
        "name": "round",
        "required": false,
        "type": {
          "name": "boolean | undefined"
        }
      },
      "time": {
        "defaultValue": null,
        "description": "Transition duration. Equals `200` by default.",
        "name": "time",
        "required": false,
        "type": {
          "name": "number | undefined"
        }
      },
      "timeIn": {
        "defaultValue": null,
        "description": "Transition enter duration for hover state. Uses with `time` property to differ enter/exit transition durations.",
        "name": "timeIn",
        "required": false,
        "type": {
          "name": "number | undefined"
        }
      },
      "easing": {
        "defaultValue": null,
        "description": "Transition easing function. Equals `'ease'` by default.",
        "name": "easing",
        "required": false,
        "type": {
          "name": "string | undefined"
        }
      },
      "color": {
        "defaultValue": null,
        "description": "Text and icon color.",
        "name": "color",
        "required": false,
        "type": {
          "name": "string | undefined"
        }
      },
      "bg": {
        "defaultValue": null,
        "description": "Background color.",
        "name": "bg",
        "required": false,
        "type": {
          "name": "string | undefined"
        }
      },
      "border": {
        "defaultValue": null,
        "description": "Border color.",
        "name": "border",
        "required": false,
        "type": {
          "name": "string | undefined"
        }
      },
      "shadow": {
        "defaultValue": null,
        "description": "Shadow. Mostly for `active` state.",
        "name": "shadow",
        "required": false,
        "type": {
          "name": "string | undefined"
        }
      },
      "css": {
        "defaultValue": null,
        "description": "Additional CSS.",
        "name": "css",
        "required": false,
        "type": {
          "name": "CSSObject | undefined"
        }
      }
    }
  }; // @ts-ignore

  if (typeof STORYBOOK_REACT_CLASSES !== "undefined") // @ts-ignore
    STORYBOOK_REACT_CLASSES[".storybook/docgen/Button.tsx#ButtonThemeProperties"] = {
      docgenInfo: Button_ButtonThemeProperties.__docgenInfo,
      name: "ButtonThemeProperties",
      path: ".storybook/docgen/Button.tsx#ButtonThemeProperties"
    };
} catch (__react_docgen_typescript_loader_error) {}

try {
  // @ts-ignore
  Button_ButtonStateProperties.displayName = "ButtonStateProperties"; // @ts-ignore

  Button_ButtonStateProperties.__docgenInfo = {
    "description": "",
    "displayName": "ButtonStateProperties",
    "props": {
      "color": {
        "defaultValue": null,
        "description": "Text and icon color.",
        "name": "color",
        "required": false,
        "type": {
          "name": "string | undefined"
        }
      },
      "bg": {
        "defaultValue": null,
        "description": "Background color.",
        "name": "bg",
        "required": false,
        "type": {
          "name": "string | undefined"
        }
      },
      "border": {
        "defaultValue": null,
        "description": "Border color.",
        "name": "border",
        "required": false,
        "type": {
          "name": "string | undefined"
        }
      },
      "shadow": {
        "defaultValue": null,
        "description": "Shadow. Mostly for `active` state.",
        "name": "shadow",
        "required": false,
        "type": {
          "name": "string | undefined"
        }
      },
      "css": {
        "defaultValue": null,
        "description": "Additional CSS.",
        "name": "css",
        "required": false,
        "type": {
          "name": "CSSObject | undefined"
        }
      }
    }
  }; // @ts-ignore

  if (typeof STORYBOOK_REACT_CLASSES !== "undefined") // @ts-ignore
    STORYBOOK_REACT_CLASSES[".storybook/docgen/Button.tsx#ButtonStateProperties"] = {
      docgenInfo: Button_ButtonStateProperties.__docgenInfo,
      name: "ButtonStateProperties",
      path: ".storybook/docgen/Button.tsx#ButtonStateProperties"
    };
} catch (__react_docgen_typescript_loader_error) {}

try {
  // @ts-ignore
  Button_ButtonProps.displayName = "ButtonProps"; // @ts-ignore

  Button_ButtonProps.__docgenInfo = {
    "description": "",
    "displayName": "ButtonProps",
    "props": {
      "as": {
        "defaultValue": null,
        "description": "Use your own React component for render. Main usage: pass `a` for external links or pass `Link` from `react-router` for routes management.",
        "name": "as",
        "required": false,
        "type": {
          "name": "\"button\" | undefined"
        }
      },
      "ref": {
        "defaultValue": null,
        "description": "",
        "name": "ref",
        "required": false,
        "type": {
          "name": "((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null | undefined"
        }
      },
      "children": {
        "defaultValue": null,
        "description": "Button content.",
        "name": "children",
        "required": false,
        "type": {
          "name": "ReactNode"
        }
      },
      "theme": {
        "defaultValue": null,
        "description": "Theme name from list of themes defined in theme object at `components.Button.themes`.",
        "name": "theme",
        "required": false,
        "type": {
          "name": "string | undefined"
        }
      },
      "size": {
        "defaultValue": null,
        "description": "Size name from list of sizes defined in theme object at `components.Button.sizes`.",
        "name": "size",
        "required": false,
        "type": {
          "name": "string | undefined"
        }
      },
      "block": {
        "defaultValue": null,
        "description": "Block type. Use 100% of parent width.",
        "name": "block",
        "required": false,
        "type": {
          "name": "boolean | undefined"
        }
      },
      "Icon": {
        "defaultValue": null,
        "description": "Icon. Accepts SVGR icon or custom JSX.",
        "name": "Icon",
        "required": false,
        "type": {
          "name": "FC<SVGProps<SVGSVGElement> & { title?: string | undefined; }> | undefined"
        }
      },
      "iconAfter": {
        "defaultValue": null,
        "description": "Place icon after text.",
        "name": "iconAfter",
        "required": false,
        "type": {
          "name": "boolean | undefined"
        }
      },
      "hidden": {
        "defaultValue": null,
        "description": "Visually hidden text. Keeps text accessible but visually shows only icons. Doesn't make sense without `Icon` prop.",
        "name": "hidden",
        "required": false,
        "type": {
          "name": "boolean | undefined"
        }
      },
      "external": {
        "defaultValue": null,
        "description": "Open link in another browser tab. Additionaly adds `rel=\"nofollow noopener\"`.",
        "name": "external",
        "required": false,
        "type": {
          "name": "boolean | undefined"
        }
      },
      "__theme": {
        "defaultValue": null,
        "description": "Button theme object for internal testing purposes. Uses in Storybook knobs to play with theme.",
        "name": "__theme",
        "required": false,
        "type": {
          "name": "ButtonTheme | undefined"
        }
      },
      "css": {
        "defaultValue": null,
        "description": "Additional CSS.",
        "name": "css",
        "required": false,
        "type": {
          "name": "CSSObject | undefined"
        }
      }
    }
  }; // @ts-ignore

  if (typeof STORYBOOK_REACT_CLASSES !== "undefined") // @ts-ignore
    STORYBOOK_REACT_CLASSES[".storybook/docgen/Button.tsx#ButtonProps"] = {
      docgenInfo: Button_ButtonProps.__docgenInfo,
      name: "ButtonProps",
      path: ".storybook/docgen/Button.tsx#ButtonProps"
    };
} catch (__react_docgen_typescript_loader_error) {}
// CONCATENATED MODULE: ./src/components/Button/Button.stories.mdx




function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsxRuntime classic */

/* @jsx mdx */










var layoutProps = {};
var MDXLayout = "wrapper";

function MDXContent(_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(esm["mdx"])(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(esm["mdx"])(blocks["Meta"], {
    title: "Components / Button",
    component: Button["a" /* default */],
    decorators: [decorators_centeredDecorator],
    parameters: {
      design: {
        type: 'figma',
        url: 'https://www.figma.com/file/Udf9B3n8wEoykSGFhhrU0J/Greensight-DS?node-id=1608%3A0'
      }
    },
    mdxType: "Meta"
  }), Object(esm["mdx"])("h1", {
    "id": "button-"
  }, "Button \uD83E\uDD16"), Object(esm["mdx"])(blocks["Story"], {
    name: "Knobs",
    mdxType: "Story"
  }, function () {
    return Object(esm["mdx"])(Button["a" /* default */], {
      theme: Object(dist["radios"])('theme', ['primary', 'secondary'], 'primary'),
      size: Object(dist["radios"])('size', ['lg', 'md', 'sm'], 'md'),
      block: Object(dist["boolean"])('block', false),
      disabled: Object(dist["boolean"])('disabled', false),
      Icon: Object(dist["boolean"])('icon', false) && baseTheme["a" /* default */].global.placeholder,
      iconAfter: Object(dist["boolean"])('iconAfter', false),
      hidden: Object(dist["boolean"])('hidden', false),
      onClick: Object(addon_actions_dist["action"])('onClick'),
      __theme: Object(dist["boolean"])('Use custom theme', false) ? Object(dist["object"])('themeObj', baseTheme["a" /* default */].components.Button) : undefined,
      mdxType: "Button"
    }, Object(dist["text"])('children', 'Button'));
  }), Object(esm["mdx"])("p", null, "\u041A\u043D\u043E\u043F\u043A\u0438 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u044E\u0442\u0441\u044F \u043F\u043E\u043B\u0435\u043C ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "button"), " \u0432 \u043E\u0431\u044A\u0435\u043A\u0442\u0435 \u0442\u0435\u043C\u044B. \u0412 \u0446\u0435\u043B\u043E\u043C \u043A\u043E\u043D\u0446\u0435\u043F\u0442 \u0442\u0430\u043A\u043E\u0432, \u0447\u0442\u043E \u0437\u0430\u0434\u0430\u044E\u0442\u0441\u044F \u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u044B\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0441\u0442\u0438\u043B\u0435\u0439 \u0432 ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "base"), ", \u043F\u043E\u0441\u043B\u0435 \u0447\u0435\u0433\u043E \u0441\u0442\u0438\u043B\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0440\u0430\u0437\u043B\u0438\u0447\u0438\u044F \u0434\u0438\u043A\u0442\u0443\u044E\u0442\u0441\u044F \u0441\u043E\u0447\u0438\u0442\u0430\u043D\u0438\u0435\u043C \u0442\u0435\u043C\u044B \u0438\u0437 ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "themes"), " \u0438 \u0440\u0430\u0437\u043C\u0435\u0440\u0430 \u0438\u0437 ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "sizes"), "."), Object(esm["mdx"])("p", null, "\u041F\u043E\u0441\u043B\u0435 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u0442\u0435\u043C\u044B \u0438 \u0440\u0430\u0437\u043C\u0435\u0440\u0430 \u0434\u043B\u044F \u043A\u043D\u043E\u043F\u043A\u0438 \u0441\u0442\u0430\u043D\u043E\u0432\u044F\u0442\u0441\u044F \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B \u0432\u0430\u0440\u0438\u0430\u0446\u0438\u0438, \u0437\u0430\u0434\u0430\u0432\u0430\u0435\u043C\u044B\u0435 \u0447\u0435\u0440\u0435\u0437 props: ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "block"), ", ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "disabled"), ", ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "hidden"), " \u0438 \u0442.\u0434. \u0422.\u0435. \u044D\u0442\u0438 \u0432\u0430\u0440\u0438\u0430\u0446\u0438\u0438 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B \u0434\u043B\u044F ", Object(esm["mdx"])("strong", {
    parentName: "p"
  }, "\u043B\u044E\u0431\u043E\u0439"), " \u043A\u043D\u043E\u043F\u043A\u0438. \u0414\u0435\u0442\u0430\u043B\u044C\u043D\u0435\u0435 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 props \u0440\u0430\u0437\u043E\u0431\u0440\u0430\u043D\u044B \u0432 \u0440\u0430\u0437\u0434\u0435\u043B\u0435 ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "Use cases"), "."), Object(esm["mdx"])("p", null, "\u0426\u0435\u043D\u0442\u0440\u043E\u043C \u0438\u0441\u0442\u0438\u043D\u044B \u043F\u0440\u0438 \u0443\u043A\u0430\u0437\u0430\u043D\u0438\u0438 \u0440\u0430\u0437\u043C\u0435\u0440\u043E\u0432 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0432\u044B\u0441\u043E\u0442\u0430 \u043A\u043D\u043E\u043F\u043A\u0438 \u2013 \u043E\u043D\u0430 \u0434\u043E\u043B\u0436\u043D\u0430 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u0442\u044C \u0441 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0451\u043D\u043D\u043E\u0439 \u0432 Figma. \u041E\u0434\u043D\u0430\u043A\u043E \u0432\u043D\u0443\u0442\u0440\u0438 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u043D\u0435 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043F\u043E \u0432\u044B\u0441\u043E\u0442\u0435 \u2013 \u0434\u043B\u044F \u043D\u0435\u0433\u043E \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u0435\u0442\u0441\u044F \u0440\u0430\u0441\u0447\u0451\u0442 \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0445 \u043F\u043E\u043B\u0435\u0439. \u0422\u0430\u043A\u043E\u0439 \u043F\u043E\u0434\u0445\u043E\u0434 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0441\u0434\u0435\u043B\u0430\u0442\u044C multiline \u0440\u0435\u0436\u0438\u043C \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u043C \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E."), Object(esm["mdx"])("p", null, "\u0412\u0441\u0435 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0435 \u0440\u0430\u0437\u043C\u0435\u0440\u044B \u043C\u043E\u0436\u043D\u043E \u0432\u0437\u044F\u0442\u044C \u0438\u0437 \u043F\u0430\u043D\u0435\u043B\u0438 ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "Auto Layout"), " \u0432 Figma, \u0446\u0432\u0435\u0442\u0430 \u0431\u0435\u0440\u0443\u0442\u0441\u044F \u0438\u0437 \u043F\u0430\u043B\u0438\u0442\u0440\u044B, \u0442\u0438\u043F\u043E\u0433\u0440\u0430\u0444\u0438\u043A\u0430 \u043F\u043E \u0438\u043C\u0435\u043D\u0438 \u0438\u0437 \u0441\u0442\u0438\u043B\u0435\u0439."), Object(esm["mdx"])("p", null, "\u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0440\u0435\u043D\u0434\u0435\u0440\u0438\u0442\u0441\u044F \u0447\u0435\u0440\u0435\u0437 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "<button />"), " \u0438 \u043D\u0430\u0441\u043B\u0435\u0434\u0443\u0435\u0442 \u0435\u0433\u043E \u043F\u0440\u043E\u043F\u0441\u044B. \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0447\u0435\u0440\u0435\u0437 \u043F\u0440\u043E\u043F ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "as"), ", \u0447\u0442\u043E \u043F\u043E\u0437\u0432\u043E\u043B\u0438\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0434\u043B\u044F \u0441\u0441\u044B\u043B\u043E\u043A, \u0438 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438\u0442 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043F\u0440\u043E\u043F\u0441\u044B \u043F\u0435\u0440\u0435\u0434\u0430\u043D\u043D\u043E\u0433\u043E \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430."), Object(esm["mdx"])("h2", {
    "id": "props"
  }, "Props"), Object(esm["mdx"])(blocks["Props"], {
    of: Button_ButtonProps,
    mdxType: "Props"
  }), Object(esm["mdx"])("h2", {
    "id": "theme"
  }, "Theme"), Object(esm["mdx"])(blocks["Props"], {
    components: {
      ButtonTheme: Button_ButtonTheme,
      ButtonStates: Button_ButtonStates,
      ButtonThemeProperties: Button_ButtonThemeProperties,
      ButtonStateProperties: Button_ButtonStateProperties,
      ButtonSizeProperties: Button_ButtonSizeProperties
    },
    mdxType: "Props"
  }), Object(esm["mdx"])("h2", {
    "id": "use-cases"
  }, "Use cases"), Object(esm["mdx"])("h3", {
    "id": "basic"
  }, "Basic"), Object(esm["mdx"])("p", null, "\u041A\u043D\u043E\u043F\u043A\u0430 \u0431\u0435\u0437 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u043E\u0432 \u0440\u0435\u043D\u0434\u0435\u0440\u0438\u0442\u0441\u044F \u0441 \u0442\u0435\u043C\u043E\u0439 \"primary\" \u0438 \u0440\u0430\u0437\u043C\u0435\u0440\u043E\u043C \"md\"."), Object(esm["mdx"])(blocks["Preview"], {
    mdxType: "Preview"
  }, Object(esm["mdx"])(blocks["Story"], {
    name: "Basic",
    mdxType: "Story"
  }, Object(esm["mdx"])(Button["a" /* default */], {
    mdxType: "Button"
  }, "Button"))), Object(esm["mdx"])("h3", {
    "id": "themes"
  }, "Themes"), Object(esm["mdx"])("p", null, "\u0422\u0435\u043C\u044B \u0434\u043B\u044F \u043A\u043D\u043E\u043F\u043E\u043A \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u044E\u0442\u0441\u044F \u0432 \u043E\u0431\u044A\u0435\u043A\u0442\u0435 \u0442\u0435\u043C\u044B \u0432 \u043F\u043E\u043B\u0435 ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "button.themes"), ". \u041F\u0440\u0438\u0441\u0432\u043E\u0435\u043D\u043D\u044B\u0435 \u0438\u043C\u0435\u043D\u0430 \u0441\u0442\u0430\u043D\u043E\u0432\u044F\u0442\u0441\u044F \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B \u0447\u0435\u0440\u0435\u0437 \u043F\u0440\u043E\u043F ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "theme"), "."), Object(esm["mdx"])("p", null, Object(esm["mdx"])("strong", {
    parentName: "p"
  }, "\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C\u044B\u0435 \u0438\u043C\u0435\u043D\u0430:"), " 'primary', 'secondary' \u0438 \u0438\u0445 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u043D\u044B\u0435 \u2013 \u0442\u0430\u043A \u0438\u0445 \u0434\u0435\u043B\u044F\u0442 \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u044B. \u041C\u043E\u0433\u0443\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u043E\u0431\u0449\u0435\u043F\u0440\u0438\u043D\u044F\u0442\u044B\u0435 \u0442\u0438\u043F\u044B \u0432\u0440\u043E\u0434\u0435 'link' \u0438 'subtle'."), Object(esm["mdx"])(blocks["Preview"], {
    mdxType: "Preview"
  }, Object(esm["mdx"])(blocks["Story"], {
    id: "components-button--basic",
    mdxType: "Story"
  }), Object(esm["mdx"])(blocks["Story"], {
    name: "Secondary theme",
    mdxType: "Story"
  }, Object(esm["mdx"])(Button["a" /* default */], {
    theme: "secondary",
    mdxType: "Button"
  }, "Button"))), Object(esm["mdx"])("h3", {
    "id": "sizes"
  }, "Sizes"), Object(esm["mdx"])("p", null, "\u0420\u0430\u0437\u043C\u0435\u0440\u044B \u0434\u043B\u044F \u043A\u043D\u043E\u043F\u043E\u043A \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u044E\u0442\u0441\u044F \u0432 \u043E\u0431\u044A\u0435\u043A\u0442\u0435 \u0442\u0435\u043C\u044B \u0432 \u043F\u043E\u043B\u0435 ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "button.sizes"), ". \u041F\u0440\u0438\u0441\u0432\u043E\u0435\u043D\u043D\u044B\u0435 \u0438\u043C\u0435\u043D\u0430 \u0441\u0442\u0430\u043D\u043E\u0432\u044F\u0442\u0441\u044F \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B \u0447\u0435\u0440\u0435\u0437 \u043F\u0440\u043E\u043F ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "size"), "."), Object(esm["mdx"])("p", null, Object(esm["mdx"])("strong", {
    parentName: "p"
  }, "\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C\u044B\u0435 \u0438\u043C\u0435\u043D\u0430:"), " 'lg', 'md', 'sm'."), Object(esm["mdx"])(blocks["Preview"], {
    mdxType: "Preview"
  }, Object(esm["mdx"])(blocks["Story"], {
    name: "Large size",
    mdxType: "Story"
  }, Object(esm["mdx"])(Button["a" /* default */], {
    size: "lg",
    mdxType: "Button"
  }, "Button")), Object(esm["mdx"])(blocks["Story"], {
    id: "components-button--basic",
    mdxType: "Story"
  }), Object(esm["mdx"])(blocks["Story"], {
    name: "Small size",
    mdxType: "Story"
  }, Object(esm["mdx"])(Button["a" /* default */], {
    size: "sm",
    mdxType: "Button"
  }, "Button"))), Object(esm["mdx"])("h3", {
    "id": "block"
  }, "Block"), Object(esm["mdx"])("p", null, "\u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u0448\u0438\u0440\u0438\u043D\u0430 \u043A\u043D\u043E\u043F\u043A\u0438 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442\u0441\u044F \u0435\u0451 \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u043E\u043C. \u041F\u0440\u043E\u043F ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "block"), " \u0441\u0442\u0430\u0432\u0438\u0442 \u0440\u0430\u0437\u043C\u0435\u0440\u044B \u043F\u043E \u0448\u0438\u0440\u0438\u043D\u0435 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u0430."), Object(esm["mdx"])(blocks["Preview"], {
    mdxType: "Preview"
  }, Object(esm["mdx"])(blocks["Story"], {
    name: "Block",
    mdxType: "Story"
  }, Object(esm["mdx"])(Button["a" /* default */], {
    block: true,
    mdxType: "Button"
  }, "Button"))), Object(esm["mdx"])("h3", {
    "id": "disabled"
  }, "Disabled"), Object(esm["mdx"])("p", null, "\u0421\u0442\u0438\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u043A\u043D\u043E\u043F\u043E\u043A \u043C\u043E\u0436\u0435\u0442 \u0437\u0430\u0434\u0430\u0432\u0430\u0442\u044C\u0441\u044F \u043E\u0431\u0449\u0430\u044F \u0434\u043B\u044F \u0432\u0441\u0435\u0445 \u0442\u0435\u043C \u0447\u0435\u0440\u0435\u0437 ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "global"), " \u0438\u043B\u0438 \u0434\u043B\u044F \u043A\u0430\u0436\u0434\u043E\u0439 \u0442\u0435\u043C\u044B \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E \u0432 ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "themes"), "."), Object(esm["mdx"])(blocks["Preview"], {
    mdxType: "Preview"
  }, Object(esm["mdx"])(blocks["Story"], {
    name: "Disabled",
    mdxType: "Story"
  }, Object(esm["mdx"])(Button["a" /* default */], {
    disabled: true,
    mdxType: "Button"
  }, "Button"))), Object(esm["mdx"])("h3", {
    "id": "icons"
  }, "Icons"), Object(esm["mdx"])("p", null, "\u0418\u043A\u043E\u043D\u043A\u0438 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0447\u0435\u0440\u0435\u0437 \u043F\u0440\u043E\u043F ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "Icon"), ". \u0418\u043A\u043E\u043D\u043A\u0430 \u0438\u0434\u0451\u0442 \u0441 \u043E\u0442\u0441\u0442\u0443\u043F\u043E\u043C, \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0451\u043D\u043D\u044B\u043C \u0447\u0435\u0440\u0435\u0437 ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "iconOffset"), " \u0432 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u0445 ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "sizes"), "."), Object(esm["mdx"])("p", null, "\u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u043A\u043D\u043E\u043F\u043A\u0430 \u0438\u0434\u0451\u0442 \u043F\u0435\u0440\u0435\u0434 \u0442\u0435\u043A\u0441\u0442\u043E\u043C, \u043D\u043E \u0435\u0451 \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0432 \u043A\u043E\u043D\u0435\u0446 \u0447\u0435\u0440\u0435\u0437 ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "iconAfter"), "."), Object(esm["mdx"])(blocks["Preview"], {
    mdxType: "Preview"
  }, Object(esm["mdx"])(blocks["Story"], {
    name: "With icon (before)",
    mdxType: "Story"
  }, Object(esm["mdx"])(Button["a" /* default */], {
    Icon: baseTheme["a" /* default */].global.placeholder,
    mdxType: "Button"
  }, "Button")), Object(esm["mdx"])(blocks["Story"], {
    name: "With icon (after)",
    mdxType: "Story"
  }, Object(esm["mdx"])(Button["a" /* default */], {
    Icon: baseTheme["a" /* default */].global.placeholder,
    iconAfter: true,
    mdxType: "Button"
  }, "Button"))), Object(esm["mdx"])("h3", {
    "id": "hidden-mode"
  }, "Hidden mode"), Object(esm["mdx"])("p", null, "\u0414\u043E\u0441\u0442\u0443\u043F\u0435\u043D \u0440\u0435\u0436\u0438\u043C \u0438\u043A\u043E\u043D\u043E\u0447\u043D\u043E\u0439 \u043A\u043D\u043E\u043F\u043A\u0438 \u0447\u0435\u0440\u0435\u0437 \u043F\u0440\u043E\u043F ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "hidden"), "."), Object(esm["mdx"])("p", null, "\u267F\uFE0F \u042D\u0442\u043E \xABhidden mode\xBB, \u0430 \u043D\u0435 \xABicon mode\xBB, \u0442.\u043A. \u0442\u0435\u043A\u0441\u0442 \u043F\u0440\u0438 \u044D\u0442\u043E\u043C \u0432\u0441\u0451 \u0440\u0430\u0432\u043D\u043E \u0434\u043E\u043B\u0436\u0435\u043D \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C\u0441\u044F \u0434\u043B\u044F \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u0447\u0435\u0440\u0435\u0437 AT."), Object(esm["mdx"])(blocks["Preview"], {
    mdxType: "Preview"
  }, Object(esm["mdx"])(blocks["Story"], {
    name: "Hidden mode",
    mdxType: "Story"
  }, Object(esm["mdx"])(Button["a" /* default */], {
    Icon: baseTheme["a" /* default */].global.placeholder,
    hidden: true,
    mdxType: "Button"
  }, "Button"))), Object(esm["mdx"])("h3", {
    "id": "links"
  }, "Links"), Object(esm["mdx"])("p", null, "\u0427\u0442\u043E\u0431\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0434\u043B\u044F \u0441\u0441\u044B\u043B\u043E\u043A \u043D\u0443\u0436\u043D\u043E \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0440\u0435\u043D\u0434\u0435\u0440\u0430 \u0447\u0435\u0440\u0435\u0437 \u043F\u0440\u043E\u043F ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "as"), ". \u041F\u043E\u0441\u043B\u0435 \u044D\u0442\u043E\u0433\u043E \u0432\u0430\u043C \u0441\u0442\u0430\u043D\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u043F\u0441\u043E\u0432 ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "href"), " \u0432 \u0441\u043B\u0443\u0447\u0430\u0435 ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "a"), " \u0438 ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "to"), " \u0432 \u0441\u043B\u0443\u0447\u0430\u0435 ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "Link"), "."), Object(esm["mdx"])("p", null, "\uD83D\uDCAC GDS \u043D\u0435 \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442 \u0432 \u0441\u0435\u0431\u044F \u0432\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u043E\u0433\u043E \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0430 \u0434\u043B\u044F \u0440\u043E\u0443\u0442\u0438\u043D\u0433\u0430, \u0442\u0430\u043A \u0447\u0442\u043E \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "react-router"), ", \u043D\u043E \u0438 \u043A \u043F\u0440\u0438\u043C\u0435\u0440\u0443 ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "@reach/router"), "."), Object(esm["mdx"])("p", null, "\u0422\u0430\u043A\u0436\u0435 \u0441\u0441\u044B\u043B\u043A\u0430 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0432\u043D\u0435\u0448\u043D\u044F\u044F, \u0442.\u0435. \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0442\u044C \u0432\u043A\u043B\u0430\u0434\u043A\u0443 \u0432 \u043D\u043E\u0432\u043E\u043C \u043E\u043A\u043D\u0435. \u0427\u0442\u043E\u0431\u044B \u0437\u0430\u0434\u0430\u0442\u044C \u043F\u043E\u0434\u043E\u0431\u043D\u043E\u0435 \u043F\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435, \u043F\u0435\u0440\u0435\u0434\u0430\u0439\u0442\u0435 \u043F\u0440\u043E\u043F ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "external"), ". \u042D\u0442\u043E\u0442 \u043F\u0440\u043E\u043F \u0437\u0430\u0434\u0430\u0451\u0442 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u044B ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "target=\"_blank\""), " \u0438 ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "rel=\"nofollow noopener\""), "."), Object(esm["mdx"])(blocks["Preview"], {
    mdxType: "Preview"
  }, Object(esm["mdx"])(blocks["Story"], {
    name: "Link",
    mdxType: "Story"
  }, Object(esm["mdx"])(Button["a" /* default */], {
    as: "a",
    href: "http://greensight.pro",
    mdxType: "Button"
  }, "Button")), Object(esm["mdx"])(blocks["Story"], {
    name: "External link",
    mdxType: "Story"
  }, Object(esm["mdx"])(Button["a" /* default */], {
    as: "a",
    href: "http://greensight.pro",
    external: true,
    mdxType: "Button"
  }, "Button"))), Object(esm["mdx"])("h3", {
    "id": "multiline-mode"
  }, "Multiline mode"), Object(esm["mdx"])("p", null, "\u0410\u043A\u0442\u0438\u0432\u0430\u0446\u0438\u044F \u043C\u043D\u043E\u0433\u043E\u0441\u0442\u0440\u043E\u0447\u043D\u043E\u0433\u043E \u0440\u0435\u0436\u0438\u043C\u0430 \u043C\u043E\u0436\u0435\u0442 \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442\u044C \u043A\u0430\u043A \u0438\u0437-\u0437\u0430 \u0432\u0441\u0442\u0430\u0432\u043A\u0438 ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "<br/>"), ", \u0442\u0430\u043A \u0438 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u043F\u0440\u0438 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u0438 \u043F\u043E \u0448\u0438\u0440\u0438\u043D\u0435."), Object(esm["mdx"])("p", null, "\u0418\u043A\u043E\u043D\u043A\u0430 \u043F\u0440\u0438 \u044D\u0442\u043E\u043C \u0432\u044B\u0440\u0430\u0432\u043D\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043F\u043E \u0446\u0435\u043D\u0442\u0440\u0443 \u043A\u043D\u043E\u043F\u043A\u0438."), Object(esm["mdx"])(blocks["Preview"], {
    mdxType: "Preview"
  }, Object(esm["mdx"])(blocks["Story"], {
    name: "Multiline mode (br)",
    mdxType: "Story"
  }, Object(esm["mdx"])(Button["a" /* default */], {
    mdxType: "Button"
  }, "Multiline", Object(esm["mdx"])("br", null), "button")), Object(esm["mdx"])(blocks["Story"], {
    name: "Multiline mode (fixed width)",
    mdxType: "Story"
  }, Object(esm["mdx"])(Button["a" /* default */], {
    css: {
      width: Object(scale["a" /* default */])(14)
    },
    mdxType: "Button"
  }, "Multiline button"))));
}

MDXContent.displayName = "MDXContent";
;
MDXContent.isMDXComponent = true;
var Button_stories_knobs = function knobs() {
  return Object(esm["mdx"])(Button["a" /* default */], {
    theme: Object(dist["radios"])('theme', ['primary', 'secondary'], 'primary'),
    size: Object(dist["radios"])('size', ['lg', 'md', 'sm'], 'md'),
    block: Object(dist["boolean"])('block', false),
    disabled: Object(dist["boolean"])('disabled', false),
    Icon: Object(dist["boolean"])('icon', false) && baseTheme["a" /* default */].global.placeholder,
    iconAfter: Object(dist["boolean"])('iconAfter', false),
    hidden: Object(dist["boolean"])('hidden', false),
    onClick: Object(addon_actions_dist["action"])('onClick'),
    __theme: Object(dist["boolean"])('Use custom theme', false) ? Object(dist["object"])('themeObj', baseTheme["a" /* default */].components.Button) : undefined
  }, Object(dist["text"])('children', 'Button'));
};
Button_stories_knobs.displayName = "knobs";
Button_stories_knobs.storyName = 'Knobs';
Button_stories_knobs.parameters = {
  storySource: {
    source: '() => {\n  return <Button theme={radios(\'theme\', [\'primary\', \'secondary\'], \'primary\')} size={radios(\'size\', [\'lg\', \'md\', \'sm\'], \'md\')} block={boolean(\'block\', false)} disabled={boolean(\'disabled\', false)} Icon={boolean(\'icon\', false) && baseTheme.global.placeholder} iconAfter={boolean(\'iconAfter\', false)} hidden={boolean(\'hidden\', false)} onClick={action(\'onClick\')} __theme={boolean(\'Use custom theme\', false) ? object(\'themeObj\', baseTheme.components.Button) : undefined}>\n                {text(\'children\', \'Button\')}\n            </Button>;\n}'
  }
};
var Button_stories_basic = function basic() {
  return Object(esm["mdx"])(Button["a" /* default */], null, "Button");
};
Button_stories_basic.displayName = "basic";
Button_stories_basic.storyName = 'Basic';
Button_stories_basic.parameters = {
  storySource: {
    source: '<Button>Button</Button>'
  }
};
var Button_stories_secondaryTheme = function secondaryTheme() {
  return Object(esm["mdx"])(Button["a" /* default */], {
    theme: "secondary"
  }, "Button");
};
Button_stories_secondaryTheme.displayName = "secondaryTheme";
Button_stories_secondaryTheme.storyName = 'Secondary theme';
Button_stories_secondaryTheme.parameters = {
  storySource: {
    source: '<Button theme=\"secondary\">Button</Button>'
  }
};
var Button_stories_largeSize = function largeSize() {
  return Object(esm["mdx"])(Button["a" /* default */], {
    size: "lg"
  }, "Button");
};
Button_stories_largeSize.displayName = "largeSize";
Button_stories_largeSize.storyName = 'Large size';
Button_stories_largeSize.parameters = {
  storySource: {
    source: '<Button size=\"lg\">Button</Button>'
  }
};
var Button_stories_smallSize = function smallSize() {
  return Object(esm["mdx"])(Button["a" /* default */], {
    size: "sm"
  }, "Button");
};
Button_stories_smallSize.displayName = "smallSize";
Button_stories_smallSize.storyName = 'Small size';
Button_stories_smallSize.parameters = {
  storySource: {
    source: '<Button size=\"sm\">Button</Button>'
  }
};
var Button_stories_block = function block() {
  return Object(esm["mdx"])(Button["a" /* default */], {
    block: true
  }, "Button");
};
Button_stories_block.displayName = "block";
Button_stories_block.storyName = 'Block';
Button_stories_block.parameters = {
  storySource: {
    source: '<Button block>Button</Button>'
  }
};
var Button_stories_disabled = function disabled() {
  return Object(esm["mdx"])(Button["a" /* default */], {
    disabled: true
  }, "Button");
};
Button_stories_disabled.displayName = "disabled";
Button_stories_disabled.storyName = 'Disabled';
Button_stories_disabled.parameters = {
  storySource: {
    source: '<Button disabled>Button</Button>'
  }
};
var Button_stories_withIconBefore = function withIconBefore() {
  return Object(esm["mdx"])(Button["a" /* default */], {
    Icon: baseTheme["a" /* default */].global.placeholder
  }, "Button");
};
Button_stories_withIconBefore.displayName = "withIconBefore";
Button_stories_withIconBefore.storyName = 'With icon (before)';
Button_stories_withIconBefore.parameters = {
  storySource: {
    source: '<Button Icon={baseTheme.global.placeholder}>Button</Button>'
  }
};
var Button_stories_withIconAfter = function withIconAfter() {
  return Object(esm["mdx"])(Button["a" /* default */], {
    Icon: baseTheme["a" /* default */].global.placeholder,
    iconAfter: true
  }, "Button");
};
Button_stories_withIconAfter.displayName = "withIconAfter";
Button_stories_withIconAfter.storyName = 'With icon (after)';
Button_stories_withIconAfter.parameters = {
  storySource: {
    source: '<Button Icon={baseTheme.global.placeholder} iconAfter>\n            Button\n        </Button>'
  }
};
var Button_stories_hiddenMode = function hiddenMode() {
  return Object(esm["mdx"])(Button["a" /* default */], {
    Icon: baseTheme["a" /* default */].global.placeholder,
    hidden: true
  }, "Button");
};
Button_stories_hiddenMode.displayName = "hiddenMode";
Button_stories_hiddenMode.storyName = 'Hidden mode';
Button_stories_hiddenMode.parameters = {
  storySource: {
    source: '<Button Icon={baseTheme.global.placeholder} hidden>\n            Button\n        </Button>'
  }
};
var Button_stories_link = function link() {
  return Object(esm["mdx"])(Button["a" /* default */], {
    as: "a",
    href: "http://greensight.pro"
  }, "Button");
};
Button_stories_link.displayName = "link";
Button_stories_link.storyName = 'Link';
Button_stories_link.parameters = {
  storySource: {
    source: '<Button as=\"a\" href=\"http://greensight.pro\">\n            Button\n        </Button>'
  }
};
var Button_stories_externalLink = function externalLink() {
  return Object(esm["mdx"])(Button["a" /* default */], {
    as: "a",
    href: "http://greensight.pro",
    external: true
  }, "Button");
};
Button_stories_externalLink.displayName = "externalLink";
Button_stories_externalLink.storyName = 'External link';
Button_stories_externalLink.parameters = {
  storySource: {
    source: '<Button as=\"a\" href=\"http://greensight.pro\" external>\n            Button\n        </Button>'
  }
};
var Button_stories_multilineModeBr = function multilineModeBr() {
  return Object(esm["mdx"])(Button["a" /* default */], null, "Multiline", Object(esm["mdx"])("br", null), "button");
};
Button_stories_multilineModeBr.displayName = "multilineModeBr";
Button_stories_multilineModeBr.storyName = 'Multiline mode (br)';
Button_stories_multilineModeBr.parameters = {
  storySource: {
    source: '<Button>\n            Multiline\n            <br />\n            button\n        </Button>'
  }
};
var Button_stories_multilineModeFixedWidth = function multilineModeFixedWidth() {
  return Object(esm["mdx"])(Button["a" /* default */], {
    css: {
      width: Object(scale["a" /* default */])(14)
    }
  }, "Multiline button");
};
Button_stories_multilineModeFixedWidth.displayName = "multilineModeFixedWidth";
Button_stories_multilineModeFixedWidth.storyName = 'Multiline mode (fixed width)';
Button_stories_multilineModeFixedWidth.parameters = {
  storySource: {
    source: '<Button css={{\n  width: scale(14)\n}}>Multiline button</Button>'
  }
};
var componentMeta = {
  title: 'Components / Button',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Udf9B3n8wEoykSGFhhrU0J/Greensight-DS?node-id=1608%3A0'
    }
  },
  decorators: [decorators_centeredDecorator],
  component: Button["a" /* default */],
  includeStories: ["knobs", "basic", "secondaryTheme", "largeSize", "smallSize", "block", "disabled", "withIconBefore", "withIconAfter", "hiddenMode", "link", "externalLink", "multilineModeBr", "multilineModeFixedWidth"]
};
var mdxStoryNameToKey = {
  "Knobs": "knobs",
  "Basic": "basic",
  "Secondary theme": "secondaryTheme",
  "Large size": "largeSize",
  "Small size": "smallSize",
  "Block": "block",
  "Disabled": "disabled",
  "With icon (before)": "withIconBefore",
  "With icon (after)": "withIconAfter",
  "Hidden mode": "hiddenMode",
  "Link": "link",
  "External link": "externalLink",
  "Multiline mode (br)": "multilineModeBr",
  "Multiline mode (fixed width)": "multilineModeFixedWidth"
};
componentMeta.parameters = componentMeta.parameters || {};
componentMeta.parameters.docs = Object.assign({}, componentMeta.parameters.docs || {}, {
  page: function page() {
    return Object(esm["mdx"])(blocks["AddContext"], {
      mdxStoryNameToKey: mdxStoryNameToKey,
      mdxComponentMeta: componentMeta
    }, Object(esm["mdx"])(MDXContent, null));
  }
});
/* harmony default export */ var Button_stories = __webpack_exports__["default"] = (componentMeta);

/***/ }),

/***/ 1177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "basic", function() { return /* binding */ ColorsAutokit_stories_basic; });

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__(11);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(5);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(6);

// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.0-ac51e3f61d-2.zip/node_modules/react/index.js
var react = __webpack_require__(1);

// EXTERNAL MODULE: ./.yarn/$$virtual/@mdx-js-react-virtual-8208367119/0/cache/@mdx-js-react-npm-1.6.22-57e4c05c2b-2.zip/node_modules/@mdx-js/react/dist/esm.js
var esm = __webpack_require__(0);

// EXTERNAL MODULE: ./.yarn/$$virtual/@storybook-addon-docs-virtual-45dd9fae32/0/cache/@storybook-addon-docs-npm-6.1.11-e93c9ca8c3-2.zip/node_modules/@storybook/addon-docs/blocks.js
var blocks = __webpack_require__(2);

// EXTERNAL MODULE: ./.storybook/decorators/paddingDecorator.tsx
var paddingDecorator = __webpack_require__(55);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(19);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(7);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(44);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__(40);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(12);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.define-properties.js
var es_object_define_properties = __webpack_require__(34);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.define-property.js
var es_object_define_property = __webpack_require__(37);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(76);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__(77);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(41);

// EXTERNAL MODULE: ./.yarn/cache/@emotion-css-npm-10.0.27-3fd4a0c157-2.zip/node_modules/@emotion/css/dist/css.browser.esm.js
var css_browser_esm = __webpack_require__(14);

// EXTERNAL MODULE: ./src/utils/baseTheme.ts + 1 modules
var baseTheme = __webpack_require__(21);

// EXTERNAL MODULE: ./src/utils/scale.ts
var scale = __webpack_require__(4);

// EXTERNAL MODULE: ./src/helpers/Tooltip.tsx + 1 modules
var Tooltip = __webpack_require__(125);

// EXTERNAL MODULE: ./src/helpers/typography.ts
var typography = __webpack_require__(36);

// EXTERNAL MODULE: ./src/helpers/copyToClipboard.ts
var copyToClipboard = __webpack_require__(124);

// EXTERNAL MODULE: ./.yarn/$$virtual/@emotion-core-virtual-9244315116/0/cache/@emotion-core-npm-10.1.1-f084e0eeac-2.zip/node_modules/@emotion/core/dist/core.browser.esm.js + 4 modules
var core_browser_esm = __webpack_require__(3);

// CONCATENATED MODULE: ./src/autokits/ColorsAutokit/Color.tsx












function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}









var Color_Color = function Color(_ref) {
  var name = _ref.name,
      value = _ref.value;
  var colors = baseTheme["a" /* default */].colors;
  var buttonRef = Object(react["useRef"])(null);

  var markCss = _objectSpread({
    backgroundColor: colors.white,
    color: colors.grey0,
    padding: Object(scale["a" /* default */])(1),
    borderRadius: '4px 4px 4px 0px'
  }, Object(typography["a" /* default */])('smallBold'));

  return Object(core_browser_esm["jsx"])(Tooltip["a" /* default */], {
    content: "Variable name is copied to the clipboard"
  }, Object(core_browser_esm["jsx"])("button", {
    ref: buttonRef,
    type: "button",
    onClick: function onClick() {
      return Object(copyToClipboard["a" /* default */])("colors.".concat(name), buttonRef);
    },
    css:
    /*#__PURE__*/

    /*#__PURE__*/
    Object(css_browser_esm["a" /* default */])({
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'flex-start',
      width: '100%',
      height: Object(scale["a" /* default */])(28),
      padding: Object(scale["a" /* default */])(1),
      backgroundColor: value,
      borderRadius: '24px 24px 24px 0px',
      transition: 'box-shadow ease 300ms',
      ':focus.focus-visible': {
        outline: 'none',
        boxShadow: "0 0 0 2px ".concat(colors.grey0)
      }
    },  true ? "" : undefined, ";label:css;" + ( true ? "" : undefined))
  }, Object(core_browser_esm["jsx"])("span", {
    css:
    /*#__PURE__*/

    /*#__PURE__*/
    Object(css_browser_esm["a" /* default */])(_objectSpread(_objectSpread({}, markCss), {}, {
      marginBottom: Object(scale["a" /* default */])(1)
    }),  true ? "" : undefined, ";label:css;" + ( true ? "" : undefined))
  }, value), Object(core_browser_esm["jsx"])("span", {
    css: markCss
  }, name)));
};

/* harmony default export */ var ColorsAutokit_Color = (Color_Color);

try {
  // @ts-ignore
  Color_Color.displayName = "Color"; // @ts-ignore

  Color_Color.__docgenInfo = {
    "description": "",
    "displayName": "Color",
    "props": {
      "name": {
        "defaultValue": null,
        "description": "Color variable name.",
        "name": "name",
        "required": true,
        "type": {
          "name": "string"
        }
      },
      "value": {
        "defaultValue": null,
        "description": "Color value.",
        "name": "value",
        "required": true,
        "type": {
          "name": "string"
        }
      }
    }
  }; // @ts-ignore

  if (typeof STORYBOOK_REACT_CLASSES !== "undefined") // @ts-ignore
    STORYBOOK_REACT_CLASSES["src/autokits/ColorsAutokit/Color.tsx#Color"] = {
      docgenInfo: Color_Color.__docgenInfo,
      name: "Color",
      path: "src/autokits/ColorsAutokit/Color.tsx#Color"
    };
} catch (__react_docgen_typescript_loader_error) {}
// EXTERNAL MODULE: ./src/components/Layout/index.tsx + 3 modules
var Layout = __webpack_require__(13);

// EXTERNAL MODULE: ./src/utils/useTheme.ts
var useTheme = __webpack_require__(52);

// CONCATENATED MODULE: ./src/autokits/ColorsAutokit/index.tsx







/**
 * Autokit for colors tokens `theme.colors`.
 */



var ColorsAutokit_ColorsAutokit = function ColorsAutokit() {
  var theme = Object(useTheme["a" /* default */])();
  var colors = theme.colors;
  if (!colors) return Object(core_browser_esm["jsx"])("div", {
    css: Object(typography["a" /* default */])('body')
  }, Object(core_browser_esm["jsx"])("span", {
    role: "img",
    "aria-label": "Error"
  }, "\u26D4\uFE0F"), ' ', "Colors are not defined. Use tokens or add ", Object(core_browser_esm["jsx"])("strong", null, "colors"), " property in theme settings manually");
  return Object(core_browser_esm["jsx"])(Layout["a" /* default */], {
    auto: Object(scale["a" /* default */])(20),
    gap: Object(scale["a" /* default */])(8)
  }, Object.keys(colors).map(function (name) {
    return Object(core_browser_esm["jsx"])(Layout["a" /* default */].Item, {
      key: name
    }, Object(core_browser_esm["jsx"])(ColorsAutokit_Color, {
      name: name,
      value: colors[name]
    }));
  }));
};

/* harmony default export */ var autokits_ColorsAutokit = (ColorsAutokit_ColorsAutokit);

try {
  // @ts-ignore
  ColorsAutokit_ColorsAutokit.displayName = "ColorsAutokit"; // @ts-ignore

  ColorsAutokit_ColorsAutokit.__docgenInfo = {
    "description": "Autokit for colors tokens `theme.colors`.",
    "displayName": "ColorsAutokit",
    "props": {}
  }; // @ts-ignore

  if (typeof STORYBOOK_REACT_CLASSES !== "undefined") // @ts-ignore
    STORYBOOK_REACT_CLASSES["src/autokits/ColorsAutokit/index.tsx#ColorsAutokit"] = {
      docgenInfo: ColorsAutokit_ColorsAutokit.__docgenInfo,
      name: "ColorsAutokit",
      path: "src/autokits/ColorsAutokit/index.tsx#ColorsAutokit"
    };
} catch (__react_docgen_typescript_loader_error) {}
// CONCATENATED MODULE: ./src/autokits/ColorsAutokit/ColorsAutokit.stories.mdx




function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsxRuntime classic */

/* @jsx mdx */





var layoutProps = {};
var MDXLayout = "wrapper";

function MDXContent(_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(esm["mdx"])(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(esm["mdx"])(blocks["Meta"], {
    title: "Autokits / ColorsAutokit",
    component: autokits_ColorsAutokit,
    decorators: [paddingDecorator["a" /* default */]],
    parameters: {
      design: {
        type: 'figma',
        url: 'https://www.figma.com/file/Udf9B3n8wEoykSGFhhrU0J/Greensight-DS?node-id=1330%3A2'
      }
    },
    mdxType: "Meta"
  }), Object(esm["mdx"])("h1", {
    "id": "colors"
  }, "Colors"), Object(esm["mdx"])(blocks["Preview"], {
    mdxType: "Preview"
  }, Object(esm["mdx"])(blocks["Story"], {
    name: "basic",
    mdxType: "Story"
  }, Object(esm["mdx"])(autokits_ColorsAutokit, {
    mdxType: "ColorsAutokit"
  }))), Object(esm["mdx"])("p", null, "\u0410\u0432\u0442\u043E\u043A\u0438\u0442 \u0434\u043B\u044F \u0446\u0432\u0435\u0442\u043E\u0432 \u043F\u0440\u043E\u0435\u043A\u0442\u0430. \u0427\u0438\u0442\u0430\u0435\u0442 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435 \u043F\u043E\u043B\u044F ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "colors"), " \u043E\u0431\u044A\u0435\u043A\u0442\u0430 \u0442\u0435\u043C\u044B."));
}

MDXContent.displayName = "MDXContent";
;
MDXContent.isMDXComponent = true;
var ColorsAutokit_stories_basic = function basic() {
  return Object(esm["mdx"])(autokits_ColorsAutokit, null);
};
ColorsAutokit_stories_basic.displayName = "basic";
ColorsAutokit_stories_basic.storyName = 'basic';
ColorsAutokit_stories_basic.parameters = {
  storySource: {
    source: '<ColorsAutokit />'
  }
};
var componentMeta = {
  title: 'Autokits / ColorsAutokit',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Udf9B3n8wEoykSGFhhrU0J/Greensight-DS?node-id=1330%3A2'
    }
  },
  decorators: [paddingDecorator["a" /* default */]],
  component: autokits_ColorsAutokit,
  includeStories: ["basic"]
};
var mdxStoryNameToKey = {
  "basic": "basic"
};
componentMeta.parameters = componentMeta.parameters || {};
componentMeta.parameters.docs = Object.assign({}, componentMeta.parameters.docs || {}, {
  page: function page() {
    return Object(esm["mdx"])(blocks["AddContext"], {
      mdxStoryNameToKey: mdxStoryNameToKey,
      mdxComponentMeta: componentMeta
    }, Object(esm["mdx"])(MDXContent, null));
  }
});
/* harmony default export */ var ColorsAutokit_stories = __webpack_exports__["default"] = (componentMeta);

/***/ }),

/***/ 1178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "basic", function() { return /* binding */ IconsAutokit_stories_basic; });

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__(11);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(5);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(6);

// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.0-ac51e3f61d-2.zip/node_modules/react/index.js
var react = __webpack_require__(1);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./.yarn/$$virtual/@mdx-js-react-virtual-8208367119/0/cache/@mdx-js-react-npm-1.6.22-57e4c05c2b-2.zip/node_modules/@mdx-js/react/dist/esm.js
var esm = __webpack_require__(0);

// EXTERNAL MODULE: ./.yarn/$$virtual/@storybook-addon-docs-virtual-45dd9fae32/0/cache/@storybook-addon-docs-npm-6.1.11-e93c9ca8c3-2.zip/node_modules/@storybook/addon-docs/blocks.js
var blocks = __webpack_require__(2);

// EXTERNAL MODULE: ./.storybook/decorators/paddingDecorator.tsx
var paddingDecorator = __webpack_require__(55);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(7);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(16);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__(31);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(44);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__(40);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__(33);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.is-array.js
var es_array_is_array = __webpack_require__(22);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(24);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(19);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__(73);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.reduce-right.js
var es_array_reduce_right = __webpack_require__(1160);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(17);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.date.to-string.js
var es_date_to_string = __webpack_require__(29);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(12);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.define-properties.js
var es_object_define_properties = __webpack_require__(34);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.define-property.js
var es_object_define_property = __webpack_require__(37);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.entries.js
var es_object_entries = __webpack_require__(67);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(76);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__(77);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(15);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(35);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(30);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(25);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__(108);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__(74);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(41);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(28);

// EXTERNAL MODULE: ./.yarn/cache/@emotion-css-npm-10.0.27-3fd4a0c157-2.zip/node_modules/@emotion/css/dist/css.browser.esm.js
var css_browser_esm = __webpack_require__(14);

// EXTERNAL MODULE: ./.yarn/cache/deepmerge-npm-4.2.2-112165ced2-2.zip/node_modules/deepmerge/dist/cjs.js
var cjs = __webpack_require__(235);
var cjs_default = /*#__PURE__*/__webpack_require__.n(cjs);

// EXTERNAL MODULE: ./src/utils/scale.ts
var scale = __webpack_require__(4);

// EXTERNAL MODULE: ./src/utils/baseTheme.ts + 1 modules
var baseTheme = __webpack_require__(21);

// EXTERNAL MODULE: ./src/helpers/Tooltip.tsx + 1 modules
var Tooltip = __webpack_require__(125);

// EXTERNAL MODULE: ./src/helpers/typography.ts
var typography = __webpack_require__(36);

// EXTERNAL MODULE: ./src/helpers/copyToClipboard.ts
var copyToClipboard = __webpack_require__(124);

// EXTERNAL MODULE: ./.yarn/$$virtual/@emotion-core-virtual-9244315116/0/cache/@emotion-core-npm-10.1.1-f084e0eeac-2.zip/node_modules/@emotion/core/dist/core.browser.esm.js + 4 modules
var core_browser_esm = __webpack_require__(3);

// CONCATENATED MODULE: ./src/autokits/IconsAutokit/Icon.tsx












function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}









var Icon_Icon = function Icon(_ref) {
  var name = _ref.name,
      Component = _ref.Component,
      path = _ref.path;
  var colors = baseTheme["a" /* default */].colors;
  var buttonRef = Object(react["useRef"])(null);
  return Object(core_browser_esm["jsx"])(Tooltip["a" /* default */], {
    content: "Path to icon is copied to the clipboard"
  }, Object(core_browser_esm["jsx"])("button", {
    ref: buttonRef,
    type: "button",
    css:
    /*#__PURE__*/

    /*#__PURE__*/
    Object(css_browser_esm["a" /* default */])(_objectSpread(_objectSpread({
      width: '100%',
      height: '100%',
      padding: Object(scale["a" /* default */])(2),
      border: "2px solid ".concat(colors.grey70),
      borderRadius: 4
    }, Object(typography["a" /* default */])('bodyBold')), {}, {
      textAlign: 'center',
      color: colors.black,
      transition: 'border-color ease 300ms',
      ':hover, :focus.focus-visible': {
        borderColor: colors.grey0,
        outline: 'none'
      }
    }),  true ? "" : undefined, ";label:css;" + ( true ? "" : undefined)),
    onClick: function onClick() {
      return Object(copyToClipboard["a" /* default */])(path);
    }
  }, Object(core_browser_esm["jsx"])(Component, {
    css:
    /*#__PURE__*/

    /*#__PURE__*/
    Object(css_browser_esm["a" /* default */])({
      marginBottom: Object(scale["a" /* default */])(1)
    },  true ? "" : undefined, ";label:css;" + ( true ? "" : undefined))
  }), Object(core_browser_esm["jsx"])("div", null, name)));
};

/* harmony default export */ var IconsAutokit_Icon = (Icon_Icon);

try {
  // @ts-ignore
  Icon_Icon.displayName = "Icon"; // @ts-ignore

  Icon_Icon.__docgenInfo = {
    "description": "",
    "displayName": "Icon",
    "props": {
      "name": {
        "defaultValue": null,
        "description": "Icon variable name.",
        "name": "name",
        "required": true,
        "type": {
          "name": "string"
        }
      },
      "Component": {
        "defaultValue": null,
        "description": "Icon component.",
        "name": "Component",
        "required": true,
        "type": {
          "name": "FC<SVGProps<SVGSVGElement> & { title?: string | undefined; }>"
        }
      },
      "path": {
        "defaultValue": null,
        "description": "Path to icon from icons directory.",
        "name": "path",
        "required": true,
        "type": {
          "name": "string"
        }
      }
    }
  }; // @ts-ignore

  if (typeof STORYBOOK_REACT_CLASSES !== "undefined") // @ts-ignore
    STORYBOOK_REACT_CLASSES["src/autokits/IconsAutokit/Icon.tsx#Icon"] = {
      docgenInfo: Icon_Icon.__docgenInfo,
      name: "Icon",
      path: "src/autokits/IconsAutokit/Icon.tsx#Icon"
    };
} catch (__react_docgen_typescript_loader_error) {}
// EXTERNAL MODULE: ./src/components/Layout/index.tsx + 3 modules
var Layout = __webpack_require__(13);

// CONCATENATED MODULE: ./src/autokits/IconsAutokit/index.tsx






























function IconsAutokit_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function IconsAutokit_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      IconsAutokit_ownKeys(Object(source), true).forEach(function (key) {
        IconsAutokit_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      IconsAutokit_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function IconsAutokit_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}








/**
 * Autokit for icons assets from `@icons` directory.
 */

var IconsAutokit_IconsAutokit = function IconsAutokit(_ref) {
  var _ref$headingLevel = _ref.headingLevel,
      headingLevel = _ref$headingLevel === void 0 ? 2 : _ref$headingLevel;

  var iconsReq = __webpack_require__(1161);

  var icons = iconsReq.keys().reduce(function (acc, name) {
    var matchRes = name.match(/\.\/(.+)\.svg$/);
    var fullPath = "@icons".concat(matchRes === null || matchRes === void 0 ? void 0 : matchRes[0].slice(1));
    var formattedName = matchRes === null || matchRes === void 0 ? void 0 : matchRes[1];
    var nameParts = formattedName === null || formattedName === void 0 ? void 0 : formattedName.split('/');
    var obj = nameParts === null || nameParts === void 0 ? void 0 : nameParts.reduceRight(function (acc, part, index) {
      var value = index === (nameParts === null || nameParts === void 0 ? void 0 : nameParts.length) - 1 ? {
        Component: iconsReq(name)["default"],
        path: fullPath
      } : acc;
      return IconsAutokit_defineProperty({}, part, value);
    }, {});
    return cjs_default()(acc, obj || {});
  }, {});

  function mapIcons(icons, level) {
    var simpleItems = Object.entries(icons).filter(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
          value = _ref4[1];

      return value.Component;
    });
    var complexItems = Object.entries(icons).filter(function (_ref5) {
      var _ref6 = _slicedToArray(_ref5, 2),
          value = _ref6[1];

      return !value.Component;
    });
    var Heading = "h".concat(level);
    return Object(core_browser_esm["jsx"])(react_default.a.Fragment, null, !!simpleItems.length && Object(core_browser_esm["jsx"])(Layout["a" /* default */], {
      auto: Object(scale["a" /* default */])(18),
      gap: Object(scale["a" /* default */])(2),
      css:
      /*#__PURE__*/

      /*#__PURE__*/
      Object(css_browser_esm["a" /* default */])({
        marginBottom: Object(scale["a" /* default */])(2)
      },  true ? "" : undefined, ";label:css;" + ( true ? "" : undefined))
    }, simpleItems.map(function (_ref7) {
      var _ref8 = _slicedToArray(_ref7, 2),
          name = _ref8[0],
          value = _ref8[1];

      return Object(core_browser_esm["jsx"])(Layout["a" /* default */].Item, {
        key: name
      }, Object(core_browser_esm["jsx"])(IconsAutokit_Icon, {
        name: name,
        Component: value.Component,
        path: value.path
      }));
    })), !!complexItems.length && complexItems.map(function (_ref9) {
      var _ref10 = _slicedToArray(_ref9, 2),
          name = _ref10[0],
          value = _ref10[1];

      return Object(core_browser_esm["jsx"])(react_default.a.Fragment, {
        key: name
      }, Object(core_browser_esm["jsx"])(Heading, {
        css:
        /*#__PURE__*/

        /*#__PURE__*/
        Object(css_browser_esm["a" /* default */])({
          marginBottom: Object(scale["a" /* default */])(2)
        },  true ? "" : undefined, ";label:css;" + ( true ? "" : undefined))
      }, name), mapIcons(value, level + 1));
    }));
  }

  return Object(core_browser_esm["jsx"])("div", {
    css:
    /*#__PURE__*/

    /*#__PURE__*/
    Object(css_browser_esm["a" /* default */])(IconsAutokit_objectSpread(IconsAutokit_objectSpread({}, Object(typography["a" /* default */])('body')), {}, {
      paddingTop: Object(scale["a" /* default */])(2)
    }),  true ? "" : undefined, ";label:css;" + ( true ? "" : undefined))
  }, mapIcons(icons, headingLevel));
};

/* harmony default export */ var autokits_IconsAutokit = (IconsAutokit_IconsAutokit);

try {
  // @ts-ignore
  IconsAutokit_IconsAutokit.displayName = "IconsAutokit"; // @ts-ignore

  IconsAutokit_IconsAutokit.__docgenInfo = {
    "description": "Autokit for icons assets from `@icons` directory.",
    "displayName": "IconsAutokit",
    "props": {
      "headingLevel": {
        "defaultValue": {
          value: 2
        },
        "description": "Starting heading level.",
        "name": "headingLevel",
        "required": false,
        "type": {
          "name": "number | undefined"
        }
      }
    }
  }; // @ts-ignore

  if (typeof STORYBOOK_REACT_CLASSES !== "undefined") // @ts-ignore
    STORYBOOK_REACT_CLASSES["src/autokits/IconsAutokit/index.tsx#IconsAutokit"] = {
      docgenInfo: IconsAutokit_IconsAutokit.__docgenInfo,
      name: "IconsAutokit",
      path: "src/autokits/IconsAutokit/index.tsx#IconsAutokit"
    };
} catch (__react_docgen_typescript_loader_error) {}
// CONCATENATED MODULE: ./src/autokits/IconsAutokit/IconsAutokit.stories.mdx




function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsxRuntime classic */

/* @jsx mdx */





var layoutProps = {};
var MDXLayout = "wrapper";

function MDXContent(_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(esm["mdx"])(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(esm["mdx"])(blocks["Meta"], {
    title: "Autokits / IconsAutokit",
    component: autokits_IconsAutokit,
    decorators: [paddingDecorator["a" /* default */]],
    parameters: {
      design: {
        type: 'figma',
        url: 'https://www.figma.com/file/Udf9B3n8wEoykSGFhhrU0J/Greensight-DS?node-id=1491%3A0'
      }
    },
    mdxType: "Meta"
  }), Object(esm["mdx"])("h1", {
    "id": "icons"
  }, "Icons"), Object(esm["mdx"])(blocks["Preview"], {
    mdxType: "Preview"
  }, Object(esm["mdx"])(blocks["Story"], {
    name: "basic",
    mdxType: "Story"
  }, Object(esm["mdx"])(autokits_IconsAutokit, {
    mdxType: "IconsAutokit"
  }))), Object(esm["mdx"])("p", null, "\u0410\u0432\u0442\u043E\u043A\u0438\u0442 \u0434\u043B\u044F \u0438\u043A\u043E\u043D\u043E\u043A \u043F\u0440\u043E\u0435\u043A\u0442\u0430. \u0427\u0438\u0442\u0430\u0435\u0442 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435 \u043F\u043E\u043B\u044F ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "icons"), " \u043E\u0431\u044A\u0435\u043A\u0442\u0430 \u0442\u0435\u043C\u044B."), Object(esm["mdx"])("p", null, "\u042D\u0442\u043E\u0442 \u0430\u0432\u0442\u043E\u043A\u0438\u0442 \u043E\u0442\u043B\u0438\u0447\u0430\u0435\u0442\u0441\u044F \u043E\u0442 \u043E\u0441\u0442\u0430\u043B\u044C\u043D\u044B\u0445, \u0442.\u043A. \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0441 \u0444\u0430\u0439\u043B\u043E\u0432\u043E\u0439 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u043E\u0439. \u041E\u043D \u043E\u0436\u0438\u0434\u0430\u0435\u0442 \u0443\u0432\u0438\u0434\u0435\u0442\u044C \u043F\u0443\u0442\u044C \u0434\u043E \u0438\u043A\u043E\u043D\u043A\u0438 \u0432 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u043E\u043A\u0440\u0443\u0436\u0435\u043D\u0438\u044F ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "process.env.ICONS_DIR"), " \u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 svgr-webpack \u0434\u043B\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0438\u043A\u043E\u043D\u043E\u043A, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D \u043D\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u043F\u0430\u043A\u0435\u0442\u0430."), Object(esm["mdx"])("p", null, "\u041F\u0440\u0438\u043C\u0435\u0440 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u043E\u043A\u0440\u0443\u0436\u0435\u043D\u0438\u044F \u0447\u0435\u0440\u0435\u0437 webpack:"), Object(esm["mdx"])("pre", null, Object(esm["mdx"])("code", _extends({
    parentName: "pre"
  }, {
    "className": "language-js"
  }), "new webpack.EnvironmentPlugin({ ICONS_DIR: '../../images/icons' }),\n")), Object(esm["mdx"])("p", null, "\uD83D\uDCAC \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C GDS, \u043D\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F \u044D\u0442\u043E\u0442 \u0430\u0432\u0442\u043E\u043A\u0438\u0442, webpack \u0438 svgr. \u041F\u0440\u043E\u0441\u0442\u043E \u043D\u0430 \u0441\u0431\u043E\u0440\u043A\u0435 \u0442\u043E\u0433\u0434\u0430 \u043F\u043E\u044F\u0432\u0438\u0442\u0441\u044F warning. \u0412\u0435\u0440\u043E\u044F\u0442\u043D\u043E \u0443 \u044D\u0442\u043E\u0433\u043E \u043C\u043E\u0434\u0443\u043B\u044F \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0431\u043E\u043B\u0435\u0435 \u044D\u043B\u0435\u0433\u0430\u043D\u0442\u043D\u043E\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u043F\u043E \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0435 \u2013 \u043C\u044B \u043E\u0442\u043A\u0440\u044B\u0442\u044B \u0434\u043B\u044F pull request."), Object(esm["mdx"])("h2", {
    "id": "props"
  }, "Props"), Object(esm["mdx"])(blocks["Props"], {
    of: autokits_IconsAutokit,
    mdxType: "Props"
  }));
}

MDXContent.displayName = "MDXContent";
;
MDXContent.isMDXComponent = true;
var IconsAutokit_stories_basic = function basic() {
  return Object(esm["mdx"])(autokits_IconsAutokit, null);
};
IconsAutokit_stories_basic.displayName = "basic";
IconsAutokit_stories_basic.storyName = 'basic';
IconsAutokit_stories_basic.parameters = {
  storySource: {
    source: '<IconsAutokit />'
  }
};
var componentMeta = {
  title: 'Autokits / IconsAutokit',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Udf9B3n8wEoykSGFhhrU0J/Greensight-DS?node-id=1491%3A0'
    }
  },
  decorators: [paddingDecorator["a" /* default */]],
  component: autokits_IconsAutokit,
  includeStories: ["basic"]
};
var mdxStoryNameToKey = {
  "basic": "basic"
};
componentMeta.parameters = componentMeta.parameters || {};
componentMeta.parameters.docs = Object.assign({}, componentMeta.parameters.docs || {}, {
  page: function page() {
    return Object(esm["mdx"])(blocks["AddContext"], {
      mdxStoryNameToKey: mdxStoryNameToKey,
      mdxComponentMeta: componentMeta
    }, Object(esm["mdx"])(MDXContent, null));
  }
});
/* harmony default export */ var IconsAutokit_stories = __webpack_exports__["default"] = (componentMeta);

/***/ }),

/***/ 1179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "basic", function() { return /* binding */ LayoutAutokit_stories_basic; });

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__(11);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(5);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(6);

// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.0-ac51e3f61d-2.zip/node_modules/react/index.js
var react = __webpack_require__(1);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./.yarn/$$virtual/@mdx-js-react-virtual-8208367119/0/cache/@mdx-js-react-npm-1.6.22-57e4c05c2b-2.zip/node_modules/@mdx-js/react/dist/esm.js
var esm = __webpack_require__(0);

// EXTERNAL MODULE: ./.yarn/$$virtual/@storybook-addon-docs-virtual-45dd9fae32/0/cache/@storybook-addon-docs-npm-6.1.11-e93c9ca8c3-2.zip/node_modules/@storybook/addon-docs/blocks.js
var blocks = __webpack_require__(2);

// EXTERNAL MODULE: ./.storybook/decorators/paddingDecorator.tsx
var paddingDecorator = __webpack_require__(55);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(7);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(16);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__(31);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__(33);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.is-array.js
var es_array_is_array = __webpack_require__(22);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(24);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(19);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(17);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.date.to-string.js
var es_date_to_string = __webpack_require__(29);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(12);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.entries.js
var es_object_entries = __webpack_require__(67);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(15);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(30);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(25);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(28);

// EXTERNAL MODULE: ./.yarn/cache/@emotion-css-npm-10.0.27-3fd4a0c157-2.zip/node_modules/@emotion/css/dist/css.browser.esm.js
var css_browser_esm = __webpack_require__(14);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.fill.js
var es_array_fill = __webpack_require__(509);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(44);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__(40);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.reverse.js
var es_array_reverse = __webpack_require__(510);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.some.js
var es_array_some = __webpack_require__(334);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.define-properties.js
var es_object_define_properties = __webpack_require__(34);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.define-property.js
var es_object_define_property = __webpack_require__(37);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(76);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__(77);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(41);

// EXTERNAL MODULE: ./src/components/Layout/index.tsx + 3 modules
var Layout = __webpack_require__(13);

// EXTERNAL MODULE: ./src/utils/useTheme.ts
var useTheme = __webpack_require__(52);

// EXTERNAL MODULE: ./src/utils/scale.ts
var scale = __webpack_require__(4);

// EXTERNAL MODULE: ./src/utils/baseTheme.ts + 1 modules
var baseTheme = __webpack_require__(21);

// EXTERNAL MODULE: ./src/helpers/typography.ts
var typography = __webpack_require__(36);

// EXTERNAL MODULE: ./src/helpers/constants.ts
var constants = __webpack_require__(78);

// EXTERNAL MODULE: ./.yarn/$$virtual/@emotion-core-virtual-9244315116/0/cache/@emotion-core-npm-10.1.1-f084e0eeac-2.zip/node_modules/@emotion/core/dist/core.browser.esm.js + 4 modules
var core_browser_esm = __webpack_require__(3);

// CONCATENATED MODULE: ./src/autokits/LayoutAutokit/Item.tsx

















function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}










var Item_Item = function Item(_ref) {
  var breakpointName = _ref.breakpointName,
      breakpointValue = _ref.breakpointValue;
  var colors = baseTheme["a" /* default */].colors;
  var theme = Object(useTheme["a" /* default */])();
  var layout = theme.layout;
  var cols = Item_getLayoutValue(layout.cols, breakpointName);
  var gap = Item_getLayoutValue(layout.gap, breakpointName);
  var container = Item_getLayoutValue(layout.container, breakpointName);
  var marginLeft = Item_getLayoutValue(layout.marginLeft, breakpointName);
  var marginRight = Item_getLayoutValue(layout.marginRight, breakpointName);
  var padding = Item_getLayoutValue(layout.padding, breakpointName);

  var layoutItemCss = _objectSpread(_objectSpread({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }, Object(typography["a" /* default */])('small')), {}, {
    color: colors.grey0
  });

  var paddingCss = _objectSpread(_objectSpread({}, layoutItemCss), {}, {
    backgroundColor: colors.tagHit,
    width: container !== 'none' ? (breakpointValue - container) / 2 : padding
  });

  var colCss = _objectSpread(_objectSpread({}, layoutItemCss), {}, {
    backgroundColor: colors.grey90,
    width: container !== 'none' ? (container + gap) / cols - gap : (breakpointValue - padding * 2 + gap) / cols - gap
  });

  var gapCss = _objectSpread(_objectSpread({}, layoutItemCss), {}, {
    backgroundColor: colors.warning,
    width: gap
  });

  return Object(core_browser_esm["jsx"])("div", null, Object(core_browser_esm["jsx"])("div", {
    css:
    /*#__PURE__*/

    /*#__PURE__*/
    Object(css_browser_esm["a" /* default */])(_objectSpread(_objectSpread({}, Object(typography["a" /* default */])('headline')), {}, {
      textAlign: 'center',
      marginBottom: Object(scale["a" /* default */])(2)
    }),  true ? "" : undefined, ";label:css;" + ( true ? "" : undefined))
  }, breakpointValue, " (", breakpointName, ")"), Object(core_browser_esm["jsx"])(Layout["a" /* default */], {
    type: "flex",
    wrap: false,
    gap: 0,
    justify: "center",
    css:
    /*#__PURE__*/

    /*#__PURE__*/
    Object(css_browser_esm["a" /* default */])({
      height: Object(scale["a" /* default */])(11)
    },  true ? "" : undefined, ";label:css;" + ( true ? "" : undefined))
  }, Object(core_browser_esm["jsx"])(Layout["a" /* default */].Item, {
    css: paddingCss
  }, marginLeft || padding), new Array(cols - 1).fill('').map(function (item, index) {
    return Object(core_browser_esm["jsx"])(react_default.a.Fragment, {
      key: index
    }, Object(core_browser_esm["jsx"])(Layout["a" /* default */].Item, {
      css: colCss
    }), Object(core_browser_esm["jsx"])(Layout["a" /* default */].Item, {
      css: gapCss
    }, gap));
  }), Object(core_browser_esm["jsx"])(Layout["a" /* default */].Item, {
    css: colCss
  }), Object(core_browser_esm["jsx"])(Layout["a" /* default */].Item, {
    css: paddingCss
  }, marginRight || padding)));
};

var Item_getLayoutValue = function getLayoutValue(param, name) {
  var breakpointsAbove = constants["a" /* BREAKPOINTS_NAMES */].slice(0, constants["a" /* BREAKPOINTS_NAMES */].indexOf(name) + 1);
  var value;
  breakpointsAbove.reverse().some(function (name) {
    if (param[name] === undefined) return false;
    value = param[name];
    return true;
  });
  return value;
};

/* harmony default export */ var LayoutAutokit_Item = (Item_Item);

try {
  // @ts-ignore
  Item_Item.displayName = "Item"; // @ts-ignore

  Item_Item.__docgenInfo = {
    "description": "",
    "displayName": "Item",
    "props": {
      "breakpointName": {
        "defaultValue": null,
        "description": "Breakpoint name.",
        "name": "breakpointName",
        "required": true,
        "type": {
          "name": "Breakpoint"
        }
      },
      "breakpointValue": {
        "defaultValue": null,
        "description": "Breakpoint value.",
        "name": "breakpointValue",
        "required": true,
        "type": {
          "name": "number"
        }
      }
    }
  }; // @ts-ignore

  if (typeof STORYBOOK_REACT_CLASSES !== "undefined") // @ts-ignore
    STORYBOOK_REACT_CLASSES["src/autokits/LayoutAutokit/Item.tsx#Item"] = {
      docgenInfo: Item_Item.__docgenInfo,
      name: "Item",
      path: "src/autokits/LayoutAutokit/Item.tsx#Item"
    };
} catch (__react_docgen_typescript_loader_error) {}
// CONCATENATED MODULE: ./src/autokits/LayoutAutokit/index.tsx

















function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}






/**
 * Autokit for layout tokens `theme.layout`.
 */

var LayoutAutokit_LayoutAutokit = function LayoutAutokit() {
  var theme = Object(useTheme["a" /* default */])();
  var layout = theme.layout;
  if (!layout) return Object(core_browser_esm["jsx"])("div", {
    css: Object(typography["a" /* default */])('body')
  }, Object(core_browser_esm["jsx"])("span", {
    role: "img",
    "aria-label": "Error"
  }, "\u26D4\uFE0F"), ' ', "Layout is not defined. Use tokens or add ", Object(core_browser_esm["jsx"])("strong", null, "layout"), " property in theme settings manually");
  return Object(core_browser_esm["jsx"])(Layout["a" /* default */], {
    type: "flex",
    direction: "column",
    align: "center"
  }, Object.entries(layout.breakpoints).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        name = _ref2[0],
        value = _ref2[1];

    return Object(core_browser_esm["jsx"])(Layout["a" /* default */].Item, {
      key: name,
      css:
      /*#__PURE__*/

      /*#__PURE__*/
      Object(css_browser_esm["a" /* default */])({
        width: value
      },  true ? "" : undefined, ";label:css;" + ( true ? "" : undefined))
    }, Object(core_browser_esm["jsx"])(LayoutAutokit_Item, {
      breakpointName: name,
      breakpointValue: value
    }));
  }));
};

/* harmony default export */ var autokits_LayoutAutokit = (LayoutAutokit_LayoutAutokit);

try {
  // @ts-ignore
  LayoutAutokit_LayoutAutokit.displayName = "LayoutAutokit"; // @ts-ignore

  LayoutAutokit_LayoutAutokit.__docgenInfo = {
    "description": "Autokit for layout tokens `theme.layout`.",
    "displayName": "LayoutAutokit",
    "props": {}
  }; // @ts-ignore

  if (typeof STORYBOOK_REACT_CLASSES !== "undefined") // @ts-ignore
    STORYBOOK_REACT_CLASSES["src/autokits/LayoutAutokit/index.tsx#LayoutAutokit"] = {
      docgenInfo: LayoutAutokit_LayoutAutokit.__docgenInfo,
      name: "LayoutAutokit",
      path: "src/autokits/LayoutAutokit/index.tsx#LayoutAutokit"
    };
} catch (__react_docgen_typescript_loader_error) {}
// CONCATENATED MODULE: ./src/autokits/LayoutAutokit/LayoutAutokit.stories.mdx




function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsxRuntime classic */

/* @jsx mdx */





var layoutProps = {};
var MDXLayout = "wrapper";

function MDXContent(_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(esm["mdx"])(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(esm["mdx"])(blocks["Meta"], {
    title: "Autokits / LayoutAutokit",
    component: autokits_LayoutAutokit,
    decorators: [paddingDecorator["a" /* default */]],
    parameters: {
      design: {
        type: 'figma',
        url: 'https://www.figma.com/file/Udf9B3n8wEoykSGFhhrU0J/Greensight-DS?node-id=1502%3A1'
      }
    },
    mdxType: "Meta"
  }), Object(esm["mdx"])("h1", {
    "id": "layout"
  }, "Layout"), Object(esm["mdx"])(blocks["Preview"], {
    mdxType: "Preview"
  }, Object(esm["mdx"])(blocks["Story"], {
    name: "basic",
    mdxType: "Story"
  }, Object(esm["mdx"])(autokits_LayoutAutokit, {
    mdxType: "LayoutAutokit"
  }))), Object(esm["mdx"])("p", null, "\u0410\u0432\u0442\u043E\u043A\u0438\u0442 \u0434\u043B\u044F \u0441\u0435\u0442\u043E\u043A \u043F\u0440\u043E\u0435\u043A\u0442\u0430. \u0427\u0438\u0442\u0430\u0435\u0442 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435 \u043F\u043E\u043B\u044F ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "layout"), " \u043E\u0431\u044A\u0435\u043A\u0442\u0430 \u0442\u0435\u043C\u044B."), Object(esm["mdx"])("p", null, "\uD83D\uDCAC \u0410\u0432\u0442\u043E\u043A\u0438\u0442 \u0434\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u0442 \u0440\u0430\u0437\u043C\u0435\u0440\u044B 1:1, \u0442\u0430\u043A \u0447\u0442\u043E \u0437\u0434\u0435\u0441\u044C \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u0441\u043A\u0440\u043E\u043B\u043B."));
}

MDXContent.displayName = "MDXContent";
;
MDXContent.isMDXComponent = true;
var LayoutAutokit_stories_basic = function basic() {
  return Object(esm["mdx"])(autokits_LayoutAutokit, null);
};
LayoutAutokit_stories_basic.displayName = "basic";
LayoutAutokit_stories_basic.storyName = 'basic';
LayoutAutokit_stories_basic.parameters = {
  storySource: {
    source: '<LayoutAutokit />'
  }
};
var componentMeta = {
  title: 'Autokits / LayoutAutokit',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Udf9B3n8wEoykSGFhhrU0J/Greensight-DS?node-id=1502%3A1'
    }
  },
  decorators: [paddingDecorator["a" /* default */]],
  component: autokits_LayoutAutokit,
  includeStories: ["basic"]
};
var mdxStoryNameToKey = {
  "basic": "basic"
};
componentMeta.parameters = componentMeta.parameters || {};
componentMeta.parameters.docs = Object.assign({}, componentMeta.parameters.docs || {}, {
  page: function page() {
    return Object(esm["mdx"])(blocks["AddContext"], {
      mdxStoryNameToKey: mdxStoryNameToKey,
      mdxComponentMeta: componentMeta
    }, Object(esm["mdx"])(MDXContent, null));
  }
});
/* harmony default export */ var LayoutAutokit_stories = __webpack_exports__["default"] = (componentMeta);

/***/ }),

/***/ 1180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "basic", function() { return /* binding */ PalettesAutokit_stories_basic; });

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__(11);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(5);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(6);

// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.0-ac51e3f61d-2.zip/node_modules/react/index.js
var react = __webpack_require__(1);

// EXTERNAL MODULE: ./.yarn/$$virtual/@mdx-js-react-virtual-8208367119/0/cache/@mdx-js-react-npm-1.6.22-57e4c05c2b-2.zip/node_modules/@mdx-js/react/dist/esm.js
var esm = __webpack_require__(0);

// EXTERNAL MODULE: ./.yarn/$$virtual/@storybook-addon-docs-virtual-45dd9fae32/0/cache/@storybook-addon-docs-npm-6.1.11-e93c9ca8c3-2.zip/node_modules/@storybook/addon-docs/blocks.js
var blocks = __webpack_require__(2);

// EXTERNAL MODULE: ./.storybook/decorators/paddingDecorator.tsx
var paddingDecorator = __webpack_require__(55);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(7);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(44);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__(40);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.is-array.js
var es_array_is_array = __webpack_require__(22);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(19);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.define-properties.js
var es_object_define_properties = __webpack_require__(34);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.define-property.js
var es_object_define_property = __webpack_require__(37);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(76);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__(77);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(41);

// EXTERNAL MODULE: ./.yarn/cache/@emotion-css-npm-10.0.27-3fd4a0c157-2.zip/node_modules/@emotion/css/dist/css.browser.esm.js
var css_browser_esm = __webpack_require__(14);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(27);

// EXTERNAL MODULE: ./src/utils/baseTheme.ts + 1 modules
var baseTheme = __webpack_require__(21);

// EXTERNAL MODULE: ./src/utils/scale.ts
var scale = __webpack_require__(4);

// EXTERNAL MODULE: ./src/helpers/Tooltip.tsx + 1 modules
var Tooltip = __webpack_require__(125);

// EXTERNAL MODULE: ./src/helpers/typography.ts
var typography = __webpack_require__(36);

// EXTERNAL MODULE: ./src/helpers/copyToClipboard.ts
var copyToClipboard = __webpack_require__(124);

// EXTERNAL MODULE: ./.yarn/$$virtual/@emotion-core-virtual-9244315116/0/cache/@emotion-core-npm-10.1.1-f084e0eeac-2.zip/node_modules/@emotion/core/dist/core.browser.esm.js + 4 modules
var core_browser_esm = __webpack_require__(3);

// CONCATENATED MODULE: ./src/autokits/PalettesAutokit/Color.tsx












function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}









var Color_Color = function Color(_ref) {
  var color = _ref.color,
      index = _ref.index;
  var colors = baseTheme["a" /* default */].colors;
  var buttonRef = Object(react["useRef"])(null);

  var markCss = _objectSpread({
    height: Object(scale["a" /* default */])(4),
    padding: "".concat(Object(scale["a" /* default */])(1, true), "px ").concat(Object(scale["a" /* default */])(1), "px"),
    borderRadius: 4,
    backgroundColor: colors.white,
    color: colors.grey0
  }, Object(typography["a" /* default */])('subheading'));

  return Object(core_browser_esm["jsx"])(Tooltip["a" /* default */], {
    content: "Hex code is copied to the clipboard"
  }, Object(core_browser_esm["jsx"])("button", {
    ref: buttonRef,
    type: "button",
    onClick: function onClick() {
      return Object(copyToClipboard["a" /* default */])(color, buttonRef);
    },
    css:
    /*#__PURE__*/

    /*#__PURE__*/
    Object(css_browser_esm["a" /* default */])({
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      padding: "".concat(Object(scale["a" /* default */])(2), "px ").concat(Object(scale["a" /* default */])(3), "px"),
      backgroundColor: color,
      transition: 'width ease 300ms',
      ':hover, :focus.focus-visible': {
        width: 'calc(100% + 16px)',
        outline: 'none'
      }
    },  true ? "" : undefined, ";label:css;" + ( true ? "" : undefined))
  }, Object(core_browser_esm["jsx"])("span", {
    css: markCss
  }, index), Object(core_browser_esm["jsx"])("span", {
    css: markCss
  }, color)));
};

/* harmony default export */ var PalettesAutokit_Color = (Color_Color);

try {
  // @ts-ignore
  Color_Color.displayName = "Color"; // @ts-ignore

  Color_Color.__docgenInfo = {
    "description": "",
    "displayName": "Color",
    "props": {
      "color": {
        "defaultValue": null,
        "description": "Color hex value.",
        "name": "color",
        "required": true,
        "type": {
          "name": "string"
        }
      },
      "index": {
        "defaultValue": null,
        "description": "Color index.",
        "name": "index",
        "required": true,
        "type": {
          "name": "number"
        }
      }
    }
  }; // @ts-ignore

  if (typeof STORYBOOK_REACT_CLASSES !== "undefined") // @ts-ignore
    STORYBOOK_REACT_CLASSES["src/autokits/PalettesAutokit/Color.tsx#Color"] = {
      docgenInfo: Color_Color.__docgenInfo,
      name: "Color",
      path: "src/autokits/PalettesAutokit/Color.tsx#Color"
    };
} catch (__react_docgen_typescript_loader_error) {}
// EXTERNAL MODULE: ./src/components/Layout/index.tsx + 3 modules
var Layout = __webpack_require__(13);

// EXTERNAL MODULE: ./src/utils/useTheme.ts
var useTheme = __webpack_require__(52);

// CONCATENATED MODULE: ./src/autokits/PalettesAutokit/index.tsx













function PalettesAutokit_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function PalettesAutokit_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      PalettesAutokit_ownKeys(Object(source), true).forEach(function (key) {
        PalettesAutokit_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      PalettesAutokit_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function PalettesAutokit_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}






/**
 * Autokit for palettes tokens `theme.palettes`.
 */



var PalettesAutokit_PalettesAutokit = function PalettesAutokit() {
  var theme = Object(useTheme["a" /* default */])();
  var palettes = theme.palettes;
  if (!palettes) return Object(core_browser_esm["jsx"])("div", {
    css: Object(typography["a" /* default */])('body')
  }, Object(core_browser_esm["jsx"])("span", {
    role: "img",
    "aria-label": "Error"
  }, "\u26D4\uFE0F"), ' ', "Palettes are not defined. Use tokens or add ", Object(core_browser_esm["jsx"])("strong", null, "palettes"), " property in theme settings manually");
  return Object(core_browser_esm["jsx"])(Layout["a" /* default */], {
    auto: Object(scale["a" /* default */])(30),
    gap: Object(scale["a" /* default */])(8)
  }, Object.keys(palettes).filter(function (name) {
    return Array.isArray(palettes[name]);
  }).map(function (name) {
    return Object(core_browser_esm["jsx"])(Layout["a" /* default */].Item, {
      key: name
    }, Object(core_browser_esm["jsx"])("div", {
      css:
      /*#__PURE__*/

      /*#__PURE__*/
      Object(css_browser_esm["a" /* default */])(PalettesAutokit_objectSpread(PalettesAutokit_objectSpread({
        textAlign: 'center'
      }, Object(typography["a" /* default */])('headline')), {}, {
        marginBottom: Object(scale["a" /* default */])(2),
        marginTop: Object(scale["a" /* default */])(2)
      }),  true ? "" : undefined, ";label:css;" + ( true ? "" : undefined))
    }, name), palettes[name].map(function (color, index) {
      return Object(core_browser_esm["jsx"])(PalettesAutokit_Color, {
        key: color,
        color: color,
        index: index
      });
    }));
  }));
};

/* harmony default export */ var autokits_PalettesAutokit = (PalettesAutokit_PalettesAutokit);

try {
  // @ts-ignore
  PalettesAutokit_PalettesAutokit.displayName = "PalettesAutokit"; // @ts-ignore

  PalettesAutokit_PalettesAutokit.__docgenInfo = {
    "description": "Autokit for palettes tokens `theme.palettes`.",
    "displayName": "PalettesAutokit",
    "props": {}
  }; // @ts-ignore

  if (typeof STORYBOOK_REACT_CLASSES !== "undefined") // @ts-ignore
    STORYBOOK_REACT_CLASSES["src/autokits/PalettesAutokit/index.tsx#PalettesAutokit"] = {
      docgenInfo: PalettesAutokit_PalettesAutokit.__docgenInfo,
      name: "PalettesAutokit",
      path: "src/autokits/PalettesAutokit/index.tsx#PalettesAutokit"
    };
} catch (__react_docgen_typescript_loader_error) {}
// CONCATENATED MODULE: ./src/autokits/PalettesAutokit/PalettesAutokit.stories.mdx




function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsxRuntime classic */

/* @jsx mdx */





var layoutProps = {};
var MDXLayout = "wrapper";

function MDXContent(_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(esm["mdx"])(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(esm["mdx"])(blocks["Meta"], {
    title: "Autokits / PalettesAutokit",
    component: autokits_PalettesAutokit,
    decorators: [paddingDecorator["a" /* default */]],
    parameters: {
      design: {
        type: 'figma',
        url: 'https://www.figma.com/file/Udf9B3n8wEoykSGFhhrU0J/Greensight-DS?node-id=1305%3A24'
      }
    },
    mdxType: "Meta"
  }), Object(esm["mdx"])("h1", {
    "id": "palettes"
  }, "Palettes"), Object(esm["mdx"])(blocks["Preview"], {
    mdxType: "Preview"
  }, Object(esm["mdx"])(blocks["Story"], {
    name: "basic",
    mdxType: "Story"
  }, Object(esm["mdx"])(autokits_PalettesAutokit, {
    mdxType: "PalettesAutokit"
  }))), Object(esm["mdx"])("p", null, "\u0410\u0432\u0442\u043E\u043A\u0438\u0442 \u0434\u043B\u044F \u043F\u0430\u043B\u0438\u0442\u0440 \u043F\u0440\u043E\u0435\u043A\u0442\u0430. \u0427\u0438\u0442\u0430\u0435\u0442 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435 \u043F\u043E\u043B\u044F ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "palettes"), " \u043E\u0431\u044A\u0435\u043A\u0442\u0430 \u0442\u0435\u043C\u044B."));
}

MDXContent.displayName = "MDXContent";
;
MDXContent.isMDXComponent = true;
var PalettesAutokit_stories_basic = function basic() {
  return Object(esm["mdx"])(autokits_PalettesAutokit, null);
};
PalettesAutokit_stories_basic.displayName = "basic";
PalettesAutokit_stories_basic.storyName = 'basic';
PalettesAutokit_stories_basic.parameters = {
  storySource: {
    source: '<PalettesAutokit />'
  }
};
var componentMeta = {
  title: 'Autokits / PalettesAutokit',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Udf9B3n8wEoykSGFhhrU0J/Greensight-DS?node-id=1305%3A24'
    }
  },
  decorators: [paddingDecorator["a" /* default */]],
  component: autokits_PalettesAutokit,
  includeStories: ["basic"]
};
var mdxStoryNameToKey = {
  "basic": "basic"
};
componentMeta.parameters = componentMeta.parameters || {};
componentMeta.parameters.docs = Object.assign({}, componentMeta.parameters.docs || {}, {
  page: function page() {
    return Object(esm["mdx"])(blocks["AddContext"], {
      mdxStoryNameToKey: mdxStoryNameToKey,
      mdxComponentMeta: componentMeta
    }, Object(esm["mdx"])(MDXContent, null));
  }
});
/* harmony default export */ var PalettesAutokit_stories = __webpack_exports__["default"] = (componentMeta);

/***/ }),

/***/ 1181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "basic", function() { return /* binding */ ShadowsAutokit_stories_basic; });

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__(11);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(5);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(6);

// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.0-ac51e3f61d-2.zip/node_modules/react/index.js
var react = __webpack_require__(1);

// EXTERNAL MODULE: ./.yarn/$$virtual/@mdx-js-react-virtual-8208367119/0/cache/@mdx-js-react-npm-1.6.22-57e4c05c2b-2.zip/node_modules/@mdx-js/react/dist/esm.js
var esm = __webpack_require__(0);

// EXTERNAL MODULE: ./.yarn/$$virtual/@storybook-addon-docs-virtual-45dd9fae32/0/cache/@storybook-addon-docs-npm-6.1.11-e93c9ca8c3-2.zip/node_modules/@storybook/addon-docs/blocks.js
var blocks = __webpack_require__(2);

// EXTERNAL MODULE: ./.storybook/decorators/paddingDecorator.tsx
var paddingDecorator = __webpack_require__(55);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(19);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(7);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(44);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__(40);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(12);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.define-properties.js
var es_object_define_properties = __webpack_require__(34);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.define-property.js
var es_object_define_property = __webpack_require__(37);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(76);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__(77);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(41);

// EXTERNAL MODULE: ./.yarn/cache/@emotion-css-npm-10.0.27-3fd4a0c157-2.zip/node_modules/@emotion/css/dist/css.browser.esm.js
var css_browser_esm = __webpack_require__(14);

// EXTERNAL MODULE: ./src/utils/scale.ts
var scale = __webpack_require__(4);

// EXTERNAL MODULE: ./src/utils/baseTheme.ts + 1 modules
var baseTheme = __webpack_require__(21);

// EXTERNAL MODULE: ./src/helpers/Tooltip.tsx + 1 modules
var Tooltip = __webpack_require__(125);

// EXTERNAL MODULE: ./src/helpers/typography.ts
var typography = __webpack_require__(36);

// EXTERNAL MODULE: ./src/helpers/copyToClipboard.ts
var copyToClipboard = __webpack_require__(124);

// EXTERNAL MODULE: ./.yarn/$$virtual/@emotion-core-virtual-9244315116/0/cache/@emotion-core-npm-10.1.1-f084e0eeac-2.zip/node_modules/@emotion/core/dist/core.browser.esm.js + 4 modules
var core_browser_esm = __webpack_require__(3);

// CONCATENATED MODULE: ./src/autokits/ShadowsAutokit/Shadow.tsx












function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}









var Shadow_Shadow = function Shadow(_ref) {
  var name = _ref.name,
      value = _ref.value;
  var colors = baseTheme["a" /* default */].colors;
  var buttonRef = Object(react["useRef"])(null);
  return Object(core_browser_esm["jsx"])(Tooltip["a" /* default */], {
    content: "Variable name is copied to the clipboard"
  }, Object(core_browser_esm["jsx"])("button", {
    ref: buttonRef,
    type: "button",
    onClick: function onClick() {
      return Object(copyToClipboard["a" /* default */])("shadows.".concat(name), buttonRef);
    },
    css:
    /*#__PURE__*/

    /*#__PURE__*/
    Object(css_browser_esm["a" /* default */])({
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      width: '100%',
      height: Object(scale["a" /* default */])(28),
      padding: Object(scale["a" /* default */])(1),
      backgroundColor: colors.white,
      borderRadius: '24px 24px 24px 0px',
      boxShadow: value,
      transition: 'box-shadow ease 300ms',
      ':focus.focus-visible': {
        outline: 'none',
        boxShadow: "0 0 0 2px ".concat(colors.grey0)
      }
    },  true ? "" : undefined, ";label:css;" + ( true ? "" : undefined))
  }, Object(core_browser_esm["jsx"])("span", {
    css:
    /*#__PURE__*/

    /*#__PURE__*/
    Object(css_browser_esm["a" /* default */])(_objectSpread({
      backgroundColor: colors.white,
      color: colors.grey0,
      padding: Object(scale["a" /* default */])(1),
      borderRadius: '4px 4px 4px 0px'
    }, Object(typography["a" /* default */])('smallBold')),  true ? "" : undefined, ";label:css;" + ( true ? "" : undefined))
  }, name)));
};

/* harmony default export */ var ShadowsAutokit_Shadow = (Shadow_Shadow);

try {
  // @ts-ignore
  Shadow_Shadow.displayName = "Shadow"; // @ts-ignore

  Shadow_Shadow.__docgenInfo = {
    "description": "",
    "displayName": "Shadow",
    "props": {
      "name": {
        "defaultValue": null,
        "description": "Shadow variable name.",
        "name": "name",
        "required": true,
        "type": {
          "name": "string"
        }
      },
      "value": {
        "defaultValue": null,
        "description": "Shadow value.",
        "name": "value",
        "required": true,
        "type": {
          "name": "string"
        }
      }
    }
  }; // @ts-ignore

  if (typeof STORYBOOK_REACT_CLASSES !== "undefined") // @ts-ignore
    STORYBOOK_REACT_CLASSES["src/autokits/ShadowsAutokit/Shadow.tsx#Shadow"] = {
      docgenInfo: Shadow_Shadow.__docgenInfo,
      name: "Shadow",
      path: "src/autokits/ShadowsAutokit/Shadow.tsx#Shadow"
    };
} catch (__react_docgen_typescript_loader_error) {}
// EXTERNAL MODULE: ./src/components/Layout/index.tsx + 3 modules
var Layout = __webpack_require__(13);

// EXTERNAL MODULE: ./src/utils/useTheme.ts
var useTheme = __webpack_require__(52);

// CONCATENATED MODULE: ./src/autokits/ShadowsAutokit/index.tsx







/**
 * Autokit for shadows tokens `theme.shadows`.
 */



var ShadowsAutokit_ShadowsAutokit = function ShadowsAutokit() {
  var theme = Object(useTheme["a" /* default */])();
  var shadows = theme.shadows;
  if (!shadows) return Object(core_browser_esm["jsx"])("div", {
    css: Object(typography["a" /* default */])('body')
  }, Object(core_browser_esm["jsx"])("span", {
    role: "img",
    "aria-label": "Error"
  }, "\u26D4\uFE0F"), ' ', "Shadows are not defined. Use tokens or add ", Object(core_browser_esm["jsx"])("strong", null, "shadows"), " property in theme settings manually");
  return Object(core_browser_esm["jsx"])(Layout["a" /* default */], {
    auto: Object(scale["a" /* default */])(20),
    gap: Object(scale["a" /* default */])(8)
  }, Object.keys(shadows).map(function (name) {
    return Object(core_browser_esm["jsx"])(Layout["a" /* default */].Item, {
      key: name
    }, Object(core_browser_esm["jsx"])(ShadowsAutokit_Shadow, {
      name: name,
      value: shadows[name]
    }));
  }));
};

/* harmony default export */ var autokits_ShadowsAutokit = (ShadowsAutokit_ShadowsAutokit);

try {
  // @ts-ignore
  ShadowsAutokit_ShadowsAutokit.displayName = "ShadowsAutokit"; // @ts-ignore

  ShadowsAutokit_ShadowsAutokit.__docgenInfo = {
    "description": "Autokit for shadows tokens `theme.shadows`.",
    "displayName": "ShadowsAutokit",
    "props": {}
  }; // @ts-ignore

  if (typeof STORYBOOK_REACT_CLASSES !== "undefined") // @ts-ignore
    STORYBOOK_REACT_CLASSES["src/autokits/ShadowsAutokit/index.tsx#ShadowsAutokit"] = {
      docgenInfo: ShadowsAutokit_ShadowsAutokit.__docgenInfo,
      name: "ShadowsAutokit",
      path: "src/autokits/ShadowsAutokit/index.tsx#ShadowsAutokit"
    };
} catch (__react_docgen_typescript_loader_error) {}
// CONCATENATED MODULE: ./src/autokits/ShadowsAutokit/ShadowsAutokit.stories.mdx




function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsxRuntime classic */

/* @jsx mdx */





var layoutProps = {};
var MDXLayout = "wrapper";

function MDXContent(_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(esm["mdx"])(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(esm["mdx"])(blocks["Meta"], {
    title: "Autokits / ShadowsAutokit",
    component: autokits_ShadowsAutokit,
    decorators: [paddingDecorator["a" /* default */]],
    parameters: {
      design: {
        type: 'figma',
        url: 'https://www.figma.com/file/Udf9B3n8wEoykSGFhhrU0J/Greensight-DS?node-id=1844%3A3091'
      }
    },
    mdxType: "Meta"
  }), Object(esm["mdx"])("h1", {
    "id": "shadows"
  }, "Shadows"), Object(esm["mdx"])(blocks["Preview"], {
    mdxType: "Preview"
  }, Object(esm["mdx"])(blocks["Story"], {
    name: "basic",
    mdxType: "Story"
  }, Object(esm["mdx"])(autokits_ShadowsAutokit, {
    mdxType: "ShadowsAutokit"
  }))), Object(esm["mdx"])("p", null, "\u0410\u0432\u0442\u043E\u043A\u0438\u0442 \u0434\u043B\u044F \u0442\u0435\u043D\u0435\u0439 \u043F\u0440\u043E\u0435\u043A\u0442\u0430. \u0427\u0438\u0442\u0430\u0435\u0442 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435 \u043F\u043E\u043B\u044F ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "shadows"), " \u043E\u0431\u044A\u0435\u043A\u0442\u0430 \u0442\u0435\u043C\u044B."));
}

MDXContent.displayName = "MDXContent";
;
MDXContent.isMDXComponent = true;
var ShadowsAutokit_stories_basic = function basic() {
  return Object(esm["mdx"])(autokits_ShadowsAutokit, null);
};
ShadowsAutokit_stories_basic.displayName = "basic";
ShadowsAutokit_stories_basic.storyName = 'basic';
ShadowsAutokit_stories_basic.parameters = {
  storySource: {
    source: '<ShadowsAutokit />'
  }
};
var componentMeta = {
  title: 'Autokits / ShadowsAutokit',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Udf9B3n8wEoykSGFhhrU0J/Greensight-DS?node-id=1844%3A3091'
    }
  },
  decorators: [paddingDecorator["a" /* default */]],
  component: autokits_ShadowsAutokit,
  includeStories: ["basic"]
};
var mdxStoryNameToKey = {
  "basic": "basic"
};
componentMeta.parameters = componentMeta.parameters || {};
componentMeta.parameters.docs = Object.assign({}, componentMeta.parameters.docs || {}, {
  page: function page() {
    return Object(esm["mdx"])(blocks["AddContext"], {
      mdxStoryNameToKey: mdxStoryNameToKey,
      mdxComponentMeta: componentMeta
    }, Object(esm["mdx"])(MDXContent, null));
  }
});
/* harmony default export */ var ShadowsAutokit_stories = __webpack_exports__["default"] = (componentMeta);

/***/ }),

/***/ 1182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "__page", function() { return /* binding */ __page; });

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__(11);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(5);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(6);

// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.0-ac51e3f61d-2.zip/node_modules/react/index.js
var react = __webpack_require__(1);

// EXTERNAL MODULE: ./.yarn/$$virtual/@mdx-js-react-virtual-8208367119/0/cache/@mdx-js-react-npm-1.6.22-57e4c05c2b-2.zip/node_modules/@mdx-js/react/dist/esm.js
var esm = __webpack_require__(0);

// EXTERNAL MODULE: ./.yarn/$$virtual/@storybook-addon-docs-virtual-45dd9fae32/0/cache/@storybook-addon-docs-npm-6.1.11-e93c9ca8c3-2.zip/node_modules/@storybook/addon-docs/blocks.js
var blocks = __webpack_require__(2);

// EXTERNAL MODULE: ./.yarn/$$virtual/@emotion-core-virtual-9244315116/0/cache/@emotion-core-npm-10.1.1-f084e0eeac-2.zip/node_modules/@emotion/core/dist/core.browser.esm.js + 4 modules
var core_browser_esm = __webpack_require__(3);

// CONCATENATED MODULE: ./.storybook/docgen/Global.tsx

var Global_GlobalTheme = function GlobalTheme() {
  return Object(core_browser_esm["jsx"])("div", null);
};
var Global_BaseProperties = function BaseProperties() {
  return Object(core_browser_esm["jsx"])("div", null);
};
var Global_BodyProperties = function BodyProperties() {
  return Object(core_browser_esm["jsx"])("div", null);
};
var Global_FocusProperties = function FocusProperties() {
  return Object(core_browser_esm["jsx"])("div", null);
};
var Global_SelectionProperties = function SelectionProperties() {
  return Object(core_browser_esm["jsx"])("div", null);
};
var Global_FontsProperties = function FontsProperties() {
  return Object(core_browser_esm["jsx"])("div", null);
};
var Global_FontFamilyProperties = function FontFamilyProperties() {
  return Object(core_browser_esm["jsx"])("div", null);
};

try {
  // @ts-ignore
  Global_GlobalTheme.displayName = "GlobalTheme"; // @ts-ignore

  Global_GlobalTheme.__docgenInfo = {
    "description": "",
    "displayName": "GlobalTheme",
    "props": {
      "placeholder": {
        "defaultValue": null,
        "description": "Custom placeholder icon for autokits. Icon must be in `SVGR` format (React component).",
        "name": "placeholder",
        "required": false,
        "type": {
          "name": "FC<SVGProps<SVGSVGElement> & { title?: string | undefined; }> | undefined"
        }
      },
      "base": {
        "defaultValue": null,
        "description": "Global styles.",
        "name": "base",
        "required": false,
        "type": {
          "name": "BaseProperties | undefined"
        }
      },
      "fonts": {
        "defaultValue": null,
        "description": "Fonts settings.",
        "name": "fonts",
        "required": false,
        "type": {
          "name": "FontsProperties | undefined"
        }
      }
    }
  }; // @ts-ignore

  if (typeof STORYBOOK_REACT_CLASSES !== "undefined") // @ts-ignore
    STORYBOOK_REACT_CLASSES[".storybook/docgen/Global.tsx#GlobalTheme"] = {
      docgenInfo: Global_GlobalTheme.__docgenInfo,
      name: "GlobalTheme",
      path: ".storybook/docgen/Global.tsx#GlobalTheme"
    };
} catch (__react_docgen_typescript_loader_error) {}

try {
  // @ts-ignore
  Global_BaseProperties.displayName = "BaseProperties"; // @ts-ignore

  Global_BaseProperties.__docgenInfo = {
    "description": "",
    "displayName": "BaseProperties",
    "props": {
      "body": {
        "defaultValue": null,
        "description": "Body styles.",
        "name": "body",
        "required": false,
        "type": {
          "name": "BodyProperties | undefined"
        }
      },
      "focus": {
        "defaultValue": null,
        "description": "Focus styles. GDS uses outline styles with `focus-visible` polyfill.",
        "name": "focus",
        "required": false,
        "type": {
          "name": "FocusProperties | undefined"
        }
      },
      "selection": {
        "defaultValue": null,
        "description": "Selection styles.",
        "name": "selection",
        "required": false,
        "type": {
          "name": "SelectionProperties | undefined"
        }
      },
      "css": {
        "defaultValue": null,
        "description": "Additional CSS.",
        "name": "css",
        "required": false,
        "type": {
          "name": "CSSObject | undefined"
        }
      }
    }
  }; // @ts-ignore

  if (typeof STORYBOOK_REACT_CLASSES !== "undefined") // @ts-ignore
    STORYBOOK_REACT_CLASSES[".storybook/docgen/Global.tsx#BaseProperties"] = {
      docgenInfo: Global_BaseProperties.__docgenInfo,
      name: "BaseProperties",
      path: ".storybook/docgen/Global.tsx#BaseProperties"
    };
} catch (__react_docgen_typescript_loader_error) {}

try {
  // @ts-ignore
  Global_BodyProperties.displayName = "BodyProperties"; // @ts-ignore

  Global_BodyProperties.__docgenInfo = {
    "description": "",
    "displayName": "BodyProperties",
    "props": {
      "typography": {
        "defaultValue": null,
        "description": "Typography style.",
        "name": "typography",
        "required": false,
        "type": {
          "name": "string | undefined"
        }
      },
      "color": {
        "defaultValue": null,
        "description": "Text color.",
        "name": "color",
        "required": false,
        "type": {
          "name": "string | undefined"
        }
      },
      "bg": {
        "defaultValue": null,
        "description": "Background color.",
        "name": "bg",
        "required": false,
        "type": {
          "name": "string | undefined"
        }
      },
      "css": {
        "defaultValue": null,
        "description": "Additional CSS.",
        "name": "css",
        "required": false,
        "type": {
          "name": "CSSObject | undefined"
        }
      }
    }
  }; // @ts-ignore

  if (typeof STORYBOOK_REACT_CLASSES !== "undefined") // @ts-ignore
    STORYBOOK_REACT_CLASSES[".storybook/docgen/Global.tsx#BodyProperties"] = {
      docgenInfo: Global_BodyProperties.__docgenInfo,
      name: "BodyProperties",
      path: ".storybook/docgen/Global.tsx#BodyProperties"
    };
} catch (__react_docgen_typescript_loader_error) {}

try {
  // @ts-ignore
  Global_FocusProperties.displayName = "FocusProperties"; // @ts-ignore

  Global_FocusProperties.__docgenInfo = {
    "description": "",
    "displayName": "FocusProperties",
    "props": {
      "width": {
        "defaultValue": null,
        "description": "Outline width.",
        "name": "width",
        "required": false,
        "type": {
          "name": "number | undefined"
        }
      },
      "color": {
        "defaultValue": null,
        "description": "Outline color.",
        "name": "color",
        "required": false,
        "type": {
          "name": "string | undefined"
        }
      },
      "offset": {
        "defaultValue": null,
        "description": "Outline offset.",
        "name": "offset",
        "required": false,
        "type": {
          "name": "number | undefined"
        }
      },
      "css": {
        "defaultValue": null,
        "description": "Additional CSS.",
        "name": "css",
        "required": false,
        "type": {
          "name": "CSSObject | undefined"
        }
      }
    }
  }; // @ts-ignore

  if (typeof STORYBOOK_REACT_CLASSES !== "undefined") // @ts-ignore
    STORYBOOK_REACT_CLASSES[".storybook/docgen/Global.tsx#FocusProperties"] = {
      docgenInfo: Global_FocusProperties.__docgenInfo,
      name: "FocusProperties",
      path: ".storybook/docgen/Global.tsx#FocusProperties"
    };
} catch (__react_docgen_typescript_loader_error) {}

try {
  // @ts-ignore
  Global_SelectionProperties.displayName = "SelectionProperties"; // @ts-ignore

  Global_SelectionProperties.__docgenInfo = {
    "description": "",
    "displayName": "SelectionProperties",
    "props": {
      "color": {
        "defaultValue": null,
        "description": "Text color.",
        "name": "color",
        "required": false,
        "type": {
          "name": "string | undefined"
        }
      },
      "bg": {
        "defaultValue": null,
        "description": "Background color.",
        "name": "bg",
        "required": false,
        "type": {
          "name": "string | undefined"
        }
      },
      "css": {
        "defaultValue": null,
        "description": "Additional CSS.",
        "name": "css",
        "required": false,
        "type": {
          "name": "CSSObject | undefined"
        }
      }
    }
  }; // @ts-ignore

  if (typeof STORYBOOK_REACT_CLASSES !== "undefined") // @ts-ignore
    STORYBOOK_REACT_CLASSES[".storybook/docgen/Global.tsx#SelectionProperties"] = {
      docgenInfo: Global_SelectionProperties.__docgenInfo,
      name: "SelectionProperties",
      path: ".storybook/docgen/Global.tsx#SelectionProperties"
    };
} catch (__react_docgen_typescript_loader_error) {}

try {
  // @ts-ignore
  Global_FontsProperties.displayName = "FontsProperties"; // @ts-ignore

  Global_FontsProperties.__docgenInfo = {
    "description": "",
    "displayName": "FontsProperties",
    "props": {
      "families": {
        "defaultValue": null,
        "description": "Font families settings. Used in `Typography` autokit and `typography` helper.",
        "name": "families",
        "required": false,
        "type": {
          "name": "Record<string, FontFamilyProperties> | undefined"
        }
      },
      "fluid": {
        "defaultValue": null,
        "description": "Fluid typography settings. Active by default. Pass `false` to disable completely or array of fonts to disable.",
        "name": "fluid",
        "required": false,
        "type": {
          "name": "boolean | string[] | undefined"
        }
      },
      "fontFace": {
        "defaultValue": null,
        "description": "`@font-face` definitions.",
        "name": "fontFace",
        "required": false,
        "type": {
          "name": "CSSObject[] | undefined"
        }
      }
    }
  }; // @ts-ignore

  if (typeof STORYBOOK_REACT_CLASSES !== "undefined") // @ts-ignore
    STORYBOOK_REACT_CLASSES[".storybook/docgen/Global.tsx#FontsProperties"] = {
      docgenInfo: Global_FontsProperties.__docgenInfo,
      name: "FontsProperties",
      path: ".storybook/docgen/Global.tsx#FontsProperties"
    };
} catch (__react_docgen_typescript_loader_error) {}

try {
  // @ts-ignore
  Global_FontFamilyProperties.displayName = "FontFamilyProperties"; // @ts-ignore

  Global_FontFamilyProperties.__docgenInfo = {
    "description": "",
    "displayName": "FontFamilyProperties",
    "props": {
      "stack": {
        "defaultValue": null,
        "description": "Fallback fonts for specified font family.",
        "name": "stack",
        "required": false,
        "type": {
          "name": "string | undefined"
        }
      },
      "vf": {
        "defaultValue": null,
        "description": "Variable font.",
        "name": "vf",
        "required": false,
        "type": {
          "name": "boolean | undefined"
        }
      }
    }
  }; // @ts-ignore

  if (typeof STORYBOOK_REACT_CLASSES !== "undefined") // @ts-ignore
    STORYBOOK_REACT_CLASSES[".storybook/docgen/Global.tsx#FontFamilyProperties"] = {
      docgenInfo: Global_FontFamilyProperties.__docgenInfo,
      name: "FontFamilyProperties",
      path: ".storybook/docgen/Global.tsx#FontFamilyProperties"
    };
} catch (__react_docgen_typescript_loader_error) {}
// CONCATENATED MODULE: ./stories/dev/global.stories.mdx




function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsxRuntime classic */

/* @jsx mdx */




var layoutProps = {};
var MDXLayout = "wrapper";

function MDXContent(_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(esm["mdx"])(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(esm["mdx"])(blocks["Meta"], {
    title: "Dev / Global",
    mdxType: "Meta"
  }), Object(esm["mdx"])("h1", {
    "id": "global"
  }, "Global"), Object(esm["mdx"])("p", null, "\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u044B\u0445 \u0441\u0442\u0438\u043B\u0435\u0439 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0441\u044F \u0447\u0435\u0440\u0435\u0437 ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "ThemeProvider"), ". \u042D\u0442\u043E\u0442 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u043F\u043E\u043C\u0438\u043C\u043E \u0441\u0432\u043E\u0435\u0439 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u0444\u0443\u043D\u043A\u0446\u0438\u0438 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442 \u0432\u0441\u0442\u0430\u0432\u043A\u0443 ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "Global"), " \u0438\u0437 ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "emotion"), ", \u0447\u0435\u0440\u0435\u0437 \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u044E\u0442\u0441\u044F \u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u044B\u0435 \u0441\u0442\u0438\u043B\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u0430. GDS \u0438\u0434\u0451\u0442 \u0441\u043E \u0432\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u044B\u043C\u0438 \u0441\u0442\u0438\u043B\u044F\u043C\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0438\u0437\u0438\u0440\u0443\u044E\u0442\u0441\u044F \u0447\u0435\u0440\u0435\u0437 \u0442\u0435\u043C\u0443, \u0438 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u0441\u0442\u0438\u043B\u0435\u0439."), Object(esm["mdx"])("p", null, "\u0412\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u043E\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435:"), Object(esm["mdx"])("ol", null, Object(esm["mdx"])("li", {
    parentName: "ol"
  }, "\u0421\u0442\u0438\u043B\u0438 \u043D\u043E\u0440\u043C\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u0447\u0435\u0440\u0435\u0437 ", Object(esm["mdx"])("a", _extends({
    parentName: "li"
  }, {
    "href": "https://necolas.github.io/normalize.css/",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer"
  }), "normalize.css")), Object(esm["mdx"])("li", {
    parentName: "ol"
  }, "\u041E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u0448\u0440\u0438\u0444\u0442\u043E\u0432"), Object(esm["mdx"])("li", {
    parentName: "ol"
  }, "\u0411\u0430\u0437\u043E\u0432\u044B\u0435 \u0441\u0442\u0438\u043B\u0438")), Object(esm["mdx"])("p", null, "\u041F\u043E\u043C\u0438\u043C\u043E \u044D\u0442\u043E\u0433\u043E \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u0442\u044C \u043B\u044E\u0431\u043E\u0439 CSS, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u043F\u0440\u0438\u043C\u0435\u043D\u0451\u043D \u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u043E."), Object(esm["mdx"])("h2", {
    "id": "theme"
  }, "Theme"), Object(esm["mdx"])(blocks["Props"], {
    components: {
      GlobalTheme: Global_GlobalTheme,
      BaseProperties: Global_BaseProperties,
      BodyProperties: Global_BodyProperties,
      FocusProperties: Global_FocusProperties,
      SelectionProperties: Global_SelectionProperties,
      FontsProperties: Global_FontsProperties,
      FontFamilyProperties: Global_FontFamilyProperties
    },
    mdxType: "Props"
  }), Object(esm["mdx"])("h2", {
    "id": "base"
  }, "Base"), Object(esm["mdx"])("p", null, "\u0413\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u044B\u0435 \u0441\u0442\u0438\u043B\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u0437\u0430\u0434\u0430\u043D\u044B \u0447\u0435\u0440\u0435\u0437 ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "global.base"), ". ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "ThemeProvider"), " \u0432\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0431\u0430\u0437\u043E\u0432\u044B\u0435 \u043F\u0435\u0440\u0435\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u0441\u0442\u0438\u043B\u0435\u0439 \u0434\u043B\u044F \u0442\u0435\u0433\u043E\u0432 \u0438 \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0438\u0437 \u043D\u0438\u0445 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B \u0434\u043B\u044F \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0438\u0437\u0430\u0446\u0438\u0438: \u0441\u0442\u0438\u043B\u0438 \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u0438\u044F, \u0444\u043E\u043A\u0443\u0441\u0430 \u0438 \u043E\u0441\u043D\u043E\u0432\u043D\u0430\u044F \u0442\u0438\u043F\u043E\u0433\u0440\u0430\u0444\u0438\u043A\u0430/\u0446\u0432\u0435\u0442\u0430 (body)."), Object(esm["mdx"])("p", null, "\u267F\uFE0F GDS \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0430\u0435\u0442 \u043F\u043E\u043B\u0438\u0444\u0438\u043B\u043B ", Object(esm["mdx"])("a", _extends({
    parentName: "p"
  }, {
    "href": "https://github.com/WICG/focus-visible",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer"
  }), "focus-visible"), ", \u0447\u0442\u043E \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0441\u0442\u0438\u043B\u0438\u0437\u0430\u0446\u0438\u044E \u043E\u0431\u044B\u0447\u043D\u044B\u0445 \u0444\u043E\u043A\u0443\u0441\u043E\u0432 \u0438 \u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0441\u0442\u0438\u043B\u0438\u0437\u0430\u0446\u0438\u044E \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F \u0444\u043E\u043A\u0443\u0441\u0430 \u0441 \u043A\u043B\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u044B, \u0442.\u043E. \u0444\u043E\u043A\u0443\u0441\u044B \u043F\u043E\u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u0442\u043E\u0433\u0434\u0430, \u043A\u043E\u0433\u0434\u0430 \u043E\u043D\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043D\u0443\u0436\u043D\u044B."), Object(esm["mdx"])("h2", {
    "id": "fonts"
  }, "Fonts"), Object(esm["mdx"])("p", null, "\u0414\u043B\u044F \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u0448\u0440\u0438\u0444\u0442\u043E\u0432 \u043D\u0443\u0436\u043D\u043E \u043F\u0440\u043E\u043F\u0438\u0441\u0430\u0442\u044C \u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u044B\u0435 ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "@font-face"), " \u0434\u0435\u043A\u043B\u0430\u0440\u0430\u0446\u0438\u0438. \u0414\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u043E \u043F\u043E\u043B\u0435 ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "global.fonts.fontFace"), "."), Object(esm["mdx"])("p", null, "\u0412 ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "global.fonts.families"), " \u043C\u043E\u0436\u043D\u043E \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u0448\u0440\u0438\u0444\u0442\u0430 \u0438 \u0444\u043E\u043B\u0431\u0435\u043A\u0438 \u2013 \u044D\u0442\u0438 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442\u0441\u044F \u0432 \u0445\u0435\u043B\u043F\u0435\u0440\u0435 ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "typography"), " \u0438 \u0430\u0432\u0442\u043E\u043A\u0438\u0442\u0435 ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "Typography"), "."), Object(esm["mdx"])("p", null, "\u2757\uFE0F \u0425\u0435\u043B\u043F\u0435\u0440 ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "typography"), " \u0434\u043B\u044F \u0432\u0430\u0440\u0438\u0430\u0442\u0438\u0432\u043D\u044B\u0445 \u0448\u0440\u0438\u0444\u0442\u043E\u0432 \u043E\u0436\u0438\u0434\u0430\u0435\u0442 \u0443\u0432\u0438\u0434\u0435\u0442\u044C \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0432 \u0444\u043E\u0440\u043C\u0435\u0442\u0435 ", Object(esm["mdx"])("strong", {
    parentName: "p"
  }, "\"name VF\""), "."), Object(esm["mdx"])("p", null, "\u0412 ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "global.fonts.fluid"), " \u043C\u043E\u0436\u043D\u043E \u043E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0444\u043B\u044E\u0438\u0434\u043D\u0443\u044E \u0442\u0438\u043F\u043E\u0433\u0440\u0430\u0444\u0438\u043A\u0443 \u0434\u043B\u044F \u0432\u0441\u0435\u0445 \u0441\u0442\u0438\u043B\u0435\u0439 \u0438\u043B\u0438 \u0434\u043B\u044F \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0445."));
}

MDXContent.displayName = "MDXContent";
;
MDXContent.isMDXComponent = true;
var __page = function __page() {
  throw new Error("Docs-only story");
};
__page.parameters = {
  docsOnly: true
};
var componentMeta = {
  title: 'Dev / Global',
  includeStories: ["__page"]
};
var mdxStoryNameToKey = {};
componentMeta.parameters = componentMeta.parameters || {};
componentMeta.parameters.docs = Object.assign({}, componentMeta.parameters.docs || {}, {
  page: function page() {
    return Object(esm["mdx"])(blocks["AddContext"], {
      mdxStoryNameToKey: mdxStoryNameToKey,
      mdxComponentMeta: componentMeta
    }, Object(esm["mdx"])(MDXContent, null));
  }
});
/* harmony default export */ var global_stories = __webpack_exports__["default"] = (componentMeta);

/***/ }),

/***/ 1183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "__page", function() { return /* binding */ __page; });

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__(11);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(5);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(6);

// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.0-ac51e3f61d-2.zip/node_modules/react/index.js
var react = __webpack_require__(1);

// EXTERNAL MODULE: ./.yarn/$$virtual/@mdx-js-react-virtual-8208367119/0/cache/@mdx-js-react-npm-1.6.22-57e4c05c2b-2.zip/node_modules/@mdx-js/react/dist/esm.js
var esm = __webpack_require__(0);

// EXTERNAL MODULE: ./.yarn/$$virtual/@storybook-addon-docs-virtual-45dd9fae32/0/cache/@storybook-addon-docs-npm-6.1.11-e93c9ca8c3-2.zip/node_modules/@storybook/addon-docs/blocks.js
var blocks = __webpack_require__(2);

// EXTERNAL MODULE: ./.yarn/$$virtual/@emotion-core-virtual-9244315116/0/cache/@emotion-core-npm-10.1.1-f084e0eeac-2.zip/node_modules/@emotion/core/dist/core.browser.esm.js + 4 modules
var core_browser_esm = __webpack_require__(3);

// CONCATENATED MODULE: ./.storybook/docgen/Theme.tsx

var Theme_Theme = function Theme() {
  return Object(core_browser_esm["jsx"])("div", null);
};
var Theme_Tokens = function Tokens() {
  return Object(core_browser_esm["jsx"])("div", null);
};
var Theme_ComponentsTheme = function ComponentsTheme() {
  return Object(core_browser_esm["jsx"])("div", null);
};

try {
  // @ts-ignore
  Theme_Theme.displayName = "Theme"; // @ts-ignore

  Theme_Theme.__docgenInfo = {
    "description": "",
    "displayName": "Theme",
    "props": {
      "global": {
        "defaultValue": null,
        "description": "Global theme settings.",
        "name": "global",
        "required": false,
        "type": {
          "name": "GlobalTheme | undefined"
        }
      },
      "components": {
        "defaultValue": null,
        "description": "Components theme settings.",
        "name": "components",
        "required": false,
        "type": {
          "name": "ComponentsTheme | undefined"
        }
      },
      "palettes": {
        "defaultValue": null,
        "description": "Palettes theme settings. You can get these settings via tokens from `Palettes` frame.",
        "name": "palettes",
        "required": false,
        "type": {
          "name": "Record<string, string[]> | undefined"
        }
      },
      "colors": {
        "defaultValue": null,
        "description": "Colors theme settings. You can get these settings via tokens from `Colors` frame.",
        "name": "colors",
        "required": false,
        "type": {
          "name": "Record<string, string> | undefined"
        }
      },
      "shadows": {
        "defaultValue": null,
        "description": "Shadows theme settings. You can get these settings via tokens from `Shadows` frame.",
        "name": "shadows",
        "required": false,
        "type": {
          "name": "Record<string, string> | undefined"
        }
      },
      "typography": {
        "defaultValue": null,
        "description": "Typography theme settings. You can get these settings via tokens from `Typography` frame.",
        "name": "typography",
        "required": false,
        "type": {
          "name": "TypographyTheme | undefined"
        }
      },
      "layout": {
        "defaultValue": null,
        "description": "Layout theme settings. You can get these settings via tokens from `Layout` frame.",
        "name": "layout",
        "required": false,
        "type": {
          "name": "LayoutTheme | undefined"
        }
      }
    }
  }; // @ts-ignore

  if (typeof STORYBOOK_REACT_CLASSES !== "undefined") // @ts-ignore
    STORYBOOK_REACT_CLASSES[".storybook/docgen/Theme.tsx#Theme"] = {
      docgenInfo: Theme_Theme.__docgenInfo,
      name: "Theme",
      path: ".storybook/docgen/Theme.tsx#Theme"
    };
} catch (__react_docgen_typescript_loader_error) {}

try {
  // @ts-ignore
  Theme_Tokens.displayName = "Tokens"; // @ts-ignore

  Theme_Tokens.__docgenInfo = {
    "description": "",
    "displayName": "Tokens",
    "props": {
      "palettes": {
        "defaultValue": null,
        "description": "Palettes theme settings. You can get these settings via tokens from `Palettes` frame.",
        "name": "palettes",
        "required": false,
        "type": {
          "name": "Record<string, string[]> | undefined"
        }
      },
      "colors": {
        "defaultValue": null,
        "description": "Colors theme settings. You can get these settings via tokens from `Colors` frame.",
        "name": "colors",
        "required": false,
        "type": {
          "name": "Record<string, string> | undefined"
        }
      },
      "shadows": {
        "defaultValue": null,
        "description": "Shadows theme settings. You can get these settings via tokens from `Shadows` frame.",
        "name": "shadows",
        "required": false,
        "type": {
          "name": "Record<string, string> | undefined"
        }
      },
      "typography": {
        "defaultValue": null,
        "description": "Typography theme settings. You can get these settings via tokens from `Typography` frame.",
        "name": "typography",
        "required": false,
        "type": {
          "name": "TypographyTheme | undefined"
        }
      },
      "layout": {
        "defaultValue": null,
        "description": "Layout theme settings. You can get these settings via tokens from `Layout` frame.",
        "name": "layout",
        "required": false,
        "type": {
          "name": "LayoutTheme | undefined"
        }
      }
    }
  }; // @ts-ignore

  if (typeof STORYBOOK_REACT_CLASSES !== "undefined") // @ts-ignore
    STORYBOOK_REACT_CLASSES[".storybook/docgen/Theme.tsx#Tokens"] = {
      docgenInfo: Theme_Tokens.__docgenInfo,
      name: "Tokens",
      path: ".storybook/docgen/Theme.tsx#Tokens"
    };
} catch (__react_docgen_typescript_loader_error) {}

try {
  // @ts-ignore
  Theme_ComponentsTheme.displayName = "ComponentsTheme"; // @ts-ignore

  Theme_ComponentsTheme.__docgenInfo = {
    "description": "",
    "displayName": "ComponentsTheme",
    "props": {
      "Button": {
        "defaultValue": null,
        "description": "`Button` component theme settings.",
        "name": "Button",
        "required": false,
        "type": {
          "name": "ButtonTheme | undefined"
        }
      }
    }
  }; // @ts-ignore

  if (typeof STORYBOOK_REACT_CLASSES !== "undefined") // @ts-ignore
    STORYBOOK_REACT_CLASSES[".storybook/docgen/Theme.tsx#ComponentsTheme"] = {
      docgenInfo: Theme_ComponentsTheme.__docgenInfo,
      name: "ComponentsTheme",
      path: ".storybook/docgen/Theme.tsx#ComponentsTheme"
    };
} catch (__react_docgen_typescript_loader_error) {}
// CONCATENATED MODULE: ./stories/dev/theming.stories.mdx




function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsxRuntime classic */

/* @jsx mdx */




var layoutProps = {};
var MDXLayout = "wrapper";

function MDXContent(_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(esm["mdx"])(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(esm["mdx"])(blocks["Meta"], {
    title: "Dev / Theming",
    mdxType: "Meta"
  }), Object(esm["mdx"])("h1", {
    "id": "theming"
  }, "Theming"), Object(esm["mdx"])("p", null, "GDS - \u044D\u0442\u043E \u043C\u0443\u043B\u044C\u0442\u0438\u0431\u0440\u0435\u043D\u0434\u043E\u0432\u0430\u044F \u0434\u0438\u0437\u0430\u0439\u043D-\u0441\u0438\u0441\u0442\u0435\u043C\u0430. \u0414\u043B\u044F \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u044F \u043C\u0443\u043B\u044C\u0442\u0438\u0431\u0440\u0435\u043D\u0434\u043E\u0432\u043E\u0441\u0442\u0438 \u043F\u0440\u0438\u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u0442\u0435\u043C\u0438\u0437\u0430\u0446\u0438\u044F. \u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B GDS \u043E\u0436\u0438\u0434\u0430\u044E\u0442 \u0443\u0432\u0438\u0434\u0435\u0442\u044C \u0442\u0435\u043C\u0443 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0451\u043D\u043D\u043E\u0433\u043E \u0444\u043E\u0440\u043C\u0430\u0442\u0430, \u0447\u0438\u0442\u0430\u044F \u0438\u0437 \u043D\u0435\u0451 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F. \u0412\u0430\u0448\u0430 \u0437\u0430\u0434\u0430\u0447\u0430 - \u0441\u043E\u0431\u043B\u044E\u0441\u0442\u0438 \u044D\u0442\u043E\u0442 \u0434\u043E\u0433\u043E\u0432\u043E\u0440."), Object(esm["mdx"])("p", null, "\u0422\u0435\u043C\u0430 \u043F\u0435\u0440\u0435\u0434\u0430\u0451\u0442\u0441\u044F \u0432 GDS \u0447\u0435\u0440\u0435\u0437 ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "ThemeProvider"), ". \u041C\u043E\u0436\u043D\u043E \u0443\u043A\u0430\u0437\u0430\u0442\u044C \u0431\u0430\u0437\u043E\u0432\u0443\u044E \u0442\u0435\u043C\u0443 \u0438\u043B\u0438 \u043A\u0430\u0441\u0442\u043E\u043C\u043D\u0443\u044E. \u0411\u0430\u0437\u043E\u0432\u0430\u044F \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0430 \u0432\u043D\u0443\u0442\u0440\u0438 GDS \u0438 \u043F\u043E \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u044E \u0441\u043E\u0431\u043B\u044E\u0434\u0430\u0435\u0442 \u0444\u043E\u0440\u043C\u0430\u0442 - \u044D\u0442\u0430 \u0442\u0435\u043C\u0430 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0432\u043D\u0443\u0442\u0440\u0438 \u0441\u0430\u043C\u043E\u0433\u043E GDS. \u041A\u0430\u0441\u0442\u043E\u043C\u043D\u0430\u044F \u0442\u0435\u043C\u0430 \u0441\u043E\u0437\u0434\u0430\u0451\u0442\u0441\u044F \u0447\u0435\u0440\u0435\u0437 \u0445\u0435\u043B\u043F\u0435\u0440 ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "createTheme"), "."), Object(esm["mdx"])("p", null, "\u0412 ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "createTheme"), " \u043F\u0435\u0440\u0435\u0434\u0430\u044E\u0442\u0441\u044F \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043D\u044B\u0435 \u0442\u043E\u043A\u0435\u043D\u044B \u0447\u0435\u0440\u0435\u0437 \u043F\u043E\u043B\u0435 ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "tokens"), " (\u0435\u0441\u043B\u0438 \u043E\u043D\u0438 \u0435\u0441\u0442\u044C) \u0438 \u0447\u0435\u0440\u0435\u0437 ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "settings"), " \u0438\u0434\u0443\u0442 \u0432\u0441\u0435 \u043E\u0441\u0442\u0430\u043B\u044C\u043D\u044B\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438. ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "settings"), " \u043D\u0430\u0441\u043B\u0435\u0434\u0443\u0435\u0442 ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "tokens"), ", \u0442.\u0435. \u044D\u0442\u043E \u0432\u0441\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0438\u0437 \u0442\u043E\u043A\u0435\u043D\u043E\u0432, + \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0435."), Object(esm["mdx"])("p", null, "\uD83D\uDCAC \u0425\u0435\u043B\u043F\u0435\u0440 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442 \u0433\u043B\u0443\u0431\u043E\u043A\u0438\u0439 \u043C\u0435\u0440\u0436 \u0442\u043E\u043A\u0435\u043D\u043E\u0432 \u0438 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A, \u0442\u0430\u043A \u0447\u0442\u043E \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0434\u043E\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0442\u044C \u0432 ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "settings"), " \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435 ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "tokens"), ", \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u043E\u0432\u044B\u0439 \u0446\u0432\u0435\u0442 \u0432 ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "colors"), "."), Object(esm["mdx"])("h2", {
    "id": "theme"
  }, "Theme"), Object(esm["mdx"])(blocks["Props"], {
    components: {
      Theme: Theme_Theme,
      Tokens: Theme_Tokens,
      ComponentsTheme: Theme_ComponentsTheme
    },
    mdxType: "Props"
  }), Object(esm["mdx"])("p", null, "\u0418\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u044B \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0445 \u0440\u0430\u0437\u0434\u0435\u043B\u043E\u0432 \u0442\u0435\u043C\u044B \u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0445 \u0440\u0430\u0437\u0434\u0435\u043B\u0430\u0445 ", Object(esm["mdx"])("strong", {
    parentName: "p"
  }, "Dev"), ", \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432 - \u0432 ", Object(esm["mdx"])("strong", {
    parentName: "p"
  }, "Components"), "."), Object(esm["mdx"])("h2", {
    "id": "custom-theme-example"
  }, "Custom theme example"), Object(esm["mdx"])("p", null, "\u0414\u043E\u043F\u0443\u0441\u0442\u0438\u043C, \u0442\u043E\u043A\u0435\u043D\u044B \u0443\u0436\u0435 \u0441\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u044B \u0438 \u043D\u0430\u043C \u043D\u0443\u0436\u043D\u043E \u043F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C \u0438\u0445 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0438 \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u043A\u043D\u043E\u043F\u043A\u0438 \u2013 \u043A\u0430\u043A \u0437\u0430\u0434\u0430\u0442\u044C \u0442\u0435\u043C\u0443?"), Object(esm["mdx"])("p", null, "\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0441\u043E\u0437\u0434\u0430\u0434\u0438\u043C \u0442\u0435\u043C\u0443, \u0443\u043A\u0430\u0437\u0430\u0432 \u0432 \u043D\u0435\u0439 \u043D\u0430\u0448\u0438 \u0442\u043E\u043A\u0435\u043D\u044B:"), Object(esm["mdx"])("pre", null, Object(esm["mdx"])("code", _extends({
    parentName: "pre"
  }, {
    "className": "language-js"
  }), "import { createTheme } from '@greensight/gds';\nimport tokens from '../../../public/tokens.json';\n\nconst theme = createTheme({\n    tokens,\n});\n\nexport default theme;\n")), Object(esm["mdx"])("p", null, "\u0411\u0435\u0437 \u0443\u043A\u0430\u0437\u0430\u043D\u0438\u044F ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "settings"), " \u0442\u0435\u043C\u0430 \u0443\u0436\u0435 \u0434\u043E\u043B\u0436\u043D\u0430 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C, \u0438 \u0432\u044B \u0443\u0432\u0438\u0434\u0438\u0442\u0435 \u0430\u0432\u0442\u043E\u043A\u0438\u0442\u044B, \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u044B\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F\u043C\u0438 \u0438\u0437 \u0442\u043E\u043A\u0435\u043D\u043E\u0432."), Object(esm["mdx"])("p", null, "\u0414\u0430\u043B\u0435\u0435 \u0443\u043A\u0430\u0436\u0435\u043C Global \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0435 \u0440\u0435\u0433\u0443\u043B\u0438\u0440\u0443\u044E\u0442\u0441\u044F \u0447\u0435\u0440\u0435\u0437 \u0442\u043E\u043A\u0435\u043D\u044B: \u043F\u0435\u0440\u0435\u0434\u0430\u0434\u0438\u043C \u0441\u0432\u043E\u044E placeholder-\u0438\u043A\u043E\u043D\u043A\u0443, \u043F\u0440\u043E\u043F\u0438\u0448\u0435\u043C \u0431\u0430\u0437\u043E\u0432\u044B\u0435 \u0441\u0442\u0438\u043B\u0438 \u0438 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u043C \u0448\u0440\u0438\u0444\u0442\u044B:"), Object(esm["mdx"])("pre", null, Object(esm["mdx"])("code", _extends({
    parentName: "pre"
  }, {
    "className": "language-js"
  }), "import { createTheme } from '@greensight/gds';\nimport tokens from '../../../public/tokens.json';\nimport PlaceholderIcon from '../images/icons/tokens/medium/placeholder.svg';\n\nconst { colors } = tokens;\n\nconst theme = createTheme({\n    tokens,\n    settings: {\n        global: {\n            placeholder: PlaceholderIcon,\n            base: {\n                body: {\n                    typography: 'body',\n                    color: colors.black,\n                    bg: colors.white,\n                },\n                focus: {\n                    width: 2,\n                    color: colors.brand,\n                    offset: 2,\n                },\n                selection: {\n                    color: colors.white,\n                    bg: colors.brand,\n                },\n            },\n            fonts: {\n                fontFace: {\n                    'PT Root UI': [\n                        {\n                            woff2: 'fonts/PTRootUI-Regular.woff2',\n                            woff: 'fonts/PTRootUI-Regular.woff',\n                        },\n                        {\n                            woff2: 'fonts/PTRootUI-Medium.woff2',\n                            woff: 'fonts/PTRootUI-Medium.woff',\n                            weight: 500,\n                        },\n                        {\n                            woff2: 'fonts/PTRootUI-Bold.woff2',\n                            woff: 'fonts/PTRootUI-Bold.woff',\n                            weight: 700,\n                        },\n                        {\n                            vf: 'fonts/PTRootUI-VF.woff2',\n                            weight: '300 700',\n                        },\n                    ],\n                },\n                stacks: {\n                    'PT Root UI':\n                        '-apple-system, BlinkMacSystemFont, \"Segoe UI\", \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"',\n                },\n            },\n        },\n    },\n});\n\nexport default theme;\n")), Object(esm["mdx"])("p", null, "\uD83D\uDCAC \u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435, \u0447\u0442\u043E \u043C\u044B \u043E\u0431\u0440\u0430\u0442\u0438\u043B\u0438\u0441\u044C \u043A \u043F\u043E\u043B\u044F\u043C \u0442\u043E\u043A\u0435\u043D\u043E\u0432, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u0446\u0432\u0435\u0442\u043E\u0432."), Object(esm["mdx"])("p", null, "\u0418 \u043D\u0430\u043A\u043E\u043D\u0435\u0446 \u0434\u043E\u0431\u0430\u0432\u0438\u043C \u043A\u043D\u043E\u043F\u043A\u0443. \u0414\u043B\u044F \u043F\u0440\u0438\u043C\u0435\u0440\u0430 \u0431\u0443\u0434\u0435\u0442 \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u043E\u0434\u043D\u043E\u0439 \u0442\u0435\u043C\u044B \u0438 \u043E\u0434\u043D\u043E\u0433\u043E \u0440\u0430\u0437\u043C\u0435\u0440\u0430:"), Object(esm["mdx"])("pre", null, Object(esm["mdx"])("code", _extends({
    parentName: "pre"
  }, {
    "className": "language-js"
  }), "import { createTheme, scale } from '@greensight/gds';\nimport tokens from '../../../public/tokens.json';\nimport PlaceholderIcon from '../images/icons/tokens/medium/placeholder.svg';\n\nconst { colors, shadows } = tokens;\n\nconst theme = createTheme({\n    tokens,\n    settings: {\n        global: {\n            placeholder: PlaceholderIcon,\n            base: {\n                body: {\n                    typography: 'body',\n                    color: colors.black,\n                    bg: colors.white,\n                },\n                focus: {\n                    width: 2,\n                    color: colors.brand,\n                    offset: 2,\n                },\n                selection: {\n                    color: colors.white,\n                    bg: colors.brand,\n                },\n            },\n            fonts: {\n                fontFace: {\n                    'PT Root UI': [\n                        {\n                            woff2: 'fonts/PTRootUI-Regular.woff2',\n                            woff: 'fonts/PTRootUI-Regular.woff',\n                        },\n                        {\n                            woff2: 'fonts/PTRootUI-Medium.woff2',\n                            woff: 'fonts/PTRootUI-Medium.woff',\n                            weight: 500,\n                        },\n                        {\n                            woff2: 'fonts/PTRootUI-Bold.woff2',\n                            woff: 'fonts/PTRootUI-Bold.woff',\n                            weight: 700,\n                        },\n                        {\n                            vf: 'fonts/PTRootUI-VF.woff2',\n                            weight: '300 700',\n                        },\n                    ],\n                },\n                stacks: {\n                    'PT Root UI':\n                        '-apple-system, BlinkMacSystemFont, \"Segoe UI\", \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"',\n                },\n            },\n        },\n        components: {\n            Button: {\n                sizes: {\n                    md: {\n                        height: scale(6),\n                        padding: scale(3),\n                        iconSize: scale(3),\n                        iconOffset: scale(1),\n                        typography: 'buttonMd',\n                    },\n                },\n                themes: {\n                    primary: {\n                        default: {\n                            color: colors.white,\n                            bg: colors.brand,\n                        },\n                        hover: {\n                            bg: colors.brandHover,\n                        },\n                        active: {\n                            border: 'transparent',\n                            shadow: shadows.inner,\n                        },\n                        disabled: {\n                            bg: colors.grey70,\n                            color: colors.grey40,\n                        },\n                    },\n                },\n            },\n        },\n    },\n});\n\nexport default theme;\n")), Object(esm["mdx"])("p", null, "\u041F\u043E\u0437\u0434\u0440\u0430\u0432\u043B\u044F\u044E, \u0443 \u0432\u0430\u0441 \u0435\u0441\u0442\u044C \u043A\u043D\u043E\u043F\u043A\u0430! \u0414\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u0432\u0430\u0440\u0438\u0430\u0446\u0438\u0438 \u0434\u043E\u043B\u0436\u043D\u044B \u043E\u0442\u0440\u0430\u0437\u0438\u0442\u044C\u0441\u044F \u0432 \u0430\u0432\u0442\u043E\u043A\u0438\u0442\u0435."));
}

MDXContent.displayName = "MDXContent";
;
MDXContent.isMDXComponent = true;
var __page = function __page() {
  throw new Error("Docs-only story");
};
__page.parameters = {
  docsOnly: true
};
var componentMeta = {
  title: 'Dev / Theming',
  includeStories: ["__page"]
};
var mdxStoryNameToKey = {};
componentMeta.parameters = componentMeta.parameters || {};
componentMeta.parameters.docs = Object.assign({}, componentMeta.parameters.docs || {}, {
  page: function page() {
    return Object(esm["mdx"])(blocks["AddContext"], {
      mdxStoryNameToKey: mdxStoryNameToKey,
      mdxComponentMeta: componentMeta
    }, Object(esm["mdx"])(MDXContent, null));
  }
});
/* harmony default export */ var theming_stories = __webpack_exports__["default"] = (componentMeta);

/***/ }),

/***/ 1184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "__page", function() { return /* binding */ __page; });

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__(11);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(5);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(6);

// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.0-ac51e3f61d-2.zip/node_modules/react/index.js
var react = __webpack_require__(1);

// EXTERNAL MODULE: ./.yarn/$$virtual/@mdx-js-react-virtual-8208367119/0/cache/@mdx-js-react-npm-1.6.22-57e4c05c2b-2.zip/node_modules/@mdx-js/react/dist/esm.js
var esm = __webpack_require__(0);

// EXTERNAL MODULE: ./.yarn/$$virtual/@storybook-addon-docs-virtual-45dd9fae32/0/cache/@storybook-addon-docs-npm-6.1.11-e93c9ca8c3-2.zip/node_modules/@storybook/addon-docs/blocks.js
var blocks = __webpack_require__(2);

// EXTERNAL MODULE: ./.yarn/$$virtual/@emotion-core-virtual-9244315116/0/cache/@emotion-core-npm-10.1.1-f084e0eeac-2.zip/node_modules/@emotion/core/dist/core.browser.esm.js + 4 modules
var core_browser_esm = __webpack_require__(3);

// CONCATENATED MODULE: ./.storybook/docgen/Typography.tsx

var Typography_TypographyTheme = function TypographyTheme() {
  return Object(core_browser_esm["jsx"])("div", null);
};
var Typography_TypographyProperties = function TypographyProperties() {
  return Object(core_browser_esm["jsx"])("div", null);
};
var Typography_TypographyStyle = function TypographyStyle() {
  return Object(core_browser_esm["jsx"])("div", null);
};

try {
  // @ts-ignore
  Typography_TypographyTheme.displayName = "TypographyTheme"; // @ts-ignore

  Typography_TypographyTheme.__docgenInfo = {
    "description": "",
    "displayName": "TypographyTheme",
    "props": {
      "breakpoints": {
        "defaultValue": null,
        "description": "Breakpoint for desktop and mobile styles. Accept 2 numbers in format: [desktop, mobile].",
        "name": "breakpoints",
        "required": true,
        "type": {
          "name": "number[]"
        }
      },
      "styles": {
        "defaultValue": null,
        "description": "Named typography styles.",
        "name": "styles",
        "required": true,
        "type": {
          "name": "Record<string, TypographyStyle>"
        }
      }
    }
  }; // @ts-ignore

  if (typeof STORYBOOK_REACT_CLASSES !== "undefined") // @ts-ignore
    STORYBOOK_REACT_CLASSES[".storybook/docgen/Typography.tsx#TypographyTheme"] = {
      docgenInfo: Typography_TypographyTheme.__docgenInfo,
      name: "TypographyTheme",
      path: ".storybook/docgen/Typography.tsx#TypographyTheme"
    };
} catch (__react_docgen_typescript_loader_error) {}

try {
  // @ts-ignore
  Typography_TypographyProperties.displayName = "TypographyProperties"; // @ts-ignore

  Typography_TypographyProperties.__docgenInfo = {
    "description": "",
    "displayName": "TypographyProperties",
    "props": {
      "fontFamily": {
        "defaultValue": null,
        "description": "`font-family` CSS property specifies a font family name. Specify only main font (Example: `'PT Root UI'`). Fallback fonts are defined separately in `global.fonts.stacks` setting.",
        "name": "fontFamily",
        "required": true,
        "type": {
          "name": "string"
        }
      },
      "fontWeight": {
        "defaultValue": null,
        "description": "`font-weight` CSS property specifies the weight of the font. Specify value in numbers (Example: `400`).",
        "name": "fontWeight",
        "required": true,
        "type": {
          "name": "number"
        }
      },
      "fontSize": {
        "defaultValue": null,
        "description": "`font-size` CSS property (rem) sets the size of the font. Specify value in rems (Example: `'1rem'`).",
        "name": "fontSize",
        "required": true,
        "type": {
          "name": "string"
        }
      },
      "lineHeight": {
        "defaultValue": null,
        "description": "`line-height` CSS property (\u043C\u043D\u043E\u0436\u0438\u0442\u0435\u043B\u044C) sets the amount of space used for lines. Specify value in numbers (Example: `1.5`).",
        "name": "lineHeight",
        "required": true,
        "type": {
          "name": "number"
        }
      },
      "letterSpacing": {
        "defaultValue": null,
        "description": "`letter-spacing` sets the spacing behavior between text characters. Specify value in ems (Example: `'0.002em'`).",
        "name": "letterSpacing",
        "required": false,
        "type": {
          "name": "string | undefined"
        }
      },
      "fontStyle": {
        "defaultValue": null,
        "description": "`fontStyle` CSS property sets whether a font should be styled with a italic face.",
        "name": "fontStyle",
        "required": false,
        "type": {
          "name": "\"italic\" | undefined"
        }
      },
      "textTransform": {
        "defaultValue": null,
        "description": "`text-transform` CSS property specifies how to capitalize an element's text.",
        "name": "textTransform",
        "required": false,
        "type": {
          "name": "\"uppercase\" | \"lowercase\" | \"capitalize\" | undefined"
        }
      },
      "textDecoration": {
        "defaultValue": null,
        "description": "`text-decoration` CSS property sets the appearance of decorative lines on text.",
        "name": "textDecoration",
        "required": false,
        "type": {
          "name": "\"underline\" | \"line-through\" | undefined"
        }
      },
      "fontVariantNumeric": {
        "defaultValue": null,
        "description": "`font-variant-numeric` CSS property controls the usage of alternate glyphs for numbers.",
        "name": "fontVariantNumeric",
        "required": false,
        "type": {
          "name": "string | undefined"
        }
      }
    }
  }; // @ts-ignore

  if (typeof STORYBOOK_REACT_CLASSES !== "undefined") // @ts-ignore
    STORYBOOK_REACT_CLASSES[".storybook/docgen/Typography.tsx#TypographyProperties"] = {
      docgenInfo: Typography_TypographyProperties.__docgenInfo,
      name: "TypographyProperties",
      path: ".storybook/docgen/Typography.tsx#TypographyProperties"
    };
} catch (__react_docgen_typescript_loader_error) {}

try {
  // @ts-ignore
  Typography_TypographyStyle.displayName = "TypographyStyle"; // @ts-ignore

  Typography_TypographyStyle.__docgenInfo = {
    "description": "",
    "displayName": "TypographyStyle",
    "props": {
      "desktop": {
        "defaultValue": null,
        "description": "Desktop typography properties.",
        "name": "desktop",
        "required": true,
        "type": {
          "name": "TypographyProperties"
        }
      },
      "mobile": {
        "defaultValue": null,
        "description": "Mobile typography properties.",
        "name": "mobile",
        "required": false,
        "type": {
          "name": "TypographyProperties | undefined"
        }
      }
    }
  }; // @ts-ignore

  if (typeof STORYBOOK_REACT_CLASSES !== "undefined") // @ts-ignore
    STORYBOOK_REACT_CLASSES[".storybook/docgen/Typography.tsx#TypographyStyle"] = {
      docgenInfo: Typography_TypographyStyle.__docgenInfo,
      name: "TypographyStyle",
      path: ".storybook/docgen/Typography.tsx#TypographyStyle"
    };
} catch (__react_docgen_typescript_loader_error) {}
// CONCATENATED MODULE: ./stories/dev/typography.stories.mdx




function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsxRuntime classic */

/* @jsx mdx */




var layoutProps = {};
var MDXLayout = "wrapper";

function MDXContent(_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(esm["mdx"])(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(esm["mdx"])(blocks["Meta"], {
    title: "Dev / Typography",
    mdxType: "Meta"
  }), Object(esm["mdx"])("h1", {
    "id": "typography-️"
  }, "Typography \u2728\u2699\uFE0F\uD83E\uDD16"), Object(esm["mdx"])("p", null, "\u0414\u0438\u0437\u0430\u0439\u043D\u0435\u0440 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442 \u0432\u0441\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0435 \u0432\u0430\u0440\u0438\u0430\u0446\u0438\u0438 \u0442\u0438\u043F\u043E\u0433\u0440\u0430\u0444\u0438\u043A\u0438 \u0432 Figma \u043D\u0430 \u0444\u0440\u0435\u0439\u043C\u0435 ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "Typography"), ", \u0432\u044B\u0434\u0435\u043B\u044F\u0435\u0442 \u043F\u043E\u0434 \u043D\u0438\u0445 \u0441\u0442\u0438\u043B\u0438 \u0438 \u043F\u0440\u0438\u043C\u0435\u043D\u044F\u0435\u0442 \u043D\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u0435. \u0421\u0442\u0438\u043B\u0438 \u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u044B \u043D\u0430 2 \u0440\u0430\u0437\u043C\u0435\u0440\u0430: ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "desktop"), " \u0438 ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "mobile"), ", \u043F\u0440\u0438 \u044D\u0442\u043E\u043C ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "mobile"), " \u043C\u043E\u0436\u0435\u0442 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C. \u0422\u0430\u043A\u0436\u0435 \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0431\u0440\u0435\u0439\u043A\u043F\u043E\u0438\u043D\u0442\u043E\u0432 \u0434\u043B\u044F ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "desktop"), " \u0438 ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "mobile"), "."), Object(esm["mdx"])("img", {
    src: "images/typography/style-properties.png",
    alt: "\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u0441\u0442\u0438\u043B\u044F Figma",
    width: "500"
  }), Object(esm["mdx"])("p", null, Object(esm["mdx"])("em", {
    parentName: "p"
  }, "\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u0441\u0442\u0438\u043B\u044F Figma")), Object(esm["mdx"])("p", null, "\u0412\u0441\u0435 \u044D\u0442\u0438 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u044E\u0442\u0441\u044F \u043D\u0430 \u043F\u0440\u043E\u0435\u043A\u0442 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 \u0442\u043E\u043A\u0435\u043D\u043E\u0432. \u0412 \u0434\u0430\u043B\u044C\u043D\u0435\u0439\u0448\u0435\u043C \u043C\u044B \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u043D\u0430 \u0443\u0440\u043E\u0432\u043D\u0435 \u0438\u043C\u0451\u043D \u0441\u0442\u0438\u043B\u0435\u0439, \u043F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u044F \u0438\u0445 \u0432 \u0445\u0435\u043B\u043F\u0435\u0440 ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "typography"), ", \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0432\u0435\u0440\u043D\u0451\u0442 \u0432\u0435\u0441\u044C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0439 CSS."), Object(esm["mdx"])("p", null, "\u2757\uFE0F \u0427\u0442\u043E\u0431\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0432\u0435\u0431-\u0448\u0440\u0438\u0444\u0442\u044B, \u0438\u0445 \u043D\u0443\u0436\u043D\u043E \u0441\u043D\u0430\u0447\u0430\u043B\u0430 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0447\u0435\u0440\u0435\u0437 ", Object(esm["mdx"])("strong", {
    parentName: "p"
  }, "@font-face"), ". \u042D\u0442\u043E \u0434\u0435\u043B\u0430\u0435\u0442\u0441\u044F \u0432 \u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u044B\u0445 \u0441\u0442\u0438\u043B\u044F\u0445 \u2013 \u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u044E ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "ThemeProvider"), "."), Object(esm["mdx"])("h2", {
    "id": "theme"
  }, "Theme"), Object(esm["mdx"])(blocks["Props"], {
    components: {
      TypographyTheme: Typography_TypographyTheme,
      TypographyStyle: Typography_TypographyStyle,
      TypographyProperties: Typography_TypographyProperties
    },
    mdxType: "Props"
  }), Object(esm["mdx"])("h2", {
    "id": "fluid-typography"
  }, "Fluid typography"), Object(esm["mdx"])("p", null, "\u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u0434\u043B\u044F \u0441\u0442\u0438\u043B\u0435\u0439, \u0438\u043C\u0435\u044E\u0449\u0438\u0445 ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "mobile"), " \u0432\u0435\u0440\u0441\u0438\u044E, \u043F\u0440\u0438\u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u043F\u043B\u0430\u0432\u043D\u043E\u0435 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u0440\u0430\u0437\u043C\u0435\u0440\u0430 \u0448\u0440\u0438\u0444\u0442\u0430 \u043C\u0435\u0436\u0434\u0443 \u0434\u0432\u0443\u043C\u044F \u0442\u043E\u0447\u043A\u0430\u043C\u0438, \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u043C\u0438 \u0432 \u043F\u043E\u043B\u0435 ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "breakpoints"), ". \u0412\u043D\u0435 \u044D\u0442\u043E\u0433\u043E \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D\u0430 \u0440\u0430\u0437\u043C\u0435\u0440 \u0444\u0438\u043A\u0441\u0438\u0440\u0443\u0435\u0442\u0441\u044F, \u0447\u0442\u043E\u0431\u044B \u0438\u0437\u0431\u0435\u0436\u0430\u0442\u044C \u0447\u0440\u0435\u0437\u043C\u0435\u0440\u043D\u043E\u0433\u043E \u0443\u043C\u0435\u043D\u044C\u0448\u0435\u043D\u0438\u044F/\u0443\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u0438\u044F. \u0422\u0430\u043A\u043E\u0439 \u043F\u043E\u0434\u0445\u043E\u0434 \u0438\u0437\u0432\u0435\u0441\u0442\u0435\u043D, \u043A\u0430\u043A ", Object(esm["mdx"])("strong", {
    parentName: "p"
  }, "fluid typography with locks"), "."), Object(esm["mdx"])("img", {
    src: "images/typography/fluid-typography.png",
    alt: "\u0424\u043E\u0440\u043C\u0443\u043B\u0430 fluid typography",
    width: "600"
  }), Object(esm["mdx"])("p", null, Object(esm["mdx"])("em", {
    parentName: "p"
  }, "\u0424\u043E\u0440\u043C\u0443\u043B\u0430 fluid typography")), Object(esm["mdx"])("p", null, "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0432 \u0431\u043E\u043B\u044C\u0448\u0438\u0445 \u0441\u043A\u043E\u0431\u043A\u0430\u0445 \u2013 \u044D\u0442\u043E \u043A\u043E\u044D\u0444\u0444\u0438\u0446\u0438\u0435\u043D\u0442. \u041A\u043E\u0433\u0434\u0430 \u043E\u043D \u0440\u0430\u0432\u0435\u043D 0 (current vw = minimum vw), \u0440\u0430\u0437\u043C\u0435\u0440 \u043F\u0440\u0438\u0440\u0430\u0432\u043D\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043A \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u043C\u0443, \u043A\u043E\u0433\u0434\u0430 \u043E\u043D \u0440\u0430\u0432\u0435\u043D 1 (current vw = maximum vw) \u2013 \u043A \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u043C\u0443. \u041F\u0440\u043E\u043C\u0435\u0436\u0443\u0442\u043E\u0447\u043D\u044B\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u043F\u043E\u043B\u0443\u0447\u0430\u044E\u0442\u0441\u044F \u0443\u043A\u0430\u0437\u0430\u043D\u0438\u0435\u043C \u0432 current vw \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0432 100vw. \u0412 minimum vw \u043F\u0440\u0438 \u044D\u0442\u043E\u043C \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0440\u0430\u0437\u043C\u0435\u0440 \u0448\u0440\u0438\u0444\u0442\u0430 \u0432 rem, \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u043B \u0441\u043A\u0435\u0439\u043B\u0438\u043D\u0433 \u043E\u0442 \u0432\u0435\u043B\u0438\u0447\u0438\u043D\u044B \u0434\u0435\u0444\u043E\u043B\u0442\u043D\u043E\u0433\u043E \u0448\u0440\u0438\u0444\u0442\u0430 \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F."), Object(esm["mdx"])("p", null, "\uD83D\uDCDA \u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 \u043F\u043E\u0434\u0445\u043E\u0434 \u0440\u0430\u0437\u043E\u0431\u0440\u0430\u043D \u0432 \u0441\u0442\u0430\u0442\u044C\u0435: ", Object(esm["mdx"])("a", _extends({
    parentName: "p"
  }, {
    "href": "https://blog.logrocket.com/the-elements-of-responsive-typography/",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer"
  }), "The elements of responsive typography")), Object(esm["mdx"])("p", null, "\u0414\u0438\u0437\u0430\u0439\u043D\u0435\u0440 \u043C\u043E\u0436\u0435\u0442 \u043F\u043E\u043F\u0440\u043E\u0441\u0438\u0442\u044C \u043E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0444\u043B\u044E\u0438\u0434\u043D\u0443\u044E \u0442\u0438\u043F\u043E\u0433\u0440\u0430\u0444\u0438\u043A\u0443 \u0434\u043B\u044F \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u0438\u043B\u0438 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0445 \u0441\u0442\u0438\u043B\u0435\u0439. \u042D\u0442\u043E \u043C\u043E\u0436\u043D\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0447\u0435\u0440\u0435\u0437 \u043F\u043E\u043B\u0435 ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "global.fonts.fluid"), " \u043E\u0431\u044A\u0435\u043A\u0442\u0430 \u0442\u0435\u043C\u044B."), Object(esm["mdx"])("h2", {
    "id": "variable-fonts"
  }, "Variable fonts"), Object(esm["mdx"])("p", null, "\u23F1 \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0432\u0430\u0440\u0438\u0430\u0442\u0438\u0432\u043D\u044B\u0435 \u0448\u0440\u0438\u0444\u0442\u044B, \u0447\u0442\u043E\u0431\u044B \u0437\u043D\u0430\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0441\u043D\u0438\u0437\u0438\u0442\u044C \u0440\u0430\u0437\u043C\u0435\u0440 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043C\u044B\u0445 \u0448\u0440\u0438\u0444\u0442\u043E\u0432. \u0422\u0430\u043A\u043E\u0439 \u0448\u0440\u0438\u0444\u0442 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043E\u0434\u0438\u043D \u0444\u0430\u0439\u043B, \u0432\u0435\u0441\u043E\u043C \u0441\u0440\u0430\u0432\u043D\u0438\u043C\u044B\u0439 \u0441 \u043E\u0434\u043D\u0438\u043C \u043D\u0430\u0447\u0435\u0440\u0442\u0430\u043D\u0438\u0435\u043C, \u0432\u043C\u0435\u0441\u0442\u043E \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0430 \u0430\u0441\u0441\u0435\u0442\u043E\u0432 \u043F\u043E\u0434 \u043A\u0430\u0436\u0434\u0443\u044E \u0432\u0430\u0440\u0438\u0430\u0446\u0438\u044E ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "font-weight"), "."), Object(esm["mdx"])("p", null, "\u0422\u0430\u043A\u0436\u0435 \u0432\u0430\u0440\u0438\u0430\u0442\u0438\u0432\u043D\u044B\u0435 \u0448\u0440\u0438\u0444\u0442\u044B \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u044E\u0442 \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u044B\u0435 \u0440\u0430\u043D\u0435\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u0432 \u0432\u0438\u0434\u0435 \u0430\u043D\u0438\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0433\u043E \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0436\u0438\u0440\u043D\u043E\u0441\u0442\u0438 \u0438 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u0447\u044B\u0445 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A \u0448\u0440\u0438\u0444\u0442\u0430. \u041E\u0434\u043D\u0430\u043A\u043E \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 \u044D\u0442\u0438\u0445 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0435\u0439 \u043D\u0430 \u043D\u0430\u0448\u0438\u0445 \u043F\u0440\u043E\u0435\u043A\u0442\u0430\u0445 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0430, \u0442.\u043A. \u0443 Figma \u043D\u0435\u0442 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438 \u0432\u0430\u0440\u0438\u0430\u0442\u0438\u0432\u043D\u044B\u0445 \u0448\u0440\u0438\u0444\u0442\u043E\u0432 \u0438 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043A\u0438\u0440\u0438\u043B\u043B\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0448\u0440\u0438\u0444\u0442\u043E\u0432 \u0441\u0438\u043B\u044C\u043D\u043E \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u043E."), Object(esm["mdx"])("p", null, "\u0425\u0435\u043B\u043F\u0435\u0440 ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "typography"), " \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0432\u0430\u0440\u0438\u0430\u0442\u0438\u0432\u043D\u044B\u0435 \u0448\u0440\u0438\u0444\u0442\u044B. \u0415\u0441\u043B\u0438 \u0432 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0438 \u0448\u0440\u0438\u0444\u0442\u0430 \u0432 \u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u044B\u0445 \u0441\u0442\u0438\u043B\u044F\u0445 \u0443\u043A\u0430\u0437\u0430\u043D\u0430 \u043E\u043F\u0446\u0438\u044F ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "vf"), ", \u0442\u043E \u043E\u043D \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0432\u0430\u0440\u0438\u0430\u0442\u0438\u0432\u043D\u0443\u044E \u0432\u0430\u0440\u0438\u0430\u0446\u0438\u044E \u0432\u043C\u0435\u0441\u0442\u043E \u043E\u0431\u044B\u0447\u043D\u043E\u0439. \u0414\u0435\u0442\u0430\u043B\u0438 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u043E\u043F\u0438\u0441\u0430\u043D\u044B \u0432 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438 ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "ThemeProvider"), "."), Object(esm["mdx"])("p", null, "\uD83D\uDCDA \u041B\u0438\u043A\u0431\u0435\u0437 \u043F\u043E \u0432\u0430\u0440\u0438\u0430\u0442\u0438\u0432\u043D\u044B\u043C \u0448\u0440\u0438\u0444\u0442\u0430\u043C: ", Object(esm["mdx"])("a", _extends({
    parentName: "p"
  }, {
    "href": "https://24ways.org/2019/an-introduction-to-variable-fonts/",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer"
  }), "An introduction to variable fonts")), Object(esm["mdx"])("h2", {
    "id": "font-stacks"
  }, "Font stacks"), Object(esm["mdx"])("p", null, "\u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u0434\u043B\u044F \u0432\u0441\u0435\u0445 \u0448\u0440\u0438\u0444\u0442\u043E\u0432 \u0432 \u043F\u0440\u0430\u0432\u0438\u043B\u043E ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "font-family"), " \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "sans-serif"), " \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0444\u043E\u043B\u0431\u0435\u043A\u0430. \u0415\u0433\u043E \u043C\u043E\u0436\u043D\u043E \u0438 \u043D\u0443\u0436\u043D\u043E \u043F\u0435\u0440\u0435\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0442\u044C, \u0442.\u043A. \u0444\u043E\u043B\u0431\u0435\u043A\u0438 \u0431\u0443\u0434\u0443\u0442 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0442\u044C\u0441\u044F \u0432\u043E \u0432\u0440\u0435\u043C\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0448\u0440\u0438\u0444\u0442\u0430 \u0438 \u043D\u0443\u0436\u043D\u043E \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E \u0441\u043E\u043A\u0440\u0430\u0442\u0438\u0442\u044C \u043E\u0449\u0443\u0449\u0435\u043D\u0438\u0435 \u0432\u0438\u0437\u0443\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0441\u043A\u0430\u0447\u043A\u0430 \u043F\u0440\u0438 \u0441\u043C\u0435\u043D\u0435 \u0448\u0440\u0438\u0444\u0442\u0430 (FOUT)."), Object(esm["mdx"])("p", null, "\u23F1 \u0421\u043A\u0430\u0447\u043E\u043A \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442 \u0438\u0437-\u0437\u0430 \u0442\u043E\u0433\u043E, \u0447\u0442\u043E \u043C\u044B \u0434\u0435\u043B\u0430\u0435\u043C \u0442\u0435\u043A\u0441\u0442 \u0441\u0440\u0430\u0437\u0443 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u043C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044E, \u0447\u0442\u043E \u043A\u0440\u0438\u0442\u0438\u0447\u043D\u043E \u0434\u043B\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439 \u043D\u0430 \u043C\u0435\u0434\u043B\u0435\u043D\u043D\u043E\u043C \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0435, \u0442.\u043A. \u043E\u043D\u0438 \u043F\u0440\u0438\u0448\u043B\u0438 \u043D\u0430 \u0432\u0430\u0448 \u0441\u0430\u0439\u0442 \u043F\u0440\u0435\u0436\u0434\u0435 \u0432\u0441\u0435\u0433\u043E \u0437\u0430 \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u043E\u043C, \u0430 \u0432\u0435\u0431-\u0448\u0440\u0438\u0444\u0442 \u043C\u043E\u0436\u0435\u0442 \u0437\u0430\u043D\u044F\u0442\u044C \u043F\u0440\u0438\u043B\u0438\u0447\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u0434\u043B\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438. \u0422\u0430\u043A\u043E\u0439 \u0440\u0435\u0436\u0438\u043C \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0442\u0435\u043A\u0441\u0442\u0430 \u0430\u043A\u0442\u0438\u0432\u0438\u0440\u0443\u0435\u0442\u0441\u044F \u0447\u0435\u0440\u0435\u0437 ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "font-display: swap"), "."), Object(esm["mdx"])("p", null, "\u0414\u043B\u044F \u0443\u043A\u0430\u0437\u0430\u043D\u0438\u044F \u0441\u0432\u043E\u0438\u0445 \u0444\u043E\u043B\u0431\u0435\u043A\u043E\u0432 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043F\u043E\u043B\u0435 ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "global.fonts.stacks"), " \u043E\u0431\u044A\u0435\u043A\u0442\u0430 \u0442\u0435\u043C\u044B."), Object(esm["mdx"])("p", null, "\u0414\u043B\u044F \u043F\u043E\u0434\u0431\u043E\u0440\u0430 \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u043F\u0440\u043E\u0431\u043E\u0432\u0430\u0442\u044C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C ", Object(esm["mdx"])("a", _extends({
    parentName: "p"
  }, {
    "href": "https://meowni.ca/font-style-matcher/",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer"
  }), "Font style matcher"), "."), Object(esm["mdx"])("h2", {
    "id": "usage"
  }, "Usage"), Object(esm["mdx"])("p", null, "\u0420\u0430\u0431\u043E\u0442\u0430 \u0441 \u0442\u0435\u043A\u0441\u0442\u043E\u043C \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0441\u044F \u0447\u0435\u0440\u0435\u0437 \u0445\u0435\u043B\u043F\u0435\u0440 ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "typography"), "."), Object(esm["mdx"])("p", null, "\u0427\u0442\u043E\u0431\u044B \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0445\u0435\u043B\u043F\u0435\u0440\u043E\u043C \u043D\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u0435, \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043F\u0440\u0438\u0432\u044F\u0437\u0430\u0442\u044C \u043A \u043D\u0435\u043C\u0443 \u0441\u0432\u043E\u0439 \u043E\u0431\u044A\u0435\u043A\u0442 \u0442\u0435\u043C\u044B. \u0414\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u0441\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u0441\u0432\u043E\u0439 \u0441\u043A\u0440\u0438\u043F\u0442 ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "typography"), ", \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0432 \u0434\u0430\u043B\u044C\u043D\u0435\u0439\u0448\u0435\u043C \u0431\u0443\u0434\u0435\u0442\u0435 \u0432\u044B\u0437\u044B\u0432\u0430\u0442\u044C \u0432\u043C\u0435\u0441\u0442\u043E \u043F\u0440\u044F\u043C\u043E\u0433\u043E \u0432\u044B\u0437\u043E\u0432\u0430 \u0445\u0435\u043B\u043F\u0435\u0440\u0430 \u0438\u0437 \u043F\u0430\u043A\u0435\u0442\u0430 GDS:"), Object(esm["mdx"])("pre", null, Object(esm["mdx"])("code", _extends({
    parentName: "pre"
  }, {
    "className": "language-js"
  }), "import { typography as gdsTypography } from '@greensight/gds';\nimport theme from './theme';\n\nconst typography = (name) => gdsTypography(name, theme);\n\nexport default typography;\n")), Object(esm["mdx"])("p", null, "\u0422\u0435\u043F\u0435\u0440\u044C, \u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C, \u0432\u0430\u043C \u043D\u0443\u0436\u043D\u043E \u0437\u0430\u0434\u0430\u0442\u044C \u0441\u0442\u0438\u043B\u0438 \u0442\u0438\u043F\u043E\u0433\u0440\u0430\u0444\u0438\u043A\u0438 \u0434\u043B\u044F \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u0442\u0435\u043A\u0441\u0442\u0430. \u0412 \u043C\u0430\u043A\u0435\u0442\u0435 \u0443 \u044D\u0442\u043E\u0433\u043E \u0442\u0435\u043A\u0441\u0442\u0430 \u0443\u043A\u0430\u0437\u0430\u043D \u0441\u0442\u0438\u043B\u044C:"), Object(esm["mdx"])("img", {
    src: "images/typography/style.png",
    alt: "\u0421\u0442\u0438\u043B\u044C Figma",
    width: "300"
  }), Object(esm["mdx"])("p", null, Object(esm["mdx"])("em", {
    parentName: "p"
  }, "\u0421\u0442\u0438\u043B\u044C Figma")), Object(esm["mdx"])("p", null, "\u0412\u044B \u0437\u043D\u0430\u0435\u0442\u0435 \u0438\u043C\u044F \u0441\u0442\u0438\u043B\u044F \u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u0442\u044C \u0435\u0433\u043E \u0432 \u0445\u0435\u043B\u043F\u0435\u0440 ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "typography"), ":"), Object(esm["mdx"])("pre", null, Object(esm["mdx"])("code", _extends({
    parentName: "pre"
  }, {
    "className": "language-js"
  }), "import typography from '@scripts/typography';\n\nconst Example = () => <div css={typography('subheading')}>Example</div>;\n")), Object(esm["mdx"])("p", null, "\u0422\u0435\u043F\u0435\u0440\u044C \u0443 \u0442\u0435\u043A\u0441\u0442\u0430 \u043F\u0440\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u044B \u0432\u0441\u0435 \u0442\u043E\u043A\u0435\u043D\u0438\u0437\u0438\u0440\u0443\u0435\u043C\u044B\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B, \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u043D\u0430 \u0430\u0434\u0430\u043F\u0442\u0438\u0432\u0435, \u0444\u043B\u044E\u0438\u0434\u043D\u0430\u044F \u0442\u0438\u043F\u043E\u0433\u0440\u0430\u0444\u0438\u043A\u0430 \u0438 \u0432\u0430\u0440\u0438\u0430\u0442\u0438\u0432\u043D\u044B\u0435 \u0448\u0440\u0438\u0444\u0442\u044B."));
}

MDXContent.displayName = "MDXContent";
;
MDXContent.isMDXComponent = true;
var __page = function __page() {
  throw new Error("Docs-only story");
};
__page.parameters = {
  docsOnly: true
};
var componentMeta = {
  title: 'Dev / Typography',
  includeStories: ["__page"]
};
var mdxStoryNameToKey = {};
componentMeta.parameters = componentMeta.parameters || {};
componentMeta.parameters.docs = Object.assign({}, componentMeta.parameters.docs || {}, {
  page: function page() {
    return Object(esm["mdx"])(blocks["AddContext"], {
      mdxStoryNameToKey: mdxStoryNameToKey,
      mdxComponentMeta: componentMeta
    }, Object(esm["mdx"])(MDXContent, null));
  }
});
/* harmony default export */ var typography_stories = __webpack_exports__["default"] = (componentMeta);

/***/ }),

/***/ 1185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "knobs", function() { return /* binding */ Section_stories_knobs; });
__webpack_require__.d(__webpack_exports__, "container", function() { return /* binding */ Section_stories_container; });
__webpack_require__.d(__webpack_exports__, "marginsPaddings", function() { return /* binding */ Section_stories_marginsPaddings; });
__webpack_require__.d(__webpack_exports__, "backgrounds", function() { return /* binding */ Section_stories_backgrounds; });

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__(11);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(5);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(6);

// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.0-ac51e3f61d-2.zip/node_modules/react/index.js
var react = __webpack_require__(1);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./.yarn/$$virtual/@mdx-js-react-virtual-8208367119/0/cache/@mdx-js-react-npm-1.6.22-57e4c05c2b-2.zip/node_modules/@mdx-js/react/dist/esm.js
var esm = __webpack_require__(0);

// EXTERNAL MODULE: ./.yarn/$$virtual/@storybook-addon-docs-virtual-45dd9fae32/0/cache/@storybook-addon-docs-npm-6.1.11-e93c9ca8c3-2.zip/node_modules/@storybook/addon-docs/blocks.js
var blocks = __webpack_require__(2);

// EXTERNAL MODULE: ./.yarn/$$virtual/@storybook-addon-knobs-virtual-81ddf6b808/0/cache/@storybook-addon-knobs-npm-6.1.11-0b8041dc51-2.zip/node_modules/@storybook/addon-knobs/dist/index.js
var dist = __webpack_require__(10);

// EXTERNAL MODULE: ./src/utils/scale.ts
var scale = __webpack_require__(4);

// EXTERNAL MODULE: ./src/utils/baseTheme.ts + 1 modules
var baseTheme = __webpack_require__(21);

// EXTERNAL MODULE: ./src/helpers/Placeholder.tsx
var Placeholder = __webpack_require__(26);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(7);

// EXTERNAL MODULE: ./.yarn/cache/@emotion-css-npm-10.0.27-3fd4a0c157-2.zip/node_modules/@emotion/css/dist/css.browser.esm.js
var css_browser_esm = __webpack_require__(14);

// EXTERNAL MODULE: ./src/components/Container/index.tsx
var Container = __webpack_require__(127);

// EXTERNAL MODULE: ./src/helpers/useCSSProperty.ts + 1 modules
var useCSSProperty = __webpack_require__(38);

// EXTERNAL MODULE: ./.yarn/$$virtual/@emotion-core-virtual-9244315116/0/cache/@emotion-core-npm-10.1.1-f084e0eeac-2.zip/node_modules/@emotion/core/dist/core.browser.esm.js + 4 modules
var core_browser_esm = __webpack_require__(3);

// CONCATENATED MODULE: ./src/components/Section/index.tsx






function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}




/**
 * Component for creating page sections.
 */

var Section_Section = function Section(_ref) {
  var children = _ref.children,
      _ref$container = _ref.container,
      container = _ref$container === void 0 ? true : _ref$container,
      mb = _ref.mb,
      pv = _ref.pv,
      pt = _ref.pt,
      pb = _ref.pb,
      bg = _ref.bg,
      css = _ref.css,
      props = _objectWithoutProperties(_ref, ["children", "container", "mb", "pv", "pt", "pb", "bg", "css"]);

  return Object(core_browser_esm["jsx"])("section", _extends({
    css:
    /*#__PURE__*/

    /*#__PURE__*/
    Object(css_browser_esm["a" /* default */])([Object(useCSSProperty["a" /* default */])({
      name: 'marginBottom',
      props: {
        mb: mb
      }
    }), Object(useCSSProperty["a" /* default */])({
      name: 'paddingTop',
      props: {
        pv: pv,
        pt: pt
      },
      transform: function transform(_ref2) {
        var pv = _ref2.pv,
            pt = _ref2.pt;
        return pv !== null && pv !== void 0 ? pv : pt;
      }
    }), Object(useCSSProperty["a" /* default */])({
      name: 'paddingBottom',
      props: {
        pv: pv,
        pb: pb
      },
      transform: function transform(_ref3) {
        var pv = _ref3.pv,
            pb = _ref3.pb;
        return pv !== null && pv !== void 0 ? pv : pb;
      }
    }), Object(useCSSProperty["a" /* default */])({
      name: 'background',
      props: {
        bg: bg
      }
    }), css],  true ? "" : undefined, ";label:css;" + ( true ? "" : undefined))
  }, props), container ? Object(core_browser_esm["jsx"])(Container["a" /* default */], null, children) : children);
};

/* harmony default export */ var components_Section = (Section_Section);

try {
  // @ts-ignore
  Section_Section.displayName = "Section"; // @ts-ignore

  Section_Section.__docgenInfo = {
    "description": "Component for creating page sections.",
    "displayName": "Section",
    "props": {
      "children": {
        "defaultValue": null,
        "description": "Section content.",
        "name": "children",
        "required": false,
        "type": {
          "name": "ReactNode"
        }
      },
      "container": {
        "defaultValue": {
          value: true
        },
        "description": "Wrap content in container.",
        "name": "container",
        "required": false,
        "type": {
          "name": "boolean | undefined"
        }
      },
      "mb": {
        "defaultValue": null,
        "description": "Bottom offset.",
        "name": "mb",
        "required": false,
        "type": {
          "name": "number | Partial<Record<Breakpoint, number>> | undefined"
        }
      },
      "pv": {
        "defaultValue": null,
        "description": "Vertical paddings.",
        "name": "pv",
        "required": false,
        "type": {
          "name": "number | Partial<Record<Breakpoint, number>> | undefined"
        }
      },
      "pt": {
        "defaultValue": null,
        "description": "Top padding.",
        "name": "pt",
        "required": false,
        "type": {
          "name": "number | Partial<Record<Breakpoint, number>> | undefined"
        }
      },
      "pb": {
        "defaultValue": null,
        "description": "Bottom padding.",
        "name": "pb",
        "required": false,
        "type": {
          "name": "number | Partial<Record<Breakpoint, number>> | undefined"
        }
      },
      "bg": {
        "defaultValue": null,
        "description": "Background color.",
        "name": "bg",
        "required": false,
        "type": {
          "name": "string | Partial<Record<Breakpoint, string>> | undefined"
        }
      },
      "css": {
        "defaultValue": null,
        "description": "Additional CSS.",
        "name": "css",
        "required": false,
        "type": {
          "name": "CSSObject | undefined"
        }
      }
    }
  }; // @ts-ignore

  if (typeof STORYBOOK_REACT_CLASSES !== "undefined") // @ts-ignore
    STORYBOOK_REACT_CLASSES["src/components/Section/index.tsx#Section"] = {
      docgenInfo: Section_Section.__docgenInfo,
      name: "Section",
      path: "src/components/Section/index.tsx#Section"
    };
} catch (__react_docgen_typescript_loader_error) {}
// CONCATENATED MODULE: ./src/components/Section/Section.stories.mdx




function Section_stories_extends() { Section_stories_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Section_stories_extends.apply(this, arguments); }

function Section_stories_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Section_stories_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Section_stories_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsxRuntime classic */

/* @jsx mdx */








var layoutProps = {};
var MDXLayout = "wrapper";

function MDXContent(_ref) {
  var components = _ref.components,
      props = Section_stories_objectWithoutProperties(_ref, ["components"]);

  return Object(esm["mdx"])(MDXLayout, Section_stories_extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(esm["mdx"])(blocks["Meta"], {
    title: "Components / Helpers / Section",
    component: components_Section,
    mdxType: "Meta"
  }), Object(esm["mdx"])("h1", {
    "id": "section"
  }, "Section"), Object(esm["mdx"])(blocks["Story"], {
    name: "Knobs",
    mdxType: "Story"
  }, Object(esm["mdx"])(components_Section, {
    container: Object(dist["boolean"])('container', true),
    mb: Object(dist["number"])('mb', 0, {
      min: 0,
      max: 160,
      step: 4
    }),
    pt: Object(dist["number"])('pt', 0, {
      min: 0,
      max: 160,
      step: 4
    }),
    pb: Object(dist["number"])('pb', 0, {
      min: 0,
      max: 160,
      step: 4
    }),
    bg: Object(dist["color"])('bg', '#fff'),
    mdxType: "Section"
  }, Object(esm["mdx"])(Placeholder["a" /* default */], {
    mdxType: "Placeholder"
  }, "Here goes section content"))), Object(esm["mdx"])("p", null, "\u041E\u0431\u044B\u0447\u043D\u043E \u043F\u0440\u0438 \u0440\u0430\u0437\u043C\u0435\u0442\u043A\u0435 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0433\u043E \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u043E\u043D \u0434\u0435\u043B\u0438\u0442\u0441\u044F \u043D\u0430 \u0440\u0430\u0437\u0434\u0435\u043B\u044B \u0447\u0435\u0440\u0435\u0437 \u0442\u0435\u0433 section. \u0414\u043B\u044F \u0443\u043F\u0440\u043E\u0449\u0435\u043D\u0438\u044F \u044D\u0442\u043E\u0433\u043E \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0430 \u043F\u0440\u0435\u0434\u0443\u0441\u043C\u043E\u0442\u0440\u0435\u043D \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "Section"), "."), Object(esm["mdx"])("p", null, "\uD83D\uDCAC \u0412 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "Placeholder"), " \u0447\u0438\u0441\u0442\u043E \u0432 \u0434\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0430\u0442\u0438\u0432\u043D\u044B\u0445 \u0446\u0435\u043B\u044F\u0445 \u2013 \u0432\u0438\u0437\u0443\u0430\u043B\u044C\u043D\u043E \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0431\u043E\u043A\u0441 \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0430. \u042D\u0442\u043E \u0432\u0441\u043F\u043E\u043C\u043E\u0433\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 GDS \u0438 \u043D\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u0435 \u0435\u0433\u043E \u043D\u0435 \u0431\u0443\u0434\u0435\u0442."), Object(esm["mdx"])("h2", {
    "id": "props"
  }, "Props"), Object(esm["mdx"])(blocks["Props"], {
    of: components_Section,
    mdxType: "Props"
  }), Object(esm["mdx"])("h2", {
    "id": "use-cases"
  }, "Use cases"), Object(esm["mdx"])("h3", {
    "id": "container"
  }, "Container"), Object(esm["mdx"])("p", null, "\u0412\u043D\u0443\u0442\u0440\u0438 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0440\u0430\u0437\u0434\u0435\u043B\u0430 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0438\u043B\u0438 \u043D\u0435 \u0431\u044B\u0442\u044C \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440."), Object(esm["mdx"])("p", null, "\u0412\u0435\u043B\u0438\u0447\u0438\u043D\u0430 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u0430, \u043F\u043E\u043B\u044F \u0438 \u043E\u0442\u0441\u0442\u0443\u043F\u044B \u0447\u0438\u0442\u0430\u044E\u0442\u0441\u044F \u0438\u0437 \u043F\u043E\u043B\u044F ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "container"), " \u043E\u0431\u044A\u0435\u043A\u0442\u0430 \u0442\u0435\u043C\u044B."), Object(esm["mdx"])(blocks["Preview"], {
    mdxType: "Preview"
  }, Object(esm["mdx"])(blocks["Story"], {
    name: "Container",
    mdxType: "Story"
  }, Object(esm["mdx"])(react_default.a.Fragment, null, Object(esm["mdx"])(components_Section, {
    mb: Object(scale["a" /* default */])(2),
    mdxType: "Section"
  }, Object(esm["mdx"])(Placeholder["a" /* default */], {
    mdxType: "Placeholder"
  }, "Section with container")), Object(esm["mdx"])(components_Section, {
    container: false,
    mdxType: "Section"
  }, Object(esm["mdx"])(Placeholder["a" /* default */], {
    mdxType: "Placeholder"
  }, "Section without container"))))), Object(esm["mdx"])("h3", {
    "id": "margins--paddings"
  }, "Margins & Paddings"), Object(esm["mdx"])("p", null, "\u0412 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0441\u043F\u0435\u0439\u0441\u0438\u043D\u0433\u043E\u0432 \u043E\u0431\u044B\u0447\u043D\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442\u0441\u044F \u043B\u0438\u0431\u043E \u043D\u0438\u0436\u043D\u0438\u0435 \u043E\u0442\u0441\u0442\u0443\u043F\u044B, \u043B\u0438\u0431\u043E \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u043F\u043E\u043B\u044F. \u0414\u043B\u044F \u043D\u0438\u0445 \u043F\u0440\u0435\u0434\u0443\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u044B \u043F\u0440\u043E\u043F\u0441\u044B ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "mb"), ", ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "pt"), ", ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "pb"), " \u0438 ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "pv"), ". ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "pv"), " \u0432\u044B\u0441\u0442\u0443\u043F\u0430\u0435\u0442 \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0448\u043E\u0440\u0442\u043A\u0430\u0442\u0430 \u0434\u043B\u044F \u0443\u043A\u0430\u0437\u0430\u043D\u0438\u044F \u0440\u0430\u0432\u043D\u044B\u0445 \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0445 \u043F\u043E\u043B\u0435\u0439."), Object(esm["mdx"])(blocks["Preview"], {
    mdxType: "Preview"
  }, Object(esm["mdx"])(blocks["Story"], {
    name: "Margins & Paddings",
    mdxType: "Story"
  }, Object(esm["mdx"])(react_default.a.Fragment, null, Object(esm["mdx"])(components_Section, {
    mb: Object(scale["a" /* default */])(2),
    mdxType: "Section"
  }, Object(esm["mdx"])(Placeholder["a" /* default */], {
    mdxType: "Placeholder"
  }, "Section with margin")), Object(esm["mdx"])(components_Section, {
    mb: Object(scale["a" /* default */])(2),
    pv: Object(scale["a" /* default */])(2),
    mdxType: "Section"
  }, Object(esm["mdx"])(Placeholder["a" /* default */], {
    mdxType: "Placeholder"
  }, "Section with margin and equal paddings")), Object(esm["mdx"])(components_Section, {
    pt: Object(scale["a" /* default */])(4),
    pb: Object(scale["a" /* default */])(2),
    mdxType: "Section"
  }, Object(esm["mdx"])(Placeholder["a" /* default */], {
    mdxType: "Placeholder"
  }, "Section with different paddings"))))), Object(esm["mdx"])("h3", {
    "id": "backgrounds"
  }, "Backgrounds"), Object(esm["mdx"])("p", null, "\u0422\u0438\u043F\u043E\u0432\u043E\u0439 \u043A\u0435\u0439\u0441 \u2013 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0440\u0430\u0437\u0434\u0435\u043B\u043E\u0432 \u0441 \u0444\u043E\u043D\u043E\u043C. \u0414\u043B\u044F \u0444\u043E\u043D\u0430 \u043F\u0440\u0435\u0434\u0443\u0441\u043C\u043E\u0442\u0440\u0435\u043D \u043F\u0440\u043E\u043F ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "bg"), "."), Object(esm["mdx"])("p", null, "\u23F1 \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0444\u043E\u043D\u0430 \u043D\u0435 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F, \u0442.\u043A. \u043E\u043D\u0438 \u043D\u0435 \u043F\u043E\u0434\u0434\u0430\u044E\u0442\u0441\u044F \u043E\u043F\u0442\u0438\u043C\u0438\u0437\u0430\u0446\u0438\u0438 \u2013 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "Picture"), " \u0441 \u0430\u0431\u0441\u043E\u043B\u044E\u0442\u043D\u043E \u0441\u043F\u043E\u0437\u0438\u0446\u0438\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u043C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435\u043C."), Object(esm["mdx"])(blocks["Preview"], {
    mdxType: "Preview"
  }, Object(esm["mdx"])(blocks["Story"], {
    name: "Backgrounds",
    mdxType: "Story"
  }, Object(esm["mdx"])(react_default.a.Fragment, null, Object(esm["mdx"])(components_Section, {
    mb: Object(scale["a" /* default */])(2),
    mdxType: "Section"
  }, Object(esm["mdx"])(Placeholder["a" /* default */], {
    mdxType: "Placeholder"
  }, "Simple section")), Object(esm["mdx"])(components_Section, {
    mb: Object(scale["a" /* default */])(2),
    pv: Object(scale["a" /* default */])(2),
    bg: baseTheme["a" /* default */].colors.grey20,
    mdxType: "Section"
  }, Object(esm["mdx"])(Placeholder["a" /* default */], {
    mdxType: "Placeholder"
  }, "Section with background")), Object(esm["mdx"])(components_Section, {
    mdxType: "Section"
  }, Object(esm["mdx"])(Placeholder["a" /* default */], {
    mdxType: "Placeholder"
  }, "Simple section"))))));
}

MDXContent.displayName = "MDXContent";
;
MDXContent.isMDXComponent = true;
var Section_stories_knobs = function knobs() {
  return Object(esm["mdx"])(components_Section, {
    container: Object(dist["boolean"])('container', true),
    mb: Object(dist["number"])('mb', 0, {
      min: 0,
      max: 160,
      step: 4
    }),
    pt: Object(dist["number"])('pt', 0, {
      min: 0,
      max: 160,
      step: 4
    }),
    pb: Object(dist["number"])('pb', 0, {
      min: 0,
      max: 160,
      step: 4
    }),
    bg: Object(dist["color"])('bg', '#fff')
  }, Object(esm["mdx"])(Placeholder["a" /* default */], null, "Here goes section content"));
};
Section_stories_knobs.displayName = "knobs";
Section_stories_knobs.storyName = 'Knobs';
Section_stories_knobs.parameters = {
  storySource: {
    source: '<Section container={boolean(\'container\', true)} mb={number(\'mb\', 0, {\n  min: 0,\n  max: 160,\n  step: 4\n})} pt={number(\'pt\', 0, {\n  min: 0,\n  max: 160,\n  step: 4\n})} pb={number(\'pb\', 0, {\n  min: 0,\n  max: 160,\n  step: 4\n})} bg={color(\'bg\', \'#fff\')}>\n        <Placeholder>Here goes section content</Placeholder>\n    </Section>'
  }
};
var Section_stories_container = function container() {
  return Object(esm["mdx"])(react_default.a.Fragment, null, Object(esm["mdx"])(components_Section, {
    mb: Object(scale["a" /* default */])(2)
  }, Object(esm["mdx"])(Placeholder["a" /* default */], null, "Section with container")), Object(esm["mdx"])(components_Section, {
    container: false
  }, Object(esm["mdx"])(Placeholder["a" /* default */], null, "Section without container")));
};
Section_stories_container.storyName = 'Container';
Section_stories_container.parameters = {
  storySource: {
    source: '<>\n            <Section mb={scale(2)}>\n                <Placeholder>Section with container</Placeholder>\n            </Section>\n            <Section container={false}>\n                <Placeholder>Section without container</Placeholder>\n            </Section>\n        </>'
  }
};
var Section_stories_marginsPaddings = function marginsPaddings() {
  return Object(esm["mdx"])(react_default.a.Fragment, null, Object(esm["mdx"])(components_Section, {
    mb: Object(scale["a" /* default */])(2)
  }, Object(esm["mdx"])(Placeholder["a" /* default */], null, "Section with margin")), Object(esm["mdx"])(components_Section, {
    mb: Object(scale["a" /* default */])(2),
    pv: Object(scale["a" /* default */])(2)
  }, Object(esm["mdx"])(Placeholder["a" /* default */], null, "Section with margin and equal paddings")), Object(esm["mdx"])(components_Section, {
    pt: Object(scale["a" /* default */])(4),
    pb: Object(scale["a" /* default */])(2)
  }, Object(esm["mdx"])(Placeholder["a" /* default */], null, "Section with different paddings")));
};
Section_stories_marginsPaddings.storyName = 'Margins & Paddings';
Section_stories_marginsPaddings.parameters = {
  storySource: {
    source: '<>\n            <Section mb={scale(2)}>\n                <Placeholder>Section with margin</Placeholder>\n            </Section>\n            <Section mb={scale(2)} pv={scale(2)}>\n                <Placeholder>Section with margin and equal paddings</Placeholder>\n            </Section>\n            <Section pt={scale(4)} pb={scale(2)}>\n                <Placeholder>Section with different paddings</Placeholder>\n            </Section>\n        </>'
  }
};
var Section_stories_backgrounds = function backgrounds() {
  return Object(esm["mdx"])(react_default.a.Fragment, null, Object(esm["mdx"])(components_Section, {
    mb: Object(scale["a" /* default */])(2)
  }, Object(esm["mdx"])(Placeholder["a" /* default */], null, "Simple section")), Object(esm["mdx"])(components_Section, {
    mb: Object(scale["a" /* default */])(2),
    pv: Object(scale["a" /* default */])(2),
    bg: baseTheme["a" /* default */].colors.grey20
  }, Object(esm["mdx"])(Placeholder["a" /* default */], null, "Section with background")), Object(esm["mdx"])(components_Section, null, Object(esm["mdx"])(Placeholder["a" /* default */], null, "Simple section")));
};
Section_stories_backgrounds.storyName = 'Backgrounds';
Section_stories_backgrounds.parameters = {
  storySource: {
    source: '<>\n            <Section mb={scale(2)}>\n                <Placeholder>Simple section</Placeholder>\n            </Section>\n            <Section mb={scale(2)} pv={scale(2)} bg={baseTheme.colors.grey20}>\n                <Placeholder>Section with background</Placeholder>\n            </Section>\n            <Section>\n                <Placeholder>Simple section</Placeholder>\n            </Section>\n        </>'
  }
};
var componentMeta = {
  title: 'Components / Helpers / Section',
  component: components_Section,
  includeStories: ["knobs", "container", "marginsPaddings", "backgrounds"]
};
var mdxStoryNameToKey = {
  "Knobs": "knobs",
  "Container": "container",
  "Margins & Paddings": "marginsPaddings",
  "Backgrounds": "backgrounds"
};
componentMeta.parameters = componentMeta.parameters || {};
componentMeta.parameters.docs = Object.assign({}, componentMeta.parameters.docs || {}, {
  page: function page() {
    return Object(esm["mdx"])(blocks["AddContext"], {
      mdxStoryNameToKey: mdxStoryNameToKey,
      mdxComponentMeta: componentMeta
    }, Object(esm["mdx"])(MDXContent, null));
  }
});
/* harmony default export */ var Section_stories = __webpack_exports__["default"] = (componentMeta);

/***/ }),

/***/ 1186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "basic", function() { return /* binding */ ButtonAutokit_stories_basic; });

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__(11);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(5);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(6);

// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.0-ac51e3f61d-2.zip/node_modules/react/index.js
var react = __webpack_require__(1);

// EXTERNAL MODULE: ./.yarn/$$virtual/@mdx-js-react-virtual-8208367119/0/cache/@mdx-js-react-npm-1.6.22-57e4c05c2b-2.zip/node_modules/@mdx-js/react/dist/esm.js
var esm = __webpack_require__(0);

// EXTERNAL MODULE: ./.yarn/$$virtual/@storybook-addon-docs-virtual-45dd9fae32/0/cache/@storybook-addon-docs-npm-6.1.11-e93c9ca8c3-2.zip/node_modules/@storybook/addon-docs/blocks.js
var blocks = __webpack_require__(2);

// EXTERNAL MODULE: ./.storybook/decorators/paddingDecorator.tsx
var paddingDecorator = __webpack_require__(55);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(7);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(44);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__(40);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(19);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.define-properties.js
var es_object_define_properties = __webpack_require__(34);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.define-property.js
var es_object_define_property = __webpack_require__(37);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(76);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__(77);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(41);

// EXTERNAL MODULE: ./.yarn/cache/@emotion-css-npm-10.0.27-3fd4a0c157-2.zip/node_modules/@emotion/css/dist/css.browser.esm.js
var css_browser_esm = __webpack_require__(14);

// EXTERNAL MODULE: ./src/components/Button/index.tsx
var Button = __webpack_require__(32);

// EXTERNAL MODULE: ./src/components/Layout/index.tsx + 3 modules
var Layout = __webpack_require__(13);

// EXTERNAL MODULE: ./src/utils/useTheme.ts
var useTheme = __webpack_require__(52);

// EXTERNAL MODULE: ./src/utils/scale.ts
var scale = __webpack_require__(4);

// EXTERNAL MODULE: ./src/utils/baseTheme.ts + 1 modules
var baseTheme = __webpack_require__(21);

// EXTERNAL MODULE: ./src/helpers/typography.ts
var typography = __webpack_require__(36);

// EXTERNAL MODULE: ./src/helpers/useComponentTheme.ts
var useComponentTheme = __webpack_require__(237);

// EXTERNAL MODULE: ./.yarn/$$virtual/@emotion-core-virtual-9244315116/0/cache/@emotion-core-npm-10.1.1-f084e0eeac-2.zip/node_modules/@emotion/core/dist/core.browser.esm.js + 4 modules
var core_browser_esm = __webpack_require__(3);

// CONCATENATED MODULE: ./src/autokits/ButtonAutokit/index.tsx












function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}









/**
 * Autokit for `Button` component.
 */

var ButtonAutokit_ButtonAutokit = function ButtonAutokit(_ref) {
  var _theme$global, _baseTheme$global;

  var _ref$text = _ref.text,
      text = _ref$text === void 0 ? 'Button' : _ref$text,
      Icon = _ref.Icon;
  var theme = Object(useTheme["a" /* default */])();

  var _useComponentTheme = Object(useComponentTheme["a" /* default */])('Button'),
      componentTheme = _useComponentTheme.componentTheme;

  var buttonTheme = componentTheme;
  var PlaceholderIcon = Icon || ((_theme$global = theme.global) === null || _theme$global === void 0 ? void 0 : _theme$global.placeholder) || ((_baseTheme$global = baseTheme["a" /* default */].global) === null || _baseTheme$global === void 0 ? void 0 : _baseTheme$global.placeholder);
  return Object(core_browser_esm["jsx"])("div", null, Object.keys(buttonTheme.themes).map(function (themeName) {
    return Object(core_browser_esm["jsx"])("div", {
      key: themeName,
      css:
      /*#__PURE__*/

      /*#__PURE__*/
      Object(css_browser_esm["a" /* default */])({
        marginBottom: Object(scale["a" /* default */])(4)
      },  true ? "" : undefined, ";label:css;" + ( true ? "" : undefined))
    }, Object(core_browser_esm["jsx"])("div", {
      css:
      /*#__PURE__*/

      /*#__PURE__*/
      Object(css_browser_esm["a" /* default */])(_objectSpread(_objectSpread({}, Object(typography["a" /* default */])('title')), {}, {
        marginBottom: Object(scale["a" /* default */])(2)
      }),  true ? "" : undefined, ";label:css;" + ( true ? "" : undefined))
    }, themeName), Object(core_browser_esm["jsx"])(Layout["a" /* default */], {
      cols: {
        xxxl: Object.keys(buttonTheme.sizes).length,
        xxs: 1
      },
      gap: Object(scale["a" /* default */])(2),
      justify: "start",
      align: "end",
      css:
      /*#__PURE__*/

      /*#__PURE__*/
      Object(css_browser_esm["a" /* default */])({
        marginBottom: Object(scale["a" /* default */])(2)
      },  true ? "" : undefined, ";label:css;" + ( true ? "" : undefined))
    }, Object.keys(buttonTheme.sizes).map(function (sizeName) {
      return Object(core_browser_esm["jsx"])(Button["a" /* default */], {
        key: sizeName,
        theme: themeName,
        size: sizeName
      }, text);
    }), Object.keys(buttonTheme.sizes).map(function (sizeName) {
      return Object(core_browser_esm["jsx"])(Button["a" /* default */], {
        key: sizeName,
        theme: themeName,
        size: sizeName,
        disabled: true
      }, text);
    }), Object.keys(buttonTheme.sizes).map(function (sizeName) {
      return Object(core_browser_esm["jsx"])(Button["a" /* default */], {
        key: sizeName,
        theme: themeName,
        size: sizeName,
        Icon: PlaceholderIcon
      }, text);
    }), Object.keys(buttonTheme.sizes).map(function (sizeName) {
      return Object(core_browser_esm["jsx"])(Button["a" /* default */], {
        key: sizeName,
        theme: themeName,
        size: sizeName,
        Icon: PlaceholderIcon,
        iconAfter: true
      }, text);
    }), Object.keys(buttonTheme.sizes).map(function (sizeName) {
      return Object(core_browser_esm["jsx"])(Button["a" /* default */], {
        key: sizeName,
        theme: themeName,
        size: sizeName,
        Icon: PlaceholderIcon,
        hidden: true
      }, text);
    }), Object.keys(buttonTheme.sizes).map(function (sizeName) {
      return Object(core_browser_esm["jsx"])(Button["a" /* default */], {
        key: sizeName,
        theme: themeName,
        size: sizeName
      }, text, Object(core_browser_esm["jsx"])("br", null), text);
    }), Object.keys(buttonTheme.sizes).map(function (sizeName) {
      return Object(core_browser_esm["jsx"])(Button["a" /* default */], {
        key: sizeName,
        theme: themeName,
        size: sizeName,
        Icon: PlaceholderIcon
      }, text, Object(core_browser_esm["jsx"])("br", null), text);
    })), Object.keys(buttonTheme.sizes).map(function (sizeName) {
      return Object(core_browser_esm["jsx"])(Button["a" /* default */], {
        key: sizeName,
        theme: themeName,
        size: sizeName,
        block: true,
        css:
        /*#__PURE__*/

        /*#__PURE__*/
        Object(css_browser_esm["a" /* default */])({
          marginBottom: Object(scale["a" /* default */])(2)
        },  true ? "" : undefined, ";label:css;" + ( true ? "" : undefined))
      }, text);
    }));
  }));
};

/* harmony default export */ var autokits_ButtonAutokit = (ButtonAutokit_ButtonAutokit);

try {
  // @ts-ignore
  ButtonAutokit_ButtonAutokit.displayName = "ButtonAutokit"; // @ts-ignore

  ButtonAutokit_ButtonAutokit.__docgenInfo = {
    "description": "Autokit for `Button` component.",
    "displayName": "ButtonAutokit",
    "props": {
      "text": {
        "defaultValue": {
          value: "Button"
        },
        "description": "Placeholder text.",
        "name": "text",
        "required": false,
        "type": {
          "name": "string | undefined"
        }
      },
      "Icon": {
        "defaultValue": null,
        "description": "Placeholder icon (overrides placeholder from theme).",
        "name": "Icon",
        "required": false,
        "type": {
          "name": "FC<SVGProps<SVGSVGElement> & { title?: string | undefined; }> | undefined"
        }
      }
    }
  }; // @ts-ignore

  if (typeof STORYBOOK_REACT_CLASSES !== "undefined") // @ts-ignore
    STORYBOOK_REACT_CLASSES["src/autokits/ButtonAutokit/index.tsx#ButtonAutokit"] = {
      docgenInfo: ButtonAutokit_ButtonAutokit.__docgenInfo,
      name: "ButtonAutokit",
      path: "src/autokits/ButtonAutokit/index.tsx#ButtonAutokit"
    };
} catch (__react_docgen_typescript_loader_error) {}
// CONCATENATED MODULE: ./src/autokits/ButtonAutokit/ButtonAutokit.stories.mdx




function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsxRuntime classic */

/* @jsx mdx */





var layoutProps = {};
var MDXLayout = "wrapper";

function MDXContent(_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(esm["mdx"])(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(esm["mdx"])(blocks["Meta"], {
    title: "Autokits / ButtonAutokit",
    component: autokits_ButtonAutokit,
    decorators: [paddingDecorator["a" /* default */]],
    parameters: {
      design: {
        type: 'figma',
        url: 'https://www.figma.com/file/Udf9B3n8wEoykSGFhhrU0J/Greensight-DS?node-id=1608%3A0'
      }
    },
    mdxType: "Meta"
  }), Object(esm["mdx"])("h1", {
    "id": "button"
  }, "Button"), Object(esm["mdx"])(blocks["Preview"], {
    mdxType: "Preview"
  }, Object(esm["mdx"])(blocks["Story"], {
    name: "basic",
    mdxType: "Story"
  }, Object(esm["mdx"])(autokits_ButtonAutokit, {
    mdxType: "ButtonAutokit"
  }))), Object(esm["mdx"])("p", null, "\u0410\u0432\u0442\u043E\u043A\u0438\u0442 \u0434\u043B\u044F \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "Button"), ". \u0427\u0438\u0442\u0430\u0435\u0442 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435 \u043F\u043E\u043B\u044F ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "components.Button"), " \u043E\u0431\u044A\u0435\u043A\u0442\u0430 \u0442\u0435\u043C\u044B."), Object(esm["mdx"])("h2", {
    "id": "props"
  }, "Props"), Object(esm["mdx"])(blocks["Props"], {
    of: autokits_ButtonAutokit,
    mdxType: "Props"
  }));
}

MDXContent.displayName = "MDXContent";
;
MDXContent.isMDXComponent = true;
var ButtonAutokit_stories_basic = function basic() {
  return Object(esm["mdx"])(autokits_ButtonAutokit, null);
};
ButtonAutokit_stories_basic.displayName = "basic";
ButtonAutokit_stories_basic.storyName = 'basic';
ButtonAutokit_stories_basic.parameters = {
  storySource: {
    source: '<ButtonAutokit />'
  }
};
var componentMeta = {
  title: 'Autokits / ButtonAutokit',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Udf9B3n8wEoykSGFhhrU0J/Greensight-DS?node-id=1608%3A0'
    }
  },
  decorators: [paddingDecorator["a" /* default */]],
  component: autokits_ButtonAutokit,
  includeStories: ["basic"]
};
var mdxStoryNameToKey = {
  "basic": "basic"
};
componentMeta.parameters = componentMeta.parameters || {};
componentMeta.parameters.docs = Object.assign({}, componentMeta.parameters.docs || {}, {
  page: function page() {
    return Object(esm["mdx"])(blocks["AddContext"], {
      mdxStoryNameToKey: mdxStoryNameToKey,
      mdxComponentMeta: componentMeta
    }, Object(esm["mdx"])(MDXContent, null));
  }
});
/* harmony default export */ var ButtonAutokit_stories = __webpack_exports__["default"] = (componentMeta);

/***/ }),

/***/ 1187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "basic", function() { return /* binding */ TypographyAutokit_stories_basic; });

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__(11);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(5);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(6);

// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.0-ac51e3f61d-2.zip/node_modules/react/index.js
var react = __webpack_require__(1);

// EXTERNAL MODULE: ./.yarn/$$virtual/@mdx-js-react-virtual-8208367119/0/cache/@mdx-js-react-npm-1.6.22-57e4c05c2b-2.zip/node_modules/@mdx-js/react/dist/esm.js
var esm = __webpack_require__(0);

// EXTERNAL MODULE: ./.yarn/$$virtual/@storybook-addon-docs-virtual-45dd9fae32/0/cache/@storybook-addon-docs-npm-6.1.11-e93c9ca8c3-2.zip/node_modules/@storybook/addon-docs/blocks.js
var blocks = __webpack_require__(2);

// EXTERNAL MODULE: ./.storybook/decorators/paddingDecorator.tsx
var paddingDecorator = __webpack_require__(55);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(7);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(16);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__(31);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(44);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__(40);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__(33);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(72);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.is-array.js
var es_array_is_array = __webpack_require__(22);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(24);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(19);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(17);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.sort.js
var es_array_sort = __webpack_require__(288);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.date.to-string.js
var es_date_to_string = __webpack_require__(29);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(12);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.define-properties.js
var es_object_define_properties = __webpack_require__(34);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.define-property.js
var es_object_define_property = __webpack_require__(37);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.entries.js
var es_object_entries = __webpack_require__(67);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(76);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__(77);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(15);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.parse-float.js
var es_parse_float = __webpack_require__(179);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(30);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(87);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(25);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(41);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(28);

// EXTERNAL MODULE: ./.yarn/cache/@emotion-css-npm-10.0.27-3fd4a0c157-2.zip/node_modules/@emotion/css/dist/css.browser.esm.js
var css_browser_esm = __webpack_require__(14);

// EXTERNAL MODULE: ./src/utils/useTheme.ts
var useTheme = __webpack_require__(52);

// EXTERNAL MODULE: ./src/utils/typography.ts
var typography = __webpack_require__(123);

// EXTERNAL MODULE: ./src/utils/scale.ts
var scale = __webpack_require__(4);

// EXTERNAL MODULE: ./src/utils/baseTheme.ts + 1 modules
var baseTheme = __webpack_require__(21);

// EXTERNAL MODULE: ./src/helpers/typography.ts
var helpers_typography = __webpack_require__(36);

// EXTERNAL MODULE: ./.yarn/$$virtual/@emotion-core-virtual-9244315116/0/cache/@emotion-core-npm-10.1.1-f084e0eeac-2.zip/node_modules/@emotion/core/dist/core.browser.esm.js + 4 modules
var core_browser_esm = __webpack_require__(3);

// CONCATENATED MODULE: ./src/autokits/TypographyAutokit/index.tsx





























function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}







/**
 * Autokit for typography tokens `theme.typography` and fonts settings `theme.global.fonts`.
 */

var TypographyAutokit_TypographyAutokit = function TypographyAutokit(_ref) {
  var _theme$global;

  var _ref$text = _ref.text,
      text = _ref$text === void 0 ? 'Demo text 123' : _ref$text;
  var theme = Object(useTheme["a" /* default */])();
  var globalFontsTheme = (_theme$global = theme.global) === null || _theme$global === void 0 ? void 0 : _theme$global.fonts;
  var typographyTheme = theme.typography;
  var colors = baseTheme["a" /* default */].colors;
  if (!typographyTheme) return Object(core_browser_esm["jsx"])("div", {
    css: Object(helpers_typography["a" /* default */])('body')
  }, Object(core_browser_esm["jsx"])("span", {
    role: "img",
    "aria-label": "Error"
  }, "\u26D4\uFE0F"), ' ', "Typography is not defined. Use tokens or add ", Object(core_browser_esm["jsx"])("strong", null, "typography"), " property in theme settings manually");

  var markCss = _objectSpread({
    backgroundColor: colors.grey90,
    color: colors.grey20,
    padding: Object(scale["a" /* default */])(1, true),
    borderRadius: 4,
    marginRight: Object(scale["a" /* default */])(1)
  }, Object(helpers_typography["a" /* default */])('smallBold'));

  return Object(core_browser_esm["jsx"])("div", {
    css: Object(helpers_typography["a" /* default */])('body')
  }, Object.keys(typographyTheme.styles).sort(function (a, b) {
    return parseFloat(typographyTheme.styles[b].desktop.fontSize) - parseFloat(typographyTheme.styles[a].desktop.fontSize);
  }).map(function (name) {
    var isFluid = true;
    var fluidSettings = globalFontsTheme === null || globalFontsTheme === void 0 ? void 0 : globalFontsTheme.fluid;

    if (fluidSettings !== undefined) {
      isFluid = Array.isArray(fluidSettings) ? !fluidSettings.includes(name) : fluidSettings;
    }

    return Object(core_browser_esm["jsx"])("div", {
      key: name,
      css:
      /*#__PURE__*/

      /*#__PURE__*/
      Object(css_browser_esm["a" /* default */])({
        display: 'flex',
        alignItems: 'flex-end',
        marginBottom: Object(scale["a" /* default */])(3)
      },  true ? "" : undefined, ";label:css;" + ( true ? "" : undefined))
    }, Object(core_browser_esm["jsx"])("div", {
      css:
      /*#__PURE__*/

      /*#__PURE__*/
      Object(css_browser_esm["a" /* default */])({
        minWidth: Object(scale["a" /* default */])(17),
        marginRight: Object(scale["a" /* default */])(2)
      },  true ? "" : undefined, ";label:css;" + ( true ? "" : undefined))
    }, typographyTheme.styles[name].mobile && Object(core_browser_esm["jsx"])("span", {
      css: markCss
    }, isFluid ? 'F' : 'M'), Object(core_browser_esm["jsx"])("span", {
      css:
      /*#__PURE__*/

      /*#__PURE__*/
      Object(css_browser_esm["a" /* default */])(_objectSpread({
        color: colors.grey20
      }, Object(helpers_typography["a" /* default */])('body')),  true ? "" : undefined, ";label:css;" + ( true ? "" : undefined))
    }, name)), Object(core_browser_esm["jsx"])("div", {
      css:
      /*#__PURE__*/

      /*#__PURE__*/
      Object(css_browser_esm["a" /* default */])(_objectSpread(_objectSpread({}, Object(typography["a" /* default */])(name, theme)), {}, {
        color: colors.black
      }),  true ? "" : undefined, ";label:css;" + ( true ? "" : undefined))
    }, text));
  }), Object(core_browser_esm["jsx"])("div", {
    css:
    /*#__PURE__*/

    /*#__PURE__*/
    Object(css_browser_esm["a" /* default */])({
      marginBottom: Object(scale["a" /* default */])(2)
    },  true ? "" : undefined, ";label:css;" + ( true ? "" : undefined))
  }, Object(core_browser_esm["jsx"])("p", {
    css:
    /*#__PURE__*/

    /*#__PURE__*/
    Object(css_browser_esm["a" /* default */])({
      marginBottom: Object(scale["a" /* default */])(2)
    },  true ? "" : undefined, ";label:css;" + ( true ? "" : undefined))
  }, "Breakpoints: ", Object(core_browser_esm["jsx"])("strong", null, typographyTheme.breakpoints[0]), " and", ' ', Object(core_browser_esm["jsx"])("strong", null, typographyTheme.breakpoints[1])), Object(core_browser_esm["jsx"])("p", null, Object(core_browser_esm["jsx"])("span", {
    css: markCss
  }, "F"), " - \"F for fluid\", style has adaptive variation with fluid typography"), Object(core_browser_esm["jsx"])("p", null, Object(core_browser_esm["jsx"])("span", {
    css: markCss
  }, "M"), " - \"M for mobile\", style has adaptive version without fluid typography")), globalFontsTheme !== null && globalFontsTheme !== void 0 && globalFontsTheme.families ? Object.entries(globalFontsTheme.families).map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        family = _ref3[0],
        familySettings = _ref3[1];

    return Object(core_browser_esm["jsx"])("dl", {
      key: family,
      css:
      /*#__PURE__*/

      /*#__PURE__*/
      Object(css_browser_esm["a" /* default */])({
        marginBottom: Object(scale["a" /* default */])(2)
      },  true ? "" : undefined, ";label:css;" + ( true ? "" : undefined))
    }, Object(core_browser_esm["jsx"])("dt", {
      css:
      /*#__PURE__*/

      /*#__PURE__*/
      Object(css_browser_esm["a" /* default */])(_objectSpread({}, Object(helpers_typography["a" /* default */])('bodyBold')),  true ? "" : undefined, ";label:css;" + ( true ? "" : undefined))
    }, "Font family"), Object(core_browser_esm["jsx"])("dd", {
      css:
      /*#__PURE__*/

      /*#__PURE__*/
      Object(css_browser_esm["a" /* default */])(_objectSpread(_objectSpread({}, Object(helpers_typography["a" /* default */])('body')), {}, {
        marginLeft: Object(scale["a" /* default */])(4)
      }),  true ? "" : undefined, ";label:css;" + ( true ? "" : undefined))
    }, family), Object(core_browser_esm["jsx"])("dt", {
      css:
      /*#__PURE__*/

      /*#__PURE__*/
      Object(css_browser_esm["a" /* default */])(_objectSpread({}, Object(helpers_typography["a" /* default */])('bodyBold')),  true ? "" : undefined, ";label:css;" + ( true ? "" : undefined))
    }, "Variable font"), Object(core_browser_esm["jsx"])("dd", {
      css:
      /*#__PURE__*/

      /*#__PURE__*/
      Object(css_browser_esm["a" /* default */])(_objectSpread(_objectSpread({}, Object(helpers_typography["a" /* default */])('body')), {}, {
        marginLeft: Object(scale["a" /* default */])(4)
      }),  true ? "" : undefined, ";label:css;" + ( true ? "" : undefined))
    }, familySettings.vf ? 'true' : 'false'), Object(core_browser_esm["jsx"])("dt", {
      css:
      /*#__PURE__*/

      /*#__PURE__*/
      Object(css_browser_esm["a" /* default */])(_objectSpread({}, Object(helpers_typography["a" /* default */])('bodyBold')),  true ? "" : undefined, ";label:css;" + ( true ? "" : undefined))
    }, "Font stack"), Object(core_browser_esm["jsx"])("dd", {
      css:
      /*#__PURE__*/

      /*#__PURE__*/
      Object(css_browser_esm["a" /* default */])(_objectSpread(_objectSpread({}, Object(helpers_typography["a" /* default */])('body')), {}, {
        marginLeft: Object(scale["a" /* default */])(4)
      }),  true ? "" : undefined, ";label:css;" + ( true ? "" : undefined))
    }, familySettings.stack || 'sans-serif'));
  }) : Object(core_browser_esm["jsx"])("div", {
    css: Object(helpers_typography["a" /* default */])('body')
  }, Object(core_browser_esm["jsx"])("span", {
    role: "img",
    "aria-label": "Error"
  }, "\u26D4\uFE0F"), ' ', "Specify ", Object(core_browser_esm["jsx"])("strong", null, "global.fonts.families"), " in theme settings to add fonts info in autokit."));
};

/* harmony default export */ var autokits_TypographyAutokit = (TypographyAutokit_TypographyAutokit);

try {
  // @ts-ignore
  TypographyAutokit_TypographyAutokit.displayName = "TypographyAutokit"; // @ts-ignore

  TypographyAutokit_TypographyAutokit.__docgenInfo = {
    "description": "Autokit for typography tokens `theme.typography` and fonts settings `theme.global.fonts`.",
    "displayName": "TypographyAutokit",
    "props": {
      "text": {
        "defaultValue": {
          value: "Demo text 123"
        },
        "description": "Placeholder text.",
        "name": "text",
        "required": false,
        "type": {
          "name": "string | undefined"
        }
      }
    }
  }; // @ts-ignore

  if (typeof STORYBOOK_REACT_CLASSES !== "undefined") // @ts-ignore
    STORYBOOK_REACT_CLASSES["src/autokits/TypographyAutokit/index.tsx#TypographyAutokit"] = {
      docgenInfo: TypographyAutokit_TypographyAutokit.__docgenInfo,
      name: "TypographyAutokit",
      path: "src/autokits/TypographyAutokit/index.tsx#TypographyAutokit"
    };
} catch (__react_docgen_typescript_loader_error) {}
// CONCATENATED MODULE: ./src/autokits/TypographyAutokit/TypographyAutokit.stories.mdx




function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsxRuntime classic */

/* @jsx mdx */





var layoutProps = {};
var MDXLayout = "wrapper";

function MDXContent(_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(esm["mdx"])(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(esm["mdx"])(blocks["Meta"], {
    title: "Autokits / TypographyAutokit",
    component: autokits_TypographyAutokit,
    decorators: [paddingDecorator["a" /* default */]],
    parameters: {
      design: {
        type: 'figma',
        url: 'https://www.figma.com/file/Udf9B3n8wEoykSGFhhrU0J/Greensight-DS?node-id=1373%3A2361'
      }
    },
    mdxType: "Meta"
  }), Object(esm["mdx"])("h1", {
    "id": "typography"
  }, "Typography"), Object(esm["mdx"])(blocks["Preview"], {
    mdxType: "Preview"
  }, Object(esm["mdx"])(blocks["Story"], {
    name: "basic",
    mdxType: "Story"
  }, Object(esm["mdx"])(autokits_TypographyAutokit, {
    mdxType: "TypographyAutokit"
  }))), Object(esm["mdx"])("p", null, "\u0410\u0432\u0442\u043E\u043A\u0438\u0442 \u0434\u043B\u044F \u0442\u0438\u043F\u043E\u0433\u0440\u0430\u0444\u0438\u043A\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u0430. \u0427\u0438\u0442\u0430\u0435\u0442 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435 \u043F\u043E\u043B\u044F ", Object(esm["mdx"])("inlineCode", {
    parentName: "p"
  }, "typography"), " \u043E\u0431\u044A\u0435\u043A\u0442\u0430 \u0442\u0435\u043C\u044B."), Object(esm["mdx"])("h2", {
    "id": "props"
  }, "Props"), Object(esm["mdx"])(blocks["Props"], {
    of: autokits_TypographyAutokit,
    mdxType: "Props"
  }));
}

MDXContent.displayName = "MDXContent";
;
MDXContent.isMDXComponent = true;
var TypographyAutokit_stories_basic = function basic() {
  return Object(esm["mdx"])(autokits_TypographyAutokit, null);
};
TypographyAutokit_stories_basic.displayName = "basic";
TypographyAutokit_stories_basic.storyName = 'basic';
TypographyAutokit_stories_basic.parameters = {
  storySource: {
    source: '<TypographyAutokit />'
  }
};
var componentMeta = {
  title: 'Autokits / TypographyAutokit',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Udf9B3n8wEoykSGFhhrU0J/Greensight-DS?node-id=1373%3A2361'
    }
  },
  decorators: [paddingDecorator["a" /* default */]],
  component: autokits_TypographyAutokit,
  includeStories: ["basic"]
};
var mdxStoryNameToKey = {
  "basic": "basic"
};
componentMeta.parameters = componentMeta.parameters || {};
componentMeta.parameters.docs = Object.assign({}, componentMeta.parameters.docs || {}, {
  page: function page() {
    return Object(esm["mdx"])(blocks["AddContext"], {
      mdxStoryNameToKey: mdxStoryNameToKey,
      mdxComponentMeta: componentMeta
    }, Object(esm["mdx"])(MDXContent, null));
  }
});
/* harmony default export */ var TypographyAutokit_stories = __webpack_exports__["default"] = (componentMeta);

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(72);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(11);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(22);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(24);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(17);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(29);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(12);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(34);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(37);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(67);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_from_entries_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(507);
/* harmony import */ var core_js_modules_es_object_from_entries_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_from_entries_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(76);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(77);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(15);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(179);
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(30);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(87);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(25);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(41);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(28);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _baseTheme__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(21);






























function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}


/**
 * Helper for typography styles usage. Generate typography CSS rules by style name included mobile version, fluid typography and variable fonts support.
 *
 * By default helper uses GDS base theme. Recommended way to use this helper with your own theme is define wrapper with your theme as second argument:
 *
 * ```
 * import { typography as typographyHelper } from '@greensight/gds';
 * import theme from '@scripts/theme';
 *
 * const typography = (name: string) => typographyHelper(name, theme);
 *
 * export default typography;
 * ```
 */

var typography = function typography(name) {
  var _theme$global, _globalFontsTheme$fam, _globalFontsTheme$fam2, _globalFontsTheme$fam3, _globalFontsTheme$fam4;

  var theme = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _baseTheme__WEBPACK_IMPORTED_MODULE_29__[/* default */ "a"];

  if (!name) {
    console.warn('"name" argument is not defined.');
    return;
  }

  if (!theme.typography || !theme.typography.styles[name]) {
    console.warn("Typography style ".concat(name, " is not defined."));
    return;
  }

  var typographyStyle = theme.typography.styles[name];
  var fontName = typographyStyle.desktop.fontFamily;
  var globalFontsTheme = (_theme$global = theme.global) === null || _theme$global === void 0 ? void 0 : _theme$global.fonts;
  var stack = (globalFontsTheme === null || globalFontsTheme === void 0 ? void 0 : (_globalFontsTheme$fam = globalFontsTheme.families) === null || _globalFontsTheme$fam === void 0 ? void 0 : (_globalFontsTheme$fam2 = _globalFontsTheme$fam[fontName]) === null || _globalFontsTheme$fam2 === void 0 ? void 0 : _globalFontsTheme$fam2.stack) || 'sans-serif';
  var fontFamilyStyles = {
    fontFamily: "\"".concat(fontName, "\", ").concat(stack)
  };
  var isVf = globalFontsTheme === null || globalFontsTheme === void 0 ? void 0 : (_globalFontsTheme$fam3 = globalFontsTheme.families) === null || _globalFontsTheme$fam3 === void 0 ? void 0 : (_globalFontsTheme$fam4 = _globalFontsTheme$fam3[fontName]) === null || _globalFontsTheme$fam4 === void 0 ? void 0 : _globalFontsTheme$fam4.vf;

  if (isVf) {
    fontFamilyStyles = _objectSpread(_objectSpread({}, fontFamilyStyles), {}, {
      '@supports (font-variation-settings: normal)': {
        fontFamily: "\"".concat(fontName, " VF\", ").concat(stack)
      }
    });
  }

  var desktopStyles = removeFontFamily(typographyStyle.desktop);
  var mqMobileStyles = {};
  var fluidStyles = {};
  var mainStyles = desktopStyles;

  var _theme$typography$bre = _slicedToArray(theme.typography.breakpoints, 2),
      maxVw = _theme$typography$bre[0],
      minVw = _theme$typography$bre[1];

  var mq = [maxVw, minVw].map(function (bp) {
    return "@media (max-width: ".concat(bp, "px)");
  });

  if (typographyStyle.mobile) {
    var mobileStyles = removeFontFamily(typographyStyle.mobile);

    var maxFs = desktopStyles.fontSize,
        desktopStylesWithoutFs = _objectWithoutProperties(desktopStyles, ["fontSize"]);

    var minFs = mobileStyles.fontSize,
        mobileStylesWithoutFs = _objectWithoutProperties(mobileStyles, ["fontSize"]);

    var mobileStyleEntries = Object.entries(mobileStylesWithoutFs);
    var uniqueMobileStyles = Object.fromEntries(mobileStyleEntries.filter(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          name = _ref2[0];

      return !desktopStylesWithoutFs[name] || desktopStylesWithoutFs[name] !== mobileStylesWithoutFs[name];
    }));
    mainStyles = desktopStylesWithoutFs;
    mqMobileStyles = uniqueMobileStyles;
    var isFluid = true;
    var fluidSettings = globalFontsTheme === null || globalFontsTheme === void 0 ? void 0 : globalFontsTheme.fluid;

    if (fluidSettings !== undefined) {
      isFluid = Array.isArray(fluidSettings) ? !fluidSettings.includes(name) : fluidSettings;
    }

    if (isFluid) {
      fluidStyles = _defineProperty({
        fontSize: maxFs
      }, mq[0], {
        fontSize: "calc(".concat(minFs, " + ((100vw - ").concat(pxToRem(minVw), "rem) / (").concat(pxToRem(maxVw), " - ").concat(pxToRem(minVw), ")) * (").concat(parseFloat(maxFs), " - ").concat(parseFloat(minFs), "))")
      });
    } else {
      fluidStyles = {
        fontSize: maxFs
      };
    }

    mqMobileStyles = _objectSpread(_objectSpread({}, mqMobileStyles), {}, {
      fontSize: minFs
    });
  }

  return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, fontFamilyStyles), mainStyles), fluidStyles), {}, _defineProperty({}, mq[1], mqMobileStyles));
};

var pxToRem = function pxToRem(px) {
  return px / 16;
};

var removeFontFamily = function removeFontFamily(styles) {
  var entries = Object.entries(styles);
  var filteredEntries = entries.filter(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 1),
        name = _ref4[0];

    return name !== 'fontFamily';
  });
  var filteredStyles = Object.fromEntries(filteredEntries);
  return filteredStyles;
};

/* harmony default export */ __webpack_exports__["a"] = (typography);

try {
  // @ts-ignore
  typography.displayName = "typography"; // @ts-ignore

  typography.__docgenInfo = {
    "description": "Helper for typography styles usage. Generate typography CSS rules by style name included mobile version, fluid typography and variable fonts support.\n\nBy default helper uses GDS base theme. Recommended way to use this helper with your own theme is define wrapper with your theme as second argument:\n\n```\nimport { typography as typographyHelper } from '@greensight/gds';\nimport theme from '@scripts/theme';\n\nconst typography = (name: string) => typographyHelper(name, theme);\n\nexport default typography;\n```",
    "displayName": "typography",
    "props": {}
  }; // @ts-ignore

  if (typeof STORYBOOK_REACT_CLASSES !== "undefined") // @ts-ignore
    STORYBOOK_REACT_CLASSES["src/utils/typography.ts#typography"] = {
      docgenInfo: typography.__docgenInfo,
      name: "typography",
      path: "src/utils/typography.ts#typography"
    };
} catch (__react_docgen_typescript_loader_error) {}

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copy text to user clipboard.
 */
var copyToClipboard = function copyToClipboard(text, focusRef) {
  var selection = document.getSelection();
  if (!selection) return;
  var el = document.createElement('textarea');
  el.value = text;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  var selected = selection.rangeCount > 0 ? selection.getRangeAt(0) : false;
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);

  if (selected) {
    selection.removeAllRanges();
    selection.addRange(selected);
  }

  if (focusRef && focusRef.current) focusRef.current.focus();
};

/* harmony default export */ __webpack_exports__["a"] = (copyToClipboard);

try {
  // @ts-ignore
  copyToClipboard.displayName = "copyToClipboard"; // @ts-ignore

  copyToClipboard.__docgenInfo = {
    "description": "Copy text to user clipboard.",
    "displayName": "copyToClipboard",
    "props": {}
  }; // @ts-ignore

  if (typeof STORYBOOK_REACT_CLASSES !== "undefined") // @ts-ignore
    STORYBOOK_REACT_CLASSES["src/helpers/copyToClipboard.ts#copyToClipboard"] = {
      docgenInfo: copyToClipboard.__docgenInfo,
      name: "copyToClipboard",
      path: "src/helpers/copyToClipboard.ts#copyToClipboard"
    };
} catch (__react_docgen_typescript_loader_error) {}

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(7);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__(11);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(5);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(6);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/web.timers.js
var web_timers = __webpack_require__(176);

// EXTERNAL MODULE: ./.yarn/cache/@emotion-css-npm-10.0.27-3fd4a0c157-2.zip/node_modules/@emotion/css/dist/css.browser.esm.js
var css_browser_esm = __webpack_require__(14);

// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.0-ac51e3f61d-2.zip/node_modules/react/index.js
var react = __webpack_require__(1);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./.yarn/$$virtual/@tippy.js-react-virtual-0b4a8b9012/0/cache/@tippy.js-react-npm-3.1.1-8b99790ce2-2.zip/node_modules/@tippy.js/react/dist/tippy-react.esm.js + 2 modules
var tippy_react_esm = __webpack_require__(521);

// EXTERNAL MODULE: ./.yarn/cache/tippy.js-npm-5.2.1-88cd1df170-2.zip/node_modules/tippy.js/dist/tippy.css
var tippy = __webpack_require__(1156);

// EXTERNAL MODULE: ./.yarn/cache/tippy.js-npm-5.2.1-88cd1df170-2.zip/node_modules/tippy.js/animations/shift-away.css
var shift_away = __webpack_require__(1158);

// EXTERNAL MODULE: ./src/utils/baseTheme.ts + 1 modules
var baseTheme = __webpack_require__(21);

// EXTERNAL MODULE: ./src/utils/scale.ts
var scale = __webpack_require__(4);

// CONCATENATED MODULE: ./src/icons/tokens/medium/checkCircle.svg
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 = /*#__PURE__*/react["createElement"]("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M10.0166 3.21567C11.9096 2.78796 13.8902 2.98364 15.663 3.77354C16.1675 3.99832 16.7587 3.77158 16.9834 3.26711C17.2082 2.76264 16.9815 2.17146 16.477 1.94668C14.3103 0.981252 11.8896 0.742082 9.57581 1.26484C7.26206 1.7876 5.17929 3.04428 3.63811 4.84746C2.09693 6.65064 1.17992 8.9037 1.02384 11.2706C0.86777 13.6376 1.48099 15.9915 2.77206 17.9815C4.06312 19.9714 5.96285 21.4907 8.18792 22.3127C10.413 23.1348 12.8442 23.2155 15.1189 22.543C17.3936 21.8704 19.39 20.4806 20.8103 18.5807C22.2306 16.6808 22.9986 14.3727 23 12.0007V11.0801C23 10.5278 22.5523 10.0801 22 10.0801C21.4477 10.0801 21 10.5278 21 11.0801V11.9995C20.9989 13.9403 20.3705 15.8287 19.2084 17.3832C18.0464 18.9376 16.413 20.0748 14.5518 20.625C12.6907 21.1753 10.7015 21.1092 8.88103 20.4367C7.06051 19.7641 5.50619 18.521 4.44987 16.8929C3.39354 15.2648 2.89181 13.3388 3.01951 11.4022C3.14721 9.46565 3.89749 7.62223 5.15845 6.1469C6.41942 4.67158 8.12351 3.64338 10.0166 3.21567ZM22.7075 4.70675C23.0978 4.31603 23.0975 3.68287 22.7068 3.29254C22.316 2.90221 21.6829 2.90253 21.2925 3.29325L11.9996 12.5954L9.70711 10.3029C9.31658 9.91237 8.68342 9.91237 8.29289 10.3029C7.90237 10.6934 7.90237 11.3266 8.29289 11.7171L11.2929 14.7171C11.4805 14.9047 11.7349 15.0101 12.0003 15.01C12.2656 15.0099 12.52 14.9044 12.7075 14.7168L22.7075 4.70675Z"
});

function SvgCheckCircle(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react["createElement"]("svg", _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react["createElement"]("title", {
    id: titleId
  }, title) : null, _ref2);
}

/* harmony default export */ var checkCircle = (SvgCheckCircle);
// EXTERNAL MODULE: ./.yarn/$$virtual/@emotion-core-virtual-9244315116/0/cache/@emotion-core-npm-10.1.1-f084e0eeac-2.zip/node_modules/@emotion/core/dist/core.browser.esm.js + 4 modules
var core_browser_esm = __webpack_require__(3);

// CONCATENATED MODULE: ./src/helpers/Tooltip.tsx







function Tooltip_extends() {
  Tooltip_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Tooltip_extends.apply(this, arguments);
}

function Tooltip_objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = Tooltip_objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function Tooltip_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}








/**
 * Tooltip with success icon. Helper component for show after successful clipboard copy.
 */



var Tooltip_Tooltip = function Tooltip(_ref) {
  var children = _ref.children,
      content = _ref.content,
      props = Tooltip_objectWithoutProperties(_ref, ["children", "content"]);

  var colors = baseTheme["a" /* default */].colors;
  return Object(core_browser_esm["jsx"])(tippy_react_esm["a" /* default */], Tooltip_extends({
    content: Object(core_browser_esm["jsx"])(react_default.a.Fragment, null, Object(core_browser_esm["jsx"])(checkCircle, {
      fill: colors === null || colors === void 0 ? void 0 : colors.success,
      css:
      /*#__PURE__*/

      /*#__PURE__*/
      Object(css_browser_esm["a" /* default */])({
        marginRight: Object(scale["a" /* default */])(1),
        verticalAlign: 'middle'
      },  true ? "" : undefined, ";label:css;" + ( true ? "" : undefined))
    }), content),
    trigger: "click",
    arrow: false,
    animation: "shift-away",
    onShow: function onShow(instance) {
      setTimeout(function () {
        instance.hide();
      }, 1000);
    }
  }, props), children);
};

/* harmony default export */ var helpers_Tooltip = __webpack_exports__["a"] = (Tooltip_Tooltip);

try {
  // @ts-ignore
  Tooltip_Tooltip.displayName = "Tooltip"; // @ts-ignore

  Tooltip_Tooltip.__docgenInfo = {
    "description": "Tooltip with success icon. Helper component for show after successful clipboard copy.",
    "displayName": "Tooltip",
    "props": {}
  }; // @ts-ignore

  if (typeof STORYBOOK_REACT_CLASSES !== "undefined") // @ts-ignore
    STORYBOOK_REACT_CLASSES["src/helpers/Tooltip.tsx#Tooltip"] = {
      docgenInfo: Tooltip_Tooltip.__docgenInfo,
      name: "Tooltip",
      path: "src/helpers/Tooltip.tsx#Tooltip"
    };
} catch (__react_docgen_typescript_loader_error) {}

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
function _EMOTION_STRINGIFIED_CSS_ERROR__() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}



var _ref2 =  true ? {
  name: "12o0giv",
  styles: "position:absolute;width:1px;height:1px;padding:0;border:none;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);white-space:nowrap;"
} : undefined;
/**
 * Component to wrap components to make them visually hidden. These components still will be available for assistive technologies.
 */


var VisuallyHidden = function VisuallyHidden(_ref) {
  var children = _ref.children;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    css: _ref2
  }, children);
};

/* harmony default export */ __webpack_exports__["a"] = (VisuallyHidden);

try {
  // @ts-ignore
  VisuallyHidden.displayName = "VisuallyHidden"; // @ts-ignore

  VisuallyHidden.__docgenInfo = {
    "description": "Component to wrap components to make them visually hidden. These components still will be available for assistive technologies.",
    "displayName": "VisuallyHidden",
    "props": {
      "children": {
        "defaultValue": null,
        "description": "Hidden content.",
        "name": "children",
        "required": true,
        "type": {
          "name": "ReactNode"
        }
      }
    }
  }; // @ts-ignore

  if (typeof STORYBOOK_REACT_CLASSES !== "undefined") // @ts-ignore
    STORYBOOK_REACT_CLASSES["src/components/VisuallyHidden/index.tsx#VisuallyHidden"] = {
      docgenInfo: VisuallyHidden.__docgenInfo,
      name: "VisuallyHidden",
      path: "src/components/VisuallyHidden/index.tsx#VisuallyHidden"
    };
} catch (__react_docgen_typescript_loader_error) {}

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14);
/* harmony import */ var _helpers_useCSSProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38);
/* harmony import */ var _utils_useTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52);
/* harmony import */ var _utils_baseTheme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(21);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3);






function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}





/**
 * Component for creating main page container with `layout` theme parameters. Uses `maxWidth`, `padding`,`marginLeft`, `marginRight`.
 */

var Container = function Container(_ref) {
  var children = _ref.children,
      css = _ref.css,
      props = _objectWithoutProperties(_ref, ["children", "css"]);

  var _useTheme = Object(_utils_useTheme__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(),
      layout = _useTheme.layout;

  var layoutTheme = layout || _utils_baseTheme__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].layout;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", _extends({
    css:
    /*#__PURE__*/

    /*#__PURE__*/
    Object(_emotion_css__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])([Object(_helpers_useCSSProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])({
      name: 'maxWidth',
      props: {
        value: layoutTheme.container
      }
    }), Object(_helpers_useCSSProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])({
      name: 'padding',
      props: {
        value: layoutTheme.padding
      },
      transform: function transform(_ref2) {
        var value = _ref2.value;
        return "0 ".concat(value, "px");
      }
    }), Object(_helpers_useCSSProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])({
      name: 'marginLeft',
      props: {
        value: layoutTheme.marginLeft
      }
    }), Object(_helpers_useCSSProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])({
      name: 'marginRight',
      props: {
        value: layoutTheme.marginRight
      }
    }), css],  true ? "" : undefined, ";label:css;" + ( true ? "" : undefined))
  }, props), children);
};

/* harmony default export */ __webpack_exports__["a"] = (Container);

try {
  // @ts-ignore
  Container.displayName = "Container"; // @ts-ignore

  Container.__docgenInfo = {
    "description": "Component for creating main page container with `layout` theme parameters. Uses `maxWidth`, `padding`,`marginLeft`, `marginRight`.",
    "displayName": "Container",
    "props": {
      "children": {
        "defaultValue": null,
        "description": "Container content.",
        "name": "children",
        "required": true,
        "type": {
          "name": "ReactNode"
        }
      },
      "css": {
        "defaultValue": null,
        "description": "Additional CSS.",
        "name": "css",
        "required": false,
        "type": {
          "name": "CSSObject | undefined"
        }
      }
    }
  }; // @ts-ignore

  if (typeof STORYBOOK_REACT_CLASSES !== "undefined") // @ts-ignore
    STORYBOOK_REACT_CLASSES["src/components/Container/index.tsx#Container"] = {
      docgenInfo: Container.__docgenInfo,
      name: "Container",
      path: "src/components/Container/index.tsx#Container"
    };
} catch (__react_docgen_typescript_loader_error) {}

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(7);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(27);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__(11);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.is-array.js
var es_array_is_array = __webpack_require__(22);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.join.js
var es_array_join = __webpack_require__(59);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(19);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.reverse.js
var es_array_reverse = __webpack_require__(510);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(148);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.number.is-integer.js
var es_number_is_integer = __webpack_require__(211);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(5);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(6);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__(149);

// EXTERNAL MODULE: ./.yarn/cache/@emotion-css-npm-10.0.27-3fd4a0c157-2.zip/node_modules/@emotion/css/dist/css.browser.esm.js
var css_browser_esm = __webpack_require__(14);

// EXTERNAL MODULE: ./src/utils/useTheme.ts
var useTheme = __webpack_require__(52);

// EXTERNAL MODULE: ./src/utils/baseTheme.ts + 1 modules
var baseTheme = __webpack_require__(21);

// EXTERNAL MODULE: ./src/helpers/useCSSProperty.ts + 1 modules
var useCSSProperty = __webpack_require__(38);

// CONCATENATED MODULE: ./src/helpers/toArray.ts


/**
 * Converts any type to array (arrays are included).
 */
var toArray = function toArray(arg) {
  var _ref;

  return (_ref = []).concat.apply(_ref, [arg]);
};

/* harmony default export */ var helpers_toArray = (toArray);

try {
  // @ts-ignore
  toArray.displayName = "toArray"; // @ts-ignore

  toArray.__docgenInfo = {
    "description": "Converts any type to array (arrays are included).",
    "displayName": "toArray",
    "props": {}
  }; // @ts-ignore

  if (typeof STORYBOOK_REACT_CLASSES !== "undefined") // @ts-ignore
    STORYBOOK_REACT_CLASSES["src/helpers/toArray.ts#toArray"] = {
      docgenInfo: toArray.__docgenInfo,
      name: "toArray",
      path: "src/helpers/toArray.ts#toArray"
    };
} catch (__react_docgen_typescript_loader_error) {}
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.0-ac51e3f61d-2.zip/node_modules/react/index.js
var react = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/Layout/useLayout.ts
/** Импорт React нужен для tsc. */

var LayoutContext = /*#__PURE__*/Object(react["createContext"])(undefined);

var useLayout_useLayout = function useLayout() {
  var context = Object(react["useContext"])(LayoutContext);

  if (!context) {
    throw new Error('This component must be used within a <Layout> component');
  }

  return context;
};

/* harmony default export */ var Layout_useLayout = (useLayout_useLayout);
// EXTERNAL MODULE: ./.yarn/$$virtual/@emotion-core-virtual-9244315116/0/cache/@emotion-core-npm-10.1.1-f084e0eeac-2.zip/node_modules/@emotion/core/dist/core.browser.esm.js + 4 modules
var core_browser_esm = __webpack_require__(3);

// CONCATENATED MODULE: ./src/components/Layout/Item.tsx










function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}




/**
 * Inner `Layout` component for creating layout cells.
 */

var Item_Item = function Item(_ref) {
  var children = _ref.children,
      col = _ref.col,
      row = _ref.row,
      area = _ref.area,
      justify = _ref.justify,
      align = _ref.align,
      order = _ref.order,
      grow = _ref.grow,
      css = _ref.css,
      props = _objectWithoutProperties(_ref, ["children", "col", "row", "area", "justify", "align", "order", "grow", "css"]);

  var _useLayout = Layout_useLayout(),
      type = _useLayout.type,
      gap = _useLayout.gap,
      cols = _useLayout.cols,
      auto = _useLayout.auto;

  return Object(core_browser_esm["jsx"])("div", _extends({
    css:
    /*#__PURE__*/

    /*#__PURE__*/
    Object(css_browser_esm["a" /* default */])([Object(useCSSProperty["a" /* default */])({
      name: 'gridColumn',
      props: {
        col: col
      },
      condition: type === 'grid',
      transform: function transform(_ref2) {
        var col = _ref2.col;
        if (Array.isArray(col)) return "".concat(col[0], " / ").concat(col[1]);
        if (Number.isInteger(col)) return "span ".concat(col);
        return col;
      }
    }), Object(useCSSProperty["a" /* default */])({
      name: 'gridRow',
      props: {
        row: row
      },
      condition: type === 'grid',
      transform: function transform(_ref3) {
        var row = _ref3.row;
        if (Array.isArray(row)) return "".concat(row[0], " / ").concat(row[1]);
        if (Number.isInteger(row)) return "span ".concat(row);
        return row;
      }
    }), Object(useCSSProperty["a" /* default */])({
      name: 'gridArea',
      props: {
        area: area
      },
      condition: type === 'grid'
    }), Object(useCSSProperty["a" /* default */])({
      name: 'justifySelf',
      props: {
        justify: justify
      },
      condition: type === 'grid'
    }), Object(useCSSProperty["a" /* default */])({
      name: 'alignSelf',
      props: {
        align: align
      },
      transform: function transform(_ref4) {
        var align = _ref4.align;
        if (type === 'flex' && (align === 'start' || align === 'end')) return "flex-".concat(align);
        return align;
      }
    }), Object(useCSSProperty["a" /* default */])({
      name: 'order',
      props: {
        order: order
      }
    }), Object(useCSSProperty["a" /* default */])({
      name: 'flexGrow',
      props: {
        grow: grow,
        auto: auto
      },
      condition: type === 'flex',
      transform: function transform(_ref5) {
        var grow = _ref5.grow,
            auto = _ref5.auto;
        if (auto) return 1;
        return !Number.isInteger(grow) ? Number(grow) : grow;
      }
    }), Object(useCSSProperty["a" /* default */])({
      name: 'padding',
      props: {
        gap: gap
      },
      condition: type === 'flex',
      transform: function transform(_ref6) {
        var gap = _ref6.gap;
        if (Array.isArray(gap)) return "".concat(gap[0], "px 0 0 ").concat(gap[1], "px");
        return "".concat(gap, "px 0 0 ").concat(gap, "px");
      }
    }), Object(useCSSProperty["a" /* default */])({
      name: 'flexBasis',
      props: {
        col: col,
        auto: auto
      },
      condition: type === 'flex',
      transform: function transform(_ref7) {
        var col = _ref7.col,
            auto = _ref7.auto;
        if (auto) return auto;
        if (typeof cols === 'number' && Number.isInteger(Number(col))) return "".concat(Math.floor(100 * col * 100 / cols) / 100, "%");
        return col;
      }
    }), css],  true ? "" : undefined, ";label:css;" + ( true ? "" : undefined))
  }, props), children);
};

/* harmony default export */ var Layout_Item = (Item_Item);

try {
  // @ts-ignore
  Item_Item.displayName = "Item"; // @ts-ignore

  Item_Item.__docgenInfo = {
    "description": "Inner `Layout` component for creating layout cells.",
    "displayName": "Item",
    "props": {
      "children": {
        "defaultValue": null,
        "description": "Item content.",
        "name": "children",
        "required": false,
        "type": {
          "name": "ReactNode"
        }
      },
      "col": {
        "defaultValue": null,
        "description": "Column settings.",
        "name": "col",
        "required": false,
        "type": {
          "name": "string | number | [number, number] | Partial<Record<Breakpoint, string | number | [number, number]>> | undefined"
        }
      },
      "row": {
        "defaultValue": null,
        "description": "Row settings. For grids only.",
        "name": "row",
        "required": false,
        "type": {
          "name": "string | number | [number, number] | Partial<Record<Breakpoint, string | number | [number, number]>> | undefined"
        }
      },
      "area": {
        "defaultValue": null,
        "description": "Area name. For grids only.",
        "name": "area",
        "required": false,
        "type": {
          "name": "string | Partial<Record<Breakpoint, string>> | undefined"
        }
      },
      "justify": {
        "defaultValue": null,
        "description": "Main axis self alignment. For grids only.",
        "name": "justify",
        "required": false,
        "type": {
          "name": "\"start\" | \"end\" | \"center\" | \"stretch\" | Partial<Record<Breakpoint, \"start\" | \"end\" | \"center\" | \"stretch\">> | undefined"
        }
      },
      "align": {
        "defaultValue": null,
        "description": "Cross axis self alignment.",
        "name": "align",
        "required": false,
        "type": {
          "name": "\"start\" | \"end\" | \"center\" | \"stretch\" | Partial<Record<Breakpoint, \"start\" | \"end\" | \"center\" | \"stretch\">> | undefined"
        }
      },
      "order": {
        "defaultValue": null,
        "description": "Order.",
        "name": "order",
        "required": false,
        "type": {
          "name": "number | Partial<Record<Breakpoint, number>> | undefined"
        }
      },
      "grow": {
        "defaultValue": null,
        "description": "Expand on all available space. For flex only.",
        "name": "grow",
        "required": false,
        "type": {
          "name": "number | boolean | Partial<Record<Breakpoint, number | boolean>> | undefined"
        }
      },
      "css": {
        "defaultValue": null,
        "description": "Additional CSS.",
        "name": "css",
        "required": false,
        "type": {
          "name": "CSSObject | undefined"
        }
      }
    }
  }; // @ts-ignore

  if (typeof STORYBOOK_REACT_CLASSES !== "undefined") // @ts-ignore
    STORYBOOK_REACT_CLASSES["src/components/Layout/Item.tsx#Item"] = {
      docgenInfo: Item_Item.__docgenInfo,
      name: "Item",
      path: "src/components/Layout/Item.tsx#Item"
    };
} catch (__react_docgen_typescript_loader_error) {}
// CONCATENATED MODULE: ./src/components/Layout/index.tsx














function Layout_extends() {
  Layout_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Layout_extends.apply(this, arguments);
}

function Layout_objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = Layout_objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function Layout_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}








/**
 * Component for creating typical grid and flex layouts.
 */

var Layout_Layout = function Layout(_ref) {
  var _gap, _cols;

  var children = _ref.children,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'grid' : _ref$type,
      inline = _ref.inline,
      cols = _ref.cols,
      rows = _ref.rows,
      areas = _ref.areas,
      gap = _ref.gap,
      justify = _ref.justify,
      align = _ref.align,
      autoRows = _ref.autoRows,
      autoCols = _ref.autoCols,
      direction = _ref.direction,
      dense = _ref.dense,
      reverse = _ref.reverse,
      _ref$wrap = _ref.wrap,
      wrap = _ref$wrap === void 0 ? true : _ref$wrap,
      auto = _ref.auto,
      css = _ref.css,
      props = Layout_objectWithoutProperties(_ref, ["children", "type", "inline", "cols", "rows", "areas", "gap", "justify", "align", "autoRows", "autoCols", "direction", "dense", "reverse", "wrap", "auto", "css"]);

  var _useTheme = Object(useTheme["a" /* default */])(),
      layout = _useTheme.layout;

  var layoutTheme = layout || baseTheme["a" /* default */].layout;
  gap = (_gap = gap) !== null && _gap !== void 0 ? _gap : layoutTheme.gap;
  cols = (_cols = cols) !== null && _cols !== void 0 ? _cols : layoutTheme.cols;
  return Object(core_browser_esm["jsx"])(LayoutContext.Provider, {
    value: {
      type: type,
      gap: gap,
      cols: cols,
      auto: auto
    }
  }, Object(core_browser_esm["jsx"])("div", Layout_extends({
    css:
    /*#__PURE__*/

    /*#__PURE__*/
    Object(css_browser_esm["a" /* default */])([Object(useCSSProperty["a" /* default */])({
      name: 'display',
      props: {
        type: type,
        inline: inline
      },
      transform: function transform(_ref2) {
        var type = _ref2.type,
            inline = _ref2.inline;
        return inline ? "inline-".concat(type) : type;
      }
    }), Object(useCSSProperty["a" /* default */])({
      name: 'gridTemplateColumns',
      props: {
        cols: cols,
        auto: auto
      },
      condition: type === 'grid' && !areas,
      transform: function transform(_ref3) {
        var cols = _ref3.cols,
            auto = _ref3.auto;
        if (auto) return "repeat(auto-fill, minmax(".concat(auto, "px, 1fr))");
        if (Number.isInteger(cols)) return "repeat(".concat(cols, ", 1fr)");
        var arr = helpers_toArray(cols);
        return arr.map(function (val) {
          return Number.isInteger(val) ? "".concat(val, "fr") : val;
        }).join(' ');
      }
    }), Object(useCSSProperty["a" /* default */])({
      name: 'gridTemplateRows',
      props: {
        rows: rows
      },
      condition: type === 'grid' && !areas,
      transform: function transform(_ref4) {
        var rows = _ref4.rows;
        if (Number.isInteger(rows)) return "repeat(".concat(rows, ", 1fr)");
        var arr = helpers_toArray(rows);
        return arr.map(function (val) {
          return Number.isInteger(val) ? "".concat(val, "fr") : val;
        }).join(' ');
      }
    }), Object(useCSSProperty["a" /* default */])({
      name: 'gridTemplateAreas',
      props: {
        areas: areas
      },
      condition: type === 'grid',
      transform: function transform(_ref5) {
        var areas = _ref5.areas;
        var arr = helpers_toArray(areas);
        return arr.map(function (val) {
          return "\"".concat(val, "\"");
        }).join(' ');
      }
    }), Object(useCSSProperty["a" /* default */])({
      name: 'gridGap',
      props: {
        gap: gap
      },
      condition: type === 'grid',
      transform: function transform(_ref6) {
        var gap = _ref6.gap;
        if (Array.isArray(gap)) return "".concat(gap[0], "px ").concat(gap[1], "px");
        return gap;
      }
    }), Object(useCSSProperty["a" /* default */])({
      name: 'margin',
      props: {
        gap: gap
      },
      condition: type === 'flex',
      transform: function transform(_ref7) {
        var gap = _ref7.gap;
        if (Array.isArray(gap)) return "-".concat(gap[0], "px 0 0 -").concat(gap[1], "px");
        return "-".concat(gap, "px 0 0 -").concat(gap, "px");
      }
    }), Object(useCSSProperty["a" /* default */])({
      name: 'justifyItems',
      props: {
        justify: justify
      },
      condition: type === 'grid'
    }), Object(useCSSProperty["a" /* default */])({
      name: 'justifyContent',
      props: {
        justify: justify
      },
      condition: type === 'flex',
      transform: function transform(_ref8) {
        var justify = _ref8.justify;
        if (justify === 'start' || justify === 'end') return "flex-".concat(justify);
        return justify;
      }
    }), Object(useCSSProperty["a" /* default */])({
      name: 'alignItems',
      props: {
        align: align
      },
      transform: function transform(_ref9) {
        var align = _ref9.align;
        if (type === 'flex' && (align === 'start' || align === 'end')) return "flex-".concat(align);
        return align;
      }
    }), Object(useCSSProperty["a" /* default */])({
      name: 'gridAutoRows',
      props: {
        autoRows: autoRows
      },
      condition: type === 'grid',
      transform: function transform(_ref10) {
        var autoRows = _ref10.autoRows;
        var arr = helpers_toArray(autoRows);
        return arr.map(function (val) {
          return Number.isInteger(val) ? "".concat(val, "fr") : val;
        }).join(' ');
      }
    }), Object(useCSSProperty["a" /* default */])({
      name: 'gridAutoColumns',
      props: {
        autoCols: autoCols
      },
      condition: type === 'grid',
      transform: function transform(_ref11) {
        var autoCols = _ref11.autoCols;
        var arr = helpers_toArray(autoCols);
        return arr.map(function (val) {
          return Number.isInteger(val) ? "".concat(val, "fr") : val;
        }).join(' ');
      }
    }), Object(useCSSProperty["a" /* default */])({
      name: 'gridAutoFlow',
      props: {
        direction: direction,
        dense: dense
      },
      condition: type === 'grid' && (direction === 'column' || !!dense),
      transform: function transform(_ref12) {
        var direction = _ref12.direction,
            dense = _ref12.dense;
        return "".concat(direction === 'column' ? 'column' : '').concat(dense ? ' dense' : '').trim();
      }
    }), Object(useCSSProperty["a" /* default */])({
      name: 'flexDirection',
      props: {
        direction: direction,
        reverse: reverse
      },
      condition: type === 'flex' && (direction === 'column' || !!reverse),
      transform: function transform(_ref13) {
        var direction = _ref13.direction,
            reverse = _ref13.reverse;
        return "".concat(direction === 'column' ? 'column' : 'row').concat(reverse ? '-reverse' : '');
      }
    }), Object(useCSSProperty["a" /* default */])({
      name: 'flexWrap',
      props: {
        wrap: wrap
      },
      condition: type === 'flex',
      transform: function transform(_ref14) {
        var wrap = _ref14.wrap;
        return wrap ? 'wrap' : 'nowrap';
      }
    }), css],  true ? "" : undefined, ";label:css;" + ( true ? "" : undefined))
  }, props), children));
};

Layout_Layout.Item = Layout_Item;
/* harmony default export */ var components_Layout = __webpack_exports__["a"] = (Layout_Layout);

try {
  // @ts-ignore
  Layout_Layout.displayName = "Layout"; // @ts-ignore

  Layout_Layout.__docgenInfo = {
    "description": "Component for creating typical grid and flex layouts.",
    "displayName": "Layout",
    "props": {
      "children": {
        "defaultValue": null,
        "description": "Layout items list.",
        "name": "children",
        "required": false,
        "type": {
          "name": "ReactNode"
        }
      },
      "inline": {
        "defaultValue": null,
        "description": "Inline mode. Changes `display` type.",
        "name": "inline",
        "required": false,
        "type": {
          "name": "boolean | Partial<Record<Breakpoint, boolean>> | undefined"
        }
      },
      "rows": {
        "defaultValue": null,
        "description": "Rows. For grids only.",
        "name": "rows",
        "required": false,
        "type": {
          "name": "string | number | ReactText[] | Partial<Record<Breakpoint, string | number | ReactText[]>> | undefined"
        }
      },
      "areas": {
        "defaultValue": null,
        "description": "Areas. For grids only.",
        "name": "areas",
        "required": false,
        "type": {
          "name": "string | string[] | Partial<Record<Breakpoint, string | string[]>> | undefined"
        }
      },
      "justify": {
        "defaultValue": null,
        "description": "Main axis alignment.",
        "name": "justify",
        "required": false,
        "type": {
          "name": "\"start\" | \"end\" | \"center\" | \"stretch\" | \"space-around\" | \"space-between\" | \"space-evenly\" | Partial<Record<Breakpoint, \"start\" | \"end\" | \"center\" | \"stretch\" | \"space-around\" | \"space-between\" | \"space-evenly\">> | undefined"
        }
      },
      "align": {
        "defaultValue": null,
        "description": "Cross axis alignment.",
        "name": "align",
        "required": false,
        "type": {
          "name": "\"start\" | \"end\" | \"center\" | \"stretch\" | Partial<Record<Breakpoint, \"start\" | \"end\" | \"center\" | \"stretch\">> | undefined"
        }
      },
      "autoRows": {
        "defaultValue": null,
        "description": "Auto rows size. For grids only.",
        "name": "autoRows",
        "required": false,
        "type": {
          "name": "string | number | ReactText[] | Partial<Record<Breakpoint, string | number | ReactText[]>> | undefined"
        }
      },
      "autoCols": {
        "defaultValue": null,
        "description": "Auto cols size. For grids only.",
        "name": "autoCols",
        "required": false,
        "type": {
          "name": "string | number | ReactText[] | Partial<Record<Breakpoint, string | number | ReactText[]>> | undefined"
        }
      },
      "direction": {
        "defaultValue": null,
        "description": "Main axis direction.",
        "name": "direction",
        "required": false,
        "type": {
          "name": "\"row\" | \"column\" | Partial<Record<Breakpoint, \"row\" | \"column\">> | undefined"
        }
      },
      "dense": {
        "defaultValue": null,
        "description": "Dense mode. For grids only.",
        "name": "dense",
        "required": false,
        "type": {
          "name": "boolean | Partial<Record<Breakpoint, boolean>> | undefined"
        }
      },
      "reverse": {
        "defaultValue": null,
        "description": "Reverse directions. For flex only.",
        "name": "reverse",
        "required": false,
        "type": {
          "name": "boolean | Partial<Record<Breakpoint, boolean>> | undefined"
        }
      },
      "wrap": {
        "defaultValue": {
          value: true
        },
        "description": "Multiline mode. For flex only.",
        "name": "wrap",
        "required": false,
        "type": {
          "name": "boolean | Partial<Record<Breakpoint, boolean>> | undefined"
        }
      },
      "css": {
        "defaultValue": null,
        "description": "Additional CSS.",
        "name": "css",
        "required": false,
        "type": {
          "name": "CSSObject | undefined"
        }
      },
      "type": {
        "defaultValue": {
          value: "grid"
        },
        "description": "Layout type. Some properties are available only for one or another type.",
        "name": "type",
        "required": false,
        "type": {
          "name": "\"grid\" | \"flex\" | Partial<Record<Breakpoint, \"grid\" | \"flex\">> | undefined"
        }
      },
      "cols": {
        "defaultValue": null,
        "description": "Columns settings.",
        "name": "cols",
        "required": false,
        "type": {
          "name": "string | number | ReactText[] | Partial<Record<Breakpoint, string | number | ReactText[]>> | undefined"
        }
      },
      "gap": {
        "defaultValue": null,
        "description": "Gaps settings.",
        "name": "gap",
        "required": false,
        "type": {
          "name": "string | number | [ReactText, ReactText] | Partial<Record<Breakpoint, string | number | [ReactText, ReactText]>> | undefined"
        }
      },
      "auto": {
        "defaultValue": null,
        "description": "Minimum column size in auto mode. Auto mode allows to create columns of equal size without media queries.",
        "name": "auto",
        "required": false,
        "type": {
          "name": "number | Partial<Record<Breakpoint, number>> | undefined"
        }
      }
    }
  }; // @ts-ignore

  if (typeof STORYBOOK_REACT_CLASSES !== "undefined") // @ts-ignore
    STORYBOOK_REACT_CLASSES["src/components/Layout/index.tsx#Layout"] = {
      docgenInfo: Layout_Layout.__docgenInfo,
      name: "Layout",
      path: "src/components/Layout/index.tsx#Layout"
    };
} catch (__react_docgen_typescript_loader_error) {}

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./.yarn/cache/deepmerge-npm-4.2.2-112165ced2-2.zip/node_modules/deepmerge/dist/cjs.js
var cjs = __webpack_require__(235);
var cjs_default = /*#__PURE__*/__webpack_require__.n(cjs);

// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.0-ac51e3f61d-2.zip/node_modules/react/index.js
var react = __webpack_require__(1);

// CONCATENATED MODULE: ./src/icons/tokens/medium/placeholder.svg
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 = /*#__PURE__*/react["createElement"]("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M6 8.5C6 7.11929 7.11929 6 8.5 6C9.88071 6 11 7.11929 11 8.5C11 9.88071 9.88071 11 8.5 11C7.11929 11 6 9.88071 6 8.5ZM8.5 8C8.22386 8 8 8.22386 8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5C9 8.22386 8.77614 8 8.5 8Z"
});

var _ref3 = /*#__PURE__*/react["createElement"]("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M22 5C22 3.34315 20.6569 2 19 2H5C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V5ZM5 4C4.44772 4 4 4.44772 4 5V19C4 19.4288 4.2699 19.7946 4.64909 19.9367L15.2929 9.29289C15.6834 8.90237 16.3166 8.90237 16.7071 9.29289L20 12.5858V5C20 4.44772 19.5523 4 19 4H5ZM20 15.4142L16 11.4142L7.41421 20H19C19.5523 20 20 19.5523 20 19V15.4142Z"
});

function SvgPlaceholder(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react["createElement"]("svg", _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react["createElement"]("title", {
    id: titleId
  }, title) : null, _ref2, _ref3);
}

/* harmony default export */ var placeholder = (SvgPlaceholder);
// EXTERNAL MODULE: ./src/utils/scale.ts
var scale = __webpack_require__(4);

// EXTERNAL MODULE: ./src/helpers/constants.ts
var constants = __webpack_require__(78);

// EXTERNAL MODULE: ./public/tokens.json
var tokens = __webpack_require__(238);

// CONCATENATED MODULE: ./src/utils/baseTheme.ts
/** Импорт React нужен для tsc. */





var colors = tokens.colors,
    shadows = tokens.shadows;
/* Здесь умышленно не используется createTheme, т.к. она возвращает тип Theme, а базовую тему хочется использовать как константу, чтобы при вводе baseTheme.colors. выводились все цвета + не выдавалось излишних проверок на существование. Мы теряем здесь типизацию при наборе базовой темы (исключительно этот файл), но даём пользователям удобство работы с константой. Пользовательские тему будут создаваться через createTheme и строго следовать типам. */

/**
 * Default GDS theme.
 */

var baseTheme = cjs_default()(tokens, {
  global: {
    placeholder: placeholder,
    fonts: {
      families: {
        'PT Root UI': {
          stack: constants["b" /* FONT_STACK */]
        }
      },
      fontFace: [{
        '@font-face': {
          fontFamily: 'PT Root UI',
          src: 'url("../fonts/PTRootUI/PTRootUI-Regular.woff2") format("woff2"), url("../fonts/PTRootUI/PTRootUI-Regular.woff") format("woff")',
          fontDisplay: 'swap'
        }
      }, {
        '@font-face': {
          fontFamily: 'PT Root UI',
          src: 'url("../fonts/PTRootUI/PTRootUI-Medium.woff2") format("woff2"), url("../fonts/PTRootUI/PTRootUI-Medium.woff") format("woff")',
          fontDisplay: 'swap',
          fontWeight: 500
        }
      }, {
        '@font-face': {
          fontFamily: 'PT Root UI',
          src: 'url("../fonts/PTRootUI/PTRootUI-Bold.woff2") format("woff2"), url("../fonts/PTRootUI/PTRootUI-Bold.woff") format("woff")',
          fontDisplay: 'swap',
          fontWeight: 700
        }
      }]
    },
    base: {
      selection: {
        color: colors.white,
        bg: colors.brand
      },
      focus: {
        width: 2,
        color: colors.brand,
        offset: 2
      },
      body: {
        typography: 'body',
        color: colors.black,
        bg: colors.white
      }
    }
  },
  components: {
    Button: {
      base: {
        "default": {
          round: true,
          half: true
        }
      },
      themes: {
        primary: {
          "default": {
            color: colors.white,
            bg: colors.brand
          },
          hover: {
            bg: colors.brandHover
          },
          active: {
            border: 'transparent',
            shadow: shadows.inner
          },
          disabled: {
            bg: colors.grey70,
            color: colors.grey40
          }
        },
        secondary: {
          "default": {
            color: colors.brand,
            border: colors.brand,
            bg: colors.white
          },
          hover: {
            color: colors.brandHover,
            border: colors.brandHover
          },
          active: {
            bg: colors.grey90,
            border: 'transparent',
            shadow: shadows.inner
          },
          disabled: {
            border: colors.grey60,
            color: colors.grey40
          }
        }
      },
      sizes: {
        lg: {
          height: Object(scale["a" /* default */])(8),
          padding: Object(scale["a" /* default */])(3),
          iconSize: Object(scale["a" /* default */])(4),
          iconOffset: Object(scale["a" /* default */])(1),
          typography: 'buttonLg'
        },
        md: {
          height: Object(scale["a" /* default */])(6),
          padding: Object(scale["a" /* default */])(3),
          iconSize: Object(scale["a" /* default */])(3),
          iconOffset: Object(scale["a" /* default */])(1),
          typography: 'buttonMd'
        },
        sm: {
          height: Object(scale["a" /* default */])(5),
          padding: Object(scale["a" /* default */])(2),
          iconSize: Object(scale["a" /* default */])(2),
          iconOffset: Object(scale["a" /* default */])(1),
          typography: 'buttonSm'
        }
      }
    }
  }
});
/* harmony default export */ var utils_baseTheme = __webpack_exports__["a"] = (baseTheme);

try {
  // @ts-ignore
  baseTheme.displayName = "baseTheme"; // @ts-ignore

  baseTheme.__docgenInfo = {
    "description": "Default GDS theme.",
    "displayName": "baseTheme",
    "props": {}
  }; // @ts-ignore

  if (typeof STORYBOOK_REACT_CLASSES !== "undefined") // @ts-ignore
    STORYBOOK_REACT_CLASSES["src/utils/baseTheme.ts#baseTheme"] = {
      docgenInfo: baseTheme.__docgenInfo,
      name: "baseTheme",
      path: "src/utils/baseTheme.ts#baseTheme"
    };
} catch (__react_docgen_typescript_loader_error) {}

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LayoutTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutProps; });
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

var LayoutTheme = function LayoutTheme() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", null);
};
var LayoutProps = function LayoutProps() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", null);
};

try {
  // @ts-ignore
  LayoutTheme.displayName = "LayoutTheme"; // @ts-ignore

  LayoutTheme.__docgenInfo = {
    "description": "",
    "displayName": "LayoutTheme",
    "props": {
      "breakpoints": {
        "defaultValue": null,
        "description": "Project breakpoints.",
        "name": "breakpoints",
        "required": true,
        "type": {
          "name": "Record<Breakpoint, number>"
        }
      },
      "cols": {
        "defaultValue": null,
        "description": "Columns count.",
        "name": "cols",
        "required": true,
        "type": {
          "name": "Partial<Record<Breakpoint, number>>"
        }
      },
      "gap": {
        "defaultValue": null,
        "description": "Gaps between columns.",
        "name": "gap",
        "required": true,
        "type": {
          "name": "Partial<Record<Breakpoint, number>>"
        }
      },
      "padding": {
        "defaultValue": null,
        "description": "Container paddings.",
        "name": "padding",
        "required": true,
        "type": {
          "name": "Partial<Record<Breakpoint, number>>"
        }
      },
      "container": {
        "defaultValue": null,
        "description": "Container width. Pass `'none'` to disable fixed width.",
        "name": "container",
        "required": true,
        "type": {
          "name": "Partial<Record<Breakpoint, number | \"none\">>"
        }
      },
      "marginLeft": {
        "defaultValue": null,
        "description": "Container's left offset. Pass `0` to breakpoint with disabled fixed width.",
        "name": "marginLeft",
        "required": true,
        "type": {
          "name": "Partial<Record<Breakpoint, number | \"auto\">>"
        }
      },
      "marginRight": {
        "defaultValue": null,
        "description": "Container's right offset. Pass `0` to breakpoint with disabled fixed width.",
        "name": "marginRight",
        "required": true,
        "type": {
          "name": "Partial<Record<Breakpoint, number | \"auto\">>"
        }
      }
    }
  }; // @ts-ignore

  if (typeof STORYBOOK_REACT_CLASSES !== "undefined") // @ts-ignore
    STORYBOOK_REACT_CLASSES[".storybook/docgen/Layout.tsx#LayoutTheme"] = {
      docgenInfo: LayoutTheme.__docgenInfo,
      name: "LayoutTheme",
      path: ".storybook/docgen/Layout.tsx#LayoutTheme"
    };
} catch (__react_docgen_typescript_loader_error) {}

try {
  // @ts-ignore
  LayoutProps.displayName = "LayoutProps"; // @ts-ignore

  LayoutProps.__docgenInfo = {
    "description": "",
    "displayName": "LayoutProps",
    "props": {
      "children": {
        "defaultValue": null,
        "description": "Layout items list.",
        "name": "children",
        "required": false,
        "type": {
          "name": "ReactNode"
        }
      },
      "inline": {
        "defaultValue": null,
        "description": "Inline mode. Changes `display` type.",
        "name": "inline",
        "required": false,
        "type": {
          "name": "boolean | Partial<Record<Breakpoint, boolean>> | undefined"
        }
      },
      "rows": {
        "defaultValue": null,
        "description": "Rows. For grids only.",
        "name": "rows",
        "required": false,
        "type": {
          "name": "string | number | ReactText[] | Partial<Record<Breakpoint, string | number | ReactText[]>> | undefined"
        }
      },
      "areas": {
        "defaultValue": null,
        "description": "Areas. For grids only.",
        "name": "areas",
        "required": false,
        "type": {
          "name": "string | string[] | Partial<Record<Breakpoint, string | string[]>> | undefined"
        }
      },
      "justify": {
        "defaultValue": null,
        "description": "Main axis alignment.",
        "name": "justify",
        "required": false,
        "type": {
          "name": "\"start\" | \"end\" | \"center\" | \"stretch\" | \"space-around\" | \"space-between\" | \"space-evenly\" | Partial<Record<Breakpoint, \"start\" | \"end\" | \"center\" | \"stretch\" | \"space-around\" | \"space-between\" | \"space-evenly\">> | undefined"
        }
      },
      "align": {
        "defaultValue": null,
        "description": "Cross axis alignment.",
        "name": "align",
        "required": false,
        "type": {
          "name": "\"start\" | \"end\" | \"center\" | \"stretch\" | Partial<Record<Breakpoint, \"start\" | \"end\" | \"center\" | \"stretch\">> | undefined"
        }
      },
      "autoRows": {
        "defaultValue": null,
        "description": "Auto rows size. For grids only.",
        "name": "autoRows",
        "required": false,
        "type": {
          "name": "string | number | ReactText[] | Partial<Record<Breakpoint, string | number | ReactText[]>> | undefined"
        }
      },
      "autoCols": {
        "defaultValue": null,
        "description": "Auto cols size. For grids only.",
        "name": "autoCols",
        "required": false,
        "type": {
          "name": "string | number | ReactText[] | Partial<Record<Breakpoint, string | number | ReactText[]>> | undefined"
        }
      },
      "direction": {
        "defaultValue": null,
        "description": "Main axis direction.",
        "name": "direction",
        "required": false,
        "type": {
          "name": "\"row\" | \"column\" | Partial<Record<Breakpoint, \"row\" | \"column\">> | undefined"
        }
      },
      "dense": {
        "defaultValue": null,
        "description": "Dense mode. For grids only.",
        "name": "dense",
        "required": false,
        "type": {
          "name": "boolean | Partial<Record<Breakpoint, boolean>> | undefined"
        }
      },
      "reverse": {
        "defaultValue": null,
        "description": "Reverse directions. For flex only.",
        "name": "reverse",
        "required": false,
        "type": {
          "name": "boolean | Partial<Record<Breakpoint, boolean>> | undefined"
        }
      },
      "wrap": {
        "defaultValue": null,
        "description": "Multiline mode. For flex only.",
        "name": "wrap",
        "required": false,
        "type": {
          "name": "boolean | Partial<Record<Breakpoint, boolean>> | undefined"
        }
      },
      "css": {
        "defaultValue": null,
        "description": "Additional CSS.",
        "name": "css",
        "required": false,
        "type": {
          "name": "CSSObject | undefined"
        }
      },
      "type": {
        "defaultValue": null,
        "description": "Layout type. Some properties are available only for one or another type.",
        "name": "type",
        "required": false,
        "type": {
          "name": "\"grid\" | \"flex\" | Partial<Record<Breakpoint, \"grid\" | \"flex\">> | undefined"
        }
      },
      "cols": {
        "defaultValue": null,
        "description": "Columns settings.",
        "name": "cols",
        "required": false,
        "type": {
          "name": "string | number | ReactText[] | Partial<Record<Breakpoint, string | number | ReactText[]>> | undefined"
        }
      },
      "gap": {
        "defaultValue": null,
        "description": "Gaps settings.",
        "name": "gap",
        "required": false,
        "type": {
          "name": "string | number | [ReactText, ReactText] | Partial<Record<Breakpoint, string | number | [ReactText, ReactText]>> | undefined"
        }
      },
      "auto": {
        "defaultValue": null,
        "description": "Minimum column size in auto mode. Auto mode allows to create columns of equal size without media queries.",
        "name": "auto",
        "required": false,
        "type": {
          "name": "number | Partial<Record<Breakpoint, number>> | undefined"
        }
      }
    }
  }; // @ts-ignore

  if (typeof STORYBOOK_REACT_CLASSES !== "undefined") // @ts-ignore
    STORYBOOK_REACT_CLASSES[".storybook/docgen/Layout.tsx#LayoutProps"] = {
      docgenInfo: LayoutProps.__docgenInfo,
      name: "LayoutProps",
      path: ".storybook/docgen/Layout.tsx#LayoutProps"
    };
} catch (__react_docgen_typescript_loader_error) {}

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_useTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var _utils_baseTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);


/**
 * Custom hook returns used component and project themes based on custom theme exist check. Use it for all components defined in `ComponentsTheme`.
 */

var useComponentTheme = function useComponentTheme(name, __theme) {
  var componentTheme;
  var usedTheme;
  var userTheme = Object(_utils_useTheme__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])();

  if (userTheme.components && userTheme.components[name]) {
    usedTheme = userTheme;
    componentTheme = userTheme.components[name];
  } else {
    usedTheme = _utils_baseTheme__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"];
    componentTheme = _utils_baseTheme__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].components[name];
  }

  componentTheme = __theme || componentTheme;
  return {
    componentTheme: componentTheme,
    usedTheme: usedTheme
  };
};

/* harmony default export */ __webpack_exports__["a"] = (useComponentTheme);

try {
  // @ts-ignore
  useComponentTheme.displayName = "useComponentTheme"; // @ts-ignore

  useComponentTheme.__docgenInfo = {
    "description": "Custom hook returns used component and project themes based on custom theme exist check. Use it for all components defined in `ComponentsTheme`.",
    "displayName": "useComponentTheme",
    "props": {}
  }; // @ts-ignore

  if (typeof STORYBOOK_REACT_CLASSES !== "undefined") // @ts-ignore
    STORYBOOK_REACT_CLASSES["src/helpers/useComponentTheme.ts#useComponentTheme"] = {
      docgenInfo: useComponentTheme.__docgenInfo,
      name: "useComponentTheme",
      path: "src/helpers/useComponentTheme.ts#useComponentTheme"
    };
} catch (__react_docgen_typescript_loader_error) {}

/***/ }),

/***/ 238:
/***/ (function(module) {

module.exports = JSON.parse("{\"palettes\":{\"grey\":[\"#121314\",\"#3c3f42\",\"#666a6f\",\"#8a8f95\",\"#a8adb3\",\"#c0c4cb\",\"#d2d5dc\",\"#e0e3e8\",\"#eaecf0\",\"#f1f2f5\"],\"blue\":[\"#021540\",\"#042471\",\"#0835a1\",\"#1146cc\",\"#215bf0\",\"#6391ff\",\"#90b2ff\",\"#c2d6ff\",\"#d9e4ff\",\"#eff2fa\"],\"red\":[\"#470000\",\"#6f0101\",\"#960202\",\"#b80303\",\"#d40505\",\"#ea1414\",\"#f14646\",\"#f57979\",\"#f5aaaa\",\"#f2dada\"]},\"colors\":{\"black\":\"#000000\",\"grey0\":\"#121314\",\"grey20\":\"#666a6f\",\"grey40\":\"#a8adb3\",\"grey60\":\"#d6d8db\",\"grey70\":\"#e0e3e8\",\"grey90\":\"#f1f2f5\",\"white\":\"#ffffff\",\"fade\":\"rgba(0, 0, 0, 0.5)\",\"brand\":\"#215bf0\",\"brandHover\":\"#1146cc\",\"brandSecond\":\"#ea1414\",\"brandSecondHover\":\"#d40505\",\"error\":\"#f14646\",\"warning\":\"#f0b621\",\"success\":\"#4aa253\",\"tagHit\":\"#68c1dd\",\"tagSale\":\"#f369a3\",\"tagNew\":\"#b6d674\"},\"typography\":{\"breakpoints\":[1440,768],\"styles\":{\"buttonLg\":{\"desktop\":{\"fontFamily\":\"PT Root UI\",\"fontWeight\":700,\"fontSize\":\"1.5rem\",\"lineHeight\":1.2}},\"buttonMd\":{\"desktop\":{\"fontFamily\":\"PT Root UI\",\"fontWeight\":700,\"fontSize\":\"1rem\",\"lineHeight\":1.2,\"fontVariantNumeric\":\"tabular-nums\"}},\"buttonSm\":{\"desktop\":{\"fontFamily\":\"PT Root UI\",\"fontWeight\":400,\"fontSize\":\"0.875rem\",\"lineHeight\":1}},\"captionUppercase\":{\"desktop\":{\"fontFamily\":\"PT Root UI\",\"fontWeight\":400,\"fontSize\":\"0.75rem\",\"lineHeight\":1.4,\"letterSpacing\":\"0.05em\",\"textTransform\":\"uppercase\"}},\"caption\":{\"desktop\":{\"fontFamily\":\"PT Root UI\",\"fontWeight\":400,\"fontSize\":\"0.75rem\",\"lineHeight\":1.4,\"letterSpacing\":\"0.02em\"}},\"smallBold\":{\"desktop\":{\"fontFamily\":\"PT Root UI\",\"fontWeight\":700,\"fontSize\":\"0.875rem\",\"lineHeight\":1.4},\"mobile\":{\"fontFamily\":\"PT Root UI\",\"fontWeight\":700,\"fontSize\":\"0.75rem\",\"lineHeight\":1.4}},\"small\":{\"desktop\":{\"fontFamily\":\"PT Root UI\",\"fontWeight\":400,\"fontSize\":\"0.875rem\",\"lineHeight\":1.4},\"mobile\":{\"fontFamily\":\"PT Root UI\",\"fontWeight\":400,\"fontSize\":\"0.75rem\",\"lineHeight\":1.4}},\"bodyBold\":{\"desktop\":{\"fontFamily\":\"PT Root UI\",\"fontWeight\":700,\"fontSize\":\"1rem\",\"lineHeight\":1.4,\"fontVariantNumeric\":\"tabular-nums\"},\"mobile\":{\"fontFamily\":\"PT Root UI\",\"fontWeight\":700,\"fontSize\":\"0.875rem\",\"lineHeight\":1.4}},\"body\":{\"desktop\":{\"fontFamily\":\"PT Root UI\",\"fontWeight\":400,\"fontSize\":\"1rem\",\"lineHeight\":1.4},\"mobile\":{\"fontFamily\":\"PT Root UI\",\"fontWeight\":400,\"fontSize\":\"0.875rem\",\"lineHeight\":1.4}},\"subheading\":{\"desktop\":{\"fontFamily\":\"PT Root UI\",\"fontWeight\":500,\"fontSize\":\"1.25rem\",\"lineHeight\":1.5},\"mobile\":{\"fontFamily\":\"PT Root UI\",\"fontWeight\":500,\"fontSize\":\"1.125rem\",\"lineHeight\":1.5}},\"title\":{\"desktop\":{\"fontFamily\":\"PT Root UI\",\"fontWeight\":700,\"fontSize\":\"1.25rem\",\"lineHeight\":1.2},\"mobile\":{\"fontFamily\":\"PT Root UI\",\"fontWeight\":700,\"fontSize\":\"1.125rem\",\"lineHeight\":1.2}},\"headline\":{\"desktop\":{\"fontFamily\":\"PT Root UI\",\"fontWeight\":700,\"fontSize\":\"1.5rem\",\"lineHeight\":1.2},\"mobile\":{\"fontFamily\":\"PT Root UI\",\"fontWeight\":700,\"fontSize\":\"1.25rem\",\"lineHeight\":1.2}},\"h4\":{\"desktop\":{\"fontFamily\":\"PT Root UI\",\"fontWeight\":700,\"fontSize\":\"1.75rem\",\"lineHeight\":1.2},\"mobile\":{\"fontFamily\":\"PT Root UI\",\"fontWeight\":700,\"fontSize\":\"1.375rem\",\"lineHeight\":1.2}},\"h3\":{\"desktop\":{\"fontFamily\":\"PT Root UI\",\"fontWeight\":700,\"fontSize\":\"2rem\",\"lineHeight\":1.2},\"mobile\":{\"fontFamily\":\"PT Root UI\",\"fontWeight\":700,\"fontSize\":\"1.5rem\",\"lineHeight\":1.2}},\"h2\":{\"desktop\":{\"fontFamily\":\"PT Root UI\",\"fontWeight\":700,\"fontSize\":\"3rem\",\"lineHeight\":1.2},\"mobile\":{\"fontFamily\":\"PT Root UI\",\"fontWeight\":700,\"fontSize\":\"2.125rem\",\"lineHeight\":1.2}},\"h1\":{\"desktop\":{\"fontFamily\":\"PT Root UI\",\"fontWeight\":700,\"fontSize\":\"4.25rem\",\"lineHeight\":1.2,\"letterSpacing\":\"-0.02em\"},\"mobile\":{\"fontFamily\":\"PT Root UI\",\"fontWeight\":700,\"fontSize\":\"3rem\",\"lineHeight\":1.2,\"letterSpacing\":\"-0.02em\"}}}},\"layout\":{\"cols\":{\"xxxl\":12,\"md\":6,\"xs\":4,\"xxs\":2},\"container\":{\"xxxl\":1440,\"xl\":\"none\"},\"marginLeft\":{\"xxxl\":\"auto\",\"xl\":0},\"marginRight\":{\"xxxl\":\"auto\",\"xl\":0},\"breakpoints\":{\"xxxl\":1920,\"xxl\":1600,\"xl\":1440,\"lg\":1280,\"md\":960,\"sm\":768,\"xs\":568,\"xxs\":360,\"xxxs\":320},\"gap\":{\"xxxl\":24,\"sm\":16},\"padding\":{\"xl\":60,\"lg\":40,\"md\":36,\"sm\":32,\"xs\":24,\"xxxs\":16}},\"shadows\":{\"small\":\"1px 1px 3px rgba(18, 19, 20, 0.05), 1px 3px 10px rgba(18, 19, 20, 0.05)\",\"big\":\"4px 10px 35px rgba(18, 19, 20, 0.08)\",\"inner\":\"inset 3px 3px 10px rgba(18, 19, 20, 0.1), inset 2px 2px 5px rgba(18, 19, 20, 0.1), inset 2px 2px 3px rgba(18, 19, 20, 0.08)\"}}");

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_scale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);





function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}



/**
 * Helper component for visually show content blocks.
 */

var Placeholder = function Placeholder(_ref) {
  var children = _ref.children,
      bg = _ref.bg,
      props = _objectWithoutProperties(_ref, ["children", "bg"]);

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", _extends({
    css: function css(theme) {
      return {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        padding: Object(_utils_scale__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(2),
        backgroundColor: bg || theme.colors.grey90
      };
    }
  }, props), children);
};

/* harmony default export */ __webpack_exports__["a"] = (Placeholder);

try {
  // @ts-ignore
  Placeholder.displayName = "Placeholder"; // @ts-ignore

  Placeholder.__docgenInfo = {
    "description": "Helper component for visually show content blocks.",
    "displayName": "Placeholder",
    "props": {
      "children": {
        "defaultValue": null,
        "description": "Placeholder content.",
        "name": "children",
        "required": true,
        "type": {
          "name": "ReactNode"
        }
      },
      "bg": {
        "defaultValue": null,
        "description": "Background color.",
        "name": "bg",
        "required": true,
        "type": {
          "name": "string"
        }
      }
    }
  }; // @ts-ignore

  if (typeof STORYBOOK_REACT_CLASSES !== "undefined") // @ts-ignore
    STORYBOOK_REACT_CLASSES["src/helpers/Placeholder.tsx#Placeholder"] = {
      docgenInfo: Placeholder.__docgenInfo,
      name: "Placeholder",
      path: "src/helpers/Placeholder.tsx#Placeholder"
    };
} catch (__react_docgen_typescript_loader_error) {}

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(34);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(37);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(76);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(77);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(179);
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_ends_with_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(322);
/* harmony import */ var core_js_modules_es_string_ends_with_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_ends_with_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(41);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(3);
/* harmony import */ var _utils_typography__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(123);
/* harmony import */ var _utils_scale__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(4);
/* harmony import */ var _utils_baseTheme__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(21);
/* harmony import */ var _helpers_useComponentTheme__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(237);
/* harmony import */ var _components_VisuallyHidden__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(126);
















function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}









/**
 * Button component.
 *
 * Renders <button /> or <a /> (pass `href`) or any custom element (pass `as`).
 *
 * Define themes and sizes in theme object (`components.Button`) and use them as `theme` / `size` prop values.
 */

var Button = function Button(_ref, ref) {
  var _usedTheme$typography, _usedTheme$typography2, _iconCSS;

  var children = _ref.children,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? 'primary' : _ref$theme,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'md' : _ref$size,
      _ref$block = _ref.block,
      block = _ref$block === void 0 ? false : _ref$block,
      Icon = _ref.Icon,
      _ref$iconAfter = _ref.iconAfter,
      iconAfter = _ref$iconAfter === void 0 ? false : _ref$iconAfter,
      _ref$hidden = _ref.hidden,
      hidden = _ref$hidden === void 0 ? false : _ref$hidden,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'button' : _ref$type,
      as = _ref.as,
      _ref$external = _ref.external,
      external = _ref$external === void 0 ? false : _ref$external,
      __theme = _ref.__theme,
      css = _ref.css,
      props = _objectWithoutProperties(_ref, ["children", "theme", "size", "block", "Icon", "iconAfter", "hidden", "type", "as", "external", "__theme", "css"]);
  /* Get theme objects. */


  var _useComponentTheme = Object(_helpers_useComponentTheme__WEBPACK_IMPORTED_MODULE_20__[/* default */ "a"])('Button', __theme),
      componentTheme = _useComponentTheme.componentTheme,
      usedTheme = _useComponentTheme.usedTheme;

  var buttonTheme = componentTheme;
  if (!buttonTheme.themes[theme]) console.warn("Specify \"".concat(theme, "\" theme. Default values are used instead"));
  if (!buttonTheme.sizes[size]) console.warn("Specify \"".concat(size, "\" size. Default values are used instead"));
  /* Get theme default state properties and merge them with default values. */

  var themeProperties = getThemeProperties(buttonTheme, theme, 'default');
  var sizeProperties = buttonTheme.sizes[size];
  var themeDefaults = {
    borderWidth: themeProperties.border ? 1 : 0,
    borderStyle: 'solid',
    time: 200,
    easing: 'ease',
    color: _utils_baseTheme__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"].colors.white,
    bg: _utils_baseTheme__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"].colors.black
  };

  var tp = _objectSpread(_objectSpread({}, themeDefaults), themeProperties);

  var sizeDefaults = {
    height: Object(_utils_scale__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"])(6),
    padding: Object(_utils_scale__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"])(3),
    iconSize: Object(_utils_scale__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"])(3),
    iconOffset: Object(_utils_scale__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"])(1)
  };

  var sp = _objectSpread(_objectSpread({}, sizeDefaults), sizeProperties);
  /* Define CSS rules from theme properties for default state. */


  var typographyName = sp.typography;
  var typographyCSS = Object(_utils_typography__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"])(typographyName, usedTheme);
  var pv = getVerticalPaddings(typographyName ? (_usedTheme$typography = usedTheme.typography) === null || _usedTheme$typography === void 0 ? void 0 : (_usedTheme$typography2 = _usedTheme$typography.styles[typographyName]) === null || _usedTheme$typography2 === void 0 ? void 0 : _usedTheme$typography2.desktop : undefined, sp, tp, !!Icon);
  var borderRadius = !tp.half ? tp.borderRadius : sp.height / 2;
  var padding = "".concat(pv, "px ").concat(sp.padding, "px");
  var transition = getTransition(tp.time, tp.easing);

  var defaultCSS = _objectSpread(_objectSpread(_objectSpread({
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: tp.borderWidth,
    borderStyle: tp.borderStyle
  }, typographyCSS), {}, {
    borderRadius: borderRadius,
    padding: padding,
    transition: transition
  }, getStateCSS(tp)), sp.css);
  /* Define CSS rules from theme properties for other states. */


  var themeHoverProperties = getThemeProperties(buttonTheme, theme, 'hover');
  var themeActiveProperties = getThemeProperties(buttonTheme, theme, 'active');
  var themeDisabledProperties = getThemeProperties(buttonTheme, theme, 'disabled');
  var themeFocusProperties = getThemeProperties(buttonTheme, theme, 'focus');
  var statesCSS = {
    ':hover': _objectSpread(_objectSpread({}, getStateCSS(themeHoverProperties)), tp.timeIn && {
      transition: getTransition(tp.timeIn, tp.easing)
    }),
    ':active': getStateCSS(themeActiveProperties),
    ':disabled': _objectSpread(_objectSpread({}, getStateCSS(themeDisabledProperties)), {}, {
      cursor: 'not-allowed'
    }),
    ':focus': getStateCSS(themeFocusProperties)
  };
  /* Build CSS object combined with rules from props. */

  var blockStyles = {
    display: 'flex',
    width: '100%'
  };
  var hiddenRoundStyles = {
    borderRadius: '50%',
    padding: "".concat(pv, "px ").concat((sp.height - sp.iconSize - tp.borderWidth) / 2, "px")
  };
  var styles = [defaultCSS, statesCSS, block && blockStyles, hidden && tp.round && hiddenRoundStyles, css];
  /* Define CSS rules for icon. */

  var marginRule = "margin".concat(!iconAfter ? 'Right' : 'Left');
  var iconCSS = (_iconCSS = {}, _defineProperty(_iconCSS, marginRule, !hidden ? sp.iconOffset : undefined), _defineProperty(_iconCSS, "width", sp.iconSize), _defineProperty(_iconCSS, "height", sp.iconSize), _iconCSS);
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_16__["jsx"])(as || 'button', _objectSpread({
    ref: ref,
    type: !as || as === 'button' ? type : null,
    target: external ? '_blank' : null,
    rel: external ? 'nofollow noopener' : null,
    css: styles
  }, props), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_16__["jsx"])(react__WEBPACK_IMPORTED_MODULE_15___default.a.Fragment, null, Icon && !iconAfter && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_16__["jsx"])(Icon, {
    css: iconCSS
  }), hidden ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_components_VisuallyHidden__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"], null, children) : children, Icon && iconAfter && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_16__["jsx"])(Icon, {
    css: iconCSS
  })));
};

var getStateCSS = function getStateCSS(_ref2) {
  var color = _ref2.color,
      bg = _ref2.bg,
      border = _ref2.border,
      shadow = _ref2.shadow,
      css = _ref2.css;
  return _objectSpread({
    color: color,
    fill: color,
    background: bg,
    borderColor: border,
    boxShadow: shadow
  }, css);
};

var getThemeProperties = function getThemeProperties(buttonTheme, theme, state) {
  var _buttonTheme$base;

  var themeProperties = buttonTheme.themes[theme][state];
  var baseProperties = (_buttonTheme$base = buttonTheme.base) === null || _buttonTheme$base === void 0 ? void 0 : _buttonTheme$base[state];
  return _objectSpread(_objectSpread({}, baseProperties), themeProperties);
};

var getVerticalPaddings = function getVerticalPaddings(typographyProperties, sizeProperties, themeProperties, isIcon) {
  var cssRule = sizeProperties.css;
  var fontSize = 16;
  var lineHeight = 1.4;

  if (typographyProperties) {
    fontSize = parseFloat(typographyProperties.fontSize) * 16;
    lineHeight = typographyProperties.lineHeight;
  } else if (cssRule) {
    if (cssRule.fontSize) {
      if (typeof cssRule.fontSize === 'number') {
        fontSize = cssRule.fontSize;
      } else if (typeof cssRule.fontSize === 'string') {
        if (cssRule.fontSize.endsWith('rem')) {
          fontSize = parseFloat(cssRule.fontSize) * 16;
        } else {
          fontSize = parseFloat(cssRule.fontSize);
        }
      }
    }

    if (cssRule.lineHeight && typeof cssRule.lineHeight === 'number') lineHeight = cssRule.lineHeight;
  }

  var textHeight = Math.floor(fontSize * lineHeight);
  var iconSize = sizeProperties.iconSize;
  var height = sizeProperties.height;
  var borderWidth = themeProperties.borderWidth;
  var maxHeight = Math.max(textHeight, isIcon ? iconSize : 0);
  var verticalPaddings = (height - maxHeight - borderWidth * 2) / 2;
  return verticalPaddings;
};

var getTransition = function getTransition(time, easing) {
  return ['color', 'fill', 'background-color', 'border-color', 'box-shadow'].map(function (name) {
    return "".concat(name, " ").concat(easing, " ").concat(time, "ms");
  }).join(', ');
};

/* harmony default export */ __webpack_exports__["a"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.forwardRef(Button));

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_typography__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(123);
/* harmony import */ var _utils_baseTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);
/** Импорт CSSObject нужен для tsc. */


/**
 * `typography` helper with baseTheme. For use with inner components styling (such autokits).
 */

var typography = function typography(name) {
  return Object(_utils_typography__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(name, _utils_baseTheme__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);
};

/* harmony default export */ __webpack_exports__["a"] = (typography);

try {
  // @ts-ignore
  typography.displayName = "typography"; // @ts-ignore

  typography.__docgenInfo = {
    "description": "`typography` helper with baseTheme. For use with inner components styling (such autokits).",
    "displayName": "typography",
    "props": {}
  }; // @ts-ignore

  if (typeof STORYBOOK_REACT_CLASSES !== "undefined") // @ts-ignore
    STORYBOOK_REACT_CLASSES["src/helpers/typography.ts#typography"] = {
      docgenInfo: typography.__docgenInfo,
      name: "typography",
      path: "src/helpers/typography.ts#typography"
    };
} catch (__react_docgen_typescript_loader_error) {}

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(7);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(16);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__(31);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.every.js
var es_array_every = __webpack_require__(147);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(44);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__(120);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__(40);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__(33);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__(11);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.is-array.js
var es_array_is_array = __webpack_require__(22);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(24);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(19);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__(73);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(17);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.array.sort.js
var es_array_sort = __webpack_require__(288);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.date.to-string.js
var es_date_to_string = __webpack_require__(29);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(12);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.define-properties.js
var es_object_define_properties = __webpack_require__(34);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.define-property.js
var es_object_define_property = __webpack_require__(37);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.entries.js
var es_object_entries = __webpack_require__(67);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.from-entries.js
var es_object_from_entries = __webpack_require__(507);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(76);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__(77);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(6);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(15);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.object.values.js
var es_object_values = __webpack_require__(119);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(30);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(25);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(41);

// EXTERNAL MODULE: ./.yarn/unplugged/core-js-npm-3.8.1-2d84e9c57f/node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(28);

// EXTERNAL MODULE: ./src/utils/useTheme.ts
var useTheme = __webpack_require__(52);

// EXTERNAL MODULE: ./src/utils/baseTheme.ts + 1 modules
var baseTheme = __webpack_require__(21);

// CONCATENATED MODULE: ./src/helpers/isObject.ts









function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}
/**
 * Strict check on object type.
 */


var isObject = function isObject(item) {
  return _typeof(item) === 'object' && !Array.isArray(item) && item !== null;
};
/* harmony default export */ var helpers_isObject = (isObject);

try {
  // @ts-ignore
  isObject.displayName = "isObject"; // @ts-ignore

  isObject.__docgenInfo = {
    "description": "Strict check on object type.",
    "displayName": "isObject",
    "props": {}
  }; // @ts-ignore

  if (typeof STORYBOOK_REACT_CLASSES !== "undefined") // @ts-ignore
    STORYBOOK_REACT_CLASSES["src/helpers/isObject.ts#isObject"] = {
      docgenInfo: isObject.__docgenInfo,
      name: "isObject",
      path: "src/helpers/isObject.ts#isObject"
    };
} catch (__react_docgen_typescript_loader_error) {}
// EXTERNAL MODULE: ./src/helpers/constants.ts
var constants = __webpack_require__(78);

// CONCATENATED MODULE: ./src/helpers/useCSSProperty.ts































function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}





/**
 * Calculate CSS Object from component props with `AllowMedia` type (user can pass object with breakpoints through prop). CSS property can be calculated based on multiple props.
 */

var useCSSProperty_useCSSProperty = function useCSSProperty(_ref) {
  var name = _ref.name,
      props = _ref.props,
      condition = _ref.condition,
      transform = _ref.transform;

  var _useTheme = Object(useTheme["a" /* default */])(),
      layout = _useTheme.layout;

  var layoutTheme = layout || baseTheme["a" /* default */].layout;
  var breakpoints = layoutTheme.breakpoints;
  if (condition !== undefined && !condition) return;
  var propsValues = Object.values(props);
  var isUndefined = propsValues.every(function (value) {
    return value === undefined;
  });
  if (isUndefined) return;
  var mediaProp = propsValues.find(function (value) {
    return helpers_isObject(value);
  });
  if (!mediaProp) return setValue(name, props, transform);
  return Object.keys(mediaProp).sort(function (a, b) {
    return constants["a" /* BREAKPOINTS_NAMES */].indexOf(a) - constants["a" /* BREAKPOINTS_NAMES */].indexOf(b);
  }).reduce(function (acc, bp) {
    var nameIndex = constants["a" /* BREAKPOINTS_NAMES */].indexOf(bp);
    var nextBp = nameIndex !== -1 && constants["a" /* BREAKPOINTS_NAMES */][nameIndex - 1];
    var breakpointProps = Object.fromEntries(Object.entries(props).map(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
          key = _ref3[0],
          value = _ref3[1];

      return [key, !helpers_isObject(value) ? value : value[bp]];
    }));
    var rule = setValue(name, breakpointProps, transform);
    return _objectSpread(_objectSpread({}, acc), nextBp ? _defineProperty({}, "@media (max-width: ".concat(breakpoints[nextBp] - 1, "px)"), rule) : rule);
  }, {});
};

var setValue = function setValue(name, props, transform) {
  return _defineProperty({}, name, transform ? transform(props) : Object.values(props)[0]);
};

/* harmony default export */ var helpers_useCSSProperty = __webpack_exports__["a"] = (useCSSProperty_useCSSProperty);

try {
  // @ts-ignore
  useCSSProperty_useCSSProperty.displayName = "useCSSProperty"; // @ts-ignore

  useCSSProperty_useCSSProperty.__docgenInfo = {
    "description": "Calculate CSS Object from component props with `AllowMedia` type (user can pass object with breakpoints through prop). CSS property can be calculated based on multiple props.",
    "displayName": "useCSSProperty",
    "props": {
      "name": {
        "defaultValue": null,
        "description": "CSS property name.",
        "name": "name",
        "required": true,
        "type": {
          "name": "string"
        }
      },
      "props": {
        "defaultValue": null,
        "description": "Component prop or array of props.",
        "name": "props",
        "required": true,
        "type": {
          "name": "T"
        }
      },
      "condition": {
        "defaultValue": null,
        "description": "Add property only if condition equals `true`.",
        "name": "condition",
        "required": false,
        "type": {
          "name": "boolean | undefined"
        }
      },
      "transform": {
        "defaultValue": null,
        "description": "Transform function. Applies before property value assignment.",
        "name": "transform",
        "required": false,
        "type": {
          "name": "((props: Record<keyof T, any>) => string | number) | undefined"
        }
      }
    }
  }; // @ts-ignore

  if (typeof STORYBOOK_REACT_CLASSES !== "undefined") // @ts-ignore
    STORYBOOK_REACT_CLASSES["src/helpers/useCSSProperty.ts#useCSSProperty"] = {
      docgenInfo: useCSSProperty_useCSSProperty.__docgenInfo,
      name: "useCSSProperty",
      path: "src/helpers/useCSSProperty.ts#useCSSProperty"
    };
} catch (__react_docgen_typescript_loader_error) {}

/***/ }),

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_math_trunc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1124);
/* harmony import */ var core_js_modules_es_math_trunc_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_trunc_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(148);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_number_is_integer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(211);
/* harmony import */ var core_js_modules_es_number_is_integer_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_is_integer_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78);





/**
 * Helper for scaling system usage. Pass `multiplier` to use major scale: values multiple 8. Pass `multiplier` and `isMinor` flag to use minor scale: values less than 40 multiple 4.
 *
 * You can define your own step with `customStep` argument but it must be done once per project. For example with step equals 10 major scale allows to use values multiple 10 and minor scale allows to use values less than 40 multiple 5. Recommended way to do this is define wrapper with your step as third argument:
 *
 * ```
 * import { scale as scaleHelper } from '@greensight/gds';
 * import { MAJOR_STEP } from '@scripts/constants';
 *
 * const scale = (multiplier: number, isMinor?: boolean) => scaleHelper(multiplier, isMinor, MAJOR_STEP);
 *
 * export default scale;
 * ```
 */

var scale = function scale(multiplier, isMinor, customStep) {
  var majorStep = customStep || _helpers_constants__WEBPACK_IMPORTED_MODULE_4__[/* MAJOR_STEP */ "c"];
  var truncatedMultiplier = Math.trunc(multiplier);

  if (!Number.isInteger(multiplier)) {
    console.warn("Spacings scale accepts only integers. Your value ".concat(multiplier, " was truncated to ").concat(truncatedMultiplier, "."));
  }

  var value;

  if (!isMinor) {
    value = majorStep * truncatedMultiplier;
  } else {
    var minorStep = majorStep / 2;
    value = minorStep * truncatedMultiplier;

    if (value > _helpers_constants__WEBPACK_IMPORTED_MODULE_4__[/* MINOR_MAX */ "d"]) {
      var roundedValue = Math.trunc(value / majorStep) * majorStep;
      console.warn("Minor scale is not defined on sizes bigger than ".concat(_helpers_constants__WEBPACK_IMPORTED_MODULE_4__[/* MINOR_MAX */ "d"], "px. Your value ").concat(value, " was rounded to ").concat(roundedValue, "."));
      value = roundedValue;
    }
  }

  return value;
};

/* harmony default export */ __webpack_exports__["a"] = (scale);

try {
  // @ts-ignore
  scale.displayName = "scale"; // @ts-ignore

  scale.__docgenInfo = {
    "description": "Helper for scaling system usage. Pass `multiplier` to use major scale: values multiple 8. Pass `multiplier` and `isMinor` flag to use minor scale: values less than 40 multiple 4.\n\nYou can define your own step with `customStep` argument but it must be done once per project. For example with step equals 10 major scale allows to use values multiple 10 and minor scale allows to use values less than 40 multiple 5. Recommended way to do this is define wrapper with your step as third argument:\n\n```\nimport { scale as scaleHelper } from '@greensight/gds';\nimport { MAJOR_STEP } from '@scripts/constants';\n\nconst scale = (multiplier: number, isMinor?: boolean) => scaleHelper(multiplier, isMinor, MAJOR_STEP);\n\nexport default scale;\n```",
    "displayName": "scale",
    "props": {}
  }; // @ts-ignore

  if (typeof STORYBOOK_REACT_CLASSES !== "undefined") // @ts-ignore
    STORYBOOK_REACT_CLASSES["src/utils/scale.ts#scale"] = {
      docgenInfo: scale.__docgenInfo,
      name: "scale",
      path: "src/utils/scale.ts#scale"
    };
} catch (__react_docgen_typescript_loader_error) {}

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__page", function() { return __page; });
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
/* harmony import */ var _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__);




function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsxRuntime classic */

/* @jsx mdx */



var layoutProps = {};
var MDXLayout = "wrapper";

function MDXContent(_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__["Meta"], {
    title: "Intro / Welcome",
    mdxType: "Meta"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h1", {
    "id": "gds"
  }, "GDS"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("img", _extends({
    parentName: "p"
  }, {
    "src": "images/logo.svg",
    "alt": "Логотип GDS"
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "p"
  }, "GDS"), " \u2013 \u044D\u0442\u043E \u043C\u0443\u043B\u044C\u0442\u0438\u0431\u0440\u0435\u043D\u0434\u043E\u0432\u0430\u044F \u0434\u0438\u0437\u0430\u0439\u043D-\u0441\u0438\u0441\u0442\u0435\u043C\u0430, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u0430\u044F \u0432 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", _extends({
    parentName: "p"
  }, {
    "href": "https://greensight.pro/",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer"
  }), "Greensight"), " \u0434\u043B\u044F \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0441\u0432\u043E\u0438\u0445 \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u0438\u0445 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0421\u0438\u0441\u0442\u0435\u043C\u0430 \u043F\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u0430 \u043D\u0430 \u0441\u0432\u044F\u0437\u043A\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "React"), " \u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Emotion"), ", \u0441\u043E \u0441\u0442\u043E\u0440\u043E\u043D\u044B \u0434\u0438\u0437\u0430\u0439\u043D\u0430 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", _extends({
    parentName: "p"
  }, {
    "href": "https://www.figma.com/file/Udf9B3n8wEoykSGFhhrU0J/Greensight-DS",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer"
  }), "Figma"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\uD83D\uDEA7 \u0412 \u0442\u0435\u043A\u0443\u0449\u0438\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u0432 \u0440\u0435\u0436\u0438\u043C\u0435 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0439 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "p"
  }, "\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438:")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\uD83D\uDCDA \u041D\u0430\u0431\u043E\u0440 \u0441\u0442\u0430\u0439\u043B\u0433\u0430\u0439\u0434\u043E\u0432, \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u044E\u0449\u0438\u0445 \u043F\u0440\u0438\u043D\u0446\u0438\u043F\u044B \u0440\u0430\u0431\u043E\u0442\u044B \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u043E\u0432 \u0438 \u0444\u0440\u043E\u043D\u0442\u0435\u043D\u0434-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u043E\u0432 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\uD83E\uDDF1 \u041A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u044F \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0445 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\uD83D\uDD25 \u041C\u0435\u0445\u0430\u043D\u0438\u0437\u043C \u0442\u0435\u043C\u0438\u0437\u0430\u0446\u0438\u0438, \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u044E\u0449\u0438\u0439 \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u0438\u0437\u043C\u0435\u043D\u044F\u0442\u044C \u0432\u043D\u0435\u0448\u043D\u0438\u0439 \u0432\u0438\u0434 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432 \u043F\u043E\u0434 \u0440\u0430\u0437\u043D\u044B\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u044B"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\uD83E\uDD16 \u041D\u0430\u0431\u043E\u0440 \u0430\u0432\u0442\u043E\u043A\u0438\u0442\u043E\u0432 \u0434\u043B\u044F \u0432\u044B\u0432\u043E\u0434\u0430 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0438 \u043E\u0431\u044A\u0435\u043A\u0442\u0430 \u0442\u0435\u043C\u044B"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u2728 \u0421\u0438\u0441\u0442\u0435\u043C\u0430 \u0434\u0438\u0437\u0430\u0439\u043D-\u0442\u043E\u043A\u0435\u043D\u043E\u0432, \u043F\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u0430\u044F \u043D\u0430 Figma API")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "p"
  }, "\u0421\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438:")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "li"
  }, "Design"), " \u2013 \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0441\u043A\u0438\u0435 \u0441\u0442\u0430\u0439\u043B\u0433\u0430\u0439\u0434\u044B. \u0421\u043E\u0434\u0435\u0440\u0436\u0430\u0442 \u043E\u0431\u0449\u0438\u0435 \u043F\u0440\u0438\u043D\u0446\u0438\u043F\u044B \u0438 \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438 \u043F\u043E \u0440\u0430\u0431\u043E\u0442\u0435 \u0432 Figma"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "li"
  }, "Dev"), " \u2013 \u0434\u0435\u0432\u0435\u043B\u043E\u043F\u0435\u0440\u0441\u043A\u0438\u0435 \u0441\u0442\u0430\u0439\u043B\u0433\u0430\u0439\u0434\u044B. \u0421\u043E\u0434\u0435\u0440\u0436\u0430\u0442 \u043E\u0431\u0449\u0438\u0435 \u043F\u0440\u0438\u043D\u0446\u0438\u043F\u044B, \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438 \u043F\u043E \u0440\u0430\u0431\u043E\u0442\u0435 \u0441 GDS \u0438 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u044B \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432 \u0442\u0435\u043C"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "li"
  }, "Components"), " \u2013 \u0441\u043F\u0438\u0441\u043E\u043A \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "li"
  }, "Autokits"), " \u2013 \u0441\u043F\u0438\u0441\u043E\u043A \u0430\u0432\u0442\u043E\u043A\u0438\u0442\u043E\u0432")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "Emojis \u0432 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0430\u0445 \u0441\u0438\u043C\u0432\u043E\u043B\u0438\u0437\u0438\u0440\u0443\u044E\u0442 \u043D\u0430\u043B\u0438\u0447\u0438\u0435 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0451\u043D\u043D\u043E\u0433\u043E \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u0430."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "p"
  }, "\u0421\u043F\u0438\u0441\u043E\u043A emojis:")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u2728 \u2013 \u0434\u0438\u0437\u0430\u0439\u043D-\u0442\u043E\u043A\u0435\u043D\u044B"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\uD83E\uDDF1 \u2013 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u2699\uFE0F \u2013 \u0443\u0442\u0438\u043B\u0438\u0442\u044B"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\uD83E\uDD16 \u2013 \u0430\u0432\u0442\u043E\u043A\u0438\u0442\u044B")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0438 \u043E\u0434\u043D\u043E\u0437\u043D\u0430\u0447\u043D\u043E \u0434\u0438\u043A\u0442\u0443\u044E\u0442 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 \u0434\u043B\u044F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "p"
  }, "Colors \u2728\uD83E\uDD16"), ":"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u041F\u043E\u043B\u0435 \u043E\u0431\u044A\u0435\u043A\u0442\u0430 \u0442\u0435\u043C\u044B: ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "colors")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u0424\u0440\u0435\u0439\u043C Figma: ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "Colors")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u0418\u043C\u044F \u0442\u043E\u043A\u0435\u043D\u0430: ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "colors")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ul"
  }, "\u0410\u0432\u0442\u043E\u043A\u0438\u0442: ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "li"
  }, "ColorsAutokit"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", null, "\u0418\u0441\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435\u043C \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0443\u0442\u0438\u043B\u0438\u0442\u044B \u0438 \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B, \u043D\u043E \u043E\u0431 \u044D\u0442\u043E\u043C \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E."));
}

MDXContent.displayName = "MDXContent";
;
MDXContent.isMDXComponent = true;
var __page = function __page() {
  throw new Error("Docs-only story");
};
__page.parameters = {
  docsOnly: true
};
var componentMeta = {
  title: 'Intro / Welcome',
  includeStories: ["__page"]
};
var mdxStoryNameToKey = {};
componentMeta.parameters = componentMeta.parameters || {};
componentMeta.parameters.docs = Object.assign({}, componentMeta.parameters.docs || {}, {
  page: function page() {
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__["AddContext"], {
      mdxStoryNameToKey: mdxStoryNameToKey,
      mdxComponentMeta: componentMeta
    }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(MDXContent, null));
  }
});
/* harmony default export */ __webpack_exports__["default"] = (componentMeta);

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var emotion_theming__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(185);

/**
 * Custom hook to get your theme object in React components from ThemeProvider.
 */

var useTheme = function useTheme() {
  var theme = Object(emotion_theming__WEBPACK_IMPORTED_MODULE_0__["useTheme"])();
  return theme;
};

/* harmony default export */ __webpack_exports__["a"] = (useTheme);

try {
  // @ts-ignore
  useTheme.displayName = "useTheme"; // @ts-ignore

  useTheme.__docgenInfo = {
    "description": "Custom hook to get your theme object in React components from ThemeProvider.",
    "displayName": "useTheme",
    "props": {}
  }; // @ts-ignore

  if (typeof STORYBOOK_REACT_CLASSES !== "undefined") // @ts-ignore
    STORYBOOK_REACT_CLASSES["src/utils/useTheme.ts#useTheme"] = {
      docgenInfo: useTheme.__docgenInfo,
      name: "useTheme",
      path: "src/utils/useTheme.ts#useTheme"
    };
} catch (__react_docgen_typescript_loader_error) {}

/***/ }),

/***/ 524:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(525);
__webpack_require__(687);
__webpack_require__(688);
__webpack_require__(840);
__webpack_require__(1054);
__webpack_require__(1086);
__webpack_require__(1096);
__webpack_require__(1108);
__webpack_require__(1110);
__webpack_require__(1113);
__webpack_require__(1115);
__webpack_require__(1120);
__webpack_require__(1122);
module.exports = __webpack_require__(1128);


/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _src_utils_scale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);




var paddingDecorator = function paddingDecorator(storyFn) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    css:
    /*#__PURE__*/

    /*#__PURE__*/
    Object(_emotion_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      padding: Object(_src_utils_scale__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(2)
    },  true ? "" : undefined, ";label:css;" + ( true ? "" : undefined))
  }, storyFn());
};

/* harmony default export */ __webpack_exports__["a"] = (paddingDecorator);

/***/ }),

/***/ 596:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(135);
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_react__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BREAKPOINTS_NAMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FONT_STACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MAJOR_STEP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MINOR_MAX; });
var BREAKPOINTS_NAMES = ['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs', 'xxxs'];
var FONT_STACK = '-apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
var MAJOR_STEP = 8;
var MINOR_MAX = 40;

/***/ })

},[[524,1,2]]]);