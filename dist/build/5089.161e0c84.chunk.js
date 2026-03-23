"use strict";
(self["webpackChunkmy_strapi_project"] = self["webpackChunkmy_strapi_project"] || []).push([[5089],{

/***/ 55089
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsPage: () => (/* binding */ SettingsPage),
/* harmony export */   "default": () => (/* binding */ ProtectedSettingsPage)
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
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(83997);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7441);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(30893);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(59201);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(54514);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(33955);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(14718);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(54894);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(74930);
/* harmony import */ var _index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(94137);
/* harmony import */ var byte_size__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(98908);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(5409);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(88761);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(48940);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(61535);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(12083);
/* harmony import */ var cropperjs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(40495);
/* harmony import */ var cropperjs_dist_cropper_css__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(50837);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(346);




























const init = (initialState2) => {
  return initialState2;
};
const initialState = {
  initialData: {
    responsiveDimensions: true,
    sizeOptimization: true,
    autoOrientation: false,
    videoPreview: false
  },
  modifiedData: {
    responsiveDimensions: true,
    sizeOptimization: true,
    autoOrientation: false,
    videoPreview: false
  }
};
const reducer = (state, action) => (
  // eslint-disable-next-line consistent-return
  (0,immer__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Ay)(state, (drafState) => {
    switch (action.type) {
      case "GET_DATA_SUCCEEDED": {
        drafState.initialData = action.data;
        drafState.modifiedData = action.data;
        break;
      }
      case "ON_CHANGE": {
        lodash_set__WEBPACK_IMPORTED_MODULE_23__(drafState, ["modifiedData", ...action.keys.split(".")], action.value);
        break;
      }
      default:
        return state;
    }
  })
);
const SettingsPage = () => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A)();
  const { lockApp, unlockApp } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_13__/* .useOverlayBlocker */ .MA)();
  const toggleNotification = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_13__/* .useNotification */ .hN)();
  const { get, put } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_13__/* .useFetchClient */ .ry)();
  (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_13__/* .useFocusWhenNavigate */ .L4)();
  const [{ initialData, modifiedData }, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState, init);
  const { data, isLoading, refetch } = (0,react_query__WEBPACK_IMPORTED_MODULE_18__.useQuery)({
    queryKey: ["upload", "settings"],
    async queryFn() {
      const {
        data: { data: data2 }
      } = await get("/upload/settings");
      return data2;
    }
  });
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    if (data) {
      dispatch({
        type: "GET_DATA_SUCCEEDED",
        data
      });
    }
  }, [data]);
  const isSaveButtonDisabled = lodash_isEqual__WEBPACK_IMPORTED_MODULE_15__(initialData, modifiedData);
  const { mutateAsync, isLoading: isSubmiting } = (0,react_query__WEBPACK_IMPORTED_MODULE_18__.useMutation)({
    async mutationFn(body) {
      return put("/upload/settings", body);
    },
    onSuccess() {
      refetch();
      toggleNotification({
        type: "success",
        message: { id: "notification.form.success.fields" }
      });
    },
    onError(err) {
      console.error(err);
    }
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSaveButtonDisabled) {
      return;
    }
    lockApp();
    await mutateAsync(modifiedData);
    unlockApp();
  };
  const handleChange = ({ target: { name, value } }) => {
    dispatch({
      type: "ON_CHANGE",
      keys: name,
      value
    });
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_9__/* .Main */ .g, { tabIndex: -1, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      react_helmet__WEBPACK_IMPORTED_MODULE_16__/* .Helmet */ .m,
      {
        title: formatMessage({
          id: (0,_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_19__.g)("page.title"),
          defaultMessage: "Settings - Media Libray"
        })
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .HeaderLayout */ .Q,
        {
          title: formatMessage({
            id: (0,_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_19__.g)("settings.header.label"),
            defaultMessage: "Media Library"
          }),
          primaryAction: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .$,
            {
              disabled: isSaveButtonDisabled,
              loading: isSubmiting,
              type: "submit",
              startIcon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {}),
              size: "S",
              children: formatMessage({
                id: "global.save",
                defaultMessage: "Save"
              })
            }
          ),
          subtitle: formatMessage({
            id: (0,_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_19__.g)("settings.sub-header.label"),
            defaultMessage: "Configure the settings for the Media Library"
          })
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .ContentLayout */ .s, { children: isLoading ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_13__/* .LoadingIndicatorPage */ .Bl, {}) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .Layout */ .P, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_10__/* .Flex */ .s, { direction: "column", alignItems: "stretch", gap: 12, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .a, { background: "neutral0", padding: 6, shadow: "filterShadow", hasRadius: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_10__/* .Flex */ .s, { direction: "column", alignItems: "stretch", gap: 4, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_10__/* .Flex */ .s, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_12__/* .Typography */ .o, { variant: "delta", as: "h2", children: formatMessage({
          id: (0,_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_19__.g)("settings.blockTitle"),
          defaultMessage: "Asset management"
        }) }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .Grid */ .x, { gap: 6, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .GridItem */ .E, { col: 6, s: 12, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _strapi_design_system__WEBPACK_IMPORTED_MODULE_11__/* .ToggleInput */ .l,
            {
              "aria-label": "responsiveDimensions",
              checked: modifiedData.responsiveDimensions,
              hint: formatMessage({
                id: (0,_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_19__.g)("settings.form.responsiveDimensions.description"),
                defaultMessage: "Enabling this option will generate multiple formats (small, medium and large) of the uploaded asset."
              }),
              label: formatMessage({
                id: (0,_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_19__.g)("settings.form.responsiveDimensions.label"),
                defaultMessage: "Responsive friendly upload"
              }),
              name: "responsiveDimensions",
              offLabel: formatMessage({
                id: "app.components.ToggleCheckbox.off-label",
                defaultMessage: "Off"
              }),
              onLabel: formatMessage({
                id: "app.components.ToggleCheckbox.on-label",
                defaultMessage: "On"
              }),
              onChange: (e) => {
                handleChange({
                  target: { name: "responsiveDimensions", value: e.target.checked }
                });
              }
            }
          ) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .GridItem */ .E, { col: 6, s: 12, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _strapi_design_system__WEBPACK_IMPORTED_MODULE_11__/* .ToggleInput */ .l,
            {
              "aria-label": "sizeOptimization",
              checked: modifiedData.sizeOptimization,
              hint: formatMessage({
                id: (0,_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_19__.g)("settings.form.sizeOptimization.description"),
                defaultMessage: "Enabling this option will reduce the image size and slightly reduce its quality."
              }),
              label: formatMessage({
                id: (0,_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_19__.g)("settings.form.sizeOptimization.label"),
                defaultMessage: "Size optimization"
              }),
              name: "sizeOptimization",
              offLabel: formatMessage({
                id: "app.components.ToggleCheckbox.off-label",
                defaultMessage: "Off"
              }),
              onLabel: formatMessage({
                id: "app.components.ToggleCheckbox.on-label",
                defaultMessage: "On"
              }),
              onChange: (e) => {
                handleChange({
                  target: { name: "sizeOptimization", value: e.target.checked }
                });
              }
            }
          ) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .GridItem */ .E, { col: 6, s: 12, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _strapi_design_system__WEBPACK_IMPORTED_MODULE_11__/* .ToggleInput */ .l,
            {
              "aria-label": "autoOrientation",
              checked: modifiedData.autoOrientation,
              hint: formatMessage({
                id: (0,_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_19__.g)("settings.form.autoOrientation.description"),
                defaultMessage: "Enabling this option will automatically rotate the image according to EXIF orientation tag."
              }),
              label: formatMessage({
                id: (0,_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_19__.g)("settings.form.autoOrientation.label"),
                defaultMessage: "Auto orientation"
              }),
              name: "autoOrientation",
              offLabel: formatMessage({
                id: "app.components.ToggleCheckbox.off-label",
                defaultMessage: "Off"
              }),
              onLabel: formatMessage({
                id: "app.components.ToggleCheckbox.on-label",
                defaultMessage: "On"
              }),
              onChange: (e) => {
                handleChange({
                  target: { name: "autoOrientation", value: e.target.checked }
                });
              }
            }
          ) })
        ] })
      ] }) }) }) }) })
    ] })
  ] });
};
const ProtectedSettingsPage = () => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_13__/* .CheckPagePermissions */ .kz, { permissions: _index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_19__.P.settings, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SettingsPage, {}) });



/***/ }

}]);