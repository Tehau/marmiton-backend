
/* ************************************* */
/* ********       REQUIRE       ******** */
/* ************************************* */
import crypto from 'crypto';
import {logger} from '../logger/logger';
// Variables
const lengthRandomBytes = 30;
const iterations = 10000;
const keylen = 50;
const digest = 'sha512';

/* ************************************* */
/* ********        CLASS        ******** */
/* ************************************* */
class SecurityService {
    constructor() {
        
    }

    get generateSalt(){
        return crypto.randomBytes(lengthRandomBytes).toString('hex');
    }

     generateHash(text, salt){
        return new Promise((resolve,reject) => {
            crypto.pbkdf2(text, salt, iterations, keylen, digest,async (err,hash) => {
                resolve(hash.toString('hex'));
            });
        });
    }

    async compare(text, hash, salt){
        let hashFromPass = await this.generateHash(text,salt);
        if (hashFromPass.toString('hex') === hash){
            return  await Promise.resolve();
        }else{
            return  await Promise.reject();
        }
    }
}

/* ************************************* */
/* ********        EXPORTS      ******** */
/* ************************************* */

var securityService = new SecurityService();
export { securityService };
