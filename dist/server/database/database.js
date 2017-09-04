'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.dataBase = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _configurationService = require('../core/configurationService');

var _logger = require('../logger/logger');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ************************************* */
/* ********        CLASS        ******** */
/* ************************************* */

var DataBase = function () {
    function DataBase() {
        (0, _classCallCheck3.default)(this, DataBase);
    }

    (0, _createClass3.default)(DataBase, [{
        key: 'init',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _logger.logger.info('[Database] Init database');
                                try {
                                    _mongoose2.default.Promise = global.Promise;

                                    _mongoose2.default.connect(_configurationService.configurationService.getUrl);

                                    _mongoose2.default.connection.on('connected', function () {
                                        _logger.logger.debug('Mongoose connection open to ' + _configurationService.configurationService.getUrl);
                                        return true;
                                    });

                                    // If the connection throws an error
                                    _mongoose2.default.connection.on('error', function (err) {
                                        _logger.logger.error('Mongoose connection error');
                                    });

                                    // When the connection is disconnected
                                    _mongoose2.default.connection.on('disconnected', function () {
                                        _logger.logger.info('Mongoose default connection disconnected');
                                    });

                                    _logger.logger.info('[Database] Init database end');
                                } catch (e) {
                                    _logger.logger.error('[Database] Error while connect to database', e);
                                }

                            case 2:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function init() {
                return _ref.apply(this, arguments);
            }

            return init;
        }()
    }]);
    return DataBase;
}();

/* ************************************* */
/* ********        EXPORTS      ******** */
/* ************************************* */

/* ************************************* */
/* ********       IMPORT        ******** */
/* ************************************* */


var dataBase = new DataBase();
exports.dataBase = dataBase;