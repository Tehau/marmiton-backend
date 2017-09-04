"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.recipeService = undefined;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _logger = require("../../server/logger/logger");

var _configurationService = require("../../server/core/configurationService.js");

var _recipe = require("./recipe.dao");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ************************************* */
/* ********        CLASS        ******** */
/* ************************************* */
var RecipeService = function () {
	function RecipeService() {
		(0, _classCallCheck3.default)(this, RecipeService);
	}

	(0, _createClass3.default)(RecipeService, [{
		key: "getRecipes",
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return _recipe.recipeDao.getRecipes();

							case 2:
								return _context.abrupt("return", _context.sent);

							case 3:
							case "end":
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
		key: "getRecipe",
		value: function () {
			var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(recipeId) {
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								_context2.next = 2;
								return _recipe.recipeDao.getRecipeById(recipeId);

							case 2:
								return _context2.abrupt("return", _context2.sent);

							case 3:
							case "end":
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function getRecipe(_x) {
				return _ref2.apply(this, arguments);
			}

			return getRecipe;
		}()
	}, {
		key: "createRecipe",
		value: function () {
			var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(recipeToCreate) {
				return _regenerator2.default.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								_context3.prev = 0;
								_context3.next = 3;
								return _recipe.recipeDao.createRecipe(recipeToCreate);

							case 3:
								return _context3.abrupt("return", _context3.sent);

							case 6:
								_context3.prev = 6;
								_context3.t0 = _context3["catch"](0);

								_logger.logger.error('[Recipe service] createRecipe', _context3.t0);

							case 9:
							case "end":
								return _context3.stop();
						}
					}
				}, _callee3, this, [[0, 6]]);
			}));

			function createRecipe(_x2) {
				return _ref3.apply(this, arguments);
			}

			return createRecipe;
		}()
	}, {
		key: "deleteRecipe",
		value: function () {
			var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(id) {
				return _regenerator2.default.wrap(function _callee4$(_context4) {
					while (1) {
						switch (_context4.prev = _context4.next) {
							case 0:
								_context4.next = 2;
								return _recipe.recipeDao.deleteRecipe(id);

							case 2:
								return _context4.abrupt("return", _context4.sent);

							case 3:
							case "end":
								return _context4.stop();
						}
					}
				}, _callee4, this);
			}));

			function deleteRecipe(_x3) {
				return _ref4.apply(this, arguments);
			}

			return deleteRecipe;
		}()
	}, {
		key: "updateRecipe",
		value: function () {
			var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(recipeToUpdate, currentRecipe) {
				return _regenerator2.default.wrap(function _callee5$(_context5) {
					while (1) {
						switch (_context5.prev = _context5.next) {
							case 0:
								_context5.next = 2;
								return _recipe.recipeDao.getRecipeById(currentRecipe.id);

							case 2:
								currentRecipe = _context5.sent;
								_context5.next = 5;
								return _recipe.recipeDao.updateRecipe(recipeToUpdate);

							case 5:
								return _context5.abrupt("return", _context5.sent);

							case 6:
							case "end":
								return _context5.stop();
						}
					}
				}, _callee5, this);
			}));

			function updateRecipe(_x4, _x5) {
				return _ref5.apply(this, arguments);
			}

			return updateRecipe;
		}()
	}, {
		key: "initRecipe",
		value: function () {
			var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {
				var recipes;
				return _regenerator2.default.wrap(function _callee6$(_context6) {
					while (1) {
						switch (_context6.prev = _context6.next) {
							case 0:
								_context6.next = 2;
								return _recipe.recipeDao.getRecipes();

							case 2:
								recipes = _context6.sent;

								if (!recipes.length) {
									_context6.next = 5;
									break;
								}

								return _context6.abrupt("return");

							case 5:
								_context6.next = 7;
								return _recipe.recipeDao.createRecipe({
									"title": "Flocons d’avoine et chia sans cuisson",
									"description": "Besoin d’une alternative santé au petit déjeuner traditionnel? Pas le temps de déjeuner avant de partir? Voici la solution dans un pot masson! Le overnight oat! comme disent les Anglais. On n’a qu’à mélanger des flocons d’avoine avec du lait végétal et des graines de chia entières, et à laisser reposer de 2 heures à une nuit. Au réveil, on obtient un mélange d’avoine onctueux et tout simplement délicieux auquel on peut ajouter nos fruits favoris! Pas de vaisselle, pas de cuisson!  Si vous aimez cette recette, vous allez certainement apprécier  ma recette de Tofu Brouillé !",
									"portion": 1,
									"ingredients": [{
										"name": "1 tasse de lait de soja non sucré",
										"quantity": 250,
										"unity": "  mL"
									}, {
										"name": " 1/2 tasse de flocons d’avoine ",
										"quantity": 50,
										"unity": "g"
									}, {
										"name": " 2 c à table de graines de chia entières",
										"quantity": 15,
										"unity": "g"
									}, {
										"name": "sirop d'érable",
										"quantity": 1,
										"unity": "c à soupe"
									}],
									"step": [{
										"description": "Dans un pot masson ou dans un petit bol, mélangez le lait de soja non sucré, l'avoine, les graines de chia.\n"
									}, {
										"description": "Couvrir fermement avec un couvercle ou une pellicule plastique et le mettre au réfrigérateur pendant la nuit ou au minimum 2 heures.\n"
									}, {
										"description": "Le lendemain, ajouter le sirop d’érable et garnir de vos fruits préférés.\n"
									}, {
										"description": "Se conserve au réfrigérateur jusqu'à 2 jours.\n"
									}]
								});

							case 7:
								_context6.next = 9;
								return _recipe.recipeDao.createRecipe({
									"title": "Végénaise",
									"description": "C’est vraiment lors de l’ajout du jus de citron que la magie s’opère habituellement, c’est à cette étape que la mayonnaise prend. Aussi mettez tous vos ingrédients au frigo à l’avance pour que l’huile et le lait de soya soient très froids, cela facilitera l’émulsion. Important : Si la végénaise ne prend pas : 1- Recommencer le processus en utilisant une petite quantité du mélange qui n’a pas monté et émulsionner avec l’huile qui reste. 2- Ajouter en alternance le reste du mélange qui n’a pas pris et l’huile. 3- Utiliser plus d’huile que la recette le demande si nécessaire.",
									"portion": 1,
									"ingredients": [{
										"name": "lait de soja nature",
										"quantity": 125,
										"unity": "  mL"
									}, {
										"name": "sirop d'érable",
										"quantity": 10,
										"unity": "mL"
									}, {
										"name": " moutarde de dijon",
										"quantity": 1,
										"unity": "c à café"
									}, {
										"name": "huile végétal neutre",
										"quantity": 250,
										"unity": "mL"
									}, {
										"name": "Jus de citron",
										"quantity": 5,
										"unity": "mL"
									}],
									"step": [{
										"description": "Placer tous les ingrédients sauf l’huile et le jus de citron dans une tasse adaptée pour un mélangeur à immersion ou dans un mélangeur."
									}, {
										"description": "Mixer en incorporant graduellement l’huile en file pour créer une émulsion."
									}, {
										"description": "Quand la mayonnaise commence à prendre incorporer le jus de citron."
									}]
								});

							case 9:
								return _context6.abrupt("return", _context6.sent);

							case 10:
							case "end":
								return _context6.stop();
						}
					}
				}, _callee6, this);
			}));

			function initRecipe() {
				return _ref6.apply(this, arguments);
			}

			return initRecipe;
		}()
	}]);
	return RecipeService;
}();

/* ************************************* */
/* ********        EXPORTS      ******** */
/* ************************************* */

/* ************************************* */
/* ********       IMPORT        ******** */
/* ************************************* */


var recipeService = new RecipeService();
exports.recipeService = recipeService;