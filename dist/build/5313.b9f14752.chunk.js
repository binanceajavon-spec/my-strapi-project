"use strict";
(self["webpackChunkmy_strapi_project"] = self["webpackChunkmy_strapi_project"] || []).push([[5313],{

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



/***/ },

/***/ 5313
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ListView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69751);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94061);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85963);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58805);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88353);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4198);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55356);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(83997);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(35513);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(26127);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(90361);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(33363);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(40216);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(30893);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(59201);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(46270);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(54514);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(68802);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(77701);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(41231);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(41909);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(5194);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(50612);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(80219);
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(78031);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(33955);
/* harmony import */ var lodash_upperFirst__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(39404);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(54894);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(17703);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(21272);
/* harmony import */ var _index_b3fbviVW_mjs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(40025);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(47610);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(14718);
/* harmony import */ var _index_vZqceADF_mjs__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(47689);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(48940);
/* harmony import */ var lodash_snakeCase__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(54779);
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(21835);
/* harmony import */ var _sindresorhus_slugify__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(17024);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(51187);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(12083);
/* harmony import */ var lodash_groupBy__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(94710);
/* harmony import */ var lodash_size__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(14311);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(82437);
/* harmony import */ var lodash_toLower__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(89102);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(5409);
/* harmony import */ var lodash_truncate__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(35336);
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(71547);
/* harmony import */ var lodash_fp__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(58692);
/* harmony import */ var lodash_toNumber__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(48829);
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(5790);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(35223);
/* harmony import */ var lodash_sortBy__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(45635);




































const BoxWrapper$1 = (0,styled_components__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Ay)((0,_strapi_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Box */ .a))`
  table {
    width: 100%;
    white-space: nowrap;
  }

  thead {
    border-bottom: 1px solid ${({ theme }) => theme.colors.neutral150};

    tr {
      border-top: 0;
    }
  }

  tr {
    border-top: 1px solid ${({ theme }) => theme.colors.neutral150};

    & td,
    & th {
      padding: ${({ theme }) => theme.spaces[4]};
    }

    & td:first-of-type,
    & th:first-of-type {
      padding: 0 ${({ theme }) => theme.spaces[1]};
    }
  }

  th,
  td {
    vertical-align: middle;
    text-align: left;
    color: ${({ theme }) => theme.colors.neutral600};
    outline-offset: -4px;
  }
`;
const Tr = styled_components__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Ay.tr`
  &.component-row,
  &.dynamiczone-row {
    position: relative;
    border-top: none !important;

    table tr:first-child {
      border-top: none;
    }

    > td:first-of-type {
      padding: 0 0 0 ${(0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .pxToRem */ .a8)(20)};
      position: relative;

      &::before {
        content: '';
        width: ${(0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .pxToRem */ .a8)(4)};
        height: calc(100% - 40px);
        position: absolute;
        top: -7px;
        left: 1.625rem;
        border-radius: 4px;

        ${({ isFromDynamicZone, isChildOfDynamicZone, theme }) => {
  if (isChildOfDynamicZone) {
    return `background-color: ${theme.colors.primary200};`;
  }
  if (isFromDynamicZone) {
    return `background-color: ${theme.colors.primary200};`;
  }
  return `background: ${theme.colors.neutral150};`;
}}
      }
    }
  }

  &.dynamiczone-row > td:first-of-type {
    padding: 0;
  }
`;
const ComponentList = ({
  customRowComponent,
  component,
  isFromDynamicZone = false,
  isNestedInDZComponent = false,
  firstLoopComponentUid
}) => {
  const { modifiedData } = (0,_index_b3fbviVW_mjs__WEBPACK_IMPORTED_MODULE_30__.u)();
  const {
    schema: { attributes }
  } = lodash_get__WEBPACK_IMPORTED_MODULE_23__(modifiedData, ["components", component], {
    schema: { attributes: [] }
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Tr, { isChildOfDynamicZone: isFromDynamicZone, className: "component-row", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { colSpan: 12, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    List,
    {
      customRowComponent,
      items: attributes,
      targetUid: component,
      firstLoopComponentUid: firstLoopComponentUid || component,
      editTarget: "components",
      isFromDynamicZone,
      isNestedInDZComponent,
      isSub: true,
      secondLoopComponentUid: firstLoopComponentUid ? component : null
    }
  ) }) });
};
const ComponentIcon = ({ isActive = false, icon = "cube" }) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .s,
    {
      alignItems: "center",
      background: isActive ? "primary200" : "neutral200",
      justifyContent: "center",
      height: 8,
      width: 8,
      borderRadius: "50%",
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Icon */ .I, { as: _index_b3fbviVW_mjs__WEBPACK_IMPORTED_MODULE_30__.C[icon] || _index_b3fbviVW_mjs__WEBPACK_IMPORTED_MODULE_30__.C.cube, height: 5, width: 5 })
    }
  );
};
const CloseButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Ay)((0,_strapi_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Box */ .a))`
  position: absolute;
  display: none;
  top: 5px;
  right: ${(0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .pxToRem */ .a8)(8)};

  svg {
    width: ${(0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .pxToRem */ .a8)(10)};
    height: ${(0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .pxToRem */ .a8)(10)};

    path {
      fill: ${({ theme }) => theme.colors.primary600};
    }
  }
`;
const ComponentBox = (0,styled_components__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Ay)((0,_strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .s))`
  width: ${(0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .pxToRem */ .a8)(140)};
  height: ${(0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .pxToRem */ .a8)(80)};
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.neutral200};
  background: ${({ theme }) => theme.colors.neutral100};
  border-radius: ${({ theme }) => theme.borderRadius};
  max-width: 100%;

  &.active,
  &:focus,
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primary200};
    background: ${({ theme }) => theme.colors.primary100};

    ${CloseButton} {
      display: block;
    }

    ${_strapi_design_system__WEBPACK_IMPORTED_MODULE_13__/* .Typography */ .o} {
      color: ${({ theme }) => theme.colors.primary600};
    }

    /* > ComponentIcon */
    > div:first-child {
      background: ${({ theme }) => theme.colors.primary200};
      color: ${({ theme }) => theme.colors.primary600};

      svg {
        path {
          fill: ${({ theme }) => theme.colors.primary600};
        }
      }
    }
  }
`;
const ComponentCard = ({
  component,
  dzName,
  index,
  isActive = false,
  isInDevelopmentMode = false,
  onClick
}) => {
  const { modifiedData, removeComponentFromDynamicZone } = (0,_index_b3fbviVW_mjs__WEBPACK_IMPORTED_MODULE_30__.u)();
  const {
    schema: { icon, displayName }
  } = lodash_get__WEBPACK_IMPORTED_MODULE_23__(modifiedData, ["components", component], { schema: {} });
  const onClose = (e) => {
    e.stopPropagation();
    removeComponentFromDynamicZone(dzName, index);
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
    ComponentBox,
    {
      alignItems: "center",
      direction: "column",
      className: isActive ? "active" : "",
      borderRadius: "borderRadius",
      justifyContent: "center",
      paddingLeft: 4,
      paddingRight: 4,
      shrink: 0,
      onClick,
      role: "tab",
      tabIndex: isActive ? 0 : -1,
      cursor: "pointer",
      "aria-selected": isActive,
      "aria-controls": `dz-${dzName}-panel-${index}`,
      id: `dz-${dzName}-tab-${index}`,
      children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ComponentIcon, { icon, isActive }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Box */ .a, { marginTop: 1, maxWidth: "100%", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_13__/* .Typography */ .o, { variant: "pi", fontWeight: "bold", ellipsis: true, children: displayName }) }),
        isInDevelopmentMode && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CloseButton, { as: "button", onClick: onClose, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {}) })
      ]
    }
  );
};
const StyledAddIcon = (0,styled_components__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Ay)((0,_strapi_icons__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A))`
  width: ${(0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .pxToRem */ .a8)(32)};
  height: ${(0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .pxToRem */ .a8)(32)};
  padding: ${(0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .pxToRem */ .a8)(9)};
  border-radius: ${(0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .pxToRem */ .a8)(64)};
  background: ${({ theme }) => theme.colors.primary100};
  path {
    fill: ${({ theme }) => theme.colors.primary600};
  }
`;
const FixedBox = (0,styled_components__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Ay)((0,_strapi_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Box */ .a))`
  height: ${(0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .pxToRem */ .a8)(90)};
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`;
const ScrollableStack = (0,styled_components__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Ay)((0,_strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .s))`
  width: 100%;
  overflow-x: auto;
`;
const ComponentContentBox = (0,styled_components__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Ay)((0,_strapi_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Box */ .a))`
  padding-top: ${(0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .pxToRem */ .a8)(90)};
`;
const ComponentStack = (0,styled_components__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Ay)((0,_strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .s))`
  flex-shrink: 0;
  width: ${(0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .pxToRem */ .a8)(140)};
  height: ${(0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .pxToRem */ .a8)(80)};
  justify-content: center;
  align-items: center;
`;
const DynamicZoneList = ({
  customRowComponent,
  components = [],
  addComponent,
  name,
  targetUid
}) => {
  const { isInDevelopmentMode } = (0,_index_b3fbviVW_mjs__WEBPACK_IMPORTED_MODULE_30__.u)();
  const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_29__.useState)(0);
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A)();
  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  const handleClickAdd = () => {
    addComponent(name);
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Tr, { className: "dynamiczone-row", isFromDynamicZone: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", { colSpan: 12, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(FixedBox, { paddingLeft: 8, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ScrollableStack, { gap: 2, children: [
      isInDevelopmentMode && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { type: "button", onClick: handleClickAdd, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ComponentStack, { direction: "column", alignItems: "stretch", gap: 1, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledAddIcon, {}),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_13__/* .Typography */ .o, { variant: "pi", fontWeight: "bold", textColor: "primary600", children: formatMessage({
          id: (0,_index_b3fbviVW_mjs__WEBPACK_IMPORTED_MODULE_30__.g)("button.component.add"),
          defaultMessage: "Add a component"
        }) })
      ] }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .s, { role: "tablist", gap: 2, children: components.map((component, index) => {
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          ComponentCard,
          {
            dzName: name || "",
            index,
            component,
            isActive: activeTab === index,
            isInDevelopmentMode,
            onClick: () => toggle(index)
          },
          component
        );
      }) })
    ] }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ComponentContentBox, { children: components.map((component, index) => {
      const props = {
        customRowComponent,
        component
      };
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _strapi_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Box */ .a,
        {
          id: `dz-${name}-panel-${index}`,
          role: "tabpanel",
          "aria-labelledby": `dz-${name}-tab-${index}`,
          style: { display: activeTab === index ? "block" : "none" },
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("table", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tbody", { children: /* @__PURE__ */ (0,react__WEBPACK_IMPORTED_MODULE_29__.createElement)(
            ComponentList,
            {
              ...props,
              isFromDynamicZone: true,
              component: targetUid,
              key: component
            }
          ) }) })
        },
        component
      );
    }) })
  ] }) });
};
const IconBox = (0,styled_components__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Ay)((0,_strapi_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Box */ .a))`
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
    fill: ${({ theme, color }) => theme.colors[`${color}600`]};
  }
`;
const ButtonBox = (0,styled_components__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Ay)((0,_strapi_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Box */ .a))`
  border-radius: 0 0 ${({ theme }) => theme.borderRadius} ${({ theme }) => theme.borderRadius};
  display: block;
  width: 100%;
  border: none;
  position: relative;
  left: -0.25rem;
`;
const NestedTFooter = ({ children, icon, color, ...props }) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ButtonBox, { paddingBottom: 4, paddingTop: 4, as: "button", type: "button", ...props, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .s, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconBox, { color, "aria-hidden": true, background: `${color}200`, children: icon }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Box */ .a, { paddingLeft: 3, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_13__/* .Typography */ .o, { variant: "pi", fontWeight: "bold", textColor: `${color}600`, children }) })
  ] }) });
};
const List = ({
  addComponentToDZ,
  customRowComponent,
  editTarget,
  firstLoopComponentUid,
  isFromDynamicZone = false,
  isMain = false,
  isNestedInDZComponent = false,
  isSub = false,
  items = [],
  secondLoopComponentUid,
  targetUid
}) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A)();
  const { trackUsage } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .useTracking */ .z1)();
  const { isInDevelopmentMode, modifiedData, isInContentTypeView } = (0,_index_b3fbviVW_mjs__WEBPACK_IMPORTED_MODULE_30__.u)();
  const { onOpenModalAddField } = (0,_index_b3fbviVW_mjs__WEBPACK_IMPORTED_MODULE_30__.a)();
  const onClickAddField = () => {
    trackUsage("hasClickedCTBAddFieldBanner");
    onOpenModalAddField({ forTarget: editTarget, targetUid });
  };
  if (!targetUid) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .Table */ .X, { colCount: 2, rowCount: 2, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_9__/* .Thead */ .d, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_10__.Tr, { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_11__.Th, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_13__/* .Typography */ .o, { variant: "sigma", textColor: "neutral600", children: formatMessage({ id: "global.name", defaultMessage: "Name" }) }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_11__.Th, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_13__/* .Typography */ .o, { variant: "sigma", textColor: "neutral600", children: formatMessage({ id: "global.type", defaultMessage: "Type" }) }) })
      ] }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .EmptyBodyTable */ .m5,
        {
          colSpan: 2,
          content: {
            id: (0,_index_b3fbviVW_mjs__WEBPACK_IMPORTED_MODULE_30__.g)("table.content.create-first-content-type"),
            defaultMessage: "Create your first Collection-Type"
          }
        }
      )
    ] });
  }
  if (items.length === 0 && isMain) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .Table */ .X, { colCount: 2, rowCount: 2, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_9__/* .Thead */ .d, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_10__.Tr, { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_11__.Th, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_13__/* .Typography */ .o, { variant: "sigma", textColor: "neutral600", children: formatMessage({ id: "global.name", defaultMessage: "Name" }) }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_11__.Th, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_13__/* .Typography */ .o, { variant: "sigma", textColor: "neutral600", children: formatMessage({ id: "global.type", defaultMessage: "Type" }) }) })
      ] }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .EmptyBodyTable */ .m5,
        {
          action: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .$, { onClick: onClickAddField, size: "L", startIcon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, {}), variant: "secondary", children: formatMessage({
            id: (0,_index_b3fbviVW_mjs__WEBPACK_IMPORTED_MODULE_30__.g)("table.button.no-fields"),
            defaultMessage: "Add new field"
          }) }),
          colSpan: 2,
          content: isInContentTypeView ? {
            id: (0,_index_b3fbviVW_mjs__WEBPACK_IMPORTED_MODULE_30__.g)("table.content.no-fields.collection-type"),
            defaultMessage: "Add your first field to this Collection-Type"
          } : {
            id: (0,_index_b3fbviVW_mjs__WEBPACK_IMPORTED_MODULE_30__.g)("table.content.no-fields.component"),
            defaultMessage: "Add your first field to this component"
          }
        }
      )
    ] });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(BoxWrapper$1, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _strapi_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Box */ .a,
      {
        paddingLeft: 6,
        paddingRight: isMain ? 6 : 0,
        ...isMain && { style: { overflowX: "auto" } },
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", { children: [
          isMain && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("thead", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_13__/* .Typography */ .o, { variant: "sigma", textColor: "neutral600", children: formatMessage({ id: "global.name", defaultMessage: "Name" }) }) }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { colSpan: 2, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_13__/* .Typography */ .o, { variant: "sigma", textColor: "neutral600", children: formatMessage({ id: "global.type", defaultMessage: "Type" }) }) })
          ] }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tbody", { children: items.map((item) => {
            const { type } = item;
            const CustomRow = customRowComponent;
            return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_29__.Fragment, { children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                CustomRow,
                {
                  ...item,
                  isNestedInDZComponent,
                  targetUid,
                  editTarget,
                  firstLoopComponentUid,
                  isFromDynamicZone,
                  secondLoopComponentUid
                }
              ),
              type === "component" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                ComponentList,
                {
                  ...item,
                  customRowComponent,
                  targetUid,
                  isNestedInDZComponent: isFromDynamicZone,
                  editTarget,
                  firstLoopComponentUid
                }
              ),
              type === "dynamiczone" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                DynamicZoneList,
                {
                  ...item,
                  customRowComponent,
                  addComponent: addComponentToDZ,
                  targetUid
                }
              )
            ] }, item.name);
          }) })
        ] })
      }
    ),
    isMain && isInDevelopmentMode && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_12__/* .TFooter */ .S, { icon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, {}), onClick: onClickAddField, children: formatMessage({
      id: (0,_index_b3fbviVW_mjs__WEBPACK_IMPORTED_MODULE_30__.g)(
        `form.button.add.field.to.${modifiedData.contentType ? modifiedData.contentType.schema.kind : editTarget || "collectionType"}`
      ),
      defaultMessage: "Add another field"
    }) }),
    isSub && isInDevelopmentMode && !isFromDynamicZone && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      NestedTFooter,
      {
        icon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, {}),
        onClick: onClickAddField,
        color: isFromDynamicZone ? "primary" : "neutral",
        children: formatMessage({
          id: (0,_index_b3fbviVW_mjs__WEBPACK_IMPORTED_MODULE_30__.g)(`form.button.add.field.to.component`),
          defaultMessage: "Add another field"
        })
      }
    )
  ] });
};
const StyledBox = (0,styled_components__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Ay)((0,_strapi_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Box */ .a))`
  position: absolute;
  left: -1.125rem;
  top: 0px;

  &:before {
    content: '';
    width: ${4 / 16}rem;
    height: ${12 / 16}rem;
    background: ${({ theme, color }) => theme.colors[color]};
    display: block;
  }
`;
const Svg = styled_components__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Ay.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({ theme, color }) => theme.colors[color]};
  }
`;
const Curve = (props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledBox, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
  Svg,
  {
    width: "20",
    height: "23",
    viewBox: "0 0 20 23",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z"
      }
    )
  }
) });
const DisplayedType = ({
  type,
  customField = null,
  repeatable = false
}) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A)();
  let readableType = type;
  if (["integer", "biginteger", "float", "decimal"].includes(type)) {
    readableType = "number";
  } else if (["string"].includes(type)) {
    readableType = "text";
  }
  if (customField) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_13__/* .Typography */ .o, { children: formatMessage({
      id: (0,_index_b3fbviVW_mjs__WEBPACK_IMPORTED_MODULE_30__.g)("attribute.customField"),
      defaultMessage: "Custom field"
    }) });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_13__/* .Typography */ .o, { children: [
    formatMessage({
      id: (0,_index_b3fbviVW_mjs__WEBPACK_IMPORTED_MODULE_30__.g)(`attribute.${readableType}`),
      defaultMessage: type
    }),
    "\xA0",
    repeatable && formatMessage({
      id: (0,_index_b3fbviVW_mjs__WEBPACK_IMPORTED_MODULE_30__.g)("component.repeatable"),
      defaultMessage: "(repeatable)"
    })
  ] });
};
const UpperFirst = ({ content }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: lodash_upperFirst__WEBPACK_IMPORTED_MODULE_26__(content) });
const BoxWrapper = (0,styled_components__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Ay)((0,_strapi_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Box */ .a))`
  position: relative;
`;
const ListRow = (0,react__WEBPACK_IMPORTED_MODULE_29__.memo)(
  ({
    configurable = true,
    customField = null,
    editTarget,
    firstLoopComponentUid = null,
    isFromDynamicZone = false,
    name,
    onClick,
    relation = "",
    repeatable = false,
    secondLoopComponentUid = null,
    target = null,
    targetUid = null,
    type
  }) => {
    const { contentTypes, isInDevelopmentMode, removeAttribute } = (0,_index_b3fbviVW_mjs__WEBPACK_IMPORTED_MODULE_30__.u)();
    const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A)();
    const isMorph = type === "relation" && relation.includes("morph");
    const ico = ["integer", "biginteger", "float", "decimal"].includes(type) ? "number" : type;
    const contentType = lodash_get__WEBPACK_IMPORTED_MODULE_23__(contentTypes, [target], {});
    const contentTypeFriendlyName = lodash_get__WEBPACK_IMPORTED_MODULE_23__(contentType, ["schema", "displayName"], "");
    const isPluginContentType = lodash_get__WEBPACK_IMPORTED_MODULE_23__(contentType, "plugin");
    const src = target ? "relation" : ico;
    const handleClick = () => {
      if (isMorph) {
        return;
      }
      if (configurable !== false) {
        const attrType = type;
        onClick(
          // Tells where the attribute is located in the main modifiedData object : contentType, component or components
          editTarget,
          // main data type uid
          secondLoopComponentUid || firstLoopComponentUid || targetUid,
          // Name of the attribute
          name,
          // Type of the attribute
          attrType,
          customField
        );
      }
    };
    let loopNumber;
    if (secondLoopComponentUid && firstLoopComponentUid) {
      loopNumber = 2;
    } else if (firstLoopComponentUid) {
      loopNumber = 1;
    } else {
      loopNumber = 0;
    }
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
      BoxWrapper,
      {
        as: "tr",
        ...(0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .onRowClick */ .qM)({
          fn: handleClick,
          condition: isInDevelopmentMode && configurable && !isMorph
        }),
        children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", { style: { position: "relative" }, children: [
            loopNumber !== 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Curve, { color: isFromDynamicZone ? "primary200" : "neutral150" }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .s, { paddingLeft: 2, gap: 4, children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_b3fbviVW_mjs__WEBPACK_IMPORTED_MODULE_30__.A, { type: src, customField }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_13__/* .Typography */ .o, { fontWeight: "bold", children: name })
            ] })
          ] }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: target ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_13__/* .Typography */ .o, { children: [
            formatMessage({
              id: (0,_index_b3fbviVW_mjs__WEBPACK_IMPORTED_MODULE_30__.g)(
                `modelPage.attribute.${isMorph ? "relation-polymorphic" : "relationWith"}`
              ),
              defaultMessage: "Relation with"
            }),
            "\xA0",
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { style: { fontStyle: "italic" }, children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UpperFirst, { content: contentTypeFriendlyName }),
              "\xA0",
              isPluginContentType && `(${formatMessage({
                id: (0,_index_b3fbviVW_mjs__WEBPACK_IMPORTED_MODULE_30__.g)(`from`),
                defaultMessage: "from"
              })}: ${isPluginContentType})`
            ] })
          ] }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DisplayedType, { type, customField, repeatable }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: isInDevelopmentMode ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .s, { justifyContent: "flex-end", ..._strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .stopPropagation */ .dG, children: configurable ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .s, { gap: 1, children: [
            !isMorph && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .IconButton */ .K,
              {
                onClick: handleClick,
                label: `${formatMessage({
                  id: "app.utils.edit",
                  defaultMessage: "Edit"
                })} ${name}`,
                noBorder: true,
                icon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {})
              }
            ),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .IconButton */ .K,
              {
                onClick: (e) => {
                  e.stopPropagation();
                  removeAttribute(
                    editTarget,
                    name,
                    secondLoopComponentUid || firstLoopComponentUid || ""
                  );
                },
                label: `${formatMessage({
                  id: "global.delete",
                  defaultMessage: "Delete"
                })} ${name}`,
                noBorder: true,
                icon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, {})
              }
            )
          ] }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, {}) }) : (
            /*
              In production mode the edit icons aren't visible, therefore
              we need to reserve the same space, otherwise the height of the
              row might collapse, leading to bad positioned curve icons
            */
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Box */ .a, { height: (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .pxToRem */ .a8)(32) })
          ) })
        ]
      }
    );
  }
);
const getAttributeDisplayedType = (type) => {
  let displayedType;
  switch (type) {
    case "date":
    case "datetime":
    case "time":
    case "timestamp":
      displayedType = "date";
      break;
    case "integer":
    case "biginteger":
    case "decimal":
    case "float":
      displayedType = "number";
      break;
    case "string":
    case "text":
      displayedType = "text";
      break;
    case "":
      displayedType = "relation";
      break;
    default:
      displayedType = type;
  }
  return displayedType;
};
const cmPermissions = {
  collectionTypesConfigurations: [
    {
      action: "plugin::content-manager.collection-types.configure-view",
      subject: null
    }
  ],
  componentsConfigurations: [
    {
      action: "plugin::content-manager.components.configure-layout",
      subject: null
    }
  ],
  singleTypesConfigurations: [
    {
      action: "plugin::content-manager.single-types.configure-view",
      subject: null
    }
  ]
};
const LinkToCMSettingsView = (0,react__WEBPACK_IMPORTED_MODULE_29__.memo)(
  ({
    disabled,
    isTemporary = false,
    isInContentTypeView = true,
    contentTypeKind = "collectionType",
    targetUid = ""
  }) => {
    const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A)();
    const { push } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_28__/* .useHistory */ .W6)();
    const { collectionTypesConfigurations, componentsConfigurations, singleTypesConfigurations } = cmPermissions;
    const label = formatMessage({
      id: "content-type-builder.form.button.configure-view",
      defaultMessage: "Configure the view"
    });
    let permissionsToApply = collectionTypesConfigurations;
    const handleClick = () => {
      if (isTemporary) {
        return false;
      }
      if (isInContentTypeView) {
        push(`/content-manager/collection-types/${targetUid}/configurations/edit`);
      } else {
        push(`/content-manager/components/${targetUid}/configurations/edit`);
      }
      return false;
    };
    if (isInContentTypeView && contentTypeKind === "singleType") {
      permissionsToApply = singleTypesConfigurations;
    }
    if (!isInContentTypeView) {
      permissionsToApply = componentsConfigurations;
    }
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .CheckPermissions */ .d4, { permissions: permissionsToApply, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .$,
      {
        startIcon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {}),
        variant: "tertiary",
        onClick: handleClick,
        disabled: isTemporary || disabled,
        children: label
      }
    ) });
  }
);
const ListView = () => {
  const { initialData, modifiedData, isInDevelopmentMode, isInContentTypeView, submitData } = (0,_index_b3fbviVW_mjs__WEBPACK_IMPORTED_MODULE_30__.u)();
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A)();
  const { trackUsage } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .useTracking */ .z1)();
  const match = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_28__/* .useRouteMatch */ .W5)(
    "/plugins/content-type-builder/:kind/:currentUID"
  );
  const {
    onOpenModalAddComponentsToDZ,
    onOpenModalAddField,
    onOpenModalEditField,
    onOpenModalEditSchema,
    onOpenModalEditCustomField
  } = (0,_index_b3fbviVW_mjs__WEBPACK_IMPORTED_MODULE_30__.a)();
  const firstMainDataPath = isInContentTypeView ? "contentType" : "component";
  const mainDataTypeAttributesPath = [firstMainDataPath, "schema", "attributes"];
  const targetUid = lodash_get__WEBPACK_IMPORTED_MODULE_23__(modifiedData, [firstMainDataPath, "uid"]);
  const isTemporary = lodash_get__WEBPACK_IMPORTED_MODULE_23__(modifiedData, [firstMainDataPath, "isTemporary"], false);
  const contentTypeKind = lodash_get__WEBPACK_IMPORTED_MODULE_23__(modifiedData, [firstMainDataPath, "schema", "kind"], null);
  const attributes = lodash_get__WEBPACK_IMPORTED_MODULE_23__(modifiedData, mainDataTypeAttributesPath, []);
  const isFromPlugin = lodash_has__WEBPACK_IMPORTED_MODULE_24__(initialData, [firstMainDataPath, "plugin"]);
  const hasModelBeenModified = !lodash_isEqual__WEBPACK_IMPORTED_MODULE_25__(modifiedData, initialData);
  const forTarget = isInContentTypeView ? "contentType" : "component";
  const handleClickAddComponentToDZ = (dynamicZoneTarget) => {
    onOpenModalAddComponentsToDZ({ dynamicZoneTarget, targetUid });
  };
  const handleClickEditField = async (forTarget2, targetUid2, attributeName, type, customField) => {
    const attributeType = getAttributeDisplayedType(type);
    const step = type === "component" ? "2" : null;
    if (customField) {
      onOpenModalEditCustomField({
        forTarget: forTarget2,
        targetUid: targetUid2,
        attributeName,
        attributeType,
        customFieldUid: customField
      });
    } else {
      onOpenModalEditField({
        forTarget: forTarget2,
        targetUid: targetUid2,
        attributeName,
        attributeType,
        step
      });
    }
  };
  let label = lodash_get__WEBPACK_IMPORTED_MODULE_23__(modifiedData, [firstMainDataPath, "schema", "displayName"], "");
  const kind = lodash_get__WEBPACK_IMPORTED_MODULE_23__(modifiedData, [firstMainDataPath, "schema", "kind"], "");
  const isCreatingFirstContentType = match?.params.currentUID === "create-content-type";
  if (!label && isCreatingFirstContentType) {
    label = formatMessage({
      id: (0,_index_b3fbviVW_mjs__WEBPACK_IMPORTED_MODULE_30__.g)("button.model.create"),
      defaultMessage: "Create new collection type"
    });
  }
  const onEdit = () => {
    const contentType = kind || firstMainDataPath;
    if (contentType === "collectionType") {
      trackUsage("willEditNameOfContentType");
    }
    if (contentType === "singleType") {
      trackUsage("willEditNameOfSingleType");
    }
    onOpenModalEditSchema({
      modalType: firstMainDataPath,
      forTarget: firstMainDataPath,
      targetUid,
      kind: contentType
    });
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      react_router_dom__WEBPACK_IMPORTED_MODULE_28__/* .Prompt */ .XG,
      {
        message: (location) => location.hash === "#back" ? false : formatMessage({ id: (0,_index_b3fbviVW_mjs__WEBPACK_IMPORTED_MODULE_30__.g)("prompt.unsaved") }),
        when: hasModelBeenModified
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .HeaderLayout */ .Q,
      {
        id: "title",
        primaryAction: isInDevelopmentMode && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .s, { gap: 2, children: [
          !isCreatingFirstContentType && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .$,
            {
              startIcon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, {}),
              variant: "secondary",
              onClick: () => {
                onOpenModalAddField({ forTarget, targetUid });
              },
              children: formatMessage({
                id: (0,_index_b3fbviVW_mjs__WEBPACK_IMPORTED_MODULE_30__.g)("button.attributes.add.another"),
                defaultMessage: "Add another field"
              })
            }
          ),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .$,
            {
              startIcon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {}),
              onClick: async () => await submitData(),
              type: "submit",
              disabled: lodash_isEqual__WEBPACK_IMPORTED_MODULE_25__(modifiedData, initialData),
              children: formatMessage({
                id: "global.save",
                defaultMessage: "Save"
              })
            }
          )
        ] }),
        secondaryAction: isInDevelopmentMode && !isFromPlugin && !isCreatingFirstContentType && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .$, { startIcon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {}), variant: "tertiary", onClick: onEdit, children: formatMessage({
          id: "app.utils.edit",
          defaultMessage: "Edit"
        }) }),
        title: lodash_upperFirst__WEBPACK_IMPORTED_MODULE_26__(label),
        subtitle: formatMessage({
          id: (0,_index_b3fbviVW_mjs__WEBPACK_IMPORTED_MODULE_30__.g)("listView.headerLayout.description"),
          defaultMessage: "Build the data architecture of your content"
        }),
        navigationAction: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .Link */ .N_, { startIcon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {}), to: "/plugins/content-type-builder/", children: formatMessage({
          id: "global.back",
          defaultMessage: "Back"
        }) })
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .ContentLayout */ .s, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .s, { direction: "column", alignItems: "stretch", gap: 4, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .s, { justifyContent: "flex-end", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .s, { gap: 2, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        LinkToCMSettingsView,
        {
          targetUid,
          isTemporary,
          isInContentTypeView,
          contentTypeKind,
          disabled: isCreatingFirstContentType
        },
        "link-to-cm-settings-view"
      ) }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Box */ .a, { background: "neutral0", shadow: "filterShadow", hasRadius: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        List,
        {
          items: attributes,
          customRowComponent: (props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ListRow, { ...props, onClick: handleClickEditField }),
          addComponentToDZ: handleClickAddComponentToDZ,
          targetUid,
          editTarget: forTarget,
          isMain: true
        }
      ) })
    ] }) })
  ] });
};



/***/ }

}]);