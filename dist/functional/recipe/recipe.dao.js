'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.recipeDao = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _recipe = require('./recipe.model');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Recipe = _recipe.recipeModel.model;

/* ************************************* */
/* ********        CLASS        ******** */
/* ************************************* */

/* ************************************* */
/* ********       IMPORT        ******** */
/* ************************************* */

var RecipeDao = function () {
	function RecipeDao() {
		(0, _classCallCheck3.default)(this, RecipeDao);
	}

	(0, _createClass3.default)(RecipeDao, [{
		key: 'getRecipes',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								return _context.abrupt('return', Recipe.find());

							case 1:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getRecipes() {
				return _ref.apply(this, arguments);
			}

			return getRecipes;
		}()
	}, {
		key: 'getRecipeById',
		value: function () {
			var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(id) {
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								return _context2.abrupt('return', Recipe.findById(id));

							case 1:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function getRecipeById(_x) {
				return _ref2.apply(this, arguments);
			}

			return getRecipeById;
		}()
	}, {
		key: 'getRecipeByRecipeName',
		value: function () {
			var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(recipeName) {
				return _regenerator2.default.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								return _context3.abrupt('return', Recipe.findOne({ 'recipeName': recipeName }));

							case 1:
							case 'end':
								return _context3.stop();
						}
					}
				}, _callee3, this);
			}));

			function getRecipeByRecipeName(_x2) {
				return _ref3.apply(this, arguments);
			}

			return getRecipeByRecipeName;
		}()
	}, {
		key: 'createRecipe',
		value: function () {
			var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(recipeToCreate) {
				var recipe;
				return _regenerator2.default.wrap(function _callee4$(_context4) {
					while (1) {
						switch (_context4.prev = _context4.next) {
							case 0:
								recipe = new Recipe(recipeToCreate);
								_context4.next = 3;
								return recipe.save();

							case 3:
								return _context4.abrupt('return', _context4.sent);

							case 4:
							case 'end':
								return _context4.stop();
						}
					}
				}, _callee4, this);
			}));

			function createRecipe(_x3) {
				return _ref4.apply(this, arguments);
			}

			return createRecipe;
		}()
	}, {
		key: 'deleteRecipe',
		value: function () {
			var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(id) {
				return _regenerator2.default.wrap(function _callee5$(_context5) {
					while (1) {
						switch (_context5.prev = _context5.next) {
							case 0:
								_context5.next = 2;
								return Recipe.findByIdAndRemove(id);

							case 2:
								return _context5.abrupt('return', _context5.sent);

							case 3:
							case 'end':
								return _context5.stop();
						}
					}
				}, _callee5, this);
			}));

			function deleteRecipe(_x4) {
				return _ref5.apply(this, arguments);
			}

			return deleteRecipe;
		}()
	}, {
		key: 'getAdmin',
		value: function () {
			var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {
				return _regenerator2.default.wrap(function _callee6$(_context6) {
					while (1) {
						switch (_context6.prev = _context6.next) {
							case 0:
								return _context6.abrupt('return', Recipe.find().where('role', 'administrateur'));

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
		key: 'updateRecipe',
		value: function () {
			var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7(recipeToUpdate) {
				var id;
				return _regenerator2.default.wrap(function _callee7$(_context7) {
					while (1) {
						switch (_context7.prev = _context7.next) {
							case 0:
								id = recipeToUpdate.id;

								delete recipeToUpdate.id;
								return _context7.abrupt('return', Recipe.findByIdAndUpdate(id, recipeToUpdate, { new: true }));

							case 3:
							case 'end':
								return _context7.stop();
						}
					}
				}, _callee7, this);
			}));

			function updateRecipe(_x5) {
				return _ref7.apply(this, arguments);
			}

			return updateRecipe;
		}()
	}]);
	return RecipeDao;
}();

/* ************************************* */
/* ********        EXPORTS      ******** */
/* ************************************* */

var recipeDao = new RecipeDao();
exports.recipeDao = recipeDao;