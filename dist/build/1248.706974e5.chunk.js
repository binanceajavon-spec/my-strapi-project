"use strict";
(self["webpackChunkmy_strapi_project"] = self["webpackChunkmy_strapi_project"] || []).push([[1248],{

/***/ 61248
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProtectedListView: () => (/* binding */ ProtectedListView)
/* harmony export */ });
/* unused harmony export ListView */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69751);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21272);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4198);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55356);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25815);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38413);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(59201);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5194);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5409);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(54894);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(17703);
/* harmony import */ var _index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(92129);
/* harmony import */ var _transferTokens_vSrhgUOJ_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(81359);
/* harmony import */ var _constants_fJt30IoY_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(99831);
/* harmony import */ var _Table_nKuv1TlJ_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(22185);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(15126);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(63299);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(44633);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(59080);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(79275);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(14718);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(82437);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(61535);
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(5790);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(12083);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(35223);
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










































































const tableHeaders = [
  {
    name: "name",
    key: "name",
    metadatas: {
      label: {
        id: "Settings.tokens.ListView.headers.name",
        defaultMessage: "Name"
      },
      sortable: true
    }
  },
  {
    name: "description",
    key: "description",
    metadatas: {
      label: {
        id: "Settings.tokens.ListView.headers.description",
        defaultMessage: "Description"
      },
      sortable: false
    }
  },
  {
    name: "createdAt",
    key: "createdAt",
    metadatas: {
      label: {
        id: "Settings.tokens.ListView.headers.createdAt",
        defaultMessage: "Created at"
      },
      sortable: false
    }
  },
  {
    name: "lastUsedAt",
    key: "lastUsedAt",
    metadatas: {
      label: {
        id: "Settings.tokens.ListView.headers.lastUsedAt",
        defaultMessage: "Last used"
      },
      sortable: false
    }
  }
];
const ListView = () => {
  (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_6__/* .useFocusWhenNavigate */ .L4)();
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)();
  const toggleNotification = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_6__/* .useNotification */ .hN)();
  const permissions = (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_11__.j)(
    (state) => state.admin_app.permissions.settings?.["transfer-tokens"]
  );
  const {
    isLoading: isLoadingRBAC,
    allowedActions: { canCreate, canDelete, canUpdate, canRead }
  } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_6__/* .useRBAC */ .ec)(permissions);
  const { push } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__/* .useHistory */ .W6)();
  const { trackUsage } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_6__/* .useTracking */ .z1)();
  const { _unstableFormatAPIError: formatAPIError } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_6__/* .useAPIErrorHandler */ .wq)();
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    push({ search: qs__WEBPACK_IMPORTED_MODULE_8__.stringify({ sort: "name:ASC" }, { encode: false }) });
  }, [push]);
  (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_11__.b)(() => {
    trackUsage("willAccessTokenList", {
      tokenType: _constants_fJt30IoY_mjs__WEBPACK_IMPORTED_MODULE_13__.T
    });
  });
  const headers = tableHeaders.map((header) => ({
    ...header,
    metadatas: {
      ...header.metadatas,
      label: formatMessage(header.metadatas.label)
    }
  }));
  const {
    data: transferTokens = [],
    isLoading: isLoadingTokens,
    error
  } = (0,_transferTokens_vSrhgUOJ_mjs__WEBPACK_IMPORTED_MODULE_12__.c)(void 0, {
    skip: !canRead
  });
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    if (transferTokens) {
      trackUsage("didAccessTokenList", {
        number: transferTokens.length,
        tokenType: _constants_fJt30IoY_mjs__WEBPACK_IMPORTED_MODULE_13__.T
      });
    }
  }, [trackUsage, transferTokens]);
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    if (error) {
      toggleNotification({
        type: "warning",
        message: formatAPIError(error)
      });
    }
  }, [error, formatAPIError, toggleNotification]);
  const [deleteToken] = (0,_transferTokens_vSrhgUOJ_mjs__WEBPACK_IMPORTED_MODULE_12__.d)();
  const handleDelete = async (id) => {
    try {
      const res = await deleteToken(id);
      if ("error" in res) {
        toggleNotification({
          type: "warning",
          message: formatAPIError(res.error)
        });
      }
    } catch {
      toggleNotification({
        type: "warning",
        message: { id: "notification.error", defaultMessage: "An error occured" }
      });
    }
  };
  const isLoading = isLoadingTokens || isLoadingRBAC;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .Main */ .g, { "aria-busy": isLoading, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_6__/* .SettingsPageTitle */ .x7, { name: "Transfer Tokens" }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .HeaderLayout */ .Q,
      {
        title: formatMessage({
          id: "Settings.transferTokens.title",
          defaultMessage: "Transfer Tokens"
        }),
        subtitle: formatMessage({
          id: "Settings.transferTokens.description",
          defaultMessage: '"List of generated transfer tokens"'
          // TODO change this message
        }),
        primaryAction: canCreate ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .LinkButton */ .z,
          {
            "data-testid": "create-transfer-token-button",
            startIcon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {}),
            size: "S",
            onClick: () => trackUsage("willAddTokenFromList", {
              tokenType: _constants_fJt30IoY_mjs__WEBPACK_IMPORTED_MODULE_13__.T
            }),
            to: "/settings/transfer-tokens/create",
            children: formatMessage({
              id: "Settings.transferTokens.create",
              defaultMessage: "Create new Transfer Token"
            })
          }
        ) : void 0
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .ContentLayout */ .s, { children: [
      !canRead && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_6__/* .NoPermissions */ .UW, {}),
      canRead && transferTokens.length > 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _Table_nKuv1TlJ_mjs__WEBPACK_IMPORTED_MODULE_14__.T,
        {
          permissions: { canRead, canDelete, canUpdate },
          headers,
          contentType: "trasfer-tokens",
          isLoading,
          onConfirmDelete: handleDelete,
          tokens: transferTokens,
          tokenType: _constants_fJt30IoY_mjs__WEBPACK_IMPORTED_MODULE_13__.T
        }
      ),
      canRead && canCreate && transferTokens.length === 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_6__/* .NoContent */ .R1,
        {
          content: {
            id: "Settings.transferTokens.addFirstToken",
            defaultMessage: "Add your first Transfer Token"
          },
          action: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .LinkButton */ .z,
            {
              variant: "secondary",
              startIcon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {}),
              to: "/settings/transfer-tokens/create",
              children: formatMessage({
                id: "Settings.transferTokens.addNewToken",
                defaultMessage: "Add new Transfer Token"
              })
            }
          )
        }
      ),
      canRead && !canCreate && transferTokens.length === 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_6__/* .NoContent */ .R1,
        {
          content: {
            id: "Settings.transferTokens.emptyStateLayout",
            defaultMessage: "You don\u2019t have any content yet..."
          }
        }
      )
    ] })
  ] });
};
const ProtectedListView = () => {
  const permissions = (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_11__.j)(
    (state) => state.admin_app.permissions.settings?.["transfer-tokens"].main
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_6__/* .CheckPagePermissions */ .kz, { permissions, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ListView, {}) });
};



/***/ },

/***/ 22185
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ Table)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69751);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21272);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94061);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88353);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83997);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25641);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90361);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(33363);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(30893);
/* harmony import */ var _strapi_design_system_v2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(21610);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(59201);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(83925);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(41909);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(50612);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(54894);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(71389);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(17703);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(47610);









const Table = ({
  permissions,
  headers = [],
  contentType,
  isLoading = false,
  tokens = [],
  onConfirmDelete,
  tokenType
}) => {
  const { canDelete, canUpdate, canRead } = permissions;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_10__/* .DynamicTable */ .Ee,
    {
      headers,
      contentType,
      rows: tokens,
      withBulkActions: canDelete || canUpdate || canRead,
      isLoading,
      onConfirmDelete,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        TableRows,
        {
          tokenType,
          permissions,
          onConfirmDelete
        }
      )
    }
  );
};
const TableRows = ({
  tokenType,
  permissions,
  rows = [],
  withBulkActions,
  onConfirmDelete
}) => {
  const { canDelete, canUpdate, canRead } = permissions;
  const [{ query }] = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_10__/* .useQueryParams */ .sq)();
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A)();
  const [, sortOrder] = query && query.sort ? query.sort.split(":") : [void 0, "ASC"];
  const {
    push,
    location: { pathname }
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_16__/* .useHistory */ .W6)();
  const { trackUsage } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_10__/* .useTracking */ .z1)();
  const sortedTokens = [...rows].sort((a, b) => {
    const comparison = a.name.localeCompare(b.name);
    return sortOrder === "DESC" ? -comparison : comparison;
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .Tbody */ .N, { children: sortedTokens.map((token) => {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
      _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__.Tr,
      {
        ...(0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_10__/* .onRowClick */ .qM)({
          fn() {
            trackUsage("willEditTokenFromList", {
              tokenType
            });
            push(`${pathname}/${token.id}`);
          },
          condition: canUpdate
        }),
        children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_7__.Td, { maxWidth: (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_10__/* .pxToRem */ .a8)(250), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .Typography */ .o, { textColor: "neutral800", fontWeight: "bold", ellipsis: true, children: token.name }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_7__.Td, { maxWidth: (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_10__/* .pxToRem */ .a8)(250), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .Typography */ .o, { textColor: "neutral800", ellipsis: true, children: token.description }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_7__.Td, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .Typography */ .o, { textColor: "neutral800", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_10__/* .RelativeTime */ .sR, { timestamp: new Date(token.createdAt) }) }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_7__.Td, { children: token.lastUsedAt && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .Typography */ .o, { textColor: "neutral800", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_10__/* .RelativeTime */ .sR,
            {
              timestamp: new Date(token.lastUsedAt),
              customIntervals: [
                {
                  unit: "hours",
                  threshold: 1,
                  text: formatMessage({
                    id: "Settings.apiTokens.lastHour",
                    defaultMessage: "last hour"
                  })
                }
              ]
            }
          ) }) }),
          withBulkActions && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_7__.Td, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .s, { justifyContent: "end", children: [
            canUpdate && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UpdateButton, { tokenName: token.name, tokenId: token.id }),
            !canUpdate && canRead && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ReadButton, { tokenName: token.name, tokenId: token.id }),
            canDelete && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              DeleteButton,
              {
                tokenName: token.name,
                onClickDelete: () => onConfirmDelete?.(token.id),
                tokenType
              }
            )
          ] }) })
        ]
      },
      token.id
    );
  }) });
};
const MESSAGES_MAP = {
  edit: {
    id: "app.component.table.edit",
    defaultMessage: "Edit {target}"
  },
  read: {
    id: "app.component.table.read",
    defaultMessage: "Read {target}"
  }
};
const DefaultButton = ({
  tokenName,
  tokenId,
  buttonType = "edit",
  children
}) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A)();
  const {
    location: { pathname }
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_16__/* .useHistory */ .W6)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    LinkStyled,
    {
      forwardedAs: react_router_dom__WEBPACK_IMPORTED_MODULE_15__/* .NavLink */ .k2,
      to: `${pathname}/${tokenId}`,
      title: formatMessage(MESSAGES_MAP[buttonType], { target: tokenName }),
      children
    }
  );
};
const LinkStyled = (0,styled_components__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Ay)((0,_strapi_design_system_v2__WEBPACK_IMPORTED_MODULE_9__/* .Link */ .N))`
  svg {
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
const DeleteButton = ({ tokenName, onClickDelete, tokenType }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A)();
  const { trackUsage } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_10__/* .useTracking */ .z1)();
  const [showConfirmDialog, setShowConfirmDialog] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
  const handleClickDelete = () => {
    setShowConfirmDialog(false);
    trackUsage("willDeleteToken", {
      tokenType
    });
    onClickDelete();
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .a, { paddingLeft: 1, onClick: (e) => e.stopPropagation(), children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .IconButton */ .K,
      {
        onClick: () => {
          setShowConfirmDialog(true);
        },
        label: formatMessage(
          {
            id: "global.delete-target",
            defaultMessage: "Delete {target}"
          },
          { target: `${tokenName}` }
        ),
        name: "delete",
        borderWidth: 0,
        icon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {})
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_10__/* .ConfirmDialog */ .TM,
      {
        onToggleDialog: () => setShowConfirmDialog(false),
        onConfirm: handleClickDelete,
        isOpen: showConfirmDialog
      }
    )
  ] });
};
const ReadButton = ({ tokenName, tokenId }) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DefaultButton, { tokenName, tokenId, buttonType: "read", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {}) });
};
const UpdateButton = ({ tokenName, tokenId }) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DefaultButton, { tokenName, tokenId, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, { width: 12 }) });
};



/***/ },

/***/ 99831
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ API_TOKEN_TYPE),
/* harmony export */   T: () => (/* binding */ TRANSFER_TOKEN_TYPE)
/* harmony export */ });
const API_TOKEN_TYPE = "api-token";
const TRANSFER_TOKEN_TYPE = "transfer-token";



/***/ },

/***/ 81359
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ useCreateTransferTokenMutation),
/* harmony export */   b: () => (/* binding */ useUpdateTransferTokenMutation),
/* harmony export */   c: () => (/* binding */ useGetTransferTokensQuery),
/* harmony export */   d: () => (/* binding */ useDeleteTransferTokenMutation),
/* harmony export */   u: () => (/* binding */ useGetTransferTokenQuery)
/* harmony export */ });
/* harmony import */ var _index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92129);

const transferTokenService = _index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_0__.n.injectEndpoints({
  endpoints: (builder) => ({
    getTransferTokens: builder.query({
      query: () => ({
        url: "/admin/transfer/tokens",
        method: "GET"
      }),
      transformResponse: (response) => response.data,
      providesTags: (res, _err) => [
        ...res?.map(({ id }) => ({ type: "TransferToken", id })) ?? [],
        { type: "TransferToken", id: "LIST" }
      ]
    }),
    getTransferToken: builder.query({
      query: (id) => `/admin/transfer/tokens/${id}`,
      transformResponse: (response) => response.data,
      providesTags: (res, _err, id) => [{ type: "TransferToken", id }]
    }),
    createTransferToken: builder.mutation({
      query: (body) => ({
        url: "/admin/transfer/tokens",
        method: "POST",
        data: body
      }),
      transformResponse: (response) => response.data,
      invalidatesTags: [{ type: "TransferToken", id: "LIST" }]
    }),
    deleteTransferToken: builder.mutation({
      query: (id) => ({
        url: `/admin/transfer/tokens/${id}`,
        method: "DELETE"
      }),
      transformResponse: (response) => response.data,
      invalidatesTags: (_res, _err, id) => [{ type: "TransferToken", id }]
    }),
    updateTransferToken: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/admin/transfer/tokens/${id}`,
        method: "PUT",
        data: body
      }),
      transformResponse: (response) => response.data,
      invalidatesTags: (_res, _err, { id }) => [{ type: "TransferToken", id }]
    })
  }),
  overrideExisting: false
});
const {
  useGetTransferTokensQuery,
  useGetTransferTokenQuery,
  useCreateTransferTokenMutation,
  useDeleteTransferTokenMutation,
  useUpdateTransferTokenMutation
} = transferTokenService;



/***/ }

}]);