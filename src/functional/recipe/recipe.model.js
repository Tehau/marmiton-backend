
/* ************************************* */
/* ********       IMPORT        ******** */
/* ************************************* */
import mongoose from 'mongoose';
import  { configurationService } from "../../server/core/configurationService.js";
/* ************************************* */
/* ********        CLASS        ******** */
/* ************************************* */
class RecipeModel {
    constructor() {
        this.schema = new mongoose.Schema({
            title : String,
            description : String,
            portion : Number,
            ingredients : [{
                name : String,
                quantity : Number,
                unity : String
            }],
            step : [{
                description : String
            }]
        });
        
        this.model = mongoose.model('Recipe',this.schema);
    }
}

/* ************************************* */
/* ********        EXPORTS      ******** */
/* ************************************* */

var recipeModel = new RecipeModel();
export { recipeModel };