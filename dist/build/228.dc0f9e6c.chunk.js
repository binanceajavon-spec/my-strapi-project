"use strict";
(self["webpackChunkmy_strapi_project"] = self["webpackChunkmy_strapi_project"] || []).push([[228],{

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

/***/ 98432
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ Stages),
/* harmony export */   W: () => (/* binding */ WorkflowAttributes),
/* harmony export */   a: () => (/* binding */ selectIsWorkflowDirty),
/* harmony export */   b: () => (/* binding */ selectCurrentWorkflow),
/* harmony export */   c: () => (/* binding */ selectRoles),
/* harmony export */   d: () => (/* binding */ setWorkflows),
/* harmony export */   e: () => (/* binding */ setContentTypes),
/* harmony export */   f: () => (/* binding */ setRoles),
/* harmony export */   g: () => (/* binding */ setIsLoading),
/* harmony export */   h: () => (/* binding */ addStage),
/* harmony export */   i: () => (/* binding */ reducer),
/* harmony export */   j: () => (/* binding */ selectServerState),
/* harmony export */   k: () => (/* binding */ selectHasDeletedServerStages),
/* harmony export */   l: () => (/* binding */ setWorkflow),
/* harmony export */   r: () => (/* binding */ resetWorkflow),
/* harmony export */   s: () => (/* binding */ selectIsLoading),
/* harmony export */   u: () => (/* binding */ useInjectReducer),
/* harmony export */   v: () => (/* binding */ validateWorkflow)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21272);
/* harmony import */ var _index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92129);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69751);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57237);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44604);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60888);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(94061);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90151);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(68074);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(88353);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(83997);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(56654);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(48323);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7537);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(30893);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(98765);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(59201);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(54894);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(82437);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(47610);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(39116);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(90625);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(85641);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(43206);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(11163);
/* harmony import */ var _strapi_design_system_v2__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(14297);
/* harmony import */ var _strapi_design_system_v2__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(30529);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(61535);
/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(25801);
/* harmony import */ var _constants_8sAt6dKz_mjs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(25524);
/* harmony import */ var _colors_YeFa2BnS_mjs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(35658);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(70653);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(33955);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(88761);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(48940);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(12083);





















function useInjectReducer(namespace, reducer2) {
  const store = (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_1__.Q)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    store.injectReducer(namespace, reducer2);
  }, [store, namespace, reducer2]);
}
function cloneStage(id) {
  return {
    type: _constants_8sAt6dKz_mjs__WEBPACK_IMPORTED_MODULE_29__.j,
    payload: { id }
  };
}
function setWorkflow({ workflow }) {
  return {
    type: _constants_8sAt6dKz_mjs__WEBPACK_IMPORTED_MODULE_29__.A,
    payload: workflow
  };
}
function setWorkflows({ workflows }) {
  return {
    type: _constants_8sAt6dKz_mjs__WEBPACK_IMPORTED_MODULE_29__.c,
    payload: workflows
  };
}
function deleteStage(stageId) {
  return {
    type: _constants_8sAt6dKz_mjs__WEBPACK_IMPORTED_MODULE_29__.k,
    payload: {
      stageId
    }
  };
}
function addStage(stage) {
  return {
    type: _constants_8sAt6dKz_mjs__WEBPACK_IMPORTED_MODULE_29__.d,
    payload: stage
  };
}
function updateStage(stageId, payload) {
  return {
    type: _constants_8sAt6dKz_mjs__WEBPACK_IMPORTED_MODULE_29__.l,
    payload: {
      stageId,
      ...payload
    }
  };
}
function updateStages(payload) {
  return {
    type: _constants_8sAt6dKz_mjs__WEBPACK_IMPORTED_MODULE_29__.m,
    payload
  };
}
function updateStagePosition(oldIndex, newIndex) {
  return {
    type: _constants_8sAt6dKz_mjs__WEBPACK_IMPORTED_MODULE_29__.n,
    payload: {
      newIndex,
      oldIndex
    }
  };
}
function updateWorkflow(payload) {
  return {
    type: _constants_8sAt6dKz_mjs__WEBPACK_IMPORTED_MODULE_29__.i,
    payload
  };
}
function resetWorkflow() {
  return {
    type: _constants_8sAt6dKz_mjs__WEBPACK_IMPORTED_MODULE_29__.e
  };
}
function setContentTypes(payload) {
  return {
    type: _constants_8sAt6dKz_mjs__WEBPACK_IMPORTED_MODULE_29__.f,
    payload
  };
}
function setRoles(payload) {
  return {
    type: _constants_8sAt6dKz_mjs__WEBPACK_IMPORTED_MODULE_29__.g,
    payload
  };
}
function setIsLoading(isLoading) {
  return {
    type: _constants_8sAt6dKz_mjs__WEBPACK_IMPORTED_MODULE_29__.h,
    payload: isLoading
  };
}
const StyledAddIcon = (0,styled_components__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Ay)((0,_strapi_icons__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A))`
  > circle {
    fill: ${({ theme }) => theme.colors.neutral150};
  }
  > path {
    fill: ${({ theme }) => theme.colors.neutral600};
  }
`;
const StyledButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Ay)((0,_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .a))`
  border-radius: 26px;

  svg {
    height: ${({ theme }) => theme.spaces[6]};
    width: ${({ theme }) => theme.spaces[6]};

    > path {
      fill: ${({ theme }) => theme.colors.neutral600};
    }
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary600} !important;
    ${_strapi_design_system__WEBPACK_IMPORTED_MODULE_14__/* .Typography */ .o} {
      color: ${({ theme }) => theme.colors.primary600} !important;
    }

    ${StyledAddIcon} {
      > circle {
        fill: ${({ theme }) => theme.colors.primary600};
      }
      > path {
        fill: ${({ theme }) => theme.colors.neutral100};
      }
    }
  }

  &:active {
    ${_strapi_design_system__WEBPACK_IMPORTED_MODULE_14__/* .Typography */ .o} {
      color: ${({ theme }) => theme.colors.primary600};
    }

    ${StyledAddIcon} {
      > circle {
        fill: ${({ theme }) => theme.colors.primary600};
      }
      > path {
        fill: ${({ theme }) => theme.colors.neutral100};
      }
    }
  }
`;
const AddStage = ({ children, ...props }) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
    StyledButton,
    {
      as: "button",
      background: "neutral0",
      border: "neutral150",
      paddingBottom: 3,
      paddingLeft: 4,
      paddingRight: 4,
      paddingTop: 3,
      shadow: "filterShadow",
      ...props,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_10__/* .Flex */ .s, { gap: 2, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(StyledAddIcon, { "aria-hidden": true }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_14__/* .Typography */ .o, { variant: "pi", fontWeight: "bold", textColor: "neutral500", children })
      ] })
    }
  );
};
AddStage.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_24__.node.isRequired
};
const initialState = {
  serverState: {
    contentTypes: {
      collectionTypes: [],
      singleTypes: []
    },
    roles: [],
    workflow: null,
    workflows: []
  },
  clientState: {
    currentWorkflow: {
      data: {
        name: "",
        contentTypes: [],
        stages: [],
        permissions: void 0
      }
    },
    isLoading: true
  }
};
function reducer(state = initialState, action) {
  return (0,immer__WEBPACK_IMPORTED_MODULE_33__/* .produce */ .jM)(state, (draft) => {
    const { payload } = action;
    switch (action.type) {
      case _constants_8sAt6dKz_mjs__WEBPACK_IMPORTED_MODULE_29__.f: {
        draft.serverState.contentTypes = payload;
        break;
      }
      case _constants_8sAt6dKz_mjs__WEBPACK_IMPORTED_MODULE_29__.h: {
        draft.clientState.isLoading = payload;
        break;
      }
      case _constants_8sAt6dKz_mjs__WEBPACK_IMPORTED_MODULE_29__.g: {
        draft.serverState.roles = payload;
        break;
      }
      case _constants_8sAt6dKz_mjs__WEBPACK_IMPORTED_MODULE_29__.A: {
        const workflow = payload;
        if (workflow) {
          draft.serverState.workflow = workflow;
          draft.clientState.currentWorkflow.data = {
            ...workflow,
            stages: workflow.stages.map((stage) => ({
              ...stage,
              // A safety net in case a stage does not have a color assigned;
              // this should not happen
              color: stage?.color ?? _constants_8sAt6dKz_mjs__WEBPACK_IMPORTED_MODULE_29__.b
            }))
          };
        }
        break;
      }
      case _constants_8sAt6dKz_mjs__WEBPACK_IMPORTED_MODULE_29__.c: {
        draft.serverState.workflows = payload;
        break;
      }
      case _constants_8sAt6dKz_mjs__WEBPACK_IMPORTED_MODULE_29__.e: {
        draft.clientState = initialState.clientState;
        draft.serverState = (0,immer__WEBPACK_IMPORTED_MODULE_33__/* .createDraft */ .mq)(initialState.serverState);
        break;
      }
      case _constants_8sAt6dKz_mjs__WEBPACK_IMPORTED_MODULE_29__.k: {
        const { stageId } = payload;
        const { currentWorkflow } = state.clientState;
        draft.clientState.currentWorkflow.data.stages = currentWorkflow.data.stages?.filter(
          (stage) => (stage?.id ?? stage.__temp_key__) !== stageId
        );
        break;
      }
      case _constants_8sAt6dKz_mjs__WEBPACK_IMPORTED_MODULE_29__.d: {
        const { currentWorkflow } = state.clientState;
        if (!currentWorkflow.data) {
          draft.clientState.currentWorkflow.data = {
            stages: []
          };
        }
        const newTempKey = getMaxTempKey(draft.clientState.currentWorkflow.data.stages);
        draft.clientState.currentWorkflow.data.stages?.push({
          ...payload,
          color: payload?.color ?? _constants_8sAt6dKz_mjs__WEBPACK_IMPORTED_MODULE_29__.b,
          __temp_key__: newTempKey
        });
        break;
      }
      case _constants_8sAt6dKz_mjs__WEBPACK_IMPORTED_MODULE_29__.j: {
        const { currentWorkflow } = state.clientState;
        const { id } = payload;
        const sourceStageIndex = currentWorkflow.data.stages?.findIndex(
          (stage) => (stage?.id ?? stage?.__temp_key__) === id
        );
        if (sourceStageIndex !== void 0 && sourceStageIndex !== -1) {
          const sourceStage = currentWorkflow.data.stages?.[sourceStageIndex];
          draft.clientState.currentWorkflow.data.stages?.splice(sourceStageIndex + 1, 0, {
            ...sourceStage,
            // @ts-expect-error - We are handling temporary (unsaved) duplicated stages with temporary keys and undefined ids. It should be revamp imo
            id: void 0,
            __temp_key__: getMaxTempKey(draft.clientState.currentWorkflow.data.stages)
          });
        }
        break;
      }
      case _constants_8sAt6dKz_mjs__WEBPACK_IMPORTED_MODULE_29__.l: {
        const { currentWorkflow } = state.clientState;
        const { stageId, ...modified } = payload;
        draft.clientState.currentWorkflow.data.stages = currentWorkflow.data.stages?.map(
          (stage) => (stage.id ?? stage.__temp_key__) === stageId ? {
            ...stage,
            ...modified
          } : stage
        );
        break;
      }
      case _constants_8sAt6dKz_mjs__WEBPACK_IMPORTED_MODULE_29__.m: {
        const { currentWorkflow } = state.clientState;
        draft.clientState.currentWorkflow.data.stages = currentWorkflow.data.stages?.map(
          (stage) => ({
            ...stage,
            ...payload
          })
        );
        break;
      }
      case _constants_8sAt6dKz_mjs__WEBPACK_IMPORTED_MODULE_29__.n: {
        const {
          currentWorkflow: {
            data: { stages }
          }
        } = state.clientState;
        const { newIndex, oldIndex } = payload;
        if (stages && newIndex >= 0 && newIndex < stages.length) {
          const stage = stages[oldIndex];
          const newStages = [...stages];
          newStages.splice(oldIndex, 1);
          newStages.splice(newIndex, 0, stage);
          draft.clientState.currentWorkflow.data.stages = newStages;
        }
        break;
      }
      case _constants_8sAt6dKz_mjs__WEBPACK_IMPORTED_MODULE_29__.i: {
        draft.clientState.currentWorkflow.data = {
          ...draft.clientState.currentWorkflow.data,
          ...payload
        };
        break;
      }
    }
  });
}
const getMaxTempKey = (stages = []) => {
  const ids = stages.map((stage) => Number(stage.id ?? stage.__temp_key__));
  return Math.max(...ids, -1) + 1;
};
const selectNamespace = (state) => state[_constants_8sAt6dKz_mjs__WEBPACK_IMPORTED_MODULE_29__.R] ?? initialState;
const selectContentTypes = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_31__/* .createSelector */ .Mz)(
  selectNamespace,
  ({ serverState: { contentTypes } }) => contentTypes
);
const selectRoles = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_31__/* .createSelector */ .Mz)(selectNamespace, ({ serverState: { roles } }) => roles);
const selectCurrentWorkflow = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_31__/* .createSelector */ .Mz)(
  selectNamespace,
  ({ clientState: { currentWorkflow } }) => currentWorkflow.data
);
const selectWorkflows = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_31__/* .createSelector */ .Mz)(
  selectNamespace,
  ({ serverState: { workflows } }) => workflows
);
const selectIsWorkflowDirty = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_31__/* .createSelector */ .Mz)(
  selectNamespace,
  ({ serverState, clientState: { currentWorkflow } }) => !lodash_isEqual__WEBPACK_IMPORTED_MODULE_32__(serverState.workflow, currentWorkflow.data)
);
const selectHasDeletedServerStages = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_31__/* .createSelector */ .Mz)(
  selectNamespace,
  ({ serverState, clientState: { currentWorkflow } }) => !(serverState.workflow?.stages ?? []).every(
    (stage) => !!currentWorkflow.data.stages?.find(({ id }) => id === stage.id)
  )
);
const selectIsLoading = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_31__/* .createSelector */ .Mz)(
  selectNamespace,
  ({ clientState: { isLoading } }) => isLoading
);
const selectServerState = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_31__/* .createSelector */ .Mz)(selectNamespace, ({ serverState }) => serverState);
const NestedOption$1 = (0,styled_components__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Ay)((0,_strapi_design_system__WEBPACK_IMPORTED_MODULE_11__/* .MultiSelectOption */ .fe))`
  padding-left: ${({ theme }) => theme.spaces[7]};
`;
const PermissionWrapper = (0,styled_components__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Ay)((0,_strapi_design_system__WEBPACK_IMPORTED_MODULE_10__/* .Flex */ .s))`
  > * {
    flex-grow: 1;
  }
`;
const DeleteMenuItem = (0,styled_components__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Ay)((0,_strapi_design_system_v2__WEBPACK_IMPORTED_MODULE_25__/* .MenuItem */ .Dr))`
  color: ${({ theme }) => theme.colors.danger600};
`;
const ContextMenuTrigger = (0,styled_components__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Ay)(_strapi_design_system_v2__WEBPACK_IMPORTED_MODULE_26__/* .Trigger */ .l9)`
  :hover,
  :focus {
    background-color: ${({ theme }) => theme.colors.neutral100};
  }

  > span {
    font-size: 0;
  }
`;
const DragIconButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Ay)((0,_strapi_design_system__WEBPACK_IMPORTED_MODULE_9__/* .IconButton */ .K))`
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  justify-content: center;

  :hover,
  :focus {
    background-color: ${({ theme }) => theme.colors.neutral100};
  }

  svg {
    height: auto;
    width: ${({ theme }) => theme.spaces[3]}};
  }
`;
const AVAILABLE_COLORS = (0,_colors_YeFa2BnS_mjs__WEBPACK_IMPORTED_MODULE_30__.a)();
const StageDropPreview = () => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .a,
    {
      background: "primary100",
      borderStyle: "dashed",
      borderColor: "primary600",
      borderWidth: "1px",
      display: "block",
      hasRadius: true,
      padding: 6,
      shadow: "tableShadow"
    }
  );
};
const Stage = ({
  id,
  index,
  canDelete,
  canReorder,
  canUpdate,
  isOpen: isOpenDefault = false,
  stagesCount
}) => {
  const getItemPos = (index2) => `${index2 + 1} of ${stagesCount}`;
  const handleGrabStage = (index2) => {
    setLiveText(
      formatMessage(
        {
          id: "dnd.grab-item",
          defaultMessage: `{item}, grabbed. Current position in list: {position}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel.`
        },
        {
          item: nameField.value,
          position: getItemPos(index2)
        }
      )
    );
  };
  const handleDropStage = (index2) => {
    setLiveText(
      formatMessage(
        {
          id: "dnd.drop-item",
          defaultMessage: `{item}, dropped. Final position in list: {position}.`
        },
        {
          item: nameField.value,
          position: getItemPos(index2)
        }
      )
    );
  };
  const handleCancelDragStage = () => {
    setLiveText(
      formatMessage(
        {
          id: "dnd.cancel-item",
          defaultMessage: "{item}, dropped. Re-order cancelled."
        },
        {
          item: nameField.value
        }
      )
    );
  };
  const handleMoveStage = (newIndex, oldIndex) => {
    setLiveText(
      formatMessage(
        {
          id: "dnd.reorder",
          defaultMessage: "{item}, moved. New position in list: {position}."
        },
        {
          item: nameField.value,
          position: getItemPos(newIndex)
        }
      )
    );
    dispatch(updateStagePosition(oldIndex, newIndex));
  };
  const handleApplyPermissionsToAllStages = () => {
    setIsApplyAllConfirmationOpen(true);
  };
  const [liveText, setLiveText] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A)();
  const { trackUsage } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_16__/* .useTracking */ .z1)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_18__/* .useDispatch */ .wA)();
  const toggleNotification = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_16__/* .useNotification */ .hN)();
  const [isOpen, setIsOpen] = react__WEBPACK_IMPORTED_MODULE_0__.useState(isOpenDefault);
  const [isApplyAllConfirmationOpen, setIsApplyAllConfirmationOpen] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
  const [nameField, nameMeta, nameHelper] = (0,formik__WEBPACK_IMPORTED_MODULE_27__/* .useField */ .Mt)(`stages.${index}.name`);
  const [colorField, colorMeta, colorHelper] = (0,formik__WEBPACK_IMPORTED_MODULE_27__/* .useField */ .Mt)(`stages.${index}.color`);
  const [permissionsField, permissionsMeta, permissionsHelper] = (0,formik__WEBPACK_IMPORTED_MODULE_27__/* .useField */ .Mt)(`stages.${index}.permissions`);
  const roles = (0,react_redux__WEBPACK_IMPORTED_MODULE_18__/* .useSelector */ .d4)(selectRoles);
  const [{ handlerId, isDragging, handleKeyDown }, stageRef, dropRef, dragRef, dragPreviewRef] = (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_1__.T)(canReorder, {
    index,
    item: {
      index,
      name: nameField.value
    },
    onGrabItem: handleGrabStage,
    onDropItem: handleDropStage,
    onMoveItem: handleMoveStage,
    onCancel: handleCancelDragStage,
    type: _constants_8sAt6dKz_mjs__WEBPACK_IMPORTED_MODULE_29__.D.STAGE
  });
  const composedRef = (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_1__.V)(stageRef, dropRef);
  const colorOptions = AVAILABLE_COLORS.map(({ hex, name }) => ({
    value: hex,
    label: formatMessage(
      {
        id: "Settings.review-workflows.stage.color.name",
        defaultMessage: "{name}"
      },
      { name }
    ),
    color: hex
  }));
  const { themeColorName } = (0,_colors_YeFa2BnS_mjs__WEBPACK_IMPORTED_MODULE_30__.g)(colorField.value) ?? {};
  const filteredRoles = roles?.filter((role) => role.code !== "strapi-super-admin");
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    dragPreviewRef((0,react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_28__/* .getEmptyImage */ .n)(), { captureDraggingState: false });
  }, [dragPreviewRef, index]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .a, { ref: (ref) => composedRef(ref), children: [
    liveText && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_15__/* .VisuallyHidden */ .s, { "aria-live": "assertive", children: liveText }),
    isDragging ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(StageDropPreview, {}) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
      _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Accordion */ .n,
      {
        size: "S",
        variant: "primary",
        onToggle: () => {
          setIsOpen(!isOpen);
          if (!isOpen) {
            trackUsage("willEditStage");
          }
        },
        expanded: isOpen,
        shadow: "tableShadow",
        error: nameMeta.error ?? colorMeta?.error ?? permissionsMeta?.error,
        hasErrorMessage: false,
        children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
            _strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .AccordionToggle */ .P,
            {
              title: nameField.value,
              togglePosition: "left",
              action: (canDelete || canUpdate) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_10__/* .Flex */ .s, { children: [
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_strapi_design_system_v2__WEBPACK_IMPORTED_MODULE_26__/* .Root */ .bL, { children: [
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(ContextMenuTrigger, { size: "S", endIcon: null, paddingLeft: 2, paddingRight: 2, children: [
                    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, { "aria-hidden": true, focusable: false }),
                    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_15__/* .VisuallyHidden */ .s, { as: "span", children: formatMessage({
                      id: "[tbdb].components.DynamicZone.more-actions",
                      defaultMessage: "More actions"
                    }) })
                  ] }),
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_strapi_design_system_v2__WEBPACK_IMPORTED_MODULE_26__/* .Content */ .UC, { popoverPlacement: "bottom-end", zIndex: 2, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_strapi_design_system_v2__WEBPACK_IMPORTED_MODULE_26__/* .SubRoot */ .x8, { children: [
                    canUpdate && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_strapi_design_system_v2__WEBPACK_IMPORTED_MODULE_25__/* .MenuItem */ .Dr, { onClick: () => dispatch(cloneStage(id)), children: formatMessage({
                      id: "Settings.review-workflows.stage.delete",
                      defaultMessage: "Duplicate stage"
                    }) }),
                    canDelete && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(DeleteMenuItem, { onClick: () => dispatch(deleteStage(id)), children: formatMessage({
                      id: "Settings.review-workflows.stage.delete",
                      defaultMessage: "Delete"
                    }) })
                  ] }) })
                ] }),
                canUpdate && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  DragIconButton,
                  {
                    background: "transparent",
                    forwardedAs: "div",
                    hasRadius: true,
                    role: "button",
                    noBorder: true,
                    tabIndex: 0,
                    "data-handler-id": handlerId,
                    ref: dragRef,
                    label: formatMessage({
                      id: "Settings.review-workflows.stage.drag",
                      defaultMessage: "Drag"
                    }),
                    onClick: (e) => e.stopPropagation(),
                    onKeyDown: handleKeyDown,
                    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {})
                  }
                )
              ] })
            }
          ),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .AccordionContent */ .u, { padding: 6, background: "neutral0", hasRadius: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .Grid */ .x, { gap: 4, children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .GridItem */ .E, { col: 6, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
              _strapi_design_system__WEBPACK_IMPORTED_MODULE_13__/* .TextInput */ .k,
              {
                ...nameField,
                id: nameField.name,
                disabled: !canUpdate,
                label: formatMessage({
                  id: "Settings.review-workflows.stage.name.label",
                  defaultMessage: "Stage name"
                }),
                error: nameMeta.error ?? false,
                onChange: (event) => {
                  nameHelper.setValue(event.target.value);
                  dispatch(updateStage(id, { name: event.target.value }));
                },
                required: true
              }
            ) }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .GridItem */ .E, { col: 6, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
              _strapi_design_system__WEBPACK_IMPORTED_MODULE_12__/* .SingleSelect */ .Z,
              {
                disabled: !canUpdate,
                error: colorMeta?.error ?? false,
                id: colorField.name,
                required: true,
                label: formatMessage({
                  id: "content-manager.reviewWorkflows.stage.color",
                  defaultMessage: "Color"
                }),
                onChange: (value) => {
                  colorHelper.setValue(value);
                  dispatch(updateStage(id, { color: String(value) }));
                },
                value: colorField.value.toUpperCase(),
                startIcon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _strapi_design_system__WEBPACK_IMPORTED_MODULE_10__/* .Flex */ .s,
                  {
                    as: "span",
                    height: 2,
                    background: colorField.value,
                    borderColor: themeColorName === "neutral0" ? "neutral150" : "transparent",
                    hasRadius: true,
                    shrink: 0,
                    width: 2
                  }
                ),
                children: colorOptions.map(({ value, label, color }) => {
                  const { themeColorName: themeColorName2 } = (0,_colors_YeFa2BnS_mjs__WEBPACK_IMPORTED_MODULE_30__.g)(color) || {};
                  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                    _strapi_design_system__WEBPACK_IMPORTED_MODULE_12__/* .SingleSelectOption */ .eY,
                    {
                      value,
                      startIcon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                        _strapi_design_system__WEBPACK_IMPORTED_MODULE_10__/* .Flex */ .s,
                        {
                          as: "span",
                          height: 2,
                          background: color,
                          borderColor: themeColorName2 === "neutral0" ? "neutral150" : "transparent",
                          hasRadius: true,
                          shrink: 0,
                          width: 2
                        }
                      ),
                      children: label
                    },
                    value
                  );
                })
              }
            ) }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .GridItem */ .E, { col: 6, children: filteredRoles?.length === 0 ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
              _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_16__/* .NotAllowedInput */ .WT,
              {
                description: {
                  id: "Settings.review-workflows.stage.permissions.noPermissions.description",
                  defaultMessage: "You don\u2019t have the permission to see roles"
                },
                intlLabel: {
                  id: "Settings.review-workflows.stage.permissions.label",
                  defaultMessage: "Roles that can change this stage"
                },
                name: permissionsField.name
              }
            ) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_10__/* .Flex */ .s, { alignItems: "flex-end", gap: 3, children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(PermissionWrapper, { grow: 1, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                _strapi_design_system__WEBPACK_IMPORTED_MODULE_11__/* .MultiSelect */ .KF,
                {
                  ...permissionsField,
                  disabled: !canUpdate,
                  error: permissionsMeta.error ?? false,
                  id: permissionsField.name,
                  label: formatMessage({
                    id: "Settings.review-workflows.stage.permissions.label",
                    defaultMessage: "Roles that can change this stage"
                  }),
                  onChange: (values) => {
                    const permissions = values.map((value) => ({
                      role: parseInt(value, 10),
                      action: "admin::review-workflows.stage.transition"
                    }));
                    permissionsHelper.setValue(permissions);
                    dispatch(updateStage(id, { permissions }));
                  },
                  placeholder: formatMessage({
                    id: "Settings.review-workflows.stage.permissions.placeholder",
                    defaultMessage: "Select a role"
                  }),
                  required: true,
                  value: (permissionsField.value ?? []).map(
                    (permission) => `${permission.role}`
                  ),
                  withTags: true,
                  children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                    _strapi_design_system__WEBPACK_IMPORTED_MODULE_11__/* .MultiSelectGroup */ .np,
                    {
                      label: formatMessage({
                        id: "Settings.review-workflows.stage.permissions.allRoles.label",
                        defaultMessage: "All roles"
                      }),
                      values: filteredRoles?.map((r) => `${r.id}`),
                      children: filteredRoles?.map((role) => {
                        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(NestedOption$1, { value: `${role.id}`, children: role.name }, role.id);
                      })
                    }
                  )
                }
              ) }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                _strapi_design_system__WEBPACK_IMPORTED_MODULE_9__/* .IconButton */ .K,
                {
                  disabled: !canUpdate,
                  icon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, {}),
                  label: formatMessage({
                    id: "Settings.review-workflows.stage.permissions.apply.label",
                    defaultMessage: "Apply to all stages"
                  }),
                  size: "L",
                  variant: "secondary",
                  onClick: () => handleApplyPermissionsToAllStages()
                }
              )
            ] }) })
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
      _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_16__/* .ConfirmDialog */ .TM.Root,
      {
        iconRightButton: null,
        isOpen: isApplyAllConfirmationOpen,
        onToggleDialog: () => setIsApplyAllConfirmationOpen(false),
        onConfirm: () => {
          dispatch(updateStages({ permissions: permissionsField.value }));
          setIsApplyAllConfirmationOpen(false);
          toggleNotification({
            type: "success",
            message: formatMessage({
              id: "Settings.review-workflows.page.edit.confirm.stages.permissions.copy.success",
              defaultMessage: "Applied roles to all other stages of the workflow"
            })
          });
        },
        variantRightButton: "default",
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_16__/* .ConfirmDialog */ .TM.Body, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_14__/* .Typography */ .o, { textAlign: "center", variant: "omega", children: formatMessage({
          id: "Settings.review-workflows.page.edit.confirm.stages.permissions.copy",
          defaultMessage: "Roles that can change that stage will be applied to all the other stages."
        }) }) })
      }
    )
  ] });
};
const Background = (0,styled_components__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Ay)((0,_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .a))`
  transform: translateX(-50%);
`;
const Stages = ({ canDelete = true, canUpdate = true, stages = [] }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_18__/* .useDispatch */ .wA)();
  const { trackUsage } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_16__/* .useTracking */ .z1)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_10__/* .Flex */ .s, { direction: "column", gap: 6, width: "100%", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .a, { position: "relative", width: "100%", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
        Background,
        {
          background: "neutral200",
          height: "100%",
          left: "50%",
          position: "absolute",
          top: "0",
          width: 2,
          zIndex: 1
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
        _strapi_design_system__WEBPACK_IMPORTED_MODULE_10__/* .Flex */ .s,
        {
          direction: "column",
          alignItems: "stretch",
          gap: 6,
          zIndex: 2,
          position: "relative",
          as: "ol",
          children: stages.map((stage, index) => {
            const id = Number(stage?.id ?? stage.__temp_key__);
            return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .a, { as: "li", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
              Stage,
              {
                id,
                index,
                isOpen: !stage.id,
                canDelete: stages.length > 1 && canDelete,
                canReorder: stages.length > 1,
                canUpdate,
                stagesCount: stages.length
              }
            ) }, `stage-${id}`);
          })
        }
      )
    ] }),
    canUpdate && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
      AddStage,
      {
        type: "button",
        onClick: () => {
          dispatch(addStage({ name: "" }));
          trackUsage("willCreateStage");
        },
        children: formatMessage({
          id: "Settings.review-workflows.stage.add",
          defaultMessage: "Add new stage"
        })
      }
    )
  ] });
};
const NestedOption = (0,styled_components__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Ay)((0,_strapi_design_system__WEBPACK_IMPORTED_MODULE_11__/* .MultiSelectOption */ .fe))`
  padding-left: ${({ theme }) => theme.spaces[7]};
`;
const ContentTypeTakeNotice = (0,styled_components__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Ay)((0,_strapi_design_system__WEBPACK_IMPORTED_MODULE_14__/* .Typography */ .o))`
  font-style: italic;
`;
const WorkflowAttributes = ({ canUpdate = true }) => {
  const { formatMessage, locale } = (0,react_intl__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_18__/* .useDispatch */ .wA)();
  const contentTypes = (0,react_redux__WEBPACK_IMPORTED_MODULE_18__/* .useSelector */ .d4)(selectContentTypes);
  const currentWorkflow = (0,react_redux__WEBPACK_IMPORTED_MODULE_18__/* .useSelector */ .d4)(selectCurrentWorkflow);
  const workflows = (0,react_redux__WEBPACK_IMPORTED_MODULE_18__/* .useSelector */ .d4)(selectWorkflows);
  const [nameField, nameMeta, nameHelper] = (0,formik__WEBPACK_IMPORTED_MODULE_27__/* .useField */ .Mt)("name");
  const [contentTypesField, contentTypesMeta, contentTypesHelper] = (0,formik__WEBPACK_IMPORTED_MODULE_27__/* .useField */ .Mt)("contentTypes");
  const formatter = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_16__/* .useCollator */ .QM)(locale, {
    sensitivity: "base"
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .Grid */ .x, { background: "neutral0", hasRadius: true, gap: 4, padding: 6, shadow: "tableShadow", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .GridItem */ .E, { col: 6, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
      _strapi_design_system__WEBPACK_IMPORTED_MODULE_13__/* .TextInput */ .k,
      {
        ...nameField,
        id: nameField.name,
        disabled: !canUpdate,
        label: formatMessage({
          id: "Settings.review-workflows.workflow.name.label",
          defaultMessage: "Workflow Name"
        }),
        error: nameMeta.error ?? false,
        onChange: (event) => {
          dispatch(updateWorkflow({ name: event.target.value }));
          nameHelper.setValue(event.target.value);
        },
        required: true
      }
    ) }),
    contentTypes && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .GridItem */ .E, { col: 6, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
      _strapi_design_system__WEBPACK_IMPORTED_MODULE_11__/* .MultiSelect */ .KF,
      {
        ...contentTypesField,
        customizeContent: (value) => formatMessage(
          {
            id: "Settings.review-workflows.workflow.contentTypes.displayValue",
            defaultMessage: "{count} {count, plural, one {content type} other {content types}} selected"
          },
          { count: value?.length }
        ),
        disabled: !canUpdate,
        error: contentTypesMeta.error ?? false,
        id: contentTypesField.name,
        label: formatMessage({
          id: "Settings.review-workflows.workflow.contentTypes.label",
          defaultMessage: "Associated to"
        }),
        onChange: (values) => {
          dispatch(updateWorkflow({ contentTypes: values }));
          contentTypesHelper.setValue(values);
        },
        placeholder: formatMessage({
          id: "Settings.review-workflows.workflow.contentTypes.placeholder",
          defaultMessage: "Select"
        }),
        children: [
          ...contentTypes.collectionTypes.length > 0 ? [
            {
              label: formatMessage({
                id: "Settings.review-workflows.workflow.contentTypes.collectionTypes.label",
                defaultMessage: "Collection Types"
              }),
              children: [...contentTypes.collectionTypes].sort((a, b) => formatter.compare(a.info.displayName, b.info.displayName)).map((contentType) => ({
                label: contentType.info.displayName,
                value: contentType.uid
              }))
            }
          ] : [],
          ...contentTypes.singleTypes.length > 0 ? [
            {
              label: formatMessage({
                id: "Settings.review-workflows.workflow.contentTypes.singleTypes.label",
                defaultMessage: "Single Types"
              }),
              children: [...contentTypes.singleTypes].map((contentType) => ({
                label: contentType.info.displayName,
                value: contentType.uid
              }))
            }
          ] : []
        ].map((opt) => {
          if ("children" in opt) {
            return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
              _strapi_design_system__WEBPACK_IMPORTED_MODULE_11__/* .MultiSelectGroup */ .np,
              {
                label: opt.label,
                values: opt.children.map((child) => child.value.toString()),
                children: opt.children.map((child) => {
                  const { name: assignedWorkflowName } = workflows?.find(
                    (workflow) => (currentWorkflow && workflow.id !== currentWorkflow.id || !currentWorkflow) && workflow.contentTypes.includes(child.value)
                  ) ?? {};
                  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(NestedOption, { value: child.value, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_14__/* .Typography */ .o, {
                    // @ts-expect-error - formatMessage options doesn't expect to be a React component but that's what we need actually for the <i> and <em> components
                    children: formatMessage(
                      {
                        id: "Settings.review-workflows.workflow.contentTypes.assigned.notice",
                        defaultMessage: "{label} {name, select, undefined {} other {<i>(assigned to <em>{name}</em> workflow)</i>}}"
                      },
                      {
                        label: child.label,
                        name: assignedWorkflowName,
                        em: (...children) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_14__/* .Typography */ .o, { as: "em", fontWeight: "bold", children }),
                        i: (...children) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ContentTypeTakeNotice, { children })
                      }
                    )
                  }) }, child.value);
                })
              },
              opt.label
            );
          }
        })
      }
    ) })
  ] });
};
async function validateWorkflow({
  values,
  formatMessage
}) {
  const schema = yup__WEBPACK_IMPORTED_MODULE_35__/* .object */ .Ik({
    contentTypes: yup__WEBPACK_IMPORTED_MODULE_35__/* .array */ .YO().of(yup__WEBPACK_IMPORTED_MODULE_35__/* .string */ .Yj()),
    name: yup__WEBPACK_IMPORTED_MODULE_35__/* .string */ .Yj().max(
      255,
      formatMessage({
        id: "Settings.review-workflows.validation.name.max-length",
        defaultMessage: "Name can not be longer than 255 characters"
      })
    ).required(),
    stages: yup__WEBPACK_IMPORTED_MODULE_35__/* .array */ .YO().of(
      yup__WEBPACK_IMPORTED_MODULE_35__/* .object */ .Ik().shape({
        name: yup__WEBPACK_IMPORTED_MODULE_35__/* .string */ .Yj().required(
          formatMessage({
            id: "Settings.review-workflows.validation.stage.name",
            defaultMessage: "Name is required"
          })
        ).max(
          255,
          formatMessage({
            id: "Settings.review-workflows.validation.stage.max-length",
            defaultMessage: "Name can not be longer than 255 characters"
          })
        ).test(
          "unique-name",
          formatMessage({
            id: "Settings.review-workflows.validation.stage.duplicate",
            defaultMessage: "Stage name must be unique"
          }),
          function(stageName) {
            const {
              options: { context }
            } = this;
            return context?.stages.filter((stage) => stage.name === stageName).length === 1;
          }
        ),
        color: yup__WEBPACK_IMPORTED_MODULE_35__/* .string */ .Yj().required(
          formatMessage({
            id: "Settings.review-workflows.validation.stage.color",
            defaultMessage: "Color is required"
          })
        ).matches(/^#(?:[0-9a-fA-F]{3}){1,2}$/i),
        permissions: yup__WEBPACK_IMPORTED_MODULE_35__/* .array */ .YO(
          yup__WEBPACK_IMPORTED_MODULE_35__/* .object */ .Ik({
            role: yup__WEBPACK_IMPORTED_MODULE_35__/* .number */ .ai().strict().typeError(
              formatMessage({
                id: "Settings.review-workflows.validation.stage.permissions.role.number",
                defaultMessage: "Role must be of type number"
              })
            ).required(),
            action: yup__WEBPACK_IMPORTED_MODULE_35__/* .string */ .Yj().required({
              id: "Settings.review-workflows.validation.stage.permissions.action.required",
              defaultMessage: "Action is a required argument"
            })
          })
        ).strict()
      })
    ).min(1)
  });
  try {
    await schema.validate(values, { abortEarly: false, context: values });
    return true;
  } catch (error) {
    const errors = {};
    if (error instanceof yup__WEBPACK_IMPORTED_MODULE_35__/* .ValidationError */ .yI) {
      error.inner.forEach((error2) => {
        if (error2.path)
          lodash_set__WEBPACK_IMPORTED_MODULE_34__(errors, error2.path, error2.message);
      });
    }
    return errors;
  }
}



/***/ }

}]);