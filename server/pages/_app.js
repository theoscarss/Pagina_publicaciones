"use strict";
(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 3132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next/script"
var script_ = __webpack_require__(4780);
var script_default = /*#__PURE__*/__webpack_require__.n(script_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./src/components/Loading-Screen/loading-screen .jsx


const LoadingScreen = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "loading",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "L"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "o"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "a"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "d"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "i"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "n"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "g"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "preloader"
            })
        ]
    }));
};
/* harmony default export */ const loading_screen_ = (LoadingScreen);

;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./src/pages/_app.js







function MyApp({ Component , pageProps  }) {
    const router = (0,router_namespaceObject.useRouter)();
    const onRouteChangeDone = ()=>{
        function noScroll() {
            window.scrollTo(0, 0);
        }
        var open = false, navDark = document.querySelector(".topnav.dark"), logoChan = document.querySelector(".topnav.dark .logo img"), menuIcon = document.querySelector(".topnav .menu-icon");
        if (menuIcon) {
            menuIcon.addEventListener("click", function() {
                open = !open;
                document.querySelector(".hamenu").classList.toggle("open");
                if (open) {
                    animateEl(document.querySelector(".hamenu"), "0px");
                    document.querySelector(".topnav .menu-icon ").classList.add("open");
                    if (navDark) {
                        navDark.classList.add("navlit");
                    }
                    if (logoChan) {
                        logoChan.setAttribute("src", "/img/logo-light.png");
                    }
                    window.addEventListener("scroll", noScroll);
                } else {
                    delay(300, animateEl(document.querySelector(".hamenu"), "-100%"));
                    document.querySelector(".topnav .menu-icon").classList.remove("open");
                    if (navDark) {
                        navDark.classList.remove("navlit");
                    }
                    if (logoChan) {
                        logoChan.setAttribute("src", "/img/logo-dark.png");
                    }
                    window.removeEventListener("scroll", noScroll);
                }
            });
            document.querySelectorAll(".main-menu a").forEach((item)=>{
                item.addEventListener("click", ()=>{
                    delay(300, animateEl(document.querySelector(".hamenu"), "-100%"));
                    document.querySelector(".topnav .menu-icon").classList.remove("open");
                    if (navDark) {
                        navDark.classList.remove("navlit");
                    }
                    if (logoChan) {
                        logoChan.setAttribute("src", "/img/logo-dark.png");
                    }
                    window.removeEventListener("scroll", noScroll);
                });
            });
        }
        document.querySelectorAll(".hamenu .menu-links .main-menu > li").forEach((item1)=>{
            item1.addEventListener("mouseenter", function() {
                this.style.opacity = "1";
                getSiblings(this).forEach((item)=>{
                    item.style.opacity = ".5";
                });
            });
            item1.addEventListener("mouseleave", function() {
                document.querySelectorAll(".hamenu .menu-links .main-menu > li").forEach((item2)=>{
                    item2.style.opacity = "1";
                });
            });
        });
        if (document.querySelectorAll(".main-menu > li .dmenu").length) {
            document.querySelectorAll(".main-menu > li .dmenu").forEach((item)=>{
                item.addEventListener("click", function() {
                    document.querySelector(".main-menu").classList.add("gosub");
                    this.parentNode.parentNode.childNodes[1].classList.add("sub-open");
                });
            });
        }
        if (document.querySelectorAll(".main-menu .sub-menu li .sub-link.back").length) {
            document.querySelectorAll(".main-menu .sub-menu li .sub-link.back").forEach((item)=>{
                item.addEventListener("click", function() {
                    document.querySelector(".main-menu").classList.remove("gosub");
                    document.querySelector(".main-menu").classList.remove("sub-open");
                });
            });
        }
    };
    external_react_default().useEffect(()=>{
        onRouteChangeDone();
        router.events.on("routeChangeComplete", onRouteChangeDone);
        return ()=>{
            router.events.off("routeChangeComplete", onRouteChangeDone);
        };
        Pace.on("start", function() {
            //When Pace Start
            document.querySelector("#preloader").classList.remove("isdone");
            document.querySelector(".loading").classList.remove("isdone");
        });
        Pace.on("done", function() {
            //When Pace End
            if (document.querySelector(".hamenu")) {
                delay(300, animateEl(document.querySelector(".hamenu"), "-100%"));
                document.querySelector(".topnav .menu-icon").classList.remove("open");
            }
            document.querySelector("#preloader").classList.add("isdone");
            document.querySelector(".loading").classList.add("isdone");
        });
    }, [
        router.events
    ]);
    external_react_default().useEffect(()=>{
        setTimeout(()=>{
            Pace.on("start", function() {
                //When Pace Start
                document.querySelector("#preloader").classList.remove("isdone");
                document.querySelector(".loading").classList.remove("isdone");
            });
            Pace.on("done", function() {
                //When Pace End
                if (document.querySelector(".hamenu")) {
                    delay(300, animateEl(document.querySelector(".hamenu"), "-100%"));
                    document.querySelector(".topnav .menu-icon").classList.remove("open");
                }
                document.querySelector("#preloader").classList.add("isdone");
                document.querySelector(".loading").classList.add("isdone");
            });
            function mousecursor() {
                const cursorInner = document.querySelector(".cursor-inner"), cursorOuter = document.querySelector(".cursor-outer");
                let n, i = 0, o = !1;
                window.onmousemove = function(s) {
                    o || (cursorOuter.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), cursorInner.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX;
                };
                if (document.querySelector(".cursor-pointer")) {
                    document.querySelector(".cursor-pointer").addEventListener("mouseenter", function() {
                        cursorInner.classList.add("cursor-hover"), cursorOuter.classList.add("cursor-hover");
                    });
                    document.querySelector(".cursor-pointer").addEventListener("mouseleave", function() {
                        cursorInner.classList.remove("cursor-hover"), cursorOuter.classList.remove("cursor-hover");
                    }), cursorInner.style.visibility = "visible", cursorOuter.style.visibility = "visible";
                }
                document.querySelectorAll("a").forEach(function(item) {
                    item.addEventListener("mouseenter", function() {
                        cursorInner.classList.add("cursor-hover"), cursorOuter.classList.add("cursor-hover");
                    });
                });
                document.querySelectorAll("a").forEach(function(item) {
                    item.addEventListener("mouseleave", function() {
                        cursorInner.classList.remove("cursor-hover"), cursorOuter.classList.remove("cursor-hover");
                    });
                }), cursorInner.style.visibility = "visible", cursorOuter.style.visibility = "visible";
            }
            mousecursor();
        }, 1000);
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Vie"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/img/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mouse-cursor cursor-outer"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mouse-cursor cursor-inner"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(loading_screen_, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "progress-wrap cursor-pointer",
                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    className: "progress-circle svg-content",
                    width: "100%",
                    height: "100%",
                    viewBox: "-1 -1 102 102",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                id: "pace",
                src: "/js/pace.min.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                id: "wow",
                src: "/js/wow.min.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                id: "bootstrap",
                src: "/js/bootstrap.min.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                strategy: "beforeInteractive",
                id: "splitting",
                src: "/js/splitting.min.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                id: "simpleParallax",
                src: "/js/simpleParallax.min.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                id: "isotope",
                src: "/js/isotope.pkgd.min.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                src: "/js/main.js",
                strategy: "lazyOnload"
            })
        ]
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 4780:
/***/ ((module) => {

module.exports = require("next/script");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3132));
module.exports = __webpack_exports__;

})();