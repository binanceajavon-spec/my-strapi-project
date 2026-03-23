"use strict";
(self["webpackChunkmy_strapi_project"] = self["webpackChunkmy_strapi_project"] || []).push([[2856],{

/***/ 2856
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ROUTES_EE: () => (/* binding */ ROUTES_EE)
/* harmony export */ });
const ROUTES_EE = [
  ...window.strapi.features.isEnabled(window.strapi.features.AUDIT_LOGS) ? [
    {
      async Component() {
        const { ProtectedListPage } = await __webpack_require__.e(/* import() */ 2282).then(__webpack_require__.bind(__webpack_require__, 52282));
        return ProtectedListPage;
      },
      to: "/settings/audit-logs",
      exact: true
    }
  ] : [],
  ...window.strapi.features.isEnabled(window.strapi.features.REVIEW_WORKFLOWS) ? [
    {
      async Component() {
        const { ProtectedReviewWorkflowsPage } = await Promise.all(/* import() */[__webpack_require__.e(2759), __webpack_require__.e(3151)]).then(__webpack_require__.bind(__webpack_require__, 63151));
        return ProtectedReviewWorkflowsPage;
      },
      to: "/settings/review-workflows",
      exact: true
    },
    {
      async Component() {
        const { ReviewWorkflowsCreatePage } = await Promise.all(/* import() */[__webpack_require__.e(2759), __webpack_require__.e(228), __webpack_require__.e(5730)]).then(__webpack_require__.bind(__webpack_require__, 20492));
        return ReviewWorkflowsCreatePage;
      },
      to: "/settings/review-workflows/create",
      exact: true
    },
    {
      async Component() {
        const { ReviewWorkflowsEditPage } = await Promise.all(/* import() */[__webpack_require__.e(2759), __webpack_require__.e(228), __webpack_require__.e(2948)]).then(__webpack_require__.bind(__webpack_require__, 92948));
        return ReviewWorkflowsEditPage;
      },
      to: "/settings/review-workflows/:workflowId",
      exact: true
    }
  ] : [],
  ...window.strapi.features.isEnabled(window.strapi.features.SSO) ? [
    {
      async Component() {
        const { ProtectedSSO } = await __webpack_require__.e(/* import() */ 8793).then(__webpack_require__.bind(__webpack_require__, 78793));
        return ProtectedSSO;
      },
      to: "/settings/single-sign-on",
      exact: true
    }
  ] : []
];



/***/ }

}]);