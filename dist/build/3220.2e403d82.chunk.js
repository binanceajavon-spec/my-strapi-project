"use strict";
(self["webpackChunkmy_strapi_project"] = self["webpackChunkmy_strapi_project"] || []).push([[3220],{

/***/ 93220
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminSeatInfoEE: () => (/* binding */ AdminSeatInfoEE)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69751);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68074);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58805);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83997);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79739);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30893);
/* harmony import */ var _strapi_design_system_v2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21610);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(59201);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(68994);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(14595);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(54894);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(82437);
/* harmony import */ var _AuthenticatedApp_uHd_MPEB_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(38682);
/* harmony import */ var _index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(92129);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(21272);
/* harmony import */ var semver_functions_lt__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(55151);
/* harmony import */ var semver_functions_valid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(79077);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(48940);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(80219);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(51187);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(15126);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(63299);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(44633);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(59080);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(79275);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(14718);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(61535);
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(5790);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(12083);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(35223);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(5409);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(74930);
/* harmony import */ var lodash_defaultsDeep__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(41286);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(33955);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(13426);
/* harmony import */ var lodash_isBoolean__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(84624);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(346);
/* harmony import */ var lodash_isNaN__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(54257);
/* harmony import */ var lodash_toNumber__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(48829);
/* harmony import */ var lodash_upperFirst__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(39404);
/* harmony import */ var lodash_fp__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(58692);
/* harmony import */ var lodash_take__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(501);
/* harmony import */ var codemirror5__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(57646);
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(23120);
/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(44414);
/* harmony import */ var markdown_it_abbr__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(25962);
/* harmony import */ var markdown_it_container__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(14664);
/* harmony import */ var markdown_it_deflist__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(42588);
/* harmony import */ var markdown_it_emoji__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(90325);
/* harmony import */ var markdown_it_footnote__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(62785);
/* harmony import */ var markdown_it_ins__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(87443);
/* harmony import */ var markdown_it_mark__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(41032);
/* harmony import */ var markdown_it_sub__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(22957);
/* harmony import */ var markdown_it_sup__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(93179);
/* harmony import */ var highlight_js_styles_solarized_dark_css__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(73055);
/* harmony import */ var codemirror5_addon_display_placeholder__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(15747);
/* harmony import */ var lodash_toString__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(62925);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(26509);
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(32058);
/* harmony import */ var lodash_unset__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(81185);
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(4642);










































































const BILLING_STRAPI_CLOUD_URL = "https://cloud.strapi.io/profile/billing";
const BILLING_SELF_HOSTED_URL = "https://strapi.io/billing/request-seats";
const AdminSeatInfoEE = () => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A)();
  const { settings } = (0,react_redux__WEBPACK_IMPORTED_MODULE_11__/* .useSelector */ .d4)(_AuthenticatedApp_uHd_MPEB_mjs__WEBPACK_IMPORTED_MODULE_12__.s);
  const {
    isLoading: isRBACLoading,
    allowedActions: { canRead, canCreate, canUpdate, canDelete }
  } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_7__/* .useRBAC */ .ec)(settings?.users ?? {});
  const {
    license,
    isError,
    isLoading: isLicenseLoading
  } = (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_13__.m)({
    // TODO: this creates a waterfall which we should avoid to render earlier, but for that
    // we will have to move away from data-fetching hooks to query functions.
    // Short-term we could at least implement a loader, for the user to have visual feedback
    // in case the requests take a while
    enabled: !isRBACLoading && canRead && canCreate && canUpdate && canDelete
  });
  const isLoading = isRBACLoading || isLicenseLoading;
  if (isError || isLoading || !license) {
    return null;
  }
  const { licenseLimitStatus, enforcementUserCount, permittedSeats, isHostedOnStrapiCloud } = license;
  if (!permittedSeats) {
    return null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_1__/* .GridItem */ .E, { col: 6, s: 12, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .Typography */ .o, { variant: "sigma", textColor: "neutral600", children: formatMessage({
      id: "Settings.application.admin-seats",
      defaultMessage: "Admin seats"
    }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Flex */ .s, { gap: 2, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Flex */ .s, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .Typography */ .o, { as: "p", children: formatMessage(
        {
          id: "Settings.application.ee.admin-seats.count",
          defaultMessage: "<text>{enforcementUserCount}</text>/{permittedSeats}"
        },
        {
          permittedSeats,
          enforcementUserCount,
          text: (chunks) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .Typography */ .o,
            {
              fontWeight: "semiBold",
              textColor: enforcementUserCount > permittedSeats ? "danger500" : void 0,
              children: chunks
            }
          )
        }
      ) }) }),
      licenseLimitStatus === "OVER_LIMIT" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .Tooltip */ .m,
        {
          description: formatMessage({
            id: "Settings.application.ee.admin-seats.at-limit-tooltip",
            defaultMessage: "At limit: add seats to invite more users"
          }),
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Icon */ .I,
            {
              width: (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_7__/* .pxToRem */ .a8)(14),
              height: (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_7__/* .pxToRem */ .a8)(14),
              color: "danger500",
              as: _strapi_icons__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _strapi_design_system_v2__WEBPACK_IMPORTED_MODULE_6__/* .Link */ .N,
      {
        href: isHostedOnStrapiCloud ? BILLING_STRAPI_CLOUD_URL : BILLING_SELF_HOSTED_URL,
        isExternal: true,
        endIcon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {}),
        children: formatMessage(
          {
            id: "Settings.application.ee.admin-seats.add-seats",
            defaultMessage: "{isHostedOnStrapiCloud, select, true {Add seats} other {Contact sales}}"
          },
          { isHostedOnStrapiCloud }
        )
      }
    )
  ] });
};



/***/ }

}]);