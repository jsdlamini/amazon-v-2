/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/checkout",{

/***/ "./src/pages/checkout.js":
/*!*******************************!*\
  !*** ./src/pages/checkout.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_CheckoutProduct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CheckoutProduct */ \"./src/components/CheckoutProduct.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header.js\");\n/* harmony import */ var _slices_basketSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../slices/basketSlice */ \"./src/slices/basketSlice.js\");\n/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-currency-formatter */ \"./node_modules/react-currency-formatter/dist/react-currency-formatter.umd.js\");\n/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_currency_formatter__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/vusizwe/Desktop/REACT/FIVE_DAY_CHALLENGE2/Amazon-starter-template-nextjs/src/pages/checkout.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Checkout() {\n  _s();\n\n  var _this = this;\n\n  var items = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_slices_basketSlice__WEBPACK_IMPORTED_MODULE_5__.selectItems);\n  var session = useSess;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"bg-gray-100\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n      className: \"lg:flex max-w-screen-2xl mx-auto\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex-grow  m-5 shadow-sm\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n          src: \"https://links.papareact.com/ikj\",\n          width: 1020,\n          height: 250,\n          objectFit: \"contain\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"flex flex-col p-5 space-y-10 bg-white\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            className: \" text-3xl border-b pb-4\",\n            children: items.length === 0 ? \"Your Amazon Basket is Empty\" : \"Your Shopping Basket\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 21,\n            columnNumber: 25\n          }, this), items.map(function (item, i) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CheckoutProduct__WEBPACK_IMPORTED_MODULE_3__.default, {\n              id: item.id,\n              title: item.title,\n              price: item.price,\n              description: item.description,\n              category: item.category,\n              image: item.image,\n              hasPrime: item.hasPrime\n            }, i, false, {\n              fileName: _jsxFileName,\n              lineNumber: 27,\n              columnNumber: 29\n            }, _this);\n          })]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: items.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n            className: \"whitespace-nowrap\",\n            children: [\" Subtotal (\", items.length, \" items):\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n              className: \"font-bold\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_currency_formatter__WEBPACK_IMPORTED_MODULE_6___default()), {\n                quantity: price,\n                currency: \"GBP\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 50,\n                columnNumber: 37\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 49,\n              columnNumber: 29\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 29\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            children: !session ? 'SignIn to Checkout' : 'Proceed to checkout'\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 29\n          }, this)]\n        }, void 0, true)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Checkout, \"tY2Gvv5VcC5OmHFNMSHq17tjIN8=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector];\n});\n\n_c = Checkout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Checkout);\n\nvar _c;\n\n$RefreshReg$(_c, \"Checkout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NoZWNrb3V0LmpzPzUzMTAiXSwibmFtZXMiOlsiQ2hlY2tvdXQiLCJpdGVtcyIsInVzZVNlbGVjdG9yIiwic2VsZWN0SXRlbXMiLCJzZXNzaW9uIiwidXNlU2VzcyIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJpIiwiaWQiLCJ0aXRsZSIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJjYXRlZ29yeSIsImltYWdlIiwiaGFzUHJpbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxRQUFULEdBQW9CO0FBQUE7O0FBQUE7O0FBQ2hCLE1BQU1DLEtBQUssR0FBR0Msd0RBQVcsQ0FBQ0MsNERBQUQsQ0FBekI7QUFDQSxNQUFNQyxPQUFPLEdBQUdDLE9BQWhCO0FBQ0Esc0JBQ0k7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBLDRCQUNJLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQU0sZUFBUyxFQUFDLGtDQUFoQjtBQUFBLDhCQUVJO0FBQUssaUJBQVMsRUFBQywwQkFBZjtBQUFBLGdDQUNJLDhEQUFDLG1EQUFEO0FBQU8sYUFBRyxFQUFDLGlDQUFYO0FBQ0ksZUFBSyxFQUFFLElBRFg7QUFDaUIsZ0JBQU0sRUFBRSxHQUR6QjtBQUM4QixtQkFBUyxFQUFDO0FBRHhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFJSTtBQUFLLG1CQUFTLEVBQUMsdUNBQWY7QUFBQSxrQ0FDSTtBQUFJLHFCQUFTLEVBQUMseUJBQWQ7QUFBQSxzQkFDS0osS0FBSyxDQUFDSyxNQUFOLEtBQWlCLENBQWpCLEdBQXFCLDZCQUFyQixHQUFxRDtBQUQxRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLEVBTUtMLEtBQUssQ0FBQ00sR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBT0MsQ0FBUDtBQUFBLGdDQUNQLDhEQUFDLGdFQUFEO0FBRUksZ0JBQUUsRUFBRUQsSUFBSSxDQUFDRSxFQUZiO0FBR0ksbUJBQUssRUFBRUYsSUFBSSxDQUFDRyxLQUhoQjtBQUlJLG1CQUFLLEVBQUVILElBQUksQ0FBQ0ksS0FKaEI7QUFLSSx5QkFBVyxFQUFFSixJQUFJLENBQUNLLFdBTHRCO0FBTUksc0JBQVEsRUFBRUwsSUFBSSxDQUFDTSxRQU5uQjtBQU9JLG1CQUFLLEVBQUVOLElBQUksQ0FBQ08sS0FQaEI7QUFRSSxzQkFBUSxFQUFFUCxJQUFJLENBQUNRO0FBUm5CLGVBQ1NQLENBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFETztBQUFBLFdBQVYsQ0FOTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUE4Qkk7QUFBQSxrQkFFS1IsS0FBSyxDQUFDSyxNQUFOLEdBQWUsQ0FBZixpQkFDRztBQUFBLGtDQUNJO0FBQUkscUJBQVMsRUFBQyxtQkFBZDtBQUFBLHNDQUE4Q0wsS0FBSyxDQUFDSyxNQUFwRCwyQkFDQTtBQUFNLHVCQUFTLEVBQUMsV0FBaEI7QUFBQSxxQ0FDUSw4REFBQyxpRUFBRDtBQUFVLHdCQUFRLEVBQUVNLEtBQXBCO0FBQTJCLHdCQUFRLEVBQUM7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURSO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBTUk7QUFBQSxzQkFFSyxDQUFDUixPQUFELEdBQVcsb0JBQVgsR0FBa0M7QUFGdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFOSjtBQUFBO0FBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTlCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTBESDs7R0E3RFFKLFE7VUFDU0Usb0Q7OztLQURURixRO0FBK0RULCtEQUFlQSxRQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2NoZWNrb3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcbmltcG9ydCBDaGVja291dFByb2R1Y3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2hlY2tvdXRQcm9kdWN0XCJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCJcbmltcG9ydCB7IHNlbGVjdEl0ZW1zIH0gZnJvbSBcIi4uL3NsaWNlcy9iYXNrZXRTbGljZVwiXG5pbXBvcnQgQ3VycmVuY3kgZnJvbSBcInJlYWN0LWN1cnJlbmN5LWZvcm1hdHRlclwiXG5cbmZ1bmN0aW9uIENoZWNrb3V0KCkge1xuICAgIGNvbnN0IGl0ZW1zID0gdXNlU2VsZWN0b3Ioc2VsZWN0SXRlbXMpXG4gICAgY29uc3Qgc2Vzc2lvbiA9IHVzZVNlc3NcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmctZ3JheS0xMDAnPlxuICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwibGc6ZmxleCBtYXgtdy1zY3JlZW4tMnhsIG14LWF1dG9cIj5cbiAgICAgICAgICAgICAgICB7LyogTGVmdCAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZ3JvdyAgbS01IHNoYWRvdy1zbVwiPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiaHR0cHM6Ly9saW5rcy5wYXBhcmVhY3QuY29tL2lralwiXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTAyMH0gaGVpZ2h0PXsyNTB9IG9iamVjdEZpdD1cImNvbnRhaW5cIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBwLTUgc3BhY2UteS0xMCBiZy13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIiB0ZXh0LTN4bCBib3JkZXItYiBwYi00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1zLmxlbmd0aCA9PT0gMCA/IFwiWW91ciBBbWF6b24gQmFza2V0IGlzIEVtcHR5XCIgOiBcIllvdXIgU2hvcHBpbmcgQmFza2V0XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tvdXRQcm9kdWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZT17aXRlbS5wcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2l0ZW0uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5PXtpdGVtLmNhdGVnb3J5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZT17aXRlbS5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzUHJpbWU9e2l0ZW0uaGFzUHJpbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7LyogUmlnaHQgKi99XG4gICAgICAgICAgICAgICAgPGRpdj5cblxuICAgICAgICAgICAgICAgICAgICB7aXRlbXMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ3aGl0ZXNwYWNlLW5vd3JhcFwiPiBTdWJ0b3RhbCAoe2l0ZW1zLmxlbmd0aH0gaXRlbXMpOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZm9udC1ib2xkJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDdXJyZW5jeSBxdWFudGl0eT17cHJpY2V9IGN1cnJlbmN5PVwiR0JQXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IXNlc3Npb24gPyAnU2lnbkluIHRvIENoZWNrb3V0JyA6ICdQcm9jZWVkIHRvIGNoZWNrb3V0J31cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG5cblxuICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L21haW4+XG4gICAgICAgICAgICB7LyogPGgxPlRoaXMgaXMgdGhlIGNoZWNrb3V0IHBhZ2U8L2gxPiAqL31cblxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENoZWNrb3V0XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/checkout.js\n");

/***/ })

});