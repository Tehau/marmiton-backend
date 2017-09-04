'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.logger = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _winston = require('winston');

var _winston2 = _interopRequireDefault(_winston);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ************************************* */
/* ********        CLASS        ******** */
/* ************************************* */

var Logger = function () {
    function Logger() {
        (0, _classCallCheck3.default)(this, Logger);

        var logger = new _winston2.default.Logger({
            transports: [new _winston2.default.transports.Console({
                colorize: true,
                level: 'debug'
            }), new _winston2.default.transports.File({
                name: 'logs',
                filename: 'server.log',
                json: false,
                level: 'debug'
            })],
            exceptionHandlers: [new _winston2.default.transports.Console({
                colorize: true,
                level: 'debug'
            }), new _winston2.default.transports.File({
                name: 'exceptions',
                filename: 'exceptions.log',
                json: false,
                level: 'debug'
            })]
        });
        this.info = logger.info;
        this.debug = logger.debug;
        this.error = logger.error;
        this.warn = logger.warn;
    }

    (0, _createClass3.default)(Logger, [{
        key: 'connectLogger',
        value: function connectLogger() {
            return function (req, res, next) {

                // Wait for finish to log
                res.on('finish', function () {
                    var logFunction = logger.info;

                    // Select log function by status code
                    if (res.statusCode) {
                        if (res.statusCode >= 300) logFunction = logger.warn;
                        if (res.statusCode >= 400) logFunction = logger.error;
                    }

                    // Template
                    var template = req.method + ' ' + req.originalUrl + ' - ' + res.statusCode;

                    // Log
                    logFunction(template);
                });

                // Call next !
                next();
            };
        }
    }]);
    return Logger;
}();

/* ************************************* */
/* ********        EXPORTS      ******** */
/* ************************************* */

/* ************************************* */
/* ********       IMPORT        ******** */
/* ************************************* */


var logger = new Logger();
exports.logger = logger;