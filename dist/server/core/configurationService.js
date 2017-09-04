'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.configurationService = exports.ConfigurationService = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ************************************* */
/* ********       REQUIRE       ******** */
/* ************************************* */
// import config from ;

var config = require('../../config.json');
/* ************************************* */
/* ********        CLASS        ******** */
/* ************************************* */

var ConfigurationService = exports.ConfigurationService = function () {
    function ConfigurationService() {
        // console.log(config);

        (0, _classCallCheck3.default)(this, ConfigurationService);
    }

    (0, _createClass3.default)(ConfigurationService, [{
        key: 'isDevelopmentMode',
        value: function isDevelopmentMode() {
            return config['ENV'] === 'development';
        }
    }, {
        key: 'getPort',
        get: function get() {
            return config['SERVER']['GENERAL']['PORT'];
        }
    }, {
        key: 'getJwtSecret',
        get: function get() {
            return config['SERVER']['SECURITY']['JWT_SECRET'];
        }
    }, {
        key: 'getEnv',
        get: function get() {
            return config['ENV'];
        }
    }, {
        key: 'getUrl',
        get: function get() {
            return config['DATABASE']['URL'];
        }
    }, {
        key: 'getUrlPrefix',
        get: function get() {
            return config['URLPREFIX'];
        }
    }]);
    return ConfigurationService;
}();

/* ************************************* */
/* ********        EXPORTS      ******** */
/* ************************************* */

var configurationService = new ConfigurationService();
exports.configurationService = configurationService;