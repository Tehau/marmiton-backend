
/* ************************************* */
/* ********       IMPORT        ******** */
/* ************************************* */
import mongoose from 'mongoose';
import  { configurationService } from "../../server/core/configurationService.js";
/* ************************************* */
/* ********        CLASS        ******** */
/* ************************************* */
class UserModel {
    constructor() {
        this.schema = new mongoose.Schema({
            firstName : String,
            lastName : String,
            userName : String,
            role : {
                type : String,
                enum : configurationService.getRoles
            },
            hash: String,
            salt: String
        });
        
        this.model = mongoose.model('User',this.schema);
    }
}

/* ************************************* */
/* ********        EXPORTS      ******** */
/* ************************************* */

var userModel = new UserModel();
export { userModel };