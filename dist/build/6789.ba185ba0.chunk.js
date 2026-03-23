"use strict";
(self["webpackChunkmy_strapi_project"] = self["webpackChunkmy_strapi_project"] || []).push([[6789],{

/***/ 66789
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Upload)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69751);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21272);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50215);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94061);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85963);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48653);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8361);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90151);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(68074);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(88353);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(42455);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(74773);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4198);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(55356);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(64871);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(43064);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(38413);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(61485);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(99248);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(67030);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(6239);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(83997);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(30893);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(98765);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(59201);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(14718);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(54894);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(71389);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(17703);
/* harmony import */ var _index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(94137);
/* harmony import */ var byte_size__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(98908);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(5409);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(46270);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(20415);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(3047);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(28604);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(17470);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(60362);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(61906);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(41909);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(5194);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(50612);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(47610);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(11163);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(61535);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(346);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(74930);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(33955);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(12083);
/* harmony import */ var cropperjs__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(40495);
/* harmony import */ var cropperjs_dist_cropper_css__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(50837);


























const getBreadcrumbDataML = (folder, { pathname, query }) => {
  let data = [
    {
      id: null,
      label: { id: (0,_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.g)("plugin.name"), defaultMessage: "Media Library" },
      href: folder ? (0,_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.a)(pathname, query) : void 0
    }
  ];
  if (folder?.parent?.parent) {
    data.push([]);
  }
  if (folder?.parent) {
    data.push({
      id: folder.parent.id,
      label: folder.parent.name,
      href: (0,_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.a)(pathname, query, {
        folder: folder.parent.id,
        folderPath: folder.parent.path
      })
    });
  }
  if (folder) {
    data.push({
      id: folder.id,
      label: folder.name
    });
  }
  return data;
};
const FolderCardCheckbox = (props) => {
  const { id } = (0,_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.u)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .a, { position: "relative", zIndex: 2, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .BaseCheckbox */ .J, { "aria-labelledby": `${id}-title`, ...props }) });
};
const PaginationFooter = ({ pagination }) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .a, { paddingTop: 6, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_21__/* .Flex */ .s, { alignItems: "flex-end", justifyContent: "space-between", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_24__/* .PageSizeURLQuery */ ._u, {}),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_24__/* .PaginationURLQuery */ .W7, { pagination })
  ] }) });
};
PaginationFooter.defaultProps = {
  pagination: {
    pageCount: 0,
    pageSize: 10,
    total: 0
  }
};
PaginationFooter.propTypes = {
  pagination: prop_types__WEBPACK_IMPORTED_MODULE_43__.shape({
    page: prop_types__WEBPACK_IMPORTED_MODULE_43__.number,
    pageCount: prop_types__WEBPACK_IMPORTED_MODULE_43__.number,
    pageSize: prop_types__WEBPACK_IMPORTED_MODULE_43__.number,
    total: prop_types__WEBPACK_IMPORTED_MODULE_43__.number
  })
};
const BulkDeleteButton = ({ selected, onSuccess }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .A)();
  const [showConfirmDialog, setShowConfirmDialog] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const { isLoading, remove } = (0,_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.b)();
  const handleConfirmRemove = async () => {
    await remove(selected);
    onSuccess();
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .$,
      {
        variant: "danger-light",
        size: "S",
        startIcon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_41__/* ["default"] */ .A, {}),
        onClick: () => setShowConfirmDialog(true),
        children: formatMessage({ id: "global.delete", defaultMessage: "Delete" })
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_24__/* .ConfirmDialog */ .TM,
      {
        isConfirmButtonLoading: isLoading,
        isOpen: showConfirmDialog,
        onToggleDialog: () => setShowConfirmDialog(false),
        onConfirm: handleConfirmRemove
      }
    )
  ] });
};
BulkDeleteButton.propTypes = {
  selected: prop_types__WEBPACK_IMPORTED_MODULE_43__.arrayOf(_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.A, _index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.F).isRequired,
  onSuccess: prop_types__WEBPACK_IMPORTED_MODULE_43__.func.isRequired
};
const useBulkMove = () => {
  const toggleNotification = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_24__/* .useNotification */ .hN)();
  const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_46__.useQueryClient)();
  const { post } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_24__/* .useFetchClient */ .ry)();
  const bulkMoveQuery = ({ destinationFolderId, filesAndFolders }) => {
    const payload = filesAndFolders.reduce((acc, selected) => {
      const { id, type } = selected;
      const key = type === "asset" ? "fileIds" : "folderIds";
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(id);
      return acc;
    }, {});
    return post("/upload/actions/bulk-move", { ...payload, destinationFolderId });
  };
  const mutation = (0,react_query__WEBPACK_IMPORTED_MODULE_46__.useMutation)(bulkMoveQuery, {
    onSuccess(res) {
      const {
        data: { data }
      } = res;
      if (data?.files?.length > 0) {
        queryClient.refetchQueries([_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.p, "assets"], { active: true });
        queryClient.refetchQueries([_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.p, "asset-count"], { active: true });
      }
      queryClient.refetchQueries([_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.p, "folders"], { active: true });
      toggleNotification({
        type: "success",
        message: {
          id: (0,_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.g)("modal.move.success-label"),
          defaultMessage: "Elements have been moved successfully."
        }
      });
    }
  });
  const move = (destinationFolderId, filesAndFolders) => mutation.mutateAsync({ destinationFolderId, filesAndFolders });
  return { ...mutation, move };
};
const BulkMoveDialog = ({ onClose, selected, currentFolder }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .A)();
  const { data: folderStructure, isLoading } = (0,_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.c)();
  const { move } = useBulkMove();
  if (!folderStructure) {
    return null;
  }
  const handleSubmit = async (values, { setErrors }) => {
    try {
      await move(values.destination.value, selected);
      onClose();
    } catch (error) {
      const normalizedError = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_24__/* .normalizeAPIError */ .u7)(error);
      const formikErrors = normalizedError.errors.reduce((acc, error2) => {
        acc[error2.values?.path?.length || "destination"] = error2.defaultMessage;
        return acc;
      }, {});
      if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_45__(formikErrors)) {
        setErrors(formikErrors);
      }
    }
  };
  const handleClose = () => {
    onClose();
  };
  if (isLoading) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_17__/* .ModalLayout */ .k, { onClose: handleClose, labelledBy: "title", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_20__/* .ModalBody */ .c, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_21__/* .Flex */ .s, { justifyContent: "center", paddingTop: 4, paddingBottom: 4, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_15__/* .Loader */ .a, { children: formatMessage({
      id: (0,_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.g)("content.isLoading"),
      defaultMessage: "Content is loading."
    }) }) }) }) });
  }
  const initialFormData = {
    destination: {
      value: currentFolder?.id || "",
      label: currentFolder?.name || folderStructure[0].label
    }
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_17__/* .ModalLayout */ .k, { onClose: handleClose, labelledBy: "title", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(formik__WEBPACK_IMPORTED_MODULE_44__/* .Formik */ .l1, { validateOnChange: false, onSubmit: handleSubmit, initialValues: initialFormData, children: ({ values, errors, setFieldValue }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_24__/* .Form */ .lV, { noValidate: true, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_18__/* .ModalHeader */ .r, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_22__/* .Typography */ .o, { fontWeight: "bold", textColor: "neutral800", as: "h2", id: "title", children: formatMessage({
      id: (0,_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.g)("modal.folder.move.title"),
      defaultMessage: "Move elements to"
    }) }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_20__/* .ModalBody */ .c, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .Grid */ .x, { gap: 4, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .GridItem */ .E, { xs: 12, col: 12, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_21__/* .Flex */ .s, { direction: "column", alignItems: "stretch", gap: 1, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .FieldLabel */ .d, { htmlFor: "folder-destination", children: formatMessage({
        id: (0,_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.g)("form.input.label.folder-location"),
        defaultMessage: "Location"
      }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.S,
        {
          options: folderStructure,
          onChange: (value) => {
            setFieldValue("destination", value);
          },
          defaultValue: values.destination,
          name: "destination",
          menuPortalTarget: document.querySelector("body"),
          inputId: "folder-destination",
          error: errors?.destination,
          ariaErrorMessage: "destination-error"
        }
      ),
      errors.destination && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _strapi_design_system__WEBPACK_IMPORTED_MODULE_22__/* .Typography */ .o,
        {
          variant: "pi",
          as: "p",
          id: "folder-destination-error",
          textColor: "danger600",
          children: errors.destination
        }
      )
    ] }) }) }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _strapi_design_system__WEBPACK_IMPORTED_MODULE_19__/* .ModalFooter */ .j,
      {
        startActions: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .$, { onClick: handleClose, variant: "tertiary", name: "cancel", children: formatMessage({ id: "cancel", defaultMessage: "Cancel" }) }),
        endActions: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .$, { type: "submit", loading: isLoading, children: formatMessage({ id: "modal.folder.move.submit", defaultMessage: "Move" }) })
      }
    )
  ] }) }) });
};
BulkMoveDialog.defaultProps = {
  currentFolder: void 0
};
BulkMoveDialog.propTypes = {
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_43__.func.isRequired,
  currentFolder: _index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.F,
  selected: prop_types__WEBPACK_IMPORTED_MODULE_43__.arrayOf(_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.F, _index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.A).isRequired
};
const BulkMoveButton = ({ selected, onSuccess, currentFolder }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .A)();
  const [showConfirmDialog, setShowConfirmDialog] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const handleConfirmMove = () => {
    setShowConfirmDialog(false);
    onSuccess();
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .$,
      {
        variant: "secondary",
        size: "S",
        startIcon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .A, {}),
        onClick: () => setShowConfirmDialog(true),
        children: formatMessage({ id: "global.move", defaultMessage: "Move" })
      }
    ),
    showConfirmDialog && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      BulkMoveDialog,
      {
        currentFolder,
        onClose: handleConfirmMove,
        selected
      }
    )
  ] });
};
BulkMoveButton.defaultProps = {
  currentFolder: void 0
};
BulkMoveButton.propTypes = {
  onSuccess: prop_types__WEBPACK_IMPORTED_MODULE_43__.func.isRequired,
  currentFolder: _index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.F,
  selected: prop_types__WEBPACK_IMPORTED_MODULE_43__.arrayOf(_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.A, _index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.F).isRequired
};
const BulkActions = ({ selected, onSuccess, currentFolder }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .A)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_21__/* .Flex */ .s, { gap: 2, paddingBottom: 5, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_22__/* .Typography */ .o, { variant: "epsilon", textColor: "neutral600", children: formatMessage(
      {
        id: (0,_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.g)("list.assets.selected"),
        defaultMessage: "{numberFolders, plural, one {1 folder} other {# folders}} - {numberAssets, plural, one {1 asset} other {# assets}} selected"
      },
      {
        numberFolders: selected.filter(({ type }) => type === "folder").length,
        numberAssets: selected.filter(({ type }) => type === "asset").length
      }
    ) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BulkDeleteButton, { selected, onSuccess }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BulkMoveButton, { currentFolder, selected, onSuccess })
  ] });
};
BulkActions.defaultProps = {
  currentFolder: void 0
};
BulkActions.propTypes = {
  onSuccess: prop_types__WEBPACK_IMPORTED_MODULE_43__.func.isRequired,
  currentFolder: _index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.F,
  selected: prop_types__WEBPACK_IMPORTED_MODULE_43__.arrayOf(_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.A, _index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.F).isRequired
};
const getContentIntlMessage = ({ isFiltering, canCreate, canRead }) => {
  if (isFiltering) {
    return {
      id: "list.assets-empty.title-withSearch",
      defaultMessage: "There are no elements with the applied filters"
    };
  }
  if (canRead) {
    if (canCreate) {
      return {
        id: "list.assets.empty-upload",
        defaultMessage: "Upload your first assets..."
      };
    }
    return {
      id: "list.assets.empty",
      defaultMessage: "Media Library is empty"
    };
  }
  return {
    id: "header.actions.no-permissions",
    defaultMessage: "No permissions to view"
  };
};
const EmptyOrNoPermissions = ({ canCreate, isFiltering, canRead, onActionClick }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .A)();
  const content = getContentIntlMessage({ isFiltering, canCreate, canRead });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.E,
    {
      icon: !canRead ? _strapi_icons__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .A : null,
      action: canCreate && !isFiltering && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .$, { variant: "secondary", startIcon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_40__/* ["default"] */ .A, {}), onClick: onActionClick, children: formatMessage({
        id: (0,_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.g)("header.actions.add-assets"),
        defaultMessage: "Add new assets"
      }) }),
      content: formatMessage({
        ...content,
        id: (0,_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.g)(content.id)
      })
    }
  );
};
EmptyOrNoPermissions.propTypes = {
  canCreate: prop_types__WEBPACK_IMPORTED_MODULE_43__.bool.isRequired,
  canRead: prop_types__WEBPACK_IMPORTED_MODULE_43__.bool.isRequired,
  isFiltering: prop_types__WEBPACK_IMPORTED_MODULE_43__.bool.isRequired,
  onActionClick: prop_types__WEBPACK_IMPORTED_MODULE_43__.func.isRequired
};
const Filters = () => {
  const buttonRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const [isVisible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .A)();
  const { trackUsage } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_24__/* .useTracking */ .z1)();
  const [{ query }, setQuery] = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_24__/* .useQueryParams */ .sq)();
  const filters = query?.filters?.$and || [];
  const toggleFilter = () => setVisible((prev) => !prev);
  const handleRemoveFilter = (nextFilters) => {
    setQuery({ filters: { $and: nextFilters }, page: 1 });
  };
  const handleSubmit = (filters2) => {
    trackUsage("didFilterMediaLibraryElements", {
      location: "content-manager",
      filter: Object.keys(filters2[filters2.length - 1])[0]
    });
    setQuery({ filters: { $and: filters2 }, page: 1 });
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .$,
      {
        variant: "tertiary",
        ref: buttonRef,
        startIcon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .A, {}),
        onClick: toggleFilter,
        size: "S",
        children: formatMessage({ id: "app.utils.filters", defaultMessage: "Filters" })
      }
    ),
    isVisible && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.d,
      {
        displayedFilters: _index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.e,
        filters,
        onSubmit: handleSubmit,
        onToggle: toggleFilter,
        source: buttonRef
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.f,
      {
        appliedFilters: filters,
        filtersSchema: _index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.e,
        onRemoveFilter: handleRemoveFilter
      }
    )
  ] });
};
const Header = ({
  breadcrumbs,
  canCreate,
  folder,
  onToggleEditFolderDialog,
  onToggleUploadAssetDialog
}) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .A)();
  const { pathname } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_28__/* .useLocation */ .zy)();
  const [{ query }] = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_24__/* .useQueryParams */ .sq)();
  const backQuery = {
    ...query,
    folder: folder?.parent?.id ?? void 0,
    folderPath: folder?.parent?.path ?? void 0
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_13__/* .HeaderLayout */ .Q,
    {
      title: formatMessage({
        id: (0,_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.g)("plugin.name"),
        defaultMessage: `Media Library`
      }),
      subtitle: breadcrumbs && folder && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.h,
        {
          as: "nav",
          label: formatMessage({
            id: (0,_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.g)("header.breadcrumbs.nav.label"),
            defaultMessage: "Folders navigation"
          }),
          breadcrumbs,
          currentFolderId: folder?.id
        }
      ),
      navigationAction: folder && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _strapi_design_system__WEBPACK_IMPORTED_MODULE_14__/* .Link */ .N,
        {
          startIcon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .A, {}),
          to: `${pathname}?${(0,qs__WEBPACK_IMPORTED_MODULE_31__.stringify)(backQuery, { encode: false })}`,
          children: formatMessage({
            id: (0,_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.g)("header.actions.folder-level-up"),
            defaultMessage: "Back"
          })
        }
      ),
      primaryAction: canCreate && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_21__/* .Flex */ .s, { gap: 2, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .$, { startIcon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_40__/* ["default"] */ .A, {}), variant: "secondary", onClick: onToggleEditFolderDialog, children: formatMessage({
          id: (0,_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.g)("header.actions.add-folder"),
          defaultMessage: "Add new folder"
        }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .$, { startIcon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_40__/* ["default"] */ .A, {}), onClick: onToggleUploadAssetDialog, children: formatMessage({
          id: (0,_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.g)("header.actions.add-assets"),
          defaultMessage: "Add new assets"
        }) })
      ] })
    }
  );
};
Header.defaultProps = {
  breadcrumbs: false,
  folder: null
};
Header.propTypes = {
  breadcrumbs: prop_types__WEBPACK_IMPORTED_MODULE_43__.oneOfType([_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.B, prop_types__WEBPACK_IMPORTED_MODULE_43__.bool]),
  canCreate: prop_types__WEBPACK_IMPORTED_MODULE_43__.bool.isRequired,
  folder: _index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.F,
  onToggleEditFolderDialog: prop_types__WEBPACK_IMPORTED_MODULE_43__.func.isRequired,
  onToggleUploadAssetDialog: prop_types__WEBPACK_IMPORTED_MODULE_43__.func.isRequired
};
const BoxWithHeight = (0,styled_components__WEBPACK_IMPORTED_MODULE_42__/* ["default"] */ .Ay)((0,_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .a))`
  height: ${32 / 16}rem;
  display: flex;
  align-items: center;
`;
const TypographyMaxWidth = (0,styled_components__WEBPACK_IMPORTED_MODULE_42__/* ["default"] */ .Ay)((0,_strapi_design_system__WEBPACK_IMPORTED_MODULE_22__/* .Typography */ .o))`
  max-width: 100%;
`;
const ActionContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_42__/* ["default"] */ .Ay)((0,_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .a))`
  svg {
    path {
      fill: ${({ theme }) => theme.colors.neutral500};
    }
  }
`;
const MediaLibrary = () => {
  const { push } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_28__/* .useHistory */ .W6)();
  const {
    canRead,
    canCreate,
    canUpdate,
    canCopyLink,
    canDownload,
    isLoading: permissionsLoading
  } = (0,_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.i)();
  const currentFolderToEditRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .A)();
  const { pathname } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_28__/* .useLocation */ .zy)();
  const { trackUsage } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_24__/* .useTracking */ .z1)();
  const [{ query }, setQuery] = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_24__/* .useQueryParams */ .sq)();
  const isFiltering = Boolean(query._q || query.filters);
  const [view, setView] = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_24__/* .usePersistentState */ .ud)(_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.l.view, _index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.v.GRID);
  const isGridView = view === _index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.v.GRID;
  const {
    data: assetsData,
    isLoading: assetsLoading,
    errors: assetsError
  } = (0,_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.j)({
    skipWhen: !canRead,
    query
  });
  const {
    data: foldersData,
    isLoading: foldersLoading,
    errors: foldersError
  } = (0,_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.k)({
    enabled: canRead && assetsData?.pagination?.page === 1 && !(0,_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.m)(query),
    query
  });
  const {
    data: currentFolder,
    isLoading: isCurrentFolderLoading,
    error: currentFolderError
  } = (0,_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.n)(query?.folder, {
    enabled: canRead && !!query?.folder
  });
  if (currentFolderError?.response?.status === 404) {
    push(pathname);
  }
  const folders = foldersData?.map((folder) => ({
    ...folder,
    type: "folder",
    folderURL: (0,_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.a)(pathname, query, folder.id),
    isSelectable: canUpdate
  })) ?? [];
  const folderCount = folders?.length || 0;
  const assets = assetsData?.results?.map((asset) => ({ ...asset, type: "asset", isSelectable: canUpdate })) || [];
  const assetCount = assets?.length ?? 0;
  const totalAssetCount = assetsData?.pagination?.total;
  const isLoading = isCurrentFolderLoading || foldersLoading || permissionsLoading || assetsLoading;
  const [showUploadAssetDialog, setShowUploadAssetDialog] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [showEditFolderDialog, setShowEditFolderDialog] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [assetToEdit, setAssetToEdit] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(void 0);
  const [folderToEdit, setFolderToEdit] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(void 0);
  const [selected, { selectOne, selectAll }] = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_24__/* .useSelectionState */ .$0)(["type", "id"], []);
  const indeterminateBulkSelect = selected?.length > 0 && selected?.length !== assetCount + folderCount;
  const toggleUploadAssetDialog = () => setShowUploadAssetDialog((prev) => !prev);
  const toggleEditFolderDialog = ({ created = false } = {}) => {
    if (created && query?.page !== "1") {
      setQuery({
        ...query,
        page: 1
      });
    }
    setShowEditFolderDialog((prev) => !prev);
  };
  const handleBulkSelect = (event, elements) => {
    if (event.target.checked) {
      trackUsage("didSelectAllMediaLibraryElements");
    }
    selectAll(elements);
  };
  const handleChangeSort = (value) => {
    trackUsage("didSortMediaLibraryElements", {
      location: "upload",
      sort: value
    });
    setQuery({ sort: value });
  };
  const handleEditFolder = (folder) => {
    setFolderToEdit(folder);
    setShowEditFolderDialog(true);
  };
  const handleEditFolderClose = (payload) => {
    setFolderToEdit(null);
    toggleEditFolderDialog(payload);
    if (currentFolderToEditRef.current) {
      currentFolderToEditRef.current.focus();
    }
  };
  const handleAssetDeleted = (numberOfAssets) => {
    if (numberOfAssets === assetCount && assetsData.pagination.page === assetsData.pagination.pageCount && assetsData.pagination.page > 1) {
      setQuery({
        ...query,
        page: assetsData.pagination.page - 1
      });
    }
  };
  const handleBulkActionSuccess = () => {
    selectAll();
    handleAssetDeleted(selected.length);
  };
  (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_24__/* .useFocusWhenNavigate */ .L4)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_10__/* .Layout */ .P, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_16__/* .Main */ .g, { "aria-busy": isLoading, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        Header,
        {
          breadcrumbs: !isCurrentFolderLoading && getBreadcrumbDataML(currentFolder, { pathname, query }),
          canCreate,
          onToggleEditFolderDialog: toggleEditFolderDialog,
          onToggleUploadAssetDialog: toggleUploadAssetDialog,
          folder: currentFolder
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _strapi_design_system__WEBPACK_IMPORTED_MODULE_11__/* .ActionLayout */ .B,
        {
          startActions: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
            canUpdate && isGridView && (assetCount > 0 || folderCount > 0) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              BoxWithHeight,
              {
                paddingLeft: 2,
                paddingRight: 2,
                background: "neutral0",
                hasRadius: true,
                borderColor: "neutral200",
                children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .BaseCheckbox */ .J,
                  {
                    "aria-label": formatMessage({
                      id: (0,_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.g)("bulk.select.label"),
                      defaultMessage: "Select all folders & assets"
                    }),
                    indeterminate: indeterminateBulkSelect,
                    value: (assetCount > 0 || folderCount > 0) && selected.length === assetCount + folderCount,
                    onChange: (e) => handleBulkSelect(e, [...assets, ...folders])
                  }
                )
              }
            ),
            canRead && isGridView && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.o, { value: query?.sort, onChangeSort: handleChangeSort }),
            canRead && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Filters, {})
          ] }),
          endActions: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_24__/* .CheckPermissions */ .d4, { permissions: _index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.P.configureView, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ActionContainer, { paddingTop: 1, paddingBottom: 1, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _strapi_design_system__WEBPACK_IMPORTED_MODULE_9__/* .IconButton */ .K,
              {
                forwardedAs: react_router_dom__WEBPACK_IMPORTED_MODULE_27__/* .Link */ .N_,
                to: {
                  pathname: `${pathname}/configuration`,
                  search: (0,qs__WEBPACK_IMPORTED_MODULE_31__.stringify)(query, { encode: false })
                },
                icon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .A, {}),
                label: formatMessage({
                  id: "app.links.configure-view",
                  defaultMessage: "Configure the view"
                })
              }
            ) }) }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ActionContainer, { paddingTop: 1, paddingBottom: 1, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _strapi_design_system__WEBPACK_IMPORTED_MODULE_9__/* .IconButton */ .K,
              {
                icon: isGridView ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .A, {}) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .A, {}),
                label: isGridView ? formatMessage({
                  id: (0,_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.g)("view-switch.list"),
                  defaultMessage: "List View"
                }) : formatMessage({
                  id: (0,_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.g)("view-switch.grid"),
                  defaultMessage: "Grid View"
                }),
                onClick: () => setView(isGridView ? _index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.v.LIST : _index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.v.GRID)
              }
            ) }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_24__/* .SearchURLQuery */ .q7,
              {
                label: formatMessage({
                  id: (0,_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.g)("search.label"),
                  defaultMessage: "Search for an asset"
                }),
                trackedEvent: "didSearchMediaLibraryElements",
                trackedEventDetails: { location: "upload" }
              }
            )
          ] })
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_12__/* .ContentLayout */ .s, { children: [
        selected.length > 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          BulkActions,
          {
            currentFolder,
            selected,
            onSuccess: handleBulkActionSuccess
          }
        ),
        isLoading && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_24__/* .LoadingIndicatorPage */ .Bl, {}),
        (assetsError || foldersError) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_24__/* .AnErrorOccurred */ .hH, {}),
        folderCount === 0 && assetCount === 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          EmptyOrNoPermissions,
          {
            canCreate,
            canRead,
            isFiltering,
            onActionClick: toggleUploadAssetDialog
          }
        ),
        canRead && !isGridView && (assetCount > 0 || folderCount > 0) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.T,
          {
            assetCount,
            folderCount,
            indeterminate: indeterminateBulkSelect,
            onChangeSort: handleChangeSort,
            onChangeFolder: (folderID, folderPath) => push((0,_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.a)(pathname, query, { folder: folderID, folderPath })),
            onEditAsset: setAssetToEdit,
            onEditFolder: handleEditFolder,
            onSelectOne: selectOne,
            onSelectAll: handleBulkSelect,
            rows: [...folders, ...assets],
            selected,
            shouldDisableBulkSelect: !canUpdate,
            sortQuery: query?.sort ?? ""
          }
        ),
        canRead && isGridView && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
          folderCount > 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.q,
            {
              title: (
                // Folders title should only appear if:
                // user is filtering and there are assets to display, to divide both type of elements
                // user is not filtering
                (isFiltering && assetCount > 0 || !isFiltering) && formatMessage(
                  {
                    id: (0,_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.g)("list.folders.title"),
                    defaultMessage: "Folders ({count})"
                  },
                  { count: folderCount }
                ) || ""
              ),
              children: folders.map((folder) => {
                const selectedFolders = selected.filter(({ type }) => type === "folder");
                const isSelected = !!selectedFolders.find(
                  (currentFolder2) => currentFolder2.id === folder.id
                );
                const url = (0,_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.a)(pathname, query, {
                  folder: folder?.id,
                  folderPath: folder?.path
                });
                return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .GridItem */ .E, { col: 3, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.r,
                  {
                    ref: folderToEdit && folder.id === folderToEdit.id ? currentFolderToEditRef : void 0,
                    ariaLabel: folder.name,
                    id: `folder-${folder.id}`,
                    to: url,
                    startAction: selectOne && folder.isSelectable ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      FolderCardCheckbox,
                      {
                        "data-testid": `folder-checkbox-${folder.id}`,
                        value: isSelected,
                        onChange: () => selectOne(folder)
                      }
                    ) : null,
                    cardActions: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _strapi_design_system__WEBPACK_IMPORTED_MODULE_9__/* .IconButton */ .K,
                      {
                        icon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_39__/* ["default"] */ .A, {}),
                        "aria-label": formatMessage({
                          id: (0,_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.g)("list.folder.edit"),
                          defaultMessage: "Edit folder"
                        }),
                        onClick: () => handleEditFolder(folder)
                      }
                    ),
                    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.s, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.t, { to: url, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_21__/* .Flex */ .s, { as: "h2", direction: "column", alignItems: "start", maxWidth: "100%", children: [
                      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(TypographyMaxWidth, { fontWeight: "semiBold", ellipsis: true, children: [
                        folder.name,
                        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_23__/* .VisuallyHidden */ .s, { children: ":" })
                      ] }),
                      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        TypographyMaxWidth,
                        {
                          as: "span",
                          textColor: "neutral600",
                          variant: "pi",
                          ellipsis: true,
                          children: formatMessage(
                            {
                              id: (0,_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.g)("list.folder.subtitle"),
                              defaultMessage: "{folderCount, plural, =0 {# folder} one {# folder} other {# folders}}, {filesCount, plural, =0 {# asset} one {# asset} other {# assets}}"
                            },
                            {
                              folderCount: folder.children.count,
                              filesCount: folder.files.count
                            }
                          )
                        }
                      )
                    ] }) }) })
                  }
                ) }, `folder-${folder.id}`);
              })
            }
          ),
          assetCount > 0 && folderCount > 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .a, { paddingTop: 6, paddingBottom: 4, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .Divider */ .c, {}) }),
          assetCount > 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.w,
            {
              assets,
              onEditAsset: setAssetToEdit,
              onSelectAsset: selectOne,
              selectedAssets: selected.filter(({ type }) => type === "asset"),
              title: (
                // Assets title should only appear if:
                // - user is not filtering
                // - user is filtering and there are folders to display, to separate them
                // - user is on page 1 since folders won't appear on any other page than the first one (no need to visually separate them)
                (!isFiltering || isFiltering && folderCount > 0) && assetsData?.pagination?.page === 1 && formatMessage(
                  {
                    id: (0,_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.g)("list.assets.title"),
                    defaultMessage: "Assets ({count})"
                  },
                  { count: totalAssetCount }
                ) || ""
              )
            }
          )
        ] }),
        assetsData?.pagination && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PaginationFooter, { pagination: assetsData.pagination })
      ] })
    ] }),
    showUploadAssetDialog && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.U,
      {
        onClose: toggleUploadAssetDialog,
        trackedLocation: "upload",
        folderId: query?.folder
      }
    ),
    showEditFolderDialog && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.x,
      {
        onClose: handleEditFolderClose,
        folder: folderToEdit,
        parentFolderId: query?.folder,
        location: "upload"
      }
    ),
    assetToEdit && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.y,
      {
        onClose: (editedAsset) => {
          if (editedAsset === null) {
            handleAssetDeleted(1);
          }
          setAssetToEdit(void 0);
        },
        asset: assetToEdit,
        canUpdate,
        canCopyLink,
        canDownload,
        trackedLocation: "upload"
      }
    )
  ] });
};
const ConfigureTheView = (0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(() => __webpack_require__.e(/* import() */ 8690).then(__webpack_require__.bind(__webpack_require__, 98690)));
const Upload = () => {
  const {
    config: { isLoading, isError, data: config }
  } = (0,_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.z)();
  const [{ rawQuery }, setQuery] = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_24__/* .useQueryParams */ .sq)();
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .A)();
  const title = formatMessage({ id: (0,_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.g)("plugin.name"), defaultMessage: "Media Library" });
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (isLoading || isError || rawQuery) {
      return;
    }
    setQuery({ sort: config.sort, page: 1, pageSize: config.pageSize });
  }, [isLoading, isError, config, rawQuery, setQuery]);
  (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_24__/* .useFocusWhenNavigate */ .L4)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_16__/* .Main */ .g, { "aria-busy": isLoading, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_helmet__WEBPACK_IMPORTED_MODULE_25__/* .Helmet */ .m, { title }),
    isLoading && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_24__/* .LoadingIndicatorPage */ .Bl, {}),
    rawQuery ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, { fallback: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_24__/* .LoadingIndicatorPage */ .Bl, {}), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_28__/* .Switch */ .dO, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_28__/* .Route */ .qh, { exact: true, path: `/plugins/${_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.p}`, component: MediaLibrary }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        react_router_dom__WEBPACK_IMPORTED_MODULE_28__/* .Route */ .qh,
        {
          exact: true,
          path: `/plugins/${_index_hL5WQIKV_mjs__WEBPACK_IMPORTED_MODULE_29__.p}/configuration`,
          render: () => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ConfigureTheView, { config })
        }
      )
    ] }) }) : null
  ] });
};



/***/ }

}]);