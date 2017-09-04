
/* ************************************* */
/* ********       IMPORT        ******** */
/* ************************************* */
import express from 'express';
import {userService} from "./user.service";
import {userMapper} from "./user.mapper";
import {userSecurity} from "./user.security";
import {logger} from '../../server/logger/logger';
import { configurationService } from "../../server/core/configurationService.js";

/* ************************************* */
/* ********        CLASS        ******** */
/* ************************************* */
class UserController {
	constructor() {
		this.router = express.Router();
	}

	async getUsers(req,res){
		const user = req.user;
		try{
			let users = await userService.getUsers(user);
			res.json(userMapper.formatArrayResponse(users));
		}catch(e){
			logger.error('[User Controller] get all users',e);
			res.statusCode = 500;
			res.end();
		}
	}

	async getCurrentUser(req,res){
		const user = req.user;
		if(user){
			try{
				let currentUser = await userService.getUser(user.id);
				res.json(userMapper.formatResponse(currentUser));
			}catch(e){
				logger.error('[User Controller] get current user',e);
				res.statusCode = 500;
				res.end();
			}
		}else{
			res.statusCode = 400;
			res.end();
		}
	}

	async getUser(req,res){
		/* TODO : GET ONE USER BY ID & CREATE ROUTE */
	}

	async postUser(req,res){
		const user = req.body;
		if(this.validUser(user)){
			try{
				let createdUser = await userService.createUser(user);
				if(createdUser){
					res.statusCode = 201;
					res.json(userMapper.formatResponse(createdUser));
				}else{
					res.statusCode = 409;
					res.end();
				}
			}catch(e){
				logger.error('[User Controller] create user',e);
				res.statusCode = 500;
				res.end();
			}
		}else{
			res.statusCode = 400;
			res.end();
		}	
	}

	async login(req,res){
		const auth = req.body;

		if(!auth.hasOwnProperty('login')){
			logger.error('[User Controller] login misss login');
			res.statusCode = 400;
			res.end();
		}
		if(!auth.hasOwnProperty('password')){
			logger.error('[User Controller] login misss password');
			res.statusCode = 400;
			res.end();
		}

		try{
			let jwt = await userService.login(auth.login,auth.password);
			if(jwt){
				res.statusCode = 200;
				res.json(jwt);
			}else{
				res.statusCode = 401;
				res.end();
			}
		}catch(e){
			logger.error('[User Controller] login user',e);
			res.statusCode = 500;
			res.end();
		}
		
	}

	async deleteUser(req,res){
		const id = req.params.id;

		try{
			let user = await userService.deleteUser(id);
			if(user){
				res.statusCode = 200;
			}else{
				res.statusCode = 404;
			}
			res.end();
		}catch(e){
			logger.error('[User Controller] delete user',e);
			res.statusCode = 500;
			res.end();
		}
	}

	async updateUser(req,res){
		const currentUser = req.user;
		const user = req.body
		if(this.validUser(user)){
			try{
				let updatedUser = await userService.updateUser(user,currentUser);
				if(updatedUser){
					res.statusCode = 201;
					res.json(userMapper.formatResponse(updatedUser));
				}else{
					res.statusCode = 409;
					res.end();
				}
			}catch(e){
				logger.error('[User Controller] create user',e);
				res.statusCode = 500;
				res.end();
			}
		}else{
			res.statusCode = 400;
			res.end();
		}
	}


	validUser(user){
		if(!user.hasOwnProperty('userName')){
			logger.error('[User Controller] create user miss userName');
			return false;
		}

		if(!user.hasOwnProperty('firstName')){
			logger.error('[User Controller] create user miss firstName');
			return false;
		}

		if(!user.hasOwnProperty('lastName')){
			logger.error('[User Controller] create user miss lastName');
			return false;
		}

		if(!user.hasOwnProperty('password') && !user.hasOwnProperty('id')){
			logger.error('[User Controller] create user miss password');
			return false;
		}

		if(!user.hasOwnProperty('role')){
			logger.error('[User Controller] create user miss role');
			return false;
		}

		return true;
	}


	get getRouter(){
		this.router.get('/users',userSecurity.acceptOnlyRoles([configurationService.admin,configurationService.prof]),this.getUsers);
		this.router.get('/users/current',this.getCurrentUser);
		this.router.post('/users',this.postUser.bind(this));
		this.router.post('/users/login',this.login.bind(this));
		this.router.delete('/users/:id',userSecurity.acceptOnlyRoles([configurationService.admin]),this.deleteUser);
		this.router.put('/users/:id',this.updateUser.bind(this));
		return this.router;
	}
}


/* ************************************* */
/* ********        EXPORTS      ******** */
/* ************************************* */

var userController = new UserController();
export { userController };
