(self["webpackChunkmy_strapi_project"] = self["webpackChunkmy_strapi_project"] || []).push([[7092],{

/***/ 71969
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

const Yallist = __webpack_require__(6515);
const MAX = Symbol("max");
const LENGTH = Symbol("length");
const LENGTH_CALCULATOR = Symbol("lengthCalculator");
const ALLOW_STALE = Symbol("allowStale");
const MAX_AGE = Symbol("maxAge");
const DISPOSE = Symbol("dispose");
const NO_DISPOSE_ON_SET = Symbol("noDisposeOnSet");
const LRU_LIST = Symbol("lruList");
const CACHE = Symbol("cache");
const UPDATE_AGE_ON_GET = Symbol("updateAgeOnGet");
const naiveLength = () => 1;
class LRUCache {
  constructor(options) {
    if (typeof options === "number")
      options = { max: options };
    if (!options)
      options = {};
    if (options.max && (typeof options.max !== "number" || options.max < 0))
      throw new TypeError("max must be a non-negative number");
    const max = this[MAX] = options.max || Infinity;
    const lc = options.length || naiveLength;
    this[LENGTH_CALCULATOR] = typeof lc !== "function" ? naiveLength : lc;
    this[ALLOW_STALE] = options.stale || false;
    if (options.maxAge && typeof options.maxAge !== "number")
      throw new TypeError("maxAge must be a number");
    this[MAX_AGE] = options.maxAge || 0;
    this[DISPOSE] = options.dispose;
    this[NO_DISPOSE_ON_SET] = options.noDisposeOnSet || false;
    this[UPDATE_AGE_ON_GET] = options.updateAgeOnGet || false;
    this.reset();
  }
  // resize the cache when the max changes.
  set max(mL) {
    if (typeof mL !== "number" || mL < 0)
      throw new TypeError("max must be a non-negative number");
    this[MAX] = mL || Infinity;
    trim(this);
  }
  get max() {
    return this[MAX];
  }
  set allowStale(allowStale) {
    this[ALLOW_STALE] = !!allowStale;
  }
  get allowStale() {
    return this[ALLOW_STALE];
  }
  set maxAge(mA) {
    if (typeof mA !== "number")
      throw new TypeError("maxAge must be a non-negative number");
    this[MAX_AGE] = mA;
    trim(this);
  }
  get maxAge() {
    return this[MAX_AGE];
  }
  // resize the cache when the lengthCalculator changes.
  set lengthCalculator(lC) {
    if (typeof lC !== "function")
      lC = naiveLength;
    if (lC !== this[LENGTH_CALCULATOR]) {
      this[LENGTH_CALCULATOR] = lC;
      this[LENGTH] = 0;
      this[LRU_LIST].forEach((hit) => {
        hit.length = this[LENGTH_CALCULATOR](hit.value, hit.key);
        this[LENGTH] += hit.length;
      });
    }
    trim(this);
  }
  get lengthCalculator() {
    return this[LENGTH_CALCULATOR];
  }
  get length() {
    return this[LENGTH];
  }
  get itemCount() {
    return this[LRU_LIST].length;
  }
  rforEach(fn, thisp) {
    thisp = thisp || this;
    for (let walker = this[LRU_LIST].tail; walker !== null; ) {
      const prev = walker.prev;
      forEachStep(this, fn, walker, thisp);
      walker = prev;
    }
  }
  forEach(fn, thisp) {
    thisp = thisp || this;
    for (let walker = this[LRU_LIST].head; walker !== null; ) {
      const next = walker.next;
      forEachStep(this, fn, walker, thisp);
      walker = next;
    }
  }
  keys() {
    return this[LRU_LIST].toArray().map((k) => k.key);
  }
  values() {
    return this[LRU_LIST].toArray().map((k) => k.value);
  }
  reset() {
    if (this[DISPOSE] && this[LRU_LIST] && this[LRU_LIST].length) {
      this[LRU_LIST].forEach((hit) => this[DISPOSE](hit.key, hit.value));
    }
    this[CACHE] = /* @__PURE__ */ new Map();
    this[LRU_LIST] = new Yallist();
    this[LENGTH] = 0;
  }
  dump() {
    return this[LRU_LIST].map((hit) => isStale(this, hit) ? false : {
      k: hit.key,
      v: hit.value,
      e: hit.now + (hit.maxAge || 0)
    }).toArray().filter((h) => h);
  }
  dumpLru() {
    return this[LRU_LIST];
  }
  set(key, value, maxAge) {
    maxAge = maxAge || this[MAX_AGE];
    if (maxAge && typeof maxAge !== "number")
      throw new TypeError("maxAge must be a number");
    const now = maxAge ? Date.now() : 0;
    const len = this[LENGTH_CALCULATOR](value, key);
    if (this[CACHE].has(key)) {
      if (len > this[MAX]) {
        del(this, this[CACHE].get(key));
        return false;
      }
      const node = this[CACHE].get(key);
      const item = node.value;
      if (this[DISPOSE]) {
        if (!this[NO_DISPOSE_ON_SET])
          this[DISPOSE](key, item.value);
      }
      item.now = now;
      item.maxAge = maxAge;
      item.value = value;
      this[LENGTH] += len - item.length;
      item.length = len;
      this.get(key);
      trim(this);
      return true;
    }
    const hit = new Entry(key, value, len, now, maxAge);
    if (hit.length > this[MAX]) {
      if (this[DISPOSE])
        this[DISPOSE](key, value);
      return false;
    }
    this[LENGTH] += hit.length;
    this[LRU_LIST].unshift(hit);
    this[CACHE].set(key, this[LRU_LIST].head);
    trim(this);
    return true;
  }
  has(key) {
    if (!this[CACHE].has(key))
      return false;
    const hit = this[CACHE].get(key).value;
    return !isStale(this, hit);
  }
  get(key) {
    return get(this, key, true);
  }
  peek(key) {
    return get(this, key, false);
  }
  pop() {
    const node = this[LRU_LIST].tail;
    if (!node)
      return null;
    del(this, node);
    return node.value;
  }
  del(key) {
    del(this, this[CACHE].get(key));
  }
  load(arr) {
    this.reset();
    const now = Date.now();
    for (let l = arr.length - 1; l >= 0; l--) {
      const hit = arr[l];
      const expiresAt = hit.e || 0;
      if (expiresAt === 0)
        this.set(hit.k, hit.v);
      else {
        const maxAge = expiresAt - now;
        if (maxAge > 0) {
          this.set(hit.k, hit.v, maxAge);
        }
      }
    }
  }
  prune() {
    this[CACHE].forEach((value, key) => get(this, key, false));
  }
}
const get = (self, key, doUse) => {
  const node = self[CACHE].get(key);
  if (node) {
    const hit = node.value;
    if (isStale(self, hit)) {
      del(self, node);
      if (!self[ALLOW_STALE])
        return void 0;
    } else {
      if (doUse) {
        if (self[UPDATE_AGE_ON_GET])
          node.value.now = Date.now();
        self[LRU_LIST].unshiftNode(node);
      }
    }
    return hit.value;
  }
};
const isStale = (self, hit) => {
  if (!hit || !hit.maxAge && !self[MAX_AGE])
    return false;
  const diff = Date.now() - hit.now;
  return hit.maxAge ? diff > hit.maxAge : self[MAX_AGE] && diff > self[MAX_AGE];
};
const trim = (self) => {
  if (self[LENGTH] > self[MAX]) {
    for (let walker = self[LRU_LIST].tail; self[LENGTH] > self[MAX] && walker !== null; ) {
      const prev = walker.prev;
      del(self, walker);
      walker = prev;
    }
  }
};
const del = (self, node) => {
  if (node) {
    const hit = node.value;
    if (self[DISPOSE])
      self[DISPOSE](hit.key, hit.value);
    self[LENGTH] -= hit.length;
    self[CACHE].delete(hit.key);
    self[LRU_LIST].removeNode(node);
  }
};
class Entry {
  constructor(key, value, length, now, maxAge) {
    this.key = key;
    this.value = value;
    this.length = length;
    this.now = now;
    this.maxAge = maxAge || 0;
  }
}
const forEachStep = (self, fn, node, thisp) => {
  let hit = node.value;
  if (isStale(self, hit)) {
    del(self, node);
    if (!self[ALLOW_STALE])
      hit = void 0;
  }
  if (hit)
    fn.call(thisp, hit.value, hit.key, self);
};
module.exports = LRUCache;


/***/ },

/***/ 99260
(module, __unused_webpack_exports, __webpack_require__) {

const ANY = Symbol("SemVer ANY");
class Comparator {
  static get ANY() {
    return ANY;
  }
  constructor(comp, options) {
    options = parseOptions(options);
    if (comp instanceof Comparator) {
      if (comp.loose === !!options.loose) {
        return comp;
      } else {
        comp = comp.value;
      }
    }
    comp = comp.trim().split(/\s+/).join(" ");
    debug("comparator", comp, options);
    this.options = options;
    this.loose = !!options.loose;
    this.parse(comp);
    if (this.semver === ANY) {
      this.value = "";
    } else {
      this.value = this.operator + this.semver.version;
    }
    debug("comp", this);
  }
  parse(comp) {
    const r = this.options.loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR];
    const m = comp.match(r);
    if (!m) {
      throw new TypeError(`Invalid comparator: ${comp}`);
    }
    this.operator = m[1] !== void 0 ? m[1] : "";
    if (this.operator === "=") {
      this.operator = "";
    }
    if (!m[2]) {
      this.semver = ANY;
    } else {
      this.semver = new SemVer(m[2], this.options.loose);
    }
  }
  toString() {
    return this.value;
  }
  test(version) {
    debug("Comparator.test", version, this.options.loose);
    if (this.semver === ANY || version === ANY) {
      return true;
    }
    if (typeof version === "string") {
      try {
        version = new SemVer(version, this.options);
      } catch (er) {
        return false;
      }
    }
    return cmp(version, this.operator, this.semver, this.options);
  }
  intersects(comp, options) {
    if (!(comp instanceof Comparator)) {
      throw new TypeError("a Comparator is required");
    }
    if (this.operator === "") {
      if (this.value === "") {
        return true;
      }
      return new Range(comp.value, options).test(this.value);
    } else if (comp.operator === "") {
      if (comp.value === "") {
        return true;
      }
      return new Range(this.value, options).test(comp.semver);
    }
    options = parseOptions(options);
    if (options.includePrerelease && (this.value === "<0.0.0-0" || comp.value === "<0.0.0-0")) {
      return false;
    }
    if (!options.includePrerelease && (this.value.startsWith("<0.0.0") || comp.value.startsWith("<0.0.0"))) {
      return false;
    }
    if (this.operator.startsWith(">") && comp.operator.startsWith(">")) {
      return true;
    }
    if (this.operator.startsWith("<") && comp.operator.startsWith("<")) {
      return true;
    }
    if (this.semver.version === comp.semver.version && this.operator.includes("=") && comp.operator.includes("=")) {
      return true;
    }
    if (cmp(this.semver, "<", comp.semver, options) && this.operator.startsWith(">") && comp.operator.startsWith("<")) {
      return true;
    }
    if (cmp(this.semver, ">", comp.semver, options) && this.operator.startsWith("<") && comp.operator.startsWith(">")) {
      return true;
    }
    return false;
  }
}
module.exports = Comparator;
const parseOptions = __webpack_require__(1231);
const { safeRe: re, t } = __webpack_require__(88618);
const cmp = __webpack_require__(96763);
const debug = __webpack_require__(47180);
const SemVer = __webpack_require__(85968);
const Range = __webpack_require__(2547);


/***/ },

/***/ 2547
(module, __unused_webpack_exports, __webpack_require__) {

class Range {
  constructor(range, options) {
    options = parseOptions(options);
    if (range instanceof Range) {
      if (range.loose === !!options.loose && range.includePrerelease === !!options.includePrerelease) {
        return range;
      } else {
        return new Range(range.raw, options);
      }
    }
    if (range instanceof Comparator) {
      this.raw = range.value;
      this.set = [[range]];
      this.format();
      return this;
    }
    this.options = options;
    this.loose = !!options.loose;
    this.includePrerelease = !!options.includePrerelease;
    this.raw = range.trim().split(/\s+/).join(" ");
    this.set = this.raw.split("||").map((r) => this.parseRange(r.trim())).filter((c) => c.length);
    if (!this.set.length) {
      throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
    }
    if (this.set.length > 1) {
      const first = this.set[0];
      this.set = this.set.filter((c) => !isNullSet(c[0]));
      if (this.set.length === 0) {
        this.set = [first];
      } else if (this.set.length > 1) {
        for (const c of this.set) {
          if (c.length === 1 && isAny(c[0])) {
            this.set = [c];
            break;
          }
        }
      }
    }
    this.format();
  }
  format() {
    this.range = this.set.map((comps) => comps.join(" ").trim()).join("||").trim();
    return this.range;
  }
  toString() {
    return this.range;
  }
  parseRange(range) {
    const memoOpts = (this.options.includePrerelease && FLAG_INCLUDE_PRERELEASE) | (this.options.loose && FLAG_LOOSE);
    const memoKey = memoOpts + ":" + range;
    const cached = cache.get(memoKey);
    if (cached) {
      return cached;
    }
    const loose = this.options.loose;
    const hr = loose ? re[t.HYPHENRANGELOOSE] : re[t.HYPHENRANGE];
    range = range.replace(hr, hyphenReplace(this.options.includePrerelease));
    debug("hyphen replace", range);
    range = range.replace(re[t.COMPARATORTRIM], comparatorTrimReplace);
    debug("comparator trim", range);
    range = range.replace(re[t.TILDETRIM], tildeTrimReplace);
    debug("tilde trim", range);
    range = range.replace(re[t.CARETTRIM], caretTrimReplace);
    debug("caret trim", range);
    let rangeList = range.split(" ").map((comp) => parseComparator(comp, this.options)).join(" ").split(/\s+/).map((comp) => replaceGTE0(comp, this.options));
    if (loose) {
      rangeList = rangeList.filter((comp) => {
        debug("loose invalid filter", comp, this.options);
        return !!comp.match(re[t.COMPARATORLOOSE]);
      });
    }
    debug("range list", rangeList);
    const rangeMap = /* @__PURE__ */ new Map();
    const comparators = rangeList.map((comp) => new Comparator(comp, this.options));
    for (const comp of comparators) {
      if (isNullSet(comp)) {
        return [comp];
      }
      rangeMap.set(comp.value, comp);
    }
    if (rangeMap.size > 1 && rangeMap.has("")) {
      rangeMap.delete("");
    }
    const result = [...rangeMap.values()];
    cache.set(memoKey, result);
    return result;
  }
  intersects(range, options) {
    if (!(range instanceof Range)) {
      throw new TypeError("a Range is required");
    }
    return this.set.some((thisComparators) => {
      return isSatisfiable(thisComparators, options) && range.set.some((rangeComparators) => {
        return isSatisfiable(rangeComparators, options) && thisComparators.every((thisComparator) => {
          return rangeComparators.every((rangeComparator) => {
            return thisComparator.intersects(rangeComparator, options);
          });
        });
      });
    });
  }
  // if ANY of the sets match ALL of its comparators, then pass
  test(version) {
    if (!version) {
      return false;
    }
    if (typeof version === "string") {
      try {
        version = new SemVer(version, this.options);
      } catch (er) {
        return false;
      }
    }
    for (let i = 0; i < this.set.length; i++) {
      if (testSet(this.set[i], version, this.options)) {
        return true;
      }
    }
    return false;
  }
}
module.exports = Range;
const LRU = __webpack_require__(71969);
const cache = new LRU({ max: 1e3 });
const parseOptions = __webpack_require__(1231);
const Comparator = __webpack_require__(99260);
const debug = __webpack_require__(47180);
const SemVer = __webpack_require__(85968);
const {
  safeRe: re,
  t,
  comparatorTrimReplace,
  tildeTrimReplace,
  caretTrimReplace
} = __webpack_require__(88618);
const { FLAG_INCLUDE_PRERELEASE, FLAG_LOOSE } = __webpack_require__(97718);
const isNullSet = (c) => c.value === "<0.0.0-0";
const isAny = (c) => c.value === "";
const isSatisfiable = (comparators, options) => {
  let result = true;
  const remainingComparators = comparators.slice();
  let testComparator = remainingComparators.pop();
  while (result && remainingComparators.length) {
    result = remainingComparators.every((otherComparator) => {
      return testComparator.intersects(otherComparator, options);
    });
    testComparator = remainingComparators.pop();
  }
  return result;
};
const parseComparator = (comp, options) => {
  debug("comp", comp, options);
  comp = replaceCarets(comp, options);
  debug("caret", comp);
  comp = replaceTildes(comp, options);
  debug("tildes", comp);
  comp = replaceXRanges(comp, options);
  debug("xrange", comp);
  comp = replaceStars(comp, options);
  debug("stars", comp);
  return comp;
};
const isX = (id) => !id || id.toLowerCase() === "x" || id === "*";
const replaceTildes = (comp, options) => {
  return comp.trim().split(/\s+/).map((c) => replaceTilde(c, options)).join(" ");
};
const replaceTilde = (comp, options) => {
  const r = options.loose ? re[t.TILDELOOSE] : re[t.TILDE];
  return comp.replace(r, (_, M, m, p, pr) => {
    debug("tilde", comp, _, M, m, p, pr);
    let ret;
    if (isX(M)) {
      ret = "";
    } else if (isX(m)) {
      ret = `>=${M}.0.0 <${+M + 1}.0.0-0`;
    } else if (isX(p)) {
      ret = `>=${M}.${m}.0 <${M}.${+m + 1}.0-0`;
    } else if (pr) {
      debug("replaceTilde pr", pr);
      ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
    } else {
      ret = `>=${M}.${m}.${p} <${M}.${+m + 1}.0-0`;
    }
    debug("tilde return", ret);
    return ret;
  });
};
const replaceCarets = (comp, options) => {
  return comp.trim().split(/\s+/).map((c) => replaceCaret(c, options)).join(" ");
};
const replaceCaret = (comp, options) => {
  debug("caret", comp, options);
  const r = options.loose ? re[t.CARETLOOSE] : re[t.CARET];
  const z = options.includePrerelease ? "-0" : "";
  return comp.replace(r, (_, M, m, p, pr) => {
    debug("caret", comp, _, M, m, p, pr);
    let ret;
    if (isX(M)) {
      ret = "";
    } else if (isX(m)) {
      ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`;
    } else if (isX(p)) {
      if (M === "0") {
        ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`;
      } else {
        ret = `>=${M}.${m}.0${z} <${+M + 1}.0.0-0`;
      }
    } else if (pr) {
      debug("replaceCaret pr", pr);
      if (M === "0") {
        if (m === "0") {
          ret = `>=${M}.${m}.${p}-${pr} <${M}.${m}.${+p + 1}-0`;
        } else {
          ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
        }
      } else {
        ret = `>=${M}.${m}.${p}-${pr} <${+M + 1}.0.0-0`;
      }
    } else {
      debug("no pr");
      if (M === "0") {
        if (m === "0") {
          ret = `>=${M}.${m}.${p}${z} <${M}.${m}.${+p + 1}-0`;
        } else {
          ret = `>=${M}.${m}.${p}${z} <${M}.${+m + 1}.0-0`;
        }
      } else {
        ret = `>=${M}.${m}.${p} <${+M + 1}.0.0-0`;
      }
    }
    debug("caret return", ret);
    return ret;
  });
};
const replaceXRanges = (comp, options) => {
  debug("replaceXRanges", comp, options);
  return comp.split(/\s+/).map((c) => replaceXRange(c, options)).join(" ");
};
const replaceXRange = (comp, options) => {
  comp = comp.trim();
  const r = options.loose ? re[t.XRANGELOOSE] : re[t.XRANGE];
  return comp.replace(r, (ret, gtlt, M, m, p, pr) => {
    debug("xRange", comp, ret, gtlt, M, m, p, pr);
    const xM = isX(M);
    const xm = xM || isX(m);
    const xp = xm || isX(p);
    const anyX = xp;
    if (gtlt === "=" && anyX) {
      gtlt = "";
    }
    pr = options.includePrerelease ? "-0" : "";
    if (xM) {
      if (gtlt === ">" || gtlt === "<") {
        ret = "<0.0.0-0";
      } else {
        ret = "*";
      }
    } else if (gtlt && anyX) {
      if (xm) {
        m = 0;
      }
      p = 0;
      if (gtlt === ">") {
        gtlt = ">=";
        if (xm) {
          M = +M + 1;
          m = 0;
          p = 0;
        } else {
          m = +m + 1;
          p = 0;
        }
      } else if (gtlt === "<=") {
        gtlt = "<";
        if (xm) {
          M = +M + 1;
        } else {
          m = +m + 1;
        }
      }
      if (gtlt === "<") {
        pr = "-0";
      }
      ret = `${gtlt + M}.${m}.${p}${pr}`;
    } else if (xm) {
      ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0`;
    } else if (xp) {
      ret = `>=${M}.${m}.0${pr} <${M}.${+m + 1}.0-0`;
    }
    debug("xRange return", ret);
    return ret;
  });
};
const replaceStars = (comp, options) => {
  debug("replaceStars", comp, options);
  return comp.trim().replace(re[t.STAR], "");
};
const replaceGTE0 = (comp, options) => {
  debug("replaceGTE0", comp, options);
  return comp.trim().replace(re[options.includePrerelease ? t.GTE0PRE : t.GTE0], "");
};
const hyphenReplace = (incPr) => ($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr, tb) => {
  if (isX(fM)) {
    from = "";
  } else if (isX(fm)) {
    from = `>=${fM}.0.0${incPr ? "-0" : ""}`;
  } else if (isX(fp)) {
    from = `>=${fM}.${fm}.0${incPr ? "-0" : ""}`;
  } else if (fpr) {
    from = `>=${from}`;
  } else {
    from = `>=${from}${incPr ? "-0" : ""}`;
  }
  if (isX(tM)) {
    to = "";
  } else if (isX(tm)) {
    to = `<${+tM + 1}.0.0-0`;
  } else if (isX(tp)) {
    to = `<${tM}.${+tm + 1}.0-0`;
  } else if (tpr) {
    to = `<=${tM}.${tm}.${tp}-${tpr}`;
  } else if (incPr) {
    to = `<${tM}.${tm}.${+tp + 1}-0`;
  } else {
    to = `<=${to}`;
  }
  return `${from} ${to}`.trim();
};
const testSet = (set, version, options) => {
  for (let i = 0; i < set.length; i++) {
    if (!set[i].test(version)) {
      return false;
    }
  }
  if (version.prerelease.length && !options.includePrerelease) {
    for (let i = 0; i < set.length; i++) {
      debug(set[i].semver);
      if (set[i].semver === Comparator.ANY) {
        continue;
      }
      if (set[i].semver.prerelease.length > 0) {
        const allowed = set[i].semver;
        if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) {
          return true;
        }
      }
    }
    return false;
  }
  return true;
};


/***/ },

/***/ 64530
(module, __unused_webpack_exports, __webpack_require__) {

const parse = __webpack_require__(1660);
const clean = (version, options) => {
  const s = parse(version.trim().replace(/^[=v]+/, ""), options);
  return s ? s.version : null;
};
module.exports = clean;


/***/ },

/***/ 96763
(module, __unused_webpack_exports, __webpack_require__) {

const eq = __webpack_require__(14149);
const neq = __webpack_require__(37075);
const gt = __webpack_require__(79656);
const gte = __webpack_require__(52869);
const lt = __webpack_require__(55151);
const lte = __webpack_require__(2972);
const cmp = (a, op, b, loose) => {
  switch (op) {
    case "===":
      if (typeof a === "object") {
        a = a.version;
      }
      if (typeof b === "object") {
        b = b.version;
      }
      return a === b;
    case "!==":
      if (typeof a === "object") {
        a = a.version;
      }
      if (typeof b === "object") {
        b = b.version;
      }
      return a !== b;
    case "":
    case "=":
    case "==":
      return eq(a, b, loose);
    case "!=":
      return neq(a, b, loose);
    case ">":
      return gt(a, b, loose);
    case ">=":
      return gte(a, b, loose);
    case "<":
      return lt(a, b, loose);
    case "<=":
      return lte(a, b, loose);
    default:
      throw new TypeError(`Invalid operator: ${op}`);
  }
};
module.exports = cmp;


/***/ },

/***/ 73182
(module, __unused_webpack_exports, __webpack_require__) {

const SemVer = __webpack_require__(85968);
const parse = __webpack_require__(1660);
const { safeRe: re, t } = __webpack_require__(88618);
const coerce = (version, options) => {
  if (version instanceof SemVer) {
    return version;
  }
  if (typeof version === "number") {
    version = String(version);
  }
  if (typeof version !== "string") {
    return null;
  }
  options = options || {};
  let match = null;
  if (!options.rtl) {
    match = version.match(re[t.COERCE]);
  } else {
    let next;
    while ((next = re[t.COERCERTL].exec(version)) && (!match || match.index + match[0].length !== version.length)) {
      if (!match || next.index + next[0].length !== match.index + match[0].length) {
        match = next;
      }
      re[t.COERCERTL].lastIndex = next.index + next[1].length + next[2].length;
    }
    re[t.COERCERTL].lastIndex = -1;
  }
  if (match === null) {
    return null;
  }
  return parse(`${match[2]}.${match[3] || "0"}.${match[4] || "0"}`, options);
};
module.exports = coerce;


/***/ },

/***/ 41833
(module, __unused_webpack_exports, __webpack_require__) {

const SemVer = __webpack_require__(85968);
const compareBuild = (a, b, loose) => {
  const versionA = new SemVer(a, loose);
  const versionB = new SemVer(b, loose);
  return versionA.compare(versionB) || versionA.compareBuild(versionB);
};
module.exports = compareBuild;


/***/ },

/***/ 41607
(module, __unused_webpack_exports, __webpack_require__) {

const compare = __webpack_require__(39100);
const compareLoose = (a, b) => compare(a, b, true);
module.exports = compareLoose;


/***/ },

/***/ 96924
(module, __unused_webpack_exports, __webpack_require__) {

const parse = __webpack_require__(1660);
const diff = (version1, version2) => {
  const v1 = parse(version1, null, true);
  const v2 = parse(version2, null, true);
  const comparison = v1.compare(v2);
  if (comparison === 0) {
    return null;
  }
  const v1Higher = comparison > 0;
  const highVersion = v1Higher ? v1 : v2;
  const lowVersion = v1Higher ? v2 : v1;
  const highHasPre = !!highVersion.prerelease.length;
  const lowHasPre = !!lowVersion.prerelease.length;
  if (lowHasPre && !highHasPre) {
    if (!lowVersion.patch && !lowVersion.minor) {
      return "major";
    }
    if (highVersion.patch) {
      return "patch";
    }
    if (highVersion.minor) {
      return "minor";
    }
    return "major";
  }
  const prefix = highHasPre ? "pre" : "";
  if (v1.major !== v2.major) {
    return prefix + "major";
  }
  if (v1.minor !== v2.minor) {
    return prefix + "minor";
  }
  if (v1.patch !== v2.patch) {
    return prefix + "patch";
  }
  return "prerelease";
};
module.exports = diff;


/***/ },

/***/ 14149
(module, __unused_webpack_exports, __webpack_require__) {

const compare = __webpack_require__(39100);
const eq = (a, b, loose) => compare(a, b, loose) === 0;
module.exports = eq;


/***/ },

/***/ 79656
(module, __unused_webpack_exports, __webpack_require__) {

const compare = __webpack_require__(39100);
const gt = (a, b, loose) => compare(a, b, loose) > 0;
module.exports = gt;


/***/ },

/***/ 52869
(module, __unused_webpack_exports, __webpack_require__) {

const compare = __webpack_require__(39100);
const gte = (a, b, loose) => compare(a, b, loose) >= 0;
module.exports = gte;


/***/ },

/***/ 78203
(module, __unused_webpack_exports, __webpack_require__) {

const SemVer = __webpack_require__(85968);
const inc = (version, release, options, identifier, identifierBase) => {
  if (typeof options === "string") {
    identifierBase = identifier;
    identifier = options;
    options = void 0;
  }
  try {
    return new SemVer(
      version instanceof SemVer ? version.version : version,
      options
    ).inc(release, identifier, identifierBase).version;
  } catch (er) {
    return null;
  }
};
module.exports = inc;


/***/ },

/***/ 2972
(module, __unused_webpack_exports, __webpack_require__) {

const compare = __webpack_require__(39100);
const lte = (a, b, loose) => compare(a, b, loose) <= 0;
module.exports = lte;


/***/ },

/***/ 55182
(module, __unused_webpack_exports, __webpack_require__) {

const SemVer = __webpack_require__(85968);
const major = (a, loose) => new SemVer(a, loose).major;
module.exports = major;


/***/ },

/***/ 93546
(module, __unused_webpack_exports, __webpack_require__) {

const SemVer = __webpack_require__(85968);
const minor = (a, loose) => new SemVer(a, loose).minor;
module.exports = minor;


/***/ },

/***/ 37075
(module, __unused_webpack_exports, __webpack_require__) {

const compare = __webpack_require__(39100);
const neq = (a, b, loose) => compare(a, b, loose) !== 0;
module.exports = neq;


/***/ },

/***/ 60185
(module, __unused_webpack_exports, __webpack_require__) {

const SemVer = __webpack_require__(85968);
const patch = (a, loose) => new SemVer(a, loose).patch;
module.exports = patch;


/***/ },

/***/ 45349
(module, __unused_webpack_exports, __webpack_require__) {

const parse = __webpack_require__(1660);
const prerelease = (version, options) => {
  const parsed = parse(version, options);
  return parsed && parsed.prerelease.length ? parsed.prerelease : null;
};
module.exports = prerelease;


/***/ },

/***/ 16454
(module, __unused_webpack_exports, __webpack_require__) {

const compare = __webpack_require__(39100);
const rcompare = (a, b, loose) => compare(b, a, loose);
module.exports = rcompare;


/***/ },

/***/ 28953
(module, __unused_webpack_exports, __webpack_require__) {

const compareBuild = __webpack_require__(41833);
const rsort = (list, loose) => list.sort((a, b) => compareBuild(b, a, loose));
module.exports = rsort;


/***/ },

/***/ 26434
(module, __unused_webpack_exports, __webpack_require__) {

const Range = __webpack_require__(2547);
const satisfies = (version, range, options) => {
  try {
    range = new Range(range, options);
  } catch (er) {
    return false;
  }
  return range.test(version);
};
module.exports = satisfies;


/***/ },

/***/ 8051
(module, __unused_webpack_exports, __webpack_require__) {

const compareBuild = __webpack_require__(41833);
const sort = (list, loose) => list.sort((a, b) => compareBuild(a, b, loose));
module.exports = sort;


/***/ },

/***/ 35225
(module, __unused_webpack_exports, __webpack_require__) {

const internalRe = __webpack_require__(88618);
const constants = __webpack_require__(97718);
const SemVer = __webpack_require__(85968);
const identifiers = __webpack_require__(46087);
const parse = __webpack_require__(1660);
const valid = __webpack_require__(79077);
const clean = __webpack_require__(64530);
const inc = __webpack_require__(78203);
const diff = __webpack_require__(96924);
const major = __webpack_require__(55182);
const minor = __webpack_require__(93546);
const patch = __webpack_require__(60185);
const prerelease = __webpack_require__(45349);
const compare = __webpack_require__(39100);
const rcompare = __webpack_require__(16454);
const compareLoose = __webpack_require__(41607);
const compareBuild = __webpack_require__(41833);
const sort = __webpack_require__(8051);
const rsort = __webpack_require__(28953);
const gt = __webpack_require__(79656);
const lt = __webpack_require__(55151);
const eq = __webpack_require__(14149);
const neq = __webpack_require__(37075);
const gte = __webpack_require__(52869);
const lte = __webpack_require__(2972);
const cmp = __webpack_require__(96763);
const coerce = __webpack_require__(73182);
const Comparator = __webpack_require__(99260);
const Range = __webpack_require__(2547);
const satisfies = __webpack_require__(26434);
const toComparators = __webpack_require__(12419);
const maxSatisfying = __webpack_require__(98536);
const minSatisfying = __webpack_require__(79762);
const minVersion = __webpack_require__(50777);
const validRange = __webpack_require__(35902);
const outside = __webpack_require__(38079);
const gtr = __webpack_require__(99367);
const ltr = __webpack_require__(61010);
const intersects = __webpack_require__(73328);
const simplifyRange = __webpack_require__(27009);
const subset = __webpack_require__(62508);
module.exports = {
  parse,
  valid,
  clean,
  inc,
  diff,
  major,
  minor,
  patch,
  prerelease,
  compare,
  rcompare,
  compareLoose,
  compareBuild,
  sort,
  rsort,
  gt,
  lt,
  eq,
  neq,
  gte,
  lte,
  cmp,
  coerce,
  Comparator,
  Range,
  satisfies,
  toComparators,
  maxSatisfying,
  minSatisfying,
  minVersion,
  validRange,
  outside,
  gtr,
  ltr,
  intersects,
  simplifyRange,
  subset,
  SemVer,
  re: internalRe.re,
  src: internalRe.src,
  tokens: internalRe.t,
  SEMVER_SPEC_VERSION: constants.SEMVER_SPEC_VERSION,
  RELEASE_TYPES: constants.RELEASE_TYPES,
  compareIdentifiers: identifiers.compareIdentifiers,
  rcompareIdentifiers: identifiers.rcompareIdentifiers
};


/***/ },

/***/ 99367
(module, __unused_webpack_exports, __webpack_require__) {

const outside = __webpack_require__(38079);
const gtr = (version, range, options) => outside(version, range, ">", options);
module.exports = gtr;


/***/ },

/***/ 73328
(module, __unused_webpack_exports, __webpack_require__) {

const Range = __webpack_require__(2547);
const intersects = (r1, r2, options) => {
  r1 = new Range(r1, options);
  r2 = new Range(r2, options);
  return r1.intersects(r2, options);
};
module.exports = intersects;


/***/ },

/***/ 61010
(module, __unused_webpack_exports, __webpack_require__) {

const outside = __webpack_require__(38079);
const ltr = (version, range, options) => outside(version, range, "<", options);
module.exports = ltr;


/***/ },

/***/ 98536
(module, __unused_webpack_exports, __webpack_require__) {

const SemVer = __webpack_require__(85968);
const Range = __webpack_require__(2547);
const maxSatisfying = (versions, range, options) => {
  let max = null;
  let maxSV = null;
  let rangeObj = null;
  try {
    rangeObj = new Range(range, options);
  } catch (er) {
    return null;
  }
  versions.forEach((v) => {
    if (rangeObj.test(v)) {
      if (!max || maxSV.compare(v) === -1) {
        max = v;
        maxSV = new SemVer(max, options);
      }
    }
  });
  return max;
};
module.exports = maxSatisfying;


/***/ },

/***/ 79762
(module, __unused_webpack_exports, __webpack_require__) {

const SemVer = __webpack_require__(85968);
const Range = __webpack_require__(2547);
const minSatisfying = (versions, range, options) => {
  let min = null;
  let minSV = null;
  let rangeObj = null;
  try {
    rangeObj = new Range(range, options);
  } catch (er) {
    return null;
  }
  versions.forEach((v) => {
    if (rangeObj.test(v)) {
      if (!min || minSV.compare(v) === 1) {
        min = v;
        minSV = new SemVer(min, options);
      }
    }
  });
  return min;
};
module.exports = minSatisfying;


/***/ },

/***/ 50777
(module, __unused_webpack_exports, __webpack_require__) {

const SemVer = __webpack_require__(85968);
const Range = __webpack_require__(2547);
const gt = __webpack_require__(79656);
const minVersion = (range, loose) => {
  range = new Range(range, loose);
  let minver = new SemVer("0.0.0");
  if (range.test(minver)) {
    return minver;
  }
  minver = new SemVer("0.0.0-0");
  if (range.test(minver)) {
    return minver;
  }
  minver = null;
  for (let i = 0; i < range.set.length; ++i) {
    const comparators = range.set[i];
    let setMin = null;
    comparators.forEach((comparator) => {
      const compver = new SemVer(comparator.semver.version);
      switch (comparator.operator) {
        case ">":
          if (compver.prerelease.length === 0) {
            compver.patch++;
          } else {
            compver.prerelease.push(0);
          }
          compver.raw = compver.format();
        case "":
        case ">=":
          if (!setMin || gt(compver, setMin)) {
            setMin = compver;
          }
          break;
        case "<":
        case "<=":
          break;
        default:
          throw new Error(`Unexpected operation: ${comparator.operator}`);
      }
    });
    if (setMin && (!minver || gt(minver, setMin))) {
      minver = setMin;
    }
  }
  if (minver && range.test(minver)) {
    return minver;
  }
  return null;
};
module.exports = minVersion;


/***/ },

/***/ 38079
(module, __unused_webpack_exports, __webpack_require__) {

const SemVer = __webpack_require__(85968);
const Comparator = __webpack_require__(99260);
const { ANY } = Comparator;
const Range = __webpack_require__(2547);
const satisfies = __webpack_require__(26434);
const gt = __webpack_require__(79656);
const lt = __webpack_require__(55151);
const lte = __webpack_require__(2972);
const gte = __webpack_require__(52869);
const outside = (version, range, hilo, options) => {
  version = new SemVer(version, options);
  range = new Range(range, options);
  let gtfn, ltefn, ltfn, comp, ecomp;
  switch (hilo) {
    case ">":
      gtfn = gt;
      ltefn = lte;
      ltfn = lt;
      comp = ">";
      ecomp = ">=";
      break;
    case "<":
      gtfn = lt;
      ltefn = gte;
      ltfn = gt;
      comp = "<";
      ecomp = "<=";
      break;
    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"');
  }
  if (satisfies(version, range, options)) {
    return false;
  }
  for (let i = 0; i < range.set.length; ++i) {
    const comparators = range.set[i];
    let high = null;
    let low = null;
    comparators.forEach((comparator) => {
      if (comparator.semver === ANY) {
        comparator = new Comparator(">=0.0.0");
      }
      high = high || comparator;
      low = low || comparator;
      if (gtfn(comparator.semver, high.semver, options)) {
        high = comparator;
      } else if (ltfn(comparator.semver, low.semver, options)) {
        low = comparator;
      }
    });
    if (high.operator === comp || high.operator === ecomp) {
      return false;
    }
    if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) {
      return false;
    } else if (low.operator === ecomp && ltfn(version, low.semver)) {
      return false;
    }
  }
  return true;
};
module.exports = outside;


/***/ },

/***/ 27009
(module, __unused_webpack_exports, __webpack_require__) {

const satisfies = __webpack_require__(26434);
const compare = __webpack_require__(39100);
module.exports = (versions, range, options) => {
  const set = [];
  let first = null;
  let prev = null;
  const v = versions.sort((a, b) => compare(a, b, options));
  for (const version of v) {
    const included = satisfies(version, range, options);
    if (included) {
      prev = version;
      if (!first) {
        first = version;
      }
    } else {
      if (prev) {
        set.push([first, prev]);
      }
      prev = null;
      first = null;
    }
  }
  if (first) {
    set.push([first, null]);
  }
  const ranges = [];
  for (const [min, max] of set) {
    if (min === max) {
      ranges.push(min);
    } else if (!max && min === v[0]) {
      ranges.push("*");
    } else if (!max) {
      ranges.push(`>=${min}`);
    } else if (min === v[0]) {
      ranges.push(`<=${max}`);
    } else {
      ranges.push(`${min} - ${max}`);
    }
  }
  const simplified = ranges.join(" || ");
  const original = typeof range.raw === "string" ? range.raw : String(range);
  return simplified.length < original.length ? simplified : range;
};


/***/ },

/***/ 62508
(module, __unused_webpack_exports, __webpack_require__) {

const Range = __webpack_require__(2547);
const Comparator = __webpack_require__(99260);
const { ANY } = Comparator;
const satisfies = __webpack_require__(26434);
const compare = __webpack_require__(39100);
const subset = (sub, dom, options = {}) => {
  if (sub === dom) {
    return true;
  }
  sub = new Range(sub, options);
  dom = new Range(dom, options);
  let sawNonNull = false;
  OUTER:
    for (const simpleSub of sub.set) {
      for (const simpleDom of dom.set) {
        const isSub = simpleSubset(simpleSub, simpleDom, options);
        sawNonNull = sawNonNull || isSub !== null;
        if (isSub) {
          continue OUTER;
        }
      }
      if (sawNonNull) {
        return false;
      }
    }
  return true;
};
const minimumVersionWithPreRelease = [new Comparator(">=0.0.0-0")];
const minimumVersion = [new Comparator(">=0.0.0")];
const simpleSubset = (sub, dom, options) => {
  if (sub === dom) {
    return true;
  }
  if (sub.length === 1 && sub[0].semver === ANY) {
    if (dom.length === 1 && dom[0].semver === ANY) {
      return true;
    } else if (options.includePrerelease) {
      sub = minimumVersionWithPreRelease;
    } else {
      sub = minimumVersion;
    }
  }
  if (dom.length === 1 && dom[0].semver === ANY) {
    if (options.includePrerelease) {
      return true;
    } else {
      dom = minimumVersion;
    }
  }
  const eqSet = /* @__PURE__ */ new Set();
  let gt, lt;
  for (const c of sub) {
    if (c.operator === ">" || c.operator === ">=") {
      gt = higherGT(gt, c, options);
    } else if (c.operator === "<" || c.operator === "<=") {
      lt = lowerLT(lt, c, options);
    } else {
      eqSet.add(c.semver);
    }
  }
  if (eqSet.size > 1) {
    return null;
  }
  let gtltComp;
  if (gt && lt) {
    gtltComp = compare(gt.semver, lt.semver, options);
    if (gtltComp > 0) {
      return null;
    } else if (gtltComp === 0 && (gt.operator !== ">=" || lt.operator !== "<=")) {
      return null;
    }
  }
  for (const eq of eqSet) {
    if (gt && !satisfies(eq, String(gt), options)) {
      return null;
    }
    if (lt && !satisfies(eq, String(lt), options)) {
      return null;
    }
    for (const c of dom) {
      if (!satisfies(eq, String(c), options)) {
        return false;
      }
    }
    return true;
  }
  let higher, lower;
  let hasDomLT, hasDomGT;
  let needDomLTPre = lt && !options.includePrerelease && lt.semver.prerelease.length ? lt.semver : false;
  let needDomGTPre = gt && !options.includePrerelease && gt.semver.prerelease.length ? gt.semver : false;
  if (needDomLTPre && needDomLTPre.prerelease.length === 1 && lt.operator === "<" && needDomLTPre.prerelease[0] === 0) {
    needDomLTPre = false;
  }
  for (const c of dom) {
    hasDomGT = hasDomGT || c.operator === ">" || c.operator === ">=";
    hasDomLT = hasDomLT || c.operator === "<" || c.operator === "<=";
    if (gt) {
      if (needDomGTPre) {
        if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomGTPre.major && c.semver.minor === needDomGTPre.minor && c.semver.patch === needDomGTPre.patch) {
          needDomGTPre = false;
        }
      }
      if (c.operator === ">" || c.operator === ">=") {
        higher = higherGT(gt, c, options);
        if (higher === c && higher !== gt) {
          return false;
        }
      } else if (gt.operator === ">=" && !satisfies(gt.semver, String(c), options)) {
        return false;
      }
    }
    if (lt) {
      if (needDomLTPre) {
        if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomLTPre.major && c.semver.minor === needDomLTPre.minor && c.semver.patch === needDomLTPre.patch) {
          needDomLTPre = false;
        }
      }
      if (c.operator === "<" || c.operator === "<=") {
        lower = lowerLT(lt, c, options);
        if (lower === c && lower !== lt) {
          return false;
        }
      } else if (lt.operator === "<=" && !satisfies(lt.semver, String(c), options)) {
        return false;
      }
    }
    if (!c.operator && (lt || gt) && gtltComp !== 0) {
      return false;
    }
  }
  if (gt && hasDomLT && !lt && gtltComp !== 0) {
    return false;
  }
  if (lt && hasDomGT && !gt && gtltComp !== 0) {
    return false;
  }
  if (needDomGTPre || needDomLTPre) {
    return false;
  }
  return true;
};
const higherGT = (a, b, options) => {
  if (!a) {
    return b;
  }
  const comp = compare(a.semver, b.semver, options);
  return comp > 0 ? a : comp < 0 ? b : b.operator === ">" && a.operator === ">=" ? b : a;
};
const lowerLT = (a, b, options) => {
  if (!a) {
    return b;
  }
  const comp = compare(a.semver, b.semver, options);
  return comp < 0 ? a : comp > 0 ? b : b.operator === "<" && a.operator === "<=" ? b : a;
};
module.exports = subset;


/***/ },

/***/ 12419
(module, __unused_webpack_exports, __webpack_require__) {

const Range = __webpack_require__(2547);
const toComparators = (range, options) => new Range(range, options).set.map((comp) => comp.map((c) => c.value).join(" ").trim().split(" "));
module.exports = toComparators;


/***/ },

/***/ 35902
(module, __unused_webpack_exports, __webpack_require__) {

const Range = __webpack_require__(2547);
const validRange = (range, options) => {
  try {
    return new Range(range, options).range || "*";
  } catch (er) {
    return null;
  }
};
module.exports = validRange;


/***/ },

/***/ 83479
(module) {

"use strict";

module.exports = function(Yallist) {
  Yallist.prototype[Symbol.iterator] = function* () {
    for (let walker = this.head; walker; walker = walker.next) {
      yield walker.value;
    }
  };
};


/***/ },

/***/ 6515
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

module.exports = Yallist;
Yallist.Node = Node;
Yallist.create = Yallist;
function Yallist(list) {
  var self = this;
  if (!(self instanceof Yallist)) {
    self = new Yallist();
  }
  self.tail = null;
  self.head = null;
  self.length = 0;
  if (list && typeof list.forEach === "function") {
    list.forEach(function(item) {
      self.push(item);
    });
  } else if (arguments.length > 0) {
    for (var i = 0, l = arguments.length; i < l; i++) {
      self.push(arguments[i]);
    }
  }
  return self;
}
Yallist.prototype.removeNode = function(node) {
  if (node.list !== this) {
    throw new Error("removing node which does not belong to this list");
  }
  var next = node.next;
  var prev = node.prev;
  if (next) {
    next.prev = prev;
  }
  if (prev) {
    prev.next = next;
  }
  if (node === this.head) {
    this.head = next;
  }
  if (node === this.tail) {
    this.tail = prev;
  }
  node.list.length--;
  node.next = null;
  node.prev = null;
  node.list = null;
  return next;
};
Yallist.prototype.unshiftNode = function(node) {
  if (node === this.head) {
    return;
  }
  if (node.list) {
    node.list.removeNode(node);
  }
  var head = this.head;
  node.list = this;
  node.next = head;
  if (head) {
    head.prev = node;
  }
  this.head = node;
  if (!this.tail) {
    this.tail = node;
  }
  this.length++;
};
Yallist.prototype.pushNode = function(node) {
  if (node === this.tail) {
    return;
  }
  if (node.list) {
    node.list.removeNode(node);
  }
  var tail = this.tail;
  node.list = this;
  node.prev = tail;
  if (tail) {
    tail.next = node;
  }
  this.tail = node;
  if (!this.head) {
    this.head = node;
  }
  this.length++;
};
Yallist.prototype.push = function() {
  for (var i = 0, l = arguments.length; i < l; i++) {
    push(this, arguments[i]);
  }
  return this.length;
};
Yallist.prototype.unshift = function() {
  for (var i = 0, l = arguments.length; i < l; i++) {
    unshift(this, arguments[i]);
  }
  return this.length;
};
Yallist.prototype.pop = function() {
  if (!this.tail) {
    return void 0;
  }
  var res = this.tail.value;
  this.tail = this.tail.prev;
  if (this.tail) {
    this.tail.next = null;
  } else {
    this.head = null;
  }
  this.length--;
  return res;
};
Yallist.prototype.shift = function() {
  if (!this.head) {
    return void 0;
  }
  var res = this.head.value;
  this.head = this.head.next;
  if (this.head) {
    this.head.prev = null;
  } else {
    this.tail = null;
  }
  this.length--;
  return res;
};
Yallist.prototype.forEach = function(fn, thisp) {
  thisp = thisp || this;
  for (var walker = this.head, i = 0; walker !== null; i++) {
    fn.call(thisp, walker.value, i, this);
    walker = walker.next;
  }
};
Yallist.prototype.forEachReverse = function(fn, thisp) {
  thisp = thisp || this;
  for (var walker = this.tail, i = this.length - 1; walker !== null; i--) {
    fn.call(thisp, walker.value, i, this);
    walker = walker.prev;
  }
};
Yallist.prototype.get = function(n) {
  for (var i = 0, walker = this.head; walker !== null && i < n; i++) {
    walker = walker.next;
  }
  if (i === n && walker !== null) {
    return walker.value;
  }
};
Yallist.prototype.getReverse = function(n) {
  for (var i = 0, walker = this.tail; walker !== null && i < n; i++) {
    walker = walker.prev;
  }
  if (i === n && walker !== null) {
    return walker.value;
  }
};
Yallist.prototype.map = function(fn, thisp) {
  thisp = thisp || this;
  var res = new Yallist();
  for (var walker = this.head; walker !== null; ) {
    res.push(fn.call(thisp, walker.value, this));
    walker = walker.next;
  }
  return res;
};
Yallist.prototype.mapReverse = function(fn, thisp) {
  thisp = thisp || this;
  var res = new Yallist();
  for (var walker = this.tail; walker !== null; ) {
    res.push(fn.call(thisp, walker.value, this));
    walker = walker.prev;
  }
  return res;
};
Yallist.prototype.reduce = function(fn, initial) {
  var acc;
  var walker = this.head;
  if (arguments.length > 1) {
    acc = initial;
  } else if (this.head) {
    walker = this.head.next;
    acc = this.head.value;
  } else {
    throw new TypeError("Reduce of empty list with no initial value");
  }
  for (var i = 0; walker !== null; i++) {
    acc = fn(acc, walker.value, i);
    walker = walker.next;
  }
  return acc;
};
Yallist.prototype.reduceReverse = function(fn, initial) {
  var acc;
  var walker = this.tail;
  if (arguments.length > 1) {
    acc = initial;
  } else if (this.tail) {
    walker = this.tail.prev;
    acc = this.tail.value;
  } else {
    throw new TypeError("Reduce of empty list with no initial value");
  }
  for (var i = this.length - 1; walker !== null; i--) {
    acc = fn(acc, walker.value, i);
    walker = walker.prev;
  }
  return acc;
};
Yallist.prototype.toArray = function() {
  var arr = new Array(this.length);
  for (var i = 0, walker = this.head; walker !== null; i++) {
    arr[i] = walker.value;
    walker = walker.next;
  }
  return arr;
};
Yallist.prototype.toArrayReverse = function() {
  var arr = new Array(this.length);
  for (var i = 0, walker = this.tail; walker !== null; i++) {
    arr[i] = walker.value;
    walker = walker.prev;
  }
  return arr;
};
Yallist.prototype.slice = function(from, to) {
  to = to || this.length;
  if (to < 0) {
    to += this.length;
  }
  from = from || 0;
  if (from < 0) {
    from += this.length;
  }
  var ret = new Yallist();
  if (to < from || to < 0) {
    return ret;
  }
  if (from < 0) {
    from = 0;
  }
  if (to > this.length) {
    to = this.length;
  }
  for (var i = 0, walker = this.head; walker !== null && i < from; i++) {
    walker = walker.next;
  }
  for (; walker !== null && i < to; i++, walker = walker.next) {
    ret.push(walker.value);
  }
  return ret;
};
Yallist.prototype.sliceReverse = function(from, to) {
  to = to || this.length;
  if (to < 0) {
    to += this.length;
  }
  from = from || 0;
  if (from < 0) {
    from += this.length;
  }
  var ret = new Yallist();
  if (to < from || to < 0) {
    return ret;
  }
  if (from < 0) {
    from = 0;
  }
  if (to > this.length) {
    to = this.length;
  }
  for (var i = this.length, walker = this.tail; walker !== null && i > to; i--) {
    walker = walker.prev;
  }
  for (; walker !== null && i > from; i--, walker = walker.prev) {
    ret.push(walker.value);
  }
  return ret;
};
Yallist.prototype.splice = function(start, deleteCount, ...nodes) {
  if (start > this.length) {
    start = this.length - 1;
  }
  if (start < 0) {
    start = this.length + start;
  }
  for (var i = 0, walker = this.head; walker !== null && i < start; i++) {
    walker = walker.next;
  }
  var ret = [];
  for (var i = 0; walker && i < deleteCount; i++) {
    ret.push(walker.value);
    walker = this.removeNode(walker);
  }
  if (walker === null) {
    walker = this.tail;
  }
  if (walker !== this.head && walker !== this.tail) {
    walker = walker.prev;
  }
  for (var i = 0; i < nodes.length; i++) {
    walker = insert(this, walker, nodes[i]);
  }
  return ret;
};
Yallist.prototype.reverse = function() {
  var head = this.head;
  var tail = this.tail;
  for (var walker = head; walker !== null; walker = walker.prev) {
    var p = walker.prev;
    walker.prev = walker.next;
    walker.next = p;
  }
  this.head = tail;
  this.tail = head;
  return this;
};
function insert(self, node, value) {
  var inserted = node === self.head ? new Node(value, null, node, self) : new Node(value, node, node.next, self);
  if (inserted.next === null) {
    self.tail = inserted;
  }
  if (inserted.prev === null) {
    self.head = inserted;
  }
  self.length++;
  return inserted;
}
function push(self, item) {
  self.tail = new Node(item, self.tail, null, self);
  if (!self.head) {
    self.head = self.tail;
  }
  self.length++;
}
function unshift(self, item) {
  self.head = new Node(item, null, self.head, self);
  if (!self.tail) {
    self.tail = self.head;
  }
  self.length++;
}
function Node(value, prev, next, list) {
  if (!(this instanceof Node)) {
    return new Node(value, prev, next, list);
  }
  this.list = list;
  this.value = value;
  if (prev) {
    prev.next = this;
    this.prev = prev;
  } else {
    this.prev = null;
  }
  if (next) {
    next.prev = this;
    this.next = next;
  } else {
    this.next = null;
  }
}
try {
  __webpack_require__(83479)(Yallist);
} catch (er) {
}


/***/ },

/***/ 77092
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ProtectedMarketplacePage: () => (/* binding */ ProtectedMarketplacePage)
});

// UNUSED EXPORTS: MarketplacePage

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(69751);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(21272);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.mjs
var Box = __webpack_require__(94061);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Popover/Popover.mjs
var Popover = __webpack_require__(12493);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Tag/Tag.mjs
var Tag = __webpack_require__(52993);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.mjs
var Button = __webpack_require__(85963);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.mjs
var Flex = __webpack_require__(83997);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/MultiSelect.mjs
var MultiSelect = __webpack_require__(56654);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.mjs + 2 modules
var Typography = __webpack_require__(30893);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Tooltip/Tooltip.mjs + 3 modules
var Tooltip = __webpack_require__(79739);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Icon/Icon.mjs
var Icon = __webpack_require__(58805);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Divider/Divider.mjs
var Divider = __webpack_require__(48653);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Loader/Loader.mjs + 1 modules
var Loader = __webpack_require__(43064);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(47610);
;// ./node_modules/@strapi/design-system/dist/Layout/GridLayout.mjs

const GridLayout = styled_components_browser_esm/* default */.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: ${({ theme }) => theme.spaces[4]};
`;


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.mjs
var Grid = __webpack_require__(90151);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.mjs
var GridItem = __webpack_require__(68074);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.mjs + 2 modules
var HeaderLayout = __webpack_require__(55356);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/Layout.mjs
var Layout = __webpack_require__(42455);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.mjs
var Main = __webpack_require__(38413);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/SingleSelect.mjs
var SingleSelect = __webpack_require__(48323);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/LiveRegions/useNotifyAT.mjs
var useNotifyAT = __webpack_require__(11273);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.mjs
var ContentLayout = __webpack_require__(4198);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Tabs/TabGroup.mjs
var TabGroup = __webpack_require__(12081);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Tabs/Tabs.mjs + 1 modules
var Tabs = __webpack_require__(12408);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Searchbar/Searchbar.mjs
var Searchbar = __webpack_require__(7297);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Tabs/TabPanels.mjs
var TabPanels = __webpack_require__(24093);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/dist/index.mjs + 63 modules
var dist = __webpack_require__(59201);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Filter.mjs
var Filter = __webpack_require__(28604);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Cross.mjs
var Cross = __webpack_require__(68802);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/CheckCircle.mjs
var CheckCircle = __webpack_require__(85166);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ExternalLink.mjs
var ExternalLink = __webpack_require__(14595);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Check.mjs
var Check = __webpack_require__(54514);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Duplicate.mjs
var Duplicate = __webpack_require__(90625);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Github.mjs
var Github = __webpack_require__(40799);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Star.mjs
var Star = __webpack_require__(42386);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Download.mjs
var Download = __webpack_require__(93714);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/EmptyDocuments.mjs
var EmptyDocuments = __webpack_require__(36481);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var react_jsx_runtime = __webpack_require__(92132);
;// ./node_modules/@strapi/icons/dist/Upload.mjs

const o = (e) => /* @__PURE__ */ (0,react_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1rem", height: "1rem", fill: "none", viewBox: "0 0 24 25", ...e, children: /* @__PURE__ */ (0,react_jsx_runtime.jsx)(
  "path",
  {
    fill: "#212134",
    fillRule: "evenodd",
    d: "M13.571 18.272H10.43v-8.47H2.487a.2.2 0 0 1-.14-.343L11.858.058a.2.2 0 0 1 .282 0l9.513 9.4a.2.2 0 0 1-.14.343H13.57v8.47ZM2.2 21.095a.2.2 0 0 0-.2.2v2.424c0 .11.09.2.2.2h19.6a.2.2 0 0 0 .2-.2v-2.424a.2.2 0 0 0-.2-.2H2.2Z",
    clipRule: "evenodd"
  }
) }), v = o;


;// ./node_modules/@strapi/icons/dist/GlassesSquare.mjs

const a = (l) => /* @__PURE__ */ (0,react_jsx_runtime.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1rem", height: "1rem", fill: "none", viewBox: "0 0 32 32", ...l, children: [
  /* @__PURE__ */ (0,react_jsx_runtime.jsx)("path", { fill: "#AC73E6", d: "M0 4a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z" }),
  /* @__PURE__ */ (0,react_jsx_runtime.jsx)(
    "path",
    {
      fill: "#fff",
      fillRule: "evenodd",
      d: "M15.027 13.839c-3.19-.836-6.305-1.064-10.18-.608-1.215.152-1.063 1.975.076 2.203.304.836.456 2.355.912 3.267.987 2.279 5.622 1.975 7.369.835 1.14-.683 1.443-2.279 1.9-3.494.227-.684 1.595-.684 1.822 0 .38 1.215.76 2.81 1.9 3.494 1.747 1.14 6.381 1.444 7.369-.835.456-.912.607-2.431.911-3.267 1.14-.228 1.216-2.051.076-2.203-3.874-.456-6.989-.228-10.18.608-.455.075-1.519.075-1.975 0Z",
      clipRule: "evenodd"
    }
  )
] }), i = a;


// EXTERNAL MODULE: ./node_modules/react-helmet/es/Helmet.js
var Helmet = __webpack_require__(14718);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(54894);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 14 modules
var es = __webpack_require__(82437);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/dist/_chunks/index-dMS-26Ft.mjs + 95 modules
var index_dMS_26Ft = __webpack_require__(92129);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/dist/_chunks/AuthenticatedApp-uHd-MPEB.mjs + 59 modules
var AuthenticatedApp_uHd_MPEB = __webpack_require__(38682);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/LinkButton/LinkButton.mjs
var LinkButton = __webpack_require__(49654);
// EXTERNAL MODULE: ./node_modules/pluralize/pluralize.js
var pluralize = __webpack_require__(21835);
// EXTERNAL MODULE: ./node_modules/semver/index.js
var semver = __webpack_require__(35225);
// EXTERNAL MODULE: ./node_modules/qs/lib/index.js
var lib = __webpack_require__(5409);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var react_query_es = __webpack_require__(74930);
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
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(61535);
// EXTERNAL MODULE: ./node_modules/lodash/camelCase.js
var camelCase = __webpack_require__(5790);
// EXTERNAL MODULE: ./node_modules/yup/es/index.js + 26 modules
var yup_es = __webpack_require__(12083);
// EXTERNAL MODULE: ./node_modules/lodash/omit.js
var omit = __webpack_require__(35223);
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
// EXTERNAL MODULE: ./node_modules/semver/functions/lt.js
var lt = __webpack_require__(55151);
// EXTERNAL MODULE: ./node_modules/semver/functions/valid.js
var valid = __webpack_require__(79077);
;// ./node_modules/@strapi/admin/dist/_chunks/MarketplacePage-p49o3c4x.mjs












































































const NpmPackagesFilters = ({
  handleSelectClear,
  handleSelectChange,
  npmPackageType,
  possibleCategories,
  possibleCollections,
  query
}) => {
  const [isVisible, setIsVisible] = react.useState(false);
  const buttonRef = react.useRef(null);
  const { formatMessage } = (0,useIntl/* default */.A)();
  const handleToggle = () => setIsVisible((prev) => !prev);
  const handleTagRemove = (tagToRemove, filterType) => {
    const update = {
      [filterType]: (query[filterType] ?? []).filter((previousTag) => previousTag !== tagToRemove)
    };
    handleSelectChange(update);
  };
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0,jsx_runtime.jsxs)(Box/* Box */.a, { paddingTop: 1, paddingBottom: 1, children: [
      /* @__PURE__ */ (0,jsx_runtime.jsx)(
        ButtonToggle,
        {
          variant: "tertiary",
          ref: buttonRef,
          startIcon: /* @__PURE__ */ (0,jsx_runtime.jsx)(Filter/* default */.A, {}),
          onClick: handleToggle,
          size: "S",
          children: formatMessage({ id: "app.utils.filters", defaultMessage: "Filters" })
        }
      ),
      isVisible && /* @__PURE__ */ (0,jsx_runtime.jsx)(Popover/* Popover */.AM, { source: buttonRef, onDismiss: handleToggle, padding: 3, spacing: 4, children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(FiltersFlex, { direction: "column", alignItems: "stretch", gap: 1, children: [
        /* @__PURE__ */ (0,jsx_runtime.jsx)(
          FilterSelect,
          {
            message: formatMessage({
              id: "admin.pages.MarketPlacePage.filters.collections",
              defaultMessage: "Collections"
            }),
            value: query?.collections || [],
            onChange: (newCollections) => {
              const update = { collections: newCollections };
              handleSelectChange(update);
            },
            onClear: () => handleSelectClear("collections"),
            possibleFilters: possibleCollections,
            customizeContent: (values) => formatMessage(
              {
                id: "admin.pages.MarketPlacePage.filters.collectionsSelected",
                defaultMessage: "{count, plural, =0 {No collections} one {# collection} other {# collections}} selected"
              },
              { count: values?.length ?? 0 }
            )
          }
        ),
        npmPackageType === "plugin" && /* @__PURE__ */ (0,jsx_runtime.jsx)(
          FilterSelect,
          {
            message: formatMessage({
              id: "admin.pages.MarketPlacePage.filters.categories",
              defaultMessage: "Categories"
            }),
            value: query?.categories || [],
            onChange: (newCategories) => {
              const update = { categories: newCategories };
              handleSelectChange(update);
            },
            onClear: () => handleSelectClear("categories"),
            possibleFilters: possibleCategories,
            customizeContent: (values) => formatMessage(
              {
                id: "admin.pages.MarketPlacePage.filters.categoriesSelected",
                defaultMessage: "{count, plural, =0 {No categories} one {# category} other {# categories}} selected"
              },
              { count: values?.length ?? 0 }
            )
          }
        )
      ] }) })
    ] }),
    query.collections?.map((collection) => /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* Box */.a, { padding: 1, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Tag/* Tag */.v, { icon: /* @__PURE__ */ (0,jsx_runtime.jsx)(Cross/* default */.A, {}), onClick: () => handleTagRemove(collection, "collections"), children: collection }) }, collection)),
    npmPackageType === "plugin" && query.categories?.map((category) => /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* Box */.a, { padding: 1, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Tag/* Tag */.v, { icon: /* @__PURE__ */ (0,jsx_runtime.jsx)(Cross/* default */.A, {}), onClick: () => handleTagRemove(category, "categories"), children: category }) }, category))
  ] });
};
const ButtonToggle = (0,styled_components_browser_esm/* default */.Ay)((0,Button/* Button */.$))`
  height: ${({ theme }) => theme.sizes.input.S};
`;
const FiltersFlex = (0,styled_components_browser_esm/* default */.Ay)((0,Flex/* Flex */.s))`
  /* Hide the label, every input needs a label. */
  label {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`;
const FilterSelect = ({
  message,
  value,
  onChange,
  possibleFilters,
  onClear,
  customizeContent
}) => {
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    MultiSelect/* MultiSelect */.KF,
    {
      "data-testid": `${message}-button`,
      label: message,
      placeholder: message,
      size: "M",
      onChange,
      onClear,
      value,
      customizeContent,
      children: Object.entries(possibleFilters).map(([filterName, count]) => {
        return /* @__PURE__ */ (0,jsx_runtime.jsx)(
          MultiSelect/* MultiSelectOption */.fe,
          {
            "data-testid": `${filterName}-${count}`,
            value: filterName,
            children: `${filterName} (${count})`
          },
          filterName
        );
      })
    }
  );
};
const EllipsisText = (0,styled_components_browser_esm/* default */.Ay)((0,Typography/* Typography */.o))`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;
const NpmPackageCard = ({
  npmPackage,
  isInstalled,
  useYarn,
  isInDevelopmentMode,
  npmPackageType,
  strapiAppVersion
}) => {
  const { attributes } = npmPackage;
  const { formatMessage } = (0,useIntl/* default */.A)();
  const { trackUsage } = (0,dist/* useTracking */.z1)();
  const commandToCopy = useYarn ? `yarn add ${attributes.npmPackageName}` : `npm install ${attributes.npmPackageName}`;
  const madeByStrapiMessage = formatMessage({
    id: "admin.pages.MarketPlacePage.plugin.tooltip.madeByStrapi",
    defaultMessage: "Made by Strapi"
  });
  const npmPackageHref = `https://market.strapi.io/${pluralize.plural(npmPackageType)}/${attributes.slug}`;
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)(
    Flex/* Flex */.s,
    {
      direction: "column",
      justifyContent: "space-between",
      paddingTop: 4,
      paddingRight: 4,
      paddingBottom: 4,
      paddingLeft: 4,
      hasRadius: true,
      background: "neutral0",
      shadow: "tableShadow",
      height: "100%",
      alignItems: "normal",
      "data-testid": "npm-package-card",
      children: [
        /* @__PURE__ */ (0,jsx_runtime.jsxs)(Box/* Box */.a, { children: [
          /* @__PURE__ */ (0,jsx_runtime.jsxs)(Flex/* Flex */.s, { direction: "row", justifyContent: "space-between", alignItems: "flex-start", children: [
            /* @__PURE__ */ (0,jsx_runtime.jsx)(
              Box/* Box */.a,
              {
                as: "img",
                src: attributes.logo.url,
                alt: `${attributes.name} logo`,
                hasRadius: true,
                width: 11,
                height: 11
              }
            ),
            /* @__PURE__ */ (0,jsx_runtime.jsx)(
              PackageStats,
              {
                githubStars: attributes.githubStars,
                npmDownloads: attributes.npmDownloads,
                npmPackageType
              }
            )
          ] }),
          /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* Box */.a, { paddingTop: 4, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.o, { as: "h3", variant: "delta", children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(Flex/* Flex */.s, { alignItems: "center", children: [
            attributes.name,
            attributes.validated && !attributes.madeByStrapi && /* @__PURE__ */ (0,jsx_runtime.jsx)(
              Tooltip/* Tooltip */.m,
              {
                description: formatMessage({
                  id: "admin.pages.MarketPlacePage.plugin.tooltip.verified",
                  defaultMessage: "Plugin verified by Strapi"
                }),
                children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Flex/* Flex */.s, { children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Icon/* Icon */.I, { as: CheckCircle/* default */.A, marginLeft: 2, color: "success600" }) })
              }
            ),
            attributes.madeByStrapi && /* @__PURE__ */ (0,jsx_runtime.jsx)(Tooltip/* Tooltip */.m, { description: madeByStrapiMessage, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Flex/* Flex */.s, { children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
              Box/* Box */.a,
              {
                as: "img",
                src: index_dMS_26Ft.S,
                alt: madeByStrapiMessage,
                marginLeft: 1,
                width: 6,
                height: "auto"
              }
            ) }) })
          ] }) }) }),
          /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* Box */.a, { paddingTop: 2, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(EllipsisText, { as: "p", variant: "omega", textColor: "neutral600", children: attributes.description }) })
        ] }),
        /* @__PURE__ */ (0,jsx_runtime.jsxs)(Flex/* Flex */.s, { gap: 2, style: { alignSelf: "flex-end" }, paddingTop: 6, children: [
          /* @__PURE__ */ (0,jsx_runtime.jsx)(
            LinkButton/* LinkButton */.z,
            {
              size: "S",
              href: npmPackageHref,
              isExternal: true,
              endIcon: /* @__PURE__ */ (0,jsx_runtime.jsx)(ExternalLink/* default */.A, {}),
              "aria-label": formatMessage(
                {
                  id: "admin.pages.MarketPlacePage.plugin.info.label",
                  defaultMessage: "Learn more about {pluginName}"
                },
                { pluginName: attributes.name }
              ),
              variant: "tertiary",
              onClick: () => trackUsage("didPluginLearnMore"),
              children: formatMessage({
                id: "admin.pages.MarketPlacePage.plugin.info.text",
                defaultMessage: "More"
              })
            }
          ),
          /* @__PURE__ */ (0,jsx_runtime.jsx)(
            InstallPluginButton,
            {
              isInstalled,
              isInDevelopmentMode,
              commandToCopy,
              strapiAppVersion,
              strapiPeerDepVersion: attributes.strapiVersion,
              pluginName: attributes.name
            }
          )
        ] })
      ]
    }
  );
};
const InstallPluginButton = ({
  isInstalled,
  isInDevelopmentMode,
  commandToCopy,
  strapiAppVersion,
  strapiPeerDepVersion,
  pluginName
}) => {
  const toggleNotification = (0,dist/* useNotification */.hN)();
  const { formatMessage } = (0,useIntl/* default */.A)();
  const { trackUsage } = (0,dist/* useTracking */.z1)();
  const { copy } = (0,dist/* useClipboard */.iD)();
  const handleCopy = async () => {
    const didCopy = await copy(commandToCopy);
    if (didCopy) {
      trackUsage("willInstallPlugin");
      toggleNotification({
        type: "success",
        message: { id: "admin.pages.MarketPlacePage.plugin.copy.success" }
      });
    }
  };
  if (isInstalled) {
    return /* @__PURE__ */ (0,jsx_runtime.jsxs)(Box/* Box */.a, { paddingLeft: 4, children: [
      /* @__PURE__ */ (0,jsx_runtime.jsx)(Icon/* Icon */.I, { as: Check/* default */.A, marginRight: 2, width: 12, height: 12, color: "success600" }),
      /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.o, { variant: "omega", textColor: "success600", fontWeight: "bold", children: formatMessage({
        id: "admin.pages.MarketPlacePage.plugin.installed",
        defaultMessage: "Installed"
      }) })
    ] });
  }
  if (isInDevelopmentMode) {
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(
      CardButton,
      {
        strapiAppVersion,
        strapiPeerDepVersion,
        handleCopy,
        pluginName
      }
    );
  }
  return null;
};
const CardButton = ({
  strapiPeerDepVersion,
  strapiAppVersion,
  handleCopy,
  pluginName
}) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const versionRange = semver.validRange(strapiPeerDepVersion);
  const isCompatible = semver.satisfies(strapiAppVersion ?? "", versionRange ?? "");
  const installMessage = formatMessage({
    id: "admin.pages.MarketPlacePage.plugin.copy",
    defaultMessage: "Copy install command"
  });
  if (strapiAppVersion) {
    if (!versionRange || !isCompatible) {
      return /* @__PURE__ */ (0,jsx_runtime.jsx)(
        Tooltip/* Tooltip */.m,
        {
          "data-testid": `tooltip-${pluginName}`,
          description: !versionRange ? formatMessage(
            {
              id: "admin.pages.MarketPlacePage.plugin.version.null",
              defaultMessage: 'Unable to verify compatibility with your Strapi version: "{strapiAppVersion}"'
            },
            { strapiAppVersion }
          ) : formatMessage(
            {
              id: "admin.pages.MarketPlacePage.plugin.version",
              defaultMessage: 'Update your Strapi version: "{strapiAppVersion}" to: "{versionRange}"'
            },
            {
              strapiAppVersion,
              versionRange
            }
          ),
          children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
            Button/* Button */.$,
            {
              size: "S",
              startIcon: /* @__PURE__ */ (0,jsx_runtime.jsx)(Duplicate/* default */.A, {}),
              variant: "secondary",
              onClick: handleCopy,
              disabled: !isCompatible,
              children: installMessage
            }
          )
        }
      );
    }
  }
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(Button/* Button */.$, { size: "S", startIcon: /* @__PURE__ */ (0,jsx_runtime.jsx)(Duplicate/* default */.A, {}), variant: "secondary", onClick: handleCopy, children: installMessage });
};
const PackageStats = ({ githubStars = 0, npmDownloads = 0, npmPackageType }) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)(Flex/* Flex */.s, { gap: 1, children: [
    !!githubStars && /* @__PURE__ */ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [
      /* @__PURE__ */ (0,jsx_runtime.jsx)(Icon/* Icon */.I, { as: Github/* default */.A, height: (0,dist/* pxToRem */.a8)(12), width: (0,dist/* pxToRem */.a8)(12), "aria-hidden": true }),
      /* @__PURE__ */ (0,jsx_runtime.jsx)(Icon/* Icon */.I, { as: Star/* default */.A, height: (0,dist/* pxToRem */.a8)(12), width: (0,dist/* pxToRem */.a8)(12), color: "warning500", "aria-hidden": true }),
      /* @__PURE__ */ (0,jsx_runtime.jsx)(
        "p",
        {
          "aria-label": formatMessage(
            {
              id: `admin.pages.MarketPlacePage.${npmPackageType}.githubStars`,
              defaultMessage: `This {package} was starred {starsCount} on GitHub`
            },
            {
              starsCount: githubStars,
              package: npmPackageType
            }
          ),
          children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.o, { variant: "pi", textColor: "neutral800", children: githubStars })
        }
      ),
      /* @__PURE__ */ (0,jsx_runtime.jsx)(VerticalDivider, { unsetMargin: false })
    ] }),
    /* @__PURE__ */ (0,jsx_runtime.jsx)(Icon/* Icon */.I, { as: Download/* default */.A, height: (0,dist/* pxToRem */.a8)(12), width: (0,dist/* pxToRem */.a8)(12), "aria-hidden": true }),
    /* @__PURE__ */ (0,jsx_runtime.jsx)(
      "p",
      {
        "aria-label": formatMessage(
          {
            id: `admin.pages.MarketPlacePage.${npmPackageType}.downloads`,
            defaultMessage: `This {package} has {downloadsCount} weekly downloads`
          },
          {
            downloadsCount: npmDownloads,
            package: npmPackageType
          }
        ),
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.o, { variant: "pi", textColor: "neutral800", children: npmDownloads })
      }
    )
  ] });
};
const VerticalDivider = (0,styled_components_browser_esm/* default */.Ay)((0,Divider/* Divider */.c))`
  width: ${(0,dist/* pxToRem */.a8)(12)};
  transform: rotate(90deg);
`;
const NpmPackagesGrid = ({
  status,
  npmPackages = [],
  installedPackageNames = [],
  useYarn,
  isInDevelopmentMode,
  npmPackageType,
  strapiAppVersion,
  debouncedSearch
}) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  if (status === "error") {
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(Flex/* Flex */.s, { paddingTop: 8, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(dist/* AnErrorOccurred */.hH, {}) });
  }
  if (status === "loading") {
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(Flex/* Flex */.s, { justifyContent: "center", paddingTop: 8, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Loader/* Loader */.a, { children: "Loading content..." }) });
  }
  const emptySearchMessage = formatMessage(
    {
      id: "admin.pages.MarketPlacePage.search.empty",
      defaultMessage: 'No result for "{target}"'
    },
    { target: debouncedSearch }
  );
  if (npmPackages.length === 0) {
    return /* @__PURE__ */ (0,jsx_runtime.jsxs)(Box/* Box */.a, { position: "relative", children: [
      /* @__PURE__ */ (0,jsx_runtime.jsx)(GridLayout, { children: Array(12).fill(null).map((_, idx) => /* @__PURE__ */ (0,jsx_runtime.jsx)(EmptyPluginCard, { height: "234px", hasRadius: true }, idx)) }),
      /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* Box */.a, { position: "absolute", top: 11, width: "100%", children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(Flex/* Flex */.s, { alignItems: "center", justifyContent: "center", direction: "column", children: [
        /* @__PURE__ */ (0,jsx_runtime.jsx)(Icon/* Icon */.I, { as: EmptyDocuments/* default */.A, color: void 0, width: "160px", height: "88px" }),
        /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* Box */.a, { paddingTop: 6, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.o, { variant: "delta", as: "p", textColor: "neutral600", children: emptySearchMessage }) })
      ] }) })
    ] });
  }
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(Grid/* Grid */.x, { gap: 4, children: npmPackages.map((npmPackage) => /* @__PURE__ */ (0,jsx_runtime.jsx)(GridItem/* GridItem */.E, { col: 4, s: 6, xs: 12, style: { height: "100%" }, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
    NpmPackageCard,
    {
      npmPackage,
      isInstalled: installedPackageNames.includes(npmPackage.attributes.npmPackageName),
      useYarn,
      isInDevelopmentMode,
      npmPackageType,
      strapiAppVersion
    }
  ) }, npmPackage.id)) });
};
const EmptyPluginCard = (0,styled_components_browser_esm/* default */.Ay)((0,Box/* Box */.a))`
  background: ${({ theme }) => `linear-gradient(180deg, rgba(234, 234, 239, 0) 0%, ${theme.colors.neutral150} 100%)`};
  opacity: 0.33;
`;
const PageHeader = ({ isOnline, npmPackageType = "plugin" }) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const { trackUsage } = (0,dist/* useTracking */.z1)();
  const tracking = npmPackageType === "provider" ? "didSubmitProvider" : "didSubmitPlugin";
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    HeaderLayout/* HeaderLayout */.Q,
    {
      title: formatMessage({
        id: "global.marketplace",
        defaultMessage: "Marketplace"
      }),
      subtitle: formatMessage({
        id: "admin.pages.MarketPlacePage.subtitle",
        defaultMessage: "Get more out of Strapi"
      }),
      primaryAction: isOnline && /* @__PURE__ */ (0,jsx_runtime.jsx)(
        LinkButton/* LinkButton */.z,
        {
          startIcon: /* @__PURE__ */ (0,jsx_runtime.jsx)(v, {}),
          variant: "tertiary",
          href: `https://market.strapi.io/submit-${npmPackageType}`,
          onClick: () => trackUsage(tracking),
          isExternal: true,
          children: formatMessage({
            id: `admin.pages.MarketPlacePage.submit.${npmPackageType}.link`,
            defaultMessage: `Submit ${npmPackageType}`
          })
        }
      )
    }
  );
};
const OfflineLayout = () => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(Layout/* Layout */.P, { children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(Main/* Main */.g, { children: [
    /* @__PURE__ */ (0,jsx_runtime.jsx)(PageHeader, {}),
    /* @__PURE__ */ (0,jsx_runtime.jsxs)(
      Flex/* Flex */.s,
      {
        width: "100%",
        direction: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: (0,dist/* pxToRem */.a8)(120),
        children: [
          /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* Box */.a, { paddingBottom: 2, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.o, { textColor: "neutral700", variant: "alpha", children: formatMessage({
            id: "admin.pages.MarketPlacePage.offline.title",
            defaultMessage: "You are offline"
          }) }) }),
          /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* Box */.a, { paddingBottom: 6, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.o, { textColor: "neutral700", variant: "epsilon", children: formatMessage({
            id: "admin.pages.MarketPlacePage.offline.subtitle",
            defaultMessage: "You need to be connected to the Internet to access Strapi Market."
          }) }) }),
          /* @__PURE__ */ (0,jsx_runtime.jsxs)(
            "svg",
            {
              width: "88",
              height: "88",
              viewBox: "0 0 88 88",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                /* @__PURE__ */ (0,jsx_runtime.jsx)("rect", { x: ".5", y: ".5", width: "87", height: "87", rx: "43.5", fill: "#F0F0FF" }),
                /* @__PURE__ */ (0,jsx_runtime.jsx)(
                  "path",
                  {
                    d: "M34 39.3h-4c-2.6 0-4.7 1-6.6 2.8a9 9 0 0 0-2.7 6.6 9 9 0 0 0 2.7 6.6A9 9 0 0 0 30 58h22.8L34 39.3Zm-11-11 3-3 39 39-3 3-4.7-4.6H30a13.8 13.8 0 0 1-14-14c0-3.8 1.3-7 4-9.7 2.6-2.7 5.7-4.2 9.5-4.3L23 28.2Zm38.2 11.1c3 .2 5.5 1.5 7.6 3.7A11 11 0 0 1 72 51c0 4-1.6 7.2-5 9.5l-3.3-3.4a6.5 6.5 0 0 0 3.6-6.1c0-1.9-.7-3.5-2-5-1.5-1.3-3.1-2-5-2h-3.5v-1.2c0-3.6-1.2-6.6-3.7-9a13 13 0 0 0-15-2.3L34.6 28a17 17 0 0 1 20.3 1.5c3.5 2.7 5.5 6 6.3 10Z",
                    fill: "#4945FF"
                  }
                ),
                /* @__PURE__ */ (0,jsx_runtime.jsx)("rect", { x: ".5", y: ".5", width: "87", height: "87", rx: "43.5", stroke: "#D9D8FF" })
              ]
            }
          )
        ]
      }
    )
  ] }) });
};
const SORT_TYPES = {
  "name:asc": {
    selected: {
      id: "admin.pages.MarketPlacePage.sort.alphabetical.selected",
      defaultMessage: "Sort by alphabetical order"
    },
    option: {
      id: "admin.pages.MarketPlacePage.sort.alphabetical",
      defaultMessage: "Alphabetical order"
    }
  },
  "submissionDate:desc": {
    selected: {
      id: "admin.pages.MarketPlacePage.sort.newest.selected",
      defaultMessage: "Sort by newest"
    },
    option: {
      id: "admin.pages.MarketPlacePage.sort.newest",
      defaultMessage: "Newest"
    }
  },
  "githubStars:desc": {
    selected: {
      id: "admin.pages.MarketPlacePage.sort.githubStars.selected",
      defaultMessage: "Sort by GitHub stars"
    },
    option: {
      id: "admin.pages.MarketPlacePage.sort.githubStars",
      defaultMessage: "Number of GitHub stars"
    }
  },
  "npmDownloads:desc": {
    selected: {
      id: "admin.pages.MarketPlacePage.sort.npmDownloads.selected",
      defaultMessage: "Sort by npm downloads"
    },
    option: {
      id: "admin.pages.MarketPlacePage.sort.npmDownloads",
      defaultMessage: "Number of downloads"
    }
  }
};
const SortSelect = ({ sortQuery, handleSelectChange }) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(SelectWrapper, { children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
    SingleSelect/* SingleSelect */.Z,
    {
      size: "S",
      id: "sort-by-select",
      value: sortQuery,
      customizeContent: () => formatMessage(SORT_TYPES[sortQuery].selected),
      onChange: (sortName) => {
        handleSelectChange({ sort: sortName });
      },
      label: formatMessage({
        id: "admin.pages.MarketPlacePage.sort.label",
        defaultMessage: "Sort by"
      }),
      children: Object.entries(SORT_TYPES).map(([sortName, messages]) => {
        return /* @__PURE__ */ (0,jsx_runtime.jsx)(SingleSelect/* SingleSelectOption */.eY, { value: sortName, children: formatMessage(messages.option) }, sortName);
      })
    }
  ) });
};
const SelectWrapper = (0,styled_components_browser_esm/* default */.Ay)((0,Box/* Box */.a))`
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};

  span {
    font-size: ${({ theme }) => theme.fontSizes[1]};
  }

  /* Hide the label, every input needs a label. */
  label {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`;
const MARKETPLACE_API_URL = "https://market-api.strapi.io";
function useMarketplaceData({
  npmPackageType,
  debouncedSearch,
  query,
  tabQuery
}) {
  const { notifyStatus } = (0,useNotifyAT/* useNotifyAT */.W)();
  const { formatMessage } = (0,useIntl/* default */.A)();
  const toggleNotification = (0,dist/* useNotification */.hN)();
  const marketplaceTitle = formatMessage({
    id: "global.marketplace",
    defaultMessage: "Marketplace"
  });
  const notifyMarketplaceLoad = () => {
    notifyStatus(
      formatMessage(
        {
          id: "app.utils.notify.data-loaded",
          defaultMessage: "The {target} has loaded"
        },
        { target: marketplaceTitle }
      )
    );
  };
  const paginationParams = {
    page: query?.page || 1,
    pageSize: query?.pageSize || 24
  };
  const pluginParams = {
    ...tabQuery.plugin,
    pagination: paginationParams,
    search: debouncedSearch
  };
  const { data: pluginsResponse, status: pluginsStatus } = (0,react_query_es.useQuery)(
    ["marketplace", "plugins", pluginParams],
    async () => {
      try {
        const queryString = lib.stringify(pluginParams);
        const res = await fetch(`${MARKETPLACE_API_URL}/plugins?${queryString}`);
        if (!res.ok) {
          throw new Error("Failed to fetch marketplace plugins.");
        }
        const data = await res.json();
        return data;
      } catch (error) {
      }
      return null;
    },
    {
      onSuccess() {
        notifyMarketplaceLoad();
      },
      onError() {
        toggleNotification({
          type: "warning",
          message: { id: "notification.error", defaultMessage: "An error occured" }
        });
      }
    }
  );
  const providerParams = {
    ...tabQuery.provider,
    pagination: paginationParams,
    search: debouncedSearch
  };
  const { data: providersResponse, status: providersStatus } = (0,react_query_es.useQuery)(
    ["marketplace", "providers", providerParams],
    async () => {
      const queryString = lib.stringify(providerParams);
      const res = await fetch(`${MARKETPLACE_API_URL}/providers?${queryString}`);
      if (!res.ok) {
        throw new Error("Failed to fetch marketplace providers.");
      }
      const data = await res.json();
      return data;
    },
    {
      onSuccess() {
        notifyMarketplaceLoad();
      },
      onError() {
        toggleNotification({
          type: "warning",
          message: { id: "notification.error", defaultMessage: "An error occured" }
        });
      }
    }
  );
  const npmPackageTypeResponse = npmPackageType === "plugin" ? pluginsResponse : providersResponse;
  const possibleCollections = npmPackageTypeResponse?.meta.collections ?? {};
  const possibleCategories = pluginsResponse?.meta.categories ?? {};
  const { pagination } = npmPackageTypeResponse?.meta ?? {};
  return {
    pluginsResponse,
    providersResponse,
    pluginsStatus,
    providersStatus,
    possibleCollections,
    possibleCategories,
    pagination
  };
}
const useNavigatorOnline = () => {
  const onlineStatus = typeof navigator !== "undefined" && typeof navigator.onLine === "boolean" ? navigator.onLine : true;
  const [isOnline, setIsOnline] = react.useState(onlineStatus);
  const setOnline = () => setIsOnline(true);
  const setOffline = () => setIsOnline(false);
  react.useEffect(() => {
    window.addEventListener("online", setOnline);
    window.addEventListener("offline", setOffline);
    return () => {
      window.removeEventListener("online", setOnline);
      window.removeEventListener("offline", setOffline);
    };
  }, []);
  return isOnline;
};
const MarketplacePage = () => {
  const tabRef = react.useRef(null);
  const { formatMessage } = (0,useIntl/* default */.A)();
  const { trackUsage } = (0,dist/* useTracking */.z1)();
  const toggleNotification = (0,dist/* useNotification */.hN)();
  const [{ query }, setQuery] = (0,dist/* useQueryParams */.sq)();
  const debouncedSearch = (0,index_dMS_26Ft.r)(query?.search, 500) || "";
  const { autoReload: isInDevelopmentMode, dependencies, useYarn, strapiVersion } = (0,dist/* useAppInfo */.Xe)();
  const isOnline = useNavigatorOnline();
  const npmPackageType = query?.npmPackageType || "plugin";
  const [tabQuery, setTabQuery] = react.useState({
    plugin: npmPackageType === "plugin" ? { ...query } : {},
    provider: npmPackageType === "provider" ? { ...query } : {}
  });
  (0,dist/* useFocusWhenNavigate */.L4)();
  react.useEffect(() => {
    trackUsage("didGoToMarketplace");
  }, [trackUsage]);
  react.useEffect(() => {
    if (!isInDevelopmentMode) {
      toggleNotification({
        type: "info",
        message: {
          id: "admin.pages.MarketPlacePage.production",
          defaultMessage: "Manage plugins from the development environment"
        }
      });
    }
  }, [toggleNotification, isInDevelopmentMode]);
  const {
    pluginsResponse,
    providersResponse,
    pluginsStatus,
    providersStatus,
    possibleCollections,
    possibleCategories,
    pagination
  } = useMarketplaceData({ npmPackageType, debouncedSearch, query, tabQuery });
  const indexOfNpmPackageType = ["plugin", "provider"].indexOf(npmPackageType);
  react.useEffect(() => {
    if (tabRef.current) {
      tabRef.current._handlers.setSelectedTabIndex(indexOfNpmPackageType);
    }
  }, [indexOfNpmPackageType]);
  if (!isOnline) {
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(OfflineLayout, {});
  }
  const handleTabChange = (selected) => {
    const selectedTab = selected === 0 ? "plugin" : "provider";
    const hasTabQuery = tabQuery[selectedTab] && Object.keys(tabQuery[selectedTab]).length;
    if (hasTabQuery) {
      setQuery({
        // Keep filters and search
        ...tabQuery[selectedTab],
        search: query?.search || "",
        // Set tab and reset page
        npmPackageType: selectedTab,
        page: 1
      });
    } else {
      setQuery({
        // Set tab
        npmPackageType: selectedTab,
        // Clear filters
        collections: [],
        categories: [],
        sort: "name:asc",
        page: 1,
        // Keep search
        search: query?.search || ""
      });
    }
  };
  const handleSelectChange = (update) => {
    setQuery({ ...update, page: 1 });
    setTabQuery((prev) => ({
      ...prev,
      [npmPackageType]: { ...prev[npmPackageType], ...update }
    }));
  };
  const handleSelectClear = (filterType) => {
    setQuery({ [filterType]: [], page: void 0 }, "remove");
    setTabQuery((prev) => ({ ...prev, [npmPackageType]: {} }));
  };
  const handleSortSelectChange = ({ sort }) => (
    // @ts-expect-error - this is a narrowing issue.
    handleSelectChange({ sort })
  );
  const installedPackageNames = Object.keys(dependencies ?? {});
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(Layout/* Layout */.P, { children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(Main/* Main */.g, { children: [
    /* @__PURE__ */ (0,jsx_runtime.jsx)(
      Helmet/* Helmet */.m,
      {
        title: formatMessage({
          id: "admin.pages.MarketPlacePage.helmet",
          defaultMessage: "Marketplace - Plugins"
        })
      }
    ),
    /* @__PURE__ */ (0,jsx_runtime.jsx)(PageHeader, { isOnline, npmPackageType }),
    /* @__PURE__ */ (0,jsx_runtime.jsxs)(ContentLayout/* ContentLayout */.s, { children: [
      /* @__PURE__ */ (0,jsx_runtime.jsxs)(
        TabGroup/* TabGroup */.f,
        {
          label: formatMessage({
            id: "admin.pages.MarketPlacePage.tab-group.label",
            defaultMessage: "Plugins and Providers for Strapi"
          }),
          id: "tabs",
          variant: "simple",
          initialSelectedTabIndex: indexOfNpmPackageType,
          onTabChange: handleTabChange,
          ref: tabRef,
          children: [
            /* @__PURE__ */ (0,jsx_runtime.jsxs)(Flex/* Flex */.s, { justifyContent: "space-between", paddingBottom: 4, children: [
              /* @__PURE__ */ (0,jsx_runtime.jsxs)(Tabs/* Tabs */.t, { children: [
                /* @__PURE__ */ (0,jsx_runtime.jsxs)(Tabs/* Tab */.o, { children: [
                  formatMessage({
                    id: "admin.pages.MarketPlacePage.plugins",
                    defaultMessage: "Plugins"
                  }),
                  " ",
                  pluginsResponse ? `(${pluginsResponse.meta.pagination.total})` : "..."
                ] }),
                /* @__PURE__ */ (0,jsx_runtime.jsxs)(Tabs/* Tab */.o, { children: [
                  formatMessage({
                    id: "admin.pages.MarketPlacePage.providers",
                    defaultMessage: "Providers"
                  }),
                  " ",
                  providersResponse ? `(${providersResponse.meta.pagination.total})` : "..."
                ] })
              ] }),
              /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* Box */.a, { width: "25%", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
                Searchbar/* Searchbar */.S,
                {
                  name: "searchbar",
                  onClear: () => setQuery({ search: "", page: 1 }),
                  value: query?.search,
                  onChange: (e) => setQuery({ search: e.target.value, page: 1 }),
                  clearLabel: formatMessage({
                    id: "admin.pages.MarketPlacePage.search.clear",
                    defaultMessage: "Clear the search"
                  }),
                  placeholder: formatMessage({
                    id: "admin.pages.MarketPlacePage.search.placeholder",
                    defaultMessage: "Search"
                  }),
                  children: formatMessage({
                    id: "admin.pages.MarketPlacePage.search.placeholder",
                    defaultMessage: "Search"
                  })
                }
              ) })
            ] }),
            /* @__PURE__ */ (0,jsx_runtime.jsxs)(Flex/* Flex */.s, { paddingBottom: 4, gap: 2, children: [
              /* @__PURE__ */ (0,jsx_runtime.jsx)(
                SortSelect,
                {
                  sortQuery: query?.sort || "name:asc",
                  handleSelectChange: handleSortSelectChange
                }
              ),
              /* @__PURE__ */ (0,jsx_runtime.jsx)(
                NpmPackagesFilters,
                {
                  npmPackageType,
                  possibleCollections,
                  possibleCategories,
                  query: query || {},
                  handleSelectChange,
                  handleSelectClear
                }
              )
            ] }),
            /* @__PURE__ */ (0,jsx_runtime.jsxs)(TabPanels/* TabPanels */.T, { children: [
              /* @__PURE__ */ (0,jsx_runtime.jsx)(TabPanels/* TabPanel */.K, { children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
                NpmPackagesGrid,
                {
                  npmPackages: pluginsResponse?.data,
                  status: pluginsStatus,
                  installedPackageNames,
                  useYarn,
                  isInDevelopmentMode,
                  npmPackageType: "plugin",
                  strapiAppVersion: strapiVersion,
                  debouncedSearch
                }
              ) }),
              /* @__PURE__ */ (0,jsx_runtime.jsx)(TabPanels/* TabPanel */.K, { children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
                NpmPackagesGrid,
                {
                  npmPackages: providersResponse?.data,
                  status: providersStatus,
                  installedPackageNames,
                  useYarn,
                  isInDevelopmentMode,
                  npmPackageType: "provider",
                  debouncedSearch
                }
              ) })
            ] })
          ]
        }
      ),
      pagination ? /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* Box */.a, { paddingTop: 4, children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(Flex/* Flex */.s, { alignItems: "flex-end", justifyContent: "space-between", children: [
        /* @__PURE__ */ (0,jsx_runtime.jsx)(dist/* PageSizeURLQuery */._u, { options: ["12", "24", "50", "100"], defaultValue: "24" }),
        /* @__PURE__ */ (0,jsx_runtime.jsx)(dist/* PaginationURLQuery */.W7, { pagination })
      ] }) }) : null,
      /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* Box */.a, { paddingTop: 8, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
        "a",
        {
          href: "https://strapi.canny.io/plugin-requests",
          target: "_blank",
          rel: "noopener noreferrer nofollow",
          style: { textDecoration: "none" },
          onClick: () => trackUsage("didMissMarketplacePlugin"),
          children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
            dist/* ContentBox */.bQ,
            {
              title: formatMessage({
                id: "admin.pages.MarketPlacePage.missingPlugin.title",
                defaultMessage: "Documentation"
              }),
              subtitle: formatMessage({
                id: "admin.pages.MarketPlacePage.missingPlugin.description",
                defaultMessage: "Tell us what plugin you are looking for and we'll let our community plugin developers know in case they are in search for inspiration!"
              }),
              icon: /* @__PURE__ */ (0,jsx_runtime.jsx)(i, {}),
              iconBackground: "alternative100",
              endAction: /* @__PURE__ */ (0,jsx_runtime.jsx)(Icon/* Icon */.I, { as: ExternalLink/* default */.A, color: "neutral600", width: 3, height: 3, marginLeft: 2 })
            }
          )
        }
      ) })
    ] })
  ] }) });
};
const ProtectedMarketplacePage = () => {
  const permissions = (0,es/* useSelector */.d4)(AuthenticatedApp_uHd_MPEB.s);
  return (
    // @ts-expect-error – the selector is not typed.
    /* @__PURE__ */ (0,jsx_runtime.jsx)(dist/* CheckPagePermissions */.kz, { permissions: permissions.marketplace.main, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(MarketplacePage, {}) })
  );
};



/***/ },

/***/ 40799
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92132);

const e = (i) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1rem", height: "1rem", fill: "none", viewBox: "0 0 24 24", ...i, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
  "path",
  {
    fill: "#161614",
    d: "M12 0C5.373 0 0 5.501 0 12.288c0 5.43 3.438 10.035 8.206 11.66.6.114.82-.266.82-.59 0-.294-.01-1.262-.016-2.289-3.338.744-4.043-1.45-4.043-1.45-.546-1.42-1.332-1.797-1.332-1.797-1.089-.763.082-.747.082-.747 1.205.086 1.84 1.266 1.84 1.266 1.07 1.878 2.807 1.335 3.491 1.021.108-.794.42-1.336.762-1.643-2.665-.31-5.467-1.364-5.467-6.073 0-1.341.469-2.437 1.236-3.298-.124-.31-.535-1.56.117-3.252 0 0 1.007-.33 3.3 1.26A11.25 11.25 0 0 1 12 5.942c1.02.005 2.047.141 3.006.414 2.29-1.59 3.297-1.26 3.297-1.26.653 1.693.242 2.943.118 3.252.77.86 1.235 1.957 1.235 3.298 0 4.72-2.808 5.76-5.48 6.063.43.382.814 1.13.814 2.276 0 1.644-.014 2.967-.014 3.372 0 .327.216.71.825.59C20.566 22.32 24 17.715 24 12.288 24 5.501 18.627 0 12 0Z"
  }
) }), o = e;



/***/ }

}]);