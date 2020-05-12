"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ajax;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ajax(url) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "GET";
  return new Promise(function (resolve, reject) {
    var promise;

    if (type === "GET") {
      var dataStr = "";
      Object.keys(data).forEach(function (key) {
        dataStr += key + "=" + data[key] + "&";
      });

      if (dataStr !== "") {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf("&"));
        url = url + "?" + dataStr;
      } // 发请求GET


      promise = _axios["default"].get(url);
    } else {
      // 发请求POST
      promise = _axios["default"].post(url, data);
    }

    promise.then(function (response) {
      resolve(response.data);
    }, function (rejected) {
      reject(rejected);
    });
  });
}