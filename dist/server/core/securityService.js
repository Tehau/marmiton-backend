'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.securityService = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

var _logger = require('../logger/logger');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Variables

/* ************************************* */
/* ********       REQUIRE       ******** */
/* ************************************* */
var lengthRandomBytes = 30;
var iterations = 10000;
var keylen = 50;
var digest = 'sha512';

/* ************************************* */
/* ********        CLASS        ******** */
/* ************************************* */

var SecurityService = function () {
    function SecurityService() {
        (0, _classCallCheck3.default)(this, SecurityService);
    }

    (0, _createClass3.default)(SecurityService, [{
        key: 'generateHash',
        value: function generateHash(text, salt) {
            var _this = this;

            return new Promise(function (resolve, reject) {
                _crypto2.default.pbkdf2(text, salt, iterations, keylen, digest, function () {
                    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(err, hash) {
                        return _regenerator2.default.wrap(function _callee$(_context) {
                            while (1) {
                                switch (_context.prev = _context.next) {
                                    case 0:
                                        resolve(hash.toString('hex'));

                                    case 1:
                                    case 'end':
                                        return _context.stop();
                                }
                            }
                        }, _callee, _this);
                    }));

                    return function (_x, _x2) {
                        return _ref.apply(this, arguments);
                    };
                }());
            });
        }
    }, {
        key: 'compare',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(text, hash, salt) {
                var hashFromPass;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return this.generateHash(text, salt);

                            case 2:
                                hashFromPass = _context2.sent;

                                if (!(hashFromPass.toString('hex') === hash)) {
                                    _context2.next = 9;
                                    break;
                                }

                                _context2.next = 6;
                                return Promise.resolve();

                            case 6:
                                return _context2.abrupt('return', _context2.sent);

                            case 9:
                                _context2.next = 11;
                                return Promise.reject();

                            case 11:
                                return _context2.abrupt('return', _context2.sent);

                            case 12:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function compare(_x3, _x4, _x5) {
                return _ref2.apply(this, arguments);
            }

            return compare;
        }()
    }, {
        key: 'generateSalt',
        get: function get() {
            return _crypto2.default.randomBytes(lengthRandomBytes).toString('hex');
        }
    }]);
    return SecurityService;
}();

/* ************************************* */
/* ********        EXPORTS      ******** */
/* ************************************* */

var securityService = new SecurityService();
exports.securityService = securityService;