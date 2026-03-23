"use strict";
(self["webpackChunkmy_strapi_project"] = self["webpackChunkmy_strapi_project"] || []).push([[9281],{

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

/***/ 25524
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ACTION_SET_WORKFLOW),
/* harmony export */   C: () => (/* binding */ CHARGEBEE_WORKFLOW_ENTITLEMENT_NAME),
/* harmony export */   D: () => (/* binding */ DRAG_DROP_TYPES),
/* harmony export */   R: () => (/* binding */ REDUX_NAMESPACE),
/* harmony export */   S: () => (/* binding */ STAGE_COLORS),
/* harmony export */   a: () => (/* binding */ CHARGEBEE_STAGES_PER_WORKFLOW_ENTITLEMENT_NAME),
/* harmony export */   b: () => (/* binding */ STAGE_COLOR_DEFAULT),
/* harmony export */   c: () => (/* binding */ ACTION_SET_WORKFLOWS),
/* harmony export */   d: () => (/* binding */ ACTION_ADD_STAGE),
/* harmony export */   e: () => (/* binding */ ACTION_RESET_WORKFLOW),
/* harmony export */   f: () => (/* binding */ ACTION_SET_CONTENT_TYPES),
/* harmony export */   g: () => (/* binding */ ACTION_SET_ROLES),
/* harmony export */   h: () => (/* binding */ ACTION_SET_IS_LOADING),
/* harmony export */   i: () => (/* binding */ ACTION_UPDATE_WORKFLOW),
/* harmony export */   j: () => (/* binding */ ACTION_CLONE_STAGE),
/* harmony export */   k: () => (/* binding */ ACTION_DELETE_STAGE),
/* harmony export */   l: () => (/* binding */ ACTION_UPDATE_STAGE),
/* harmony export */   m: () => (/* binding */ ACTION_UPDATE_STAGES),
/* harmony export */   n: () => (/* binding */ ACTION_UPDATE_STAGE_POSITION)
/* harmony export */ });
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57438);

const REDUX_NAMESPACE = "settings_review-workflows";
const ACTION_RESET_WORKFLOW = `Settings/Review_Workflows/RESET_WORKFLOW`;
const ACTION_SET_CONTENT_TYPES = `Settings/Review_Workflows/SET_CONTENT_TYPES`;
const ACTION_SET_IS_LOADING = `Settings/Review_Workflows/SET_IS_LOADING`;
const ACTION_SET_ROLES = `Settings/Review_Workflows/SET_ROLES`;
const ACTION_SET_WORKFLOW = `Settings/Review_Workflows/SET_WORKFLOW`;
const ACTION_SET_WORKFLOWS = `Settings/Review_Workflows/SET_WORKFLOWS`;
const ACTION_DELETE_STAGE = `Settings/Review_Workflows/WORKFLOW_DELETE_STAGE`;
const ACTION_ADD_STAGE = `Settings/Review_Workflows/WORKFLOW_ADD_STAGE`;
const ACTION_CLONE_STAGE = `Settings/Review_Workflows/WORKFLOW_CLONE_STAGE`;
const ACTION_UPDATE_STAGE = `Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE`;
const ACTION_UPDATE_STAGES = `Settings/Review_Workflows/WORKFLOW_UPDATE_STAGES`;
const ACTION_UPDATE_STAGE_POSITION = `Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE_POSITION`;
const ACTION_UPDATE_WORKFLOW = `Settings/Review_Workflows/WORKFLOW_UPDATE`;
const STAGE_COLORS = {
  primary600: "Blue",
  primary200: "Lilac",
  alternative600: "Violet",
  alternative200: "Lavender",
  success600: "Green",
  success200: "Pale Green",
  danger500: "Cherry",
  danger200: "Pink",
  warning600: "Orange",
  warning200: "Yellow",
  secondary600: "Teal",
  secondary200: "Baby Blue",
  neutral400: "Gray",
  neutral0: "White"
};
const STAGE_COLOR_DEFAULT = _strapi_design_system__WEBPACK_IMPORTED_MODULE_0__/* .lightTheme */ ._.colors.primary600;
const DRAG_DROP_TYPES = {
  STAGE: "stage"
};
const CHARGEBEE_WORKFLOW_ENTITLEMENT_NAME = "numberOfWorkflows";
const CHARGEBEE_STAGES_PER_WORKFLOW_ENTITLEMENT_NAME = "stagesPerWorkflow";



/***/ },

/***/ 59281
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   REVIEW_WORKFLOW_COLUMNS_EE: () => (/* binding */ REVIEW_WORKFLOW_COLUMNS_EE),
/* harmony export */   REVIEW_WORKFLOW_FILTERS: () => (/* binding */ REVIEW_WORKFLOW_FILTERS)
/* harmony export */ });
/* harmony import */ var _index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92129);
/* harmony import */ var _constants_q1_l5GM_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45534);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69751);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76517);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80782);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43064);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(83997);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(48323);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(30893);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(54894);
/* harmony import */ var _useReviewWorkflows_H0dbPFwV_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(10470);
/* harmony import */ var _colors_YeFa2BnS_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(35658);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(59201);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(15126);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(63299);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(44633);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(59080);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(79275);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(14718);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(21272);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(82437);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(61535);
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(5790);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(12083);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(35223);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(5409);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(74930);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(80219);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(48940);
/* harmony import */ var lodash_defaultsDeep__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(41286);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(33955);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(13426);
/* harmony import */ var lodash_isBoolean__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(84624);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(346);
/* harmony import */ var lodash_isNaN__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(54257);
/* harmony import */ var lodash_toNumber__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(48829);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(51187);
/* harmony import */ var lodash_upperFirst__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(39404);
/* harmony import */ var lodash_fp__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(58692);
/* harmony import */ var lodash_take__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(501);
/* harmony import */ var codemirror5__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(57646);
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(23120);
/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(44414);
/* harmony import */ var markdown_it_abbr__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(25962);
/* harmony import */ var markdown_it_container__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(14664);
/* harmony import */ var markdown_it_deflist__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(42588);
/* harmony import */ var markdown_it_emoji__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(90325);
/* harmony import */ var markdown_it_footnote__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(62785);
/* harmony import */ var markdown_it_ins__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(87443);
/* harmony import */ var markdown_it_mark__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(41032);
/* harmony import */ var markdown_it_sub__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(22957);
/* harmony import */ var markdown_it_sup__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(93179);
/* harmony import */ var highlight_js_styles_solarized_dark_css__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(73055);
/* harmony import */ var codemirror5_addon_display_placeholder__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(15747);
/* harmony import */ var lodash_toString__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(62925);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(26509);
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(32058);
/* harmony import */ var lodash_unset__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(81185);
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(4642);
/* harmony import */ var _reviewWorkflows_DZodpwgN_mjs__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(51233);
/* harmony import */ var _constants_8sAt6dKz_mjs__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(25524);












































































const AssigneeFilter = ({ value, onChange }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)();
  const { data, isLoading } = (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_0__.k)();
  const users = data?.users || [];
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Combobox */ .G3,
    {
      value,
      "aria-label": formatMessage({
        id: "content-manager.components.Filters.usersSelect.label",
        defaultMessage: "Search and select an user to filter"
      }),
      onChange,
      loading: isLoading,
      children: users.map((user) => {
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .ComboboxOption */ .j, { value: user.id.toString(), children: (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_0__.l)(user, formatMessage) }, user.id);
      })
    }
  );
};
const StageFilter = ({ value, onChange, uid }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)();
  const { workflows, isLoading } = (0,_useReviewWorkflows_H0dbPFwV_mjs__WEBPACK_IMPORTED_MODULE_10__.u)({ filters: { contentTypes: uid } });
  const [workflow] = workflows ?? [];
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .SingleSelect */ .Z,
    {
      "aria-label": formatMessage({
        id: "content-manager.components.Filters.reviewWorkflows.label",
        defaultMessage: "Search and select an workflow stage to filter"
      }),
      value,
      onChange,
      loading: isLoading,
      customizeContent: () => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .s, { as: "span", justifyContent: "space-between", alignItems: "center", width: "100%", children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .Typography */ .o, { textColor: "neutral800", ellipsis: true, children: value }),
        isLoading ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .Loader */ .a, { small: true, style: { display: "flex" } }) : null
      ] }),
      children: (workflow?.stages ?? []).map(({ id, color, name }) => {
        const { themeColorName } = (0,_colors_YeFa2BnS_mjs__WEBPACK_IMPORTED_MODULE_11__.g)(color) ?? {};
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
          _strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .SingleSelectOption */ .eY,
          {
            startIcon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
              _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .s,
              {
                height: 2,
                background: color,
                borderColor: themeColorName === "neutral0" ? "neutral150" : void 0,
                hasRadius: true,
                shrink: 0,
                width: 2
              }
            ),
            value: name,
            children: name
          },
          id
        );
      })
    }
  );
};
const REVIEW_WORKFLOW_COLUMNS_EE = [
  {
    key: `__${_constants_q1_l5GM_mjs__WEBPACK_IMPORTED_MODULE_1__.S}_temp_key__`,
    name: _constants_q1_l5GM_mjs__WEBPACK_IMPORTED_MODULE_1__.S,
    fieldSchema: {
      type: "relation",
      relation: "oneToMany",
      target: "admin::review-workflow-stage"
    },
    metadatas: {
      // formatMessage() will be applied when the column is rendered
      label: {
        id: (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_0__.o)(`containers.ListPage.table-headers.reviewWorkflows.stage`),
        defaultMessage: "Review stage"
      },
      searchable: false,
      sortable: true,
      mainField: {
        name: "name",
        type: "string"
      }
    }
  },
  {
    key: `__${_constants_q1_l5GM_mjs__WEBPACK_IMPORTED_MODULE_1__.A}_temp_key__`,
    name: _constants_q1_l5GM_mjs__WEBPACK_IMPORTED_MODULE_1__.A,
    fieldSchema: {
      type: "relation",
      target: "admin::user",
      relation: "oneToMany"
    },
    metadatas: {
      label: {
        id: (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_0__.o)(`containers.ListPage.table-headers.reviewWorkflows.assignee`),
        defaultMessage: "Assignee"
      },
      searchable: false,
      sortable: true,
      mainField: {
        name: "firstname",
        type: "string"
      }
    }
  }
];
const REVIEW_WORKFLOW_FILTERS = [
  {
    fieldSchema: {
      type: "relation",
      mainField: {
        name: "name",
        type: "string"
      }
    },
    metadatas: {
      customInput: StageFilter,
      label: {
        id: (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_0__.o)(`containers.ListPage.table-headers.reviewWorkflows.stage`),
        defaultMessage: "Review stage"
      }
    },
    name: "strapi_stage"
  },
  {
    fieldSchema: {
      type: "relation",
      mainField: {
        name: "id",
        type: "integer"
      }
    },
    metadatas: {
      customInput: AssigneeFilter,
      customOperators: [
        {
          intlLabel: {
            id: "components.FilterOptions.FILTER_TYPES.$eq",
            defaultMessage: "is"
          },
          value: "$eq"
        },
        {
          intlLabel: {
            id: "components.FilterOptions.FILTER_TYPES.$ne",
            defaultMessage: "is not"
          },
          value: "$ne"
        }
      ],
      label: {
        id: (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_0__.o)(`containers.ListPage.table-headers.reviewWorkflows.assignee.label`),
        defaultMessage: "Assignee"
      }
    },
    name: "strapi_assignee"
  }
];



/***/ },

/***/ 45534
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ASSIGNEE_ATTRIBUTE_NAME),
/* harmony export */   S: () => (/* binding */ STAGE_ATTRIBUTE_NAME)
/* harmony export */ });
const STAGE_ATTRIBUTE_NAME = "strapi_stage";
const ASSIGNEE_ATTRIBUTE_NAME = "strapi_assignee";



/***/ },

/***/ 51233
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ useGetStagesQuery),
/* harmony export */   b: () => (/* binding */ useUpdateStageMutation),
/* harmony export */   c: () => (/* binding */ useGetWorkflowsQuery),
/* harmony export */   d: () => (/* binding */ useCreateWorkflowMutation),
/* harmony export */   e: () => (/* binding */ useUpdateWorkflowMutation),
/* harmony export */   f: () => (/* binding */ useDeleteWorkflowMutation),
/* harmony export */   u: () => (/* binding */ useUpdateAssigneeMutation)
/* harmony export */ });
/* harmony import */ var _index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92129);

const reviewWorkflowsApi = _index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_0__.n.injectEndpoints({
  endpoints: (builder) => ({
    getWorkflows: builder.query({
      query: (args) => {
        const { id, ...params } = args ?? {};
        return {
          url: `/admin/review-workflows/workflows/${id ?? ""}`,
          method: "GET",
          config: {
            params
          }
        };
      },
      transformResponse: (res) => {
        let workflows = [];
        if (Array.isArray(res.data)) {
          workflows = res.data;
        } else {
          workflows = [res.data];
        }
        return {
          workflows,
          meta: "meta" in res ? res.meta : void 0
        };
      },
      providesTags: (res, _err, arg) => {
        if (typeof arg === "object" && "id" in arg && arg.id !== "") {
          return [{ type: "ReviewWorkflow", id: arg.id }];
        } else {
          return [
            ...res?.workflows.map(({ id }) => ({ type: "ReviewWorkflow", id })) ?? [],
            { type: "ReviewWorkflow", id: "LIST" }
          ];
        }
      }
    }),
    createWorkflow: builder.mutation({
      query: (data) => ({
        url: "/admin/review-workflows/workflows",
        method: "POST",
        data
      }),
      transformResponse: (res) => res.data,
      invalidatesTags: [{ type: "ReviewWorkflow", id: "LIST" }]
    }),
    updateWorkflow: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/admin/review-workflows/workflows/${id}`,
        method: "PUT",
        data
      }),
      transformResponse: (res) => res.data,
      invalidatesTags: (res, _err, arg) => [{ type: "ReviewWorkflow", id: arg.id }]
    }),
    deleteWorkflow: builder.mutation({
      query: ({ id }) => ({
        url: `/admin/review-workflows/workflows/${id}`,
        method: "DELETE"
      }),
      transformResponse: (res) => res.data,
      invalidatesTags: (res, _err, arg) => [{ type: "ReviewWorkflow", id: arg.id }]
    }),
    getStages: builder.query({
      query: ({ model, slug, id }) => ({
        url: `/admin/content-manager/${slug}/${model}/${id}/stages`,
        method: "GET"
      }),
      transformResponse: (res) => {
        return {
          meta: res.meta ?? { workflowCount: 0 },
          stages: res.data ?? []
        };
      },
      providesTags: (_res, _err, arg) => {
        return [{ type: "ReviewWorkflowStage", id: arg.id }];
      }
    }),
    updateStage: builder.mutation({
      query: ({ model, slug, id, ...data }) => ({
        url: `/admin/content-manager/${slug}/${model}/${id}/stage`,
        method: "PUT",
        data
      }),
      transformResponse: (res) => res.data,
      invalidatesTags: (res, _err, arg) => [{ type: "ReviewWorkflowStage", id: arg.id }]
    }),
    updateAssignee: builder.mutation({
      query: ({ model, slug, id, ...data }) => ({
        url: `/admin/content-manager/${slug}/${model}/${id}/assignee`,
        method: "PUT",
        data
      }),
      transformResponse: (res) => res.data
    })
  }),
  overrideExisting: false
});
const {
  useGetWorkflowsQuery,
  useCreateWorkflowMutation,
  useDeleteWorkflowMutation,
  useUpdateWorkflowMutation,
  useGetStagesQuery,
  useUpdateStageMutation,
  useUpdateAssigneeMutation
} = reviewWorkflowsApi;



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



/***/ }

}]);