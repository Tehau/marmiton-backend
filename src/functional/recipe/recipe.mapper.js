
/* ************************************* */
/* ********       IMPORT        ******** */
/* ************************************* */


/* ************************************* */
/* ********        CLASS        ******** */
/* ************************************* */
class RecipeMapper {
    constructor() {
    }

    formatResponse(recipeInstance){
        return {
            id: recipeInstance._id,
            title: recipeInstance.title,
            description : recipeInstance.description,
            portion : recipeInstance.portion,
            ingredients : recipeInstance.ingredients,
            step    : recipeInstance.step
        }
    }

    formatArrayResponse(arryRecipeInstance){
        if (arryRecipeInstance){
                var list = [];
                arryRecipeInstance.forEach(function(recipeInstance){
                    list.push(this.formatResponse(recipeInstance));
                }.bind(this));
                
                return list;
        }else{
            return arryRecipeInstance;
        }
    }
}

/* ************************************* */
/* ********        EXPORTS      ******** */
/* ************************************* */

var recipeMapper = new RecipeMapper();
export { recipeMapper };