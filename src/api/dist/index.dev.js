"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reqShops = exports.reqFoodTypes = exports.reqAddress = void 0;

var _ajax = _interopRequireDefault(require("./ajax"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 接口函数,返回值promise
var reqAddress = function reqAddress(geohash) {
  return (0, _ajax["default"])("/position/".concat(geohash));
};

exports.reqAddress = reqAddress;

var reqFoodTypes = function reqFoodTypes() {
  return (0, _ajax["default"])('/index_category');
};

exports.reqFoodTypes = reqFoodTypes;

var reqShops = function reqShops(latitude, longitude) {
  return (0, _ajax["default"])('/shops', {
    latitude: latitude,
    longitude: longitude
  });
};

exports.reqShops = reqShops;