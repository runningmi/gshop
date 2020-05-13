"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reqShops = exports.reqFoodCategorys = exports.reqAddress = void 0;

var _ajax = _interopRequireDefault(require("./ajax"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 接口函数,返回值promise
// mSite
var BASE_URL = "/api";

var reqAddress = function reqAddress(geohash) {
  return (0, _ajax["default"])("".concat(BASE_URL, "/position/").concat(geohash));
};

exports.reqAddress = reqAddress;

var reqFoodCategorys = function reqFoodCategorys() {
  return (0, _ajax["default"])(BASE_URL + '/index_category');
};

exports.reqFoodCategorys = reqFoodCategorys;

var reqShops = function reqShops(latitude, longitude) {
  return (0, _ajax["default"])(BASE_URL + '/shops', {
    latitude: latitude,
    longitude: longitude
  });
};

exports.reqShops = reqShops;