import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import compress from 'compression';
import cors from 'cors';
import {logger} from './logger/logger';
import {configurationService} from './core/configurationService';
import {dataBase} from './database/database';
import {apiRouter} from './api/apiRouter';
import {apiSecurityService} from './api/apiSecurityService';
import { recipeService } from '../functional/recipe/recipe.service'

export class Server {

	constructor() {
		this.app = express();	
	}

	listen(){
	    logger.debug('[Server] Begin Listen...');
	    // Listen
	    this.app.listen(configurationService.getPort);

	    logger.debug('[Server] End Listen...');
	    logger.info('[Server] Listen on port : ' + configurationService.getPort);
	}

	async init(){
		try{
			logger.info('[Server] Init server...');

			this.app.use(helmet());

			if(configurationService.isDevelopmentMode()){
				this.app.use(cors());
			}
			
			this.app.use(bodyParser.json());
			this.app.use(bodyParser.urlencoded({ extended: true }));

			this.app.use(compress());

			await dataBase.init();

			await recipeService.initRecipe();
			// this.app.use(apiSecurityService.securityMiddleware());
			
			this.app.use(apiRouter.getRouter);

			return true;
		}catch(e){
			logger.error('[Server] init' , e);
		}
	}

}