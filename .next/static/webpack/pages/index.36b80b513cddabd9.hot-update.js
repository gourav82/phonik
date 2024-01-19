"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./component/layouts/Allcategory.jsx":
/*!*******************************************!*\
  !*** ./component/layouts/Allcategory.jsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var _services_Product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/Product */ \"./services/Product.js\");\n/* harmony import */ var _helper_BaseUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helper/BaseUrl */ \"./helper/BaseUrl.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Allcategory = ()=>{\n    _s();\n    const [category, setCategory] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        categoryApi();\n    }, []);\n    const categoryApi = ()=>{\n        (0,_services_Product__WEBPACK_IMPORTED_MODULE_4__.allCategoryAPI)().then((res)=>{\n            setCategory(res);\n        });\n    };\n    var settings = {\n        arrows: true,\n        infinite: true,\n        speed: 500,\n        slidesToShow: 6,\n        slidesToScroll: 1,\n        responsive: [\n            {\n                breakpoint: 1024,\n                settings: {\n                    slidesToShow: 3,\n                    slidesToScroll: 3,\n                    infinite: true,\n                    arrows: true\n                }\n            },\n            {\n                breakpoint: 600,\n                settings: {\n                    slidesToShow: 2,\n                    slidesToScroll: 3,\n                    initialSlide: 2,\n                    arrows: false\n                }\n            },\n            {\n                breakpoint: 480,\n                settings: {\n                    slidesToShow: 2,\n                    slidesToScroll: 1,\n                    arrows: false\n                }\n            }\n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container--responsive font--center mt--50 mb--50\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"color--error font--bold fs--35 font--center mt--30\",\n                children: \"All Brand\"\n            }, void 0, false, {\n                fileName: \"D:\\\\phonik\\\\component\\\\layouts\\\\Allcategory.jsx\",\n                lineNumber: 59,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                ...settings,\n                children: AllBrand.map((items, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"category  mb--100\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: items.img,\n                                alt: items.name,\n                                width: 180,\n                                height: 180,\n                                className: \"mb--15 mt--20\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\phonik\\\\component\\\\layouts\\\\Allcategory.jsx\",\n                                lineNumber: 64,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"fs--15 font--bold pt--10\",\n                                children: items.name\n                            }, void 0, false, {\n                                fileName: \"D:\\\\phonik\\\\component\\\\layouts\\\\Allcategory.jsx\",\n                                lineNumber: 65,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, \"cat-\".concat(index), true, {\n                        fileName: \"D:\\\\phonik\\\\component\\\\layouts\\\\Allcategory.jsx\",\n                        lineNumber: 63,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\phonik\\\\component\\\\layouts\\\\Allcategory.jsx\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\phonik\\\\component\\\\layouts\\\\Allcategory.jsx\",\n        lineNumber: 58,\n        columnNumber: 8\n    }, undefined);\n};\n_s(Allcategory, \"/n6LQ+4wCVwcdnG+BsMq3y8YJII=\");\n_c = Allcategory;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Allcategory);\nconst AllBrand = [\n    {\n        img: \"/assets/image/brand1.jpg\",\n        alt: \"spice heaven dish\",\n        catName: \"Biryani\"\n    },\n    {\n        img: \"/assets/image/brand2.jpg\",\n        alt: \"spice heaven dish\",\n        catName: \"Biryani\"\n    },\n    {\n        img: \"/assets/image/brand1.jpg\",\n        alt: \"spice heaven dish\",\n        catName: \"Biryani\"\n    },\n    {\n        img: \"/assets/image/brand2.jpg\",\n        alt: \"spice heaven dish\",\n        catName: \"Biryani\"\n    },\n    {\n        img: \"/assets/image/brand1.jpg\",\n        alt: \"spice heaven dish\",\n        catName: \"brand1\"\n    },\n    {\n        img: \"/assets/image/brand2.jpg\",\n        alt: \"spice heaven dish\",\n        catName: \"brand1\"\n    },\n    {\n        img: \"/assets/image/brand1.jpg\",\n        alt: \"spice heaven dish\",\n        catName: \"brand1\"\n    },\n    {\n        img: \"/assets/image/brand2.jpg\",\n        alt: \"spice heaven dish\",\n        catName: \"brand1\"\n    },\n    {\n        img: \"/assets/image/brand1.jpg\",\n        alt: \"spice heaven dish\",\n        catName: \"brand1\"\n    },\n    {\n        img: \"/assets/image/brand2.jpg\",\n        alt: \"spice heaven dish\",\n        catName: \"brand1\"\n    }\n];\nvar _c;\n$RefreshReg$(_c, \"Allcategory\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvbGF5b3V0cy9BbGxjYXRlZ29yeS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ21CO0FBQ2xCO0FBQ3dCO0FBQ0w7QUFFbkQsTUFBTU8sY0FBYzs7SUFDcEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdOLCtDQUFRQTtJQUd4Q0QsZ0RBQVNBLENBQUM7UUFDTlE7SUFDSixHQUFFLEVBQUU7SUFFSixNQUFNQSxjQUFhO1FBQ2ZMLGlFQUFjQSxHQUFHTSxJQUFJLENBQUMsQ0FBQ0M7WUFDbkJILFlBQVlHO1FBQ2hCO0lBQ0o7SUFFSSxJQUFJQyxXQUFXO1FBQ1hDLFFBQVE7UUFDUkMsVUFBVTtRQUNWQyxPQUFPO1FBQ1BDLGNBQWM7UUFDZEMsZ0JBQWdCO1FBQ2hCQyxZQUFZO1lBQ1I7Z0JBQ0VDLFlBQVk7Z0JBQ1pQLFVBQVU7b0JBQ1JJLGNBQWM7b0JBQ2RDLGdCQUFnQjtvQkFDaEJILFVBQVU7b0JBQ1ZELFFBQVE7Z0JBRVY7WUFDRjtZQUNBO2dCQUNFTSxZQUFZO2dCQUNaUCxVQUFVO29CQUNSSSxjQUFjO29CQUNkQyxnQkFBZ0I7b0JBQ2hCRyxjQUFjO29CQUNkUCxRQUFRO2dCQUNWO1lBQ0Y7WUFDQTtnQkFDRU0sWUFBWTtnQkFDWlAsVUFBVTtvQkFDUkksY0FBYztvQkFDZEMsZ0JBQWdCO29CQUNoQkosUUFBUTtnQkFDVjtZQUNGO1NBQ0Q7SUFDTDtJQUNKLHFCQUNLLDhEQUFDUTtRQUFJQyxXQUFVOzswQkFDbEIsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUFxRDs7Ozs7OzBCQUMzRCw4REFBQ25CLG1EQUFNQTtnQkFBRSxHQUFHUyxRQUFROzBCQUNmWSxTQUFTQyxHQUFHLENBQUMsQ0FBQ0MsT0FBTUM7b0JBQ2pCLHFCQUNSLDhEQUFDTjt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUN2QixtREFBS0E7Z0NBQUM2QixLQUFLRixNQUFNRyxHQUFHO2dDQUFFQyxLQUFLSixNQUFNSyxJQUFJO2dDQUFFQyxPQUFPO2dDQUFLQyxRQUFRO2dDQUFLWCxXQUFVOzs7Ozs7MENBQzNFLDhEQUFDWTtnQ0FBS1osV0FBVTswQ0FBNEJJLE1BQU1LLElBQUk7Ozs7Ozs7dUJBRmxCLE9BQWEsT0FBTko7Ozs7O2dCQUszQzs7Ozs7Ozs7Ozs7O0FBS2hCO0dBbEVNckI7S0FBQUE7QUFvRU4sK0RBQWVBLFdBQVdBLEVBQUE7QUFHMUIsTUFBTWtCLFdBQVc7SUFDYjtRQUNJSyxLQUFLO1FBQ0xDLEtBQUs7UUFDTEssU0FBUTtJQUNaO0lBQ0E7UUFDSU4sS0FBSztRQUNMQyxLQUFLO1FBQ0xLLFNBQVE7SUFDWjtJQUNBO1FBQ0lOLEtBQUs7UUFDTEMsS0FBSztRQUNMSyxTQUFRO0lBQ1o7SUFDQTtRQUNJTixLQUFLO1FBQ0xDLEtBQUs7UUFDTEssU0FBUTtJQUNaO0lBQ0E7UUFDSU4sS0FBSztRQUNMQyxLQUFLO1FBQ0xLLFNBQVE7SUFDWjtJQUNBO1FBQ0lOLEtBQUs7UUFDTEMsS0FBSztRQUNMSyxTQUFRO0lBQ1o7SUFDQTtRQUNJTixLQUFLO1FBQ0xDLEtBQUs7UUFDTEssU0FBUTtJQUNaO0lBQ0E7UUFDSU4sS0FBSztRQUNMQyxLQUFLO1FBQ0xLLFNBQVE7SUFDWjtJQUNBO1FBQ0lOLEtBQUs7UUFDTEMsS0FBSztRQUNMSyxTQUFRO0lBQ1o7SUFDQTtRQUNJTixLQUFLO1FBQ0xDLEtBQUs7UUFDTEssU0FBUTtJQUNaO0NBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2xheW91dHMvQWxsY2F0ZWdvcnkuanN4P2FkMDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gJ3JlYWN0LXNsaWNrJ1xyXG5pbXBvcnQgeyBhbGxDYXRlZ29yeUFQSSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL1Byb2R1Y3QnO1xyXG5pbXBvcnQgeyBnZXRJbWFnZVVybCB9IGZyb20gJy4uLy4uL2hlbHBlci9CYXNlVXJsJztcclxuXHJcbmNvbnN0IEFsbGNhdGVnb3J5ID0gKCkgPT4ge1xyXG5jb25zdCBbY2F0ZWdvcnksIHNldENhdGVnb3J5XSA9IHVzZVN0YXRlKCk7XHJcblxyXG5cclxudXNlRWZmZWN0KCgpPT57XHJcbiAgICBjYXRlZ29yeUFwaSgpO1xyXG59LFtdKVxyXG5cclxuY29uc3QgY2F0ZWdvcnlBcGkgPSgpPT57XHJcbiAgICBhbGxDYXRlZ29yeUFQSSgpLnRoZW4oKHJlcyk9PntcclxuICAgICAgICBzZXRDYXRlZ29yeShyZXMpO1xyXG4gICAgfSlcclxufVxyXG5cclxuICAgIHZhciBzZXR0aW5ncyA9IHtcclxuICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgc3BlZWQ6IDUwMCxcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDYsXHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTAyNCxcclxuICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDMsXHJcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcclxuXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgYnJlYWtwb2ludDogNjAwLFxyXG4gICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcclxuICAgICAgICAgICAgICAgIGluaXRpYWxTbGlkZTogMixcclxuICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgYnJlYWtwb2ludDogNDgwLFxyXG4gICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBdXHJcbiAgICAgIH07XHJcbiAgcmV0dXJuIChcclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLS1yZXNwb25zaXZlIGZvbnQtLWNlbnRlciBtdC0tNTAgbWItLTUwXCI+XHJcbiAgICA8aDIgY2xhc3NOYW1lPSdjb2xvci0tZXJyb3IgZm9udC0tYm9sZCBmcy0tMzUgZm9udC0tY2VudGVyIG10LS0zMCc+QWxsIEJyYW5kPC9oMj5cclxuICAgICAgICAgICAgPFNsaWRlciB7Li4uc2V0dGluZ3N9PlxyXG4gICAgICAgICAgICAgICAge0FsbEJyYW5kLm1hcCgoaXRlbXMsaW5kZXgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2F0ZWdvcnkgIG1iLS0xMDAnIGtleT17YGNhdC0ke2luZGV4fWB9PlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz17aXRlbXMuaW1nfSBhbHQ9e2l0ZW1zLm5hbWV9IHdpZHRoPXsxODB9IGhlaWdodD17MTgwfSBjbGFzc05hbWU9J21iLS0xNSBtdC0tMjAnLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZnMtLTE1IGZvbnQtLWJvbGQgcHQtLTEwJz57aXRlbXMubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L1NsaWRlcj5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbGxjYXRlZ29yeVxyXG5cclxuXHJcbmNvbnN0IEFsbEJyYW5kID0gW1xyXG4gICAge1xyXG4gICAgICAgIGltZzogXCIvYXNzZXRzL2ltYWdlL2JyYW5kMS5qcGdcIixcclxuICAgICAgICBhbHQ6IFwic3BpY2UgaGVhdmVuIGRpc2hcIixcclxuICAgICAgICBjYXROYW1lOlwiQmlyeWFuaVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGltZzogXCIvYXNzZXRzL2ltYWdlL2JyYW5kMi5qcGdcIixcclxuICAgICAgICBhbHQ6IFwic3BpY2UgaGVhdmVuIGRpc2hcIixcclxuICAgICAgICBjYXROYW1lOlwiQmlyeWFuaVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGltZzogXCIvYXNzZXRzL2ltYWdlL2JyYW5kMS5qcGdcIixcclxuICAgICAgICBhbHQ6IFwic3BpY2UgaGVhdmVuIGRpc2hcIixcclxuICAgICAgICBjYXROYW1lOlwiQmlyeWFuaVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGltZzogXCIvYXNzZXRzL2ltYWdlL2JyYW5kMi5qcGdcIixcclxuICAgICAgICBhbHQ6IFwic3BpY2UgaGVhdmVuIGRpc2hcIixcclxuICAgICAgICBjYXROYW1lOlwiQmlyeWFuaVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGltZzogXCIvYXNzZXRzL2ltYWdlL2JyYW5kMS5qcGdcIixcclxuICAgICAgICBhbHQ6IFwic3BpY2UgaGVhdmVuIGRpc2hcIixcclxuICAgICAgICBjYXROYW1lOlwiYnJhbmQxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaW1nOiBcIi9hc3NldHMvaW1hZ2UvYnJhbmQyLmpwZ1wiLFxyXG4gICAgICAgIGFsdDogXCJzcGljZSBoZWF2ZW4gZGlzaFwiLFxyXG4gICAgICAgIGNhdE5hbWU6XCJicmFuZDFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpbWc6IFwiL2Fzc2V0cy9pbWFnZS9icmFuZDEuanBnXCIsXHJcbiAgICAgICAgYWx0OiBcInNwaWNlIGhlYXZlbiBkaXNoXCIsXHJcbiAgICAgICAgY2F0TmFtZTpcImJyYW5kMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGltZzogXCIvYXNzZXRzL2ltYWdlL2JyYW5kMi5qcGdcIixcclxuICAgICAgICBhbHQ6IFwic3BpY2UgaGVhdmVuIGRpc2hcIixcclxuICAgICAgICBjYXROYW1lOlwiYnJhbmQxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaW1nOiBcIi9hc3NldHMvaW1hZ2UvYnJhbmQxLmpwZ1wiLFxyXG4gICAgICAgIGFsdDogXCJzcGljZSBoZWF2ZW4gZGlzaFwiLFxyXG4gICAgICAgIGNhdE5hbWU6XCJicmFuZDFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpbWc6IFwiL2Fzc2V0cy9pbWFnZS9icmFuZDIuanBnXCIsXHJcbiAgICAgICAgYWx0OiBcInNwaWNlIGhlYXZlbiBkaXNoXCIsXHJcbiAgICAgICAgY2F0TmFtZTpcImJyYW5kMVwiXHJcbiAgICB9XHJcbl0iXSwibmFtZXMiOlsiSW1hZ2UiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU2xpZGVyIiwiYWxsQ2F0ZWdvcnlBUEkiLCJnZXRJbWFnZVVybCIsIkFsbGNhdGVnb3J5IiwiY2F0ZWdvcnkiLCJzZXRDYXRlZ29yeSIsImNhdGVnb3J5QXBpIiwidGhlbiIsInJlcyIsInNldHRpbmdzIiwiYXJyb3dzIiwiaW5maW5pdGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJpbml0aWFsU2xpZGUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsIkFsbEJyYW5kIiwibWFwIiwiaXRlbXMiLCJpbmRleCIsInNyYyIsImltZyIsImFsdCIsIm5hbWUiLCJ3aWR0aCIsImhlaWdodCIsInNwYW4iLCJjYXROYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./component/layouts/Allcategory.jsx\n"));

/***/ })

});