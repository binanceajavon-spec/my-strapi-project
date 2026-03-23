"use strict";
(self["webpackChunkmy_strapi_project"] = self["webpackChunkmy_strapi_project"] || []).push([[4483],{

/***/ 74483
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProtectedEditPage: () => (/* binding */ ProtectedEditPage)
/* harmony export */ });
/* unused harmony export EditPage */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69751);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21272);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94061);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85963);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90151);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(68074);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4198);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(55356);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(38413);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(83997);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(30893);
/* harmony import */ var _strapi_design_system_v2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(21610);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(59201);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(46270);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(54514);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(61535);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(79275);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(54894);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(71389);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(17703);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(12083);
/* harmony import */ var _index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(92129);
/* harmony import */ var _AuthenticatedApp_uHd_MPEB_mjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(38682);
/* harmony import */ var _SelectRoles_t6U3MuLd_mjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(52097);
/* harmony import */ var _validation_f9rGWFeU_mjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(97146);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(15126);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(63299);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(44633);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(59080);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(14718);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(82437);
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(5790);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(35223);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(5409);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(74930);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(80219);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(48940);
/* harmony import */ var lodash_defaultsDeep__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(41286);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(33955);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(13426);
/* harmony import */ var lodash_isBoolean__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(84624);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(346);
/* harmony import */ var lodash_isNaN__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(54257);
/* harmony import */ var lodash_toNumber__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(48829);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(51187);
/* harmony import */ var lodash_upperFirst__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(39404);
/* harmony import */ var lodash_fp__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(58692);
/* harmony import */ var lodash_take__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(501);
/* harmony import */ var codemirror5__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(57646);
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(23120);
/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(44414);
/* harmony import */ var markdown_it_abbr__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(25962);
/* harmony import */ var markdown_it_container__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(14664);
/* harmony import */ var markdown_it_deflist__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(42588);
/* harmony import */ var markdown_it_emoji__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(90325);
/* harmony import */ var markdown_it_footnote__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(62785);
/* harmony import */ var markdown_it_ins__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(87443);
/* harmony import */ var markdown_it_mark__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(41032);
/* harmony import */ var markdown_it_sub__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(22957);
/* harmony import */ var markdown_it_sup__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(93179);
/* harmony import */ var highlight_js_styles_solarized_dark_css__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(73055);
/* harmony import */ var codemirror5_addon_display_placeholder__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(15747);
/* harmony import */ var lodash_toString__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(62925);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(26509);
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(32058);
/* harmony import */ var lodash_unset__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(81185);
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(4642);
/* harmony import */ var semver_functions_lt__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(55151);
/* harmony import */ var semver_functions_valid__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(79077);
/* harmony import */ var _useAdminRoles_TJePFZ1V_mjs__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(68699);













































































const EDIT_VALIDATION_SCHEMA = yup__WEBPACK_IMPORTED_MODULE_20__/* .object */ .Ik().shape({
  ..._validation_f9rGWFeU_mjs__WEBPACK_IMPORTED_MODULE_24__.C,
  isActive: yup__WEBPACK_IMPORTED_MODULE_20__/* .bool */ .lc(),
  roles: yup__WEBPACK_IMPORTED_MODULE_20__/* .array */ .YO().min(1, _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_12__/* .translatedErrors */ .iW.required).required(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_12__/* .translatedErrors */ .iW.required)
});
const fieldsToPick = ["email", "firstname", "lastname", "username", "isActive", "roles"];
const EditPage = () => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A)();
  const match = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_19__/* .useRouteMatch */ .W5)("/settings/users/:id");
  const id = match?.params?.id ?? "";
  const { push } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_19__/* .useHistory */ .W6)();
  const toggleNotification = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_12__/* .useNotification */ .hN)();
  const { lockApp, unlockApp } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_12__/* .useOverlayBlocker */ .MA)();
  const MagicLink = (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_21__.p)(
    _SelectRoles_t6U3MuLd_mjs__WEBPACK_IMPORTED_MODULE_23__.M,
    async () => (await __webpack_require__.e(/* import() */ 7461).then(__webpack_require__.bind(__webpack_require__, 67461))).MagicLinkEE
  );
  const {
    _unstableFormatAPIError: formatAPIError,
    _unstableFormatValidationErrors: formatValidationErrors
  } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_12__/* .useAPIErrorHandler */ .wq)();
  const permissions = (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_21__.j)(_AuthenticatedApp_uHd_MPEB_mjs__WEBPACK_IMPORTED_MODULE_22__.s);
  const {
    isLoading: isLoadingRBAC,
    allowedActions: { canUpdate }
  } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_12__/* .useRBAC */ .ec)({
    read: permissions.settings?.users.read ?? [],
    update: permissions.settings?.users.update ?? []
  });
  const [updateUser] = (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_21__.M)();
  (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_12__/* .useFocusWhenNavigate */ .L4)();
  const {
    data,
    error,
    isLoading: isLoadingAdminUsers
  } = (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_21__.k)(
    { id },
    {
      refetchOnMountOrArgChange: true
    }
  );
  const [user] = data?.users ?? [];
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    if (error) {
      if (error.name === "UnauthorizedError") {
        toggleNotification({
          type: "info",
          message: {
            id: "notification.permission.not-allowed-read",
            defaultMessage: "You are not allowed to see this document"
          }
        });
        push("/");
      } else {
        toggleNotification({
          type: "warning",
          message: { id: "notification.error", defaultMessage: formatAPIError(error) }
        });
      }
    }
  }, [error, formatAPIError, push, toggleNotification]);
  const isLoading = isLoadingAdminUsers || !MagicLink || isLoadingRBAC;
  if (isLoading) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .Main */ .g, { "aria-busy": "true", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_12__/* .SettingsPageTitle */ .x7, { name: "Users" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .HeaderLayout */ .Q,
        {
          primaryAction: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .$, { disabled: true, startIcon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {}), type: "button", size: "L", children: formatMessage({ id: "global.save", defaultMessage: "Save" }) }),
          title: formatMessage({
            id: "app.containers.Users.EditPage.header.label-loading",
            defaultMessage: "Edit user"
          }),
          navigationAction: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _strapi_design_system_v2__WEBPACK_IMPORTED_MODULE_11__/* .Link */ .N,
            {
              as: react_router_dom__WEBPACK_IMPORTED_MODULE_18__/* .NavLink */ .k2,
              startIcon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {}),
              to: "/settings/users?pageSize=10&page=1&sort=firstname",
              children: formatMessage({
                id: "global.back",
                defaultMessage: "Back"
              })
            }
          )
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .ContentLayout */ .s, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_12__/* .LoadingIndicatorPage */ .Bl, {}) })
    ] });
  }
  const initialData = {
    ...lodash_pick__WEBPACK_IMPORTED_MODULE_16__(user, fieldsToPick),
    roles: user.roles.map(({ id: id2 }) => id2),
    password: "",
    confirmPassword: ""
  };
  const handleSubmit = async (body, actions) => {
    lockApp?.();
    const { confirmPassword, password, ...bodyRest } = body;
    const res = await updateUser({
      id,
      ...bodyRest,
      // The password should not be sent if it wasn't changed,
      // it leads to a validation error if the string is empty
      password: password === "" ? void 0 : password
    });
    if ("error" in res && (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_21__.x)(res.error)) {
      if (res.error.name === "ValidationError") {
        actions.setErrors(formatValidationErrors(res.error));
      }
      toggleNotification({
        type: "warning",
        message: formatAPIError(res.error)
      });
    } else {
      toggleNotification({
        type: "success",
        message: formatMessage({ id: "notification.success.saved", defaultMessage: "Saved" })
      });
      actions.setValues({
        ...lodash_pick__WEBPACK_IMPORTED_MODULE_16__(body, fieldsToPick),
        password: "",
        confirmPassword: ""
      });
    }
    unlockApp?.();
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .Main */ .g, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_12__/* .SettingsPageTitle */ .x7, { name: "Users" }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      formik__WEBPACK_IMPORTED_MODULE_15__/* .Formik */ .l1,
      {
        onSubmit: handleSubmit,
        initialValues: initialData,
        validateOnChange: false,
        validationSchema: EDIT_VALIDATION_SCHEMA,
        children: ({ errors, values, handleChange, isSubmitting, dirty }) => {
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_12__/* .Form */ .lV, { children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .HeaderLayout */ .Q,
              {
                primaryAction: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .$,
                  {
                    disabled: isSubmitting || !canUpdate ? true : !dirty,
                    startIcon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {}),
                    loading: isSubmitting,
                    type: "submit",
                    size: "L",
                    children: formatMessage({ id: "global.save", defaultMessage: "Save" })
                  }
                ),
                title: formatMessage(
                  {
                    id: "app.containers.Users.EditPage.header.label",
                    defaultMessage: "Edit {name}"
                  },
                  {
                    name: initialData.username || (0,_AuthenticatedApp_uHd_MPEB_mjs__WEBPACK_IMPORTED_MODULE_22__.g)(initialData?.firstname ?? "", initialData.lastname)
                  }
                ),
                navigationAction: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _strapi_design_system_v2__WEBPACK_IMPORTED_MODULE_11__/* .Link */ .N,
                  {
                    as: react_router_dom__WEBPACK_IMPORTED_MODULE_18__/* .NavLink */ .k2,
                    startIcon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {}),
                    to: "/settings/users?pageSize=10&page=1&sort=firstname",
                    children: formatMessage({
                      id: "global.back",
                      defaultMessage: "Back"
                    })
                  }
                )
              }
            ),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .ContentLayout */ .s, { children: [
              user?.registrationToken && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .a, { paddingBottom: 6, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MagicLink, { registrationToken: user.registrationToken }) }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_9__/* .Flex */ .s, { direction: "column", alignItems: "stretch", gap: 7, children: [
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .a,
                  {
                    background: "neutral0",
                    hasRadius: true,
                    shadow: "filterShadow",
                    paddingTop: 6,
                    paddingBottom: 6,
                    paddingLeft: 7,
                    paddingRight: 7,
                    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_9__/* .Flex */ .s, { direction: "column", alignItems: "stretch", gap: 4, children: [
                      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_10__/* .Typography */ .o, { variant: "delta", as: "h2", children: formatMessage({
                        id: "app.components.Users.ModalCreateBody.block-title.details",
                        defaultMessage: "Details"
                      }) }),
                      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .Grid */ .x, { gap: 5, children: LAYOUT.map(
                        (row) => row.map((input) => {
                          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .GridItem */ .E, { ...input.size, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_12__/* .GenericInput */ .ah,
                            {
                              ...input,
                              disabled: !canUpdate,
                              error: errors[input.name],
                              onChange: handleChange,
                              value: values[input.name]
                            }
                          ) }, input.name);
                        })
                      ) })
                    ] })
                  }
                ),
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .a,
                  {
                    background: "neutral0",
                    hasRadius: true,
                    shadow: "filterShadow",
                    paddingTop: 6,
                    paddingBottom: 6,
                    paddingLeft: 7,
                    paddingRight: 7,
                    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_9__/* .Flex */ .s, { direction: "column", alignItems: "stretch", gap: 4, children: [
                      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_10__/* .Typography */ .o, { variant: "delta", as: "h2", children: formatMessage({
                        id: "global.roles",
                        defaultMessage: "User's role"
                      }) }),
                      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .Grid */ .x, { gap: 5, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .GridItem */ .E, { col: 6, xs: 12, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _SelectRoles_t6U3MuLd_mjs__WEBPACK_IMPORTED_MODULE_23__.S,
                        {
                          disabled: !canUpdate,
                          error: errors.roles,
                          onChange: handleChange,
                          value: values.roles
                        }
                      ) }) })
                    ] })
                  }
                )
              ] })
            ] })
          ] });
        }
      }
    )
  ] });
};
const LAYOUT = [
  [
    {
      intlLabel: {
        id: "Auth.form.firstname.label",
        defaultMessage: "First name"
      },
      name: "firstname",
      placeholder: {
        id: "Auth.form.firstname.placeholder",
        defaultMessage: "e.g. Kai"
      },
      type: "text",
      size: {
        col: 6,
        xs: 12
      },
      required: true
    },
    {
      intlLabel: {
        id: "Auth.form.lastname.label",
        defaultMessage: "Last name"
      },
      name: "lastname",
      placeholder: {
        id: "Auth.form.lastname.placeholder",
        defaultMessage: "e.g. Doe"
      },
      type: "text",
      size: {
        col: 6,
        xs: 12
      }
    }
  ],
  [
    {
      intlLabel: {
        id: "Auth.form.email.label",
        defaultMessage: "Email"
      },
      name: "email",
      placeholder: {
        id: "Auth.form.email.placeholder",
        defaultMessage: "e.g. kai.doe@strapi.io"
      },
      type: "email",
      size: {
        col: 6,
        xs: 12
      },
      required: true
    },
    {
      intlLabel: {
        id: "Auth.form.username.label",
        defaultMessage: "Username"
      },
      name: "username",
      placeholder: {
        id: "Auth.form.username.placeholder",
        defaultMessage: "e.g. Kai_Doe"
      },
      type: "text",
      size: {
        col: 6,
        xs: 12
      }
    }
  ],
  [
    {
      intlLabel: {
        id: "global.password",
        defaultMessage: "Password"
      },
      name: "password",
      type: "password",
      size: {
        col: 6,
        xs: 12
      },
      autoComplete: "new-password"
    },
    {
      intlLabel: {
        id: "Auth.form.confirmPassword.label",
        defaultMessage: "Password confirmation"
      },
      name: "confirmPassword",
      type: "password",
      size: {
        col: 6,
        xs: 12
      },
      autoComplete: "new-password"
    }
  ],
  [
    {
      intlLabel: {
        id: "Auth.form.active.label",
        defaultMessage: "Active"
      },
      name: "isActive",
      type: "bool",
      size: {
        col: 6,
        xs: 12
      }
    }
  ]
];
const ProtectedEditPage = () => {
  const toggleNotification = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_12__/* .useNotification */ .hN)();
  const permissions = (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_21__.j)(_AuthenticatedApp_uHd_MPEB_mjs__WEBPACK_IMPORTED_MODULE_22__.s);
  const {
    isLoading,
    allowedActions: { canRead, canUpdate }
  } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_12__/* .useRBAC */ .ec)({
    read: permissions.settings?.users.read ?? [],
    update: permissions.settings?.users.update ?? []
  });
  const { state } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_19__/* .useLocation */ .zy)();
  const from = state?.from ?? "/";
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    if (!isLoading) {
      if (!canRead && !canUpdate) {
        toggleNotification({
          type: "info",
          message: {
            id: "notification.permission.not-allowed-read",
            defaultMessage: "You are not allowed to see this document"
          }
        });
      }
    }
  }, [isLoading, canRead, canUpdate, toggleNotification]);
  if (isLoading) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_12__/* .LoadingIndicatorPage */ .Bl, {});
  }
  if (!canRead && !canUpdate) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__/* .Redirect */ .rd, { to: from });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(EditPage, {});
};



/***/ },

/***/ 52097
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ MagicLinkCE),
/* harmony export */   S: () => (/* binding */ SelectRoles),
/* harmony export */   a: () => (/* binding */ MagicLinkWrapper)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69751);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54894);
/* harmony import */ var _index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92129);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88353);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56654);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59201);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90625);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(84795);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(47610);
/* harmony import */ var _useAdminRoles_TJePFZ1V_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(68699);








const MagicLinkWrapper = ({ children, target }) => {
  const toggleNotification = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_5__/* .useNotification */ .hN)();
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)();
  const { copy } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_5__/* .useClipboard */ .iD)();
  const copyLabel = formatMessage({
    id: "app.component.CopyToClipboard.label",
    defaultMessage: "Copy to clipboard"
  });
  const handleClick = async () => {
    const didCopy = await copy(target);
    if (didCopy) {
      toggleNotification({ type: "info", message: { id: "notification.link-copied" } });
    }
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_5__/* .ContentBox */ .bQ,
    {
      endAction: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .IconButton */ .K, { label: copyLabel, noBorder: true, icon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {}), onClick: handleClick }),
      title: target,
      titleEllipsis: true,
      subtitle: children,
      icon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { fontSize: 32 }, children: "\u2709\uFE0F" }),
      iconBackground: "neutral100"
    }
  );
};
const MagicLinkCE = ({ registrationToken }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)();
  const target = `${window.location.origin}${(0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_2__.K)()}/auth/register?registrationToken=${registrationToken}`;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MagicLinkWrapper, { target, children: formatMessage({
    id: "app.components.Users.MagicLink.connect",
    defaultMessage: "Copy and share this link to give access to this user"
  }) });
};
const SelectRoles = ({ disabled, error, onChange, value }) => {
  const { isLoading, roles } = (0,_useAdminRoles_TJePFZ1V_mjs__WEBPACK_IMPORTED_MODULE_9__.u)();
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)();
  const errorMessage = error ? formatMessage({ id: error, defaultMessage: error }) : "";
  const label = formatMessage({
    id: "app.components.Users.ModalCreateBody.block-title.roles",
    defaultMessage: "User's roles"
  });
  const hint = formatMessage({
    id: "app.components.Users.ModalCreateBody.block-title.roles.description",
    defaultMessage: "A user can have one or several roles"
  });
  const placeholder = formatMessage({
    id: "app.components.Select.placeholder",
    defaultMessage: "Select"
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .MultiSelect */ .KF,
    {
      id: "roles",
      disabled,
      error: errorMessage,
      hint,
      label,
      name: "roles",
      onChange: (v) => {
        onChange({ target: { name: "roles", value: v } });
      },
      placeholder,
      startIcon: isLoading ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Loader, {}) : void 0,
      value: value.map((v) => v.toString()),
      withTags: true,
      required: true,
      children: roles.map((role) => {
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .MultiSelectOption */ .fe, { value: role.id.toString(), children: formatMessage({
          id: `global.${role.code}`,
          defaultMessage: role.name
        }) }, role.id);
      })
    }
  );
};
const rotation = (0,styled_components__WEBPACK_IMPORTED_MODULE_8__/* .keyframes */ .i7)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;
const LoadingWrapper = styled_components__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay.div`
  animation: ${rotation} 2s infinite linear;
`;
const Loader = () => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(LoadingWrapper, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {}) });



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