'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.userSecurity = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _logger = require('../../server/logger/logger');

var _user = require('./user.service');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ************************************* */
/* ********        CLASS        ******** */
/* ************************************* */

/* ************************************* */
/* ********       IMPORT        ******** */
/* ************************************* */
var UserSecurity = function () {
	function UserSecurity() {
		(0, _classCallCheck3.default)(this, UserSecurity);
	}

	(0, _createClass3.default)(UserSecurity, [{
		key: 'acceptOnlyRoles',
		value: function acceptOnlyRoles(acceptedRoles) {
			var _this = this;

			return function () {
				var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(req, res, next) {
					var user;
					return _regenerator2.default.wrap(function _callee$(_context) {
						while (1) {
							switch (_context.prev = _context.next) {
								case 0:
									if (!req.user) {
										_context.next = 24;
										break;
									}

									_context.prev = 1;
									_context.next = 4;
									return _user.userService.getUser(req.user.id);

								case 4:
									user = _context.sent;

									if (!(user === null)) {
										_context.next = 10;
										break;
									}

									_logger.logger.error('[User Security] User not found in database => Unauthorized');
									res.statusCode = 401;
									res.end();
									return _context.abrupt('return');

								case 10:
									if (!(acceptedRoles.indexOf(user.role) === -1)) {
										_context.next = 16;
										break;
									}

									// Forbidden
									res.statusCode = 403;
									res.end();
									return _context.abrupt('return');

								case 16:
									next();

								case 17:
									_context.next = 22;
									break;

								case 19:
									_context.prev = 19;
									_context.t0 = _context['catch'](1);

									console.log('NO', _context.t0);

								case 22:
									_context.next = 27;
									break;

								case 24:
									// Forbidden
									res.statusCode = 403;
									res.end();
									return _context.abrupt('return');

								case 27:
								case 'end':
									return _context.stop();
							}
						}
					}, _callee, _this, [[1, 19]]);
				}));

				return function (_x, _x2, _x3) {
					return _ref.apply(this, arguments);
				};
			}();
		}
	}]);
	return UserSecurity;
}();

/* ************************************* */
/* ********        EXPORTS      ******** */
/* ************************************* */

var userSecurity = new UserSecurity();
exports.userSecurity = userSecurity;