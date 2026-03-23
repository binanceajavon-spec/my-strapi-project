"use strict";
(self["webpackChunkmy_strapi_project"] = self["webpackChunkmy_strapi_project"] || []).push([[4051,9500],{

/***/ 19500
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProtectedCreatePage: () => (/* binding */ ProtectedCreatePage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69751);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59201);
/* harmony import */ var _index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92129);
/* harmony import */ var _AuthenticatedApp_uHd_MPEB_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38682);
/* harmony import */ var _EditPage_qDZC_xqv_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84051);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15126);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63299);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(44633);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(59080);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(79275);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(14718);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(21272);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(82437);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(61535);
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5790);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(12083);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(35223);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(5409);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(74930);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(80219);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(48940);
/* harmony import */ var lodash_defaultsDeep__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(41286);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(33955);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(13426);
/* harmony import */ var lodash_isBoolean__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(84624);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(346);
/* harmony import */ var lodash_isNaN__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(54257);
/* harmony import */ var lodash_toNumber__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(48829);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(51187);
/* harmony import */ var lodash_upperFirst__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(39404);
/* harmony import */ var lodash_fp__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(58692);
/* harmony import */ var lodash_take__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(501);
/* harmony import */ var codemirror5__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(57646);
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(23120);
/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(44414);
/* harmony import */ var markdown_it_abbr__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(25962);
/* harmony import */ var markdown_it_container__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(14664);
/* harmony import */ var markdown_it_deflist__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(42588);
/* harmony import */ var markdown_it_emoji__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(90325);
/* harmony import */ var markdown_it_footnote__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(62785);
/* harmony import */ var markdown_it_ins__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(87443);
/* harmony import */ var markdown_it_mark__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(41032);
/* harmony import */ var markdown_it_sub__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(22957);
/* harmony import */ var markdown_it_sup__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(93179);
/* harmony import */ var highlight_js_styles_solarized_dark_css__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(73055);
/* harmony import */ var codemirror5_addon_display_placeholder__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(15747);
/* harmony import */ var lodash_toString__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(62925);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(26509);
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(32058);
/* harmony import */ var lodash_unset__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(81185);
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(4642);
/* harmony import */ var semver_functions_lt__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(55151);
/* harmony import */ var semver_functions_valid__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(79077);
/* harmony import */ var _useContentTypes_J1YsHDXc_mjs__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(71961);
/* harmony import */ var _useWebhooks_tlVKrkap_mjs__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(13210);













































































const ProtectedCreatePage = () => {
  const permissions = (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_2__.j)(_AuthenticatedApp_uHd_MPEB_mjs__WEBPACK_IMPORTED_MODULE_3__.s);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .CheckPagePermissions */ .kz, { permissions: permissions.settings?.webhooks.create, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_EditPage_qDZC_xqv_mjs__WEBPACK_IMPORTED_MODULE_4__.E, {}) });
};



/***/ },

/***/ 84051
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ EditPage),
/* harmony export */   a: () => (/* binding */ Events),
/* harmony export */   b: () => (/* binding */ EditPage$1)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69751);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21272);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50215);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94061);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85963);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4181);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(76517);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80782);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8361);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(90151);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(68074);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4198);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(55356);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(43064);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(38413);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(46462);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(81621);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(66809);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(379);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(84843);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(83997);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(18629);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(7537);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(30893);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(98765);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(59201);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(71389);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(17703);
/* harmony import */ var _index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(92129);
/* harmony import */ var _useContentTypes_J1YsHDXc_mjs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(71961);
/* harmony import */ var _AuthenticatedApp_uHd_MPEB_mjs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(38682);
/* harmony import */ var _strapi_design_system_v2__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(21610);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(46270);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(54514);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(68802);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(84795);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(98052);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(5194);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(61535);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(54894);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(12083);
/* harmony import */ var _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(89032);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(47610);
/* harmony import */ var _useWebhooks_tlVKrkap_mjs__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(13210);
















const [WebhookEventProvider, useWebhookEvent] = (0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_41__/* .createContext */ .q)("WebhookEvent");
const EventsRoot = ({ children }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_39__/* ["default"] */ .A)();
  const { collectionTypes, isLoading } = (0,_useContentTypes_J1YsHDXc_mjs__WEBPACK_IMPORTED_MODULE_29__.u)();
  const isDraftAndPublish = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(
    () => collectionTypes.some((ct) => ct.options?.draftAndPublish === true),
    [collectionTypes]
  );
  const label = formatMessage({
    id: "Settings.webhooks.form.events",
    defaultMessage: "Events"
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(WebhookEventProvider, { isDraftAndPublish, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_20__/* .Flex */ .s, { direction: "column", alignItems: "stretch", gap: 1, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .FieldLabel */ .d, { "aria-hidden": true, children: label }),
    isLoading && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_13__/* .Loader */ .a, { children: formatMessage({
      id: "Settings.webhooks.events.isLoading",
      defaultMessage: "Events loading"
    }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledTable, { "aria-label": label, children })
  ] }) });
};
const StyledTable = (0,styled_components__WEBPACK_IMPORTED_MODULE_42__/* ["default"] */ .Ay)((0,_strapi_design_system__WEBPACK_IMPORTED_MODULE_15__/* .RawTable */ .X))`
  tbody tr:nth-child(odd) {
    background: ${({ theme }) => theme.colors.neutral100};
  }

  thead th span {
    color: ${({ theme }) => theme.colors.neutral500};
  }

  td,
  th {
    padding-block-start: ${({ theme }) => theme.spaces[3]};
    padding-block-end: ${({ theme }) => theme.spaces[3]};
    width: 10%;
    vertical-align: middle;
    text-align: center;
  }

  tbody tr td:first-child {
    /**
     * Add padding to the start of the first column to avoid the checkbox appearing
     * too close to the edge of the table
     */
    padding-inline-start: ${({ theme }) => theme.spaces[2]};
  }
`;
const getCEHeaders = (isDraftAndPublish) => {
  const headers = [
    { id: "Settings.webhooks.events.create", defaultMessage: "Create" },
    { id: "Settings.webhooks.events.update", defaultMessage: "Update" },
    { id: "app.utils.delete", defaultMessage: "Delete" }
  ];
  if (isDraftAndPublish) {
    headers.push({ id: "app.utils.publish", defaultMessage: "Publish" });
    headers.push({ id: "app.utils.unpublish", defaultMessage: "Unpublish" });
  }
  return headers;
};
const EventsHeaders = ({ getHeaders = getCEHeaders }) => {
  const { isDraftAndPublish } = useWebhookEvent("Headers");
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_39__/* ["default"] */ .A)();
  const headers = getHeaders(isDraftAndPublish);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_17__/* .RawThead */ .r, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_19__/* .RawTr */ .N, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_16__/* .RawTh */ .e, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_24__/* .VisuallyHidden */ .s, { children: formatMessage({
      id: "Settings.webhooks.event.select",
      defaultMessage: "Select event"
    }) }) }),
    headers.map((header) => {
      if (["app.utils.publish", "app.utils.unpublish"].includes(header?.id ?? "")) {
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _strapi_design_system__WEBPACK_IMPORTED_MODULE_16__/* .RawTh */ .e,
          {
            title: formatMessage({
              id: "Settings.webhooks.event.publish-tooltip",
              defaultMessage: "This event only exists for content with draft & publish enabled"
            }),
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_23__/* .Typography */ .o, { variant: "sigma", textColor: "neutral600", children: formatMessage(header) })
          },
          header.id
        );
      }
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_16__/* .RawTh */ .e, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_23__/* .Typography */ .o, { variant: "sigma", textColor: "neutral600", children: formatMessage(header) }) }, header.id);
    })
  ] }) });
};
const EventsBody = ({ providedEvents }) => {
  const { isDraftAndPublish } = useWebhookEvent("Body");
  const events = providedEvents || getCEEvents(isDraftAndPublish);
  const { values, handleChange: onChange } = (0,formik__WEBPACK_IMPORTED_MODULE_38__/* .useFormikContext */ .j7)();
  const inputName = "events";
  const inputValue = values.events;
  const disabledEvents = [];
  const formattedValue = inputValue.reduce((acc, curr) => {
    const key = curr.split(".")[0];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(curr);
    return acc;
  }, {});
  const handleSelect = ({
    target: { name, value }
  }) => {
    const set = new Set(inputValue);
    if (value) {
      set.add(name);
    } else {
      set.delete(name);
    }
    onChange({ target: { name: inputName, value: Array.from(set) } });
  };
  const handleSelectAll = ({
    target: { name, value }
  }) => {
    const set = new Set(inputValue);
    if (value) {
      events[name].forEach((event) => {
        if (!disabledEvents.includes(event)) {
          set.add(event);
        }
      });
    } else {
      events[name].forEach((event) => set.delete(event));
    }
    onChange({ target: { name: inputName, value: Array.from(set) } });
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_18__/* .RawTbody */ .f, { children: Object.entries(events).map(([event, value]) => {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      EventsRow,
      {
        disabledEvents,
        name: event,
        events: value,
        inputValue: formattedValue[event],
        handleSelect,
        handleSelectAll
      },
      event
    );
  }) });
};
const getCEEvents = (isDraftAndPublish) => {
  const entryEvents = [
    "entry.create",
    "entry.update",
    "entry.delete"
  ];
  if (isDraftAndPublish) {
    entryEvents.push("entry.publish", "entry.unpublish");
  }
  return {
    entry: entryEvents,
    media: ["media.create", "media.update", "media.delete"]
  };
};
const EventsRow = ({
  disabledEvents = [],
  name,
  events = [],
  inputValue = [],
  handleSelect,
  handleSelectAll
}) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_39__/* ["default"] */ .A)();
  const enabledCheckboxes = events.filter((event) => !disabledEvents.includes(event));
  const hasSomeCheckboxSelected = inputValue.length > 0;
  const areAllCheckboxesSelected = inputValue.length === enabledCheckboxes.length;
  const onChangeAll = ({ target: { name: name2 } }) => {
    const valueToSet = !areAllCheckboxesSelected;
    handleSelectAll({
      target: { name: name2, value: valueToSet }
    });
  };
  const targetColumns = 5;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_19__/* .RawTr */ .N, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_16__/* .RawTd */ .N, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .Checkbox */ .S,
      {
        indeterminate: hasSomeCheckboxSelected && !areAllCheckboxesSelected,
        "aria-label": formatMessage({
          id: "global.select-all-entries",
          defaultMessage: "Select all entries"
        }),
        name,
        onChange: onChangeAll,
        value: areAllCheckboxesSelected,
        children: removeHyphensAndTitleCase(name)
      }
    ) }),
    events.map((event) => {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_16__/* .RawTd */ .N, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .BaseCheckbox */ .J,
        {
          disabled: disabledEvents.includes(event),
          "aria-label": event,
          name: event,
          value: inputValue.includes(event),
          onValueChange: (value) => handleSelect({ target: { name: event, value } })
        }
      ) }, event);
    }),
    events.length < targetColumns && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_16__/* .RawTd */ .N, { colSpan: targetColumns - events.length })
  ] });
};
const removeHyphensAndTitleCase = (str) => str.replace(/-/g, " ").split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
const Events = { Root: EventsRoot, Headers: EventsHeaders, Body: EventsBody, Row: EventsRow };
const EventTableCE = () => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Events.Root, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Events.Headers, {}),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Events.Body, {})
  ] });
};
const HeadersInput = () => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_39__/* ["default"] */ .A)();
  const { values, errors } = (0,formik__WEBPACK_IMPORTED_MODULE_38__/* .useFormikContext */ .j7)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_20__/* .Flex */ .s, { direction: "column", alignItems: "stretch", gap: 1, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .FieldLabel */ .d, { children: formatMessage({
      id: "Settings.webhooks.form.headers",
      defaultMessage: "Headers"
    }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .a, { padding: 8, background: "neutral100", hasRadius: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      formik__WEBPACK_IMPORTED_MODULE_38__/* .FieldArray */ .ED,
      {
        validateOnChange: false,
        name: "headers",
        render: ({ push, remove }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_9__/* .Grid */ .x, { gap: 4, children: [
          values.headers.map((header, index) => {
            const formikError = errors.headers?.[index];
            const comboboxError = typeof formikError === "object" ? formikError.key : void 0;
            const textInputError = typeof formikError === "object" ? formikError.value : void 0;
            return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, { children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_10__/* .GridItem */ .E, { col: 6, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                formik__WEBPACK_IMPORTED_MODULE_38__/* .Field */ .D0,
                {
                  as: HeaderCombobox,
                  name: `headers.${index}.key`,
                  "aria-label": `row ${index + 1} key`,
                  label: formatMessage({
                    id: "Settings.webhooks.key",
                    defaultMessage: "Key"
                  }),
                  error: comboboxError
                }
              ) }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_10__/* .GridItem */ .E, { col: 6, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_20__/* .Flex */ .s, { alignItems: "flex-end", children: [
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .a, { style: { flex: 1 }, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  formik__WEBPACK_IMPORTED_MODULE_38__/* .Field */ .D0,
                  {
                    as: _strapi_design_system__WEBPACK_IMPORTED_MODULE_22__/* .TextInput */ .k,
                    name: `headers.${index}.value`,
                    "aria-label": `row ${index + 1} value`,
                    label: formatMessage({
                      id: "Settings.webhooks.value",
                      defaultMessage: "Value"
                    }),
                    error: textInputError
                  }
                ) }),
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _strapi_design_system__WEBPACK_IMPORTED_MODULE_20__/* .Flex */ .s,
                  {
                    paddingLeft: 2,
                    style: { alignSelf: "center" },
                    paddingTop: textInputError ? 0 : 5,
                    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_25__/* .RemoveRoundedButton */ .yX,
                      {
                        disabled: values.headers.length === 1,
                        onClick: () => remove(index),
                        label: formatMessage(
                          {
                            id: "Settings.webhooks.headers.remove",
                            defaultMessage: "Remove header row {number}"
                          },
                          { number: index + 1 }
                        )
                      }
                    )
                  }
                )
              ] }) })
            ] }, `${index}.${header.key}`);
          }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_10__/* .GridItem */ .E, { col: 12, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _strapi_design_system__WEBPACK_IMPORTED_MODULE_21__/* .TextButton */ .Q,
            {
              type: "button",
              onClick: () => {
                push({ key: "", value: "" });
              },
              startIcon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .A, {}),
              children: formatMessage({
                id: "Settings.webhooks.create.header",
                defaultMessage: "Create new header"
              })
            }
          ) })
        ] })
      }
    ) })
  ] });
};
const HeaderCombobox = ({ name, onChange, value, ...restProps }) => {
  const {
    values: { headers }
  } = (0,formik__WEBPACK_IMPORTED_MODULE_38__/* .useFormikContext */ .j7)();
  const [options, setOptions] = react__WEBPACK_IMPORTED_MODULE_1__.useState([...HTTP_HEADERS]);
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    const headerOptions = HTTP_HEADERS.filter(
      (key) => !headers?.some((header) => header.key !== value && header.key === key)
    );
    setOptions(headerOptions);
  }, [headers, value]);
  const handleChange = (value2) => {
    onChange({ target: { name, value: value2 } });
  };
  const handleCreateOption = (value2) => {
    setOptions((prev) => [...prev, value2]);
    handleChange(value2);
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .CreatableCombobox */ .nP,
    {
      ...restProps,
      onClear: () => handleChange(""),
      onChange: handleChange,
      onCreateOption: handleCreateOption,
      placeholder: "",
      value,
      children: options.map((key) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .ComboboxOption */ .j, { value: key, children: key }, key))
    }
  );
};
const HTTP_HEADERS = [
  "A-IM",
  "Accept",
  "Accept-Charset",
  "Accept-Encoding",
  "Accept-Language",
  "Accept-Datetime",
  "Access-Control-Request-Method",
  "Access-Control-Request-Headers",
  "Authorization",
  "Cache-Control",
  "Connection",
  "Content-Length",
  "Content-Type",
  "Cookie",
  "Date",
  "Expect",
  "Forwarded",
  "From",
  "Host",
  "If-Match",
  "If-Modified-Since",
  "If-None-Match",
  "If-Range",
  "If-Unmodified-Since",
  "Max-Forwards",
  "Origin",
  "Pragma",
  "Proxy-Authorization",
  "Range",
  "Referer",
  "TE",
  "User-Agent",
  "Upgrade",
  "Via",
  "Warning"
];
const TriggerContainer = ({ isPending, onCancel, response }) => {
  const { statusCode, message } = response ?? {};
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_39__/* ["default"] */ .A)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .a, { background: "neutral0", padding: 5, shadow: "filterShadow", hasRadius: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_9__/* .Grid */ .x, { gap: 4, style: { alignItems: "center" }, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_10__/* .GridItem */ .E, { col: 3, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_23__/* .Typography */ .o, { children: formatMessage({
      id: "Settings.webhooks.trigger.test",
      defaultMessage: "Test-trigger"
    }) }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_10__/* .GridItem */ .E, { col: 3, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, { isPending, statusCode }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_10__/* .GridItem */ .E, { col: 6, children: !isPending ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Message, { statusCode, message }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_20__/* .Flex */ .s, { justifyContent: "flex-end", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { onClick: onCancel, type: "button", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_20__/* .Flex */ .s, { gap: 2, alignItems: "center", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_23__/* .Typography */ .o, { textColor: "neutral400", children: formatMessage({
        id: "Settings.webhooks.trigger.cancel",
        defaultMessage: "cancel"
      }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Icon, { as: _strapi_icons__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .A, color: "neutral400" })
    ] }) }) }) })
  ] }) });
};
const Icon = styled_components__WEBPACK_IMPORTED_MODULE_42__/* ["default"] */ .Ay.svg(
  ({ theme, color }) => `
  width: ${12 / 16}rem;
  height: ${12 / 16}rem;


  ${color ? (0,styled_components__WEBPACK_IMPORTED_MODULE_42__/* .css */ .AH)`
          path {
            fill: ${theme.colors[color]};
          }
        ` : ""}
`
);
const Status = ({ isPending, statusCode }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_39__/* ["default"] */ .A)();
  if (isPending || !statusCode) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_20__/* .Flex */ .s, { gap: 2, alignItems: "center", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Icon, { as: _strapi_icons__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .A }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_23__/* .Typography */ .o, { children: formatMessage({ id: "Settings.webhooks.trigger.pending", defaultMessage: "pending" }) })
    ] });
  }
  if (statusCode >= 200 && statusCode < 300) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_20__/* .Flex */ .s, { gap: 2, alignItems: "center", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Icon, { as: _strapi_icons__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .A, color: "success700" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_23__/* .Typography */ .o, { children: formatMessage({ id: "Settings.webhooks.trigger.success", defaultMessage: "success" }) })
    ] });
  }
  if (statusCode >= 300) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_20__/* .Flex */ .s, { gap: 2, alignItems: "center", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Icon, { as: _strapi_icons__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .A, color: "danger700" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_23__/* .Typography */ .o, { children: [
        formatMessage({ id: "Settings.error", defaultMessage: "error" }),
        " ",
        statusCode
      ] })
    ] });
  }
  return null;
};
const Message = ({ statusCode, message }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_39__/* ["default"] */ .A)();
  if (!statusCode) {
    return null;
  }
  if (statusCode >= 200 && statusCode < 300) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_20__/* .Flex */ .s, { justifyContent: "flex-end", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_23__/* .Typography */ .o, { textColor: "neutral600", ellipsis: true, children: formatMessage({
      id: "Settings.webhooks.trigger.success.label",
      defaultMessage: "Trigger succeeded"
    }) }) });
  }
  if (statusCode >= 300) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_20__/* .Flex */ .s, { justifyContent: "flex-end", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_20__/* .Flex */ .s, { maxWidth: (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_25__/* .pxToRem */ .a8)(250), justifyContent: "flex-end", title: message, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_23__/* .Typography */ .o, { ellipsis: true, textColor: "neutral600", children: message }) }) });
  }
  return null;
};
const WebhookForm = ({
  handleSubmit,
  triggerWebhook,
  isCreating,
  isTriggering,
  triggerResponse,
  data
}) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_39__/* ["default"] */ .A)();
  const [showTriggerResponse, setShowTriggerResponse] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
  const EventTable = (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_28__.p)(
    EventTableCE,
    async () => (await __webpack_require__.e(/* import() */ 3255).then(__webpack_require__.bind(__webpack_require__, 53255))).EventsTableEE
  );
  const mapHeaders = (headers) => {
    if (!Object.keys(headers).length) {
      return [{ key: "", value: "" }];
    }
    return Object.entries(headers).map(([key, value]) => ({ key, value }));
  };
  const formik = (0,formik__WEBPACK_IMPORTED_MODULE_38__/* .useFormik */ .Wx)({
    initialValues: {
      name: data?.name || "",
      url: data?.url || "",
      headers: mapHeaders(data?.headers || {}),
      events: data?.events || []
    },
    async onSubmit(values, formik2) {
      await handleSubmit(values, formik2);
      formik2.resetForm({ values });
    },
    validationSchema: makeWebhookValidationSchema({ formatMessage }),
    validateOnChange: false,
    validateOnBlur: false
  });
  if (!EventTable) {
    return null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(formik__WEBPACK_IMPORTED_MODULE_38__/* .FormikProvider */ .QI, { value: formik, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_25__/* .Form */ .lV, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _strapi_design_system__WEBPACK_IMPORTED_MODULE_12__/* .HeaderLayout */ .Q,
      {
        primaryAction: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_20__/* .Flex */ .s, { gap: 2, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .$,
            {
              onClick: () => {
                triggerWebhook();
                setShowTriggerResponse(true);
              },
              variant: "tertiary",
              startIcon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .A, {}),
              disabled: isCreating || isTriggering,
              size: "L",
              children: formatMessage({
                id: "Settings.webhooks.trigger",
                defaultMessage: "Trigger"
              })
            }
          ),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .$,
            {
              startIcon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .A, {}),
              type: "submit",
              size: "L",
              disabled: !formik.dirty,
              loading: formik.isSubmitting,
              children: formatMessage({
                id: "global.save",
                defaultMessage: "Save"
              })
            }
          )
        ] }),
        title: isCreating ? formatMessage({
          id: "Settings.webhooks.create",
          defaultMessage: "Create a webhook"
        }) : data?.name,
        navigationAction: (
          // @ts-expect-error – as components props are not inferred correctly.
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system_v2__WEBPACK_IMPORTED_MODULE_31__/* .Link */ .N, { as: react_router_dom__WEBPACK_IMPORTED_MODULE_26__/* .NavLink */ .k2, startIcon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .A, {}), to: "/settings/webhooks", children: formatMessage({
            id: "global.back",
            defaultMessage: "Back"
          }) })
        )
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_11__/* .ContentLayout */ .s, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_20__/* .Flex */ .s, { direction: "column", alignItems: "stretch", gap: 4, children: [
      showTriggerResponse && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        TriggerContainer,
        {
          isPending: isTriggering,
          response: triggerResponse,
          onCancel: () => setShowTriggerResponse(false)
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .a, { background: "neutral0", padding: 8, shadow: "filterShadow", hasRadius: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_20__/* .Flex */ .s, { direction: "column", alignItems: "stretch", gap: 6, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_9__/* .Grid */ .x, { gap: 6, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_10__/* .GridItem */ .E, { col: 6, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            formik__WEBPACK_IMPORTED_MODULE_38__/* .Field */ .D0,
            {
              as: _strapi_design_system__WEBPACK_IMPORTED_MODULE_22__/* .TextInput */ .k,
              name: "name",
              error: formik.errors.name,
              label: formatMessage({
                id: "global.name",
                defaultMessage: "Name"
              }),
              required: true
            }
          ) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_10__/* .GridItem */ .E, { col: 12, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            formik__WEBPACK_IMPORTED_MODULE_38__/* .Field */ .D0,
            {
              as: _strapi_design_system__WEBPACK_IMPORTED_MODULE_22__/* .TextInput */ .k,
              name: "url",
              error: formik.errors.url,
              label: formatMessage({
                id: "Settings.roles.form.input.url",
                defaultMessage: "Url"
              }),
              required: true
            }
          ) })
        ] }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(HeadersInput, {}),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(EventTable, {})
      ] }) })
    ] }) })
  ] }) });
};
const NAME_REGEX = /(^$)|(^[A-Za-z][_0-9A-Za-z ]*$)/;
const URL_REGEX = /(^$)|((https?:\/\/.*)(d*)\/?(.*))/;
const makeWebhookValidationSchema = ({ formatMessage }) => yup__WEBPACK_IMPORTED_MODULE_40__/* .object */ .Ik().shape({
  name: yup__WEBPACK_IMPORTED_MODULE_40__/* .string */ .Yj().required(
    formatMessage({
      id: "Settings.webhooks.validation.name.required",
      defaultMessage: "Name is required"
    })
  ).matches(
    NAME_REGEX,
    formatMessage({
      id: "Settings.webhooks.validation.name.regex",
      defaultMessage: "The name must start with a letter and only contain letters, numbers, spaces and underscores"
    })
  ),
  url: yup__WEBPACK_IMPORTED_MODULE_40__/* .string */ .Yj().required(
    formatMessage({
      id: "Settings.webhooks.validation.url.required",
      defaultMessage: "Url is required"
    })
  ).matches(
    URL_REGEX,
    formatMessage({
      id: "Settings.webhooks.validation.url.regex",
      defaultMessage: "The value must be a valid Url"
    })
  ),
  headers: yup__WEBPACK_IMPORTED_MODULE_40__/* .lazy */ .RZ((array) => {
    const baseSchema = yup__WEBPACK_IMPORTED_MODULE_40__/* .array */ .YO();
    if (array.length === 1) {
      const { key, value } = array[0];
      if (!key && !value) {
        return baseSchema;
      }
    }
    return baseSchema.of(
      yup__WEBPACK_IMPORTED_MODULE_40__/* .object */ .Ik().shape({
        key: yup__WEBPACK_IMPORTED_MODULE_40__/* .string */ .Yj().required(
          formatMessage({
            id: "Settings.webhooks.validation.key",
            defaultMessage: "Key is required"
          })
        ),
        value: yup__WEBPACK_IMPORTED_MODULE_40__/* .string */ .Yj().required(
          formatMessage({
            id: "Settings.webhooks.validation.value",
            defaultMessage: "Value is required"
          })
        )
      })
    );
  }),
  events: yup__WEBPACK_IMPORTED_MODULE_40__/* .array */ .YO()
});
const cleanData = (data) => ({
  ...data,
  headers: data.headers.reduce((acc, { key, value }) => {
    if (key !== "") {
      acc[key] = value;
    }
    return acc;
  }, {})
});
const EditPage = () => {
  const match = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_27__/* .useRouteMatch */ .W5)("/settings/webhooks/:id");
  const id = match?.params.id;
  const isCreating = id === "create";
  const { replace } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_27__/* .useHistory */ .W6)();
  const toggleNotification = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_25__/* .useNotification */ .hN)();
  const {
    _unstableFormatAPIError: formatAPIError,
    _unstableFormatValidationErrors: formatValidationErrors
  } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_25__/* .useAPIErrorHandler */ .wq)();
  const { isLoading: isLoadingForModels } = (0,_useContentTypes_J1YsHDXc_mjs__WEBPACK_IMPORTED_MODULE_29__.u)();
  const [isTriggering, setIsTriggering] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
  const [triggerResponse, setTriggerResponse] = react__WEBPACK_IMPORTED_MODULE_1__.useState();
  const { isLoading, webhooks, error, createWebhook, updateWebhook, triggerWebhook } = (0,_useWebhooks_tlVKrkap_mjs__WEBPACK_IMPORTED_MODULE_43__.u)(
    { id },
    {
      skip: isCreating
    }
  );
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    if (error) {
      toggleNotification({
        type: "warning",
        message: formatAPIError(error)
      });
    }
  }, [error, toggleNotification, formatAPIError]);
  const handleTriggerWebhook = async () => {
    try {
      setIsTriggering(true);
      const res = await triggerWebhook(id);
      if ("error" in res) {
        toggleNotification({
          type: "warning",
          message: formatAPIError(res.error)
        });
        return;
      }
      setTriggerResponse(res.data);
    } catch {
      toggleNotification({
        type: "warning",
        message: {
          id: "notification.error",
          defaultMessage: "An error occurred"
        }
      });
    } finally {
      setIsTriggering(false);
    }
  };
  const handleSubmit = async (data, formik) => {
    try {
      if (isCreating) {
        const res = await createWebhook(cleanData(data));
        if ("error" in res) {
          if ((0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_28__.x)(res.error) && res.error.name === "ValidationError") {
            formik.setErrors(formatValidationErrors(res.error));
          } else {
            toggleNotification({
              type: "warning",
              message: formatAPIError(res.error)
            });
          }
          return;
        }
        toggleNotification({
          type: "success",
          message: { id: "Settings.webhooks.created" }
        });
        replace(`/settings/webhooks/${res.data.id}`);
      } else {
        const res = await updateWebhook({ id, ...cleanData(data) });
        if ("error" in res) {
          if ((0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_28__.x)(res.error) && res.error.name === "ValidationError") {
            formik.setErrors(formatValidationErrors(res.error));
          } else {
            toggleNotification({
              type: "warning",
              message: formatAPIError(res.error)
            });
          }
          return;
        }
        toggleNotification({
          type: "success",
          message: { id: "notification.form.success.fields" }
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
  if (isLoading || isLoadingForModels) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_25__/* .LoadingIndicatorPage */ .Bl, {});
  }
  const [webhook] = webhooks ?? [];
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_14__/* .Main */ .g, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_25__/* .SettingsPageTitle */ .x7, { name: "Webhooks" }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      WebhookForm,
      {
        data: webhook,
        handleSubmit,
        triggerWebhook: handleTriggerWebhook,
        isCreating,
        isTriggering,
        triggerResponse
      }
    )
  ] });
};
const ProtectedEditPage = () => {
  const permissions = (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_28__.j)(_AuthenticatedApp_uHd_MPEB_mjs__WEBPACK_IMPORTED_MODULE_30__.s);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_25__/* .CheckPagePermissions */ .kz, { permissions: permissions.settings?.webhooks.update, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(EditPage, {}) });
};
const EditPage$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  EditPage,
  ProtectedEditPage
}, Symbol.toStringTag, { value: "Module" }));



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



/***/ }

}]);