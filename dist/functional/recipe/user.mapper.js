"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.userMapper = undefined;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ************************************* */
/* ********       IMPORT        ******** */
/* ************************************* */

/* ************************************* */
/* ********        CLASS        ******** */
/* ************************************* */
var UserMapper = function () {
    function UserMapper() {
        (0, _classCallCheck3.default)(this, UserMapper);
    }

    (0, _createClass3.default)(UserMapper, [{
        key: "formatResponse",
        value: function formatResponse(userInstance) {
            return {
                id: userInstance._id,
                userName: userInstance.userName,
                firstName: userInstance.firstName,
                lastName: userInstance.lastName,
                role: userInstance.role
            };
        }
    }, {
        key: "formatArrayResponse",
        value: function formatArrayResponse(arryUserInstance) {
            if (arryUserInstance) {
                var list = [];
                arryUserInstance.forEach(function (userInstance) {
                    list.push(this.formatResponse(userInstance));
                }.bind(this));

                return list;
            } else {
                return arryUserInstance;
            }
        }
    }]);
    return UserMapper;
}();

/* ************************************* */
/* ********        EXPORTS      ******** */
/* ************************************* */

var userMapper = new UserMapper();
exports.userMapper = userMapper;