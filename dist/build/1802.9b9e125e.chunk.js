"use strict";
(self["webpackChunkmy_strapi_project"] = self["webpackChunkmy_strapi_project"] || []).push([[1802],{

/***/ 1802
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ProtectedListPage: () => (/* binding */ ProtectedListPage)
});

// UNUSED EXPORTS: ListPage

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(69751);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(21272);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/LiveRegions/useNotifyAT.mjs
var useNotifyAT = __webpack_require__(11273);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/Layout.mjs
var Layout = __webpack_require__(42455);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.mjs
var Main = __webpack_require__(38413);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.mjs + 2 modules
var HeaderLayout = __webpack_require__(55356);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ActionLayout.mjs
var ActionLayout = __webpack_require__(74773);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.mjs + 2 modules
var Typography = __webpack_require__(30893);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.mjs
var Button = __webpack_require__(85963);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.mjs
var ContentLayout = __webpack_require__(4198);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.mjs
var Box = __webpack_require__(94061);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Table.mjs
var Table = __webpack_require__(35513);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/TFooter.mjs
var TFooter = __webpack_require__(40216);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Thead.mjs
var Thead = __webpack_require__(26127);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tr.mjs
var Tr = __webpack_require__(90361);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Cell.mjs
var Cell = __webpack_require__(33363);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/BaseCheckbox/BaseCheckbox.mjs + 2 modules
var BaseCheckbox = __webpack_require__(50215);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/VisuallyHidden/VisuallyHidden.mjs
var VisuallyHidden = __webpack_require__(98765);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tbody.mjs
var Tbody = __webpack_require__(25641);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.mjs
var Flex = __webpack_require__(83997);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var react_jsx_runtime = __webpack_require__(92132);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(47610);
;// ./node_modules/@strapi/design-system/dist/Switch/Switch.mjs





const SwitchContent = styled_components_browser_esm/* default */.Ay.div`
  background: ${({ theme }) => theme.colors.danger500};
  border: none;
  border-radius: 16px;
  position: relative;
  height: ${24 / 16}rem;
  width: ${40 / 16}rem;

  & span {
    font-size: ${({ visibleLabels }) => visibleLabels ? "1rem" : 0};
  }

  &:before {
    content: '';
    background: ${({ theme }) => theme.colors.neutral0};
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    transition: all 0.5s;
    left: ${({ theme }) => theme.spaces[1]};
    top: ${({ theme }) => theme.spaces[1]};
  }

  @media (prefers-reduced-motion: reduce) {
    &:before {
      transition: none;
    }
  }
`;
const SwitchButton = styled_components_browser_esm/* default */.Ay.button`
  background: transparent;
  padding: 0;
  border: none;

  &[aria-checked='true'] ${SwitchContent} {
    background: ${({ theme }) => theme.colors.success500};
  }

  &[aria-checked='true'] ${SwitchContent}:before {
    transform: translateX(1rem);
  }
`;
const Switch = react.forwardRef(({ label, onChange, onLabel = "On", offLabel = "Off", selected, visibleLabels = false, ...props }, ref) => {
  return (0,react_jsx_runtime.jsx)(SwitchButton, { ref, role: "switch", "aria-checked": selected, "aria-label": label, onClick: onChange, visibleLabels, type: "button", ...props, children: (0,react_jsx_runtime.jsxs)(Flex/* Flex */.s, { children: [(0,react_jsx_runtime.jsxs)(SwitchContent, { children: [(0,react_jsx_runtime.jsx)("span", { children: onLabel }), (0,react_jsx_runtime.jsx)("span", { children: offLabel })] }), visibleLabels && (0,react_jsx_runtime.jsx)(Box/* Box */.a, { as: "span", "aria-hidden": true, paddingLeft: 2, color: selected ? "success600" : "danger600", children: selected ? onLabel : offLabel })] }) });
});


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/IconButton/IconButton.mjs
var IconButton = __webpack_require__(88353);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/EmptyStateLayout/EmptyStateLayout.mjs
var EmptyStateLayout = __webpack_require__(53563);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/LinkButton/LinkButton.mjs
var LinkButton = __webpack_require__(49654);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/dist/index.mjs + 63 modules
var dist = __webpack_require__(59201);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Plus.mjs
var Plus = __webpack_require__(5194);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Trash.mjs
var Trash = __webpack_require__(50612);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Pencil.mjs
var Pencil = __webpack_require__(41909);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/EmptyDocuments.mjs
var EmptyDocuments = __webpack_require__(36481);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(54894);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(17703);
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(71389);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/dist/_chunks/index-dMS-26Ft.mjs + 95 modules
var index_dMS_26Ft = __webpack_require__(92129);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/dist/_chunks/useWebhooks-tlVKrkap.mjs
var useWebhooks_tlVKrkap = __webpack_require__(13210);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(15126);
// EXTERNAL MODULE: ./node_modules/invariant/browser.js
var browser = __webpack_require__(63299);
// EXTERNAL MODULE: ./node_modules/lodash/isFunction.js
var isFunction = __webpack_require__(44633);
// EXTERNAL MODULE: ./node_modules/lodash/merge.js
var merge = __webpack_require__(59080);
// EXTERNAL MODULE: ./node_modules/lodash/pick.js
var pick = __webpack_require__(79275);
// EXTERNAL MODULE: ./node_modules/react-helmet/es/Helmet.js
var Helmet = __webpack_require__(14718);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 14 modules
var es = __webpack_require__(82437);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(61535);
// EXTERNAL MODULE: ./node_modules/lodash/camelCase.js
var camelCase = __webpack_require__(5790);
// EXTERNAL MODULE: ./node_modules/yup/es/index.js + 26 modules
var yup_es = __webpack_require__(12083);
// EXTERNAL MODULE: ./node_modules/lodash/omit.js
var omit = __webpack_require__(35223);
// EXTERNAL MODULE: ./node_modules/qs/lib/index.js
var lib = __webpack_require__(5409);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var react_query_es = __webpack_require__(74930);
// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(80219);
// EXTERNAL MODULE: ./node_modules/lodash/set.js
var set = __webpack_require__(48940);
// EXTERNAL MODULE: ./node_modules/lodash/defaultsDeep.js
var defaultsDeep = __webpack_require__(41286);
// EXTERNAL MODULE: ./node_modules/lodash/isEqual.js
var isEqual = __webpack_require__(33955);
// EXTERNAL MODULE: ./node_modules/lodash/throttle.js
var throttle = __webpack_require__(13426);
// EXTERNAL MODULE: ./node_modules/lodash/isBoolean.js
var isBoolean = __webpack_require__(84624);
// EXTERNAL MODULE: ./node_modules/lodash/isEmpty.js
var isEmpty = __webpack_require__(346);
// EXTERNAL MODULE: ./node_modules/lodash/isNaN.js
var lodash_isNaN = __webpack_require__(54257);
// EXTERNAL MODULE: ./node_modules/lodash/toNumber.js
var toNumber = __webpack_require__(48829);
// EXTERNAL MODULE: ./node_modules/lodash/cloneDeep.js
var cloneDeep = __webpack_require__(51187);
// EXTERNAL MODULE: ./node_modules/lodash/upperFirst.js
var upperFirst = __webpack_require__(39404);
// EXTERNAL MODULE: ./node_modules/lodash/fp.js
var fp = __webpack_require__(58692);
// EXTERNAL MODULE: ./node_modules/lodash/take.js
var take = __webpack_require__(501);
// EXTERNAL MODULE: ./node_modules/codemirror5/lib/codemirror.js
var codemirror = __webpack_require__(57646);
// EXTERNAL MODULE: ./node_modules/highlight.js/lib/index.js
var highlight_js_lib = __webpack_require__(23120);
// EXTERNAL MODULE: ./node_modules/markdown-it/index.js
var markdown_it = __webpack_require__(44414);
// EXTERNAL MODULE: ./node_modules/markdown-it-abbr/index.js
var markdown_it_abbr = __webpack_require__(25962);
// EXTERNAL MODULE: ./node_modules/markdown-it-container/index.js
var markdown_it_container = __webpack_require__(14664);
// EXTERNAL MODULE: ./node_modules/markdown-it-deflist/index.js
var markdown_it_deflist = __webpack_require__(42588);
// EXTERNAL MODULE: ./node_modules/markdown-it-emoji/index.js
var markdown_it_emoji = __webpack_require__(90325);
// EXTERNAL MODULE: ./node_modules/markdown-it-footnote/index.js
var markdown_it_footnote = __webpack_require__(62785);
// EXTERNAL MODULE: ./node_modules/markdown-it-ins/index.js
var markdown_it_ins = __webpack_require__(87443);
// EXTERNAL MODULE: ./node_modules/markdown-it-mark/index.js
var markdown_it_mark = __webpack_require__(41032);
// EXTERNAL MODULE: ./node_modules/markdown-it-sub/index.js
var markdown_it_sub = __webpack_require__(22957);
// EXTERNAL MODULE: ./node_modules/markdown-it-sup/index.js
var markdown_it_sup = __webpack_require__(93179);
// EXTERNAL MODULE: ./node_modules/highlight.js/styles/solarized-dark.css
var solarized_dark = __webpack_require__(73055);
// EXTERNAL MODULE: ./node_modules/codemirror5/addon/display/placeholder.js
var placeholder = __webpack_require__(15747);
// EXTERNAL MODULE: ./node_modules/lodash/toString.js
var lodash_toString = __webpack_require__(62925);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(26509);
// EXTERNAL MODULE: ./node_modules/lodash/uniqBy.js
var uniqBy = __webpack_require__(32058);
// EXTERNAL MODULE: ./node_modules/lodash/unset.js
var unset = __webpack_require__(81185);
// EXTERNAL MODULE: ./node_modules/lodash/isArray.js
var isArray = __webpack_require__(4642);
;// ./node_modules/@strapi/admin/dist/_chunks/ListPage-rKtl7kt1.mjs








































































const ListPage = () => {
  const [showModal, setShowModal] = react.useState(false);
  const [isDeleting, setIsDeleting] = react.useState(false);
  const [webhooksToDelete, setWebhooksToDelete] = react.useState([]);
  const permissions = (0,index_dMS_26Ft.j)((state) => state.admin_app.permissions.settings?.webhooks);
  const { formatMessage } = (0,useIntl/* default */.A)();
  const { _unstableFormatAPIError: formatAPIError } = (0,dist/* useAPIErrorHandler */.wq)();
  const toggleNotification = (0,dist/* useNotification */.hN)();
  (0,dist/* useFocusWhenNavigate */.L4)();
  const { push } = (0,react_router/* useHistory */.W6)();
  const { pathname } = (0,react_router/* useLocation */.zy)();
  const {
    isLoading: isRBACLoading,
    allowedActions: { canCreate, canUpdate, canDelete }
  } = (0,dist/* useRBAC */.ec)(permissions);
  const { notifyStatus } = (0,useNotifyAT/* useNotifyAT */.W)();
  const {
    isLoading: isWebhooksLoading,
    webhooks,
    error: webhooksError,
    updateWebhook,
    deleteManyWebhooks
  } = (0,useWebhooks_tlVKrkap.u)();
  react.useEffect(() => {
    if (webhooksError) {
      toggleNotification({
        type: "warning",
        message: formatAPIError(webhooksError)
      });
      return;
    }
    if (webhooks) {
      notifyStatus(
        formatMessage({
          id: "Settings.webhooks.list.loading.success",
          defaultMessage: "Webhooks have been loaded"
        })
      );
    }
  }, [webhooks, webhooksError, toggleNotification, formatMessage, notifyStatus, formatAPIError]);
  const enableWebhook = async (body) => {
    try {
      const res = await updateWebhook(body);
      if ("error" in res) {
        toggleNotification({
          type: "warning",
          message: formatAPIError(res.error)
        });
      }
    } catch {
      toggleNotification({
        type: "warning",
        message: {
          id: "notification.error",
          defaultMessage: "An error occurred"
        }
      });
    }
  };
  const confirmDelete = async () => {
    try {
      setIsDeleting(true);
      const res = await deleteManyWebhooks({
        ids: webhooksToDelete
      });
      if ("error" in res) {
        toggleNotification({
          type: "warning",
          message: formatAPIError(res.error)
        });
        return;
      }
      setWebhooksToDelete([]);
    } catch {
      toggleNotification({
        type: "warning",
        message: {
          id: "notification.error",
          defaultMessage: "An error occurred"
        }
      });
    } finally {
      setIsDeleting(false);
      setShowModal(false);
    }
  };
  const selectAllCheckbox = (selected) => selected ? setWebhooksToDelete(webhooks?.map((webhook) => webhook.id) ?? []) : setWebhooksToDelete([]);
  const selectOneCheckbox = (selected, id) => selected ? setWebhooksToDelete((prev) => [...prev, id]) : setWebhooksToDelete((prev) => prev.filter((webhookId) => webhookId !== id));
  const goTo = (to) => () => push(`${pathname}/${to}`);
  const isLoading = isRBACLoading || isWebhooksLoading;
  const numberOfWebhooks = webhooks?.length ?? 0;
  const webhooksToDeleteLength = webhooksToDelete.length;
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)(Layout/* Layout */.P, { children: [
    /* @__PURE__ */ (0,jsx_runtime.jsx)(dist/* SettingsPageTitle */.x7, { name: "Webhooks" }),
    /* @__PURE__ */ (0,jsx_runtime.jsxs)(Main/* Main */.g, { "aria-busy": isLoading, children: [
      /* @__PURE__ */ (0,jsx_runtime.jsx)(
        HeaderLayout/* HeaderLayout */.Q,
        {
          title: formatMessage({ id: "Settings.webhooks.title", defaultMessage: "Webhooks" }),
          subtitle: formatMessage({
            id: "Settings.webhooks.list.description",
            defaultMessage: "Get POST changes notifications"
          }),
          primaryAction: canCreate && !isLoading && /* @__PURE__ */ (0,jsx_runtime.jsx)(
            LinkButton/* LinkButton */.z,
            {
              as: react_router_dom/* NavLink */.k2,
              startIcon: /* @__PURE__ */ (0,jsx_runtime.jsx)(Plus/* default */.A, {}),
              variant: "default",
              to: `${pathname}/create`,
              size: "S",
              children: formatMessage({
                id: "Settings.webhooks.list.button.add",
                defaultMessage: "Create new webhook"
              })
            }
          )
        }
      ),
      webhooksToDeleteLength > 0 && canDelete && /* @__PURE__ */ (0,jsx_runtime.jsx)(
        ActionLayout/* ActionLayout */.B,
        {
          startActions: /* @__PURE__ */ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [
            /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.o, { variant: "epsilon", textColor: "neutral600", children: formatMessage(
              {
                id: "Settings.webhooks.to.delete",
                defaultMessage: "{webhooksToDeleteLength, plural, one {# webhook} other {# webhooks}} selected"
              },
              { webhooksToDeleteLength }
            ) }),
            /* @__PURE__ */ (0,jsx_runtime.jsx)(
              Button/* Button */.$,
              {
                onClick: () => setShowModal(true),
                startIcon: /* @__PURE__ */ (0,jsx_runtime.jsx)(Trash/* default */.A, {}),
                size: "L",
                variant: "danger-light",
                children: formatMessage({
                  id: "global.delete",
                  defaultMessage: "Delete"
                })
              }
            )
          ] })
        }
      ),
      /* @__PURE__ */ (0,jsx_runtime.jsx)(ContentLayout/* ContentLayout */.s, { children: isLoading ? /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* Box */.a, { background: "neutral0", padding: 6, shadow: "filterShadow", hasRadius: true, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(dist/* LoadingIndicatorPage */.Bl, {}) }) : numberOfWebhooks > 0 ? /* @__PURE__ */ (0,jsx_runtime.jsxs)(
        Table/* Table */.X,
        {
          colCount: 5,
          rowCount: numberOfWebhooks + 1,
          footer: /* @__PURE__ */ (0,jsx_runtime.jsx)(TFooter/* TFooter */.S, { onClick: goTo("create"), icon: /* @__PURE__ */ (0,jsx_runtime.jsx)(Plus/* default */.A, {}), children: formatMessage({
            id: "Settings.webhooks.list.button.add",
            defaultMessage: "Create new webhook"
          }) }),
          children: [
            /* @__PURE__ */ (0,jsx_runtime.jsx)(Thead/* Thead */.d, { children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(Tr.Tr, { children: [
              /* @__PURE__ */ (0,jsx_runtime.jsx)(Cell.Th, { children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
                BaseCheckbox/* BaseCheckbox */.J,
                {
                  "aria-label": formatMessage({
                    id: "global.select-all-entries",
                    defaultMessage: "Select all entries"
                  }),
                  indeterminate: webhooksToDeleteLength > 0 && webhooksToDeleteLength < numberOfWebhooks,
                  value: webhooksToDeleteLength === numberOfWebhooks,
                  onValueChange: selectAllCheckbox
                }
              ) }),
              /* @__PURE__ */ (0,jsx_runtime.jsx)(Cell.Th, { width: "20%", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.o, { variant: "sigma", textColor: "neutral600", children: formatMessage({
                id: "global.name",
                defaultMessage: "Name"
              }) }) }),
              /* @__PURE__ */ (0,jsx_runtime.jsx)(Cell.Th, { width: "60%", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.o, { variant: "sigma", textColor: "neutral600", children: formatMessage({
                id: "Settings.webhooks.form.url",
                defaultMessage: "URL"
              }) }) }),
              /* @__PURE__ */ (0,jsx_runtime.jsx)(Cell.Th, { width: "20%", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.o, { variant: "sigma", textColor: "neutral600", children: formatMessage({
                id: "Settings.webhooks.list.th.status",
                defaultMessage: "Status"
              }) }) }),
              /* @__PURE__ */ (0,jsx_runtime.jsx)(Cell.Th, { children: /* @__PURE__ */ (0,jsx_runtime.jsx)(VisuallyHidden/* VisuallyHidden */.s, { children: formatMessage({
                id: "Settings.webhooks.list.th.actions",
                defaultMessage: "Actions"
              }) }) })
            ] }) }),
            /* @__PURE__ */ (0,jsx_runtime.jsx)(Tbody/* Tbody */.N, { children: webhooks?.map((webhook) => /* @__PURE__ */ (0,jsx_runtime.jsxs)(
              Tr.Tr,
              {
                onClick: canUpdate ? goTo(webhook.id) : void 0,
                style: { cursor: canUpdate ? "pointer" : "default" },
                children: [
                  /* @__PURE__ */ (0,jsx_runtime.jsx)(Cell.Td, { onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
                    BaseCheckbox/* BaseCheckbox */.J,
                    {
                      "aria-label": `${formatMessage({
                        id: "global.select",
                        defaultMessage: "Select"
                      })} ${webhook.name}`,
                      value: webhooksToDelete?.includes(webhook.id),
                      onValueChange: (selected) => selectOneCheckbox(selected, webhook.id),
                      name: "select"
                    }
                  ) }),
                  /* @__PURE__ */ (0,jsx_runtime.jsx)(Cell.Td, { children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.o, { fontWeight: "semiBold", textColor: "neutral800", children: webhook.name }) }),
                  /* @__PURE__ */ (0,jsx_runtime.jsx)(Cell.Td, { children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.o, { textColor: "neutral800", children: webhook.url }) }),
                  /* @__PURE__ */ (0,jsx_runtime.jsx)(Cell.Td, { children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Flex/* Flex */.s, { children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
                    Switch,
                    {
                      onLabel: formatMessage({
                        id: "global.enabled",
                        defaultMessage: "Enabled"
                      }),
                      offLabel: formatMessage({
                        id: "global.disabled",
                        defaultMessage: "Disabled"
                      }),
                      label: `${webhook.name} ${formatMessage({
                        id: "Settings.webhooks.list.th.status",
                        defaultMessage: "Status"
                      })}`,
                      selected: webhook.isEnabled,
                      onChange: (e) => {
                        e.stopPropagation();
                        enableWebhook({
                          ...webhook,
                          isEnabled: !webhook.isEnabled
                        });
                      },
                      visibleLabels: true
                    }
                  ) }) }),
                  /* @__PURE__ */ (0,jsx_runtime.jsx)(Cell.Td, { children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(Flex/* Flex */.s, { gap: 1, children: [
                    canUpdate && /* @__PURE__ */ (0,jsx_runtime.jsx)(
                      IconButton/* IconButton */.K,
                      {
                        label: formatMessage({
                          id: "Settings.webhooks.events.update",
                          defaultMessage: "Update"
                        }),
                        icon: /* @__PURE__ */ (0,jsx_runtime.jsx)(Pencil/* default */.A, {}),
                        noBorder: true
                      }
                    ),
                    canDelete && /* @__PURE__ */ (0,jsx_runtime.jsx)(
                      IconButton/* IconButton */.K,
                      {
                        onClick: (e) => {
                          e.stopPropagation();
                          setWebhooksToDelete([webhook.id]);
                          setShowModal(true);
                        },
                        label: formatMessage({
                          id: "Settings.webhooks.events.delete",
                          defaultMessage: "Delete webhook"
                        }),
                        icon: /* @__PURE__ */ (0,jsx_runtime.jsx)(Trash/* default */.A, {}),
                        noBorder: true
                      }
                    )
                  ] }) })
                ]
              },
              webhook.id
            )) })
          ]
        }
      ) : /* @__PURE__ */ (0,jsx_runtime.jsx)(
        EmptyStateLayout/* EmptyStateLayout */.p,
        {
          icon: /* @__PURE__ */ (0,jsx_runtime.jsx)(EmptyDocuments/* default */.A, { width: "160px" }),
          content: formatMessage({
            id: "Settings.webhooks.list.empty.description",
            defaultMessage: "No webhooks found"
          }),
          action: /* @__PURE__ */ (0,jsx_runtime.jsx)(
            Button/* Button */.$,
            {
              variant: "secondary",
              startIcon: /* @__PURE__ */ (0,jsx_runtime.jsx)(Plus/* default */.A, {}),
              disabled: !canCreate,
              onClick: canCreate ? goTo("create") : void 0,
              children: formatMessage({
                id: "Settings.webhooks.list.button.add",
                defaultMessage: "Create new webhook"
              })
            }
          )
        }
      ) })
    ] }),
    /* @__PURE__ */ (0,jsx_runtime.jsx)(
      dist/* ConfirmDialog */.TM,
      {
        isOpen: showModal,
        onToggleDialog: () => setShowModal((prev) => !prev),
        onConfirm: confirmDelete,
        isConfirmButtonLoading: isDeleting
      }
    )
  ] });
};
const ProtectedListPage = () => {
  const permissions = (0,index_dMS_26Ft.j)(
    (state) => state.admin_app.permissions.settings?.webhooks.main
  );
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(dist/* CheckPagePermissions */.kz, { permissions, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(ListPage, {}) });
};



/***/ },

/***/ 13210
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ useWebhooks)
/* harmony export */ });
/* harmony import */ var _index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92129);

const webhooksSerivce = _index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_0__.n.injectEndpoints({
  endpoints: (builder) => ({
    getWebhooks: builder.query({
      query: (args) => ({
        url: `/admin/webhooks/${args?.id ?? ""}`,
        method: "GET"
      }),
      transformResponse: (response) => {
        if (Array.isArray(response.data)) {
          return response.data;
        } else {
          return [response.data];
        }
      },
      providesTags: (res, _err, arg) => {
        if (typeof arg === "object" && "id" in arg) {
          return [{ type: "Webhook", id: arg.id }];
        } else {
          return [
            ...res?.map(({ id }) => ({ type: "Webhook", id })) ?? [],
            { type: "Webhook", id: "LIST" }
          ];
        }
      }
    }),
    createWebhook: builder.mutation({
      query: (body) => ({
        url: `/admin/webhooks`,
        method: "POST",
        data: body
      }),
      transformResponse: (response) => response.data,
      invalidatesTags: [{ type: "Webhook", id: "LIST" }]
    }),
    updateWebhook: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/admin/webhooks/${id}`,
        method: "PUT",
        data: body
      }),
      transformResponse: (response) => response.data,
      invalidatesTags: (_res, _err, { id }) => [{ type: "Webhook", id }]
    }),
    triggerWebhook: builder.mutation({
      query: (webhookId) => ({
        url: `/admin/webhooks/${webhookId}/trigger`,
        method: "POST"
      }),
      transformResponse: (response) => response.data
    }),
    deleteManyWebhooks: builder.mutation({
      query: (body) => ({
        url: `/admin/webhooks/batch-delete`,
        method: "POST",
        data: body
      }),
      transformResponse: (response) => response.data,
      invalidatesTags: (_res, _err, { ids }) => ids.map((id) => ({ type: "Webhook", id }))
    })
  }),
  overrideExisting: false
});
const {
  useGetWebhooksQuery,
  useCreateWebhookMutation,
  useUpdateWebhookMutation,
  useTriggerWebhookMutation,
  useDeleteManyWebhooksMutation
} = webhooksSerivce;
const useWebhooks = (args = void 0, queryArgs) => {
  const { data: webhooks, isLoading, error } = useGetWebhooksQuery(args, queryArgs);
  const [createWebhook] = useCreateWebhookMutation();
  const [updateWebhook] = useUpdateWebhookMutation();
  const [triggerWebhook] = useTriggerWebhookMutation();
  const [deleteManyWebhooks] = useDeleteManyWebhooksMutation();
  return {
    webhooks,
    isLoading,
    error,
    createWebhook,
    updateWebhook,
    triggerWebhook,
    deleteManyWebhooks
  };
};



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