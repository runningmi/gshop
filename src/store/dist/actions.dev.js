"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _api = require("../api");

var _mutationTypes = require("./mutation-types");

var _default = {
  getAddress: function getAddress(_ref) {
    var commit, state, geohash, result, address;
    return regeneratorRuntime.async(function getAddress$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            commit = _ref.commit, state = _ref.state;
            geohash = state.latitude + ',' + state.longitude;
            _context.next = 4;
            return regeneratorRuntime.awrap((0, _api.reqAddress)(geohash));

          case 4:
            result = _context.sent;

            if (result.code === 0) {
              address = result.data;
              commit(_mutationTypes.RECEIVE_ADDRESS, {
                address: address
              });
            }

          case 6:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  getCategorys: function getCategorys(_ref2) {
    var commit, result, categorys;
    return regeneratorRuntime.async(function getCategorys$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            commit = _ref2.commit;
            _context2.next = 3;
            return regeneratorRuntime.awrap((0, _api.reqFoodCategorys)());

          case 3:
            result = _context2.sent;

            if (result.code === 0) {
              categorys = result.data;
              commit(_mutationTypes.RECEIVE_CATEGORYS, {
                categorys: categorys
              });
            }

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    });
  },
  getShops: function getShops(_ref3) {
    var commit, state, latitude, longitude, result, shops;
    return regeneratorRuntime.async(function getShops$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            commit = _ref3.commit, state = _ref3.state;
            latitude = state.latitude, longitude = state.longitude;
            _context3.next = 4;
            return regeneratorRuntime.awrap((0, _api.reqShops)(latitude, longitude));

          case 4:
            result = _context3.sent;

            if (result.code === 0) {
              shops = result.data;
              commit(_mutationTypes.RECEIVE_SHOPS, {
                shops: shops
              });
            }

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    });
  }
};
exports["default"] = _default;