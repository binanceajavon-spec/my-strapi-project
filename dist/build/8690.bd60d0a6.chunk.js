"use strict";
(self["webpackChunkmy_strapi_project"] = self["webpackChunkmy_strapi_project"] || []).push([[8690],{

/***/ 98690
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ConfigureTheView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69751);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21272);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94061);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85963);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90151);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(68074);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42455);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4198);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(55356);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(38413);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(43739);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(95336);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(59201);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(46270);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(54514);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(33955);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(11163);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(54894);
/* harmony import */ var _index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(94137);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(88761);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(80219);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(48940);
/* harmony import */ var byte_size__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(98908);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(5409);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(74930);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(61535);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(12083);
/* harmony import */ var cropperjs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(40495);
/* harmony import */ var cropperjs_dist_cropper_css__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(50837);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(346);




























const Settings = ({ sort = "", pageSize = 10, onChange: onChange2 }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .a,
    {
      background: "neutral0",
      hasRadius: true,
      shadow: "tableShadow",
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 7,
      paddingRight: 7,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .Grid */ .x, { gap: 4, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .GridItem */ .E, { s: 12, col: 6, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _strapi_design_system__WEBPACK_IMPORTED_MODULE_10__/* .Select */ .l,
          {
            label: formatMessage({
              id: (0,_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_18__.g)("config.entries.title"),
              defaultMessage: "Entries per page"
            }),
            hint: formatMessage({
              id: (0,_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_18__.g)("config.entries.note"),
              defaultMessage: "Number of assets displayed by default in the Media Library"
            }),
            onChange: (value) => onChange2({ target: { name: "pageSize", value } }),
            name: "pageSize",
            value: pageSize,
            children: _index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_18__.C.map((pageSize2) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_11__/* .Option */ .c, { value: pageSize2, children: pageSize2 }, pageSize2))
          }
        ) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .GridItem */ .E, { s: 12, col: 6, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _strapi_design_system__WEBPACK_IMPORTED_MODULE_10__/* .Select */ .l,
          {
            label: formatMessage({
              id: (0,_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_18__.g)("config.sort.title"),
              defaultMessage: "Default sort order"
            }),
            hint: formatMessage({
              id: (0,_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_18__.g)("config.note"),
              defaultMessage: "Note: You can override this value in the media library."
            }),
            onChange: (value) => onChange2({ target: { name: "sort", value } }),
            name: "sort",
            value: sort,
            "test-sort": sort,
            "data-testid": "sort-select",
            children: _index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_18__.D.map((filter) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _strapi_design_system__WEBPACK_IMPORTED_MODULE_11__/* .Option */ .c,
              {
                "data-testid": `sort-option-${filter.value}`,
                value: filter.value,
                children: formatMessage({ id: (0,_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_18__.g)(filter.key), defaultMessage: `${filter.value}` })
              },
              filter.key
            ))
          }
        ) })
      ] })
    }
  );
};
Settings.propTypes = {
  sort: prop_types__WEBPACK_IMPORTED_MODULE_16__.string.isRequired,
  pageSize: prop_types__WEBPACK_IMPORTED_MODULE_16__.number.isRequired,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_16__.func.isRequired
};
const ON_CHANGE = `${_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_18__.p}/ON_CHANGE`;
const SET_LOADED = `${_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_18__.p}/SET_LOADED`;
const onChange = ({ name, value }) => ({
  type: ON_CHANGE,
  keys: name,
  value
});
const setLoaded = () => ({
  type: SET_LOADED
});
const initialState = {
  initialData: {},
  modifiedData: {}
};
const init = (configData) => {
  return {
    ...initialState,
    initialData: configData,
    modifiedData: configData
  };
};
const reducer = (state = initialState, action) => (
  // eslint-disable-next-line consistent-return
  (0,immer__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Ay)(state, (draftState) => {
    switch (action.type) {
      case ON_CHANGE: {
        lodash_set__WEBPACK_IMPORTED_MODULE_21__(draftState, ["modifiedData", ...action.keys.split(".")], action.value);
        break;
      }
      case SET_LOADED: {
        const reInitialise = init(lodash_get__WEBPACK_IMPORTED_MODULE_20__(draftState, ["modifiedData"], {}));
        draftState.initialData = reInitialise.initialData;
        draftState.modifiedData = reInitialise.modifiedData;
        break;
      }
      default:
        return draftState;
    }
  })
);
const ConfigureTheView = ({ config }) => {
  const { trackUsage } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_12__/* .useTracking */ .z1)();
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A)();
  const toggleNotification = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_12__/* .useNotification */ .hN)();
  const { mutateConfig } = (0,_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_18__.z)();
  const { isLoading: isSubmittingForm } = mutateConfig;
  const [showWarningSubmit, setWarningSubmit] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const toggleWarningSubmit = () => setWarningSubmit((prevState) => !prevState);
  const [reducerState, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState, () => init(config));
  const { initialData, modifiedData } = reducerState;
  const handleSubmit = (e) => {
    e.preventDefault();
    toggleWarningSubmit();
  };
  const handleConfirm = async () => {
    trackUsage("willEditMediaLibraryConfig");
    await mutateConfig.mutateAsync(modifiedData);
    toggleWarningSubmit();
    dispatch(setLoaded());
    toggleNotification({
      type: "success",
      message: {
        id: "notification.form.success.fields",
        defaultMessage: "Changes saved"
      }
    });
  };
  const handleChange = ({ target: { name, value } }) => {
    dispatch(onChange({ name, value }));
  };
  (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_12__/* .useFocusWhenNavigate */ .L4)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .Layout */ .P, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_9__/* .Main */ .g, { "aria-busy": isSubmittingForm, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", { onSubmit: handleSubmit, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .HeaderLayout */ .Q,
      {
        navigationAction: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_12__/* .Link */ .N_, { startIcon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {}), to: `/plugins/${_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_18__.p}`, id: "go-back", children: formatMessage({ id: (0,_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_18__.g)("config.back"), defaultMessage: "Back" }) }),
        primaryAction: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .$,
          {
            size: "S",
            startIcon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {}),
            disabled: lodash_isEqual__WEBPACK_IMPORTED_MODULE_15__(modifiedData, initialData),
            type: "submit",
            children: formatMessage({ id: "global.save", defaultMessage: "Save" })
          }
        ),
        subtitle: formatMessage({
          id: (0,_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_18__.g)("config.subtitle"),
          defaultMessage: "Define the view settings of the media library."
        }),
        title: formatMessage({
          id: (0,_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_18__.g)("config.title"),
          defaultMessage: "Configure the view - Media Library"
        })
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .ContentLayout */ .s, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      Settings,
      {
        "data-testid": "settings",
        pageSize: modifiedData.pageSize || "",
        sort: modifiedData.sort || "",
        onChange: handleChange
      }
    ) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_12__/* .ConfirmDialog */ .TM,
      {
        bodyText: {
          id: (0,_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_18__.g)("config.popUpWarning.warning.updateAllSettings"),
          defaultMessage: "This will modify all your settings"
        },
        iconRightButton: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {}),
        isConfirmButtonLoading: isSubmittingForm,
        isOpen: showWarningSubmit,
        onToggleDialog: toggleWarningSubmit,
        onConfirm: handleConfirm,
        variantRightButton: "success-light"
      }
    )
  ] }) }) });
};
ConfigureTheView.propTypes = {
  config: prop_types__WEBPACK_IMPORTED_MODULE_16__.shape({
    pageSize: prop_types__WEBPACK_IMPORTED_MODULE_16__.number,
    sort: prop_types__WEBPACK_IMPORTED_MODULE_16__.string
  }).isRequired
};



/***/ }

}]);