"use strict";
(self["webpackChunkmy_strapi_project"] = self["webpackChunkmy_strapi_project"] || []).push([[5730],{

/***/ 20492
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReviewWorkflowsCreatePage: () => (/* binding */ ReviewWorkflowsCreatePage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69751);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21272);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85963);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43064);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83997);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30893);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(59201);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(54514);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(61535);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(54894);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(82437);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(17703);
/* harmony import */ var _useAdminRoles_TJePFZ1V_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(68699);
/* harmony import */ var _useContentTypes_J1YsHDXc_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(71961);
/* harmony import */ var _validateWorkflow_maQiwiaR_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(98432);
/* harmony import */ var _index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(92129);
/* harmony import */ var _Layout_k_VdyhDA_mjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(22908);
/* harmony import */ var _LimitsModal_slvRtty7_mjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(45084);
/* harmony import */ var _constants_8sAt6dKz_mjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(25524);
/* harmony import */ var _useReviewWorkflows_H0dbPFwV_mjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(10470);
/* harmony import */ var _colors_YeFa2BnS_mjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(35658);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(33955);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(48940);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(12083);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(15126);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(63299);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(44633);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(59080);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(79275);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(14718);
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(5790);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(35223);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(5409);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(74930);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(80219);
/* harmony import */ var lodash_defaultsDeep__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(41286);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(13426);
/* harmony import */ var lodash_isBoolean__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(84624);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(346);
/* harmony import */ var lodash_isNaN__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(54257);
/* harmony import */ var lodash_toNumber__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(48829);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(51187);
/* harmony import */ var lodash_upperFirst__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(39404);
/* harmony import */ var lodash_fp__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(58692);
/* harmony import */ var lodash_take__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(501);
/* harmony import */ var codemirror5__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(57646);
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(23120);
/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(44414);
/* harmony import */ var markdown_it_abbr__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(25962);
/* harmony import */ var markdown_it_container__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(14664);
/* harmony import */ var markdown_it_deflist__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(42588);
/* harmony import */ var markdown_it_emoji__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(90325);
/* harmony import */ var markdown_it_footnote__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(62785);
/* harmony import */ var markdown_it_ins__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(87443);
/* harmony import */ var markdown_it_mark__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(41032);
/* harmony import */ var markdown_it_sub__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(22957);
/* harmony import */ var markdown_it_sup__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(93179);
/* harmony import */ var highlight_js_styles_solarized_dark_css__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(73055);
/* harmony import */ var codemirror5_addon_display_placeholder__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(15747);
/* harmony import */ var lodash_toString__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(62925);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(26509);
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(32058);
/* harmony import */ var lodash_unset__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(81185);
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(4642);
/* harmony import */ var _reviewWorkflows_DZodpwgN_mjs__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(51233);
















































































const ReviewWorkflowsCreatePage = () => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)();
  const { push } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_11__/* .useHistory */ .W6)();
  const {
    _unstableFormatAPIError: formatAPIError,
    _unstableFormatValidationErrors: formatValidationErrors
  } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_6__/* .useAPIErrorHandler */ .wq)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__/* .useDispatch */ .wA)();
  const toggleNotification = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_6__/* .useNotification */ .hN)();
  const { collectionTypes, singleTypes, isLoading: isLoadingContentTypes } = (0,_useContentTypes_J1YsHDXc_mjs__WEBPACK_IMPORTED_MODULE_13__.u)();
  const { isLoading: isLoadingWorkflow, meta, workflows, createWorkflow } = (0,_useReviewWorkflows_H0dbPFwV_mjs__WEBPACK_IMPORTED_MODULE_19__.u)();
  const { isLoading: isLoadingRoles, roles: serverRoles } = (0,_useAdminRoles_TJePFZ1V_mjs__WEBPACK_IMPORTED_MODULE_12__.u)();
  const isLoading = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__/* .useSelector */ .d4)(_validateWorkflow_maQiwiaR_mjs__WEBPACK_IMPORTED_MODULE_14__.s);
  const currentWorkflowIsDirty = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__/* .useSelector */ .d4)(_validateWorkflow_maQiwiaR_mjs__WEBPACK_IMPORTED_MODULE_14__.a);
  const currentWorkflow = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__/* .useSelector */ .d4)(_validateWorkflow_maQiwiaR_mjs__WEBPACK_IMPORTED_MODULE_14__.b);
  const roles = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__/* .useSelector */ .d4)(_validateWorkflow_maQiwiaR_mjs__WEBPACK_IMPORTED_MODULE_14__.c);
  const [showLimitModal, setShowLimitModal] = react__WEBPACK_IMPORTED_MODULE_1__.useState(null);
  const { isLoading: isLicenseLoading, getFeature } = (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_15__.m)();
  const [initialErrors, setInitialErrors] = react__WEBPACK_IMPORTED_MODULE_1__.useState();
  const [savePrompts, setSavePrompts] = react__WEBPACK_IMPORTED_MODULE_1__.useState({});
  const limits = getFeature("review-workflows");
  const numberOfWorkflows = limits?.[_constants_8sAt6dKz_mjs__WEBPACK_IMPORTED_MODULE_18__.C];
  const stagesPerWorkflow = limits?.[_constants_8sAt6dKz_mjs__WEBPACK_IMPORTED_MODULE_18__.a];
  const contentTypesFromOtherWorkflows = workflows?.flatMap((workflow) => workflow.contentTypes);
  const submitForm = async () => {
    setSavePrompts({});
    try {
      const res = await createWorkflow({
        // @ts-expect-error – currentWorkflow will have already been validated by formik before it gets here.
        data: currentWorkflow
      });
      if ("error" in res) {
        if ((0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_15__.x)(res.error) && res.error.name === "ValidationError") {
          setInitialErrors(formatValidationErrors(res.error));
        }
        toggleNotification({
          type: "warning",
          message: formatAPIError(res.error)
        });
        return;
      }
      toggleNotification({
        type: "success",
        message: {
          id: "Settings.review-workflows.create.page.notification.success",
          defaultMessage: "Workflow successfully created"
        }
      });
      push(`/settings/review-workflows/${res.data.id}`);
    } catch (error) {
      toggleNotification({
        type: "warning",
        message: {
          id: "Settings.review-workflows.create.page.notification.error",
          defaultMessage: "An error occurred"
        }
      });
    }
  };
  const handleConfirmDeleteDialog = async () => {
    await submitForm();
  };
  const handleConfirmClose = () => {
    setSavePrompts({});
  };
  const formik = (0,formik__WEBPACK_IMPORTED_MODULE_8__/* .useFormik */ .Wx)({
    enableReinitialize: true,
    initialErrors,
    initialValues: currentWorkflow,
    async onSubmit() {
      const isContentTypeReassignment = currentWorkflow.contentTypes?.some(
        (contentType) => contentTypesFromOtherWorkflows?.includes(contentType)
      );
      if (meta && numberOfWorkflows && meta?.workflowCount >= parseInt(numberOfWorkflows, 10)) {
        setShowLimitModal("workflow");
      } else if (currentWorkflow.stages && stagesPerWorkflow && currentWorkflow.stages.length >= parseInt(stagesPerWorkflow, 10)) {
        setShowLimitModal("stage");
      } else if (isContentTypeReassignment) {
        setSavePrompts((prev) => ({ ...prev, hasReassignedContentTypes: true }));
      } else {
        submitForm();
      }
    },
    validate(values) {
      return (0,_validateWorkflow_maQiwiaR_mjs__WEBPACK_IMPORTED_MODULE_14__.v)({ values, formatMessage });
    }
  });
  (0,_validateWorkflow_maQiwiaR_mjs__WEBPACK_IMPORTED_MODULE_14__.u)(_constants_8sAt6dKz_mjs__WEBPACK_IMPORTED_MODULE_18__.R, _validateWorkflow_maQiwiaR_mjs__WEBPACK_IMPORTED_MODULE_14__.i);
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    dispatch((0,_validateWorkflow_maQiwiaR_mjs__WEBPACK_IMPORTED_MODULE_14__.r)());
    if (!isLoadingWorkflow && workflows) {
      dispatch((0,_validateWorkflow_maQiwiaR_mjs__WEBPACK_IMPORTED_MODULE_14__.d)({ workflows }));
    }
    if (!isLoadingContentTypes) {
      dispatch((0,_validateWorkflow_maQiwiaR_mjs__WEBPACK_IMPORTED_MODULE_14__.e)({ collectionTypes, singleTypes }));
    }
    if (!isLoadingRoles) {
      dispatch((0,_validateWorkflow_maQiwiaR_mjs__WEBPACK_IMPORTED_MODULE_14__.f)(serverRoles));
    }
    dispatch((0,_validateWorkflow_maQiwiaR_mjs__WEBPACK_IMPORTED_MODULE_14__.g)(isLoadingContentTypes || isLoadingRoles));
    dispatch(
      (0,_validateWorkflow_maQiwiaR_mjs__WEBPACK_IMPORTED_MODULE_14__.h)({
        name: ""
      })
    );
  }, [
    collectionTypes,
    dispatch,
    isLoadingContentTypes,
    isLoadingRoles,
    isLoadingWorkflow,
    serverRoles,
    singleTypes,
    workflows
  ]);
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    if (!isLoadingWorkflow && !isLicenseLoading) {
      if (currentWorkflow.stages && limits?.[_constants_8sAt6dKz_mjs__WEBPACK_IMPORTED_MODULE_18__.a] && stagesPerWorkflow && currentWorkflow.stages.length >= parseInt(stagesPerWorkflow, 10)) {
        setShowLimitModal("stage");
      }
    }
  }, [isLicenseLoading, isLoadingWorkflow, limits, currentWorkflow.stages, stagesPerWorkflow]);
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    if (!isLoading && roles?.length === 0) {
      toggleNotification({
        blockTransition: true,
        type: "warning",
        message: formatMessage({
          id: "Settings.review-workflows.stage.permissions.noPermissions.description",
          defaultMessage: "You don\u2019t have the permission to see roles"
        })
      });
    }
  }, [formatMessage, isLoading, roles, toggleNotification]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Layout_k_VdyhDA_mjs__WEBPACK_IMPORTED_MODULE_16__.D, {}),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(formik__WEBPACK_IMPORTED_MODULE_8__/* .FormikProvider */ .QI, { value: formik, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_8__/* .Form */ .lV, { onSubmit: formik.handleSubmit, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _Layout_k_VdyhDA_mjs__WEBPACK_IMPORTED_MODULE_16__.H,
        {
          navigationAction: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Layout_k_VdyhDA_mjs__WEBPACK_IMPORTED_MODULE_16__.B, { href: "/settings/review-workflows" }),
          primaryAction: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .$,
            {
              startIcon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {}),
              type: "submit",
              size: "M",
              disabled: !currentWorkflowIsDirty,
              children: formatMessage({
                id: "global.save",
                defaultMessage: "Save"
              })
            }
          ),
          title: formatMessage({
            id: "Settings.review-workflows.create.page.title",
            defaultMessage: "Create Review Workflow"
          }),
          subtitle: formatMessage(
            {
              id: "Settings.review-workflows.page.subtitle",
              defaultMessage: "{count, plural, one {# stage} other {# stages}}"
            },
            { count: currentWorkflow?.stages?.length ?? 0 }
          )
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Layout_k_VdyhDA_mjs__WEBPACK_IMPORTED_MODULE_16__.R, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .s, { alignItems: "stretch", direction: "column", gap: 7, children: isLoading ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Loader */ .a, { children: formatMessage({
        id: "Settings.review-workflows.page.isLoading",
        defaultMessage: "Workflow is loading"
      }) }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .s, { alignItems: "stretch", direction: "column", gap: 7, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_validateWorkflow_maQiwiaR_mjs__WEBPACK_IMPORTED_MODULE_14__.W, {}),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_validateWorkflow_maQiwiaR_mjs__WEBPACK_IMPORTED_MODULE_14__.S, { stages: formik.values?.stages })
      ] }) }) })
    ] }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_6__/* .ConfirmDialog */ .TM.Root,
      {
        isConfirmButtonLoading: isLoading,
        isOpen: Object.keys(savePrompts).length > 0,
        onToggleDialog: handleConfirmClose,
        onConfirm: handleConfirmDeleteDialog,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_6__/* .ConfirmDialog */ .TM.Body, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .s, { direction: "column", gap: 5, children: [
          savePrompts.hasReassignedContentTypes && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .Typography */ .o, { textAlign: "center", variant: "omega", children: formatMessage(
            {
              id: "Settings.review-workflows.page.delete.confirm.contentType.body",
              defaultMessage: "{count} {count, plural, one {content-type} other {content-types}} {count, plural, one {is} other {are}} already mapped to {count, plural, one {another workflow} other {other workflows}}. If you save changes, {count, plural, one {this} other {these}} {count, plural, one {content-type} other {{count} content-types}} will no more be mapped to the {count, plural, one {another workflow} other {other workflows}} and all corresponding information will be removed."
            },
            {
              count: contentTypesFromOtherWorkflows?.filter(
                (contentType) => currentWorkflow.contentTypes?.includes(contentType)
              ).length
            }
          ) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .Typography */ .o, { textAlign: "center", variant: "omega", children: formatMessage({
            id: "Settings.review-workflows.page.delete.confirm.confirm",
            defaultMessage: "Are you sure you want to save?"
          }) })
        ] }) })
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
      _LimitsModal_slvRtty7_mjs__WEBPACK_IMPORTED_MODULE_17__.L.Root,
      {
        isOpen: showLimitModal === "workflow",
        onClose: () => setShowLimitModal(null),
        children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_LimitsModal_slvRtty7_mjs__WEBPACK_IMPORTED_MODULE_17__.L.Title, { children: formatMessage({
            id: "Settings.review-workflows.create.page.workflows.limit.title",
            defaultMessage: "You\u2019ve reached the limit of workflows in your plan"
          }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_LimitsModal_slvRtty7_mjs__WEBPACK_IMPORTED_MODULE_17__.L.Body, { children: formatMessage({
            id: "Settings.review-workflows.create.page.workflows.limit.body",
            defaultMessage: "Delete a workflow or contact Sales to enable more workflows."
          }) })
        ]
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_LimitsModal_slvRtty7_mjs__WEBPACK_IMPORTED_MODULE_17__.L.Root, { isOpen: showLimitModal === "stage", onClose: () => setShowLimitModal(null), children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_LimitsModal_slvRtty7_mjs__WEBPACK_IMPORTED_MODULE_17__.L.Title, { children: formatMessage({
        id: "Settings.review-workflows.create.page.stages.limit.title",
        defaultMessage: "You have reached the limit of stages for this workflow in your plan"
      }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_LimitsModal_slvRtty7_mjs__WEBPACK_IMPORTED_MODULE_17__.L.Body, { children: formatMessage({
        id: "Settings.review-workflows.create.page.stages.limit.body",
        defaultMessage: "Try deleting some stages or contact Sales to enable more stages."
      }) })
    ] })
  ] });
};



/***/ }

}]);