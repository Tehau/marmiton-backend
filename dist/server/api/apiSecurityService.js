'use strict';

Object.defineProperty(exports, "__esModule", {
			value: true
});
exports.apiSecurityService = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _expressJwt = require('express-jwt');

var _expressJwt2 = _interopRequireDefault(_expressJwt);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _configurationService = require('../core/configurationService');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ************************************* */
/* ********        CLASS        ******** */
/* ************************************* */
var ApiSecurityService = function () {
			function ApiSecurityService() {
						(0, _classCallCheck3.default)(this, ApiSecurityService);
			}

			(0, _createClass3.default)(ApiSecurityService, [{
						key: 'generateToken',
						value: function () {
									var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(content) {
												return _regenerator2.default.wrap(function _callee$(_context) {
															while (1) {
																		switch (_context.prev = _context.next) {
																					case 0:
																								return _context.abrupt('return', _jsonwebtoken2.default.sign(content, _configurationService.configurationService.getJwtSecret, { expiresIn: '2 days' }));

																					case 1:
																					case 'end':
																								return _context.stop();
																		}
															}
												}, _callee, this);
									}));

									function generateToken(_x) {
												return _ref.apply(this, arguments);
									}

									return generateToken;
						}()
			}, {
						key: 'securityMiddleware',
						value: function securityMiddleware() {
									return (0, _expressJwt2.default)({ secret: _configurationService.configurationService.getJwtSecret }).unless({ path: [_configurationService.configurationService.getUrlPrefix + '/users/login'] });
						}
			}]);
			return ApiSecurityService;
}();

/* ************************************* */
/* ********        EXPORTS      ******** */
/* ************************************* */
/* ************************************* */
/* ********       IMPORT        ******** */
/* ************************************* */


var apiSecurityService = new ApiSecurityService();
exports.apiSecurityService = apiSecurityService;