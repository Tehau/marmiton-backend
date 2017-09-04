"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.recipeController = undefined;

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

var _recipe = require("./recipe.service");

var _recipe2 = require("./recipe.mapper");

var _logger = require("../../server/logger/logger");

var _configurationService = require("../../server/core/configurationService.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ************************************* */
/* ********        CLASS        ******** */
/* ************************************* */
var RecipeController = function () {
	function RecipeController() {
		(0, _classCallCheck3.default)(this, RecipeController);

		this.router = _express2.default.Router();
	}

	(0, _createClass3.default)(RecipeController, [{
		key: "getRecipes",
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(req, res) {
				var recipes;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.prev = 0;
								_context.next = 3;
								return _recipe.recipeService.getRecipes();

							case 3:
								recipes = _context.sent;

								res.json(_recipe2.recipeMapper.formatArrayResponse(recipes));
								_context.next = 12;
								break;

							case 7:
								_context.prev = 7;
								_context.t0 = _context["catch"](0);

								_logger.logger.error('[Recipe Controller] get all recipes', _context.t0);
								res.statusCode = 500;
								res.end();

							case 12:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, this, [[0, 7]]);
			}));

			function getRecipes(_x, _x2) {
				return _ref.apply(this, arguments);
			}

			return getRecipes;
		}()
	}, {
		key: "getRecipe",
		value: function () {
			var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(req, res) {
				var id, recipe;
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								id = req.params.id;
								_context2.prev = 1;
								_context2.next = 4;
								return _recipe.recipeService.getRecipe(id);

							case 4:
								recipe = _context2.sent;

								res.json(_recipe2.recipeMapper.formatResponse(recipe));
								_context2.next = 13;
								break;

							case 8:
								_context2.prev = 8;
								_context2.t0 = _context2["catch"](1);

								_logger.logger.error('[Recipe Controller] get recipe ', _context2.t0);
								res.statusCode = 500;
								res.end();

							case 13:
							case "end":
								return _context2.stop();
						}
					}
				}, _callee2, this, [[1, 8]]);
			}));

			function getRecipe(_x3, _x4) {
				return _ref2.apply(this, arguments);
			}

			return getRecipe;
		}()
	}, {
		key: "postRecipe",
		value: function () {
			var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(req, res) {
				var recipe, createdRecipe;
				return _regenerator2.default.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								recipe = req.body;

								if (!this.validRecipe(recipe)) {
									_context3.next = 16;
									break;
								}

								_context3.prev = 2;
								_context3.next = 5;
								return _recipe.recipeService.createRecipe(recipe);

							case 5:
								createdRecipe = _context3.sent;

								if (createdRecipe) {
									res.statusCode = 201;
									res.json(_recipe2.recipeMapper.formatResponse(createdRecipe));
								} else {
									res.statusCode = 409;
									res.end();
								}
								_context3.next = 14;
								break;

							case 9:
								_context3.prev = 9;
								_context3.t0 = _context3["catch"](2);

								_logger.logger.error('[Recipe Controller] create recipe', _context3.t0);
								res.statusCode = 500;
								res.end();

							case 14:
								_context3.next = 18;
								break;

							case 16:
								res.statusCode = 400;
								res.end();

							case 18:
							case "end":
								return _context3.stop();
						}
					}
				}, _callee3, this, [[2, 9]]);
			}));

			function postRecipe(_x5, _x6) {
				return _ref3.apply(this, arguments);
			}

			return postRecipe;
		}()
	}, {
		key: "deleteRecipe",
		value: function () {
			var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(req, res) {
				var id, recipe;
				return _regenerator2.default.wrap(function _callee4$(_context4) {
					while (1) {
						switch (_context4.prev = _context4.next) {
							case 0:
								id = req.params.id;
								_context4.prev = 1;
								_context4.next = 4;
								return _recipe.recipeService.deleteRecipe(id);

							case 4:
								recipe = _context4.sent;

								if (recipe) {
									res.statusCode = 200;
								} else {
									res.statusCode = 404;
								}
								res.end();
								_context4.next = 14;
								break;

							case 9:
								_context4.prev = 9;
								_context4.t0 = _context4["catch"](1);

								_logger.logger.error('[Recipe Controller] delete recipe', _context4.t0);
								res.statusCode = 500;
								res.end();

							case 14:
							case "end":
								return _context4.stop();
						}
					}
				}, _callee4, this, [[1, 9]]);
			}));

			function deleteRecipe(_x7, _x8) {
				return _ref4.apply(this, arguments);
			}

			return deleteRecipe;
		}()
	}, {
		key: "updateRecipe",
		value: function () {
			var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(req, res) {
				var id, recipe, updatedRecipe;
				return _regenerator2.default.wrap(function _callee5$(_context5) {
					while (1) {
						switch (_context5.prev = _context5.next) {
							case 0:
								id = req.params.id;
								recipe = req.body;

								if (!this.validRecipe(recipe)) {
									_context5.next = 17;
									break;
								}

								_context5.prev = 3;
								_context5.next = 6;
								return _recipe.recipeService.updateRecipe(recipe, id);

							case 6:
								updatedRecipe = _context5.sent;

								if (updatedRecipe) {
									res.statusCode = 200;
									res.json(_recipe2.recipeMapper.formatResponse(updatedRecipe));
								} else {
									res.statusCode = 409;
									res.end();
								}
								_context5.next = 15;
								break;

							case 10:
								_context5.prev = 10;
								_context5.t0 = _context5["catch"](3);

								_logger.logger.error('[Recipe Controller] create recipe', _context5.t0);
								res.statusCode = 500;
								res.end();

							case 15:
								_context5.next = 19;
								break;

							case 17:
								res.statusCode = 400;
								res.end();

							case 19:
							case "end":
								return _context5.stop();
						}
					}
				}, _callee5, this, [[3, 10]]);
			}));

			function updateRecipe(_x9, _x10) {
				return _ref5.apply(this, arguments);
			}

			return updateRecipe;
		}()
	}, {
		key: "validRecipe",
		value: function validRecipe(recipe) {
			if (!recipe.hasOwnProperty('title')) {
				_logger.logger.error('[Recipe Controller] create recipe miss title');
				return false;
			}

			if (!recipe.hasOwnProperty('description')) {
				_logger.logger.error('[Recipe Controller] create recipe miss description');
				return false;
			}

			if (!recipe.hasOwnProperty('portion')) {
				_logger.logger.error('[Recipe Controller] create recipe miss portion');
				return false;
			}

			if (!recipe.hasOwnProperty('ingredients')) {
				_logger.logger.error('[Recipe Controller] create recipe miss ingredients');
				return false;
			}

			if (!recipe.hasOwnProperty('step')) {
				_logger.logger.error('[Recipe Controller] create recipe miss step');
				return false;
			}

			return true;
		}
	}, {
		key: "getRouter",
		get: function get() {
			this.router.get('/receipts', this.getRecipes);
			this.router.get('/receipts/:id', this.getRecipe);
			this.router.post('/receipts', this.postRecipe.bind(this));
			this.router.delete('/receipts/:id', this.deleteRecipe);
			this.router.put('/receipts/:id', this.updateRecipe.bind(this));
			return this.router;
		}
	}]);
	return RecipeController;
}();

/* ************************************* */
/* ********        EXPORTS      ******** */
/* ************************************* */

/* ************************************* */
/* ********       IMPORT        ******** */
/* ************************************* */


var recipeController = new RecipeController();
exports.recipeController = recipeController;