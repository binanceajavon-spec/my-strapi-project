"use strict";
(self["webpackChunkmy_strapi_project"] = self["webpackChunkmy_strapi_project"] || []).push([[2266],{

/***/ 62482
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ Filters)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69751);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21272);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94061);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85963);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59201);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28604);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(54894);






const Filters = ({ displayedFilters }) => {
  const [isVisible, setIsVisible] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)();
  const buttonRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);
  const handleToggle = () => {
    setIsVisible((prev) => !prev);
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .a, { paddingTop: 1, paddingBottom: 1, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .$,
        {
          variant: "tertiary",
          ref: buttonRef,
          startIcon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {}),
          onClick: handleToggle,
          size: "S",
          children: formatMessage({ id: "app.utils.filters", defaultMessage: "Filters" })
        }
      ),
      isVisible && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_4__/* .FilterPopoverURLQuery */ .LC,
        {
          displayedFilters,
          isVisible,
          onToggle: handleToggle,
          source: buttonRef
        }
      )
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_4__/* .FilterListURLQuery */ .cZ, { filtersSchema: displayedFilters })
  ] });
};



/***/ },

/***/ 52266
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProtectedListPage: () => (/* binding */ ProtectedListPage),
/* harmony export */   e: () => (/* binding */ ListPageCE)
/* harmony export */ });
/* unused harmony export ListPage */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69751);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21272);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50215);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94061);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85963);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90151);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(68074);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(88353);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(74773);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4198);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(55356);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(38413);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(61485);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(99248);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(67030);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6239);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(83997);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(25641);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(90361);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(33363);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(30893);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(59201);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(5409);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(54894);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(17703);
/* harmony import */ var _index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(92129);
/* harmony import */ var _Filters_dLXfVnI0_mjs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(62482);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(34313);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(41909);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(50612);
/* harmony import */ var _strapi_design_system_v2__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(37679);
/* harmony import */ var _strapi_design_system_v2__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(60043);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(61535);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(12083);
/* harmony import */ var _SelectRoles_t6U3MuLd_mjs__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(52097);
/* harmony import */ var _AuthenticatedApp_uHd_MPEB_mjs__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(38682);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(15126);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(63299);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(44633);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(59080);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(79275);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(14718);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(82437);
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(5790);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(35223);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(74930);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(80219);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(48940);
/* harmony import */ var lodash_defaultsDeep__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(41286);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(33955);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(13426);
/* harmony import */ var lodash_isBoolean__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(84624);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(346);
/* harmony import */ var lodash_isNaN__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(54257);
/* harmony import */ var lodash_toNumber__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(48829);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(51187);
/* harmony import */ var lodash_upperFirst__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(39404);
/* harmony import */ var lodash_fp__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(58692);
/* harmony import */ var lodash_take__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(501);
/* harmony import */ var codemirror5__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(57646);
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(23120);
/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(44414);
/* harmony import */ var markdown_it_abbr__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(25962);
/* harmony import */ var markdown_it_container__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(14664);
/* harmony import */ var markdown_it_deflist__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(42588);
/* harmony import */ var markdown_it_emoji__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(90325);
/* harmony import */ var markdown_it_footnote__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(62785);
/* harmony import */ var markdown_it_ins__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(87443);
/* harmony import */ var markdown_it_mark__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(41032);
/* harmony import */ var markdown_it_sub__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(22957);
/* harmony import */ var markdown_it_sup__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(93179);
/* harmony import */ var highlight_js_styles_solarized_dark_css__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(73055);
/* harmony import */ var codemirror5_addon_display_placeholder__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(15747);
/* harmony import */ var lodash_toString__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(62925);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(26509);
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(32058);
/* harmony import */ var lodash_unset__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(81185);
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(4642);
/* harmony import */ var _useAdminRoles_TJePFZ1V_mjs__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(68699);
/* harmony import */ var semver_functions_lt__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(55151);
/* harmony import */ var semver_functions_valid__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(79077);













































































const CreateActionCE = ({ onClick }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .$, { onClick, startIcon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A, {}), size: "S", children: formatMessage({
    id: "Settings.permissions.users.create",
    defaultMessage: "Invite new user"
  }) });
};
const ModalForm = ({ onToggle }) => {
  const [currentStep, setStep] = react__WEBPACK_IMPORTED_MODULE_1__.useState("create");
  const [registrationToken, setRegistrationToken] = react__WEBPACK_IMPORTED_MODULE_1__.useState("");
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A)();
  const toggleNotification = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_21__/* .useNotification */ .hN)();
  const { lockApp, unlockApp } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_21__/* .useOverlayBlocker */ .MA)();
  const {
    _unstableFormatAPIError: formatAPIError,
    _unstableFormatValidationErrors: formatValidationErrors
  } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_21__/* .useAPIErrorHandler */ .wq)();
  const roleLayout = (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_25__.p)(
    ROLE_LAYOUT,
    async () => (await __webpack_require__.e(/* import() */ 9971).then(__webpack_require__.bind(__webpack_require__, 79971))).ROLE_LAYOUT,
    {
      combine(ceRoles, eeRoles) {
        return [...ceRoles, ...eeRoles];
      },
      defaultValue: []
    }
  );
  const initialValues = (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_25__.p)(
    FORM_INITIAL_VALUES,
    async () => (await __webpack_require__.e(/* import() */ 9971).then(__webpack_require__.bind(__webpack_require__, 79971))).FORM_INITIAL_VALUES,
    {
      combine(ceValues, eeValues) {
        return {
          ...ceValues,
          ...eeValues
        };
      },
      defaultValue: FORM_INITIAL_VALUES
    }
  );
  const MagicLink = (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_25__.p)(
    _SelectRoles_t6U3MuLd_mjs__WEBPACK_IMPORTED_MODULE_34__.M,
    async () => (await __webpack_require__.e(/* import() */ 7461).then(__webpack_require__.bind(__webpack_require__, 67461))).MagicLinkEE
  );
  const [createUser] = (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_25__.H)();
  const headerTitle = formatMessage({
    id: "Settings.permissions.users.create",
    defaultMessage: "Invite new user"
  });
  const handleSubmit = async (body, { setErrors }) => {
    lockApp();
    const res = await createUser({
      ...body,
      roles: body.roles ?? []
    });
    if ("data" in res) {
      if (res.data.registrationToken) {
        setRegistrationToken(res.data.registrationToken);
        goNext();
      } else {
        toggleNotification({
          type: "warning",
          message: { id: "notification.error", defaultMessage: "An error occured" }
        });
      }
    } else {
      toggleNotification({
        type: "warning",
        message: formatAPIError(res.error)
      });
      if ((0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_25__.x)(res.error) && res.error.name === "ValidationError") {
        setErrors(formatValidationErrors(res.error));
      }
    }
    unlockApp();
  };
  const goNext = () => {
    if (next) {
      setStep(next);
    } else {
      onToggle();
    }
  };
  const { buttonSubmitLabel, isDisabled, next } = STEPPER[currentStep];
  if (!MagicLink) {
    return null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_12__/* .ModalLayout */ .k, { onClose: onToggle, labelledBy: "title", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_13__/* .ModalHeader */ .r, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system_v2__WEBPACK_IMPORTED_MODULE_30__/* .Breadcrumbs */ .B, { label: headerTitle, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system_v2__WEBPACK_IMPORTED_MODULE_31__/* .Crumb */ .m, { isCurrent: true, children: headerTitle }) }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      formik__WEBPACK_IMPORTED_MODULE_32__/* .Formik */ .l1,
      {
        enableReinitialize: true,
        initialValues: initialValues ?? {},
        onSubmit: handleSubmit,
        validationSchema: FORM_SCHEMA,
        validateOnChange: false,
        children: ({ errors, handleChange, values, isSubmitting }) => {
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_21__/* .Form */ .lV, { children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_15__/* .ModalBody */ .c, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_16__/* .Flex */ .s, { direction: "column", alignItems: "stretch", gap: 6, children: [
              currentStep !== "create" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MagicLink, { registrationToken }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .a, { children: [
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_20__/* .Typography */ .o, { variant: "beta", as: "h2", children: formatMessage({
                  id: "app.components.Users.ModalCreateBody.block-title.details",
                  defaultMessage: "User details"
                }) }),
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .a, { paddingTop: 4, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_16__/* .Flex */ .s, { direction: "column", alignItems: "stretch", gap: 1, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .Grid */ .x, { gap: 5, children: FORM_LAYOUT.map((row) => {
                  return row.map((input) => {
                    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .GridItem */ .E, { ...input.size, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_21__/* .GenericInput */ .ah,
                      {
                        ...input,
                        disabled: isDisabled,
                        error: errors[input.name],
                        onChange: handleChange,
                        value: values[input.name]
                      }
                    ) }, input.name);
                  });
                }) }) }) })
              ] }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .a, { children: [
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_20__/* .Typography */ .o, { variant: "beta", as: "h2", children: formatMessage({
                  id: "global.roles",
                  defaultMessage: "User's role"
                }) }),
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .a, { paddingTop: 4, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .Grid */ .x, { gap: 5, children: [
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .GridItem */ .E, { col: 6, xs: 12, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _SelectRoles_t6U3MuLd_mjs__WEBPACK_IMPORTED_MODULE_34__.S,
                    {
                      disabled: isDisabled,
                      error: errors.roles,
                      onChange: handleChange,
                      value: values.roles ?? []
                    }
                  ) }),
                  roleLayout.map((row) => {
                    return row.map((input) => {
                      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .GridItem */ .E, { ...input.size, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_21__/* .GenericInput */ .ah,
                        {
                          ...input,
                          disabled: isDisabled,
                          onChange: handleChange,
                          value: values[input.name]
                        }
                      ) }, input.name);
                    });
                  })
                ] }) })
              ] })
            ] }) }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _strapi_design_system__WEBPACK_IMPORTED_MODULE_14__/* .ModalFooter */ .j,
              {
                startActions: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .$, { variant: "tertiary", onClick: onToggle, type: "button", children: formatMessage({
                  id: "app.components.Button.cancel",
                  defaultMessage: "Cancel"
                }) }),
                endActions: currentStep === "create" ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .$, { type: "submit", loading: isSubmitting, children: formatMessage(buttonSubmitLabel) }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .$, { type: "button", loading: isSubmitting, onClick: onToggle, children: formatMessage(buttonSubmitLabel) })
              }
            )
          ] });
        }
      }
    )
  ] });
};
const FORM_INITIAL_VALUES = {
  firstname: "",
  lastname: "",
  email: "",
  roles: []
};
const ROLE_LAYOUT = [];
const FORM_LAYOUT = [
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
    }
  ]
];
const FORM_SCHEMA = yup__WEBPACK_IMPORTED_MODULE_33__/* .object */ .Ik().shape({
  firstname: yup__WEBPACK_IMPORTED_MODULE_33__/* .string */ .Yj().trim().required(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_21__/* .translatedErrors */ .iW.required),
  lastname: yup__WEBPACK_IMPORTED_MODULE_33__/* .string */ .Yj(),
  email: yup__WEBPACK_IMPORTED_MODULE_33__/* .string */ .Yj().email(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_21__/* .translatedErrors */ .iW.email).required(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_21__/* .translatedErrors */ .iW.required),
  roles: yup__WEBPACK_IMPORTED_MODULE_33__/* .array */ .YO().min(1, _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_21__/* .translatedErrors */ .iW.required).required(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_21__/* .translatedErrors */ .iW.required)
});
const STEPPER = {
  create: {
    buttonSubmitLabel: {
      id: "app.containers.Users.ModalForm.footer.button-success",
      defaultMessage: "Invite user"
    },
    isDisabled: false,
    next: "magic-link"
  },
  "magic-link": {
    buttonSubmitLabel: { id: "global.finish", defaultMessage: "Finish" },
    isDisabled: true,
    next: null
  }
};
const TableRows = ({
  canDelete,
  headers = [],
  entriesToDelete = [],
  onClickDelete,
  onSelectRow,
  withMainAction,
  withBulkActions,
  rows = []
}) => {
  const {
    push,
    location: { pathname }
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_24__/* .useHistory */ .W6)();
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_17__/* .Tbody */ .N, { children: rows.map((data) => {
    const isChecked = entriesToDelete.findIndex((id) => id === data.id) !== -1;
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
      _strapi_design_system__WEBPACK_IMPORTED_MODULE_18__.Tr,
      {
        ...(0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_21__/* .onRowClick */ .qM)({
          fn: () => push(`${pathname}/${data.id}`),
          condition: withBulkActions
        }),
        children: [
          withMainAction && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_19__.Td, { ..._strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_21__/* .stopPropagation */ .dG, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .BaseCheckbox */ .J,
            {
              "aria-label": formatMessage(
                {
                  id: "app.component.table.select.one-entry",
                  defaultMessage: `Select {target}`
                },
                { target: (0,_AuthenticatedApp_uHd_MPEB_mjs__WEBPACK_IMPORTED_MODULE_35__.g)(data?.firstname ?? "", data.lastname) }
              ),
              checked: isChecked,
              onChange: () => {
                if (onSelectRow) {
                  onSelectRow({ name: data.id, value: !isChecked });
                }
              }
            }
          ) }),
          headers.map(({ key, cellFormatter, name, ...rest }) => {
            return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_19__.Td, { children: typeof cellFormatter === "function" ? cellFormatter(data, { key, name, formatMessage, ...rest }) : (
              // @ts-expect-error – name === "roles" has the data value of `AdminRole[]` but the header has a cellFormatter value so this shouldn't be called.
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_20__/* .Typography */ .o, { textColor: "neutral800", children: data[name] || "-" })
            ) }, key);
          }),
          withBulkActions && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_19__.Td, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_16__/* .Flex */ .s, { justifyContent: "end", children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .IconButton */ .K,
              {
                onClick: () => push(`${pathname}/${data.id}`),
                label: formatMessage(
                  { id: "app.component.table.edit", defaultMessage: "Edit {target}" },
                  { target: (0,_AuthenticatedApp_uHd_MPEB_mjs__WEBPACK_IMPORTED_MODULE_35__.g)(data.firstname ?? "", data.lastname) }
                ),
                noBorder: true,
                icon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .A, {})
              }
            ),
            canDelete && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .a, { paddingLeft: 1, ..._strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_21__/* .stopPropagation */ .dG, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .IconButton */ .K,
              {
                onClick: () => {
                  if (onClickDelete) {
                    onClickDelete(data.id);
                  }
                },
                label: formatMessage(
                  { id: "global.delete-target", defaultMessage: "Delete {target}" },
                  { target: (0,_AuthenticatedApp_uHd_MPEB_mjs__WEBPACK_IMPORTED_MODULE_35__.g)(data.firstname ?? "", data.lastname) }
                ),
                noBorder: true,
                icon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .A, {})
              }
            ) })
          ] }) })
        ]
      },
      data.id
    );
  }) });
};
const ListPageCE = () => {
  const { _unstableFormatAPIError: formatAPIError } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_21__/* .useAPIErrorHandler */ .wq)();
  const [isModalOpened, setIsModalOpen] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
  const permissions = (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_25__.j)((state) => state.admin_app.permissions);
  const {
    allowedActions: { canCreate, canDelete, canRead }
  } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_21__/* .useRBAC */ .ec)(permissions.settings?.users);
  const toggleNotification = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_21__/* .useNotification */ .hN)();
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A)();
  const { search } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_24__/* .useLocation */ .zy)();
  (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_21__/* .useFocusWhenNavigate */ .L4)();
  const { data, isError, isLoading } = (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_25__.k)(
    qs__WEBPACK_IMPORTED_MODULE_22__.parse(search, { ignoreQueryPrefix: true }),
    {
      skip: !canRead
    }
  );
  const { pagination, users } = data ?? {};
  const CreateAction = (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_25__.p)(
    CreateActionCE,
    async () => (await __webpack_require__.e(/* import() */ 2406).then(__webpack_require__.bind(__webpack_require__, 60025))).CreateActionEE
  );
  const headers = TABLE_HEADERS.map((header) => ({
    ...header,
    metadatas: {
      ...header.metadatas,
      label: formatMessage(header.metadatas.label)
    }
  }));
  const title = formatMessage({
    id: "global.users",
    defaultMessage: "Users"
  });
  const handleToggle = () => {
    setIsModalOpen((prev) => !prev);
  };
  const [deleteAll] = (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_25__.J)();
  if (!CreateAction) {
    return null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_11__/* .Main */ .g, { "aria-busy": isLoading, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_21__/* .SettingsPageTitle */ .x7, { name: "Users" }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _strapi_design_system__WEBPACK_IMPORTED_MODULE_10__/* .HeaderLayout */ .Q,
      {
        primaryAction: canCreate && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CreateAction, { onClick: handleToggle }),
        title,
        subtitle: formatMessage({
          id: "Settings.permissions.users.listview.header.subtitle",
          defaultMessage: "All the users who have access to the Strapi admin panel"
        })
      }
    ),
    canRead && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .ActionLayout */ .B,
      {
        startActions: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_21__/* .SearchURLQuery */ .q7,
            {
              label: formatMessage(
                { id: "app.component.search.label", defaultMessage: "Search for {target}" },
                { target: title }
              )
            }
          ),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Filters_dLXfVnI0_mjs__WEBPACK_IMPORTED_MODULE_26__.F, { displayedFilters: DISPLAYED_HEADERS })
        ] })
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_9__/* .ContentLayout */ .s, { children: [
      !canRead && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_21__/* .NoPermissions */ .UW, {}),
      isError && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: "TODO: An error occurred" }),
      canRead && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_21__/* .DynamicTable */ .Ee,
          {
            contentType: "Users",
            isLoading,
            onConfirmDeleteAll: async (ids) => {
              const res = await deleteAll({ ids });
              if ("error" in res) {
                toggleNotification({
                  type: "warning",
                  message: formatAPIError(res.error)
                });
              }
            },
            onConfirmDelete: async (id) => {
              const res = await deleteAll({ ids: [id] });
              if ("error" in res) {
                toggleNotification({
                  type: "warning",
                  message: formatAPIError(res.error)
                });
              }
            },
            headers,
            rows: users,
            withBulkActions: true,
            withMainAction: canDelete,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TableRows, { canDelete })
          }
        ),
        pagination && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .a, { paddingTop: 4, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_16__/* .Flex */ .s, { alignItems: "flex-end", justifyContent: "space-between", children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_21__/* .PageSizeURLQuery */ ._u, {}),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_21__/* .PaginationURLQuery */ .W7, { pagination })
        ] }) })
      ] })
    ] }),
    isModalOpened && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ModalForm, { onToggle: handleToggle })
  ] });
};
const TABLE_HEADERS = [
  {
    name: "firstname",
    key: "firstname",
    metadatas: {
      label: {
        id: "Settings.permissions.users.firstname",
        defaultMessage: "Firstname"
      },
      sortable: true
    }
  },
  {
    name: "lastname",
    key: "lastname",
    metadatas: {
      label: {
        id: "Settings.permissions.users.lastname",
        defaultMessage: "Lastname"
      },
      sortable: true
    }
  },
  {
    key: "email",
    name: "email",
    metadatas: {
      label: { id: "Settings.permissions.users.email", defaultMessage: "Email" },
      sortable: true
    }
  },
  {
    key: "roles",
    name: "roles",
    metadatas: {
      label: {
        id: "Settings.permissions.users.roles",
        defaultMessage: "Roles"
      },
      sortable: false
    },
    cellFormatter({ roles }, { formatMessage }) {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_20__/* .Typography */ .o, { textColor: "neutral800", children: roles.map(
        (role) => formatMessage({
          id: `Settings.permissions.users.${role.code}`,
          defaultMessage: role.name
        })
      ).join(",\n") });
    }
  },
  {
    key: "username",
    name: "username",
    metadatas: {
      label: {
        id: "Settings.permissions.users.username",
        defaultMessage: "Username"
      },
      sortable: true
    }
  },
  {
    key: "isActive",
    name: "isActive",
    metadatas: {
      label: {
        id: "Settings.permissions.users.user-status",
        defaultMessage: "User status"
      },
      sortable: false
    },
    cellFormatter({ isActive }, { formatMessage }) {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_16__/* .Flex */ .s, { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_21__/* .Status */ .nW, { variant: isActive ? "success" : "danger" }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_20__/* .Typography */ .o, { textColor: "neutral800", children: formatMessage({
          id: isActive ? "Settings.permissions.users.active" : "Settings.permissions.users.inactive",
          defaultMessage: isActive ? "Active" : "Inactive"
        }) })
      ] });
    }
  }
];
const DISPLAYED_HEADERS = [
  {
    name: "firstname",
    metadatas: { label: "Firstname" },
    fieldSchema: { type: "string" }
  },
  {
    name: "lastname",
    metadatas: { label: "Lastname" },
    fieldSchema: { type: "string" }
  },
  {
    name: "email",
    metadatas: { label: "Email" },
    fieldSchema: { type: "email" }
  },
  {
    name: "username",
    metadatas: { label: "Username" },
    fieldSchema: { type: "string" }
  },
  {
    name: "isActive",
    metadatas: { label: "Active user" },
    fieldSchema: { type: "boolean" }
  }
];
const ListPage = () => {
  const UsersListPage = (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_25__.p)(
    ListPageCE,
    async () => (
      // eslint-disable-next-line import/no-cycle
      (await __webpack_require__.e(/* import() */ 8112).then(__webpack_require__.bind(__webpack_require__, 18112))).UserListPageEE
    )
  );
  if (!UsersListPage) {
    return null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UsersListPage, {});
};
const ProtectedListPage = () => {
  const permissions = (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_25__.j)((state) => state.admin_app.permissions.settings?.users.main);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_21__/* .CheckPagePermissions */ .kz, { permissions, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ListPage, {}) });
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



/***/ }

}]);