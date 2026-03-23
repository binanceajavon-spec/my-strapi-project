"use strict";
(self["webpackChunkmy_strapi_project"] = self["webpackChunkmy_strapi_project"] || []).push([[8793],{

/***/ 78793
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProtectedSSO: () => (/* binding */ ProtectedSSO)
/* harmony export */ });
/* unused harmony export SingleSignOnPage */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69751);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85963);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90151);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68074);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42455);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4198);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55356);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(38413);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(83997);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(56654);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(43739);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(95336);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7441);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(30893);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(59201);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(54514);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(61535);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(54894);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(12083);
/* harmony import */ var _index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(92129);
/* harmony import */ var _useAdminRoles_TJePFZ1V_mjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(68699);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(15126);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(63299);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(44633);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(59080);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(79275);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(14718);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(21272);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(82437);
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(5790);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(35223);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(5409);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(74930);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(80219);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(48940);
/* harmony import */ var lodash_defaultsDeep__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(41286);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(33955);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(13426);
/* harmony import */ var lodash_isBoolean__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(84624);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(346);
/* harmony import */ var lodash_isNaN__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(54257);
/* harmony import */ var lodash_toNumber__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(48829);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(51187);
/* harmony import */ var lodash_upperFirst__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(39404);
/* harmony import */ var lodash_fp__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(58692);
/* harmony import */ var lodash_take__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(501);
/* harmony import */ var codemirror5__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(57646);
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(23120);
/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(44414);
/* harmony import */ var markdown_it_abbr__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(25962);
/* harmony import */ var markdown_it_container__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(14664);
/* harmony import */ var markdown_it_deflist__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(42588);
/* harmony import */ var markdown_it_emoji__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(90325);
/* harmony import */ var markdown_it_footnote__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(62785);
/* harmony import */ var markdown_it_ins__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(87443);
/* harmony import */ var markdown_it_mark__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(41032);
/* harmony import */ var markdown_it_sub__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(22957);
/* harmony import */ var markdown_it_sup__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(93179);
/* harmony import */ var highlight_js_styles_solarized_dark_css__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(73055);
/* harmony import */ var codemirror5_addon_display_placeholder__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(15747);
/* harmony import */ var lodash_toString__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(62925);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(26509);
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(32058);
/* harmony import */ var lodash_unset__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(81185);
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(4642);








































































const schema = yup__WEBPACK_IMPORTED_MODULE_18__/* .object */ .Ik().shape({
  autoRegister: yup__WEBPACK_IMPORTED_MODULE_18__/* .bool */ .lc().required(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .translatedErrors */ .iW.required),
  defaultRole: yup__WEBPACK_IMPORTED_MODULE_18__/* .mixed */ .gl().when("autoRegister", (value, initSchema) => {
    return value ? initSchema.required(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .translatedErrors */ .iW.required) : initSchema.nullable();
  }),
  ssoLockedRoles: yup__WEBPACK_IMPORTED_MODULE_18__/* .array */ .YO().nullable().of(
    yup__WEBPACK_IMPORTED_MODULE_18__/* .mixed */ .gl().when("ssoLockedRoles", (value, initSchema) => {
      return value ? initSchema.required(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .translatedErrors */ .iW.required) : initSchema.nullable();
    })
  )
});
const SingleSignOnPage = () => {
  (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .useFocusWhenNavigate */ .L4)();
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A)();
  const permissions = (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_19__.j)((state) => state.admin_app.permissions);
  const { lockApp, unlockApp } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .useOverlayBlocker */ .MA)();
  const toggleNotification = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .useNotification */ .hN)();
  const {
    _unstableFormatAPIError: formatAPIError,
    _unstableFormatValidationErrors: formatValidationErrors
  } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .useAPIErrorHandler */ .wq)();
  const { isLoading: isLoadingProviderOptions, data } = (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_19__.W)();
  const [updateProviderOptions, { isLoading: isSubmittingForm }] = (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_19__.X)();
  const {
    isLoading: isLoadingPermissions,
    allowedActions: { canUpdate, canReadRoles }
  } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .useRBAC */ .ec)({
    ...permissions.settings?.sso,
    readRoles: permissions.settings?.roles.read ?? []
  });
  const { roles, isLoading: isLoadingRoles } = (0,_useAdminRoles_TJePFZ1V_mjs__WEBPACK_IMPORTED_MODULE_20__.u)(void 0, {
    skip: !canReadRoles
  });
  const handleSubmit = async (body, formik) => {
    lockApp();
    try {
      const res = await updateProviderOptions(body);
      if ("error" in res) {
        if ((0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_19__.x)(res.error) && res.error.name === "ValidationError") {
          formik.setErrors(formatValidationErrors(res.error));
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
        message: { id: "notification.success.saved" }
      });
    } catch (err) {
      toggleNotification({
        type: "warning",
        message: {
          id: "notification.error",
          defaultMessage: "An error occurred, please try again."
        }
      });
    } finally {
      unlockApp();
    }
  };
  const isLoadingData = isLoadingRoles || isLoadingPermissions || isLoadingProviderOptions;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .Layout */ .P, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .SettingsPageTitle */ .x7, { name: "SSO" }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .Main */ .g, { "aria-busy": isSubmittingForm || isLoadingData, tabIndex: -1, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      formik__WEBPACK_IMPORTED_MODULE_16__/* .Formik */ .l1,
      {
        onSubmit: handleSubmit,
        initialValues: data || {
          autoRegister: false,
          defaultRole: null,
          ssoLockedRoles: null
        },
        validationSchema: schema,
        validateOnChange: false,
        enableReinitialize: true,
        children: ({ handleChange, isSubmitting, values, setFieldValue, dirty, errors }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .Form */ .lV, { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .HeaderLayout */ .Q,
            {
              primaryAction: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _strapi_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .$,
                {
                  disabled: !dirty,
                  loading: isSubmitting,
                  startIcon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {}),
                  type: "submit",
                  size: "L",
                  children: formatMessage({
                    id: "global.save",
                    defaultMessage: "Save"
                  })
                }
              ),
              title: formatMessage({
                id: "Settings.sso.title",
                defaultMessage: "Single Sign-On"
              }),
              subtitle: formatMessage({
                id: "Settings.sso.description",
                defaultMessage: "Configure the settings for the Single Sign-On feature."
              })
            }
          ),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .ContentLayout */ .s, { children: isSubmitting || isLoadingData ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .LoadingIndicatorPage */ .Bl, {}) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
            _strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .Flex */ .s,
            {
              direction: "column",
              alignItems: "stretch",
              gap: 4,
              background: "neutral0",
              padding: 6,
              shadow: "filterShadow",
              hasRadius: true,
              children: [
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_13__/* .Typography */ .o, { variant: "delta", as: "h2", children: formatMessage({
                  id: "global.settings",
                  defaultMessage: "Settings"
                }) }),
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Grid */ .x, { gap: 4, children: [
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .GridItem */ .E, { col: 6, s: 12, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _strapi_design_system__WEBPACK_IMPORTED_MODULE_12__/* .ToggleInput */ .l,
                    {
                      disabled: !canUpdate,
                      checked: values.autoRegister,
                      hint: formatMessage({
                        id: "Settings.sso.form.registration.description",
                        defaultMessage: "Create new user on SSO login if no account exists"
                      }),
                      label: formatMessage({
                        id: "Settings.sso.form.registration.label",
                        defaultMessage: "Auto-registration"
                      }),
                      name: "autoRegister",
                      offLabel: formatMessage({
                        id: "app.components.ToggleCheckbox.off-label",
                        defaultMessage: "Off"
                      }),
                      onLabel: formatMessage({
                        id: "app.components.ToggleCheckbox.on-label",
                        defaultMessage: "On"
                      }),
                      onChange: handleChange
                    }
                  ) }),
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .GridItem */ .E, { col: 6, s: 12, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _strapi_design_system__WEBPACK_IMPORTED_MODULE_10__/* .Select */ .l,
                    {
                      disabled: !canUpdate,
                      hint: formatMessage({
                        id: "Settings.sso.form.defaultRole.description",
                        defaultMessage: "It will attach the new authenticated user to the selected role"
                      }),
                      error: errors.defaultRole ? formatMessage({
                        id: errors.defaultRole,
                        defaultMessage: errors.defaultRole
                      }) : "",
                      label: formatMessage({
                        id: "Settings.sso.form.defaultRole.label",
                        defaultMessage: "Default role"
                      }),
                      name: "defaultRole",
                      onChange: (value) => handleChange({ target: { name: "defaultRole", value } }),
                      placeholder: formatMessage({
                        id: "components.InputSelect.option.placeholder",
                        defaultMessage: "Choose here"
                      }),
                      value: values.defaultRole,
                      children: roles.map(({ id, name }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_11__/* .Option */ .c, { value: id.toString(), children: name }, id))
                    }
                  ) }),
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .GridItem */ .E, { col: 6, s: 12, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _strapi_design_system__WEBPACK_IMPORTED_MODULE_9__/* .MultiSelect */ .KF,
                    {
                      disabled: !canUpdate,
                      hint: formatMessage({
                        id: "Settings.sso.form.localAuthenticationLock.description",
                        defaultMessage: "Select the roles for which you want to disable the local authentication"
                      }),
                      error: errors.ssoLockedRoles ? formatMessage({
                        id: errors.ssoLockedRoles,
                        defaultMessage: errors.ssoLockedRoles
                      }) : "",
                      label: formatMessage({
                        id: "Settings.sso.form.localAuthenticationLock.label",
                        defaultMessage: "Local authentication lock-out"
                      }),
                      name: "ssoLockedRoles",
                      onChange: (value) => handleChange({
                        target: {
                          value,
                          name: "ssoLockedRoles"
                        }
                      }),
                      placeholder: formatMessage({
                        id: "components.InputSelect.option.placeholder",
                        defaultMessage: "Choose here"
                      }),
                      onClear: () => setFieldValue("ssoLockedRoles", []),
                      value: values.ssoLockedRoles || [],
                      withTags: true,
                      children: roles.map(({ id, name }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_9__/* .MultiSelectOption */ .fe, { value: id.toString(), children: name }, id))
                    }
                  ) })
                ] })
              ]
            }
          ) })
        ] })
      }
    ) })
  ] });
};
const ProtectedSSO = () => {
  const permissions = (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_19__.j)((state) => state.admin_app.permissions.settings?.sso?.main);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .CheckPagePermissions */ .kz, { permissions, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SingleSignOnPage, {}) });
};



/***/ },

/***/ 68699
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ useAdminRoles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21272);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59201);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54894);
/* harmony import */ var _index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92129);




const useAdminRoles = (params = {}, queryOptions) => {
  const { locale } = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)();
  const formatter = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .useCollator */ .QM)(locale, {
    sensitivity: "base"
  });
  const { data, error, isError, isLoading, refetch } = (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_3__.z)(params, queryOptions);
  const roles = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => [...data ?? []].sort(
      (a, b) => formatter.compare(a.name, b.name)
    ),
    [data, formatter]
  );
  return {
    roles,
    error,
    isError,
    isLoading,
    refetch
  };
};



/***/ }

}]);