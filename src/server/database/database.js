
/* ************************************* */
/* ********       IMPORT        ******** */
/* ************************************* */
import mongoose from 'mongoose';
import {configurationService} from '../core/configurationService';
import {logger} from '../logger/logger';

/* ************************************* */
/* ********        CLASS        ******** */
/* ************************************* */

class DataBase {


    async init(){
        logger.info('[Database] Init database');
        try {
            mongoose.Promise = global.Promise;
            
            mongoose.connect(configurationService.getUrl);

            mongoose.connection.on('connected', function () {
                logger.debug('Mongoose connection open to ' + configurationService.getUrl);
                return true;
            });

            // If the connection throws an error
            mongoose.connection.on('error',function (err) {
                logger.error('Mongoose connection error');
            });

            // When the connection is disconnected
            mongoose.connection.on('disconnected', function () {
                logger.info('Mongoose default connection disconnected');
            });

            logger.info('[Database] Init database end');
            
        }catch(e){
            logger.error('[Database] Error while connect to database',e);
        }
    }
}

/* ************************************* */
/* ********        EXPORTS      ******** */
/* ************************************* */
var dataBase = new DataBase();
export { dataBase };
