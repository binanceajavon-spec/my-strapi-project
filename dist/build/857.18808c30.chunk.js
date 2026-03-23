"use strict";
(self["webpackChunkmy_strapi_project"] = self["webpackChunkmy_strapi_project"] || []).push([[857],{

/***/ 50857
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfilePage: () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69751);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21272);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94061);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85963);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88875);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90151);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(68074);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4198);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(55356);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11273);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(38413);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(83997);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(48323);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7537);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(30893);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(59201);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(54514);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(83925);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(93337);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(61535);
/* harmony import */ var lodash_upperFirst__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(39404);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(14718);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(54894);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(47610);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(12083);
/* harmony import */ var _index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(92129);
/* harmony import */ var _AuthenticatedApp_uHd_MPEB_mjs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(38682);
/* harmony import */ var _validation_f9rGWFeU_mjs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(97146);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(15126);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(63299);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(44633);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(59080);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(79275);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(82437);
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(5790);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(35223);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(5409);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(74930);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(80219);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(48940);
/* harmony import */ var lodash_defaultsDeep__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(41286);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(33955);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(13426);
/* harmony import */ var lodash_isBoolean__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(84624);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(346);
/* harmony import */ var lodash_isNaN__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(54257);
/* harmony import */ var lodash_toNumber__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(48829);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(51187);
/* harmony import */ var lodash_fp__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(58692);
/* harmony import */ var lodash_take__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(501);
/* harmony import */ var codemirror5__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(57646);
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(23120);
/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(44414);
/* harmony import */ var markdown_it_abbr__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(25962);
/* harmony import */ var markdown_it_container__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(14664);
/* harmony import */ var markdown_it_deflist__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(42588);
/* harmony import */ var markdown_it_emoji__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(90325);
/* harmony import */ var markdown_it_footnote__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(62785);
/* harmony import */ var markdown_it_ins__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(87443);
/* harmony import */ var markdown_it_mark__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(41032);
/* harmony import */ var markdown_it_sub__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(22957);
/* harmony import */ var markdown_it_sup__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(93179);
/* harmony import */ var highlight_js_styles_solarized_dark_css__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(73055);
/* harmony import */ var codemirror5_addon_display_placeholder__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(15747);
/* harmony import */ var lodash_toString__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(62925);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(26509);
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(32058);
/* harmony import */ var lodash_unset__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(81185);
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(4642);
/* harmony import */ var semver_functions_lt__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(55151);
/* harmony import */ var semver_functions_valid__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(79077);











































































const PROFILE_VALIDTION_SCHEMA = yup__WEBPACK_IMPORTED_MODULE_24__/* .object */ .Ik().shape({
  ..._validation_f9rGWFeU_mjs__WEBPACK_IMPORTED_MODULE_27__.C,
  currentPassword: yup__WEBPACK_IMPORTED_MODULE_24__/* .string */ .Yj().when(["password", "confirmPassword"], (password, confirmPassword, passSchema) => {
    return password || confirmPassword ? passSchema.required(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_15__/* .translatedErrors */ .iW.required) : passSchema;
  }),
  preferedLanguage: yup__WEBPACK_IMPORTED_MODULE_24__/* .string */ .Yj().nullable()
});
const ProfilePage = () => {
  const localeNames = (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_25__.j)((state) => state.admin_app.language.localeNames);
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A)();
  const { trackUsage } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_15__/* .useTracking */ .z1)();
  const toggleNotification = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_15__/* .useNotification */ .hN)();
  const { lockApp, unlockApp } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_15__/* .useOverlayBlocker */ .MA)();
  const { notifyStatus } = (0,_strapi_design_system__WEBPACK_IMPORTED_MODULE_9__/* .useNotifyAT */ .W)();
  const currentTheme = (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_25__.j)((state) => state.admin_app.theme.currentTheme);
  const dispatch = (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_25__.s)();
  const {
    _unstableFormatValidationErrors: formatValidationErrors,
    _unstableFormatAPIError: formatApiError
  } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_15__/* .useAPIErrorHandler */ .wq)();
  (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_15__/* .useFocusWhenNavigate */ .L4)();
  const { user } = (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_25__.a)("ProfilePage");
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    if (user) {
      notifyStatus(
        formatMessage({
          id: "Settings.profile.form.notify.data.loaded",
          defaultMessage: "Your profile data has been loaded"
        })
      );
    } else {
      toggleNotification({
        type: "warning",
        message: { id: "notification.error", defaultMessage: "An error occured" }
      });
    }
  }, [formatMessage, notifyStatus, toggleNotification, user]);
  const [updateMe, { isLoading: isSubmittingForm }] = (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_25__.t)();
  const {
    isLoading,
    data: dataSSO,
    error
  } = (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_25__.v)(void 0, {
    skip: !(window.strapi.isEE && window.strapi.features.isEnabled("sso"))
  });
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    if (error) {
      toggleNotification({
        type: "warning",
        message: { id: "Settings.permissions.users.sso.provider.error" }
      });
    }
  }, [error, toggleNotification]);
  const handleSubmit = async (body, { setErrors }) => {
    lockApp();
    const { confirmPassword: _confirmPassword, currentTheme: currentTheme2, ...bodyRest } = body;
    let dataToSend = bodyRest;
    if (dataToSend.password === "") {
      const {
        password: _password,
        currentPassword: _currentPassword,
        ...passwordRequestBodyRest
      } = dataToSend;
      dataToSend = passwordRequestBodyRest;
    }
    const res = await updateMe(dataToSend);
    if ("data" in res) {
      dispatch((0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_25__.w)(currentTheme2));
      trackUsage("didChangeMode", { newMode: currentTheme2 });
      toggleNotification({
        type: "success",
        message: { id: "notification.success.saved", defaultMessage: "Saved" }
      });
    }
    if ("error" in res) {
      if ((0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_25__.x)(res.error) && (res.error.name === "ValidationError" || res.error.message === "ValidationError")) {
        setErrors(formatValidationErrors(res.error));
      } else if ((0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_25__.x)(res.error)) {
        toggleNotification({
          type: "warning",
          message: formatApiError(res.error)
        });
      } else {
        toggleNotification({
          type: "warning",
          message: { id: "notification.error", defaultMessage: "An error occured" }
        });
      }
    }
    unlockApp?.();
  };
  if (isLoading) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_10__/* .Main */ .g, { "aria-busy": "true", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        react_helmet__WEBPACK_IMPORTED_MODULE_21__/* .Helmet */ .m,
        {
          title: formatMessage({
            id: "Settings.profile.form.section.helmet.title",
            defaultMessage: "User profile"
          })
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .HeaderLayout */ .Q,
        {
          title: formatMessage({
            id: "Settings.profile.form.section.profile.page.title",
            defaultMessage: "Profile page"
          })
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .ContentLayout */ .s, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_15__/* .LoadingIndicatorPage */ .Bl, {}) })
    ] });
  }
  const hasLockedRole = dataSSO?.isSSOLocked ?? false;
  const { email, firstname, lastname, username, preferedLanguage } = user ?? {};
  const initialData = {
    email,
    firstname,
    lastname,
    username,
    preferedLanguage,
    currentTheme,
    confirmPassword: "",
    password: ""
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_10__/* .Main */ .g, { "aria-busy": isSubmittingForm, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      react_helmet__WEBPACK_IMPORTED_MODULE_21__/* .Helmet */ .m,
      {
        title: formatMessage({
          id: "Settings.profile.form.section.helmet.title",
          defaultMessage: "User profile"
        })
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      formik__WEBPACK_IMPORTED_MODULE_19__/* .Formik */ .l1,
      {
        onSubmit: handleSubmit,
        initialValues: initialData,
        validateOnChange: false,
        validationSchema: PROFILE_VALIDTION_SCHEMA,
        enableReinitialize: true,
        children: ({
          errors,
          values: {
            email: email2,
            firstname: firstname2,
            lastname: lastname2,
            username: username2,
            preferedLanguage: preferedLanguage2,
            currentTheme: currentTheme2,
            ...passwordValues
          },
          handleChange,
          isSubmitting,
          dirty
        }) => {
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_15__/* .Form */ .lV, { children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .HeaderLayout */ .Q,
              {
                title: username2 || (0,_AuthenticatedApp_uHd_MPEB_mjs__WEBPACK_IMPORTED_MODULE_26__.g)(firstname2 ?? "", lastname2),
                primaryAction: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .$,
                  {
                    startIcon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {}),
                    loading: isSubmitting,
                    type: "submit",
                    disabled: !dirty,
                    children: formatMessage({ id: "global.save", defaultMessage: "Save" })
                  }
                )
              }
            ),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .a, { paddingBottom: 10, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .ContentLayout */ .s, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .s, { direction: "column", alignItems: "stretch", gap: 6, children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                UserInfoSection,
                {
                  errors,
                  onChange: handleChange,
                  values: {
                    firstname: firstname2,
                    lastname: lastname2,
                    username: username2,
                    email: email2
                  }
                }
              ),
              !hasLockedRole && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                PasswordSection,
                {
                  errors,
                  onChange: handleChange,
                  values: passwordValues
                }
              ),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                PreferencesSection,
                {
                  onChange: handleChange,
                  values: {
                    preferedLanguage: preferedLanguage2,
                    currentTheme: currentTheme2
                  },
                  localeNames
                }
              )
            ] }) }) })
          ] });
        }
      }
    )
  ] });
};
const PasswordSection = ({ errors, onChange, values }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A)();
  const [currentPasswordShown, setCurrentPasswordShown] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
  const [passwordShown, setPasswordShown] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
  const [passwordConfirmShown, setPasswordConfirmShown] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .a,
    {
      background: "neutral0",
      hasRadius: true,
      shadow: "filterShadow",
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 7,
      paddingRight: 7,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .s, { direction: "column", alignItems: "stretch", gap: 4, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_14__/* .Typography */ .o, { variant: "delta", as: "h2", children: formatMessage({
          id: "global.change-password",
          defaultMessage: "Change password"
        }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .Grid */ .x, { gap: 5, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .GridItem */ .E, { s: 12, col: 6, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _strapi_design_system__WEBPACK_IMPORTED_MODULE_13__/* .TextInput */ .k,
          {
            error: errors.currentPassword ? formatMessage({
              id: errors.currentPassword,
              defaultMessage: errors.currentPassword
            }) : "",
            onChange,
            value: values.currentPassword,
            label: formatMessage({
              id: "Auth.form.currentPassword.label",
              defaultMessage: "Current Password"
            }),
            name: "currentPassword",
            type: currentPasswordShown ? "text" : "password",
            endAction: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              FieldActionWrapper,
              {
                onClick: (e) => {
                  e.stopPropagation();
                  setCurrentPasswordShown((prev) => !prev);
                },
                label: formatMessage(
                  currentPasswordShown ? {
                    id: "Auth.form.password.show-password",
                    defaultMessage: "Show password"
                  } : {
                    id: "Auth.form.password.hide-password",
                    defaultMessage: "Hide password"
                  }
                ),
                children: currentPasswordShown ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {}) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {})
              }
            )
          }
        ) }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .Grid */ .x, { gap: 5, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .GridItem */ .E, { s: 12, col: 6, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            PasswordInput,
            {
              error: errors.password ? formatMessage({
                id: errors.password,
                defaultMessage: errors.password
              }) : "",
              onChange,
              value: values.password,
              label: formatMessage({
                id: "global.password",
                defaultMessage: "Password"
              }),
              name: "password",
              type: passwordShown ? "text" : "password",
              autoComplete: "new-password",
              endAction: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                FieldActionWrapper,
                {
                  onClick: (e) => {
                    e.stopPropagation();
                    setPasswordShown((prev) => !prev);
                  },
                  label: formatMessage(
                    passwordShown ? {
                      id: "Auth.form.password.show-password",
                      defaultMessage: "Show password"
                    } : {
                      id: "Auth.form.password.hide-password",
                      defaultMessage: "Hide password"
                    }
                  ),
                  children: passwordShown ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {}) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {})
                }
              )
            }
          ) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .GridItem */ .E, { s: 12, col: 6, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            PasswordInput,
            {
              error: errors.confirmPassword ? formatMessage({
                id: errors.confirmPassword,
                defaultMessage: errors.confirmPassword
              }) : "",
              onChange,
              value: values.confirmPassword,
              label: formatMessage({
                id: "Auth.form.confirmPassword.label",
                defaultMessage: "Confirm Password"
              }),
              name: "confirmPassword",
              type: passwordConfirmShown ? "text" : "password",
              autoComplete: "new-password",
              endAction: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                FieldActionWrapper,
                {
                  onClick: (e) => {
                    e.stopPropagation();
                    setPasswordConfirmShown((prev) => !prev);
                  },
                  label: formatMessage(
                    passwordConfirmShown ? {
                      id: "Auth.form.password.show-password",
                      defaultMessage: "Show password"
                    } : {
                      id: "Auth.form.password.hide-password",
                      defaultMessage: "Hide password"
                    }
                  ),
                  children: passwordConfirmShown ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {}) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {})
                }
              )
            }
          ) })
        ] })
      ] })
    }
  );
};
const PasswordInput = (0,styled_components__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Ay)((0,_strapi_design_system__WEBPACK_IMPORTED_MODULE_13__/* .TextInput */ .k))`
  ::-ms-reveal {
    display: none;
  }
`;
const FieldActionWrapper = (0,styled_components__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Ay)((0,_strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .FieldAction */ .T))`
  svg {
    height: ${(0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_15__/* .pxToRem */ .a8)(16)};
    width: ${(0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_15__/* .pxToRem */ .a8)(16)};
    path {
      fill: ${({ theme }) => theme.colors.neutral600};
    }
  }
`;
const PreferencesSection = ({ onChange, values, localeNames }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A)();
  const themesToDisplay = (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_25__.j)((state) => state.admin_app.theme.availableThemes);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .a,
    {
      background: "neutral0",
      hasRadius: true,
      shadow: "filterShadow",
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 7,
      paddingRight: 7,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .s, { direction: "column", alignItems: "stretch", gap: 4, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .s, { direction: "column", alignItems: "stretch", gap: 1, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_14__/* .Typography */ .o, { variant: "delta", as: "h2", children: formatMessage({
            id: "Settings.profile.form.section.experience.title",
            defaultMessage: "Experience"
          }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_14__/* .Typography */ .o, { children: formatMessage(
            {
              id: "Settings.profile.form.section.experience.interfaceLanguageHelp",
              defaultMessage: "Preference changes will apply only to you. More information is available {here}."
            },
            {
              here: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .a,
                {
                  as: "a",
                  color: "primary600",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  href: "https://docs.strapi.io/developer-docs/latest/development/admin-customization.html#locales",
                  children: formatMessage({
                    id: "Settings.profile.form.section.experience.here",
                    defaultMessage: "here"
                  })
                }
              )
            }
          ) })
        ] }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .Grid */ .x, { gap: 5, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .GridItem */ .E, { s: 12, col: 6, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _strapi_design_system__WEBPACK_IMPORTED_MODULE_12__/* .SingleSelect */ .Z,
            {
              label: formatMessage({
                id: "Settings.profile.form.section.experience.interfaceLanguage",
                defaultMessage: "Interface language"
              }),
              placeholder: formatMessage({
                id: "global.select",
                defaultMessage: "Select"
              }),
              hint: formatMessage({
                id: "Settings.profile.form.section.experience.interfaceLanguage.hint",
                defaultMessage: "This will only display your own interface in the chosen language."
              }),
              onClear: () => {
                onChange({
                  target: { name: "preferedLanguage", value: null }
                });
              },
              clearLabel: formatMessage({
                id: "Settings.profile.form.section.experience.clear.select",
                defaultMessage: "Clear the interface language selected"
              }),
              value: values.preferedLanguage,
              onChange: (e) => {
                onChange({
                  target: { name: "preferedLanguage", value: e }
                });
              },
              children: Object.entries(localeNames).map(([language, langName]) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_12__/* .SingleSelectOption */ .eY, { value: language, children: langName }, language))
            }
          ) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .GridItem */ .E, { s: 12, col: 6, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
            _strapi_design_system__WEBPACK_IMPORTED_MODULE_12__/* .SingleSelect */ .Z,
            {
              label: formatMessage({
                id: "Settings.profile.form.section.experience.mode.label",
                defaultMessage: "Interface mode"
              }),
              placeholder: formatMessage({
                id: "components.Select.placeholder",
                defaultMessage: "Select"
              }),
              hint: formatMessage({
                id: "Settings.profile.form.section.experience.mode.hint",
                defaultMessage: "Displays your interface in the chosen mode."
              }),
              value: values.currentTheme,
              onChange: (e) => {
                onChange({
                  target: { name: "currentTheme", value: e }
                });
              },
              children: [
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_12__/* .SingleSelectOption */ .eY, { value: "system", children: formatMessage({
                  id: "Settings.profile.form.section.experience.mode.option-system-label",
                  defaultMessage: "Use system settings"
                }) }),
                themesToDisplay.map((theme) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_12__/* .SingleSelectOption */ .eY, { value: theme, children: formatMessage(
                  {
                    id: "Settings.profile.form.section.experience.mode.option-label",
                    defaultMessage: "{name} mode"
                  },
                  {
                    name: formatMessage({
                      id: theme,
                      defaultMessage: lodash_upperFirst__WEBPACK_IMPORTED_MODULE_20__(theme)
                    })
                  }
                ) }, theme))
              ]
            }
          ) })
        ] })
      ] })
    }
  );
};
const UserInfoSection = ({ errors, onChange, values }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .a,
    {
      background: "neutral0",
      hasRadius: true,
      shadow: "filterShadow",
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 7,
      paddingRight: 7,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .s, { direction: "column", alignItems: "stretch", gap: 4, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_14__/* .Typography */ .o, { variant: "delta", as: "h2", children: formatMessage({
          id: "global.profile",
          defaultMessage: "Profile"
        }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .Grid */ .x, { gap: 5, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .GridItem */ .E, { s: 12, col: 6, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_15__/* .GenericInput */ .ah,
            {
              intlLabel: {
                id: "Auth.form.firstname.label",
                defaultMessage: "First name"
              },
              error: errors.firstname,
              onChange,
              value: values.firstname,
              type: "text",
              name: "firstname",
              required: true
            }
          ) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .GridItem */ .E, { s: 12, col: 6, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_15__/* .GenericInput */ .ah,
            {
              intlLabel: {
                id: "Auth.form.lastname.label",
                defaultMessage: "Last name"
              },
              error: errors.lastname,
              onChange,
              value: values.lastname,
              type: "text",
              name: "lastname"
            }
          ) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .GridItem */ .E, { s: 12, col: 6, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_15__/* .GenericInput */ .ah,
            {
              intlLabel: { id: "Auth.form.email.label", defaultMessage: "Email" },
              error: errors.email,
              onChange,
              value: values.email,
              type: "email",
              name: "email",
              required: true
            }
          ) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .GridItem */ .E, { s: 12, col: 6, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_15__/* .GenericInput */ .ah,
            {
              intlLabel: {
                id: "Auth.form.username.label",
                defaultMessage: "Username"
              },
              error: errors.username,
              onChange,
              value: values.username,
              type: "text",
              name: "username"
            }
          ) })
        ] })
      ] })
    }
  );
};



/***/ },

/***/ 97146
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ COMMON_USER_SCHEMA)
/* harmony export */ });
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59201);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12083);


const COMMON_USER_SCHEMA = {
  firstname: yup__WEBPACK_IMPORTED_MODULE_1__/* .string */ .Yj().trim().required(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_0__/* .translatedErrors */ .iW.required),
  lastname: yup__WEBPACK_IMPORTED_MODULE_1__/* .string */ .Yj(),
  email: yup__WEBPACK_IMPORTED_MODULE_1__/* .string */ .Yj().email(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_0__/* .translatedErrors */ .iW.email).lowercase().required(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_0__/* .translatedErrors */ .iW.required),
  username: yup__WEBPACK_IMPORTED_MODULE_1__/* .string */ .Yj().nullable(),
  password: yup__WEBPACK_IMPORTED_MODULE_1__/* .string */ .Yj().min(8, _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_0__/* .translatedErrors */ .iW.minLength).matches(/[a-z]/, "components.Input.error.contain.lowercase").matches(/[A-Z]/, "components.Input.error.contain.uppercase").matches(/\d/, "components.Input.error.contain.number"),
  confirmPassword: yup__WEBPACK_IMPORTED_MODULE_1__/* .string */ .Yj().min(8, _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_0__/* .translatedErrors */ .iW.minLength).oneOf([yup__WEBPACK_IMPORTED_MODULE_1__/* .ref */ .KR("password"), null], "components.Input.error.password.noMatch").when("password", (password, passSchema) => {
    return password ? passSchema.required(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_0__/* .translatedErrors */ .iW.required) : passSchema;
  })
};



/***/ }

}]);