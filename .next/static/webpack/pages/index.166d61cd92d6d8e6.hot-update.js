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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var _core_Animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Animation */ \"./component/core/Animation.jsx\");\n/* harmony import */ var _services_Product__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/Product */ \"./services/Product.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst MainBanner = ()=>{\n    _s();\n    const [banner, setBanner] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        bannerData();\n    }, []);\n    const bannerData = ()=>{\n        (0,_services_Product__WEBPACK_IMPORTED_MODULE_5__.bannerAPI)().then((resp)=>{\n            setBanner(resp);\n        // console.log(resp);\n        });\n    };\n    var settings = {\n        arrows: false,\n        infinite: true,\n        speed: 100,\n        slidesToShow: 1,\n        slidesToScroll: 1,\n        dots: false,\n        autoplay: true,\n        responsive: [\n            {\n                breakpoint: 1024,\n                settings: {\n                    slidesToShow: 1,\n                    slidesToScroll: 1,\n                    infinite: true,\n                    arrows: false,\n                    autoplay: true\n                }\n            },\n            {\n                breakpoint: 600,\n                settings: {\n                    slidesToShow: 1,\n                    slidesToScroll: 1,\n                    initialSlide: 1,\n                    arrows: false,\n                    autoplay: true\n                }\n            },\n            {\n                breakpoint: 480,\n                settings: {\n                    slidesToShow: 1,\n                    slidesToScroll: 1,\n                    arrows: false,\n                    autoplay: true\n                }\n            }\n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"banner\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"banner--table flex flex--justify-content-between flex--align-items-center mt--10 mb--40\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container--responsive banner--table-slider pd--15 bg--radius\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        ...settings,\n                        children: mainSlide.map((item, index)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"image pd--20 pt--50\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        src: item.img,\n                                        width: 800,\n                                        height: 200,\n                                        alt: \"\",\n                                        className: \"bg--radius\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\phonik\\\\component\\\\layouts\\\\MainBanner.jsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"fs--28 font--bold color--error\",\n                                        children: item.details\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\phonik\\\\component\\\\layouts\\\\MainBanner.jsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 19\n                                    }, undefined)\n                                ]\n                            }, \"banner-\".concat(index), true, {\n                                fileName: \"D:\\\\phonik\\\\component\\\\layouts\\\\MainBanner.jsx\",\n                                lineNumber: 70,\n                                columnNumber: 17\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\phonik\\\\component\\\\layouts\\\\MainBanner.jsx\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\phonik\\\\component\\\\layouts\\\\MainBanner.jsx\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"banner--table-book pd--20 bg--radius font--center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"fs--28 font--bold color--error mb--15\",\n                            children: \"Welcome in Phonik Industries\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\phonik\\\\component\\\\layouts\\\\MainBanner.jsx\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"fs--20 color--success font--bold \",\n                            children: \"Let`s Join Us\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\phonik\\\\component\\\\layouts\\\\MainBanner.jsx\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"fs--16 mb--10\",\n                            children: \" Be Our Business partener\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\phonik\\\\component\\\\layouts\\\\MainBanner.jsx\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_core_Animation__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            height: \"40\",\n                            width: \"40\",\n                            animationData: \"/assets/json/deliver.json\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\phonik\\\\component\\\\layouts\\\\MainBanner.jsx\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"time flex flex--justify-content-end flex--align-items-center width--column-two-5 mb--15\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_core_Animation__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    height: \"40\",\n                                    width: \"40\",\n                                    animationData: \"/assets/json/alarm-clock.json\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\phonik\\\\component\\\\layouts\\\\MainBanner.jsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                    name: \"\",\n                                    className: \"location position--relative\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            children: \"Select Time\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\phonik\\\\component\\\\layouts\\\\MainBanner.jsx\",\n                                            lineNumber: 89,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            children: \"Gazipur\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\phonik\\\\component\\\\layouts\\\\MainBanner.jsx\",\n                                            lineNumber: 90,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            children: \"Varansi\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\phonik\\\\component\\\\layouts\\\\MainBanner.jsx\",\n                                            lineNumber: 91,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\phonik\\\\component\\\\layouts\\\\MainBanner.jsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\phonik\\\\component\\\\layouts\\\\MainBanner.jsx\",\n                            lineNumber: 86,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: \"/assets/image/ripple1.png\",\n                            width: 100,\n                            height: 100,\n                            alt: \"\",\n                            className: \"btn_ripple\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\phonik\\\\component\\\\layouts\\\\MainBanner.jsx\",\n                            lineNumber: 94,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\phonik\\\\component\\\\layouts\\\\MainBanner.jsx\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\phonik\\\\component\\\\layouts\\\\MainBanner.jsx\",\n            lineNumber: 65,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\phonik\\\\component\\\\layouts\\\\MainBanner.jsx\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MainBanner, \"dQLfAsNhNd0RHuJyCi+zHRltCF8=\");\n_c = MainBanner;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainBanner);\nconst mainSlide = [\n    {\n        img: \"/assets/image/phonik1.jpg\",\n        alt: \"\",\n        btn: \"Order Now\",\n        details: \"Dhoop Bati\"\n    },\n    {\n        img: \"/assets/image/phonik2.jpg\",\n        alt: \"\",\n        btn: \"Order Now\",\n        details: \"Dhoop Bati\"\n    },\n    {\n        img: \"/assets/image/phonik3.jpg\",\n        alt: \"\",\n        btn: \"Order Now\",\n        details: \"Dhoop Bati\"\n    },\n    {\n        img: \"/assets/image/phonik4.jpg\",\n        alt: \"\",\n        btn: \"Order Now\",\n        details: \"Dhoop Bati\"\n    },\n    {\n        img: \"/assets/image/phonik5.jpg\",\n        alt: \"\",\n        btn: \"Order Now\",\n        details: \"Dhoop Bati\"\n    },\n    {\n        img: \"/assets/image/phonik1.jpg\",\n        alt: \"\",\n        btn: \"Order Now\",\n        details: \"Dhoop Bati\"\n    },\n    {\n        img: \"/assets/image/phonik2.jpg\",\n        alt: \"\",\n        btn: \"Order Now\",\n        details: \"Dhoop Bati\"\n    }\n];\nvar _c;\n$RefreshReg$(_c, \"MainBanner\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLO1FBQ0xHLEtBQUs7UUFDTFMsS0FBSztRQUNMUCxTQUFTO0lBQ1g7SUFDQTtRQUNFTCxLQUFLO1FBQ0xHLEtBQUs7UUFDTFMsS0FBSztRQUNMUCxTQUFTO0lBQ1g7SUFDQTtRQUNFTCxLQUFLO1FBQ0xHLEtBQUs7UUFDTFMsS0FBSztRQUNMUCxTQUFTO0lBQ1g7SUFDQTtRQUNFTCxLQUFLO1FBQ0xHLEtBQUs7UUFDTFMsS0FBSztRQUNMUCxTQUFTO0lBQ1g7SUFDQTtRQUNFTCxLQUFLO1FBQ0xHLEtBQUs7UUFDTFMsS0FBSztRQUNMUCxTQUFTO0lBQ1g7Q0FFRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnQvbGF5b3V0cy9NYWluQmFubmVyLmpzeD8zNDhkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gJ3JlYWN0LXNsaWNrJ1xyXG5pbXBvcnQgeyBCc0NoZXZyb25Eb3duIH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XHJcbmltcG9ydCBBbmltYXRpb24gZnJvbSAnLi4vY29yZS9BbmltYXRpb24nO1xyXG5pbXBvcnQgeyBiYW5uZXJBUEkgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9Qcm9kdWN0JztcclxuXHJcbmNvbnN0IE1haW5CYW5uZXIgPSAoKSA9PiB7XHJcbmNvbnN0IFtiYW5uZXIsIHNldEJhbm5lcl0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuXHJcbnVzZUVmZmVjdCgoKT0+e1xyXG4gIGJhbm5lckRhdGEoKTtcclxufSxbXSlcclxuXHJcbmNvbnN0IGJhbm5lckRhdGEgPSAoKT0+e1xyXG4gIGJhbm5lckFQSSgpLnRoZW4oKHJlc3ApPT57XHJcbiAgICBzZXRCYW5uZXIocmVzcCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhyZXNwKTtcclxuICB9KVxyXG59XHJcblxyXG4gIHZhciBzZXR0aW5ncyA9IHtcclxuICAgIGFycm93czogZmFsc2UsXHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIHNwZWVkOiAxMDAsXHJcbiAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiAxMDI0LFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDYwMCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICBpbml0aWFsU2xpZGU6IDEsXHJcbiAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogNDgwLFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lci0tdGFibGUgZmxleCBmbGV4LS1qdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBmbGV4LS1hbGlnbi1pdGVtcy1jZW50ZXIgbXQtLTEwIG1iLS00MFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLS1yZXNwb25zaXZlIGJhbm5lci0tdGFibGUtc2xpZGVyIHBkLS0xNSBiZy0tcmFkaXVzXCI+XHJcbiAgICAgICAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30+XHJcbiAgICAgICAgICAgIHttYWluU2xpZGUubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17YGJhbm5lci0ke2luZGV4fWB9IGNsYXNzTmFtZT1cImltYWdlIHBkLS0yMCBwdC0tNTBcIj5cclxuICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17aXRlbS5pbWd9IHdpZHRoPXs4MDB9IGhlaWdodD17MjAwfSBhbHQ9JycgY2xhc3NOYW1lPSdiZy0tcmFkaXVzJyAvPlxyXG4gICAgICAgICAgICAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9J2ZzLS0yMCBiZy0tZXJyb3IgYmctLXJhZGl1cyBwZC0tMTAgY29sb3ItLXdoaXRlIGZvbnQtLWJvbGQnPntpdGVtLmJ0bn08L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZnMtLTI4IGZvbnQtLWJvbGQgY29sb3ItLWVycm9yJz57aXRlbS5kZXRhaWxzfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L1NsaWRlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lci0tdGFibGUtYm9vayBwZC0tMjAgYmctLXJhZGl1cyBmb250LS1jZW50ZXJcIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2ZzLS0yOCBmb250LS1ib2xkIGNvbG9yLS1lcnJvciBtYi0tMTUnPldlbGNvbWUgaW4gUGhvbmlrIEluZHVzdHJpZXM8L2gxPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmcy0tMjAgY29sb3ItLXN1Y2Nlc3MgZm9udC0tYm9sZCAnID5MZXRgcyBKb2luIFVzPC9zcGFuPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSdmcy0tMTYgbWItLTEwJz4gQmUgT3VyIEJ1c2luZXNzIHBhcnRlbmVyPC9wPlxyXG4gICAgICAgICAgPEFuaW1hdGlvbiBoZWlnaHQ9e2A0MGB9IHdpZHRoPXtgNDBgfSBhbmltYXRpb25EYXRhPXtcIi9hc3NldHMvanNvbi9kZWxpdmVyLmpzb25cIn0gLz5cclxuXHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lIGZsZXggZmxleC0tanVzdGlmeS1jb250ZW50LWVuZCBmbGV4LS1hbGlnbi1pdGVtcy1jZW50ZXIgd2lkdGgtLWNvbHVtbi10d28tNSBtYi0tMTVcIj5cclxuICAgICAgICAgICAgICA8QW5pbWF0aW9uIGhlaWdodD17YDQwYH0gd2lkdGg9e2A0MGB9IGFuaW1hdGlvbkRhdGE9e1wiL2Fzc2V0cy9qc29uL2FsYXJtLWNsb2NrLmpzb25cIn0gLz5cclxuICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJcIiBjbGFzc05hbWU9XCJsb2NhdGlvbiBwb3NpdGlvbi0tcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+U2VsZWN0IFRpbWU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+R2F6aXB1cjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbj5WYXJhbnNpPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2Fzc2V0cy9pbWFnZS9yaXBwbGUxLnBuZ1wiIHdpZHRoPXsxMDB9IGhlaWdodD17MTAwfSBhbHQ9JycgY2xhc3NOYW1lPSdidG5fcmlwcGxlJyAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gKVxyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgTWFpbkJhbm5lclxyXG5cclxuY29uc3QgbWFpblNsaWRlID0gW1xyXG4gIHtcclxuICAgIGltZzogXCIvYXNzZXRzL2ltYWdlL3Bob25pazEuanBnXCIsXHJcbiAgICBhbHQ6IFwiXCIsXHJcbiAgICBidG46IFwiT3JkZXIgTm93XCIsXHJcbiAgICBkZXRhaWxzOiBcIkRob29wIEJhdGlcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1nOiBcIi9hc3NldHMvaW1hZ2UvcGhvbmlrMi5qcGdcIixcclxuICAgIGFsdDogXCJcIixcclxuICAgIGJ0bjogXCJPcmRlciBOb3dcIixcclxuICAgIGRldGFpbHM6IFwiRGhvb3AgQmF0aVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWc6IFwiL2Fzc2V0cy9pbWFnZS9waG9uaWszLmpwZ1wiLFxyXG4gICAgYWx0OiBcIlwiLFxyXG4gICAgYnRuOiBcIk9yZGVyIE5vd1wiLFxyXG4gICAgZGV0YWlsczogXCJEaG9vcCBCYXRpXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGltZzogXCIvYXNzZXRzL2ltYWdlL3Bob25pazQuanBnXCIsXHJcbiAgICBhbHQ6IFwiXCIsXHJcbiAgICBidG46IFwiT3JkZXIgTm93XCIsXHJcbiAgICBkZXRhaWxzOiBcIkRob29wIEJhdGlcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1nOiBcIi9hc3NldHMvaW1hZ2UvcGhvbmlrNS5qcGdcIixcclxuICAgIGFsdDogXCJcIixcclxuICAgIGJ0bjogXCJPcmRlciBOb3dcIixcclxuICAgIGRldGFpbHM6IFwiRGhvb3AgQmF0aVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWc6IFwiL2Fzc2V0cy9pbWFnZS9waG9uaWsxLmpwZ1wiLFxyXG4gICAgYWx0OiBcIlwiLFxyXG4gICAgYnRuOiBcIk9yZGVyIE5vd1wiLFxyXG4gICAgZGV0YWlsczogXCJEaG9vcCBCYXRpXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGltZzogXCIvYXNzZXRzL2ltYWdlL3Bob25pazIuanBnXCIsXHJcbiAgICBhbHQ6IFwiXCIsXHJcbiAgICBidG46IFwiT3JkZXIgTm93XCIsXHJcbiAgICBkZXRhaWxzOiBcIkRob29wIEJhdGlcIlxyXG4gIH1cclxuXHJcbl0iXSwibmFtZXMiOlsiSW1hZ2UiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU2xpZGVyIiwiQnNDaGV2cm9uRG93biIsIkFuaW1hdGlvbiIsImJhbm5lckFQSSIsIk1haW5CYW5uZXIiLCJiYW5uZXIiLCJzZXRCYW5uZXIiLCJiYW5uZXJEYXRhIiwidGhlbiIsInJlc3AiLCJzZXR0aW5ncyIsImFycm93cyIsImluZmluaXRlIiwic3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImRvdHMiLCJhdXRvcGxheSIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50IiwiaW5pdGlhbFNsaWRlIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFpblNsaWRlIiwibWFwIiwiaXRlbSIsImluZGV4Iiwic3JjIiwiaW1nIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJzcGFuIiwiZGV0YWlscyIsImgxIiwicCIsImFuaW1hdGlvbkRhdGEiLCJzZWxlY3QiLCJuYW1lIiwib3B0aW9uIiwiYnRuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./component/layouts/MainBanner.jsx\n"));

/***/ })

});