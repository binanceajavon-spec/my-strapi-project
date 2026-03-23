"use strict";
(self["webpackChunkmy_strapi_project"] = self["webpackChunkmy_strapi_project"] || []).push([[7461],{

/***/ 67461
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MagicLinkEE: () => (/* binding */ MagicLinkEE)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69751);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54894);
/* harmony import */ var _index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92129);
/* harmony import */ var _SelectRoles_t6U3MuLd_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52097);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59201);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15126);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63299);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(44633);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(59080);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(79275);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(14718);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(21272);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(82437);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(61535);
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5790);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(12083);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(35223);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(5409);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(74930);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(80219);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(48940);
/* harmony import */ var lodash_defaultsDeep__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(41286);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(33955);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(13426);
/* harmony import */ var lodash_isBoolean__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(84624);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(346);
/* harmony import */ var lodash_isNaN__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(54257);
/* harmony import */ var lodash_toNumber__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(48829);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(51187);
/* harmony import */ var lodash_upperFirst__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(39404);
/* harmony import */ var lodash_fp__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(58692);
/* harmony import */ var lodash_take__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(501);
/* harmony import */ var codemirror5__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(57646);
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(23120);
/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(44414);
/* harmony import */ var markdown_it_abbr__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(25962);
/* harmony import */ var markdown_it_container__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(14664);
/* harmony import */ var markdown_it_deflist__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(42588);
/* harmony import */ var markdown_it_emoji__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(90325);
/* harmony import */ var markdown_it_footnote__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(62785);
/* harmony import */ var markdown_it_ins__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(87443);
/* harmony import */ var markdown_it_mark__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(41032);
/* harmony import */ var markdown_it_sub__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(22957);
/* harmony import */ var markdown_it_sup__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(93179);
/* harmony import */ var highlight_js_styles_solarized_dark_css__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(73055);
/* harmony import */ var codemirror5_addon_display_placeholder__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(15747);
/* harmony import */ var lodash_toString__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(62925);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(26509);
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(32058);
/* harmony import */ var lodash_unset__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(81185);
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(4642);
/* harmony import */ var _useAdminRoles_TJePFZ1V_mjs__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(68699);









































































const MagicLinkEE = ({ registrationToken }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)();
  if (registrationToken) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _SelectRoles_t6U3MuLd_mjs__WEBPACK_IMPORTED_MODULE_3__.a,
      {
        target: `${window.location.origin}${(0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_2__.K)()}/auth/register?registrationToken=${registrationToken}`,
        children: formatMessage({
          id: "app.components.Users.MagicLink.connect",
          defaultMessage: "Copy and share this link to give access to this user"
        })
      }
    );
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SelectRoles_t6U3MuLd_mjs__WEBPACK_IMPORTED_MODULE_3__.a, { target: `${window.location.origin}${(0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_2__.K)()}/auth/login`, children: formatMessage({
    id: "app.components.Users.MagicLink.connect.sso",
    defaultMessage: "Send this link to the user, the first login can be made via a SSO provider."
  }) });
};



/***/ }

}]);