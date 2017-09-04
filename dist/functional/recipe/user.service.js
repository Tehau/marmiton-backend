'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.userService = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _logger = require('../../server/logger/logger');

var _securityService = require('../../server/core/securityService');

var _apiSecurityService = require('../../server/api/apiSecurityService');

var _configurationService = require('../../server/core/configurationService.js');

var _user2 = require('./user.dao');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ************************************* */
/* ********        CLASS        ******** */
/* ************************************* */
var UserService = function () {
	function UserService() {
		(0, _classCallCheck3.default)(this, UserService);
	}

	(0, _createClass3.default)(UserService, [{
		key: 'getUsers',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return _user2.userDao.getUsers();

							case 2:
								return _context.abrupt('return', _context.sent);

							case 3:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getUsers() {
				return _ref.apply(this, arguments);
			}

			return getUsers;
		}()
	}, {
		key: 'getUser',
		value: function () {
			var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(userId) {
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								_context2.next = 2;
								return _user2.userDao.getUserById(userId);

							case 2:
								return _context2.abrupt('return', _context2.sent);

							case 3:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function getUser(_x) {
				return _ref2.apply(this, arguments);
			}

			return getUser;
		}()
	}, {
		key: 'createUser',
		value: function () {
			var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(userToCreate) {
				var user, salt, hash, _user;

				return _regenerator2.default.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								_context3.prev = 0;
								_context3.next = 3;
								return _user2.userDao.getUserByUserName(userToCreate.userName);

							case 3:
								user = _context3.sent;

								if (!user) {
									_context3.next = 8;
									break;
								}

								return _context3.abrupt('return', null);

							case 8:
								salt = _securityService.securityService.generateSalt;
								_context3.next = 11;
								return _securityService.securityService.generateHash(userToCreate.password, salt);

							case 11:
								hash = _context3.sent;

								userToCreate.salt = salt;
								userToCreate.hash = hash;
								_context3.next = 16;
								return _user2.userDao.createUser(userToCreate);

							case 16:
								_user = _context3.sent;
								return _context3.abrupt('return', _user);

							case 18:
								_context3.next = 23;
								break;

							case 20:
								_context3.prev = 20;
								_context3.t0 = _context3['catch'](0);

								_logger.logger.error('[User service] createUser', _context3.t0);

							case 23:
							case 'end':
								return _context3.stop();
						}
					}
				}, _callee3, this, [[0, 20]]);
			}));

			function createUser(_x2) {
				return _ref3.apply(this, arguments);
			}

			return createUser;
		}()
	}, {
		key: 'login',
		value: function () {
			var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(_login, password) {
				var user;
				return _regenerator2.default.wrap(function _callee4$(_context4) {
					while (1) {
						switch (_context4.prev = _context4.next) {
							case 0:
								_context4.prev = 0;
								_context4.next = 3;
								return _user2.userDao.getUserByUserName(_login);

							case 3:
								user = _context4.sent;

								if (!user) {
									_context4.next = 12;
									break;
								}

								_context4.next = 7;
								return _securityService.securityService.compare(password, user.hash, user.salt);

							case 7:
								_context4.next = 9;
								return _apiSecurityService.apiSecurityService.generateToken({ id: user.id });

							case 9:
								return _context4.abrupt('return', _context4.sent);

							case 12:
								return _context4.abrupt('return', null);

							case 13:
								_context4.next = 18;
								break;

							case 15:
								_context4.prev = 15;
								_context4.t0 = _context4['catch'](0);

								_logger.logger.error('[User service] login', _context4.t0);

							case 18:
							case 'end':
								return _context4.stop();
						}
					}
				}, _callee4, this, [[0, 15]]);
			}));

			function login(_x3, _x4) {
				return _ref4.apply(this, arguments);
			}

			return login;
		}()
	}, {
		key: 'deleteUser',
		value: function () {
			var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(id) {
				return _regenerator2.default.wrap(function _callee5$(_context5) {
					while (1) {
						switch (_context5.prev = _context5.next) {
							case 0:
								_context5.next = 2;
								return _user2.userDao.deleteUser(id);

							case 2:
								return _context5.abrupt('return', _context5.sent);

							case 3:
							case 'end':
								return _context5.stop();
						}
					}
				}, _callee5, this);
			}));

			function deleteUser(_x5) {
				return _ref5.apply(this, arguments);
			}

			return deleteUser;
		}()
	}, {
		key: 'updateUser',
		value: function () {
			var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6(userToUpdate, currentUser) {
				return _regenerator2.default.wrap(function _callee6$(_context6) {
					while (1) {
						switch (_context6.prev = _context6.next) {
							case 0:
								_context6.next = 2;
								return _user2.userDao.getUserById(currentUser.id);

							case 2:
								currentUser = _context6.sent;

								if (!(currentUser.role === _configurationService.configurationService.admin)) {
									_context6.next = 9;
									break;
								}

								_context6.next = 6;
								return _user2.userDao.updateUser(userToUpdate);

							case 6:
								return _context6.abrupt('return', _context6.sent);

							case 9:
								return _context6.abrupt('return', null);

							case 10:
							case 'end':
								return _context6.stop();
						}
					}
				}, _callee6, this);
			}));

			function updateUser(_x6, _x7) {
				return _ref6.apply(this, arguments);
			}

			return updateUser;
		}()
	}, {
		key: 'initFirstAdmin',
		value: function () {
			var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7() {
				var admins, admin, salt, hash, user;
				return _regenerator2.default.wrap(function _callee7$(_context7) {
					while (1) {
						switch (_context7.prev = _context7.next) {
							case 0:
								_context7.prev = 0;
								_context7.next = 3;
								return _user2.userDao.getAdmin();

							case 3:
								admins = _context7.sent;

								if (!admins.length) {
									_context7.next = 8;
									break;
								}

								return _context7.abrupt('return');

							case 8:
								admin = {
									userName: 'brendiche',
									password: '17031992_Br',
									role: 'administrateur',
									firstName: 'Brendan',
									lastName: 'Quétineau'
								};
								salt = _securityService.securityService.generateSalt;
								_context7.next = 12;
								return _securityService.securityService.generateHash(admin.password, salt);

							case 12:
								hash = _context7.sent;

								admin.salt = salt;
								admin.hash = hash;
								_context7.next = 17;
								return _user2.userDao.createUser(admin);

							case 17:
								user = _context7.sent;
								return _context7.abrupt('return', user);

							case 19:
								_context7.next = 24;
								break;

							case 21:
								_context7.prev = 21;
								_context7.t0 = _context7['catch'](0);

								_logger.logger.error('[User service] initFirstAdmin', _context7.t0);

							case 24:
							case 'end':
								return _context7.stop();
						}
					}
				}, _callee7, this, [[0, 21]]);
			}));

			function initFirstAdmin() {
				return _ref7.apply(this, arguments);
			}

			return initFirstAdmin;
		}()
	}]);
	return UserService;
}();

/* ************************************* */
/* ********        EXPORTS      ******** */
/* ************************************* */

/* ************************************* */
/* ********       IMPORT        ******** */
/* ************************************* */


var userService = new UserService();
exports.userService = userService;