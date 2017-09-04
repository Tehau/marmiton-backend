'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Server = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _helmet = require('helmet');

var _helmet2 = _interopRequireDefault(_helmet);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _logger = require('./logger/logger');

var _configurationService = require('./core/configurationService');

var _database = require('./database/database');

var _apiRouter = require('./api/apiRouter');

var _apiSecurityService = require('./api/apiSecurityService');

var _recipe = require('../functional/recipe/recipe.service');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Server = exports.Server = function () {
	function Server() {
		(0, _classCallCheck3.default)(this, Server);

		this.app = (0, _express2.default)();
	}

	(0, _createClass3.default)(Server, [{
		key: 'listen',
		value: function listen() {
			_logger.logger.debug('[Server] Begin Listen...');
			// Listen
			this.app.listen(_configurationService.configurationService.getPort);

			_logger.logger.debug('[Server] End Listen...');
			_logger.logger.info('[Server] Listen on port : ' + _configurationService.configurationService.getPort);
		}
	}, {
		key: 'init',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.prev = 0;

								_logger.logger.info('[Server] Init server...');

								this.app.use((0, _helmet2.default)());

								if (_configurationService.configurationService.isDevelopmentMode()) {
									this.app.use((0, _cors2.default)());
								}

								this.app.use(_bodyParser2.default.json());
								this.app.use(_bodyParser2.default.urlencoded({ extended: true }));

								this.app.use((0, _compression2.default)());

								_context.next = 9;
								return _database.dataBase.init();

							case 9:
								_context.next = 11;
								return _recipe.recipeService.initRecipe();

							case 11:
								// this.app.use(apiSecurityService.securityMiddleware());

								this.app.use(_apiRouter.apiRouter.getRouter);

								return _context.abrupt('return', true);

							case 15:
								_context.prev = 15;
								_context.t0 = _context['catch'](0);

								_logger.logger.error('[Server] init', _context.t0);

							case 18:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this, [[0, 15]]);
			}));

			function init() {
				return _ref.apply(this, arguments);
			}

			return init;
		}()
	}]);
	return Server;
}();