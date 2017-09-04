
/* ************************************* */
/* ********       IMPORT        ******** */
/* ************************************* */


/* ************************************* */
/* ********        CLASS        ******** */
/* ************************************* */
class UserMapper {
    constructor() {
    }

    formatResponse(userInstance){
        return {
            id: userInstance._id,
            userName: userInstance.userName,
            firstName : userInstance.firstName,
            lastName : userInstance.lastName,
            role : userInstance.role
        }
    }

    formatArrayResponse(arryUserInstance){
        if (arryUserInstance){
                var list = [];
                arryUserInstance.forEach(function(userInstance){
                    list.push(this.formatResponse(userInstance));
                }.bind(this));
                
                return list;
        }else{
            return arryUserInstance;
        }
    }
}

/* ************************************* */
/* ********        EXPORTS      ******** */
/* ************************************* */

var userMapper = new UserMapper();
export { userMapper };