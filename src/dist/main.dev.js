"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App"));

var _router = _interopRequireDefault(require("./router"));

var _store = _interopRequireDefault(require("./store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// Vue.config.productionTip = false

/* eslint-disable no-new */
new _vue["default"]({
  el: "#app",
  router: _router["default"],
  render: function render(h) {
    return h(_App["default"]);
  },
  store: _store["default"]
});