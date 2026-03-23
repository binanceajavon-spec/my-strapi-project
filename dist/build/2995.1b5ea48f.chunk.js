(self["webpackChunkmy_strapi_project"] = self["webpackChunkmy_strapi_project"] || []).push([[2995],{

/***/ 87826
(module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = assign;
function assign(target, object) {
  if (target == null) {
    throw new TypeError("assign requires that input parameter not be null or undefined");
  }
  for (var property in object) {
    if (Object.prototype.hasOwnProperty.call(object, property)) {
      ;
      target[property] = object[property];
    }
  }
  return target;
}
module.exports = exports.default;


/***/ },

/***/ 21871
(module, exports, __webpack_require__) {

"use strict";

var _interopRequireDefault = (__webpack_require__(90448)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = cloneObject;
var _index = _interopRequireDefault(__webpack_require__(87826));
function cloneObject(object) {
  return (0, _index.default)({}, object);
}
module.exports = exports.default;


/***/ },

/***/ 18724
(module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = getTimezoneOffsetInMilliseconds;
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}
module.exports = exports.default;


/***/ },

/***/ 34316
(module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = toInteger;
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}
module.exports = exports.default;


/***/ },

/***/ 3918
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ getDefaultOptions)
/* harmony export */ });
/* unused harmony export setDefaultOptions */
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}


/***/ },

/***/ 44930
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ startOfUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48716);
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17064);
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53323);
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3918);




function startOfUTCWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_3__/* .getDefaultOptions */ .q)();
  var weekStartsOn = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}


/***/ },

/***/ 50771
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function() {
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}


/***/ },

/***/ 4025
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function(dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : "standalone";
    var valuesArray;
    if (context === "formatting" && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;
      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }
    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    return valuesArray[index];
  };
}


/***/ },

/***/ 5047
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function(string) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function(pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function(pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value,
      rest
    };
  };
}
function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }
  return void 0;
}
function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return void 0;
}


/***/ },

/***/ 5015
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function(string) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult)
      return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult)
      return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value,
      rest
    };
  };
}


/***/ },

/***/ 8951
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
};
var formatDistance = function formatDistance2(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }
  return result;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);


/***/ },

/***/ 47080
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
};
var formatRelative = function formatRelative2(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);


/***/ },

/***/ 30808
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4025);

var eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
};
var quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
};
var monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
};
var dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
};
var dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
};
var ordinalNumber = function ordinalNumber2(dirtyNumber, _options) {
  var number = Number(dirtyNumber);
  var rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
    }
  }
  return number + "th";
};
var localize = {
  ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    values: eraValues,
    defaultWidth: "wide"
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    values: monthValues,
    defaultWidth: "wide"
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    values: dayValues,
    defaultWidth: "wide"
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide"
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);


/***/ },

/***/ 74752
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5047);
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5015);


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any"
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: function valueCallback2(index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any"
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any"
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any"
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);


/***/ },

/***/ 18322
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ en_US)
});

// EXTERNAL MODULE: ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js
var formatDistance = __webpack_require__(8951);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js
var buildFormatLongFn = __webpack_require__(50771);
;// ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js

var dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
};
var timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
};
var formatLong = {
  date: (0,buildFormatLongFn/* default */.A)({
    formats: dateFormats,
    defaultWidth: "full"
  }),
  time: (0,buildFormatLongFn/* default */.A)({
    formats: timeFormats,
    defaultWidth: "full"
  }),
  dateTime: (0,buildFormatLongFn/* default */.A)({
    formats: dateTimeFormats,
    defaultWidth: "full"
  })
};
/* harmony default export */ const _lib_formatLong = (formatLong);

// EXTERNAL MODULE: ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js
var formatRelative = __webpack_require__(47080);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js
var localize = __webpack_require__(30808);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js
var match = __webpack_require__(74752);
;// ./node_modules/date-fns/esm/locale/en-US/index.js





var locale = {
  code: "en-US",
  formatDistance: formatDistance/* default */.A,
  formatLong: _lib_formatLong,
  formatRelative: formatRelative/* default */.A,
  localize: localize/* default */.A,
  match: match/* default */.A,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const en_US = (locale);


/***/ },

/***/ 48716
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88189);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17064);


function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(1, arguments);
  var argStr = Object.prototype.toString.call(argument);
  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(argument) === "object" && argStr === "[object Date]") {
    return new Date(argument.getTime());
  } else if (typeof argument === "number" || argStr === "[object Number]") {
    return new Date(argument);
  } else {
    if ((typeof argument === "string" || argStr === "[object String]") && typeof console !== "undefined") {
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}


/***/ },

/***/ 90448
(module) {

function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    "default": e
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;


/***/ },

/***/ 88189
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}



/***/ },

/***/ 62995
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  App: () => (/* binding */ App)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(69751);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/dist/index.mjs + 63 modules
var dist = __webpack_require__(59201);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(17703);
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(71389);
// EXTERNAL MODULE: ./node_modules/@strapi/content-releases/dist/_chunks/index-PiOGBETy.mjs
var index_PiOGBETy = __webpack_require__(52526);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(21272);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/dist/admin/index.mjs
var admin = __webpack_require__(40427);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalLayout.mjs
var ModalLayout = __webpack_require__(61485);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalHeader.mjs
var ModalHeader = __webpack_require__(99248);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.mjs + 2 modules
var Typography = __webpack_require__(30893);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalBody.mjs
var ModalBody = __webpack_require__(6239);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.mjs
var Flex = __webpack_require__(83997);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextInput/TextInput.mjs
var TextInput = __webpack_require__(7537);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.mjs
var Box = __webpack_require__(94061);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Checkbox/Checkbox.mjs
var Checkbox = __webpack_require__(4181);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/DatePicker/DatePicker.mjs + 1 modules
var DatePicker = __webpack_require__(87866);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TimePicker/TimePicker.mjs
var TimePicker = __webpack_require__(69533);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalFooter.mjs
var ModalFooter = __webpack_require__(67030);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.mjs
var Button = __webpack_require__(85963);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Combobox/Combobox.mjs
var Combobox = __webpack_require__(76517);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Combobox/ComboboxOption.mjs
var ComboboxOption = __webpack_require__(80782);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/EmptyStateLayout/EmptyStateLayout.mjs
var EmptyStateLayout = __webpack_require__(53563);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.mjs
var Grid = __webpack_require__(90151);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.mjs
var GridItem = __webpack_require__(68074);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Badge/Badge.mjs
var Badge = __webpack_require__(10573);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Alert/Alert.mjs + 1 modules
var Alert = __webpack_require__(20636);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.mjs
var Main = __webpack_require__(38413);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.mjs + 2 modules
var HeaderLayout = __webpack_require__(55356);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.mjs
var ContentLayout = __webpack_require__(4198);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Tabs/TabGroup.mjs
var TabGroup = __webpack_require__(12081);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Tabs/Tabs.mjs + 1 modules
var Tabs = __webpack_require__(12408);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Divider/Divider.mjs
var Divider = __webpack_require__(48653);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Tabs/TabPanels.mjs
var TabPanels = __webpack_require__(24093);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Icon/Icon.mjs
var Icon = __webpack_require__(58805);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Tooltip/Tooltip.mjs + 3 modules
var Tooltip = __webpack_require__(79739);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Link/Link.mjs
var Link = __webpack_require__(64871);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/IconButton/IconButton.mjs
var IconButton = __webpack_require__(88353);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/SingleSelect.mjs
var SingleSelect = __webpack_require__(48323);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tr.mjs
var Tr = __webpack_require__(90361);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Cell.mjs
var Cell = __webpack_require__(33363);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/Link/Link.mjs
var Link_Link = __webpack_require__(21610);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/SimpleMenu/Menu.mjs + 51 modules
var Menu = __webpack_require__(30529);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/LinkButton/LinkButton.mjs
var LinkButton = __webpack_require__(49654);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/EmptyDocuments.mjs
var EmptyDocuments = __webpack_require__(36481);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Plus.mjs
var Plus = __webpack_require__(5194);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Pencil.mjs
var Pencil = __webpack_require__(41909);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Trash.mjs
var Trash = __webpack_require__(50612);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/CrossCircle.mjs
var CrossCircle = __webpack_require__(49310);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/CheckCircle.mjs
var CheckCircle = __webpack_require__(85166);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ArrowLeft.mjs
var ArrowLeft = __webpack_require__(46270);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/More.mjs
var More = __webpack_require__(85641);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(88189);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/_lib/requiredArgs/index.js
var requiredArgs = __webpack_require__(17064);
;// ./node_modules/date-fns/esm/isDate/index.js


function isDate(value) {
  (0,requiredArgs/* default */.A)(1, arguments);
  return value instanceof Date || (0,esm_typeof/* default */.A)(value) === "object" && Object.prototype.toString.call(value) === "[object Date]";
}

// EXTERNAL MODULE: ./node_modules/date-fns/esm/toDate/index.js
var toDate = __webpack_require__(48716);
;// ./node_modules/date-fns/esm/isValid/index.js



function isValid(dirtyDate) {
  (0,requiredArgs/* default */.A)(1, arguments);
  if (!isDate(dirtyDate) && typeof dirtyDate !== "number") {
    return false;
  }
  var date = (0,toDate/* default */.A)(dirtyDate);
  return !isNaN(Number(date));
}

// EXTERNAL MODULE: ./node_modules/date-fns/esm/_lib/toInteger/index.js
var toInteger = __webpack_require__(53323);
;// ./node_modules/date-fns/esm/addMilliseconds/index.js



function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,requiredArgs/* default */.A)(2, arguments);
  var timestamp = (0,toDate/* default */.A)(dirtyDate).getTime();
  var amount = (0,toInteger/* default */.A)(dirtyAmount);
  return new Date(timestamp + amount);
}

;// ./node_modules/date-fns/esm/subMilliseconds/index.js



function subMilliseconds(dirtyDate, dirtyAmount) {
  (0,requiredArgs/* default */.A)(2, arguments);
  var amount = (0,toInteger/* default */.A)(dirtyAmount);
  return addMilliseconds(dirtyDate, -amount);
}

;// ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js


var MILLISECONDS_IN_DAY = 864e5;
function getUTCDayOfYear(dirtyDate) {
  (0,requiredArgs/* default */.A)(1, arguments);
  var date = (0,toDate/* default */.A)(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

;// ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js


function startOfUTCISOWeek(dirtyDate) {
  (0,requiredArgs/* default */.A)(1, arguments);
  var weekStartsOn = 1;
  var date = (0,toDate/* default */.A)(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

;// ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js



function getUTCISOWeekYear(dirtyDate) {
  (0,requiredArgs/* default */.A)(1, arguments);
  var date = (0,toDate/* default */.A)(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCISOWeek(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCISOWeek(fourthOfJanuaryOfThisYear);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

;// ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js



function startOfUTCISOWeekYear(dirtyDate) {
  (0,requiredArgs/* default */.A)(1, arguments);
  var year = getUTCISOWeekYear(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCISOWeek(fourthOfJanuary);
  return date;
}

;// ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js




var MILLISECONDS_IN_WEEK = 6048e5;
function getUTCISOWeek(dirtyDate) {
  (0,requiredArgs/* default */.A)(1, arguments);
  var date = (0,toDate/* default */.A)(dirtyDate);
  var diff = startOfUTCISOWeek(date).getTime() - startOfUTCISOWeekYear(date).getTime();
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

// EXTERNAL MODULE: ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js
var startOfUTCWeek = __webpack_require__(44930);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/_lib/defaultOptions/index.js
var _lib_defaultOptions = __webpack_require__(3918);
;// ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js





function getUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,requiredArgs/* default */.A)(1, arguments);
  var date = (0,toDate/* default */.A)(dirtyDate);
  var year = date.getUTCFullYear();
  var defaultOptions = (0,_lib_defaultOptions/* getDefaultOptions */.q)();
  var firstWeekContainsDate = (0,toInteger/* default */.A)((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  }
  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,startOfUTCWeek/* default */.A)(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,startOfUTCWeek/* default */.A)(firstWeekOfThisYear, options);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

;// ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js





function startOfUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,requiredArgs/* default */.A)(1, arguments);
  var defaultOptions = (0,_lib_defaultOptions/* getDefaultOptions */.q)();
  var firstWeekContainsDate = (0,toInteger/* default */.A)((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  var year = getUTCWeekYear(dirtyDate, options);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0,startOfUTCWeek/* default */.A)(firstWeek, options);
  return date;
}

;// ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js




var getUTCWeek_MILLISECONDS_IN_WEEK = 6048e5;
function getUTCWeek(dirtyDate, options) {
  (0,requiredArgs/* default */.A)(1, arguments);
  var date = (0,toDate/* default */.A)(dirtyDate);
  var diff = (0,startOfUTCWeek/* default */.A)(date, options).getTime() - startOfUTCWeekYear(date, options).getTime();
  return Math.round(diff / getUTCWeek_MILLISECONDS_IN_WEEK) + 1;
}

;// ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? "-" : "";
  var output = Math.abs(number).toString();
  while (output.length < targetLength) {
    output = "0" + output;
  }
  return sign + output;
}

;// ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js

var formatters = {
  // Year
  y: function y(date, token) {
    var signedYear = date.getUTCFullYear();
    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return addLeadingZeros(token === "yy" ? year % 100 : year, token.length);
  },
  // Month
  M: function M(date, token) {
    var month = date.getUTCMonth();
    return token === "M" ? String(month + 1) : addLeadingZeros(month + 1, 2);
  },
  // Day of the month
  d: function d(date, token) {
    return addLeadingZeros(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function a(date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return dayPeriodEnumValue.toUpperCase();
      case "aaa":
        return dayPeriodEnumValue;
      case "aaaaa":
        return dayPeriodEnumValue[0];
      case "aaaa":
      default:
        return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h: function h(date, token) {
    return addLeadingZeros(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function H(date, token) {
    return addLeadingZeros(date.getUTCHours(), token.length);
  },
  // Minute
  m: function m(date, token) {
    return addLeadingZeros(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function s(date, token) {
    return addLeadingZeros(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function S(date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return addLeadingZeros(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const lightFormatters = (formatters);

;// ./node_modules/date-fns/esm/_lib/format/formatters/index.js







var dayPeriodEnum = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
};
var formatters_formatters = {
  // Era
  G: function G(date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;
    switch (token) {
      case "G":
      case "GG":
      case "GGG":
        return localize.era(era, {
          width: "abbreviated"
        });
      case "GGGGG":
        return localize.era(era, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return localize.era(era, {
          width: "wide"
        });
    }
  },
  // Year
  y: function y(date, token, localize) {
    if (token === "yo") {
      var signedYear = date.getUTCFullYear();
      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: "year"
      });
    }
    return lightFormatters.y(date, token);
  },
  // Local week-numbering year
  Y: function Y(date, token, localize, options) {
    var signedWeekYear = getUTCWeekYear(date, options);
    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
    if (token === "YY") {
      var twoDigitYear = weekYear % 100;
      return addLeadingZeros(twoDigitYear, 2);
    }
    if (token === "Yo") {
      return localize.ordinalNumber(weekYear, {
        unit: "year"
      });
    }
    return addLeadingZeros(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function R(date, token) {
    var isoWeekYear = getUTCISOWeekYear(date);
    return addLeadingZeros(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function u(date, token) {
    var year = date.getUTCFullYear();
    return addLeadingZeros(year, token.length);
  },
  // Quarter
  Q: function Q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      case "Q":
        return String(quarter);
      case "QQ":
        return addLeadingZeros(quarter, 2);
      case "Qo":
        return localize.ordinalNumber(quarter, {
          unit: "quarter"
        });
      case "QQQ":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return localize.quarter(quarter, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      case "q":
        return String(quarter);
      case "qq":
        return addLeadingZeros(quarter, 2);
      case "qo":
        return localize.ordinalNumber(quarter, {
          unit: "quarter"
        });
      case "qqq":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return localize.quarter(quarter, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function M(date, token, localize) {
    var month = date.getUTCMonth();
    switch (token) {
      case "M":
      case "MM":
        return lightFormatters.M(date, token);
      case "Mo":
        return localize.ordinalNumber(month + 1, {
          unit: "month"
        });
      case "MMM":
        return localize.month(month, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return localize.month(month, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return localize.month(month, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone month
  L: function L(date, token, localize) {
    var month = date.getUTCMonth();
    switch (token) {
      case "L":
        return String(month + 1);
      case "LL":
        return addLeadingZeros(month + 1, 2);
      case "Lo":
        return localize.ordinalNumber(month + 1, {
          unit: "month"
        });
      case "LLL":
        return localize.month(month, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return localize.month(month, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return localize.month(month, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Local week of year
  w: function w(date, token, localize, options) {
    var week = getUTCWeek(date, options);
    if (token === "wo") {
      return localize.ordinalNumber(week, {
        unit: "week"
      });
    }
    return addLeadingZeros(week, token.length);
  },
  // ISO week of year
  I: function I(date, token, localize) {
    var isoWeek = getUTCISOWeek(date);
    if (token === "Io") {
      return localize.ordinalNumber(isoWeek, {
        unit: "week"
      });
    }
    return addLeadingZeros(isoWeek, token.length);
  },
  // Day of the month
  d: function d(date, token, localize) {
    if (token === "do") {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: "date"
      });
    }
    return lightFormatters.d(date, token);
  },
  // Day of year
  D: function D(date, token, localize) {
    var dayOfYear = getUTCDayOfYear(date);
    if (token === "Do") {
      return localize.ordinalNumber(dayOfYear, {
        unit: "dayOfYear"
      });
    }
    return addLeadingZeros(dayOfYear, token.length);
  },
  // Day of week
  E: function E(date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    switch (token) {
      case "E":
      case "EE":
      case "EEE":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function e(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      case "e":
        return String(localDayOfWeek);
      case "ee":
        return addLeadingZeros(localDayOfWeek, 2);
      case "eo":
        return localize.ordinalNumber(localDayOfWeek, {
          unit: "day"
        });
      case "eee":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function c(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      case "c":
        return String(localDayOfWeek);
      case "cc":
        return addLeadingZeros(localDayOfWeek, token.length);
      case "co":
        return localize.ordinalNumber(localDayOfWeek, {
          unit: "day"
        });
      case "ccc":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function i(date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      case "i":
        return String(isoDayOfWeek);
      case "ii":
        return addLeadingZeros(isoDayOfWeek, token.length);
      case "io":
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: "day"
        });
      case "iii":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function a(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function b(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    }
    switch (token) {
      case "b":
      case "bb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function B(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }
    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function h(date, token, localize) {
    if (token === "ho") {
      var hours = date.getUTCHours() % 12;
      if (hours === 0)
        hours = 12;
      return localize.ordinalNumber(hours, {
        unit: "hour"
      });
    }
    return lightFormatters.h(date, token);
  },
  // Hour [0-23]
  H: function H(date, token, localize) {
    if (token === "Ho") {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: "hour"
      });
    }
    return lightFormatters.H(date, token);
  },
  // Hour [0-11]
  K: function K(date, token, localize) {
    var hours = date.getUTCHours() % 12;
    if (token === "Ko") {
      return localize.ordinalNumber(hours, {
        unit: "hour"
      });
    }
    return addLeadingZeros(hours, token.length);
  },
  // Hour [1-24]
  k: function k(date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0)
      hours = 24;
    if (token === "ko") {
      return localize.ordinalNumber(hours, {
        unit: "hour"
      });
    }
    return addLeadingZeros(hours, token.length);
  },
  // Minute
  m: function m(date, token, localize) {
    if (token === "mo") {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: "minute"
      });
    }
    return lightFormatters.m(date, token);
  },
  // Second
  s: function s(date, token, localize) {
    if (token === "so") {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: "second"
      });
    }
    return lightFormatters.s(date, token);
  },
  // Fraction of second
  S: function S(date, token) {
    return lightFormatters.S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function X(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    if (timezoneOffset === 0) {
      return "Z";
    }
    switch (token) {
      case "X":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      case "XXXX":
      case "XX":
        return formatTimezone(timezoneOffset);
      case "XXXXX":
      case "XXX":
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function x(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      case "x":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      case "xxxx":
      case "xx":
        return formatTimezone(timezoneOffset);
      case "xxxxx":
      case "xxx":
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (GMT)
  O: function O(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      case "OOOO":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (specific non-location)
  z: function z(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      case "zzzz":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  // Seconds timestamp
  t: function t(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1e3);
    return addLeadingZeros(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function T(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return addLeadingZeros(timestamp, token.length);
  }
};
function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? "-" : "+";
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  var delimiter = dirtyDelimiter || "";
  return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? "-" : "+";
    return sign + addLeadingZeros(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, dirtyDelimiter);
}
function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || "";
  var sign = offset > 0 ? "-" : "+";
  var absOffset = Math.abs(offset);
  var hours = addLeadingZeros(Math.floor(absOffset / 60), 2);
  var minutes = addLeadingZeros(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}
/* harmony default export */ const format_formatters = (formatters_formatters);

;// ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js
var dateLongFormatter = function dateLongFormatter2(pattern, formatLong) {
  switch (pattern) {
    case "P":
      return formatLong.date({
        width: "short"
      });
    case "PP":
      return formatLong.date({
        width: "medium"
      });
    case "PPP":
      return formatLong.date({
        width: "long"
      });
    case "PPPP":
    default:
      return formatLong.date({
        width: "full"
      });
  }
};
var timeLongFormatter = function timeLongFormatter2(pattern, formatLong) {
  switch (pattern) {
    case "p":
      return formatLong.time({
        width: "short"
      });
    case "pp":
      return formatLong.time({
        width: "medium"
      });
    case "ppp":
      return formatLong.time({
        width: "long"
      });
    case "pppp":
    default:
      return formatLong.time({
        width: "full"
      });
  }
};
var dateTimeLongFormatter = function dateTimeLongFormatter2(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];
  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }
  var dateTimeFormat;
  switch (datePattern) {
    case "P":
      dateTimeFormat = formatLong.dateTime({
        width: "short"
      });
      break;
    case "PP":
      dateTimeFormat = formatLong.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      dateTimeFormat = formatLong.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      dateTimeFormat = formatLong.dateTime({
        width: "full"
      });
      break;
  }
  return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong)).replace("{{time}}", timeLongFormatter(timePattern, formatLong));
};
var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const format_longFormatters = (longFormatters);

;// ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

;// ./node_modules/date-fns/esm/_lib/protectedTokens/index.js
var protectedDayOfYearTokens = ["D", "DD"];
var protectedWeekYearTokens = ["YY", "YYYY"];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === "YYYY") {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === "YY") {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === "D") {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === "DD") {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  }
}

// EXTERNAL MODULE: ./node_modules/date-fns/esm/locale/en-US/index.js + 1 modules
var en_US = __webpack_require__(18322);
;// ./node_modules/date-fns/esm/_lib/defaultLocale/index.js

/* harmony default export */ const defaultLocale = (en_US/* default */.A);

;// ./node_modules/date-fns/esm/format/index.js











var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
function format(dirtyDate, dirtyFormatStr, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;
  (0,requiredArgs/* default */.A)(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var defaultOptions = (0,_lib_defaultOptions/* getDefaultOptions */.q)();
  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : defaultLocale;
  var firstWeekContainsDate = (0,toInteger/* default */.A)((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1);
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  }
  var weekStartsOn = (0,toInteger/* default */.A)((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0);
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  if (!locale.localize) {
    throw new RangeError("locale must contain localize property");
  }
  if (!locale.formatLong) {
    throw new RangeError("locale must contain formatLong property");
  }
  var originalDate = (0,toDate/* default */.A)(dirtyDate);
  if (!isValid(originalDate)) {
    throw new RangeError("Invalid time value");
  }
  var timezoneOffset = getTimezoneOffsetInMilliseconds(originalDate);
  var utcDate = subMilliseconds(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function(substring) {
    var firstCharacter = substring[0];
    if (firstCharacter === "p" || firstCharacter === "P") {
      var longFormatter = format_longFormatters[firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }
    return substring;
  }).join("").match(formattingTokensRegExp).map(function(substring) {
    if (substring === "''") {
      return "'";
    }
    var firstCharacter = substring[0];
    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }
    var formatter = format_formatters[firstCharacter];
    if (formatter) {
      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && isProtectedWeekYearToken(substring)) {
        throwProtectedError(substring, dirtyFormatStr, String(dirtyDate));
      }
      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && isProtectedDayOfYearToken(substring)) {
        throwProtectedError(substring, dirtyFormatStr, String(dirtyDate));
      }
      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }
    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
    }
    return substring;
  }).join("");
  return result;
}
function cleanEscapedString(input) {
  var matched = input.match(escapedStringRegExp);
  if (!matched) {
    return input;
  }
  return matched[1].replace(doubleQuoteRegExp, "'");
}

// EXTERNAL MODULE: ./node_modules/date-fns/_lib/cloneObject/index.js
var cloneObject = __webpack_require__(21871);
// EXTERNAL MODULE: ./node_modules/date-fns/_lib/toInteger/index.js
var _lib_toInteger = __webpack_require__(34316);
// EXTERNAL MODULE: ./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds/index.js
var _lib_getTimezoneOffsetInMilliseconds = __webpack_require__(18724);
;// ./node_modules/date-fns-tz/esm/_lib/tzTokenizeDate/index.js
function tzTokenizeDate(date, timeZone) {
  var dtf = getDateTimeFormat(timeZone);
  return dtf.formatToParts ? partsOffset(dtf, date) : hackyOffset(dtf, date);
}
var typeToPos = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function partsOffset(dtf, date) {
  try {
    var formatted = dtf.formatToParts(date);
    var filled = [];
    for (var i = 0; i < formatted.length; i++) {
      var pos = typeToPos[formatted[i].type];
      if (pos >= 0) {
        filled[pos] = parseInt(formatted[i].value, 10);
      }
    }
    return filled;
  } catch (error) {
    if (error instanceof RangeError) {
      return [NaN];
    }
    throw error;
  }
}
function hackyOffset(dtf, date) {
  var formatted = dtf.format(date).replace(/\u200E/g, "");
  var parsed = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(formatted);
  return [parsed[3], parsed[1], parsed[2], parsed[4], parsed[5], parsed[6]];
}
var dtfCache = {};
function getDateTimeFormat(timeZone) {
  if (!dtfCache[timeZone]) {
    var testDateFormatted = new Intl.DateTimeFormat("en-US", {
      hour12: false,
      timeZone: "America/New_York",
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }).format(new Date("2014-06-25T04:00:00.123Z"));
    var hourCycleSupported = testDateFormatted === "06/25/2014, 00:00:00" || testDateFormatted === "\u200E06\u200E/\u200E25\u200E/\u200E2014\u200E \u200E00\u200E:\u200E00\u200E:\u200E00";
    dtfCache[timeZone] = hourCycleSupported ? new Intl.DateTimeFormat("en-US", {
      hour12: false,
      timeZone,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }) : new Intl.DateTimeFormat("en-US", {
      hourCycle: "h23",
      timeZone,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }
  return dtfCache[timeZone];
}

;// ./node_modules/date-fns-tz/esm/_lib/newDateUTC/index.js
function newDateUTC(fullYear, month, day, hour, minute, second, millisecond) {
  var utcDate = new Date(0);
  utcDate.setUTCFullYear(fullYear, month, day);
  utcDate.setUTCHours(hour, minute, second, millisecond);
  return utcDate;
}

;// ./node_modules/date-fns-tz/esm/_lib/tzParseTimezone/index.js


var MILLISECONDS_IN_HOUR = 36e5;
var MILLISECONDS_IN_MINUTE = 6e4;
var patterns = {
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/
};
function tzParseTimezone(timezoneString, date, isUtcDate) {
  var token;
  var absoluteOffset;
  if (!timezoneString) {
    return 0;
  }
  token = patterns.timezoneZ.exec(timezoneString);
  if (token) {
    return 0;
  }
  var hours;
  token = patterns.timezoneHH.exec(timezoneString);
  if (token) {
    hours = parseInt(token[1], 10);
    if (!validateTimezone(hours)) {
      return NaN;
    }
    return -(hours * MILLISECONDS_IN_HOUR);
  }
  token = patterns.timezoneHHMM.exec(timezoneString);
  if (token) {
    hours = parseInt(token[1], 10);
    var minutes = parseInt(token[2], 10);
    if (!validateTimezone(hours, minutes)) {
      return NaN;
    }
    absoluteOffset = Math.abs(hours) * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE;
    return hours > 0 ? -absoluteOffset : absoluteOffset;
  }
  if (isValidTimezoneIANAString(timezoneString)) {
    date = new Date(date || Date.now());
    var utcDate = isUtcDate ? date : toUtcDate(date);
    var offset = calcOffset(utcDate, timezoneString);
    var fixedOffset = isUtcDate ? offset : fixOffset(date, offset, timezoneString);
    return -fixedOffset;
  }
  return NaN;
}
function toUtcDate(date) {
  return newDateUTC(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds()
  );
}
function calcOffset(date, timezoneString) {
  var tokens = tzTokenizeDate(date, timezoneString);
  var asUTC = newDateUTC(
    tokens[0],
    tokens[1] - 1,
    tokens[2],
    tokens[3] % 24,
    tokens[4],
    tokens[5],
    0
  ).getTime();
  var asTS = date.getTime();
  var over = asTS % 1e3;
  asTS -= over >= 0 ? over : 1e3 + over;
  return asUTC - asTS;
}
function fixOffset(date, offset, timezoneString) {
  var localTS = date.getTime();
  var utcGuess = localTS - offset;
  var o2 = calcOffset(new Date(utcGuess), timezoneString);
  if (offset === o2) {
    return offset;
  }
  utcGuess -= o2 - offset;
  var o3 = calcOffset(new Date(utcGuess), timezoneString);
  if (o2 === o3) {
    return o2;
  }
  return Math.max(o2, o3);
}
function validateTimezone(hours, minutes) {
  return -23 <= hours && hours <= 23 && (minutes == null || 0 <= minutes && minutes <= 59);
}
var validIANATimezoneCache = {};
function isValidTimezoneIANAString(timeZoneString) {
  if (validIANATimezoneCache[timeZoneString])
    return true;
  try {
    new Intl.DateTimeFormat(void 0, { timeZone: timeZoneString });
    validIANATimezoneCache[timeZoneString] = true;
    return true;
  } catch (error) {
    return false;
  }
}

;// ./node_modules/date-fns-tz/esm/_lib/tzPattern/index.js
var tzPattern = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/;
/* harmony default export */ const _lib_tzPattern = (tzPattern);

;// ./node_modules/date-fns-tz/esm/toDate/index.js




var toDate_MILLISECONDS_IN_HOUR = 36e5;
var toDate_MILLISECONDS_IN_MINUTE = 6e4;
var DEFAULT_ADDITIONAL_DIGITS = 2;
var toDate_patterns = {
  dateTimePattern: /^([0-9W+-]+)(T| )(.*)/,
  datePattern: /^([0-9W+-]+)(.*)/,
  plainTime: /:/,
  // year tokens
  YY: /^(\d{2})$/,
  YYY: [
    /^([+-]\d{2})$/,
    // 0 additional digits
    /^([+-]\d{3})$/,
    // 1 additional digit
    /^([+-]\d{4})$/
    // 2 additional digits
  ],
  YYYY: /^(\d{4})/,
  YYYYY: [
    /^([+-]\d{4})/,
    // 0 additional digits
    /^([+-]\d{5})/,
    // 1 additional digit
    /^([+-]\d{6})/
    // 2 additional digits
  ],
  // date tokens
  MM: /^-(\d{2})$/,
  DDD: /^-?(\d{3})$/,
  MMDD: /^-?(\d{2})-?(\d{2})$/,
  Www: /^-?W(\d{2})$/,
  WwwD: /^-?W(\d{2})-?(\d{1})$/,
  HH: /^(\d{2}([.,]\d*)?)$/,
  HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
  // time zone tokens (to identify the presence of a tz)
  timeZone: _lib_tzPattern
};
function toDate_toDate(argument, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  }
  if (argument === null) {
    return new Date(NaN);
  }
  var options = dirtyOptions || {};
  var additionalDigits = options.additionalDigits == null ? DEFAULT_ADDITIONAL_DIGITS : _lib_toInteger(options.additionalDigits);
  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  }
  if (argument instanceof Date || typeof argument === "object" && Object.prototype.toString.call(argument) === "[object Date]") {
    return new Date(argument.getTime());
  } else if (typeof argument === "number" || Object.prototype.toString.call(argument) === "[object Number]") {
    return new Date(argument);
  } else if (!(typeof argument === "string" || Object.prototype.toString.call(argument) === "[object String]")) {
    return new Date(NaN);
  }
  var dateStrings = splitDateString(argument);
  var parseYearResult = parseYear(dateStrings.date, additionalDigits);
  var year = parseYearResult.year;
  var restDateString = parseYearResult.restDateString;
  var date = parseDate(restDateString, year);
  if (isNaN(date)) {
    return new Date(NaN);
  }
  if (date) {
    var timestamp = date.getTime();
    var time = 0;
    var offset;
    if (dateStrings.time) {
      time = parseTime(dateStrings.time);
      if (isNaN(time)) {
        return new Date(NaN);
      }
    }
    if (dateStrings.timeZone || options.timeZone) {
      offset = tzParseTimezone(dateStrings.timeZone || options.timeZone, new Date(timestamp + time));
      if (isNaN(offset)) {
        return new Date(NaN);
      }
    } else {
      offset = _lib_getTimezoneOffsetInMilliseconds(new Date(timestamp + time));
      offset = _lib_getTimezoneOffsetInMilliseconds(new Date(timestamp + time + offset));
    }
    return new Date(timestamp + time + offset);
  } else {
    return new Date(NaN);
  }
}
function splitDateString(dateString) {
  var dateStrings = {};
  var parts = toDate_patterns.dateTimePattern.exec(dateString);
  var timeString;
  if (!parts) {
    parts = toDate_patterns.datePattern.exec(dateString);
    if (parts) {
      dateStrings.date = parts[1];
      timeString = parts[2];
    } else {
      dateStrings.date = null;
      timeString = dateString;
    }
  } else {
    dateStrings.date = parts[1];
    timeString = parts[3];
  }
  if (timeString) {
    var token = toDate_patterns.timeZone.exec(timeString);
    if (token) {
      dateStrings.time = timeString.replace(token[1], "");
      dateStrings.timeZone = token[1].trim();
    } else {
      dateStrings.time = timeString;
    }
  }
  return dateStrings;
}
function parseYear(dateString, additionalDigits) {
  var patternYYY = toDate_patterns.YYY[additionalDigits];
  var patternYYYYY = toDate_patterns.YYYYY[additionalDigits];
  var token;
  token = toDate_patterns.YYYY.exec(dateString) || patternYYYYY.exec(dateString);
  if (token) {
    var yearString = token[1];
    return {
      year: parseInt(yearString, 10),
      restDateString: dateString.slice(yearString.length)
    };
  }
  token = toDate_patterns.YY.exec(dateString) || patternYYY.exec(dateString);
  if (token) {
    var centuryString = token[1];
    return {
      year: parseInt(centuryString, 10) * 100,
      restDateString: dateString.slice(centuryString.length)
    };
  }
  return {
    year: null
  };
}
function parseDate(dateString, year) {
  if (year === null) {
    return null;
  }
  var token;
  var date;
  var month;
  var week;
  if (dateString.length === 0) {
    date = new Date(0);
    date.setUTCFullYear(year);
    return date;
  }
  token = toDate_patterns.MM.exec(dateString);
  if (token) {
    date = new Date(0);
    month = parseInt(token[1], 10) - 1;
    if (!validateDate(year, month)) {
      return new Date(NaN);
    }
    date.setUTCFullYear(year, month);
    return date;
  }
  token = toDate_patterns.DDD.exec(dateString);
  if (token) {
    date = new Date(0);
    var dayOfYear = parseInt(token[1], 10);
    if (!validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }
    date.setUTCFullYear(year, 0, dayOfYear);
    return date;
  }
  token = toDate_patterns.MMDD.exec(dateString);
  if (token) {
    date = new Date(0);
    month = parseInt(token[1], 10) - 1;
    var day = parseInt(token[2], 10);
    if (!validateDate(year, month, day)) {
      return new Date(NaN);
    }
    date.setUTCFullYear(year, month, day);
    return date;
  }
  token = toDate_patterns.Www.exec(dateString);
  if (token) {
    week = parseInt(token[1], 10) - 1;
    if (!validateWeekDate(year, week)) {
      return new Date(NaN);
    }
    return dayOfISOWeekYear(year, week);
  }
  token = toDate_patterns.WwwD.exec(dateString);
  if (token) {
    week = parseInt(token[1], 10) - 1;
    var dayOfWeek = parseInt(token[2], 10) - 1;
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }
    return dayOfISOWeekYear(year, week, dayOfWeek);
  }
  return null;
}
function parseTime(timeString) {
  var token;
  var hours;
  var minutes;
  token = toDate_patterns.HH.exec(timeString);
  if (token) {
    hours = parseFloat(token[1].replace(",", "."));
    if (!validateTime(hours)) {
      return NaN;
    }
    return hours % 24 * toDate_MILLISECONDS_IN_HOUR;
  }
  token = toDate_patterns.HHMM.exec(timeString);
  if (token) {
    hours = parseInt(token[1], 10);
    minutes = parseFloat(token[2].replace(",", "."));
    if (!validateTime(hours, minutes)) {
      return NaN;
    }
    return hours % 24 * toDate_MILLISECONDS_IN_HOUR + minutes * toDate_MILLISECONDS_IN_MINUTE;
  }
  token = toDate_patterns.HHMMSS.exec(timeString);
  if (token) {
    hours = parseInt(token[1], 10);
    minutes = parseInt(token[2], 10);
    var seconds = parseFloat(token[3].replace(",", "."));
    if (!validateTime(hours, minutes, seconds)) {
      return NaN;
    }
    return hours % 24 * toDate_MILLISECONDS_IN_HOUR + minutes * toDate_MILLISECONDS_IN_MINUTE + seconds * 1e3;
  }
  return null;
}
function dayOfISOWeekYear(isoWeekYear, week, day) {
  week = week || 0;
  day = day || 0;
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = week * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}
var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var DAYS_IN_MONTH_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
function validateDate(year, month, date) {
  if (month < 0 || month > 11) {
    return false;
  }
  if (date != null) {
    if (date < 1) {
      return false;
    }
    var isLeapYear = isLeapYearIndex(year);
    if (isLeapYear && date > DAYS_IN_MONTH_LEAP_YEAR[month]) {
      return false;
    }
    if (!isLeapYear && date > DAYS_IN_MONTH[month]) {
      return false;
    }
  }
  return true;
}
function validateDayOfYearDate(year, dayOfYear) {
  if (dayOfYear < 1) {
    return false;
  }
  var isLeapYear = isLeapYearIndex(year);
  if (isLeapYear && dayOfYear > 366) {
    return false;
  }
  if (!isLeapYear && dayOfYear > 365) {
    return false;
  }
  return true;
}
function validateWeekDate(year, week, day) {
  if (week < 0 || week > 52) {
    return false;
  }
  if (day != null && (day < 0 || day > 6)) {
    return false;
  }
  return true;
}
function validateTime(hours, minutes, seconds) {
  if (hours != null && (hours < 0 || hours >= 25)) {
    return false;
  }
  if (minutes != null && (minutes < 0 || minutes >= 60)) {
    return false;
  }
  if (seconds != null && (seconds < 0 || seconds >= 60)) {
    return false;
  }
  return true;
}

;// ./node_modules/date-fns-tz/esm/zonedTimeToUtc/index.js





function zonedTimeToUtc(date, timeZone, options) {
  if (typeof date === "string" && !date.match(_lib_tzPattern)) {
    var extendedOptions = cloneObject(options);
    extendedOptions.timeZone = timeZone;
    return toDate_toDate(date, extendedOptions);
  }
  var d = toDate_toDate(date, options);
  var utc = newDateUTC(
    d.getFullYear(),
    d.getMonth(),
    d.getDate(),
    d.getHours(),
    d.getMinutes(),
    d.getSeconds(),
    d.getMilliseconds()
  ).getTime();
  var offsetMilliseconds = tzParseTimezone(timeZone, new Date(utc));
  return new Date(utc + offsetMilliseconds);
}

;// ./node_modules/date-fns-tz/esm/utcToZonedTime/index.js


function utcToZonedTime(dirtyDate, timeZone, options) {
  var date = toDate_toDate(dirtyDate, options);
  var offsetMilliseconds = tzParseTimezone(timeZone, date, true);
  var d = new Date(date.getTime() - offsetMilliseconds);
  var resultDate = new Date(0);
  resultDate.setFullYear(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
  resultDate.setHours(d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds(), d.getUTCMilliseconds());
  return resultDate;
}

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(54894);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(47610);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/formatISO/index.js
var formatISO = __webpack_require__(50958);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(61535);
// EXTERNAL MODULE: ./node_modules/yup/es/index.js + 26 modules
var es = __webpack_require__(12083);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 14 modules
var react_redux_es = __webpack_require__(82437);
;// ./node_modules/@strapi/content-releases/dist/_chunks/App-jrh58sXY.mjs




















const RELEASE_SCHEMA = es/* object */.Ik().shape({
  name: es/* string */.Yj().trim().required(),
  scheduledAt: es/* string */.Yj().nullable(),
  isScheduled: es/* boolean */.zM().optional(),
  time: es/* string */.Yj().when("isScheduled", {
    is: true,
    then: es/* string */.Yj().trim().required(),
    otherwise: es/* string */.Yj().nullable()
  }),
  timezone: es/* string */.Yj().when("isScheduled", {
    is: true,
    then: es/* string */.Yj().required().nullable(),
    otherwise: es/* string */.Yj().nullable()
  }),
  date: es/* string */.Yj().when("isScheduled", {
    is: true,
    then: es/* string */.Yj().required().nullable(),
    otherwise: es/* string */.Yj().nullable()
  })
}).required().noUnknown();
const ReleaseModal = ({
  handleClose,
  handleSubmit,
  initialValues,
  isLoading = false
}) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const { pathname } = (0,react_router/* useLocation */.zy)();
  const isCreatingRelease = pathname === `/plugins/${index_PiOGBETy.p}`;
  const { timezoneList, systemTimezone = { value: "UTC+00:00-Africa/Abidjan " } } = getTimezones(
    initialValues.scheduledAt ? new Date(initialValues.scheduledAt) : /* @__PURE__ */ new Date()
  );
  const getScheduledTimestamp = (values) => {
    const { date, time, timezone } = values;
    if (!date || !time || !timezone)
      return null;
    const timezoneWithoutOffset = timezone.split("&")[1];
    return zonedTimeToUtc(`${date} ${time}`, timezoneWithoutOffset);
  };
  const getTimezoneWithOffset = () => {
    const currentTimezone = timezoneList.find(
      (timezone) => timezone.value.split("&")[1] === initialValues.timezone
    );
    return currentTimezone?.value || systemTimezone.value;
  };
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)(ModalLayout/* ModalLayout */.k, { onClose: handleClose, labelledBy: "title", children: [
    /* @__PURE__ */ (0,jsx_runtime.jsx)(ModalHeader/* ModalHeader */.r, { children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.o, { id: "title", fontWeight: "bold", textColor: "neutral800", children: formatMessage(
      {
        id: "content-releases.modal.title",
        defaultMessage: "{isCreatingRelease, select, true {New release} other {Edit release}}"
      },
      { isCreatingRelease }
    ) }) }),
    /* @__PURE__ */ (0,jsx_runtime.jsx)(
      formik_esm/* Formik */.l1,
      {
        onSubmit: (values) => {
          handleSubmit({
            ...values,
            timezone: values.timezone ? values.timezone.split("&")[1] : null,
            scheduledAt: values.isScheduled ? getScheduledTimestamp(values) : null
          });
        },
        initialValues: {
          ...initialValues,
          timezone: initialValues.timezone ? getTimezoneWithOffset() : systemTimezone.value
        },
        validationSchema: RELEASE_SCHEMA,
        validateOnChange: false,
        children: ({ values, errors, handleChange, setFieldValue }) => /* @__PURE__ */ (0,jsx_runtime.jsxs)(formik_esm/* Form */.lV, { children: [
          /* @__PURE__ */ (0,jsx_runtime.jsx)(ModalBody/* ModalBody */.c, { children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(Flex/* Flex */.s, { direction: "column", alignItems: "stretch", gap: 6, children: [
            /* @__PURE__ */ (0,jsx_runtime.jsx)(
              TextInput/* TextInput */.k,
              {
                label: formatMessage({
                  id: "content-releases.modal.form.input.label.release-name",
                  defaultMessage: "Name"
                }),
                name: "name",
                value: values.name,
                error: errors.name,
                onChange: handleChange,
                required: true
              }
            ),
            /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* Box */.a, { width: "max-content", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
              Checkbox/* Checkbox */.S,
              {
                name: "isScheduled",
                value: values.isScheduled,
                onChange: (event) => {
                  setFieldValue("isScheduled", event.target.checked);
                  if (!event.target.checked) {
                    setFieldValue("date", null);
                    setFieldValue("time", "");
                    setFieldValue("timezone", null);
                  } else {
                    setFieldValue("date", initialValues.date);
                    setFieldValue("time", initialValues.time);
                    setFieldValue("timezone", initialValues.timezone ?? systemTimezone?.value);
                  }
                },
                children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
                  Typography/* Typography */.o,
                  {
                    textColor: values.isScheduled ? "primary600" : "neutral800",
                    fontWeight: values.isScheduled ? "semiBold" : "regular",
                    children: formatMessage({
                      id: "modal.form.input.label.schedule-release",
                      defaultMessage: "Schedule release"
                    })
                  }
                )
              }
            ) }),
            values.isScheduled && /* @__PURE__ */ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [
              /* @__PURE__ */ (0,jsx_runtime.jsxs)(Flex/* Flex */.s, { gap: 4, alignItems: "start", children: [
                /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* Box */.a, { width: "100%", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
                  DatePicker/* DatePicker */.l,
                  {
                    label: formatMessage({
                      id: "content-releases.modal.form.input.label.date",
                      defaultMessage: "Date"
                    }),
                    name: "date",
                    error: errors.date,
                    onChange: (date) => {
                      const isoFormatDate = date ? (0,formatISO/* default */.A)(date, { representation: "date" }) : null;
                      setFieldValue("date", isoFormatDate);
                    },
                    clearLabel: formatMessage({
                      id: "content-releases.modal.form.input.clearLabel",
                      defaultMessage: "Clear"
                    }),
                    onClear: () => {
                      setFieldValue("date", null);
                    },
                    selectedDate: values.date || void 0,
                    required: true,
                    minDate: utcToZonedTime(/* @__PURE__ */ new Date(), values.timezone.split("&")[1])
                  }
                ) }),
                /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* Box */.a, { width: "100%", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
                  TimePicker/* TimePicker */.A,
                  {
                    label: formatMessage({
                      id: "content-releases.modal.form.input.label.time",
                      defaultMessage: "Time"
                    }),
                    name: "time",
                    error: errors.time,
                    onChange: (time) => {
                      setFieldValue("time", time);
                    },
                    clearLabel: formatMessage({
                      id: "content-releases.modal.form.input.clearLabel",
                      defaultMessage: "Clear"
                    }),
                    onClear: () => {
                      setFieldValue("time", "");
                    },
                    value: values.time || void 0,
                    required: true
                  }
                ) })
              ] }),
              /* @__PURE__ */ (0,jsx_runtime.jsx)(TimezoneComponent, { timezoneOptions: timezoneList })
            ] })
          ] }) }),
          /* @__PURE__ */ (0,jsx_runtime.jsx)(
            ModalFooter/* ModalFooter */.j,
            {
              startActions: /* @__PURE__ */ (0,jsx_runtime.jsx)(Button/* Button */.$, { onClick: handleClose, variant: "tertiary", name: "cancel", children: formatMessage({ id: "cancel", defaultMessage: "Cancel" }) }),
              endActions: /* @__PURE__ */ (0,jsx_runtime.jsx)(Button/* Button */.$, { name: "submit", loading: isLoading, type: "submit", children: formatMessage(
                {
                  id: "content-releases.modal.form.button.submit",
                  defaultMessage: "{isCreatingRelease, select, true {Continue} other {Save}}"
                },
                { isCreatingRelease }
              ) })
            }
          )
        ] })
      }
    )
  ] });
};
const getTimezones = (selectedDate) => {
  const timezoneList = Intl.supportedValuesOf("timeZone").map((timezone) => {
    const utcOffset = (0,index_PiOGBETy.g)(timezone, selectedDate);
    return { offset: utcOffset, value: `${utcOffset}&${timezone}` };
  });
  const systemTimezone = timezoneList.find(
    (timezone) => timezone.value.split("&")[1] === Intl.DateTimeFormat().resolvedOptions().timeZone
  );
  return { timezoneList, systemTimezone };
};
const TimezoneComponent = ({ timezoneOptions }) => {
  const { values, errors, setFieldValue } = (0,formik_esm/* useFormikContext */.j7)();
  const { formatMessage } = (0,useIntl/* default */.A)();
  const [timezoneList, setTimezoneList] = react.useState(timezoneOptions);
  react.useEffect(() => {
    if (values.date) {
      const { timezoneList: timezoneList2 } = getTimezones(new Date(values.date));
      setTimezoneList(timezoneList2);
      const updatedTimezone = values.timezone && timezoneList2.find((tz) => tz.value.split("&")[1] === values.timezone.split("&")[1]);
      if (updatedTimezone) {
        setFieldValue("timezone", updatedTimezone.value);
      }
    }
  }, [setFieldValue, values.date, values.timezone]);
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    Combobox/* Combobox */.G3,
    {
      label: formatMessage({
        id: "content-releases.modal.form.input.label.timezone",
        defaultMessage: "Timezone"
      }),
      autocomplete: { type: "list", filter: "contains" },
      name: "timezone",
      value: values.timezone || void 0,
      textValue: values.timezone ? values.timezone.replace(/&/, " ") : void 0,
      onChange: (timezone) => {
        setFieldValue("timezone", timezone);
      },
      onTextValueChange: (timezone) => {
        setFieldValue("timezone", timezone);
      },
      onClear: () => {
        setFieldValue("timezone", "");
      },
      error: errors.timezone,
      required: true,
      children: timezoneList.map((timezone) => /* @__PURE__ */ (0,jsx_runtime.jsx)(ComboboxOption/* ComboboxOption */.j, { value: timezone.value, children: timezone.value.replace(/&/, " ") }, timezone.value))
    }
  );
};
const LinkCard = (0,styled_components_browser_esm/* default */.Ay)((0,Link_Link/* Link */.N))`
  display: block;
`;
const RelativeTime = (0,styled_components_browser_esm/* default */.Ay)((0,dist/* RelativeTime */.sR))`
  display: inline-block;
  &::first-letter {
    text-transform: uppercase;
  }
`;
const getBadgeProps = (status) => {
  let color;
  switch (status) {
    case "ready":
      color = "success";
      break;
    case "blocked":
      color = "warning";
      break;
    case "failed":
      color = "danger";
      break;
    case "done":
      color = "primary";
      break;
    case "empty":
    default:
      color = "neutral";
  }
  return {
    textColor: `${color}600`,
    backgroundColor: `${color}100`,
    borderColor: `${color}200`
  };
};
const ReleasesGrid = ({ sectionTitle, releases = [], isError = false }) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  if (isError) {
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(dist/* AnErrorOccurred */.hH, {});
  }
  if (releases?.length === 0) {
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(
      EmptyStateLayout/* EmptyStateLayout */.p,
      {
        content: formatMessage(
          {
            id: "content-releases.page.Releases.tab.emptyEntries",
            defaultMessage: "No releases"
          },
          {
            target: sectionTitle
          }
        ),
        icon: /* @__PURE__ */ (0,jsx_runtime.jsx)(EmptyDocuments/* default */.A, { width: "10rem" })
      }
    );
  }
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(Grid/* Grid */.x, { gap: 4, children: releases.map(({ id, name, scheduledAt, status }) => /* @__PURE__ */ (0,jsx_runtime.jsx)(GridItem/* GridItem */.E, { col: 3, s: 6, xs: 12, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(LinkCard, { href: `content-releases/${id}`, isExternal: false, children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(
    Flex/* Flex */.s,
    {
      direction: "column",
      justifyContent: "space-between",
      padding: 4,
      hasRadius: true,
      background: "neutral0",
      shadow: "tableShadow",
      height: "100%",
      width: "100%",
      alignItems: "start",
      gap: 4,
      children: [
        /* @__PURE__ */ (0,jsx_runtime.jsxs)(Flex/* Flex */.s, { direction: "column", alignItems: "start", gap: 1, children: [
          /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.o, { as: "h3", variant: "delta", fontWeight: "bold", children: name }),
          /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.o, { variant: "pi", textColor: "neutral600", children: scheduledAt ? /* @__PURE__ */ (0,jsx_runtime.jsx)(RelativeTime, { timestamp: new Date(scheduledAt) }) : formatMessage({
            id: "content-releases.pages.Releases.not-scheduled",
            defaultMessage: "Not scheduled"
          }) })
        ] }),
        /* @__PURE__ */ (0,jsx_runtime.jsx)(Badge/* Badge */.E, { ...getBadgeProps(status), children: status })
      ]
    }
  ) }) }, id)) });
};
const StyledAlert = (0,styled_components_browser_esm/* default */.Ay)((0,Alert/* Alert */.F))`
  button {
    display: none;
  }
  p + div {
    margin-left: auto;
  }
`;
const INITIAL_FORM_VALUES = {
  name: "",
  date: null,
  time: "",
  isScheduled: true,
  scheduledAt: null,
  timezone: null
};
const ReleasesPage = () => {
  const tabRef = react.useRef(null);
  const location = (0,react_router/* useLocation */.zy)();
  const [releaseModalShown, setReleaseModalShown] = react.useState(false);
  const toggleNotification = (0,dist/* useNotification */.hN)();
  const { formatMessage } = (0,useIntl/* default */.A)();
  const { push, replace } = (0,react_router/* useHistory */.W6)();
  const { formatAPIError } = (0,dist/* useAPIErrorHandler */.wq)();
  const [{ query }, setQuery] = (0,dist/* useQueryParams */.sq)();
  const response = (0,index_PiOGBETy.u)(query);
  const [createRelease, { isLoading: isSubmittingForm }] = (0,index_PiOGBETy.a)();
  const { getFeature } = (0,admin/* useLicenseLimits */.bO)();
  const { maximumReleases = 3 } = getFeature("cms-content-releases");
  const { trackUsage } = (0,dist/* useTracking */.z1)();
  const { isLoading, isSuccess, isError } = response;
  const activeTab = response?.currentData?.meta?.activeTab || "pending";
  const activeTabIndex = ["pending", "done"].indexOf(activeTab);
  react.useEffect(() => {
    if (location?.state?.errors) {
      toggleNotification({
        type: "warning",
        title: formatMessage({
          id: "content-releases.pages.Releases.notification.error.title",
          defaultMessage: "Your request could not be processed."
        }),
        message: formatMessage({
          id: "content-releases.pages.Releases.notification.error.message",
          defaultMessage: "Please try again or open another release."
        })
      });
      replace({ state: null });
    }
  }, [formatMessage, location?.state?.errors, replace, toggleNotification]);
  react.useEffect(() => {
    if (tabRef.current) {
      tabRef.current._handlers.setSelectedTabIndex(activeTabIndex);
    }
  }, [activeTabIndex]);
  const toggleAddReleaseModal = () => {
    setReleaseModalShown((prev) => !prev);
  };
  if (isLoading) {
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(Main/* Main */.g, { "aria-busy": isLoading, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(dist/* LoadingIndicatorPage */.Bl, {}) });
  }
  const totalPendingReleases = isSuccess && response.currentData?.meta?.pendingReleasesCount || 0;
  const hasReachedMaximumPendingReleases = totalPendingReleases >= maximumReleases;
  const handleTabChange = (index) => {
    setQuery({
      ...query,
      page: 1,
      pageSize: response?.currentData?.meta?.pagination?.pageSize || 16,
      filters: {
        releasedAt: {
          $notNull: index === 0 ? false : true
        }
      }
    });
  };
  const handleAddRelease = async ({ name, scheduledAt, timezone }) => {
    const response2 = await createRelease({
      name,
      scheduledAt,
      timezone
    });
    if ("data" in response2) {
      toggleNotification({
        type: "success",
        message: formatMessage({
          id: "content-releases.modal.release-created-notification-success",
          defaultMessage: "Release created."
        })
      });
      trackUsage("didCreateRelease");
      push(`/plugins/content-releases/${response2.data.data.id}`);
    } else if ((0,index_PiOGBETy.i)(response2.error)) {
      toggleNotification({
        type: "warning",
        message: formatAPIError(response2.error)
      });
    } else {
      toggleNotification({
        type: "warning",
        message: formatMessage({ id: "notification.error", defaultMessage: "An error occurred" })
      });
    }
  };
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)(Main/* Main */.g, { "aria-busy": isLoading, children: [
    /* @__PURE__ */ (0,jsx_runtime.jsx)(
      HeaderLayout/* HeaderLayout */.Q,
      {
        title: formatMessage({
          id: "content-releases.pages.Releases.title",
          defaultMessage: "Releases"
        }),
        subtitle: formatMessage({
          id: "content-releases.pages.Releases.header-subtitle",
          defaultMessage: "Create and manage content updates"
        }),
        primaryAction: /* @__PURE__ */ (0,jsx_runtime.jsx)(dist/* CheckPermissions */.d4, { permissions: index_PiOGBETy.P.create, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
          Button/* Button */.$,
          {
            startIcon: /* @__PURE__ */ (0,jsx_runtime.jsx)(Plus/* default */.A, {}),
            onClick: toggleAddReleaseModal,
            disabled: hasReachedMaximumPendingReleases,
            children: formatMessage({
              id: "content-releases.header.actions.add-release",
              defaultMessage: "New release"
            })
          }
        ) })
      }
    ),
    /* @__PURE__ */ (0,jsx_runtime.jsx)(ContentLayout/* ContentLayout */.s, { children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [
      hasReachedMaximumPendingReleases && /* @__PURE__ */ (0,jsx_runtime.jsx)(
        StyledAlert,
        {
          marginBottom: 6,
          action: /* @__PURE__ */ (0,jsx_runtime.jsx)(Link_Link/* Link */.N, { href: "https://strapi.io/pricing-cloud", isExternal: true, children: formatMessage({
            id: "content-releases.pages.Releases.max-limit-reached.action",
            defaultMessage: "Explore plans"
          }) }),
          title: formatMessage(
            {
              id: "content-releases.pages.Releases.max-limit-reached.title",
              defaultMessage: "You have reached the {number} pending {number, plural, one {release} other {releases}} limit."
            },
            { number: maximumReleases }
          ),
          onClose: () => {
          },
          closeLabel: "",
          children: formatMessage({
            id: "content-releases.pages.Releases.max-limit-reached.message",
            defaultMessage: "Upgrade to manage an unlimited number of releases."
          })
        }
      ),
      /* @__PURE__ */ (0,jsx_runtime.jsxs)(
        TabGroup/* TabGroup */.f,
        {
          label: formatMessage({
            id: "content-releases.pages.Releases.tab-group.label",
            defaultMessage: "Releases list"
          }),
          variant: "simple",
          initialSelectedTabIndex: activeTabIndex,
          onTabChange: handleTabChange,
          ref: tabRef,
          children: [
            /* @__PURE__ */ (0,jsx_runtime.jsxs)(Box/* Box */.a, { paddingBottom: 8, children: [
              /* @__PURE__ */ (0,jsx_runtime.jsxs)(Tabs/* Tabs */.t, { children: [
                /* @__PURE__ */ (0,jsx_runtime.jsx)(Tabs/* Tab */.o, { children: formatMessage(
                  {
                    id: "content-releases.pages.Releases.tab.pending",
                    defaultMessage: "Pending ({count})"
                  },
                  {
                    count: totalPendingReleases
                  }
                ) }),
                /* @__PURE__ */ (0,jsx_runtime.jsx)(Tabs/* Tab */.o, { children: formatMessage({
                  id: "content-releases.pages.Releases.tab.done",
                  defaultMessage: "Done"
                }) })
              ] }),
              /* @__PURE__ */ (0,jsx_runtime.jsx)(Divider/* Divider */.c, {})
            ] }),
            /* @__PURE__ */ (0,jsx_runtime.jsxs)(TabPanels/* TabPanels */.T, { children: [
              /* @__PURE__ */ (0,jsx_runtime.jsx)(TabPanels/* TabPanel */.K, { children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
                ReleasesGrid,
                {
                  sectionTitle: "pending",
                  releases: response?.currentData?.data,
                  isError
                }
              ) }),
              /* @__PURE__ */ (0,jsx_runtime.jsx)(TabPanels/* TabPanel */.K, { children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
                ReleasesGrid,
                {
                  sectionTitle: "done",
                  releases: response?.currentData?.data,
                  isError
                }
              ) })
            ] })
          ]
        }
      ),
      response.currentData?.meta?.pagination?.total ? /* @__PURE__ */ (0,jsx_runtime.jsxs)(Flex/* Flex */.s, { paddingTop: 4, alignItems: "flex-end", justifyContent: "space-between", children: [
        /* @__PURE__ */ (0,jsx_runtime.jsx)(
          dist/* PageSizeURLQuery */._u,
          {
            options: ["8", "16", "32", "64"],
            defaultValue: response?.currentData?.meta?.pagination?.pageSize.toString()
          }
        ),
        /* @__PURE__ */ (0,jsx_runtime.jsx)(
          dist/* PaginationURLQuery */.W7,
          {
            pagination: {
              pageCount: response?.currentData?.meta?.pagination?.pageCount || 0
            }
          }
        )
      ] }) : null
    ] }) }),
    releaseModalShown && /* @__PURE__ */ (0,jsx_runtime.jsx)(
      ReleaseModal,
      {
        handleClose: toggleAddReleaseModal,
        handleSubmit: handleAddRelease,
        isLoading: isSubmittingForm,
        initialValues: INITIAL_FORM_VALUES
      }
    )
  ] });
};
const ReleaseInfoWrapper = (0,styled_components_browser_esm/* default */.Ay)((0,Flex/* Flex */.s))`
  align-self: stretch;
  border-bottom-right-radius: ${({ theme }) => theme.borderRadius};
  border-bottom-left-radius: ${({ theme }) => theme.borderRadius};
  border-top: 1px solid ${({ theme }) => theme.colors.neutral150};
`;
const StyledMenuItem = (0,styled_components_browser_esm/* default */.Ay)(Menu/* Item */.q7)`
  svg path {
    fill: ${({ theme, disabled }) => disabled && theme.colors.neutral500};
  }
  span {
    color: ${({ theme, disabled }) => disabled && theme.colors.neutral500};
  }

  &:hover {
    background: ${({ theme, variant = "neutral" }) => theme.colors[`${variant}100`]};
  }
`;
const PencilIcon = (0,styled_components_browser_esm/* default */.Ay)((0,Pencil/* default */.A))`
  width: ${({ theme }) => theme.spaces[3]};
  height: ${({ theme }) => theme.spaces[3]};
  path {
    fill: ${({ theme }) => theme.colors.neutral600};
  }
`;
const TrashIcon = (0,styled_components_browser_esm/* default */.Ay)((0,Trash/* default */.A))`
  width: ${({ theme }) => theme.spaces[3]};
  height: ${({ theme }) => theme.spaces[3]};
  path {
    fill: ${({ theme }) => theme.colors.danger600};
  }
`;
const TypographyMaxWidth = (0,styled_components_browser_esm/* default */.Ay)((0,Typography/* Typography */.o))`
  max-width: 300px;
`;
const EntryValidationText = ({ action, schema, components, entry }) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const { validate } = (0,admin/* unstable_useDocument */.CQ)();
  const { errors } = validate(entry, {
    contentType: schema,
    components,
    isCreatingEntry: false
  });
  if (Object.keys(errors).length > 0) {
    const validationErrorsMessages = Object.entries(errors).map(
      ([key, value]) => formatMessage(
        { id: `${value.id}.withField`, defaultMessage: value.defaultMessage },
        { field: key }
      )
    ).join(" ");
    return /* @__PURE__ */ (0,jsx_runtime.jsxs)(Flex/* Flex */.s, { gap: 2, children: [
      /* @__PURE__ */ (0,jsx_runtime.jsx)(Icon/* Icon */.I, { color: "danger600", as: CrossCircle/* default */.A }),
      /* @__PURE__ */ (0,jsx_runtime.jsx)(Tooltip/* Tooltip */.m, { description: validationErrorsMessages, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(TypographyMaxWidth, { textColor: "danger600", variant: "omega", fontWeight: "semiBold", ellipsis: true, children: validationErrorsMessages }) })
    ] });
  }
  if (action == "publish") {
    return /* @__PURE__ */ (0,jsx_runtime.jsxs)(Flex/* Flex */.s, { gap: 2, children: [
      /* @__PURE__ */ (0,jsx_runtime.jsx)(Icon/* Icon */.I, { color: "success600", as: CheckCircle/* default */.A }),
      entry.publishedAt ? /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.o, { textColor: "success600", fontWeight: "bold", children: formatMessage({
        id: "content-releases.pages.ReleaseDetails.entry-validation.already-published",
        defaultMessage: "Already published"
      }) }) : /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.o, { children: formatMessage({
        id: "content-releases.pages.ReleaseDetails.entry-validation.ready-to-publish",
        defaultMessage: "Ready to publish"
      }) })
    ] });
  }
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)(Flex/* Flex */.s, { gap: 2, children: [
    /* @__PURE__ */ (0,jsx_runtime.jsx)(Icon/* Icon */.I, { color: "success600", as: CheckCircle/* default */.A }),
    !entry.publishedAt ? /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.o, { textColor: "success600", fontWeight: "bold", children: formatMessage({
      id: "content-releases.pages.ReleaseDetails.entry-validation.already-unpublished",
      defaultMessage: "Already unpublished"
    }) }) : /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.o, { children: formatMessage({
      id: "content-releases.pages.ReleaseDetails.entry-validation.ready-to-unpublish",
      defaultMessage: "Ready to unpublish"
    }) })
  ] });
};
const ReleaseDetailsLayout = ({
  toggleEditReleaseModal,
  toggleWarningSubmit,
  children
}) => {
  const { formatMessage, formatDate, formatTime } = (0,useIntl/* default */.A)();
  const { releaseId } = (0,react_router/* useParams */.g)();
  const {
    data,
    isLoading: isLoadingDetails,
    isError,
    error
  } = (0,index_PiOGBETy.b)({ id: releaseId });
  const [publishRelease, { isLoading: isPublishing }] = (0,index_PiOGBETy.e)();
  const toggleNotification = (0,dist/* useNotification */.hN)();
  const { formatAPIError } = (0,dist/* useAPIErrorHandler */.wq)();
  const {
    allowedActions: { canUpdate, canDelete }
  } = (0,dist/* useRBAC */.ec)(index_PiOGBETy.P);
  const dispatch = (0,index_PiOGBETy.f)();
  const { trackUsage } = (0,dist/* useTracking */.z1)();
  const release = data?.data;
  const handlePublishRelease = async () => {
    const response = await publishRelease({ id: releaseId });
    if ("data" in response) {
      toggleNotification({
        type: "success",
        message: formatMessage({
          id: "content-releases.pages.ReleaseDetails.publish-notification-success",
          defaultMessage: "Release was published successfully."
        })
      });
      const { totalEntries: totalEntries2, totalPublishedEntries, totalUnpublishedEntries } = response.data.meta;
      trackUsage("didPublishRelease", {
        totalEntries: totalEntries2,
        totalPublishedEntries,
        totalUnpublishedEntries
      });
    } else if ((0,index_PiOGBETy.i)(response.error)) {
      toggleNotification({
        type: "warning",
        message: formatAPIError(response.error)
      });
    } else {
      toggleNotification({
        type: "warning",
        message: formatMessage({ id: "notification.error", defaultMessage: "An error occurred" })
      });
    }
  };
  const handleRefresh = () => {
    dispatch(
      index_PiOGBETy.r.util.invalidateTags([
        { type: "ReleaseAction", id: "LIST" },
        { type: "Release", id: releaseId }
      ])
    );
  };
  const getCreatedByUser = () => {
    if (!release?.createdBy) {
      return null;
    }
    if (release.createdBy.username) {
      return release.createdBy.username;
    }
    if (release.createdBy.firstname) {
      return `${release.createdBy.firstname} ${release.createdBy.lastname || ""}`.trim();
    }
    return release.createdBy.email;
  };
  if (isLoadingDetails) {
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(Main/* Main */.g, { "aria-busy": isLoadingDetails, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(dist/* LoadingIndicatorPage */.Bl, {}) });
  }
  if (isError || !release) {
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(
      react_router/* Redirect */.rd,
      {
        to: {
          pathname: "/plugins/content-releases",
          state: {
            errors: [
              {
                code: error?.code
              }
            ]
          }
        }
      }
    );
  }
  const totalEntries = release.actions.meta.count || 0;
  const hasCreatedByUser = Boolean(getCreatedByUser());
  const isScheduled = release.scheduledAt && release.timezone;
  const numberOfEntriesText = formatMessage(
    {
      id: "content-releases.pages.Details.header-subtitle",
      defaultMessage: "{number, plural, =0 {No entries} one {# entry} other {# entries}}"
    },
    { number: totalEntries }
  );
  const scheduledText = isScheduled ? formatMessage(
    {
      id: "content-releases.pages.ReleaseDetails.header-subtitle.scheduled",
      defaultMessage: "Scheduled for {date} at {time} ({offset})"
    },
    {
      date: formatDate(new Date(release.scheduledAt), {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: release.timezone
      }),
      time: formatTime(new Date(release.scheduledAt), {
        timeZone: release.timezone,
        hourCycle: "h23"
      }),
      offset: (0,index_PiOGBETy.g)(release.timezone, new Date(release.scheduledAt))
    }
  ) : "";
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)(Main/* Main */.g, { "aria-busy": isLoadingDetails, children: [
    /* @__PURE__ */ (0,jsx_runtime.jsx)(
      HeaderLayout/* HeaderLayout */.Q,
      {
        title: release.name,
        subtitle: /* @__PURE__ */ (0,jsx_runtime.jsxs)(Flex/* Flex */.s, { gap: 2, lineHeight: 6, children: [
          /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.o, { textColor: "neutral600", variant: "epsilon", children: numberOfEntriesText + (isScheduled ? ` - ${scheduledText}` : "") }),
          /* @__PURE__ */ (0,jsx_runtime.jsx)(Badge/* Badge */.E, { ...getBadgeProps(release.status), children: release.status })
        ] }),
        navigationAction: /* @__PURE__ */ (0,jsx_runtime.jsx)(Link/* Link */.N, { startIcon: /* @__PURE__ */ (0,jsx_runtime.jsx)(ArrowLeft/* default */.A, {}), to: "/plugins/content-releases", children: formatMessage({
          id: "global.back",
          defaultMessage: "Back"
        }) }),
        primaryAction: !release.releasedAt && /* @__PURE__ */ (0,jsx_runtime.jsxs)(Flex/* Flex */.s, { gap: 2, children: [
          /* @__PURE__ */ (0,jsx_runtime.jsxs)(Menu/* Root */.bL, { children: [
            /* @__PURE__ */ (0,jsx_runtime.jsx)(
              Menu/* Trigger */.l9,
              {
                as: IconButton/* IconButton */.K,
                paddingLeft: 2,
                paddingRight: 2,
                "aria-label": formatMessage({
                  id: "content-releases.header.actions.open-release-actions",
                  defaultMessage: "Release edit and delete menu"
                }),
                icon: /* @__PURE__ */ (0,jsx_runtime.jsx)(More/* default */.A, {}),
                variant: "tertiary"
              }
            ),
            /* @__PURE__ */ (0,jsx_runtime.jsxs)(Menu/* Content */.UC, { top: 1, popoverPlacement: "bottom-end", children: [
              /* @__PURE__ */ (0,jsx_runtime.jsxs)(
                Flex/* Flex */.s,
                {
                  alignItems: "center",
                  justifyContent: "center",
                  direction: "column",
                  padding: 1,
                  width: "100%",
                  children: [
                    /* @__PURE__ */ (0,jsx_runtime.jsx)(StyledMenuItem, { disabled: !canUpdate, onSelect: toggleEditReleaseModal, children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(Flex/* Flex */.s, { alignItems: "center", gap: 2, hasRadius: true, width: "100%", children: [
                      /* @__PURE__ */ (0,jsx_runtime.jsx)(PencilIcon, {}),
                      /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.o, { ellipsis: true, children: formatMessage({
                        id: "content-releases.header.actions.edit",
                        defaultMessage: "Edit"
                      }) })
                    ] }) }),
                    /* @__PURE__ */ (0,jsx_runtime.jsx)(
                      StyledMenuItem,
                      {
                        disabled: !canDelete,
                        onSelect: toggleWarningSubmit,
                        variant: "danger",
                        children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(Flex/* Flex */.s, { alignItems: "center", gap: 2, hasRadius: true, width: "100%", children: [
                          /* @__PURE__ */ (0,jsx_runtime.jsx)(TrashIcon, {}),
                          /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.o, { ellipsis: true, textColor: "danger600", children: formatMessage({
                            id: "content-releases.header.actions.delete",
                            defaultMessage: "Delete"
                          }) })
                        ] })
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ (0,jsx_runtime.jsxs)(
                ReleaseInfoWrapper,
                {
                  direction: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  gap: 1,
                  padding: 5,
                  children: [
                    /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.o, { variant: "pi", fontWeight: "bold", children: formatMessage({
                      id: "content-releases.header.actions.created",
                      defaultMessage: "Created"
                    }) }),
                    /* @__PURE__ */ (0,jsx_runtime.jsxs)(Typography/* Typography */.o, { variant: "pi", color: "neutral300", children: [
                      /* @__PURE__ */ (0,jsx_runtime.jsx)(dist/* RelativeTime */.sR, { timestamp: new Date(release.createdAt) }),
                      formatMessage(
                        {
                          id: "content-releases.header.actions.created.description",
                          defaultMessage: "{hasCreatedByUser, select, true { by {createdBy}} other { by deleted user}}"
                        },
                        { createdBy: getCreatedByUser(), hasCreatedByUser }
                      )
                    ] })
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ (0,jsx_runtime.jsx)(Button/* Button */.$, { size: "S", variant: "tertiary", onClick: handleRefresh, children: formatMessage({
            id: "content-releases.header.actions.refresh",
            defaultMessage: "Refresh"
          }) }),
          /* @__PURE__ */ (0,jsx_runtime.jsx)(dist/* CheckPermissions */.d4, { permissions: index_PiOGBETy.P.publish, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
            Button/* Button */.$,
            {
              size: "S",
              variant: "default",
              onClick: handlePublishRelease,
              loading: isPublishing,
              disabled: release.actions.meta.count === 0,
              children: formatMessage({
                id: "content-releases.header.actions.publish",
                defaultMessage: "Publish"
              })
            }
          ) })
        ] })
      }
    ),
    children
  ] });
};
const GROUP_BY_OPTIONS = ["contentType", "locale", "action"];
const GROUP_BY_OPTIONS_NO_LOCALE = ["contentType", "action"];
const getGroupByOptionLabel = (value) => {
  if (value === "locale") {
    return {
      id: "content-releases.pages.ReleaseDetails.groupBy.option.locales",
      defaultMessage: "Locales"
    };
  }
  if (value === "action") {
    return {
      id: "content-releases.pages.ReleaseDetails.groupBy.option.actions",
      defaultMessage: "Actions"
    };
  }
  return {
    id: "content-releases.pages.ReleaseDetails.groupBy.option.content-type",
    defaultMessage: "Content-Types"
  };
};
const DEFAULT_RELEASE_DETAILS_HEADER = [
  {
    key: "__name__",
    fieldSchema: { type: "string" },
    metadatas: {
      label: {
        id: "content-releases.page.ReleaseDetails.table.header.label.name",
        defaultMessage: "name"
      },
      searchable: false,
      sortable: false
    },
    name: "name"
  }
];
const ReleaseDetailsBody = () => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const { releaseId } = (0,react_router/* useParams */.g)();
  const [{ query }, setQuery] = (0,dist/* useQueryParams */.sq)();
  const toggleNotification = (0,dist/* useNotification */.hN)();
  const { formatAPIError } = (0,dist/* useAPIErrorHandler */.wq)();
  const {
    data: releaseData,
    isLoading: isReleaseLoading,
    isError: isReleaseError,
    error: releaseError
  } = (0,index_PiOGBETy.b)({ id: releaseId });
  const {
    allowedActions: { canUpdate }
  } = (0,dist/* useRBAC */.ec)(index_PiOGBETy.P);
  const { runHookWaterfall } = (0,dist/* useStrapiApp */.vD)();
  const {
    displayedHeaders,
    hasI18nEnabled
  } = runHookWaterfall(
    "ContentReleases/pages/ReleaseDetails/add-locale-in-releases",
    {
      displayedHeaders: DEFAULT_RELEASE_DETAILS_HEADER,
      hasI18nEnabled: false
    }
  );
  const release = releaseData?.data;
  const selectedGroupBy = query?.groupBy || "contentType";
  const {
    isLoading,
    isFetching,
    isError,
    data,
    error: releaseActionsError
  } = (0,index_PiOGBETy.h)({
    ...query,
    releaseId
  });
  const [updateReleaseAction] = (0,index_PiOGBETy.j)();
  const handleChangeType = async (e, actionId, actionPath) => {
    const response = await updateReleaseAction({
      params: {
        releaseId,
        actionId
      },
      body: {
        type: e.target.value
      },
      query,
      // We are passing the query params to make optimistic updates
      actionPath
      // We are passing the action path to found the position in the cache of the action for optimistic updates
    });
    if ("error" in response) {
      if ((0,index_PiOGBETy.i)(response.error)) {
        toggleNotification({
          type: "warning",
          message: formatAPIError(response.error)
        });
      } else {
        toggleNotification({
          type: "warning",
          message: formatMessage({ id: "notification.error", defaultMessage: "An error occurred" })
        });
      }
    }
  };
  if (isLoading || isReleaseLoading) {
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(ContentLayout/* ContentLayout */.s, { children: /* @__PURE__ */ (0,jsx_runtime.jsx)(dist/* LoadingIndicatorPage */.Bl, {}) });
  }
  const releaseActions = data?.data;
  const releaseMeta = data?.meta;
  const contentTypes = releaseMeta?.contentTypes || {};
  const components = releaseMeta?.components || {};
  if (isReleaseError || !release) {
    const errorsArray = [];
    if (releaseError) {
      errorsArray.push({
        code: releaseError.code
      });
    }
    if (releaseActionsError) {
      errorsArray.push({
        code: releaseActionsError.code
      });
    }
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(
      react_router/* Redirect */.rd,
      {
        to: {
          pathname: "/plugins/content-releases",
          state: {
            errors: errorsArray
          }
        }
      }
    );
  }
  if (isError || !releaseActions) {
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(ContentLayout/* ContentLayout */.s, { children: /* @__PURE__ */ (0,jsx_runtime.jsx)(dist/* AnErrorOccurred */.hH, {}) });
  }
  if (Object.keys(releaseActions).length === 0) {
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(ContentLayout/* ContentLayout */.s, { children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
      dist/* NoContent */.R1,
      {
        content: {
          id: "content-releases.pages.Details.tab.emptyEntries",
          defaultMessage: "This release is empty. Open the Content Manager, select an entry and add it to the release."
        },
        action: /* @__PURE__ */ (0,jsx_runtime.jsx)(
          LinkButton/* LinkButton */.z,
          {
            as: react_router_dom/* Link */.N_,
            to: {
              pathname: "/content-manager"
            },
            style: { textDecoration: "none" },
            variant: "secondary",
            children: formatMessage({
              id: "content-releases.page.Details.button.openContentManager",
              defaultMessage: "Open the Content Manager"
            })
          }
        )
      }
    ) });
  }
  const options = hasI18nEnabled ? GROUP_BY_OPTIONS : GROUP_BY_OPTIONS_NO_LOCALE;
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(ContentLayout/* ContentLayout */.s, { children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(Flex/* Flex */.s, { gap: 8, direction: "column", alignItems: "stretch", children: [
    /* @__PURE__ */ (0,jsx_runtime.jsx)(Flex/* Flex */.s, { children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
      SingleSelect/* SingleSelect */.Z,
      {
        "aria-label": formatMessage({
          id: "content-releases.pages.ReleaseDetails.groupBy.aria-label",
          defaultMessage: "Group by"
        }),
        customizeContent: (value) => formatMessage(
          {
            id: `content-releases.pages.ReleaseDetails.groupBy.label`,
            defaultMessage: `Group by {groupBy}`
          },
          {
            groupBy: value
          }
        ),
        value: formatMessage(getGroupByOptionLabel(selectedGroupBy)),
        onChange: (value) => setQuery({ groupBy: value }),
        children: options.map((option) => /* @__PURE__ */ (0,jsx_runtime.jsx)(SingleSelect/* SingleSelectOption */.eY, { value: option, children: formatMessage(getGroupByOptionLabel(option)) }, option))
      }
    ) }),
    Object.keys(releaseActions).map((key) => /* @__PURE__ */ (0,jsx_runtime.jsxs)(Flex/* Flex */.s, { gap: 4, direction: "column", alignItems: "stretch", children: [
      /* @__PURE__ */ (0,jsx_runtime.jsx)(Flex/* Flex */.s, { role: "separator", "aria-label": key, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Badge/* Badge */.E, { children: key }) }),
      /* @__PURE__ */ (0,jsx_runtime.jsx)(
        dist/* Table */.XI.Root,
        {
          rows: releaseActions[key].map((item) => ({
            ...item,
            id: Number(item.entry.id)
          })),
          colCount: releaseActions[key].length,
          isLoading,
          isFetching,
          children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(dist/* Table */.XI.Content, { children: [
            /* @__PURE__ */ (0,jsx_runtime.jsxs)(dist/* Table */.XI.Head, { children: [
              displayedHeaders.map(({ key: key2, fieldSchema, metadatas, name }) => /* @__PURE__ */ (0,jsx_runtime.jsx)(
                dist/* Table */.XI.HeaderCell,
                {
                  fieldSchemaType: fieldSchema.type,
                  label: formatMessage(metadatas.label),
                  name
                },
                key2
              )),
              /* @__PURE__ */ (0,jsx_runtime.jsx)(
                dist/* Table */.XI.HeaderCell,
                {
                  fieldSchemaType: "string",
                  label: formatMessage({
                    id: "content-releases.page.ReleaseDetails.table.header.label.content-type",
                    defaultMessage: "content-type"
                  }),
                  name: "content-type"
                }
              ),
              /* @__PURE__ */ (0,jsx_runtime.jsx)(
                dist/* Table */.XI.HeaderCell,
                {
                  fieldSchemaType: "string",
                  label: formatMessage({
                    id: "content-releases.page.ReleaseDetails.table.header.label.action",
                    defaultMessage: "action"
                  }),
                  name: "action"
                }
              ),
              !release.releasedAt && /* @__PURE__ */ (0,jsx_runtime.jsx)(
                dist/* Table */.XI.HeaderCell,
                {
                  fieldSchemaType: "string",
                  label: formatMessage({
                    id: "content-releases.page.ReleaseDetails.table.header.label.status",
                    defaultMessage: "status"
                  }),
                  name: "status"
                }
              )
            ] }),
            /* @__PURE__ */ (0,jsx_runtime.jsx)(dist/* Table */.XI.LoadingBody, {}),
            /* @__PURE__ */ (0,jsx_runtime.jsx)(dist/* Table */.XI.Body, { children: releaseActions[key].map(
              ({ id, contentType, locale, type, entry }, actionIndex) => /* @__PURE__ */ (0,jsx_runtime.jsxs)(Tr.Tr, { children: [
                /* @__PURE__ */ (0,jsx_runtime.jsx)(Cell.Td, { width: "25%", maxWidth: "200px", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.o, { ellipsis: true, children: `${contentType.mainFieldValue || entry.id}` }) }),
                hasI18nEnabled && /* @__PURE__ */ (0,jsx_runtime.jsx)(Cell.Td, { width: "10%", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.o, { children: `${locale?.name ? locale.name : "-"}` }) }),
                /* @__PURE__ */ (0,jsx_runtime.jsx)(Cell.Td, { width: "10%", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.o, { children: contentType.displayName || "" }) }),
                /* @__PURE__ */ (0,jsx_runtime.jsx)(Cell.Td, { width: "20%", children: release.releasedAt ? /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.o, { children: formatMessage(
                  {
                    id: "content-releases.page.ReleaseDetails.table.action-published",
                    defaultMessage: "This entry was <b>{isPublish, select, true {published} other {unpublished}}</b>."
                  },
                  {
                    isPublish: type === "publish",
                    b: (children) => /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.o, { fontWeight: "bold", children })
                  }
                ) }) : /* @__PURE__ */ (0,jsx_runtime.jsx)(
                  index_PiOGBETy.R,
                  {
                    selected: type,
                    handleChange: (e) => handleChangeType(e, id, [key, actionIndex]),
                    name: `release-action-${id}-type`,
                    disabled: !canUpdate
                  }
                ) }),
                !release.releasedAt && /* @__PURE__ */ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [
                  /* @__PURE__ */ (0,jsx_runtime.jsx)(Cell.Td, { width: "20%", minWidth: "200px", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
                    EntryValidationText,
                    {
                      action: type,
                      schema: contentTypes?.[contentType.uid],
                      components,
                      entry
                    }
                  ) }),
                  /* @__PURE__ */ (0,jsx_runtime.jsx)(Cell.Td, { children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Flex/* Flex */.s, { justifyContent: "flex-end", children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(index_PiOGBETy.k.Root, { children: [
                    /* @__PURE__ */ (0,jsx_runtime.jsx)(
                      index_PiOGBETy.k.ReleaseActionEntryLinkItem,
                      {
                        contentTypeUid: contentType.uid,
                        entryId: entry.id,
                        locale: locale?.code
                      }
                    ),
                    /* @__PURE__ */ (0,jsx_runtime.jsx)(
                      index_PiOGBETy.k.DeleteReleaseActionItem,
                      {
                        releaseId: release.id,
                        actionId: id
                      }
                    )
                  ] }) }) })
                ] })
              ] }, id)
            ) })
          ] })
        }
      )
    ] }, `releases-group-${key}`)),
    /* @__PURE__ */ (0,jsx_runtime.jsxs)(Flex/* Flex */.s, { paddingTop: 4, alignItems: "flex-end", justifyContent: "space-between", children: [
      /* @__PURE__ */ (0,jsx_runtime.jsx)(dist/* PageSizeURLQuery */._u, { defaultValue: releaseMeta?.pagination?.pageSize.toString() }),
      /* @__PURE__ */ (0,jsx_runtime.jsx)(
        dist/* PaginationURLQuery */.W7,
        {
          pagination: {
            pageCount: releaseMeta?.pagination?.pageCount || 0
          }
        }
      )
    ] })
  ] }) });
};
const ReleaseDetailsPage = () => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const { releaseId } = (0,react_router/* useParams */.g)();
  const toggleNotification = (0,dist/* useNotification */.hN)();
  const { formatAPIError } = (0,dist/* useAPIErrorHandler */.wq)();
  const { replace } = (0,react_router/* useHistory */.W6)();
  const [releaseModalShown, setReleaseModalShown] = react.useState(false);
  const [showWarningSubmit, setWarningSubmit] = react.useState(false);
  const {
    isLoading: isLoadingDetails,
    data,
    isSuccess: isSuccessDetails
  } = (0,index_PiOGBETy.b)({ id: releaseId });
  const [updateRelease, { isLoading: isSubmittingForm }] = (0,index_PiOGBETy.c)();
  const [deleteRelease, { isLoading: isDeletingRelease }] = (0,index_PiOGBETy.d)();
  const toggleEditReleaseModal = () => {
    setReleaseModalShown((prev) => !prev);
  };
  const toggleWarningSubmit = () => setWarningSubmit((prevState) => !prevState);
  if (isLoadingDetails) {
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(
      ReleaseDetailsLayout,
      {
        toggleEditReleaseModal,
        toggleWarningSubmit,
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(ContentLayout/* ContentLayout */.s, { children: /* @__PURE__ */ (0,jsx_runtime.jsx)(dist/* LoadingIndicatorPage */.Bl, {}) })
      }
    );
  }
  const releaseData = isSuccessDetails && data?.data || null;
  const title = releaseData?.name || "";
  const timezone = releaseData?.timezone ?? null;
  const scheduledAt = releaseData?.scheduledAt && timezone ? utcToZonedTime(releaseData.scheduledAt, timezone) : null;
  const date = scheduledAt ? format(scheduledAt, "yyyy-MM-dd") : null;
  const time = scheduledAt ? format(scheduledAt, "HH:mm") : "";
  const handleEditRelease = async (values) => {
    const response = await updateRelease({
      id: releaseId,
      name: values.name,
      scheduledAt: values.scheduledAt,
      timezone: values.timezone
    });
    if ("data" in response) {
      toggleNotification({
        type: "success",
        message: formatMessage({
          id: "content-releases.modal.release-updated-notification-success",
          defaultMessage: "Release updated."
        })
      });
      toggleEditReleaseModal();
    } else if ((0,index_PiOGBETy.i)(response.error)) {
      toggleNotification({
        type: "warning",
        message: formatAPIError(response.error)
      });
    } else {
      toggleNotification({
        type: "warning",
        message: formatMessage({ id: "notification.error", defaultMessage: "An error occurred" })
      });
    }
  };
  const handleDeleteRelease = async () => {
    const response = await deleteRelease({
      id: releaseId
    });
    if ("data" in response) {
      replace("/plugins/content-releases");
    } else if ((0,index_PiOGBETy.i)(response.error)) {
      toggleNotification({
        type: "warning",
        message: formatAPIError(response.error)
      });
    } else {
      toggleNotification({
        type: "warning",
        message: formatMessage({ id: "notification.error", defaultMessage: "An error occurred" })
      });
    }
  };
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)(
    ReleaseDetailsLayout,
    {
      toggleEditReleaseModal,
      toggleWarningSubmit,
      children: [
        /* @__PURE__ */ (0,jsx_runtime.jsx)(ReleaseDetailsBody, {}),
        releaseModalShown && /* @__PURE__ */ (0,jsx_runtime.jsx)(
          ReleaseModal,
          {
            handleClose: toggleEditReleaseModal,
            handleSubmit: handleEditRelease,
            isLoading: isLoadingDetails || isSubmittingForm,
            initialValues: {
              name: title || "",
              scheduledAt,
              date,
              time,
              isScheduled: Boolean(scheduledAt),
              timezone
            }
          }
        ),
        /* @__PURE__ */ (0,jsx_runtime.jsx)(
          dist/* ConfirmDialog */.TM,
          {
            bodyText: {
              id: "content-releases.dialog.confirmation-message",
              defaultMessage: "Are you sure you want to delete this release?"
            },
            isOpen: showWarningSubmit,
            isConfirmButtonLoading: isDeletingRelease,
            onToggleDialog: toggleWarningSubmit,
            onConfirm: handleDeleteRelease
          }
        )
      ]
    }
  );
};
const App = () => {
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(dist/* CheckPagePermissions */.kz, { permissions: index_PiOGBETy.P.main, children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(react_router/* Switch */.dO, { children: [
    /* @__PURE__ */ (0,jsx_runtime.jsx)(react_router/* Route */.qh, { exact: true, path: `/plugins/${index_PiOGBETy.p}`, component: ReleasesPage }),
    /* @__PURE__ */ (0,jsx_runtime.jsx)(react_router/* Route */.qh, { exact: true, path: `/plugins/${index_PiOGBETy.p}/:releaseId`, component: ReleaseDetailsPage })
  ] }) });
};



/***/ }

}]);