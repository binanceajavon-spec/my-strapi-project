"use strict";
(self["webpackChunkmy_strapi_project"] = self["webpackChunkmy_strapi_project"] || []).push([[5946],{

/***/ 25946
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProtectedEditPage: () => (/* binding */ ProtectedEditPage)
/* harmony export */ });
/* unused harmony export EditPage */
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
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7537);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5287);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(30893);
/* harmony import */ var _strapi_design_system_v2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(21610);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(59201);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(46270);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(61535);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(54894);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(71389);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(17703);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(12083);
/* harmony import */ var _index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(92129);
/* harmony import */ var _useAdminRoles_TJePFZ1V_mjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(68699);
/* harmony import */ var _Permissions_wG2AsKlz_mjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(47009);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(15126);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(63299);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(44633);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(59080);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(79275);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(14718);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(82437);
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(5790);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(35223);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(5409);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(74930);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(80219);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(48940);
/* harmony import */ var lodash_defaultsDeep__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(41286);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(33955);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(13426);
/* harmony import */ var lodash_isBoolean__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(84624);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(346);
/* harmony import */ var lodash_isNaN__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(54257);
/* harmony import */ var lodash_toNumber__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(48829);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(51187);
/* harmony import */ var lodash_upperFirst__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(39404);
/* harmony import */ var lodash_fp__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(58692);
/* harmony import */ var lodash_take__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(501);
/* harmony import */ var codemirror5__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(57646);
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(23120);
/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(44414);
/* harmony import */ var markdown_it_abbr__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(25962);
/* harmony import */ var markdown_it_container__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(14664);
/* harmony import */ var markdown_it_deflist__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(42588);
/* harmony import */ var markdown_it_emoji__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(90325);
/* harmony import */ var markdown_it_footnote__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(62785);
/* harmony import */ var markdown_it_ins__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(87443);
/* harmony import */ var markdown_it_mark__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(41032);
/* harmony import */ var markdown_it_sub__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(22957);
/* harmony import */ var markdown_it_sup__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(93179);
/* harmony import */ var highlight_js_styles_solarized_dark_css__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(73055);
/* harmony import */ var codemirror5_addon_display_placeholder__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(15747);
/* harmony import */ var lodash_toString__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(62925);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(26509);
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(32058);
/* harmony import */ var lodash_unset__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(81185);
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(4642);
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(78031);
/* harmony import */ var lodash_groupBy__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(94710);











































































const RoleForm = ({ disabled, role, values, errors, onChange, onBlur }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .a, { background: "neutral0", padding: 6, shadow: "filterShadow", hasRadius: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_9__/* .Flex */ .s, { direction: "column", alignItems: "stretch", gap: 4, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_9__/* .Flex */ .s, { justifyContent: "space-between", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .a, { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .a, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_12__/* .Typography */ .o, { fontWeight: "bold", children: role ? role.name : formatMessage({
          id: "global.details",
          defaultMessage: "Details"
        }) }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .a, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_12__/* .Typography */ .o, { textColor: "neutral500", variant: "pi", children: role ? role.description : formatMessage({
          id: "Settings.roles.form.description",
          defaultMessage: "Name and description of the role"
        }) }) })
      ] }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .$, { disabled: true, variant: "secondary", children: formatMessage(
        {
          id: "Settings.roles.form.button.users-with-role",
          defaultMessage: "{number, plural, =0 {# users} one {# user} other {# users}} with this role"
        },
        { number: role.usersCount }
      ) })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .Grid */ .x, { gap: 4, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .GridItem */ .E, { col: 6, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _strapi_design_system__WEBPACK_IMPORTED_MODULE_10__/* .TextInput */ .k,
        {
          disabled,
          name: "name",
          error: errors.name && formatMessage({ id: errors.name }),
          label: formatMessage({
            id: "global.name",
            defaultMessage: "Name"
          }),
          onChange,
          onBlur,
          required: true,
          value: values.name || ""
        }
      ) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .GridItem */ .E, { col: 6, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _strapi_design_system__WEBPACK_IMPORTED_MODULE_11__/* .Textarea */ .T,
        {
          disabled,
          label: formatMessage({
            id: "global.description",
            defaultMessage: "Description"
          }),
          id: "description",
          error: errors.name && formatMessage({ id: errors.name }),
          onChange,
          onBlur,
          children: values.description || ""
        }
      ) })
    ] })
  ] }) });
};
const EDIT_ROLE_SCHEMA = yup__WEBPACK_IMPORTED_MODULE_20__/* .object */ .Ik().shape({
  name: yup__WEBPACK_IMPORTED_MODULE_20__/* .string */ .Yj().required(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .translatedErrors */ .iW.required),
  description: yup__WEBPACK_IMPORTED_MODULE_20__/* .string */ .Yj().optional()
});
const EditPage = () => {
  const toggleNotification = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .useNotification */ .hN)();
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A)();
  const match = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_19__/* .useRouteMatch */ .W5)("/settings/roles/:id");
  const id = match?.params.id;
  const permissionsRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);
  const { lockApp, unlockApp } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .useOverlayBlocker */ .MA)();
  const { trackUsage } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .useTracking */ .z1)();
  const {
    _unstableFormatAPIError: formatAPIError,
    _unstableFormatValidationErrors: formatValidationErrors
  } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .useAPIErrorHandler */ .wq)();
  const { isLoading: isLoadingPermissionsLayout, data: permissionsLayout } = (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_21__.A)({
    /**
     * Role here is a query param so if there's no role we pass an empty string
     * which returns us a default layout.
     */
    role: id ?? ""
  });
  const {
    roles,
    isLoading: isRoleLoading,
    refetch: refetchRole
  } = (0,_useAdminRoles_TJePFZ1V_mjs__WEBPACK_IMPORTED_MODULE_22__.u)(
    { id },
    {
      refetchOnMountOrArgChange: true
    }
  );
  const role = roles[0] ?? {};
  const { data: permissions, isLoading: isLoadingPermissions } = (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_21__.B)(
    {
      id
    },
    {
      skip: !id,
      refetchOnMountOrArgChange: true
    }
  );
  const [updateRole] = (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_21__.G)();
  const [updateRolePermissions] = (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_21__.E)();
  if (!id) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__/* .Redirect */ .rd, { to: "/settings/roles" });
  }
  const handleEditRoleSubmit = async (data, formik) => {
    try {
      lockApp();
      const { permissionsToSend, didUpdateConditions } = permissionsRef.current?.getPermissions() ?? {};
      const res = await updateRole({
        id,
        ...data
      });
      if ("error" in res) {
        if ((0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_21__.x)(res.error) && res.error.name === "ValidationError") {
          formik.setErrors(formatValidationErrors(res.error));
        } else {
          toggleNotification({
            type: "warning",
            message: formatAPIError(res.error)
          });
        }
        return;
      }
      if (role.code !== "strapi-super-admin" && permissionsToSend) {
        const updateRes = await updateRolePermissions({
          id: res.data.id,
          permissions: permissionsToSend
        });
        if ("error" in updateRes) {
          if ((0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_21__.x)(updateRes.error) && updateRes.error.name === "ValidationError") {
            formik.setErrors(formatValidationErrors(updateRes.error));
          } else {
            toggleNotification({
              type: "warning",
              message: formatAPIError(updateRes.error)
            });
          }
          return;
        }
        if (didUpdateConditions) {
          trackUsage("didUpdateConditions");
        }
      }
      permissionsRef.current?.setFormAfterSubmit();
      await refetchRole();
      toggleNotification({
        type: "success",
        message: { id: "notification.success.saved" }
      });
    } catch (error) {
      toggleNotification({
        type: "warning",
        message: { id: "notification.error" }
      });
    } finally {
      unlockApp();
    }
  };
  const isFormDisabled = !isRoleLoading && role.code === "strapi-super-admin";
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .Main */ .g, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .SettingsPageTitle */ .x7, { name: "Roles" }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      formik__WEBPACK_IMPORTED_MODULE_16__/* .Formik */ .l1,
      {
        enableReinitialize: true,
        initialValues: {
          name: role.name ?? "",
          description: role.description ?? ""
        },
        onSubmit: handleEditRoleSubmit,
        validationSchema: EDIT_ROLE_SCHEMA,
        validateOnChange: false,
        children: ({ handleSubmit, values, errors, handleChange, handleBlur, isSubmitting }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", { onSubmit: handleSubmit, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .HeaderLayout */ .Q,
            {
              primaryAction: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_9__/* .Flex */ .s, { gap: 2, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .$,
                {
                  type: "submit",
                  disabled: role.code === "strapi-super-admin",
                  loading: isSubmitting,
                  size: "L",
                  children: formatMessage({
                    id: "global.save",
                    defaultMessage: "Save"
                  })
                }
              ) }),
              title: formatMessage({
                id: "Settings.roles.edit.title",
                defaultMessage: "Edit a role"
              }),
              subtitle: formatMessage({
                id: "Settings.roles.create.description",
                defaultMessage: "Define the rights given to the role"
              }),
              navigationAction: (
                // @ts-expect-error – the props from the component passed as `as` are not correctly inferred.
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system_v2__WEBPACK_IMPORTED_MODULE_13__/* .Link */ .N, { as: react_router_dom__WEBPACK_IMPORTED_MODULE_18__/* .NavLink */ .k2, startIcon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {}), to: "/settings/roles", children: formatMessage({
                  id: "global.back",
                  defaultMessage: "Back"
                }) })
              )
            }
          ),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .ContentLayout */ .s, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_9__/* .Flex */ .s, { direction: "column", alignItems: "stretch", gap: 6, children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              RoleForm,
              {
                disabled: isFormDisabled,
                errors,
                values,
                onChange: handleChange,
                onBlur: handleBlur,
                role
              }
            ),
            !isLoadingPermissionsLayout && !isRoleLoading && !isLoadingPermissions && permissionsLayout ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .a, { shadow: "filterShadow", hasRadius: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _Permissions_wG2AsKlz_mjs__WEBPACK_IMPORTED_MODULE_23__.P,
              {
                isFormDisabled,
                permissions,
                ref: permissionsRef,
                layout: permissionsLayout
              }
            ) }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .a, { background: "neutral0", padding: 6, shadow: "filterShadow", hasRadius: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .LoadingIndicatorPage */ .Bl, {}) })
          ] }) })
        ] })
      }
    )
  ] });
};
const ProtectedEditPage = () => {
  const permissions = (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_21__.j)((state) => state.admin_app.permissions.settings?.roles);
  const {
    isLoading,
    allowedActions: { canRead, canUpdate }
  } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .useRBAC */ .ec)(permissions);
  if (isLoading) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_14__/* .LoadingIndicatorPage */ .Bl, {});
  }
  if (!canRead && !canUpdate) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__/* .Redirect */ .rd, { to: "/" });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(EditPage, {});
};



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



/***/ }

}]);