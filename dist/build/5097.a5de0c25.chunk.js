"use strict";
(self["webpackChunkmy_strapi_project"] = self["webpackChunkmy_strapi_project"] || []).push([[5097],{

/***/ 65097
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProtectedSettingsPage: () => (/* binding */ ProtectedSettingsPage)
/* harmony export */ });
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
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(43739);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(95336);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7537);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(30893);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(59201);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(34313);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(54894);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(74930);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(47610);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(12083);
/* harmony import */ var _index_lrNO1xVF_mjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(87823);











const schema = yup__WEBPACK_IMPORTED_MODULE_19__/* .object */ .Ik().shape({
  email: yup__WEBPACK_IMPORTED_MODULE_19__/* .string */ .Yj().email(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .translatedErrors */ .iW.email).required(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .translatedErrors */ .iW.required)
});
const DocumentationLink = styled_components__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Ay.a`
  color: ${({ theme }) => theme.colors.primary600};
`;
const ProtectedSettingsPage = () => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .CheckPagePermissions */ .kz, { permissions: _index_lrNO1xVF_mjs__WEBPACK_IMPORTED_MODULE_20__.P.settings, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SettingsPage, {}) });
const SettingsPage = () => {
  const toggleNotification = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .useNotification */ .hN)();
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A)();
  const { lockApp, unlockApp } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .useOverlayBlocker */ .MA)();
  const { get, post } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .useFetchClient */ .ry)();
  const [testAddress, setTestAddress] = react__WEBPACK_IMPORTED_MODULE_1__.useState("");
  const [isTestAddressValid, setIsTestAddressValid] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
  const [formErrors, setFormErrors] = react__WEBPACK_IMPORTED_MODULE_1__.useState({});
  const { data, isLoading } = (0,react_query__WEBPACK_IMPORTED_MODULE_17__.useQuery)(["email", "settings"], async () => {
    const res = await get("/email/settings");
    const {
      data: { config }
    } = res;
    return config;
  });
  const mutation = (0,react_query__WEBPACK_IMPORTED_MODULE_17__.useMutation)(
    async (body) => {
      await post("/email/test", body);
    },
    {
      onError() {
        toggleNotification({
          type: "warning",
          message: formatMessage(
            {
              id: "email.Settings.email.plugin.notification.test.error",
              defaultMessage: "Failed to send a test mail to {to}"
            },
            { to: testAddress }
          )
        });
      },
      onSuccess() {
        toggleNotification({
          type: "success",
          message: formatMessage(
            {
              id: "email.Settings.email.plugin.notification.test.success",
              defaultMessage: "Email test succeeded, check the {to} mailbox"
            },
            { to: testAddress }
          )
        });
      },
      retry: false
    }
  );
  (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .useFocusWhenNavigate */ .L4)();
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    schema.validate({ email: testAddress }, { abortEarly: false }).then(() => setIsTestAddressValid(true)).catch(() => setIsTestAddressValid(false));
  }, [testAddress]);
  const handleChange = (event) => {
    setTestAddress(() => event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await schema.validate({ email: testAddress }, { abortEarly: false });
    } catch (error) {
      if (error instanceof yup__WEBPACK_IMPORTED_MODULE_19__/* .ValidationError */ .yI) {
        setFormErrors((0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .getYupInnerErrors */ .ed)(error));
      }
    }
    lockApp();
    mutation.mutate({ to: testAddress });
    unlockApp();
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .Main */ .g, { labelledBy: "title", "aria-busy": isLoading || mutation.isLoading, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .SettingsPageTitle */ .x7,
      {
        name: formatMessage({
          id: "email.Settings.email.plugin.title",
          defaultMessage: "Configuration"
        })
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .HeaderLayout */ .Q,
      {
        id: "title",
        title: formatMessage({
          id: "email.Settings.email.plugin.title",
          defaultMessage: "Configuration"
        }),
        subtitle: formatMessage({
          id: "email.Settings.email.plugin.subTitle",
          defaultMessage: "Test the settings for the Email plugin"
        })
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .ContentLayout */ .s, { children: isLoading ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .LoadingIndicatorPage */ .Bl, {}) : data && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("form", { onSubmit: handleSubmit, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_9__/* .Flex */ .s, { direction: "column", alignItems: "stretch", gap: 7, children: [
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
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_9__/* .Flex */ .s, { direction: "column", alignItems: "stretch", gap: 1, children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_13__/* .Typography */ .o, { variant: "delta", as: "h2", children: formatMessage({
                id: "email.Settings.email.plugin.title.config",
                defaultMessage: "Configuration"
              }) }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_13__/* .Typography */ .o, { children: formatMessage(
                {
                  id: "email.Settings.email.plugin.text.configuration",
                  defaultMessage: "The plugin is configured through the {file} file, checkout this {link} for the documentation."
                },
                {
                  file: "./config/plugins.js",
                  link: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    DocumentationLink,
                    {
                      href: "https://docs.strapi.io/developer-docs/latest/plugins/email.html",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: formatMessage({
                        id: "email.link",
                        defaultMessage: "Link"
                      })
                    }
                  )
                }
              ) })
            ] }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .Grid */ .x, { gap: 5, children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .GridItem */ .E, { col: 6, s: 12, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _strapi_design_system__WEBPACK_IMPORTED_MODULE_12__/* .TextInput */ .k,
                {
                  name: "shipper-email",
                  label: formatMessage({
                    id: "email.Settings.email.plugin.label.defaultFrom",
                    defaultMessage: "Default sender email"
                  }),
                  placeholder: formatMessage({
                    id: "email.Settings.email.plugin.placeholder.defaultFrom",
                    defaultMessage: "ex: Strapi No-Reply '<'no-reply@strapi.io'>'"
                  }),
                  disabled: true,
                  value: data.settings.defaultFrom
                }
              ) }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .GridItem */ .E, { col: 6, s: 12, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _strapi_design_system__WEBPACK_IMPORTED_MODULE_12__/* .TextInput */ .k,
                {
                  name: "response-email",
                  label: formatMessage({
                    id: "email.Settings.email.plugin.label.defaultReplyTo",
                    defaultMessage: "Default response email"
                  }),
                  placeholder: formatMessage({
                    id: "email.Settings.email.plugin.placeholder.defaultReplyTo",
                    defaultMessage: `ex: Strapi '<'example@strapi.io'>'`
                  }),
                  disabled: true,
                  value: data.settings.defaultReplyTo
                }
              ) }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .GridItem */ .E, { col: 6, s: 12, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _strapi_design_system__WEBPACK_IMPORTED_MODULE_10__/* .Select */ .l,
                {
                  name: "email-provider",
                  label: formatMessage({
                    id: "email.Settings.email.plugin.label.provider",
                    defaultMessage: "Email provider"
                  }),
                  disabled: true,
                  value: data.provider,
                  children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_11__/* .Option */ .c, { value: data.provider, children: data.provider })
                }
              ) })
            ] })
          ] })
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
        _strapi_design_system__WEBPACK_IMPORTED_MODULE_9__/* .Flex */ .s,
        {
          alignItems: "stretch",
          background: "neutral0",
          direction: "column",
          gap: 4,
          hasRadius: true,
          shadow: "filterShadow",
          paddingTop: 6,
          paddingBottom: 6,
          paddingLeft: 7,
          paddingRight: 7,
          children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_13__/* .Typography */ .o, { variant: "delta", as: "h2", children: formatMessage({
              id: "email.Settings.email.plugin.title.test",
              defaultMessage: "Test email delivery"
            }) }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .Grid */ .x, { gap: 5, children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .GridItem */ .E, { col: 6, s: 12, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _strapi_design_system__WEBPACK_IMPORTED_MODULE_12__/* .TextInput */ .k,
                {
                  id: "test-address-input",
                  name: "test-address",
                  onChange: handleChange,
                  label: formatMessage({
                    id: "email.Settings.email.plugin.label.testAddress",
                    defaultMessage: "Recipient email"
                  }),
                  value: testAddress,
                  error: formErrors.email?.id && formatMessage({
                    id: `email.${formErrors.email?.id}`,
                    defaultMessage: "This is an invalid email"
                  }),
                  placeholder: formatMessage({
                    id: "email.Settings.email.plugin.placeholder.testAddress",
                    defaultMessage: "ex: developer@example.com"
                  })
                }
              ) }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .GridItem */ .E, { col: 7, s: 12, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .$,
                {
                  loading: mutation.isLoading,
                  disabled: !isTestAddressValid,
                  type: "submit",
                  startIcon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {}),
                  children: formatMessage({
                    id: "email.Settings.email.plugin.button.test-email",
                    defaultMessage: "Send test email"
                  })
                }
              ) })
            ] })
          ]
        }
      )
    ] }) }) })
  ] });
};



/***/ }

}]);