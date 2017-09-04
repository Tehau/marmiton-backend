
/* ************************************* */
/* ********       IMPORT        ******** */
/* ************************************* */
import {logger} from '../../server/logger/logger';
import { configurationService } from "../../server/core/configurationService.js";
import {recipeDao} from "./recipe.dao";

/* ************************************* */
/* ********        CLASS        ******** */
/* ************************************* */
class RecipeService {

	async getRecipes(){
		return await recipeDao.getRecipes();
	}

	async getRecipe(recipeId){
		return await recipeDao.getRecipeById(recipeId);
	}

	async createRecipe(recipeToCreate){
		try{
			return await recipeDao.createRecipe(recipeToCreate);
		}catch(e){
			logger.error('[Recipe service] createRecipe',e);
		}
	}

	async deleteRecipe(id){
		return await recipeDao.deleteRecipe(id);		
	}

	async updateRecipe(recipeToUpdate, currentRecipe){
		currentRecipe = await recipeDao.getRecipeById(currentRecipe.id);
		return await recipeDao.updateRecipe(recipeToUpdate);
	}

	async initRecipe(){
		let recipes = await recipeDao.getRecipes();
		if(recipes.length){
			return 
		}
		await recipeDao.createRecipe({
		    "title": "Flocons d’avoine et chia sans cuisson",
		    "description": "Besoin d’une alternative santé au petit déjeuner traditionnel? Pas le temps de déjeuner avant de partir? Voici la solution dans un pot masson! Le overnight oat! comme disent les Anglais. On n’a qu’à mélanger des flocons d’avoine avec du lait végétal et des graines de chia entières, et à laisser reposer de 2 heures à une nuit. Au réveil, on obtient un mélange d’avoine onctueux et tout simplement délicieux auquel on peut ajouter nos fruits favoris! Pas de vaisselle, pas de cuisson!  Si vous aimez cette recette, vous allez certainement apprécier  ma recette de Tofu Brouillé !",
		    "portion": 1,
		    "ingredients": [
		      {
		        "name": "1 tasse de lait de soja non sucré",
		        "quantity": 250,
		        "unity": "  mL",
		      },
		      {
		        "name": " 1/2 tasse de flocons d’avoine ",
		        "quantity": 50,
		        "unity": "g",
		      },
		      {
		        "name": " 2 c à table de graines de chia entières",
		        "quantity": 15,
		        "unity": "g",
		      },
		      {
		        "name": "sirop d'érable",
		        "quantity": 1,
		        "unity": "c à soupe",
		      }
		    ],
		    "step": [
		      {
		        "description": "Dans un pot masson ou dans un petit bol, mélangez le lait de soja non sucré, l'avoine, les graines de chia.\n",
		      },
		      {
		        "description": "Couvrir fermement avec un couvercle ou une pellicule plastique et le mettre au réfrigérateur pendant la nuit ou au minimum 2 heures.\n",
		      },
		      {
		        "description": "Le lendemain, ajouter le sirop d’érable et garnir de vos fruits préférés.\n",
		      },
		      {
		        "description": "Se conserve au réfrigérateur jusqu'à 2 jours.\n",
		      }
		    ]
  		});
  		return await recipeDao.createRecipe({
		    "title": "Végénaise",
		    "description": "C’est vraiment lors de l’ajout du jus de citron que la magie s’opère habituellement, c’est à cette étape que la mayonnaise prend. Aussi mettez tous vos ingrédients au frigo à l’avance pour que l’huile et le lait de soya soient très froids, cela facilitera l’émulsion. Important : Si la végénaise ne prend pas : 1- Recommencer le processus en utilisant une petite quantité du mélange qui n’a pas monté et émulsionner avec l’huile qui reste. 2- Ajouter en alternance le reste du mélange qui n’a pas pris et l’huile. 3- Utiliser plus d’huile que la recette le demande si nécessaire.",
		    "portion": 1,
		    "ingredients": [
		      {
		        "name": "lait de soja nature",
		        "quantity": 125,
		        "unity": "  mL",
		      },
		      {
		        "name": "sirop d'érable",
		        "quantity": 10,
		        "unity": "mL",
		      },
		      {
		        "name": " moutarde de dijon",
		        "quantity": 1,
		        "unity": "c à café",
		      },
		      {
		        "name": "huile végétal neutre",
		        "quantity": 250,
		        "unity": "mL",
		      },
		      {
		        "name": "Jus de citron",
		        "quantity": 5,
		        "unity": "mL",
		      }
		    ],
		    "step": [
		      {
		        "description": "Placer tous les ingrédients sauf l’huile et le jus de citron dans une tasse adaptée pour un mélangeur à immersion ou dans un mélangeur.",
		      },
		      {
		        "description": "Mixer en incorporant graduellement l’huile en file pour créer une émulsion.",
		      },
		      {
		        "description": "Quand la mayonnaise commence à prendre incorporer le jus de citron.",
		      }
		    ]
  		});

	}
}


/* ************************************* */
/* ********        EXPORTS      ******** */
/* ************************************* */

var recipeService = new RecipeService();
export { recipeService };
