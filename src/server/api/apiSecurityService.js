/* ************************************* */
/* ********       IMPORT        ******** */
/* ************************************* */
import jwt from 'express-jwt';
import jsonwebtoken from 'jsonwebtoken';
import {configurationService} from '../core/configurationService';


/* ************************************* */
/* ********        CLASS        ******** */
/* ************************************* */
class ApiSecurityService {
	constructor() {

	}

	async generateToken(content){
    	return jsonwebtoken.sign(content, configurationService.getJwtSecret, {expiresIn: '2 days'});
	}

	securityMiddleware(){        
    	return jwt({ secret: configurationService.getJwtSecret}).unless({path: [configurationService.getUrlPrefix+'/users/login']});
	}
}


/* ************************************* */
/* ********        EXPORTS      ******** */
/* ************************************* */
var apiSecurityService = new ApiSecurityService();
export { apiSecurityService };