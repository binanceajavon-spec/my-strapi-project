(self["webpackChunkmy_strapi_project"] = self["webpackChunkmy_strapi_project"] || []).push([[3328],{

/***/ 60759
(module, __unused_webpack_exports, __webpack_require__) {

var SetCache = __webpack_require__(70524), arrayIncludes = __webpack_require__(83289), arrayIncludesWith = __webpack_require__(96685), arrayMap = __webpack_require__(65483), baseUnary = __webpack_require__(75070), cacheHas = __webpack_require__(60260);
var LARGE_ARRAY_SIZE = 200;
function baseDifference(array, values, iteratee, comparator) {
  var index = -1, includes = arrayIncludes, isCommon = true, length = array.length, result = [], valuesLength = values.length;
  if (!length) {
    return result;
  }
  if (iteratee) {
    values = arrayMap(values, baseUnary(iteratee));
  }
  if (comparator) {
    includes = arrayIncludesWith;
    isCommon = false;
  } else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas;
    isCommon = false;
    values = new SetCache(values);
  }
  outer:
    while (++index < length) {
      var value = array[index], computed = iteratee == null ? value : iteratee(value);
      value = comparator || value !== 0 ? value : 0;
      if (isCommon && computed === computed) {
        var valuesIndex = valuesLength;
        while (valuesIndex--) {
          if (values[valuesIndex] === computed) {
            continue outer;
          }
        }
        result.push(value);
      } else if (!includes(values, computed, comparator)) {
        result.push(value);
      }
    }
  return result;
}
module.exports = baseDifference;


/***/ },

/***/ 97449
(module, __unused_webpack_exports, __webpack_require__) {

var baseForOwn = __webpack_require__(7754), createBaseEach = __webpack_require__(75821);
var baseEach = createBaseEach(baseForOwn);
module.exports = baseEach;


/***/ },

/***/ 7754
(module, __unused_webpack_exports, __webpack_require__) {

var baseFor = __webpack_require__(15634), keys = __webpack_require__(165);
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}
module.exports = baseForOwn;


/***/ },

/***/ 29884
(module, __unused_webpack_exports, __webpack_require__) {

var baseEach = __webpack_require__(97449), isArrayLike = __webpack_require__(69141);
function baseMap(collection, iteratee) {
  var index = -1, result = isArrayLike(collection) ? Array(collection.length) : [];
  baseEach(collection, function(value, key, collection2) {
    result[++index] = iteratee(value, key, collection2);
  });
  return result;
}
module.exports = baseMap;


/***/ },

/***/ 4191
(module, __unused_webpack_exports, __webpack_require__) {

var arrayMap = __webpack_require__(65483), baseGet = __webpack_require__(64005), baseIteratee = __webpack_require__(67734), baseMap = __webpack_require__(29884), baseSortBy = __webpack_require__(74565), baseUnary = __webpack_require__(75070), compareMultiple = __webpack_require__(48126), identity = __webpack_require__(60007), isArray = __webpack_require__(4642);
function baseOrderBy(collection, iteratees, orders) {
  if (iteratees.length) {
    iteratees = arrayMap(iteratees, function(iteratee) {
      if (isArray(iteratee)) {
        return function(value) {
          return baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
        };
      }
      return iteratee;
    });
  } else {
    iteratees = [identity];
  }
  var index = -1;
  iteratees = arrayMap(iteratees, baseUnary(baseIteratee));
  var result = baseMap(collection, function(value, key, collection2) {
    var criteria = arrayMap(iteratees, function(iteratee) {
      return iteratee(value);
    });
    return { "criteria": criteria, "index": ++index, "value": value };
  });
  return baseSortBy(result, function(object, other) {
    return compareMultiple(object, other, orders);
  });
}
module.exports = baseOrderBy;


/***/ },

/***/ 74565
(module) {

function baseSortBy(array, comparer) {
  var length = array.length;
  array.sort(comparer);
  while (length--) {
    array[length] = array[length].value;
  }
  return array;
}
module.exports = baseSortBy;


/***/ },

/***/ 64958
(module, __unused_webpack_exports, __webpack_require__) {

var isSymbol = __webpack_require__(69281);
function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== void 0, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
    var othIsDefined = other !== void 0, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
    if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
      return 1;
    }
    if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}
module.exports = compareAscending;


/***/ },

/***/ 48126
(module, __unused_webpack_exports, __webpack_require__) {

var compareAscending = __webpack_require__(64958);
function compareMultiple(object, other, orders) {
  var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
  while (++index < length) {
    var result = compareAscending(objCriteria[index], othCriteria[index]);
    if (result) {
      if (index >= ordersLength) {
        return result;
      }
      var order = orders[index];
      return result * (order == "desc" ? -1 : 1);
    }
  }
  return object.index - other.index;
}
module.exports = compareMultiple;


/***/ },

/***/ 75821
(module, __unused_webpack_exports, __webpack_require__) {

var isArrayLike = __webpack_require__(69141);
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
    while (fromRight ? index-- : ++index < length) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}
module.exports = createBaseEach;


/***/ },

/***/ 34542
(module, __unused_webpack_exports, __webpack_require__) {

var arrayMap = __webpack_require__(65483), baseIteratee = __webpack_require__(67734), baseMap = __webpack_require__(29884), isArray = __webpack_require__(4642);
function map(collection, iteratee) {
  var func = isArray(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee, 3));
}
module.exports = map;


/***/ },

/***/ 45635
(module, __unused_webpack_exports, __webpack_require__) {

var baseFlatten = __webpack_require__(87212), baseOrderBy = __webpack_require__(4191), baseRest = __webpack_require__(39226), isIterateeCall = __webpack_require__(3956);
var sortBy = baseRest(function(collection, iteratees) {
  if (collection == null) {
    return [];
  }
  var length = iteratees.length;
  if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
    iteratees = [];
  } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
    iteratees = [iteratees[0]];
  }
  return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
});
module.exports = sortBy;


/***/ },

/***/ 61468
(module, __unused_webpack_exports, __webpack_require__) {

var baseSlice = __webpack_require__(52196);
function tail(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseSlice(array, 1, length) : [];
}
module.exports = tail;


/***/ },

/***/ 6223
(module, __unused_webpack_exports, __webpack_require__) {

var baseDifference = __webpack_require__(60759), baseRest = __webpack_require__(39226), isArrayLikeObject = __webpack_require__(56793);
var without = baseRest(function(array, values) {
  return isArrayLikeObject(array) ? baseDifference(array, values) : [];
});
module.exports = without;


/***/ },

/***/ 23328
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Roles)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69751);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21272);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59201);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17703);
/* harmony import */ var _index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87814);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57237);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(44604);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(60888);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(94061);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(85963);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4181);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(90151);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(68074);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(88353);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(42455);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(74773);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(4198);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(55356);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(64871);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(11273);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(38413);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(83997);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(35513);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(25641);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(26127);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(90361);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(33363);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(7537);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(5287);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(30893);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(98765);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(46270);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(54514);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(20415);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(41909);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(5194);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(50612);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(61535);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(54894);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(74930);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(11163);
/* harmony import */ var lodash_upperFirst__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(39404);
/* harmony import */ var lodash_sortBy__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(45635);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(80219);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(47610);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(88761);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(346);
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(6223);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(34542);
/* harmony import */ var lodash_tail__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(61468);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(48940);
/* harmony import */ var lodash_take__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(501);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(12083);
























const UsersPermissions$2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
const UsersPermissionsProvider = ({ children, value }) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UsersPermissions$2.Provider, { value, children });
};
const useUsersPermissions = () => (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(UsersPermissions$2);
UsersPermissionsProvider.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_40__.node.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_40__.object.isRequired
};
function formatPluginName(pluginSlug) {
  switch (pluginSlug) {
    case "application":
      return "Application";
    case "plugin::content-manager":
      return "Content manager";
    case "plugin::content-type-builder":
      return "Content types builder";
    case "plugin::documentation":
      return "Documentation";
    case "plugin::email":
      return "Email";
    case "plugin::i18n":
      return "i18n";
    case "plugin::upload":
      return "Upload";
    case "plugin::users-permissions":
      return "Users-permissions";
    default:
      return lodash_upperFirst__WEBPACK_IMPORTED_MODULE_41__(pluginSlug.replace("api::", "").replace("plugin::", ""));
  }
}
const init$1 = (initialState2, permissions) => {
  const collapses = Object.keys(permissions).sort().map((name) => ({ name, isOpen: false }));
  return { ...initialState2, collapses };
};
const activeCheckboxWrapperStyles = (0,styled_components__WEBPACK_IMPORTED_MODULE_44__/* .css */ .AH)`
  background: ${(props) => props.theme.colors.primary100};
  svg {
    opacity: 1;
  }
`;
const CheckboxWrapper = (0,styled_components__WEBPACK_IMPORTED_MODULE_44__/* ["default"] */ .Ay)((0,_strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .Box */ .a))`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    opacity: 0;
    path {
      fill: ${(props) => props.theme.colors.primary600};
    }
  }

  /* Show active style both on hover and when the action is selected */
  ${(props) => props.isActive && activeCheckboxWrapperStyles}
  &:hover {
    ${activeCheckboxWrapperStyles}
  }
`;
const Border = styled_components__WEBPACK_IMPORTED_MODULE_44__/* ["default"] */ .Ay.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({ theme }) => theme.colors.neutral150};
`;
const SubCategory = ({ subCategory }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .A)();
  const { onChange, onChangeSelectAll, onSelectedAction, selectedAction, modifiedData } = useUsersPermissions();
  const currentScopedModifiedData = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    return lodash_get__WEBPACK_IMPORTED_MODULE_43__(modifiedData, subCategory.name, {});
  }, [modifiedData, subCategory]);
  const hasAllActionsSelected = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    return Object.values(currentScopedModifiedData).every((action) => action.enabled === true);
  }, [currentScopedModifiedData]);
  const hasSomeActionsSelected = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    return Object.values(currentScopedModifiedData).some((action) => action.enabled === true) && !hasAllActionsSelected;
  }, [currentScopedModifiedData, hasAllActionsSelected]);
  const handleChangeSelectAll = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
    ({ target: { name } }) => {
      onChangeSelectAll({ target: { name, value: !hasAllActionsSelected } });
    },
    [hasAllActionsSelected, onChangeSelectAll]
  );
  const isActionSelected = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
    (actionName) => {
      return selectedAction === actionName;
    },
    [selectedAction]
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .Box */ .a, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_21__/* .Flex */ .s, { justifyContent: "space-between", alignItems: "center", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .Box */ .a, { paddingRight: 4, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_29__/* .Typography */ .o, { variant: "sigma", textColor: "neutral600", children: subCategory.label }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Border, {}),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .Box */ .a, { paddingLeft: 4, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _strapi_design_system__WEBPACK_IMPORTED_MODULE_10__/* .Checkbox */ .S,
        {
          name: subCategory.name,
          value: hasAllActionsSelected,
          onValueChange: (value) => handleChangeSelectAll({ target: { name: subCategory.name, value } }),
          indeterminate: hasSomeActionsSelected,
          children: formatMessage({ id: "app.utils.select-all", defaultMessage: "Select all" })
        }
      ) })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_21__/* .Flex */ .s, { paddingTop: 6, paddingBottom: 6, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_11__/* .Grid */ .x, { gap: 2, style: { flex: 1 }, children: subCategory.actions.map((action) => {
      const name = `${action.name}.enabled`;
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_12__/* .GridItem */ .E, { col: 6, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CheckboxWrapper, { isActive: isActionSelected(action.name), padding: 2, hasRadius: true, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _strapi_design_system__WEBPACK_IMPORTED_MODULE_10__/* .Checkbox */ .S,
          {
            value: lodash_get__WEBPACK_IMPORTED_MODULE_43__(modifiedData, name, false),
            name,
            onValueChange: (value) => onChange({ target: { name, value } }),
            children: action.label
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
          "button",
          {
            type: "button",
            onClick: () => onSelectedAction(action.name),
            style: { display: "inline-flex", alignItems: "center" },
            children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_30__/* .VisuallyHidden */ .s, { as: "span", children: formatMessage(
                {
                  id: "app.utils.show-bound-route",
                  defaultMessage: "Show bound route for {route}"
                },
                {
                  route: action.name
                }
              ) }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .A, {})
            ]
          }
        )
      ] }) }, action.name);
    }) }) })
  ] });
};
SubCategory.propTypes = {
  subCategory: prop_types__WEBPACK_IMPORTED_MODULE_40__.object.isRequired
};
const PermissionRow = ({ name, permissions }) => {
  const subCategories = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    return lodash_sortBy__WEBPACK_IMPORTED_MODULE_42__(
      Object.values(permissions.controllers).reduce((acc, curr, index) => {
        const currentName = `${name}.controllers.${Object.keys(permissions.controllers)[index]}`;
        const actions = lodash_sortBy__WEBPACK_IMPORTED_MODULE_42__(
          Object.keys(curr).reduce((acc2, current) => {
            return [
              ...acc2,
              {
                ...curr[current],
                label: current,
                name: `${currentName}.${current}`
              }
            ];
          }, []),
          "label"
        );
        return [
          ...acc,
          {
            actions,
            label: Object.keys(permissions.controllers)[index],
            name: currentName
          }
        ];
      }, []),
      "label"
    );
  }, [name, permissions]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .Box */ .a, { padding: 6, children: subCategories.map((subCategory) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SubCategory, { subCategory }, subCategory.name)) });
};
PermissionRow.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_40__.string.isRequired,
  permissions: prop_types__WEBPACK_IMPORTED_MODULE_40__.object.isRequired
};
const initialState$1 = {
  collapses: []
};
const reducer$1 = (state, action) => (
  // eslint-disable-next-line consistent-return
  (0,immer__WEBPACK_IMPORTED_MODULE_45__/* ["default"] */ .Ay)(state, (draftState) => {
    switch (action.type) {
      case "TOGGLE_COLLAPSE": {
        draftState.collapses = state.collapses.map((collapse, index) => {
          if (index === action.index) {
            return { ...collapse, isOpen: !collapse.isOpen };
          }
          return { ...collapse, isOpen: false };
        });
        break;
      }
      default:
        return draftState;
    }
  })
);
const Permissions = () => {
  const { modifiedData } = useUsersPermissions();
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .A)();
  const [{ collapses }, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(
    reducer$1,
    initialState$1,
    (state) => init$1(state, modifiedData)
  );
  const handleToggle = (index) => dispatch({
    type: "TOGGLE_COLLAPSE",
    index
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_21__/* .Flex */ .s, { direction: "column", alignItems: "stretch", gap: 1, children: collapses.map((collapse, index) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .Accordion */ .n,
    {
      expanded: collapse.isOpen,
      onToggle: () => handleToggle(index),
      variant: index % 2 === 0 ? "secondary" : void 0,
      children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .AccordionToggle */ .P,
          {
            title: formatPluginName(collapse.name),
            description: formatMessage(
              {
                id: "users-permissions.Plugin.permissions.plugins.description",
                defaultMessage: "Define all allowed actions for the {name} plugin."
              },
              { name: collapse.name }
            ),
            variant: index % 2 ? "primary" : "secondary"
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .AccordionContent */ .u, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PermissionRow, { permissions: modifiedData[collapse.name], name: collapse.name }) })
      ]
    },
    collapse.name
  )) });
};
const getMethodColor = (verb) => {
  switch (verb) {
    case "POST": {
      return {
        text: "success600",
        border: "success200",
        background: "success100"
      };
    }
    case "GET": {
      return {
        text: "secondary600",
        border: "secondary200",
        background: "secondary100"
      };
    }
    case "PUT": {
      return {
        text: "warning600",
        border: "warning200",
        background: "warning100"
      };
    }
    case "DELETE": {
      return {
        text: "danger600",
        border: "danger200",
        background: "danger100"
      };
    }
    default: {
      return {
        text: "neutral600",
        border: "neutral200",
        background: "neutral100"
      };
    }
  }
};
const MethodBox = (0,styled_components__WEBPACK_IMPORTED_MODULE_44__/* ["default"] */ .Ay)((0,_strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .Box */ .a))`
  margin: -1px;
  border-radius: ${({ theme }) => theme.spaces[1]} 0 0 ${({ theme }) => theme.spaces[1]};
`;
function BoundRoute({ route }) {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .A)();
  const { method, handler: title, path } = route;
  const formattedRoute = path ? lodash_tail__WEBPACK_IMPORTED_MODULE_49__(path.split("/")) : [];
  const [controller = "", action = ""] = title ? title.split(".") : [];
  const colors = getMethodColor(route.method);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_21__/* .Flex */ .s, { direction: "column", alignItems: "stretch", gap: 2, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_29__/* .Typography */ .o, { variant: "delta", as: "h3", children: [
      formatMessage({
        id: "users-permissions.BoundRoute.title",
        defaultMessage: "Bound route to"
      }),
      "\xA0",
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: controller }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_29__/* .Typography */ .o, { variant: "delta", textColor: "primary600", children: [
        ".",
        action
      ] })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_21__/* .Flex */ .s, { hasRadius: true, background: "neutral0", borderColor: "neutral200", gap: 0, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MethodBox, { background: colors.background, borderColor: colors.border, padding: 2, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_29__/* .Typography */ .o, { fontWeight: "bold", textColor: colors.text, children: method }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .Box */ .a, { paddingLeft: 2, paddingRight: 2, children: lodash_map__WEBPACK_IMPORTED_MODULE_48__(formattedRoute, (value) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_29__/* .Typography */ .o, { textColor: value.includes(":") ? "neutral600" : "neutral900", children: [
        "/",
        value
      ] }, value)) })
    ] })
  ] });
}
BoundRoute.defaultProps = {
  route: {
    handler: "Nocontroller.error",
    method: "GET",
    path: "/there-is-no-path"
  }
};
BoundRoute.propTypes = {
  route: prop_types__WEBPACK_IMPORTED_MODULE_40__.shape({
    handler: prop_types__WEBPACK_IMPORTED_MODULE_40__.string,
    method: prop_types__WEBPACK_IMPORTED_MODULE_40__.string,
    path: prop_types__WEBPACK_IMPORTED_MODULE_40__.string
  })
};
const Policies = () => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .A)();
  const { selectedAction, routes } = useUsersPermissions();
  const path = lodash_without__WEBPACK_IMPORTED_MODULE_47__(selectedAction.split("."), "controllers");
  const controllerRoutes = lodash_get__WEBPACK_IMPORTED_MODULE_43__(routes, path[0]);
  const pathResolved = path.slice(1).join(".");
  const displayedRoutes = lodash_isEmpty__WEBPACK_IMPORTED_MODULE_46__(controllerRoutes) ? [] : controllerRoutes.filter((o) => o.handler.endsWith(pathResolved));
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_12__/* .GridItem */ .E,
    {
      col: 5,
      background: "neutral150",
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 7,
      paddingRight: 7,
      style: { minHeight: "100%" },
      children: selectedAction ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_21__/* .Flex */ .s, { direction: "column", alignItems: "stretch", gap: 2, children: displayedRoutes.map((route, key) => (
        // eslint-disable-next-line react/no-array-index-key
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BoundRoute, { route }, key)
      )) }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_21__/* .Flex */ .s, { direction: "column", alignItems: "stretch", gap: 2, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_29__/* .Typography */ .o, { variant: "delta", as: "h3", children: formatMessage({
          id: "users-permissions.Policies.header.title",
          defaultMessage: "Advanced settings"
        }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_29__/* .Typography */ .o, { as: "p", textColor: "neutral600", children: formatMessage({
          id: "users-permissions.Policies.header.hint",
          defaultMessage: "Select the application's actions or the plugin's actions and click on the cog icon to display the bound route"
        }) })
      ] })
    }
  );
};
const init = (state, permissions, routes) => {
  return {
    ...state,
    initialData: permissions,
    modifiedData: permissions,
    routes
  };
};
const initialState = {
  initialData: {},
  modifiedData: {},
  routes: {},
  selectedAction: "",
  policies: []
};
const reducer = (state, action) => (0,immer__WEBPACK_IMPORTED_MODULE_45__/* ["default"] */ .Ay)(state, (draftState) => {
  switch (action.type) {
    case "ON_CHANGE": {
      const keysLength = action.keys.length;
      const isChangingCheckbox = action.keys[keysLength - 1] === "enabled";
      if (action.value && isChangingCheckbox) {
        const selectedAction = lodash_take__WEBPACK_IMPORTED_MODULE_51__(action.keys, keysLength - 1).join(".");
        draftState.selectedAction = selectedAction;
      }
      lodash_set__WEBPACK_IMPORTED_MODULE_50__(draftState, ["modifiedData", ...action.keys], action.value);
      break;
    }
    case "ON_CHANGE_SELECT_ALL": {
      const pathToValue = ["modifiedData", ...action.keys];
      const oldValues = lodash_get__WEBPACK_IMPORTED_MODULE_43__(state, pathToValue, {});
      const updatedValues = Object.keys(oldValues).reduce((acc, current) => {
        acc[current] = { ...oldValues[current], enabled: action.value };
        return acc;
      }, {});
      lodash_set__WEBPACK_IMPORTED_MODULE_50__(draftState, pathToValue, updatedValues);
      break;
    }
    case "ON_RESET": {
      draftState.modifiedData = state.initialData;
      break;
    }
    case "ON_SUBMIT_SUCCEEDED": {
      draftState.initialData = state.modifiedData;
      break;
    }
    case "SELECT_ACTION": {
      const { actionToSelect } = action;
      draftState.selectedAction = actionToSelect === state.selectedAction ? "" : actionToSelect;
      break;
    }
    default:
      return draftState;
  }
});
const UsersPermissions = (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({ permissions, routes }, ref) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .A)();
  const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(
    reducer,
    initialState,
    (state2) => init(state2, permissions, routes)
  );
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(ref, () => ({
    getPermissions() {
      return {
        permissions: state.modifiedData
      };
    },
    resetForm() {
      dispatch({ type: "ON_RESET" });
    },
    setFormAfterSubmit() {
      dispatch({ type: "ON_SUBMIT_SUCCEEDED" });
    }
  }));
  const handleChange = ({ target: { name, value } }) => dispatch({
    type: "ON_CHANGE",
    keys: name.split("."),
    value: value === "empty__string_value" ? "" : value
  });
  const handleChangeSelectAll = ({ target: { name, value } }) => dispatch({
    type: "ON_CHANGE_SELECT_ALL",
    keys: name.split("."),
    value
  });
  const handleSelectedAction = (actionToSelect) => dispatch({
    type: "SELECT_ACTION",
    actionToSelect
  });
  const providerValue = {
    ...state,
    onChange: handleChange,
    onChangeSelectAll: handleChangeSelectAll,
    onSelectedAction: handleSelectedAction
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UsersPermissionsProvider, { value: providerValue, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_11__/* .Grid */ .x, { gap: 0, shadow: "filterShadow", hasRadius: true, background: "neutral0", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_12__/* .GridItem */ .E, { col: 7, paddingTop: 6, paddingBottom: 6, paddingLeft: 7, paddingRight: 7, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_21__/* .Flex */ .s, { direction: "column", alignItems: "stretch", gap: 6, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_21__/* .Flex */ .s, { direction: "column", alignItems: "stretch", gap: 2, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_29__/* .Typography */ .o, { variant: "delta", as: "h2", children: formatMessage({
          id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_4__.g)("Plugins.header.title"),
          defaultMessage: "Permissions"
        }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_29__/* .Typography */ .o, { as: "p", textColor: "neutral600", children: formatMessage({
          id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_4__.g)("Plugins.header.description"),
          defaultMessage: "Only actions bound by a route are listed below."
        }) })
      ] }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Permissions, {})
    ] }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Policies, {})
  ] }) });
});
UsersPermissions.propTypes = {
  permissions: prop_types__WEBPACK_IMPORTED_MODULE_40__.object.isRequired,
  routes: prop_types__WEBPACK_IMPORTED_MODULE_40__.object.isRequired
};
const UsersPermissions$1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(UsersPermissions);
const createRoleSchema = yup__WEBPACK_IMPORTED_MODULE_52__/* .object */ .Ik().shape({
  name: yup__WEBPACK_IMPORTED_MODULE_52__/* .string */ .Yj().required(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2__/* .translatedErrors */ .iW.required),
  description: yup__WEBPACK_IMPORTED_MODULE_52__/* .string */ .Yj().required(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2__/* .translatedErrors */ .iW.required)
});
const cleanPermissions = (permissions) => Object.keys(permissions).reduce((acc, current) => {
  const currentPermission = permissions[current].controllers;
  const cleanedControllers = Object.keys(currentPermission).reduce((acc2, curr) => {
    if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_46__(currentPermission[curr])) {
      return acc2;
    }
    acc2[curr] = currentPermission[curr];
    return acc2;
  }, {});
  if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_46__(cleanedControllers)) {
    return acc;
  }
  acc[current] = { controllers: cleanedControllers };
  return acc;
}, {});
const usePlugins = () => {
  const toggleNotification = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2__/* .useNotification */ .hN)();
  const { get: get2 } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2__/* .useFetchClient */ .ry)();
  const { formatAPIError } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2__/* .useAPIErrorHandler */ .wq)(_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_4__.g);
  const [
    {
      data: permissions,
      isLoading: isLoadingPermissions,
      error: permissionsError,
      refetch: refetchPermissions
    },
    { data: routes, isLoading: isLoadingRoutes, error: routesError, refetch: refetchRoutes }
  ] = (0,react_query__WEBPACK_IMPORTED_MODULE_39__.useQueries)([
    {
      queryKey: ["users-permissions", "permissions"],
      async queryFn() {
        const {
          data: { permissions: permissions2 }
        } = await get2(`/users-permissions/permissions`);
        return permissions2;
      }
    },
    {
      queryKey: ["users-permissions", "routes"],
      async queryFn() {
        const {
          data: { routes: routes2 }
        } = await get2(`/users-permissions/routes`);
        return routes2;
      }
    }
  ]);
  const refetchQueries = async () => {
    await Promise.all([refetchPermissions(), refetchRoutes()]);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (permissionsError) {
      toggleNotification({
        type: "warning",
        message: formatAPIError(permissionsError)
      });
    }
  }, [toggleNotification, permissionsError, formatAPIError]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (routesError) {
      toggleNotification({
        type: "warning",
        message: formatAPIError(routesError)
      });
    }
  }, [toggleNotification, routesError, formatAPIError]);
  const isLoading = isLoadingPermissions || isLoadingRoutes;
  return {
    // TODO: these return values need to be memoized, otherwise
    // they will create infinite rendering loops when used as
    // effect dependencies
    permissions: permissions ? cleanPermissions(permissions) : {},
    routes: routes ?? {},
    getData: refetchQueries,
    isLoading
  };
};
const CreatePage = () => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .A)();
  const toggleNotification = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2__/* .useNotification */ .hN)();
  const { goBack } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__/* .useHistory */ .W6)();
  const { lockApp, unlockApp } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2__/* .useOverlayBlocker */ .MA)();
  const { isLoading: isLoadingPlugins, permissions, routes } = usePlugins();
  const { trackUsage } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2__/* .useTracking */ .z1)();
  const permissionsRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef();
  const { post } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2__/* .useFetchClient */ .ry)();
  const mutation = (0,react_query__WEBPACK_IMPORTED_MODULE_39__.useMutation)((body) => post(`/users-permissions/roles`, body), {
    onError() {
      toggleNotification({
        type: "warning",
        message: {
          id: "notification.error",
          defaultMessage: "An error occurred"
        }
      });
    },
    onSuccess() {
      trackUsage("didCreateRole");
      toggleNotification({
        type: "success",
        message: {
          id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_4__.g)("Settings.roles.created"),
          defaultMessage: "Role created"
        }
      });
      goBack();
    }
  });
  const handleCreateRoleSubmit = async (data) => {
    lockApp();
    const permissions2 = permissionsRef.current.getPermissions();
    await mutation.mutate({ ...data, ...permissions2, users: [] });
    unlockApp();
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_20__/* .Main */ .g, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2__/* .SettingsPageTitle */ .x7, { name: "Roles" }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      formik__WEBPACK_IMPORTED_MODULE_37__/* .Formik */ .l1,
      {
        enableReinitialize: true,
        initialValues: { name: "", description: "" },
        onSubmit: handleCreateRoleSubmit,
        validationSchema: createRoleSchema,
        children: ({ handleSubmit, values, handleChange, errors }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2__/* .Form */ .lV, { noValidate: true, onSubmit: handleSubmit, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _strapi_design_system__WEBPACK_IMPORTED_MODULE_17__/* .HeaderLayout */ .Q,
            {
              primaryAction: !isLoadingPlugins && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_9__/* .Button */ .$, { type: "submit", loading: mutation.isLoading, startIcon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .A, {}), children: formatMessage({
                id: "global.save",
                defaultMessage: "Save"
              }) }),
              title: formatMessage({
                id: "Settings.roles.create.title",
                defaultMessage: "Create a role"
              }),
              subtitle: formatMessage({
                id: "Settings.roles.create.description",
                defaultMessage: "Define the rights given to the role"
              })
            }
          ),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_16__/* .ContentLayout */ .s, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
            _strapi_design_system__WEBPACK_IMPORTED_MODULE_21__/* .Flex */ .s,
            {
              background: "neutral0",
              direction: "column",
              alignItems: "stretch",
              gap: 7,
              hasRadius: true,
              paddingTop: 6,
              paddingBottom: 6,
              paddingLeft: 7,
              paddingRight: 7,
              shadow: "filterShadow",
              children: [
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_21__/* .Flex */ .s, { direction: "column", alignItems: "stretch", children: [
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_29__/* .Typography */ .o, { variant: "delta", as: "h2", children: formatMessage({
                    id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_4__.g)("EditPage.form.roles"),
                    defaultMessage: "Role details"
                  }) }),
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_11__/* .Grid */ .x, { gap: 4, children: [
                    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_12__/* .GridItem */ .E, { col: 6, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _strapi_design_system__WEBPACK_IMPORTED_MODULE_27__/* .TextInput */ .k,
                      {
                        name: "name",
                        value: values.name || "",
                        onChange: handleChange,
                        label: formatMessage({
                          id: "global.name",
                          defaultMessage: "Name"
                        }),
                        error: errors?.name ? formatMessage({ id: errors.name, defaultMessage: "Name is required" }) : false,
                        required: true
                      }
                    ) }),
                    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_12__/* .GridItem */ .E, { col: 6, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _strapi_design_system__WEBPACK_IMPORTED_MODULE_28__/* .Textarea */ .T,
                      {
                        id: "description",
                        value: values.description || "",
                        onChange: handleChange,
                        label: formatMessage({
                          id: "global.description",
                          defaultMessage: "Description"
                        }),
                        error: errors?.description ? formatMessage({
                          id: errors.description,
                          defaultMessage: "Description is required"
                        }) : false,
                        required: true
                      }
                    ) })
                  ] })
                ] }),
                !isLoadingPlugins && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  UsersPermissions$1,
                  {
                    ref: permissionsRef,
                    permissions,
                    routes
                  }
                )
              ]
            }
          ) })
        ] })
      }
    )
  ] });
};
const ProtectedRolesCreatePage = () => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2__/* .CheckPagePermissions */ .kz, { permissions: _index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_4__.P.createRole, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CreatePage, {}) });
const EditPage = () => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .A)();
  const toggleNotification = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2__/* .useNotification */ .hN)();
  const { lockApp, unlockApp } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2__/* .useOverlayBlocker */ .MA)();
  const {
    params: { id }
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__/* .useRouteMatch */ .W5)(`/settings/users-permissions/roles/:id`);
  const { get: get2 } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2__/* .useFetchClient */ .ry)();
  const { isLoading: isLoadingPlugins, routes } = usePlugins();
  const {
    data: role,
    isLoading: isLoadingRole,
    refetch: refetchRole
  } = (0,react_query__WEBPACK_IMPORTED_MODULE_39__.useQuery)(["users-permissions", "role", id], async () => {
    const {
      data: { role: role2 }
    } = await get2(`/users-permissions/roles/${id}`);
    return role2;
  });
  const permissionsRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef();
  const { put } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2__/* .useFetchClient */ .ry)();
  const { formatAPIError } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2__/* .useAPIErrorHandler */ .wq)();
  const mutation = (0,react_query__WEBPACK_IMPORTED_MODULE_39__.useMutation)((body) => put(`/users-permissions/roles/${id}`, body), {
    onError(error) {
      toggleNotification({
        type: "warning",
        message: formatAPIError(error)
      });
    },
    async onSuccess() {
      toggleNotification({
        type: "success",
        message: {
          id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_4__.g)("Settings.roles.created"),
          defaultMessage: "Role edited"
        }
      });
      await refetchRole();
    }
  });
  const handleEditRoleSubmit = async (data) => {
    lockApp();
    const permissions = permissionsRef.current.getPermissions();
    await mutation.mutate({ ...data, ...permissions, users: [] });
    unlockApp();
  };
  if (isLoadingRole) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2__/* .LoadingIndicatorPage */ .Bl, {});
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_20__/* .Main */ .g, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2__/* .SettingsPageTitle */ .x7, { name: "Roles" }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      formik__WEBPACK_IMPORTED_MODULE_37__/* .Formik */ .l1,
      {
        enableReinitialize: true,
        initialValues: { name: role.name, description: role.description },
        onSubmit: handleEditRoleSubmit,
        validationSchema: createRoleSchema,
        children: ({ handleSubmit, values, handleChange, errors }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2__/* .Form */ .lV, { noValidate: true, onSubmit: handleSubmit, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _strapi_design_system__WEBPACK_IMPORTED_MODULE_17__/* .HeaderLayout */ .Q,
            {
              primaryAction: !isLoadingPlugins && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _strapi_design_system__WEBPACK_IMPORTED_MODULE_9__/* .Button */ .$,
                {
                  disabled: role.code === "strapi-super-admin",
                  type: "submit",
                  loading: mutation.isLoading,
                  startIcon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .A, {}),
                  children: formatMessage({
                    id: "global.save",
                    defaultMessage: "Save"
                  })
                }
              ),
              title: role.name,
              subtitle: role.description,
              navigationAction: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .N_, { startIcon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .A, {}), to: "/settings/users-permissions/roles", children: formatMessage({
                id: "global.back",
                defaultMessage: "Back"
              }) })
            }
          ),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_16__/* .ContentLayout */ .s, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
            _strapi_design_system__WEBPACK_IMPORTED_MODULE_21__/* .Flex */ .s,
            {
              background: "neutral0",
              direction: "column",
              alignItems: "stretch",
              gap: 7,
              hasRadius: true,
              paddingTop: 6,
              paddingBottom: 6,
              paddingLeft: 7,
              paddingRight: 7,
              shadow: "filterShadow",
              children: [
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_21__/* .Flex */ .s, { direction: "column", alignItems: "stretch", gap: 4, children: [
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_29__/* .Typography */ .o, { variant: "delta", as: "h2", children: formatMessage({
                    id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_4__.g)("EditPage.form.roles"),
                    defaultMessage: "Role details"
                  }) }),
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_11__/* .Grid */ .x, { gap: 4, children: [
                    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_12__/* .GridItem */ .E, { col: 6, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _strapi_design_system__WEBPACK_IMPORTED_MODULE_27__/* .TextInput */ .k,
                      {
                        name: "name",
                        value: values.name || "",
                        onChange: handleChange,
                        label: formatMessage({
                          id: "global.name",
                          defaultMessage: "Name"
                        }),
                        error: errors?.name ? formatMessage({ id: errors.name, defaultMessage: "Name is required" }) : false,
                        required: true
                      }
                    ) }),
                    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_12__/* .GridItem */ .E, { col: 6, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _strapi_design_system__WEBPACK_IMPORTED_MODULE_28__/* .Textarea */ .T,
                      {
                        id: "description",
                        value: values.description || "",
                        onChange: handleChange,
                        label: formatMessage({
                          id: "global.description",
                          defaultMessage: "Description"
                        }),
                        error: errors?.description ? formatMessage({
                          id: errors.description,
                          defaultMessage: "Description is required"
                        }) : false,
                        required: true
                      }
                    ) })
                  ] })
                ] }),
                !isLoadingPlugins && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  UsersPermissions$1,
                  {
                    ref: permissionsRef,
                    permissions: role.permissions,
                    routes
                  }
                )
              ]
            }
          ) })
        ] })
      }
    )
  ] });
};
const ProtectedRolesEditPage = () => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2__/* .CheckPagePermissions */ .kz, { permissions: _index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_4__.P.updateRole, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(EditPage, {}) });
const EditLink = (0,styled_components__WEBPACK_IMPORTED_MODULE_44__/* ["default"] */ .Ay)((0,_strapi_design_system__WEBPACK_IMPORTED_MODULE_18__/* .Link */ .N))`
  align-items: center;
  height: ${(0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2__/* .pxToRem */ .a8)(32)};
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => `${theme.spaces[2]}}`};
  width: ${(0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2__/* .pxToRem */ .a8)(32)};

  svg {
    height: ${(0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2__/* .pxToRem */ .a8)(12)};
    width: ${(0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2__/* .pxToRem */ .a8)(12)};

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
const TableBody = ({ sortedRoles, canDelete, permissions, setRoleToDelete, onDelete }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .A)();
  const { push } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__/* .useHistory */ .W6)();
  const [showConfirmDelete, setShowConfirmDelete] = onDelete;
  const checkCanDeleteRole = (role) => canDelete && !["public", "authenticated"].includes(role.type);
  const handleClickDelete = (id) => {
    setRoleToDelete(id);
    setShowConfirmDelete(!showConfirmDelete);
  };
  const handleClickEdit = (id) => {
    push(`/settings/users-permissions/roles/${id}`);
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_23__/* .Tbody */ .N, { children: sortedRoles?.map((role) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_25__.Tr, { ...(0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2__/* .onRowClick */ .qM)({ fn: () => handleClickEdit(role.id) }), children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_26__.Td, { width: "20%", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_29__/* .Typography */ .o, { children: role.name }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_26__.Td, { width: "50%", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_29__/* .Typography */ .o, { children: role.description }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_26__.Td, { width: "30%", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_29__/* .Typography */ .o, { children: formatMessage(
      {
        id: "Roles.RoleRow.user-count",
        defaultMessage: "{number, plural, =0 {# user} one {# user} other {# users}}"
      },
      { number: role.nb_users }
    ) }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_26__.Td, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_21__/* .Flex */ .s, { justifyContent: "end", ..._strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2__/* .stopPropagation */ .dG, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2__/* .CheckPermissions */ .d4, { permissions: permissions.updateRole, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        EditLink,
        {
          to: `/settings/users-permissions/roles/${role.id}`,
          "aria-label": formatMessage(
            { id: "app.component.table.edit", defaultMessage: "Edit {target}" },
            { target: `${role.name}` }
          ),
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .A, {})
        }
      ) }),
      checkCanDeleteRole(role) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2__/* .CheckPermissions */ .d4, { permissions: permissions.deleteRole, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _strapi_design_system__WEBPACK_IMPORTED_MODULE_13__/* .IconButton */ .K,
        {
          onClick: () => handleClickDelete(role.id),
          noBorder: true,
          icon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .A, {}),
          label: formatMessage(
            { id: "global.delete-target", defaultMessage: "Delete {target}" },
            { target: `${role.name}` }
          )
        }
      ) })
    ] }) })
  ] }, role.name)) });
};
TableBody.defaultProps = {
  canDelete: false
};
TableBody.propTypes = {
  onDelete: prop_types__WEBPACK_IMPORTED_MODULE_40__.array.isRequired,
  permissions: prop_types__WEBPACK_IMPORTED_MODULE_40__.object.isRequired,
  setRoleToDelete: prop_types__WEBPACK_IMPORTED_MODULE_40__.func.isRequired,
  sortedRoles: prop_types__WEBPACK_IMPORTED_MODULE_40__.array.isRequired,
  canDelete: prop_types__WEBPACK_IMPORTED_MODULE_40__.bool
};
const fetchData = async (toggleNotification, notifyStatus) => {
  try {
    const { get: get2 } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2__/* .getFetchClient */ .GD)();
    const { data } = await get2("/users-permissions/roles");
    notifyStatus("The roles have loaded successfully");
    return data;
  } catch (err) {
    toggleNotification({
      type: "warning",
      message: { id: "notification.error" }
    });
    throw new Error(err);
  }
};
const deleteData = async (id, toggleNotification) => {
  try {
    const { del } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2__/* .getFetchClient */ .GD)();
    await del(`/users-permissions/roles/${id}`);
  } catch (error) {
    toggleNotification({
      type: "warning",
      message: { id: "notification.error", defaultMessage: "An error occured" }
    });
  }
};
const RolesListPage = () => {
  const { trackUsage } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2__/* .useTracking */ .z1)();
  const { formatMessage, locale } = (0,react_intl__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .A)();
  const toggleNotification = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2__/* .useNotification */ .hN)();
  const { notifyStatus } = (0,_strapi_design_system__WEBPACK_IMPORTED_MODULE_19__/* .useNotifyAT */ .W)();
  const [{ query }] = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2__/* .useQueryParams */ .sq)();
  const _q = query?._q || "";
  const [showConfirmDelete, setShowConfirmDelete] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [isConfirmButtonLoading, setIsConfirmButtonLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [roleToDelete, setRoleToDelete] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2__/* .useFocusWhenNavigate */ .L4)();
  const {
    isLoading: isLoadingForPermissions,
    allowedActions: { canRead, canDelete }
  } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2__/* .useRBAC */ .ec)({
    create: _index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_4__.P.createRole,
    read: _index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_4__.P.readRoles,
    update: _index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_4__.P.updateRole,
    delete: _index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_4__.P.deleteRole
  });
  const {
    isLoading: isLoadingForData,
    data: { roles },
    isFetching,
    refetch
  } = (0,react_query__WEBPACK_IMPORTED_MODULE_39__.useQuery)("get-roles", () => fetchData(toggleNotification, notifyStatus), {
    initialData: {},
    enabled: canRead
  });
  const { includes } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2__/* .useFilter */ .U2)(locale, {
    sensitivity: "base"
  });
  const formatter = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2__/* .useCollator */ .QM)(locale, {
    sensitivity: "base"
  });
  const isLoading = isLoadingForData || isFetching;
  const handleShowConfirmDelete = () => {
    setShowConfirmDelete(!showConfirmDelete);
  };
  const emptyLayout = {
    roles: {
      id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_4__.g)("Roles.empty"),
      defaultMessage: "You don't have any roles yet."
    },
    search: {
      id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_4__.g)("Roles.empty.search"),
      defaultMessage: "No roles match the search."
    }
  };
  const pageTitle = formatMessage({
    id: "global.roles",
    defaultMessage: "Roles"
  });
  const deleteMutation = (0,react_query__WEBPACK_IMPORTED_MODULE_39__.useMutation)((id) => deleteData(id, toggleNotification), {
    async onSuccess() {
      await refetch();
    }
  });
  const handleConfirmDelete = async () => {
    setIsConfirmButtonLoading(true);
    await deleteMutation.mutateAsync(roleToDelete);
    setShowConfirmDelete(!showConfirmDelete);
    setIsConfirmButtonLoading(false);
  };
  const sortedRoles = (roles || []).filter((role) => includes(role.name, _q) || includes(role.description, _q)).sort(
    (a, b) => formatter.compare(a.name, b.name) || formatter.compare(a.description, b.description)
  );
  const emptyContent = _q && !sortedRoles.length ? "search" : "roles";
  const colCount = 4;
  const rowCount = (roles?.length || 0) + 1;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_14__/* .Layout */ .P, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2__/* .SettingsPageTitle */ .x7, { name: pageTitle }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_20__/* .Main */ .g, { "aria-busy": isLoading, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _strapi_design_system__WEBPACK_IMPORTED_MODULE_17__/* .HeaderLayout */ .Q,
        {
          title: formatMessage({
            id: "global.roles",
            defaultMessage: "Roles"
          }),
          subtitle: formatMessage({
            id: "Settings.roles.list.description",
            defaultMessage: "List of roles"
          }),
          primaryAction: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2__/* .CheckPermissions */ .d4, { permissions: _index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_4__.P.createRole, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2__/* .LinkButton */ .z9,
            {
              to: "/settings/users-permissions/roles/new",
              onClick: () => trackUsage("willCreateRole"),
              startIcon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .A, {}),
              size: "S",
              children: formatMessage({
                id: (0,_index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_4__.g)("List.button.roles"),
                defaultMessage: "Add new role"
              })
            }
          ) })
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _strapi_design_system__WEBPACK_IMPORTED_MODULE_15__/* .ActionLayout */ .B,
        {
          startActions: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2__/* .SearchURLQuery */ .q7,
            {
              label: formatMessage({
                id: "app.component.search.label",
                defaultMessage: "Search"
              })
            }
          )
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_16__/* .ContentLayout */ .s, { children: [
        !canRead && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2__/* .NoPermissions */ .UW, {}),
        (isLoading || isLoadingForPermissions) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2__/* .LoadingIndicatorPage */ .Bl, {}),
        canRead && sortedRoles && sortedRoles?.length ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_22__/* .Table */ .X, { colCount, rowCount, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_24__/* .Thead */ .d, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_25__.Tr, { children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_26__.Th, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_29__/* .Typography */ .o, { variant: "sigma", textColor: "neutral600", children: formatMessage({ id: "global.name", defaultMessage: "Name" }) }) }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_26__.Th, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_29__/* .Typography */ .o, { variant: "sigma", textColor: "neutral600", children: formatMessage({
              id: "global.description",
              defaultMessage: "Description"
            }) }) }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_26__.Th, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_29__/* .Typography */ .o, { variant: "sigma", textColor: "neutral600", children: formatMessage({
              id: "global.users",
              defaultMessage: "Users"
            }) }) }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_26__.Th, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_30__/* .VisuallyHidden */ .s, { children: formatMessage({
              id: "global.actions",
              defaultMessage: "Actions"
            }) }) })
          ] }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            TableBody,
            {
              sortedRoles,
              canDelete,
              permissions: _index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_4__.P,
              setRoleToDelete,
              onDelete: [showConfirmDelete, setShowConfirmDelete]
            }
          )
        ] }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2__/* .EmptyStateLayout */ .pA, { content: emptyLayout[emptyContent] })
      ] }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2__/* .ConfirmDialog */ .TM,
        {
          isConfirmButtonLoading,
          onConfirm: handleConfirmDelete,
          onToggleDialog: handleShowConfirmDelete,
          isOpen: showConfirmDelete
        }
      )
    ] })
  ] });
};
const ProtectedRolesListPage = () => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2__/* .CheckPagePermissions */ .kz, { permissions: _index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_4__.P.accessRoles, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RolesListPage, {}) });
};
const Roles = () => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2__/* .CheckPagePermissions */ .kz, { permissions: _index_iu_7wU8h_mjs__WEBPACK_IMPORTED_MODULE_4__.P.accessRoles, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__/* .Switch */ .dO, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      react_router_dom__WEBPACK_IMPORTED_MODULE_3__/* .Route */ .qh,
      {
        path: "/settings/users-permissions/roles/new",
        component: ProtectedRolesCreatePage,
        exact: true
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      react_router_dom__WEBPACK_IMPORTED_MODULE_3__/* .Route */ .qh,
      {
        path: "/settings/users-permissions/roles/:id",
        component: ProtectedRolesEditPage,
        exact: true
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__/* .Route */ .qh, { path: "/settings/users-permissions/roles", component: ProtectedRolesListPage, exact: true }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__/* .Route */ .qh, { path: "", component: _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2__/* .AnErrorOccurred */ .hH })
  ] }) });
};



/***/ }

}]);