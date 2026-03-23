"use strict";
(self["webpackChunkmy_strapi_project"] = self["webpackChunkmy_strapi_project"] || []).push([[2282],{

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

/***/ 52282
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProtectedListPage: () => (/* binding */ ProtectedListPage)
/* harmony export */ });
/* unused harmony export ListPage */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69751);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94061);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76517);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80782);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90151);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88353);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4171);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(42455);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(74773);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4198);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(55356);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(43064);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(38413);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(61485);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(99248);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6239);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(83997);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(25641);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(90361);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(33363);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(30893);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(59201);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(54894);
/* harmony import */ var _index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(92129);
/* harmony import */ var _Filters_dLXfVnI0_mjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(62482);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(21272);
/* harmony import */ var _strapi_design_system_v2__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(37679);
/* harmony import */ var _strapi_design_system_v2__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(60043);
/* harmony import */ var date_fns_parseISO__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(43620);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(83925);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(11163);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(15126);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(63299);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(44633);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(59080);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(79275);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(14718);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(82437);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(61535);
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(5790);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(12083);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(35223);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(5409);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(74930);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(80219);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(48940);
/* harmony import */ var lodash_defaultsDeep__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(41286);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(33955);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(13426);
/* harmony import */ var lodash_isBoolean__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(84624);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(346);
/* harmony import */ var lodash_isNaN__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(54257);
/* harmony import */ var lodash_toNumber__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(48829);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(51187);
/* harmony import */ var lodash_upperFirst__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(39404);
/* harmony import */ var lodash_fp__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(58692);
/* harmony import */ var lodash_take__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(501);
/* harmony import */ var codemirror5__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(57646);
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(23120);
/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(44414);
/* harmony import */ var markdown_it_abbr__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(25962);
/* harmony import */ var markdown_it_container__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(14664);
/* harmony import */ var markdown_it_deflist__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(42588);
/* harmony import */ var markdown_it_emoji__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(90325);
/* harmony import */ var markdown_it_footnote__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(62785);
/* harmony import */ var markdown_it_ins__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(87443);
/* harmony import */ var markdown_it_mark__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(41032);
/* harmony import */ var markdown_it_sub__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(22957);
/* harmony import */ var markdown_it_sup__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(93179);
/* harmony import */ var highlight_js_styles_solarized_dark_css__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(73055);
/* harmony import */ var codemirror5_addon_display_placeholder__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(15747);
/* harmony import */ var lodash_toString__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(62925);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(26509);
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(32058);
/* harmony import */ var lodash_unset__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(81185);
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(4642);








































































const auditLogsService = _index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_23__.n.injectEndpoints({
  endpoints: (builder) => ({
    getAuditLogs: builder.query({
      query: (params) => ({
        url: `/admin/audit-logs`,
        config: {
          params
        }
      })
    }),
    getAuditLog: builder.query({
      query: (id) => `/admin/audit-logs/${id}`
    })
  }),
  overrideExisting: false
});
const { useGetAuditLogsQuery, useGetAuditLogQuery } = auditLogsService;
const useFormatTimeStamp = () => {
  const { formatDate } = (0,react_intl__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A)();
  const formatTimeStamp = (value) => {
    const date = (0,date_fns_parseISO__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .A)(value);
    const formattedDate = formatDate(date, {
      dateStyle: "long"
    });
    const formattedTime = formatDate(date, {
      timeStyle: "medium",
      hourCycle: "h24"
    });
    return `${formattedDate}, ${formattedTime}`;
  };
  return formatTimeStamp;
};
const actionTypes = {
  "entry.create": "Create entry{model, select, undefined {} other { ({model})}}",
  "entry.update": "Update entry{model, select, undefined {} other { ({model})}}",
  "entry.delete": "Delete entry{model, select, undefined {} other { ({model})}}",
  "entry.publish": "Publish entry{model, select, undefined {} other { ({model})}}",
  "entry.unpublish": "Unpublish entry{model, select, undefined {} other { ({model})}}",
  "media.create": "Create media",
  "media.update": "Update media",
  "media.delete": "Delete media",
  "media-folder.create": "Create media folder",
  "media-folder.update": "Update media folder",
  "media-folder.delete": "Delete media folder",
  "user.create": "Create user",
  "user.update": "Update user",
  "user.delete": "Delete user",
  "admin.auth.success": "Admin login",
  "admin.logout": "Admin logout",
  "content-type.create": "Create content type",
  "content-type.update": "Update content type",
  "content-type.delete": "Delete content type",
  "component.create": "Create component",
  "component.update": "Update component",
  "component.delete": "Delete component",
  "role.create": "Create role",
  "role.update": "Update role",
  "role.delete": "Delete role",
  "permission.create": "Create permission",
  "permission.update": "Update permission",
  "permission.delete": "Delete permission"
};
const getDefaultMessage = (value) => {
  return actionTypes[value] || value;
};
const Modal = ({ handleClose, logId }) => {
  const toggleNotification = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_21__/* .useNotification */ .hN)();
  const { _unstableFormatAPIError: formatAPIError } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_21__/* .useAPIErrorHandler */ .wq)();
  const { data, error, isLoading } = useGetAuditLogQuery(logId);
  react__WEBPACK_IMPORTED_MODULE_25__.useEffect(() => {
    if (error) {
      toggleNotification({
        type: "warning",
        message: formatAPIError(error)
      });
      handleClose();
    }
  }, [error, formatAPIError, handleClose, toggleNotification]);
  const formatTimeStamp = useFormatTimeStamp();
  const formattedDate = data && "date" in data ? formatTimeStamp(data.date) : "";
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_13__/* .ModalLayout */ .k, { onClose: handleClose, labelledBy: "title", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_14__/* .ModalHeader */ .r, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system_v2__WEBPACK_IMPORTED_MODULE_26__/* .Breadcrumbs */ .B, { label: formattedDate, id: "title", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system_v2__WEBPACK_IMPORTED_MODULE_27__/* .Crumb */ .m, { isCurrent: true, children: formattedDate }) }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_15__/* .ModalBody */ .c, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ActionBody, { isLoading, data, formattedDate }) })
  ] });
};
const ActionBody = ({ isLoading, data, formattedDate }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A)();
  if (isLoading) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_16__/* .Flex */ .s, { padding: 7, justifyContent: "center", alignItems: "center", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_11__/* .Loader */ .a, { children: "Loading content..." }) });
  }
  const { action, user, payload } = data;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Box */ .a, { marginBottom: 3, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_20__/* .Typography */ .o, { variant: "delta", id: "title", children: formatMessage({
      id: "Settings.permissions.auditLogs.details",
      defaultMessage: "Log Details"
    }) }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
      _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .Grid */ .x,
      {
        gap: 4,
        gridCols: 2,
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 6,
        paddingRight: 6,
        marginBottom: 4,
        background: "neutral100",
        hasRadius: true,
        children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            ActionItem,
            {
              actionLabel: formatMessage({
                id: "Settings.permissions.auditLogs.action",
                defaultMessage: "Action"
              }),
              actionName: formatMessage(
                {
                  id: `Settings.permissions.auditLogs.${action}`,
                  defaultMessage: getDefaultMessage(action)
                },
                // @ts-expect-error - any
                { model: payload?.model }
              )
            }
          ),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            ActionItem,
            {
              actionLabel: formatMessage({
                id: "Settings.permissions.auditLogs.date",
                defaultMessage: "Date"
              }),
              actionName: formattedDate
            }
          ),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            ActionItem,
            {
              actionLabel: formatMessage({
                id: "Settings.permissions.auditLogs.user",
                defaultMessage: "User"
              }),
              actionName: user?.displayName || "-"
            }
          ),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            ActionItem,
            {
              actionLabel: formatMessage({
                id: "Settings.permissions.auditLogs.userId",
                defaultMessage: "User ID"
              }),
              actionName: user?.id.toString() || "-"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .JSONInput */ .j,
      {
        value: JSON.stringify(payload, null, 2),
        disabled: true,
        label: formatMessage({
          id: "Settings.permissions.auditLogs.payload",
          defaultMessage: "Payload"
        })
      }
    )
  ] });
};
const ActionItem = ({ actionLabel, actionName }) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_16__/* .Flex */ .s, { direction: "column", alignItems: "baseline", gap: 1, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_20__/* .Typography */ .o, { textColor: "neutral600", variant: "sigma", children: actionLabel }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_20__/* .Typography */ .o, { textColor: "neutral600", children: actionName })
  ] });
};
const PaginationFooter = ({ pagination } = {
  pagination: {
    page: 1,
    pageCount: 0,
    pageSize: 50,
    total: 0
  }
}) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Box */ .a, { paddingTop: 4, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_16__/* .Flex */ .s, { alignItems: "flex-end", justifyContent: "space-between", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_21__/* .PageSizeURLQuery */ ._u, {}),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_21__/* .PaginationURLQuery */ .W7, { pagination })
  ] }) });
};
const TableRows = ({ headers, rows, onOpenModal }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A)();
  const formatTimeStamp = useFormatTimeStamp();
  const getCellValue = ({ type, value, model }) => {
    if (type === "date") {
      return formatTimeStamp(value);
    }
    if (type === "action") {
      return formatMessage(
        {
          id: `Settings.permissions.auditLogs.${value}`,
          defaultMessage: getDefaultMessage(value)
        },
        // @ts-expect-error - Model
        { model }
      );
    }
    return value || "-";
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_17__/* .Tbody */ .N, { children: rows.map((data) => {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
      _strapi_design_system__WEBPACK_IMPORTED_MODULE_18__.Tr,
      {
        ...(0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_21__/* .onRowClick */ .qM)({
          fn: () => onOpenModal(data.id)
        }),
        children: [
          headers?.map(({ key, name, cellFormatter }) => {
            const rowValue = data[name];
            return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_19__.Td, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_20__/* .Typography */ .o, { textColor: "neutral800", children: getCellValue({
              type: key,
              value: cellFormatter ? cellFormatter(rowValue) : rowValue,
              model: data.payload?.model
            }) }) }, key);
          }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_19__.Td, { ..._strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_21__/* .stopPropagation */ .dG, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_16__/* .Flex */ .s, { justifyContent: "end", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .IconButton */ .K,
            {
              onClick: () => onOpenModal(data.id),
              "aria-label": formatMessage(
                { id: "app.component.table.view", defaultMessage: "{target} details" },
                { target: `${data.action} action` }
              ),
              noBorder: true,
              icon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .A, {})
            }
          ) }) })
        ]
      },
      data.id
    );
  }) });
};
TableRows.defaultProps = {
  rows: []
};
TableRows.propTypes = {
  headers: prop_types__WEBPACK_IMPORTED_MODULE_30__.array.isRequired,
  rows: prop_types__WEBPACK_IMPORTED_MODULE_30__.array,
  onOpenModal: prop_types__WEBPACK_IMPORTED_MODULE_30__.func.isRequired
};
const useAuditLogsData = ({
  canReadAuditLogs,
  canReadUsers
}) => {
  const toggleNotification = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_21__/* .useNotification */ .hN)();
  const { _unstableFormatAPIError: formatAPIError } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_21__/* .useAPIErrorHandler */ .wq)();
  const [{ query }] = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_21__/* .useQueryParams */ .sq)();
  const {
    data,
    error,
    isError: isUsersError,
    isLoading: isLoadingUsers
  } = (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_23__.k)(
    {},
    {
      skip: !canReadUsers,
      refetchOnMountOrArgChange: true
    }
  );
  react__WEBPACK_IMPORTED_MODULE_25__.useEffect(() => {
    if (error) {
      toggleNotification({ type: "warning", message: formatAPIError(error) });
    }
  }, [error, toggleNotification, formatAPIError]);
  const {
    data: auditLogs,
    isLoading: isLoadingAuditLogs,
    isError: isAuditLogsError,
    error: auditLogsError
  } = useGetAuditLogsQuery(query, {
    refetchOnMountOrArgChange: true,
    skip: !canReadAuditLogs
  });
  react__WEBPACK_IMPORTED_MODULE_25__.useEffect(() => {
    if (auditLogsError) {
      toggleNotification({ type: "warning", message: formatAPIError(auditLogsError) });
    }
  }, [auditLogsError, toggleNotification, formatAPIError]);
  return {
    auditLogs,
    users: data?.users ?? [],
    isLoading: isLoadingUsers || isLoadingAuditLogs,
    hasError: isAuditLogsError || isUsersError
  };
};
const ComboboxFilter = ({ value, options, onChange } = {
  value: void 0
}) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A)();
  const ariaLabel = formatMessage({
    id: "Settings.permissions.auditLogs.filter.aria-label",
    defaultMessage: "Search and select an option to filter"
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Combobox */ .G3, { "aria-label": ariaLabel, value, onChange, children: options?.map(({ label, customValue }) => {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .ComboboxOption */ .j, { value: customValue, children: label }, customValue);
  }) });
};
const customOperators = [
  {
    intlLabel: { id: "components.FilterOptions.FILTER_TYPES.$eq", defaultMessage: "is" },
    value: "$eq"
  },
  {
    intlLabel: { id: "components.FilterOptions.FILTER_TYPES.$ne", defaultMessage: "is not" },
    value: "$ne"
  }
];
const getDisplayedFilters = ({
  formatMessage,
  users,
  canReadUsers
}) => {
  const filters = [
    {
      name: "action",
      metadatas: {
        customOperators,
        label: formatMessage({
          id: "Settings.permissions.auditLogs.action",
          defaultMessage: "Action"
        }),
        customInput: ComboboxFilter,
        // Default return of Object.keys function is string
        options: Object.keys(actionTypes).map((action) => ({
          label: formatMessage(
            {
              id: `Settings.permissions.auditLogs.${action}`,
              defaultMessage: getDefaultMessage(action)
            },
            { model: void 0 }
          ),
          customValue: action
        }))
      },
      fieldSchema: { type: "enumeration" }
    },
    {
      name: "date",
      metadatas: {
        label: formatMessage({
          id: "Settings.permissions.auditLogs.date",
          defaultMessage: "Date"
        })
      },
      fieldSchema: { type: "datetime" }
    }
  ];
  if (canReadUsers && users) {
    const getDisplayNameFromUser = (user) => {
      if (user.username) {
        return user.username;
      }
      if (user.firstname && user.lastname) {
        return formatMessage(
          {
            id: "Settings.permissions.auditLogs.user.fullname",
            defaultMessage: "{firstname} {lastname}"
          },
          {
            firstname: user.firstname,
            lastname: user.lastname
          }
        );
      }
      return user.email;
    };
    return [
      ...filters,
      {
        name: "user",
        metadatas: {
          customOperators,
          label: formatMessage({
            id: "Settings.permissions.auditLogs.user",
            defaultMessage: "User"
          }),
          options: users.map((user) => ({
            label: getDisplayNameFromUser(user),
            // Combobox expects a string value
            customValue: user.id.toString()
          })),
          customInput: ComboboxFilter
        },
        fieldSchema: { type: "relation", mainField: { name: "id" } }
      }
    ];
  }
  return filters;
};
const ListPage = () => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A)();
  const permissions = (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_23__.j)((state) => state.admin_app.permissions.settings);
  const {
    allowedActions: { canRead: canReadAuditLogs, canReadUsers },
    isLoading: isLoadingRBAC
  } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_21__/* .useRBAC */ .ec)({
    ...permissions?.auditLogs,
    readUsers: permissions?.users.read || []
  });
  const [{ query }, setQuery] = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_21__/* .useQueryParams */ .sq)();
  const {
    auditLogs,
    users,
    isLoading: isLoadingData,
    hasError
  } = useAuditLogsData({
    canReadAuditLogs,
    canReadUsers
  });
  (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_21__/* .useFocusWhenNavigate */ .L4)();
  const displayedFilters = getDisplayedFilters({ formatMessage, users, canReadUsers });
  const headers = [
    {
      name: "action",
      key: "action",
      metadatas: {
        label: formatMessage({
          id: "Settings.permissions.auditLogs.action",
          defaultMessage: "Action"
        }),
        sortable: true
      }
    },
    {
      name: "date",
      key: "date",
      metadatas: {
        label: formatMessage({
          id: "Settings.permissions.auditLogs.date",
          defaultMessage: "Date"
        }),
        sortable: true
      }
    },
    {
      key: "user",
      name: "user",
      metadatas: {
        label: formatMessage({
          id: "Settings.permissions.auditLogs.user",
          defaultMessage: "User"
        }),
        sortable: false
      },
      // In this case, the passed parameter cannot and shouldn't be something else than User
      cellFormatter: (user) => user ? user.displayName : ""
    }
  ];
  if (hasError) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .Layout */ .P, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_9__/* .ContentLayout */ .s, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Box */ .a, { paddingTop: 8, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_21__/* .AnErrorOccurred */ .hH, {}) }) }) });
  }
  const isLoading = isLoadingData || isLoadingRBAC;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_12__/* .Main */ .g, { "aria-busy": isLoading, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_21__/* .SettingsPageTitle */ .x7,
      {
        name: formatMessage({
          id: "global.auditLogs",
          defaultMessage: "Audit Logs"
        })
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _strapi_design_system__WEBPACK_IMPORTED_MODULE_10__/* .HeaderLayout */ .Q,
      {
        title: formatMessage({
          id: "global.auditLogs",
          defaultMessage: "Audit Logs"
        }),
        subtitle: formatMessage({
          id: "Settings.permissions.auditLogs.listview.header.subtitle",
          defaultMessage: "Logs of all the activities that happened in your environment"
        })
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .ActionLayout */ .B, { startActions: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Filters_dLXfVnI0_mjs__WEBPACK_IMPORTED_MODULE_24__.F, { displayedFilters }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_9__/* .ContentLayout */ .s, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_21__/* .DynamicTable */ .Ee,
        {
          contentType: "Audit logs",
          headers,
          rows: auditLogs?.results || [],
          withBulkActions: true,
          isLoading,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            TableRows,
            {
              headers,
              rows: auditLogs?.results || [],
              onOpenModal: (id) => setQuery({ id: `${id}` })
            }
          )
        }
      ),
      auditLogs?.pagination && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PaginationFooter, { pagination: auditLogs.pagination })
    ] }),
    query?.id && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Modal, { handleClose: () => setQuery({ id: null }, "remove"), logId: query.id })
  ] });
};
const ProtectedListPage = () => {
  const permissions = (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_23__.j)(
    (state) => state.admin_app.permissions.settings?.auditLogs?.main
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_21__/* .CheckPagePermissions */ .kz, { permissions, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ListPage, {}) });
};



/***/ }

}]);