"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("_app-pages-browser_src_app_dashboard_patient_PatientOutlet_jsx",{

/***/ "(app-pages-browser)/./src/app/dashboard/doctor/DoctorProfileComponent.jsx":
/*!*************************************************************!*\
  !*** ./src/app/dashboard/doctor/DoctorProfileComponent.jsx ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/styles */ \"(app-pages-browser)/./node_modules/@mui/material/styles/useTheme.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst DoctorProfileComponent = (param)=>{\n    let { name, speciality, availabilty } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            sx: {\n                width: \"10rem\",\n                height: \"100%\",\n                justifyContent: \"flex-start\",\n                padding: \"2%\",\n                gap: \"1rem\",\n                flexDirection: \"column\",\n                marginTop: \"2rem\",\n                alignItems: \"flex-start\",\n                backgroundColor: theme.palette.background.paper,\n                boxShadow: \"0px 0px 2px rgba(0,0,0,0.25)\"\n            },\n            onClick: ()=>{\n                router.push(\"/dashboard/pat\");\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    sx: {\n                        display: \"flex\",\n                        flexDirection: \"row\",\n                        gap: \"0.5rem\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            children: \"Name:\"\n                        }, void 0, false, {\n                            fileName: \"/home/geediegram/Downloads/hackaton-web/src/app/dashboard/doctor/DoctorProfileComponent.jsx\",\n                            lineNumber: 32,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            children: name\n                        }, void 0, false, {\n                            fileName: \"/home/geediegram/Downloads/hackaton-web/src/app/dashboard/doctor/DoctorProfileComponent.jsx\",\n                            lineNumber: 35,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/geediegram/Downloads/hackaton-web/src/app/dashboard/doctor/DoctorProfileComponent.jsx\",\n                    lineNumber: 27,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    sx: {\n                        display: \"flex\",\n                        flexDirection: \"row\",\n                        gap: \"0.5rem\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            children: \"Speciality:\"\n                        }, void 0, false, {\n                            fileName: \"/home/geediegram/Downloads/hackaton-web/src/app/dashboard/doctor/DoctorProfileComponent.jsx\",\n                            lineNumber: 44,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            children: speciality\n                        }, void 0, false, {\n                            fileName: \"/home/geediegram/Downloads/hackaton-web/src/app/dashboard/doctor/DoctorProfileComponent.jsx\",\n                            lineNumber: 47,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/geediegram/Downloads/hackaton-web/src/app/dashboard/doctor/DoctorProfileComponent.jsx\",\n                    lineNumber: 39,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    sx: {\n                        display: \"flex\",\n                        flexDirection: \"row\",\n                        gap: \"0.5rem\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            children: \"Avaliabilty:\"\n                        }, void 0, false, {\n                            fileName: \"/home/geediegram/Downloads/hackaton-web/src/app/dashboard/doctor/DoctorProfileComponent.jsx\",\n                            lineNumber: 56,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            children: availabilty\n                        }, void 0, false, {\n                            fileName: \"/home/geediegram/Downloads/hackaton-web/src/app/dashboard/doctor/DoctorProfileComponent.jsx\",\n                            lineNumber: 59,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/geediegram/Downloads/hackaton-web/src/app/dashboard/doctor/DoctorProfileComponent.jsx\",\n                    lineNumber: 51,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/geediegram/Downloads/hackaton-web/src/app/dashboard/doctor/DoctorProfileComponent.jsx\",\n            lineNumber: 11,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_s(DoctorProfileComponent, \"OJXcjMed2GBguV8dlh+MZ12xH+U=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = DoctorProfileComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DoctorProfileComponent);\nvar _c;\n$RefreshReg$(_c, \"DoctorProfileComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGFzaGJvYXJkL2RvY3Rvci9Eb2N0b3JQcm9maWxlQ29tcG9uZW50LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXlCO0FBQ3NCO0FBQ0M7QUFDSjtBQUU1QyxNQUFNSyx5QkFBeUI7UUFBQyxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsV0FBVyxFQUFFOztJQUM3RCxNQUFNQyxTQUFTTCwwREFBU0E7SUFDeEIsTUFBTU0sUUFBUVAsZ0VBQVFBO0lBQ3RCLHFCQUNJO2tCQUNJLDRFQUFDRiwwRkFBR0E7WUFBQ1UsSUFBSTtnQkFDTEMsT0FBTztnQkFDUEMsUUFBUTtnQkFDUkMsZ0JBQWdCO2dCQUNoQkMsU0FBUztnQkFDVEMsS0FBSztnQkFDTEMsZUFBZTtnQkFDZkMsV0FBVztnQkFDWEMsWUFBWTtnQkFDWkMsaUJBQWlCVixNQUFNVyxPQUFPLENBQUNDLFVBQVUsQ0FBQ0MsS0FBSztnQkFBRUMsV0FBVztZQUNoRTtZQUNJQyxTQUFTO2dCQUNMaEIsT0FBT2lCLElBQUksQ0FBQztZQUNoQjs7OEJBR0EsOERBQUN6QiwwRkFBR0E7b0JBQUNVLElBQUk7d0JBQ0xnQixTQUFTO3dCQUNUVixlQUFlO3dCQUNmRCxLQUFLO29CQUNUOztzQ0FDSSw4REFBQ2QsMEZBQVVBO3NDQUFDOzs7Ozs7c0NBR1osOERBQUNBLDBGQUFVQTtzQ0FDTkk7Ozs7Ozs7Ozs7Ozs4QkFHVCw4REFBQ0wsMEZBQUdBO29CQUFDVSxJQUFJO3dCQUNMZ0IsU0FBUzt3QkFDVFYsZUFBZTt3QkFDZkQsS0FBSztvQkFDVDs7c0NBQ0ksOERBQUNkLDBGQUFVQTtzQ0FBQzs7Ozs7O3NDQUdaLDhEQUFDQSwwRkFBVUE7c0NBQ05LOzs7Ozs7Ozs7Ozs7OEJBR1QsOERBQUNOLDBGQUFHQTtvQkFBQ1UsSUFBSTt3QkFDTGdCLFNBQVM7d0JBQ1RWLGVBQWU7d0JBQ2ZELEtBQUs7b0JBQ1Q7O3NDQUNJLDhEQUFDZCwwRkFBVUE7c0NBQUM7Ozs7OztzQ0FHWiw4REFBQ0EsMEZBQVVBO3NDQUNOTTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU16QjtHQTVETUg7O1FBQ2FELHNEQUFTQTtRQUNWRCw0REFBUUE7OztLQUZwQkU7QUE4RE4sK0RBQWVBLHNCQUFzQkEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2Rhc2hib2FyZC9kb2N0b3IvRG9jdG9yUHJvZmlsZUNvbXBvbmVudC5qc3g/NTMxNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCb3gsIFR5cG9ncmFwaHkgfSBmcm9tICdAbXVpL21hdGVyaWFsJ1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuXG5jb25zdCBEb2N0b3JQcm9maWxlQ29tcG9uZW50ID0gKHsgbmFtZSwgc3BlY2lhbGl0eSwgYXZhaWxhYmlsdHkgfSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxCb3ggc3g9e3tcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwcmVtJyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcyJScsXG4gICAgICAgICAgICAgICAgZ2FwOiAnMXJlbScsXG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAnMnJlbScsXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLCBib3hTaGFkb3c6ICcwcHggMHB4IDJweCByZ2JhKDAsMCwwLDAuMjUpJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnL2Rhc2hib2FyZC9wYXQnKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuXG4gICAgICAgICAgICAgICAgPEJveCBzeD17e1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgICAgICAgICAgICAgICAgICBnYXA6ICcwLjVyZW0nXG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgTmFtZTpcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPEJveCBzeD17e1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgICAgICAgICAgICAgICAgICBnYXA6ICcwLjVyZW0nXG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgU3BlY2lhbGl0eTpcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtzcGVjaWFsaXR5fVxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPEJveCBzeD17e1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgICAgICAgICAgICAgICAgICBnYXA6ICcwLjVyZW0nXG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgQXZhbGlhYmlsdHk6XG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YXZhaWxhYmlsdHl9XG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvQm94ID5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBEb2N0b3JQcm9maWxlQ29tcG9uZW50Il0sIm5hbWVzIjpbIlJlYWN0IiwiQm94IiwiVHlwb2dyYXBoeSIsInVzZVRoZW1lIiwidXNlUm91dGVyIiwiRG9jdG9yUHJvZmlsZUNvbXBvbmVudCIsIm5hbWUiLCJzcGVjaWFsaXR5IiwiYXZhaWxhYmlsdHkiLCJyb3V0ZXIiLCJ0aGVtZSIsInN4Iiwid2lkdGgiLCJoZWlnaHQiLCJqdXN0aWZ5Q29udGVudCIsInBhZGRpbmciLCJnYXAiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luVG9wIiwiYWxpZ25JdGVtcyIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJiYWNrZ3JvdW5kIiwicGFwZXIiLCJib3hTaGFkb3ciLCJvbkNsaWNrIiwicHVzaCIsImRpc3BsYXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/dashboard/doctor/DoctorProfileComponent.jsx\n"));

/***/ })

});