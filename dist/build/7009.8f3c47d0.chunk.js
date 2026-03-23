(self["webpackChunkmy_strapi_project"] = self["webpackChunkmy_strapi_project"] || []).push([[7009],{

/***/ 94445
(module) {

function arrayAggregator(array, setter, iteratee, accumulator) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    var value = array[index];
    setter(accumulator, value, iteratee(value), array);
  }
  return accumulator;
}
module.exports = arrayAggregator;


/***/ },

/***/ 7233
(module, __unused_webpack_exports, __webpack_require__) {

var baseEach = __webpack_require__(97449);
function baseAggregator(collection, setter, iteratee, accumulator) {
  baseEach(collection, function(value, key, collection2) {
    setter(accumulator, value, iteratee(value), collection2);
  });
  return accumulator;
}
module.exports = baseAggregator;


/***/ },

/***/ 3129
(module) {

var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function baseHas(object, key) {
  return object != null && hasOwnProperty.call(object, key);
}
module.exports = baseHas;


/***/ },

/***/ 88532
(module, __unused_webpack_exports, __webpack_require__) {

var arrayAggregator = __webpack_require__(94445), baseAggregator = __webpack_require__(7233), baseIteratee = __webpack_require__(67734), isArray = __webpack_require__(4642);
function createAggregator(setter, initializer) {
  return function(collection, iteratee) {
    var func = isArray(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
    return func(collection, setter, baseIteratee(iteratee, 2), accumulator);
  };
}
module.exports = createAggregator;


/***/ },

/***/ 94710
(module, __unused_webpack_exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(95292), createAggregator = __webpack_require__(88532);
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
var groupBy = createAggregator(function(result, value, key) {
  if (hasOwnProperty.call(result, key)) {
    result[key].push(value);
  } else {
    baseAssignValue(result, key, [value]);
  }
});
module.exports = groupBy;


/***/ },

/***/ 78031
(module, __unused_webpack_exports, __webpack_require__) {

var baseHas = __webpack_require__(3129), hasPath = __webpack_require__(70029);
function has(object, path) {
  return object != null && hasPath(object, path, baseHas);
}
module.exports = has;


/***/ },

/***/ 47009
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ Permissions)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69751);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21272);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57237);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44604);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60888);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50215);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(94061);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85963);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4181);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(90151);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(68074);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(61485);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(99248);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(67030);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6239);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(83997);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(76079);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(12408);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(24093);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(12081);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(30893);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(59201);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(88761);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(51187);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(80219);
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(78031);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(346);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(48940);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(54894);
/* harmony import */ var _index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(92129);
/* harmony import */ var _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(89032);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(59080);
/* harmony import */ var lodash_groupBy__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(94710);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(35223);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(47610);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(9005);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(44895);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(74312);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(20415);
/* harmony import */ var _strapi_design_system_v2__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(37679);
/* harmony import */ var _strapi_design_system_v2__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(60043);
/* harmony import */ var lodash_upperFirst__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(39404);





















const [PermissionsDataManagerProvider, usePermissionsDataManagerContext] = (0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_30__/* .createContext */ .q)("PermissionsDataManager");
const usePermissionsDataManager = () => usePermissionsDataManagerContext("usePermissionsDataManager");
const flattenDeep = (array) => {
  if (Array.isArray(array)) {
    return array.reduce((acc, value) => {
      if (Array.isArray(value)) {
        acc.push(...flattenDeep(value));
      } else {
        acc.push(value);
      }
      return acc;
    }, []);
  } else {
    return [];
  }
};
const createArrayOfValues = (obj) => {
  if (!(0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_29__.F)(obj)) {
    return [];
  }
  return flattenDeep(
    Object.values(obj).map((value) => {
      if ((0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_29__.F)(value)) {
        return createArrayOfValues(value);
      }
      return value;
    })
  );
};
const findMatchingPermission = (permissions, action, subject) => permissions.find((perm) => perm.action === action && perm.subject === subject);
const formatPermissionsForAPI = (modifiedData) => {
  const pluginsPermissions = formatSettingsPermissions(modifiedData.plugins);
  const settingsPermissions = formatSettingsPermissions(modifiedData.settings);
  const collectionTypesPermissions = formatContentTypesPermissions(modifiedData.collectionTypes);
  const singleTypesPermissions = formatContentTypesPermissions(modifiedData.singleTypes);
  return [
    ...pluginsPermissions,
    ...settingsPermissions,
    ...collectionTypesPermissions,
    ...singleTypesPermissions
  ];
};
const formatSettingsPermissions = (settingsPermissionsObject) => {
  return Object.values(settingsPermissionsObject).reduce((formAcc, form) => {
    const currentCategoryPermissions = Object.values(form).reduce(
      (childFormAcc, childForm) => {
        const permissions = Object.entries(childForm).reduce(
          (responsesAcc, [
            actionName,
            {
              conditions,
              properties: { enabled }
            }
          ]) => {
            if (!enabled) {
              return responsesAcc;
            }
            responsesAcc.push({
              action: actionName,
              subject: null,
              conditions: createConditionsArray(conditions),
              properties: {}
            });
            return responsesAcc;
          },
          []
        );
        return [...childFormAcc, ...permissions];
      },
      []
    );
    return [...formAcc, ...currentCategoryPermissions];
  }, []);
};
const formatContentTypesPermissions = (contentTypesPermissions) => {
  const permissions = Object.entries(contentTypesPermissions).reduce(
    (allPermissions, current) => {
      const [subject, currentSubjectActions] = current;
      const permissions2 = Object.entries(currentSubjectActions).reduce(
        (acc, current2) => {
          const [actionName, permissions3] = current2;
          const shouldCreatePermission = createArrayOfValues(permissions3).some((val) => val);
          if (!shouldCreatePermission) {
            return acc;
          }
          if (!permissions3?.properties?.enabled) {
            const createdPermissionsArray = Object.entries(permissions3.properties).reduce(
              (acc2, current3) => {
                const [propertyName, propertyValue] = current3;
                acc2.properties[propertyName] = createPropertyArray(propertyValue);
                return acc2;
              },
              {
                action: actionName,
                subject,
                conditions: createConditionsArray(permissions3.conditions),
                properties: {}
              }
            );
            return [...acc, createdPermissionsArray];
          }
          if (!permissions3.properties.enabled) {
            return acc;
          }
          acc.push({
            action: actionName,
            subject,
            properties: {},
            conditions: createConditionsArray(permissions3.conditions)
          });
          return acc;
        },
        []
      );
      return [...allPermissions, ...permissions2];
    },
    []
  );
  return permissions;
};
const createPropertyArray = (propertyValue, prefix = "") => {
  return Object.entries(propertyValue).reduce((acc, current) => {
    const [name, value] = current;
    if ((0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_29__.F)(value)) {
      return [...acc, ...createPropertyArray(value, `${prefix}${name}.`)];
    }
    if (value && !(0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_29__.F)(value)) {
      acc.push(`${prefix}${name}`);
    }
    return acc;
  }, []);
};
const createConditionsArray = (conditions) => Object.entries(conditions).filter(([, conditionValue]) => {
  return conditionValue;
}).map(([conditionName]) => conditionName);
const createDefaultConditionsForm$1 = (conditions, initialConditions = []) => conditions.reduce((acc, current) => {
  acc[current.id] = initialConditions.indexOf(current.id) !== -1;
  return acc;
}, {});
const createDefaultForm = (layout, conditions, initialPermissions = []) => {
  return layout.reduce((acc, { categoryId, childrenForm }) => {
    const childrenDefaultForm = childrenForm.reduce((acc2, current) => {
      acc2[current.subCategoryId] = current.actions.reduce((acc3, current2) => {
        const foundMatchingPermission = findMatchingPermission(
          initialPermissions,
          current2.action,
          null
        );
        acc3[current2.action] = {
          properties: {
            enabled: foundMatchingPermission !== void 0
          },
          conditions: createDefaultConditionsForm$1(
            conditions,
            foundMatchingPermission?.conditions ?? []
          )
        };
        return acc3;
      }, {});
      return acc2;
    }, {});
    acc[categoryId] = childrenDefaultForm;
    return acc;
  }, {});
};
const createDefaultPropertiesForm = (properties, subject, matchingPermission) => {
  const recursivelyCreatePropertyForm = ({ children = [] }, propertyValues, prefix = "") => {
    return children.reduce((acc, current) => {
      if (current.children) {
        return {
          ...acc,
          [current.value]: recursivelyCreatePropertyForm(
            current,
            propertyValues,
            `${prefix}${current.value}.`
          )
        };
      }
      const hasProperty = propertyValues.indexOf(`${prefix}${current.value}`) !== -1;
      acc[current.value] = hasProperty;
      return acc;
    }, {});
  };
  return properties.reduce(
    (acc, currentPropertyName) => {
      const foundProperty = subject.properties.find(({ value }) => value === currentPropertyName);
      if (foundProperty) {
        const matchingPermissionPropertyValues = matchingPermission?.properties[foundProperty.value] ?? [];
        const propertyForm = recursivelyCreatePropertyForm(
          foundProperty,
          matchingPermissionPropertyValues
        );
        acc.properties[currentPropertyName] = propertyForm;
      }
      return acc;
    },
    { properties: {} }
  );
};
const createDefaultCTForm = ({ subjects, actions = [] }, conditions, initialPermissions = []) => {
  return actions.reduce((defaultForm, action) => {
    const subjectLayouts = action.subjects.reduce((acc, current) => {
      const foundLayout = subjects.find(({ uid }) => uid === current) || null;
      if (foundLayout) {
        acc[current] = foundLayout;
      }
      return acc;
    }, {});
    if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_26__(subjectLayouts)) {
      return defaultForm;
    }
    const contentTypesActions = Object.keys(subjectLayouts).reduce((acc, currentCTUID) => {
      const { actionId, applyToProperties } = action;
      const currentSubjectLayout = subjectLayouts[currentCTUID];
      const properties = currentSubjectLayout.properties.map(({ value }) => value);
      const doesNothaveProperty = properties.every(
        (property) => (applyToProperties || []).indexOf(property) === -1
      );
      const matchingPermission = findMatchingPermission(initialPermissions, actionId, currentCTUID);
      const conditionsForm = createDefaultConditionsForm$1(
        conditions,
        matchingPermission?.conditions ?? []
      );
      if (!acc[currentCTUID]) {
        acc[currentCTUID] = {};
      }
      if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_26__(applyToProperties) || doesNothaveProperty) {
        acc[currentCTUID][actionId] = {
          properties: {
            enabled: matchingPermission !== void 0
          },
          conditions: conditionsForm
        };
        return acc;
      }
      const propertiesForm = createDefaultPropertiesForm(
        applyToProperties,
        subjectLayouts[currentCTUID],
        matchingPermission
      );
      acc[currentCTUID][actionId] = { ...propertiesForm, conditions: conditionsForm };
      return acc;
    }, {});
    return lodash_merge__WEBPACK_IMPORTED_MODULE_31__(defaultForm, contentTypesActions);
  }, {});
};
const formatLayout = (layout, groupByKey) => {
  return Object.entries(lodash_groupBy__WEBPACK_IMPORTED_MODULE_32__(layout, groupByKey)).map(([itemName, item]) => ({
    category: itemName,
    categoryId: itemName.split(" ").join("-"),
    childrenForm: Object.entries(lodash_groupBy__WEBPACK_IMPORTED_MODULE_32__(item, "subCategory")).map(
      ([subCategoryName, actions]) => ({
        subCategoryName,
        subCategoryId: subCategoryName.split(" ").join("-"),
        actions
      })
    )
  }));
};
const updateConditionsToFalse = (obj) => {
  return Object.keys(obj).reduce((acc, current) => {
    const currentValue = obj[current];
    if ((0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_29__.F)(currentValue) && !lodash_has__WEBPACK_IMPORTED_MODULE_25__(currentValue, "conditions")) {
      return { ...acc, [current]: updateConditionsToFalse(currentValue) };
    }
    if ((0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_29__.F)(currentValue) && lodash_has__WEBPACK_IMPORTED_MODULE_25__(currentValue, "conditions")) {
      const isActionEnabled = createArrayOfValues(lodash_omit__WEBPACK_IMPORTED_MODULE_33__(currentValue, "conditions")).some(
        (val) => val
      );
      if (!isActionEnabled) {
        const updatedConditions = Object.keys(currentValue.conditions).reduce((acc1, current2) => {
          acc1[current2] = false;
          return acc1;
        }, {});
        return { ...acc, [current]: { ...currentValue, conditions: updatedConditions } };
      }
    }
    acc[current] = currentValue;
    return acc;
  }, {});
};
const updateValues = (obj, valueToSet, isFieldUpdate = false) => {
  return Object.keys(obj).reduce((acc, current) => {
    const currentValue = obj[current];
    if (current === "conditions" && !isFieldUpdate) {
      acc[current] = currentValue;
      return acc;
    }
    if ((0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_29__.F)(currentValue)) {
      return { ...acc, [current]: updateValues(currentValue, valueToSet, current === "fields") };
    }
    acc[current] = valueToSet;
    return acc;
  }, {});
};
const cellWidth = `${120 / 16}rem`;
const firstRowWidth = `${200 / 16}rem`;
const rowHeight = `${53 / 16}rem`;
const removeConditionKeyFromData = (obj) => {
  if (!obj) {
    return null;
  }
  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (key !== "conditions") {
      acc[key] = value;
    }
    return acc;
  }, {});
};
const getCheckboxState = (dataObj) => {
  const dataWithoutCondition = removeConditionKeyFromData(dataObj);
  const arrayOfValues = createArrayOfValues(dataWithoutCondition);
  if (!arrayOfValues.length) {
    return { hasAllActionsSelected: false, hasSomeActionsSelected: false };
  }
  const hasAllActionsSelected = arrayOfValues.every((val) => val);
  const hasSomeActionsSelected = arrayOfValues.some((val) => val) && !hasAllActionsSelected;
  return { hasAllActionsSelected, hasSomeActionsSelected };
};
const capitalise = (str) => str.charAt(0).toUpperCase() + str.slice(1);
const CollapseLabel = (0,styled_components__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Ay)((0,_strapi_design_system__WEBPACK_IMPORTED_MODULE_15__/* .Flex */ .s))`
  padding-right: ${({ theme }) => theme.spaces[2]};
  overflow: hidden;
  flex: 1;
  ${({ isCollapsable }) => isCollapsable && "cursor: pointer;"}
`;
const HiddenAction = styled_components__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Ay.div`
  width: ${cellWidth};
`;
const RequiredSign = () => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .a, { color: "danger700", paddingLeft: 1, children: "*" });
const RowLabelWithCheckbox = ({
  checkboxName = "",
  children,
  isActive = false,
  isCollapsable = false,
  isFormDisabled = false,
  label,
  onChange,
  onClick,
  someChecked = false,
  value
}) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .A)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_15__/* .Flex */ .s, { alignItems: "center", paddingLeft: 6, width: firstRowWidth, shrink: 0, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .a, { paddingRight: 2, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .BaseCheckbox */ .J,
      {
        name: checkboxName,
        "aria-label": formatMessage(
          {
            id: `Settings.permissions.select-all-by-permission`,
            defaultMessage: "Select all {label} permissions"
          },
          { label }
        ),
        disabled: isFormDisabled,
        onValueChange: (value2) => onChange({
          target: {
            name: checkboxName,
            value: value2
          }
        }),
        indeterminate: someChecked,
        value
      }
    ) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
      CollapseLabel,
      {
        title: label,
        alignItems: "center",
        isCollapsable,
        ...isCollapsable && {
          onClick,
          "aria-expanded": isActive,
          onKeyDown: ({ key }) => (key === "Enter" || key === " ") && onClick(),
          tabIndex: 0,
          role: "button"
        },
        children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _strapi_design_system__WEBPACK_IMPORTED_MODULE_20__/* .Typography */ .o,
            {
              fontWeight: isActive ? "bold" : void 0,
              textColor: isActive ? "primary600" : "neutral800",
              ellipsis: true,
              children: capitalise(label)
            }
          ),
          children
        ]
      }
    )
  ] });
};
const CollapsePropertyMatrix = ({
  availableActions = [],
  childrenForm = [],
  isFormDisabled,
  label,
  pathToData,
  propertyName
}) => {
  const propertyActions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(
    () => availableActions.map((action) => {
      const isActionRelatedToCurrentProperty = Array.isArray(action.applyToProperties) && action.applyToProperties.indexOf(propertyName) !== -1 && action.isDisplayed;
      return { label: action.label, actionId: action.actionId, isActionRelatedToCurrentProperty };
    }),
    [availableActions, propertyName]
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_15__/* .Flex */ .s, { display: "inline-flex", direction: "column", minWidth: 0, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Header, { label, headers: propertyActions }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .a, { children: childrenForm.map(({ children: childrenForm2, label: label2, value, required }, i) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      ActionRow$1,
      {
        childrenForm: childrenForm2,
        label: label2,
        isFormDisabled,
        name: value,
        required,
        propertyActions,
        pathToData,
        propertyName,
        isOdd: i % 2 === 0
      },
      value
    )) })
  ] });
};
const ActionRow$1 = ({
  childrenForm = [],
  label,
  isFormDisabled = false,
  name,
  required = false,
  pathToData,
  propertyActions,
  propertyName,
  isOdd = false
}) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .A)();
  const [rowToOpen, setRowToOpen] = react__WEBPACK_IMPORTED_MODULE_1__.useState(null);
  const {
    modifiedData,
    onChangeCollectionTypeLeftActionRowCheckbox,
    onChangeParentCheckbox,
    onChangeSimpleCheckbox
  } = usePermissionsDataManager();
  const isActive = rowToOpen === name;
  const recursiveChildren = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    if (!Array.isArray(childrenForm)) {
      return [];
    }
    return childrenForm;
  }, [childrenForm]);
  const isCollapsable = recursiveChildren.length > 0;
  const handleClick = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(() => {
    if (isCollapsable) {
      setRowToOpen((prev) => {
        if (prev === name) {
          return null;
        }
        return name;
      });
    }
  }, [isCollapsable, name]);
  const handleChangeLeftRowCheckbox = ({
    target: { value }
  }) => {
    onChangeCollectionTypeLeftActionRowCheckbox(pathToData, propertyName, name, value);
  };
  const { hasAllActionsSelected, hasSomeActionsSelected } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    return getRowLabelCheckboxState(propertyActions, modifiedData, pathToData, propertyName, name);
  }, [propertyActions, modifiedData, pathToData, propertyName, name]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      Wrapper$1,
      {
        alignItems: "center",
        isCollapsable,
        isActive,
        background: isOdd ? "neutral100" : "neutral0",
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_15__/* .Flex */ .s, { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
            RowLabelWithCheckbox,
            {
              onChange: handleChangeLeftRowCheckbox,
              onClick: handleClick,
              isCollapsable,
              isFormDisabled,
              label,
              someChecked: hasSomeActionsSelected,
              value: hasAllActionsSelected,
              isActive,
              children: [
                required && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RequiredSign, {}),
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CarretIcon, { $isActive: isActive })
              ]
            }
          ),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_15__/* .Flex */ .s, { children: propertyActions.map(({ label: label2, isActionRelatedToCurrentProperty, actionId }) => {
            if (!isActionRelatedToCurrentProperty) {
              return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(HiddenAction, {}, label2);
            }
            const checkboxName = [
              ...pathToData.split(".."),
              actionId,
              "properties",
              propertyName,
              name
            ];
            if (!isCollapsable) {
              const checkboxValue = lodash_get__WEBPACK_IMPORTED_MODULE_24__(modifiedData, checkboxName, false);
              return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _strapi_design_system__WEBPACK_IMPORTED_MODULE_15__/* .Flex */ .s,
                {
                  width: cellWidth,
                  position: "relative",
                  justifyContent: "center",
                  alignItems: "center",
                  children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .BaseCheckbox */ .J,
                    {
                      disabled: isFormDisabled,
                      name: checkboxName.join(".."),
                      "aria-label": formatMessage(
                        {
                          id: `Settings.permissions.select-by-permission`,
                          defaultMessage: "Select {label} permission"
                        },
                        { label: `${name} ${label2}` }
                      ),
                      onValueChange: (value) => {
                        onChangeSimpleCheckbox({
                          target: {
                            name: checkboxName.join(".."),
                            value
                          }
                        });
                      },
                      value: checkboxValue
                    }
                  )
                },
                actionId
              );
            }
            const data = lodash_get__WEBPACK_IMPORTED_MODULE_24__(modifiedData, checkboxName, {});
            const { hasAllActionsSelected: hasAllActionsSelected2, hasSomeActionsSelected: hasSomeActionsSelected2 } = getCheckboxState(data);
            return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _strapi_design_system__WEBPACK_IMPORTED_MODULE_15__/* .Flex */ .s,
              {
                width: cellWidth,
                position: "relative",
                justifyContent: "center",
                alignItems: "center",
                children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .BaseCheckbox */ .J,
                  {
                    disabled: isFormDisabled,
                    name: checkboxName.join(".."),
                    onValueChange: (value) => {
                      onChangeParentCheckbox({
                        target: {
                          name: checkboxName.join(".."),
                          value
                        }
                      });
                    },
                    "aria-label": formatMessage(
                      {
                        id: `Settings.permissions.select-by-permission`,
                        defaultMessage: "Select {label} permission"
                      },
                      { label: `${name} ${label2}` }
                    ),
                    value: hasAllActionsSelected2,
                    indeterminate: hasSomeActionsSelected2
                  }
                )
              },
              label2
            );
          }) })
        ] })
      }
    ),
    isActive && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      SubActionRow,
      {
        childrenForm: recursiveChildren,
        isFormDisabled,
        parentName: name,
        pathToDataFromActionRow: pathToData,
        propertyName,
        propertyActions,
        recursiveLevel: 0
      }
    )
  ] });
};
const getRowLabelCheckboxState = (propertyActions, modifiedData, pathToContentType, propertyToCheck, targetKey) => {
  const actionIds = propertyActions.reduce((acc, current) => {
    if (current.isActionRelatedToCurrentProperty) {
      acc.push(current.actionId);
    }
    return acc;
  }, []);
  const data = actionIds.reduce((acc, current) => {
    const mainData = lodash_get__WEBPACK_IMPORTED_MODULE_24__(
      modifiedData,
      [...pathToContentType.split(".."), current, "properties", propertyToCheck, targetKey],
      false
    );
    acc[current] = mainData;
    return acc;
  }, {});
  return getCheckboxState(data);
};
const Wrapper$1 = (0,styled_components__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Ay)((0,_strapi_design_system__WEBPACK_IMPORTED_MODULE_15__/* .Flex */ .s))`
  height: ${rowHeight};
  flex: 1;

  ${({ isCollapsable, theme }) => isCollapsable && `
      ${CarretIcon} {
        display: block;
        color: ${theme.colors.neutral100};
      }
      &:hover {
        ${activeStyle(theme)}
      }
  `}
  ${({ isActive, theme }) => isActive && activeStyle(theme)};
`;
const CarretIcon = (0,styled_components__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Ay)((0,_strapi_icons__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .A))`
  display: none;
  width: ${10 / 16}rem;
  transform: rotate(${({ $isActive }) => $isActive ? "180" : "0"}deg);
  margin-left: ${({ theme }) => theme.spaces[2]};
`;
const SubActionRow = ({
  childrenForm = [],
  isFormDisabled,
  recursiveLevel,
  pathToDataFromActionRow,
  propertyActions,
  parentName,
  propertyName
}) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .A)();
  const { modifiedData, onChangeParentCheckbox, onChangeSimpleCheckbox } = usePermissionsDataManager();
  const [rowToOpen, setRowToOpen] = react__WEBPACK_IMPORTED_MODULE_1__.useState(null);
  const handleClickToggleSubLevel = (name) => {
    setRowToOpen((prev) => {
      if (prev === name) {
        return null;
      }
      return name;
    });
  };
  const displayedRecursiveChildren = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    if (!rowToOpen) {
      return null;
    }
    return childrenForm.find(({ value }) => value === rowToOpen);
  }, [rowToOpen, childrenForm]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .a, { paddingLeft: `2rem`, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TopTimeline, {}),
    childrenForm.map(({ label, value, required, children: subChildrenForm }, index) => {
      const isVisible = index + 1 < childrenForm.length;
      const isArrayType = Array.isArray(subChildrenForm);
      const isActive = rowToOpen === value;
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(LeftBorderTimeline, { isVisible, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_15__/* .Flex */ .s, { height: rowHeight, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledBox$1, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            Svg,
            {
              width: "20",
              height: "23",
              viewBox: "0 0 20 23",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              color: "primary200",
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                "path",
                {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z",
                  fill: "#D9D8FF"
                }
              )
            }
          ) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_15__/* .Flex */ .s, { style: { flex: 1 }, children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RowStyle, { level: recursiveLevel, isActive, isCollapsable: isArrayType, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
              CollapseLabel,
              {
                alignItems: "center",
                isCollapsable: isArrayType,
                ...isArrayType && {
                  onClick: () => handleClickToggleSubLevel(value),
                  "aria-expanded": isActive,
                  onKeyDown: ({ key }) => (key === "Enter" || key === " ") && handleClickToggleSubLevel(value),
                  tabIndex: 0,
                  role: "button"
                },
                title: label,
                children: [
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_20__/* .Typography */ .o, { ellipsis: true, children: capitalise(label) }),
                  required && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RequiredSign, {}),
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CarretIcon, { $isActive: isActive })
                ]
              }
            ) }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_15__/* .Flex */ .s, { style: { flex: 1 }, children: propertyActions.map(
              ({ actionId, label: propertyLabel, isActionRelatedToCurrentProperty }) => {
                if (!isActionRelatedToCurrentProperty) {
                  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(HiddenAction, {}, actionId);
                }
                const checkboxName = [
                  ...pathToDataFromActionRow.split(".."),
                  actionId,
                  "properties",
                  propertyName,
                  ...parentName.split(".."),
                  value
                ];
                const checkboxValue = lodash_get__WEBPACK_IMPORTED_MODULE_24__(modifiedData, checkboxName, false);
                if (!subChildrenForm) {
                  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _strapi_design_system__WEBPACK_IMPORTED_MODULE_15__/* .Flex */ .s,
                    {
                      position: "relative",
                      width: cellWidth,
                      justifyContent: "center",
                      alignItems: "center",
                      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .BaseCheckbox */ .J,
                        {
                          disabled: isFormDisabled,
                          name: checkboxName.join(".."),
                          "aria-label": formatMessage(
                            {
                              id: `Settings.permissions.select-by-permission`,
                              defaultMessage: "Select {label} permission"
                            },
                            { label: `${parentName} ${label} ${propertyLabel}` }
                          ),
                          onValueChange: (value2) => {
                            onChangeSimpleCheckbox({
                              target: {
                                name: checkboxName.join(".."),
                                value: value2
                              }
                            });
                          },
                          value: checkboxValue
                        }
                      )
                    },
                    propertyLabel
                  );
                }
                const { hasAllActionsSelected, hasSomeActionsSelected } = getCheckboxState(checkboxValue);
                return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _strapi_design_system__WEBPACK_IMPORTED_MODULE_15__/* .Flex */ .s,
                  {
                    position: "relative",
                    width: cellWidth,
                    justifyContent: "center",
                    alignItems: "center",
                    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .BaseCheckbox */ .J,
                      {
                        disabled: isFormDisabled,
                        name: checkboxName.join(".."),
                        "aria-label": formatMessage(
                          {
                            id: `Settings.permissions.select-by-permission`,
                            defaultMessage: "Select {label} permission"
                          },
                          { label: `${parentName} ${label} ${propertyLabel}` }
                        ),
                        onValueChange: (value2) => {
                          onChangeParentCheckbox({
                            target: {
                              name: checkboxName.join(".."),
                              value: value2
                            }
                          });
                        },
                        value: hasAllActionsSelected,
                        indeterminate: hasSomeActionsSelected
                      },
                      propertyLabel
                    )
                  },
                  propertyLabel
                );
              }
            ) })
          ] })
        ] }),
        displayedRecursiveChildren && isActive && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .a, { paddingBottom: 2, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          SubActionRow,
          {
            isFormDisabled,
            parentName: `${parentName}..${value}`,
            pathToDataFromActionRow,
            propertyActions,
            propertyName,
            recursiveLevel: recursiveLevel + 1,
            childrenForm: displayedRecursiveChildren.children
          }
        ) })
      ] }, value);
    })
  ] });
};
const LeftBorderTimeline = (0,styled_components__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Ay)((0,_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .a))`
  border-left: ${({ isVisible, theme }) => isVisible ? `4px solid ${theme.colors.primary200}` : "4px solid transparent"};
`;
const RowStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Ay)((0,_strapi_design_system__WEBPACK_IMPORTED_MODULE_15__/* .Flex */ .s))`
  padding-left: ${({ theme }) => theme.spaces[4]};
  width: ${({ level }) => 145 - level * 36}px;

  ${({ isCollapsable, theme }) => isCollapsable && `
      ${CarretIcon} {
        display: block;
        color: ${theme.colors.neutral100};
      }
      &:hover {
        ${activeStyle(theme)}
      }
  `}
  ${({ isActive, theme }) => isActive && activeStyle(theme)};
`;
const TopTimeline = styled_components__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Ay.div`
  padding-top: ${({ theme }) => theme.spaces[2]};
  margin-top: ${({ theme }) => theme.spaces[2]};
  width: ${4 / 16}rem;
  background-color: ${({ theme }) => theme.colors.primary200};
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
`;
const StyledBox$1 = (0,styled_components__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Ay)((0,_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .a))`
  transform: translate(-4px, -12px);

  &:before {
    content: '';
    width: ${4 / 16}rem;
    height: ${12 / 16}rem;
    background: ${({ theme }) => theme.colors.primary200};
    display: block;
  }
`;
const Svg = styled_components__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Ay.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({ theme, color }) => theme.colors[color]};
  }
`;
const Header = ({ headers = [], label }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .A)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_15__/* .Flex */ .s, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_15__/* .Flex */ .s, { width: firstRowWidth, height: rowHeight, shrink: 0, alignItems: "center", paddingLeft: 6, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_20__/* .Typography */ .o, { variant: "sigma", textColor: "neutral500", children: formatMessage(
      {
        id: "Settings.roles.form.permission.property-label",
        defaultMessage: "{label} permissions"
      },
      { label }
    ) }) }),
    headers.map((header) => {
      if (!header.isActionRelatedToCurrentProperty) {
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_15__/* .Flex */ .s, { width: cellWidth, shrink: 0 }, header.label);
      }
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_15__/* .Flex */ .s, { width: cellWidth, shrink: 0, justifyContent: "center", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_20__/* .Typography */ .o, { variant: "sigma", textColor: "neutral500", children: formatMessage({
        id: `Settings.roles.form.permissions.${header.label.toLowerCase()}`,
        defaultMessage: header.label
      }) }) }, header.label);
    })
  ] });
};
const activeStyle = (theme) => (0,styled_components__WEBPACK_IMPORTED_MODULE_34__/* .css */ .AH)`
  ${_strapi_design_system__WEBPACK_IMPORTED_MODULE_20__/* .Typography */ .o} {
    color: ${theme.colors.primary600};
    font-weight: ${theme.fontWeights.bold};
  }
  ${CarretIcon} {
    display: block;

    path {
      fill: ${theme.colors.primary600};
    }
  }
`;
const ConditionsButtonImpl = ({
  onClick,
  className,
  hasConditions = false,
  variant = "tertiary"
}) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .A)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ButtonContainer, { hasConditions, className, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .Button */ .$, { variant, startIcon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .A, {}), onClick, children: formatMessage({
    id: "global.settings",
    defaultMessage: "Settings"
  }) }) });
};
const ButtonContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Ay)((0,_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .a))`
  ${({ hasConditions, disabled, theme }) => hasConditions && `
    &:before {
      content: '';
      position: absolute;
      top: -3px;
      left: -10px;
      width: 6px;
      height: 6px;
      border-radius: ${20 / 16}rem;;
      background: ${disabled ? theme.colors.neutral100 : theme.colors.primary600};
    }
  `}
`;
const ConditionsButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Ay)(ConditionsButtonImpl)``;
const ConditionsModal = ({
  actions = [],
  headerBreadCrumbs = [],
  isFormDisabled,
  onClosed,
  onToggle
}) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .A)();
  const { availableConditions, modifiedData, onChangeConditions } = usePermissionsDataManager();
  const arrayOfOptionsGroupedByCategory = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => {
    return Object.entries(lodash_groupBy__WEBPACK_IMPORTED_MODULE_32__(availableConditions, "category"));
  }, [availableConditions]);
  const actionsToDisplay = actions.filter(
    // @ts-expect-error – TODO: fix this type issue
    ({ isDisplayed, hasSomeActionsSelected, hasAllActionsSelected }) => isDisplayed && Boolean(hasSomeActionsSelected || hasAllActionsSelected)
  );
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_1__.useState(
    createDefaultConditionsForm(actionsToDisplay, modifiedData, arrayOfOptionsGroupedByCategory)
  );
  const handleChange = (name, values) => {
    setState(
      (0,immer__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Ay)((draft) => {
        if (!draft[name]) {
          draft[name] = {};
        }
        if (!draft[name].default) {
          draft[name].default = {};
        }
        draft[name].default = values;
      })
    );
  };
  const handleSubmit = () => {
    const conditionsWithoutCategory = Object.entries(state).reduce(
      (acc, current) => {
        const [key, value] = current;
        const merged = Object.values(value).reduce((acc1, current1) => {
          return { ...acc1, ...current1 };
        }, {});
        acc[key] = merged;
        return acc;
      },
      {}
    );
    onChangeConditions(conditionsWithoutCategory);
    onToggle();
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_11__/* .ModalLayout */ .k, { labelledBy: "condition-modal-breadcrumbs", onClose: onClosed, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_12__/* .ModalHeader */ .r, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system_v2__WEBPACK_IMPORTED_MODULE_39__/* .Breadcrumbs */ .B, { id: "condition-modal-breadcrumbs", label: headerBreadCrumbs.join(", "), children: headerBreadCrumbs.map((label, index, arr) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system_v2__WEBPACK_IMPORTED_MODULE_40__/* .Crumb */ .m, { isCurrent: index === arr.length - 1, children: lodash_upperFirst__WEBPACK_IMPORTED_MODULE_41__(
      formatMessage({
        id: label,
        defaultMessage: label
      })
    ) }, label)) }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_14__/* .ModalBody */ .c, { children: [
      actionsToDisplay.length === 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_20__/* .Typography */ .o, { children: formatMessage({
        id: "Settings.permissions.conditions.no-actions",
        defaultMessage: "You first need to select actions (create, read, update, ...) before defining conditions on them."
      }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", { children: actionsToDisplay.map(({ actionId, label, pathToConditionsObject }, index) => {
        const name = pathToConditionsObject.join("..");
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          ActionRow,
          {
            arrayOfOptionsGroupedByCategory,
            label,
            isFormDisabled,
            isGrey: index % 2 === 0,
            name,
            onChange: handleChange,
            value: lodash_get__WEBPACK_IMPORTED_MODULE_24__(state, name, {})
          },
          actionId
        );
      }) })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _strapi_design_system__WEBPACK_IMPORTED_MODULE_13__/* .ModalFooter */ .j,
      {
        startActions: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .Button */ .$, { variant: "tertiary", onClick: onToggle, children: formatMessage({ id: "app.components.Button.cancel", defaultMessage: "Cancel" }) }),
        endActions: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .Button */ .$, { onClick: handleSubmit, children: formatMessage({
          id: "Settings.permissions.conditions.apply",
          defaultMessage: "Apply"
        }) })
      }
    )
  ] });
};
const createDefaultConditionsForm = (actionsToDisplay, modifiedData, arrayOfOptionsGroupedByCategory) => {
  return actionsToDisplay.reduce((acc, current) => {
    const valueFromModifiedData = lodash_get__WEBPACK_IMPORTED_MODULE_24__(
      modifiedData,
      [...current.pathToConditionsObject, "conditions"],
      {}
    );
    const categoryDefaultForm = arrayOfOptionsGroupedByCategory.reduce((acc2, current2) => {
      const [categoryName, relatedConditions] = current2;
      const conditionsForm = relatedConditions.reduce((acc3, current3) => {
        acc3[current3.id] = lodash_get__WEBPACK_IMPORTED_MODULE_24__(valueFromModifiedData, current3.id, false);
        return acc3;
      }, {});
      acc2[categoryName] = conditionsForm;
      return acc2;
    }, {});
    acc[current.pathToConditionsObject.join("..")] = categoryDefaultForm;
    return acc;
  }, {});
};
const ActionRow = ({
  arrayOfOptionsGroupedByCategory,
  isFormDisabled = false,
  isGrey = false,
  label,
  name,
  onChange,
  value
}) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .A)();
  const handleChange = (val) => {
    if (onChange) {
      onChange(name, getNewStateFromChangedValues(arrayOfOptionsGroupedByCategory, val));
    }
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_15__/* .Flex */ .s, { as: "li", background: isGrey ? "neutral100" : "neutral0", paddingBottom: 3, paddingTop: 3, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_15__/* .Flex */ .s, { paddingLeft: 6, style: { width: 180 }, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_20__/* .Typography */ .o, { variant: "sigma", textColor: "neutral600", children: [
        formatMessage({
          id: "Settings.permissions.conditions.can",
          defaultMessage: "Can"
        }),
        "\xA0"
      ] }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_20__/* .Typography */ .o, { variant: "sigma", title: label, textColor: "primary600", ellipsis: true, children: formatMessage({
        id: `Settings.roles.form.permissions.${label.toLowerCase()}`,
        defaultMessage: label
      }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_20__/* .Typography */ .o, { variant: "sigma", textColor: "neutral600", children: [
        "\xA0",
        formatMessage({
          id: "Settings.permissions.conditions.when",
          defaultMessage: "When"
        })
      ] })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .a, { style: { maxWidth: 430, width: "100%" }, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _strapi_design_system__WEBPACK_IMPORTED_MODULE_16__/* .MultiSelectNested */ .B,
      {
        id: name,
        customizeContent: (values = []) => `${values.length} currently selected`,
        onChange: handleChange,
        value: getSelectedValues(value),
        options: getNestedOptions(arrayOfOptionsGroupedByCategory),
        disabled: isFormDisabled
      }
    ) })
  ] });
};
const getSelectedValues = (rawValue) => Object.values(rawValue).map(
  (x) => Object.entries(x).filter(([, value]) => value).map(([key]) => key)
).flat();
const getNestedOptions = (options) => options.reduce((acc, [label, children]) => {
  acc.push({
    label: capitalise(label),
    children: children.map((child) => ({
      label: child.displayName,
      value: child.id
    }))
  });
  return acc;
}, []);
const getNewStateFromChangedValues = (options, changedValues) => options.map(([, values]) => values).flat().reduce(
  (acc, curr) => ({ [curr.id]: changedValues.includes(curr.id), ...acc }),
  {}
);
const ContentTypeCollapses = ({
  actions = [],
  isFormDisabled,
  pathToData,
  subjects = []
}) => {
  const [collapseToOpen, setCollapseToOpen] = react__WEBPACK_IMPORTED_MODULE_1__.useState(null);
  const handleClickToggleCollapse = (collapseName) => () => {
    const nextCollapseToOpen = collapseToOpen === collapseName ? null : collapseName;
    setCollapseToOpen(nextCollapseToOpen);
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: subjects.map(({ uid, label, properties }, index) => {
    const isActive = collapseToOpen === uid;
    const availableActions = actions.map((action) => ({
      ...action,
      isDisplayed: Array.isArray(action.subjects) && action.subjects.indexOf(uid) !== -1
    }));
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
      _strapi_design_system__WEBPACK_IMPORTED_MODULE_15__/* .Flex */ .s,
      {
        direction: "column",
        display: "inline-flex",
        minWidth: "100%",
        borderColor: "primary600",
        borderWidth: isActive ? 1 : 0,
        children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            Collapse,
            {
              availableActions,
              isActive,
              isGrey: index % 2 === 0,
              isFormDisabled,
              label,
              onClickToggle: handleClickToggleCollapse(uid),
              pathToData: [pathToData, uid].join("..")
            }
          ),
          isActive && properties.map(({ label: propertyLabel, value, children: childrenForm }) => {
            return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              CollapsePropertyMatrix,
              {
                availableActions,
                childrenForm,
                isFormDisabled,
                label: propertyLabel,
                pathToData: [pathToData, uid].join(".."),
                propertyName: value
              },
              value
            );
          })
        ]
      },
      uid
    );
  }) });
};
const Collapse = ({
  availableActions = [],
  isActive = false,
  isGrey = false,
  isFormDisabled = false,
  label,
  onClickToggle,
  pathToData
}) => {
  const [isModalOpen, setModalOpen] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .A)();
  const { modifiedData, onChangeParentCheckbox, onChangeSimpleCheckbox } = usePermissionsDataManager();
  const handleToggleModalIsOpen = () => {
    setModalOpen((s) => !s);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };
  const mainData = lodash_get__WEBPACK_IMPORTED_MODULE_24__(modifiedData, pathToData.split(".."), {});
  const dataWithoutCondition = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => {
    return Object.keys(mainData).reduce((acc, current) => {
      acc[current] = lodash_omit__WEBPACK_IMPORTED_MODULE_33__(mainData[current], "conditions");
      return acc;
    }, {});
  }, [mainData]);
  const { hasAllActionsSelected, hasSomeActionsSelected } = getCheckboxState(dataWithoutCondition);
  const checkboxesActions = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => {
    return generateCheckboxesActions(availableActions, modifiedData, pathToData);
  }, [availableActions, modifiedData, pathToData]);
  const doesConditionButtonHasConditions = checkboxesActions.some((action) => action.hasConditions);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(BoxWrapper, { isActive, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
      Wrapper,
      {
        height: rowHeight,
        flex: 1,
        alignItems: "center",
        background: isGrey ? "neutral100" : "neutral0",
        children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            RowLabelWithCheckbox,
            {
              isCollapsable: true,
              isFormDisabled,
              label,
              checkboxName: pathToData,
              onChange: onChangeParentCheckbox,
              onClick: onClickToggle,
              someChecked: hasSomeActionsSelected,
              value: hasAllActionsSelected,
              isActive,
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Chevron, { paddingLeft: 2, children: isActive ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .A, {}) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .A, {}) })
            }
          ),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_15__/* .Flex */ .s, { style: { flex: 1 }, children: checkboxesActions.map(
            ({ actionId, hasSomeActionsSelected: hasSomeActionsSelected2, isDisplayed, ...restAction }) => {
              if (!isDisplayed) {
                return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(HiddenAction, {}, actionId);
              }
              const {
                hasConditions,
                hasAllActionsSelected: hasAllActionsSelected2,
                isParentCheckbox,
                checkboxName,
                label: permissionLabel
              } = restAction;
              if (isParentCheckbox) {
                return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Cell, { justifyContent: "center", alignItems: "center", children: [
                  hasConditions && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .a,
                    {
                      as: "span",
                      position: "absolute",
                      top: "-6px",
                      left: "37px",
                      width: "6px",
                      height: "6px",
                      borderRadius: "20px",
                      background: "primary600"
                    }
                  ),
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .BaseCheckbox */ .J,
                    {
                      disabled: isFormDisabled,
                      name: checkboxName,
                      "aria-label": formatMessage(
                        {
                          id: `Settings.permissions.select-by-permission`,
                          defaultMessage: "Select {label} permission"
                        },
                        { label: `${permissionLabel} ${label}` }
                      ),
                      onValueChange: (value) => {
                        onChangeParentCheckbox({
                          target: {
                            name: checkboxName,
                            value
                          }
                        });
                      },
                      indeterminate: hasSomeActionsSelected2,
                      value: hasAllActionsSelected2
                    }
                  )
                ] }, actionId);
              }
              return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Cell, { justifyContent: "center", alignItems: "center", children: [
                hasConditions && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .a,
                  {
                    as: "span",
                    position: "absolute",
                    top: "-6px",
                    left: "37px",
                    width: "6px",
                    height: "6px",
                    borderRadius: "20px",
                    background: "primary600"
                  }
                ),
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .BaseCheckbox */ .J,
                  {
                    disabled: isFormDisabled,
                    indeterminate: hasConditions,
                    name: checkboxName,
                    onValueChange: (value) => {
                      onChangeSimpleCheckbox({
                        target: {
                          name: checkboxName,
                          value
                        }
                      });
                    },
                    value: hasAllActionsSelected2
                  }
                )
              ] }, actionId);
            }
          ) }),
          isModalOpen && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            ConditionsModal,
            {
              headerBreadCrumbs: [label, "Settings.permissions.conditions.conditions"],
              actions: checkboxesActions,
              isFormDisabled,
              onClosed: handleModalClose,
              onToggle: handleToggleModalIsOpen
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .a, { transform: "translateY(10px)", right: "9px", position: "absolute", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      ConditionsButton,
      {
        onClick: handleToggleModalIsOpen,
        hasConditions: doesConditionButtonHasConditions
      }
    ) })
  ] });
};
const generateCheckboxesActions = (availableActions, modifiedData, pathToData) => {
  return availableActions.map(({ actionId, isDisplayed, applyToProperties, label }) => {
    if (!isDisplayed) {
      return { actionId, hasSomeActionsSelected: false, isDisplayed };
    }
    const baseCheckboxNameArray = [...pathToData.split(".."), actionId];
    const checkboxNameArray = lodash_isEmpty__WEBPACK_IMPORTED_MODULE_26__(applyToProperties) ? [...baseCheckboxNameArray, "properties", "enabled"] : baseCheckboxNameArray;
    const conditionsValue = lodash_get__WEBPACK_IMPORTED_MODULE_24__(modifiedData, [...baseCheckboxNameArray, "conditions"], null);
    const baseCheckboxAction = {
      actionId,
      checkboxName: checkboxNameArray.join(".."),
      hasConditions: createArrayOfValues(conditionsValue).some((val) => val),
      isDisplayed,
      label,
      pathToConditionsObject: baseCheckboxNameArray
    };
    if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_26__(applyToProperties)) {
      const value = lodash_get__WEBPACK_IMPORTED_MODULE_24__(modifiedData, checkboxNameArray, false);
      return {
        ...baseCheckboxAction,
        hasAllActionsSelected: value,
        hasSomeActionsSelected: value,
        isParentCheckbox: false
      };
    }
    const mainData = lodash_get__WEBPACK_IMPORTED_MODULE_24__(modifiedData, checkboxNameArray, null);
    const { hasAllActionsSelected, hasSomeActionsSelected } = getCheckboxState(mainData);
    return {
      ...baseCheckboxAction,
      hasAllActionsSelected,
      hasSomeActionsSelected,
      isParentCheckbox: true
    };
  });
};
const activeRowStyle = (theme, isActive) => `
  ${Wrapper} {
    background-color: ${theme.colors.primary100};
    color: ${theme.colors.primary600};
    border-radius: ${isActive ? "2px 2px 0 0" : "2px"};
  }
  ${Chevron} {
    display: flex;
  }
  ${ConditionsButton} {
    display: block;
  }
  &:hover {
    ${activeStyle(theme)}
  }

  &:focus-within {
    ${() => activeRowStyle(theme, isActive)}
  }
`;
const Wrapper = (0,styled_components__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Ay)((0,_strapi_design_system__WEBPACK_IMPORTED_MODULE_15__/* .Flex */ .s))`
  border: 1px solid transparent;
`;
const BoxWrapper = styled_components__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Ay.div`
  display: inline-flex;
  min-width: 100%;

  ${ConditionsButton} {
    display: none;
  }
  ${({ isActive, theme }) => isActive && activeRowStyle(theme, isActive)}
  &:hover {
    ${({ theme, isActive }) => activeRowStyle(theme, isActive)}
  }
`;
const Cell = (0,styled_components__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Ay)((0,_strapi_design_system__WEBPACK_IMPORTED_MODULE_15__/* .Flex */ .s))`
  width: ${cellWidth};
  position: relative;
`;
const Chevron = (0,styled_components__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Ay)((0,_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .a))`
  display: none;
  svg {
    width: 11px;
  }
  * {
    fill: ${({ theme }) => theme.colors.primary600};
  }
`;
const GlobalActions = ({ actions = [], isFormDisabled, kind }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .A)();
  const { modifiedData, onChangeCollectionTypeGlobalActionCheckbox } = usePermissionsDataManager();
  const displayedActions = actions.filter(({ subjects }) => subjects && subjects.length);
  const checkboxesState = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => {
    const actionsIds = displayedActions.map(({ actionId }) => actionId);
    const data = modifiedData[kind];
    const relatedActionsData = actionsIds.reduce(
      (acc, actionId) => {
        Object.keys(data).forEach((ctUid) => {
          const actionIdData = lodash_get__WEBPACK_IMPORTED_MODULE_24__(data, [ctUid, actionId]);
          const actionIdState = { [ctUid]: removeConditionKeyFromData(actionIdData) };
          if (!acc[actionId]) {
            acc[actionId] = actionIdState;
          } else {
            acc[actionId] = { ...acc[actionId], ...actionIdState };
          }
        });
        return acc;
      },
      {}
    );
    const checkboxesState2 = Object.keys(relatedActionsData).reduce((acc, current) => {
      acc[current] = getCheckboxState(relatedActionsData[current]);
      return acc;
    }, {});
    return checkboxesState2;
  }, [modifiedData, displayedActions, kind]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .a, { paddingBottom: 4, paddingTop: 6, style: { paddingLeft: firstRowWidth }, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_15__/* .Flex */ .s, { gap: 0, children: displayedActions.map(({ label, actionId }) => {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
      _strapi_design_system__WEBPACK_IMPORTED_MODULE_15__/* .Flex */ .s,
      {
        shrink: 0,
        width: cellWidth,
        direction: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 3,
        children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_20__/* .Typography */ .o, { variant: "sigma", textColor: "neutral500", children: formatMessage({
            id: `Settings.roles.form.permissions.${label.toLowerCase()}`,
            defaultMessage: label
          }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .BaseCheckbox */ .J,
            {
              disabled: isFormDisabled,
              onValueChange: (value) => {
                onChangeCollectionTypeGlobalActionCheckbox(kind, actionId, value);
              },
              name: actionId,
              "aria-label": formatMessage(
                {
                  id: `Settings.permissions.select-all-by-permission`,
                  defaultMessage: "Select all {label} permissions"
                },
                {
                  label: formatMessage({
                    id: `Settings.roles.form.permissions.${label.toLowerCase()}`,
                    defaultMessage: label
                  })
                }
              ),
              value: lodash_get__WEBPACK_IMPORTED_MODULE_24__(checkboxesState, [actionId, "hasAllActionsSelected"], false),
              indeterminate: lodash_get__WEBPACK_IMPORTED_MODULE_24__(checkboxesState, [actionId, "hasSomeActionsSelected"], false)
            }
          )
        ]
      },
      actionId
    );
  }) }) });
};
const ContentTypes = ({
  isFormDisabled,
  kind,
  layout: { actions, subjects }
}) => {
  const sortedSubjects = [...subjects].sort((a, b) => a.label.localeCompare(b.label));
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledBox, { background: "neutral0", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(GlobalActions, { actions, kind, isFormDisabled }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      ContentTypeCollapses,
      {
        actions,
        isFormDisabled,
        pathToData: kind,
        subjects: sortedSubjects
      }
    )
  ] });
};
const StyledBox = (0,styled_components__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Ay)((0,_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .a))`
  overflow-x: auto;
`;
const PluginsAndSettingsPermissions = ({
  layout,
  ...restProps
}) => {
  const [openedCategory, setOpenedCategory] = react__WEBPACK_IMPORTED_MODULE_1__.useState(null);
  const handleOpenCategory = (categoryName) => {
    setOpenedCategory(categoryName === openedCategory ? null : categoryName);
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .a, { padding: 6, background: "neutral0", children: layout.map(({ category, categoryId, childrenForm }, index) => {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      Row,
      {
        childrenForm,
        isOpen: openedCategory === category,
        isWhite: index % 2 === 1,
        name: category,
        onOpenCategory: handleOpenCategory,
        pathToData: [restProps.kind, categoryId],
        ...restProps
      },
      category
    );
  }) });
};
const Row = ({
  childrenForm,
  kind,
  name,
  isOpen = false,
  isFormDisabled = false,
  isWhite,
  onOpenCategory,
  pathToData
}) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .A)();
  const handleClick = () => {
    onOpenCategory(name);
  };
  const categoryName = name.split("::").pop() ?? "";
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Accordion */ .n,
    {
      expanded: isOpen,
      onToggle: handleClick,
      id: `accordion-${name}`,
      variant: isWhite ? "primary" : "secondary",
      children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .AccordionToggle */ .P,
          {
            title: capitalise(categoryName),
            description: `${formatMessage(
              { id: "Settings.permissions.category", defaultMessage: categoryName },
              { category: categoryName }
            )} ${kind === "plugins" ? "plugin" : kind}`
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .AccordionContent */ .u, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .a, { padding: 6, children: childrenForm.map(({ actions, subCategoryName, subCategoryId }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          SubCategory,
          {
            actions,
            categoryName,
            isFormDisabled,
            subCategoryName,
            pathToData: [...pathToData, subCategoryId]
          },
          subCategoryName
        )) }) })
      ]
    }
  );
};
const SubCategory = ({
  actions = [],
  categoryName,
  isFormDisabled,
  subCategoryName,
  pathToData
}) => {
  const [isModalOpen, setModalOpen] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
  const { modifiedData, onChangeParentCheckbox, onChangeSimpleCheckbox } = usePermissionsDataManager();
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .A)();
  const mainData = lodash_get__WEBPACK_IMPORTED_MODULE_24__(modifiedData, pathToData, {});
  const dataWithoutCondition = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => {
    return Object.keys(mainData).reduce((acc, current) => {
      acc[current] = removeConditionKeyFromData(mainData[current]);
      return acc;
    }, {});
  }, [mainData]);
  const { hasAllActionsSelected, hasSomeActionsSelected } = getCheckboxState(dataWithoutCondition);
  const handleToggleModalIsOpen = () => {
    setModalOpen((s) => !s);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };
  const formattedActions = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => {
    return actions.map((action) => {
      const checkboxName = [...pathToData, action.action, "properties", "enabled"];
      const checkboxValue = lodash_get__WEBPACK_IMPORTED_MODULE_24__(modifiedData, checkboxName, false);
      const conditionValue = lodash_get__WEBPACK_IMPORTED_MODULE_24__(modifiedData, [...pathToData, action.action, "conditions"], {});
      const hasConditions = createArrayOfValues(conditionValue).some((val) => val);
      return {
        ...action,
        isDisplayed: checkboxValue,
        checkboxName: checkboxName.join(".."),
        hasSomeActionsSelected: checkboxValue,
        value: checkboxValue,
        hasConditions,
        label: action.displayName,
        actionId: action.action,
        pathToConditionsObject: [...pathToData, action.action]
      };
    });
  }, [actions, modifiedData, pathToData]);
  const datum = lodash_get__WEBPACK_IMPORTED_MODULE_24__(modifiedData, [...pathToData], {});
  const doesButtonHasCondition = createArrayOfValues(
    Object.entries(datum).reduce((acc, current) => {
      const [catName, { conditions }] = current;
      acc[catName] = conditions;
      return acc;
    }, {})
  ).some((val) => val);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .a, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_15__/* .Flex */ .s, { justifyContent: "space-between", alignItems: "center", children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .a, { paddingRight: 4, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_20__/* .Typography */ .o, { variant: "sigma", textColor: "neutral600", children: subCategoryName }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Border, { flex: 1 }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .a, { paddingLeft: 4, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .Checkbox */ .S,
          {
            name: pathToData.join(".."),
            disabled: isFormDisabled,
            onValueChange: (value) => {
              onChangeParentCheckbox({
                target: {
                  name: pathToData.join(".."),
                  value
                }
              });
            },
            indeterminate: hasSomeActionsSelected,
            value: hasAllActionsSelected,
            children: formatMessage({ id: "app.utils.select-all", defaultMessage: "Select all" })
          }
        ) })
      ] }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_15__/* .Flex */ .s, { paddingTop: 6, paddingBottom: 6, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_9__/* .Grid */ .x, { gap: 2, style: { flex: 1 }, children: formattedActions.map(({ checkboxName, value, action, displayName, hasConditions }) => {
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_10__/* .GridItem */ .E, { col: 3, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CheckboxWrapper, { disabled: isFormDisabled, hasConditions, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .Checkbox */ .S,
            {
              name: checkboxName,
              disabled: isFormDisabled,
              onValueChange: (value2) => {
                onChangeSimpleCheckbox({
                  target: {
                    name: checkboxName,
                    value: value2
                  }
                });
              },
              value,
              children: displayName
            }
          ) }) }, action);
        }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          ConditionsButton,
          {
            hasConditions: doesButtonHasCondition,
            onClick: handleToggleModalIsOpen
          }
        )
      ] })
    ] }),
    isModalOpen && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      ConditionsModal,
      {
        headerBreadCrumbs: [categoryName, subCategoryName],
        actions: formattedActions,
        isFormDisabled,
        onClosed: handleModalClose,
        onToggle: handleToggleModalIsOpen
      }
    )
  ] });
};
const Border = (0,styled_components__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Ay)((0,_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .a))`
  align-self: center;
  border-top: 1px solid ${({ theme }) => theme.colors.neutral150};
`;
const CheckboxWrapper = styled_components__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Ay.div`
  position: relative;
  word-break: keep-all;
  ${({ hasConditions, disabled, theme }) => hasConditions && `
    &:before {
      content: '';
      position: absolute;
      top: ${-4 / 16}rem;
      left: ${-8 / 16}rem;
      width: ${6 / 16}rem;
      height: ${6 / 16}rem;
      border-radius: ${20 / 16}rem;
      background: ${disabled ? theme.colors.neutral100 : theme.colors.primary600};
    }
  `}
`;
const TAB_LABELS = [
  {
    labelId: "app.components.LeftMenuLinkContainer.collectionTypes",
    defaultMessage: "Collection Types",
    id: "collectionTypes"
  },
  {
    labelId: "app.components.LeftMenuLinkContainer.singleTypes",
    id: "singleTypes",
    defaultMessage: "Single Types"
  },
  {
    labelId: "app.components.LeftMenuLinkContainer.plugins",
    defaultMessage: "Plugins",
    id: "plugins"
  },
  {
    labelId: "app.components.LeftMenuLinkContainer.settings",
    defaultMessage: "Settings",
    id: "settings"
  }
];
const Permissions = react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(
  ({ layout, isFormDisabled, permissions = [] }, api) => {
    const [{ initialData, layouts, modifiedData }, dispatch] = react__WEBPACK_IMPORTED_MODULE_1__.useReducer(
      reducer,
      initialState,
      () => init(layout, permissions)
    );
    const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .A)();
    react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle(api, () => {
      return {
        getPermissions() {
          const collectionTypesDiff = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_21__/* .difference */ .iv)(
            initialData.collectionTypes,
            modifiedData.collectionTypes
          );
          const singleTypesDiff = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_21__/* .difference */ .iv)(initialData.singleTypes, modifiedData.singleTypes);
          const contentTypesDiff = { ...collectionTypesDiff, ...singleTypesDiff };
          let didUpdateConditions;
          if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_26__(contentTypesDiff)) {
            didUpdateConditions = false;
          } else {
            didUpdateConditions = Object.values(contentTypesDiff).some((permission = {}) => {
              return Object.values(permission).some(
                (permissionValue) => lodash_has__WEBPACK_IMPORTED_MODULE_25__(permissionValue, "conditions")
              );
            });
          }
          return { permissionsToSend: formatPermissionsForAPI(modifiedData), didUpdateConditions };
        },
        resetForm() {
          dispatch({ type: "RESET_FORM" });
        },
        setFormAfterSubmit() {
          dispatch({ type: "SET_FORM_AFTER_SUBMIT" });
        }
      };
    });
    const handleChangeCollectionTypeLeftActionRowCheckbox = (pathToCollectionType, propertyName, rowName, value) => {
      dispatch({
        type: "ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX",
        pathToCollectionType,
        propertyName,
        rowName,
        value
      });
    };
    const handleChangeCollectionTypeGlobalActionCheckbox = (collectionTypeKind, actionId, value) => {
      dispatch({
        type: "ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX",
        collectionTypeKind,
        actionId,
        value
      });
    };
    const handleChangeConditions = (conditions) => {
      dispatch({ type: "ON_CHANGE_CONDITIONS", conditions });
    };
    const handleChangeSimpleCheckbox = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(({ target: { name, value } }) => {
      dispatch({
        type: "ON_CHANGE_SIMPLE_CHECKBOX",
        keys: name,
        value
      });
    }, []);
    const handleChangeParentCheckbox = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(({ target: { name, value } }) => {
      dispatch({
        type: "ON_CHANGE_TOGGLE_PARENT_CHECKBOX",
        keys: name,
        value
      });
    }, []);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      PermissionsDataManagerProvider,
      {
        availableConditions: layout.conditions,
        modifiedData,
        onChangeConditions: handleChangeConditions,
        onChangeSimpleCheckbox: handleChangeSimpleCheckbox,
        onChangeParentCheckbox: handleChangeParentCheckbox,
        onChangeCollectionTypeLeftActionRowCheckbox: handleChangeCollectionTypeLeftActionRowCheckbox,
        onChangeCollectionTypeGlobalActionCheckbox: handleChangeCollectionTypeGlobalActionCheckbox,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
          _strapi_design_system__WEBPACK_IMPORTED_MODULE_19__/* .TabGroup */ .f,
          {
            id: "tabs",
            label: formatMessage({
              id: "Settings.permissions.users.tabs.label",
              defaultMessage: "Tabs Permissions"
            }),
            children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_17__/* .Tabs */ .t, { children: TAB_LABELS.map((tabLabel) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_17__/* .Tab */ .o, { children: formatMessage({ id: tabLabel.labelId, defaultMessage: tabLabel.defaultMessage }) }, tabLabel.id)) }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_18__/* .TabPanels */ .T, { style: { position: "relative" }, children: [
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_18__/* .TabPanel */ .K, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  ContentTypes,
                  {
                    layout: layouts.collectionTypes,
                    kind: "collectionTypes",
                    isFormDisabled
                  }
                ) }),
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_18__/* .TabPanel */ .K, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  ContentTypes,
                  {
                    layout: layouts.singleTypes,
                    kind: "singleTypes",
                    isFormDisabled
                  }
                ) }),
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_18__/* .TabPanel */ .K, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  PluginsAndSettingsPermissions,
                  {
                    layout: layouts.plugins,
                    kind: "plugins",
                    isFormDisabled
                  }
                ) }),
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_18__/* .TabPanel */ .K, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  PluginsAndSettingsPermissions,
                  {
                    layout: layouts.settings,
                    kind: "settings",
                    isFormDisabled
                  }
                ) })
              ] })
            ]
          }
        )
      }
    );
  }
);
const initialState = {
  initialData: {},
  modifiedData: {},
  layouts: {}
};
const reducer = (state, action) => (0,immer__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Ay)(state, (draftState) => {
  switch (action.type) {
    case "ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX": {
      const { collectionTypeKind, actionId, value } = action;
      const pathToData = ["modifiedData", collectionTypeKind];
      Object.keys(lodash_get__WEBPACK_IMPORTED_MODULE_24__(state, pathToData)).forEach((collectionType) => {
        const collectionTypeActionData = lodash_get__WEBPACK_IMPORTED_MODULE_24__(
          state,
          [...pathToData, collectionType, actionId],
          void 0
        );
        if (collectionTypeActionData) {
          let updatedValues = updateValues(collectionTypeActionData, value);
          if (!value && updatedValues.conditions) {
            const updatedConditions = updateValues(updatedValues.conditions, false);
            updatedValues = { ...updatedValues, conditions: updatedConditions };
          }
          lodash_set__WEBPACK_IMPORTED_MODULE_27__(draftState, [...pathToData, collectionType, actionId], updatedValues);
        }
      });
      break;
    }
    case "ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX": {
      const { pathToCollectionType, propertyName, rowName, value } = action;
      let nextModifiedDataState = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_23__(state.modifiedData);
      const pathToModifiedDataCollectionType = pathToCollectionType.split("..");
      const objToUpdate = lodash_get__WEBPACK_IMPORTED_MODULE_24__(nextModifiedDataState, pathToModifiedDataCollectionType, {});
      Object.keys(objToUpdate).forEach((actionId) => {
        if (lodash_has__WEBPACK_IMPORTED_MODULE_25__(objToUpdate[actionId], `properties.${propertyName}`)) {
          const objValue = lodash_get__WEBPACK_IMPORTED_MODULE_24__(objToUpdate, [actionId, "properties", propertyName, rowName]);
          const pathToDataToSet = [
            ...pathToModifiedDataCollectionType,
            actionId,
            "properties",
            propertyName,
            rowName
          ];
          if (!(0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_29__.F)(objValue)) {
            lodash_set__WEBPACK_IMPORTED_MODULE_27__(nextModifiedDataState, pathToDataToSet, value);
          } else {
            const updatedValue = updateValues(objValue, value);
            lodash_set__WEBPACK_IMPORTED_MODULE_27__(nextModifiedDataState, pathToDataToSet, updatedValue);
          }
        }
      });
      if (!value) {
        nextModifiedDataState = updateConditionsToFalse(nextModifiedDataState);
      }
      lodash_set__WEBPACK_IMPORTED_MODULE_27__(draftState, "modifiedData", nextModifiedDataState);
      break;
    }
    case "ON_CHANGE_CONDITIONS": {
      Object.entries(action.conditions).forEach((array) => {
        const [stringPathToData, conditionsToUpdate] = array;
        lodash_set__WEBPACK_IMPORTED_MODULE_27__(
          draftState,
          ["modifiedData", ...stringPathToData.split(".."), "conditions"],
          conditionsToUpdate
        );
      });
      break;
    }
    case "ON_CHANGE_SIMPLE_CHECKBOX": {
      let nextModifiedDataState = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_23__(state.modifiedData);
      lodash_set__WEBPACK_IMPORTED_MODULE_27__(nextModifiedDataState, [...action.keys.split("..")], action.value);
      if (!action.value) {
        nextModifiedDataState = updateConditionsToFalse(nextModifiedDataState);
      }
      lodash_set__WEBPACK_IMPORTED_MODULE_27__(draftState, "modifiedData", nextModifiedDataState);
      break;
    }
    case "ON_CHANGE_TOGGLE_PARENT_CHECKBOX": {
      const { keys, value } = action;
      const pathToValue = [...keys.split("..")];
      let nextModifiedDataState = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_23__(state.modifiedData);
      const oldValues = lodash_get__WEBPACK_IMPORTED_MODULE_24__(nextModifiedDataState, pathToValue, {});
      const updatedValues = updateValues(oldValues, value);
      lodash_set__WEBPACK_IMPORTED_MODULE_27__(nextModifiedDataState, pathToValue, updatedValues);
      if (!value) {
        nextModifiedDataState = updateConditionsToFalse(nextModifiedDataState);
      }
      lodash_set__WEBPACK_IMPORTED_MODULE_27__(draftState, ["modifiedData"], nextModifiedDataState);
      break;
    }
    case "RESET_FORM": {
      draftState.modifiedData = state.initialData;
      break;
    }
    case "SET_FORM_AFTER_SUBMIT": {
      draftState.initialData = state.modifiedData;
      break;
    }
    default:
      return draftState;
  }
});
const init = (layout, permissions) => {
  const {
    conditions,
    sections: { collectionTypes, singleTypes, plugins, settings }
  } = layout;
  const layouts = {
    collectionTypes,
    singleTypes,
    plugins: formatLayout(plugins, "plugin"),
    settings: formatLayout(settings, "category")
  };
  const defaultForm = {
    collectionTypes: createDefaultCTForm(collectionTypes, conditions, permissions),
    singleTypes: createDefaultCTForm(singleTypes, conditions, permissions),
    plugins: createDefaultForm(layouts.plugins, conditions, permissions),
    settings: createDefaultForm(layouts.settings, conditions, permissions)
  };
  return {
    initialData: defaultForm,
    modifiedData: defaultForm,
    layouts
  };
};



/***/ },

/***/ 76079
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ MultiSelectNested)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92132);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47610);
/* harmony import */ var _MultiSelect_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56654);



const MultiSelectNested = ({ options, ...props }) => {
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MultiSelect_mjs__WEBPACK_IMPORTED_MODULE_2__/* .MultiSelect */ .KF, { ...props, children: options.map((opt) => {
    if ("children" in opt) {
      return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MultiSelect_mjs__WEBPACK_IMPORTED_MODULE_2__/* .MultiSelectGroup */ .np, { label: opt.label, values: opt.children.map((child) => child.value.toString()), children: opt.children.map((child) => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(NestedOption, { value: child.value, children: child.label }, child.value)) }, opt.label);
    }
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MultiSelect_mjs__WEBPACK_IMPORTED_MODULE_2__/* .MultiSelectOption */ .fe, { value: opt.value, children: opt.label }, opt.value);
  }) });
};
const NestedOption = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay)((0,_MultiSelect_mjs__WEBPACK_IMPORTED_MODULE_2__/* .MultiSelectOption */ .fe))`
  padding-left: ${({ theme }) => theme.spaces[7]};
`;



/***/ }

}]);