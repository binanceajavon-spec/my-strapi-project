(self["webpackChunkmy_strapi_project"] = self["webpackChunkmy_strapi_project"] || []).push([[2389],{

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

/***/ 92389
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsPage: () => (/* binding */ SettingsPage)
/* harmony export */ });
/* unused harmony export makeUniqueRoutes */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69751);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21272);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94061);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85963);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19307);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37789);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1844);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(76547);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(52358);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(33468);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(98915);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5239);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(11196);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(75124);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(48653);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7153);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(74447);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(10229);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(90151);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(68074);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(58805);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(88353);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(42455);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(4198);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(55356);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(64871);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(38413);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(61485);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(99248);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(67030);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(83997);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(12408);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(24093);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(12081);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(7537);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(30893);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(59201);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(14718);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(54894);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(71389);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(17703);
/* harmony import */ var _index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(92129);
/* harmony import */ var lodash_sortBy__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(45635);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(82437);
/* harmony import */ var _AuthenticatedApp_uHd_MPEB_mjs__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(38682);
/* harmony import */ var _strapi_design_system_v2__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(64310);
/* harmony import */ var _strapi_design_system_v2__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(98278);
/* harmony import */ var _strapi_design_system_v2__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(63996);
/* harmony import */ var _strapi_design_system_v2__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(87419);
/* harmony import */ var _strapi_design_system_v2__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(29404);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(54514);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(14595);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(66980);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(99576);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(5194);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(70603);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(47610);
/* harmony import */ var _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(89032);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(60256);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(41629);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(15126);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(63299);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(44633);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(59080);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(79275);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(61535);
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(5790);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(12083);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(35223);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(5409);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(74930);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(80219);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(48940);
/* harmony import */ var lodash_defaultsDeep__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(41286);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(33955);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(13426);
/* harmony import */ var lodash_isBoolean__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(84624);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(346);
/* harmony import */ var lodash_isNaN__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(54257);
/* harmony import */ var lodash_toNumber__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(48829);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(51187);
/* harmony import */ var lodash_upperFirst__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(39404);
/* harmony import */ var lodash_fp__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(58692);
/* harmony import */ var lodash_take__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(501);
/* harmony import */ var codemirror5__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(57646);
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(23120);
/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(44414);
/* harmony import */ var markdown_it_abbr__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(25962);
/* harmony import */ var markdown_it_container__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(14664);
/* harmony import */ var markdown_it_deflist__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(42588);
/* harmony import */ var markdown_it_emoji__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(90325);
/* harmony import */ var markdown_it_footnote__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(62785);
/* harmony import */ var markdown_it_ins__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(87443);
/* harmony import */ var markdown_it_mark__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(41032);
/* harmony import */ var markdown_it_sub__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(22957);
/* harmony import */ var markdown_it_sup__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(93179);
/* harmony import */ var highlight_js_styles_solarized_dark_css__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(73055);
/* harmony import */ var codemirror5_addon_display_placeholder__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(15747);
/* harmony import */ var lodash_toString__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(62925);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(26509);
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(32058);
/* harmony import */ var lodash_unset__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(81185);
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(4642);
/* harmony import */ var semver_functions_lt__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(55151);
/* harmony import */ var semver_functions_valid__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(79077);











































































const formatLinks = (menu) => menu.map((menuSection) => {
  const formattedLinks = menuSection.links.map((link) => ({
    ...link,
    isDisplayed: false
  }));
  return { ...menuSection, links: formattedLinks };
});
const useSettingsMenu = () => {
  const [{ isLoading, menu }, setData] = react__WEBPACK_IMPORTED_MODULE_1__.useState({
    isLoading: true,
    menu: []
  });
  const { allPermissions: userPermissions } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_36__/* .useRBACProvider */ .r5)();
  const { shouldUpdateStrapi } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_36__/* .useAppInfo */ .Xe)();
  const { settings } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_36__/* .useStrapiApp */ .vD)();
  const permissions = (0,react_redux__WEBPACK_IMPORTED_MODULE_43__/* .useSelector */ .d4)(_AuthenticatedApp_uHd_MPEB_mjs__WEBPACK_IMPORTED_MODULE_44__.s);
  const ceLinks = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_41__.y)(), []);
  const { admin: adminLinks, global: globalLinks } = (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_41__.p)(
    ceLinks,
    async () => (await __webpack_require__.e(/* import() */ 7127).then(__webpack_require__.bind(__webpack_require__, 67127))).SETTINGS_LINKS_EE(),
    {
      combine(ceLinks2, eeLinks) {
        return {
          admin: [...eeLinks.admin, ...ceLinks2.admin],
          global: [...ceLinks2.global, ...eeLinks.global]
        };
      },
      defaultValue: {
        admin: [],
        global: []
      }
    }
  );
  const addPermissions = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(
    (link) => {
      if (!link.id) {
        throw new Error("The settings menu item must have an id attribute.");
      }
      return {
        ...link,
        permissions: permissions.settings?.[link.id]?.main ?? []
      };
    },
    [permissions.settings]
  );
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    const getData = async () => {
      const buildMenuPermissions = (sections2) => Promise.all(
        sections2.reduce((acc, section, sectionIndex) => {
          const linksWithPermissions = section.links.map(async (link, linkIndex) => ({
            hasPermission: await (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_36__/* .hasPermissions */ .v$)(userPermissions, link.permissions),
            sectionIndex,
            linkIndex
          }));
          return [...acc, ...linksWithPermissions];
        }, [])
      );
      const menuPermissions = await buildMenuPermissions(sections);
      setData((prev) => {
        return {
          ...prev,
          isLoading: false,
          menu: sections.map((section, sectionIndex) => ({
            ...section,
            links: section.links.map((link, linkIndex) => {
              const permission = menuPermissions.find(
                (permission2) => permission2.sectionIndex === sectionIndex && permission2.linkIndex === linkIndex
              );
              return {
                ...link,
                isDisplayed: Boolean(permission?.hasPermission)
              };
            })
          }))
        };
      });
    };
    const { global, ...otherSections } = settings;
    const sections = formatLinks([
      {
        ...global,
        links: lodash_sortBy__WEBPACK_IMPORTED_MODULE_42__([...global.links, ...globalLinks.map(addPermissions)], (link) => link.id).map(
          (link) => ({
            ...link,
            hasNotification: link.id === "000-application-infos" && shouldUpdateStrapi
          })
        )
      },
      {
        id: "permissions",
        intlLabel: { id: "Settings.permissions", defaultMessage: "Administration Panel" },
        links: adminLinks.map(addPermissions)
      },
      ...Object.values(otherSections)
    ]);
    getData();
  }, [adminLinks, globalLinks, userPermissions, settings, shouldUpdateStrapi, addPermissions]);
  return {
    isLoading,
    menu: menu.map((menuItem) => ({
      ...menuItem,
      links: menuItem.links.filter((link) => link.isDisplayed)
    }))
  };
};
const CustomIcon = (0,styled_components__WEBPACK_IMPORTED_MODULE_56__/* ["default"] */ .Ay)((0,_strapi_design_system__WEBPACK_IMPORTED_MODULE_20__/* .Icon */ .I))`
  right: 15px;
  position: absolute;

  path {
    fill: ${({ theme }) => theme.colors.warning500};
  }
`;
const SettingsNav = ({ menu }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .A)();
  const { trackUsage } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_36__/* .useTracking */ .z1)();
  const { pathname } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_40__/* .useLocation */ .zy)();
  const filteredMenu = menu.filter(
    (section) => !section.links.every((link) => link.isDisplayed === false)
  );
  const sections = filteredMenu.map((section) => {
    return {
      ...section,
      title: section.intlLabel,
      links: section.links.map((link) => {
        return {
          ...link,
          title: link.intlLabel,
          name: link.id
        };
      })
    };
  });
  const label = formatMessage({
    id: "global.settings",
    defaultMessage: "Settings"
  });
  const handleClickOnLink = (destination) => () => {
    trackUsage("willNavigate", { from: pathname, to: destination });
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system_v2__WEBPACK_IMPORTED_MODULE_45__/* .SubNav */ .C, { ariaLabel: label, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system_v2__WEBPACK_IMPORTED_MODULE_46__/* .SubNavHeader */ .X, { label }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system_v2__WEBPACK_IMPORTED_MODULE_49__/* .SubNavSections */ .w, { children: sections.map((section) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system_v2__WEBPACK_IMPORTED_MODULE_48__/* .SubNavSection */ .L, { label: formatMessage(section.intlLabel), children: section.links.map((link) => {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
        _strapi_design_system_v2__WEBPACK_IMPORTED_MODULE_47__/* .SubNavLink */ .u,
        {
          as: react_router_dom__WEBPACK_IMPORTED_MODULE_39__/* .NavLink */ .k2,
          withBullet: link.hasNotification,
          to: link.to,
          onClick: handleClickOnLink(link.to),
          children: [
            formatMessage(link.intlLabel),
            // TODO: to replace with another name in v5
            link?.lockIcon && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CustomIcon, { width: `${15 / 16}rem`, height: `${15 / 16}rem`, as: _strapi_icons__WEBPACK_IMPORTED_MODULE_52__/* ["default"] */ .A })
          ]
        },
        link.id
      );
    }) }, section.id)) })
  ] });
};
const ROUTES_CE = [
  {
    async Component() {
      const { ProtectedListPage } = await __webpack_require__.e(/* import() */ 6889).then(__webpack_require__.bind(__webpack_require__, 26889));
      return ProtectedListPage;
    },
    to: "/settings/roles",
    exact: true
  },
  {
    async Component() {
      const { ProtectedCreatePage } = await Promise.all(/* import() */[__webpack_require__.e(11), __webpack_require__.e(7009), __webpack_require__.e(5549)]).then(__webpack_require__.bind(__webpack_require__, 25549));
      return ProtectedCreatePage;
    },
    to: "/settings/roles/duplicate/:id",
    exact: true
  },
  {
    async Component() {
      const { ProtectedCreatePage } = await Promise.all(/* import() */[__webpack_require__.e(11), __webpack_require__.e(7009), __webpack_require__.e(5549)]).then(__webpack_require__.bind(__webpack_require__, 25549));
      return ProtectedCreatePage;
    },
    to: "/settings/roles/new",
    exact: true
  },
  {
    async Component() {
      const { ProtectedEditPage } = await Promise.all(/* import() */[__webpack_require__.e(7009), __webpack_require__.e(5946)]).then(__webpack_require__.bind(__webpack_require__, 25946));
      return ProtectedEditPage;
    },
    to: "/settings/roles/:id",
    exact: true
  },
  {
    async Component() {
      const { ProtectedListPage } = await __webpack_require__.e(/* import() */ 2266).then(__webpack_require__.bind(__webpack_require__, 52266));
      return ProtectedListPage;
    },
    to: "/settings/users",
    exact: true
  },
  {
    async Component() {
      const { ProtectedEditPage } = await __webpack_require__.e(/* import() */ 4483).then(__webpack_require__.bind(__webpack_require__, 74483));
      return ProtectedEditPage;
    },
    to: "/settings/users/:id",
    exact: true
  },
  {
    async Component() {
      const { ProtectedCreatePage } = await __webpack_require__.e(/* import() */ 9500).then(__webpack_require__.bind(__webpack_require__, 19500));
      return ProtectedCreatePage;
    },
    to: "/settings/webhooks/create",
    exact: true
  },
  {
    async Component() {
      const { ProtectedEditPage } = await __webpack_require__.e(/* import() */ 4051).then(__webpack_require__.bind(__webpack_require__, 84051)).then((n) => n.b);
      return ProtectedEditPage;
    },
    to: "/settings/webhooks/:id",
    exact: true
  },
  {
    async Component() {
      const { ProtectedListPage } = await __webpack_require__.e(/* import() */ 1802).then(__webpack_require__.bind(__webpack_require__, 1802));
      return ProtectedListPage;
    },
    to: "/settings/webhooks",
    exact: true
  },
  {
    async Component() {
      const { ProtectedListView } = await __webpack_require__.e(/* import() */ 8624).then(__webpack_require__.bind(__webpack_require__, 78624));
      return ProtectedListView;
    },
    to: "/settings/api-tokens",
    exact: true
  },
  {
    async Component() {
      const { ProtectedCreateView } = await Promise.all(/* import() */[__webpack_require__.e(11), __webpack_require__.e(9705), __webpack_require__.e(1184)]).then(__webpack_require__.bind(__webpack_require__, 21184));
      return ProtectedCreateView;
    },
    to: "/settings/api-tokens/create",
    exact: true
  },
  {
    async Component() {
      const { ProtectedEditView } = await Promise.all(/* import() */[__webpack_require__.e(11), __webpack_require__.e(9705), __webpack_require__.e(1339)]).then(__webpack_require__.bind(__webpack_require__, 71339));
      return ProtectedEditView;
    },
    to: "/settings/api-tokens/:id",
    exact: true
  },
  {
    async Component() {
      const { ProtectedCreateView } = await Promise.all(/* import() */[__webpack_require__.e(11), __webpack_require__.e(9705), __webpack_require__.e(4302)]).then(__webpack_require__.bind(__webpack_require__, 4302));
      return ProtectedCreateView;
    },
    to: "/settings/transfer-tokens/create",
    exact: true
  },
  {
    async Component() {
      const { ProtectedListView } = await __webpack_require__.e(/* import() */ 1248).then(__webpack_require__.bind(__webpack_require__, 61248));
      return ProtectedListView;
    },
    to: "/settings/transfer-tokens",
    exact: true
  },
  {
    async Component() {
      const { ProtectedEditView } = await Promise.all(/* import() */[__webpack_require__.e(11), __webpack_require__.e(9705), __webpack_require__.e(5706)]).then(__webpack_require__.bind(__webpack_require__, 15706));
      return ProtectedEditView;
    },
    to: "/settings/transfer-tokens/:id",
    exact: true
  },
  {
    async Component() {
      const { PurchaseAuditLogs } = await __webpack_require__.e(/* import() */ 6323).then(__webpack_require__.bind(__webpack_require__, 96323));
      return PurchaseAuditLogs;
    },
    to: "/settings/purchase-audit-logs",
    exact: true
  },
  {
    async Component() {
      const { PurchaseReviewWorkflows } = await __webpack_require__.e(/* import() */ 5904).then(__webpack_require__.bind(__webpack_require__, 5904));
      return PurchaseReviewWorkflows;
    },
    to: "/settings/purchase-review-workflows",
    exact: true
  },
  {
    async Component() {
      const { PurchaseSingleSignOn } = await __webpack_require__.e(/* import() */ 8848).then(__webpack_require__.bind(__webpack_require__, 98848));
      return PurchaseSingleSignOn;
    },
    to: "/settings/purchase-single-sign-on",
    exact: true
  }
];
const DIMENSION = 750;
const SIZE = 100;
const ACCEPTED_FORMAT = ["image/jpeg", "image/png", "image/svg+xml"];
const FILE_FORMAT_ERROR_MESSAGE = {
  id: "Settings.application.customization.modal.upload.error-format",
  defaultMessage: "Wrong format uploaded (accepted formats only: jpeg, jpg, png, svg)."
};
const FILE_SIZING_ERROR_MESSAGE = {
  id: "Settings.application.customization.modal.upload.error-size",
  defaultMessage: "The file uploaded is too large (max dimension: {dimension}x{dimension}, max file size: {size}KB)"
};
const parseFileMetadatas = async (file) => {
  const isFormatAuthorized = ACCEPTED_FORMAT.includes(file.type);
  if (!isFormatAuthorized) {
    throw new ParsingFileError("File format", FILE_FORMAT_ERROR_MESSAGE);
  }
  const fileDimensions = await new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        resolve({ width: img.width, height: img.height });
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
  const areDimensionsAuthorized = fileDimensions.width <= DIMENSION && fileDimensions.height <= DIMENSION;
  if (!areDimensionsAuthorized) {
    throw new ParsingFileError("File sizing", FILE_SIZING_ERROR_MESSAGE);
  }
  const asset = {
    ext: file.name.split(".").pop(),
    size: file.size / 1e3,
    name: file.name,
    url: URL.createObjectURL(file),
    rawFile: file,
    width: fileDimensions.width,
    height: fileDimensions.height
  };
  const isSizeAuthorized = asset.size <= SIZE;
  if (!isSizeAuthorized) {
    throw new ParsingFileError("File sizing", FILE_SIZING_ERROR_MESSAGE);
  }
  return asset;
};
class ParsingFileError extends Error {
  displayMessage;
  constructor(message, displayMessage, options) {
    super(message, options);
    this.displayMessage = displayMessage;
  }
}
const [LogoInputContextProvider, useLogoInputContext] = (0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_57__/* .createContext */ .q)("LogoInput");
const LogoInput = ({
  canUpdate,
  customLogo,
  defaultLogo,
  hint,
  label,
  onChangeLogo
}) => {
  const [localImage, setLocalImage] = react__WEBPACK_IMPORTED_MODULE_1__.useState();
  const [currentStep, setCurrentStep] = react__WEBPACK_IMPORTED_MODULE_1__.useState();
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .A)();
  const handleClose = () => {
    setLocalImage(void 0);
    setCurrentStep(void 0);
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
    LogoInputContextProvider,
    {
      setLocalImage,
      localImage,
      goToStep: setCurrentStep,
      onClose: handleClose,
      children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _strapi_design_system__WEBPACK_IMPORTED_MODULE_11__/* .CarouselInput */ .Z,
          {
            label,
            selectedSlide: 0,
            hint,
            previousLabel: "",
            nextLabel: "",
            onNext: () => {
            },
            onPrevious: () => {
            },
            secondaryLabel: customLogo?.name || "logo.png",
            actions: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_12__/* .CarouselActions */ .O, { children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _strapi_design_system__WEBPACK_IMPORTED_MODULE_21__/* .IconButton */ .K,
                {
                  disabled: !canUpdate,
                  onClick: () => setCurrentStep("upload"),
                  label: formatMessage({
                    id: "Settings.application.customization.carousel.change-action",
                    defaultMessage: "Change logo"
                  }),
                  icon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_54__/* ["default"] */ .A, {})
                }
              ),
              customLogo?.url && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _strapi_design_system__WEBPACK_IMPORTED_MODULE_21__/* .IconButton */ .K,
                {
                  disabled: !canUpdate,
                  onClick: () => onChangeLogo(null),
                  label: formatMessage({
                    id: "Settings.application.customization.carousel.reset-action",
                    defaultMessage: "Reset logo"
                  }),
                  icon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_55__/* ["default"] */ .A, {})
                }
              )
            ] }),
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _strapi_design_system__WEBPACK_IMPORTED_MODULE_13__/* .CarouselSlide */ .o,
              {
                label: formatMessage({
                  id: "Settings.application.customization.carousel-slide.label",
                  defaultMessage: "Logo slide"
                }),
                children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .a,
                  {
                    maxHeight: "40%",
                    maxWidth: "40%",
                    as: "img",
                    src: customLogo?.url || defaultLogo,
                    alt: formatMessage({
                      id: "Settings.application.customization.carousel.title",
                      defaultMessage: "Logo"
                    })
                  }
                )
              }
            )
          }
        ),
        currentStep ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_27__/* .ModalLayout */ .k, { labelledBy: "modal", onClose: handleClose, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_28__/* .ModalHeader */ .r, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_35__/* .Typography */ .o, { fontWeight: "bold", as: "h2", id: "modal", children: formatMessage(
            currentStep === "upload" ? {
              id: "Settings.application.customization.modal.upload",
              defaultMessage: "Upload logo"
            } : {
              id: "Settings.application.customization.modal.pending",
              defaultMessage: "Pending logo"
            }
          ) }) }),
          currentStep === "upload" ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AddLogoDialog, {}) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PendingLogoDialog, { onChangeLogo })
        ] }) : null
      ]
    }
  );
};
const AddLogoDialog = () => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .A)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_33__/* .TabGroup */ .f,
    {
      label: formatMessage({
        id: "Settings.application.customization.modal.tab.label",
        defaultMessage: "How do you want to upload your assets?"
      }),
      variant: "simple",
      children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .a, { paddingLeft: 8, paddingRight: 8, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_31__/* .Tabs */ .t, { children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_31__/* .Tab */ .o, { children: formatMessage({
              id: "Settings.application.customization.modal.upload.from-computer",
              defaultMessage: "From computer"
            }) }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_31__/* .Tab */ .o, { children: formatMessage({
              id: "Settings.application.customization.modal.upload.from-url",
              defaultMessage: "From url"
            }) })
          ] }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_14__/* .Divider */ .c, {})
        ] }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_32__/* .TabPanels */ .T, { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_32__/* .TabPanel */ .K, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ComputerForm, {}) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_32__/* .TabPanel */ .K, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(URLForm, {}) })
        ] })
      ]
    }
  );
};
const URLForm = () => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .A)();
  const [logoUrl, setLogoUrl] = react__WEBPACK_IMPORTED_MODULE_1__.useState("");
  const [error, setError] = react__WEBPACK_IMPORTED_MODULE_1__.useState();
  const { setLocalImage, goToStep, onClose } = useLogoInputContext("URLForm");
  const handleChange = (e) => {
    setLogoUrl(e.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const url = data.get("logo-url");
    if (!url) {
      return;
    }
    try {
      const res = await axios__WEBPACK_IMPORTED_MODULE_59__/* ["default"] */ .A.get(url.toString(), { responseType: "blob", timeout: 8e3 });
      const file = new File([res.data], res.config.url ?? "", {
        type: res.headers["content-type"]
      });
      const asset = await parseFileMetadatas(file);
      setLocalImage(asset);
      goToStep("pending");
    } catch (err) {
      if (err instanceof axios__WEBPACK_IMPORTED_MODULE_58__/* .AxiosError */ .pe) {
        setError(
          formatMessage({
            id: "Settings.application.customization.modal.upload.error-network",
            defaultMessage: "Network error"
          })
        );
      } else if (err instanceof ParsingFileError) {
        setError(formatMessage(err.displayMessage, { size: SIZE, dimension: DIMENSION }));
      } else {
        throw err;
      }
    }
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", { onSubmit: handleSubmit, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .a, { paddingLeft: 8, paddingRight: 8, paddingTop: 6, paddingBottom: 6, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _strapi_design_system__WEBPACK_IMPORTED_MODULE_34__/* .TextInput */ .k,
      {
        label: formatMessage({
          id: "Settings.application.customization.modal.upload.from-url.input-label",
          defaultMessage: "URL"
        }),
        error,
        onChange: handleChange,
        value: logoUrl,
        name: "logo-url"
      }
    ) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _strapi_design_system__WEBPACK_IMPORTED_MODULE_29__/* .ModalFooter */ .j,
      {
        startActions: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .$, { onClick: onClose, variant: "tertiary", children: formatMessage({ id: "app.components.Button.cancel", defaultMessage: "Cancel" }) }),
        endActions: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .$, { type: "submit", children: formatMessage({
          id: "Settings.application.customization.modal.upload.next",
          defaultMessage: "Next"
        }) })
      }
    )
  ] });
};
const ComputerForm = () => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .A)();
  const [dragOver, setDragOver] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
  const [fileError, setFileError] = react__WEBPACK_IMPORTED_MODULE_1__.useState();
  const inputRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);
  const id = react__WEBPACK_IMPORTED_MODULE_1__.useId();
  const { setLocalImage, goToStep, onClose } = useLogoInputContext("ComputerForm");
  const handleDragEnter = () => setDragOver(true);
  const handleDragLeave = () => setDragOver(false);
  const handleClick = (e) => {
    e.preventDefault();
    inputRef.current.click();
  };
  const handleChange = async () => {
    handleDragLeave();
    if (!inputRef.current.files) {
      return;
    }
    const [file] = inputRef.current.files;
    try {
      const asset = await parseFileMetadatas(file);
      setLocalImage(asset);
      goToStep("pending");
    } catch (err) {
      if (err instanceof ParsingFileError) {
        setFileError(formatMessage(err.displayMessage, { size: SIZE, dimension: DIMENSION }));
        inputRef.current.focus();
      } else {
        throw err;
      }
    }
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("form", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .a, { paddingLeft: 8, paddingRight: 8, paddingTop: 6, paddingBottom: 6, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_15__/* .Field */ .D, { name: id, error: fileError, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_30__/* .Flex */ .s, { direction: "column", alignItems: "stretch", gap: 2, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
        _strapi_design_system__WEBPACK_IMPORTED_MODULE_30__/* .Flex */ .s,
        {
          paddingTop: 9,
          paddingBottom: 7,
          hasRadius: true,
          justifyContent: "center",
          direction: "column",
          background: dragOver ? "primary100" : "neutral100",
          borderColor: dragOver ? "primary500" : fileError ? "danger600" : "neutral300",
          borderStyle: "dashed",
          borderWidth: "1px",
          position: "relative",
          onDragEnter: handleDragEnter,
          onDragLeave: handleDragLeave,
          children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _strapi_design_system__WEBPACK_IMPORTED_MODULE_20__/* .Icon */ .I,
              {
                color: "primary600",
                width: (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_36__/* .pxToRem */ .a8)(60),
                height: (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_36__/* .pxToRem */ .a8)(60),
                as: _strapi_icons__WEBPACK_IMPORTED_MODULE_53__/* ["default"] */ .A,
                "aria-hidden": true
              }
            ),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .a, { paddingTop: 3, paddingBottom: 5, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_35__/* .Typography */ .o, { variant: "delta", as: "label", htmlFor: id, children: formatMessage({
              id: "Settings.application.customization.modal.upload.drag-drop",
              defaultMessage: "Drag and Drop here or"
            }) }) }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              FileInput,
              {
                accept: ACCEPTED_FORMAT.join(", "),
                type: "file",
                name: "files",
                tabIndex: -1,
                onChange: handleChange,
                ref: inputRef,
                id
              }
            ),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .$, { type: "button", onClick: handleClick, children: formatMessage({
              id: "Settings.application.customization.modal.upload.cta.browse",
              defaultMessage: "Browse files"
            }) }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .a, { paddingTop: 6, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_35__/* .Typography */ .o, { variant: "pi", textColor: "neutral600", children: formatMessage(
              {
                id: "Settings.application.customization.modal.upload.file-validation",
                defaultMessage: "Max dimension: {dimension}x{dimension}, Max size: {size}KB"
              },
              { size: SIZE, dimension: DIMENSION }
            ) }) })
          ]
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_17__/* .FieldError */ .b, {})
    ] }) }) }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _strapi_design_system__WEBPACK_IMPORTED_MODULE_29__/* .ModalFooter */ .j,
      {
        startActions: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .$, { onClick: onClose, variant: "tertiary", children: formatMessage({
          id: "Settings.application.customization.modal.cancel",
          defaultMessage: "Cancel"
        }) })
      }
    )
  ] });
};
const FileInput = (0,styled_components__WEBPACK_IMPORTED_MODULE_56__/* ["default"] */ .Ay)((0,_strapi_design_system__WEBPACK_IMPORTED_MODULE_16__/* .FieldInput */ .T))`
  opacity: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;
const PendingLogoDialog = ({ onChangeLogo }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .A)();
  const { localImage, setLocalImage, goToStep, onClose } = useLogoInputContext("PendingLogoDialog");
  const handleGoBack = () => {
    setLocalImage(void 0);
    goToStep("upload");
  };
  const handleUpload = () => {
    if (localImage) {
      onChangeLogo(localImage);
    }
    onClose();
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .a, { paddingLeft: 8, paddingRight: 8, paddingTop: 6, paddingBottom: 6, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_30__/* .Flex */ .s, { justifyContent: "space-between", paddingBottom: 6, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_30__/* .Flex */ .s, { direction: "column", alignItems: "flex-start", children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_35__/* .Typography */ .o, { variant: "pi", fontWeight: "bold", children: formatMessage({
            id: "Settings.application.customization.modal.pending.title",
            defaultMessage: "Logo ready to upload"
          }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_35__/* .Typography */ .o, { variant: "pi", textColor: "neutral500", children: formatMessage({
            id: "Settings.application.customization.modal.pending.subtitle",
            defaultMessage: "Manage the chosen logo before uploading it"
          }) })
        ] }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .$, { onClick: handleGoBack, variant: "secondary", children: formatMessage({
          id: "Settings.application.customization.modal.pending.choose-another",
          defaultMessage: "Choose another logo"
        }) })
      ] }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .a, { maxWidth: (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_36__/* .pxToRem */ .a8)(180), children: localImage?.url ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImageCardAsset, { asset: localImage }) : null })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _strapi_design_system__WEBPACK_IMPORTED_MODULE_29__/* .ModalFooter */ .j,
      {
        startActions: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .$, { onClick: onClose, variant: "tertiary", children: formatMessage({
          id: "Settings.application.customization.modal.cancel",
          defaultMessage: "Cancel"
        }) }),
        endActions: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .$, { onClick: handleUpload, children: formatMessage({
          id: "Settings.application.customization.modal.pending.upload",
          defaultMessage: "Upload logo"
        }) })
      }
    )
  ] });
};
const ImageCardAsset = ({ asset }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .A)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .Card */ .Z, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_9__/* .CardHeader */ .a, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .CardAsset */ .P, { size: "S", src: asset.url }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .CardBody */ .b, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .CardContent */ .W, { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_10__/* .CardTitle */ .Z, { children: asset.name }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_10__/* .CardSubtitle */ .j, { children: `${asset.ext?.toUpperCase()} - ${asset.width}\u2715${asset.height}` })
      ] }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .CardBadge */ .S, { children: formatMessage({
        id: "Settings.application.customization.modal.pending.card-badge",
        defaultMessage: "image"
      }) })
    ] })
  ] });
};
const AdminSeatInfoCE = () => null;
const ApplicationInfoPage = () => {
  const { trackUsage } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_36__/* .useTracking */ .z1)();
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .A)();
  const { logos: serverLogos, updateProjectSettings } = (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_41__.u)("ApplicationInfoPage");
  const [logos, setLogos] = react__WEBPACK_IMPORTED_MODULE_1__.useState({ menu: serverLogos.menu, auth: serverLogos.auth });
  const { settings } = (0,react_redux__WEBPACK_IMPORTED_MODULE_43__/* .useSelector */ .d4)(_AuthenticatedApp_uHd_MPEB_mjs__WEBPACK_IMPORTED_MODULE_44__.s);
  const {
    communityEdition,
    latestStrapiReleaseTag,
    nodeVersion,
    shouldUpdateStrapi,
    strapiVersion
  } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_36__/* .useAppInfo */ .Xe)();
  const AdminSeatInfo = (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_41__.p)(
    AdminSeatInfoCE,
    async () => (await __webpack_require__.e(/* import() */ 3220).then(__webpack_require__.bind(__webpack_require__, 93220))).AdminSeatInfoEE
  );
  const {
    allowedActions: { canRead, canUpdate }
  } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_36__/* .useRBAC */ .ec)(settings ? settings["project-settings"] : {});
  (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_36__/* .useFocusWhenNavigate */ .L4)();
  const handleSubmit = (e) => {
    e.preventDefault();
    updateProjectSettings({
      authLogo: logos.auth.custom ?? null,
      menuLogo: logos.menu.custom ?? null
    });
  };
  const handleChangeLogo = (logo) => (newLogo) => {
    if (newLogo === null) {
      trackUsage("didClickResetLogo", {
        logo
      });
    }
    setLogos((prev) => ({
      ...prev,
      [logo]: {
        ...prev[logo],
        custom: newLogo
      }
    }));
  };
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    setLogos({
      menu: serverLogos.menu,
      auth: serverLogos.auth
    });
  }, [serverLogos]);
  if (!AdminSeatInfo) {
    return null;
  }
  const isSaveDisabled = logos.auth.custom === serverLogos.auth.custom && logos.menu.custom === serverLogos.menu.custom;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_22__/* .Layout */ .P, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_36__/* .SettingsPageTitle */ .x7,
      {
        name: formatMessage({
          id: "Settings.application.header",
          defaultMessage: "Application"
        })
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_26__/* .Main */ .g, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _strapi_design_system__WEBPACK_IMPORTED_MODULE_24__/* .HeaderLayout */ .Q,
        {
          title: formatMessage({
            id: "Settings.application.title",
            defaultMessage: "Overview"
          }),
          subtitle: formatMessage({
            id: "Settings.application.description",
            defaultMessage: "Administration panel\u2019s global information"
          }),
          primaryAction: canUpdate && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .$, { disabled: isSaveDisabled, type: "submit", startIcon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_50__/* ["default"] */ .A, {}), children: formatMessage({ id: "global.save", defaultMessage: "Save" }) })
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_23__/* .ContentLayout */ .s, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_30__/* .Flex */ .s, { direction: "column", alignItems: "stretch", gap: 6, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
          _strapi_design_system__WEBPACK_IMPORTED_MODULE_30__/* .Flex */ .s,
          {
            direction: "column",
            alignItems: "stretch",
            gap: 4,
            hasRadius: true,
            background: "neutral0",
            shadow: "tableShadow",
            paddingTop: 6,
            paddingBottom: 6,
            paddingRight: 7,
            paddingLeft: 7,
            children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_35__/* .Typography */ .o, { variant: "delta", as: "h3", children: formatMessage({
                id: "global.details",
                defaultMessage: "Details"
              }) }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_18__/* .Grid */ .x, { gap: 5, as: "dl", children: [
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_19__/* .GridItem */ .E, { col: 6, s: 12, children: [
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_35__/* .Typography */ .o, { variant: "sigma", textColor: "neutral600", as: "dt", children: formatMessage({
                    id: "Settings.application.strapiVersion",
                    defaultMessage: "strapi version"
                  }) }),
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_30__/* .Flex */ .s, { gap: 3, direction: "column", alignItems: "start", as: "dd", children: [
                    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_35__/* .Typography */ .o, { children: [
                      "v",
                      strapiVersion
                    ] }),
                    shouldUpdateStrapi && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _strapi_design_system__WEBPACK_IMPORTED_MODULE_25__/* .Link */ .N,
                      {
                        href: `https://github.com/strapi/strapi/releases/tag/${latestStrapiReleaseTag}`,
                        endIcon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_51__/* ["default"] */ .A, {}),
                        children: formatMessage({
                          id: "Settings.application.link-upgrade",
                          defaultMessage: "Upgrade your admin panel"
                        })
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_19__/* .GridItem */ .E, { col: 6, s: 12, children: [
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_35__/* .Typography */ .o, { variant: "sigma", textColor: "neutral600", as: "dt", children: formatMessage({
                    id: "Settings.application.edition-title",
                    defaultMessage: "current plan"
                  }) }),
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_30__/* .Flex */ .s, { gap: 3, direction: "column", alignItems: "start", as: "dd", children: [
                    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_35__/* .Typography */ .o, { children: formatMessage(
                      {
                        id: "Settings.application.ee-or-ce",
                        defaultMessage: "{communityEdition, select, true {Community Edition} other {Enterprise Edition}}"
                      },
                      { communityEdition }
                    ) }),
                    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_25__/* .Link */ .N, { href: "https://strapi.io/pricing-self-hosted", endIcon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_51__/* ["default"] */ .A, {}), children: formatMessage({
                      id: "Settings.application.link-pricing",
                      defaultMessage: "See all pricing plans"
                    }) })
                  ] })
                ] }),
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_19__/* .GridItem */ .E, { col: 6, s: 12, children: [
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_35__/* .Typography */ .o, { variant: "sigma", textColor: "neutral600", as: "dt", children: formatMessage({
                    id: "Settings.application.node-version",
                    defaultMessage: "node version"
                  }) }),
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_35__/* .Typography */ .o, { as: "dd", children: nodeVersion })
                ] }),
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AdminSeatInfo, {})
              ] })
            ]
          }
        ),
        canRead && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
          _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .a,
          {
            hasRadius: true,
            background: "neutral0",
            shadow: "tableShadow",
            paddingTop: 6,
            paddingBottom: 6,
            paddingRight: 7,
            paddingLeft: 7,
            children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_35__/* .Typography */ .o, { variant: "delta", as: "h3", children: formatMessage({
                id: "Settings.application.customization",
                defaultMessage: "Customization"
              }) }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_35__/* .Typography */ .o, { variant: "pi", textColor: "neutral600", children: formatMessage(
                {
                  id: "Settings.application.customization.size-details",
                  defaultMessage: "Max dimension: {dimension}\xD7{dimension}, Max file size: {size}KB"
                },
                { dimension: DIMENSION, size: SIZE }
              ) }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_18__/* .Grid */ .x, { paddingTop: 4, gap: 4, children: [
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_19__/* .GridItem */ .E, { col: 6, s: 12, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  LogoInput,
                  {
                    canUpdate,
                    customLogo: logos.menu.custom,
                    defaultLogo: logos.menu.default,
                    hint: formatMessage({
                      id: "Settings.application.customization.menu-logo.carousel-hint",
                      defaultMessage: "Replace the logo in the main navigation"
                    }),
                    label: formatMessage({
                      id: "Settings.application.customization.carousel.menu-logo.title",
                      defaultMessage: "Menu logo"
                    }),
                    onChangeLogo: handleChangeLogo("menu")
                  }
                ) }),
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_19__/* .GridItem */ .E, { col: 6, s: 12, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  LogoInput,
                  {
                    canUpdate,
                    customLogo: logos.auth.custom,
                    defaultLogo: logos.auth.default,
                    hint: formatMessage({
                      id: "Settings.application.customization.auth-logo.carousel-hint",
                      defaultMessage: "Replace the logo in the authentication pages"
                    }),
                    label: formatMessage({
                      id: "Settings.application.customization.carousel.auth-logo.title",
                      defaultMessage: "Auth logo"
                    }),
                    onChangeLogo: handleChangeLogo("auth")
                  }
                ) })
              ] })
            ]
          }
        )
      ] }) })
    ] }) })
  ] });
};
const SettingsPage = () => {
  const { settingId } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_40__/* .useParams */ .g)();
  const { settings } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_36__/* .useStrapiApp */ .vD)();
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .A)();
  const { isLoading, menu } = useSettingsMenu();
  const routes = (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_41__.p)(
    ROUTES_CE,
    async () => (await __webpack_require__.e(/* import() */ 2856).then(__webpack_require__.bind(__webpack_require__, 2856))).ROUTES_EE,
    {
      combine(ceRoutes, eeRoutes) {
        return [...ceRoutes, ...eeRoutes];
      },
      defaultValue: []
    }
  );
  const adminRoutes = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => {
    return makeUniqueRoutes(routes).map(
      ({ to, Component, exact }) => (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_41__.d)(Component, to, exact)
    );
  }, [routes]);
  const pluginsRoutes = Object.values(settings).flatMap((section) => {
    const { links } = section;
    return links.map((link) => (0,_index_dMS_26Ft_mjs__WEBPACK_IMPORTED_MODULE_41__.d)(link.Component, link.to, link.exact || false));
  });
  if (isLoading) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_36__/* .LoadingIndicatorPage */ .Bl, {});
  }
  if (!settingId) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_40__/* .Redirect */ .rd, { to: "/settings/application-infos" });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_22__/* .Layout */ .P, { sideNav: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SettingsNav, { menu }), children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      react_helmet__WEBPACK_IMPORTED_MODULE_37__/* .Helmet */ .m,
      {
        title: formatMessage({
          id: "global.settings",
          defaultMessage: "Settings"
        })
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_40__/* .Switch */ .dO, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_40__/* .Route */ .qh, { path: "/settings/application-infos", component: ApplicationInfoPage, exact: true }),
      adminRoutes,
      pluginsRoutes
    ] })
  ] });
};
const makeUniqueRoutes = (routes) => routes.filter(
  (route, index, refArray) => refArray.findIndex((obj) => obj.to === route.to) === index
);



/***/ }

}]);