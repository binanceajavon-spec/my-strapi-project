"use strict";
(self["webpackChunkmy_strapi_project"] = self["webpackChunkmy_strapi_project"] || []).push([[9770],{

/***/ 9770
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InformationBoxEE: () => (/* binding */ InformationBoxEE)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69751);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59201);
/* harmony import */ var _index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92129);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76517);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80782);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7153);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16918);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10229);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(43064);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(83997);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(48323);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(30893);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(54894);
/* harmony import */ var _reviewWorkflows_DZodpwgN_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(51233);
/* harmony import */ var _constants_q1_l5GM_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(45534);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(21272);
/* harmony import */ var _LimitsModal_slvRtty7_mjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(45084);
/* harmony import */ var _constants_8sAt6dKz_mjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(25524);
/* harmony import */ var _colors_YeFa2BnS_mjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(35658);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(15126);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(63299);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(44633);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(59080);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(79275);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(14718);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(82437);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(61535);
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(5790);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(12083);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(35223);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(5409);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(74930);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(80219);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(48940);
/* harmony import */ var lodash_defaultsDeep__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(41286);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(33955);
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












































































const AssigneeSelect = () => {
  const { initialData, layout, isSingleType, onChange } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .useCMEditViewDataManager */ .Cu)();
  const permissions = (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_2__.j)((state) => state.admin_app.permissions);
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)();
  const { _unstableFormatAPIError: formatAPIError } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .useAPIErrorHandler */ .wq)();
  const toggleNotification = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .useNotification */ .hN)();
  const {
    allowedActions: { canRead },
    isLoading: isLoadingPermissions
  } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .useRBAC */ .ec)(permissions.settings?.users);
  const { data, isLoading, isError } = (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_2__.k)(
    {},
    {
      skip: isLoadingPermissions || !canRead
    }
  );
  const users = data?.users || [];
  const currentAssignee = initialData?.[_constants_q1_l5GM_mjs__WEBPACK_IMPORTED_MODULE_14__.A] ?? null;
  const [updateAssignee, { error, isLoading: isMutating }] = (0,_reviewWorkflows_DZodpwgN_mjs__WEBPACK_IMPORTED_MODULE_13__.u)();
  const handleChange = async (assigneeId) => {
    const res = await updateAssignee({
      slug: isSingleType ? "single-types" : "collection-types",
      model: layout.uid,
      id: initialData.id,
      data: {
        id: assigneeId ? parseInt(assigneeId, 10) : null
      }
    });
    if ("data" in res) {
      onChange?.(
        {
          target: {
            type: "",
            name: _constants_q1_l5GM_mjs__WEBPACK_IMPORTED_MODULE_14__.A,
            value: res.data[_constants_q1_l5GM_mjs__WEBPACK_IMPORTED_MODULE_14__.A]
          }
        },
        true
      );
      toggleNotification({
        type: "success",
        message: {
          id: "content-manager.reviewWorkflows.assignee.notification.saved",
          defaultMessage: "Assignee updated"
        }
      });
    }
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .Field */ .D, { name: _constants_q1_l5GM_mjs__WEBPACK_IMPORTED_MODULE_14__.A, id: _constants_q1_l5GM_mjs__WEBPACK_IMPORTED_MODULE_14__.A, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_9__/* .Flex */ .s, { direction: "column", gap: 2, alignItems: "stretch", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Combobox */ .G3,
    {
      clearLabel: formatMessage({
        id: "content-manager.reviewWorkflows.assignee.clear",
        defaultMessage: "Clear assignee"
      }),
      error: (isError && canRead && formatMessage({
        id: "content-manager.reviewWorkflows.assignee.error",
        defaultMessage: "An error occurred while fetching users"
      }) || error && formatAPIError(error)) ?? void 0,
      disabled: !isLoadingPermissions && !isLoading && users.length === 0,
      name: _constants_q1_l5GM_mjs__WEBPACK_IMPORTED_MODULE_14__.A,
      id: _constants_q1_l5GM_mjs__WEBPACK_IMPORTED_MODULE_14__.A,
      value: currentAssignee ? currentAssignee.id.toString() : null,
      onChange: handleChange,
      onClear: () => handleChange(null),
      placeholder: formatMessage({
        id: "content-manager.reviewWorkflows.assignee.placeholder",
        defaultMessage: "Select \u2026"
      }),
      label: formatMessage({
        id: "content-manager.reviewWorkflows.assignee.label",
        defaultMessage: "Assignee"
      }),
      loading: isLoading || isLoadingPermissions || isMutating,
      children: users.map((user) => {
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .ComboboxOption */ .j,
          {
            value: user.id.toString(),
            textValue: (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_2__.l)(user, formatMessage),
            children: (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_2__.l)(user, formatMessage)
          },
          user.id
        );
      })
    }
  ) }) });
};
const StageSelect = () => {
  const { initialData, layout: contentType, isSingleType, onChange } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .useCMEditViewDataManager */ .Cu)();
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)();
  const { _unstableFormatAPIError: formatAPIError } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .useAPIErrorHandler */ .wq)();
  const toggleNotification = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .useNotification */ .hN)();
  const { data, isLoading } = (0,_reviewWorkflows_DZodpwgN_mjs__WEBPACK_IMPORTED_MODULE_13__.a)(
    {
      slug: isSingleType ? "single-types" : "collection-types",
      model: contentType.uid,
      id: initialData.id
    },
    {
      skip: !initialData?.id || !contentType?.uid
    }
  );
  const { meta, stages = [] } = data ?? {};
  const { getFeature } = (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_2__.m)();
  const [showLimitModal, setShowLimitModal] = react__WEBPACK_IMPORTED_MODULE_15__.useState(null);
  const limits = getFeature("review-workflows") ?? {};
  const activeWorkflowStage = initialData?.[_constants_q1_l5GM_mjs__WEBPACK_IMPORTED_MODULE_14__.S] ?? null;
  const [updateStage, { error }] = (0,_reviewWorkflows_DZodpwgN_mjs__WEBPACK_IMPORTED_MODULE_13__.b)();
  const handleChange = async (stageId) => {
    try {
      if (limits?.[_constants_8sAt6dKz_mjs__WEBPACK_IMPORTED_MODULE_17__.C] && parseInt(limits[_constants_8sAt6dKz_mjs__WEBPACK_IMPORTED_MODULE_17__.C], 10) < (meta?.workflowCount ?? 0)) {
        setShowLimitModal("workflow");
      } else if (limits?.[_constants_8sAt6dKz_mjs__WEBPACK_IMPORTED_MODULE_17__.a] && parseInt(limits[_constants_8sAt6dKz_mjs__WEBPACK_IMPORTED_MODULE_17__.a], 10) < stages.length) {
        setShowLimitModal("stage");
      } else {
        if (initialData.id && contentType) {
          const res = await updateStage({
            model: contentType.uid,
            id: initialData.id,
            slug: isSingleType ? "single-types" : "collection-types",
            data: { id: stageId }
          });
          if ("data" in res) {
            onChange?.(
              {
                target: {
                  name: _constants_q1_l5GM_mjs__WEBPACK_IMPORTED_MODULE_14__.S,
                  value: res.data[_constants_q1_l5GM_mjs__WEBPACK_IMPORTED_MODULE_14__.S],
                  type: ""
                }
              },
              true
            );
            toggleNotification({
              type: "success",
              message: {
                id: "content-manager.reviewWorkflows.stage.notification.saved",
                defaultMessage: "Review stage updated"
              }
            });
          }
        }
      }
    } catch (error2) {
    }
  };
  const { themeColorName } = (0,_colors_YeFa2BnS_mjs__WEBPACK_IMPORTED_MODULE_18__.g)(activeWorkflowStage?.color) ?? {};
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .Field */ .D,
      {
        hint: stages.length === 0 && formatMessage({
          id: "content-manager.reviewWorkflows.stages.no-transition",
          defaultMessage: "You don\u2019t have the permission to update this stage."
        }),
        name: _constants_q1_l5GM_mjs__WEBPACK_IMPORTED_MODULE_14__.S,
        id: _constants_q1_l5GM_mjs__WEBPACK_IMPORTED_MODULE_14__.S,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_9__/* .Flex */ .s, { direction: "column", gap: 2, alignItems: "stretch", children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _strapi_design_system__WEBPACK_IMPORTED_MODULE_10__/* .SingleSelect */ .Z,
            {
              disabled: stages.length === 0,
              error: error && formatAPIError(error) || void 0,
              name: _constants_q1_l5GM_mjs__WEBPACK_IMPORTED_MODULE_14__.S,
              id: _constants_q1_l5GM_mjs__WEBPACK_IMPORTED_MODULE_14__.S,
              value: activeWorkflowStage?.id,
              onChange: handleChange,
              label: formatMessage({
                id: "content-manager.reviewWorkflows.stage.label",
                defaultMessage: "Review stage"
              }),
              startIcon: activeWorkflowStage && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _strapi_design_system__WEBPACK_IMPORTED_MODULE_9__/* .Flex */ .s,
                {
                  as: "span",
                  height: 2,
                  background: activeWorkflowStage?.color,
                  borderColor: themeColorName === "neutral0" ? "neutral150" : void 0,
                  hasRadius: true,
                  shrink: 0,
                  width: 2,
                  marginRight: "-3px"
                }
              ),
              customizeContent: () => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_9__/* .Flex */ .s, { as: "span", justifyContent: "space-between", alignItems: "center", width: "100%", children: [
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_11__/* .Typography */ .o, { textColor: "neutral800", ellipsis: true, children: activeWorkflowStage?.name ?? "" }),
                isLoading ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .Loader */ .a, { small: true, style: { display: "flex" }, "data-testid": "loader" }) : null
              ] }),
              children: stages.map(({ id, color, name }) => {
                const { themeColorName: themeColorName2 } = (0,_colors_YeFa2BnS_mjs__WEBPACK_IMPORTED_MODULE_18__.g)(color) ?? {};
                return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _strapi_design_system__WEBPACK_IMPORTED_MODULE_10__/* .SingleSelectOption */ .eY,
                  {
                    startIcon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _strapi_design_system__WEBPACK_IMPORTED_MODULE_9__/* .Flex */ .s,
                      {
                        height: 2,
                        background: color,
                        borderColor: themeColorName2 === "neutral0" ? "neutral150" : void 0,
                        hasRadius: true,
                        shrink: 0,
                        width: 2
                      }
                    ),
                    value: id,
                    textValue: name,
                    children: name
                  },
                  id
                );
              })
            }
          ),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .FieldHint */ .o, {}),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .FieldError */ .b, {})
        ] })
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
      _LimitsModal_slvRtty7_mjs__WEBPACK_IMPORTED_MODULE_16__.L.Root,
      {
        isOpen: showLimitModal === "workflow",
        onClose: () => setShowLimitModal(null),
        children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_LimitsModal_slvRtty7_mjs__WEBPACK_IMPORTED_MODULE_16__.L.Title, { children: formatMessage({
            id: "content-manager.reviewWorkflows.workflows.limit.title",
            defaultMessage: "You\u2019ve reached the limit of workflows in your plan"
          }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_LimitsModal_slvRtty7_mjs__WEBPACK_IMPORTED_MODULE_16__.L.Body, { children: formatMessage({
            id: "content-manager.reviewWorkflows.workflows.limit.body",
            defaultMessage: "Delete a workflow or contact Sales to enable more workflows."
          }) })
        ]
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_LimitsModal_slvRtty7_mjs__WEBPACK_IMPORTED_MODULE_16__.L.Root, { isOpen: showLimitModal === "stage", onClose: () => setShowLimitModal(null), children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_LimitsModal_slvRtty7_mjs__WEBPACK_IMPORTED_MODULE_16__.L.Title, { children: formatMessage({
        id: "content-manager.reviewWorkflows.stages.limit.title",
        defaultMessage: "You have reached the limit of stages for this workflow in your plan"
      }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_LimitsModal_slvRtty7_mjs__WEBPACK_IMPORTED_MODULE_16__.L.Body, { children: formatMessage({
        id: "content-manager.reviewWorkflows.stages.limit.body",
        defaultMessage: "Try deleting some stages or contact Sales to enable more stages."
      }) })
    ] })
  ] });
};
const InformationBoxEE = () => {
  const { isCreatingEntry, layout } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .useCMEditViewDataManager */ .Cu)();
  const hasReviewWorkflowsEnabled = layout?.options?.reviewWorkflows ?? false;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_2__.I.Root, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_2__.I.Title, {}),
    hasReviewWorkflowsEnabled && !isCreatingEntry && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StageSelect, {}),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AssigneeSelect, {})
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_2__.I.Body, {})
  ] });
};



/***/ },

/***/ 35658
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ getAvailableStageColors),
/* harmony export */   g: () => (/* binding */ getStageColorByHex)
/* harmony export */ });
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57438);
/* harmony import */ var _constants_8sAt6dKz_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25524);


function getStageColorByHex(hex) {
  if (!hex) {
    return null;
  }
  const themeColors = Object.entries(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_0__/* .lightTheme */ ._.colors
  ).filter(([, value]) => value.toUpperCase() === hex.toUpperCase());
  const themeColorName = themeColors.reduce((acc, [name]) => {
    if (_constants_8sAt6dKz_mjs__WEBPACK_IMPORTED_MODULE_1__.S?.[name]) {
      acc = name;
    }
    return acc;
  }, null);
  if (!themeColorName) {
    return null;
  }
  return {
    themeColorName,
    name: _constants_8sAt6dKz_mjs__WEBPACK_IMPORTED_MODULE_1__.S[themeColorName]
  };
}
function getAvailableStageColors() {
  return Object.entries(_constants_8sAt6dKz_mjs__WEBPACK_IMPORTED_MODULE_1__.S).map(([themeColorName, name]) => ({
    hex: _strapi_design_system__WEBPACK_IMPORTED_MODULE_0__/* .lightTheme */ ._.colors[themeColorName].toUpperCase(),
    name
  }));
}



/***/ },

/***/ 45534
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ASSIGNEE_ATTRIBUTE_NAME),
/* harmony export */   S: () => (/* binding */ STAGE_ATTRIBUTE_NAME)
/* harmony export */ });
const STAGE_ATTRIBUTE_NAME = "strapi_stage";
const ASSIGNEE_ATTRIBUTE_NAME = "strapi_assignee";



/***/ }

}]);