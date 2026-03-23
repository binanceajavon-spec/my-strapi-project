"use strict";
(self["webpackChunkmy_strapi_project"] = self["webpackChunkmy_strapi_project"] || []).push([[5413],{

/***/ 55413
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProtectedAdvancedSettingsPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69751);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21272);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94061);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85963);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90151);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(68074);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4198);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(55356);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(11273);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(38413);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(83997);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(43739);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(95336);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(30893);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(59201);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(54514);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(61535);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(54894);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(74930);
/* harmony import */ var _index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(87814);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(346);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(12083);











const layout = [
  {
    intlLabel: {
      id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_19__.g)("EditForm.inputToggle.label.email"),
      defaultMessage: "One account per email address"
    },
    description: {
      id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_19__.g)("EditForm.inputToggle.description.email"),
      defaultMessage: "Disallow the user to create multiple accounts using the same email address with different authentication providers."
    },
    name: "unique_email",
    type: "bool",
    size: {
      col: 12,
      xs: 12
    }
  },
  {
    intlLabel: {
      id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_19__.g)("EditForm.inputToggle.label.sign-up"),
      defaultMessage: "Enable sign-ups"
    },
    description: {
      id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_19__.g)("EditForm.inputToggle.description.sign-up"),
      defaultMessage: "When disabled (OFF), the registration process is forbidden. No one can subscribe anymore no matter the used provider."
    },
    name: "allow_register",
    type: "bool",
    size: {
      col: 12,
      xs: 12
    }
  },
  {
    intlLabel: {
      id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_19__.g)("EditForm.inputToggle.label.email-reset-password"),
      defaultMessage: "Reset password page"
    },
    description: {
      id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_19__.g)("EditForm.inputToggle.description.email-reset-password"),
      defaultMessage: "URL of your application's reset password page."
    },
    placeholder: {
      id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_19__.g)("EditForm.inputToggle.placeholder.email-reset-password"),
      defaultMessage: "ex: https://youtfrontend.com/reset-password"
    },
    name: "email_reset_password",
    type: "text",
    size: {
      col: 6,
      xs: 12
    }
  },
  {
    intlLabel: {
      id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_19__.g)("EditForm.inputToggle.label.email-confirmation"),
      defaultMessage: "Enable email confirmation"
    },
    description: {
      id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_19__.g)("EditForm.inputToggle.description.email-confirmation"),
      defaultMessage: "When enabled (ON), new registered users receive a confirmation email."
    },
    name: "email_confirmation",
    type: "bool",
    size: {
      col: 12,
      xs: 12
    }
  },
  {
    intlLabel: {
      id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_19__.g)("EditForm.inputToggle.label.email-confirmation-redirection"),
      defaultMessage: "Redirection url"
    },
    description: {
      id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_19__.g)("EditForm.inputToggle.description.email-confirmation-redirection"),
      defaultMessage: "After you confirmed your email, choose where you will be redirected."
    },
    placeholder: {
      id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_19__.g)("EditForm.inputToggle.placeholder.email-confirmation-redirection"),
      defaultMessage: "ex: https://youtfrontend.com/email-confirmation"
    },
    name: "email_confirmation_redirection",
    type: "text",
    size: {
      col: 6,
      xs: 12
    }
  }
];
const URL_REGEX = new RegExp("(^$)|((.+:\\/\\/.*)(d*)\\/?(.*))");
const schema = yup__WEBPACK_IMPORTED_MODULE_21__/* .object */ .Ik().shape({
  email_confirmation_redirection: yup__WEBPACK_IMPORTED_MODULE_21__/* .mixed */ .gl().when("email_confirmation", {
    is: true,
    then: yup__WEBPACK_IMPORTED_MODULE_21__/* .string */ .Yj().matches(URL_REGEX).required(),
    otherwise: yup__WEBPACK_IMPORTED_MODULE_21__/* .string */ .Yj().nullable()
  }),
  email_reset_password: yup__WEBPACK_IMPORTED_MODULE_21__/* .string */ .Yj(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .translatedErrors */ .iW.string).matches(URL_REGEX, _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .translatedErrors */ .iW.regex).nullable()
});
const ProtectedAdvancedSettingsPage = () => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .CheckPagePermissions */ .kz, { permissions: _index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_19__.P.readAdvancedSettings, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AdvancedSettingsPage, {}) });
const AdvancedSettingsPage = () => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A)();
  const toggleNotification = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .useNotification */ .hN)();
  const { lockApp, unlockApp } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .useOverlayBlocker */ .MA)();
  const { notifyStatus } = (0,_strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .useNotifyAT */ .W)();
  const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_18__.useQueryClient)();
  const { get, put } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .useFetchClient */ .ry)();
  const { formatAPIError } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .useAPIErrorHandler */ .wq)();
  (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .useFocusWhenNavigate */ .L4)();
  const {
    isLoading: isLoadingForPermissions,
    allowedActions: { canUpdate }
  } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .useRBAC */ .ec)({ update: _index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_19__.P.updateAdvancedSettings });
  const { isLoading: isLoadingData, data } = (0,react_query__WEBPACK_IMPORTED_MODULE_18__.useQuery)(
    ["users-permissions", "advanced"],
    async () => {
      const { data: data2 } = await get("/users-permissions/advanced");
      return data2;
    },
    {
      onSuccess() {
        notifyStatus(
          formatMessage({
            id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_19__.g)("Form.advancedSettings.data.loaded"),
            defaultMessage: "Advanced settings data has been loaded"
          })
        );
      },
      onError() {
        toggleNotification({
          type: "warning",
          message: { id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_19__.g)("notification.error"), defaultMessage: "An error occured" }
        });
      }
    }
  );
  const isLoading = isLoadingForPermissions || isLoadingData;
  const submitMutation = (0,react_query__WEBPACK_IMPORTED_MODULE_18__.useMutation)((body) => put("/users-permissions/advanced", body), {
    async onSuccess() {
      await queryClient.invalidateQueries(["users-permissions", "advanced"]);
      toggleNotification({
        type: "success",
        message: { id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_19__.g)("notification.success.saved"), defaultMessage: "Saved" }
      });
      unlockApp();
    },
    onError(error) {
      toggleNotification({
        type: "warning",
        message: formatAPIError(error)
      });
      unlockApp();
    },
    refetchActive: true
  });
  const { isLoading: isSubmittingForm } = submitMutation;
  const handleSubmit = async (body) => {
    lockApp();
    submitMutation.mutate({
      ...body,
      email_confirmation_redirection: body.email_confirmation ? body.email_confirmation_redirection : ""
    });
  };
  if (isLoading) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_9__/* .Main */ .g, { "aria-busy": "true", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .SettingsPageTitle */ .x7,
        {
          name: formatMessage({
            id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_19__.g)("HeaderNav.link.advancedSettings"),
            defaultMessage: "Advanced Settings"
          })
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .HeaderLayout */ .Q,
        {
          title: formatMessage({
            id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_19__.g)("HeaderNav.link.advancedSettings"),
            defaultMessage: "Advanced Settings"
          })
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .ContentLayout */ .s, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .LoadingIndicatorPage */ .Bl, {}) })
    ] });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_9__/* .Main */ .g, { "aria-busy": isSubmittingForm, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .SettingsPageTitle */ .x7,
      {
        name: formatMessage({
          id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_19__.g)("HeaderNav.link.advancedSettings"),
          defaultMessage: "Advanced Settings"
        })
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      formik__WEBPACK_IMPORTED_MODULE_16__/* .Formik */ .l1,
      {
        onSubmit: handleSubmit,
        initialValues: data.settings,
        validateOnChange: false,
        validationSchema: schema,
        enableReinitialize: true,
        children: ({ errors, values, handleChange, isSubmitting, dirty }) => {
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .Form */ .lV, { children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .HeaderLayout */ .Q,
              {
                title: formatMessage({
                  id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_19__.g)("HeaderNav.link.advancedSettings"),
                  defaultMessage: "Advanced Settings"
                }),
                primaryAction: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .$,
                  {
                    loading: isSubmitting,
                    type: "submit",
                    disabled: canUpdate ? !dirty : !canUpdate,
                    startIcon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {}),
                    size: "S",
                    children: formatMessage({ id: "global.save", defaultMessage: "Save" })
                  }
                )
              }
            ),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .ContentLayout */ .s, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .a,
              {
                background: "neutral0",
                hasRadius: true,
                shadow: "filterShadow",
                paddingTop: 6,
                paddingBottom: 6,
                paddingLeft: 7,
                paddingRight: 7,
                children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_10__/* .Flex */ .s, { direction: "column", alignItems: "stretch", gap: 4, children: [
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_13__/* .Typography */ .o, { variant: "delta", as: "h2", children: formatMessage({
                    id: "global.settings",
                    defaultMessage: "Settings"
                  }) }),
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .Grid */ .x, { gap: 6, children: [
                    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .GridItem */ .E, { col: 6, s: 12, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _strapi_design_system__WEBPACK_IMPORTED_MODULE_11__/* .Select */ .l,
                      {
                        label: formatMessage({
                          id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_19__.g)("EditForm.inputSelect.label.role"),
                          defaultMessage: "Default role for authenticated users"
                        }),
                        value: values.default_role,
                        hint: formatMessage({
                          id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_19__.g)("EditForm.inputSelect.description.role"),
                          defaultMessage: "It will attach the new authenticated user to the selected role."
                        }),
                        onChange: (e) => handleChange({ target: { name: "default_role", value: e } }),
                        children: data.roles.map((role) => {
                          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_12__/* .Option */ .c, { value: role.type, children: role.name }, role.type);
                        })
                      }
                    ) }),
                    layout.map((input) => {
                      let value = values[input.name];
                      if (!value) {
                        value = input.type === "bool" ? false : "";
                      }
                      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .GridItem */ .E, { ...input.size, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .GenericInput */ .ah,
                        {
                          ...input,
                          value,
                          error: errors[input.name],
                          disabled: input.name === "email_confirmation_redirection" && values.email_confirmation === false,
                          onChange: handleChange
                        }
                      ) }, input.name);
                    })
                  ] })
                ] })
              }
            ) })
          ] });
        }
      }
    )
  ] });
};



/***/ }

}]);