"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.recipeMapper = undefined;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ************************************* */
/* ********       IMPORT        ******** */
/* ************************************* */

/* ************************************* */
/* ********        CLASS        ******** */
/* ************************************* */
var RecipeMapper = function () {
    function RecipeMapper() {
        (0, _classCallCheck3.default)(this, RecipeMapper);
    }

    (0, _createClass3.default)(RecipeMapper, [{
        key: "formatResponse",
        value: function formatResponse(recipeInstance) {
            return {
                id: recipeInstance._id,
                title: recipeInstance.title,
                description: recipeInstance.description,
                portion: recipeInstance.portion,
                ingredients: recipeInstance.ingredients,
                step: recipeInstance.step
            };
        }
    }, {
        key: "formatArrayResponse",
        value: function formatArrayResponse(arryRecipeInstance) {
            if (arryRecipeInstance) {
                var list = [];
                arryRecipeInstance.forEach(function (recipeInstance) {
                    list.push(this.formatResponse(recipeInstance));
                }.bind(this));

                return list;
            } else {
                return arryRecipeInstance;
            }
        }
    }]);
    return RecipeMapper;
}();

/* ************************************* */
/* ********        EXPORTS      ******** */
/* ************************************* */

var recipeMapper = new RecipeMapper();
exports.recipeMapper = recipeMapper;