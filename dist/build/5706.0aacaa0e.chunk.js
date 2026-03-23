"use strict";
(self["webpackChunkmy_strapi_project"] = self["webpackChunkmy_strapi_project"] || []).push([[5706],{

/***/ 15706
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProtectedEditView: () => (/* binding */ ProtectedEditView),
/* harmony export */   w: () => (/* binding */ EditView)
/* harmony export */ });
/* unused harmony export LoadingView */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69751);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21272);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94061);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85963);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90151);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(68074);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4198);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(55356);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(38413);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(83997);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(30893);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(59201);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(54514);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(61535);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(54894);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(17703);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(12083);
/* harmony import */ var _index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(92129);
/* harmony import */ var _transferTokens_vSrhgUOJ_mjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(81359);
/* harmony import */ var _constants_fJt30IoY_mjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(99831);
/* harmony import */ var _TokenTypeSelect_d7r9RfHH_mjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(12123);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(15126);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(63299);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(44633);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(59080);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(79275);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(14718);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(82437);
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(5790);
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












































































const schema = yup__WEBPACK_IMPORTED_MODULE_16__/* .object */ .Ik().shape({
  name: yup__WEBPACK_IMPORTED_MODULE_16__/* .string */ .Yj().max(100).required(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_11__/* .translatedErrors */ .iW.required),
  description: yup__WEBPACK_IMPORTED_MODULE_16__/* .string */ .Yj().nullable(),
  lifespan: yup__WEBPACK_IMPORTED_MODULE_16__/* .number */ .ai().integer().min(0).nullable().defined(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_11__/* .translatedErrors */ .iW.required),
  permissions: yup__WEBPACK_IMPORTED_MODULE_16__/* .string */ .Yj().required(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_11__/* .translatedErrors */ .iW.required)
});
const EditView = () => {
  (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_11__/* .useFocusWhenNavigate */ .L4)();
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A)();
  const { lockApp, unlockApp } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_11__/* .useOverlayBlocker */ .MA)();
  const toggleNotification = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_11__/* .useNotification */ .hN)();
  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_15__/* .useHistory */ .W6)();
  const { state: locationState } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_15__/* .useLocation */ .zy)();
  const [transferToken, setTransferToken] = react__WEBPACK_IMPORTED_MODULE_1__.useState(
    locationState && "accessKey" in locationState.transferToken ? {
      ...locationState.transferToken
    } : null
  );
  const { trackUsage } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_11__/* .useTracking */ .z1)();
  const { setCurrentStep } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_11__/* .useGuidedTour */ .Cx)();
  const permissions = (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_17__.j)(
    (state) => state.admin_app.permissions.settings?.["transfer-tokens"]
  );
  const {
    allowedActions: { canCreate, canUpdate, canRegenerate }
  } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_11__/* .useRBAC */ .ec)(permissions);
  const match = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_15__/* .useRouteMatch */ .W5)("/settings/transfer-tokens/:id");
  const id = match?.params?.id;
  const isCreating = id === "create";
  const {
    _unstableFormatAPIError: formatAPIError,
    _unstableFormatValidationErrors: formatValidationErrors
  } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_11__/* .useAPIErrorHandler */ .wq)();
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    trackUsage(isCreating ? "didAddTokenFromList" : "didEditTokenFromList", {
      tokenType: _constants_fJt30IoY_mjs__WEBPACK_IMPORTED_MODULE_19__.T
    });
  }, [isCreating, trackUsage]);
  const { data, error } = (0,_transferTokens_vSrhgUOJ_mjs__WEBPACK_IMPORTED_MODULE_18__.u)(id, {
    skip: isCreating || transferToken !== null || !id
  });
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    if (error) {
      toggleNotification({
        type: "warning",
        message: formatAPIError(error)
      });
    }
  }, [error, formatAPIError, toggleNotification]);
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    if (data) {
      setTransferToken(data);
    }
  }, [data]);
  const [createToken] = (0,_transferTokens_vSrhgUOJ_mjs__WEBPACK_IMPORTED_MODULE_18__.a)();
  const [updateToken] = (0,_transferTokens_vSrhgUOJ_mjs__WEBPACK_IMPORTED_MODULE_18__.b)();
  const handleSubmit = async (body, formik) => {
    trackUsage(isCreating ? "willCreateToken" : "willEditToken", {
      tokenType: _constants_fJt30IoY_mjs__WEBPACK_IMPORTED_MODULE_19__.T
    });
    lockApp();
    const permissions2 = body.permissions.split("-");
    const isPermissionsTransferPermission = (permission) => {
      if (permission.length === 1) {
        return permission[0] === "push" || permission[0] === "pull";
      }
      return permission[0] === "push" && permission[1] === "pull";
    };
    if (isPermissionsTransferPermission(permissions2)) {
      try {
        if (isCreating) {
          const res = await createToken({
            ...body,
            // lifespan must be "null" for unlimited (0 would mean instantly expired and isn't accepted)
            lifespan: body?.lifespan || null,
            permissions: permissions2
          });
          if ("error" in res) {
            if ((0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_17__.x)(res.error) && res.error.name === "ValidationError") {
              formik.setErrors(formatValidationErrors(res.error));
            } else {
              toggleNotification({
                type: "warning",
                message: formatAPIError(res.error)
              });
            }
            return;
          }
          setTransferToken(res.data);
          toggleNotification({
            type: "success",
            message: formatMessage({
              id: "notification.success.transfertokencreated",
              defaultMessage: "Transfer Token successfully created"
            })
          });
          trackUsage("didCreateToken", {
            type: transferToken?.permissions,
            tokenType: _constants_fJt30IoY_mjs__WEBPACK_IMPORTED_MODULE_19__.T
          });
          history.push(`/settings/transfer-tokens/${res.data.id}`, { transferToken: res.data });
          setCurrentStep("transferTokens.success");
        } else {
          const res = await updateToken({
            id,
            name: body.name,
            description: body.description,
            permissions: permissions2
          });
          if ("error" in res) {
            if ((0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_17__.x)(res.error) && res.error.name === "ValidationError") {
              formik.setErrors(formatValidationErrors(res.error));
            } else {
              toggleNotification({
                type: "warning",
                message: formatAPIError(res.error)
              });
            }
            return;
          }
          setTransferToken(res.data);
          toggleNotification({
            type: "success",
            message: formatMessage({
              id: "notification.success.transfertokenedited",
              defaultMessage: "Transfer Token successfully edited"
            })
          });
          trackUsage("didEditToken", {
            type: transferToken?.permissions,
            tokenType: _constants_fJt30IoY_mjs__WEBPACK_IMPORTED_MODULE_19__.T
          });
        }
      } catch (err) {
        toggleNotification({
          type: "warning",
          message: {
            id: "notification.error",
            defaultMessage: "Something went wrong"
          }
        });
      } finally {
        unlockApp();
      }
    }
  };
  const canEditInputs = canUpdate && !isCreating || canCreate && isCreating;
  const isLoading = !isCreating && !transferToken;
  if (isLoading) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(LoadingView, {});
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .Main */ .g, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_11__/* .SettingsPageTitle */ .x7, { name: "Transfer Tokens" }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      formik__WEBPACK_IMPORTED_MODULE_13__/* .Formik */ .l1,
      {
        validationSchema: schema,
        validateOnChange: false,
        initialValues: {
          name: transferToken?.name || "",
          description: transferToken?.description || "",
          lifespan: transferToken?.lifespan || null,
          /**
           * We need to cast the permissions to satisfy the type for `permissions`
           * in the request body incase we don't have a transferToken and instead
           * use an empty string.
           */
          permissions: transferToken?.permissions.join("-") ?? ""
        },
        enableReinitialize: true,
        onSubmit: (body, actions) => handleSubmit(body, actions),
        children: ({ errors, handleChange, isSubmitting, values }) => {
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_11__/* .Form */ .lV, { children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _TokenTypeSelect_d7r9RfHH_mjs__WEBPACK_IMPORTED_MODULE_20__.F,
              {
                backUrl: "/settings/transfer-tokens",
                title: {
                  id: "Settings.transferTokens.createPage.title",
                  defaultMessage: "TokenCreate Transfer Token"
                },
                token: transferToken,
                setToken: setTransferToken,
                canEditInputs,
                canRegenerate,
                isSubmitting,
                regenerateUrl: "/admin/transfer/tokens/"
              }
            ),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .ContentLayout */ .s, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_9__/* .Flex */ .s, { direction: "column", alignItems: "stretch", gap: 6, children: [
              transferToken && Boolean(transferToken?.name) && "accessKey" in transferToken && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TokenTypeSelect_d7r9RfHH_mjs__WEBPACK_IMPORTED_MODULE_20__.c, { token: transferToken.accessKey, tokenType: _constants_fJt30IoY_mjs__WEBPACK_IMPORTED_MODULE_19__.T }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                FormTransferTokenContainer,
                {
                  errors,
                  onChange: handleChange,
                  canEditInputs,
                  isCreating,
                  values,
                  transferToken
                }
              )
            ] }) })
          ] });
        }
      }
    )
  ] });
};
const ProtectedEditView = () => {
  const permissions = (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_17__.j)(
    (state) => state.admin_app.permissions.settings?.["transfer-tokens"].read
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_11__/* .CheckPagePermissions */ .kz, { permissions, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(EditView, {}) });
};
const FormTransferTokenContainer = ({
  errors = {},
  onChange,
  canEditInputs,
  isCreating,
  values,
  transferToken = {}
}) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A)();
  const typeOptions = [
    {
      value: "push",
      label: {
        id: "Settings.transferTokens.types.push",
        defaultMessage: "Push"
      }
    },
    {
      value: "pull",
      label: {
        id: "Settings.transferTokens.types.pull",
        defaultMessage: "Pull"
      }
    },
    {
      value: "push-pull",
      label: {
        id: "Settings.transferTokens.types.push-pull",
        defaultMessage: "Full Access"
      }
    }
  ];
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .a,
    {
      background: "neutral0",
      hasRadius: true,
      shadow: "filterShadow",
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 7,
      paddingRight: 7,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_9__/* .Flex */ .s, { direction: "column", alignItems: "stretch", gap: 4, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_10__/* .Typography */ .o, { variant: "delta", as: "h2", children: formatMessage({
          id: "global.details",
          defaultMessage: "Details"
        }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .Grid */ .x, { gap: 5, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .GridItem */ .E, { col: 6, xs: 12, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _TokenTypeSelect_d7r9RfHH_mjs__WEBPACK_IMPORTED_MODULE_20__.T,
            {
              error: errors["name"],
              value: values["name"],
              canEditInputs,
              onChange
            }
          ) }, "name"),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .GridItem */ .E, { col: 6, xs: 12, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _TokenTypeSelect_d7r9RfHH_mjs__WEBPACK_IMPORTED_MODULE_20__.a,
            {
              error: errors["description"],
              value: values["description"],
              canEditInputs,
              onChange
            }
          ) }, "description"),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .GridItem */ .E, { col: 6, xs: 12, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _TokenTypeSelect_d7r9RfHH_mjs__WEBPACK_IMPORTED_MODULE_20__.L,
            {
              isCreating,
              error: errors["lifespan"],
              value: values["lifespan"],
              onChange,
              token: transferToken
            }
          ) }, "lifespan"),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .GridItem */ .E, { col: 6, xs: 12, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _TokenTypeSelect_d7r9RfHH_mjs__WEBPACK_IMPORTED_MODULE_20__.b,
            {
              name: "permissions",
              value: values["permissions"],
              error: errors["permissions"],
              label: {
                id: "Settings.tokens.form.type",
                defaultMessage: "Token type"
              },
              onChange: (value) => {
                onChange({ target: { name: "permissions", value } });
              },
              options: typeOptions,
              canEditInputs
            }
          ) }, "permissions")
        ] })
      ] })
    }
  );
};
const LoadingView = ({ transferTokenName }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A)();
  (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_11__/* .useFocusWhenNavigate */ .L4)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .Main */ .g, { "aria-busy": "true", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_11__/* .SettingsPageTitle */ .x7, { name: "Transfer Tokens" }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .HeaderLayout */ .Q,
      {
        primaryAction: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .$, { disabled: true, startIcon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {}), type: "button", size: "L", children: formatMessage({ id: "global.save", defaultMessage: "Save" }) }),
        title: transferTokenName || formatMessage({
          id: "Settings.transferTokens.createPage.title",
          defaultMessage: "Create Transfer Token"
        })
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .ContentLayout */ .s, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_11__/* .LoadingIndicatorPage */ .Bl, {}) })
  ] });
};



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