/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/ProductFeed.js":
/*!***************************************!*\
  !*** ./src/components/ProductFeed.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Product */ \"./src/components/Product.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/home/vusizwe/Desktop/REACT/FIVE_DAY_CHALLENGE2/Amazon-starter-template-nextjs/src/components/ProductFeed.js\";\n\n\n\nfunction ProductFeed(_ref) {\n  var _this = this;\n\n  var products = _ref.products;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md: -mt-52 mx-auto\",\n    children: [products.slice(0, 4).map(function (_ref2) {\n      var id = _ref2.id,\n          title = _ref2.title,\n          price = _ref2.price,\n          description = _ref2.description,\n          category = _ref2.category,\n          image = _ref2.image;\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product__WEBPACK_IMPORTED_MODULE_2__.default, {\n        title: title,\n        price: price,\n        description: description,\n        category: category,\n        image: image\n      }, id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 17\n      }, _this);\n    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n      className: \"md:col-span-full\",\n      src: \"https://links.papareact.com/dyz\",\n      alt: \"\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"md:grid\",\n      children: [\"products.slice(4,5).map((\", (id, title, price, description, category, image), \") => (\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product__WEBPACK_IMPORTED_MODULE_2__.default, {\n        title: title,\n        price: price,\n        description: description,\n        category: category,\n        image: image\n      }, id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 9\n  }, this);\n}\n\n_c = ProductFeed;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductFeed);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductFeed\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdEZlZWQuanM/MDU1YiJdLCJuYW1lcyI6WyJQcm9kdWN0RmVlZCIsInByb2R1Y3RzIiwic2xpY2UiLCJtYXAiLCJpZCIsInRpdGxlIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwiaW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsV0FBVCxPQUFtQztBQUFBOztBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTtBQUMvQixzQkFDSTtBQUFLLGFBQVMsRUFBQywwRkFBZjtBQUFBLGVBRU9BLFFBQVEsQ0FBQ0MsS0FBVCxDQUFlLENBQWYsRUFBaUIsQ0FBakIsRUFBb0JDLEdBQXBCLENBQXdCO0FBQUEsVUFBR0MsRUFBSCxTQUFHQSxFQUFIO0FBQUEsVUFBT0MsS0FBUCxTQUFPQSxLQUFQO0FBQUEsVUFBY0MsS0FBZCxTQUFjQSxLQUFkO0FBQUEsVUFBcUJDLFdBQXJCLFNBQXFCQSxXQUFyQjtBQUFBLFVBQWtDQyxRQUFsQyxTQUFrQ0EsUUFBbEM7QUFBQSxVQUE0Q0MsS0FBNUMsU0FBNENBLEtBQTVDO0FBQUEsMEJBQ3ZCLDhEQUFDLDZDQUFEO0FBQ0ksYUFBSyxFQUFFSixLQURYO0FBRUksYUFBSyxFQUFFQyxLQUZYO0FBR0ksbUJBQVcsRUFBRUMsV0FIakI7QUFJSSxnQkFBUSxFQUFFQyxRQUpkO0FBS0ksYUFBSyxFQUFFQztBQUxYLFNBQWNMLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUR1QjtBQUFBLEtBQXhCLENBRlAsZUFhSTtBQUFLLGVBQVMsRUFBQyxrQkFBZjtBQUFrQyxTQUFHLEVBQUMsaUNBQXRDO0FBQXdFLFNBQUcsRUFBQztBQUE1RTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBYkosZUFjSTtBQUFLLGVBQVMsRUFBQyxTQUFmO0FBQUEsK0NBQzhCQSxFQUFFLEVBQUVDLEtBQUYsRUFBU0MsS0FBVCxFQUFnQkMsV0FBaEIsRUFBNkJDLFFBQTdCLEVBQXVDQyxLQUR2RSwwQkFFSSw4REFBQyw2Q0FBRDtBQUNJLGFBQUssRUFBRUosS0FEWDtBQUVJLGFBQUssRUFBRUMsS0FGWDtBQUdJLG1CQUFXLEVBQUVDLFdBSGpCO0FBSUksZ0JBQVEsRUFBRUMsUUFKZDtBQUtJLGFBQUssRUFBRUM7QUFMWCxTQUFjTCxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFkSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTZCSDs7S0E5QlFKLFc7QUFnQ1QsK0RBQWVBLFdBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0RmVlZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9kdWN0IGZyb20gJy4vUHJvZHVjdCdcblxuZnVuY3Rpb24gUHJvZHVjdEZlZWQoeyBwcm9kdWN0cyB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtZmxvdy1yb3ctZGVuc2UgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgeGw6Z3JpZC1jb2xzLTQgbWQ6IC1tdC01MiBteC1hdXRvXCI+XG4gICAgIFxuICAgICAgICAgICAgeyAgcHJvZHVjdHMuc2xpY2UoMCw0KS5tYXAoKHsgaWQsIHRpdGxlLCBwcmljZSwgZGVzY3JpcHRpb24sIGNhdGVnb3J5LCBpbWFnZSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPFByb2R1Y3Qga2V5PXtpZH1cbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICBwcmljZT17cHJpY2V9XG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk9e2NhdGVnb3J5fVxuICAgICAgICAgICAgICAgICAgICBpbWFnZT17aW1hZ2V9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdtZDpjb2wtc3Bhbi1mdWxsJyBzcmM9J2h0dHBzOi8vbGlua3MucGFwYXJlYWN0LmNvbS9keXonIGFsdD0nJyAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21kOmdyaWQnPlxuICAgICAgICAgICAgICAgIHByb2R1Y3RzLnNsaWNlKDQsNSkubWFwKCh7aWQsIHRpdGxlLCBwcmljZSwgZGVzY3JpcHRpb24sIGNhdGVnb3J5LCBpbWFnZX0pID0+IChcbiAgICAgICAgICAgICAgICA8UHJvZHVjdCBrZXk9e2lkfVxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIHByaWNlPXtwcmljZX1cbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeT17Y2F0ZWdvcnl9XG4gICAgICAgICAgICAgICAgICAgIGltYWdlPXtpbWFnZX1cbiAgICAgICAgICAgICAgICAvPlxuXG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RGZWVkXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ProductFeed.js\n");

/***/ })

});