
/* ************************************* */
/* ********       IMPORT        ******** */
/* ************************************* */
import {recipeModel} from './recipe.model';
const Recipe = recipeModel.model;

/* ************************************* */
/* ********        CLASS        ******** */
/* ************************************* */
class RecipeDao {

	async getRecipes(){
		return Recipe.find();
	}

	async getRecipeById(id){
		return Recipe.findById(id);
	}

	async getRecipeByRecipeName(recipeName){
		return Recipe.findOne({'recipeName' : recipeName});
	}

	async createRecipe(recipeToCreate){
		let recipe = new Recipe(recipeToCreate);
		return await recipe.save();
	}

	async deleteRecipe(id){
		return await Recipe.findByIdAndRemove(id);
	}

	async getAdmin(){
		return Recipe.find().where('role','administrateur')
	}

	async updateRecipe(recipeToUpdate){
		const id = recipeToUpdate.id;
		delete recipeToUpdate.id; 
		return Recipe.findByIdAndUpdate(id,recipeToUpdate,{new:true});
	}
}


/* ************************************* */
/* ********        EXPORTS      ******** */
/* ************************************* */

var recipeDao = new RecipeDao();
export { recipeDao };
