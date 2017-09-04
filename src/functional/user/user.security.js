
/* ************************************* */
/* ********       IMPORT        ******** */
/* ************************************* */
import {logger} from '../../server/logger/logger';
import {userService} from "./user.service";

/* ************************************* */
/* ********        CLASS        ******** */
/* ************************************* */
class UserSecurity {

	acceptOnlyRoles(acceptedRoles){
		return async (req,res,next) =>{
			if(req.user){
				try{
		        	// find user in db
		        	const user = await userService.getUser(req.user.id);
		        	if(user === null){
		        		logger.error('[User Security] User not found in database => Unauthorized');
		                res.statusCode = 401;
		                res.end();
		                return;
		        	}

		        	if(acceptedRoles.indexOf(user.role) === -1){
		        		// Forbidden
		                res.statusCode = 403;
		                res.end();
		                return;
		        	}else{
		        		next();
		        	}
				}catch(e){
					console.log('NO',e);
				}
			}else{
				// Forbidden
                res.statusCode = 403;
                res.end();
                return;
			}
		}
	}

	


}


/* ************************************* */
/* ********        EXPORTS      ******** */
/* ************************************* */

var userSecurity = new UserSecurity();
export { userSecurity };
