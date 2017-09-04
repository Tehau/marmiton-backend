"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.userController = undefined;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _user = require("./user.service");

var _user2 = require("./user.mapper");

var _user3 = require("./user.security");

var _logger = require("../../server/logger/logger");

var _configurationService = require("../../server/core/configurationService.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ************************************* */
/* ********        CLASS        ******** */
/* ************************************* */

/* ************************************* */
/* ********       IMPORT        ******** */
/* ************************************* */
var UserController = function () {
	function UserController() {
		(0, _classCallCheck3.default)(this, UserController);

		this.router = _express2.default.Router();
	}

	(0, _createClass3.default)(UserController, [{
		key: "getUsers",
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(req, res) {
				var user, users;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								user = req.user;
								_context.prev = 1;
								_context.next = 4;
								return _user.userService.getUsers(user);

							case 4:
								users = _context.sent;

								res.json(_user2.userMapper.formatArrayResponse(users));
								_context.next = 13;
								break;

							case 8:
								_context.prev = 8;
								_context.t0 = _context["catch"](1);

								_logger.logger.error('[User Controller] get all users', _context.t0);
								res.statusCode = 500;
								res.end();

							case 13:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, this, [[1, 8]]);
			}));

			function getUsers(_x, _x2) {
				return _ref.apply(this, arguments);
			}

			return getUsers;
		}()
	}, {
		key: "getCurrentUser",
		value: function () {
			var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(req, res) {
				var user, currentUser;
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								user = req.user;

								if (!user) {
									_context2.next = 16;
									break;
								}

								_context2.prev = 2;
								_context2.next = 5;
								return _user.userService.getUser(user.id);

							case 5:
								currentUser = _context2.sent;

								res.json(_user2.userMapper.formatResponse(currentUser));
								_context2.next = 14;
								break;

							case 9:
								_context2.prev = 9;
								_context2.t0 = _context2["catch"](2);

								_logger.logger.error('[User Controller] get current user', _context2.t0);
								res.statusCode = 500;
								res.end();

							case 14:
								_context2.next = 18;
								break;

							case 16:
								res.statusCode = 400;
								res.end();

							case 18:
							case "end":
								return _context2.stop();
						}
					}
				}, _callee2, this, [[2, 9]]);
			}));

			function getCurrentUser(_x3, _x4) {
				return _ref2.apply(this, arguments);
			}

			return getCurrentUser;
		}()
	}, {
		key: "getUser",
		value: function () {
			var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(req, res) {
				return _regenerator2.default.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
							case "end":
								return _context3.stop();
						}
					}
				}, _callee3, this);
			}));

			function getUser(_x5, _x6) {
				return _ref3.apply(this, arguments);
			}

			return getUser;
		}()
	}, {
		key: "postUser",
		value: function () {
			var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(req, res) {
				var user, createdUser;
				return _regenerator2.default.wrap(function _callee4$(_context4) {
					while (1) {
						switch (_context4.prev = _context4.next) {
							case 0:
								user = req.body;

								if (!this.validUser(user)) {
									_context4.next = 16;
									break;
								}

								_context4.prev = 2;
								_context4.next = 5;
								return _user.userService.createUser(user);

							case 5:
								createdUser = _context4.sent;

								if (createdUser) {
									res.statusCode = 201;
									res.json(_user2.userMapper.formatResponse(createdUser));
								} else {
									res.statusCode = 409;
									res.end();
								}
								_context4.next = 14;
								break;

							case 9:
								_context4.prev = 9;
								_context4.t0 = _context4["catch"](2);

								_logger.logger.error('[User Controller] create user', _context4.t0);
								res.statusCode = 500;
								res.end();

							case 14:
								_context4.next = 18;
								break;

							case 16:
								res.statusCode = 400;
								res.end();

							case 18:
							case "end":
								return _context4.stop();
						}
					}
				}, _callee4, this, [[2, 9]]);
			}));

			function postUser(_x7, _x8) {
				return _ref4.apply(this, arguments);
			}

			return postUser;
		}()
	}, {
		key: "login",
		value: function () {
			var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(req, res) {
				var auth, jwt;
				return _regenerator2.default.wrap(function _callee5$(_context5) {
					while (1) {
						switch (_context5.prev = _context5.next) {
							case 0:
								auth = req.body;


								if (!auth.hasOwnProperty('login')) {
									_logger.logger.error('[User Controller] login misss login');
									res.statusCode = 400;
									res.end();
								}
								if (!auth.hasOwnProperty('password')) {
									_logger.logger.error('[User Controller] login misss password');
									res.statusCode = 400;
									res.end();
								}

								_context5.prev = 3;
								_context5.next = 6;
								return _user.userService.login(auth.login, auth.password);

							case 6:
								jwt = _context5.sent;

								if (jwt) {
									res.statusCode = 200;
									res.json(jwt);
								} else {
									res.statusCode = 401;
									res.end();
								}
								_context5.next = 15;
								break;

							case 10:
								_context5.prev = 10;
								_context5.t0 = _context5["catch"](3);

								_logger.logger.error('[User Controller] login user', _context5.t0);
								res.statusCode = 500;
								res.end();

							case 15:
							case "end":
								return _context5.stop();
						}
					}
				}, _callee5, this, [[3, 10]]);
			}));

			function login(_x9, _x10) {
				return _ref5.apply(this, arguments);
			}

			return login;
		}()
	}, {
		key: "deleteUser",
		value: function () {
			var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6(req, res) {
				var id, user;
				return _regenerator2.default.wrap(function _callee6$(_context6) {
					while (1) {
						switch (_context6.prev = _context6.next) {
							case 0:
								id = req.params.id;
								_context6.prev = 1;
								_context6.next = 4;
								return _user.userService.deleteUser(id);

							case 4:
								user = _context6.sent;

								if (user) {
									res.statusCode = 200;
								} else {
									res.statusCode = 404;
								}
								res.end();
								_context6.next = 14;
								break;

							case 9:
								_context6.prev = 9;
								_context6.t0 = _context6["catch"](1);

								_logger.logger.error('[User Controller] delete user', _context6.t0);
								res.statusCode = 500;
								res.end();

							case 14:
							case "end":
								return _context6.stop();
						}
					}
				}, _callee6, this, [[1, 9]]);
			}));

			function deleteUser(_x11, _x12) {
				return _ref6.apply(this, arguments);
			}

			return deleteUser;
		}()
	}, {
		key: "updateUser",
		value: function () {
			var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7(req, res) {
				var currentUser, user, updatedUser;
				return _regenerator2.default.wrap(function _callee7$(_context7) {
					while (1) {
						switch (_context7.prev = _context7.next) {
							case 0:
								currentUser = req.user;
								user = req.body;

								if (!this.validUser(user)) {
									_context7.next = 17;
									break;
								}

								_context7.prev = 3;
								_context7.next = 6;
								return _user.userService.updateUser(user, currentUser);

							case 6:
								updatedUser = _context7.sent;

								if (updatedUser) {
									res.statusCode = 201;
									res.json(_user2.userMapper.formatResponse(updatedUser));
								} else {
									res.statusCode = 409;
									res.end();
								}
								_context7.next = 15;
								break;

							case 10:
								_context7.prev = 10;
								_context7.t0 = _context7["catch"](3);

								_logger.logger.error('[User Controller] create user', _context7.t0);
								res.statusCode = 500;
								res.end();

							case 15:
								_context7.next = 19;
								break;

							case 17:
								res.statusCode = 400;
								res.end();

							case 19:
							case "end":
								return _context7.stop();
						}
					}
				}, _callee7, this, [[3, 10]]);
			}));

			function updateUser(_x13, _x14) {
				return _ref7.apply(this, arguments);
			}

			return updateUser;
		}()
	}, {
		key: "validUser",
		value: function validUser(user) {
			if (!user.hasOwnProperty('userName')) {
				_logger.logger.error('[User Controller] create user miss userName');
				return false;
			}

			if (!user.hasOwnProperty('firstName')) {
				_logger.logger.error('[User Controller] create user miss firstName');
				return false;
			}

			if (!user.hasOwnProperty('lastName')) {
				_logger.logger.error('[User Controller] create user miss lastName');
				return false;
			}

			if (!user.hasOwnProperty('password') && !user.hasOwnProperty('id')) {
				_logger.logger.error('[User Controller] create user miss password');
				return false;
			}

			if (!user.hasOwnProperty('role')) {
				_logger.logger.error('[User Controller] create user miss role');
				return false;
			}

			return true;
		}
	}, {
		key: "getRouter",
		get: function get() {
			this.router.get('/users', _user3.userSecurity.acceptOnlyRoles([_configurationService.configurationService.admin, _configurationService.configurationService.prof]), this.getUsers);
			this.router.get('/users/current', this.getCurrentUser);
			this.router.post('/users', this.postUser.bind(this));
			this.router.post('/users/login', this.login.bind(this));
			this.router.delete('/users/:id', _user3.userSecurity.acceptOnlyRoles([_configurationService.configurationService.admin]), this.deleteUser);
			this.router.put('/users/:id', this.updateUser.bind(this));
			return this.router;
		}
	}]);
	return UserController;
}();

/* ************************************* */
/* ********        EXPORTS      ******** */
/* ************************************* */

var userController = new UserController();
exports.userController = userController;