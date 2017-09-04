'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.userModel = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _configurationService = require('../../server/core/configurationService.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ************************************* */
/* ********        CLASS        ******** */
/* ************************************* */

/* ************************************* */
/* ********       IMPORT        ******** */
/* ************************************* */
var UserModel = function UserModel() {
    (0, _classCallCheck3.default)(this, UserModel);

    this.schema = new _mongoose2.default.Schema({
        firstName: String,
        lastName: String,
        userName: String,
        role: {
            type: String,
            enum: _configurationService.configurationService.getRoles
        },
        hash: String,
        salt: String
    });

    this.model = _mongoose2.default.model('User', this.schema);
};

/* ************************************* */
/* ********        EXPORTS      ******** */
/* ************************************* */

var userModel = new UserModel();
exports.userModel = userModel;