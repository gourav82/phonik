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

/***/ "./component/layouts/MainBanner.jsx":
/*!******************************************!*\
  !*** ./component/layouts/MainBanner.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var _core_Animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Animation */ \"./component/core/Animation.jsx\");\n/* harmony import */ var _services_Product__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/Product */ \"./services/Product.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst MainBanner = ()=>{\n    _s();\n    const [banner, setBanner] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        bannerData();\n    }, []);\n    const bannerData = ()=>{\n        (0,_services_Product__WEBPACK_IMPORTED_MODULE_5__.bannerAPI)().then((resp)=>{\n            setBanner(resp);\n        // console.log(resp);\n        });\n    };\n    var settings = {\n        arrows: false,\n        infinite: true,\n        speed: 100,\n        slidesToShow: 1,\n        slidesToScroll: 1,\n        dots: false,\n        autoplay: true,\n        responsive: [\n            {\n                breakpoint: 1024,\n                settings: {\n                    slidesToShow: 1,\n                    slidesToScroll: 1,\n                    infinite: true,\n                    arrows: false,\n                    autoplay: true\n                }\n            },\n            {\n                breakpoint: 600,\n                settings: {\n                    slidesToShow: 1,\n                    slidesToScroll: 1,\n                    initialSlide: 1,\n                    arrows: false,\n                    autoplay: true\n                }\n            },\n            {\n                breakpoint: 480,\n                settings: {\n                    slidesToShow: 1,\n                    slidesToScroll: 1,\n                    arrows: false,\n                    autoplay: true\n                }\n            }\n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"banner\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"banner--table flex flex--justify-content-between flex--align-items-center mt--10 mb--40\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container--responsive banner--table-slider pd--15 bg--radius\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        ...settings,\n                        children: mainSlide.map((item, index)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"image pd--20 pt--50\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        src: item.img,\n                                        width: 800,\n                                        height: 200,\n                                        alt: \"\",\n                                        className: \"bg--radius\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\phonik\\\\component\\\\layouts\\\\MainBanner.jsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"fs--28 font--bold color--error\",\n                                        children: item.details\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\phonik\\\\component\\\\layouts\\\\MainBanner.jsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 19\n                                    }, undefined)\n                                ]\n                            }, \"banner-\".concat(index), true, {\n                                fileName: \"D:\\\\phonik\\\\component\\\\layouts\\\\MainBanner.jsx\",\n                                lineNumber: 70,\n                                columnNumber: 17\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\phonik\\\\component\\\\layouts\\\\MainBanner.jsx\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\phonik\\\\component\\\\layouts\\\\MainBanner.jsx\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"banner--table-book pd--20 bg--radius font--center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"fs--28 font--bold color--error mb--15\",\n                            children: \"Welcome in Phonik Industries\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\phonik\\\\component\\\\layouts\\\\MainBanner.jsx\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"fs--20 color--success font--bold \",\n                            children: \"Let`s Join Us\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\phonik\\\\component\\\\layouts\\\\MainBanner.jsx\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"fs--16 mb--10\",\n                            children: \" Be Our Business partener\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\phonik\\\\component\\\\layouts\\\\MainBanner.jsx\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"time flex flex--justify-content-end flex--align-items-center width--column-two-5 mb--15\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_core_Animation__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    height: \"40\",\n                                    width: \"40\",\n                                    animationData: \"/assets/json/alarm-clock.json\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\phonik\\\\component\\\\layouts\\\\MainBanner.jsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                    name: \"\",\n                                    className: \"location position--relative\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            children: \"Select Time\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\phonik\\\\component\\\\layouts\\\\MainBanner.jsx\",\n                                            lineNumber: 88,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            children: \"Gazipur\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\phonik\\\\component\\\\layouts\\\\MainBanner.jsx\",\n                                            lineNumber: 89,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            children: \"Varansi\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\phonik\\\\component\\\\layouts\\\\MainBanner.jsx\",\n                                            lineNumber: 90,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\phonik\\\\component\\\\layouts\\\\MainBanner.jsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\phonik\\\\component\\\\layouts\\\\MainBanner.jsx\",\n                            lineNumber: 85,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: \"/assets/image/ripple1.png\",\n                            width: 100,\n                            height: 100,\n                            alt: \"\",\n                            className: \"btn_ripple\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\phonik\\\\component\\\\layouts\\\\MainBanner.jsx\",\n                            lineNumber: 93,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\phonik\\\\component\\\\layouts\\\\MainBanner.jsx\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\phonik\\\\component\\\\layouts\\\\MainBanner.jsx\",\n            lineNumber: 65,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\phonik\\\\component\\\\layouts\\\\MainBanner.jsx\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MainBanner, \"dQLfAsNhNd0RHuJyCi+zHRltCF8=\");\n_c = MainBanner;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainBanner);\nconst mainSlide = [\n    {\n        img: \"/assets/image/phonik1.jpg\",\n        alt: \"\",\n        btn: \"Order Now\",\n        details: \"Dhoop Bati\"\n    },\n    {\n        img: \"/assets/image/phonik2.jpg\",\n        alt: \"\",\n        btn: \"Order Now\",\n        details: \"Dhoop Bati\"\n    },\n    {\n        img: \"/assets/image/phonik3.jpg\",\n        alt: \"\",\n        btn: \"Order Now\",\n        details: \"Dhoop Bati\"\n    },\n    {\n        img: \"/assets/image/phonik4.jpg\",\n        alt: \"\",\n        btn: \"Order Now\",\n        details: \"Dhoop Bati\"\n    },\n    {\n        img: \"/assets/image/phonik5.jpg\",\n        alt: \"\",\n        btn: \"Order Now\",\n        details: \"Dhoop Bati\"\n    },\n    {\n        img: \"/assets/image/phonik1.jpg\",\n        alt: \"\",\n        btn: \"Order Now\",\n        details: \"Dhoop Bati\"\n    },\n    {\n        img: \"/assets/image/phonik2.jpg\",\n        alt: \"\",\n        btn: \"Order Now\",\n        details: \"Dhoop Bati\"\n    }\n];\nvar _c;\n$RefreshReg$(_c, \"MainBanner\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSztRQUNMUyxLQUFLO1FBQ0xQLFNBQVM7SUFDWDtJQUNBO1FBQ0VMLEtBQUs7UUFDTEcsS0FBSztRQUNMUyxLQUFLO1FBQ0xQLFNBQVM7SUFDWDtJQUNBO1FBQ0VMLEtBQUs7UUFDTEcsS0FBSztRQUNMUyxLQUFLO1FBQ0xQLFNBQVM7SUFDWDtJQUNBO1FBQ0VMLEtBQUs7UUFDTEcsS0FBSztRQUNMUyxLQUFLO1FBQ0xQLFNBQVM7SUFDWDtDQUVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudC9sYXlvdXRzL01haW5CYW5uZXIuanN4PzM0OGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTbGlkZXIgZnJvbSAncmVhY3Qtc2xpY2snXHJcbmltcG9ydCB7IEJzQ2hldnJvbkRvd24gfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcclxuaW1wb3J0IEFuaW1hdGlvbiBmcm9tICcuLi9jb3JlL0FuaW1hdGlvbic7XHJcbmltcG9ydCB7IGJhbm5lckFQSSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL1Byb2R1Y3QnO1xyXG5cclxuY29uc3QgTWFpbkJhbm5lciA9ICgpID0+IHtcclxuY29uc3QgW2Jhbm5lciwgc2V0QmFubmVyXSA9IHVzZVN0YXRlKCk7XHJcblxyXG5cclxudXNlRWZmZWN0KCgpPT57XHJcbiAgYmFubmVyRGF0YSgpO1xyXG59LFtdKVxyXG5cclxuY29uc3QgYmFubmVyRGF0YSA9ICgpPT57XHJcbiAgYmFubmVyQVBJKCkudGhlbigocmVzcCk9PntcclxuICAgIHNldEJhbm5lcihyZXNwKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHJlc3ApO1xyXG4gIH0pXHJcbn1cclxuXHJcbiAgdmFyIHNldHRpbmdzID0ge1xyXG4gICAgYXJyb3dzOiBmYWxzZSxcclxuICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgc3BlZWQ6IDEwMCxcclxuICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgZG90czogZmFsc2UsXHJcbiAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogNjAwLFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgIGluaXRpYWxTbGlkZTogMSxcclxuICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiA0ODAsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyLS10YWJsZSBmbGV4IGZsZXgtLWp1c3RpZnktY29udGVudC1iZXR3ZWVuIGZsZXgtLWFsaWduLWl0ZW1zLWNlbnRlciBtdC0tMTAgbWItLTQwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItLXJlc3BvbnNpdmUgYmFubmVyLS10YWJsZS1zbGlkZXIgcGQtLTE1IGJnLS1yYWRpdXNcIj5cclxuICAgICAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfT5cclxuICAgICAgICAgICAge21haW5TbGlkZS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtgYmFubmVyLSR7aW5kZXh9YH0gY2xhc3NOYW1lPVwiaW1hZ2UgcGQtLTIwIHB0LS01MFwiPlxyXG4gICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpdGVtLmltZ30gd2lkdGg9ezgwMH0gaGVpZ2h0PXsyMDB9IGFsdD0nJyBjbGFzc05hbWU9J2JnLS1yYWRpdXMnIC8+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uIGNsYXNzTmFtZT0nZnMtLTIwIGJnLS1lcnJvciBiZy0tcmFkaXVzIHBkLS0xMCBjb2xvci0td2hpdGUgZm9udC0tYm9sZCc+e2l0ZW0uYnRufTwvYnV0dG9uPiAqL31cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmcy0tMjggZm9udC0tYm9sZCBjb2xvci0tZXJyb3InPntpdGVtLmRldGFpbHN9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyLS10YWJsZS1ib29rIHBkLS0yMCBiZy0tcmFkaXVzIGZvbnQtLWNlbnRlclwiPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT0nZnMtLTI4IGZvbnQtLWJvbGQgY29sb3ItLWVycm9yIG1iLS0xNSc+V2VsY29tZSBpbiBQaG9uaWsgSW5kdXN0cmllczwvaDE+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZzLS0yMCBjb2xvci0tc3VjY2VzcyBmb250LS1ib2xkICcgPkxldGBzIEpvaW4gVXM8L3NwYW4+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9J2ZzLS0xNiBtYi0tMTAnPiBCZSBPdXIgQnVzaW5lc3MgcGFydGVuZXI8L3A+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZSBmbGV4IGZsZXgtLWp1c3RpZnktY29udGVudC1lbmQgZmxleC0tYWxpZ24taXRlbXMtY2VudGVyIHdpZHRoLS1jb2x1bW4tdHdvLTUgbWItLTE1XCI+XHJcbiAgICAgICAgICAgICAgPEFuaW1hdGlvbiBoZWlnaHQ9e2A0MGB9IHdpZHRoPXtgNDBgfSBhbmltYXRpb25EYXRhPXtcIi9hc3NldHMvanNvbi9hbGFybS1jbG9jay5qc29uXCJ9IC8+XHJcbiAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiXCIgY2xhc3NOYW1lPVwibG9jYXRpb24gcG9zaXRpb24tLXJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uPlNlbGVjdCBUaW1lPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uPkdhemlwdXI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+VmFyYW5zaTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9hc3NldHMvaW1hZ2UvcmlwcGxlMS5wbmdcIiB3aWR0aD17MTAwfSBoZWlnaHQ9ezEwMH0gYWx0PScnIGNsYXNzTmFtZT0nYnRuX3JpcHBsZScgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuIClcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5CYW5uZXJcclxuXHJcbmNvbnN0IG1haW5TbGlkZSA9IFtcclxuICB7XHJcbiAgICBpbWc6IFwiL2Fzc2V0cy9pbWFnZS9waG9uaWsxLmpwZ1wiLFxyXG4gICAgYWx0OiBcIlwiLFxyXG4gICAgYnRuOiBcIk9yZGVyIE5vd1wiLFxyXG4gICAgZGV0YWlsczogXCJEaG9vcCBCYXRpXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGltZzogXCIvYXNzZXRzL2ltYWdlL3Bob25pazIuanBnXCIsXHJcbiAgICBhbHQ6IFwiXCIsXHJcbiAgICBidG46IFwiT3JkZXIgTm93XCIsXHJcbiAgICBkZXRhaWxzOiBcIkRob29wIEJhdGlcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1nOiBcIi9hc3NldHMvaW1hZ2UvcGhvbmlrMy5qcGdcIixcclxuICAgIGFsdDogXCJcIixcclxuICAgIGJ0bjogXCJPcmRlciBOb3dcIixcclxuICAgIGRldGFpbHM6IFwiRGhvb3AgQmF0aVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWc6IFwiL2Fzc2V0cy9pbWFnZS9waG9uaWs0LmpwZ1wiLFxyXG4gICAgYWx0OiBcIlwiLFxyXG4gICAgYnRuOiBcIk9yZGVyIE5vd1wiLFxyXG4gICAgZGV0YWlsczogXCJEaG9vcCBCYXRpXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGltZzogXCIvYXNzZXRzL2ltYWdlL3Bob25pazUuanBnXCIsXHJcbiAgICBhbHQ6IFwiXCIsXHJcbiAgICBidG46IFwiT3JkZXIgTm93XCIsXHJcbiAgICBkZXRhaWxzOiBcIkRob29wIEJhdGlcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1nOiBcIi9hc3NldHMvaW1hZ2UvcGhvbmlrMS5qcGdcIixcclxuICAgIGFsdDogXCJcIixcclxuICAgIGJ0bjogXCJPcmRlciBOb3dcIixcclxuICAgIGRldGFpbHM6IFwiRGhvb3AgQmF0aVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWc6IFwiL2Fzc2V0cy9pbWFnZS9waG9uaWsyLmpwZ1wiLFxyXG4gICAgYWx0OiBcIlwiLFxyXG4gICAgYnRuOiBcIk9yZGVyIE5vd1wiLFxyXG4gICAgZGV0YWlsczogXCJEaG9vcCBCYXRpXCJcclxuICB9XHJcblxyXG5dIl0sIm5hbWVzIjpbIkltYWdlIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlNsaWRlciIsIkJzQ2hldnJvbkRvd24iLCJBbmltYXRpb24iLCJiYW5uZXJBUEkiLCJNYWluQmFubmVyIiwiYmFubmVyIiwic2V0QmFubmVyIiwiYmFubmVyRGF0YSIsInRoZW4iLCJyZXNwIiwic2V0dGluZ3MiLCJhcnJvd3MiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJkb3RzIiwiYXV0b3BsYXkiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsImluaXRpYWxTbGlkZSIsImRpdiIsImNsYXNzTmFtZSIsIm1haW5TbGlkZSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInNyYyIsImltZyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0Iiwic3BhbiIsImRldGFpbHMiLCJoMSIsInAiLCJhbmltYXRpb25EYXRhIiwic2VsZWN0IiwibmFtZSIsIm9wdGlvbiIsImJ0biJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./component/layouts/MainBanner.jsx\n"));

/***/ })

});