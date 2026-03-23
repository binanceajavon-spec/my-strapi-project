"use strict";
(self["webpackChunkmy_strapi_project"] = self["webpackChunkmy_strapi_project"] || []).push([[7719],{

/***/ 97719
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProtectedEmailTemplatesPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69751);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21272);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85963);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90151);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68074);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(58805);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88353);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4198);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(55356);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11273);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(38413);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(61485);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(99248);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(67030);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6239);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(35513);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(25641);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(26127);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(90361);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(33363);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(5287);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(30893);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(98765);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(59201);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(54894);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(74930);
/* harmony import */ var _index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(87814);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(346);
/* harmony import */ var _strapi_design_system_v2__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(37679);
/* harmony import */ var _strapi_design_system_v2__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(60043);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(61535);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(11163);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(12083);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(54514);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(41909);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(70603);













const schema = yup__WEBPACK_IMPORTED_MODULE_32__/* .object */ .Ik().shape({
  options: yup__WEBPACK_IMPORTED_MODULE_32__/* .object */ .Ik().shape({
    from: yup__WEBPACK_IMPORTED_MODULE_32__/* .object */ .Ik().shape({
      name: yup__WEBPACK_IMPORTED_MODULE_32__/* .string */ .Yj().required(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_23__/* .translatedErrors */ .iW.required),
      email: yup__WEBPACK_IMPORTED_MODULE_32__/* .string */ .Yj().email(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_23__/* .translatedErrors */ .iW.email).required(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_23__/* .translatedErrors */ .iW.required)
    }).required(),
    response_email: yup__WEBPACK_IMPORTED_MODULE_32__/* .string */ .Yj().email(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_23__/* .translatedErrors */ .iW.email),
    object: yup__WEBPACK_IMPORTED_MODULE_32__/* .string */ .Yj().required(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_23__/* .translatedErrors */ .iW.required),
    message: yup__WEBPACK_IMPORTED_MODULE_32__/* .string */ .Yj().required(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_23__/* .translatedErrors */ .iW.required)
  }).required(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_23__/* .translatedErrors */ .iW.required)
});
const EmailForm = ({ template, onToggle, onSubmit }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_11__/* .ModalLayout */ .k,
    {
      onClose: onToggle,
      labelledBy: `${formatMessage({
        id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_26__.g)("PopUpForm.header.edit.email-templates"),
        defaultMessage: "Edit email template"
      })}, ${formatMessage({ id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_26__.g)(template.display), defaultMessage: template.display })}`,
      children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_12__/* .ModalHeader */ .r, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
          _strapi_design_system_v2__WEBPACK_IMPORTED_MODULE_28__/* .Breadcrumbs */ .B,
          {
            label: `${formatMessage({
              id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_26__.g)("PopUpForm.header.edit.email-templates"),
              defaultMessage: "Edit email template"
            })}, ${formatMessage({
              id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_26__.g)(template.display),
              defaultMessage: template.display
            })}`,
            children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system_v2__WEBPACK_IMPORTED_MODULE_29__/* .Crumb */ .m, { children: formatMessage({
                id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_26__.g)("PopUpForm.header.edit.email-templates"),
                defaultMessage: "Edit email template"
              }) }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system_v2__WEBPACK_IMPORTED_MODULE_29__/* .Crumb */ .m, { isCurrent: true, children: formatMessage({ id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_26__.g)(template.display), defaultMessage: template.display }) })
            ]
          }
        ) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          formik__WEBPACK_IMPORTED_MODULE_30__/* .Formik */ .l1,
          {
            onSubmit,
            initialValues: template,
            validateOnChange: false,
            validationSchema: schema,
            enableReinitialize: true,
            children: ({ errors, values, handleChange, isSubmitting }) => {
              return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_23__/* .Form */ .lV, { children: [
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_14__/* .ModalBody */ .c, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Grid */ .x, { gap: 5, children: [
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .GridItem */ .E, { col: 6, s: 12, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_23__/* .GenericInput */ .ah,
                    {
                      intlLabel: {
                        id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_26__.g)("PopUpForm.Email.options.from.name.label"),
                        defaultMessage: "Shipper name"
                      },
                      name: "options.from.name",
                      onChange: handleChange,
                      value: values.options.from.name,
                      error: errors?.options?.from?.name,
                      type: "text"
                    }
                  ) }),
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .GridItem */ .E, { col: 6, s: 12, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_23__/* .GenericInput */ .ah,
                    {
                      intlLabel: {
                        id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_26__.g)("PopUpForm.Email.options.from.email.label"),
                        defaultMessage: "Shipper email"
                      },
                      name: "options.from.email",
                      onChange: handleChange,
                      value: values.options.from.email,
                      error: errors?.options?.from?.email,
                      type: "text"
                    }
                  ) }),
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .GridItem */ .E, { col: 6, s: 12, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_23__/* .GenericInput */ .ah,
                    {
                      intlLabel: {
                        id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_26__.g)("PopUpForm.Email.options.response_email.label"),
                        defaultMessage: "Response email"
                      },
                      name: "options.response_email",
                      onChange: handleChange,
                      value: values.options.response_email,
                      error: errors?.options?.response_email,
                      type: "text"
                    }
                  ) }),
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .GridItem */ .E, { col: 6, s: 12, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_23__/* .GenericInput */ .ah,
                    {
                      intlLabel: {
                        id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_26__.g)("PopUpForm.Email.options.object.label"),
                        defaultMessage: "Subject"
                      },
                      name: "options.object",
                      onChange: handleChange,
                      value: values.options.object,
                      error: errors?.options?.object,
                      type: "text"
                    }
                  ) }),
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .GridItem */ .E, { col: 12, s: 12, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _strapi_design_system__WEBPACK_IMPORTED_MODULE_20__/* .Textarea */ .T,
                    {
                      label: formatMessage({
                        id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_26__.g)("PopUpForm.Email.options.message.label"),
                        defaultMessage: "Message"
                      }),
                      id: "options.message",
                      onChange: handleChange,
                      value: values.options.message,
                      error: errors?.options?.message && formatMessage({
                        id: errors.options.message,
                        defaultMessage: errors.options.message
                      })
                    }
                  ) })
                ] }) }),
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _strapi_design_system__WEBPACK_IMPORTED_MODULE_13__/* .ModalFooter */ .j,
                  {
                    startActions: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .$, { onClick: onToggle, variant: "tertiary", children: "Cancel" }),
                    endActions: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .$, { loading: isSubmitting, type: "submit", children: "Finish" })
                  }
                )
              ] });
            }
          }
        )
      ]
    }
  );
};
EmailForm.propTypes = {
  template: prop_types__WEBPACK_IMPORTED_MODULE_31__.shape({
    display: prop_types__WEBPACK_IMPORTED_MODULE_31__.string,
    icon: prop_types__WEBPACK_IMPORTED_MODULE_31__.string,
    options: prop_types__WEBPACK_IMPORTED_MODULE_31__.shape({
      from: prop_types__WEBPACK_IMPORTED_MODULE_31__.shape({
        name: prop_types__WEBPACK_IMPORTED_MODULE_31__.string,
        email: prop_types__WEBPACK_IMPORTED_MODULE_31__.string
      }),
      message: prop_types__WEBPACK_IMPORTED_MODULE_31__.string,
      object: prop_types__WEBPACK_IMPORTED_MODULE_31__.string,
      response_email: prop_types__WEBPACK_IMPORTED_MODULE_31__.string
    })
  }).isRequired,
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_31__.func.isRequired,
  onToggle: prop_types__WEBPACK_IMPORTED_MODULE_31__.func.isRequired
};
const EmailTable = ({ canUpdate, onEditClick }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_15__/* .Table */ .X, { colCount: 3, rowCount: 3, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_17__/* .Thead */ .d, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_18__.Tr, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_19__.Th, { width: "1%", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_22__/* .VisuallyHidden */ .s, { children: formatMessage({
        id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_26__.g)("Email.template.table.icon.label"),
        defaultMessage: "icon"
      }) }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_19__.Th, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_21__/* .Typography */ .o, { variant: "sigma", textColor: "neutral600", children: formatMessage({
        id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_26__.g)("Email.template.table.name.label"),
        defaultMessage: "name"
      }) }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_19__.Th, { width: "1%", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_22__/* .VisuallyHidden */ .s, { children: formatMessage({
        id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_26__.g)("Email.template.table.action.label"),
        defaultMessage: "action"
      }) }) })
    ] }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_16__/* .Tbody */ .N, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_18__.Tr, { ...(0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_23__/* .onRowClick */ .qM)({ fn: () => onEditClick("reset_password") }), children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_19__.Td, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .Icon */ .I, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _strapi_icons__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .A,
          {
            "aria-label": formatMessage({
              id: "global.reset-password",
              defaultMessage: "Reset password"
            })
          }
        ) }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_19__.Td, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_21__/* .Typography */ .o, { children: formatMessage({
          id: "global.reset-password",
          defaultMessage: "Reset password"
        }) }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_19__.Td, { ..._strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_23__/* .stopPropagation */ .dG, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .IconButton */ .K,
          {
            onClick: () => onEditClick("reset_password"),
            label: formatMessage({
              id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_26__.g)("Email.template.form.edit.label"),
              defaultMessage: "Edit a template"
            }),
            noBorder: true,
            icon: canUpdate && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .A, {})
          }
        ) })
      ] }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_18__.Tr, { ...(0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_23__/* .onRowClick */ .qM)({ fn: () => onEditClick("email_confirmation") }), children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_19__.Td, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .Icon */ .I, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _strapi_icons__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .A,
          {
            "aria-label": formatMessage({
              id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_26__.g)("Email.template.email_confirmation"),
              defaultMessage: "Email address confirmation"
            })
          }
        ) }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_19__.Td, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_21__/* .Typography */ .o, { children: formatMessage({
          id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_26__.g)("Email.template.email_confirmation"),
          defaultMessage: "Email address confirmation"
        }) }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_19__.Td, { ..._strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_23__/* .stopPropagation */ .dG, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .IconButton */ .K,
          {
            onClick: () => onEditClick("email_confirmation"),
            label: formatMessage({
              id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_26__.g)("Email.template.form.edit.label"),
              defaultMessage: "Edit a template"
            }),
            noBorder: true,
            icon: canUpdate && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .A, {})
          }
        ) })
      ] })
    ] })
  ] });
};
EmailTable.propTypes = {
  canUpdate: prop_types__WEBPACK_IMPORTED_MODULE_31__.bool.isRequired,
  onEditClick: prop_types__WEBPACK_IMPORTED_MODULE_31__.func.isRequired
};
const ProtectedEmailTemplatesPage = () => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_23__/* .CheckPagePermissions */ .kz, { permissions: _index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_26__.P.readEmailTemplates, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(EmailTemplatesPage, {}) });
const EmailTemplatesPage = () => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A)();
  const { trackUsage } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_23__/* .useTracking */ .z1)();
  const { notifyStatus } = (0,_strapi_design_system__WEBPACK_IMPORTED_MODULE_9__/* .useNotifyAT */ .W)();
  const toggleNotification = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_23__/* .useNotification */ .hN)();
  const { lockApp, unlockApp } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_23__/* .useOverlayBlocker */ .MA)();
  const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_25__.useQueryClient)();
  const { get, put } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_23__/* .useFetchClient */ .ry)();
  const { formatAPIError } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_23__/* .useAPIErrorHandler */ .wq)();
  (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_23__/* .useFocusWhenNavigate */ .L4)();
  const [isModalOpen, setIsModalOpen] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
  const [templateToEdit, setTemplateToEdit] = react__WEBPACK_IMPORTED_MODULE_1__.useState(null);
  const {
    isLoading: isLoadingForPermissions,
    allowedActions: { canUpdate }
  } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_23__/* .useRBAC */ .ec)({ update: _index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_26__.P.updateEmailTemplates });
  const { isLoading: isLoadingData, data } = (0,react_query__WEBPACK_IMPORTED_MODULE_25__.useQuery)(
    ["users-permissions", "email-templates"],
    async () => {
      const { data: data2 } = await get("/users-permissions/email-templates");
      return data2;
    },
    {
      onSuccess() {
        notifyStatus(
          formatMessage({
            id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_26__.g)("Email.template.data.loaded"),
            defaultMessage: "Email templates has been loaded"
          })
        );
      },
      onError(error) {
        toggleNotification({
          type: "warning",
          message: formatAPIError(error)
        });
      }
    }
  );
  const isLoading = isLoadingForPermissions || isLoadingData;
  const handleToggle = () => {
    setIsModalOpen((prev) => !prev);
  };
  const handleEditClick = (template) => {
    setTemplateToEdit(template);
    handleToggle();
  };
  const submitMutation = (0,react_query__WEBPACK_IMPORTED_MODULE_25__.useMutation)(
    (body) => put("/users-permissions/email-templates", { "email-templates": body }),
    {
      async onSuccess() {
        await queryClient.invalidateQueries(["users-permissions", "email-templates"]);
        toggleNotification({
          type: "success",
          message: { id: "notification.success.saved", defaultMessage: "Saved" }
        });
        trackUsage("didEditEmailTemplates");
        unlockApp();
        handleToggle();
      },
      onError(error) {
        toggleNotification({
          type: "warning",
          message: formatAPIError(error)
        });
        unlockApp();
      },
      refetchActive: true
    }
  );
  const handleSubmit = (body) => {
    lockApp();
    trackUsage("willEditEmailTemplates");
    const editedTemplates = { ...data, [templateToEdit]: body };
    submitMutation.mutate(editedTemplates);
  };
  if (isLoading) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_10__/* .Main */ .g, { "aria-busy": "true", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_23__/* .SettingsPageTitle */ .x7,
        {
          name: formatMessage({
            id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_26__.g)("HeaderNav.link.emailTemplates"),
            defaultMessage: "Email templates"
          })
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .HeaderLayout */ .Q,
        {
          title: formatMessage({
            id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_26__.g)("HeaderNav.link.emailTemplates"),
            defaultMessage: "Email templates"
          })
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .ContentLayout */ .s, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_23__/* .LoadingIndicatorPage */ .Bl, {}) })
    ] });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_10__/* .Main */ .g, { "aria-busy": submitMutation.isLoading, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_23__/* .SettingsPageTitle */ .x7,
      {
        name: formatMessage({
          id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_26__.g)("HeaderNav.link.emailTemplates"),
          defaultMessage: "Email templates"
        })
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .HeaderLayout */ .Q,
      {
        title: formatMessage({
          id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_26__.g)("HeaderNav.link.emailTemplates"),
          defaultMessage: "Email templates"
        })
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .ContentLayout */ .s, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(EmailTable, { onEditClick: handleEditClick, canUpdate }),
      isModalOpen && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        EmailForm,
        {
          template: data[templateToEdit],
          onToggle: handleToggle,
          onSubmit: handleSubmit
        }
      )
    ] })
  ] });
};



/***/ }

}]);