
/* ************************************* */
/* ********       IMPORT        ******** */
/* ************************************* */
import {userModel} from './user.model';
const User = userModel.model;

/* ************************************* */
/* ********        CLASS        ******** */
/* ************************************* */
class UserDao {

	async getUsers(){
		return User.find();
	}

	async getUserById(id){
		return User.findById(id);
	}

	async getUserByUserName(userName){
		return User.findOne({'userName' : userName});
	}

	async createUser(userToCreate){
		let user = new User(userToCreate);
		return await user.save();
	}

	async deleteUser(id){
		return await User.findByIdAndRemove(id);
	}

	async getAdmin(){
		return User.find().where('role','administrateur')
	}

	async updateUser(userToUpdate){
		const id = userToUpdate.id;
		delete userToUpdate.id; 
		return User.findByIdAndUpdate(id,userToUpdate,{new:true});
	}
}


/* ************************************* */
/* ********        EXPORTS      ******** */
/* ************************************* */

var userDao = new UserDao();
export { userDao };
