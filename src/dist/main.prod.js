"use strict";var _vue=_interopRequireDefault(require("vue")),_App=_interopRequireDefault(require("./App")),_router=_interopRequireDefault(require("./router")),_store=_interopRequireDefault(require("./store"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}new _vue.default({el:"#app",router:_router.default,render:function(e){return e(_App.default)},store:_store.default});