
/* ************************************* */
/* ********       IMPORT        ******** */
/* ************************************* */
import {logger} from '../../server/logger/logger';
import {securityService} from '../../server/core/securityService';
import {apiSecurityService} from '../../server/api/apiSecurityService';
import { configurationService } from "../../server/core/configurationService.js";
import {userDao} from "./user.dao";

/* ************************************* */
/* ********        CLASS        ******** */
/* ************************************* */
class UserService {

	async getUsers(){
		return await userDao.getUsers();
	}

	async getUser(userId){
		return await userDao.getUserById(userId);
	}

	async createUser(userToCreate){
		try{
			let user = await userDao.getUserByUserName(userToCreate.userName);
			if(user){
				return null;
			}else{
				const salt = securityService.generateSalt;
				const hash = await securityService.generateHash(userToCreate.password,salt);
				userToCreate.salt = salt;
				userToCreate.hash = hash;
				const user = await userDao.createUser(userToCreate);
				return user;	
			}
		}catch(e){
			logger.error('[User service] createUser',e);
		}
	}

	async login(login,password){
		try{
			let user = await userDao.getUserByUserName(login);
			if(user){
				await securityService.compare(password,user.hash,user.salt);
				return await apiSecurityService.generateToken({id : user.id});
			}else{
				return null;	
			}
		}catch(e){
			logger.error('[User service] login',e);
		}
	}


	async deleteUser(id){
		return await userDao.deleteUser(id);
		
	}

	async updateUser(userToUpdate, currentUser){
		currentUser = await userDao.getUserById(currentUser.id);
		if(currentUser.role === configurationService.admin){
			return await userDao.updateUser(userToUpdate);
		}else{
			return null;
		}
	}

	async initFirstAdmin(){
		try{
			let admins = await userDao.getAdmin();
			if(admins.length){
				return;
			}else{
				let admin = {
					userName: 'brendiche',
					password: '17031992_Br',
					role: 'administrateur',
					firstName:'Brendan',
					lastName:'Quétineau'
				};
				const salt = securityService.generateSalt;
				const hash = await securityService.generateHash(admin.password,salt);
				admin.salt = salt;
				admin.hash = hash;
				const user = await userDao.createUser(admin);
				return user;
			}
		}catch(e){
			logger.error('[User service] initFirstAdmin',e);
		}
	}

}


/* ************************************* */
/* ********        EXPORTS      ******** */
/* ************************************* */

var userService = new UserService();
export { userService };
