(() => {
var exports = {};
exports.id = 422;
exports.ids = [422,197];
exports.modules = {

/***/ 3191:
/***/ ((module) => {

// Exports
module.exports = {
	"title": "TopPageComponent_title__cqDH7",
	"hhTitle": "TopPageComponent_hhTitle__UL_nI",
	"seo": "TopPageComponent_seo__kO3yM"
};


/***/ }),

/***/ 9714:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ TopPageComponent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4176);
/* harmony import */ var _TopPageComponent_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3191);
/* harmony import */ var _TopPageComponent_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_TopPageComponent_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _interfaces_page_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8717);
/* harmony import */ var _components_Sort_Sort_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7158);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _sort_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8496);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_1__]);
_components__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const TopPageComponent = ({ page , products , firstCategory  })=>{
    const [{ products: sortedProducts , sort  }, dispatchSort] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useReducer)(_sort_reducer__WEBPACK_IMPORTED_MODULE_5__/* .sortReducer */ .d, {
        products,
        sort: _components_Sort_Sort_props__WEBPACK_IMPORTED_MODULE_3__/* .SortEnum.Rating */ .J.Rating
    });
    const setSort = (sort)=>{
        dispatchSort({
            type: sort
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        dispatchSort({
            type: "reset",
            initialState: products
        });
    }, [
        products
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_TopPageComponent_module_css__WEBPACK_IMPORTED_MODULE_6___default().wrapper),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_TopPageComponent_module_css__WEBPACK_IMPORTED_MODULE_6___default().title),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_1__/* .Htag */ .sp, {
                        tag: "h1",
                        children: page.title
                    }),
                    products && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_1__/* .Tag */ .Xn, {
                        color: "gray",
                        size: "m",
                        children: products.length
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_1__/* .Sort */ .PE, {
                        sort: sort,
                        setSort: setSort
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: sortedProducts && sortedProducts.map((p)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_1__/* .Product */ .xs, {
                        layout: true,
                        product: p
                    }, p._id))
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_TopPageComponent_module_css__WEBPACK_IMPORTED_MODULE_6___default().hhTitle),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_1__/* .Htag */ .sp, {
                        tag: "h2",
                        children: [
                            "Vacancy - ",
                            page.category
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_1__/* .Tag */ .Xn, {
                        color: "red",
                        size: "m",
                        children: "XX"
                    })
                ]
            }),
            firstCategory == _interfaces_page_interface__WEBPACK_IMPORTED_MODULE_2__/* .TopLevelCategory.Courses */ .R.Courses && page.hh && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_1__/* .HhData */ .Vp, {
                ...page.hh
            }),
            page.advantages && page.advantages.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_1__/* .Htag */ .sp, {
                        tag: "h2",
                        children: "Benefits"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_1__/* .Advantages */ .HF, {
                        advantages: page.advantages
                    })
                ]
            }),
            page.seoText && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_TopPageComponent_module_css__WEBPACK_IMPORTED_MODULE_6___default().seo),
                dangerouslySetInnerHTML: {
                    __html: page.seoText
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_1__/* .Htag */ .sp, {
                tag: "h2",
                children: "Get skills"
            }),
            page.tags.map((t)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_1__/* .Tag */ .Xn, {
                    color: "primary",
                    children: t
                }, t))
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8496:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ sortReducer)
/* harmony export */ });
/* harmony import */ var _components_Sort_Sort_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7158);

const sortReducer = (state, action)=>{
    switch(action.type){
        case _components_Sort_Sort_props__WEBPACK_IMPORTED_MODULE_0__/* .SortEnum.Rating */ .J.Rating:
            return {
                sort: _components_Sort_Sort_props__WEBPACK_IMPORTED_MODULE_0__/* .SortEnum.Rating */ .J.Rating,
                products: state.products.sort((a, b)=>a.initialRating > b.initialRating ? -1 : 1)
            };
        case _components_Sort_Sort_props__WEBPACK_IMPORTED_MODULE_0__/* .SortEnum.Price */ .J.Price:
            return {
                sort: _components_Sort_Sort_props__WEBPACK_IMPORTED_MODULE_0__/* .SortEnum.Price */ .J.Price,
                products: state.products.sort((a, b)=>a.price > b.price ? 1 : -1)
            };
        case "reset":
            return {
                sort: _components_Sort_Sort_props__WEBPACK_IMPORTED_MODULE_0__/* .SortEnum.Rating */ .J.Rating,
                products: action.initialState
            };
        default:
            throw new Error("Error");
    }
};


/***/ }),

/***/ 1875:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* reexport safe */ _TopPageComponent_TopPageComponent__WEBPACK_IMPORTED_MODULE_0__.K)
/* harmony export */ });
/* harmony import */ var _TopPageComponent_TopPageComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9714);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_TopPageComponent_TopPageComponent__WEBPACK_IMPORTED_MODULE_0__]);
_TopPageComponent_TopPageComponent__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7492:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Error404": () => (/* binding */ Error404),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4176);
/* harmony import */ var _layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1779);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_1__, _layout_Layout__WEBPACK_IMPORTED_MODULE_2__]);
([_components__WEBPACK_IMPORTED_MODULE_1__, _layout_Layout__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



function Error404() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_1__/* .Htag */ .sp, {
            tag: "h1",
            children: "Not Found"
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_layout_Layout__WEBPACK_IMPORTED_MODULE_2__/* .withLayout */ .X)(Error404));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 924:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1779);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9648);
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4875);
/* harmony import */ var _page_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1875);
/* harmony import */ var _helpers_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2446);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _404__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7492);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layout_Layout__WEBPACK_IMPORTED_MODULE_1__, axios__WEBPACK_IMPORTED_MODULE_2__, _page_components__WEBPACK_IMPORTED_MODULE_4__, _404__WEBPACK_IMPORTED_MODULE_7__]);
([_layout_Layout__WEBPACK_IMPORTED_MODULE_1__, axios__WEBPACK_IMPORTED_MODULE_2__, _page_components__WEBPACK_IMPORTED_MODULE_4__, _404__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function TopPage({ firstCategory , page , products  }) {
    if (!page || !products) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_404__WEBPACK_IMPORTED_MODULE_7__.Error404, {});
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: page && products && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                            children: page.metaTitle
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            name: "description",
                            content: page.metaDescription
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            property: "og:title",
                            content: page.metaTitle
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            property: "og:description",
                            content: page.metaDescription
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            property: "og:type",
                            content: "article"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_page_components__WEBPACK_IMPORTED_MODULE_4__/* .TopPageComponent */ .K, {
                    firstCategory: firstCategory,
                    page: page,
                    products: products
                })
            ]
        })
    });
}
const getStaticPaths = async ()=>{
    let paths = [];
    for (const m of _helpers_helpers__WEBPACK_IMPORTED_MODULE_3__/* .firstLevelMenu */ .c_){
        const { data: menu  } = await axios__WEBPACK_IMPORTED_MODULE_2__["default"].post(_helpers_api__WEBPACK_IMPORTED_MODULE_5__/* .API.topPage.find */ .b.topPage.find, {
            firstCategory: m.id
        });
        paths = paths.concat(menu.flatMap((s)=>s.pages.map((p)=>`/${m.route}/${p.alias}`)));
    }
    return {
        paths,
        fallback: false
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_layout_Layout__WEBPACK_IMPORTED_MODULE_1__/* .withLayout */ .X)(TopPage));
const getStaticProps = async ({ params  })=>{
    if (!params) {
        return {
            notFound: true
        };
    }
    const firstCategoryItem = _helpers_helpers__WEBPACK_IMPORTED_MODULE_3__/* .firstLevelMenu.find */ .c_.find((menu)=>menu.route == params.type);
    if (!firstCategoryItem) {
        return {
            notFound: true
        };
    }
    try {
        const { data: menu  } = await axios__WEBPACK_IMPORTED_MODULE_2__["default"].post(_helpers_api__WEBPACK_IMPORTED_MODULE_5__/* .API.topPage.find */ .b.topPage.find, {
            firstCategory: firstCategoryItem.id
        });
        if (menu.length == 0) {
            return {
                notFound: true
            };
        }
        const { data: page  } = await axios__WEBPACK_IMPORTED_MODULE_2__["default"].get(_helpers_api__WEBPACK_IMPORTED_MODULE_5__/* .API.topPage.byAlias */ .b.topPage.byAlias + params.alias);
        const { data: products  } = await axios__WEBPACK_IMPORTED_MODULE_2__["default"].post(_helpers_api__WEBPACK_IMPORTED_MODULE_5__/* .API.product.find */ .b.product.find, {
            category: page.category,
            limit: 10
        });
        return {
            props: {
                menu,
                firstCategory: firstCategoryItem.id,
                page,
                products
            }
        };
    } catch  {
        return {
            notFound: true
        };
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 4146:
/***/ ((module) => {

"use strict";
module.exports = require("date-fns");

/***/ }),

/***/ 5564:
/***/ ((module) => {

"use strict";
module.exports = require("date-fns/locale");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ 6197:
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ }),

/***/ 5641:
/***/ ((module) => {

"use strict";
module.exports = import("react-hook-form");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664,779], () => (__webpack_exec__(924)));
module.exports = __webpack_exports__;

})();