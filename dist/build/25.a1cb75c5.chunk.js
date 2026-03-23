(self["webpackChunkmy_strapi_project"] = self["webpackChunkmy_strapi_project"] || []).push([[25],{

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

/***/ 33999
(module, __unused_webpack_exports, __webpack_require__) {

var baseProperty = __webpack_require__(54574);
var asciiSize = baseProperty("length");
module.exports = asciiSize;


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

/***/ 3129
(module) {

var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function baseHas(object, key) {
  return object != null && hasOwnProperty.call(object, key);
}
module.exports = baseHas;


/***/ },

/***/ 41225
(module, __unused_webpack_exports, __webpack_require__) {

var baseGetTag = __webpack_require__(58823), isObjectLike = __webpack_require__(29265);
var regexpTag = "[object RegExp]";
function baseIsRegExp(value) {
  return isObjectLike(value) && baseGetTag(value) == regexpTag;
}
module.exports = baseIsRegExp;


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

/***/ 49605
(module, __unused_webpack_exports, __webpack_require__) {

var asciiSize = __webpack_require__(33999), hasUnicode = __webpack_require__(20598), unicodeSize = __webpack_require__(71387);
function stringSize(string) {
  return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
}
module.exports = stringSize;


/***/ },

/***/ 71387
(module) {

var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsVarRange = "\\ufe0e\\ufe0f";
var rsAstral = "[" + rsAstralRange + "]", rsCombo = "[" + rsComboRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsZWJ = "\\u200d";
var reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
function unicodeSize(string) {
  var result = reUnicode.lastIndex = 0;
  while (reUnicode.test(string)) {
    ++result;
  }
  return result;
}
module.exports = unicodeSize;


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

/***/ 22171
(module, __unused_webpack_exports, __webpack_require__) {

var baseIsRegExp = __webpack_require__(41225), baseUnary = __webpack_require__(75070), nodeUtil = __webpack_require__(77146);
var nodeIsRegExp = nodeUtil && nodeUtil.isRegExp;
var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
module.exports = isRegExp;


/***/ },

/***/ 34827
(module, __unused_webpack_exports, __webpack_require__) {

var baseGetTag = __webpack_require__(58823), isArray = __webpack_require__(4642), isObjectLike = __webpack_require__(29265);
var stringTag = "[object String]";
function isString(value) {
  return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
}
module.exports = isString;


/***/ },

/***/ 14311
(module, __unused_webpack_exports, __webpack_require__) {

var baseKeys = __webpack_require__(10247), getTag = __webpack_require__(73014), isArrayLike = __webpack_require__(69141), isString = __webpack_require__(34827), stringSize = __webpack_require__(49605);
var mapTag = "[object Map]", setTag = "[object Set]";
function size(collection) {
  if (collection == null) {
    return 0;
  }
  if (isArrayLike(collection)) {
    return isString(collection) ? stringSize(collection) : collection.length;
  }
  var tag = getTag(collection);
  if (tag == mapTag || tag == setTag) {
    return collection.size;
  }
  return baseKeys(collection).length;
}
module.exports = size;


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

/***/ 89102
(module, __unused_webpack_exports, __webpack_require__) {

var toString = __webpack_require__(62925);
function toLower(value) {
  return toString(value).toLowerCase();
}
module.exports = toLower;


/***/ },

/***/ 35336
(module, __unused_webpack_exports, __webpack_require__) {

var baseToString = __webpack_require__(86547), castSlice = __webpack_require__(88974), hasUnicode = __webpack_require__(20598), isObject = __webpack_require__(79886), isRegExp = __webpack_require__(22171), stringSize = __webpack_require__(49605), stringToArray = __webpack_require__(30660), toInteger = __webpack_require__(11146), toString = __webpack_require__(62925);
var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = "...";
var reFlags = /\w*$/;
function truncate(string, options) {
  var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
  if (isObject(options)) {
    var separator = "separator" in options ? options.separator : separator;
    length = "length" in options ? toInteger(options.length) : length;
    omission = "omission" in options ? baseToString(options.omission) : omission;
  }
  string = toString(string);
  var strLength = string.length;
  if (hasUnicode(string)) {
    var strSymbols = stringToArray(string);
    strLength = strSymbols.length;
  }
  if (length >= strLength) {
    return string;
  }
  var end = length - stringSize(omission);
  if (end < 1) {
    return omission;
  }
  var result = strSymbols ? castSlice(strSymbols, 0, end).join("") : string.slice(0, end);
  if (separator === void 0) {
    return result + omission;
  }
  if (strSymbols) {
    end += result.length - end;
  }
  if (isRegExp(separator)) {
    if (string.slice(end).search(separator)) {
      var match, substring = result;
      if (!separator.global) {
        separator = RegExp(separator.source, toString(reFlags.exec(separator)) + "g");
      }
      separator.lastIndex = 0;
      while (match = separator.exec(substring)) {
        var newEnd = match.index;
      }
      result = result.slice(0, newEnd === void 0 ? end : newEnd);
    }
  } else if (string.indexOf(baseToString(separator), end) != end) {
    var index = result.lastIndexOf(separator);
    if (index > -1) {
      result = result.slice(0, index);
    }
  }
  return result + omission;
}
module.exports = truncate;


/***/ },

/***/ 71547
(module, __unused_webpack_exports, __webpack_require__) {

var baseUniq = __webpack_require__(19913);
function uniq(array) {
  return array && array.length ? baseUniq(array) : [];
}
module.exports = uniq;


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



/***/ },

/***/ 40025
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ AttributeIcon),
  C: () => (/* binding */ COMPONENT_ICONS),
  a: () => (/* binding */ useFormModalNavigation),
  g: () => (/* binding */ getTrad),
  i: () => (/* binding */ index),
  u: () => (/* binding */ useDataManager)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(69751);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(21272);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.mjs
var Box = __webpack_require__(94061);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextButton/TextButton.mjs
var TextButton = __webpack_require__(18629);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Icon/Icon.mjs
var Icon = __webpack_require__(58805);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/MultiSelectNested.mjs
var MultiSelectNested = __webpack_require__(76079);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.mjs
var Flex = __webpack_require__(83997);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.mjs + 2 modules
var Typography = __webpack_require__(30893);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/KeyboardNavigable/KeyboardNavigable.mjs
var KeyboardNavigable = __webpack_require__(94293);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.mjs
var Grid = __webpack_require__(90151);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.mjs
var GridItem = __webpack_require__(68074);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/LinkButton/LinkButton.mjs
var LinkButton = __webpack_require__(25815);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalBody.mjs
var ModalBody = __webpack_require__(6239);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Tabs/TabGroup.mjs
var TabGroup = __webpack_require__(12081);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Tabs/Tabs.mjs + 1 modules
var Tabs = __webpack_require__(12408);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Divider/Divider.mjs
var Divider = __webpack_require__(48653);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Tabs/TabPanels.mjs
var TabPanels = __webpack_require__(24093);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/Select.mjs
var Select = __webpack_require__(43739);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/Option.mjs
var Option = __webpack_require__(95336);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/themes/utils.mjs
var utils = __webpack_require__(78732);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Checkbox/Checkbox.mjs
var Checkbox = __webpack_require__(4181);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextInput/TextInput.mjs
var TextInput = __webpack_require__(7537);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/NumberInput/NumberInput.mjs + 2 modules
var NumberInput = __webpack_require__(73989);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.mjs
var Button = __webpack_require__(85963);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalHeader.mjs
var ModalHeader = __webpack_require__(99248);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/Field.mjs
var Field = __webpack_require__(7153);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldLabel.mjs
var FieldLabel = __webpack_require__(8361);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/VisuallyHidden/VisuallyHidden.mjs
var VisuallyHidden = __webpack_require__(98765);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldInput.mjs
var FieldInput = __webpack_require__(74447);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Searchbar/Searchbar.mjs
var Searchbar = __webpack_require__(7297);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/IconButton/IconButton.mjs
var IconButton = __webpack_require__(88353);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Tooltip/Tooltip.mjs + 3 modules
var Tooltip = __webpack_require__(79739);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Combobox/Combobox.mjs
var Combobox = __webpack_require__(76517);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Combobox/ComboboxOption.mjs
var ComboboxOption = __webpack_require__(80782);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Textarea/Textarea.mjs
var Textarea = __webpack_require__(5287);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalLayout.mjs
var ModalLayout = __webpack_require__(61485);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalFooter.mjs
var ModalFooter = __webpack_require__(67030);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/Layout.mjs
var Layout = __webpack_require__(42455);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/dist/index.mjs + 63 modules
var dist = __webpack_require__(59201);
// EXTERNAL MODULE: ./node_modules/react-helmet/es/Helmet.js
var Helmet = __webpack_require__(14718);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(54894);
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(71389);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(17703);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/SubNav/SubNav.mjs + 1 modules
var SubNav = __webpack_require__(64310);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/SubNav/SubNavHeader.mjs + 12 modules
var SubNavHeader = __webpack_require__(98278);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/SubNav/SubNavSections.mjs
var SubNavSections = __webpack_require__(29404);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/SubNav/SubNavSection.mjs + 1 modules
var SubNavSection = __webpack_require__(87419);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/CarretDown.mjs
var CarretDown = __webpack_require__(9005);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(47610);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/hooks/useId.mjs
var useId = __webpack_require__(6556);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.mjs
var Box_Box = __webpack_require__(16442);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.mjs
var Flex_Flex = __webpack_require__(6378);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.mjs + 2 modules
var Typography_Typography = __webpack_require__(53274);
;// ./node_modules/@strapi/design-system/dist/v2/SubNav/SubNavLinkSection.mjs








const SubNavLinkSectionWrapper = (0,styled_components_browser_esm/* default */.Ay)((0,Box_Box/* Box */.a))`
  svg {
    height: ${4 / 16}rem;
    path {
      fill: ${({ theme }) => theme.colors.neutral700};
    }
  }
`;
const SubNavLinkSectionButton = styled_components_browser_esm/* default */.Ay.button`
  border: none;
  padding: 0;
  background: transparent;
  display: flex;
  align-items: center;
`;
const DropDownIconWrapper = styled_components_browser_esm/* default */.Ay.div`
  display: flex;
  align-items: center;
  width: ${12 / 16}rem;
  transform: rotateX(${({ rotated }) => rotated ? "0deg" : "180deg"});
`;
const SubNavLinkSection = ({ label, children, id }) => {
  const [isOpen, setOpenLinks] = (0,react.useState)(true);
  const listId = (0,useId/* useId */.B)(id);
  const handleClick = () => {
    setOpenLinks((prev) => !prev);
  };
  return (0,jsx_runtime.jsxs)(Box_Box/* Box */.a, { children: [(0,jsx_runtime.jsx)(SubNavLinkSectionWrapper, { paddingLeft: 7, paddingTop: 2, paddingBottom: 2, paddingRight: 4, children: (0,jsx_runtime.jsx)(Flex_Flex/* Flex */.s, { justifyContent: "space-between", children: (0,jsx_runtime.jsxs)(SubNavLinkSectionButton, { onClick: handleClick, "aria-expanded": isOpen, "aria-controls": listId, children: [(0,jsx_runtime.jsx)(DropDownIconWrapper, { rotated: isOpen, children: (0,jsx_runtime.jsx)(CarretDown/* default */.A, { "aria-hidden": true }) }), (0,jsx_runtime.jsx)(Box_Box/* Box */.a, { paddingLeft: 2, children: (0,jsx_runtime.jsx)(Typography_Typography/* Typography */.o, { as: "span", fontWeight: "semiBold", textColor: "neutral800", children: label }) })] }) }) }), isOpen && (0,jsx_runtime.jsx)("ul", { id: listId, children: react.Children.map(children, (child, index) => {
    return (0,jsx_runtime.jsx)("li", { children: child }, index);
  }) })] });
};


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/SubNav/SubNavLink.mjs
var SubNavLink = __webpack_require__(63996);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/Link/Link.mjs
var Link = __webpack_require__(21610);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/Breadcrumbs/Breadcrumbs.mjs + 1 modules
var Breadcrumbs = __webpack_require__(37679);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/Breadcrumbs/Crumb.mjs
var Crumb = __webpack_require__(60043);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/SimpleMenu/Menu.mjs + 51 modules
var Menu = __webpack_require__(30529);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Alien.mjs
var Alien = __webpack_require__(58215);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Apps.mjs
var Apps = __webpack_require__(66322);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Archive.mjs
var Archive = __webpack_require__(9032);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ArrowDown.mjs
var ArrowDown = __webpack_require__(51505);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ArrowLeft.mjs
var ArrowLeft = __webpack_require__(46270);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ArrowRight.mjs
var ArrowRight = __webpack_require__(72417);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ArrowUp.mjs
var ArrowUp = __webpack_require__(42798);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Attachment.mjs
var Attachment = __webpack_require__(22405);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Bell.mjs
var Bell = __webpack_require__(26865);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Bold.mjs
var Bold = __webpack_require__(74091);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Book.mjs
var Book = __webpack_require__(54429);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Briefcase.mjs
var Briefcase = __webpack_require__(69542);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Brush.mjs
var Brush = __webpack_require__(12602);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/BulletList.mjs
var BulletList = __webpack_require__(60426);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Calendar.mjs
var Calendar = __webpack_require__(96584);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Car.mjs
var Car = __webpack_require__(34280);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Cast.mjs
var Cast = __webpack_require__(63679);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ChartBubble.mjs
var ChartBubble = __webpack_require__(38864);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ChartCircle.mjs
var ChartCircle = __webpack_require__(12430);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ChartPie.mjs
var ChartPie = __webpack_require__(10908);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Check.mjs
var Check = __webpack_require__(54514);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Clock.mjs
var Clock = __webpack_require__(14448);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Cloud.mjs
var Cloud = __webpack_require__(8931);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Code.mjs
var Code = __webpack_require__(54245);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Cog.mjs
var Cog = __webpack_require__(20415);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Collapse.mjs
var Collapse = __webpack_require__(60623);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Command.mjs
var Command = __webpack_require__(26665);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Connector.mjs
var Connector = __webpack_require__(89315);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Crop.mjs
var Crop = __webpack_require__(18536);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Crown.mjs
var Crown = __webpack_require__(81355);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Cube.mjs
var Cube = __webpack_require__(27421);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Cup.mjs
var Cup = __webpack_require__(69646);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Cursor.mjs
var Cursor = __webpack_require__(31084);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Dashboard.mjs
var Dashboard = __webpack_require__(99334);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Database.mjs
var Database = __webpack_require__(37901);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Discuss.mjs
var Discuss = __webpack_require__(69512);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Doctor.mjs
var Doctor = __webpack_require__(19443);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Earth.mjs
var Earth = __webpack_require__(59598);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/EmotionHappy.mjs
var EmotionHappy = __webpack_require__(27249);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/EmotionUnhappy.mjs
var EmotionUnhappy = __webpack_require__(23646);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Envelop.mjs
var Envelop = __webpack_require__(34313);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Exit.mjs
var Exit = __webpack_require__(28442);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Expand.mjs
var Expand = __webpack_require__(86986);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Eye.mjs
var Eye = __webpack_require__(83925);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Feather.mjs
var Feather = __webpack_require__(64199);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/File.mjs
var File = __webpack_require__(4992);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/FileError.mjs
var FileError = __webpack_require__(85914);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/FilePdf.mjs
var FilePdf = __webpack_require__(25614);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Filter.mjs
var Filter = __webpack_require__(28604);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Folder.mjs
var Folder = __webpack_require__(17470);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Gate.mjs
var Gate = __webpack_require__(83060);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Gift.mjs
var Gift = __webpack_require__(32816);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Globe.mjs
var Globe = __webpack_require__(49389);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Grid.mjs
var dist_Grid = __webpack_require__(60362);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/HandHeart.mjs
var HandHeart = __webpack_require__(82151);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Hashtag.mjs
var Hashtag = __webpack_require__(51346);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Headphone.mjs
var Headphone = __webpack_require__(87868);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Heart.mjs
var Heart = __webpack_require__(38934);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/House.mjs
var House = __webpack_require__(39238);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Information.mjs
var Information = __webpack_require__(52512);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Italic.mjs
var Italic = __webpack_require__(87578);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Key.mjs
var Key = __webpack_require__(2919);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Landscape.mjs
var Landscape = __webpack_require__(64213);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Layer.mjs
var Layer = __webpack_require__(77701);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Layout.mjs
var dist_Layout = __webpack_require__(43896);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Lightbulb.mjs
var Lightbulb = __webpack_require__(93659);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Link.mjs
var dist_Link = __webpack_require__(28826);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Lock.mjs
var Lock = __webpack_require__(41231);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Magic.mjs
var Magic = __webpack_require__(3851);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ManyToMany.mjs
var ManyToMany = __webpack_require__(57549);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ManyToOne.mjs
var ManyToOne = __webpack_require__(47684);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ManyWays.mjs
var ManyWays = __webpack_require__(39783);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Medium.mjs
var Medium = __webpack_require__(1423);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Message.mjs
var Message = __webpack_require__(39527);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Microphone.mjs
var Microphone = __webpack_require__(82813);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Monitor.mjs
var Monitor = __webpack_require__(71656);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Moon.mjs
var Moon = __webpack_require__(65841);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Music.mjs
var Music = __webpack_require__(23483);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/OneToMany.mjs
var OneToMany = __webpack_require__(78580);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/OneToOne.mjs
var OneToOne = __webpack_require__(82431);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/OneWay.mjs
var OneWay = __webpack_require__(30899);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Paint.mjs
var Paint = __webpack_require__(47926);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/PaintBrush.mjs
var PaintBrush = __webpack_require__(54678);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/PaperPlane.mjs
var PaperPlane = __webpack_require__(64486);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Pencil.mjs
var Pencil = __webpack_require__(41909);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Phone.mjs
var Phone = __webpack_require__(77902);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Picture.mjs
var Picture = __webpack_require__(95628);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Pin.mjs
var Pin = __webpack_require__(20055);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/PinMap.mjs
var PinMap = __webpack_require__(4487);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Plane.mjs
var Plane = __webpack_require__(89292);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Play.mjs
var Play = __webpack_require__(98052);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Plus.mjs
var Plus = __webpack_require__(5194);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/PriceTag.mjs
var PriceTag = __webpack_require__(13955);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Puzzle.mjs
var Puzzle = __webpack_require__(38910);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Question.mjs
var Question = __webpack_require__(57574);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Quote.mjs
var Quote = __webpack_require__(97358);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Repeat.mjs
var Repeat = __webpack_require__(84447);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Restaurant.mjs
var Restaurant = __webpack_require__(84823);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Rocket.mjs
var Rocket = __webpack_require__(25490);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Rotate.mjs
var Rotate = __webpack_require__(19143);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Scissors.mjs
var Scissors = __webpack_require__(63931);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Search.mjs
var Search = __webpack_require__(60678);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Seed.mjs
var Seed = __webpack_require__(46469);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Server.mjs
var Server = __webpack_require__(15363);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Shield.mjs
var Shield = __webpack_require__(61377);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Shirt.mjs
var Shirt = __webpack_require__(90682);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ShoppingCart.mjs
var ShoppingCart = __webpack_require__(21396);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Slideshow.mjs
var Slideshow = __webpack_require__(44862);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Stack.mjs
var Stack = __webpack_require__(84114);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Star.mjs
var Star = __webpack_require__(42386);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Store.mjs
var Store = __webpack_require__(50929);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/StrikeThrough.mjs
var StrikeThrough = __webpack_require__(58971);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Sun.mjs
var Sun = __webpack_require__(24408);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Television.mjs
var Television = __webpack_require__(18762);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ThumbDown.mjs
var ThumbDown = __webpack_require__(25262);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ThumbUp.mjs
var ThumbUp = __webpack_require__(53485);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Train.mjs
var Train = __webpack_require__(87348);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Twitter.mjs
var Twitter = __webpack_require__(5503);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Typhoon.mjs
var Typhoon = __webpack_require__(22353);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Underline.mjs
var Underline = __webpack_require__(20126);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/User.mjs
var User = __webpack_require__(11171);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/VolumeMute.mjs
var VolumeMute = __webpack_require__(6499);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/VolumeUp.mjs
var VolumeUp = __webpack_require__(94959);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Walk.mjs
var Walk = __webpack_require__(76721);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Wheelchair.mjs
var Wheelchair = __webpack_require__(80906);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Write.mjs
var Write = __webpack_require__(29047);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Number.mjs
var dist_Number = __webpack_require__(57009);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var react_jsx_runtime = __webpack_require__(92132);
;// ./node_modules/@strapi/icons/dist/Blocks.mjs

const c = (l) => /* @__PURE__ */ (0,react_jsx_runtime.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1rem", height: "1rem", fill: "none", viewBox: "0 0 34 25", ...l, children: [
  /* @__PURE__ */ (0,react_jsx_runtime.jsx)("rect", { width: 33, height: 23, x: 0.5, y: 1, fill: "#EAF5FF", stroke: "#B8E1FF", rx: 2.5 }),
  /* @__PURE__ */ (0,react_jsx_runtime.jsx)("path", { fill: "#0C75AF", d: "M18.901 9.828a1.043 1.043 0 1 0 0-2.086 1.043 1.043 0 0 0 0 2.086Z" }),
  /* @__PURE__ */ (0,react_jsx_runtime.jsx)(
    "path",
    {
      fill: "#0C75AF",
      d: "M19.703 8.785a.81.81 0 0 1-.512.748.814.814 0 0 1-.91-.239.804.804 0 0 1 .753-1.301.814.814 0 0 1 .669.792c.005.311.487.311.483 0a1.308 1.308 0 0 0-.867-1.215 1.288 1.288 0 0 0-1.4.39 1.296 1.296 0 0 0-.119 1.489c.283.468.83.697 1.364.596.597-.113 1.012-.664 1.021-1.258.005-.314-.477-.314-.482-.002ZM18.901 13.488a1.043 1.043 0 1 0 0-2.086 1.043 1.043 0 0 0 0 2.086Z"
    }
  ),
  /* @__PURE__ */ (0,react_jsx_runtime.jsx)(
    "path",
    {
      fill: "#0C75AF",
      d: "M19.703 12.445a.81.81 0 0 1-.512.748.814.814 0 0 1-.91-.239.804.804 0 0 1 .753-1.301.812.812 0 0 1 .669.792c.005.311.487.311.483 0a1.307 1.307 0 0 0-.867-1.215 1.288 1.288 0 0 0-1.4.39 1.296 1.296 0 0 0-.119 1.489c.283.468.83.697 1.364.596.597-.113 1.012-.664 1.021-1.258.005-.314-.477-.314-.482-.002ZM18.901 17.247a1.043 1.043 0 1 0 0-2.086 1.043 1.043 0 0 0 0 2.086Z"
    }
  ),
  /* @__PURE__ */ (0,react_jsx_runtime.jsx)(
    "path",
    {
      fill: "#0C75AF",
      d: "M19.703 16.204a.81.81 0 0 1-.512.748.814.814 0 0 1-.91-.239.804.804 0 0 1 .753-1.301.812.812 0 0 1 .669.792c.005.311.487.311.483 0a1.308 1.308 0 0 0-.867-1.215 1.288 1.288 0 0 0-1.4.39 1.296 1.296 0 0 0-.119 1.489c.283.468.83.698 1.364.596.597-.113 1.012-.664 1.021-1.258.005-.313-.477-.313-.482-.002ZM15.075 9.842a1.043 1.043 0 1 0 0-2.086 1.043 1.043 0 0 0 0 2.086Z"
    }
  ),
  /* @__PURE__ */ (0,react_jsx_runtime.jsx)(
    "path",
    {
      fill: "#0C75AF",
      d: "M15.876 8.8a.81.81 0 0 1-.512.748.814.814 0 0 1-.91-.24.804.804 0 0 1 .753-1.301.81.81 0 0 1 .669.792c.005.312.488.312.483 0a1.308 1.308 0 0 0-.867-1.214 1.288 1.288 0 0 0-1.4.389 1.296 1.296 0 0 0-.119 1.49c.283.468.831.697 1.365.596.596-.114 1.011-.664 1.02-1.258.006-.314-.477-.314-.482-.003ZM15.075 13.503a1.043 1.043 0 1 0 0-2.086 1.043 1.043 0 0 0 0 2.086Z"
    }
  ),
  /* @__PURE__ */ (0,react_jsx_runtime.jsx)(
    "path",
    {
      fill: "#0C75AF",
      d: "M15.876 12.46a.81.81 0 0 1-.512.748.814.814 0 0 1-.91-.24.804.804 0 0 1 .753-1.301.81.81 0 0 1 .669.792c.005.312.488.312.483 0a1.308 1.308 0 0 0-.867-1.214 1.288 1.288 0 0 0-1.4.389 1.296 1.296 0 0 0-.119 1.49c.283.468.831.697 1.365.596.596-.114 1.011-.664 1.02-1.258.006-.314-.477-.314-.482-.003ZM15.075 17.261a1.043 1.043 0 1 0 0-2.086 1.043 1.043 0 0 0 0 2.086Z"
    }
  ),
  /* @__PURE__ */ (0,react_jsx_runtime.jsx)(
    "path",
    {
      fill: "#0C75AF",
      d: "M15.876 16.218a.81.81 0 0 1-.512.749.814.814 0 0 1-.91-.24.804.804 0 0 1 .753-1.301.808.808 0 0 1 .669.792c.005.312.488.312.483 0a1.308 1.308 0 0 0-.867-1.214 1.288 1.288 0 0 0-1.4.389 1.293 1.293 0 0 0-.119 1.487c.283.468.831.698 1.365.596.596-.113 1.011-.664 1.02-1.258.006-.311-.477-.311-.482 0Z"
    }
  )
] }), h = c;


// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Boolean.mjs
var dist_Boolean = __webpack_require__(71982);
;// ./node_modules/@strapi/icons/dist/CollectionType.mjs

const CollectionType_h = (t) => /* @__PURE__ */ (0,react_jsx_runtime.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1rem", height: "1rem", fill: "none", viewBox: "0 0 32 24", ...t, children: [
  /* @__PURE__ */ (0,react_jsx_runtime.jsx)("rect", { width: 31, height: 23, x: 0.5, y: 0.5, fill: "#4945FF", stroke: "#4945FF", rx: 2.5 }),
  /* @__PURE__ */ (0,react_jsx_runtime.jsx)(
    "path",
    {
      fill: "#fff",
      d: "M15.328 10.54h1.723c.012-.089.012-.165.012-.253 0-1.676-1.471-2.959-3.41-2.959-2.696 0-4.647 2.22-4.647 5.344 0 2.15 1.383 3.545 3.504 3.545 2.045 0 3.597-1.154 3.967-2.936h-1.752c-.276.826-1.102 1.371-2.063 1.371-1.137 0-1.846-.802-1.846-2.103 0-2.08 1.19-3.65 2.725-3.65 1.037 0 1.746.62 1.787 1.558v.082ZM21.053 16l1.488-6.943h2.531l.31-1.512H18.54l-.31 1.512h2.53L19.272 16h1.782Z"
    }
  )
] }), i = CollectionType_h;


// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Component.mjs
var Component = __webpack_require__(21639);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Date.mjs
var dist_Date = __webpack_require__(52078);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/DynamicZone.mjs
var DynamicZone = __webpack_require__(98659);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Email.mjs
var Email = __webpack_require__(19170);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Enumeration.mjs
var Enumeration = __webpack_require__(49167);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Media.mjs
var Media = __webpack_require__(5046);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Json.mjs
var Json = __webpack_require__(52076);
;// ./node_modules/@strapi/icons/dist/Password.mjs

const o = (t) => /* @__PURE__ */ (0,react_jsx_runtime.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1rem", height: "1rem", fill: "none", viewBox: "0 0 32 24", ...t, children: [
  /* @__PURE__ */ (0,react_jsx_runtime.jsx)(
    "path",
    {
      fill: "#FDF4DC",
      stroke: "#FAE7B9",
      d: "M.5 3A2.5 2.5 0 0 1 3 .5h26A2.5 2.5 0 0 1 31.5 3v18a2.5 2.5 0 0 1-2.5 2.5H3A2.5 2.5 0 0 1 .5 21V3Z"
    }
  ),
  /* @__PURE__ */ (0,react_jsx_runtime.jsx)(
    "path",
    {
      fill: "#D9822F",
      d: "M20.158 11.995c0-.591-.463-1.073-1.045-1.11H13.53V9.245a2.05 2.05 0 0 1 2.046-2.049c1.13 0 2.048.784 2.049 1.913 0 .24.194.433.433.433h.33a.433.433 0 0 0 .433-.433C18.82 7.32 17.365 5.999 15.577 6a3.246 3.246 0 0 0-3.241 3.244v1.642h-.223c-.615 0-1.113.499-1.113 1.114v4.887c.001.615.5 1.113 1.115 1.113l6.93-.003c.616 0 1.114-.5 1.114-1.115l-.001-4.887Z"
    }
  )
] }), Password_h = o;


// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Relation.mjs
var Relation = __webpack_require__(91086);
;// ./node_modules/@strapi/icons/dist/RichText.mjs

const a = (h) => /* @__PURE__ */ (0,react_jsx_runtime.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1rem", height: "1rem", fill: "none", viewBox: "0 0 32 24", ...h, children: [
  /* @__PURE__ */ (0,react_jsx_runtime.jsx)("rect", { width: 31, height: 23, x: 0.5, y: 0.5, fill: "#EAF5FF", stroke: "#B8E1FF", rx: 2.5 }),
  /* @__PURE__ */ (0,react_jsx_runtime.jsx)(
    "path",
    {
      fill: "#0C75AF",
      fillRule: "evenodd",
      d: "M19.286 9.286v-.857a.397.397 0 0 0-.138-.302A.465.465 0 0 0 18.82 8h-8.357a.465.465 0 0 0-.326.127.397.397 0 0 0-.138.302v.857c0 .116.046.216.138.301.092.085.2.127.326.127h8.357a.465.465 0 0 0 .327-.127.397.397 0 0 0 .138-.301Zm2.785 2.713v.857a.397.397 0 0 1-.137.301.465.465 0 0 1-.327.128H10.464a.465.465 0 0 1-.326-.128.397.397 0 0 1-.138-.301v-.857c0-.116.046-.217.138-.302a.465.465 0 0 1 .326-.127h11.143c.126 0 .235.043.327.127a.397.397 0 0 1 .137.302Zm-1.857 3.574v.857a.397.397 0 0 1-.137.302.465.465 0 0 1-.327.127h-9.286a.465.465 0 0 1-.326-.127.397.397 0 0 1-.138-.302v-.857c0-.116.046-.216.138-.301a.465.465 0 0 1 .326-.127h9.286c.126 0 .235.042.326.127a.397.397 0 0 1 .138.301Z",
      clipRule: "evenodd"
    }
  )
] }), l = a;


;// ./node_modules/@strapi/icons/dist/SingleType.mjs

const t = (e) => /* @__PURE__ */ (0,react_jsx_runtime.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1rem", height: "1rem", fill: "none", viewBox: "0 0 32 24", ...e, children: [
  /* @__PURE__ */ (0,react_jsx_runtime.jsx)("rect", { width: 31, height: 23, x: 0.5, y: 0.5, fill: "#0C75AF", stroke: "#0C75AF", rx: 2.5 }),
  /* @__PURE__ */ (0,react_jsx_runtime.jsx)(
    "path",
    {
      fill: "#fff",
      d: "M8.523 13.586c.106 1.64 1.418 2.63 3.34 2.63 2.098 0 3.516-1.113 3.516-2.788 0-1.143-.65-1.846-2.086-2.297l-.867-.27c-.797-.252-1.137-.597-1.137-1.066 0-.598.633-1.031 1.459-1.031.873 0 1.512.474 1.617 1.183h1.67c-.053-1.54-1.36-2.619-3.217-2.619-1.91 0-3.328 1.131-3.328 2.678 0 1.09.715 1.922 1.963 2.309l.879.275c.914.287 1.266.592 1.266 1.084 0 .662-.657 1.107-1.606 1.107-.914 0-1.635-.469-1.758-1.195h-1.71ZM20.107 16l1.489-6.943h2.531l.31-1.512h-6.843l-.31 1.512h2.53L18.326 16h1.781Z"
    }
  )
] }), r = t;


// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Text.mjs
var Text = __webpack_require__(45559);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Uid.mjs
var Uid = __webpack_require__(75652);
;// ./node_modules/@strapi/icons/dist/Spark.mjs

const Spark_c = (a) => /* @__PURE__ */ (0,react_jsx_runtime.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1rem", height: "1rem", fill: "none", viewBox: "0 0 24 24", ...a, children: [
  /* @__PURE__ */ (0,react_jsx_runtime.jsx)(
    "path",
    {
      fill: "#181826",
      d: "m10.614 17.796.878-2.01a7.742 7.742 0 0 1 3.94-3.992l2.416-1.072c.768-.341.768-1.458 0-1.8l-2.34-1.038a7.747 7.747 0 0 1-3.997-4.125l-.89-2.142a.946.946 0 0 0-1.758 0l-.889 2.142a7.747 7.747 0 0 1-3.997 4.125l-2.34 1.039c-.768.34-.768 1.458 0 1.799l2.415 1.072a7.742 7.742 0 0 1 3.94 3.991l.878 2.01a.946.946 0 0 0 1.744 0Zm8.787 4.894.247-.566a4.365 4.365 0 0 1 2.221-2.25l.76-.339a.53.53 0 0 0 0-.963l-.717-.319a4.368 4.368 0 0 1-2.253-2.326l-.254-.611a.507.507 0 0 0-.942 0l-.254.61a4.368 4.368 0 0 1-2.253 2.327l-.718.32a.53.53 0 0 0 0 .962l.76.338a4.365 4.365 0 0 1 2.222 2.251l.247.566c.18.414.754.414.934 0Z"
    }
  ),
  /* @__PURE__ */ (0,react_jsx_runtime.jsx)(
    "path",
    {
      fill: "#181826",
      d: "m10.614 17.796.878-2.01a7.742 7.742 0 0 1 3.94-3.992l2.416-1.072c.768-.341.768-1.458 0-1.8l-2.34-1.038a7.747 7.747 0 0 1-3.997-4.125l-.89-2.142a.946.946 0 0 0-1.758 0l-.889 2.142a7.747 7.747 0 0 1-3.997 4.125l-2.34 1.039c-.768.34-.768 1.458 0 1.799l2.415 1.072a7.742 7.742 0 0 1 3.94 3.991l.878 2.01a.946.946 0 0 0 1.744 0Zm8.787 4.894.247-.566a4.365 4.365 0 0 1 2.221-2.25l.76-.339a.53.53 0 0 0 0-.963l-.717-.319a4.368 4.368 0 0 1-2.253-2.326l-.254-.611a.507.507 0 0 0-.942 0l-.254.61a4.368 4.368 0 0 1-2.253 2.327l-.718.32a.53.53 0 0 0 0 .962l.76.338a4.365 4.365 0 0 1 2.222 2.251l.247.566c.18.414.754.414.934 0Z"
    }
  )
] }), Spark_r = Spark_c;


// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/EmptyDocuments.mjs
var EmptyDocuments = __webpack_require__(36481);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Trash.mjs
var Trash = __webpack_require__(50612);
// EXTERNAL MODULE: ./node_modules/lodash/upperFirst.js
var upperFirst = __webpack_require__(39404);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/dist/_chunks/index-vZqceADF.mjs
var index_vZqceADF = __webpack_require__(47689);
// EXTERNAL MODULE: ./node_modules/lodash/isEqual.js
var isEqual = __webpack_require__(33955);
// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(80219);
// EXTERNAL MODULE: ./node_modules/lodash/groupBy.js
var groupBy = __webpack_require__(94710);
// EXTERNAL MODULE: ./node_modules/lodash/set.js
var set = __webpack_require__(48940);
// EXTERNAL MODULE: ./node_modules/lodash/size.js
var size = __webpack_require__(14311);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 14 modules
var es = __webpack_require__(82437);
// EXTERNAL MODULE: ./node_modules/lodash/has.js
var has = __webpack_require__(78031);
// EXTERNAL MODULE: ./node_modules/lodash/toLower.js
var toLower = __webpack_require__(89102);
// EXTERNAL MODULE: ./node_modules/qs/lib/index.js
var lib = __webpack_require__(5409);
// EXTERNAL MODULE: ./node_modules/pluralize/pluralize.js
var pluralize = __webpack_require__(21835);
// EXTERNAL MODULE: ./node_modules/lodash/truncate.js
var truncate = __webpack_require__(35336);
// EXTERNAL MODULE: ./node_modules/lodash/uniq.js
var uniq = __webpack_require__(71547);
// EXTERNAL MODULE: ./node_modules/yup/es/index.js + 26 modules
var yup_es = __webpack_require__(12083);
// EXTERNAL MODULE: ./node_modules/@sindresorhus/slugify/index.js
var slugify = __webpack_require__(17024);
// EXTERNAL MODULE: ./node_modules/lodash/fp.js
var fp = __webpack_require__(58692);
// EXTERNAL MODULE: ./node_modules/lodash/toNumber.js
var toNumber = __webpack_require__(48829);
// EXTERNAL MODULE: ./node_modules/reselect/es/index.js
var reselect_es = __webpack_require__(70653);
// EXTERNAL MODULE: ./node_modules/lodash/camelCase.js
var camelCase = __webpack_require__(5790);
// EXTERNAL MODULE: ./node_modules/lodash/omit.js
var omit = __webpack_require__(35223);
// EXTERNAL MODULE: ./node_modules/lodash/sortBy.js
var sortBy = __webpack_require__(45635);
;// ./node_modules/@strapi/plugin-content-type-builder/dist/_chunks/index-b3fbviVW.mjs


































const getTrad = (id) => `${index_vZqceADF.p}.${id}`;
const DataManagerContext = (0,react.createContext)();
const useDataManager = () => (0,react.useContext)(DataManagerContext);
const FormModalNavigationContext = react.createContext();
const useFormModalNavigation = () => (0,react.useContext)(FormModalNavigationContext);
const useContentTypeBuilderMenu = () => {
  const {
    components,
    componentsGroupedByCategory,
    contentTypes,
    isInDevelopmentMode,
    sortedContentTypesList,
    modifiedData,
    initialData
  } = useDataManager();
  const toggleNotification = (0,dist/* useNotification */.hN)();
  const { trackUsage } = (0,dist/* useTracking */.z1)();
  const [search, setSearch] = (0,react.useState)("");
  const { onOpenModalCreateSchema, onOpenModalEditCategory } = useFormModalNavigation();
  const { locale } = (0,useIntl/* default */.A)();
  const { startsWith } = (0,dist/* useFilter */.U2)(locale, {
    sensitivity: "base"
  });
  const formatter = (0,dist/* useCollator */.QM)(locale, {
    sensitivity: "base"
  });
  const canOpenModalCreateCTorComponent = !Object.keys(contentTypes).some((ct) => contentTypes[ct].isTemporary === true) && !Object.keys(components).some(
    (component) => components[component].isTemporary === true
  ) && isEqual(modifiedData, initialData);
  const handleClickOpenModalCreateCollectionType = () => {
    if (canOpenModalCreateCTorComponent) {
      trackUsage(`willCreateContentType`);
      const nextState = {
        modalType: "contentType",
        kind: "collectionType",
        actionType: "create",
        forTarget: "contentType"
      };
      onOpenModalCreateSchema(nextState);
    } else {
      toggleNotificationCannotCreateSchema();
    }
  };
  const handleClickOpenModalCreateSingleType = () => {
    if (canOpenModalCreateCTorComponent) {
      trackUsage(`willCreateSingleType`);
      const nextState = {
        modalType: "contentType",
        kind: "singleType",
        actionType: "create",
        forTarget: "contentType"
      };
      onOpenModalCreateSchema(nextState);
    } else {
      toggleNotificationCannotCreateSchema();
    }
  };
  const handleClickOpenModalCreateComponent = () => {
    if (canOpenModalCreateCTorComponent) {
      trackUsage("willCreateComponent");
      const nextState = {
        modalType: "component",
        kind: null,
        actionType: "create",
        forTarget: "component"
      };
      onOpenModalCreateSchema(nextState);
    } else {
      toggleNotificationCannotCreateSchema();
    }
  };
  const toggleNotificationCannotCreateSchema = () => {
    toggleNotification({
      type: "info",
      message: {
        id: getTrad("notification.info.creating.notSaved"),
        defaultMessage: "Please save your work before creating a new collection type or component"
      }
    });
  };
  const componentsData = Object.entries(componentsGroupedByCategory).map(([category, components2]) => ({
    name: category,
    title: category,
    isEditable: isInDevelopmentMode,
    onClickEdit(e, data2) {
      e.stopPropagation();
      if (canOpenModalCreateCTorComponent) {
        onOpenModalEditCategory(data2.name);
      } else {
        toggleNotificationCannotCreateSchema();
      }
    },
    links: components2.map((component) => ({
      name: component.uid,
      to: `/plugins/${index_vZqceADF.p}/component-categories/${category}/${component.uid}`,
      title: component.schema.displayName
    })).sort((a, b) => formatter.compare(a.title, b.title))
  })).sort((a, b) => formatter.compare(a.title, b.title));
  const displayedContentTypes = sortedContentTypesList.filter((obj) => obj.visible);
  const data = [
    {
      name: "models",
      title: {
        id: `${getTrad("menu.section.models.name")}`,
        defaultMessage: "Collection Types"
      },
      customLink: isInDevelopmentMode && {
        id: `${getTrad("button.model.create")}`,
        defaultMessage: "Create new collection type",
        onClick: handleClickOpenModalCreateCollectionType
      },
      links: displayedContentTypes.filter((contentType) => contentType.kind === "collectionType")
    },
    {
      name: "singleTypes",
      title: {
        id: `${getTrad("menu.section.single-types.name")}`,
        defaultMessage: "Single Types"
      },
      customLink: isInDevelopmentMode && {
        id: `${getTrad("button.single-types.create")}`,
        defaultMessage: "Create new single type",
        onClick: handleClickOpenModalCreateSingleType
      },
      links: displayedContentTypes.filter((singleType) => singleType.kind === "singleType")
    },
    {
      name: "components",
      title: {
        id: `${getTrad("menu.section.components.name")}`,
        defaultMessage: "Components"
      },
      customLink: isInDevelopmentMode && {
        id: `${getTrad("button.component.create")}`,
        defaultMessage: "Create a new component",
        onClick: handleClickOpenModalCreateComponent
      },
      links: componentsData
    }
  ].map((section) => {
    const hasChild = section.links.some((l) => Array.isArray(l.links));
    if (hasChild) {
      return {
        ...section,
        links: section.links.map((link) => {
          const filteredLinks = link.links.filter((link2) => startsWith(link2.title, search));
          if (filteredLinks.length === 0) {
            return null;
          }
          return {
            ...link,
            links: filteredLinks.sort((a, b) => formatter.compare(a.title, b.title))
          };
        }).filter(Boolean)
      };
    }
    return {
      ...section,
      links: section.links.filter((link) => startsWith(link.title, search)).sort((a, b) => formatter.compare(a.title, b.title))
    };
  });
  return {
    menu: data,
    searchValue: search,
    onSearchChange: setSearch
  };
};
const ContentTypeBuilderNav = () => {
  const { menu, searchValue, onSearchChange } = useContentTypeBuilderMenu();
  const { formatMessage } = (0,useIntl/* default */.A)();
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)(
    SubNav/* SubNav */.C,
    {
      ariaLabel: formatMessage({
        id: `${getTrad("plugin.name")}`,
        defaultMessage: "Content-Types Builder"
      }),
      children: [
        /* @__PURE__ */ (0,jsx_runtime.jsx)(
          SubNavHeader/* SubNavHeader */.X,
          {
            searchable: true,
            value: searchValue,
            onClear: () => onSearchChange(""),
            onChange: (e) => onSearchChange(e.target.value),
            label: formatMessage({
              id: `${getTrad("plugin.name")}`,
              defaultMessage: "Content-Types Builder"
            }),
            searchLabel: formatMessage({
              id: "global.search",
              defaultMessage: "Search"
            })
          }
        ),
        /* @__PURE__ */ (0,jsx_runtime.jsx)(SubNavSections/* SubNavSections */.w, { children: menu.map((section) => /* @__PURE__ */ (0,jsx_runtime.jsxs)(react.Fragment, { children: [
          /* @__PURE__ */ (0,jsx_runtime.jsx)(
            SubNavSection/* SubNavSection */.L,
            {
              label: formatMessage({
                id: section.title.id,
                defaultMessage: section.title.defaultMessage
              }),
              collapsable: true,
              badgeLabel: section.links.length.toString(),
              children: section.links.map((link) => {
                if (link.links) {
                  return /* @__PURE__ */ (0,jsx_runtime.jsx)(SubNavLinkSection, { label: upperFirst(link.title), children: link.links.map((subLink) => /* @__PURE__ */ (0,jsx_runtime.jsx)(
                    SubNavLink/* SubNavLink */.u,
                    {
                      as: react_router_dom/* NavLink */.k2,
                      to: subLink.to,
                      active: subLink.active,
                      isSubSectionChild: true,
                      children: upperFirst(
                        formatMessage({ id: subLink.name, defaultMessage: subLink.title })
                      )
                    },
                    subLink.name
                  )) }, link.name);
                }
                return (
                  // @ts-expect-error verify if "to" is needed
                  /* @__PURE__ */ (0,jsx_runtime.jsx)(SubNavLink/* SubNavLink */.u, { as: react_router_dom/* NavLink */.k2, to: link.to, active: link.active, children: upperFirst(formatMessage({ id: link.name, defaultMessage: link.title })) }, link.name)
                );
              })
            }
          ),
          section.customLink && /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* Box */.a, { paddingLeft: 7, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
            TextButton/* TextButton */.Q,
            {
              onClick: section.customLink.onClick,
              startIcon: /* @__PURE__ */ (0,jsx_runtime.jsx)(Icon/* Icon */.I, { as: Plus/* default */.A, width: (0,dist/* pxToRem */.a8)(8), height: (0,dist/* pxToRem */.a8)(8) }),
              marginTop: 2,
              children: formatMessage({
                id: section.customLink.id,
                defaultMessage: section.customLink.defaultMessage
              })
            }
          ) })
        ] }, section.name)) })
      ]
    }
  );
};
const isAllowedContentTypesForRelations = (contentType) => {
  return contentType.kind === "collectionType" && (contentType.restrictRelationsTo === null || Array.isArray(contentType.restrictRelationsTo) && contentType.restrictRelationsTo.length > 0);
};
const findAttribute = (attributes, attributeToFind) => {
  return attributes.find(({ name }) => name === attributeToFind);
};
const options = [
  {
    label: "All",
    children: [
      { label: "images (JPEG, PNG, GIF, SVG, TIFF, ICO, DVU)", value: "images" },
      { label: "videos (MPEG, MP4, Quicktime, WMV, AVI, FLV)", value: "videos" },
      { label: "audios (MP3, WAV, OGG)", value: "audios" },
      { label: "files (CSV, ZIP, PDF, Excel, JSON, ...)", value: "files" }
    ]
  }
];
const AllowedTypesSelect = ({
  intlLabel,
  name,
  onChange,
  value = null
}) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const displayedValue = value === null || value?.length === 0 ? formatMessage({ id: "global.none", defaultMessage: "None" }) : [...value].sort().map((v) => upperFirst(v)).join(", ");
  const label = intlLabel.id ? formatMessage({ id: intlLabel.id, defaultMessage: intlLabel.defaultMessage }) : name;
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    MultiSelectNested/* MultiSelectNested */.B,
    {
      id: "select1",
      label,
      customizeContent: () => displayedValue,
      onChange: (values) => {
        if (values.length > 0) {
          onChange({ target: { name, value: values, type: "allowed-types-select" } });
        } else {
          onChange({ target: { name, value: null, type: "allowed-types-select" } });
        }
      },
      options,
      value: value || []
    }
  );
};
const iconByTypes = {
  biginteger: dist_Number/* default */.A,
  blocks: h,
  boolean: dist_Boolean/* default */.A,
  collectionType: i,
  component: Component/* default */.A,
  contentType: i,
  date: dist_Date/* default */.A,
  datetime: dist_Date/* default */.A,
  decimal: dist_Number/* default */.A,
  dynamiczone: DynamicZone/* default */.A,
  email: Email/* default */.A,
  enum: Enumeration/* default */.A,
  enumeration: Enumeration/* default */.A,
  file: Media/* default */.A,
  files: Media/* default */.A,
  float: dist_Number/* default */.A,
  integer: dist_Number/* default */.A,
  json: Json/* default */.A,
  JSON: Json/* default */.A,
  media: Media/* default */.A,
  number: dist_Number/* default */.A,
  password: Password_h,
  relation: Relation/* default */.A,
  richtext: l,
  singleType: r,
  string: Text/* default */.A,
  text: Text/* default */.A,
  time: dist_Date/* default */.A,
  timestamp: dist_Date/* default */.A,
  uid: Uid/* default */.A
};
const IconBox = (0,styled_components_browser_esm/* default */.Ay)((0,Box/* Box */.a))`
  svg {
    height: 100%;
    width: 100%;
  }
`;
const AttributeIcon = ({ type, customField = null, ...rest }) => {
  const customFieldsRegistry = (0,dist/* useCustomFields */.AC)();
  let Compo = iconByTypes[type];
  if (customField) {
    const customFieldObject = customFieldsRegistry.get(customField);
    const icon = customFieldObject?.icon;
    if (icon) {
      Compo = icon;
    }
  }
  if (!iconByTypes[type]) {
    return null;
  }
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(IconBox, { height: (0,dist/* pxToRem */.a8)(24), width: (0,dist/* pxToRem */.a8)(32), shrink: 0, ...rest, "aria-hidden": true, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* Box */.a, { as: Compo }) });
};
const OptionBoxWrapper = (0,styled_components_browser_esm/* default */.Ay)((0,Box/* Box */.a))`
  width: 100%;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.colors.neutral200};
  text-align: left;
  &:hover {
    background: ${({ theme }) => theme.colors.primary100};
    border: 1px solid ${({ theme }) => theme.colors.primary200};
  }
`;
const newAttributes = [];
const NewBadge = () => /* @__PURE__ */ (0,jsx_runtime.jsx)(Flex/* Flex */.s, { grow: 1, justifyContent: "flex-end", children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(Flex/* Flex */.s, { gap: 1, hasRadius: true, background: "alternative100", padding: `${2 / 16}rem ${4 / 16}rem`, children: [
  /* @__PURE__ */ (0,jsx_runtime.jsx)(Icon/* Icon */.I, { width: `${10 / 16}rem`, height: `${10 / 16}rem`, as: Spark_r, color: "alternative600" }),
  /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.o, { textColor: "alternative600", variant: "sigma", children: "New" })
] }) });
const AttributeOption = ({ type = "text" }) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const { onClickSelectField } = useFormModalNavigation();
  const handleClick = () => {
    const step = type === "component" ? "1" : null;
    onClickSelectField({
      attributeType: type,
      step
    });
  };
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(OptionBoxWrapper, { padding: 4, as: "button", hasRadius: true, type: "button", onClick: handleClick, children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(Flex/* Flex */.s, { children: [
    /* @__PURE__ */ (0,jsx_runtime.jsx)(AttributeIcon, { type }),
    /* @__PURE__ */ (0,jsx_runtime.jsxs)(Box/* Box */.a, { paddingLeft: 4, width: "100%", children: [
      /* @__PURE__ */ (0,jsx_runtime.jsxs)(Flex/* Flex */.s, { justifyContent: "space-between", children: [
        /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.o, { fontWeight: "bold", children: formatMessage({ id: getTrad(`attribute.${type}`), defaultMessage: type }) }),
        newAttributes.includes(type) && /* @__PURE__ */ (0,jsx_runtime.jsx)(NewBadge, {})
      ] }),
      /* @__PURE__ */ (0,jsx_runtime.jsx)(Flex/* Flex */.s, { children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.o, { variant: "pi", textColor: "neutral600", children: formatMessage({
        id: getTrad(`attribute.${type}.description`),
        defaultMessage: "A type for modeling data"
      }) }) })
    ] })
  ] }) });
};
const AttributeList = ({ attributes }) => /* @__PURE__ */ (0,jsx_runtime.jsx)(KeyboardNavigable/* KeyboardNavigable */.r, { tagName: "button", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Flex/* Flex */.s, { direction: "column", alignItems: "stretch", gap: 8, children: attributes.map((attributeRow, index2) => {
  return (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ (0,jsx_runtime.jsx)(Grid/* Grid */.x, { gap: 3, children: attributeRow.map((attribute) => /* @__PURE__ */ (0,jsx_runtime.jsx)(GridItem/* GridItem */.E, { col: 6, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(AttributeOption, { type: attribute }) }, attribute)) }, index2)
  );
}) }) });
const CustomFieldOption = ({ customFieldUid, customField }) => {
  const { type, intlLabel, intlDescription } = customField;
  const { formatMessage } = (0,useIntl/* default */.A)();
  const { onClickSelectCustomField } = useFormModalNavigation();
  const handleClick = () => {
    onClickSelectCustomField({
      attributeType: type,
      customFieldUid
    });
  };
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(OptionBoxWrapper, { padding: 4, as: "button", hasRadius: true, type: "button", onClick: handleClick, children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(Flex/* Flex */.s, { children: [
    /* @__PURE__ */ (0,jsx_runtime.jsx)(AttributeIcon, { type, customField: customFieldUid }),
    /* @__PURE__ */ (0,jsx_runtime.jsxs)(Box/* Box */.a, { paddingLeft: 4, children: [
      /* @__PURE__ */ (0,jsx_runtime.jsx)(Flex/* Flex */.s, { children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.o, { fontWeight: "bold", children: formatMessage(intlLabel) }) }),
      /* @__PURE__ */ (0,jsx_runtime.jsx)(Flex/* Flex */.s, { children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.o, { variant: "pi", textColor: "neutral600", children: formatMessage(intlDescription) }) })
    ] })
  ] }) });
};
const EmptyCard = (0,styled_components_browser_esm/* default */.Ay)((0,Box/* Box */.a))`
  background: ${({ theme }) => `linear-gradient(180deg, rgba(234, 234, 239, 0) 0%, ${theme.colors.neutral150} 100%)`};
  opacity: 0.33;
`;
const EmptyCardGrid = () => {
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(Flex/* Flex */.s, { wrap: "wrap", gap: 4, children: [...Array(4)].map((_, idx) => {
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(
      EmptyCard,
      {
        height: "138px",
        width: "375px",
        hasRadius: true
      },
      `empty-card-${idx}`
    );
  }) });
};
const EmptyAttributes = () => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)(Box/* Box */.a, { position: "relative", children: [
    /* @__PURE__ */ (0,jsx_runtime.jsx)(EmptyCardGrid, {}),
    /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* Box */.a, { position: "absolute", top: 6, width: "100%", children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(Flex/* Flex */.s, { alignItems: "center", justifyContent: "center", direction: "column", children: [
      /* @__PURE__ */ (0,jsx_runtime.jsx)(Icon/* Icon */.I, { as: EmptyDocuments/* default */.A, color: "", width: "160px", height: "88px" }),
      /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* Box */.a, { paddingTop: 6, paddingBottom: 4, children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(Box/* Box */.a, { textAlign: "center", children: [
        /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.o, { variant: "delta", as: "p", textColor: "neutral600", children: formatMessage({
          id: getTrad("modalForm.empty.heading"),
          defaultMessage: "Nothing in here yet."
        }) }),
        /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* Box */.a, { paddingTop: 4, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.o, { variant: "delta", as: "p", textColor: "neutral600", children: formatMessage({
          id: getTrad("modalForm.empty.sub-heading"),
          defaultMessage: "Find what you are looking for through a wide range of extensions."
        }) }) })
      ] }) }),
      /* @__PURE__ */ (0,jsx_runtime.jsx)(
        LinkButton/* LinkButton */.z,
        {
          to: `/marketplace?${lib.stringify({ categories: ["Custom fields"] })}`,
          variant: "secondary",
          startIcon: /* @__PURE__ */ (0,jsx_runtime.jsx)(Plus/* default */.A, {}),
          children: formatMessage({
            id: getTrad("modalForm.empty.button"),
            defaultMessage: "Add custom fields"
          })
        }
      )
    ] }) })
  ] });
};
const CustomFieldsList = () => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const customFields = (0,dist/* useCustomFields */.AC)();
  const registeredCustomFields = Object.entries(customFields.getAll());
  if (!registeredCustomFields.length) {
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(EmptyAttributes, {});
  }
  const sortedCustomFields = registeredCustomFields.sort(
    (a, b) => a[1].name > b[1].name ? 1 : -1
  );
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(KeyboardNavigable/* KeyboardNavigable */.r, { tagName: "button", children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(Flex/* Flex */.s, { direction: "column", alignItems: "stretch", gap: 3, children: [
    /* @__PURE__ */ (0,jsx_runtime.jsx)(Grid/* Grid */.x, { gap: 3, children: sortedCustomFields.map(([uid, customField]) => /* @__PURE__ */ (0,jsx_runtime.jsx)(GridItem/* GridItem */.E, { col: 6, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(CustomFieldOption, { customFieldUid: uid, customField }, uid) }, uid)) }),
    /* @__PURE__ */ (0,jsx_runtime.jsx)(
      Link/* Link */.N,
      {
        href: "https://docs.strapi.io/developer-docs/latest/development/custom-fields.html",
        isExternal: true,
        children: formatMessage({
          id: getTrad("modalForm.tabs.custom.howToLink"),
          defaultMessage: "How to add custom fields"
        })
      }
    )
  ] }) });
};
const AttributeOptions = ({ attributes, forTarget, kind }) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const defaultTabId = getTrad("modalForm.tabs.default");
  const customTabId = getTrad("modalForm.tabs.custom");
  const titleIdSuffix = forTarget.includes("component") ? "component" : kind;
  const titleId = getTrad(`modalForm.sub-header.chooseAttribute.${titleIdSuffix}`);
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(ModalBody/* ModalBody */.c, { padding: 7, children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(
    TabGroup/* TabGroup */.f,
    {
      label: formatMessage({
        id: getTrad("modalForm.tabs.label"),
        defaultMessage: "Default and Custom types tabs"
      }),
      id: "attribute-type-tabs",
      variant: "simple",
      children: [
        /* @__PURE__ */ (0,jsx_runtime.jsxs)(Flex/* Flex */.s, { justifyContent: "space-between", children: [
          /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.o, { variant: "beta", as: "h2", children: formatMessage({ id: titleId, defaultMessage: "Select a field" }) }),
          /* @__PURE__ */ (0,jsx_runtime.jsxs)(Tabs/* Tabs */.t, { children: [
            /* @__PURE__ */ (0,jsx_runtime.jsx)(Tabs/* Tab */.o, { children: formatMessage({ id: defaultTabId, defaultMessage: "Default" }) }),
            /* @__PURE__ */ (0,jsx_runtime.jsx)(Tabs/* Tab */.o, { children: formatMessage({ id: customTabId, defaultMessage: "Custom" }) })
          ] })
        ] }),
        /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* Box */.a, { paddingBottom: 6, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Divider/* Divider */.c, {}) }),
        /* @__PURE__ */ (0,jsx_runtime.jsxs)(TabPanels/* TabPanels */.T, { children: [
          /* @__PURE__ */ (0,jsx_runtime.jsx)(TabPanels/* TabPanel */.K, { children: /* @__PURE__ */ (0,jsx_runtime.jsx)(AttributeList, { attributes }) }),
          /* @__PURE__ */ (0,jsx_runtime.jsx)(TabPanels/* TabPanel */.K, { children: /* @__PURE__ */ (0,jsx_runtime.jsx)(CustomFieldsList, {}) })
        ] })
      ]
    }
  ) });
};
const BooleanDefaultValueSelect = ({
  intlLabel,
  name,
  options: options2,
  onChange,
  value = null
}) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const label = intlLabel.id ? formatMessage(
    { id: intlLabel.id, defaultMessage: intlLabel.defaultMessage },
    { ...intlLabel.values }
  ) : name;
  const handleChange = (value2) => {
    let nextValue = "";
    if (value2 === "true") {
      nextValue = true;
    }
    if (value2 === "false") {
      nextValue = false;
    }
    onChange({ target: { name, value: nextValue, type: "select-default-boolean" } });
  };
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    Select/* Select */.l,
    {
      label,
      id: name,
      name,
      onChange: handleChange,
      value: (value === null ? "" : value).toString(),
      children: options2.map(({ metadatas: { intlLabel: intlLabel2, disabled, hidden }, key, value: value2 }) => {
        return /* @__PURE__ */ (0,jsx_runtime.jsx)(Option/* Option */.c, { value: value2, disabled, hidden, children: intlLabel2.defaultMessage }, key);
      })
    }
  );
};
const Wrapper$1 = (0,styled_components_browser_esm/* default */.Ay)((0,Flex/* Flex */.s))`
  position: relative;
  align-items: stretch;

  label {
    border-radius: 4px;
    max-width: 50%;
    cursor: pointer;
    user-select: none;
    flex: 1;
    ${(0,utils/* inputFocusStyle */.id)()}
  }

  input {
    position: absolute;
    opacity: 0;
  }

  .option {
    height: 100%;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.neutral200};
    will-change: transform, opacity;
    background: ${({ theme }) => theme.colors.neutral0};

    .checkmark {
      position: relative;
      display: block;
      will-change: transform;
      background: ${({ theme }) => theme.colors.neutral0};
      width: ${({ theme }) => theme.spaces[5]};
      height: ${({ theme }) => theme.spaces[5]};
      border: solid 1px ${({ theme }) => theme.colors.neutral300};
      border-radius: 50%;

      &:before,
      &:after {
        content: '';
        display: block;
        border-radius: 50%;
        width: ${({ theme }) => theme.spaces[3]};
        height: ${({ theme }) => theme.spaces[3]};
        position: absolute;
        top: 3px;
        left: 3px;
      }

      &:after {
        transform: scale(0);
        transition: inherit;
        will-change: transform;
      }
    }
  }

  .container input:checked ~ div {
    background: ${({ theme }) => theme.colors.primary100};
    ${Typography/* Typography */.o} {
      color: ${({ theme }) => theme.colors.primary600};
    }
    border: 1px solid ${({ theme }) => theme.colors.primary200};
    .checkmark {
      border: solid 1px ${({ theme }) => theme.colors.primary600};
      &::after {
        background: ${({ theme }) => theme.colors.primary600};
        transform: scale(1);
      }
    }
  }
`;
const CustomRadioGroup = ({
  intlLabel,
  name,
  onChange,
  radios = [],
  value
}) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)(Flex/* Flex */.s, { direction: "column", alignItems: "stretch", gap: 2, children: [
    /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.o, { variant: "pi", fontWeight: "bold", textColor: "neutral800", htmlFor: name, as: "label", children: formatMessage(intlLabel) }),
    /* @__PURE__ */ (0,jsx_runtime.jsx)(Wrapper$1, { gap: 4, alignItems: "stretch", children: radios.map((radio) => {
      return /* @__PURE__ */ (0,jsx_runtime.jsxs)("label", { htmlFor: radio.value.toString(), className: "container", children: [
        /* @__PURE__ */ (0,jsx_runtime.jsx)(
          "input",
          {
            id: radio.value.toString(),
            name,
            className: "option-input",
            checked: radio.value === value,
            value: radio.value,
            onChange,
            type: "radio"
          },
          radio.value
        ),
        /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* Box */.a, { className: "option", padding: 4, children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(Flex/* Flex */.s, { children: [
          /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* Box */.a, { paddingRight: 4, children: /* @__PURE__ */ (0,jsx_runtime.jsx)("span", { className: "checkmark" }) }),
          /* @__PURE__ */ (0,jsx_runtime.jsxs)(Flex/* Flex */.s, { direction: "column", alignItems: "stretch", gap: 2, children: [
            /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.o, { fontWeight: "bold", children: formatMessage(radio.title) }),
            /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.o, { variant: "pi", textColor: "neutral600", children: formatMessage(radio.description) })
          ] })
        ] }) })
      ] }, radio.value);
    }) })
  ] });
};
const BooleanRadioGroup = ({
  onChange,
  name,
  intlLabel,
  ...rest
}) => {
  const handleChange = (e) => {
    const checked = e.target.value !== "false";
    onChange({ target: { name, value: checked, type: "boolean-radio-group" } });
  };
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(CustomRadioGroup, { ...rest, name, onChange: handleChange, intlLabel });
};
const CheckboxWithNumberField = ({
  error,
  intlLabel,
  modifiedData,
  name,
  onChange,
  value = null
}) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const [showInput, setShowInput] = (0,react.useState)(!!value || value === 0);
  const label = intlLabel.id ? formatMessage(
    { id: intlLabel.id, defaultMessage: intlLabel.defaultMessage },
    { ...intlLabel.values }
  ) : name;
  const type = modifiedData.type === "biginteger" ? "text" : "number";
  const disabled = !modifiedData.type;
  const errorMessage = error ? formatMessage({ id: error, defaultMessage: error }) : "";
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)(Flex/* Flex */.s, { direction: "column", alignItems: "stretch", gap: 2, children: [
    /* @__PURE__ */ (0,jsx_runtime.jsx)(
      Checkbox/* Checkbox */.S,
      {
        id: name,
        name,
        onValueChange: (value2) => {
          const initValue = type === "text" ? "0" : 0;
          const nextValue = value2 ? initValue : null;
          onChange({ target: { name, value: nextValue } });
          setShowInput((prev) => !prev);
        },
        value: showInput,
        children: label
      }
    ),
    showInput && /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* Box */.a, { paddingLeft: 6, style: { maxWidth: "200px" }, children: type === "text" ? /* @__PURE__ */ (0,jsx_runtime.jsx)(
      TextInput/* TextInput */.k,
      {
        label: "",
        "aria-label": label,
        disabled,
        error: errorMessage,
        id: name,
        name,
        onChange,
        value: value === null ? "" : value
      }
    ) : /* @__PURE__ */ (0,jsx_runtime.jsx)(
      NumberInput/* NumberInput */.Q,
      {
        "aria-label": label,
        disabled,
        error: errorMessage,
        id: name,
        name,
        onValueChange: (value2) => {
          onChange({ target: { name, value: value2, type } });
        },
        value: value || 0
      }
    ) })
  ] });
};
const ContentTypeRadioGroup = ({ onChange, ...rest }) => {
  const toggleNotification = (0,dist/* useNotification */.hN)();
  const handleChange = (e) => {
    toggleNotification({
      type: "info",
      message: {
        id: getTrad("contentType.kind.change.warning"),
        defaultMessage: "You just changed the kind of a content type: API will be reset (routes, controllers, and services will be overwritten)."
      }
    });
    onChange(e);
  };
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(CustomRadioGroup, { ...rest, onChange: handleChange });
};
const DraftAndPublishToggle = ({
  description,
  disabled = false,
  intlLabel,
  isCreating,
  name,
  onChange,
  value = false
}) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const [showWarning, setShowWarning] = (0,react.useState)(false);
  const label = intlLabel.id ? formatMessage(
    { id: intlLabel.id, defaultMessage: intlLabel.defaultMessage },
    { ...intlLabel.values }
  ) : name;
  const hint = description ? formatMessage(
    { id: description.id, defaultMessage: description.defaultMessage },
    { ...description.values }
  ) : "";
  const handleToggle = () => setShowWarning((prev) => !prev);
  const handleConfirm = () => {
    onChange({ target: { name, value: false } });
    handleToggle();
  };
  const handleChange = ({ target: { checked } }) => {
    if (!checked && !isCreating) {
      handleToggle();
      return;
    }
    onChange({ target: { name, value: checked } });
  };
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0,jsx_runtime.jsx)(Checkbox/* Checkbox */.S, { checked: value, disabled, hint, name, onChange: handleChange, children: label }),
    /* @__PURE__ */ (0,jsx_runtime.jsx)(
      dist/* ConfirmDialog */.TM,
      {
        isOpen: showWarning,
        onToggleDialog: handleToggle,
        onConfirm: handleConfirm,
        bodyText: {
          id: getTrad("popUpWarning.draft-publish.message"),
          defaultMessage: "If you disable the draft & publish, your drafts will be deleted."
        },
        leftButtonText: {
          id: "components.popUpWarning.button.cancel",
          defaultMessage: "No, cancel"
        },
        rightButtonText: {
          id: getTrad("popUpWarning.draft-publish.button.confirm"),
          defaultMessage: "Yes, disable"
        }
      }
    )
  ] });
};
const FormModalEndActions = ({
  categoryName,
  deleteCategory,
  deleteComponent,
  deleteContentType,
  isAttributeModal,
  isCustomFieldModal,
  isComponentAttribute,
  isComponentToDzModal,
  isContentTypeModal,
  isCreatingComponent,
  isCreatingComponentAttribute,
  isCreatingComponentInDz,
  isCreatingComponentWhileAddingAField,
  isCreatingContentType,
  isCreatingDz,
  isComponentModal,
  isDzAttribute,
  isEditingAttribute,
  isEditingCategory,
  isInFirstComponentStep,
  onSubmitAddComponentAttribute,
  onSubmitAddComponentToDz,
  onSubmitCreateContentType,
  onSubmitCreateComponent,
  onSubmitCreateDz,
  onSubmitEditAttribute,
  onSubmitEditCategory,
  onSubmitEditComponent,
  onSubmitEditContentType,
  onSubmitEditCustomFieldAttribute,
  onSubmitEditDz,
  onClickFinish
}) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  if (isComponentToDzModal) {
    if (isCreatingComponentInDz) {
      return /* @__PURE__ */ (0,jsx_runtime.jsx)(
        Button/* Button */.$,
        {
          variant: "secondary",
          type: "submit",
          onClick: (e) => {
            e.preventDefault();
            onSubmitAddComponentToDz(e, true);
          },
          startIcon: /* @__PURE__ */ (0,jsx_runtime.jsx)(Plus/* default */.A, {}),
          children: formatMessage({
            id: getTrad("form.button.add-first-field-to-created-component"),
            defaultMessage: "Add first field to the component"
          })
        }
      );
    }
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(
      Button/* Button */.$,
      {
        variant: "default",
        type: "submit",
        onClick: (e) => {
          e.preventDefault();
          onSubmitAddComponentToDz(e, false);
        },
        children: formatMessage({
          id: "global.finish",
          defaultMessage: "Finish"
        })
      }
    );
  }
  if (isAttributeModal && isDzAttribute && !isCreatingDz) {
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(
      Button/* Button */.$,
      {
        variant: "default",
        type: "submit",
        onClick: (e) => {
          e.preventDefault();
          onClickFinish();
          onSubmitEditDz(e, false);
        },
        children: formatMessage({
          id: "global.finish",
          defaultMessage: "Finish"
        })
      }
    );
  }
  if (isAttributeModal && isDzAttribute && isCreatingDz) {
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
      Button/* Button */.$,
      {
        variant: "secondary",
        type: "submit",
        onClick: (e) => {
          e.preventDefault();
          onSubmitCreateDz(e, true);
        },
        startIcon: /* @__PURE__ */ (0,jsx_runtime.jsx)(Plus/* default */.A, {}),
        children: formatMessage({
          id: getTrad("form.button.add-components-to-dynamiczone"),
          defaultMessage: "Add components to the zone"
        })
      }
    ) });
  }
  if (isAttributeModal && isComponentAttribute) {
    if (isInFirstComponentStep) {
      return /* @__PURE__ */ (0,jsx_runtime.jsx)(
        Button/* Button */.$,
        {
          variant: "secondary",
          type: "submit",
          onClick: (e) => {
            e.preventDefault();
            onSubmitAddComponentAttribute(e, true);
          },
          children: isCreatingComponentAttribute ? formatMessage({
            id: getTrad("form.button.configure-component"),
            defaultMessage: "Configure the component"
          }) : formatMessage({
            id: getTrad("form.button.select-component"),
            defaultMessage: "Configure the component"
          })
        }
      );
    }
    return /* @__PURE__ */ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [
      /* @__PURE__ */ (0,jsx_runtime.jsx)(
        Button/* Button */.$,
        {
          variant: "secondary",
          type: "submit",
          onClick: (e) => {
            e.preventDefault();
            onSubmitAddComponentAttribute(e, true);
          },
          startIcon: /* @__PURE__ */ (0,jsx_runtime.jsx)(Plus/* default */.A, {}),
          children: isCreatingComponentWhileAddingAField ? formatMessage({
            id: getTrad("form.button.add-first-field-to-created-component"),
            defaultMessage: "Add first field to the component"
          }) : formatMessage({
            id: getTrad("form.button.add-field"),
            defaultMessage: "Add another field"
          })
        }
      ),
      /* @__PURE__ */ (0,jsx_runtime.jsx)(
        Button/* Button */.$,
        {
          variant: "default",
          type: "button",
          onClick: (e) => {
            e.preventDefault();
            onClickFinish();
            onSubmitAddComponentAttribute(e, false);
          },
          children: formatMessage({
            id: "global.finish",
            defaultMessage: "Finish"
          })
        }
      )
    ] });
  }
  if (isAttributeModal && !isComponentAttribute && !isDzAttribute) {
    return /* @__PURE__ */ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [
      /* @__PURE__ */ (0,jsx_runtime.jsx)(
        Button/* Button */.$,
        {
          type: isEditingAttribute ? "button" : "submit",
          variant: "secondary",
          onClick: (e) => {
            e.preventDefault();
            onSubmitEditAttribute(e, true);
          },
          startIcon: /* @__PURE__ */ (0,jsx_runtime.jsx)(Plus/* default */.A, {}),
          children: formatMessage({
            id: getTrad("form.button.add-field"),
            defaultMessage: "Add another field"
          })
        }
      ),
      /* @__PURE__ */ (0,jsx_runtime.jsx)(
        Button/* Button */.$,
        {
          type: isEditingAttribute ? "submit" : "button",
          variant: "default",
          onClick: (e) => {
            e.preventDefault();
            onClickFinish();
            onSubmitEditAttribute(e, false);
          },
          children: formatMessage({
            id: "global.finish",
            defaultMessage: "Finish"
          })
        }
      )
    ] });
  }
  if (isContentTypeModal) {
    return /* @__PURE__ */ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [
      !isCreatingContentType && /* @__PURE__ */ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [
        /* @__PURE__ */ (0,jsx_runtime.jsx)(
          Button/* Button */.$,
          {
            type: "button",
            variant: "danger",
            onClick: (e) => {
              e.preventDefault();
              deleteContentType();
            },
            children: formatMessage({
              id: "global.delete",
              defaultMessage: "Delete"
            })
          }
        ),
        /* @__PURE__ */ (0,jsx_runtime.jsx)(
          Button/* Button */.$,
          {
            type: "submit",
            variant: "default",
            onClick: (e) => {
              e.preventDefault();
              onSubmitEditContentType(e, false);
            },
            children: formatMessage({
              id: "global.finish",
              defaultMessage: "Finish"
            })
          }
        )
      ] }),
      isCreatingContentType && /* @__PURE__ */ (0,jsx_runtime.jsx)(
        Button/* Button */.$,
        {
          type: "submit",
          variant: "secondary",
          onClick: (e) => {
            e.preventDefault();
            onSubmitCreateContentType(e, true);
          },
          children: formatMessage({
            id: "global.continue",
            defaultMessage: "Continue"
          })
        }
      )
    ] });
  }
  if (isComponentModal) {
    return /* @__PURE__ */ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [
      !isCreatingComponent && /* @__PURE__ */ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [
        /* @__PURE__ */ (0,jsx_runtime.jsx)(
          Button/* Button */.$,
          {
            type: "button",
            variant: "danger",
            onClick: (e) => {
              e.preventDefault();
              deleteComponent();
            },
            children: formatMessage({
              id: "global.delete",
              defaultMessage: "Delete"
            })
          }
        ),
        /* @__PURE__ */ (0,jsx_runtime.jsx)(
          Button/* Button */.$,
          {
            type: "submit",
            variant: "default",
            onClick: (e) => {
              e.preventDefault();
              onSubmitEditComponent(e, false);
            },
            children: formatMessage({
              id: "global.finish",
              defaultMessage: "Finish"
            })
          }
        )
      ] }),
      isCreatingComponent && /* @__PURE__ */ (0,jsx_runtime.jsx)(
        Button/* Button */.$,
        {
          type: "submit",
          variant: "secondary",
          onClick: (e) => {
            e.preventDefault();
            onSubmitCreateComponent(e, true);
          },
          children: formatMessage({
            id: "global.continue",
            defaultMessage: "Continue"
          })
        }
      )
    ] });
  }
  if (isEditingCategory) {
    return /* @__PURE__ */ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [
      /* @__PURE__ */ (0,jsx_runtime.jsx)(
        Button/* Button */.$,
        {
          type: "button",
          variant: "danger",
          onClick: (e) => {
            e.preventDefault();
            if (categoryName) {
              deleteCategory(categoryName);
            }
          },
          children: formatMessage({
            id: "global.delete",
            defaultMessage: "Delete"
          })
        }
      ),
      /* @__PURE__ */ (0,jsx_runtime.jsx)(
        Button/* Button */.$,
        {
          type: "submit",
          variant: "default",
          onClick: (e) => {
            e.preventDefault();
            onSubmitEditCategory(e);
          },
          children: formatMessage({
            id: "global.finish",
            defaultMessage: "finish"
          })
        }
      )
    ] });
  }
  if (isCustomFieldModal) {
    return /* @__PURE__ */ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [
      /* @__PURE__ */ (0,jsx_runtime.jsx)(
        Button/* Button */.$,
        {
          type: isEditingAttribute ? "button" : "submit",
          variant: "secondary",
          onClick: (e) => {
            e.preventDefault();
            onSubmitEditCustomFieldAttribute(e, true);
          },
          startIcon: /* @__PURE__ */ (0,jsx_runtime.jsx)(Plus/* default */.A, {}),
          children: formatMessage({
            id: getTrad("form.button.add-field"),
            defaultMessage: "Add another field"
          })
        }
      ),
      /* @__PURE__ */ (0,jsx_runtime.jsx)(
        Button/* Button */.$,
        {
          type: isEditingAttribute ? "submit" : "button",
          variant: "default",
          onClick: (e) => {
            e.preventDefault();
            onClickFinish();
            onSubmitEditCustomFieldAttribute(e, false);
          },
          children: formatMessage({
            id: "global.finish",
            defaultMessage: "Finish"
          })
        }
      )
    ] });
  }
  return null;
};
const FormModalHeader = ({
  actionType = null,
  attributeName,
  attributeType,
  categoryName,
  contentTypeKind,
  dynamicZoneTarget,
  forTarget,
  modalType = null,
  targetUid,
  customFieldUid = null,
  showBackLink = false
}) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const { modifiedData } = useDataManager();
  const { onOpenModalAddField } = useFormModalNavigation();
  let icon = "component";
  let headers = [];
  const schema = modifiedData?.[forTarget]?.[targetUid] || modifiedData?.[forTarget] || null;
  const displayName = schema?.schema.displayName;
  if (modalType === "contentType") {
    icon = contentTypeKind;
  }
  if (["component", "editCategory"].includes(modalType || "")) {
    icon = "component";
  }
  const isCreatingMainSchema = ["component", "contentType"].includes(modalType || "");
  if (isCreatingMainSchema) {
    let headerId = getTrad(`modalForm.component.header-${actionType}`);
    if (modalType === "contentType") {
      headerId = getTrad(`modalForm.${contentTypeKind}.header-create`);
    }
    if (actionType === "edit") {
      headerId = getTrad(`modalForm.header-edit`);
    }
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(ModalHeader/* ModalHeader */.r, { children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(Flex/* Flex */.s, { children: [
      /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* Box */.a, { children: /* @__PURE__ */ (0,jsx_runtime.jsx)(AttributeIcon, { type: icon }) }),
      /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* Box */.a, { paddingLeft: 3, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.o, { fontWeight: "bold", textColor: "neutral800", as: "h2", id: "title", children: formatMessage({ id: headerId }, { name: displayName }) }) })
    ] }) });
  }
  headers = [
    {
      label: displayName,
      info: { category: schema?.category || null, name: schema?.schema.displayName }
    }
  ];
  if (modalType === "chooseAttribute") {
    icon = ["component", "components"].includes(forTarget) ? "component" : schema.schema.kind;
  }
  if (modalType === "addComponentToDynamicZone") {
    icon = "dynamiczone";
    headers.push({ label: dynamicZoneTarget });
  }
  if (modalType === "attribute" || modalType === "customField") {
    icon = attributeType;
    headers.push({ label: attributeName });
  }
  if (modalType === "editCategory") {
    const label = formatMessage({
      id: getTrad("modalForm.header.categories"),
      defaultMessage: "Categories"
    });
    headers = [{ label }, { label: categoryName }];
  }
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(ModalHeader/* ModalHeader */.r, { children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(Flex/* Flex */.s, { gap: 3, children: [
    showBackLink && // This is a workaround and should use the LinkButton with a variant that currently doesn't exist
    /* @__PURE__ */ (0,jsx_runtime.jsx)(
      Link/* Link */.N,
      {
        "aria-label": formatMessage({
          id: getTrad("modalForm.header.back"),
          defaultMessage: "Back"
        }),
        startIcon: /* @__PURE__ */ (0,jsx_runtime.jsx)(ArrowLeft/* default */.A, {}),
        onClick: () => onOpenModalAddField({ forTarget, targetUid }),
        href: "#back",
        isExternal: false
      }
    ),
    /* @__PURE__ */ (0,jsx_runtime.jsx)(AttributeIcon, { type: icon, customField: customFieldUid }),
    /* @__PURE__ */ (0,jsx_runtime.jsx)(Breadcrumbs/* Breadcrumbs */.B, { label: headers.map(({ label }) => label).join(","), children: headers.map(({ label, info }, index2, arr) => {
      label = upperFirst(label);
      if (!label) {
        return null;
      }
      const key = `${label}.${index2}`;
      if (info?.category) {
        label = `${label} (${upperFirst(info.category)} - ${upperFirst(info.name)})`;
      }
      return /* @__PURE__ */ (0,jsx_runtime.jsx)(Crumb/* Crumb */.m, { isCurrent: index2 === arr.length - 1, children: label }, key);
    }) })
  ] }) });
};
const getModalTitleSubHeader = ({
  modalType,
  forTarget,
  kind,
  actionType,
  step
}) => {
  switch (modalType) {
    case "chooseAttribute":
      return getTrad(
        `modalForm.sub-header.chooseAttribute.${forTarget?.includes("component") ? "component" : kind || "collectionType"}`
      );
    case "attribute": {
      return getTrad(
        `modalForm.sub-header.attribute.${actionType}${step !== "null" && step !== null && actionType !== "edit" ? ".step" : ""}`
      );
    }
    case "customField": {
      return getTrad(`modalForm.sub-header.attribute.${actionType}`);
    }
    case "addComponentToDynamicZone":
      return getTrad("modalForm.sub-header.addComponentToDynamicZone");
    default:
      return getTrad("configurations");
  }
};
const FormModalSubHeader = ({
  actionType,
  modalType,
  forTarget,
  kind,
  step,
  attributeType,
  attributeName,
  customField
}) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const intlLabel = modalType === "customField" ? customField?.intlLabel : { id: getTrad(`attribute.${attributeType}`) };
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)(Flex/* Flex */.s, { direction: "column", alignItems: "flex-start", paddingBottom: 2, gap: 1, children: [
    /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.o, { as: "h2", variant: "beta", children: formatMessage(
      {
        id: getModalTitleSubHeader({
          actionType,
          forTarget,
          kind,
          step,
          modalType
        }),
        defaultMessage: "Add new field"
      },
      {
        type: intlLabel ? upperFirst(formatMessage(intlLabel)) : "",
        name: upperFirst(attributeName),
        step
      }
    ) }),
    /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.o, { variant: "pi", textColor: "neutral600", children: formatMessage({
      id: getTrad(`attribute.${attributeType}.description`),
      defaultMessage: "A type for modeling data"
    }) })
  ] });
};
const COMPONENT_ICONS = {
  alien: Alien/* default */.A,
  apps: Apps/* default */.A,
  archive: Archive/* default */.A,
  arrowDown: ArrowDown/* default */.A,
  arrowLeft: ArrowLeft/* default */.A,
  arrowRight: ArrowRight/* default */.A,
  arrowUp: ArrowUp/* default */.A,
  attachment: Attachment/* default */.A,
  bell: Bell/* default */.A,
  bold: Bold/* default */.A,
  book: Book/* default */.A,
  briefcase: Briefcase/* default */.A,
  brush: Brush/* default */.A,
  bulletList: BulletList/* default */.A,
  calendar: Calendar/* default */.A,
  car: Car/* default */.A,
  cast: Cast/* default */.A,
  chartBubble: ChartBubble/* default */.A,
  chartCircle: ChartCircle/* default */.A,
  chartPie: ChartPie/* default */.A,
  check: Check/* default */.A,
  clock: Clock/* default */.A,
  cloud: Cloud/* default */.A,
  code: Code/* default */.A,
  cog: Cog/* default */.A,
  collapse: Collapse/* default */.A,
  command: Command/* default */.A,
  connector: Connector/* default */.A,
  crop: Crop/* default */.A,
  crown: Crown/* default */.A,
  cube: Cube/* default */.A,
  cup: Cup/* default */.A,
  cursor: Cursor/* default */.A,
  dashboard: Dashboard/* default */.A,
  database: Database/* default */.A,
  discuss: Discuss/* default */.A,
  doctor: Doctor/* default */.A,
  earth: Earth/* default */.A,
  emotionHappy: EmotionHappy/* default */.A,
  emotionUnhappy: EmotionUnhappy/* default */.A,
  envelop: Envelop/* default */.A,
  exit: Exit/* default */.A,
  expand: Expand/* default */.A,
  eye: Eye/* default */.A,
  feather: Feather/* default */.A,
  file: File/* default */.A,
  fileError: FileError/* default */.A,
  filePdf: FilePdf/* default */.A,
  filter: Filter/* default */.A,
  folder: Folder/* default */.A,
  gate: Gate/* default */.A,
  gift: Gift/* default */.A,
  globe: Globe/* default */.A,
  grid: dist_Grid/* default */.A,
  handHeart: HandHeart/* default */.A,
  hashtag: Hashtag/* default */.A,
  headphone: Headphone/* default */.A,
  heart: Heart/* default */.A,
  house: House/* default */.A,
  information: Information/* default */.A,
  italic: Italic/* default */.A,
  key: Key/* default */.A,
  landscape: Landscape/* default */.A,
  layer: Layer/* default */.A,
  layout: dist_Layout/* default */.A,
  lightbulb: Lightbulb/* default */.A,
  link: dist_Link/* default */.A,
  lock: Lock/* default */.A,
  magic: Magic/* default */.A,
  manyToMany: ManyToMany/* default */.A,
  manyToOne: ManyToOne/* default */.A,
  manyWays: ManyWays/* default */.A,
  medium: Medium/* default */.A,
  message: Message/* default */.A,
  microphone: Microphone/* default */.A,
  monitor: Monitor/* default */.A,
  moon: Moon/* default */.A,
  music: Music/* default */.A,
  oneToMany: OneToMany/* default */.A,
  oneToOne: OneToOne/* default */.A,
  oneWay: OneWay/* default */.A,
  paint: Paint/* default */.A,
  paintBrush: PaintBrush/* default */.A,
  paperPlane: PaperPlane/* default */.A,
  pencil: Pencil/* default */.A,
  phone: Phone/* default */.A,
  picture: Picture/* default */.A,
  pin: Pin/* default */.A,
  pinMap: PinMap/* default */.A,
  plane: Plane/* default */.A,
  play: Play/* default */.A,
  plus: Plus/* default */.A,
  priceTag: PriceTag/* default */.A,
  puzzle: Puzzle/* default */.A,
  question: Question/* default */.A,
  quote: Quote/* default */.A,
  repeat: Repeat/* default */.A,
  restaurant: Restaurant/* default */.A,
  rocket: Rocket/* default */.A,
  rotate: Rotate/* default */.A,
  scissors: Scissors/* default */.A,
  search: Search/* default */.A,
  seed: Seed/* default */.A,
  server: Server/* default */.A,
  shield: Shield/* default */.A,
  shirt: Shirt/* default */.A,
  shoppingCart: ShoppingCart/* default */.A,
  slideshow: Slideshow/* default */.A,
  stack: Stack/* default */.A,
  star: Star/* default */.A,
  store: Store/* default */.A,
  strikeThrough: StrikeThrough/* default */.A,
  sun: Sun/* default */.A,
  television: Television/* default */.A,
  thumbDown: ThumbDown/* default */.A,
  thumbUp: ThumbUp/* default */.A,
  train: Train/* default */.A,
  twitter: Twitter/* default */.A,
  typhoon: Typhoon/* default */.A,
  underline: Underline/* default */.A,
  user: User/* default */.A,
  volumeMute: VolumeMute/* default */.A,
  volumeUp: VolumeUp/* default */.A,
  walk: Walk/* default */.A,
  wheelchair: Wheelchair/* default */.A,
  write: Write/* default */.A
};
const IconPickerWrapper = (0,styled_components_browser_esm/* default */.Ay)((0,Flex/* Flex */.s))`
  label {
    ${(0,utils/* inputFocusStyle */.id)()}
    border-radius: ${({ theme }) => theme.borderRadius};
    border: 1px solid ${({ theme }) => theme.colors.neutral100};
  }
`;
const IconPick = ({ iconKey, name, onChange, isSelected, ariaLabel }) => {
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(Field/* Field */.D, { name, required: false, children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(FieldLabel/* FieldLabel */.d, { htmlFor: iconKey, id: `${iconKey}-label`, children: [
    /* @__PURE__ */ (0,jsx_runtime.jsxs)(VisuallyHidden/* VisuallyHidden */.s, { children: [
      /* @__PURE__ */ (0,jsx_runtime.jsx)(
        FieldInput/* FieldInput */.T,
        {
          type: "radio",
          id: iconKey,
          name,
          checked: isSelected,
          onChange,
          value: iconKey,
          "aria-checked": isSelected,
          "aria-labelledby": `${iconKey}-label`
        }
      ),
      ariaLabel
    ] }),
    /* @__PURE__ */ (0,jsx_runtime.jsx)(
      Flex/* Flex */.s,
      {
        padding: 2,
        cursor: "pointer",
        hasRadius: true,
        background: isSelected ? "primary200" : void 0,
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Icon/* Icon */.I, { as: COMPONENT_ICONS[iconKey], color: isSelected ? "primary600" : "neutral300" })
      }
    )
  ] }) });
};
const IconPicker = ({ intlLabel, name, onChange, value = "" }) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const [showSearch, setShowSearch] = (0,react.useState)(false);
  const [search, setSearch] = (0,react.useState)("");
  const allIcons = Object.keys(COMPONENT_ICONS);
  const [icons, setIcons] = (0,react.useState)(allIcons);
  const searchIconRef = (0,react.useRef)(null);
  const searchBarRef = (0,react.useRef)(null);
  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };
  const onChangeSearch = ({ target: { value: value2 } }) => {
    setSearch(value2);
    setIcons(() => allIcons.filter((icon) => icon.toLowerCase().includes(value2.toLowerCase())));
  };
  const onClearSearch = () => {
    toggleSearch();
    setSearch("");
    setIcons(allIcons);
  };
  const removeIconSelected = () => {
    onChange({ target: { name, value: "" } });
  };
  (0,react.useEffect)(() => {
    if (showSearch) {
      searchBarRef.current?.focus();
    }
  }, [showSearch]);
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0,jsx_runtime.jsxs)(Flex/* Flex */.s, { justifyContent: "space-between", paddingBottom: 2, children: [
      /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.o, { variant: "pi", fontWeight: "bold", textColor: "neutral800", as: "label", children: formatMessage(intlLabel) }),
      /* @__PURE__ */ (0,jsx_runtime.jsxs)(Flex/* Flex */.s, { gap: 1, children: [
        showSearch ? /* @__PURE__ */ (0,jsx_runtime.jsx)(
          Searchbar/* Searchbar */.S,
          {
            ref: searchBarRef,
            name: "searchbar",
            size: "S",
            placeholder: formatMessage({
              id: getTrad("ComponentIconPicker.search.placeholder"),
              defaultMessage: "Search for an icon"
            }),
            onBlur: () => {
              if (!search) {
                toggleSearch();
              }
            },
            onChange: onChangeSearch,
            value: search,
            onClear: onClearSearch,
            clearLabel: formatMessage({
              id: getTrad("IconPicker.search.clear.label"),
              defaultMessage: "Clear the icon search"
            }),
            children: formatMessage({
              id: getTrad("IconPicker.search.placeholder.label"),
              defaultMessage: "Search for an icon"
            })
          }
        ) : /* @__PURE__ */ (0,jsx_runtime.jsx)(
          IconButton/* IconButton */.K,
          {
            ref: searchIconRef,
            onClick: toggleSearch,
            "aria-label": formatMessage({
              id: getTrad("IconPicker.search.button.label"),
              defaultMessage: "Search icon button"
            }),
            icon: /* @__PURE__ */ (0,jsx_runtime.jsx)(Search/* default */.A, {}),
            noBorder: true
          }
        ),
        value && /* @__PURE__ */ (0,jsx_runtime.jsx)(
          Tooltip/* Tooltip */.m,
          {
            description: formatMessage({
              id: getTrad("IconPicker.remove.tooltip"),
              defaultMessage: "Remove the selected icon"
            }),
            children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
              IconButton/* IconButton */.K,
              {
                onClick: removeIconSelected,
                "aria-label": formatMessage({
                  id: getTrad("IconPicker.remove.button"),
                  defaultMessage: "Remove the selected icon button"
                }),
                icon: /* @__PURE__ */ (0,jsx_runtime.jsx)(Trash/* default */.A, {}),
                noBorder: true
              }
            )
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ (0,jsx_runtime.jsx)(
      IconPickerWrapper,
      {
        position: "relative",
        padding: 1,
        background: "neutral100",
        hasRadius: true,
        wrap: "wrap",
        gap: 2,
        maxHeight: "126px",
        overflow: "auto",
        textAlign: "center",
        children: icons.length > 0 ? icons.map((iconKey) => /* @__PURE__ */ (0,jsx_runtime.jsx)(
          IconPick,
          {
            iconKey,
            name,
            onChange,
            isSelected: iconKey === value,
            ariaLabel: formatMessage(
              {
                id: getTrad("IconPicker.icon.label"),
                defaultMessage: "Select {icon} icon"
              },
              { icon: iconKey }
            )
          },
          iconKey
        )) : /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* Box */.a, { padding: 4, grow: 2, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.o, { variant: "delta", textColor: "neutral600", textAlign: "center", children: formatMessage({
          id: getTrad("IconPicker.emptyState.label"),
          defaultMessage: "No icon found"
        }) }) })
      }
    )
  ] });
};
const PluralName = ({
  description,
  error,
  intlLabel,
  modifiedData,
  name,
  onChange,
  value
}) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const onChangeRef = (0,react.useRef)(onChange);
  const displayName = modifiedData?.displayName || "";
  (0,react.useEffect)(() => {
    if (displayName) {
      const value2 = (0,index_vZqceADF.n)(displayName);
      try {
        const plural = pluralize(value2, 2);
        onChangeRef.current({ target: { name, value: plural } });
      } catch (err) {
        onChangeRef.current({ target: { name, value: value2 } });
      }
    } else {
      onChangeRef.current({ target: { name, value: "" } });
    }
  }, [displayName, name]);
  const errorMessage = error ? formatMessage({ id: error, defaultMessage: error }) : "";
  const hint = description ? formatMessage(
    { id: description.id, defaultMessage: description.defaultMessage },
    { ...description.values }
  ) : "";
  const label = formatMessage(intlLabel);
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    TextInput/* TextInput */.k,
    {
      error: errorMessage,
      label,
      id: name,
      hint,
      name,
      onChange,
      value: value || ""
    }
  );
};
const RelationTargetPicker = ({
  oneThatIsCreatingARelationWithAnother,
  target
}) => {
  const { contentTypes, sortedContentTypesList } = useDataManager();
  const dispatch = (0,es/* useDispatch */.wA)();
  const allowedContentTypesForRelation = sortedContentTypesList.filter(
    isAllowedContentTypesForRelations
  );
  const { plugin = null, schema: { displayName } = { displayName: "error" } } = contentTypes?.[target] ?? {};
  const handleSelect = ({
    uid,
    plugin: plugin2,
    title,
    restrictRelationsTo
  }) => () => {
    const selectedContentTypeFriendlyName = plugin2 ? `${plugin2}_${title}` : title;
    dispatch({
      type: index_vZqceADF.O,
      target: {
        value: uid,
        oneThatIsCreatingARelationWithAnother,
        selectedContentTypeFriendlyName,
        targetContentTypeAllowedRelations: restrictRelationsTo
      }
    });
  };
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)(Menu/* Root */.bL, { children: [
    /* @__PURE__ */ (0,jsx_runtime.jsx)(MenuTrigger, { children: `${displayName} ${plugin ? `(from: ${plugin})` : ""}` }),
    /* @__PURE__ */ (0,jsx_runtime.jsx)(Menu/* Content */.UC, { zIndex: 5, children: allowedContentTypesForRelation.map(({ uid, title, restrictRelationsTo, plugin: plugin2 }) => /* @__PURE__ */ (0,jsx_runtime.jsxs)(Menu/* Item */.q7, { onSelect: handleSelect({ uid, plugin: plugin2, title, restrictRelationsTo }), children: [
      title,
      "\xA0",
      plugin2 && /* @__PURE__ */ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [
        "(from: ",
        plugin2,
        ")"
      ] })
    ] }, uid)) })
  ] });
};
const MenuTrigger = (0,styled_components_browser_esm/* default */.Ay)(Menu/* Trigger */.l9)`
  svg {
    width: ${6 / 16}rem;
    height: ${4 / 16}rem;
  }
`;
const RelationFormBox = ({
  disabled = false,
  error,
  header,
  isMain = false,
  name,
  onChange,
  oneThatIsCreatingARelationWithAnother = "",
  target = "",
  value = ""
}) => {
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)(Box/* Box */.a, { background: "neutral100", hasRadius: true, borderColor: "neutral200", children: [
    /* @__PURE__ */ (0,jsx_runtime.jsx)(Flex/* Flex */.s, { paddingTop: isMain ? 4 : 1, paddingBottom: isMain ? 3 : 1, justifyContent: "center", children: isMain ? /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.o, { variant: "pi", fontWeight: "bold", textColor: "neutral800", children: header }) : /* @__PURE__ */ (0,jsx_runtime.jsx)(
      RelationTargetPicker,
      {
        target,
        oneThatIsCreatingARelationWithAnother
      }
    ) }),
    /* @__PURE__ */ (0,jsx_runtime.jsx)(Divider/* Divider */.c, { background: "neutral200" }),
    /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* Box */.a, { padding: 4, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
      dist/* GenericInput */.ah,
      {
        disabled,
        error: error?.id || null,
        intlLabel: {
          id: getTrad("form.attribute.item.defineRelation.fieldName"),
          defaultMessage: "Field name"
        },
        name,
        onChange,
        type: "text",
        value
      }
    ) })
  ] });
};
const Wrapper = (0,styled_components_browser_esm/* default */.Ay)((0,Box/* Box */.a))`
  position: relative;
  width: 100%;
  &::before {
    content: '';
    position: absolute;
    top: calc(50% - 0px);
    height: 2px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary600};
    z-index: 0;
  }
`;
const IconWrapper = (0,styled_components_browser_esm/* default */.Ay)((0,Box/* Box */.a))`
  background: ${({ theme, isSelected }) => theme.colors[isSelected ? "primary100" : "neutral0"]};
  border: 1px solid
    ${({ theme, isSelected }) => theme.colors[isSelected ? "primary700" : "neutral200"]};
  border-radius: ${({ theme }) => theme.borderRadius};
  z-index: 1;
  svg {
    width: 1.5rem;
    height: 100%;
    path {
      fill: ${({ theme, isSelected }) => theme.colors[isSelected ? "primary700" : "neutral500"]};
    }
  }
  &:disabled {
    cursor: not-allowed;
  }
`;
const InfosWrapper = (0,styled_components_browser_esm/* default */.Ay)((0,Flex/* Flex */.s))`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;
const relations = {
  oneWay: OneWay/* default */.A,
  oneToOne: OneToOne/* default */.A,
  oneToMany: OneToMany/* default */.A,
  manyToOne: ManyToOne/* default */.A,
  manyToMany: ManyToMany/* default */.A,
  manyWay: ManyWays/* default */.A
};
const RelationNaturePicker = ({
  naturePickerType,
  oneThatIsCreatingARelationWithAnother,
  relationType,
  target
}) => {
  const dispatch = (0,es/* useDispatch */.wA)();
  const { formatMessage } = (0,useIntl/* default */.A)();
  const { contentTypes, modifiedData } = useDataManager();
  const ctRelations = ["oneWay", "oneToOne", "oneToMany", "manyToOne", "manyToMany", "manyWay"];
  const componentRelations = ["oneWay", "manyWay"];
  const dataType = naturePickerType === "contentType" ? get(modifiedData, [naturePickerType, "schema", "kind"], "") : naturePickerType;
  const relationsType = dataType === "collectionType" ? ctRelations : componentRelations;
  const areDisplayedNamesInverted = relationType === "manyToOne";
  const targetLabel = get(contentTypes, [target, "schema", "displayName"], "unknown");
  const leftTarget = areDisplayedNamesInverted ? targetLabel : oneThatIsCreatingARelationWithAnother;
  const rightTarget = areDisplayedNamesInverted ? oneThatIsCreatingARelationWithAnother : targetLabel;
  const leftDisplayedValue = pluralize(leftTarget, relationType === "manyToMany" ? 2 : 1);
  const restrictedRelations = get(contentTypes, [target, "schema", "restrictRelationsTo"], null);
  const rightDisplayedValue = pluralize(
    rightTarget,
    ["manyToMany", "oneToMany", "manyToOne", "manyWay"].includes(relationType) ? 2 : 1
  );
  if (!relationType) {
    return null;
  }
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)(Flex/* Flex */.s, { style: { flex: 1 }, children: [
    /* @__PURE__ */ (0,jsx_runtime.jsx)(Wrapper, { children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Flex/* Flex */.s, { paddingLeft: 9, paddingRight: 9, paddingTop: 1, justifyContent: "center", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(KeyboardNavigable/* KeyboardNavigable */.r, { tagName: "button", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Flex/* Flex */.s, { gap: 3, children: relationsType.map((relation) => {
      const Asset = relations[relation];
      const isEnabled = restrictedRelations === null || restrictedRelations.includes(relation);
      return /* @__PURE__ */ (0,jsx_runtime.jsx)(
        IconWrapper,
        {
          as: "button",
          isSelected: relationType === relation,
          disabled: !isEnabled,
          onClick: () => {
            if (isEnabled) {
              dispatch({
                type: index_vZqceADF.a,
                target: {
                  oneThatIsCreatingARelationWithAnother,
                  targetContentType: target,
                  value: relation
                }
              });
            }
          },
          padding: 2,
          type: "button",
          children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Asset, {}, relation)
        },
        relation
      );
    }) }) }) }) }),
    /* @__PURE__ */ (0,jsx_runtime.jsxs)(InfosWrapper, { justifyContent: "center", children: [
      /* @__PURE__ */ (0,jsx_runtime.jsxs)(Typography/* Typography */.o, { children: [
        truncate(leftDisplayedValue, { length: 24 }),
        "\xA0"
      ] }),
      /* @__PURE__ */ (0,jsx_runtime.jsxs)(Typography/* Typography */.o, { textColor: "primary600", children: [
        formatMessage({ id: getTrad(`relation.${relationType}`) }),
        "\xA0"
      ] }),
      /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.o, { children: truncate(rightDisplayedValue, { length: 24 }) })
    ] })
  ] });
};
const index_b3fbviVW_Relation = ({
  formErrors,
  mainBoxHeader,
  modifiedData,
  naturePickerType,
  onChange
}) => {
  const relationType = (0,index_vZqceADF.g)(modifiedData.relation, modifiedData.targetAttribute);
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)(Flex/* Flex */.s, { style: { position: "relative" }, children: [
    /* @__PURE__ */ (0,jsx_runtime.jsx)(
      RelationFormBox,
      {
        isMain: true,
        header: mainBoxHeader,
        error: formErrors?.name || null,
        name: "name",
        onChange,
        value: modifiedData?.name || ""
      }
    ),
    /* @__PURE__ */ (0,jsx_runtime.jsx)(
      RelationNaturePicker,
      {
        naturePickerType,
        oneThatIsCreatingARelationWithAnother: mainBoxHeader,
        relationType,
        target: modifiedData.target
      }
    ),
    /* @__PURE__ */ (0,jsx_runtime.jsx)(
      RelationFormBox,
      {
        disabled: ["oneWay", "manyWay"].includes(relationType),
        error: formErrors?.targetAttribute || null,
        name: "targetAttribute",
        onChange,
        oneThatIsCreatingARelationWithAnother: mainBoxHeader,
        target: modifiedData.target,
        value: modifiedData?.targetAttribute || ""
      }
    )
  ] });
};
const SelectCategory = ({
  error = null,
  intlLabel,
  name,
  onChange,
  value = void 0
}) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const { allComponentsCategories } = useDataManager();
  const [categories, setCategories] = (0,react.useState)(allComponentsCategories);
  const errorMessage = error ? formatMessage({ id: error, defaultMessage: error }) : "";
  const label = formatMessage(intlLabel);
  const handleChange = (value2) => {
    onChange({ target: { name, value: value2, type: "select-category" } });
  };
  const handleCreateOption = (value2) => {
    setCategories((prev) => [...prev, value2]);
    handleChange(value2);
  };
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    Combobox/* CreatableCombobox */.nP,
    {
      error: errorMessage,
      id: name,
      label,
      name,
      onChange: handleChange,
      onCreateOption: handleCreateOption,
      value,
      children: categories.map((category) => /* @__PURE__ */ (0,jsx_runtime.jsx)(ComboboxOption/* ComboboxOption */.j, { value: category, children: category }, category))
    }
  );
};
const SelectComponent = ({
  error = null,
  intlLabel,
  isAddingAComponentToAnotherComponent,
  isCreating,
  isCreatingComponentWhileAddingAField,
  componentToCreate,
  name,
  onChange,
  targetUid,
  forTarget,
  value
}) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const errorMessage = error ? formatMessage({ id: error, defaultMessage: error }) : "";
  const label = formatMessage(intlLabel);
  const { componentsGroupedByCategory, componentsThatHaveOtherComponentInTheirAttributes } = useDataManager();
  const isTargetAComponent = ["component", "components"].includes(forTarget);
  let options2 = Object.entries(componentsGroupedByCategory).reduce(
    (acc, current) => {
      const [categoryName, components] = current;
      const compos = components.map((component) => {
        return {
          uid: component.uid,
          label: component.schema.displayName,
          categoryName
        };
      });
      return [...acc, ...compos];
    },
    []
  );
  if (isAddingAComponentToAnotherComponent) {
    options2 = options2.filter((option) => {
      return !componentsThatHaveOtherComponentInTheirAttributes.includes(option.uid);
    });
  }
  if (isTargetAComponent) {
    options2 = options2.filter((option) => {
      return option.uid !== targetUid;
    });
  }
  if (isCreatingComponentWhileAddingAField) {
    options2 = [
      {
        uid: value,
        label: componentToCreate?.displayName,
        categoryName: componentToCreate?.category
      }
    ];
  }
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    Select/* Select */.l,
    {
      disabled: isCreatingComponentWhileAddingAField || !isCreating,
      error: errorMessage,
      label,
      id: name,
      name,
      onChange: (value2) => {
        onChange({ target: { name, value: value2, type: "select-category" } });
      },
      value: value || "",
      children: options2.map((option) => {
        return /* @__PURE__ */ (0,jsx_runtime.jsx)(Option/* Option */.c, { value: option.uid, children: `${option.categoryName} - ${option.label}` }, option.uid);
      })
    }
  );
};
const SelectComponents = ({
  dynamicZoneTarget,
  intlLabel,
  name,
  onChange,
  value
}) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const { componentsGroupedByCategory, modifiedData } = useDataManager();
  const dzSchema = findAttribute(modifiedData.contentType.schema.attributes, dynamicZoneTarget);
  const alreadyUsedComponents = dzSchema?.components || [];
  const filteredComponentsGroupedByCategory = Object.keys(componentsGroupedByCategory).reduce(
    (acc, current) => {
      const filteredComponents = componentsGroupedByCategory[current].filter(({ uid }) => {
        return !alreadyUsedComponents.includes(uid);
      });
      if (filteredComponents.length > 0) {
        acc[current] = filteredComponents;
      }
      return acc;
    },
    {}
  );
  const options2 = Object.entries(filteredComponentsGroupedByCategory).reduce((acc, current) => {
    const [categoryName, components] = current;
    const section = {
      label: categoryName,
      children: components.map(({ uid, schema: { displayName } }) => {
        return { label: displayName, value: uid };
      })
    };
    acc.push(section);
    return acc;
  }, []);
  const displayedValue = formatMessage(
    {
      id: getTrad("components.SelectComponents.displayed-value"),
      defaultMessage: "{number, plural, =0 {# components} one {# component} other {# components}} selected"
    },
    { number: value?.length ?? 0 }
  );
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    MultiSelectNested/* MultiSelectNested */.B,
    {
      id: "select1",
      label: formatMessage(intlLabel),
      customizeContent: () => displayedValue,
      name,
      onChange: (values) => {
        onChange({ target: { name, value: values, type: "select-components" } });
      },
      options: options2,
      value: value || []
    }
  );
};
const SelectDateType = ({
  intlLabel,
  error = void 0,
  modifiedData,
  name,
  onChange,
  options: options2,
  value = ""
}) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const label = formatMessage(intlLabel);
  const errorMessage = error ? formatMessage({ id: error, defaultMessage: error }) : "";
  const handleChange = (nextValue) => {
    onChange({ target: { name, value: nextValue, type: "select" } });
    if (!value) {
      return;
    }
    if (modifiedData.default !== void 0 && modifiedData.default !== null) {
      onChange({ target: { name: "default", value: null } });
    }
  };
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    Select/* Select */.l,
    {
      error: errorMessage,
      label,
      id: name,
      name,
      onChange: handleChange,
      value: value || "",
      children: options2.map(({ metadatas: { intlLabel: intlLabel2, disabled, hidden }, key, value: value2 }) => {
        return /* @__PURE__ */ (0,jsx_runtime.jsx)(Option/* Option */.c, { value: value2, disabled, hidden, children: formatMessage(
          { id: intlLabel2.id, defaultMessage: intlLabel2.defaultMessage },
          intlLabel2.values
        ) }, key);
      })
    }
  );
};
const SelectNumber = ({
  intlLabel,
  error = void 0,
  modifiedData,
  name,
  onChange,
  options: options2,
  value = ""
}) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const label = formatMessage(intlLabel);
  const errorMessage = error ? formatMessage({ id: error, defaultMessage: error }) : "";
  const handleChange = (nextValue) => {
    onChange({ target: { name, value: nextValue, type: "select" } });
    if (!value) {
      return;
    }
    if (nextValue === "biginteger" && value !== "biginteger") {
      if (modifiedData.default !== void 0 && modifiedData.default !== null) {
        onChange({ target: { name: "default", value: null } });
      }
      if (modifiedData.max !== void 0 && modifiedData.max !== null) {
        onChange({ target: { name: "max", value: null } });
      }
      if (modifiedData.min !== void 0 && modifiedData.min !== null) {
        onChange({ target: { name: "min", value: null } });
      }
    }
    if (typeof nextValue === "string" && ["decimal", "float", "integer"].includes(nextValue) && value === "biginteger") {
      if (modifiedData.default !== void 0 && modifiedData.default !== null) {
        onChange({ target: { name: "default", value: null } });
      }
      if (modifiedData.max !== void 0 && modifiedData.max !== null) {
        onChange({ target: { name: "max", value: null } });
      }
      if (modifiedData.min !== void 0 && modifiedData.min !== null) {
        onChange({ target: { name: "min", value: null } });
      }
    }
  };
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    Select/* Select */.l,
    {
      error: errorMessage,
      label,
      id: name,
      name,
      onChange: handleChange,
      value: value || "",
      children: options2.map(({ metadatas: { intlLabel: intlLabel2, disabled, hidden }, key, value: value2 }) => {
        return /* @__PURE__ */ (0,jsx_runtime.jsx)(Option/* Option */.c, { value: value2, disabled, hidden, children: formatMessage(intlLabel2) }, key);
      })
    }
  );
};
SelectNumber.defaultProps = {
  error: void 0,
  value: ""
};
const SingularName = ({
  description = null,
  error = null,
  intlLabel,
  modifiedData,
  name,
  onChange,
  value = null
}) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const onChangeRef = (0,react.useRef)(onChange);
  const displayName = modifiedData?.displayName || "";
  (0,react.useEffect)(() => {
    if (displayName) {
      onChangeRef.current({ target: { name, value: (0,index_vZqceADF.n)(displayName) } });
    } else {
      onChangeRef.current({ target: { name, value: "" } });
    }
  }, [displayName, name]);
  const errorMessage = error ? formatMessage({ id: error, defaultMessage: error }) : "";
  const hint = description ? formatMessage(
    { id: description.id, defaultMessage: description.defaultMessage },
    { ...description.values }
  ) : "";
  const label = formatMessage(intlLabel);
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    TextInput/* TextInput */.k,
    {
      error: errorMessage,
      label,
      id: name,
      hint,
      name,
      onChange,
      value: value || ""
    }
  );
};
const TabForm = ({
  form,
  formErrors,
  genericInputProps,
  modifiedData,
  onChange
}) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children: form.map((section, sectionIndex) => {
    if (section.items.length === 0) {
      return null;
    }
    return /* @__PURE__ */ (0,jsx_runtime.jsxs)(Box/* Box */.a, { children: [
      section.sectionTitle && /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* Box */.a, { paddingBottom: 4, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.o, { variant: "delta", as: "h3", children: formatMessage(section.sectionTitle) }) }),
      /* @__PURE__ */ (0,jsx_runtime.jsx)(Grid/* Grid */.x, { gap: 4, children: section.items.map((input, i) => {
        const key = `${sectionIndex}.${i}`;
        const value = get(modifiedData, input.name, void 0);
        const pluginOptionError = Object.keys(formErrors).find((key2) => key2 === input.name);
        const errorId = pluginOptionError ? formErrors[pluginOptionError].id : get(
          formErrors,
          [
            ...input.name.split(".").filter((key2) => key2 !== "componentToCreate"),
            "id"
          ],
          null
        );
        if (input.type === "pushRight") {
          return /* @__PURE__ */ (0,jsx_runtime.jsx)(GridItem/* GridItem */.E, { col: input.size || 6, children: /* @__PURE__ */ (0,jsx_runtime.jsx)("div", {}) }, input.name || key);
        }
        return /* @__PURE__ */ (0,jsx_runtime.jsx)(GridItem/* GridItem */.E, { col: input.size || 6, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
          dist/* GenericInput */.ah,
          {
            ...input,
            ...genericInputProps,
            error: errorId,
            onChange,
            value
          }
        ) }, input.name || key);
      }) })
    ] }, sectionIndex);
  }) });
};
const TextareaEnum = ({
  description = null,
  disabled = false,
  error = "",
  intlLabel,
  labelAction,
  name,
  onChange,
  placeholder = null,
  value = ""
}) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const errorMessage = error ? formatMessage({ id: error, defaultMessage: error }) : "";
  const hint = description ? formatMessage(
    { id: description.id, defaultMessage: description.defaultMessage },
    { ...description.values }
  ) : "";
  const label = formatMessage(intlLabel);
  const formattedPlaceholder = placeholder ? formatMessage(
    { id: placeholder.id, defaultMessage: placeholder.defaultMessage },
    { ...placeholder.values }
  ) : "";
  const inputValue = Array.isArray(value) ? value.join("\n") : "";
  const handleChange = (e) => {
    const arrayValue = e.target.value.split("\n");
    onChange({ target: { name, value: arrayValue } });
  };
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    Textarea/* Textarea */.T,
    {
      disabled,
      error: errorMessage,
      label,
      labelAction,
      id: name,
      hint,
      name,
      onChange: handleChange,
      placeholder: formattedPlaceholder,
      value: inputValue,
      children: inputValue
    }
  );
};
const nameField$1 = {
  name: "name",
  type: "text",
  intlLabel: {
    id: "global.name",
    defaultMessage: "Name"
  },
  description: {
    id: getTrad("modalForm.attribute.form.base.name.description"),
    defaultMessage: "No space is allowed for the name of the attribute"
  }
  // validations: {
  //   required: true,
  // },
};
const commonBaseForm = {
  sections: [{ sectionTitle: null, items: [nameField$1] }]
};
const componentForm = {
  base(prefix = "") {
    const sections = [
      {
        sectionTitle: null,
        items: [
          {
            name: `${prefix}displayName`,
            type: "text",
            intlLabel: {
              id: getTrad("contentType.displayName.label"),
              defaultMessage: "Display Name"
            }
          },
          {
            name: `${prefix}category`,
            type: "select-category",
            intlLabel: {
              id: getTrad("modalForm.components.create-component.category.label"),
              defaultMessage: "Select a category or enter a name to create a new one"
            }
          }
        ]
      },
      {
        sectionTitle: null,
        items: [
          {
            name: `${prefix}icon`,
            type: "icon-picker",
            size: 12,
            intlLabel: {
              id: getTrad("modalForm.components.icon.label"),
              defaultMessage: "Icon"
            }
          }
        ]
      }
    ];
    return sections;
  },
  advanced() {
    const sections = [];
    return sections;
  }
};
const attributeOptions = {
  default: {
    name: "default",
    type: "text",
    intlLabel: {
      id: getTrad("form.attribute.settings.default"),
      defaultMessage: "Default value"
    }
  },
  max: {
    name: "max",
    type: "checkbox-with-number-field",
    intlLabel: {
      id: getTrad("form.attribute.item.maximum"),
      defaultMessage: "Maximum value"
    }
  },
  maxLength: {
    name: "maxLength",
    type: "checkbox-with-number-field",
    intlLabel: {
      id: getTrad("form.attribute.item.maximumLength"),
      defaultMessage: "Maximum length"
    }
  },
  min: {
    name: "min",
    type: "checkbox-with-number-field",
    intlLabel: {
      id: getTrad("form.attribute.item.minimum"),
      defaultMessage: "Minimum value"
    }
  },
  minLength: {
    name: "minLength",
    type: "checkbox-with-number-field",
    intlLabel: {
      id: getTrad("form.attribute.item.minimumLength"),
      defaultMessage: "Minimum length"
    }
  },
  private: {
    name: "private",
    type: "checkbox",
    intlLabel: {
      id: getTrad("form.attribute.item.privateField"),
      defaultMessage: "Private field"
    },
    description: {
      id: getTrad("form.attribute.item.privateField.description"),
      defaultMessage: "This field will not show up in the API response"
    }
  },
  regex: {
    intlLabel: {
      id: getTrad("form.attribute.item.text.regex"),
      defaultMessage: "RegExp pattern"
    },
    name: "regex",
    type: "text",
    description: {
      id: getTrad("form.attribute.item.text.regex.description"),
      defaultMessage: "The text of the regular expression"
    }
  },
  required: {
    name: "required",
    type: "checkbox",
    intlLabel: {
      id: getTrad("form.attribute.item.requiredField"),
      defaultMessage: "Required field"
    },
    description: {
      id: getTrad("form.attribute.item.requiredField.description"),
      defaultMessage: "You won't be able to create an entry if this field is empty"
    }
  },
  unique: {
    name: "unique",
    type: "checkbox",
    intlLabel: {
      id: getTrad("form.attribute.item.uniqueField"),
      defaultMessage: "Unique field"
    },
    description: {
      id: getTrad("form.attribute.item.uniqueField.description"),
      defaultMessage: "You won't be able to create an entry if there is an existing entry with identical content"
    }
  }
};
const advancedForm = {
  blocks() {
    return {
      sections: [
        {
          sectionTitle: {
            id: "global.settings",
            defaultMessage: "Settings"
          },
          items: [attributeOptions.required, attributeOptions.private]
        }
      ]
    };
  },
  boolean() {
    return {
      sections: [
        {
          sectionTitle: null,
          items: [
            {
              autoFocus: true,
              type: "select-default-boolean",
              intlLabel: {
                id: getTrad("form.attribute.settings.default"),
                defaultMessage: "Default value"
              },
              name: "default",
              options: [
                {
                  value: "true",
                  key: "true",
                  metadatas: { intlLabel: { id: "true", defaultMessage: "true" } }
                },
                {
                  value: "",
                  key: "null",
                  metadatas: { intlLabel: { id: "null", defaultMessage: "null" } }
                },
                {
                  value: "false",
                  key: "false",
                  metadatas: { intlLabel: { id: "false", defaultMessage: "false" } }
                }
              ]
            }
          ]
        },
        {
          sectionTitle: {
            id: "global.settings",
            defaultMessage: "Settings"
          },
          items: [attributeOptions.required, attributeOptions.private]
        }
      ]
    };
  },
  component({ repeatable }, step) {
    if (step === "1") {
      return { sections: componentForm.advanced() };
    }
    if (repeatable) {
      return {
        sections: [
          {
            sectionTitle: {
              id: "global.settings",
              defaultMessage: "Settings"
            },
            items: [
              attributeOptions.required,
              attributeOptions.private,
              attributeOptions.max,
              attributeOptions.min
            ]
          }
        ]
      };
    }
    return {
      sections: [
        {
          sectionTitle: {
            id: "global.settings",
            defaultMessage: "Settings"
          },
          items: [attributeOptions.required, attributeOptions.private]
        }
      ]
    };
  },
  date({ type }) {
    return {
      sections: [
        {
          sectionTitle: null,
          items: [
            {
              ...attributeOptions.default,
              type: type || "date",
              value: null,
              withDefaultValue: false,
              disabled: !type,
              autoFocus: false
            }
          ]
        },
        {
          sectionTitle: {
            id: "global.settings",
            defaultMessage: "Settings"
          },
          items: [attributeOptions.required, attributeOptions.unique, attributeOptions.private]
        }
      ]
    };
  },
  dynamiczone() {
    return {
      sections: [
        {
          sectionTitle: {
            id: "global.settings",
            defaultMessage: "Settings"
          },
          items: [attributeOptions.required, attributeOptions.max, attributeOptions.min]
        }
      ]
    };
  },
  email() {
    return {
      sections: [
        {
          sectionTitle: null,
          items: [
            {
              ...attributeOptions.default,
              type: "email"
            }
          ]
        },
        {
          sectionTitle: {
            id: "global.settings",
            defaultMessage: "Settings"
          },
          items: [
            attributeOptions.required,
            attributeOptions.unique,
            attributeOptions.maxLength,
            attributeOptions.minLength,
            attributeOptions.private
          ]
        }
      ]
    };
  },
  enumeration(data) {
    return {
      sections: [
        {
          sectionTitle: null,
          items: [
            {
              name: "default",
              type: "select",
              intlLabel: {
                id: getTrad("form.attribute.settings.default"),
                defaultMessage: "Default value"
              },
              validations: {},
              options: [
                {
                  key: "__null_reset_value__",
                  value: "",
                  metadatas: {
                    intlLabel: {
                      id: "components.InputSelect.option.placeholder",
                      defaultMessage: "Choose here"
                    }
                  }
                },
                ...(data.enum || []).filter((value, index2) => data.enum.indexOf(value) === index2 && value).map((value) => {
                  return {
                    key: value,
                    value,
                    metadatas: {
                      intlLabel: { id: `${value}.no-override`, defaultMessage: value }
                    }
                  };
                })
              ]
            },
            {
              intlLabel: {
                id: getTrad("form.attribute.item.enumeration.graphql"),
                defaultMessage: "Name override for GraphQL"
              },
              name: "enumName",
              type: "text",
              validations: {},
              description: {
                id: getTrad("form.attribute.item.enumeration.graphql.description"),
                defaultMessage: "Allows you to override the default generated name for GraphQL"
              }
            }
          ]
        },
        {
          sectionTitle: {
            id: "global.settings",
            defaultMessage: "Settings"
          },
          items: [attributeOptions.required, attributeOptions.private]
        }
      ]
    };
  },
  json() {
    return {
      sections: [
        {
          sectionTitle: {
            id: "global.settings",
            defaultMessage: "Settings"
          },
          items: [attributeOptions.required, attributeOptions.private]
        }
      ]
    };
  },
  media() {
    return {
      sections: [
        {
          sectionTitle: null,
          items: [
            {
              intlLabel: {
                id: getTrad("form.attribute.media.allowed-types"),
                defaultMessage: "Select allowed types of media"
              },
              name: "allowedTypes",
              type: "allowed-types-select",
              size: 7,
              value: "",
              validations: {}
            }
          ]
        },
        {
          sectionTitle: {
            id: "global.settings",
            defaultMessage: "Settings"
          },
          items: [attributeOptions.required, attributeOptions.private]
        }
      ]
    };
  },
  number(data) {
    const inputStep = data.type === "decimal" || data.type === "float" ? "any" : 1;
    return {
      sections: [
        {
          sectionTitle: null,
          items: [
            {
              autoFocus: true,
              name: "default",
              type: data.type === "biginteger" ? "text" : "number",
              step: inputStep,
              intlLabel: {
                id: getTrad("form.attribute.settings.default"),
                defaultMessage: "Default value"
              },
              validations: {}
            }
          ]
        },
        {
          sectionTitle: {
            id: "global.settings",
            defaultMessage: "Settings"
          },
          items: [
            attributeOptions.required,
            attributeOptions.unique,
            attributeOptions.max,
            attributeOptions.min,
            attributeOptions.private
          ]
        }
      ]
    };
  },
  password() {
    return {
      sections: [
        { sectionTitle: null, items: [attributeOptions.default] },
        {
          sectionTitle: {
            id: "global.settings",
            defaultMessage: "Settings"
          },
          items: [
            attributeOptions.required,
            attributeOptions.maxLength,
            attributeOptions.minLength,
            attributeOptions.private
          ]
        }
      ]
    };
  },
  relation() {
    return {
      sections: [
        {
          sectionTitle: {
            id: "global.settings",
            defaultMessage: "Settings"
          },
          items: [attributeOptions.private]
        }
      ]
    };
  },
  richtext() {
    return {
      sections: [
        { sectionTitle: null, items: [attributeOptions.default] },
        {
          sectionTitle: {
            id: "global.settings",
            defaultMessage: "Settings"
          },
          items: [
            attributeOptions.required,
            attributeOptions.maxLength,
            attributeOptions.minLength,
            attributeOptions.private
          ]
        }
      ]
    };
  },
  text() {
    return {
      sections: [
        { sectionTitle: null, items: [attributeOptions.default, attributeOptions.regex] },
        {
          sectionTitle: {
            id: "global.settings",
            defaultMessage: "Settings"
          },
          items: [
            attributeOptions.required,
            attributeOptions.unique,
            attributeOptions.maxLength,
            attributeOptions.minLength,
            attributeOptions.private
          ]
        }
      ]
    };
  },
  uid(data) {
    return {
      sections: [
        {
          sectionTitle: null,
          items: [
            { ...attributeOptions.default, disabled: Boolean(data.targetField), type: "text" }
          ]
        },
        {
          sectionTitle: {
            id: "global.settings",
            defaultMessage: "Settings"
          },
          items: [
            attributeOptions.required,
            attributeOptions.maxLength,
            attributeOptions.minLength,
            attributeOptions.private
          ]
        }
      ]
    };
  }
};
const componentField = {
  intlLabel: {
    id: "global.type",
    defaultMessage: "Type"
  },
  name: "createComponent",
  type: "boolean-radio-group",
  size: 12,
  radios: [
    {
      title: {
        id: getTrad("form.attribute.component.option.create"),
        defaultMessage: "Create a new component"
      },
      description: {
        id: getTrad("form.attribute.component.option.create.description"),
        defaultMessage: "A component is shared across types and components, it will be available and accessible everywhere."
      },
      value: true
    },
    {
      title: {
        id: getTrad("form.attribute.component.option.reuse-existing"),
        defaultMessage: "Use an existing component"
      },
      description: {
        id: getTrad("form.attribute.component.option.reuse-existing.description"),
        defaultMessage: "Reuse a component already created to keep your data consistent across content-types."
      },
      value: false
    }
  ]
};
const baseForm = {
  component(data, step) {
    if (step === "1") {
      const itemsToConcat = data.createComponent === true ? componentForm.base("componentToCreate.") : [];
      return {
        sections: [{ sectionTitle: null, items: [componentField] }, ...itemsToConcat]
      };
    }
    return {
      sections: [
        {
          sectionTitle: null,
          items: [
            nameField$1,
            {
              name: "component",
              type: "select-component",
              intlLabel: {
                id: getTrad("modalForm.attributes.select-component"),
                defaultMessage: "Select a component"
              },
              isMultiple: false
            }
          ]
        },
        {
          sectionTitle: null,
          items: [
            {
              intlLabel: {
                id: "global.type",
                defaultMessage: "Type"
              },
              name: "repeatable",
              type: "boolean-radio-group",
              size: 12,
              radios: [
                {
                  title: {
                    id: getTrad("form.attribute.component.option.repeatable"),
                    defaultMessage: "Repeatable component"
                  },
                  description: {
                    id: getTrad("form.attribute.component.option.repeatable.description"),
                    defaultMessage: "Best for multiple instances (array) of ingredients, meta tags, etc.."
                  },
                  value: true
                },
                {
                  title: {
                    id: getTrad("form.attribute.component.option.single"),
                    defaultMessage: "Single component"
                  },
                  description: {
                    id: getTrad("form.attribute.component.option.single.description"),
                    defaultMessage: "Best for grouping fields like full address, main information, etc..."
                  },
                  value: false
                }
              ]
            }
          ]
        }
      ]
    };
  },
  date() {
    return {
      sections: [
        {
          sectionTitle: null,
          items: [
            nameField$1,
            {
              intlLabel: {
                id: "global.type",
                defaultMessage: "Type"
              },
              name: "type",
              type: "select-date",
              options: [
                {
                  key: "__null_reset_value__",
                  value: "",
                  metadatas: {
                    intlLabel: {
                      id: "components.InputSelect.option.placeholder",
                      defaultMessage: "Choose here"
                    },
                    hidden: true
                  }
                },
                {
                  key: "date",
                  value: "date",
                  metadatas: {
                    intlLabel: {
                      id: getTrad("form.attribute.item.date.type.date"),
                      defaultMessage: "date (ex: 01/01/{currentYear})",
                      values: { currentYear: (/* @__PURE__ */ new Date()).getFullYear() }
                    }
                  }
                },
                {
                  key: "datetime",
                  value: "datetime",
                  metadatas: {
                    intlLabel: {
                      id: getTrad("form.attribute.item.date.type.datetime"),
                      defaultMessage: "datetime (ex: 01/01/{currentYear} 00:00 AM)",
                      values: { currentYear: (/* @__PURE__ */ new Date()).getFullYear() }
                    }
                  }
                },
                {
                  key: "time",
                  value: "time",
                  metadatas: {
                    intlLabel: {
                      id: getTrad("form.attribute.item.date.type.time"),
                      defaultMessage: "time (ex: 00:00 AM)"
                    }
                  }
                }
              ]
            }
          ]
        }
      ]
    };
  },
  enumeration() {
    return {
      sections: [
        { sectionTitle: null, items: [nameField$1] },
        {
          sectionTitle: null,
          items: [
            {
              name: "enum",
              type: "textarea-enum",
              size: 6,
              intlLabel: {
                id: getTrad("form.attribute.item.enumeration.rules"),
                defaultMessage: "Values (one line per value)"
              },
              placeholder: {
                id: getTrad("form.attribute.item.enumeration.placeholder"),
                defaultMessage: "Ex:\nmorning\nnoon\nevening"
              },
              validations: {
                required: true
              }
            }
          ]
        }
      ]
    };
  },
  media() {
    return {
      sections: [
        { sectionTitle: null, items: [nameField$1] },
        {
          sectionTitle: null,
          items: [
            {
              intlLabel: {
                id: "global.type",
                defaultMessage: "Type"
              },
              name: "multiple",
              size: 12,
              type: "boolean-radio-group",
              radios: [
                {
                  title: {
                    id: getTrad("form.attribute.media.option.multiple"),
                    defaultMessage: "Multiple media"
                  },
                  description: {
                    id: getTrad("form.attribute.media.option.multiple.description"),
                    defaultMessage: "Best for sliders, carousels or multiple files download"
                  },
                  value: true
                },
                {
                  title: {
                    id: getTrad("form.attribute.media.option.single"),
                    defaultMessage: "Single media"
                  },
                  description: {
                    id: getTrad("form.attribute.media.option.single.description"),
                    defaultMessage: "Best for avatar, profile picture or cover"
                  },
                  value: false
                }
              ]
            }
          ]
        }
      ]
    };
  },
  number() {
    return {
      sections: [
        {
          sectionTitle: null,
          items: [
            nameField$1,
            {
              intlLabel: {
                id: getTrad("form.attribute.item.number.type"),
                defaultMessage: "Number format"
              },
              name: "type",
              type: "select-number",
              options: [
                {
                  key: "__null_reset_value__",
                  value: "",
                  metadatas: {
                    intlLabel: {
                      id: "components.InputSelect.option.placeholder",
                      defaultMessage: "Choose here"
                    },
                    hidden: true
                  }
                },
                {
                  key: "integer",
                  value: "integer",
                  metadatas: {
                    intlLabel: {
                      id: getTrad("form.attribute.item.number.type.integer"),
                      defaultMessage: "integer (ex: 10)"
                    }
                  }
                },
                {
                  key: "biginteger",
                  value: "biginteger",
                  metadatas: {
                    intlLabel: {
                      id: getTrad("form.attribute.item.number.type.biginteger"),
                      defaultMessage: "biginteger (ex: 123456789)"
                    }
                  }
                },
                {
                  key: "decimal",
                  value: "decimal",
                  metadatas: {
                    intlLabel: {
                      id: getTrad("form.attribute.item.number.type.decimal"),
                      defaultMessage: "decimal (ex: 2.22)"
                    }
                  }
                },
                {
                  key: "float",
                  value: "float",
                  metadatas: {
                    intlLabel: {
                      id: getTrad("form.attribute.item.number.type.float"),
                      defaultMessage: "decimal (ex: 3.3333333)"
                    }
                  }
                }
              ]
            }
          ]
        }
      ]
    };
  },
  relation() {
    return {
      sections: [
        {
          sectionTitle: null,
          items: [
            {
              intlLabel: { id: "FIXME", defaultMessage: "FIXME" },
              name: "relation",
              size: 12,
              type: "relation"
            }
          ]
        }
      ]
    };
  },
  string() {
    return {
      sections: [
        { sectionTitle: null, items: [nameField$1] },
        {
          sectionTitle: null,
          items: [
            {
              intlLabel: {
                id: "global.type",
                defaultMessage: "Type"
              },
              name: "type",
              size: 12,
              type: "radio-group",
              radios: [
                {
                  title: {
                    id: getTrad("form.attribute.text.option.short-text"),
                    defaultMessage: "Sort text"
                  },
                  description: {
                    id: getTrad("form.attribute.text.option.short-text.description"),
                    defaultMessage: "Best for titles, names, links (URL). It also enables exact search on the field."
                  },
                  value: "string"
                },
                {
                  title: {
                    id: getTrad("form.attribute.text.option.long-text"),
                    defaultMessage: "Long text"
                  },
                  description: {
                    id: getTrad("form.attribute.text.option.long-text.description"),
                    defaultMessage: "Best for descriptions, biography. Exact search is disabled."
                  },
                  value: "text"
                }
              ]
            }
          ]
        }
      ]
    };
  },
  text() {
    return {
      sections: [
        { sectionTitle: null, items: [nameField$1] },
        {
          sectionTitle: null,
          items: [
            {
              intlLabel: {
                id: "global.type",
                defaultMessage: "Type"
              },
              name: "type",
              size: 12,
              type: "radio-group",
              radios: [
                {
                  title: {
                    id: getTrad("form.attribute.text.option.short-text"),
                    defaultMessage: "Sort text"
                  },
                  description: {
                    id: getTrad("form.attribute.text.option.short-text.description"),
                    defaultMessage: "Best for titles, names, links (URL). It also enables exact search on the field."
                  },
                  value: "string"
                },
                {
                  title: {
                    id: getTrad("form.attribute.text.option.long-text"),
                    defaultMessage: "Long text"
                  },
                  description: {
                    id: getTrad("form.attribute.text.option.long-text.description"),
                    defaultMessage: "Best for descriptions, biography. Exact search is disabled."
                  },
                  value: "text"
                }
              ]
            }
          ]
        }
      ]
    };
  },
  uid(_data, step, attributes) {
    const options2 = attributes.filter(({ type }) => ["string", "text"].includes(type)).map(({ name }) => ({
      key: name,
      value: name,
      metadatas: {
        intlLabel: { id: `${name}.no-override`, defaultMessage: name }
      }
    }));
    return {
      sections: [
        {
          sectionTitle: null,
          items: [
            {
              ...nameField$1,
              placeholder: {
                id: getTrad("modalForm.attribute.form.base.name.placeholder"),
                defaultMessage: "e.g. slug, seoUrl, canonicalUrl"
              }
            },
            {
              intlLabel: {
                id: getTrad("modalForm.attribute.target-field"),
                defaultMessage: "Attached field"
              },
              name: "targetField",
              type: "select",
              options: [
                {
                  key: "__null_reset_value__",
                  value: "",
                  metadatas: { intlLabel: { id: "global.none", defaultMessage: "None" } }
                },
                ...options2
              ]
            }
          ]
        }
      ]
    };
  }
};
const attributesForm = {
  advanced: advancedForm,
  base: baseForm
};
const toRegressedEnumValue = (value) => {
  if (!value) {
    return "";
  }
  return slugify(value, {
    decamelize: false,
    lowercase: false,
    separator: "_"
  });
};
const NAME_REGEX = /^[A-Za-z][_0-9A-Za-z]*$/;
const alreadyUsedAttributeNames = (usedNames) => {
  return {
    name: "attributeNameAlreadyUsed",
    message: dist/* translatedErrors */.iW.unique,
    test(value) {
      if (!value) {
        return false;
      }
      const snakeCaseKey = (0,fp.snakeCase)(value);
      return !usedNames.some((existingKey) => {
        if (existingKey === value)
          return false;
        return (0,fp.snakeCase)(existingKey) === snakeCaseKey;
      });
    }
  };
};
const isNameAllowed = (reservedNames) => {
  return {
    name: "forbiddenAttributeName",
    message: getTrad("error.attributeName.reserved-name"),
    test(value) {
      if (!value) {
        return false;
      }
      const snakeCaseKey = (0,fp.snakeCase)(value);
      return !reservedNames.some((existingKey) => {
        return (0,fp.snakeCase)(existingKey) === snakeCaseKey;
      });
    }
  };
};
const validators = {
  default: () => yup_es/* string */.Yj().nullable(),
  max: () => yup_es/* number */.ai().integer().nullable(),
  min: () => yup_es/* number */.ai().integer().when("max", (max, schema) => {
    if (max) {
      return schema.max(max, getTrad("error.validation.minSupMax"));
    }
    return schema;
  }).nullable(),
  maxLength: () => yup_es/* number */.ai().integer().positive(getTrad("error.validation.positive")).nullable(),
  minLength: () => yup_es/* number */.ai().integer().min(0).when("maxLength", (maxLength, schema) => {
    if (maxLength) {
      return schema.max(maxLength, getTrad("error.validation.minSupMax"));
    }
    return schema;
  }).nullable(),
  name(usedNames, reservedNames) {
    return yup_es/* string */.Yj().test(alreadyUsedAttributeNames(usedNames)).test(isNameAllowed(reservedNames)).matches(NAME_REGEX, dist/* translatedErrors */.iW.regex).required(dist/* translatedErrors */.iW.required);
  },
  required: () => yup_es/* boolean */.zM(),
  type: () => yup_es/* string */.Yj().required(dist/* translatedErrors */.iW.required),
  unique: () => yup_es/* boolean */.zM().nullable()
};
const createTextShape = (usedAttributeNames, reservedNames) => {
  const shape = {
    name: validators.name(usedAttributeNames, reservedNames),
    type: validators.type(),
    default: validators.default(),
    unique: validators.unique(),
    required: validators.required(),
    maxLength: validators.maxLength(),
    minLength: validators.minLength(),
    regex: yup_es/* string */.Yj().test({
      name: "isValidRegExpPattern",
      message: getTrad("error.validation.regex"),
      test(value) {
        return new RegExp(value || "") !== null;
      }
    }).nullable()
  };
  return shape;
};
const isMinSuperiorThanMax = () => ({
  name: "isMinSuperiorThanMax",
  message: getTrad("error.validation.minSupMax"),
  test(min) {
    if (!min) {
      return true;
    }
    const { max } = this.parent;
    if (!max) {
      return true;
    }
    if (Number.isNaN(toNumber(min))) {
      return true;
    }
    return toNumber(max) >= toNumber(min);
  }
});
const attributeTypes = {
  date(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      type: validators.type()
    };
    return yup_es/* object */.Ik(shape);
  },
  datetime(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      type: validators.type()
    };
    return yup_es/* object */.Ik(shape);
  },
  time(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      type: validators.type()
    };
    return yup_es/* object */.Ik(shape);
  },
  default(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      type: validators.type()
    };
    return yup_es/* object */.Ik(shape);
  },
  biginteger(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      type: validators.type(),
      default: yup_es/* string */.Yj().nullable().matches(/^-?\d*$/),
      unique: validators.unique(),
      required: validators.required(),
      max: yup_es/* string */.Yj().nullable().matches(/^-?\d*$/, dist/* translatedErrors */.iW.regex),
      min: yup_es/* string */.Yj().nullable().test(isMinSuperiorThanMax()).matches(/^-?\d*$/, dist/* translatedErrors */.iW.regex)
    };
    return yup_es/* object */.Ik(shape);
  },
  boolean(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      default: yup_es/* boolean */.zM().nullable(),
      required: validators.required(),
      unique: validators.unique()
    };
    return yup_es/* object */.Ik(shape);
  },
  component(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      type: validators.type(),
      required: validators.required(),
      max: validators.max(),
      min: validators.min(),
      component: yup_es/* string */.Yj().required(dist/* translatedErrors */.iW.required)
    };
    return yup_es/* object */.Ik(shape);
  },
  decimal(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      type: validators.type(),
      default: yup_es/* number */.ai(),
      required: validators.required(),
      max: yup_es/* number */.ai(),
      min: yup_es/* number */.ai().test(isMinSuperiorThanMax())
    };
    return yup_es/* object */.Ik(shape);
  },
  dynamiczone(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      type: validators.type(),
      required: validators.required(),
      max: validators.max(),
      min: validators.min()
    };
    return yup_es/* object */.Ik(shape);
  },
  email(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      type: validators.type(),
      default: yup_es/* string */.Yj().email().nullable(),
      unique: validators.unique(),
      required: validators.required(),
      maxLength: validators.maxLength(),
      minLength: validators.minLength()
    };
    return yup_es/* object */.Ik(shape);
  },
  enumeration(usedAttributeNames, reservedNames) {
    const GRAPHQL_ENUM_REGEX = /^[_A-Za-z][_0-9A-Za-z]*$/;
    const shape = {
      name: yup_es/* string */.Yj().test(alreadyUsedAttributeNames(usedAttributeNames)).test(isNameAllowed(reservedNames)).matches(GRAPHQL_ENUM_REGEX, dist/* translatedErrors */.iW.regex).required(dist/* translatedErrors */.iW.required),
      type: validators.type(),
      default: validators.default(),
      unique: validators.unique(),
      required: validators.required(),
      enum: yup_es/* array */.YO().of(yup_es/* string */.Yj()).min(1, dist/* translatedErrors */.iW.min).test({
        name: "areEnumValuesUnique",
        message: getTrad("error.validation.enum-duplicate"),
        test(values) {
          if (!values) {
            return false;
          }
          const duplicates = uniq(
            values.map(toRegressedEnumValue).filter((value, index2, values2) => values2.indexOf(value) !== index2)
          );
          return !duplicates.length;
        }
      }).test({
        name: "doesNotHaveEmptyValues",
        message: getTrad("error.validation.enum-empty-string"),
        test: (values) => {
          if (!values) {
            return false;
          }
          return !values.map(toRegressedEnumValue).some((val) => val === "");
        }
      }).test({
        name: "doesMatchRegex",
        message: getTrad("error.validation.enum-regex"),
        test: (values) => {
          if (!values) {
            return false;
          }
          return values.map(toRegressedEnumValue).every((value) => GRAPHQL_ENUM_REGEX.test(value));
        }
      }),
      enumName: yup_es/* string */.Yj().nullable()
    };
    return yup_es/* object */.Ik(shape);
  },
  float(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      type: validators.type(),
      required: validators.required(),
      default: yup_es/* number */.ai(),
      max: yup_es/* number */.ai(),
      min: yup_es/* number */.ai().test(isMinSuperiorThanMax())
    };
    return yup_es/* object */.Ik(shape);
  },
  integer(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      type: validators.type(),
      default: yup_es/* number */.ai().integer(),
      unique: validators.unique(),
      required: validators.required(),
      max: validators.max(),
      min: validators.min()
    };
    return yup_es/* object */.Ik(shape);
  },
  json(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      type: validators.type(),
      required: validators.required(),
      unique: validators.unique()
    };
    return yup_es/* object */.Ik(shape);
  },
  media(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      type: validators.type(),
      multiple: yup_es/* boolean */.zM(),
      required: validators.required(),
      allowedTypes: yup_es/* array */.YO().of(yup_es/* string */.Yj().oneOf(["images", "videos", "files", "audios"])).min(1).nullable()
    };
    return yup_es/* object */.Ik(shape);
  },
  password(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      type: validators.type(),
      default: validators.default(),
      unique: validators.unique(),
      required: validators.required(),
      maxLength: validators.maxLength(),
      minLength: validators.minLength()
    };
    return yup_es/* object */.Ik(shape);
  },
  relation(usedAttributeNames, reservedNames, alreadyTakenTargetAttributes, {
    initialData,
    modifiedData
  }) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      target: yup_es/* string */.Yj().required(dist/* translatedErrors */.iW.required),
      relation: yup_es/* string */.Yj().required(),
      type: yup_es/* string */.Yj().required(),
      targetAttribute: yup_es/* lazy */.RZ(() => {
        const relationType = (0,index_vZqceADF.g)(modifiedData.relation, modifiedData.targetAttribute);
        if (relationType === "oneWay" || relationType === "manyWay") {
          return yup_es/* string */.Yj().nullable();
        }
        const schema = yup_es/* string */.Yj().test(isNameAllowed(reservedNames));
        const initialForbiddenName = [
          ...alreadyTakenTargetAttributes.map(({ name }) => name),
          modifiedData.name
        ];
        const forbiddenTargetAttributeName = initialForbiddenName.filter(
          (val) => val !== initialData.targetAttribute
        );
        return schema.matches(NAME_REGEX, dist/* translatedErrors */.iW.regex).test({
          name: "forbiddenTargetAttributeName",
          message: getTrad("error.validation.relation.targetAttribute-taken"),
          test(value) {
            if (!value) {
              return false;
            }
            return !forbiddenTargetAttributeName.includes(value);
          }
        }).required(dist/* translatedErrors */.iW.required);
      })
    };
    return yup_es/* object */.Ik(shape);
  },
  richtext(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      type: validators.type(),
      default: validators.default(),
      unique: validators.unique(),
      required: validators.required(),
      maxLength: validators.maxLength(),
      minLength: validators.minLength()
    };
    return yup_es/* object */.Ik(shape);
  },
  blocks(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      type: validators.type(),
      default: validators.default(),
      unique: validators.unique(),
      required: validators.required(),
      maxLength: validators.maxLength(),
      minLength: validators.minLength()
    };
    return yup_es/* object */.Ik(shape);
  },
  string(usedAttributeNames, reservedNames) {
    const shape = createTextShape(usedAttributeNames, reservedNames);
    return yup_es/* object */.Ik(shape);
  },
  text(usedAttributeNames, reservedNames) {
    const shape = createTextShape(usedAttributeNames, reservedNames);
    return yup_es/* object */.Ik(shape);
  },
  uid(usedAttributeNames, reservedNames) {
    const shape = createTextShape(usedAttributeNames, reservedNames);
    return yup_es/* object */.Ik(shape);
  }
};
const CATEGORY_NAME_REGEX = /^[A-Za-z][-_0-9A-Za-z]*$/;
const createCategorySchema = (usedCategoryNames) => {
  const shape = {
    name: yup_es/* string */.Yj().matches(CATEGORY_NAME_REGEX, dist/* translatedErrors */.iW.regex).test({
      name: "nameNotAllowed",
      message: dist/* translatedErrors */.iW.unique,
      test(value) {
        if (!value) {
          return false;
        }
        return !usedCategoryNames.includes(value?.toLowerCase());
      }
    }).required(dist/* translatedErrors */.iW.required)
  };
  return yup_es/* object */.Ik(shape);
};
const categoryForm = {
  base: {
    sections: [
      {
        sectionTitle: null,
        items: [
          {
            autoFocus: true,
            name: "name",
            type: "text",
            intlLabel: {
              id: "global.name",
              defaultMessage: "Name"
            },
            // validations: {
            //   required: true,
            // },
            description: {
              id: getTrad("modalForm.editCategory.base.name.description"),
              defaultMessage: "No space is allowed for the name of the category"
            }
          }
        ]
      }
    ]
  }
};
const createComponentSchema = (usedComponentNames, reservedNames, category, takenCollectionNames, currentCollectionName) => {
  const shape = {
    displayName: yup_es/* string */.Yj().test({
      name: "nameAlreadyUsed",
      message: dist/* translatedErrors */.iW.unique,
      test(value) {
        if (!value) {
          return false;
        }
        const name = (0,index_vZqceADF.c)(value, category);
        const snakeCaseKey = (0,fp.snakeCase)(name);
        const snakeCaseCollectionName = (0,fp.snakeCase)(currentCollectionName);
        return usedComponentNames.every((reserved) => {
          return (0,fp.snakeCase)(reserved) !== snakeCaseKey;
        }) && takenCollectionNames.every(
          (collectionName) => (0,fp.snakeCase)(collectionName) !== snakeCaseCollectionName
        );
      }
    }).test({
      name: "nameNotAllowed",
      message: getTrad("error.contentTypeName.reserved-name"),
      test(value) {
        if (!value) {
          return false;
        }
        const snakeCaseKey = (0,fp.snakeCase)(value);
        return reservedNames.every((reserved) => {
          return (0,fp.snakeCase)(reserved) !== snakeCaseKey;
        });
      }
    }).required(dist/* translatedErrors */.iW.required),
    category: yup_es/* string */.Yj().matches(CATEGORY_NAME_REGEX, dist/* translatedErrors */.iW.regex).required(dist/* translatedErrors */.iW.required),
    icon: yup_es/* string */.Yj()
  };
  return yup_es/* object */.Ik(shape);
};
const nameField = {
  name: "displayName",
  type: "text",
  intlLabel: {
    id: getTrad("contentType.displayName.label"),
    defaultMessage: "Display name"
  }
};
const contentTypeForm = {
  advanced: {
    default() {
      return {
        sections: [
          {
            items: [
              {
                intlLabel: {
                  id: getTrad("contentType.draftAndPublish.label"),
                  defaultMessage: "Draft & publish"
                },
                description: {
                  id: getTrad("contentType.draftAndPublish.description"),
                  defaultMessage: "Allows writing a draft version of an entry, before it is published"
                },
                name: "draftAndPublish",
                type: "toggle-draft-publish",
                validations: {}
              }
            ]
          }
        ]
      };
    }
  },
  base: {
    create() {
      return {
        sections: [
          {
            sectionTitle: null,
            items: [
              nameField,
              {
                description: {
                  id: getTrad("contentType.apiId-singular.description"),
                  defaultMessage: "Used to generate the API routes and databases tables/collections"
                },
                intlLabel: {
                  id: getTrad("contentType.apiId-singular.label"),
                  defaultMessage: "API ID (Singular)"
                },
                name: "singularName",
                type: "text-singular"
              },
              {
                type: "pushRight",
                size: 6,
                intlLabel: { id: "", defaultMessage: "" },
                name: "pushRight"
              },
              {
                description: {
                  id: getTrad("contentType.apiId-plural.description"),
                  defaultMessage: "Pluralized API ID"
                },
                intlLabel: {
                  id: getTrad("contentType.apiId-plural.label"),
                  defaultMessage: "API ID (Plural)"
                },
                name: "pluralName",
                type: "text-plural"
              }
            ]
          }
        ]
      };
    },
    edit() {
      return {
        sections: [
          {
            sectionTitle: null,
            items: [
              nameField,
              {
                disabled: true,
                description: {
                  id: getTrad("contentType.apiId-singular.description"),
                  defaultMessage: "Used to generate the API routes and databases tables/collections"
                },
                intlLabel: {
                  id: getTrad("contentType.apiId-singular.label"),
                  defaultMessage: "API ID (Singular)"
                },
                name: "singularName",
                type: "text"
              },
              {
                type: "pushRight",
                size: 6,
                intlLabel: { id: "", defaultMessage: "" },
                name: "pushRight"
              },
              {
                disabled: true,
                description: {
                  id: getTrad("contentType.apiId-plural.description"),
                  defaultMessage: "Pluralized API ID"
                },
                intlLabel: {
                  id: getTrad("contentType.apiId-plural.label"),
                  defaultMessage: "API ID (Plural)"
                },
                name: "pluralName",
                type: "text"
              },
              {
                intlLabel: {
                  id: "global.type",
                  defaultMessage: "Type"
                },
                name: "kind",
                type: "content-type-radio-group",
                size: 12,
                radios: [
                  {
                    title: {
                      id: getTrad("form.button.collection-type.name"),
                      defaultMessage: "Collection Type"
                    },
                    description: {
                      id: getTrad("form.button.collection-type.description"),
                      defaultMessage: "Best for multiple instances like articles, products, comments, etc."
                    },
                    value: "collectionType"
                  },
                  {
                    title: {
                      id: getTrad("form.button.single-type.name"),
                      defaultMessage: "Single Type"
                    },
                    description: {
                      id: getTrad("form.button.single-type.description"),
                      defaultMessage: "Best for single instance like about us, homepage, etc."
                    },
                    value: "singleType"
                  }
                ]
              }
            ]
          }
        ]
      };
    }
  }
};
const createContentTypeSchema = ({
  usedContentTypeNames = [],
  reservedModels = [],
  singularNames = [],
  pluralNames = [],
  collectionNames = []
}) => {
  const shape = {
    displayName: yup_es/* string */.Yj().test({
      name: "nameAlreadyUsed",
      message: dist/* translatedErrors */.iW.unique,
      test(value) {
        if (!value) {
          return false;
        }
        const name = (0,index_vZqceADF.b)(value);
        const snakeCaseKey = (0,fp.snakeCase)(name);
        return !usedContentTypeNames.some((value2) => {
          return (0,fp.snakeCase)(value2) === snakeCaseKey;
        });
      }
    }).test({
      name: "nameNotAllowed",
      message: getTrad("error.contentTypeName.reserved-name"),
      test(value) {
        if (!value) {
          return false;
        }
        const snakeCaseKey = (0,fp.snakeCase)(value);
        return !reservedModels.some((key) => {
          return (0,fp.snakeCase)(key) === snakeCaseKey;
        });
      }
    }).required(dist/* translatedErrors */.iW.required),
    pluralName: yup_es/* string */.Yj().test({
      name: "pluralNameAlreadyUsed",
      message: dist/* translatedErrors */.iW.unique,
      test(value) {
        if (!value) {
          return false;
        }
        const snakeCaseKey = (0,fp.snakeCase)(value);
        return !pluralNames.some((key) => {
          return (0,fp.snakeCase)(key) === snakeCaseKey;
        });
      }
    }).test({
      name: "pluralNameAlreadyUsedAsSingular",
      message: getTrad("error.contentType.pluralName-equals-singularName"),
      test(value) {
        if (!value) {
          return false;
        }
        const snakeCaseKey = (0,fp.snakeCase)(value);
        return !singularNames.some((key) => {
          return (0,fp.snakeCase)(key) === snakeCaseKey;
        });
      }
    }).test({
      name: "pluralAndSingularAreUnique",
      message: getTrad("error.contentType.pluralName-used"),
      test(value, context) {
        if (!value) {
          return false;
        }
        return (0,fp.snakeCase)(context.parent.singularName) !== (0,fp.snakeCase)(value);
      }
    }).test({
      name: "pluralNameNotAllowed",
      message: getTrad("error.contentTypeName.reserved-name"),
      test(value) {
        if (!value) {
          return false;
        }
        const snakeCaseKey = (0,fp.snakeCase)(value);
        return !reservedModels.some((key) => {
          return (0,fp.snakeCase)(key) === snakeCaseKey;
        });
      }
    }).test({
      name: "pluralNameNotAlreadyUsedInCollectionName",
      message: getTrad("error.contentType.pluralName-equals-collectionName"),
      test(value) {
        if (!value) {
          return false;
        }
        const snakeCaseKey = (0,fp.snakeCase)(value);
        return !collectionNames.some((key) => {
          return (0,fp.snakeCase)(key) === snakeCaseKey;
        });
      }
    }).required(dist/* translatedErrors */.iW.required),
    singularName: yup_es/* string */.Yj().test({
      name: "singularNameAlreadyUsed",
      message: dist/* translatedErrors */.iW.unique,
      test(value) {
        if (!value) {
          return false;
        }
        const snakeCaseKey = (0,fp.snakeCase)(value);
        return !singularNames.some((key) => {
          return (0,fp.snakeCase)(key) === snakeCaseKey;
        });
      }
    }).test({
      name: "singularNameAlreadyUsedAsPlural",
      message: getTrad("error.contentType.singularName-equals-pluralName"),
      test(value) {
        if (!value) {
          return false;
        }
        const snakeCaseKey = (0,fp.snakeCase)(value);
        return !pluralNames.some((key) => {
          return (0,fp.snakeCase)(key) === snakeCaseKey;
        });
      }
    }).test({
      name: "pluralAndSingularAreUnique",
      message: getTrad("error.contentType.singularName-used"),
      test(value, context) {
        if (!value) {
          return false;
        }
        return (0,fp.snakeCase)(context.parent.pluralName) !== (0,fp.snakeCase)(value);
      }
    }).test({
      name: "singularNameNotAllowed",
      message: getTrad("error.contentTypeName.reserved-name"),
      test(value) {
        if (!value) {
          return false;
        }
        const snakeCaseKey = (0,fp.snakeCase)(value);
        return !reservedModels.some((key) => {
          return (0,fp.snakeCase)(key) === snakeCaseKey;
        });
      }
    }).required(dist/* translatedErrors */.iW.required),
    draftAndPublish: yup_es/* boolean */.zM(),
    kind: yup_es/* string */.Yj().oneOf(["singleType", "collectionType"]),
    reviewWorkflows: yup_es/* boolean */.zM()
  };
  return yup_es/* object */.Ik(shape);
};
const dynamiczoneForm = {
  advanced: {
    default() {
      return {
        sections: componentForm.advanced()
      };
    }
  },
  base: {
    createComponent() {
      return {
        sections: [
          { sectionTitle: null, items: [componentField] },
          ...componentForm.base("componentToCreate.")
        ]
      };
    },
    default() {
      return {
        sections: [
          { sectionTitle: null, items: [componentField] },
          {
            sectionTitle: null,
            items: [
              {
                type: "pushRight",
                size: 6,
                intlLabel: { id: "", defaultMessage: "" },
                name: "pushRight"
              },
              {
                name: "components",
                type: "select-components",
                intlLabel: {
                  id: getTrad("modalForm.attributes.select-components"),
                  defaultMessage: "Select the components"
                },
                isMultiple: true
              }
            ]
          }
        ]
      };
    }
  }
};
const addItemsToFormSection = (formTypeOptions, sections) => {
  formTypeOptions.forEach((item) => {
    if (!("sectionTitle" in item)) {
      sections[0].items?.push(item);
      return;
    }
    sections.push(item);
  });
};
const createComponentCollectionName = (name, category) => {
  return `components_${(0,fp.snakeCase)(category)}_${pluralize((0,fp.snakeCase)(name))}`;
};
const getUsedAttributeNames = (attributes, schemaData) => {
  return attributes.filter(({ name }) => {
    return name !== schemaData.initialData.name;
  }).map(({ name }) => name);
};
const index_b3fbviVW_forms = {
  customField: {
    schema({
      schemaAttributes,
      attributeType,
      customFieldValidator,
      reservedNames,
      schemaData,
      ctbFormsAPI
    }) {
      const usedAttributeNames = getUsedAttributeNames(schemaAttributes, schemaData);
      attributeTypes[attributeType];
      let attributeShape;
      if (attributeType === "relation") {
        attributeShape = attributeTypes[attributeType](
          usedAttributeNames,
          reservedNames.attributes,
          [],
          { initialData: {}, modifiedData: {} }
        );
      } else {
        attributeShape = attributeTypes[attributeType](
          usedAttributeNames,
          reservedNames.attributes
        );
      }
      return ctbFormsAPI.makeCustomFieldValidator(
        attributeShape,
        customFieldValidator,
        usedAttributeNames,
        reservedNames.attributes,
        schemaData
      );
    },
    form: {
      base({ customField }) {
        const sections = [{ sectionTitle: null, items: [nameField$1] }];
        if (customField.options?.base) {
          addItemsToFormSection(customField.options.base, sections);
        }
        return { sections };
      },
      advanced({ customField, data, step, extensions, ...rest }) {
        const sections = [{ sectionTitle: null, items: [] }];
        const injectedInputs = extensions.getAdvancedForm(["attribute", customField.type], {
          data,
          type: customField.type,
          step,
          ...rest
        });
        if (customField.options?.advanced) {
          addItemsToFormSection(customField.options.advanced, sections);
        }
        if (injectedInputs) {
          const extendedSettings = {
            sectionTitle: {
              id: getTrad("modalForm.custom-fields.advanced.settings.extended"),
              defaultMessage: "Extended settings"
            },
            items: injectedInputs
          };
          sections.push(extendedSettings);
        }
        return { sections };
      }
    }
  },
  attribute: {
    schema(currentSchema, attributeType, reservedNames, alreadyTakenTargetContentTypeAttributes, options2, extensions) {
      const attributes = currentSchema?.schema?.attributes ?? [];
      const usedAttributeNames = getUsedAttributeNames(attributes, options2);
      try {
        const attributeShape = attributeTypes[attributeType](
          usedAttributeNames,
          reservedNames.attributes,
          alreadyTakenTargetContentTypeAttributes,
          options2
        );
        return extensions.makeValidator(
          ["attribute", attributeType],
          attributeShape,
          usedAttributeNames,
          reservedNames.attributes,
          alreadyTakenTargetContentTypeAttributes,
          options2
        );
      } catch (err) {
        console.error("Error yup build schema", err);
        return attributeTypes.default(usedAttributeNames, reservedNames.attributes);
      }
    },
    form: {
      advanced({ data, type, step, extensions, ...rest }) {
        try {
          const baseForm2 = attributesForm.advanced[type](data, step).sections;
          const itemsToAdd = extensions.getAdvancedForm(["attribute", type], {
            data,
            type,
            step,
            ...rest
          });
          const sections = baseForm2.reduce((acc, current) => {
            if (current.sectionTitle === null) {
              acc.push(current);
            } else {
              acc.push({ ...current, items: [...current.items, ...itemsToAdd] });
            }
            return acc;
          }, []);
          return { sections };
        } catch (err) {
          console.error(err);
          return { sections: [] };
        }
      },
      base({ data, type, step, attributes }) {
        try {
          return attributesForm.base[type](data, step, attributes);
        } catch (err) {
          return commonBaseForm;
        }
      }
    }
  },
  contentType: {
    schema(alreadyTakenNames, isEditing, ctUid, reservedNames, extensions, contentTypes) {
      const singularNames = Object.values(contentTypes).map((contentType) => {
        return contentType.schema.singularName;
      });
      const pluralNames = Object.values(contentTypes).map((contentType) => {
        return contentType?.schema?.pluralName ?? "";
      });
      const takenNames = isEditing ? alreadyTakenNames.filter((uid) => uid !== ctUid) : alreadyTakenNames;
      const takenSingularNames = isEditing ? singularNames.filter((singName) => {
        const { schema } = contentTypes[ctUid];
        return schema.singularName !== singName;
      }) : singularNames;
      const takenPluralNames = isEditing ? pluralNames.filter((pluralName) => {
        const { schema } = contentTypes[ctUid];
        return schema.pluralName !== pluralName;
      }) : pluralNames;
      const collectionNames = Object.values(contentTypes).map((contentType) => {
        return contentType?.schema?.collectionName ?? "";
      });
      const takenCollectionNames = isEditing ? collectionNames.filter((collectionName) => {
        const { schema } = contentTypes[ctUid];
        const currentCollectionName = schema.collectionName;
        return collectionName !== currentCollectionName;
      }) : collectionNames;
      const contentTypeShape = createContentTypeSchema({
        usedContentTypeNames: takenNames,
        reservedModels: reservedNames.models,
        singularNames: takenSingularNames,
        pluralNames: takenPluralNames,
        collectionNames: takenCollectionNames
      });
      return extensions.makeValidator(
        ["contentType"],
        contentTypeShape,
        takenNames,
        reservedNames.models,
        takenSingularNames,
        takenPluralNames
      );
    },
    form: {
      base({ actionType }) {
        if (actionType === "create") {
          return contentTypeForm.base.create();
        }
        return contentTypeForm.base.edit();
      },
      advanced({ extensions }) {
        const baseForm2 = contentTypeForm.advanced.default().sections.map((section) => section.items).flat();
        const itemsToAdd = extensions.getAdvancedForm(["contentType"]);
        return {
          sections: [
            {
              items: [...baseForm2, ...itemsToAdd]
            }
          ]
        };
      }
    }
  },
  component: {
    schema(alreadyTakenAttributes, componentCategory, reservedNames, isEditing = false, components, componentDisplayName, compoUid = null) {
      const takenNames = isEditing ? alreadyTakenAttributes.filter((uid) => uid !== compoUid) : alreadyTakenAttributes;
      const collectionNames = Object.values(components).map((component) => {
        return component?.schema?.collectionName;
      });
      const currentCollectionName = createComponentCollectionName(
        componentDisplayName,
        componentCategory
      );
      const takenCollectionNames = isEditing ? collectionNames.filter((collectionName) => collectionName !== currentCollectionName) : collectionNames;
      return createComponentSchema(
        takenNames,
        reservedNames.models,
        componentCategory,
        takenCollectionNames,
        currentCollectionName
      );
    },
    form: {
      advanced() {
        return {
          sections: componentForm.advanced()
        };
      },
      base() {
        return {
          sections: componentForm.base()
        };
      }
    }
  },
  addComponentToDynamicZone: {
    form: {
      advanced() {
        return dynamiczoneForm.advanced.default();
      },
      base({ data }) {
        const isCreatingComponent = data?.createComponent ?? false;
        if (isCreatingComponent) {
          return dynamiczoneForm.base.createComponent();
        }
        return dynamiczoneForm.base.default();
      }
    }
  },
  editCategory: {
    schema(allCategories, initialData) {
      const allowedCategories = allCategories.filter((cat) => cat !== initialData.name).map((cat) => cat.toLowerCase());
      return createCategorySchema(allowedCategories);
    },
    form: {
      advanced: () => ({ sections: [] }),
      base() {
        return categoryForm.base;
      }
    }
  }
};
const formModalDomain = () => (state) => state[`${index_vZqceADF.p}_formModal`] || index_vZqceADF.i;
const makeSelectFormModal = () => (0,reselect_es/* createSelector */.Mz)(formModalDomain(), (substate) => {
  return substate;
});
const canEditContentType = (data, modifiedData) => {
  const kind = get(data, ["contentType", "schema", "kind"], "");
  if (kind === "singleType" || kind === modifiedData.kind) {
    return true;
  }
  const contentTypeAttributes = get(
    data,
    ["contentType", "schema", "attributes"],
    []
  );
  const relationAttributes = contentTypeAttributes.filter(({ relation, type, targetAttribute }) => {
    const relationType = (0,index_vZqceADF.g)(relation, targetAttribute);
    return type === "relation" && !["oneWay", "manyWay"].includes(relationType || "");
  });
  return relationAttributes.length === 0;
};
const getAttributesToDisplay = (dataTarget = "", targetUid, nestedComponents) => {
  const defaultAttributes = [
    "text",
    "boolean",
    "blocks",
    "json",
    "number",
    "email",
    "date",
    "password",
    "media",
    "enumeration",
    "relation",
    "richtext"
  ];
  const isPickingAttributeForAContentType = dataTarget === "contentType";
  const isNestedInAnotherComponent = nestedComponents.includes(targetUid);
  const canAddComponentInAnotherComponent = !isPickingAttributeForAContentType && !isNestedInAnotherComponent;
  if (isPickingAttributeForAContentType) {
    return [
      // Insert UID before the last item (richtext)
      [...defaultAttributes.slice(0, -1), "uid", ...defaultAttributes.slice(-1)],
      ["component", "dynamiczone"]
    ];
  }
  if (canAddComponentInAnotherComponent) {
    return [defaultAttributes, ["component"]];
  }
  return [defaultAttributes];
};
const getFormInputNames = (form) => form.reduce((acc, current) => {
  const names = current.items.reduce((acc2, current2) => {
    if (current2.name) {
      acc2.push(current2.name);
    }
    return acc2;
  }, []);
  return [...acc, ...names];
}, []);
const FormModal = () => {
  const {
    onCloseModal,
    onNavigateToChooseAttributeModal,
    onNavigateToAddCompoToDZModal,
    onNavigateToCreateComponentStep2,
    actionType,
    attributeName,
    attributeType,
    customFieldUid,
    categoryName,
    dynamicZoneTarget,
    forTarget,
    modalType,
    isOpen,
    kind,
    step,
    targetUid,
    showBackLink
  } = useFormModalNavigation();
  const customField = (0,dist/* useCustomFields */.AC)().get(customFieldUid);
  const tabGroupRef = (0,react.useRef)();
  const formModalSelector = (0,react.useMemo)(makeSelectFormModal, []);
  const dispatch = (0,es/* useDispatch */.wA)();
  const toggleNotification = (0,dist/* useNotification */.hN)();
  const reducerState = (0,es/* useSelector */.d4)((state) => formModalSelector(state), es/* shallowEqual */.bN);
  const { push } = (0,react_router/* useHistory */.W6)();
  const { trackUsage } = (0,dist/* useTracking */.z1)();
  const { formatMessage } = (0,useIntl/* default */.A)();
  const { getPlugin } = (0,dist/* useStrapiApp */.vD)();
  const ctbPlugin = getPlugin(index_vZqceADF.p);
  const ctbFormsAPI = ctbPlugin?.apis.forms;
  const inputsFromPlugins = ctbFormsAPI.components.inputs;
  const {
    addAttribute,
    addCustomFieldAttribute,
    addCreatedComponentToDynamicZone,
    allComponentsCategories,
    changeDynamicZoneComponents,
    contentTypes,
    components,
    createSchema,
    deleteCategory,
    deleteData,
    editCategory,
    editCustomFieldAttribute,
    submitData,
    modifiedData: allDataSchema,
    nestedComponents,
    setModifiedData,
    sortedContentTypesList,
    updateSchema,
    reservedNames
  } = useDataManager();
  const {
    componentToCreate,
    formErrors,
    initialData,
    isCreatingComponentWhileAddingAField,
    modifiedData
  } = reducerState;
  const pathToSchema = forTarget === "contentType" || forTarget === "component" ? [forTarget] : [forTarget, targetUid];
  (0,react.useEffect)(() => {
    if (isOpen) {
      const collectionTypesForRelation = sortedContentTypesList.filter(
        isAllowedContentTypesForRelations
      );
      if (modalType === "editCategory") {
        setModifiedData();
      }
      if (actionType === "edit" && modalType === "attribute" && forTarget === "contentType") {
        trackUsage("willEditFieldOfContentType");
      }
      const pathToAttributes = [...pathToSchema, "schema", "attributes"];
      const foundDynamicZoneTarget = findAttribute(get(allDataSchema, pathToAttributes, []), dynamicZoneTarget) || null;
      if (modalType === "editCategory" && actionType === "edit") {
        dispatch({
          type: index_vZqceADF.S,
          modalType,
          actionType,
          data: {
            name: categoryName
          }
        });
      }
      if (modalType === "contentType" && actionType === "create") {
        dispatch({
          type: index_vZqceADF.S,
          modalType,
          actionType,
          data: {
            draftAndPublish: true
          },
          pluginOptions: {}
        });
      }
      if (modalType === "contentType" && actionType === "edit") {
        const {
          displayName,
          draftAndPublish,
          kind: kind2,
          pluginOptions,
          pluralName,
          reviewWorkflows,
          singularName
        } = get(allDataSchema, [...pathToSchema, "schema"], {
          displayName: null,
          pluginOptions: {},
          singularName: null,
          pluralName: null
        });
        dispatch({
          type: index_vZqceADF.S,
          actionType,
          modalType,
          data: {
            displayName,
            draftAndPublish,
            kind: kind2,
            pluginOptions,
            pluralName,
            // because review-workflows is an EE feature the attribute does
            // not always exist, but the component prop-types expect a boolean,
            // so we have to ensure undefined is casted to false
            reviewWorkflows: reviewWorkflows ?? false,
            singularName
          }
        });
      }
      if (modalType === "component" && actionType === "edit") {
        const data = get(allDataSchema, pathToSchema, {});
        dispatch({
          type: index_vZqceADF.S,
          actionType,
          modalType,
          data: {
            displayName: data.schema.displayName,
            category: data.category,
            icon: data.schema.icon
          }
        });
      }
      if (modalType === "addComponentToDynamicZone" && actionType === "edit") {
        const attributeToEdit = {
          ...foundDynamicZoneTarget,
          // We filter the available components
          // Because this modal is only used for adding components
          components: [],
          name: dynamicZoneTarget,
          createComponent: false,
          componentToCreate: { type: "component" }
        };
        dispatch({
          type: index_vZqceADF.d,
          attributeToEdit
        });
      }
      if (attributeType) {
        const attributeToEditNotFormatted = findAttribute(
          get(allDataSchema, pathToAttributes, []),
          attributeName
        );
        const attributeToEdit = {
          ...attributeToEditNotFormatted,
          name: attributeName
        };
        if (attributeType === "component" && actionType === "edit") {
          if (!attributeToEdit.repeatable) {
            set(attributeToEdit, "repeatable", false);
          }
        }
        if (modalType === "customField") {
          dispatch({
            type: index_vZqceADF.e,
            customField,
            isEditing: actionType === "edit",
            modifiedDataToSetForEditing: attributeToEdit,
            // NOTE: forTarget is used in the i18n middleware
            forTarget
          });
        } else {
          dispatch({
            type: index_vZqceADF.f,
            attributeType,
            nameToSetForRelation: get(collectionTypesForRelation, ["0", "title"], "error"),
            targetUid: get(collectionTypesForRelation, ["0", "uid"], "error"),
            isEditing: actionType === "edit",
            modifiedDataToSetForEditing: attributeToEdit,
            step,
            forTarget
          });
        }
      }
    } else {
      dispatch({ type: index_vZqceADF.R });
    }
  }, [
    actionType,
    attributeName,
    attributeType,
    categoryName,
    dynamicZoneTarget,
    forTarget,
    isOpen,
    modalType
  ]);
  const isCreatingContentType = modalType === "contentType";
  const isCreatingComponent = modalType === "component";
  const isCreatingAttribute = modalType === "attribute";
  const isCreatingCustomFieldAttribute = modalType === "customField";
  const isComponentAttribute = attributeType === "component" && isCreatingAttribute;
  const isCreating = actionType === "create";
  const isCreatingComponentFromAView = get(modifiedData, "createComponent", false) || isCreatingComponentWhileAddingAField;
  const isInFirstComponentStep = step === "1";
  const isEditingCategory = modalType === "editCategory";
  const isPickingAttribute = modalType === "chooseAttribute";
  const uid = (0,index_vZqceADF.b)(modifiedData.displayName || "");
  const attributes = get(allDataSchema, [...pathToSchema, "schema", "attributes"], null);
  const checkFormValidity = async () => {
    let schema;
    const dataToValidate = isCreatingComponentFromAView && step === "1" ? get(modifiedData, "componentToCreate", {}) : modifiedData;
    if (isCreatingContentType) {
      schema = index_b3fbviVW_forms.contentType.schema(
        Object.keys(contentTypes),
        actionType === "edit",
        // currentUID
        get(allDataSchema, [...pathToSchema, "uid"], null),
        reservedNames,
        ctbFormsAPI,
        contentTypes
      );
    } else if (isCreatingComponent) {
      schema = index_b3fbviVW_forms.component.schema(
        Object.keys(components),
        modifiedData.category || "",
        reservedNames,
        actionType === "edit",
        components,
        modifiedData.displayName || "",
        get(allDataSchema, [...pathToSchema, "uid"], null)
        // ctbFormsAPI
      );
    } else if (isCreatingCustomFieldAttribute) {
      schema = index_b3fbviVW_forms.customField.schema({
        schemaAttributes: get(allDataSchema, [...pathToSchema, "schema", "attributes"], []),
        attributeType: customField.type,
        reservedNames,
        schemaData: { modifiedData, initialData },
        ctbFormsAPI,
        customFieldValidator: customField.options?.validator
      });
    } else if (isComponentAttribute && isCreatingComponentFromAView && isInFirstComponentStep) {
      schema = index_b3fbviVW_forms.component.schema(
        Object.keys(components),
        get(modifiedData, "componentToCreate.category", ""),
        reservedNames,
        actionType === "edit",
        components,
        modifiedData.componentToCreate.displayName || ""
      );
    } else if (isCreatingAttribute && !isInFirstComponentStep) {
      const type = attributeType === "relation" ? "relation" : modifiedData.type;
      let alreadyTakenTargetContentTypeAttributes = [];
      if (type === "relation") {
        const targetContentTypeUID = get(modifiedData, ["target"], null);
        const targetContentTypeAttributes = get(
          contentTypes,
          [targetContentTypeUID, "schema", "attributes"],
          []
        );
        alreadyTakenTargetContentTypeAttributes = targetContentTypeAttributes.filter(
          ({ name: attrName }) => {
            if (actionType !== "edit") {
              return true;
            }
            return attrName !== initialData.targetAttribute;
          }
        );
      }
      schema = index_b3fbviVW_forms.attribute.schema(
        get(allDataSchema, pathToSchema, {}),
        type,
        reservedNames,
        alreadyTakenTargetContentTypeAttributes,
        { modifiedData, initialData },
        ctbFormsAPI
      );
    } else if (isEditingCategory) {
      schema = index_b3fbviVW_forms.editCategory.schema(allComponentsCategories, initialData);
    } else {
      if (isInFirstComponentStep && isCreatingComponentFromAView) {
        schema = index_b3fbviVW_forms.component.schema(
          Object.keys(components),
          get(modifiedData, "componentToCreate.category", ""),
          reservedNames,
          actionType === "edit",
          components,
          modifiedData.componentToCreate.displayName || ""
        );
      } else {
        return;
      }
    }
    await schema.validate(dataToValidate, { abortEarly: false });
  };
  const handleChange = (0,react.useCallback)(
    ({
      target: { name, value, type, ...rest }
    }) => {
      const namesThatCanResetToNullValue = [
        "enumName",
        "max",
        "min",
        "maxLength",
        "minLength",
        "regex",
        "default"
      ];
      let val;
      if (namesThatCanResetToNullValue.includes(name) && value === "") {
        val = null;
      } else {
        val = value;
      }
      const clonedErrors = Object.assign({}, formErrors);
      if (name === "max") {
        delete clonedErrors.min;
      }
      if (name === "maxLength") {
        delete clonedErrors.minLength;
      }
      delete clonedErrors[name];
      dispatch({
        type: index_vZqceADF.h,
        errors: clonedErrors
      });
      dispatch({
        type: index_vZqceADF.j,
        keys: name.split("."),
        value: val,
        ...rest
      });
    },
    [dispatch, formErrors]
  );
  const handleSubmit = async (e, shouldContinue = isCreating) => {
    e.preventDefault();
    try {
      await checkFormValidity();
      sendButtonAddMoreFieldEvent(shouldContinue);
      const ctTargetUid = forTarget === "components" ? targetUid : uid;
      if (isCreatingContentType) {
        if (isCreating) {
          createSchema({ ...modifiedData, kind }, modalType, uid);
          push({ pathname: `/plugins/${index_vZqceADF.p}/content-types/${uid}` });
          onNavigateToChooseAttributeModal({
            forTarget,
            targetUid: ctTargetUid
          });
        } else {
          if (canEditContentType(allDataSchema, modifiedData)) {
            onCloseModal();
            submitData(modifiedData);
          } else {
            toggleNotification({
              type: "warning",
              message: { id: "notification.contentType.relations.conflict" }
            });
          }
          return;
        }
      } else if (modalType === "component") {
        if (isCreating) {
          const componentUid = (0,index_vZqceADF.c)(modifiedData.displayName, modifiedData.category);
          const { category, ...rest } = modifiedData;
          createSchema(rest, "component", componentUid, category);
          push({
            pathname: `/plugins/${index_vZqceADF.p}/component-categories/${category}/${componentUid}`
          });
          onNavigateToChooseAttributeModal({
            forTarget,
            targetUid: componentUid
          });
        } else {
          updateSchema(modifiedData, modalType, targetUid);
          onCloseModal();
          return;
        }
      } else if (isEditingCategory) {
        if (toLower(initialData.name) === toLower(modifiedData.name)) {
          onCloseModal();
          return;
        }
        editCategory(initialData.name, modifiedData);
        return;
      } else if (isCreatingCustomFieldAttribute) {
        const customFieldAttributeUpdate = {
          attributeToSet: { ...modifiedData, customField: customFieldUid },
          forTarget,
          targetUid,
          initialAttribute: initialData
        };
        if (actionType === "edit") {
          editCustomFieldAttribute(customFieldAttributeUpdate);
        } else {
          addCustomFieldAttribute(customFieldAttributeUpdate);
        }
        if (shouldContinue) {
          onNavigateToChooseAttributeModal({
            forTarget,
            targetUid: ctTargetUid
          });
        } else {
          onCloseModal();
        }
        return;
      } else if (isCreatingAttribute && !isCreatingComponentFromAView) {
        const isDynamicZoneAttribute = attributeType === "dynamiczone";
        if (isDynamicZoneAttribute) {
          addAttribute(modifiedData, forTarget, targetUid, actionType === "edit", initialData);
          if (isCreating) {
            dispatch({
              type: index_vZqceADF.k
            });
            if (tabGroupRef.current !== void 0) {
              tabGroupRef.current._handlers.setSelectedTabIndex(0);
            }
            onNavigateToAddCompoToDZModal({ dynamicZoneTarget: modifiedData.name });
          } else {
            onCloseModal();
          }
          return;
        }
        if (!isComponentAttribute) {
          addAttribute(modifiedData, forTarget, targetUid, actionType === "edit", initialData);
          if (shouldContinue) {
            onNavigateToChooseAttributeModal({
              forTarget,
              targetUid: ctTargetUid
            });
          } else {
            onCloseModal();
          }
          return;
        }
        if (isInFirstComponentStep) {
          onNavigateToCreateComponentStep2();
          dispatch({
            type: index_vZqceADF.l,
            forTarget
          });
          return;
        }
        addAttribute(
          modifiedData,
          forTarget,
          targetUid,
          // This change the dispatched type
          // either 'EDIT_ATTRIBUTE' or 'ADD_ATTRIBUTE' in the DataManagerProvider
          actionType === "edit",
          // This is for the edit part
          initialData,
          // Passing true will add the component to the components object
          // This way we can add fields to the added component (if it wasn't there already)
          true
        );
        if (shouldContinue) {
          onNavigateToChooseAttributeModal({
            forTarget,
            targetUid
          });
        } else {
          onCloseModal();
        }
      } else if (isCreatingAttribute && isCreatingComponentFromAView) {
        if (isInFirstComponentStep) {
          trackUsage("willCreateComponentFromAttributesModal");
          dispatch({
            type: index_vZqceADF.m,
            forTarget
          });
          onNavigateToCreateComponentStep2();
          return;
        }
        const { category, type, ...rest } = componentToCreate;
        const componentUid = (0,index_vZqceADF.c)(componentToCreate.displayName, category);
        createSchema(
          // Component data
          rest,
          // Type will always be component
          // It will dispatch the CREATE_COMPONENT_SCHEMA action
          // So the component will be added in the main components object
          // This might not be needed if we don't allow navigation between entries while editing
          type,
          componentUid,
          category,
          // This will add the created component in the datamanager modifiedData components key
          // Like explained above we will be able to modify the created component structure
          isCreatingComponentFromAView
        );
        addAttribute(modifiedData, forTarget, targetUid, false);
        dispatch({ type: index_vZqceADF.R });
        if (shouldContinue) {
          onNavigateToChooseAttributeModal({ forTarget: "components", targetUid: componentUid });
        } else {
          onCloseModal();
        }
        return;
      } else {
        if (isInFirstComponentStep) {
          if (isCreatingComponentFromAView) {
            const { category, type, ...rest } = modifiedData.componentToCreate;
            const componentUid = (0,index_vZqceADF.c)(
              modifiedData.componentToCreate.displayName,
              category
            );
            createSchema(
              // Component data
              rest,
              // Type will always be component
              // It will dispatch the CREATE_COMPONENT_SCHEMA action
              // So the component will be added in the main components object
              // This might not be needed if we don't allow navigation between entries while editing
              type,
              componentUid,
              category,
              // This will add the created component in the datamanager modifiedData components key
              // Like explained above we will be able to modify the created component structure
              isCreatingComponentFromAView
            );
            addCreatedComponentToDynamicZone(dynamicZoneTarget, [componentUid]);
            onNavigateToChooseAttributeModal({ forTarget: "components", targetUid: componentUid });
          } else {
            changeDynamicZoneComponents(dynamicZoneTarget, modifiedData.components);
            onCloseModal();
          }
        } else {
          console.error("This case is not handled");
        }
        return;
      }
      dispatch({
        type: index_vZqceADF.R
      });
    } catch (err) {
      const errors = (0,dist/* getYupInnerErrors */.ed)(err);
      dispatch({
        type: index_vZqceADF.h,
        errors
      });
    }
  };
  const handleConfirmClose = () => {
    const confirm = window.confirm(
      formatMessage({
        id: "window.confirm.close-modal.file",
        defaultMessage: "Are you sure? Your changes will be lost."
      })
    );
    if (confirm) {
      onCloseModal();
      dispatch({
        type: index_vZqceADF.R
      });
    }
  };
  const handleClosed = () => {
    if (!isEqual(modifiedData, initialData)) {
      handleConfirmClose();
    } else {
      onCloseModal();
      dispatch({
        type: index_vZqceADF.R
      });
    }
  };
  const sendAdvancedTabEvent = (tab) => {
    if (tab !== "advanced") {
      return;
    }
    if (isCreatingContentType) {
      trackUsage("didSelectContentTypeSettings");
      return;
    }
    if (forTarget === "contentType") {
      trackUsage("didSelectContentTypeFieldSettings");
    }
  };
  const sendButtonAddMoreFieldEvent = (shouldContinue) => {
    if (modalType === "attribute" && forTarget === "contentType" && attributeType !== "dynamiczone" && shouldContinue) {
      trackUsage("willAddMoreFieldToContentType");
    }
  };
  const shouldDisableAdvancedTab = () => {
    if (modalType === "editCategory") {
      return true;
    }
    if (modalType === "component") {
      return true;
    }
    if (has(modifiedData, "createComponent")) {
      return true;
    }
    return false;
  };
  const displayedAttributes = getAttributesToDisplay(
    forTarget,
    targetUid,
    // We need the nested components so we know when to remove the component option
    nestedComponents
  );
  if (!isOpen) {
    return null;
  }
  if (!modalType) {
    return null;
  }
  const formToDisplay = get(index_b3fbviVW_forms, [modalType, "form"], {
    advanced: () => ({
      sections: []
    }),
    base: () => ({
      sections: []
    })
  });
  const isAddingAComponentToAnotherComponent = forTarget === "components" || forTarget === "component";
  const genericInputProps = {
    customInputs: {
      "allowed-types-select": AllowedTypesSelect,
      "boolean-radio-group": BooleanRadioGroup,
      "checkbox-with-number-field": CheckboxWithNumberField,
      "icon-picker": IconPicker,
      "content-type-radio-group": ContentTypeRadioGroup,
      "radio-group": CustomRadioGroup,
      relation: index_b3fbviVW_Relation,
      "select-category": SelectCategory,
      "select-component": SelectComponent,
      "select-components": SelectComponents,
      "select-default-boolean": BooleanDefaultValueSelect,
      "select-number": SelectNumber,
      "select-date": SelectDateType,
      "toggle-draft-publish": DraftAndPublishToggle,
      "text-plural": PluralName,
      "text-singular": SingularName,
      "textarea-enum": TextareaEnum,
      ...inputsFromPlugins
    },
    componentToCreate,
    dynamicZoneTarget,
    formErrors,
    isAddingAComponentToAnotherComponent,
    isCreatingComponentWhileAddingAField,
    mainBoxHeader: get(allDataSchema, [...pathToSchema, "schema", "displayName"], ""),
    modifiedData,
    naturePickerType: forTarget,
    isCreating,
    targetUid,
    forTarget
  };
  const advancedForm2 = formToDisplay.advanced({
    data: modifiedData,
    type: attributeType,
    step,
    actionType,
    attributes,
    extensions: ctbFormsAPI,
    forTarget,
    contentTypeSchema: allDataSchema.contentType || {},
    customField
  }).sections;
  const baseForm2 = formToDisplay.base({
    data: modifiedData,
    type: attributeType,
    step,
    actionType,
    attributes,
    extensions: ctbFormsAPI,
    forTarget,
    contentTypeSchema: allDataSchema.contentType || {},
    customField
  }).sections;
  const baseFormInputNames = getFormInputNames(baseForm2);
  const advancedFormInputNames = getFormInputNames(advancedForm2);
  const doesBaseFormHasError = Object.keys(formErrors).some(
    (key) => baseFormInputNames.includes(key)
  );
  const doesAdvancedFormHasError = Object.keys(formErrors).some(
    (key) => advancedFormInputNames.includes(key)
  );
  const schemaKind = get(contentTypes, [targetUid, "schema", "kind"]);
  const checkIsEditingFieldName = () => actionType === "edit" && attributes.every(({ name }) => name !== modifiedData?.name);
  const handleClickFinish = () => {
    if (checkIsEditingFieldName()) {
      trackUsage("didEditFieldNameOnContentType");
    }
  };
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)(ModalLayout/* ModalLayout */.k, { onClose: handleClosed, labelledBy: "title", children: [
    /* @__PURE__ */ (0,jsx_runtime.jsx)(
      FormModalHeader,
      {
        actionType,
        attributeName,
        categoryName,
        contentTypeKind: kind,
        dynamicZoneTarget,
        modalType,
        forTarget,
        targetUid,
        attributeType,
        customFieldUid,
        showBackLink
      }
    ),
    isPickingAttribute && /* @__PURE__ */ (0,jsx_runtime.jsx)(
      AttributeOptions,
      {
        attributes: displayedAttributes,
        forTarget,
        kind: schemaKind || "collectionType"
      }
    ),
    !isPickingAttribute && /* @__PURE__ */ (0,jsx_runtime.jsxs)("form", { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ (0,jsx_runtime.jsx)(ModalBody/* ModalBody */.c, { children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(
        TabGroup/* TabGroup */.f,
        {
          label: "todo",
          id: "tabs",
          variant: "simple",
          ref: tabGroupRef,
          onTabChange: (selectedTab) => {
            if (selectedTab === 1) {
              sendAdvancedTabEvent("advanced");
            }
          },
          children: [
            /* @__PURE__ */ (0,jsx_runtime.jsxs)(Flex/* Flex */.s, { justifyContent: "space-between", children: [
              /* @__PURE__ */ (0,jsx_runtime.jsx)(
                FormModalSubHeader,
                {
                  actionType,
                  forTarget,
                  kind,
                  step,
                  modalType,
                  attributeType,
                  attributeName,
                  customField
                }
              ),
              /* @__PURE__ */ (0,jsx_runtime.jsxs)(Tabs/* Tabs */.t, { children: [
                /* @__PURE__ */ (0,jsx_runtime.jsx)(Tabs/* Tab */.o, { hasError: doesBaseFormHasError, children: formatMessage({
                  id: getTrad("popUpForm.navContainer.base"),
                  defaultMessage: "Basic settings"
                }) }),
                /* @__PURE__ */ (0,jsx_runtime.jsx)(
                  Tabs/* Tab */.o,
                  {
                    hasError: doesAdvancedFormHasError,
                    disabled: shouldDisableAdvancedTab(),
                    children: formatMessage({
                      id: getTrad("popUpForm.navContainer.advanced"),
                      defaultMessage: "Advanced settings"
                    })
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ (0,jsx_runtime.jsx)(Divider/* Divider */.c, {}),
            /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* Box */.a, { paddingTop: 6, children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(TabPanels/* TabPanels */.T, { children: [
              /* @__PURE__ */ (0,jsx_runtime.jsx)(TabPanels/* TabPanel */.K, { children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Flex/* Flex */.s, { direction: "column", alignItems: "stretch", gap: 6, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
                TabForm,
                {
                  form: baseForm2,
                  formErrors,
                  genericInputProps,
                  modifiedData,
                  onChange: handleChange
                }
              ) }) }),
              /* @__PURE__ */ (0,jsx_runtime.jsx)(TabPanels/* TabPanel */.K, { children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Flex/* Flex */.s, { direction: "column", alignItems: "stretch", gap: 6, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
                TabForm,
                {
                  form: advancedForm2,
                  formErrors,
                  genericInputProps,
                  modifiedData,
                  onChange: handleChange
                }
              ) }) })
            ] }) })
          ]
        }
      ) }),
      /* @__PURE__ */ (0,jsx_runtime.jsx)(
        ModalFooter/* ModalFooter */.j,
        {
          endActions: /* @__PURE__ */ (0,jsx_runtime.jsx)(
            FormModalEndActions,
            {
              deleteCategory,
              deleteContentType: deleteData,
              deleteComponent: deleteData,
              categoryName: initialData.name,
              isAttributeModal: modalType === "attribute",
              isCustomFieldModal: modalType === "customField",
              isComponentToDzModal: modalType === "addComponentToDynamicZone",
              isComponentAttribute: attributeType === "component",
              isComponentModal: modalType === "component",
              isContentTypeModal: modalType === "contentType",
              isCreatingComponent: actionType === "create",
              isCreatingDz: actionType === "create",
              isCreatingComponentAttribute: modifiedData.createComponent || false,
              isCreatingComponentInDz: modifiedData.createComponent || false,
              isCreatingComponentWhileAddingAField,
              isCreatingContentType: actionType === "create",
              isEditingAttribute: actionType === "edit",
              isDzAttribute: attributeType === "dynamiczone",
              isEditingCategory: modalType === "editCategory",
              isInFirstComponentStep: step === "1",
              onSubmitAddComponentAttribute: handleSubmit,
              onSubmitAddComponentToDz: handleSubmit,
              onSubmitCreateComponent: handleSubmit,
              onSubmitCreateContentType: handleSubmit,
              onSubmitCreateDz: handleSubmit,
              onSubmitEditAttribute: handleSubmit,
              onSubmitEditCategory: handleSubmit,
              onSubmitEditComponent: handleSubmit,
              onSubmitEditContentType: handleSubmit,
              onSubmitEditCustomFieldAttribute: handleSubmit,
              onSubmitEditDz: handleSubmit,
              onClickFinish: handleClickFinish
            }
          ),
          startActions: /* @__PURE__ */ (0,jsx_runtime.jsx)(Button/* Button */.$, { variant: "tertiary", onClick: handleClosed, children: formatMessage({ id: "app.components.Button.cancel", defaultMessage: "Cancel" }) })
        }
      )
    ] })
  ] });
};
const dataManagerProviderDomain = () => (state) => state[`${index_vZqceADF.p}_dataManagerProvider`] || index_vZqceADF.o;
const makeSelectDataManagerProvider = () => (0,reselect_es/* createSelector */.Mz)(dataManagerProviderDomain(), (substate) => {
  return substate;
});
const getCreatedAndModifiedComponents = (allComponents, initialComponents) => {
  const componentUIDsToReturn = Object.keys(allComponents).filter((compoUid) => {
    const currentCompo = get(allComponents, compoUid, {});
    const initialCompo = get(initialComponents, compoUid, {});
    const hasComponentBeenCreated = get(currentCompo, ["isTemporary"], false);
    const hasComponentBeenModified = !isEqual(currentCompo, initialCompo);
    return hasComponentBeenCreated || hasComponentBeenModified;
  });
  return (0,index_vZqceADF.q)(componentUIDsToReturn);
};
const formatComponent = (component, mainDataUID) => {
  const formattedAttributes = formatAttributes(
    get(component, "schema.attributes", []),
    mainDataUID
  );
  const compoUID = get(component, "isTemporary", false) ? { tmpUID: component.uid } : { uid: component.uid };
  const formattedComponent = Object.assign(
    {},
    compoUID,
    { category: component.category },
    // Omit the attributes since we want to format them
    omit(component.schema, "attributes"),
    // Add the formatted attributes
    { attributes: formattedAttributes }
  );
  return formattedComponent;
};
const formatMainDataType = (data, isComponent = false) => {
  const mainDataUID = get(data, "uid", null);
  const formattedAttributes = formatAttributes(get(data, "schema.attributes", []), mainDataUID);
  const initObj = isComponent ? { category: get(data, "category", "") } : {};
  const formattedContentType = Object.assign(initObj, omit(data.schema, "attributes"), {
    attributes: formattedAttributes
  });
  delete formattedContentType.uid;
  delete formattedContentType.isTemporary;
  delete formattedContentType.visible;
  delete formattedContentType.restrictRelationsTo;
  return formattedContentType;
};
const formatAttributes = (attributes, mainDataUID) => {
  return attributes.reduce((acc, { name, ...rest }) => {
    const currentAttribute = rest;
    const hasARelationWithMainDataUID = currentAttribute.target === mainDataUID;
    const isRelationType = currentAttribute.type === "relation";
    const currentTargetAttribute = get(currentAttribute, "targetAttribute", null);
    if (!hasARelationWithMainDataUID) {
      if (isRelationType) {
        const relationAttr = Object.assign({}, currentAttribute, {
          targetAttribute: formatRelationTargetAttribute(currentTargetAttribute)
        });
        acc[name] = removeNullKeys(relationAttr);
      } else {
        acc[name] = removeNullKeys(currentAttribute);
      }
    }
    if (hasARelationWithMainDataUID) {
      const target = currentAttribute.target;
      const formattedRelationAttribute = Object.assign({}, currentAttribute, {
        target,
        targetAttribute: formatRelationTargetAttribute(currentTargetAttribute)
      });
      acc[name] = removeNullKeys(formattedRelationAttribute);
    }
    if (currentAttribute.customField) {
      const customFieldAttribute = { ...currentAttribute, type: "customField" };
      acc[name] = removeNullKeys(customFieldAttribute);
    }
    return acc;
  }, {});
};
const formatRelationTargetAttribute = (targetAttribute) => targetAttribute === "-" ? null : targetAttribute;
const removeNullKeys = (obj) => Object.keys(obj).reduce((acc, current) => {
  if (obj[current] !== null && current !== "plugin") {
    acc[current] = obj[current];
  }
  return acc;
}, {});
const getComponentsToPost = (allComponents, initialComponents, mainDataUID) => {
  const componentsToFormat = getCreatedAndModifiedComponents(allComponents, initialComponents);
  const formattedComponents = componentsToFormat.map((compoUID) => {
    const currentCompo = get(allComponents, compoUID, {});
    const formattedComponent = formatComponent(currentCompo, mainDataUID);
    return formattedComponent;
  });
  return formattedComponents;
};
const sortContentType = (types) => sortBy(
  Object.keys(types).map((uid) => ({
    visible: types[uid].schema.visible,
    name: uid,
    title: types[uid].schema.displayName,
    plugin: types[uid].plugin || null,
    uid,
    to: `/plugins/${index_vZqceADF.p}/content-types/${uid}`,
    kind: types[uid].schema.kind,
    restrictRelationsTo: types[uid].schema.restrictRelationsTo
  })).filter((obj) => obj !== null),
  (obj) => camelCase(obj.title)
);
const createDataObject = (arr) => arr.reduce((acc, current) => {
  acc[current.uid] = current;
  return acc;
}, {});
const createModifiedDataSchema = (contentTypeSchema, retrievedComponents, allComponentsSchema, isInContentTypeView) => {
  const componentsAssociatedToContentType = retrievedComponents.reduce((acc, current) => {
    const componentSchema = get(allComponentsSchema, current, {});
    acc[current] = componentSchema;
    return acc;
  }, {});
  const keyName = isInContentTypeView ? "contentType" : "component";
  const schema = {
    [keyName]: contentTypeSchema,
    components: componentsAssociatedToContentType
  };
  return schema;
};
const formatSchemas = (schemas) => {
  return Object.keys(schemas).reduce((acc, current) => {
    const schema = schemas[current].schema;
    acc[current] = {
      ...schemas[current],
      schema: { ...schema, attributes: toAttributesArray(schema.attributes) }
    };
    return acc;
  }, {});
};
const toAttributesArray = (attributes) => {
  return Object.keys(attributes).reduce((acc, current) => {
    acc.push({ ...attributes[current], name: current });
    return acc;
  }, []);
};
const retrieveComponentsThatHaveComponents = (allComponents) => {
  const componentsThatHaveNestedComponents = Object.keys(allComponents).reduce(
    (acc, current) => {
      const currentComponent = get(allComponents, [current]);
      const uid = currentComponent.uid;
      if (doesComponentHaveAComponentField(currentComponent)) {
        acc.push(uid);
      }
      return acc;
    },
    []
  );
  return (0,index_vZqceADF.q)(componentsThatHaveNestedComponents);
};
const doesComponentHaveAComponentField = (component) => {
  const attributes = get(component, ["schema", "attributes"], []);
  return attributes.some((attribute) => {
    const { type } = attribute;
    return type === "component";
  });
};
const retrieveNestedComponents = (appComponents) => {
  const nestedComponents = Object.keys(appComponents).reduce((acc, current) => {
    const componentAttributes = appComponents?.[current]?.schema?.attributes ?? [];
    const currentComponentNestedCompos = getComponentsFromComponent(componentAttributes);
    return [...acc, ...currentComponentNestedCompos];
  }, []);
  return (0,index_vZqceADF.q)(nestedComponents);
};
const getComponentsFromComponent = (componentAttributes) => {
  return componentAttributes.reduce((acc, current) => {
    const { type, component } = current;
    if (type === "component") {
      acc.push(component);
    }
    return acc;
  }, []);
};
const retrieveSpecificInfoFromComponents = (allComponents, keysToRetrieve) => {
  const allData = Object.keys(allComponents).map((compo) => {
    return get(allComponents, [compo, ...keysToRetrieve], "");
  });
  return (0,index_vZqceADF.q)(allData);
};
const SERVER_HAS_NOT_BEEN_KILLED_MESSAGE = "did-not-kill-server";
const SERVER_HAS_BEEN_KILLED_MESSAGE = "server is down";
function serverRestartWatcher(response, didShutDownServer) {
  return new Promise((resolve) => {
    fetch(`${window.strapi.backendURL}/_health`, {
      method: "HEAD",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
        "Keep-Alive": "false"
      }
    }).then((res) => {
      if (res.status >= 400) {
        throw new Error(SERVER_HAS_BEEN_KILLED_MESSAGE);
      }
      if (!didShutDownServer) {
        throw new Error(SERVER_HAS_NOT_BEEN_KILLED_MESSAGE);
      }
      resolve(response);
    }).catch((err) => {
      setTimeout(() => {
        return serverRestartWatcher(
          response,
          err.message !== SERVER_HAS_NOT_BEEN_KILLED_MESSAGE
        ).then(resolve);
      }, 100);
    });
  });
}
const validateSchema = (schema) => {
  const dynamicZoneAttributes = Object.values(schema.attributes).filter(
    (attribute) => attribute.type === "dynamiczone"
  );
  return dynamicZoneAttributes.every(
    (attribute) => Array.isArray(attribute.components) && attribute.components.length > 0
  );
};
const DataManagerProvider = ({ children }) => {
  const dispatch = (0,es/* useDispatch */.wA)();
  const {
    components,
    contentTypes,
    isLoading,
    isLoadingForDataToBeSet,
    initialData,
    modifiedData,
    reservedNames
  } = (0,es/* useSelector */.d4)(makeSelectDataManagerProvider());
  const toggleNotification = (0,dist/* useNotification */.hN)();
  const { lockAppWithAutoreload, unlockAppWithAutoreload } = (0,dist/* useAutoReloadOverlayBlocker */.Ip)();
  const { setCurrentStep } = (0,dist/* useGuidedTour */.Cx)();
  const { getPlugin } = (0,dist/* useStrapiApp */.vD)();
  const plugin = getPlugin(index_vZqceADF.p);
  const { autoReload } = (0,dist/* useAppInfo */.Xe)();
  const { formatMessage } = (0,useIntl/* default */.A)();
  const { trackUsage } = (0,dist/* useTracking */.z1)();
  const { refetchPermissions } = (0,dist/* useRBACProvider */.r5)();
  const { pathname } = (0,react_router/* useLocation */.zy)();
  const { onCloseModal } = useFormModalNavigation();
  const contentTypeMatch = (0,react_router/* useRouteMatch */.W5)(
    `/plugins/${index_vZqceADF.p}/content-types/:uid`
  );
  const componentMatch = (0,react_router/* useRouteMatch */.W5)(
    `/plugins/${index_vZqceADF.p}/component-categories/:categoryUid/:componentUid`
  );
  const fetchClient = (0,dist/* useFetchClient */.ry)();
  const { put, post, del } = fetchClient;
  const formatMessageRef = (0,react.useRef)();
  formatMessageRef.current = formatMessage;
  const isInDevelopmentMode = autoReload;
  const isInContentTypeView = contentTypeMatch !== null;
  const firstKeyToMainSchema = isInContentTypeView ? "contentType" : "component";
  const currentUid = isInContentTypeView ? get(contentTypeMatch, "params.uid", null) : get(componentMatch, "params.componentUid", null);
  const getDataRef = (0,react.useRef)();
  const endPoint = isInContentTypeView ? "content-types" : "components";
  getDataRef.current = async () => {
    try {
      const [
        {
          data: { data: componentsArray }
        },
        {
          data: { data: contentTypesArray }
        },
        { data: reservedNames2 }
      ] = await Promise.all(
        ["components", "content-types", "reserved-names"].map((endPoint2) => {
          return fetchClient.get(`/${index_vZqceADF.p}/${endPoint2}`);
        })
      );
      const components2 = createDataObject(componentsArray);
      const formattedComponents = formatSchemas(components2);
      const contentTypes2 = createDataObject(contentTypesArray);
      const formattedContentTypes = formatSchemas(contentTypes2);
      dispatch({
        type: index_vZqceADF.G,
        components: formattedComponents,
        contentTypes: formattedContentTypes,
        reservedNames: reservedNames2
      });
    } catch (err) {
      console.error({ err });
      toggleNotification({
        type: "warning",
        message: { id: "notification.error" }
      });
    }
  };
  (0,react.useEffect)(() => {
    getDataRef.current();
    return () => {
      dispatch({ type: index_vZqceADF.r });
    };
  }, []);
  (0,react.useEffect)(() => {
    if (!isLoading && currentUid) {
      setModifiedData();
    }
  }, [isLoading, pathname, currentUid]);
  (0,react.useEffect)(() => {
    if (!autoReload) {
      toggleNotification({
        type: "info",
        message: { id: getTrad("notification.info.autoreaload-disable") }
      });
    }
  }, [autoReload, toggleNotification]);
  const addAttribute = (attributeToSet, forTarget, targetUid, isEditing = false, initialAttribute, shouldAddComponentToData = false) => {
    const actionType = isEditing ? index_vZqceADF.x : index_vZqceADF.y;
    dispatch({
      type: actionType,
      attributeToSet,
      forTarget,
      targetUid,
      initialAttribute,
      shouldAddComponentToData
    });
  };
  const addCustomFieldAttribute = ({
    attributeToSet,
    forTarget,
    targetUid,
    initialAttribute
  }) => {
    dispatch({
      type: index_vZqceADF.A,
      attributeToSet,
      forTarget,
      targetUid,
      initialAttribute
    });
  };
  const editCustomFieldAttribute = ({
    attributeToSet,
    forTarget,
    targetUid,
    initialAttribute
  }) => {
    dispatch({
      type: index_vZqceADF.E,
      attributeToSet,
      forTarget,
      targetUid,
      initialAttribute
    });
  };
  const addCreatedComponentToDynamicZone = (dynamicZoneTarget, componentsToAdd) => {
    dispatch({
      type: index_vZqceADF.u,
      dynamicZoneTarget,
      componentsToAdd
    });
  };
  const createSchema = (data, schemaType, uid, componentCategory, shouldAddComponentToData = false) => {
    const type = schemaType === "contentType" ? index_vZqceADF.z : index_vZqceADF.B;
    dispatch({
      type,
      data,
      componentCategory,
      schemaType,
      uid,
      shouldAddComponentToData
    });
  };
  const changeDynamicZoneComponents = (dynamicZoneTarget, newComponents) => {
    dispatch({
      type: index_vZqceADF.C,
      dynamicZoneTarget,
      newComponents
    });
  };
  const removeAttribute = (mainDataKey, attributeToRemoveName, componentUid = "") => {
    const type = mainDataKey === "components" ? index_vZqceADF.F : index_vZqceADF.H;
    if (mainDataKey === "contentType") {
      trackUsage("willDeleteFieldOfContentType");
    }
    dispatch({
      type,
      mainDataKey,
      attributeToRemoveName,
      componentUid
    });
  };
  const deleteCategory = async (categoryUid) => {
    try {
      const requestURL = `/${index_vZqceADF.p}/component-categories/${categoryUid}`;
      const userConfirm = window.confirm(
        formatMessage({
          id: getTrad("popUpWarning.bodyMessage.category.delete")
        })
      );
      onCloseModal();
      if (userConfirm) {
        lockAppWithAutoreload?.();
        await del(requestURL);
        await serverRestartWatcher(true);
        unlockAppWithAutoreload?.();
        await updatePermissions();
      }
    } catch (err) {
      console.error({ err });
      toggleNotification({
        type: "warning",
        message: { id: "notification.error" }
      });
    } finally {
      unlockAppWithAutoreload?.();
    }
  };
  const deleteData = async () => {
    try {
      const requestURL = `/${index_vZqceADF.p}/${endPoint}/${currentUid}`;
      const isTemporary = get(modifiedData, [firstKeyToMainSchema, "isTemporary"], false);
      const userConfirm = window.confirm(
        formatMessage({
          id: getTrad(
            `popUpWarning.bodyMessage.${isInContentTypeView ? "contentType" : "component"}.delete`
          )
        })
      );
      onCloseModal();
      if (userConfirm) {
        if (isTemporary) {
          dispatch({ type: index_vZqceADF.D });
          return;
        }
        lockAppWithAutoreload?.();
        await del(requestURL);
        await serverRestartWatcher(true);
        await unlockAppWithAutoreload?.();
        await updatePermissions();
      }
    } catch (err) {
      console.error({ err });
      toggleNotification({
        type: "warning",
        message: { id: "notification.error" }
      });
    } finally {
      unlockAppWithAutoreload?.();
    }
  };
  const editCategory = async (categoryUid, body) => {
    try {
      const requestURL = `/${index_vZqceADF.p}/component-categories/${categoryUid}`;
      onCloseModal();
      lockAppWithAutoreload?.();
      await put(requestURL, body);
      await serverRestartWatcher(true);
      await unlockAppWithAutoreload?.();
      await updatePermissions();
    } catch (err) {
      console.error({ err });
      toggleNotification({
        type: "warning",
        message: { id: "notification.error" }
      });
    } finally {
      unlockAppWithAutoreload?.();
    }
  };
  const getAllComponentsThatHaveAComponentInTheirAttributes = () => {
    const allCompos = Object.assign({}, components, modifiedData.components);
    if (!isInContentTypeView) {
      const currentEditedCompo = get(modifiedData, "component", {});
      set(allCompos, get(currentEditedCompo, ["uid"], ""), currentEditedCompo);
    }
    const composWithCompos = retrieveComponentsThatHaveComponents(allCompos);
    return (0,index_vZqceADF.q)(composWithCompos);
  };
  const getAllNestedComponents = () => {
    const appNestedCompo = retrieveNestedComponents(components);
    const editingDataNestedCompos = retrieveNestedComponents(modifiedData.components || {});
    return (0,index_vZqceADF.q)([...editingDataNestedCompos, ...appNestedCompo]);
  };
  const removeComponentFromDynamicZone = (dzName, componentToRemoveIndex) => {
    dispatch({
      type: index_vZqceADF.v,
      dzName,
      componentToRemoveIndex
    });
  };
  const setModifiedData = () => {
    const currentSchemas = isInContentTypeView ? contentTypes : components;
    const schemaToSet = get(currentSchemas, currentUid ?? "", {
      schema: { attributes: [] }
    });
    const retrievedComponents = (0,index_vZqceADF.s)(
      schemaToSet.schema.attributes,
      components
    );
    const newSchemaToSet = createModifiedDataSchema(
      schemaToSet,
      retrievedComponents,
      components,
      isInContentTypeView
    );
    const hasJustCreatedSchema = get(schemaToSet, "isTemporary", false) && size(get(schemaToSet, "schema.attributes", [])) === 0;
    dispatch({
      type: index_vZqceADF.t,
      schemaToSet: newSchemaToSet,
      hasJustCreatedSchema
    });
  };
  const shouldRedirect = (0,react.useMemo)(() => {
    const dataSet = isInContentTypeView ? contentTypes : components;
    if (currentUid === "create-content-type") {
      return false;
    }
    return !Object.keys(dataSet).includes(currentUid || "") && !isLoading;
  }, [components, contentTypes, currentUid, isInContentTypeView, isLoading]);
  const redirectEndpoint = (0,react.useMemo)(() => {
    const allowedEndpoints = Object.keys(contentTypes).filter((uid) => get(contentTypes, [uid, "schema", "visible"], true)).sort();
    return get(allowedEndpoints, "0", "create-content-type");
  }, [contentTypes]);
  if (shouldRedirect) {
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(react_router/* Redirect */.rd, { to: `/plugins/${index_vZqceADF.p}/content-types/${redirectEndpoint}` });
  }
  const submitData = async (additionalContentTypeData) => {
    try {
      const isCreating = get(modifiedData, [firstKeyToMainSchema, "isTemporary"], false);
      const body = {
        components: getComponentsToPost(
          modifiedData.components,
          components,
          currentUid
        )
      };
      if (isInContentTypeView) {
        const PluginForms = plugin?.apis?.forms;
        const contentType = PluginForms.mutateContentTypeSchema(
          {
            ...formatMainDataType(modifiedData.contentType),
            ...additionalContentTypeData
          },
          initialData.contentType
        );
        const isValidSchema = validateSchema(contentType);
        if (!isValidSchema) {
          toggleNotification({
            type: "warning",
            message: {
              id: getTrad("notification.error.dynamiczone-min.validation"),
              defaultMessage: "At least one component is required in a dynamic zone to be able to save a content type"
            }
          });
          return;
        }
        body.contentType = contentType;
        trackUsage("willSaveContentType");
      } else {
        body.component = formatMainDataType(modifiedData.component, true);
        trackUsage("willSaveComponent");
      }
      lockAppWithAutoreload?.();
      const baseURL = `/${index_vZqceADF.p}/${endPoint}`;
      const requestURL = isCreating ? baseURL : `${baseURL}/${currentUid}`;
      if (isCreating) {
        await post(requestURL, body);
      } else {
        await put(requestURL, body);
      }
      await serverRestartWatcher(true);
      unlockAppWithAutoreload?.();
      if (isCreating && (initialData.contentType?.schema.kind === "collectionType" || initialData.contentType?.schema.kind === "singleType")) {
        setCurrentStep("contentTypeBuilder.success");
      }
      if (isInContentTypeView) {
        trackUsage("didSaveContentType");
        const oldName = get(body, ["contentType", "schema", "name"], "");
        const newName = get(initialData, ["contentType", "schema", "name"], "");
        if (!isCreating && oldName !== newName) {
          trackUsage("didEditNameOfContentType");
        }
      } else {
        trackUsage("didSaveComponent");
      }
      await getDataRef.current();
      dispatch({ type: index_vZqceADF.U });
      await updatePermissions();
    } catch (err) {
      if (!isInContentTypeView) {
        trackUsage("didNotSaveComponent");
      }
      console.error({ err: err.response });
      toggleNotification({
        type: "warning",
        message: { id: "notification.error" }
      });
    } finally {
      unlockAppWithAutoreload?.();
    }
  };
  const updatePermissions = async () => {
    await refetchPermissions();
  };
  const updateSchema = (data, schemaType, componentUID) => {
    dispatch({
      type: index_vZqceADF.w,
      data,
      schemaType,
      uid: componentUID
    });
  };
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    DataManagerContext.Provider,
    {
      value: {
        addAttribute,
        addCustomFieldAttribute,
        addCreatedComponentToDynamicZone,
        allComponentsCategories: retrieveSpecificInfoFromComponents(components, ["category"]),
        changeDynamicZoneComponents,
        components,
        componentsGroupedByCategory: groupBy(components, "category"),
        componentsThatHaveOtherComponentInTheirAttributes: getAllComponentsThatHaveAComponentInTheirAttributes(),
        contentTypes,
        createSchema,
        deleteCategory,
        deleteData,
        editCategory,
        editCustomFieldAttribute,
        isInDevelopmentMode,
        initialData,
        isInContentTypeView,
        modifiedData,
        nestedComponents: getAllNestedComponents(),
        removeAttribute,
        removeComponentFromDynamicZone,
        reservedNames,
        setModifiedData,
        sortedContentTypesList: sortContentType(contentTypes),
        submitData,
        updateSchema
      },
      children: isLoadingForDataToBeSet ? /* @__PURE__ */ (0,jsx_runtime.jsx)(dist/* LoadingIndicatorPage */.Bl, {}) : /* @__PURE__ */ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [
        children,
        isInDevelopmentMode && /* @__PURE__ */ (0,jsx_runtime.jsx)(FormModal, {})
      ] })
    }
  );
};
const DataManagerProvider$1 = (0,react.memo)(DataManagerProvider);
const INITIAL_STATE_DATA = {
  actionType: null,
  attributeName: null,
  attributeType: null,
  categoryName: null,
  dynamicZoneTarget: null,
  forTarget: null,
  modalType: null,
  isOpen: false,
  showBackLink: false,
  kind: null,
  step: null,
  targetUid: null,
  customFieldUid: null
};
const FormModalNavigationProvider = ({ children }) => {
  const [state, setFormModalNavigationState] = react.useState(INITIAL_STATE_DATA);
  const { trackUsage } = (0,dist/* useTracking */.z1)();
  const onClickSelectCustomField = ({ attributeType, customFieldUid }) => {
    setFormModalNavigationState((prevState) => {
      return {
        ...prevState,
        actionType: "create",
        modalType: "customField",
        attributeType,
        customFieldUid
      };
    });
  };
  const onClickSelectField = ({ attributeType, step }) => {
    if (state.forTarget === "contentType") {
      trackUsage("didSelectContentTypeFieldType", { type: attributeType });
    }
    setFormModalNavigationState((prevState) => {
      return {
        ...prevState,
        actionType: "create",
        modalType: "attribute",
        step,
        attributeType,
        showBackLink: true
      };
    });
  };
  const onOpenModalAddComponentsToDZ = ({ dynamicZoneTarget, targetUid }) => {
    setFormModalNavigationState((prevState) => {
      return {
        ...prevState,
        dynamicZoneTarget,
        targetUid,
        modalType: "addComponentToDynamicZone",
        forTarget: "contentType",
        step: "1",
        actionType: "edit",
        isOpen: true
      };
    });
  };
  const onOpenModalAddField = ({ forTarget, targetUid }) => {
    setFormModalNavigationState((prevState) => {
      return {
        ...prevState,
        actionType: "create",
        forTarget,
        targetUid,
        modalType: "chooseAttribute",
        isOpen: true,
        showBackLink: false
      };
    });
  };
  const onOpenModalCreateSchema = (nextState) => {
    setFormModalNavigationState((prevState) => {
      return { ...prevState, ...nextState, isOpen: true };
    });
  };
  const onOpenModalEditCategory = (categoryName) => {
    setFormModalNavigationState((prevState) => {
      return {
        ...prevState,
        categoryName,
        actionType: "edit",
        modalType: "editCategory",
        isOpen: true
      };
    });
  };
  const onOpenModalEditCustomField = ({
    forTarget,
    targetUid,
    attributeName,
    attributeType,
    customFieldUid
  }) => {
    setFormModalNavigationState((prevState) => {
      return {
        ...prevState,
        modalType: "customField",
        customFieldUid,
        actionType: "edit",
        forTarget,
        targetUid,
        attributeName,
        attributeType,
        isOpen: true
      };
    });
  };
  const onOpenModalEditField = ({
    forTarget,
    targetUid,
    attributeName,
    attributeType,
    step
  }) => {
    setFormModalNavigationState((prevState) => {
      return {
        ...prevState,
        modalType: "attribute",
        actionType: "edit",
        forTarget,
        targetUid,
        attributeName,
        attributeType,
        step,
        isOpen: true
      };
    });
  };
  const onOpenModalEditSchema = ({ modalType, forTarget, targetUid, kind }) => {
    setFormModalNavigationState((prevState) => {
      return {
        ...prevState,
        modalType,
        actionType: "edit",
        forTarget,
        targetUid,
        kind,
        isOpen: true
      };
    });
  };
  const onCloseModal = () => {
    setFormModalNavigationState(INITIAL_STATE_DATA);
  };
  const onNavigateToChooseAttributeModal = ({ forTarget, targetUid }) => {
    setFormModalNavigationState((prev) => {
      return {
        ...prev,
        forTarget,
        targetUid,
        modalType: "chooseAttribute"
      };
    });
  };
  const onNavigateToCreateComponentStep2 = () => {
    setFormModalNavigationState((prev) => {
      return {
        ...prev,
        attributeType: "component",
        modalType: "attribute",
        step: "2"
      };
    });
  };
  const onNavigateToAddCompoToDZModal = ({ dynamicZoneTarget }) => {
    setFormModalNavigationState((prev) => {
      return {
        ...prev,
        dynamicZoneTarget,
        modalType: "addComponentToDynamicZone",
        actionType: "create",
        step: "1",
        attributeType: null,
        attributeName: null
      };
    });
  };
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    FormModalNavigationContext.Provider,
    {
      value: {
        ...state,
        onClickSelectField,
        onClickSelectCustomField,
        onCloseModal,
        onNavigateToChooseAttributeModal,
        onNavigateToAddCompoToDZModal,
        onOpenModalAddComponentsToDZ,
        onNavigateToCreateComponentStep2,
        onOpenModalAddField,
        onOpenModalCreateSchema,
        onOpenModalEditCategory,
        onOpenModalEditField,
        onOpenModalEditCustomField,
        onOpenModalEditSchema,
        setFormModalNavigationState
      },
      children
    }
  );
};
const ListView$1 = (0,react.lazy)(() => __webpack_require__.e(/* import() */ 5313).then(__webpack_require__.bind(__webpack_require__, 5313)));
const RecursivePath = () => {
  const { url } = (0,react_router/* useRouteMatch */.W5)();
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(react.Suspense, { fallback: /* @__PURE__ */ (0,jsx_runtime.jsx)(dist/* LoadingIndicatorPage */.Bl, {}), children: /* @__PURE__ */ (0,jsx_runtime.jsx)(react_router/* Switch */.dO, { children: /* @__PURE__ */ (0,jsx_runtime.jsx)(react_router/* Route */.qh, { path: `${url}/:componentUid`, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(ListView$1, {}) }) }) });
};
const ListView = (0,react.lazy)(() => __webpack_require__.e(/* import() */ 5313).then(__webpack_require__.bind(__webpack_require__, 5313)));
const App = () => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const title = formatMessage({
    id: `${index_vZqceADF.p}.plugin.name`,
    defaultMessage: "Content Types Builder"
  });
  const { startSection } = (0,dist/* useGuidedTour */.Cx)();
  const startSectionRef = (0,react.useRef)(startSection);
  (0,react.useEffect)(() => {
    if (startSectionRef.current) {
      startSectionRef.current("contentTypeBuilder");
    }
  }, []);
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)(dist/* CheckPagePermissions */.kz, { permissions: index_vZqceADF.P.main, children: [
    /* @__PURE__ */ (0,jsx_runtime.jsx)(Helmet/* Helmet */.m, { title }),
    /* @__PURE__ */ (0,jsx_runtime.jsx)(FormModalNavigationProvider, { children: /* @__PURE__ */ (0,jsx_runtime.jsx)(DataManagerProvider$1, { children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Layout/* Layout */.P, { sideNav: /* @__PURE__ */ (0,jsx_runtime.jsx)(ContentTypeBuilderNav, {}), children: /* @__PURE__ */ (0,jsx_runtime.jsx)(react.Suspense, { fallback: /* @__PURE__ */ (0,jsx_runtime.jsx)(dist/* LoadingIndicatorPage */.Bl, {}), children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(react_router/* Switch */.dO, { children: [
      /* @__PURE__ */ (0,jsx_runtime.jsx)(
        react_router/* Route */.qh,
        {
          path: `/plugins/${index_vZqceADF.p}/content-types/create-content-type`,
          component: ListView
        }
      ),
      /* @__PURE__ */ (0,jsx_runtime.jsx)(react_router/* Route */.qh, { path: `/plugins/${index_vZqceADF.p}/content-types/:uid`, component: ListView }),
      /* @__PURE__ */ (0,jsx_runtime.jsx)(
        react_router/* Route */.qh,
        {
          path: `/plugins/${index_vZqceADF.p}/component-categories/:categoryUid`,
          component: RecursivePath
        }
      )
    ] }) }) }) }) })
  ] });
};
const index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: App
}, Symbol.toStringTag, { value: "Module" }));



/***/ }

}]);