"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cache = exports.withData = undefined;

var _withData2 = require("./withData");

var _withData3 = _interopRequireDefault(_withData2);

var _cache2 = require("./cache");

var _cache = _interopRequireWildcard(_cache2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.withData = _withData3.default;
exports.cache = _cache;