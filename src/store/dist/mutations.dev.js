"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mutationTypes = require("./mutation-types");

var _RECEIVE_ADDRESS$RECE;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = (_RECEIVE_ADDRESS$RECE = {}, _defineProperty(_RECEIVE_ADDRESS$RECE, _mutationTypes.RECEIVE_ADDRESS, function (state, _ref) {
  var address = _ref.address;
  state.address = address;
}), _defineProperty(_RECEIVE_ADDRESS$RECE, _mutationTypes.RECEIVE_CATEGORYS, function (state, _ref2) {
  var categorys = _ref2.categorys;
  state.categorys = categorys;
}), _defineProperty(_RECEIVE_ADDRESS$RECE, _mutationTypes.RECEIVE_SHOPS, function (state, _ref3) {
  var shops = _ref3.shops;
  state.shops = shops;
}), _RECEIVE_ADDRESS$RECE);

exports["default"] = _default;