"use strict";
(self["webpackChunkmy_strapi_project"] = self["webpackChunkmy_strapi_project"] || []).push([[3151],{

/***/ 22908
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ Back),
/* harmony export */   D: () => (/* binding */ DragLayerRendered),
/* harmony export */   H: () => (/* binding */ Header),
/* harmony export */   R: () => (/* binding */ Root)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69751);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42455);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4198);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55356);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38413);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(83997);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(30893);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(59201);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(46270);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9005);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(54894);
/* harmony import */ var _index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(92129);
/* harmony import */ var _constants_8sAt6dKz_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(25524);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(47610);








const Toggle = (0,styled_components__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Ay)((0,_strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .s))`
  svg path {
    fill: ${({ theme }) => theme.colors.neutral600};
  }
`;
const StageDragPreview = ({ name }) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .s,
    {
      background: "primary100",
      borderStyle: "dashed",
      borderColor: "primary600",
      borderWidth: "1px",
      gap: 3,
      hasRadius: true,
      padding: 3,
      shadow: "tableShadow",
      width: (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_7__/* .pxToRem */ .a8)(300),
      children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          Toggle,
          {
            alignItems: "center",
            background: "neutral200",
            borderRadius: "50%",
            height: 6,
            justifyContent: "center",
            width: 6,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, { width: `${8 / 16}rem` })
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .Typography */ .o, { fontWeight: "bold", children: name })
      ]
    }
  );
};
const DragLayerRendered = () => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_11__.P,
    {
      renderItem: (item) => {
        if (item.type === _constants_8sAt6dKz_mjs__WEBPACK_IMPORTED_MODULE_12__.D.STAGE) {
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StageDragPreview, { name: typeof item.item === "string" ? item.item : null });
        }
      }
    }
  );
};
const Root = ({ children }) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Layout */ .P, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .Main */ .g, { tabIndex: -1, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .ContentLayout */ .s, { children }) }) });
};
const Back = ({ href }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_7__/* .Link */ .N_, { startIcon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {}), to: href, children: formatMessage({
    id: "global.back",
    defaultMessage: "Back"
  }) });
};
const Header = ({ title, subtitle, navigationAction, primaryAction }) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_7__/* .SettingsPageTitle */ .x7, { name: title }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .HeaderLayout */ .Q,
      {
        navigationAction,
        primaryAction,
        title,
        subtitle
      }
    )
  ] });
};



/***/ },

/***/ 63151
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProtectedReviewWorkflowsPage: () => (/* binding */ ProtectedReviewWorkflowsPage)
/* harmony export */ });
/* unused harmony export ReviewWorkflowsListView */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69751);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21272);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88353);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43064);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83997);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35513);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25641);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26127);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(90361);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(33363);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(40216);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(30893);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(98765);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(59201);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(41909);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5194);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(50612);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(54894);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(17703);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(47610);
/* harmony import */ var _index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(92129);
/* harmony import */ var _useContentTypes_J1YsHDXc_mjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(71961);
/* harmony import */ var _Layout_k_VdyhDA_mjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(22908);
/* harmony import */ var _LimitsModal_slvRtty7_mjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(45084);
/* harmony import */ var _constants_8sAt6dKz_mjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(25524);
/* harmony import */ var _useReviewWorkflows_H0dbPFwV_mjs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(10470);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(15126);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(63299);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(44633);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(59080);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(79275);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(14718);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(82437);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(61535);
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(5790);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(12083);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(35223);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(5409);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(74930);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(80219);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(48940);
/* harmony import */ var lodash_defaultsDeep__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(41286);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(33955);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(13426);
/* harmony import */ var lodash_isBoolean__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(84624);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(346);
/* harmony import */ var lodash_isNaN__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(54257);
/* harmony import */ var lodash_toNumber__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(48829);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(51187);
/* harmony import */ var lodash_upperFirst__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(39404);
/* harmony import */ var lodash_fp__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(58692);
/* harmony import */ var lodash_take__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(501);
/* harmony import */ var codemirror5__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(57646);
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(23120);
/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(44414);
/* harmony import */ var markdown_it_abbr__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(25962);
/* harmony import */ var markdown_it_container__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(14664);
/* harmony import */ var markdown_it_deflist__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(42588);
/* harmony import */ var markdown_it_emoji__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(90325);
/* harmony import */ var markdown_it_footnote__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(62785);
/* harmony import */ var markdown_it_ins__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(87443);
/* harmony import */ var markdown_it_mark__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(41032);
/* harmony import */ var markdown_it_sub__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(22957);
/* harmony import */ var markdown_it_sup__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(93179);
/* harmony import */ var highlight_js_styles_solarized_dark_css__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(73055);
/* harmony import */ var codemirror5_addon_display_placeholder__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(15747);
/* harmony import */ var lodash_toString__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(62925);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(26509);
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(32058);
/* harmony import */ var lodash_unset__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(81185);
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(4642);
/* harmony import */ var _reviewWorkflows_DZodpwgN_mjs__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(51233);













































































const ActionLink = (0,styled_components__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Ay)((0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_13__/* .Link */ .N_))`
  align-items: center;
  height: ${(0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_13__/* .pxToRem */ .a8)(32)};
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => `${theme.spaces[2]}}`};
  width: ${(0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_13__/* .pxToRem */ .a8)(32)};

  svg {
    height: ${(0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_13__/* .pxToRem */ .a8)(12)};
    width: ${(0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_13__/* .pxToRem */ .a8)(12)};

    path {
      fill: ${({ theme }) => theme.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({ theme }) => theme.colors.neutral800};
      }
    }
  }
`;
const ReviewWorkflowsListView = () => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A)();
  const { push } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_18__/* .useHistory */ .W6)();
  const { trackUsage } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_13__/* .useTracking */ .z1)();
  const [workflowToDelete, setWorkflowToDelete] = react__WEBPACK_IMPORTED_MODULE_1__.useState(null);
  const [showLimitModal, setShowLimitModal] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
  const { collectionTypes, singleTypes, isLoading: isLoadingModels } = (0,_useContentTypes_J1YsHDXc_mjs__WEBPACK_IMPORTED_MODULE_21__.u)();
  const { meta, workflows, isLoading, deleteWorkflow } = (0,_useReviewWorkflows_H0dbPFwV_mjs__WEBPACK_IMPORTED_MODULE_25__.u)();
  const [isDeleting, setIsDeleting] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
  const { _unstableFormatAPIError: formatAPIError } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_13__/* .useAPIErrorHandler */ .wq)();
  const toggleNotification = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_13__/* .useNotification */ .hN)();
  const { getFeature, isLoading: isLicenseLoading } = (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_20__.m)();
  const permissions = (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_20__.j)(
    (state) => state.admin_app.permissions.settings?.["review-workflows"]
  );
  const {
    allowedActions: { canCreate, canDelete }
  } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_13__/* .useRBAC */ .ec)(permissions);
  const limits = getFeature("review-workflows");
  const numberOfWorkflows = limits?.[_constants_8sAt6dKz_mjs__WEBPACK_IMPORTED_MODULE_24__.C];
  const getContentTypeDisplayName = (uid) => {
    const contentType = [...collectionTypes, ...singleTypes].find(
      (contentType2) => contentType2.uid === uid
    );
    return contentType?.info.displayName;
  };
  const handleDeleteWorkflow = (workflowId) => {
    setWorkflowToDelete(workflowId);
  };
  const toggleConfirmDeleteDialog = () => {
    setWorkflowToDelete(null);
  };
  const handleConfirmDeleteDialog = async () => {
    if (!workflowToDelete)
      return;
    try {
      setIsDeleting(true);
      const res = await deleteWorkflow({ id: workflowToDelete });
      if ("error" in res) {
        toggleNotification({
          type: "warning",
          message: formatAPIError(res.error)
        });
        return;
      }
      setWorkflowToDelete(null);
      toggleNotification({
        type: "success",
        message: { id: "notification.success.deleted", defaultMessage: "Deleted" }
      });
    } catch (error) {
      toggleNotification({
        type: "warning",
        message: {
          id: "notification.error.unexpected",
          defaultMessage: "An error occurred"
        }
      });
    } finally {
      setIsDeleting(false);
    }
  };
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    if (!isLoading && !isLicenseLoading) {
      if (numberOfWorkflows && meta && meta?.workflowCount > parseInt(numberOfWorkflows, 10)) {
        setShowLimitModal(true);
      }
    }
  }, [isLicenseLoading, isLoading, meta, meta?.workflowCount, numberOfWorkflows]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _Layout_k_VdyhDA_mjs__WEBPACK_IMPORTED_MODULE_22__.H,
      {
        primaryAction: canCreate && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_13__/* .LinkButton */ .z9,
          {
            startIcon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {}),
            size: "S",
            to: "/settings/review-workflows/create",
            onClick: (event) => {
              if (numberOfWorkflows && meta && meta?.workflowCount >= parseInt(numberOfWorkflows, 10)) {
                event.preventDefault();
                setShowLimitModal(true);
              } else {
                trackUsage("willCreateWorkflow");
              }
            },
            children: formatMessage({
              id: "Settings.review-workflows.list.page.create",
              defaultMessage: "Create new workflow"
            })
          }
        ),
        subtitle: formatMessage({
          id: "Settings.review-workflows.list.page.subtitle",
          defaultMessage: "Manage your content review process"
        }),
        title: formatMessage({
          id: "Settings.review-workflows.list.page.title",
          defaultMessage: "Review Workflows"
        })
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Layout_k_VdyhDA_mjs__WEBPACK_IMPORTED_MODULE_22__.R, { children: [
      isLoading || isLoadingModels ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .s, { justifyContent: "center", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Loader */ .a, { children: formatMessage({
        id: "Settings.review-workflows.page.list.isLoading",
        defaultMessage: "Workflows are loading"
      }) }) }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
        _strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .Table */ .X,
        {
          colCount: 3,
          footer: (
            // TODO: we should be able to use a link here instead of an (inaccessible onClick) handler
            canCreate && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _strapi_design_system__WEBPACK_IMPORTED_MODULE_10__/* .TFooter */ .S,
              {
                icon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {}),
                onClick: () => {
                  if (numberOfWorkflows && meta && meta?.workflowCount >= parseInt(numberOfWorkflows, 10)) {
                    setShowLimitModal(true);
                  } else {
                    push("/settings/review-workflows/create");
                    trackUsage("willCreateWorkflow");
                  }
                },
                children: formatMessage({
                  id: "Settings.review-workflows.list.page.create",
                  defaultMessage: "Create new workflow"
                })
              }
            )
          ),
          rowCount: 1,
          children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .Thead */ .d, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_8__.Tr, { children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_9__.Th, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_11__/* .Typography */ .o, { variant: "sigma", children: formatMessage({
                id: "Settings.review-workflows.list.page.list.column.name.title",
                defaultMessage: "Name"
              }) }) }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_9__.Th, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_11__/* .Typography */ .o, { variant: "sigma", children: formatMessage({
                id: "Settings.review-workflows.list.page.list.column.stages.title",
                defaultMessage: "Stages"
              }) }) }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_9__.Th, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_11__/* .Typography */ .o, { variant: "sigma", children: formatMessage({
                id: "Settings.review-workflows.list.page.list.column.contentTypes.title",
                defaultMessage: "Content Types"
              }) }) }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_9__.Th, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_12__/* .VisuallyHidden */ .s, { children: formatMessage({
                id: "Settings.review-workflows.list.page.list.column.actions.title",
                defaultMessage: "Actions"
              }) }) })
            ] }) }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .Tbody */ .N, { children: workflows?.map((workflow) => /* @__PURE__ */ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(
              _strapi_design_system__WEBPACK_IMPORTED_MODULE_8__.Tr,
              {
                ...(0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_13__/* .onRowClick */ .qM)({
                  fn(event) {
                    const el = event.target;
                    if (el.nodeName === "BUTTON") {
                      return;
                    }
                    push(`/settings/review-workflows/${workflow.id}`);
                  }
                }),
                key: `workflow-${workflow.id}`
              },
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_9__.Td, { width: (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_13__/* .pxToRem */ .a8)(250), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_11__/* .Typography */ .o, { textColor: "neutral800", fontWeight: "bold", ellipsis: true, children: workflow.name }) }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_9__.Td, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_11__/* .Typography */ .o, { textColor: "neutral800", children: workflow.stages.length }) }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_9__.Td, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_11__/* .Typography */ .o, { textColor: "neutral800", children: (workflow?.contentTypes ?? []).map(getContentTypeDisplayName).join(", ") }) }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_9__.Td, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .s, { alignItems: "center", justifyContent: "end", children: [
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  ActionLink,
                  {
                    to: `/settings/review-workflows/${workflow.id}`,
                    "aria-label": formatMessage(
                      {
                        id: "Settings.review-workflows.list.page.list.column.actions.edit.label",
                        defaultMessage: "Edit {name}"
                      },
                      { name: workflow.name }
                    ),
                    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {})
                  }
                ),
                workflows.length > 1 && canDelete && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .IconButton */ .K,
                  {
                    "aria-label": formatMessage(
                      {
                        id: "Settings.review-workflows.list.page.list.column.actions.delete.label",
                        defaultMessage: "Delete {name}"
                      },
                      { name: "Default workflow" }
                    ),
                    icon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {}),
                    noBorder: true,
                    onClick: () => {
                      handleDeleteWorkflow(String(workflow.id));
                    }
                  }
                )
              ] }) })
            )) })
          ]
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_13__/* .ConfirmDialog */ .TM,
        {
          bodyText: {
            id: "Settings.review-workflows.list.page.delete.confirm.body",
            defaultMessage: "If you remove this worfklow, all stage-related information will be removed for this content-type. Are you sure you want to remove it?"
          },
          isConfirmButtonLoading: isDeleting,
          isOpen: !!workflowToDelete,
          onToggleDialog: toggleConfirmDeleteDialog,
          onConfirm: handleConfirmDeleteDialog
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_LimitsModal_slvRtty7_mjs__WEBPACK_IMPORTED_MODULE_23__.L.Root, { isOpen: showLimitModal, onClose: () => setShowLimitModal(false), children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_LimitsModal_slvRtty7_mjs__WEBPACK_IMPORTED_MODULE_23__.L.Title, { children: formatMessage({
          id: "Settings.review-workflows.list.page.workflows.limit.title",
          defaultMessage: "You\u2019ve reached the limit of workflows in your plan"
        }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_LimitsModal_slvRtty7_mjs__WEBPACK_IMPORTED_MODULE_23__.L.Body, { children: formatMessage({
          id: "Settings.review-workflows.list.page.workflows.limit.body",
          defaultMessage: "Delete a workflow or contact Sales to enable more workflows."
        }) })
      ] })
    ] })
  ] });
};
const ProtectedReviewWorkflowsPage = () => {
  const permissions = (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_20__.j)(
    (state) => state.admin_app.permissions.settings?.["review-workflows"]?.main
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_13__/* .CheckPagePermissions */ .kz, { permissions, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ReviewWorkflowsListView, {}) });
};



/***/ },

/***/ 71961
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ useContentTypes)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21272);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59201);
/* harmony import */ var _index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92129);



const contentManager = _index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_2__.n.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * Components
     */
    getComponents: builder.query({
      query: () => ({
        url: `/content-manager/components`,
        method: "GET"
      }),
      transformResponse: (res) => res.data
    }),
    /**
     * Content Types
     */
    getContentTypes: builder.query({
      query: () => ({
        url: `/content-manager/content-types`,
        method: "GET"
      }),
      transformResponse: (res) => res.data
    })
  }),
  overrideExisting: false
});
const { useGetComponentsQuery, useGetContentTypesQuery } = contentManager;
function useContentTypes() {
  const { _unstableFormatAPIError: formatAPIError } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .useAPIErrorHandler */ .wq)();
  const toggleNotification = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .useNotification */ .hN)();
  const components = useGetComponentsQuery();
  const contentTypes = useGetContentTypesQuery();
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (contentTypes.error) {
      toggleNotification({
        type: "warning",
        message: formatAPIError(contentTypes.error)
      });
    }
  }, [contentTypes.error, formatAPIError, toggleNotification]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (components.error) {
      toggleNotification({
        type: "warning",
        message: formatAPIError(components.error)
      });
    }
  }, [components.error, formatAPIError, toggleNotification]);
  const isLoading = components.isLoading || contentTypes.isLoading;
  const collectionTypes = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    return (contentTypes?.data ?? []).filter(
      (contentType) => contentType.kind === "collectionType" && contentType.isDisplayed
    );
  }, [contentTypes?.data]);
  const singleTypes = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    return (contentTypes?.data ?? []).filter(
      (contentType) => contentType.kind !== "collectionType" && contentType.isDisplayed
    );
  }, [contentTypes?.data]);
  return {
    isLoading,
    components: react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => components?.data ?? [], [components?.data]),
    collectionTypes,
    singleTypes
  };
}



/***/ },

/***/ 10470
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ useReviewWorkflows)
/* harmony export */ });
/* harmony import */ var _reviewWorkflows_DZodpwgN_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51233);

function useReviewWorkflows(params = {}) {
  const { id = "", ...queryParams } = params;
  const { data, isLoading } = (0,_reviewWorkflows_DZodpwgN_mjs__WEBPACK_IMPORTED_MODULE_0__.c)({
    id,
    populate: "stages",
    ...queryParams
  });
  const [createWorkflow] = (0,_reviewWorkflows_DZodpwgN_mjs__WEBPACK_IMPORTED_MODULE_0__.d)();
  const [updateWorkflow] = (0,_reviewWorkflows_DZodpwgN_mjs__WEBPACK_IMPORTED_MODULE_0__.e)();
  const [deleteWorkflow] = (0,_reviewWorkflows_DZodpwgN_mjs__WEBPACK_IMPORTED_MODULE_0__.f)();
  const { workflows, meta } = data ?? {};
  return {
    // meta contains e.g. the total of all workflows. we can not use
    // the pagination object here, because the list is not paginated.
    meta,
    workflows,
    isLoading,
    createWorkflow,
    updateWorkflow,
    deleteWorkflow
  };
}



/***/ },

/***/ 40216
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ TFooter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92132);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47610);
/* harmony import */ var _Box_Box_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94061);
/* harmony import */ var _Divider_Divider_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48653);
/* harmony import */ var _Flex_Flex_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83997);
/* harmony import */ var _Typography_Typography_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30893);






const IconBox = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay)((0,_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .a))`
  height: ${24 / 16}rem;
  width: ${24 / 16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10 / 16}rem;
    width: ${10 / 16}rem;
  }

  svg path {
    fill: ${({ theme }) => theme.colors.primary600};
  }
`;
const ButtonBox = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay)((0,_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .a))`
  border-radius: 0 0 ${({ theme }) => theme.borderRadius} ${({ theme }) => theme.borderRadius};
  display: block;
  width: 100%;
  border: none;
`;
const TFooter = ({ children, icon, ...props }) => {
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Divider_Divider_mjs__WEBPACK_IMPORTED_MODULE_3__/* .Divider */ .c, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ButtonBox, { as: "button", background: "primary100", padding: 5, ...props, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Flex_Flex_mjs__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .s, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconBox, { "aria-hidden": true, background: "primary200", children: icon }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .a, { paddingLeft: 3, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Typography_Typography_mjs__WEBPACK_IMPORTED_MODULE_5__/* .Typography */ .o, { variant: "pi", fontWeight: "bold", textColor: "primary600", children }) })] }) })] });
};



/***/ }

}]);