"use strict";
(self["webpackChunkmy_strapi_project"] = self["webpackChunkmy_strapi_project"] || []).push([[8428],{

/***/ 78428
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProvidersPage: () => (/* binding */ ProvidersPage),
/* harmony export */   "default": () => (/* binding */ ProtectedProvidersPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69751);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21272);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85963);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90151);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68074);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88353);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42455);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4198);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(55356);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(38413);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(61485);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(99248);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(67030);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6239);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(83997);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(35513);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(25641);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(26127);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(90361);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(33363);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(7537);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(7441);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(30893);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(98765);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(59201);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(41909);
/* harmony import */ var lodash_upperFirst__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(39404);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(54894);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(74930);
/* harmony import */ var _strapi_design_system_v2__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(37679);
/* harmony import */ var _strapi_design_system_v2__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(60043);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(61535);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(11163);
/* harmony import */ var _index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(87814);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(346);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(12083);














const Input = ({
  description,
  disabled,
  intlLabel,
  error,
  name,
  onChange,
  placeholder,
  providerToEditName,
  type,
  value
}) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A)();
  const inputValue = name === "noName" ? `${window.strapi.backendURL}/api/connect/${providerToEditName}/callback` : value;
  const label = formatMessage(
    { id: intlLabel.id, defaultMessage: intlLabel.defaultMessage },
    { provider: providerToEditName, ...intlLabel.values }
  );
  const hint = description ? formatMessage(
    { id: description.id, defaultMessage: description.defaultMessage },
    { provider: providerToEditName, ...description.values }
  ) : "";
  if (type === "bool") {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _strapi_design_system__WEBPACK_IMPORTED_MODULE_21__/* .ToggleInput */ .l,
      {
        "aria-label": name,
        checked: value,
        disabled,
        hint,
        label,
        name,
        offLabel: formatMessage({
          id: "app.components.ToggleCheckbox.off-label",
          defaultMessage: "Off"
        }),
        onLabel: formatMessage({
          id: "app.components.ToggleCheckbox.on-label",
          defaultMessage: "On"
        }),
        onChange: (e) => {
          onChange({ target: { name, value: e.target.checked } });
        }
      }
    );
  }
  const formattedPlaceholder = placeholder ? formatMessage(
    { id: placeholder.id, defaultMessage: placeholder.defaultMessage },
    { ...placeholder.values }
  ) : "";
  const errorMessage = error ? formatMessage({ id: error, defaultMessage: error }) : "";
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_20__/* .TextInput */ .k,
    {
      "aria-label": name,
      disabled,
      error: errorMessage,
      label,
      name,
      onChange,
      placeholder: formattedPlaceholder,
      type,
      value: inputValue
    }
  );
};
Input.defaultProps = {
  description: null,
  disabled: false,
  error: "",
  placeholder: null,
  value: ""
};
Input.propTypes = {
  description: prop_types__WEBPACK_IMPORTED_MODULE_32__.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_32__.string.isRequired,
    defaultMessage: prop_types__WEBPACK_IMPORTED_MODULE_32__.string.isRequired,
    values: prop_types__WEBPACK_IMPORTED_MODULE_32__.object
  }),
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_32__.bool,
  error: prop_types__WEBPACK_IMPORTED_MODULE_32__.string,
  intlLabel: prop_types__WEBPACK_IMPORTED_MODULE_32__.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_32__.string.isRequired,
    defaultMessage: prop_types__WEBPACK_IMPORTED_MODULE_32__.string.isRequired,
    values: prop_types__WEBPACK_IMPORTED_MODULE_32__.object
  }).isRequired,
  name: prop_types__WEBPACK_IMPORTED_MODULE_32__.string.isRequired,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_32__.func.isRequired,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_32__.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_32__.string.isRequired,
    defaultMessage: prop_types__WEBPACK_IMPORTED_MODULE_32__.string.isRequired,
    values: prop_types__WEBPACK_IMPORTED_MODULE_32__.object
  }),
  providerToEditName: prop_types__WEBPACK_IMPORTED_MODULE_32__.string.isRequired,
  type: prop_types__WEBPACK_IMPORTED_MODULE_32__.string.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_32__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_32__.bool, prop_types__WEBPACK_IMPORTED_MODULE_32__.string])
};
const FormModal = ({
  headerBreadcrumbs,
  initialData,
  isSubmiting,
  layout,
  isOpen,
  onSubmit,
  onToggle,
  providerToEditName
}) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A)();
  if (!isOpen) {
    return null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_10__/* .ModalLayout */ .k, { onClose: onToggle, labelledBy: "title", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_11__/* .ModalHeader */ .r, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system_v2__WEBPACK_IMPORTED_MODULE_29__/* .Breadcrumbs */ .B, { label: headerBreadcrumbs.join(", "), children: headerBreadcrumbs.map((crumb, index, arr) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system_v2__WEBPACK_IMPORTED_MODULE_30__/* .Crumb */ .m, { isCurrent: index === arr.length - 1, children: crumb }, crumb)) }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      formik__WEBPACK_IMPORTED_MODULE_31__/* .Formik */ .l1,
      {
        onSubmit: (values) => onSubmit(values),
        initialValues: initialData,
        validationSchema: layout.schema,
        validateOnChange: false,
        children: ({ errors, handleChange, values }) => {
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_24__/* .Form */ .lV, { children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_13__/* .ModalBody */ .c, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_14__/* .Flex */ .s, { direction: "column", alignItems: "stretch", gap: 1, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Grid */ .x, { gap: 5, children: layout.form.map((row) => {
              return row.map((input) => {
                return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .GridItem */ .E, { col: input.size, xs: 12, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  Input,
                  {
                    ...input,
                    error: errors[input.name],
                    onChange: handleChange,
                    value: values[input.name],
                    providerToEditName
                  }
                ) }, input.name);
              });
            }) }) }) }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _strapi_design_system__WEBPACK_IMPORTED_MODULE_12__/* .ModalFooter */ .j,
              {
                startActions: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .$, { variant: "tertiary", onClick: onToggle, type: "button", children: formatMessage({
                  id: "app.components.Button.cancel",
                  defaultMessage: "Cancel"
                }) }),
                endActions: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .$, { type: "submit", loading: isSubmiting, children: formatMessage({ id: "global.save", defaultMessage: "Save" }) })
              }
            )
          ] });
        }
      }
    )
  ] });
};
FormModal.defaultProps = {
  initialData: null,
  providerToEditName: null
};
FormModal.propTypes = {
  headerBreadcrumbs: prop_types__WEBPACK_IMPORTED_MODULE_32__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_32__.string).isRequired,
  initialData: prop_types__WEBPACK_IMPORTED_MODULE_32__.object,
  layout: prop_types__WEBPACK_IMPORTED_MODULE_32__.shape({
    form: prop_types__WEBPACK_IMPORTED_MODULE_32__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_32__.array),
    schema: prop_types__WEBPACK_IMPORTED_MODULE_32__.object
  }).isRequired,
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_32__.bool.isRequired,
  isSubmiting: prop_types__WEBPACK_IMPORTED_MODULE_32__.bool.isRequired,
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_32__.func.isRequired,
  onToggle: prop_types__WEBPACK_IMPORTED_MODULE_32__.func.isRequired,
  providerToEditName: prop_types__WEBPACK_IMPORTED_MODULE_32__.string
};
const callbackLabel = {
  id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_33__.g)("PopUpForm.Providers.redirectURL.front-end.label"),
  defaultMessage: "The redirect URL to your front-end app"
};
const callbackPlaceholder = {
  id: "http://www.client-app.com",
  defaultMessage: "http://www.client-app.com"
};
const enabledDescription = {
  id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_33__.g)("PopUpForm.Providers.enabled.description"),
  defaultMessage: "If disabled, users won't be able to use this provider."
};
const enabledLabel = {
  id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_33__.g)("PopUpForm.Providers.enabled.label"),
  defaultMessage: "Enable"
};
const keyLabel = { id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_33__.g)("PopUpForm.Providers.key.label"), defaultMessage: "Client ID" };
const hintLabel = {
  id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_33__.g)("PopUpForm.Providers.redirectURL.label"),
  defaultMessage: "The redirect URL to add in your {provider} application configurations"
};
const textPlaceholder = {
  id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_33__.g)("PopUpForm.Providers.key.placeholder"),
  defaultMessage: "TEXT"
};
const secretLabel = {
  id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_33__.g)("PopUpForm.Providers.secret.label"),
  defaultMessage: "Client Secret"
};
const forms = {
  email: {
    form: [
      [
        {
          intlLabel: enabledLabel,
          name: "enabled",
          type: "bool",
          description: enabledDescription,
          size: 6
          // TODO check if still needed
          // validations: {
          //   required: true,
          // },
        }
      ]
    ],
    schema: yup__WEBPACK_IMPORTED_MODULE_35__/* .object */ .Ik().shape({
      enabled: yup__WEBPACK_IMPORTED_MODULE_35__/* .bool */ .lc().required(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_24__/* .translatedErrors */ .iW.required)
    })
  },
  providers: {
    form: [
      [
        {
          intlLabel: enabledLabel,
          name: "enabled",
          type: "bool",
          description: enabledDescription,
          size: 6,
          validations: {
            required: true
          }
        }
      ],
      [
        {
          intlLabel: keyLabel,
          name: "key",
          type: "text",
          placeholder: textPlaceholder,
          size: 12,
          validations: {
            required: true
          }
        }
      ],
      [
        {
          intlLabel: secretLabel,
          name: "secret",
          type: "text",
          placeholder: textPlaceholder,
          size: 12,
          validations: {
            required: true
          }
        }
      ],
      [
        {
          intlLabel: callbackLabel,
          placeholder: callbackPlaceholder,
          name: "callback",
          type: "text",
          size: 12,
          validations: {
            required: true
          }
        }
      ],
      [
        {
          intlLabel: hintLabel,
          name: "noName",
          type: "text",
          validations: {},
          size: 12,
          disabled: true
        }
      ]
    ],
    schema: yup__WEBPACK_IMPORTED_MODULE_35__/* .object */ .Ik().shape({
      enabled: yup__WEBPACK_IMPORTED_MODULE_35__/* .bool */ .lc().required(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_24__/* .translatedErrors */ .iW.required),
      key: yup__WEBPACK_IMPORTED_MODULE_35__/* .string */ .Yj().when("enabled", {
        is: true,
        then: yup__WEBPACK_IMPORTED_MODULE_35__/* .string */ .Yj().required(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_24__/* .translatedErrors */ .iW.required),
        otherwise: yup__WEBPACK_IMPORTED_MODULE_35__/* .string */ .Yj()
      }),
      secret: yup__WEBPACK_IMPORTED_MODULE_35__/* .string */ .Yj().when("enabled", {
        is: true,
        then: yup__WEBPACK_IMPORTED_MODULE_35__/* .string */ .Yj().required(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_24__/* .translatedErrors */ .iW.required),
        otherwise: yup__WEBPACK_IMPORTED_MODULE_35__/* .string */ .Yj()
      }),
      callback: yup__WEBPACK_IMPORTED_MODULE_35__/* .string */ .Yj().when("enabled", {
        is: true,
        then: yup__WEBPACK_IMPORTED_MODULE_35__/* .string */ .Yj().required(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_24__/* .translatedErrors */ .iW.required),
        otherwise: yup__WEBPACK_IMPORTED_MODULE_35__/* .string */ .Yj()
      })
    })
  },
  providersWithSubdomain: {
    form: [
      [
        {
          intlLabel: enabledLabel,
          name: "enabled",
          type: "bool",
          description: enabledDescription,
          size: 6,
          validations: {
            required: true
          }
        }
      ],
      [
        {
          intlLabel: keyLabel,
          name: "key",
          type: "text",
          placeholder: textPlaceholder,
          size: 12,
          validations: {
            required: true
          }
        }
      ],
      [
        {
          intlLabel: secretLabel,
          name: "secret",
          type: "text",
          placeholder: textPlaceholder,
          size: 12,
          validations: {
            required: true
          }
        }
      ],
      [
        {
          intlLabel: {
            id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_33__.g)({ id: "PopUpForm.Providers.jwksurl.label" }),
            defaultMessage: "JWKS URL"
          },
          name: "jwksurl",
          type: "text",
          placeholder: textPlaceholder,
          size: 12,
          validations: {
            required: false
          }
        }
      ],
      [
        {
          intlLabel: {
            id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_33__.g)("PopUpForm.Providers.subdomain.label"),
            defaultMessage: "Host URI (Subdomain)"
          },
          name: "subdomain",
          type: "text",
          placeholder: {
            id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_33__.g)("PopUpForm.Providers.subdomain.placeholder"),
            defaultMessage: "my.subdomain.com"
          },
          size: 12,
          validations: {
            required: true
          }
        }
      ],
      [
        {
          intlLabel: callbackLabel,
          placeholder: callbackPlaceholder,
          name: "callback",
          type: "text",
          size: 12,
          validations: {
            required: true
          }
        }
      ],
      [
        {
          intlLabel: hintLabel,
          name: "noName",
          type: "text",
          validations: {},
          size: 12,
          disabled: true
        }
      ]
    ],
    schema: yup__WEBPACK_IMPORTED_MODULE_35__/* .object */ .Ik().shape({
      enabled: yup__WEBPACK_IMPORTED_MODULE_35__/* .bool */ .lc().required(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_24__/* .translatedErrors */ .iW.required),
      key: yup__WEBPACK_IMPORTED_MODULE_35__/* .string */ .Yj().when("enabled", {
        is: true,
        then: yup__WEBPACK_IMPORTED_MODULE_35__/* .string */ .Yj().required(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_24__/* .translatedErrors */ .iW.required),
        otherwise: yup__WEBPACK_IMPORTED_MODULE_35__/* .string */ .Yj()
      }),
      secret: yup__WEBPACK_IMPORTED_MODULE_35__/* .string */ .Yj().when("enabled", {
        is: true,
        then: yup__WEBPACK_IMPORTED_MODULE_35__/* .string */ .Yj().required(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_24__/* .translatedErrors */ .iW.required),
        otherwise: yup__WEBPACK_IMPORTED_MODULE_35__/* .string */ .Yj()
      }),
      subdomain: yup__WEBPACK_IMPORTED_MODULE_35__/* .string */ .Yj().when("enabled", {
        is: true,
        then: yup__WEBPACK_IMPORTED_MODULE_35__/* .string */ .Yj().required(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_24__/* .translatedErrors */ .iW.required),
        otherwise: yup__WEBPACK_IMPORTED_MODULE_35__/* .string */ .Yj()
      }),
      callback: yup__WEBPACK_IMPORTED_MODULE_35__/* .string */ .Yj().when("enabled", {
        is: true,
        then: yup__WEBPACK_IMPORTED_MODULE_35__/* .string */ .Yj().required(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_24__/* .translatedErrors */ .iW.required),
        otherwise: yup__WEBPACK_IMPORTED_MODULE_35__/* .string */ .Yj()
      })
    })
  }
};
const ProvidersPage = () => {
  const { formatMessage, locale } = (0,react_intl__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A)();
  const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_28__.useQueryClient)();
  const { trackUsage } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_24__/* .useTracking */ .z1)();
  const [isOpen, setIsOpen] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
  const [providerToEditName, setProviderToEditName] = react__WEBPACK_IMPORTED_MODULE_1__.useState(null);
  const toggleNotification = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_24__/* .useNotification */ .hN)();
  const { lockApp, unlockApp } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_24__/* .useOverlayBlocker */ .MA)();
  const { get, put } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_24__/* .useFetchClient */ .ry)();
  const { formatAPIError } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_24__/* .useAPIErrorHandler */ .wq)();
  const formatter = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_24__/* .useCollator */ .QM)(locale, {
    sensitivity: "base"
  });
  (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_24__/* .useFocusWhenNavigate */ .L4)();
  const {
    isLoading: isLoadingPermissions,
    allowedActions: { canUpdate }
  } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_24__/* .useRBAC */ .ec)({ update: _index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_33__.P.updateProviders });
  const { isLoading: isLoadingData, data } = (0,react_query__WEBPACK_IMPORTED_MODULE_28__.useQuery)(
    ["users-permissions", "get-providers"],
    async () => {
      const { data: data2 } = await get("/users-permissions/providers");
      return data2;
    },
    {
      initialData: {}
    }
  );
  const submitMutation = (0,react_query__WEBPACK_IMPORTED_MODULE_28__.useMutation)((body) => put("/users-permissions/providers", body), {
    async onSuccess() {
      await queryClient.invalidateQueries(["users-permissions", "providers"]);
      toggleNotification({
        type: "success",
        message: { id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_33__.g)("notification.success.submit") }
      });
      trackUsage("didEditAuthenticationProvider");
      handleToggleModal();
      unlockApp();
    },
    onError(error) {
      toggleNotification({
        type: "warning",
        message: formatAPIError(error)
      });
      unlockApp();
    },
    refetchActive: false
  });
  const providers = Object.entries(data).reduce((acc, [name, provider]) => {
    const { icon, enabled, subdomain } = provider;
    acc.push({
      name,
      icon: icon === "envelope" ? ["fas", "envelope"] : ["fab", icon],
      enabled,
      subdomain
    });
    return acc;
  }, []).sort((a, b) => formatter.compare(a.name, b.name));
  const isLoading = isLoadingData || isLoadingPermissions;
  const isProviderWithSubdomain = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => {
    if (!providerToEditName) {
      return false;
    }
    const providerToEdit = providers.find((obj) => obj.name === providerToEditName);
    return !!providerToEdit?.subdomain;
  }, [providers, providerToEditName]);
  const layoutToRender = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => {
    if (providerToEditName === "email") {
      return forms.email;
    }
    if (isProviderWithSubdomain) {
      return forms.providersWithSubdomain;
    }
    return forms.providers;
  }, [providerToEditName, isProviderWithSubdomain]);
  const handleToggleModal = () => {
    setIsOpen((prev) => !prev);
  };
  const handleClickEdit = (provider) => {
    if (canUpdate) {
      setProviderToEditName(provider.name);
      handleToggleModal();
    }
  };
  const handleSubmit = async (values) => {
    lockApp();
    trackUsage("willEditAuthenticationProvider");
    submitMutation.mutate({ providers: { ...data, [providerToEditName]: values } });
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .Layout */ .P, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_24__/* .SettingsPageTitle */ .x7,
      {
        name: formatMessage({
          id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_33__.g)("HeaderNav.link.providers"),
          defaultMessage: "Providers"
        })
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_9__/* .Main */ .g, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .HeaderLayout */ .Q,
        {
          title: formatMessage({
            id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_33__.g)("HeaderNav.link.providers"),
            defaultMessage: "Providers"
          })
        }
      ),
      isLoading ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_24__/* .LoadingIndicatorPage */ .Bl, {}) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .ContentLayout */ .s, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_15__/* .Table */ .X, { colCount: 3, rowCount: providers.length + 1, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_17__/* .Thead */ .d, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_18__.Tr, { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_19__.Th, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_22__/* .Typography */ .o, { variant: "sigma", textColor: "neutral600", children: formatMessage({ id: "global.name", defaultMessage: "Name" }) }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_19__.Th, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_22__/* .Typography */ .o, { variant: "sigma", textColor: "neutral600", children: formatMessage({ id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_33__.g)("Providers.status"), defaultMessage: "Status" }) }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_19__.Th, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_22__/* .Typography */ .o, { variant: "sigma", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_23__/* .VisuallyHidden */ .s, { children: formatMessage({
            id: "global.settings",
            defaultMessage: "Settings"
          }) }) }) })
        ] }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_16__/* .Tbody */ .N, { children: providers.map((provider) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
          _strapi_design_system__WEBPACK_IMPORTED_MODULE_18__.Tr,
          {
            ...(0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_24__/* .onRowClick */ .qM)({
              fn: () => handleClickEdit(provider),
              condition: canUpdate
            }),
            children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_19__.Td, { width: "45%", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_22__/* .Typography */ .o, { fontWeight: "semiBold", textColor: "neutral800", children: provider.name }) }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_19__.Td, { width: "65%", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _strapi_design_system__WEBPACK_IMPORTED_MODULE_22__/* .Typography */ .o,
                {
                  textColor: provider.enabled ? "success600" : "danger600",
                  "data-testid": `enable-${provider.name}`,
                  children: provider.enabled ? formatMessage({
                    id: "global.enabled",
                    defaultMessage: "Enabled"
                  }) : formatMessage({
                    id: "global.disabled",
                    defaultMessage: "Disabled"
                  })
                }
              ) }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_19__.Td, { ..._strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_24__/* .stopPropagation */ .dG, children: canUpdate && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .IconButton */ .K,
                {
                  onClick: () => handleClickEdit(provider),
                  noBorder: true,
                  icon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A, {}),
                  label: "Edit"
                }
              ) })
            ]
          },
          provider.name
        )) })
      ] }) })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      FormModal,
      {
        initialData: data[providerToEditName],
        isOpen,
        isSubmiting: submitMutation.isLoading,
        layout: layoutToRender,
        headerBreadcrumbs: [
          formatMessage({
            id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_33__.g)("PopUpForm.header.edit.providers"),
            defaultMessage: "Edit Provider"
          }),
          lodash_upperFirst__WEBPACK_IMPORTED_MODULE_26__(providerToEditName)
        ],
        onToggle: handleToggleModal,
        onSubmit: handleSubmit,
        providerToEditName
      }
    )
  ] });
};
const ProtectedProvidersPage = () => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_24__/* .CheckPagePermissions */ .kz, { permissions: _index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_33__.P.readProviders, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ProvidersPage, {}) });



/***/ }

}]);