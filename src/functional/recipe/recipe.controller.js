
/* ************************************* */
/* ********       IMPORT        ******** */
/* ************************************* */
import express from 'express';
import {recipeService} from "./recipe.service";
import {recipeMapper} from "./recipe.mapper";
import {logger} from '../../server/logger/logger';
import { configurationService } from "../../server/core/configurationService.js";

/* ************************************* */
/* ********        CLASS        ******** */
/* ************************************* */
class RecipeController {
	constructor() {
		this.router = express.Router();
	}

	async getRecipes(req,res){
		try{
			let recipes = await recipeService.getRecipes();
			res.json(recipeMapper.formatArrayResponse(recipes));
		}catch(e){
			logger.error('[Recipe Controller] get all recipes',e);
			res.statusCode = 500;
			res.end();
		}
	}

	async getRecipe(req,res){
		const id = req.params.id;
		try{
			let recipe = await recipeService.getRecipe(id);
			res.json(recipeMapper.formatResponse(recipe));
		}catch(e){
			logger.error('[Recipe Controller] get recipe ',e);
			res.statusCode = 500;
			res.end();
		}	
	}

	async postRecipe(req,res){
		const recipe = req.body;
		if(this.validRecipe(recipe)){
			try{
				let createdRecipe = await recipeService.createRecipe(recipe);
				if(createdRecipe){
					res.statusCode = 201;
					res.json(recipeMapper.formatResponse(createdRecipe));
				}else{
					res.statusCode = 409;
					res.end();
				}
			}catch(e){
				logger.error('[Recipe Controller] create recipe',e);
				res.statusCode = 500;
				res.end();
			}
		}else{
			res.statusCode = 400;
			res.end();
		}	
	}

	async deleteRecipe(req,res){
		const id = req.params.id;

		try{
			let recipe = await recipeService.deleteRecipe(id);
			if(recipe){
				res.statusCode = 200;
			}else{
				res.statusCode = 404;
			}
			res.end();
		}catch(e){
			logger.error('[Recipe Controller] delete recipe',e);
			res.statusCode = 500;
			res.end();
		}
	}

	async updateRecipe(req,res){
		const id = req.params.id;
		const recipe = req.body
		if(this.validRecipe(recipe)){
			try{
				let updatedRecipe = await recipeService.updateRecipe(recipe,id);
				if(updatedRecipe){
					res.statusCode = 200;
					res.json(recipeMapper.formatResponse(updatedRecipe));
				}else{
					res.statusCode = 409;
					res.end();
				}
			}catch(e){
				logger.error('[Recipe Controller] create recipe',e);
				res.statusCode = 500;
				res.end();
			}
		}else{
			res.statusCode = 400;
			res.end();
		}
	}


	validRecipe(recipe){
		if(!recipe.hasOwnProperty('title')){
			logger.error('[Recipe Controller] create recipe miss title');
			return false;
		}

		if(!recipe.hasOwnProperty('description')){
			logger.error('[Recipe Controller] create recipe miss description');
			return false;
		}

		if(!recipe.hasOwnProperty('portion')){
			logger.error('[Recipe Controller] create recipe miss portion');
			return false;
		}

		if(!recipe.hasOwnProperty('ingredients')){
			logger.error('[Recipe Controller] create recipe miss ingredients');
			return false;
		}

		if(!recipe.hasOwnProperty('step')){
			logger.error('[Recipe Controller] create recipe miss step');
			return false;
		}

		return true;
	}


	get getRouter(){
		this.router.get('/receipts',this.getRecipes);
		this.router.get('/receipts/:id',this.getRecipe);
		this.router.post('/receipts',this.postRecipe.bind(this));
		this.router.delete('/receipts/:id',this.deleteRecipe);
		this.router.put('/receipts/:id',this.updateRecipe.bind(this));
		return this.router;
	}
}


/* ************************************* */
/* ********        EXPORTS      ******** */
/* ************************************* */

var recipeController = new RecipeController();
export { recipeController };
