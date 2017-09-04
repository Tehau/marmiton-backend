'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.userDao = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _user = require('./user.model');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = _user.userModel.model;

/* ************************************* */
/* ********        CLASS        ******** */
/* ************************************* */

/* ************************************* */
/* ********       IMPORT        ******** */
/* ************************************* */

var UserDao = function () {
	function UserDao() {
		(0, _classCallCheck3.default)(this, UserDao);
	}

	(0, _createClass3.default)(UserDao, [{
		key: 'getUsers',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								return _context.abrupt('return', User.find());

							case 1:
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
		key: 'getUserById',
		value: function () {
			var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(id) {
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								return _context2.abrupt('return', User.findById(id));

							case 1:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function getUserById(_x) {
				return _ref2.apply(this, arguments);
			}

			return getUserById;
		}()
	}, {
		key: 'getUserByUserName',
		value: function () {
			var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(userName) {
				return _regenerator2.default.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								return _context3.abrupt('return', User.findOne({ 'userName': userName }));

							case 1:
							case 'end':
								return _context3.stop();
						}
					}
				}, _callee3, this);
			}));

			function getUserByUserName(_x2) {
				return _ref3.apply(this, arguments);
			}

			return getUserByUserName;
		}()
	}, {
		key: 'createUser',
		value: function () {
			var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(userToCreate) {
				var user;
				return _regenerator2.default.wrap(function _callee4$(_context4) {
					while (1) {
						switch (_context4.prev = _context4.next) {
							case 0:
								user = new User(userToCreate);
								_context4.next = 3;
								return user.save();

							case 3:
								return _context4.abrupt('return', _context4.sent);

							case 4:
							case 'end':
								return _context4.stop();
						}
					}
				}, _callee4, this);
			}));

			function createUser(_x3) {
				return _ref4.apply(this, arguments);
			}

			return createUser;
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
								return User.findByIdAndRemove(id);

							case 2:
								return _context5.abrupt('return', _context5.sent);

							case 3:
							case 'end':
								return _context5.stop();
						}
					}
				}, _callee5, this);
			}));

			function deleteUser(_x4) {
				return _ref5.apply(this, arguments);
			}

			return deleteUser;
		}()
	}, {
		key: 'getAdmin',
		value: function () {
			var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {
				return _regenerator2.default.wrap(function _callee6$(_context6) {
					while (1) {
						switch (_context6.prev = _context6.next) {
							case 0:
								return _context6.abrupt('return', User.find().where('role', 'administrateur'));

							case 1:
							case 'end':
								return _context6.stop();
						}
					}
				}, _callee6, this);
			}));

			function getAdmin() {
				return _ref6.apply(this, arguments);
			}

			return getAdmin;
		}()
	}, {
		key: 'updateUser',
		value: function () {
			var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7(userToUpdate) {
				var id;
				return _regenerator2.default.wrap(function _callee7$(_context7) {
					while (1) {
						switch (_context7.prev = _context7.next) {
							case 0:
								id = userToUpdate.id;

								delete userToUpdate.id;
								return _context7.abrupt('return', User.findByIdAndUpdate(id, userToUpdate, { new: true }));

							case 3:
							case 'end':
								return _context7.stop();
						}
					}
				}, _callee7, this);
			}));

			function updateUser(_x5) {
				return _ref7.apply(this, arguments);
			}

			return updateUser;
		}()
	}]);
	return UserDao;
}();

/* ************************************* */
/* ********        EXPORTS      ******** */
/* ************************************* */

var userDao = new UserDao();
exports.userDao = userDao;