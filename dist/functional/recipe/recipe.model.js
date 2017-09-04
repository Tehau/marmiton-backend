'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.recipeModel = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _configurationService = require('../../server/core/configurationService.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ************************************* */
/* ********        CLASS        ******** */
/* ************************************* */

/* ************************************* */
/* ********       IMPORT        ******** */
/* ************************************* */
var RecipeModel = function RecipeModel() {
    (0, _classCallCheck3.default)(this, RecipeModel);

    this.schema = new _mongoose2.default.Schema({
        title: String,
        description: String,
        portion: Number,
        ingredients: [{
            name: String,
            quantity: Number,
            unity: String
        }],
        step: [{
            description: String
        }]
    });

    this.model = _mongoose2.default.model('Recipe', this.schema);
};

/* ************************************* */
/* ********        EXPORTS      ******** */
/* ************************************* */

var recipeModel = new RecipeModel();
exports.recipeModel = recipeModel;