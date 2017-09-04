
/* ************************************* */
/* ********       IMPORT        ******** */
/* ************************************* */
import express from 'express';
import {configurationService} from '../core/configurationService';
import {recipeController} from '../../functional/recipe/recipe.controller';
/* ************************************* */
/* ********        CLASS        ******** */
/* ************************************* */
class Router {
	constructor() {
		this.router = express.Router();
	}

	get getRouter(){
		this.router.use(configurationService.getUrlPrefix,recipeController.getRouter);
		return this.router;
	}
}


/* ************************************* */
/* ********        EXPORTS      ******** */
/* ************************************* */

var apiRouter = new Router();
export { apiRouter };
