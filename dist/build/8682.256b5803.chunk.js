(self["webpackChunkmy_strapi_project"] = self["webpackChunkmy_strapi_project"] || []).push([[8682],{

/***/ 85968
(module, __unused_webpack_exports, __webpack_require__) {

const debug = __webpack_require__(47180);
const { MAX_LENGTH, MAX_SAFE_INTEGER } = __webpack_require__(97718);
const { safeRe: re, t } = __webpack_require__(88618);
const parseOptions = __webpack_require__(1231);
const { compareIdentifiers } = __webpack_require__(46087);
class SemVer {
  constructor(version, options) {
    options = parseOptions(options);
    if (version instanceof SemVer) {
      if (version.loose === !!options.loose && version.includePrerelease === !!options.includePrerelease) {
        return version;
      } else {
        version = version.version;
      }
    } else if (typeof version !== "string") {
      throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version}".`);
    }
    if (version.length > MAX_LENGTH) {
      throw new TypeError(
        `version is longer than ${MAX_LENGTH} characters`
      );
    }
    debug("SemVer", version, options);
    this.options = options;
    this.loose = !!options.loose;
    this.includePrerelease = !!options.includePrerelease;
    const m = version.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL]);
    if (!m) {
      throw new TypeError(`Invalid Version: ${version}`);
    }
    this.raw = version;
    this.major = +m[1];
    this.minor = +m[2];
    this.patch = +m[3];
    if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
      throw new TypeError("Invalid major version");
    }
    if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
      throw new TypeError("Invalid minor version");
    }
    if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
      throw new TypeError("Invalid patch version");
    }
    if (!m[4]) {
      this.prerelease = [];
    } else {
      this.prerelease = m[4].split(".").map((id) => {
        if (/^[0-9]+$/.test(id)) {
          const num = +id;
          if (num >= 0 && num < MAX_SAFE_INTEGER) {
            return num;
          }
        }
        return id;
      });
    }
    this.build = m[5] ? m[5].split(".") : [];
    this.format();
  }
  format() {
    this.version = `${this.major}.${this.minor}.${this.patch}`;
    if (this.prerelease.length) {
      this.version += `-${this.prerelease.join(".")}`;
    }
    return this.version;
  }
  toString() {
    return this.version;
  }
  compare(other) {
    debug("SemVer.compare", this.version, this.options, other);
    if (!(other instanceof SemVer)) {
      if (typeof other === "string" && other === this.version) {
        return 0;
      }
      other = new SemVer(other, this.options);
    }
    if (other.version === this.version) {
      return 0;
    }
    return this.compareMain(other) || this.comparePre(other);
  }
  compareMain(other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options);
    }
    return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
  }
  comparePre(other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options);
    }
    if (this.prerelease.length && !other.prerelease.length) {
      return -1;
    } else if (!this.prerelease.length && other.prerelease.length) {
      return 1;
    } else if (!this.prerelease.length && !other.prerelease.length) {
      return 0;
    }
    let i = 0;
    do {
      const a = this.prerelease[i];
      const b = other.prerelease[i];
      debug("prerelease compare", i, a, b);
      if (a === void 0 && b === void 0) {
        return 0;
      } else if (b === void 0) {
        return 1;
      } else if (a === void 0) {
        return -1;
      } else if (a === b) {
        continue;
      } else {
        return compareIdentifiers(a, b);
      }
    } while (++i);
  }
  compareBuild(other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options);
    }
    let i = 0;
    do {
      const a = this.build[i];
      const b = other.build[i];
      debug("prerelease compare", i, a, b);
      if (a === void 0 && b === void 0) {
        return 0;
      } else if (b === void 0) {
        return 1;
      } else if (a === void 0) {
        return -1;
      } else if (a === b) {
        continue;
      } else {
        return compareIdentifiers(a, b);
      }
    } while (++i);
  }
  // preminor will bump the version up to the next minor release, and immediately
  // down to pre-release. premajor and prepatch work the same way.
  inc(release, identifier, identifierBase) {
    switch (release) {
      case "premajor":
        this.prerelease.length = 0;
        this.patch = 0;
        this.minor = 0;
        this.major++;
        this.inc("pre", identifier, identifierBase);
        break;
      case "preminor":
        this.prerelease.length = 0;
        this.patch = 0;
        this.minor++;
        this.inc("pre", identifier, identifierBase);
        break;
      case "prepatch":
        this.prerelease.length = 0;
        this.inc("patch", identifier, identifierBase);
        this.inc("pre", identifier, identifierBase);
        break;
      case "prerelease":
        if (this.prerelease.length === 0) {
          this.inc("patch", identifier, identifierBase);
        }
        this.inc("pre", identifier, identifierBase);
        break;
      case "major":
        if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
          this.major++;
        }
        this.minor = 0;
        this.patch = 0;
        this.prerelease = [];
        break;
      case "minor":
        if (this.patch !== 0 || this.prerelease.length === 0) {
          this.minor++;
        }
        this.patch = 0;
        this.prerelease = [];
        break;
      case "patch":
        if (this.prerelease.length === 0) {
          this.patch++;
        }
        this.prerelease = [];
        break;
      case "pre": {
        const base = Number(identifierBase) ? 1 : 0;
        if (!identifier && identifierBase === false) {
          throw new Error("invalid increment argument: identifier is empty");
        }
        if (this.prerelease.length === 0) {
          this.prerelease = [base];
        } else {
          let i = this.prerelease.length;
          while (--i >= 0) {
            if (typeof this.prerelease[i] === "number") {
              this.prerelease[i]++;
              i = -2;
            }
          }
          if (i === -1) {
            if (identifier === this.prerelease.join(".") && identifierBase === false) {
              throw new Error("invalid increment argument: identifier already exists");
            }
            this.prerelease.push(base);
          }
        }
        if (identifier) {
          let prerelease = [identifier, base];
          if (identifierBase === false) {
            prerelease = [identifier];
          }
          if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
            if (isNaN(this.prerelease[1])) {
              this.prerelease = prerelease;
            }
          } else {
            this.prerelease = prerelease;
          }
        }
        break;
      }
      default:
        throw new Error(`invalid increment argument: ${release}`);
    }
    this.raw = this.format();
    if (this.build.length) {
      this.raw += `+${this.build.join(".")}`;
    }
    return this;
  }
}
module.exports = SemVer;


/***/ },

/***/ 39100
(module, __unused_webpack_exports, __webpack_require__) {

const SemVer = __webpack_require__(85968);
const compare = (a, b, loose) => new SemVer(a, loose).compare(new SemVer(b, loose));
module.exports = compare;


/***/ },

/***/ 55151
(module, __unused_webpack_exports, __webpack_require__) {

const compare = __webpack_require__(39100);
const lt = (a, b, loose) => compare(a, b, loose) < 0;
module.exports = lt;


/***/ },

/***/ 1660
(module, __unused_webpack_exports, __webpack_require__) {

const SemVer = __webpack_require__(85968);
const parse = (version, options, throwErrors = false) => {
  if (version instanceof SemVer) {
    return version;
  }
  try {
    return new SemVer(version, options);
  } catch (er) {
    if (!throwErrors) {
      return null;
    }
    throw er;
  }
};
module.exports = parse;


/***/ },

/***/ 79077
(module, __unused_webpack_exports, __webpack_require__) {

const parse = __webpack_require__(1660);
const valid = (version, options) => {
  const v = parse(version, options);
  return v ? v.version : null;
};
module.exports = valid;


/***/ },

/***/ 97718
(module) {

const SEMVER_SPEC_VERSION = "2.0.0";
const MAX_LENGTH = 256;
const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
9007199254740991;
const MAX_SAFE_COMPONENT_LENGTH = 16;
const MAX_SAFE_BUILD_LENGTH = MAX_LENGTH - 6;
const RELEASE_TYPES = [
  "major",
  "premajor",
  "minor",
  "preminor",
  "patch",
  "prepatch",
  "prerelease"
];
module.exports = {
  MAX_LENGTH,
  MAX_SAFE_COMPONENT_LENGTH,
  MAX_SAFE_BUILD_LENGTH,
  MAX_SAFE_INTEGER,
  RELEASE_TYPES,
  SEMVER_SPEC_VERSION,
  FLAG_INCLUDE_PRERELEASE: 1,
  FLAG_LOOSE: 2
};


/***/ },

/***/ 47180
(module) {

const debug = typeof process === "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...args) => console.error("SEMVER", ...args) : () => {
};
module.exports = debug;


/***/ },

/***/ 46087
(module) {

const numeric = /^[0-9]+$/;
const compareIdentifiers = (a, b) => {
  const anum = numeric.test(a);
  const bnum = numeric.test(b);
  if (anum && bnum) {
    a = +a;
    b = +b;
  }
  return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
};
const rcompareIdentifiers = (a, b) => compareIdentifiers(b, a);
module.exports = {
  compareIdentifiers,
  rcompareIdentifiers
};


/***/ },

/***/ 1231
(module) {

const looseOption = Object.freeze({ loose: true });
const emptyOpts = Object.freeze({});
const parseOptions = (options) => {
  if (!options) {
    return emptyOpts;
  }
  if (typeof options !== "object") {
    return looseOption;
  }
  return options;
};
module.exports = parseOptions;


/***/ },

/***/ 88618
(module, exports, __webpack_require__) {

const {
  MAX_SAFE_COMPONENT_LENGTH,
  MAX_SAFE_BUILD_LENGTH,
  MAX_LENGTH
} = __webpack_require__(97718);
const debug = __webpack_require__(47180);
exports = module.exports = {};
const re = exports.re = [];
const safeRe = exports.safeRe = [];
const src = exports.src = [];
const t = exports.t = {};
let R = 0;
const LETTERDASHNUMBER = "[a-zA-Z0-9-]";
const safeRegexReplacements = [
  ["\\s", 1],
  ["\\d", MAX_LENGTH],
  [LETTERDASHNUMBER, MAX_SAFE_BUILD_LENGTH]
];
const makeSafeRegex = (value) => {
  for (const [token, max] of safeRegexReplacements) {
    value = value.split(`${token}*`).join(`${token}{0,${max}}`).split(`${token}+`).join(`${token}{1,${max}}`);
  }
  return value;
};
const createToken = (name, value, isGlobal) => {
  const safe = makeSafeRegex(value);
  const index = R++;
  debug(name, index, value);
  t[name] = index;
  src[index] = value;
  re[index] = new RegExp(value, isGlobal ? "g" : void 0);
  safeRe[index] = new RegExp(safe, isGlobal ? "g" : void 0);
};
createToken("NUMERICIDENTIFIER", "0|[1-9]\\d*");
createToken("NUMERICIDENTIFIERLOOSE", "\\d+");
createToken("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`);
createToken("MAINVERSION", `(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})`);
createToken("MAINVERSIONLOOSE", `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})`);
createToken("PRERELEASEIDENTIFIER", `(?:${src[t.NUMERICIDENTIFIER]}|${src[t.NONNUMERICIDENTIFIER]})`);
createToken("PRERELEASEIDENTIFIERLOOSE", `(?:${src[t.NUMERICIDENTIFIERLOOSE]}|${src[t.NONNUMERICIDENTIFIER]})`);
createToken("PRERELEASE", `(?:-(${src[t.PRERELEASEIDENTIFIER]}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`);
createToken("PRERELEASELOOSE", `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`);
createToken("BUILDIDENTIFIER", `${LETTERDASHNUMBER}+`);
createToken("BUILD", `(?:\\+(${src[t.BUILDIDENTIFIER]}(?:\\.${src[t.BUILDIDENTIFIER]})*))`);
createToken("FULLPLAIN", `v?${src[t.MAINVERSION]}${src[t.PRERELEASE]}?${src[t.BUILD]}?`);
createToken("FULL", `^${src[t.FULLPLAIN]}$`);
createToken("LOOSEPLAIN", `[v=\\s]*${src[t.MAINVERSIONLOOSE]}${src[t.PRERELEASELOOSE]}?${src[t.BUILD]}?`);
createToken("LOOSE", `^${src[t.LOOSEPLAIN]}$`);
createToken("GTLT", "((?:<|>)?=?)");
createToken("XRANGEIDENTIFIERLOOSE", `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
createToken("XRANGEIDENTIFIER", `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`);
createToken("XRANGEPLAIN", `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:${src[t.PRERELEASE]})?${src[t.BUILD]}?)?)?`);
createToken("XRANGEPLAINLOOSE", `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:${src[t.PRERELEASELOOSE]})?${src[t.BUILD]}?)?)?`);
createToken("XRANGE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`);
createToken("XRANGELOOSE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`);
createToken("COERCE", `${"(^|[^\\d])(\\d{1,"}${MAX_SAFE_COMPONENT_LENGTH}})(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?(?:$|[^\\d])`);
createToken("COERCERTL", src[t.COERCE], true);
createToken("LONETILDE", "(?:~>?)");
createToken("TILDETRIM", `(\\s*)${src[t.LONETILDE]}\\s+`, true);
exports.tildeTrimReplace = "$1~";
createToken("TILDE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`);
createToken("TILDELOOSE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`);
createToken("LONECARET", "(?:\\^)");
createToken("CARETTRIM", `(\\s*)${src[t.LONECARET]}\\s+`, true);
exports.caretTrimReplace = "$1^";
createToken("CARET", `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`);
createToken("CARETLOOSE", `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`);
createToken("COMPARATORLOOSE", `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`);
createToken("COMPARATOR", `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`);
createToken("COMPARATORTRIM", `(\\s*)${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true);
exports.comparatorTrimReplace = "$1$2$3";
createToken("HYPHENRANGE", `^\\s*(${src[t.XRANGEPLAIN]})\\s+-\\s+(${src[t.XRANGEPLAIN]})\\s*$`);
createToken("HYPHENRANGELOOSE", `^\\s*(${src[t.XRANGEPLAINLOOSE]})\\s+-\\s+(${src[t.XRANGEPLAINLOOSE]})\\s*$`);
createToken("STAR", "(<|>)?=?\\s*\\*");
createToken("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
createToken("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");


/***/ },

/***/ 38682
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ AuthenticatedApp$1),
  L: () => (/* binding */ LAYOUT_DATA),
  N: () => (/* binding */ AuthenticatedApp_uHd_MPEB_Number),
  S: () => (/* binding */ STATES),
  V: () => (/* binding */ VerticalDivider),
  g: () => (/* binding */ getFullName),
  s: () => (/* binding */ selectAdminPermissions)
});

// NAMESPACE OBJECT: ./node_modules/react-dnd-html5-backend/dist/NativeTypes.js
var NativeTypes_namespaceObject = {};
__webpack_require__.r(NativeTypes_namespaceObject);
__webpack_require__.d(NativeTypes_namespaceObject, {
  FILE: () => (FILE),
  HTML: () => (HTML),
  TEXT: () => (TEXT),
  URL: () => (URL)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(69751);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(21272);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/dist/index.mjs + 63 modules
var dist = __webpack_require__(59201);
// EXTERNAL MODULE: ./node_modules/semver/functions/lt.js
var lt = __webpack_require__(55151);
// EXTERNAL MODULE: ./node_modules/semver/functions/valid.js
var valid = __webpack_require__(79077);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/dist/_chunks/index-dMS-26Ft.mjs + 95 modules
var index_dMS_26Ft = __webpack_require__(92129);
// EXTERNAL MODULE: ./node_modules/immer/dist/immer.esm.js
var immer_esm = __webpack_require__(88761);
// EXTERNAL MODULE: ./node_modules/lodash/set.js
var set = __webpack_require__(48940);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var react_jsx_runtime = __webpack_require__(92132);
// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(89356);
// EXTERNAL MODULE: ./node_modules/@react-dnd/invariant/dist/index.js
var invariant_dist = __webpack_require__(21382);
;// ./node_modules/dnd-core/dist/utils/js_utils.js
function get(obj, path, defaultValue) {
  return path.split(".").reduce(
    (a, c) => a && a[c] ? a[c] : defaultValue || null,
    obj
  );
}
function without(items, item) {
  return items.filter(
    (i) => i !== item
  );
}
function isString(input) {
  return typeof input === "string";
}
function isObject(input) {
  return typeof input === "object";
}
function xor(itemsA, itemsB) {
  const map = /* @__PURE__ */ new Map();
  const insertItem = (item) => {
    map.set(item, map.has(item) ? map.get(item) + 1 : 1);
  };
  itemsA.forEach(insertItem);
  itemsB.forEach(insertItem);
  const result = [];
  map.forEach((count, key) => {
    if (count === 1) {
      result.push(key);
    }
  });
  return result;
}
function intersection(itemsA, itemsB) {
  return itemsA.filter(
    (t) => itemsB.indexOf(t) > -1
  );
}

;// ./node_modules/dnd-core/dist/actions/dragDrop/types.js
const INIT_COORDS = "dnd-core/INIT_COORDS";
const BEGIN_DRAG = "dnd-core/BEGIN_DRAG";
const PUBLISH_DRAG_SOURCE = "dnd-core/PUBLISH_DRAG_SOURCE";
const HOVER = "dnd-core/HOVER";
const DROP = "dnd-core/DROP";
const END_DRAG = "dnd-core/END_DRAG";

;// ./node_modules/dnd-core/dist/actions/dragDrop/local/setClientOffset.js

function setClientOffset(clientOffset, sourceClientOffset) {
  return {
    type: INIT_COORDS,
    payload: {
      sourceClientOffset: sourceClientOffset || null,
      clientOffset: clientOffset || null
    }
  };
}

;// ./node_modules/dnd-core/dist/actions/dragDrop/beginDrag.js




const ResetCoordinatesAction = {
  type: INIT_COORDS,
  payload: {
    clientOffset: null,
    sourceClientOffset: null
  }
};
function createBeginDrag(manager) {
  return function beginDrag(sourceIds = [], options = {
    publishSource: true
  }) {
    const { publishSource = true, clientOffset, getSourceClientOffset } = options;
    const monitor = manager.getMonitor();
    const registry = manager.getRegistry();
    manager.dispatch(setClientOffset(clientOffset));
    verifyInvariants(sourceIds, monitor, registry);
    const sourceId = getDraggableSource(sourceIds, monitor);
    if (sourceId == null) {
      manager.dispatch(ResetCoordinatesAction);
      return;
    }
    let sourceClientOffset = null;
    if (clientOffset) {
      if (!getSourceClientOffset) {
        throw new Error("getSourceClientOffset must be defined");
      }
      verifyGetSourceClientOffsetIsFunction(getSourceClientOffset);
      sourceClientOffset = getSourceClientOffset(sourceId);
    }
    manager.dispatch(setClientOffset(clientOffset, sourceClientOffset));
    const source = registry.getSource(sourceId);
    const item = source.beginDrag(monitor, sourceId);
    if (item == null) {
      return void 0;
    }
    verifyItemIsObject(item);
    registry.pinSource(sourceId);
    const itemType = registry.getSourceType(sourceId);
    return {
      type: BEGIN_DRAG,
      payload: {
        itemType,
        item,
        sourceId,
        clientOffset: clientOffset || null,
        sourceClientOffset: sourceClientOffset || null,
        isSourcePublic: !!publishSource
      }
    };
  };
}
function verifyInvariants(sourceIds, monitor, registry) {
  (0,invariant_dist/* invariant */.V)(!monitor.isDragging(), "Cannot call beginDrag while dragging.");
  sourceIds.forEach(function(sourceId) {
    (0,invariant_dist/* invariant */.V)(registry.getSource(sourceId), "Expected sourceIds to be registered.");
  });
}
function verifyGetSourceClientOffsetIsFunction(getSourceClientOffset) {
  (0,invariant_dist/* invariant */.V)(typeof getSourceClientOffset === "function", "When clientOffset is provided, getSourceClientOffset must be a function.");
}
function verifyItemIsObject(item) {
  (0,invariant_dist/* invariant */.V)(isObject(item), "Item must be an object.");
}
function getDraggableSource(sourceIds, monitor) {
  let sourceId = null;
  for (let i = sourceIds.length - 1; i >= 0; i--) {
    if (monitor.canDragSource(sourceIds[i])) {
      sourceId = sourceIds[i];
      break;
    }
  }
  return sourceId;
}

;// ./node_modules/dnd-core/dist/actions/dragDrop/drop.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty(target, key, source[key]);
    });
  }
  return target;
}



function createDrop(manager) {
  return function drop(options = {}) {
    const monitor = manager.getMonitor();
    const registry = manager.getRegistry();
    drop_verifyInvariants(monitor);
    const targetIds = getDroppableTargets(monitor);
    targetIds.forEach((targetId, index) => {
      const dropResult = determineDropResult(targetId, index, registry, monitor);
      const action = {
        type: DROP,
        payload: {
          dropResult: _objectSpread({}, options, dropResult)
        }
      };
      manager.dispatch(action);
    });
  };
}
function drop_verifyInvariants(monitor) {
  (0,invariant_dist/* invariant */.V)(monitor.isDragging(), "Cannot call drop while not dragging.");
  (0,invariant_dist/* invariant */.V)(!monitor.didDrop(), "Cannot call drop twice during one drag operation.");
}
function determineDropResult(targetId, index, registry, monitor) {
  const target = registry.getTarget(targetId);
  let dropResult = target ? target.drop(monitor, targetId) : void 0;
  verifyDropResultType(dropResult);
  if (typeof dropResult === "undefined") {
    dropResult = index === 0 ? {} : monitor.getDropResult();
  }
  return dropResult;
}
function verifyDropResultType(dropResult) {
  (0,invariant_dist/* invariant */.V)(typeof dropResult === "undefined" || isObject(dropResult), "Drop result must either be an object or undefined.");
}
function getDroppableTargets(monitor) {
  const targetIds = monitor.getTargetIds().filter(monitor.canDropOnTarget, monitor);
  targetIds.reverse();
  return targetIds;
}

;// ./node_modules/dnd-core/dist/actions/dragDrop/endDrag.js


function createEndDrag(manager) {
  return function endDrag() {
    const monitor = manager.getMonitor();
    const registry = manager.getRegistry();
    verifyIsDragging(monitor);
    const sourceId = monitor.getSourceId();
    if (sourceId != null) {
      const source = registry.getSource(sourceId, true);
      source.endDrag(monitor, sourceId);
      registry.unpinSource();
    }
    return {
      type: END_DRAG
    };
  };
}
function verifyIsDragging(monitor) {
  (0,invariant_dist/* invariant */.V)(monitor.isDragging(), "Cannot call endDrag while not dragging.");
}

;// ./node_modules/dnd-core/dist/utils/matchesType.js
function matchesType(targetType, draggedItemType) {
  if (draggedItemType === null) {
    return targetType === null;
  }
  return Array.isArray(targetType) ? targetType.some(
    (t) => t === draggedItemType
  ) : targetType === draggedItemType;
}

;// ./node_modules/dnd-core/dist/actions/dragDrop/hover.js



function createHover(manager) {
  return function hover(targetIdsArg, { clientOffset } = {}) {
    verifyTargetIdsIsArray(targetIdsArg);
    const targetIds = targetIdsArg.slice(0);
    const monitor = manager.getMonitor();
    const registry = manager.getRegistry();
    const draggedItemType = monitor.getItemType();
    removeNonMatchingTargetIds(targetIds, registry, draggedItemType);
    checkInvariants(targetIds, monitor, registry);
    hoverAllTargets(targetIds, monitor, registry);
    return {
      type: HOVER,
      payload: {
        targetIds,
        clientOffset: clientOffset || null
      }
    };
  };
}
function verifyTargetIdsIsArray(targetIdsArg) {
  (0,invariant_dist/* invariant */.V)(Array.isArray(targetIdsArg), "Expected targetIds to be an array.");
}
function checkInvariants(targetIds, monitor, registry) {
  (0,invariant_dist/* invariant */.V)(monitor.isDragging(), "Cannot call hover while not dragging.");
  (0,invariant_dist/* invariant */.V)(!monitor.didDrop(), "Cannot call hover after drop.");
  for (let i = 0; i < targetIds.length; i++) {
    const targetId = targetIds[i];
    (0,invariant_dist/* invariant */.V)(targetIds.lastIndexOf(targetId) === i, "Expected targetIds to be unique in the passed array.");
    const target = registry.getTarget(targetId);
    (0,invariant_dist/* invariant */.V)(target, "Expected targetIds to be registered.");
  }
}
function removeNonMatchingTargetIds(targetIds, registry, draggedItemType) {
  for (let i = targetIds.length - 1; i >= 0; i--) {
    const targetId = targetIds[i];
    const targetType = registry.getTargetType(targetId);
    if (!matchesType(targetType, draggedItemType)) {
      targetIds.splice(i, 1);
    }
  }
}
function hoverAllTargets(targetIds, monitor, registry) {
  targetIds.forEach(function(targetId) {
    const target = registry.getTarget(targetId);
    target.hover(monitor, targetId);
  });
}

;// ./node_modules/dnd-core/dist/actions/dragDrop/publishDragSource.js

function createPublishDragSource(manager) {
  return function publishDragSource() {
    const monitor = manager.getMonitor();
    if (monitor.isDragging()) {
      return {
        type: PUBLISH_DRAG_SOURCE
      };
    }
    return;
  };
}

;// ./node_modules/dnd-core/dist/actions/dragDrop/index.js






function createDragDropActions(manager) {
  return {
    beginDrag: createBeginDrag(manager),
    publishDragSource: createPublishDragSource(manager),
    hover: createHover(manager),
    drop: createDrop(manager),
    endDrag: createEndDrag(manager)
  };
}

;// ./node_modules/dnd-core/dist/classes/DragDropManagerImpl.js

class DragDropManagerImpl {
  receiveBackend(backend) {
    this.backend = backend;
  }
  getMonitor() {
    return this.monitor;
  }
  getBackend() {
    return this.backend;
  }
  getRegistry() {
    return this.monitor.registry;
  }
  getActions() {
    const manager = this;
    const { dispatch } = this.store;
    function bindActionCreator(actionCreator) {
      return (...args) => {
        const action = actionCreator.apply(manager, args);
        if (typeof action !== "undefined") {
          dispatch(action);
        }
      };
    }
    const actions = createDragDropActions(this);
    return Object.keys(actions).reduce((boundActions, key) => {
      const action = actions[key];
      boundActions[key] = bindActionCreator(action);
      return boundActions;
    }, {});
  }
  dispatch(action) {
    this.store.dispatch(action);
  }
  constructor(store, monitor) {
    this.isSetUp = false;
    this.handleRefCountChange = () => {
      const shouldSetUp = this.store.getState().refCount > 0;
      if (this.backend) {
        if (shouldSetUp && !this.isSetUp) {
          this.backend.setup();
          this.isSetUp = true;
        } else if (!shouldSetUp && this.isSetUp) {
          this.backend.teardown();
          this.isSetUp = false;
        }
      }
    };
    this.store = store;
    this.monitor = monitor;
    store.subscribe(this.handleRefCountChange);
  }
}

;// ./node_modules/dnd-core/dist/utils/coords.js
function add(a, b) {
  return {
    x: a.x + b.x,
    y: a.y + b.y
  };
}
function subtract(a, b) {
  return {
    x: a.x - b.x,
    y: a.y - b.y
  };
}
function getSourceClientOffset(state) {
  const { clientOffset, initialClientOffset, initialSourceClientOffset } = state;
  if (!clientOffset || !initialClientOffset || !initialSourceClientOffset) {
    return null;
  }
  return subtract(add(clientOffset, initialSourceClientOffset), initialClientOffset);
}
function getDifferenceFromInitialOffset(state) {
  const { clientOffset, initialClientOffset } = state;
  if (!clientOffset || !initialClientOffset) {
    return null;
  }
  return subtract(clientOffset, initialClientOffset);
}

;// ./node_modules/dnd-core/dist/utils/dirtiness.js

const NONE = [];
const ALL = [];
NONE.__IS_NONE__ = true;
ALL.__IS_ALL__ = true;
function areDirty(dirtyIds, handlerIds) {
  if (dirtyIds === NONE) {
    return false;
  }
  if (dirtyIds === ALL || typeof handlerIds === "undefined") {
    return true;
  }
  const commonIds = intersection(handlerIds, dirtyIds);
  return commonIds.length > 0;
}

;// ./node_modules/dnd-core/dist/classes/DragDropMonitorImpl.js




class DragDropMonitorImpl {
  subscribeToStateChange(listener, options = {}) {
    const { handlerIds } = options;
    (0,invariant_dist/* invariant */.V)(typeof listener === "function", "listener must be a function.");
    (0,invariant_dist/* invariant */.V)(typeof handlerIds === "undefined" || Array.isArray(handlerIds), "handlerIds, when specified, must be an array of strings.");
    let prevStateId = this.store.getState().stateId;
    const handleChange = () => {
      const state = this.store.getState();
      const currentStateId = state.stateId;
      try {
        const canSkipListener = currentStateId === prevStateId || currentStateId === prevStateId + 1 && !areDirty(state.dirtyHandlerIds, handlerIds);
        if (!canSkipListener) {
          listener();
        }
      } finally {
        prevStateId = currentStateId;
      }
    };
    return this.store.subscribe(handleChange);
  }
  subscribeToOffsetChange(listener) {
    (0,invariant_dist/* invariant */.V)(typeof listener === "function", "listener must be a function.");
    let previousState = this.store.getState().dragOffset;
    const handleChange = () => {
      const nextState = this.store.getState().dragOffset;
      if (nextState === previousState) {
        return;
      }
      previousState = nextState;
      listener();
    };
    return this.store.subscribe(handleChange);
  }
  canDragSource(sourceId) {
    if (!sourceId) {
      return false;
    }
    const source = this.registry.getSource(sourceId);
    (0,invariant_dist/* invariant */.V)(source, `Expected to find a valid source. sourceId=${sourceId}`);
    if (this.isDragging()) {
      return false;
    }
    return source.canDrag(this, sourceId);
  }
  canDropOnTarget(targetId) {
    if (!targetId) {
      return false;
    }
    const target = this.registry.getTarget(targetId);
    (0,invariant_dist/* invariant */.V)(target, `Expected to find a valid target. targetId=${targetId}`);
    if (!this.isDragging() || this.didDrop()) {
      return false;
    }
    const targetType = this.registry.getTargetType(targetId);
    const draggedItemType = this.getItemType();
    return matchesType(targetType, draggedItemType) && target.canDrop(this, targetId);
  }
  isDragging() {
    return Boolean(this.getItemType());
  }
  isDraggingSource(sourceId) {
    if (!sourceId) {
      return false;
    }
    const source = this.registry.getSource(sourceId, true);
    (0,invariant_dist/* invariant */.V)(source, `Expected to find a valid source. sourceId=${sourceId}`);
    if (!this.isDragging() || !this.isSourcePublic()) {
      return false;
    }
    const sourceType = this.registry.getSourceType(sourceId);
    const draggedItemType = this.getItemType();
    if (sourceType !== draggedItemType) {
      return false;
    }
    return source.isDragging(this, sourceId);
  }
  isOverTarget(targetId, options = {
    shallow: false
  }) {
    if (!targetId) {
      return false;
    }
    const { shallow } = options;
    if (!this.isDragging()) {
      return false;
    }
    const targetType = this.registry.getTargetType(targetId);
    const draggedItemType = this.getItemType();
    if (draggedItemType && !matchesType(targetType, draggedItemType)) {
      return false;
    }
    const targetIds = this.getTargetIds();
    if (!targetIds.length) {
      return false;
    }
    const index = targetIds.indexOf(targetId);
    if (shallow) {
      return index === targetIds.length - 1;
    } else {
      return index > -1;
    }
  }
  getItemType() {
    return this.store.getState().dragOperation.itemType;
  }
  getItem() {
    return this.store.getState().dragOperation.item;
  }
  getSourceId() {
    return this.store.getState().dragOperation.sourceId;
  }
  getTargetIds() {
    return this.store.getState().dragOperation.targetIds;
  }
  getDropResult() {
    return this.store.getState().dragOperation.dropResult;
  }
  didDrop() {
    return this.store.getState().dragOperation.didDrop;
  }
  isSourcePublic() {
    return Boolean(this.store.getState().dragOperation.isSourcePublic);
  }
  getInitialClientOffset() {
    return this.store.getState().dragOffset.initialClientOffset;
  }
  getInitialSourceClientOffset() {
    return this.store.getState().dragOffset.initialSourceClientOffset;
  }
  getClientOffset() {
    return this.store.getState().dragOffset.clientOffset;
  }
  getSourceClientOffset() {
    return getSourceClientOffset(this.store.getState().dragOffset);
  }
  getDifferenceFromInitialOffset() {
    return getDifferenceFromInitialOffset(this.store.getState().dragOffset);
  }
  constructor(store, registry) {
    this.store = store;
    this.registry = registry;
  }
}

;// ./node_modules/@react-dnd/asap/dist/makeRequestCall.js
const scope = typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : self;
const BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;
function makeRequestCallFromTimer(callback) {
  return function requestCall() {
    const timeoutHandle = setTimeout(handleTimer, 0);
    const intervalHandle = setInterval(handleTimer, 50);
    function handleTimer() {
      clearTimeout(timeoutHandle);
      clearInterval(intervalHandle);
      callback();
    }
  };
}
function makeRequestCallFromMutationObserver(callback) {
  let toggle = 1;
  const observer = new BrowserMutationObserver(callback);
  const node = document.createTextNode("");
  observer.observe(node, {
    characterData: true
  });
  return function requestCall() {
    toggle = -toggle;
    node.data = toggle;
  };
}
const makeRequestCall = typeof BrowserMutationObserver === "function" ? (
  // reliably everywhere they are implemented.
  // They are implemented in all modern browsers.
  //
  // - Android 4-4.3
  // - Chrome 26-34
  // - Firefox 14-29
  // - Internet Explorer 11
  // - iPad Safari 6-7.1
  // - iPhone Safari 7-7.1
  // - Safari 6-7
  makeRequestCallFromMutationObserver
) : (
  // task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
  // 11-12, and in web workers in many engines.
  // Although message channels yield to any queued rendering and IO tasks, they
  // would be better than imposing the 4ms delay of timers.
  // However, they do not work reliably in Internet Explorer or Safari.
  // Internet Explorer 10 is the only browser that has setImmediate but does
  // not have MutationObservers.
  // Although setImmediate yields to the browser's renderer, it would be
  // preferrable to falling back to setTimeout since it does not have
  // the minimum 4ms penalty.
  // Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
  // Desktop to a lesser extent) that renders both setImmediate and
  // MessageChannel useless for the purposes of ASAP.
  // https://github.com/kriskowal/q/issues/396
  // Timers are implemented universally.
  // We fall back to timers in workers in most engines, and in foreground
  // contexts in the following browsers.
  // However, note that even this simple case requires nuances to operate in a
  // broad spectrum of browsers.
  //
  // - Firefox 3-13
  // - Internet Explorer 6-9
  // - iPad Safari 4.3
  // - Lynx 2.8.7
  makeRequestCallFromTimer
);

;// ./node_modules/@react-dnd/asap/dist/AsapQueue.js

class AsapQueue {
  // Use the fastest means possible to execute a task in its own turn, with
  // priority over other events including IO, animation, reflow, and redraw
  // events in browsers.
  //
  // An exception thrown by a task will permanently interrupt the processing of
  // subsequent tasks. The higher level `asap` function ensures that if an
  // exception is thrown by a task, that the task queue will continue flushing as
  // soon as possible, but if you use `rawAsap` directly, you are responsible to
  // either ensure that no exceptions are thrown from your task, or to manually
  // call `rawAsap.requestFlush` if an exception is thrown.
  enqueueTask(task) {
    const { queue: q, requestFlush } = this;
    if (!q.length) {
      requestFlush();
      this.flushing = true;
    }
    q[q.length] = task;
  }
  constructor() {
    this.queue = [];
    this.pendingErrors = [];
    this.flushing = false;
    this.index = 0;
    this.capacity = 1024;
    this.flush = () => {
      const { queue: q } = this;
      while (this.index < q.length) {
        const currentIndex = this.index;
        this.index++;
        q[currentIndex].call();
        if (this.index > this.capacity) {
          for (let scan = 0, newLength = q.length - this.index; scan < newLength; scan++) {
            q[scan] = q[scan + this.index];
          }
          q.length -= this.index;
          this.index = 0;
        }
      }
      q.length = 0;
      this.index = 0;
      this.flushing = false;
    };
    this.registerPendingError = (err) => {
      this.pendingErrors.push(err);
      this.requestErrorThrow();
    };
    this.requestFlush = makeRequestCall(this.flush);
    this.requestErrorThrow = makeRequestCallFromTimer(() => {
      if (this.pendingErrors.length) {
        throw this.pendingErrors.shift();
      }
    });
  }
}

;// ./node_modules/@react-dnd/asap/dist/RawTask.js
class RawTask {
  call() {
    try {
      this.task && this.task();
    } catch (error) {
      this.onError(error);
    } finally {
      this.task = null;
      this.release(this);
    }
  }
  constructor(onError, release) {
    this.onError = onError;
    this.release = release;
    this.task = null;
  }
}

;// ./node_modules/@react-dnd/asap/dist/TaskFactory.js

class TaskFactory {
  create(task) {
    const tasks = this.freeTasks;
    const t1 = tasks.length ? tasks.pop() : new RawTask(
      this.onError,
      (t) => tasks[tasks.length] = t
    );
    t1.task = task;
    return t1;
  }
  constructor(onError) {
    this.onError = onError;
    this.freeTasks = [];
  }
}

;// ./node_modules/@react-dnd/asap/dist/asap.js


const asapQueue = new AsapQueue();
const taskFactory = new TaskFactory(asapQueue.registerPendingError);
function asap(task) {
  asapQueue.enqueueTask(taskFactory.create(task));
}

;// ./node_modules/@react-dnd/asap/dist/index.js





;// ./node_modules/dnd-core/dist/actions/registry.js
const ADD_SOURCE = "dnd-core/ADD_SOURCE";
const ADD_TARGET = "dnd-core/ADD_TARGET";
const REMOVE_SOURCE = "dnd-core/REMOVE_SOURCE";
const REMOVE_TARGET = "dnd-core/REMOVE_TARGET";
function addSource(sourceId) {
  return {
    type: ADD_SOURCE,
    payload: {
      sourceId
    }
  };
}
function addTarget(targetId) {
  return {
    type: ADD_TARGET,
    payload: {
      targetId
    }
  };
}
function removeSource(sourceId) {
  return {
    type: REMOVE_SOURCE,
    payload: {
      sourceId
    }
  };
}
function removeTarget(targetId) {
  return {
    type: REMOVE_TARGET,
    payload: {
      targetId
    }
  };
}

;// ./node_modules/dnd-core/dist/contracts.js

function validateSourceContract(source) {
  (0,invariant_dist/* invariant */.V)(typeof source.canDrag === "function", "Expected canDrag to be a function.");
  (0,invariant_dist/* invariant */.V)(typeof source.beginDrag === "function", "Expected beginDrag to be a function.");
  (0,invariant_dist/* invariant */.V)(typeof source.endDrag === "function", "Expected endDrag to be a function.");
}
function validateTargetContract(target) {
  (0,invariant_dist/* invariant */.V)(typeof target.canDrop === "function", "Expected canDrop to be a function.");
  (0,invariant_dist/* invariant */.V)(typeof target.hover === "function", "Expected hover to be a function.");
  (0,invariant_dist/* invariant */.V)(typeof target.drop === "function", "Expected beginDrag to be a function.");
}
function validateType(type, allowArray) {
  if (allowArray && Array.isArray(type)) {
    type.forEach(
      (t) => validateType(t, false)
    );
    return;
  }
  (0,invariant_dist/* invariant */.V)(typeof type === "string" || typeof type === "symbol", allowArray ? "Type can only be a string, a symbol, or an array of either." : "Type can only be a string or a symbol.");
}

;// ./node_modules/dnd-core/dist/interfaces.js
var HandlerRole;
(function(HandlerRole2) {
  HandlerRole2["SOURCE"] = "SOURCE";
  HandlerRole2["TARGET"] = "TARGET";
})(HandlerRole || (HandlerRole = {}));

;// ./node_modules/dnd-core/dist/utils/getNextUniqueId.js
let nextUniqueId = 0;
function getNextUniqueId() {
  return nextUniqueId++;
}

;// ./node_modules/dnd-core/dist/classes/HandlerRegistryImpl.js






function getNextHandlerId(role) {
  const id = getNextUniqueId().toString();
  switch (role) {
    case HandlerRole.SOURCE:
      return `S${id}`;
    case HandlerRole.TARGET:
      return `T${id}`;
    default:
      throw new Error(`Unknown Handler Role: ${role}`);
  }
}
function parseRoleFromHandlerId(handlerId) {
  switch (handlerId[0]) {
    case "S":
      return HandlerRole.SOURCE;
    case "T":
      return HandlerRole.TARGET;
    default:
      throw new Error(`Cannot parse handler ID: ${handlerId}`);
  }
}
function mapContainsValue(map, searchValue) {
  const entries = map.entries();
  let isDone = false;
  do {
    const { done, value: [, value] } = entries.next();
    if (value === searchValue) {
      return true;
    }
    isDone = !!done;
  } while (!isDone);
  return false;
}
class HandlerRegistryImpl {
  addSource(type, source) {
    validateType(type);
    validateSourceContract(source);
    const sourceId = this.addHandler(HandlerRole.SOURCE, type, source);
    this.store.dispatch(addSource(sourceId));
    return sourceId;
  }
  addTarget(type, target) {
    validateType(type, true);
    validateTargetContract(target);
    const targetId = this.addHandler(HandlerRole.TARGET, type, target);
    this.store.dispatch(addTarget(targetId));
    return targetId;
  }
  containsHandler(handler) {
    return mapContainsValue(this.dragSources, handler) || mapContainsValue(this.dropTargets, handler);
  }
  getSource(sourceId, includePinned = false) {
    (0,invariant_dist/* invariant */.V)(this.isSourceId(sourceId), "Expected a valid source ID.");
    const isPinned = includePinned && sourceId === this.pinnedSourceId;
    const source = isPinned ? this.pinnedSource : this.dragSources.get(sourceId);
    return source;
  }
  getTarget(targetId) {
    (0,invariant_dist/* invariant */.V)(this.isTargetId(targetId), "Expected a valid target ID.");
    return this.dropTargets.get(targetId);
  }
  getSourceType(sourceId) {
    (0,invariant_dist/* invariant */.V)(this.isSourceId(sourceId), "Expected a valid source ID.");
    return this.types.get(sourceId);
  }
  getTargetType(targetId) {
    (0,invariant_dist/* invariant */.V)(this.isTargetId(targetId), "Expected a valid target ID.");
    return this.types.get(targetId);
  }
  isSourceId(handlerId) {
    const role = parseRoleFromHandlerId(handlerId);
    return role === HandlerRole.SOURCE;
  }
  isTargetId(handlerId) {
    const role = parseRoleFromHandlerId(handlerId);
    return role === HandlerRole.TARGET;
  }
  removeSource(sourceId) {
    (0,invariant_dist/* invariant */.V)(this.getSource(sourceId), "Expected an existing source.");
    this.store.dispatch(removeSource(sourceId));
    asap(() => {
      this.dragSources.delete(sourceId);
      this.types.delete(sourceId);
    });
  }
  removeTarget(targetId) {
    (0,invariant_dist/* invariant */.V)(this.getTarget(targetId), "Expected an existing target.");
    this.store.dispatch(removeTarget(targetId));
    this.dropTargets.delete(targetId);
    this.types.delete(targetId);
  }
  pinSource(sourceId) {
    const source = this.getSource(sourceId);
    (0,invariant_dist/* invariant */.V)(source, "Expected an existing source.");
    this.pinnedSourceId = sourceId;
    this.pinnedSource = source;
  }
  unpinSource() {
    (0,invariant_dist/* invariant */.V)(this.pinnedSource, "No source is pinned at the time.");
    this.pinnedSourceId = null;
    this.pinnedSource = null;
  }
  addHandler(role, type, handler) {
    const id = getNextHandlerId(role);
    this.types.set(id, type);
    if (role === HandlerRole.SOURCE) {
      this.dragSources.set(id, handler);
    } else if (role === HandlerRole.TARGET) {
      this.dropTargets.set(id, handler);
    }
    return id;
  }
  constructor(store) {
    this.types = /* @__PURE__ */ new Map();
    this.dragSources = /* @__PURE__ */ new Map();
    this.dropTargets = /* @__PURE__ */ new Map();
    this.pinnedSourceId = null;
    this.pinnedSource = null;
    this.store = store;
  }
}

;// ./node_modules/dnd-core/dist/utils/equality.js
const strictEquality = (a, b) => a === b;
function areCoordsEqual(offsetA, offsetB) {
  if (!offsetA && !offsetB) {
    return true;
  } else if (!offsetA || !offsetB) {
    return false;
  } else {
    return offsetA.x === offsetB.x && offsetA.y === offsetB.y;
  }
}
function areArraysEqual(a, b, isEqual = strictEquality) {
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; ++i) {
    if (!isEqual(a[i], b[i])) {
      return false;
    }
  }
  return true;
}

;// ./node_modules/dnd-core/dist/reducers/dirtyHandlerIds.js





function reduce(_state = NONE, action) {
  switch (action.type) {
    case HOVER:
      break;
    case ADD_SOURCE:
    case ADD_TARGET:
    case REMOVE_TARGET:
    case REMOVE_SOURCE:
      return NONE;
    case BEGIN_DRAG:
    case PUBLISH_DRAG_SOURCE:
    case END_DRAG:
    case DROP:
    default:
      return ALL;
  }
  const { targetIds = [], prevTargetIds = [] } = action.payload;
  const result = xor(targetIds, prevTargetIds);
  const didChange = result.length > 0 || !areArraysEqual(targetIds, prevTargetIds);
  if (!didChange) {
    return NONE;
  }
  const prevInnermostTargetId = prevTargetIds[prevTargetIds.length - 1];
  const innermostTargetId = targetIds[targetIds.length - 1];
  if (prevInnermostTargetId !== innermostTargetId) {
    if (prevInnermostTargetId) {
      result.push(prevInnermostTargetId);
    }
    if (innermostTargetId) {
      result.push(innermostTargetId);
    }
  }
  return result;
}

;// ./node_modules/dnd-core/dist/reducers/dragOffset.js
function dragOffset_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function dragOffset_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      dragOffset_defineProperty(target, key, source[key]);
    });
  }
  return target;
}


const initialState = {
  initialSourceClientOffset: null,
  initialClientOffset: null,
  clientOffset: null
};
function dragOffset_reduce(state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case INIT_COORDS:
    case BEGIN_DRAG:
      return {
        initialSourceClientOffset: payload.sourceClientOffset,
        initialClientOffset: payload.clientOffset,
        clientOffset: payload.clientOffset
      };
    case HOVER:
      if (areCoordsEqual(state.clientOffset, payload.clientOffset)) {
        return state;
      }
      return dragOffset_objectSpread({}, state, {
        clientOffset: payload.clientOffset
      });
    case END_DRAG:
    case DROP:
      return initialState;
    default:
      return state;
  }
}

;// ./node_modules/dnd-core/dist/reducers/dragOperation.js
function dragOperation_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function dragOperation_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      dragOperation_defineProperty(target, key, source[key]);
    });
  }
  return target;
}



const dragOperation_initialState = {
  itemType: null,
  item: null,
  sourceId: null,
  targetIds: [],
  dropResult: null,
  didDrop: false,
  isSourcePublic: null
};
function dragOperation_reduce(state = dragOperation_initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case BEGIN_DRAG:
      return dragOperation_objectSpread({}, state, {
        itemType: payload.itemType,
        item: payload.item,
        sourceId: payload.sourceId,
        isSourcePublic: payload.isSourcePublic,
        dropResult: null,
        didDrop: false
      });
    case PUBLISH_DRAG_SOURCE:
      return dragOperation_objectSpread({}, state, {
        isSourcePublic: true
      });
    case HOVER:
      return dragOperation_objectSpread({}, state, {
        targetIds: payload.targetIds
      });
    case REMOVE_TARGET:
      if (state.targetIds.indexOf(payload.targetId) === -1) {
        return state;
      }
      return dragOperation_objectSpread({}, state, {
        targetIds: without(state.targetIds, payload.targetId)
      });
    case DROP:
      return dragOperation_objectSpread({}, state, {
        dropResult: payload.dropResult,
        didDrop: true,
        targetIds: []
      });
    case END_DRAG:
      return dragOperation_objectSpread({}, state, {
        itemType: null,
        item: null,
        sourceId: null,
        dropResult: null,
        didDrop: false,
        isSourcePublic: null,
        targetIds: []
      });
    default:
      return state;
  }
}

;// ./node_modules/dnd-core/dist/reducers/refCount.js

function refCount_reduce(state = 0, action) {
  switch (action.type) {
    case ADD_SOURCE:
    case ADD_TARGET:
      return state + 1;
    case REMOVE_SOURCE:
    case REMOVE_TARGET:
      return state - 1;
    default:
      return state;
  }
}

;// ./node_modules/dnd-core/dist/reducers/stateId.js
function stateId_reduce(state = 0) {
  return state + 1;
}

;// ./node_modules/dnd-core/dist/reducers/index.js
function reducers_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function reducers_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      reducers_defineProperty(target, key, source[key]);
    });
  }
  return target;
}






function reducers_reduce(state = {}, action) {
  return {
    dirtyHandlerIds: reduce(state.dirtyHandlerIds, {
      type: action.type,
      payload: reducers_objectSpread({}, action.payload, {
        prevTargetIds: get(state, "dragOperation.targetIds", [])
      })
    }),
    dragOffset: dragOffset_reduce(state.dragOffset, action),
    refCount: refCount_reduce(state.refCount, action),
    dragOperation: dragOperation_reduce(state.dragOperation, action),
    stateId: stateId_reduce(state.stateId)
  };
}

;// ./node_modules/dnd-core/dist/createDragDropManager.js





function createDragDropManager(backendFactory, globalContext = void 0, backendOptions = {}, debugMode = false) {
  const store = makeStoreInstance(debugMode);
  const monitor = new DragDropMonitorImpl(store, new HandlerRegistryImpl(store));
  const manager = new DragDropManagerImpl(store, monitor);
  const backend = backendFactory(manager, globalContext, backendOptions);
  manager.receiveBackend(backend);
  return manager;
}
function makeStoreInstance(debugMode) {
  const reduxDevTools = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__;
  return (0,redux/* createStore */.y$)(reducers_reduce, debugMode && reduxDevTools && reduxDevTools({
    name: "dnd-core",
    instanceId: "dnd-core"
  }));
}

// EXTERNAL MODULE: ./node_modules/react-dnd/dist/core/DndContext.js
var DndContext = __webpack_require__(47182);
;// ./node_modules/react-dnd/dist/core/DndProvider.js
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}




let refCount = 0;
const INSTANCE_SYM = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__");
var DndProvider = /* @__PURE__ */ (0,react.memo)(function DndProvider2(_param) {
  var { children } = _param, props = _objectWithoutProperties(_param, [
    "children"
  ]);
  const [manager, isGlobalInstance] = getDndContextValue(props);
  (0,react.useEffect)(() => {
    if (isGlobalInstance) {
      const context = getGlobalContext();
      ++refCount;
      return () => {
        if (--refCount === 0) {
          context[INSTANCE_SYM] = null;
        }
      };
    }
    return;
  }, []);
  return /* @__PURE__ */ (0,react_jsx_runtime.jsx)(DndContext/* DndContext */.M.Provider, {
    value: manager,
    children
  });
});

function getDndContextValue(props) {
  if ("manager" in props) {
    const manager2 = {
      dragDropManager: props.manager
    };
    return [
      manager2,
      false
    ];
  }
  const manager = createSingletonDndContext(props.backend, props.context, props.options, props.debugMode);
  const isGlobalInstance = !props.context;
  return [
    manager,
    isGlobalInstance
  ];
}
function createSingletonDndContext(backend, context = getGlobalContext(), options, debugMode) {
  const ctx = context;
  if (!ctx[INSTANCE_SYM]) {
    ctx[INSTANCE_SYM] = {
      dragDropManager: createDragDropManager(backend, context, options, debugMode)
    };
  }
  return ctx[INSTANCE_SYM];
}
function getGlobalContext() {
  return typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : window;
}

;// ./node_modules/react-dnd-html5-backend/dist/utils/js_utils.js
function memoize(fn) {
  let result = null;
  const memoized = () => {
    if (result == null) {
      result = fn();
    }
    return result;
  };
  return memoized;
}
function js_utils_without(items, item) {
  return items.filter(
    (i) => i !== item
  );
}
function union(itemsA, itemsB) {
  const set = /* @__PURE__ */ new Set();
  const insertItem = (item) => set.add(item);
  itemsA.forEach(insertItem);
  itemsB.forEach(insertItem);
  const result = [];
  set.forEach(
    (key) => result.push(key)
  );
  return result;
}

;// ./node_modules/react-dnd-html5-backend/dist/EnterLeaveCounter.js

class EnterLeaveCounter {
  enter(enteringNode) {
    const previousLength = this.entered.length;
    const isNodeEntered = (node) => this.isNodeInDocument(node) && (!node.contains || node.contains(enteringNode));
    this.entered = union(this.entered.filter(isNodeEntered), [
      enteringNode
    ]);
    return previousLength === 0 && this.entered.length > 0;
  }
  leave(leavingNode) {
    const previousLength = this.entered.length;
    this.entered = js_utils_without(this.entered.filter(this.isNodeInDocument), leavingNode);
    return previousLength > 0 && this.entered.length === 0;
  }
  reset() {
    this.entered = [];
  }
  constructor(isNodeInDocument) {
    this.entered = [];
    this.isNodeInDocument = isNodeInDocument;
  }
}

;// ./node_modules/react-dnd-html5-backend/dist/NativeDragSources/NativeDragSource.js
class NativeDragSource {
  initializeExposedProperties() {
    Object.keys(this.config.exposeProperties).forEach((property) => {
      Object.defineProperty(this.item, property, {
        configurable: true,
        enumerable: true,
        get() {
          console.warn(`Browser doesn't allow reading "${property}" until the drop event.`);
          return null;
        }
      });
    });
  }
  loadDataTransfer(dataTransfer) {
    if (dataTransfer) {
      const newProperties = {};
      Object.keys(this.config.exposeProperties).forEach((property) => {
        const propertyFn = this.config.exposeProperties[property];
        if (propertyFn != null) {
          newProperties[property] = {
            value: propertyFn(dataTransfer, this.config.matchesTypes),
            configurable: true,
            enumerable: true
          };
        }
      });
      Object.defineProperties(this.item, newProperties);
    }
  }
  canDrag() {
    return true;
  }
  beginDrag() {
    return this.item;
  }
  isDragging(monitor, handle) {
    return handle === monitor.getSourceId();
  }
  endDrag() {
  }
  constructor(config) {
    this.config = config;
    this.item = {};
    this.initializeExposedProperties();
  }
}

;// ./node_modules/react-dnd-html5-backend/dist/NativeTypes.js
const FILE = "__NATIVE_FILE__";
const URL = "__NATIVE_URL__";
const TEXT = "__NATIVE_TEXT__";
const HTML = "__NATIVE_HTML__";

;// ./node_modules/react-dnd-html5-backend/dist/NativeDragSources/getDataFromDataTransfer.js
function getDataFromDataTransfer(dataTransfer, typesToTry, defaultValue) {
  const result = typesToTry.reduce(
    (resultSoFar, typeToTry) => resultSoFar || dataTransfer.getData(typeToTry),
    ""
  );
  return result != null ? result : defaultValue;
}

;// ./node_modules/react-dnd-html5-backend/dist/NativeDragSources/nativeTypesConfig.js


const nativeTypesConfig = {
  [FILE]: {
    exposeProperties: {
      files: (dataTransfer) => Array.prototype.slice.call(dataTransfer.files),
      items: (dataTransfer) => dataTransfer.items,
      dataTransfer: (dataTransfer) => dataTransfer
    },
    matchesTypes: [
      "Files"
    ]
  },
  [HTML]: {
    exposeProperties: {
      html: (dataTransfer, matchesTypes) => getDataFromDataTransfer(dataTransfer, matchesTypes, ""),
      dataTransfer: (dataTransfer) => dataTransfer
    },
    matchesTypes: [
      "Html",
      "text/html"
    ]
  },
  [URL]: {
    exposeProperties: {
      urls: (dataTransfer, matchesTypes) => getDataFromDataTransfer(dataTransfer, matchesTypes, "").split("\n"),
      dataTransfer: (dataTransfer) => dataTransfer
    },
    matchesTypes: [
      "Url",
      "text/uri-list"
    ]
  },
  [TEXT]: {
    exposeProperties: {
      text: (dataTransfer, matchesTypes) => getDataFromDataTransfer(dataTransfer, matchesTypes, ""),
      dataTransfer: (dataTransfer) => dataTransfer
    },
    matchesTypes: [
      "Text",
      "text/plain"
    ]
  }
};

;// ./node_modules/react-dnd-html5-backend/dist/NativeDragSources/index.js


function createNativeDragSource(type, dataTransfer) {
  const config = nativeTypesConfig[type];
  if (!config) {
    throw new Error(`native type ${type} has no configuration`);
  }
  const result = new NativeDragSource(config);
  result.loadDataTransfer(dataTransfer);
  return result;
}
function matchNativeItemType(dataTransfer) {
  if (!dataTransfer) {
    return null;
  }
  const dataTransferTypes = Array.prototype.slice.call(dataTransfer.types || []);
  return Object.keys(nativeTypesConfig).filter((nativeItemType) => {
    const typeConfig = nativeTypesConfig[nativeItemType];
    if (!(typeConfig === null || typeConfig === void 0 ? void 0 : typeConfig.matchesTypes)) {
      return false;
    }
    return typeConfig.matchesTypes.some(
      (t) => dataTransferTypes.indexOf(t) > -1
    );
  })[0] || null;
}

;// ./node_modules/react-dnd-html5-backend/dist/BrowserDetector.js

const isFirefox = memoize(
  () => /firefox/i.test(navigator.userAgent)
);
const isSafari = memoize(
  () => Boolean(window.safari)
);

;// ./node_modules/react-dnd-html5-backend/dist/MonotonicInterpolant.js
class MonotonicInterpolant {
  interpolate(x) {
    const { xs, ys, c1s, c2s, c3s } = this;
    let i = xs.length - 1;
    if (x === xs[i]) {
      return ys[i];
    }
    let low = 0;
    let high = c3s.length - 1;
    let mid;
    while (low <= high) {
      mid = Math.floor(0.5 * (low + high));
      const xHere = xs[mid];
      if (xHere < x) {
        low = mid + 1;
      } else if (xHere > x) {
        high = mid - 1;
      } else {
        return ys[mid];
      }
    }
    i = Math.max(0, high);
    const diff = x - xs[i];
    const diffSq = diff * diff;
    return ys[i] + c1s[i] * diff + c2s[i] * diffSq + c3s[i] * diff * diffSq;
  }
  constructor(xs, ys) {
    const { length } = xs;
    const indexes = [];
    for (let i = 0; i < length; i++) {
      indexes.push(i);
    }
    indexes.sort(
      (a, b) => xs[a] < xs[b] ? -1 : 1
    );
    const dys = [];
    const dxs = [];
    const ms = [];
    let dx;
    let dy;
    for (let i1 = 0; i1 < length - 1; i1++) {
      dx = xs[i1 + 1] - xs[i1];
      dy = ys[i1 + 1] - ys[i1];
      dxs.push(dx);
      dys.push(dy);
      ms.push(dy / dx);
    }
    const c1s = [
      ms[0]
    ];
    for (let i2 = 0; i2 < dxs.length - 1; i2++) {
      const m2 = ms[i2];
      const mNext = ms[i2 + 1];
      if (m2 * mNext <= 0) {
        c1s.push(0);
      } else {
        dx = dxs[i2];
        const dxNext = dxs[i2 + 1];
        const common = dx + dxNext;
        c1s.push(3 * common / ((common + dxNext) / m2 + (common + dx) / mNext));
      }
    }
    c1s.push(ms[ms.length - 1]);
    const c2s = [];
    const c3s = [];
    let m;
    for (let i3 = 0; i3 < c1s.length - 1; i3++) {
      m = ms[i3];
      const c1 = c1s[i3];
      const invDx = 1 / dxs[i3];
      const common = c1 + c1s[i3 + 1] - m - m;
      c2s.push((m - c1 - common) * invDx);
      c3s.push(common * invDx * invDx);
    }
    this.xs = xs;
    this.ys = ys;
    this.c1s = c1s;
    this.c2s = c2s;
    this.c3s = c3s;
  }
}

;// ./node_modules/react-dnd-html5-backend/dist/OffsetUtils.js


const ELEMENT_NODE = 1;
function getNodeClientOffset(node) {
  const el = node.nodeType === ELEMENT_NODE ? node : node.parentElement;
  if (!el) {
    return null;
  }
  const { top, left } = el.getBoundingClientRect();
  return {
    x: left,
    y: top
  };
}
function getEventClientOffset(e) {
  return {
    x: e.clientX,
    y: e.clientY
  };
}
function isImageNode(node) {
  var ref;
  return node.nodeName === "IMG" && (isFirefox() || !((ref = document.documentElement) === null || ref === void 0 ? void 0 : ref.contains(node)));
}
function getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight) {
  let dragPreviewWidth = isImage ? dragPreview.width : sourceWidth;
  let dragPreviewHeight = isImage ? dragPreview.height : sourceHeight;
  if (isSafari() && isImage) {
    dragPreviewHeight /= window.devicePixelRatio;
    dragPreviewWidth /= window.devicePixelRatio;
  }
  return {
    dragPreviewWidth,
    dragPreviewHeight
  };
}
function getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint, offsetPoint) {
  const isImage = isImageNode(dragPreview);
  const dragPreviewNode = isImage ? sourceNode : dragPreview;
  const dragPreviewNodeOffsetFromClient = getNodeClientOffset(dragPreviewNode);
  const offsetFromDragPreview = {
    x: clientOffset.x - dragPreviewNodeOffsetFromClient.x,
    y: clientOffset.y - dragPreviewNodeOffsetFromClient.y
  };
  const { offsetWidth: sourceWidth, offsetHeight: sourceHeight } = sourceNode;
  const { anchorX, anchorY } = anchorPoint;
  const { dragPreviewWidth, dragPreviewHeight } = getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight);
  const calculateYOffset = () => {
    const interpolantY = new MonotonicInterpolant([
      0,
      0.5,
      1
    ], [
      // Dock to the top
      offsetFromDragPreview.y,
      // Align at the center
      offsetFromDragPreview.y / sourceHeight * dragPreviewHeight,
      // Dock to the bottom
      offsetFromDragPreview.y + dragPreviewHeight - sourceHeight
    ]);
    let y = interpolantY.interpolate(anchorY);
    if (isSafari() && isImage) {
      y += (window.devicePixelRatio - 1) * dragPreviewHeight;
    }
    return y;
  };
  const calculateXOffset = () => {
    const interpolantX = new MonotonicInterpolant([
      0,
      0.5,
      1
    ], [
      // Dock to the left
      offsetFromDragPreview.x,
      // Align at the center
      offsetFromDragPreview.x / sourceWidth * dragPreviewWidth,
      // Dock to the right
      offsetFromDragPreview.x + dragPreviewWidth - sourceWidth
    ]);
    return interpolantX.interpolate(anchorX);
  };
  const { offsetX, offsetY } = offsetPoint;
  const isManualOffsetX = offsetX === 0 || offsetX;
  const isManualOffsetY = offsetY === 0 || offsetY;
  return {
    x: isManualOffsetX ? offsetX : calculateXOffset(),
    y: isManualOffsetY ? offsetY : calculateYOffset()
  };
}

;// ./node_modules/react-dnd-html5-backend/dist/OptionsReader.js
class OptionsReader {
  get window() {
    if (this.globalContext) {
      return this.globalContext;
    } else if (typeof window !== "undefined") {
      return window;
    }
    return void 0;
  }
  get document() {
    var ref;
    if ((ref = this.globalContext) === null || ref === void 0 ? void 0 : ref.document) {
      return this.globalContext.document;
    } else if (this.window) {
      return this.window.document;
    } else {
      return void 0;
    }
  }
  get rootElement() {
    var ref;
    return ((ref = this.optionsArgs) === null || ref === void 0 ? void 0 : ref.rootElement) || this.window;
  }
  constructor(globalContext, options) {
    this.ownerDocument = null;
    this.globalContext = globalContext;
    this.optionsArgs = options;
  }
}

;// ./node_modules/react-dnd-html5-backend/dist/HTML5BackendImpl.js
function HTML5BackendImpl_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function HTML5BackendImpl_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      HTML5BackendImpl_defineProperty(target, key, source[key]);
    });
  }
  return target;
}





class HTML5BackendImpl {
  /**
  * Generate profiling statistics for the HTML5Backend.
  */
  profile() {
    var ref, ref1;
    return {
      sourcePreviewNodes: this.sourcePreviewNodes.size,
      sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
      sourceNodeOptions: this.sourceNodeOptions.size,
      sourceNodes: this.sourceNodes.size,
      dragStartSourceIds: ((ref = this.dragStartSourceIds) === null || ref === void 0 ? void 0 : ref.length) || 0,
      dropTargetIds: this.dropTargetIds.length,
      dragEnterTargetIds: this.dragEnterTargetIds.length,
      dragOverTargetIds: ((ref1 = this.dragOverTargetIds) === null || ref1 === void 0 ? void 0 : ref1.length) || 0
    };
  }
  // public for test
  get window() {
    return this.options.window;
  }
  get document() {
    return this.options.document;
  }
  /**
  * Get the root element to use for event subscriptions
  */
  get rootElement() {
    return this.options.rootElement;
  }
  setup() {
    const root = this.rootElement;
    if (root === void 0) {
      return;
    }
    if (root.__isReactDndBackendSetUp) {
      throw new Error("Cannot have two HTML5 backends at the same time.");
    }
    root.__isReactDndBackendSetUp = true;
    this.addEventListeners(root);
  }
  teardown() {
    const root = this.rootElement;
    if (root === void 0) {
      return;
    }
    root.__isReactDndBackendSetUp = false;
    this.removeEventListeners(this.rootElement);
    this.clearCurrentDragSourceNode();
    if (this.asyncEndDragFrameId) {
      var ref;
      (ref = this.window) === null || ref === void 0 ? void 0 : ref.cancelAnimationFrame(this.asyncEndDragFrameId);
    }
  }
  connectDragPreview(sourceId, node, options) {
    this.sourcePreviewNodeOptions.set(sourceId, options);
    this.sourcePreviewNodes.set(sourceId, node);
    return () => {
      this.sourcePreviewNodes.delete(sourceId);
      this.sourcePreviewNodeOptions.delete(sourceId);
    };
  }
  connectDragSource(sourceId, node, options) {
    this.sourceNodes.set(sourceId, node);
    this.sourceNodeOptions.set(sourceId, options);
    const handleDragStart = (e) => this.handleDragStart(e, sourceId);
    const handleSelectStart = (e) => this.handleSelectStart(e);
    node.setAttribute("draggable", "true");
    node.addEventListener("dragstart", handleDragStart);
    node.addEventListener("selectstart", handleSelectStart);
    return () => {
      this.sourceNodes.delete(sourceId);
      this.sourceNodeOptions.delete(sourceId);
      node.removeEventListener("dragstart", handleDragStart);
      node.removeEventListener("selectstart", handleSelectStart);
      node.setAttribute("draggable", "false");
    };
  }
  connectDropTarget(targetId, node) {
    const handleDragEnter = (e) => this.handleDragEnter(e, targetId);
    const handleDragOver = (e) => this.handleDragOver(e, targetId);
    const handleDrop = (e) => this.handleDrop(e, targetId);
    node.addEventListener("dragenter", handleDragEnter);
    node.addEventListener("dragover", handleDragOver);
    node.addEventListener("drop", handleDrop);
    return () => {
      node.removeEventListener("dragenter", handleDragEnter);
      node.removeEventListener("dragover", handleDragOver);
      node.removeEventListener("drop", handleDrop);
    };
  }
  addEventListeners(target) {
    if (!target.addEventListener) {
      return;
    }
    target.addEventListener("dragstart", this.handleTopDragStart);
    target.addEventListener("dragstart", this.handleTopDragStartCapture, true);
    target.addEventListener("dragend", this.handleTopDragEndCapture, true);
    target.addEventListener("dragenter", this.handleTopDragEnter);
    target.addEventListener("dragenter", this.handleTopDragEnterCapture, true);
    target.addEventListener("dragleave", this.handleTopDragLeaveCapture, true);
    target.addEventListener("dragover", this.handleTopDragOver);
    target.addEventListener("dragover", this.handleTopDragOverCapture, true);
    target.addEventListener("drop", this.handleTopDrop);
    target.addEventListener("drop", this.handleTopDropCapture, true);
  }
  removeEventListeners(target) {
    if (!target.removeEventListener) {
      return;
    }
    target.removeEventListener("dragstart", this.handleTopDragStart);
    target.removeEventListener("dragstart", this.handleTopDragStartCapture, true);
    target.removeEventListener("dragend", this.handleTopDragEndCapture, true);
    target.removeEventListener("dragenter", this.handleTopDragEnter);
    target.removeEventListener("dragenter", this.handleTopDragEnterCapture, true);
    target.removeEventListener("dragleave", this.handleTopDragLeaveCapture, true);
    target.removeEventListener("dragover", this.handleTopDragOver);
    target.removeEventListener("dragover", this.handleTopDragOverCapture, true);
    target.removeEventListener("drop", this.handleTopDrop);
    target.removeEventListener("drop", this.handleTopDropCapture, true);
  }
  getCurrentSourceNodeOptions() {
    const sourceId = this.monitor.getSourceId();
    const sourceNodeOptions = this.sourceNodeOptions.get(sourceId);
    return HTML5BackendImpl_objectSpread({
      dropEffect: this.altKeyPressed ? "copy" : "move"
    }, sourceNodeOptions || {});
  }
  getCurrentDropEffect() {
    if (this.isDraggingNativeItem()) {
      return "copy";
    }
    return this.getCurrentSourceNodeOptions().dropEffect;
  }
  getCurrentSourcePreviewNodeOptions() {
    const sourceId = this.monitor.getSourceId();
    const sourcePreviewNodeOptions = this.sourcePreviewNodeOptions.get(sourceId);
    return HTML5BackendImpl_objectSpread({
      anchorX: 0.5,
      anchorY: 0.5,
      captureDraggingState: false
    }, sourcePreviewNodeOptions || {});
  }
  isDraggingNativeItem() {
    const itemType = this.monitor.getItemType();
    return Object.keys(NativeTypes_namespaceObject).some(
      (key) => NativeTypes_namespaceObject[key] === itemType
    );
  }
  beginDragNativeItem(type, dataTransfer) {
    this.clearCurrentDragSourceNode();
    this.currentNativeSource = createNativeDragSource(type, dataTransfer);
    this.currentNativeHandle = this.registry.addSource(type, this.currentNativeSource);
    this.actions.beginDrag([
      this.currentNativeHandle
    ]);
  }
  setCurrentDragSourceNode(node) {
    this.clearCurrentDragSourceNode();
    this.currentDragSourceNode = node;
    const MOUSE_MOVE_TIMEOUT = 1e3;
    this.mouseMoveTimeoutTimer = setTimeout(() => {
      var ref;
      return (ref = this.rootElement) === null || ref === void 0 ? void 0 : ref.addEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, true);
    }, MOUSE_MOVE_TIMEOUT);
  }
  clearCurrentDragSourceNode() {
    if (this.currentDragSourceNode) {
      this.currentDragSourceNode = null;
      if (this.rootElement) {
        var ref;
        (ref = this.window) === null || ref === void 0 ? void 0 : ref.clearTimeout(this.mouseMoveTimeoutTimer || void 0);
        this.rootElement.removeEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, true);
      }
      this.mouseMoveTimeoutTimer = null;
      return true;
    }
    return false;
  }
  handleDragStart(e, sourceId) {
    if (e.defaultPrevented) {
      return;
    }
    if (!this.dragStartSourceIds) {
      this.dragStartSourceIds = [];
    }
    this.dragStartSourceIds.unshift(sourceId);
  }
  handleDragEnter(_e, targetId) {
    this.dragEnterTargetIds.unshift(targetId);
  }
  handleDragOver(_e, targetId) {
    if (this.dragOverTargetIds === null) {
      this.dragOverTargetIds = [];
    }
    this.dragOverTargetIds.unshift(targetId);
  }
  handleDrop(_e, targetId) {
    this.dropTargetIds.unshift(targetId);
  }
  constructor(manager, globalContext, options) {
    this.sourcePreviewNodes = /* @__PURE__ */ new Map();
    this.sourcePreviewNodeOptions = /* @__PURE__ */ new Map();
    this.sourceNodes = /* @__PURE__ */ new Map();
    this.sourceNodeOptions = /* @__PURE__ */ new Map();
    this.dragStartSourceIds = null;
    this.dropTargetIds = [];
    this.dragEnterTargetIds = [];
    this.currentNativeSource = null;
    this.currentNativeHandle = null;
    this.currentDragSourceNode = null;
    this.altKeyPressed = false;
    this.mouseMoveTimeoutTimer = null;
    this.asyncEndDragFrameId = null;
    this.dragOverTargetIds = null;
    this.lastClientOffset = null;
    this.hoverRafId = null;
    this.getSourceClientOffset = (sourceId) => {
      const source = this.sourceNodes.get(sourceId);
      return source && getNodeClientOffset(source) || null;
    };
    this.endDragNativeItem = () => {
      if (!this.isDraggingNativeItem()) {
        return;
      }
      this.actions.endDrag();
      if (this.currentNativeHandle) {
        this.registry.removeSource(this.currentNativeHandle);
      }
      this.currentNativeHandle = null;
      this.currentNativeSource = null;
    };
    this.isNodeInDocument = (node) => {
      return Boolean(node && this.document && this.document.body && this.document.body.contains(node));
    };
    this.endDragIfSourceWasRemovedFromDOM = () => {
      const node = this.currentDragSourceNode;
      if (node == null || this.isNodeInDocument(node)) {
        return;
      }
      if (this.clearCurrentDragSourceNode() && this.monitor.isDragging()) {
        this.actions.endDrag();
      }
      this.cancelHover();
    };
    this.scheduleHover = (dragOverTargetIds) => {
      if (this.hoverRafId === null && typeof requestAnimationFrame !== "undefined") {
        this.hoverRafId = requestAnimationFrame(() => {
          if (this.monitor.isDragging()) {
            this.actions.hover(dragOverTargetIds || [], {
              clientOffset: this.lastClientOffset
            });
          }
          this.hoverRafId = null;
        });
      }
    };
    this.cancelHover = () => {
      if (this.hoverRafId !== null && typeof cancelAnimationFrame !== "undefined") {
        cancelAnimationFrame(this.hoverRafId);
        this.hoverRafId = null;
      }
    };
    this.handleTopDragStartCapture = () => {
      this.clearCurrentDragSourceNode();
      this.dragStartSourceIds = [];
    };
    this.handleTopDragStart = (e) => {
      if (e.defaultPrevented) {
        return;
      }
      const { dragStartSourceIds } = this;
      this.dragStartSourceIds = null;
      const clientOffset = getEventClientOffset(e);
      if (this.monitor.isDragging()) {
        this.actions.endDrag();
        this.cancelHover();
      }
      this.actions.beginDrag(dragStartSourceIds || [], {
        publishSource: false,
        getSourceClientOffset: this.getSourceClientOffset,
        clientOffset
      });
      const { dataTransfer } = e;
      const nativeType = matchNativeItemType(dataTransfer);
      if (this.monitor.isDragging()) {
        if (dataTransfer && typeof dataTransfer.setDragImage === "function") {
          const sourceId = this.monitor.getSourceId();
          const sourceNode = this.sourceNodes.get(sourceId);
          const dragPreview = this.sourcePreviewNodes.get(sourceId) || sourceNode;
          if (dragPreview) {
            const { anchorX, anchorY, offsetX, offsetY } = this.getCurrentSourcePreviewNodeOptions();
            const anchorPoint = {
              anchorX,
              anchorY
            };
            const offsetPoint = {
              offsetX,
              offsetY
            };
            const dragPreviewOffset = getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint, offsetPoint);
            dataTransfer.setDragImage(dragPreview, dragPreviewOffset.x, dragPreviewOffset.y);
          }
        }
        try {
          dataTransfer === null || dataTransfer === void 0 ? void 0 : dataTransfer.setData("application/json", {});
        } catch (err) {
        }
        this.setCurrentDragSourceNode(e.target);
        const { captureDraggingState } = this.getCurrentSourcePreviewNodeOptions();
        if (!captureDraggingState) {
          setTimeout(
            () => this.actions.publishDragSource(),
            0
          );
        } else {
          this.actions.publishDragSource();
        }
      } else if (nativeType) {
        this.beginDragNativeItem(nativeType);
      } else if (dataTransfer && !dataTransfer.types && (e.target && !e.target.hasAttribute || !e.target.hasAttribute("draggable"))) {
        return;
      } else {
        e.preventDefault();
      }
    };
    this.handleTopDragEndCapture = () => {
      if (this.clearCurrentDragSourceNode() && this.monitor.isDragging()) {
        this.actions.endDrag();
      }
      this.cancelHover();
    };
    this.handleTopDragEnterCapture = (e) => {
      this.dragEnterTargetIds = [];
      if (this.isDraggingNativeItem()) {
        var ref;
        (ref = this.currentNativeSource) === null || ref === void 0 ? void 0 : ref.loadDataTransfer(e.dataTransfer);
      }
      const isFirstEnter = this.enterLeaveCounter.enter(e.target);
      if (!isFirstEnter || this.monitor.isDragging()) {
        return;
      }
      const { dataTransfer } = e;
      const nativeType = matchNativeItemType(dataTransfer);
      if (nativeType) {
        this.beginDragNativeItem(nativeType, dataTransfer);
      }
    };
    this.handleTopDragEnter = (e) => {
      const { dragEnterTargetIds } = this;
      this.dragEnterTargetIds = [];
      if (!this.monitor.isDragging()) {
        return;
      }
      this.altKeyPressed = e.altKey;
      if (dragEnterTargetIds.length > 0) {
        this.actions.hover(dragEnterTargetIds, {
          clientOffset: getEventClientOffset(e)
        });
      }
      const canDrop = dragEnterTargetIds.some(
        (targetId) => this.monitor.canDropOnTarget(targetId)
      );
      if (canDrop) {
        e.preventDefault();
        if (e.dataTransfer) {
          e.dataTransfer.dropEffect = this.getCurrentDropEffect();
        }
      }
    };
    this.handleTopDragOverCapture = (e) => {
      this.dragOverTargetIds = [];
      if (this.isDraggingNativeItem()) {
        var ref;
        (ref = this.currentNativeSource) === null || ref === void 0 ? void 0 : ref.loadDataTransfer(e.dataTransfer);
      }
    };
    this.handleTopDragOver = (e) => {
      const { dragOverTargetIds } = this;
      this.dragOverTargetIds = [];
      if (!this.monitor.isDragging()) {
        e.preventDefault();
        if (e.dataTransfer) {
          e.dataTransfer.dropEffect = "none";
        }
        return;
      }
      this.altKeyPressed = e.altKey;
      this.lastClientOffset = getEventClientOffset(e);
      this.scheduleHover(dragOverTargetIds);
      const canDrop = (dragOverTargetIds || []).some(
        (targetId) => this.monitor.canDropOnTarget(targetId)
      );
      if (canDrop) {
        e.preventDefault();
        if (e.dataTransfer) {
          e.dataTransfer.dropEffect = this.getCurrentDropEffect();
        }
      } else if (this.isDraggingNativeItem()) {
        e.preventDefault();
      } else {
        e.preventDefault();
        if (e.dataTransfer) {
          e.dataTransfer.dropEffect = "none";
        }
      }
    };
    this.handleTopDragLeaveCapture = (e) => {
      if (this.isDraggingNativeItem()) {
        e.preventDefault();
      }
      const isLastLeave = this.enterLeaveCounter.leave(e.target);
      if (!isLastLeave) {
        return;
      }
      if (this.isDraggingNativeItem()) {
        setTimeout(
          () => this.endDragNativeItem(),
          0
        );
      }
      this.cancelHover();
    };
    this.handleTopDropCapture = (e) => {
      this.dropTargetIds = [];
      if (this.isDraggingNativeItem()) {
        var ref;
        e.preventDefault();
        (ref = this.currentNativeSource) === null || ref === void 0 ? void 0 : ref.loadDataTransfer(e.dataTransfer);
      } else if (matchNativeItemType(e.dataTransfer)) {
        e.preventDefault();
      }
      this.enterLeaveCounter.reset();
    };
    this.handleTopDrop = (e) => {
      const { dropTargetIds } = this;
      this.dropTargetIds = [];
      this.actions.hover(dropTargetIds, {
        clientOffset: getEventClientOffset(e)
      });
      this.actions.drop({
        dropEffect: this.getCurrentDropEffect()
      });
      if (this.isDraggingNativeItem()) {
        this.endDragNativeItem();
      } else if (this.monitor.isDragging()) {
        this.actions.endDrag();
      }
      this.cancelHover();
    };
    this.handleSelectStart = (e) => {
      const target = e.target;
      if (typeof target.dragDrop !== "function") {
        return;
      }
      if (target.tagName === "INPUT" || target.tagName === "SELECT" || target.tagName === "TEXTAREA" || target.isContentEditable) {
        return;
      }
      e.preventDefault();
      target.dragDrop();
    };
    this.options = new OptionsReader(globalContext, options);
    this.actions = manager.getActions();
    this.monitor = manager.getMonitor();
    this.registry = manager.getRegistry();
    this.enterLeaveCounter = new EnterLeaveCounter(this.isNodeInDocument);
  }
}

;// ./node_modules/react-dnd-html5-backend/dist/index.js




const HTML5Backend = function createBackend(manager, context, options) {
  return new HTML5BackendImpl(manager, context, options);
};

// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(71389);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(17703);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.mjs
var Flex = __webpack_require__(83997);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.mjs + 2 modules
var Typography = __webpack_require__(30893);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.mjs
var Box = __webpack_require__(94061);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Portal/Portal.mjs
var Portal = __webpack_require__(69599);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/FocusTrap/FocusTrap.mjs
var FocusTrap = __webpack_require__(11341);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/IconButton/IconButton.mjs
var IconButton = __webpack_require__(88353);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.mjs
var Button = __webpack_require__(85963);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Icon/Icon.mjs
var Icon = __webpack_require__(58805);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Divider/Divider.mjs
var Divider = __webpack_require__(48653);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Popover/Popover.mjs
var Popover = __webpack_require__(12493);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/VisuallyHidden/VisuallyHidden.mjs
var VisuallyHidden = __webpack_require__(98765);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/SkipToContent.mjs
var SkipToContent = __webpack_require__(81387);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/LinkButton/LinkButton.mjs
var LinkButton = __webpack_require__(49654);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(47610);
;// ./node_modules/@strapi/design-system/dist/v2/MainNav/MainNavContext.mjs

const MainNavContext = (0,react.createContext)(false);
const useMainNav = () => (0,react.useContext)(MainNavContext);


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.mjs
var Flex_Flex = __webpack_require__(6378);
;// ./node_modules/@strapi/design-system/dist/v2/MainNav/MainNav.mjs




const MainNavWrapper = (0,styled_components_browser_esm/* default */.Ay)((0,Flex_Flex/* Flex */.s))`
  width: ${({ condensed }) => condensed ? "max-content" : `${224 / 16}rem`};
  border-right: 1px solid ${({ theme }) => theme.colors.neutral150};
`;
const MainNav = ({ condensed = false, ...props }) => {
  return (0,jsx_runtime.jsx)(MainNavContext.Provider, { value: condensed, children: (0,jsx_runtime.jsx)(MainNavWrapper, { alignItems: "normal", as: "nav", background: "neutral0", condensed, direction: "column", height: "100vh", position: "sticky", top: 0, zIndex: 2, ...props }) });
};


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/BaseLink/BaseLink.mjs
var BaseLink = __webpack_require__(7710);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.mjs
var Box_Box = __webpack_require__(16442);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/VisuallyHidden/VisuallyHidden.mjs
var VisuallyHidden_VisuallyHidden = __webpack_require__(21146);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.mjs + 2 modules
var Typography_Typography = __webpack_require__(53274);
;// ./node_modules/@strapi/design-system/dist/v2/MainNav/NavBrand.mjs









const BrandIconWrapper = styled_components_browser_esm/* default */.Ay.div`
  border-radius: ${({ theme }) => theme.borderRadius};

  svg,
  img {
    height: ${({ condensed }) => condensed ? `${40 / 16}rem` : `${32 / 16}rem`};
    width: ${({ condensed }) => condensed ? `${40 / 16}rem` : `${32 / 16}rem`};
  }
`;
const NavLinkWrapper = (0,styled_components_browser_esm/* default */.Ay)((0,BaseLink/* BaseLink */.s))`
  text-decoration: unset;
  color: inherit;
`;
const NavBrand = react.forwardRef(({ workplace, title, icon, ...props }, ref) => {
  const condensed = useMainNav();
  props.to = props?.to ?? "/";
  if (condensed) {
    return (0,jsx_runtime.jsx)(BaseLink/* BaseLink */.s, { ref, ...props, children: (0,jsx_runtime.jsx)(Box_Box/* Box */.a, { paddingLeft: 3, paddingRight: 3, paddingTop: 4, paddingBottom: 4, children: (0,jsx_runtime.jsxs)(BrandIconWrapper, { condensed: true, children: [icon, (0,jsx_runtime.jsxs)(VisuallyHidden_VisuallyHidden/* VisuallyHidden */.s, { children: [(0,jsx_runtime.jsx)("span", { children: title }), (0,jsx_runtime.jsx)("span", { children: workplace })] })] }) }) });
  }
  return (0,jsx_runtime.jsx)(NavLinkWrapper, { ref, ...props, children: (0,jsx_runtime.jsx)(Box_Box/* Box */.a, { paddingLeft: 3, paddingRight: 3, paddingTop: 4, paddingBottom: 4, children: (0,jsx_runtime.jsxs)(Flex_Flex/* Flex */.s, { children: [(0,jsx_runtime.jsx)(BrandIconWrapper, { "aria-hidden": true, tabIndex: -1, children: icon }), (0,jsx_runtime.jsxs)(Box_Box/* Box */.a, { paddingLeft: 2, children: [(0,jsx_runtime.jsxs)(Typography_Typography/* Typography */.o, { fontWeight: "bold", textColor: "neutral800", as: "span", children: [title, (0,jsx_runtime.jsx)(VisuallyHidden_VisuallyHidden/* VisuallyHidden */.s, { as: "span", children: workplace })] }), (0,jsx_runtime.jsx)(Typography_Typography/* Typography */.o, { variant: "pi", as: "p", textColor: "neutral600", "aria-hidden": true, children: workplace })] })] }) }) });
});


;// ./node_modules/@strapi/design-system/dist/v2/MainNav/NavSections.mjs





const BoxGrow = (0,styled_components_browser_esm/* default */.Ay)((0,Box_Box/* Box */.a))`
  flex-grow: 1;
  overflow-y: auto;
`;
const NavSections = ({ children, spacing = 4, horizontal = false, ...props }) => {
  return (0,jsx_runtime.jsx)(BoxGrow, { paddingLeft: 3, paddingRight: 2, paddingTop: 3, paddingBottom: 8, children: (0,jsx_runtime.jsx)(Flex_Flex/* Flex */.s, { as: "ul", gap: spacing, direction: horizontal ? "row" : "column", alignItems: horizontal ? "center" : "stretch", ...props, children: react.Children.map(children, (child, index) => {
    return (0,jsx_runtime.jsx)("li", { children: child }, index);
  }) }) });
};


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Badge/Badge.mjs
var Badge = __webpack_require__(32954);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Tooltip/Tooltip.mjs + 4 modules
var Tooltip = __webpack_require__(21399);
;// ./node_modules/@strapi/design-system/dist/v2/MainNav/NavLink.mjs










const IconBox = (0,styled_components_browser_esm/* default */.Ay)((0,Box_Box/* Box */.a))`
  svg {
    width: 1rem;
    height: 1rem;
  }
`;
const MainNavLinkWrapper = (0,styled_components_browser_esm/* default */.Ay)((0,BaseLink/* BaseLink */.s))`
  position: relative;
  text-decoration: none;
  display: block;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.colors.neutral0};

  ${Typography_Typography/* Typography */.o} {
    color: ${({ theme }) => theme.colors.neutral600};
  }

  svg path {
    fill: ${({ theme }) => theme.colors.neutral500};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.neutral100};

    ${Typography_Typography/* Typography */.o} {
      color: ${({ theme }) => theme.colors.neutral700};
    }

    svg path {
      fill: ${({ theme }) => theme.colors.neutral600};
    }
  }

  &.active {
    background: ${({ theme }) => theme.colors.primary100};

    svg path {
      fill: ${({ theme }) => theme.colors.primary600};
    }

    ${Typography_Typography/* Typography */.o} {
      color: ${({ theme }) => theme.colors.primary600};
      font-weight: 500;
    }
  }
`;
const MainNavRow = (0,styled_components_browser_esm/* default */.Ay)((0,Flex_Flex/* Flex */.s))`
  padding: ${({ theme }) => `${theme.spaces[2]} ${theme.spaces[3]}`};
`;
const CustomBadge = (0,styled_components_browser_esm/* default */.Ay)((0,Badge/* Badge */.E))`
  ${({ theme, condensed }) => condensed && `
	  position: absolute;
    // Values based on visual aspect 
    top: -${theme.spaces[3]};
    right:  -${theme.spaces[1]};
  `}

  ${Typography_Typography/* Typography */.o} {
    //find a solution to remove !important
    color: ${({ theme }) => theme.colors.neutral0} !important;
    line-height: 0;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  min-width: ${({ theme }) => theme.spaces[6]};
  height: ${({ theme }) => theme.spaces[5]};
  padding: ${({ theme }) => `0 ${theme.spaces[2]}`};
  border-radius: ${({ theme }) => theme.spaces[10]};
  background: ${({ theme }) => theme.colors.primary600};
`;
const NavLink = react.forwardRef(({ children, icon, badgeContent, badgeAriaLabel, ...props }, ref) => {
  const condensed = useMainNav();
  if (condensed) {
    return (0,jsx_runtime.jsx)(MainNavLinkWrapper, { ref, ...props, children: (0,jsx_runtime.jsx)(Tooltip/* Tooltip */.m, { position: "right", label: children, children: (0,jsx_runtime.jsxs)(MainNavRow, { as: "span", justifyContent: "center", children: [(0,jsx_runtime.jsx)(IconBox, { "aria-hidden": true, paddingRight: 0, as: "span", children: icon }), badgeContent && (0,jsx_runtime.jsx)(CustomBadge, { condensed: true, "aria-label": badgeAriaLabel, children: badgeContent })] }) }) });
  }
  return (0,jsx_runtime.jsx)(MainNavLinkWrapper, { ref, ...props, children: (0,jsx_runtime.jsxs)(MainNavRow, { as: "span", justifyContent: "space-between", children: [(0,jsx_runtime.jsxs)(Flex_Flex/* Flex */.s, { children: [(0,jsx_runtime.jsx)(IconBox, { "aria-hidden": true, paddingRight: 3, as: "span", children: icon }), (0,jsx_runtime.jsx)(Typography_Typography/* Typography */.o, { children })] }), badgeContent && (0,jsx_runtime.jsx)(CustomBadge, { justifyContent: "center", "aria-label": badgeAriaLabel, children: badgeContent })] }) });
});


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Divider/Divider.mjs
var Divider_Divider = __webpack_require__(71034);
;// ./node_modules/@strapi/design-system/dist/v2/MainNav/NavSection.mjs








const NavSection = ({ label, children, horizontal = false, spacing = 2, ...props }) => {
  const condensed = useMainNav();
  if (condensed) {
    return (0,jsx_runtime.jsxs)(Flex_Flex/* Flex */.s, { direction: "column", alignItems: "stretch", gap: 2, children: [(0,jsx_runtime.jsxs)(Box_Box/* Box */.a, { paddingTop: 1, paddingBottom: 1, background: "neutral0", hasRadius: true, as: "span", children: [(0,jsx_runtime.jsx)(Divider_Divider/* Divider */.c, {}), (0,jsx_runtime.jsx)(VisuallyHidden_VisuallyHidden/* VisuallyHidden */.s, { children: (0,jsx_runtime.jsx)("span", { children: label }) })] }), (0,jsx_runtime.jsx)(Flex_Flex/* Flex */.s, { as: "ul", gap: spacing, direction: horizontal ? "row" : "column", alignItems: horizontal ? "center" : "stretch", ...props, children: react.Children.map(children, (child, index) => {
      return (0,jsx_runtime.jsx)("li", { children: child }, index);
    }) })] });
  }
  return (0,jsx_runtime.jsxs)(Flex_Flex/* Flex */.s, { direction: "column", alignItems: "stretch", gap: 2, children: [(0,jsx_runtime.jsx)(Box_Box/* Box */.a, { paddingTop: 1, paddingBottom: 1, background: "neutral0", paddingRight: 3, paddingLeft: 3, hasRadius: true, as: "span", children: (0,jsx_runtime.jsx)(Typography_Typography/* Typography */.o, { variant: "sigma", textColor: "neutral600", children: label }) }), (0,jsx_runtime.jsx)(Flex_Flex/* Flex */.s, { as: "ul", gap: spacing, direction: horizontal ? "row" : "column", alignItems: horizontal ? "center" : "stretch", ...props, children: react.Children.map(children, (child, index) => {
    return (0,jsx_runtime.jsx)("li", { children: child }, index);
  }) })] });
};


;// ./node_modules/@strapi/design-system/dist/v2/MainNav/NavFooter.mjs


const NavFooter = ({ children }) => {
  return (0,jsx_runtime.jsx)(Box_Box/* Box */.a, { position: "relative", children });
};


;// ./node_modules/@strapi/design-system/dist/Avatar/constants.mjs
const avatarSize = 32;
const previewSize = 64;


;// ./node_modules/@strapi/design-system/dist/Avatar/Avatar.mjs







const AvatarImg = styled_components_browser_esm/* default */.Ay.img`
  border-radius: 50%;
  object-fit: cover;
  display: block;
  position: relative;
`;
const PreviewContainer = styled_components_browser_esm/* default */.Ay.img`
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  transform: translate(-${(previewSize - avatarSize) / 2}px, -100%);
  margin-top: -${({ theme }) => theme.spaces[1]};
`;
const Overlay = (0,styled_components_browser_esm/* default */.Ay)((0,Box_Box/* Box */.a))`
  opacity: 0.4;
`;
const Avatar = ({ src, alt, preview }) => {
  const [previewVisible, setPreviewVisible] = react.useState(false);
  const isHovering = Boolean(preview && previewVisible);
  return (0,jsx_runtime.jsxs)("span", { children: [isHovering ? (0,jsx_runtime.jsx)(PreviewContainer, {
    "aria-hidden": true,
    alt: "",
    width: `${previewSize}px`,
    height: `${previewSize}px`,
    // eslint-disable-next-line no-nested-ternary
    src: preview === true ? src : typeof preview === "string" ? preview : ""
  }) : null, (0,jsx_runtime.jsxs)(Box_Box/* Box */.a, { zIndex: isHovering ? 1 : void 0, position: "relative", onMouseEnter: () => setPreviewVisible(true), onMouseLeave: () => setPreviewVisible(false), width: `${avatarSize}px`, height: `${avatarSize}px`, children: [isHovering ? (0,jsx_runtime.jsx)(Overlay, { background: "neutral0", borderRadius: "50%", position: "absolute", width: `${avatarSize}px`, height: `${avatarSize}px`, zIndex: 1 }) : null, (0,jsx_runtime.jsx)(AvatarImg, { src, alt, width: `${avatarSize}px`, height: `${avatarSize}px` })] })] });
};
const InitialsWrapper = (0,styled_components_browser_esm/* default */.Ay)((0,Flex_Flex/* Flex */.s))`
  span {
    line-height: 0;
  }
`;
const Initials = ({ children, background = "primary600", textColor = "buttonNeutral0" }) => {
  return (0,jsx_runtime.jsx)(InitialsWrapper, { background, borderRadius: "50%", width: `${avatarSize}px`, height: `${avatarSize}px`, justifyContent: "center", children: (0,jsx_runtime.jsx)(Typography_Typography/* Typography */.o, { fontSize: 0, fontWeight: "bold", textColor, textTransform: "uppercase", children }) });
};


;// ./node_modules/@strapi/design-system/dist/v2/MainNav/NavUser.mjs









const NavUserBox = (0,styled_components_browser_esm/* default */.Ay)((0,Box_Box/* Box */.a))`
  border-top: 1px solid ${({ theme }) => theme.colors.neutral150};
`;
const NavUser = react.forwardRef(({ src, children, initials, ...props }, ref) => {
  const condensed = useMainNav();
  return (0,jsx_runtime.jsx)(NavUserBox, { paddingTop: 3, paddingBottom: 3, paddingLeft: 5, paddingRight: 5, ...props, children: (0,jsx_runtime.jsxs)(Flex_Flex/* Flex */.s, { as: "button", justifyContent: condensed ? "center" : void 0, ref, children: [src ? (0,jsx_runtime.jsx)(Avatar, { src, alt: "", "aria-hidden": true }) : (0,jsx_runtime.jsx)(Initials, { children: initials }), condensed ? (0,jsx_runtime.jsx)(VisuallyHidden_VisuallyHidden/* VisuallyHidden */.s, { children: (0,jsx_runtime.jsx)("span", { children }) }) : (0,jsx_runtime.jsx)(Box_Box/* Box */.a, { width: `${130 / 16}rem`, paddingLeft: 2, as: "span", children: (0,jsx_runtime.jsx)(Typography_Typography/* Typography */.o, { ellipsis: true, textColor: "neutral600", children }) })] }) });
});


// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ChevronRight.mjs
var ChevronRight = __webpack_require__(16991);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ChevronLeft.mjs
var ChevronLeft = __webpack_require__(72156);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/helpers/theme.mjs + 1 modules
var helpers_theme = __webpack_require__(82765);
;// ./node_modules/@strapi/design-system/dist/Icon/Icon.mjs





const IconWrapper = (0,styled_components_browser_esm/* default */.Ay)((0,Box_Box/* Box */.a))`
  path {
    fill: ${({ color, theme }) => (0,helpers_theme/* extractStyleFromTheme */.K)(theme.colors, color, void 0)};
  }
  ${({ theme, colors }) => colors(theme)}
`;
const Icon_Icon = react.forwardRef(({ color = "neutral600", colors = () => "", ...restProps }, ref) => {
  return (0,jsx_runtime.jsx)(IconWrapper, { ref, color, colors, ...restProps });
});
Icon_Icon.displayName = "Icon";


;// ./node_modules/@strapi/design-system/dist/v2/MainNav/NavCondense.mjs







const NavCondenseWrapper = (0,styled_components_browser_esm/* default */.Ay)((0,Flex_Flex/* Flex */.s)).attrs((props) => ({
  justifyContent: "center",
  ...props
}))`
  background: ${({ theme }) => theme.colors.neutral0};
  border: 1px solid ${({ theme }) => theme.colors.neutral150};
  border-radius: ${({ theme }) => theme.borderRadius};
  position: absolute;
  bottom: ${(9 + 4) / 16}rem; // 9 is the height of the svg and 4 is the padding below
  right: ${({ theme, condensed }) => condensed ? 0 : theme.spaces[5]};
  transform: ${({ condensed }) => condensed ? `translateX(50%)` : void 0};
  z-index: 2;
  width: ${18 / 16}rem;
  height: ${25 / 16}rem;

  svg {
    width: ${6 / 16}rem;
    height: ${9 / 16}rem;
  }
`;
const NavCondense = ({ children, ...props }) => {
  const condensed = useMainNav();
  return (0,jsx_runtime.jsxs)(NavCondenseWrapper, { as: "button", condensed, ...props, children: [(0,jsx_runtime.jsx)(Icon_Icon, { as: condensed ? ChevronRight/* default */.A : ChevronLeft/* default */.A, "aria-hidden": true, color: "neutral600" }), (0,jsx_runtime.jsx)(VisuallyHidden_VisuallyHidden/* VisuallyHidden */.s, { children })] });
};


// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Check.mjs
var Check = __webpack_require__(54514);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Cross.mjs
var Cross = __webpack_require__(68802);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ArrowRight.mjs
var ArrowRight = __webpack_require__(72417);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Write.mjs
var Write = __webpack_require__(29047);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Lightning.mjs
var Lightning = __webpack_require__(66980);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Exit.mjs
var Exit = __webpack_require__(28442);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Message.mjs
var Message = __webpack_require__(39527);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Question.mjs
var Question = __webpack_require__(57574);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Play.mjs
var Play = __webpack_require__(98052);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Book.mjs
var Book = __webpack_require__(54429);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/PaperPlane.mjs
var PaperPlane = __webpack_require__(64486);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Puzzle.mjs
var Puzzle = __webpack_require__(38910);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ShoppingCart.mjs
var ShoppingCart = __webpack_require__(21396);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Cog.mjs
var Cog = __webpack_require__(20415);
// EXTERNAL MODULE: ./node_modules/lodash/get.js
var lodash_get = __webpack_require__(80219);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(54894);
// EXTERNAL MODULE: ./node_modules/lodash/cloneDeep.js
var cloneDeep = __webpack_require__(51187);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 14 modules
var es = __webpack_require__(82437);
;// ./node_modules/@strapi/admin/dist/_chunks/AuthenticatedApp-uHd-MPEB.mjs



















const AuthenticatedApp_uHd_MPEB_name = "@strapi/admin";
const version = "4.24.5";
const description = "Strapi Admin";
const repository = {
  type: "git",
  url: "git://github.com/strapi/strapi.git"
};
const license = "SEE LICENSE IN LICENSE";
const author = {
  name: "Strapi Solutions SAS",
  email: "hi@strapi.io",
  url: "https://strapi.io"
};
const maintainers = [
  {
    name: "Strapi Solutions SAS",
    email: "hi@strapi.io",
    url: "https://strapi.io"
  }
];
const AuthenticatedApp_uHd_MPEB_exports = {
  ".": {
    types: "./index.d.ts",
    source: "./index.js",
    require: "./index.js",
    "default": "./index.js"
  },
  "./strapi-admin": {
    types: "./dist/admin/src/index.d.ts",
    source: "./admin/src/index.ts",
    "import": "./dist/admin/index.mjs",
    require: "./dist/admin/index.js",
    "default": "./dist/admin/index.js"
  },
  "./strapi-server": {
    types: "./dist/server/src/index.d.ts",
    source: "./server/src/index.js",
    require: "./strapi-server.js",
    "default": "./strapi-server.js"
  },
  "./cli": {
    source: "./_internal/index.ts",
    "import": "./dist/cli.mjs",
    require: "./dist/cli.js",
    "default": "./dist/cli.js"
  },
  "./package.json": "./package.json"
};
const files = [
  "./dist",
  "strapi-server.js",
  "index.js",
  "index.d.ts"
];
const scripts = {
  build: "pack-up build",
  clean: "run -T rimraf ./dist",
  lint: "run -T eslint .",
  "test:front": "run -T cross-env IS_EE=true jest --config ./jest.config.front.js",
  "test:front:watch": "run -T cross-env IS_EE=true jest --config ./jest.config.front.js --watchAll",
  "test:ts": "run -T tsc -p tsconfig.json",
  "test:ts:back": "run -T tsc --noEmit -p server/tsconfig.json",
  "test:ts:front": "run -T tsc -p admin/tsconfig.json && run -T tsc -p ee/admin/tsconfig.json",
  "test:unit": "run -T jest",
  "test:unit:watch": "run -T jest --watch",
  watch: "pack-up watch"
};
const dependencies = {
  "@casl/ability": "6.5.0",
  "@pmmmwh/react-refresh-webpack-plugin": "0.5.11",
  "@radix-ui/react-context": "1.0.1",
  "@radix-ui/react-toolbar": "1.0.4",
  "@reduxjs/toolkit": "1.9.7",
  "@strapi/design-system": "1.19.0",
  "@strapi/helper-plugin": "4.24.5",
  "@strapi/icons": "1.19.0",
  "@strapi/permissions": "4.24.5",
  "@strapi/provider-audit-logs-local": "4.24.5",
  "@strapi/types": "4.24.5",
  "@strapi/typescript-utils": "4.24.5",
  "@strapi/utils": "4.24.5",
  "@vitejs/plugin-react-swc": "3.5.0",
  axios: "1.6.0",
  bcryptjs: "2.4.3",
  boxen: "5.1.2",
  browserslist: "^4.22.2",
  "browserslist-to-esbuild": "1.2.0",
  chalk: "^4.1.2",
  chokidar: "3.5.3",
  codemirror5: "npm:codemirror@^5.65.11",
  "cross-env": "^7.0.3",
  "css-loader": "^6.9.0",
  "date-fns": "2.30.0",
  dotenv: "14.2.0",
  esbuild: "0.19.11",
  "esbuild-loader": "^2.21.0",
  "esbuild-register": "3.5.0",
  execa: "5.1.1",
  "fast-deep-equal": "3.1.3",
  "find-root": "1.1.0",
  "fork-ts-checker-webpack-plugin": "9.0.2",
  formik: "2.4.0",
  "fractional-indexing": "3.2.0",
  "fs-extra": "10.0.0",
  "highlight.js": "^10.4.1",
  history: "^4.9.0",
  "html-webpack-plugin": "5.6.0",
  immer: "9.0.19",
  inquirer: "8.2.5",
  invariant: "^2.2.4",
  "js-cookie": "2.2.1",
  jsonwebtoken: "9.0.0",
  koa: "2.13.4",
  "koa-bodyparser": "4.4.1",
  "koa-compose": "4.1.0",
  "koa-passport": "5.0.0",
  "koa-static": "5.0.0",
  "koa2-ratelimit": "^1.1.2",
  lodash: "4.17.21",
  "markdown-it": "^12.3.2",
  "markdown-it-abbr": "^1.0.4",
  "markdown-it-container": "^3.0.0",
  "markdown-it-deflist": "^2.1.0",
  "markdown-it-emoji": "^2.0.0",
  "markdown-it-footnote": "^3.0.3",
  "markdown-it-ins": "^3.0.1",
  "markdown-it-mark": "^3.0.1",
  "markdown-it-sub": "^1.0.0",
  "markdown-it-sup": "1.0.0",
  "mini-css-extract-plugin": "2.7.7",
  "node-schedule": "2.1.0",
  ora: "5.4.1",
  outdent: "0.8.0",
  "p-map": "4.0.0",
  "passport-local": "1.0.0",
  pluralize: "8.0.0",
  prettier: "2.8.4",
  "prop-types": "^15.8.1",
  qs: "6.11.1",
  "react-dnd": "16.0.1",
  "react-dnd-html5-backend": "16.0.1",
  "react-error-boundary": "3.1.4",
  "react-helmet": "^6.1.0",
  "react-intl": "6.4.1",
  "react-is": "^18.2.0",
  "react-query": "3.39.3",
  "react-redux": "8.1.1",
  "react-refresh": "0.14.0",
  "react-select": "5.7.0",
  "react-window": "1.8.8",
  "read-pkg-up": "7.0.1",
  "resolve-from": "5.0.0",
  rimraf: "3.0.2",
  "sanitize-html": "2.13.0",
  semver: "7.5.4",
  sift: "16.0.1",
  slate: "0.94.1",
  "slate-history": "0.93.0",
  "slate-react": "0.98.3",
  "style-loader": "3.3.4",
  typescript: "5.2.2",
  vite: "5.0.13",
  webpack: "^5.89.0",
  "webpack-bundle-analyzer": "^4.10.1",
  "webpack-dev-middleware": "6.1.2",
  "webpack-hot-middleware": "2.26.0",
  yup: "0.32.9"
};
const devDependencies = {
  "@strapi/admin-test-utils": "4.24.5",
  "@strapi/data-transfer": "4.24.5",
  "@strapi/pack-up": "4.23.0",
  "@strapi/plugin-content-manager": "4.24.5",
  "@strapi/strapi": "4.24.5",
  "@testing-library/dom": "9.2.0",
  "@testing-library/react": "14.0.0",
  "@testing-library/user-event": "14.4.3",
  "@types/codemirror5": "npm:@types/codemirror@^5.60.15",
  "@types/find-root": "1.1.3",
  "@types/invariant": "2.2.36",
  "@types/jest": "29.5.2",
  "@types/js-cookie": "3.0.5",
  "@types/jsonwebtoken": "9.0.3",
  "@types/koa-passport": "6.0.1",
  "@types/lodash": "^4.14.191",
  "@types/markdown-it": "13.0.7",
  "@types/markdown-it-container": "2.0.9",
  "@types/markdown-it-emoji": "2.0.4",
  "@types/markdown-it-footnote": "3.0.3",
  "@types/passport-local": "1.0.36",
  "@types/pluralize": "0.0.32",
  "@types/react-window": "1.8.8",
  "@types/sanitize-html": "2.11.0",
  "@types/webpack-bundle-analyzer": "4.6.3",
  "@types/webpack-hot-middleware": "2.25.9",
  msw: "1.3.0",
  react: "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "5.3.4",
  "styled-components": "5.3.3"
};
const peerDependencies = {
  "@strapi/data-transfer": "^4.16.0",
  "@strapi/strapi": "^4.3.4",
  react: "^17.0.0 || ^18.0.0",
  "react-dom": "^17.0.0 || ^18.0.0",
  "react-router-dom": "^5.2.0",
  "styled-components": "^5.2.1"
};
const engines = {
  node: ">=18.0.0 <=20.x.x",
  npm: ">=6.0.0"
};
const nx = {
  targets: {
    build: {
      outputs: [
        "{projectRoot}/build"
      ]
    }
  }
};
const packageJSON = {
  name: AuthenticatedApp_uHd_MPEB_name,
  version,
  description,
  repository,
  license,
  author,
  maintainers,
  exports: AuthenticatedApp_uHd_MPEB_exports,
  files,
  scripts,
  dependencies,
  devDependencies,
  peerDependencies,
  engines,
  nx
};
function getFullName(firstname, lastname = "") {
  return [firstname, lastname].filter((str) => str).join(" ");
}
const utils = {
  bufferToHex(buffer) {
    return [...new Uint8Array(buffer)].map((b) => b.toString(16).padStart(2, "0")).join("");
  },
  async digestMessage(message) {
    const msgUint8 = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8);
    return this.bufferToHex(hashBuffer);
  }
};
async function hashAdminUserEmail(payload) {
  if (!payload || !payload.email) {
    return null;
  }
  try {
    return await utils.digestMessage(payload.email);
  } catch (error) {
    return null;
  }
}
const LAYOUT_DATA = {
  contentTypeBuilder: {
    home: {
      title: {
        id: "app.components.GuidedTour.home.CTB.title",
        defaultMessage: "\u{1F9E0} Build the content structure"
      },
      cta: {
        title: {
          id: "app.components.GuidedTour.home.CTB.cta.title",
          defaultMessage: "Go to the Content type Builder"
        },
        type: "REDIRECT",
        target: "/plugins/content-type-builder"
      },
      trackingEvent: "didClickGuidedTourHomepageContentTypeBuilder"
    },
    create: {
      title: {
        id: "app.components.GuidedTour.CTB.create.title",
        defaultMessage: "\u{1F9E0} Create a first Collection type"
      },
      content: {
        id: "app.components.GuidedTour.CTB.create.content",
        defaultMessage: "<p>Collection types help you manage several entries, Single types are suitable to manage only one entry.</p> <p>Ex: For a Blog website, Articles would be a Collection type whereas a Homepage would be a Single type.</p>"
      },
      cta: {
        title: {
          id: "app.components.GuidedTour.CTB.create.cta.title",
          defaultMessage: "Build a Collection type"
        },
        type: "CLOSE"
      },
      trackingEvent: "didClickGuidedTourStep1CollectionType"
    },
    success: {
      title: {
        id: "app.components.GuidedTour.CTB.success.title",
        defaultMessage: "Step 1: Completed \u2705"
      },
      content: {
        id: "app.components.GuidedTour.CTB.success.content",
        defaultMessage: "<p>Good going!</p><b>\u26A1\uFE0F What would you like to share with the world?</b>"
      },
      cta: {
        title: {
          id: "app.components.GuidedTour.create-content",
          defaultMessage: "Create content"
        },
        type: "REDIRECT",
        target: "/content-manager"
      },
      trackingEvent: "didCreateGuidedTourCollectionType"
    }
  },
  contentManager: {
    home: {
      title: {
        id: "app.components.GuidedTour.home.CM.title",
        defaultMessage: "\u26A1\uFE0F What would you like to share with the world?"
      },
      cta: {
        title: {
          id: "app.components.GuidedTour.create-content",
          defaultMessage: "Create content"
        },
        type: "REDIRECT",
        target: "/content-manager"
      },
      trackingEvent: "didClickGuidedTourHomepageContentManager"
    },
    create: {
      title: {
        id: "app.components.GuidedTour.CM.create.title",
        defaultMessage: "\u26A1\uFE0F Create content"
      },
      content: {
        id: "app.components.GuidedTour.CM.create.content",
        defaultMessage: "<p>Create and manage all the content here in the Content Manager.</p><p>Ex: Taking the Blog website example further, one can write an Article, save and publish it as they like.</p><p>\u{1F4A1} Quick tip - Don't forget to hit publish on the content you create.</p>"
      },
      cta: {
        title: {
          id: "app.components.GuidedTour.create-content",
          defaultMessage: "Create content"
        },
        type: "CLOSE"
      },
      trackingEvent: "didClickGuidedTourStep2ContentManager"
    },
    success: {
      title: {
        id: "app.components.GuidedTour.CM.success.title",
        defaultMessage: "Step 2: Completed \u2705"
      },
      content: {
        id: "app.components.GuidedTour.CM.success.content",
        defaultMessage: "<p>Awesome, one last step to go!</p><b>\u{1F680}  See content in action</b>"
      },
      cta: {
        title: {
          id: "app.components.GuidedTour.CM.success.cta.title",
          defaultMessage: "Test the API"
        },
        type: "REDIRECT",
        target: "/settings/api-tokens"
      },
      trackingEvent: "didCreateGuidedTourEntry"
    }
  },
  apiTokens: {
    home: {
      title: {
        id: "app.components.GuidedTour.apiTokens.create.title",
        defaultMessage: "\u{1F680} See content in action"
      },
      cta: {
        title: {
          id: "app.components.GuidedTour.home.apiTokens.cta.title",
          defaultMessage: "Test the API"
        },
        type: "REDIRECT",
        target: "/settings/api-tokens"
      },
      trackingEvent: "didClickGuidedTourHomepageApiTokens"
    },
    create: {
      title: {
        id: "app.components.GuidedTour.apiTokens.create.title",
        defaultMessage: "\u{1F680} See content in action"
      },
      content: {
        id: "app.components.GuidedTour.apiTokens.create.content",
        defaultMessage: "<p>Generate an authentication token here and retrieve the content you just created.</p>"
      },
      cta: {
        title: {
          id: "app.components.GuidedTour.apiTokens.create.cta.title",
          defaultMessage: "Generate an API Token"
        },
        type: "CLOSE"
      },
      trackingEvent: "didClickGuidedTourStep3ApiTokens"
    },
    success: {
      title: {
        id: "app.components.GuidedTour.apiTokens.success.title",
        defaultMessage: "Step 3: Completed \u2705"
      },
      content: {
        id: "app.components.GuidedTour.apiTokens.success.content",
        defaultMessage: "<p>See content in action by making an HTTP request:</p><ul><li><p>To this URL: <light>https://'<'YOUR_DOMAIN'>'/api/'<'YOUR_CT'>'</light></p></li><li><p>With the header: <light>Authorization: bearer '<'YOUR_API_TOKEN'>'</light></p></li></ul><p>For more ways to interact with content, see the <documentationLink>documentation</documentationLink>.</p>"
      },
      trackingEvent: "didGenerateGuidedTourApiTokens"
    }
  }
};
const STATES = {
  IS_DONE: "IS_DONE",
  IS_ACTIVE: "IS_ACTIVE",
  IS_NOT_DONE: "IS_NOT_DONE"
};
const AuthenticatedApp_uHd_MPEB_Number = ({ children, state, ...props }) => {
  return state === STATES.IS_DONE || state === STATES.IS_ACTIVE ? /* @__PURE__ */ (0,jsx_runtime.jsx)(
    Flex/* Flex */.s,
    {
      background: "primary600",
      padding: 2,
      borderRadius: "50%",
      width: (0,dist/* pxToRem */.a8)(30),
      height: (0,dist/* pxToRem */.a8)(30),
      justifyContent: "center",
      ...props,
      children: state === STATES.IS_DONE ? /* @__PURE__ */ (0,jsx_runtime.jsx)(Check/* default */.A, { "aria-hidden": true, width: (0,dist/* pxToRem */.a8)(16), color: "neutral0" }) : /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.o, { fontWeight: "semiBold", textColor: "neutral0", children })
    }
  ) : /* @__PURE__ */ (0,jsx_runtime.jsx)(
    Flex/* Flex */.s,
    {
      borderColor: "neutral500",
      borderWidth: "1px",
      borderStyle: "solid",
      padding: 2,
      borderRadius: "50%",
      width: (0,dist/* pxToRem */.a8)(30),
      height: (0,dist/* pxToRem */.a8)(30),
      justifyContent: "center",
      ...props,
      children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.o, { fontWeight: "semiBold", textColor: "neutral600", children })
    }
  );
};
const VerticalDivider = ({ state, ...props }) => /* @__PURE__ */ (0,jsx_runtime.jsx)(
  Box/* Box */.a,
  {
    width: (0,dist/* pxToRem */.a8)(2),
    height: "100%",
    background: state === STATES.IS_NOT_DONE ? "neutral300" : "primary500",
    hasRadius: true,
    minHeight: state === STATES.IS_ACTIVE ? (0,dist/* pxToRem */.a8)(85) : (0,dist/* pxToRem */.a8)(65),
    ...props
  }
);
const GuidedTourModal = () => {
  const {
    currentStep,
    guidedTourState,
    setCurrentStep,
    setStepState,
    isGuidedTourVisible,
    setSkipped
  } = (0,dist/* useGuidedTour */.Cx)();
  const { formatMessage } = (0,useIntl/* default */.A)();
  const { trackUsage } = (0,dist/* useTracking */.z1)();
  if (!currentStep || !isGuidedTourVisible) {
    return null;
  }
  const stepData = lodash_get(LAYOUT_DATA, currentStep);
  const sectionKeys = Object.keys(guidedTourState);
  const [sectionName, stepName] = currentStep.split(".");
  const sectionIndex = sectionKeys.indexOf(sectionName);
  const stepIndex = Object.keys(guidedTourState[sectionName]).indexOf(stepName);
  const hasSectionAfter = sectionIndex < sectionKeys.length - 1;
  const hasStepAfter = stepIndex < Object.keys(guidedTourState[sectionName]).length - 1;
  const handleCtaClick = () => {
    setStepState(currentStep, true);
    if (stepData) {
      trackUsage(stepData.trackingEvent);
    }
    setCurrentStep(null);
  };
  const handleSkip = () => {
    setSkipped(true);
    setCurrentStep(null);
    trackUsage("didSkipGuidedtour");
  };
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(Portal/* Portal */.Z, { children: /* @__PURE__ */ (0,jsx_runtime.jsx)(ModalWrapper, { onClick: handleCtaClick, padding: 8, justifyContent: "center", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(FocusTrap/* FocusTrap */.s, { onEscape: handleCtaClick, children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(
    Flex/* Flex */.s,
    {
      direction: "column",
      alignItems: "stretch",
      background: "neutral0",
      width: (0,dist/* pxToRem */.a8)(660),
      shadow: "popupShadow",
      hasRadius: true,
      padding: 4,
      gap: 8,
      role: "dialog",
      "aria-modal": true,
      onClick: (e) => e.stopPropagation(),
      children: [
        /* @__PURE__ */ (0,jsx_runtime.jsx)(Flex/* Flex */.s, { justifyContent: "flex-end", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
          IconButton/* IconButton */.K,
          {
            onClick: handleCtaClick,
            "aria-label": formatMessage({
              id: "app.utils.close-label",
              defaultMessage: "Close"
            }),
            children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Cross/* default */.A, {})
          }
        ) }),
        /* @__PURE__ */ (0,jsx_runtime.jsx)(
          Box/* Box */.a,
          {
            paddingLeft: 7,
            paddingRight: 7,
            paddingBottom: !hasStepAfter && !hasSectionAfter ? 8 : 0,
            children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
              GuidedTourStepper,
              {
                title: stepData && "title" in stepData ? stepData.title : void 0,
                cta: stepData && "cta" in stepData ? stepData.cta : void 0,
                onCtaClick: handleCtaClick,
                sectionIndex,
                stepIndex,
                hasSectionAfter,
                children: stepData && "content" in stepData && /* @__PURE__ */ (0,jsx_runtime.jsx)(GuidedTourContent, { ...stepData.content })
              }
            )
          }
        ),
        !(!hasStepAfter && !hasSectionAfter) && /* @__PURE__ */ (0,jsx_runtime.jsx)(Flex/* Flex */.s, { justifyContent: "flex-end", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Button/* Button */.$, { variant: "tertiary", onClick: handleSkip, children: formatMessage({
          id: "app.components.GuidedTour.skip",
          defaultMessage: "Skip the tour"
        }) }) })
      ]
    }
  ) }) }) });
};
const ModalWrapper = (0,styled_components_browser_esm/* default */.Ay)((0,Flex/* Flex */.s))`
  position: fixed;
  z-index: 4;
  inset: 0;
  /* this is theme.colors.neutral800 with opacity */
  background: ${({ theme }) => `${theme.colors.neutral800}1F`};
`;
const GuidedTourStepper = ({
  title,
  children,
  cta,
  onCtaClick,
  sectionIndex,
  stepIndex,
  hasSectionAfter
}) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const hasSectionBefore = sectionIndex > 0;
  const hasStepsBefore = stepIndex > 0;
  const nextSectionIndex = sectionIndex + 1;
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0,jsx_runtime.jsxs)(Flex/* Flex */.s, { alignItems: "stretch", children: [
      /* @__PURE__ */ (0,jsx_runtime.jsx)(Flex/* Flex */.s, { marginRight: 8, justifyContent: "center", minWidth: (0,dist/* pxToRem */.a8)(30), children: hasSectionBefore && /* @__PURE__ */ (0,jsx_runtime.jsx)(VerticalDivider, { state: STATES.IS_DONE, minHeight: (0,dist/* pxToRem */.a8)(24) }) }),
      /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.o, { variant: "sigma", textColor: "primary600", children: formatMessage({
        id: "app.components.GuidedTour.title",
        defaultMessage: "3 steps to get started"
      }) })
    ] }),
    /* @__PURE__ */ (0,jsx_runtime.jsxs)(Flex/* Flex */.s, { children: [
      /* @__PURE__ */ (0,jsx_runtime.jsx)(Flex/* Flex */.s, { marginRight: 8, minWidth: (0,dist/* pxToRem */.a8)(30), children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
        AuthenticatedApp_uHd_MPEB_Number,
        {
          state: hasStepsBefore ? STATES.IS_DONE : STATES.IS_ACTIVE,
          paddingTop: 3,
          paddingBottom: 3,
          children: sectionIndex + 1
        }
      ) }),
      title && /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.o, { variant: "alpha", fontWeight: "bold", textColor: "neutral800", as: "h3", id: "title", children: formatMessage(title) })
    ] }),
    /* @__PURE__ */ (0,jsx_runtime.jsxs)(Flex/* Flex */.s, { alignItems: "stretch", children: [
      /* @__PURE__ */ (0,jsx_runtime.jsx)(Flex/* Flex */.s, { marginRight: 8, direction: "column", justifyContent: "center", minWidth: (0,dist/* pxToRem */.a8)(30), children: hasSectionAfter && /* @__PURE__ */ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [
        /* @__PURE__ */ (0,jsx_runtime.jsx)(VerticalDivider, { state: STATES.IS_DONE }),
        hasStepsBefore && /* @__PURE__ */ (0,jsx_runtime.jsx)(AuthenticatedApp_uHd_MPEB_Number, { state: STATES.IS_ACTIVE, paddingTop: 3, children: nextSectionIndex + 1 })
      ] }) }),
      /* @__PURE__ */ (0,jsx_runtime.jsxs)(Box/* Box */.a, { children: [
        children,
        cta && (cta.target ? /* @__PURE__ */ (0,jsx_runtime.jsx)(
          LinkButton/* LinkButton */.z,
          {
            as: react_router_dom/* NavLink */.k2,
            endIcon: /* @__PURE__ */ (0,jsx_runtime.jsx)(ArrowRight/* default */.A, {}),
            onClick: onCtaClick,
            to: cta.target,
            children: formatMessage(cta.title)
          }
        ) : /* @__PURE__ */ (0,jsx_runtime.jsx)(Button/* Button */.$, { endIcon: /* @__PURE__ */ (0,jsx_runtime.jsx)(ArrowRight/* default */.A, {}), onClick: onCtaClick, children: formatMessage(cta.title) }))
      ] })
    ] }),
    hasStepsBefore && hasSectionAfter && /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* Box */.a, { paddingTop: 3, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Flex/* Flex */.s, { marginRight: 8, justifyContent: "center", width: (0,dist/* pxToRem */.a8)(30), children: /* @__PURE__ */ (0,jsx_runtime.jsx)(VerticalDivider, { state: STATES.IS_DONE, minHeight: (0,dist/* pxToRem */.a8)(24) }) }) })
  ] });
};
const GuidedTourContent = ({ id, defaultMessage }) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(Flex/* Flex */.s, { direction: "column", alignItems: "stretch", gap: 4, paddingBottom: 6, children: formatMessage(
    { id, defaultMessage },
    {
      documentationLink: DocumentationLink,
      b: Bold,
      p: Paragraph,
      light: Light,
      ul: List,
      li: ListItem
    }
  ) });
};
const DocumentationLink = (children) => /* @__PURE__ */ (0,jsx_runtime.jsx)(
  Typography/* Typography */.o,
  {
    as: "a",
    textColor: "primary600",
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html#api-parameters",
    children
  }
);
const Bold = (children) => /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.o, { fontWeight: "semiBold", children });
const Paragraph = (children) => /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.o, { children });
const Light = (children) => /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.o, { textColor: "neutral600", children });
const List = (children) => /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* Box */.a, { paddingLeft: 6, children: /* @__PURE__ */ (0,jsx_runtime.jsx)("ul", { children }) });
const LiStyled = styled_components_browser_esm/* default */.Ay.li`
  list-style: disc;
  &::marker {
    color: ${({ theme }) => theme.colors.neutral800};
  }
`;
const ListItem = (children) => /* @__PURE__ */ (0,jsx_runtime.jsx)(LiStyled, { children });
const LinkUserWrapper = (0,styled_components_browser_esm/* default */.Ay)((0,Box/* Box */.a))`
  width: ${150 / 16}rem;
  position: absolute;
  bottom: ${({ theme }) => theme.spaces[9]};
  left: ${({ theme }) => theme.spaces[5]};
`;
const LinkUser = (0,styled_components_browser_esm/* default */.Ay)((0,react_router_dom/* NavLink */.k2))`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  padding: ${({ theme }) => `${theme.spaces[2]} ${theme.spaces[4]}`};
  border-radius: ${({ theme }) => theme.spaces[1]};

  &:hover {
    background: ${({ theme, logout }) => logout ? theme.colors.danger100 : theme.colors.primary100};
    text-decoration: none;
  }

  svg {
    path {
      fill: ${({ theme }) => theme.colors.danger600};
    }
  }
`;
const AuthenticatedApp_uHd_MPEB_NavLinkWrapper = (0,styled_components_browser_esm/* default */.Ay)((0,Box/* Box */.a))`
  div:nth-child(2) {
    /* remove badge background color */
    background: transparent;
  }
`;
const BadgeIcon = (0,styled_components_browser_esm/* default */.Ay)((0,Icon/* Icon */.I))`
  &&& {
    path {
      fill: ${({ theme }) => theme.colors.warning500};
    }
  }
`;
const LeftMenu = ({ generalSectionLinks, pluginsSectionLinks }) => {
  const navUserRef = react.useRef(null);
  const [userLinksVisible, setUserLinksVisible] = react.useState(false);
  const {
    logos: { menu }
  } = (0,index_dMS_26Ft.u)("LeftMenu");
  const [condensed, setCondensed] = (0,dist/* usePersistentState */.ud)("navbar-condensed", false);
  const { userDisplayName } = (0,dist/* useAppInfo */.Xe)();
  const { formatMessage } = (0,useIntl/* default */.A)();
  const { trackUsage } = (0,dist/* useTracking */.z1)();
  const { pathname } = (0,react_router/* useLocation */.zy)();
  const { logout } = (0,index_dMS_26Ft.a)("Logout");
  const initials = userDisplayName.split(" ").map((name2) => name2.substring(0, 1)).join("").substring(0, 2);
  const handleToggleUserLinks = () => setUserLinksVisible((prev) => !prev);
  const handleBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget) && /**
    * TODO: can we replace this by just using the navUserRef?
    */
    e.relatedTarget?.parentElement?.id !== "main-nav-user-button") {
      setUserLinksVisible(false);
    }
  };
  const handleClickOnLink = (destination) => {
    trackUsage("willNavigate", { from: pathname, to: destination });
  };
  const menuTitle = formatMessage({
    id: "app.components.LeftMenu.navbrand.title",
    defaultMessage: "Strapi Dashboard"
  });
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)(MainNav, { condensed, children: [
    /* @__PURE__ */ (0,jsx_runtime.jsx)(
      NavBrand,
      {
        as: react_router_dom/* NavLink */.k2,
        workplace: formatMessage({
          id: "app.components.LeftMenu.navbrand.workplace",
          defaultMessage: "Workplace"
        }),
        title: menuTitle,
        icon: /* @__PURE__ */ (0,jsx_runtime.jsx)(
          "img",
          {
            src: menu.custom?.url || menu.default,
            alt: formatMessage({
              id: "app.components.LeftMenu.logo.alt",
              defaultMessage: "Application logo"
            })
          }
        )
      }
    ),
    /* @__PURE__ */ (0,jsx_runtime.jsx)(Divider/* Divider */.c, {}),
    /* @__PURE__ */ (0,jsx_runtime.jsxs)(NavSections, { children: [
      /* @__PURE__ */ (0,jsx_runtime.jsx)(
        NavLink,
        {
          as: react_router_dom/* NavLink */.k2,
          to: "/content-manager",
          icon: /* @__PURE__ */ (0,jsx_runtime.jsx)(Write/* default */.A, {}),
          onClick: () => handleClickOnLink("/content-manager"),
          children: formatMessage({ id: "global.content-manager", defaultMessage: "Content manager" })
        }
      ),
      pluginsSectionLinks.length > 0 ? /* @__PURE__ */ (0,jsx_runtime.jsx)(
        NavSection,
        {
          label: formatMessage({
            id: "app.components.LeftMenu.plugins",
            defaultMessage: "Plugins"
          }),
          children: pluginsSectionLinks.map((link) => {
            const LinkIcon = link.icon;
            return /* @__PURE__ */ (0,jsx_runtime.jsx)(AuthenticatedApp_uHd_MPEB_NavLinkWrapper, { children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
              NavLink,
              {
                as: react_router_dom/* NavLink */.k2,
                to: link.to,
                icon: /* @__PURE__ */ (0,jsx_runtime.jsx)(LinkIcon, {}),
                onClick: () => handleClickOnLink(link.to),
                badgeContent: (
                  // TODO: to replace with another name in v5
                  link?.lockIcon ? /* @__PURE__ */ (0,jsx_runtime.jsx)(
                    BadgeIcon,
                    {
                      width: `${15 / 16}rem`,
                      height: `${15 / 16}rem`,
                      as: Lightning/* default */.A
                    }
                  ) : void 0
                ),
                children: formatMessage(link.intlLabel)
              }
            ) }, link.to);
          })
        }
      ) : null,
      generalSectionLinks.length > 0 ? /* @__PURE__ */ (0,jsx_runtime.jsx)(
        NavSection,
        {
          label: formatMessage({
            id: "app.components.LeftMenu.general",
            defaultMessage: "General"
          }),
          children: generalSectionLinks.map((link) => {
            const LinkIcon = link.icon;
            return /* @__PURE__ */ (0,jsx_runtime.jsx)(
              NavLink,
              {
                as: react_router_dom/* NavLink */.k2,
                badgeContent: link.notificationsCount && link.notificationsCount > 0 ? link.notificationsCount.toString() : void 0,
                to: link.to,
                icon: /* @__PURE__ */ (0,jsx_runtime.jsx)(LinkIcon, {}),
                onClick: () => handleClickOnLink(link.to),
                children: formatMessage(link.intlLabel)
              },
              link.to
            );
          })
        }
      ) : null
    ] }),
    /* @__PURE__ */ (0,jsx_runtime.jsxs)(NavFooter, { children: [
      /* @__PURE__ */ (0,jsx_runtime.jsx)(
        NavUser,
        {
          id: "main-nav-user-button",
          ref: navUserRef,
          onClick: handleToggleUserLinks,
          initials,
          children: userDisplayName
        }
      ),
      userLinksVisible && /* @__PURE__ */ (0,jsx_runtime.jsx)(
        LinkUserWrapper,
        {
          onBlur: handleBlur,
          padding: 1,
          shadow: "tableShadow",
          background: "neutral0",
          hasRadius: true,
          children: /* @__PURE__ */ (0,jsx_runtime.jsx)(FocusTrap/* FocusTrap */.s, { onEscape: handleToggleUserLinks, children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(Flex/* Flex */.s, { direction: "column", alignItems: "stretch", gap: 0, children: [
            /* @__PURE__ */ (0,jsx_runtime.jsx)(LinkUser, { tabIndex: 0, onClick: handleToggleUserLinks, to: "/me", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.o, { children: formatMessage({
              id: "global.profile",
              defaultMessage: "Profile"
            }) }) }),
            /* @__PURE__ */ (0,jsx_runtime.jsxs)(LinkUser, { tabIndex: 0, onClick: logout, to: "/auth/login", children: [
              /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.o, { textColor: "danger600", children: formatMessage({
                id: "app.components.LeftMenu.logout",
                defaultMessage: "Logout"
              }) }),
              /* @__PURE__ */ (0,jsx_runtime.jsx)(Exit/* default */.A, {})
            ] })
          ] }) })
        }
      ),
      /* @__PURE__ */ (0,jsx_runtime.jsx)(NavCondense, { onClick: () => setCondensed((s) => !s), children: condensed ? formatMessage({
        id: "app.components.LeftMenu.expand",
        defaultMessage: "Expand the navbar"
      }) : formatMessage({
        id: "app.components.LeftMenu.collapse",
        defaultMessage: "Collapse the navbar"
      }) })
    ] })
  ] });
};
const onboardingPreview = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAABQCAMAAAD2kgFPAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAL9UExURff3+fv7+/X19/Pz9/n5+fv7/f39//////39/UdwTPn5+/X1+fHx++/v8fn5/fHx8/Pz9eTk6e/v8/Hx9fHx/e3u7/X19e3t8evr7+fn6YuR96Gl+OLi59LS2dTU2uvr++nq7ff39+Tk697e4ufn6+vr7enq69ra3tDQ1uDg5/nv7+Dg5Nzc4Nzd4tTU2OTk5+fn7djY3tzc5M/Q1NjY3NLS1tbX3MzM0u/w9crK0unp7+np+/37+8rK0MjIzu/v78PEy9ra4djY4eLi6t7e5NbW2s7O1OLk5+/v/Ojp/dra5MPF9+3u89bX3mxz99DQ2fj4+OLi5PHx8dvb29ze+/f3/7C1+t7e5+vr69PX2OPk/Jydl/T09/f393R7+Gdw96ytuNTU3M7O2ODg6a6vumJq9+3u/dTW/PP19cXGzd7e4O3t7cnK+/f3+uLk683O+Z2h+dLU+9/h++no3/j39bq0pu/v7fv7+fHz9XF4911l93V8+bm5waGirffr7Kqrtq+z9qentF9o93mA+fj4+vr6++/v7/f3++vt+83N0/Pz8+vr8dbY+sjJ98zO1crM0vn5//Pz/ra6n/n59d/g4quvp9fa2OTn66Shm8C2prCuq+/r67Gxr9LLvbCwrcfEwK+vqZSahtPVw5WafKiknff5+ZqapvHw7fv4+YGH9dnb++Tn/Ly8xvfo6Oq5v////6WlsNrc3vPz+dLU2Ovr/eTn+drc4JWXo6Wp+cLE++nr74+T+enr4s7Q1m5098bArefk5Nze0ODc1Pf3/MC8tuDi0KWrh/n39+Tk4qmv+77Cqdjc3PX1/c7S0vv7/7ixo/Px7Z+jh62x+8rMtrS6pZebjY+Rn9bayKuvm+vp5+np6aWrjVJa9fX38bi895+fm1pk9620oevp6bS0r+fp6fv19VZg9fn19X6F+fnz89LS3MDAyPXi4uextvX1+vPW2OCVnYmJl9zc4Xh4iff3+mdy97y8xPf3977C96mpsbS29YeHlamv84qS87i89VXx8BYAAAD/dFJOU319fX19fX19fQB9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19bX19fX19fX19fX19Lwd9fX19fX19fX19fX19fX1lfX19fX19fX19fX19fX19fX19fX19fW1dED59fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX0PfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1mfX19bX1eXn0/fX19fX0/fSWruQsAAAbiSURBVGje7VkFcBtHFD2SbnXO9UA56dRIiiRbFFlmiO3asWKIE0MYGrQbZmjDDA1T06RJ03DSJA2XMaWUmZmZmWm6ki3lTie59kTSlJ40p5nV//tud//b/28P0WiG/PgdkhBMHKzRaBDNyWXSRoqi4ki57CQk/MZsKna58pqa0N4gnoNcNgQZzBV8ml9aYMYaW4DQRKjvDC8MG7TkG0ff+gmobifD78gXYQZE0++8b08tXFg/4uf6H46VLh5Rf/P8TERtXG1ykkmtI7zmtZFLhtW9NWfOnCUjhy0Z+T2CJOFYJMOS+YtPzV884teDX8879sKIhfUHSxG1AzH0ajXhB3UjPxpaVzd37uyls5cunRv30Fx0vhxRDfXdLLbhZWU2W1mGGNtbEPuXdStz+2ycu/+kbmv4YLOWZ3merdEyNSweW0KMxXkW1+J4RwxeMeRfCIbhMsu7/LUd0QgkSYkW8TS5wznVlg93W8LnEiUooAIqFYBQkxBnSIxkMStJVLUPoah90cCqlSurWkSI6ijdGGv0v0Wv3iaIa1i9KLJ+QoR0Wk0l2YCo6jO5unpq9dTJkyesW7uu+oZp09q0iLDXvOQNG0r9uxbtNdU2hIcidV4YELTpt40C17WIsMk9oAyapxMbNxiCR4uRWAP2TNOZ3S/KCmdEyfggEORQ9Xh4kKPkM8O6AjbIS/BWfZLED+N5StmbisEZRttRTzVD2LZtUdW09gPbFx0tatuE0Y2E/YYeVYlI0E7ELYjET68vJJS9nZdRc1shq7dgzRIeKfrtj0W//LTojTDCOE2pMsjb3BiQhSo+gF3jOJNhKQwPUgqcBdqhER+Cc4efUOvL8nFKwhxn/tjKtNLTY12HO3z15ecnTiz4ODaEkUEBgoKqIRAdgR3u8NmC4wuOd3g/noSoWoILGgHU5w7/jGpxbQ28dJRl3/AoPfR6jKIUqcnKstkm2fpnZOlZGSFBqUgQtLt6/9vvSf0Y/19qENYbgIpHSQBvFk6ekgy2NZO9SIqk1Pag7Ttvvttb6pu3Ps9lTtvsqsiTtmLpnC83L8fpyjXlmpMVhDYS+IKbN6YkBNINaubunWiMphTh9d0L1tcqMj6IDwKdszgeYYR9u6old/bsi1SsRohhs3heVBK2mz1QLQTthOe3Xyj1q8xJ3uwZZ/A5jbI17GlPyUlNTk31jHN6DQoyhgLuQNVm7l7bWZkPb719FBnKCIcOTJ8h9bVi8GO16hCdLAxR1N9E6HSsDlOmDGjLNBOlcnR6KlY6RFitODzFlrCM799qyt1eZV1KEqhU+E+/5EiE8EML/8qgXVdIfbPHZhfkrrp2bL5J2sqmJptL8nOzi9fnFxekKgjLUOB/rub58obMCEGjVoGzI7x8986Z5zydsDcQkMXWQguPJG4No25tslXYt08Vs62N8TaYvUnKNVSh6tVBuxl798iE7/QYuRSO5jhB2koYGCHZ4PBwKV2MnF5BhlPqxsqC1uJshKChUDIk3qsOPPmy1LeXIIgMzToYWtqK6nS0vRNNC+P1gqgUPrwFfYuFP+DiWK5hCwhjFzSF/WuzOnd2uwt9fEcZ4dp+l52VxSWvPueQb4ugMc7lcY8GhA+iC5+CETqLhV8Ww5iwmmbKsD4glPHtg3bIhJ/mMpucuelpabK8jqVyqdkVOea0nOtzTR4FYQoKvM1MadcJfSUjvO+uB2MlfP+hgrtLAoUf5VAhzPCe++MepVD4gAmlw71bZMLvnZ5ucBhpe0+ZDokuUPgpnJETofDtkYSfEjhUKP8ks0G5eaOoVPjbpt8t9XUYOU+6gfZYZIUEytMOzmB39OzJGThaQZgBv1EPFeIr/AiHCnEMmmiHCgMnnJHI4oFNjGzySEBGVDZsD2g+ovChX3DzjpCeptT1AaEdf8CgHbKgcbnSXBUmoykvRyb8ZKMnrSIzz2Q2myKV+iHhY0laJeGRfhLhW/dcqWulxqOOkOFNp7v78IRm/BZkiztiF6WRDxX85zRFIKTDGfu3PCr1SxcEmGd1jMDKhD9+jE6kRZHWdrILSh3CTsVAXZqa5eWUhA8P7UqGuuu0bfpDso3fuJXjDILHIBc+LQgp6XaHMd1o4HpFyvgZzUzpE49Jn5563wv+qRk/ej6culFSCG96RBc74UcmnHJnH2A5K/xdj0t9S0oLirMrvSWrKmSlvvMmZ3GBuTI/u7IkX1nqW1BQ2wzh6FskNY11eyuFH2kC4DJRf581/B+tQHzfK4e9ZsIQBkFHbURgLQMfX9x4vAlh1sMhIYnAhxhYxVgSNE6C+E+F0KWJpZuIrEgs4WBkSI9E8vXQIJrlCWTssRwSajSDJyYoXFYM0Wj+BNjsk7mwYOwbAAAAAElFTkSuQmCC";
const Onboarding = () => {
  const triggerRef = react.useRef(null);
  const [isOpen, setIsOpen] = react.useState(false);
  const { formatMessage } = (0,useIntl/* default */.A)();
  const { communityEdition } = (0,dist/* useAppInfo */.Xe)();
  const handlePopoverVisibility = () => {
    setIsOpen((prev) => !prev);
  };
  const docLinks = [
    ...DOCUMENTATION_LINKS,
    {
      label: { id: "Settings.application.get-help", defaultMessage: "Get help" },
      icon: Message/* default */.A,
      href: communityEdition ? "https://discord.strapi.io" : "https://support.strapi.io/support/home"
    }
  ];
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)(Box/* Box */.a, { as: "aside", position: "fixed", bottom: 2, right: 2, children: [
    /* @__PURE__ */ (0,jsx_runtime.jsx)(
      HelperButton,
      {
        "aria-label": formatMessage(
          isOpen ? {
            id: "app.components.Onboarding.help.button-close",
            defaultMessage: "Close help menu"
          } : {
            id: "app.components.Onboarding.help.button",
            defaultMessage: "Open help menu"
          }
        ),
        onClick: handlePopoverVisibility,
        ref: triggerRef,
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Icon/* Icon */.I, { as: isOpen ? Cross/* default */.A : Question/* default */.A, color: "buttonNeutral0" })
      }
    ),
    isOpen && /* @__PURE__ */ (0,jsx_runtime.jsx)(Portal/* Portal */.Z, { children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(
      Popover/* Content */.UC,
      {
        padding: 0,
        onDismiss: handlePopoverVisibility,
        source: triggerRef,
        placement: "top-end",
        spacing: 12,
        children: [
          /* @__PURE__ */ (0,jsx_runtime.jsxs)(
            Flex/* Flex */.s,
            {
              justifyContent: "space-between",
              paddingBottom: 5,
              paddingRight: 6,
              paddingLeft: 6,
              paddingTop: 6,
              children: [
                /* @__PURE__ */ (0,jsx_runtime.jsx)(TypographyLineHeight, { fontWeight: "bold", children: formatMessage({
                  id: "app.components.Onboarding.title",
                  defaultMessage: "Get started videos"
                }) }),
                /* @__PURE__ */ (0,jsx_runtime.jsx)(
                  TextLink,
                  {
                    as: "a",
                    href: WATCH_MORE.href,
                    target: "_blank",
                    rel: "noreferrer noopener",
                    variant: "pi",
                    textColor: "primary600",
                    children: formatMessage(WATCH_MORE.label)
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ (0,jsx_runtime.jsx)(Divider/* Divider */.c, {}),
          VIDEO_LINKS.map(({ href, duration, label }, index) => /* @__PURE__ */ (0,jsx_runtime.jsxs)(
            VideoLinkWrapper,
            {
              as: "a",
              href,
              target: "_blank",
              rel: "noreferrer noopener",
              hasRadius: true,
              paddingTop: 4,
              paddingBottom: 4,
              paddingLeft: 6,
              paddingRight: 11,
              children: [
                /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* Box */.a, { paddingRight: 5, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.o, { textColor: "neutral200", variant: "alpha", children: index + 1 }) }),
                /* @__PURE__ */ (0,jsx_runtime.jsxs)(Box/* Box */.a, { position: "relative", children: [
                  /* @__PURE__ */ (0,jsx_runtime.jsx)(Preview, { src: onboardingPreview, alt: "" }),
                  /* @__PURE__ */ (0,jsx_runtime.jsx)(
                    AuthenticatedApp_uHd_MPEB_IconWrapper,
                    {
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      background: "primary600",
                      borderRadius: "50%",
                      justifyContent: "center",
                      width: 6,
                      height: 6,
                      children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Icon/* Icon */.I, { as: Play/* default */.A, color: "buttonNeutral0", width: 3, height: 3 })
                    }
                  )
                ] }),
                /* @__PURE__ */ (0,jsx_runtime.jsxs)(Flex/* Flex */.s, { direction: "column", alignItems: "start", paddingLeft: 4, children: [
                  /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.o, { fontWeight: "bold", children: formatMessage(label) }),
                  /* @__PURE__ */ (0,jsx_runtime.jsx)(VisuallyHidden/* VisuallyHidden */.s, { children: ":" }),
                  /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.o, { textColor: "neutral600", variant: "pi", children: duration })
                ] })
              ]
            },
            href
          )),
          /* @__PURE__ */ (0,jsx_runtime.jsx)(
            Flex/* Flex */.s,
            {
              direction: "column",
              alignItems: "stretch",
              gap: 2,
              paddingLeft: 5,
              paddingTop: 2,
              paddingBottom: 5,
              children: docLinks.map(({ label, href, icon }) => /* @__PURE__ */ (0,jsx_runtime.jsxs)(Flex/* Flex */.s, { gap: 3, children: [
                /* @__PURE__ */ (0,jsx_runtime.jsx)(Icon/* Icon */.I, { as: icon, color: "primary600" }),
                /* @__PURE__ */ (0,jsx_runtime.jsx)(
                  TextLink,
                  {
                    as: "a",
                    href,
                    target: "_blank",
                    rel: "noreferrer noopener",
                    variant: "sigma",
                    textColor: "primary700",
                    children: formatMessage(label)
                  }
                )
              ] }, href))
            }
          )
        ]
      }
    ) })
  ] });
};
const HelperButton = (0,styled_components_browser_esm/* default */.Ay)((0,Button/* Button */.$))`
  border-radius: 50%;
  padding: ${({ theme }) => theme.spaces[3]};
  /* Resetting 2rem height defined by Button component */
  height: 100%;
`;
const AuthenticatedApp_uHd_MPEB_IconWrapper = (0,styled_components_browser_esm/* default */.Ay)((0,Flex/* Flex */.s))`
  transform: translate(-50%, -50%);
`;
const VideoLinkWrapper = (0,styled_components_browser_esm/* default */.Ay)((0,Flex/* Flex */.s))`
  text-decoration: none;

  :focus-visible {
    outline-offset: ${({ theme }) => `-${theme.spaces[1]}`};
  }

  :hover {
    background: ${({ theme }) => theme.colors.primary100};

    /* Hover style for the number displayed */
    ${Typography/* Typography */.o}:first-child {
      color: ${({ theme }) => theme.colors.primary500};
    }

    /* Hover style for the label */
    ${Typography/* Typography */.o}:nth-child(1) {
      color: ${({ theme }) => theme.colors.primary600};
    }
  }
`;
const Preview = styled_components_browser_esm/* default */.Ay.img`
  width: ${({ theme }) => theme.spaces[10]};
  height: ${({ theme }) => theme.spaces[8]};
  /* Same overlay used in ModalLayout */
  background: ${({ theme }) => `${theme.colors.neutral800}1F`};
  border-radius: ${({ theme }) => theme.borderRadius};
`;
const TypographyLineHeight = (0,styled_components_browser_esm/* default */.Ay)((0,Typography/* Typography */.o))`
  /* line height of label and watch more to 1 so they can be better aligned visually */
  line-height: 1;
`;
const TextLink = (0,styled_components_browser_esm/* default */.Ay)(TypographyLineHeight)`
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;
const VIDEO_LINKS = [
  {
    label: {
      id: "app.components.Onboarding.link.build-content",
      defaultMessage: "Build a content architecture"
    },
    href: "https://www.youtube.com/watch?v=G9GjN0RxhkE",
    duration: "5:48"
  },
  {
    label: {
      id: "app.components.Onboarding.link.manage-content",
      defaultMessage: "Add & manage content"
    },
    href: "https://www.youtube.com/watch?v=DEZw4KbybAI",
    duration: "3:18"
  },
  {
    label: { id: "app.components.Onboarding.link.manage-media", defaultMessage: "Manage media" },
    href: "https://www.youtube.com/watch?v=-61MuiMQb38",
    duration: "3:41"
  }
];
const WATCH_MORE = {
  href: "https://www.youtube.com/playlist?list=PL7Q0DQYATmvidz6lEmwE5nIcOAYagxWqq",
  label: {
    id: "app.components.Onboarding.link.more-videos",
    defaultMessage: "Watch more videos"
  }
};
const DOCUMENTATION_LINKS = [
  {
    label: { id: "global.documentation", defaultMessage: "documentation" },
    href: "https://docs.strapi.io",
    icon: Book/* default */.A
  },
  {
    label: { id: "app.static.links.cheatsheet", defaultMessage: "cheatsheet" },
    href: "https://strapi-showcase.s3-us-west-2.amazonaws.com/CheatSheet.pdf",
    icon: PaperPlane/* default */.A
  }
];
const selectAdminPermissions = (0,index_dMS_26Ft.c)((state) => state.admin_app.permissions);
const useMenu = () => {
  const { allPermissions: userPermissions } = (0,dist/* useRBACProvider */.r5)();
  const { shouldUpdateStrapi } = (0,dist/* useAppInfo */.Xe)();
  const { menu } = (0,dist/* useStrapiApp */.vD)();
  const permissions = (0,es/* useSelector */.d4)(selectAdminPermissions);
  const [menuWithUserPermissions, setMenuWithUserPermissions] = react.useState({
    generalSectionLinks: [
      {
        icon: Puzzle/* default */.A,
        intlLabel: {
          id: "global.plugins",
          defaultMessage: "Plugins"
        },
        to: "/list-plugins",
        permissions: permissions.marketplace?.main ?? []
      },
      {
        icon: ShoppingCart/* default */.A,
        intlLabel: {
          id: "global.marketplace",
          defaultMessage: "Marketplace"
        },
        to: "/marketplace",
        permissions: permissions.marketplace?.main ?? []
      },
      {
        icon: Cog/* default */.A,
        intlLabel: {
          id: "global.settings",
          defaultMessage: "Settings"
        },
        to: "/settings",
        // Permissions of this link are retrieved in the init phase
        // using the settings menu
        permissions: [],
        notificationsCount: 0
      }
    ],
    pluginsSectionLinks: [],
    isLoading: true
  });
  const generalSectionLinksRef = react.useRef(menuWithUserPermissions.generalSectionLinks);
  react.useEffect(() => {
    async function applyMenuPermissions() {
      const authorizedPluginSectionLinks = await getPluginSectionLinks(userPermissions, menu);
      const authorizedGeneralSectionLinks = await getGeneralLinks(
        userPermissions,
        generalSectionLinksRef.current,
        shouldUpdateStrapi
      );
      setMenuWithUserPermissions((state) => ({
        ...state,
        generalSectionLinks: authorizedGeneralSectionLinks,
        pluginsSectionLinks: authorizedPluginSectionLinks,
        isLoading: false
      }));
    }
    applyMenuPermissions();
  }, [
    setMenuWithUserPermissions,
    generalSectionLinksRef,
    userPermissions,
    menu,
    permissions,
    shouldUpdateStrapi
  ]);
  return menuWithUserPermissions;
};
const getGeneralLinks = async (userPermissions, generalSectionRawLinks, shouldUpdateStrapi = false) => {
  const generalSectionLinksPermissions = await Promise.all(
    generalSectionRawLinks.map(({ permissions }) => (0,dist/* hasPermissions */.v$)(userPermissions, permissions))
  );
  const authorizedGeneralSectionLinks = generalSectionRawLinks.filter(
    (_, index) => generalSectionLinksPermissions[index]
  );
  const settingsLinkIndex = authorizedGeneralSectionLinks.findIndex(
    (obj) => obj.to === "/settings"
  );
  if (settingsLinkIndex === -1) {
    return [];
  }
  const authorizedGeneralLinksClone = cloneDeep(authorizedGeneralSectionLinks);
  authorizedGeneralLinksClone[settingsLinkIndex].notificationsCount = shouldUpdateStrapi ? 1 : 0;
  return authorizedGeneralLinksClone;
};
const getPluginSectionLinks = async (userPermissions, pluginsSectionRawLinks) => {
  const pluginSectionLinksPermissions = await Promise.all(
    pluginsSectionRawLinks.map(({ permissions }) => (0,dist/* hasPermissions */.v$)(userPermissions, permissions))
  );
  const authorizedPluginSectionLinks = pluginsSectionRawLinks.filter(
    (_, index) => pluginSectionLinksPermissions[index]
  );
  return authorizedPluginSectionLinks;
};
const FlexBox = (0,styled_components_browser_esm/* default */.Ay)((0,Box/* Box */.a))`
  flex: 1;
`;
const AppLayout = ({ children, sideNav }) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)(Box/* Box */.a, { background: "neutral100", children: [
    /* @__PURE__ */ (0,jsx_runtime.jsx)(SkipToContent/* SkipToContent */.o, { children: formatMessage({ id: "skipToContent", defaultMessage: "Skip to content" }) }),
    /* @__PURE__ */ (0,jsx_runtime.jsxs)(Flex/* Flex */.s, { alignItems: "flex-start", children: [
      sideNav,
      /* @__PURE__ */ (0,jsx_runtime.jsx)(FlexBox, { children })
    ] })
  ] });
};
const CM = react.lazy(
  () => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 92129)).then((n) => n.a0).then((mod) => ({ default: mod.App }))
);
const HomePage = react.lazy(
  () => __webpack_require__.e(/* import() */ 6081).then(__webpack_require__.bind(__webpack_require__, 86081)).then((mod) => ({
    default: mod.HomePage
  }))
);
const InstalledPluginsPage = react.lazy(
  () => __webpack_require__.e(/* import() */ 196).then(__webpack_require__.bind(__webpack_require__, 30196)).then((mod) => ({
    default: mod.ProtectedInstalledPluginsPage
  }))
);
const MarketplacePage = react.lazy(
  () => __webpack_require__.e(/* import() */ 7092).then(__webpack_require__.bind(__webpack_require__, 77092)).then((mod) => ({ default: mod.ProtectedMarketplacePage }))
);
const NotFoundPage = react.lazy(
  () => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 92129)).then((n) => n.$).then(({ NotFoundPage: NotFoundPage2 }) => ({ default: NotFoundPage2 }))
);
const InternalErrorPage = react.lazy(
  () => __webpack_require__.e(/* import() */ 2301).then(__webpack_require__.bind(__webpack_require__, 92301)).then(({ InternalErrorPage: InternalErrorPage2 }) => ({
    default: InternalErrorPage2
  }))
);
const ProfilePage = react.lazy(
  () => __webpack_require__.e(/* import() */ 857).then(__webpack_require__.bind(__webpack_require__, 50857)).then((mod) => ({
    default: mod.ProfilePage
  }))
);
const SettingsPage = react.lazy(
  () => __webpack_require__.e(/* import() */ 2389).then(__webpack_require__.bind(__webpack_require__, 92389)).then((mod) => ({
    default: mod.SettingsPage
  }))
);
const Admin = () => {
  const { trackUsage } = (0,dist/* useTracking */.z1)();
  const { isLoading, generalSectionLinks, pluginsSectionLinks } = useMenu();
  const { menu } = (0,dist/* useStrapiApp */.vD)();
  const { showTutorials } = (0,index_dMS_26Ft.u)("Admin");
  (0,index_dMS_26Ft.b)(() => {
    trackUsage("didAccessAuthenticatedAdministration");
  });
  const routes = react.useMemo(() => {
    return menu.filter((link) => link.Component).map(({ to, Component, exact }) => (0,index_dMS_26Ft.d)(Component, to, exact));
  }, [menu]);
  if (isLoading) {
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(dist/* LoadingIndicatorPage */.Bl, {});
  }
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(DndProvider, { backend: HTML5Backend, children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(
    AppLayout,
    {
      sideNav: /* @__PURE__ */ (0,jsx_runtime.jsx)(
        LeftMenu,
        {
          generalSectionLinks,
          pluginsSectionLinks
        }
      ),
      children: [
        /* @__PURE__ */ (0,jsx_runtime.jsx)(react.Suspense, { fallback: /* @__PURE__ */ (0,jsx_runtime.jsx)(dist/* LoadingIndicatorPage */.Bl, {}), children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(react_router/* Switch */.dO, { children: [
          /* @__PURE__ */ (0,jsx_runtime.jsx)(react_router/* Route */.qh, { path: "/", component: HomePage, exact: true }),
          /* @__PURE__ */ (0,jsx_runtime.jsx)(react_router/* Route */.qh, { path: "/me", component: ProfilePage, exact: true }),
          /* @__PURE__ */ (0,jsx_runtime.jsx)(react_router/* Route */.qh, { path: "/content-manager", component: CM }),
          routes,
          /* @__PURE__ */ (0,jsx_runtime.jsx)(react_router/* Route */.qh, { path: "/settings/:settingId", component: SettingsPage }),
          /* @__PURE__ */ (0,jsx_runtime.jsx)(react_router/* Route */.qh, { path: "/settings", component: SettingsPage, exact: true }),
          /* @__PURE__ */ (0,jsx_runtime.jsx)(react_router/* Route */.qh, { path: "/marketplace", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(MarketplacePage, {}) }),
          /* @__PURE__ */ (0,jsx_runtime.jsx)(react_router/* Route */.qh, { path: "/list-plugins", exact: true, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(InstalledPluginsPage, {}) }),
          /* @__PURE__ */ (0,jsx_runtime.jsx)(react_router/* Route */.qh, { path: "/404", component: NotFoundPage }),
          /* @__PURE__ */ (0,jsx_runtime.jsx)(react_router/* Route */.qh, { path: "/500", component: InternalErrorPage }),
          /* @__PURE__ */ (0,jsx_runtime.jsx)(react_router/* Route */.qh, { path: "", component: NotFoundPage })
        ] }) }),
        /* @__PURE__ */ (0,jsx_runtime.jsx)(GuidedTourModal, {}),
        showTutorials && /* @__PURE__ */ (0,jsx_runtime.jsx)(Onboarding, {})
      ]
    }
  ) });
};
const PluginsInitializer = () => {
  const { plugins: appPlugins } = (0,dist/* useStrapiApp */.vD)();
  const [{ plugins }, dispatch] = react.useReducer(
    reducer,
    AuthenticatedApp_uHd_MPEB_initialState,
    () => init(appPlugins)
  );
  const setPlugin = react.useRef((pluginId) => {
    dispatch({ type: "SET_PLUGIN_READY", pluginId });
  });
  const hasApluginNotReady = Object.keys(plugins).some(
    (plugin) => plugins[plugin].isReady === false
  );
  if (hasApluginNotReady) {
    const initializers = Object.keys(plugins).reduce((acc, current) => {
      const InitializerComponent = plugins[current].initializer;
      if (InitializerComponent) {
        const key = plugins[current].pluginId;
        acc.push(/* @__PURE__ */ (0,jsx_runtime.jsx)(InitializerComponent, { setPlugin: setPlugin.current }, key));
      }
      return acc;
    }, []);
    return /* @__PURE__ */ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [
      initializers,
      /* @__PURE__ */ (0,jsx_runtime.jsx)(dist/* LoadingIndicatorPage */.Bl, {})
    ] });
  }
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(Admin, {});
};
const AuthenticatedApp_uHd_MPEB_initialState = {
  plugins: {}
};
const reducer = (state = AuthenticatedApp_uHd_MPEB_initialState, action) => (0,immer_esm/* default */.Ay)(state, (draftState) => {
  switch (action.type) {
    case "SET_PLUGIN_READY": {
      set(draftState, ["plugins", action.pluginId, "isReady"], true);
      break;
    }
    default:
      return draftState;
  }
});
const init = (plugins) => {
  return {
    plugins: Object.keys(plugins).reduce((acc, current) => {
      acc[current] = { ...plugins[current] };
      return acc;
    }, {})
  };
};
const strapiVersion = packageJSON.version;
const AuthenticatedApp = () => {
  const { setGuidedTourVisibility } = (0,dist/* useGuidedTour */.Cx)();
  const { user } = (0,index_dMS_26Ft.a)("AuthenticatedApp");
  const userInfo = user;
  const [userDisplayName, setUserDisplayName] = react.useState(
    () => userInfo ? userInfo.username || getFullName(userInfo.firstname ?? "", userInfo.lastname) : ""
  );
  react.useEffect(() => {
    setUserDisplayName(
      userInfo ? userInfo.username || getFullName(userInfo.firstname ?? "", userInfo.lastname) : ""
    );
  }, [userInfo]);
  const [userId, setUserId] = react.useState();
  const { showReleaseNotification } = (0,index_dMS_26Ft.u)("AuthenticatedApp");
  const { data: appInfo, isLoading: isLoadingAppInfo } = (0,index_dMS_26Ft.e)();
  const {
    data: permissions,
    isLoading: isLoadingPermissions,
    refetch
  } = (0,index_dMS_26Ft.f)();
  const [tagName, setTagName] = react.useState(strapiVersion);
  react.useEffect(() => {
    if (showReleaseNotification) {
      fetch("https://api.github.com/repos/strapi/strapi/releases/latest").then(async (res) => {
        if (!res.ok) {
          throw new Error();
        }
        const response = await res.json();
        if (!response.tag_name) {
          throw new Error();
        }
        setTagName(response.tag_name);
      }).catch(() => {
      });
    }
  }, [showReleaseNotification]);
  const userRoles = user?.roles;
  react.useEffect(() => {
    if (userRoles) {
      const isUserSuperAdmin = userRoles.find(({ code }) => code === "strapi-super-admin");
      if (isUserSuperAdmin && appInfo?.autoReload) {
        setGuidedTourVisibility(true);
      }
    }
  }, [userRoles, appInfo?.autoReload, setGuidedTourVisibility]);
  react.useEffect(() => {
    hashAdminUserEmail(userInfo).then((id) => {
      if (id) {
        setUserId(id);
      }
    });
  }, [userInfo]);
  if (isLoadingAppInfo || isLoadingPermissions) {
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(dist/* LoadingIndicatorPage */.Bl, {});
  }
  const refetchPermissions = () => {
    refetch();
  };
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    dist/* AppInfoProvider */.Bc,
    {
      ...appInfo,
      userId,
      latestStrapiReleaseTag: tagName,
      setUserDisplayName,
      shouldUpdateStrapi: checkLatestStrapiVersion(strapiVersion, tagName),
      userDisplayName,
      children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(index_dMS_26Ft.R, { permissions: permissions ?? [], refetchPermissions, children: [
        /* @__PURE__ */ (0,jsx_runtime.jsx)(index_dMS_26Ft.N, {}),
        /* @__PURE__ */ (0,jsx_runtime.jsx)(PluginsInitializer, {})
      ] })
    }
  );
};
const checkLatestStrapiVersion = (currentPackageVersion, latestPublishedVersion = "") => {
  if (!valid(currentPackageVersion) || !valid(latestPublishedVersion)) {
    return false;
  }
  return lt(currentPackageVersion, latestPublishedVersion);
};
const AuthenticatedApp$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AuthenticatedApp
}, Symbol.toStringTag, { value: "Module" }));



/***/ },

/***/ 66980
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92132);

const g = (i) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1rem", height: "1rem", fill: "none", viewBox: "0 0 22 30", ...i, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
  "path",
  {
    fill: "#000",
    d: "m21.731 14.683-14 15a1 1 0 0 1-1.711-.875l1.832-9.167L.65 16.936a1 1 0 0 1-.375-1.625l14-15a1 1 0 0 1 1.71.875l-1.837 9.177 7.204 2.7a1 1 0 0 1 .375 1.62h.005Z"
  }
) }), n = g;



/***/ }

}]);