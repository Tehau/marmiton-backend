'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.apiRouter = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _configurationService = require('../core/configurationService');

var _recipe = require('../../functional/recipe/recipe.controller');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ************************************* */
/* ********        CLASS        ******** */
/* ************************************* */
var Router = function () {
	function Router() {
		(0, _classCallCheck3.default)(this, Router);

		this.router = _express2.default.Router();
	}

	(0, _createClass3.default)(Router, [{
		key: 'getRouter',
		get: function get() {
			this.router.use(_configurationService.configurationService.getUrlPrefix, _recipe.recipeController.getRouter);
			return this.router;
		}
	}]);
	return Router;
}();

/* ************************************* */
/* ********        EXPORTS      ******** */
/* ************************************* */

/* ************************************* */
/* ********       IMPORT        ******** */
/* ************************************* */


var apiRouter = new Router();
exports.apiRouter = apiRouter;