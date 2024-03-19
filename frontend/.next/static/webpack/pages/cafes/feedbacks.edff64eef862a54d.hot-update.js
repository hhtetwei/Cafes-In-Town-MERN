"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/cafes/feedbacks",{

/***/ "./src/pages/services/cafe.js":
/*!************************************!*\
  !*** ./src/pages/services/cafe.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useCreate: function() { return /* binding */ useCreate; },\n/* harmony export */   useGetAllCafes: function() { return /* binding */ useGetAllCafes; },\n/* harmony export */   useGetAllFeedbacks: function() { return /* binding */ useGetAllFeedbacks; },\n/* harmony export */   useGetCafesDetailsById: function() { return /* binding */ useGetCafesDetailsById; }\n/* harmony export */ });\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/modern/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$(), _s3 = $RefreshSig$();\n\n\nconst getCafes = async ()=>{\n    return fetch(\"\".concat(\"https://cafes-in-town-mern-api.vercel.app/api\", \"/cafes\"), {\n        method: \"GET\"\n    }).then(async (res)=>await res.json());\n};\nconst useGetAllCafes = ()=>{\n    _s();\n    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)({\n        queryFn: ()=>getCafes(),\n        queryKey: [\n            \"cafes\"\n        ]\n    });\n};\n_s(useGetAllCafes, \"4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery\n    ];\n});\nconst getFeedbacks = async ()=>{\n    return fetch(\"\".concat(\"https://cafes-in-town-mern-api.vercel.app/api\", \"/feedbacks\"), {\n        method: \"GET\"\n    }).then(async (res)=>await res.json());\n};\nconst useGetAllFeedbacks = ()=>{\n    _s1();\n    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)({\n        queryFn: ()=>getFeedbacks(),\n        queryKey: [\n            \"feedbacks\"\n        ]\n    });\n};\n_s1(useGetAllFeedbacks, \"4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery\n    ];\n});\nconst create = async (data)=>{\n    return axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"\".concat(\"https://cafes-in-town-mern-api.vercel.app/api\", \"/feedbacks\"), data).then((res)=>{\n        return console.log(res.data);\n    });\n};\nconst useCreate = ()=>{\n    _s2();\n    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)({\n        mutationFn: create\n    });\n};\n_s2(useCreate, \"wwwtpB20p0aLiHIvSy5P98MwIUg=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation\n    ];\n});\nconst getCafesById = async (id)=>{\n    return fetch(\"\".concat(\"https://cafes-in-town-mern-api.vercel.app/api\", \"/cafesDetails/\").concat(id), {\n        method: \"GET\"\n    }).then(async (res)=>await res.json());\n};\nconst useGetCafesDetailsById = ()=>{\n    _s3();\n    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)({\n        queryFn: ()=>getCafesById(),\n        queryKey: [\n            \"cafes\"\n        ]\n    });\n};\n_s3(useGetCafesDetailsById, \"4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvc2VydmljZXMvY2FmZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQThEO0FBQ3BDO0FBRTFCLE1BQU1HLFdBQVc7SUFDZixPQUFPQyxNQUFNLEdBQW1DLE9BQWhDQywrQ0FBK0IsRUFBQyxXQUFTO1FBQ3ZERyxRQUFRO0lBQ1YsR0FBR0MsSUFBSSxDQUFDLE9BQU9DLE1BQVEsTUFBTUEsSUFBSUMsSUFBSTtBQUN2QztBQUVPLE1BQU1DLGlCQUFpQjs7SUFDNUIsT0FBT1gsK0RBQVFBLENBQUM7UUFDZFksU0FBUyxJQUFNVjtRQUNmVyxVQUFVO1lBQUM7U0FBUTtJQUNyQjtBQUNGLEVBQUU7R0FMV0Y7O1FBQ0pYLDJEQUFRQTs7O0FBTWpCLE1BQU1jLGVBQWU7SUFDbkIsT0FBT1gsTUFBTSxHQUFtQyxPQUFoQ0MsK0NBQStCLEVBQUMsZUFBYTtRQUMzREcsUUFBUTtJQUNWLEdBQUdDLElBQUksQ0FBQyxPQUFPQyxNQUFRLE1BQU1BLElBQUlDLElBQUk7QUFDdkM7QUFFTyxNQUFNSyxxQkFBcUI7O0lBQ2hDLE9BQU9mLCtEQUFRQSxDQUFDO1FBQ2RZLFNBQVMsSUFBTUU7UUFDZkQsVUFBVTtZQUFDO1NBQVk7SUFDekI7QUFDRixFQUFFO0lBTFdFOztRQUNKZiwyREFBUUE7OztBQU1qQixNQUFNZ0IsU0FBUyxPQUFPQztJQUNwQixPQUFPaEIsa0RBQ0EsQ0FBQyxHQUFtQyxPQUFoQ0csK0NBQStCLEVBQUMsZUFBYWEsTUFDckRULElBQUksQ0FBQyxDQUFDQztRQUNMLE9BQU9VLFFBQVFDLEdBQUcsQ0FBQ1gsSUFBSVEsSUFBSTtJQUM3QjtBQUNKO0FBRU8sTUFBTUksWUFBWTs7SUFDdkIsT0FBT3RCLGtFQUFXQSxDQUFDO1FBQ2pCdUIsWUFBWU47SUFDZDtBQUNGLEVBQUU7SUFKV0s7O1FBQ0p0Qiw4REFBV0E7OztBQUtwQixNQUFNd0IsZUFBZSxPQUFPQztJQUMxQixPQUFPckIsTUFBTSxHQUFtRHFCLE9BQWhEcEIsK0NBQStCLEVBQUMsa0JBQW1CLE9BQUhvQixLQUFNO1FBQ3BFakIsUUFBUTtJQUNWLEdBQUdDLElBQUksQ0FBQyxPQUFPQyxNQUFRLE1BQU1BLElBQUlDLElBQUk7QUFDdkM7QUFFTyxNQUFNZSx5QkFBeUI7O0lBQ3BDLE9BQU96QiwrREFBUUEsQ0FBQztRQUNkWSxTQUFTLElBQU1XO1FBQ2ZWLFVBQVU7WUFBQztTQUFRO0lBQ3JCO0FBQ0YsRUFBRTtJQUxXWTs7UUFDSnpCLDJEQUFRQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvc2VydmljZXMvY2FmZS5qcz8wNGRlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeSB9IGZyb20gJ0B0YW5zdGFjay9yZWFjdC1xdWVyeSc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBnZXRDYWZlcyA9IGFzeW5jICgpID0+IHtcbiAgcmV0dXJuIGZldGNoKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkx9L2NhZmVzYCwge1xuICAgIG1ldGhvZDogJ0dFVCcsXG4gIH0pLnRoZW4oYXN5bmMgKHJlcykgPT4gYXdhaXQgcmVzLmpzb24oKSk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlR2V0QWxsQ2FmZXMgPSAoKSA9PiB7XG4gIHJldHVybiB1c2VRdWVyeSh7XG4gICAgcXVlcnlGbjogKCkgPT4gZ2V0Q2FmZXMoKSxcbiAgICBxdWVyeUtleTogWydjYWZlcyddLFxuICB9KTtcbn07XG5cbmNvbnN0IGdldEZlZWRiYWNrcyA9IGFzeW5jICgpID0+IHtcbiAgcmV0dXJuIGZldGNoKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkx9L2ZlZWRiYWNrc2AsIHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICB9KS50aGVuKGFzeW5jIChyZXMpID0+IGF3YWl0IHJlcy5qc29uKCkpO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUdldEFsbEZlZWRiYWNrcyA9ICgpID0+IHtcbiAgcmV0dXJuIHVzZVF1ZXJ5KHtcbiAgICBxdWVyeUZuOiAoKSA9PiBnZXRGZWVkYmFja3MoKSxcbiAgICBxdWVyeUtleTogWydmZWVkYmFja3MnXSxcbiAgfSk7XG59O1xuXG5jb25zdCBjcmVhdGUgPSBhc3luYyAoZGF0YSkgPT4ge1xuICByZXR1cm4gYXhpb3NcbiAgICAucG9zdChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMfS9mZWVkYmFja3NgLCBkYXRhKVxuICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlQ3JlYXRlID0gKCkgPT4ge1xuICByZXR1cm4gdXNlTXV0YXRpb24oe1xuICAgIG11dGF0aW9uRm46IGNyZWF0ZSxcbiAgfSk7XG59O1xuXG5jb25zdCBnZXRDYWZlc0J5SWQgPSBhc3luYyAoaWQpID0+IHtcbiAgcmV0dXJuIGZldGNoKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkx9L2NhZmVzRGV0YWlscy8ke2lkfWAsIHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICB9KS50aGVuKGFzeW5jIChyZXMpID0+IGF3YWl0IHJlcy5qc29uKCkpO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUdldENhZmVzRGV0YWlsc0J5SWQgPSAoKSA9PiB7XG4gIHJldHVybiB1c2VRdWVyeSh7XG4gICAgcXVlcnlGbjogKCkgPT4gZ2V0Q2FmZXNCeUlkKCksXG4gICAgcXVlcnlLZXk6IFsnY2FmZXMnXSxcbiAgfSk7XG59O1xuIl0sIm5hbWVzIjpbInVzZU11dGF0aW9uIiwidXNlUXVlcnkiLCJheGlvcyIsImdldENhZmVzIiwiZmV0Y2giLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsIm1ldGhvZCIsInRoZW4iLCJyZXMiLCJqc29uIiwidXNlR2V0QWxsQ2FmZXMiLCJxdWVyeUZuIiwicXVlcnlLZXkiLCJnZXRGZWVkYmFja3MiLCJ1c2VHZXRBbGxGZWVkYmFja3MiLCJjcmVhdGUiLCJkYXRhIiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VDcmVhdGUiLCJtdXRhdGlvbkZuIiwiZ2V0Q2FmZXNCeUlkIiwiaWQiLCJ1c2VHZXRDYWZlc0RldGFpbHNCeUlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/services/cafe.js\n"));

/***/ })

});