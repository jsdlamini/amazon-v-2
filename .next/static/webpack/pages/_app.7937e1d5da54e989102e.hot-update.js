/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/slices/basketSlice.js":
/*!***********************************!*\
  !*** ./src/slices/basketSlice.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"basketSlice\": function() { return /* binding */ basketSlice; },\n/* harmony export */   \"addToBasket\": function() { return /* binding */ addToBasket; },\n/* harmony export */   \"removeFromBasket\": function() { return /* binding */ removeFromBasket; },\n/* harmony export */   \"selectItems\": function() { return /* binding */ selectItems; }\n/* harmony export */ });\n/* harmony import */ var _home_vusizwe_Desktop_REACT_FIVE_DAY_CHALLENGE2_Amazon_starter_template_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar initialState = {\n  items: []\n};\nvar basketSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n  name: \"basket\",\n  initialState: initialState,\n  reducers: {\n    //Actions\n    addToBasket: function addToBasket(state, action) {\n      state.items = [].concat((0,_home_vusizwe_Desktop_REACT_FIVE_DAY_CHALLENGE2_Amazon_starter_template_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(state.items), [action.payload]);\n    },\n    removeFromBasket: function removeFromBasket(state, action) {\n      var index = state.items.findIndex(function (basketItem) {\n        return basketItem.id === action.payload.id;\n      });\n\n      var newBasket = (0,_home_vusizwe_Desktop_REACT_FIVE_DAY_CHALLENGE2_Amazon_starter_template_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(stae);\n    }\n  }\n});\nvar _basketSlice$actions = basketSlice.actions,\n    addToBasket = _basketSlice$actions.addToBasket,\n    removeFromBasket = _basketSlice$actions.removeFromBasket; // Selectors - This is how we pull information from the Global store slice\n\n\nvar selectItems = function selectItems(state) {\n  return state.basket.items;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (basketSlice.reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NsaWNlcy9iYXNrZXRTbGljZS5qcz80NWM5Il0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsIml0ZW1zIiwiYmFza2V0U2xpY2UiLCJjcmVhdGVTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImFkZFRvQmFza2V0Iiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwicmVtb3ZlRnJvbUJhc2tldCIsImluZGV4IiwiZmluZEluZGV4IiwiYmFza2V0SXRlbSIsImlkIiwibmV3QmFza2V0Iiwic3RhZSIsImFjdGlvbnMiLCJzZWxlY3RJdGVtcyIsImJhc2tldCIsInJlZHVjZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxZQUFZLEdBQUc7QUFDbkJDLE9BQUssRUFBRTtBQURZLENBQXJCO0FBSU8sSUFBTUMsV0FBVyxHQUFHQyw2REFBVyxDQUFDO0FBQ3JDQyxNQUFJLEVBQUUsUUFEK0I7QUFFckNKLGNBQVksRUFBWkEsWUFGcUM7QUFHckNLLFVBQVEsRUFBRTtBQUNSO0FBQ0FDLGVBQVcsRUFBRSxxQkFBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQzlCRCxXQUFLLENBQUNOLEtBQU4sZ05BQWtCTSxLQUFLLENBQUNOLEtBQXhCLElBQStCTyxNQUFNLENBQUNDLE9BQXRDO0FBQ0QsS0FKTztBQUtSQyxvQkFBZ0IsRUFBRSwwQkFBQ0gsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ25DLFVBQU1HLEtBQUssR0FBR0osS0FBSyxDQUFDTixLQUFOLENBQVlXLFNBQVosQ0FBc0IsVUFBQUMsVUFBVTtBQUFBLGVBQUlBLFVBQVUsQ0FBQ0MsRUFBWCxLQUFrQk4sTUFBTSxDQUFDQyxPQUFQLENBQWVLLEVBQXJDO0FBQUEsT0FBaEMsQ0FBZDs7QUFDQSxVQUFJQyxTQUFTLEdBQUcsbU1BQUlDLElBQVAsQ0FBYjtBQUdEO0FBVk87QUFIMkIsQ0FBRCxDQUEvQjsyQkFpQjBDZCxXQUFXLENBQUNlLE87SUFBOUNYLFcsd0JBQUFBLFc7SUFBYUksZ0Isd0JBQUFBLGdCLEVBRTVCOzs7QUFDTyxJQUFNUSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDWCxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDWSxNQUFOLENBQWFsQixLQUF4QjtBQUFBLENBQXBCO0FBRVAsK0RBQWVDLFdBQVcsQ0FBQ2tCLE9BQTNCIiwiZmlsZSI6Ii4vc3JjL3NsaWNlcy9iYXNrZXRTbGljZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBpdGVtczogW10sXG59O1xuXG5leHBvcnQgY29uc3QgYmFza2V0U2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6IFwiYmFza2V0XCIsXG4gIGluaXRpYWxTdGF0ZSxcbiAgcmVkdWNlcnM6IHtcbiAgICAvL0FjdGlvbnNcbiAgICBhZGRUb0Jhc2tldDogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHN0YXRlLml0ZW1zID0gWy4uLnN0YXRlLml0ZW1zLCBhY3Rpb24ucGF5bG9hZF0gXG4gICAgfSxcbiAgICByZW1vdmVGcm9tQmFza2V0OiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSBzdGF0ZS5pdGVtcy5maW5kSW5kZXgoYmFza2V0SXRlbSA9PiBiYXNrZXRJdGVtLmlkID09PSBhY3Rpb24ucGF5bG9hZC5pZCAgICApXG4gICAgICBsZXQgbmV3QmFza2V0ID0gWy4uLnN0YWVdXG4gICAgICBcblxuICAgIH0sXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IHsgYWRkVG9CYXNrZXQsIHJlbW92ZUZyb21CYXNrZXQgfSA9IGJhc2tldFNsaWNlLmFjdGlvbnM7XG5cbi8vIFNlbGVjdG9ycyAtIFRoaXMgaXMgaG93IHdlIHB1bGwgaW5mb3JtYXRpb24gZnJvbSB0aGUgR2xvYmFsIHN0b3JlIHNsaWNlXG5leHBvcnQgY29uc3Qgc2VsZWN0SXRlbXMgPSAoc3RhdGUpID0+IHN0YXRlLmJhc2tldC5pdGVtcztcblxuZXhwb3J0IGRlZmF1bHQgYmFza2V0U2xpY2UucmVkdWNlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/slices/basketSlice.js\n");

/***/ })

});