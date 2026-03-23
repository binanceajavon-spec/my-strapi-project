(self["webpackChunkmy_strapi_project"] = self["webpackChunkmy_strapi_project"] || []).push([[1339],{

/***/ 29327
(module) {

function baseIndexOfWith(array, value, fromIndex, comparator) {
  var index = fromIndex - 1, length = array.length;
  while (++index < length) {
    if (comparator(array[index], value)) {
      return index;
    }
  }
  return -1;
}
module.exports = baseIndexOfWith;


/***/ },

/***/ 20920
(module, __unused_webpack_exports, __webpack_require__) {

var arrayMap = __webpack_require__(65483), baseIndexOf = __webpack_require__(80151), baseIndexOfWith = __webpack_require__(29327), baseUnary = __webpack_require__(75070), copyArray = __webpack_require__(76299);
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function basePullAll(array, values, iteratee, comparator) {
  var indexOf = comparator ? baseIndexOfWith : baseIndexOf, index = -1, length = values.length, seen = array;
  if (array === values) {
    values = copyArray(values);
  }
  if (iteratee) {
    seen = arrayMap(array, baseUnary(iteratee));
  }
  while (++index < length) {
    var fromIndex = 0, value = values[index], computed = iteratee ? iteratee(value) : value;
    while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
      if (seen !== array) {
        splice.call(seen, fromIndex, 1);
      }
      splice.call(array, fromIndex, 1);
    }
  }
  return array;
}
module.exports = basePullAll;


/***/ },

/***/ 34542
(module, __unused_webpack_exports, __webpack_require__) {

var arrayMap = __webpack_require__(65483), baseIteratee = __webpack_require__(67734), baseMap = __webpack_require__(29884), isArray = __webpack_require__(4642);
function map(collection, iteratee) {
  var func = isArray(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee, 3));
}
module.exports = map;


/***/ },

/***/ 92173
(module, __unused_webpack_exports, __webpack_require__) {

var baseRest = __webpack_require__(39226), pullAll = __webpack_require__(76610);
var pull = baseRest(pullAll);
module.exports = pull;


/***/ },

/***/ 76610
(module, __unused_webpack_exports, __webpack_require__) {

var basePullAll = __webpack_require__(20920);
function pullAll(array, values) {
  return array && array.length && values && values.length ? basePullAll(array, values) : array;
}
module.exports = pullAll;


/***/ },

/***/ 61468
(module, __unused_webpack_exports, __webpack_require__) {

var baseSlice = __webpack_require__(52196);
function tail(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseSlice(array, 1, length) : [];
}
module.exports = tail;


/***/ },

/***/ 71339
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProtectedEditView: () => (/* binding */ ProtectedEditView),
/* harmony export */   w: () => (/* binding */ EditView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69751);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21272);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57237);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44604);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60888);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(94061);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85963);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4181);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(90151);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(68074);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4198);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(55356);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(38413);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(83997);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(30893);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(59201);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(61535);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(54894);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(17703);
/* harmony import */ var _index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(92129);
/* harmony import */ var _apiTokens_ieIZrY_I_mjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(35160);
/* harmony import */ var _constants_fJt30IoY_mjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(99831);
/* harmony import */ var _TokenTypeSelect_d7r9RfHH_mjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(12123);
/* harmony import */ var _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(89032);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(54514);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(20415);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(34542);
/* harmony import */ var lodash_tail__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(61468);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(47610);
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(24092);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(12083);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(88761);
/* harmony import */ var lodash_pull__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(92173);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(15126);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(63299);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(44633);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(59080);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(79275);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(14718);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(82437);
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(5790);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(35223);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(5409);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(74930);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(80219);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(48940);
/* harmony import */ var lodash_defaultsDeep__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(41286);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(33955);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(13426);
/* harmony import */ var lodash_isBoolean__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(84624);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(346);
/* harmony import */ var lodash_isNaN__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(54257);
/* harmony import */ var lodash_toNumber__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(48829);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(51187);
/* harmony import */ var lodash_upperFirst__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(39404);
/* harmony import */ var lodash_fp__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(58692);
/* harmony import */ var lodash_take__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(501);
/* harmony import */ var codemirror5__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(57646);
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(23120);
/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(44414);
/* harmony import */ var markdown_it_abbr__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(25962);
/* harmony import */ var markdown_it_container__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(14664);
/* harmony import */ var markdown_it_deflist__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(42588);
/* harmony import */ var markdown_it_emoji__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(90325);
/* harmony import */ var markdown_it_footnote__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(62785);
/* harmony import */ var markdown_it_ins__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(87443);
/* harmony import */ var markdown_it_mark__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(41032);
/* harmony import */ var markdown_it_sub__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(22957);
/* harmony import */ var markdown_it_sup__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(93179);
/* harmony import */ var highlight_js_styles_solarized_dark_css__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(73055);
/* harmony import */ var codemirror5_addon_display_placeholder__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(15747);
/* harmony import */ var lodash_toString__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(62925);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(26509);
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(32058);
/* harmony import */ var lodash_unset__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(81185);
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(4642);
















































































const contentApiService = _index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_19__.n.injectEndpoints({
  endpoints: (builder) => ({
    getPermissions: builder.query({
      query: () => "/admin/content-api/permissions",
      transformResponse: (response) => response.data
    }),
    getRoutes: builder.query({
      query: () => "/admin/content-api/routes",
      transformResponse: (response) => response.data
    })
  }),
  overrideExisting: false
});
const { useGetPermissionsQuery, useGetRoutesQuery } = contentApiService;
const [ApiTokenPermissionsContextProvider, useApiTokenPermissionsContext] = (0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_23__/* .createContext */ .q)("ApiTokenPermissionsContext");
const ApiTokenPermissionsProvider = ({
  children,
  ...rest
}) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ApiTokenPermissionsContextProvider, { ...rest, children });
};
const useApiTokenPermissions = () => useApiTokenPermissionsContext("useApiTokenPermissions");
const FormApiTokenContainer = ({
  errors = {},
  onChange,
  canEditInputs,
  isCreating,
  values = {},
  apiToken = {},
  onDispatch,
  setHasChangedPermissions
}) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A)();
  const handleChangeSelectApiTokenType = ({ target: { value } }) => {
    setHasChangedPermissions(false);
    if (value === "full-access") {
      onDispatch({
        type: "SELECT_ALL_ACTIONS"
      });
    }
    if (value === "read-only") {
      onDispatch({
        type: "ON_CHANGE_READ_ONLY"
      });
    }
  };
  const typeOptions = [
    {
      value: "read-only",
      label: {
        id: "Settings.tokens.types.read-only",
        defaultMessage: "Read-only"
      }
    },
    {
      value: "full-access",
      label: {
        id: "Settings.tokens.types.full-access",
        defaultMessage: "Full access"
      }
    },
    {
      value: "custom",
      label: {
        id: "Settings.tokens.types.custom",
        defaultMessage: "Custom"
      }
    }
  ];
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .a,
    {
      background: "neutral0",
      hasRadius: true,
      shadow: "filterShadow",
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 7,
      paddingRight: 7,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_13__/* .Flex */ .s, { direction: "column", alignItems: "stretch", gap: 4, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_14__/* .Typography */ .o, { variant: "delta", as: "h2", children: formatMessage({
          id: "global.details",
          defaultMessage: "Details"
        }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .Grid */ .x, { gap: 5, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_9__/* .GridItem */ .E, { col: 6, xs: 12, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _TokenTypeSelect_d7r9RfHH_mjs__WEBPACK_IMPORTED_MODULE_22__.T,
            {
              error: errors["name"],
              value: values["name"],
              canEditInputs,
              onChange
            }
          ) }, "name"),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_9__/* .GridItem */ .E, { col: 6, xs: 12, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _TokenTypeSelect_d7r9RfHH_mjs__WEBPACK_IMPORTED_MODULE_22__.a,
            {
              error: errors["description"],
              value: values["description"],
              canEditInputs,
              onChange
            }
          ) }, "description"),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_9__/* .GridItem */ .E, { col: 6, xs: 12, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _TokenTypeSelect_d7r9RfHH_mjs__WEBPACK_IMPORTED_MODULE_22__.L,
            {
              isCreating,
              error: errors["lifespan"],
              value: values["lifespan"],
              onChange,
              token: apiToken
            }
          ) }, "lifespan"),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_9__/* .GridItem */ .E, { col: 6, xs: 12, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _TokenTypeSelect_d7r9RfHH_mjs__WEBPACK_IMPORTED_MODULE_22__.b,
            {
              value: values["type"],
              error: errors["type"],
              label: {
                id: "Settings.tokens.form.type",
                defaultMessage: "Token type"
              },
              onChange: (value) => {
                handleChangeSelectApiTokenType({ target: { value } });
                onChange({ target: { name: "type", value } });
              },
              options: typeOptions,
              canEditInputs
            }
          ) }, "type")
        ] })
      ] })
    }
  );
};
const LoadingView = ({ apiTokenName = null }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A)();
  (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_15__/* .useFocusWhenNavigate */ .L4)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_12__/* .Main */ .g, { "aria-busy": "true", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_15__/* .SettingsPageTitle */ .x7, { name: "API Tokens" }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _strapi_design_system__WEBPACK_IMPORTED_MODULE_11__/* .HeaderLayout */ .Q,
      {
        primaryAction: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .Button */ .$, { disabled: true, startIcon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A, {}), type: "button", size: "L", children: formatMessage({ id: "global.save", defaultMessage: "Save" }) }),
        title: apiTokenName || formatMessage({
          id: "Settings.apiTokens.createPage.title",
          defaultMessage: "Create API Token"
        })
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_10__/* .ContentLayout */ .s, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_15__/* .LoadingIndicatorPage */ .Bl, {}) })
  ] });
};
const getMethodColor = (verb) => {
  switch (verb) {
    case "POST": {
      return {
        text: "success600",
        border: "success200",
        background: "success100"
      };
    }
    case "GET": {
      return {
        text: "secondary600",
        border: "secondary200",
        background: "secondary100"
      };
    }
    case "PUT": {
      return {
        text: "warning600",
        border: "warning200",
        background: "warning100"
      };
    }
    case "DELETE": {
      return {
        text: "danger600",
        border: "danger200",
        background: "danger100"
      };
    }
    default: {
      return {
        text: "neutral600",
        border: "neutral200",
        background: "neutral100"
      };
    }
  }
};
const MethodBox = (0,styled_components__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Ay)((0,_strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .a))`
  margin: -1px;
  border-radius: ${({ theme }) => theme.spaces[1]} 0 0 ${({ theme }) => theme.spaces[1]};
`;
const BoundRoute = ({
  route = {
    handler: "Nocontroller.error",
    method: "GET",
    path: "/there-is-no-path"
  }
}) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A)();
  const { method, handler: title, path } = route;
  const formattedRoute = path ? lodash_tail__WEBPACK_IMPORTED_MODULE_27__(path.split("/")) : [];
  const [controller = "", action = ""] = title ? title.split(".") : [];
  const colors = getMethodColor(route.method);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_13__/* .Flex */ .s, { direction: "column", alignItems: "stretch", gap: 2, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_14__/* .Typography */ .o, { variant: "delta", as: "h3", children: [
      formatMessage({
        id: "Settings.apiTokens.createPage.BoundRoute.title",
        defaultMessage: "Bound route to"
      }),
      "\xA0",
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: controller }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_14__/* .Typography */ .o, { variant: "delta", textColor: "primary600", children: [
        ".",
        action
      ] })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_13__/* .Flex */ .s, { hasRadius: true, background: "neutral0", borderColor: "neutral200", gap: 0, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MethodBox, { background: colors.background, borderColor: colors.border, padding: 2, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_14__/* .Typography */ .o, { fontWeight: "bold", textColor: colors.text, children: method }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .a, { paddingLeft: 2, paddingRight: 2, children: lodash_map__WEBPACK_IMPORTED_MODULE_26__(formattedRoute, (value) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_14__/* .Typography */ .o, { textColor: value.includes(":") ? "neutral600" : "neutral900", children: [
        "/",
        value
      ] }, value)) })
    ] })
  ] });
};
const ActionBoundRoutes = () => {
  const {
    value: { selectedAction, routes }
  } = useApiTokenPermissions();
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A)();
  const actionSection = selectedAction?.split(".")[0];
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_9__/* .GridItem */ .E,
    {
      col: 5,
      background: "neutral150",
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 7,
      paddingRight: 7,
      style: { minHeight: "100%" },
      children: selectedAction ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_13__/* .Flex */ .s, { direction: "column", alignItems: "stretch", gap: 2, children: actionSection && actionSection in routes && routes[actionSection].map((route) => {
        return route.config.auth?.scope?.includes(selectedAction) || route.handler === selectedAction ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BoundRoute, { route }, route.handler) : null;
      }) }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_13__/* .Flex */ .s, { direction: "column", alignItems: "stretch", gap: 2, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_14__/* .Typography */ .o, { variant: "delta", as: "h3", children: formatMessage({
          id: "Settings.apiTokens.createPage.permissions.header.title",
          defaultMessage: "Advanced settings"
        }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_14__/* .Typography */ .o, { as: "p", textColor: "neutral600", children: formatMessage({
          id: "Settings.apiTokens.createPage.permissions.header.hint",
          defaultMessage: "Select the application's actions or the plugin's actions and click on the cog icon to display the bound route"
        }) })
      ] })
    }
  );
};
const activeCheckboxWrapperStyles = (0,styled_components__WEBPACK_IMPORTED_MODULE_28__/* .css */ .AH)`
  background: ${(props) => props.theme.colors.primary100};
  svg {
    opacity: 1;
  }
`;
const CheckboxWrapper = (0,styled_components__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Ay)((0,_strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .a))`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    opacity: 0;
    path {
      fill: ${(props) => props.theme.colors.primary600};
    }
  }

  /* Show active style both on hover and when the action is selected */
  ${(props) => props.isActive && activeCheckboxWrapperStyles}
  &:hover {
    ${activeCheckboxWrapperStyles}
  }
`;
const Border = styled_components__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Ay.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({ theme }) => theme.colors.neutral150};
`;
const CollapsableContentType = ({
  controllers = [],
  label,
  orderNumber = 0,
  disabled = false,
  onExpanded = () => null,
  indexExpandendCollapsedContent = null
}) => {
  const {
    value: { onChangeSelectAll, onChange, selectedActions, setSelectedAction, selectedAction }
  } = useApiTokenPermissions();
  const [expanded, setExpanded] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A)();
  const handleExpandedAccordion = () => {
    setExpanded((s) => !s);
    onExpanded(orderNumber);
  };
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    if (indexExpandendCollapsedContent !== null && indexExpandendCollapsedContent !== orderNumber && expanded) {
      setExpanded(false);
    }
  }, [indexExpandendCollapsedContent, orderNumber, expanded]);
  const isActionSelected = (actionId) => actionId === selectedAction;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Accordion */ .n,
    {
      expanded,
      onToggle: handleExpandedAccordion,
      variant: orderNumber % 2 ? "primary" : "secondary",
      children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .AccordionToggle */ .P, { title: lodash_capitalize__WEBPACK_IMPORTED_MODULE_29__(label) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .AccordionContent */ .u, { children: controllers?.map((controller) => {
          const allActionsSelected = controller.actions.every(
            (action) => selectedActions.includes(action.actionId)
          );
          const someActionsSelected = controller.actions.some(
            (action) => selectedActions.includes(action.actionId)
          );
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .a, { children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_13__/* .Flex */ .s, { justifyContent: "space-between", alignItems: "center", padding: 4, children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .a, { paddingRight: 4, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_14__/* .Typography */ .o, { variant: "sigma", textColor: "neutral600", children: controller?.controller }) }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Border, {}),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .a, { paddingLeft: 4, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .Checkbox */ .S,
                {
                  value: allActionsSelected,
                  indeterminate: !allActionsSelected && someActionsSelected,
                  onValueChange: () => {
                    onChangeSelectAll({ target: { value: [...controller.actions] } });
                  },
                  disabled,
                  children: formatMessage({ id: "app.utils.select-all", defaultMessage: "Select all" })
                }
              ) })
            ] }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .Grid */ .x, { gap: 4, padding: 4, children: controller?.actions && controller?.actions.map((action) => {
              return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_9__/* .GridItem */ .E, { col: 6, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                CheckboxWrapper,
                {
                  isActive: isActionSelected(action.actionId),
                  padding: 2,
                  hasRadius: true,
                  children: [
                    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .Checkbox */ .S,
                      {
                        value: selectedActions.includes(action.actionId),
                        name: action.actionId,
                        onValueChange: () => {
                          onChange({ target: { value: action.actionId } });
                        },
                        disabled,
                        children: action.action
                      }
                    ),
                    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      "button",
                      {
                        type: "button",
                        "data-testid": "action-cog",
                        onClick: () => setSelectedAction({ target: { value: action.actionId } }),
                        style: { display: "inline-flex", alignItems: "center" },
                        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A, {})
                      }
                    )
                  ]
                }
              ) }, action.actionId);
            }) })
          ] }, `${label}.${controller?.controller}`);
        }) })
      ]
    }
  );
};
const ContentTypesSection = ({ section = null, ...props }) => {
  const [indexExpandedCollpsedContent, setIndexExpandedCollpsedContent] = react__WEBPACK_IMPORTED_MODULE_1__.useState(null);
  const handleExpandedCollpsedContentIndex = (index) => setIndexExpandedCollpsedContent(index);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .a, { padding: 4, background: "neutral0", children: section && section.map((api, index) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    CollapsableContentType,
    {
      label: api.label,
      controllers: api.controllers,
      orderNumber: index,
      indexExpandendCollapsedContent: indexExpandedCollpsedContent,
      onExpanded: handleExpandedCollpsedContentIndex,
      ...props
    },
    api.apiId
  )) });
};
const Permissions = ({ ...props }) => {
  const {
    value: { data }
  } = useApiTokenPermissions();
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .Grid */ .x, { gap: 0, shadow: "filterShadow", hasRadius: true, background: "neutral0", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_9__/* .GridItem */ .E, { col: 7, paddingTop: 6, paddingBottom: 6, paddingLeft: 7, paddingRight: 7, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_13__/* .Flex */ .s, { direction: "column", alignItems: "stretch", gap: 2, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_14__/* .Typography */ .o, { variant: "delta", as: "h2", children: formatMessage({
          id: "Settings.apiTokens.createPage.permissions.title",
          defaultMessage: "Permissions"
        }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_14__/* .Typography */ .o, { as: "p", textColor: "neutral600", children: formatMessage({
          id: "Settings.apiTokens.createPage.permissions.description",
          defaultMessage: "Only actions bound by a route are listed below."
        }) })
      ] }),
      data?.permissions && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ContentTypesSection, { section: data?.permissions, ...props })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ActionBoundRoutes, {})
  ] });
};
const schema = yup__WEBPACK_IMPORTED_MODULE_30__/* .object */ .Ik().shape({
  name: yup__WEBPACK_IMPORTED_MODULE_30__/* .string */ .Yj().max(100).required(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_15__/* .translatedErrors */ .iW.required),
  type: yup__WEBPACK_IMPORTED_MODULE_30__/* .string */ .Yj().oneOf(["read-only", "full-access", "custom"]).required(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_15__/* .translatedErrors */ .iW.required),
  description: yup__WEBPACK_IMPORTED_MODULE_30__/* .string */ .Yj().nullable(),
  lifespan: yup__WEBPACK_IMPORTED_MODULE_30__/* .number */ .ai().integer().min(0).nullable().defined(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_15__/* .translatedErrors */ .iW.required)
});
const transformPermissionsData = (data) => {
  const layout = {
    allActionsIds: [],
    permissions: []
  };
  layout.permissions = Object.entries(data).map(([apiId, permission]) => ({
    apiId,
    label: apiId.split("::")[1],
    controllers: Object.keys(permission.controllers).map((controller) => ({
      controller,
      actions: controller in permission.controllers ? permission.controllers[controller].map((action) => {
        const actionId = `${apiId}.${controller}.${action}`;
        if (apiId.includes("api::")) {
          layout.allActionsIds.push(actionId);
        }
        return {
          action,
          actionId
        };
      }).flat() : []
    })).flat()
  }));
  return layout;
};
const initialState = {
  data: {
    allActionsIds: [],
    permissions: []
  },
  routes: {},
  selectedAction: "",
  selectedActions: []
};
const reducer = (state, action) => (0,immer__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Ay)(state, (draftState) => {
  switch (action.type) {
    case "ON_CHANGE": {
      if (draftState.selectedActions.includes(action.value)) {
        lodash_pull__WEBPACK_IMPORTED_MODULE_32__(draftState.selectedActions, action.value);
      } else {
        draftState.selectedActions.push(action.value);
      }
      break;
    }
    case "SELECT_ALL_IN_PERMISSION": {
      const areAllSelected = action.value.every(
        (item) => draftState.selectedActions.includes(item.actionId)
      );
      if (areAllSelected) {
        action.value.forEach((item) => {
          lodash_pull__WEBPACK_IMPORTED_MODULE_32__(draftState.selectedActions, item.actionId);
        });
      } else {
        action.value.forEach((item) => {
          draftState.selectedActions.push(item.actionId);
        });
      }
      break;
    }
    case "SELECT_ALL_ACTIONS": {
      draftState.selectedActions = [...draftState.data.allActionsIds];
      break;
    }
    case "ON_CHANGE_READ_ONLY": {
      const onlyReadOnlyActions = draftState.data.allActionsIds.filter(
        (actionId) => actionId.includes("find") || actionId.includes("findOne")
      );
      draftState.selectedActions = [...onlyReadOnlyActions];
      break;
    }
    case "UPDATE_PERMISSIONS_LAYOUT": {
      draftState.data = transformPermissionsData(action.value);
      break;
    }
    case "UPDATE_ROUTES": {
      draftState.routes = { ...action.value };
      break;
    }
    case "UPDATE_PERMISSIONS": {
      draftState.selectedActions = [...action.value];
      break;
    }
    case "SET_SELECTED_ACTION": {
      draftState.selectedAction = action.value;
      break;
    }
    default:
      return draftState;
  }
});
const EditView = () => {
  (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_15__/* .useFocusWhenNavigate */ .L4)();
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A)();
  const toggleNotification = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_15__/* .useNotification */ .hN)();
  const { lockApp, unlockApp } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_15__/* .useOverlayBlocker */ .MA)();
  const { state: locationState } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_18__/* .useLocation */ .zy)();
  const permissions = (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_19__.j)((state2) => state2.admin_app.permissions);
  const [apiToken, setApiToken] = react__WEBPACK_IMPORTED_MODULE_1__.useState(
    locationState?.apiToken?.accessKey ? {
      ...locationState.apiToken
    } : null
  );
  const { trackUsage } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_15__/* .useTracking */ .z1)();
  const { setCurrentStep } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_15__/* .useGuidedTour */ .Cx)();
  const {
    allowedActions: { canCreate, canUpdate, canRegenerate }
  } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_15__/* .useRBAC */ .ec)(permissions.settings?.["api-tokens"]);
  const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_1__.useReducer(reducer, initialState);
  const match = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_18__/* .useRouteMatch */ .W5)("/settings/api-tokens/:id");
  const id = match?.params?.id;
  const isCreating = id === "create";
  const {
    _unstableFormatAPIError: formatAPIError,
    _unstableFormatValidationErrors: formatValidtionErrors
  } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_15__/* .useAPIErrorHandler */ .wq)();
  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_18__/* .useHistory */ .W6)();
  const contentAPIPermissionsQuery = useGetPermissionsQuery();
  const contentAPIRoutesQuery = useGetRoutesQuery();
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    if (contentAPIPermissionsQuery.error) {
      toggleNotification({
        type: "warning",
        message: formatAPIError(contentAPIPermissionsQuery.error)
      });
    }
  }, [contentAPIPermissionsQuery.error, formatAPIError, toggleNotification]);
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    if (contentAPIRoutesQuery.error) {
      toggleNotification({
        type: "warning",
        message: formatAPIError(contentAPIRoutesQuery.error)
      });
    }
  }, [contentAPIRoutesQuery.error, formatAPIError, toggleNotification]);
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    if (contentAPIPermissionsQuery.data) {
      dispatch({
        type: "UPDATE_PERMISSIONS_LAYOUT",
        value: contentAPIPermissionsQuery.data
      });
    }
  }, [contentAPIPermissionsQuery.data]);
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    if (contentAPIRoutesQuery.data) {
      dispatch({
        type: "UPDATE_ROUTES",
        value: contentAPIRoutesQuery.data
      });
    }
  }, [contentAPIRoutesQuery.data]);
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    if (apiToken) {
      if (apiToken.type === "read-only") {
        dispatch({
          type: "ON_CHANGE_READ_ONLY"
        });
      }
      if (apiToken.type === "full-access") {
        dispatch({
          type: "SELECT_ALL_ACTIONS"
        });
      }
      if (apiToken.type === "custom") {
        dispatch({
          type: "UPDATE_PERMISSIONS",
          value: apiToken?.permissions
        });
      }
    }
  }, [apiToken]);
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    trackUsage(isCreating ? "didAddTokenFromList" : "didEditTokenFromList", {
      tokenType: _constants_fJt30IoY_mjs__WEBPACK_IMPORTED_MODULE_21__.A
    });
  }, [isCreating, trackUsage]);
  const { data, error, isLoading } = (0,_apiTokens_ieIZrY_I_mjs__WEBPACK_IMPORTED_MODULE_20__.b)(id, {
    skip: !id || isCreating || !!apiToken
  });
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    if (error) {
      toggleNotification({
        type: "warning",
        message: formatAPIError(error)
      });
    }
  }, [error, formatAPIError, toggleNotification]);
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    if (data) {
      setApiToken(data);
      if (data.type === "read-only") {
        dispatch({
          type: "ON_CHANGE_READ_ONLY"
        });
      }
      if (data.type === "full-access") {
        dispatch({
          type: "SELECT_ALL_ACTIONS"
        });
      }
      if (data.type === "custom") {
        dispatch({
          type: "UPDATE_PERMISSIONS",
          value: data?.permissions
        });
      }
    }
  }, [data]);
  const [createToken] = (0,_apiTokens_ieIZrY_I_mjs__WEBPACK_IMPORTED_MODULE_20__.c)();
  const [updateToken] = (0,_apiTokens_ieIZrY_I_mjs__WEBPACK_IMPORTED_MODULE_20__.d)();
  const handleSubmit = async (body, formik) => {
    trackUsage(isCreating ? "willCreateToken" : "willEditToken", {
      tokenType: _constants_fJt30IoY_mjs__WEBPACK_IMPORTED_MODULE_21__.A
    });
    lockApp();
    try {
      if (isCreating) {
        const res = await createToken({
          ...body,
          // lifespan must be "null" for unlimited (0 would mean instantly expired and isn't accepted)
          lifespan: body?.lifespan || null,
          permissions: body.type === "custom" ? state.selectedActions : null
        });
        if ("error" in res) {
          if ((0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_19__.x)(res.error) && res.error.name === "ValidationError") {
            formik.setErrors(formatValidtionErrors(res.error));
          } else {
            toggleNotification({
              type: "warning",
              message: formatAPIError(res.error)
            });
          }
          return;
        }
        toggleNotification({
          type: "success",
          message: formatMessage({
            id: "notification.success.apitokencreated",
            defaultMessage: "API Token successfully created"
          })
        });
        trackUsage("didCreateToken", {
          type: res.data.type,
          tokenType: _constants_fJt30IoY_mjs__WEBPACK_IMPORTED_MODULE_21__.A
        });
        history.replace(`/settings/api-tokens/${res.data.id}`, { apiToken: res.data });
        setCurrentStep("apiTokens.success");
      } else {
        const res = await updateToken({
          id,
          name: body.name,
          description: body.description,
          type: body.type,
          permissions: body.type === "custom" ? state.selectedActions : null
        });
        if ("error" in res) {
          if ((0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_19__.x)(res.error) && res.error.name === "ValidationError") {
            formik.setErrors(formatValidtionErrors(res.error));
          } else {
            toggleNotification({
              type: "warning",
              message: formatAPIError(res.error)
            });
          }
          return;
        }
        toggleNotification({
          type: "success",
          message: formatMessage({
            id: "notification.success.apitokenedited",
            defaultMessage: "API Token successfully edited"
          })
        });
        trackUsage("didEditToken", {
          type: res.data.type,
          tokenType: _constants_fJt30IoY_mjs__WEBPACK_IMPORTED_MODULE_21__.A
        });
      }
    } catch {
      toggleNotification({
        type: "warning",
        message: {
          id: "notification.error",
          defaultMessage: "Something went wrong"
        }
      });
    } finally {
      unlockApp();
    }
  };
  const [hasChangedPermissions, setHasChangedPermissions] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
  const handleChangeCheckbox = ({
    target: { value }
  }) => {
    setHasChangedPermissions(true);
    dispatch({
      type: "ON_CHANGE",
      value
    });
  };
  const handleChangeSelectAllCheckbox = ({
    target: { value }
  }) => {
    setHasChangedPermissions(true);
    dispatch({
      type: "SELECT_ALL_IN_PERMISSION",
      value
    });
  };
  const setSelectedAction = ({
    target: { value }
  }) => {
    dispatch({
      type: "SET_SELECTED_ACTION",
      value
    });
  };
  const providerValue = {
    ...state,
    onChange: handleChangeCheckbox,
    onChangeSelectAll: handleChangeSelectAllCheckbox,
    setSelectedAction
  };
  const canEditInputs = canUpdate && !isCreating || canCreate && isCreating;
  if (isLoading) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(LoadingView, { apiTokenName: apiToken?.name });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ApiTokenPermissionsProvider, { value: providerValue, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_12__/* .Main */ .g, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_15__/* .SettingsPageTitle */ .x7, { name: "API Tokens" }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      formik__WEBPACK_IMPORTED_MODULE_16__/* .Formik */ .l1,
      {
        validationSchema: schema,
        validateOnChange: false,
        initialValues: {
          name: apiToken?.name || "",
          description: apiToken?.description || "",
          type: apiToken?.type,
          lifespan: apiToken?.lifespan
        },
        enableReinitialize: true,
        onSubmit: (body, actions) => handleSubmit(body, actions),
        children: ({ errors, handleChange, isSubmitting, values, setFieldValue }) => {
          if (hasChangedPermissions && values?.type !== "custom") {
            setFieldValue("type", "custom");
          }
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_15__/* .Form */ .lV, { children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _TokenTypeSelect_d7r9RfHH_mjs__WEBPACK_IMPORTED_MODULE_22__.F,
              {
                backUrl: "/settings/api-tokens",
                title: {
                  id: "Settings.apiTokens.createPage.title",
                  defaultMessage: "Create API Token"
                },
                token: apiToken,
                setToken: setApiToken,
                canEditInputs,
                canRegenerate,
                isSubmitting,
                regenerateUrl: "/admin/api-tokens/"
              }
            ),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_10__/* .ContentLayout */ .s, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_13__/* .Flex */ .s, { direction: "column", alignItems: "stretch", gap: 6, children: [
              Boolean(apiToken?.name) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TokenTypeSelect_d7r9RfHH_mjs__WEBPACK_IMPORTED_MODULE_22__.c, { token: apiToken?.accessKey, tokenType: _constants_fJt30IoY_mjs__WEBPACK_IMPORTED_MODULE_21__.A }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                FormApiTokenContainer,
                {
                  errors,
                  onChange: handleChange,
                  canEditInputs,
                  isCreating,
                  values,
                  apiToken,
                  onDispatch: dispatch,
                  setHasChangedPermissions
                }
              ),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                Permissions,
                {
                  disabled: !canEditInputs || values?.type === "read-only" || values?.type === "full-access"
                }
              )
            ] }) })
          ] });
        }
      }
    )
  ] }) });
};
const ProtectedEditView = () => {
  const permissions = (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_19__.j)(
    (state) => state.admin_app.permissions.settings?.["api-tokens"].read
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_15__/* .CheckPagePermissions */ .kz, { permissions, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(EditView, {}) });
};



/***/ },

/***/ 35160
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ useDeleteAPITokenMutation),
/* harmony export */   b: () => (/* binding */ useGetAPITokenQuery),
/* harmony export */   c: () => (/* binding */ useCreateAPITokenMutation),
/* harmony export */   d: () => (/* binding */ useUpdateAPITokenMutation),
/* harmony export */   u: () => (/* binding */ useGetAPITokensQuery)
/* harmony export */ });
/* harmony import */ var _index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92129);

const transferTokenService = _index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_0__.n.injectEndpoints({
  endpoints: (builder) => ({
    getAPITokens: builder.query({
      query: () => "/admin/api-tokens",
      transformResponse: (response) => response.data,
      providesTags: (res, _err) => [
        ...res?.map(({ id }) => ({ type: "ApiToken", id })) ?? [],
        { type: "ApiToken", id: "LIST" }
      ]
    }),
    getAPIToken: builder.query({
      query: (id) => `/admin/api-tokens/${id}`,
      transformResponse: (response) => response.data,
      providesTags: (res, _err, id) => [{ type: "ApiToken", id }]
    }),
    createAPIToken: builder.mutation({
      query: (body) => ({
        url: "/admin/api-tokens",
        method: "POST",
        data: body
      }),
      transformResponse: (response) => response.data,
      invalidatesTags: [{ type: "ApiToken", id: "LIST" }]
    }),
    deleteAPIToken: builder.mutation({
      query: (id) => ({
        url: `/admin/api-tokens/${id}`,
        method: "DELETE"
      }),
      transformResponse: (response) => response.data,
      invalidatesTags: (_res, _err, id) => [{ type: "ApiToken", id }]
    }),
    updateAPIToken: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/admin/api-tokens/${id}`,
        method: "PUT",
        data: body
      }),
      transformResponse: (response) => response.data,
      invalidatesTags: (_res, _err, { id }) => [{ type: "ApiToken", id }]
    })
  }),
  overrideExisting: false
});
const {
  useGetAPITokensQuery,
  useGetAPITokenQuery,
  useCreateAPITokenMutation,
  useDeleteAPITokenMutation,
  useUpdateAPITokenMutation
} = transferTokenService;



/***/ }

}]);