
/* ************************************* */
/* ********       REQUIRE       ******** */
/* ************************************* */
// import config from ;

const config = require('../../config.json');
/* ************************************* */
/* ********        CLASS        ******** */
/* ************************************* */

export class ConfigurationService {
    constructor() {
        // console.log(config);
    }

    isDevelopmentMode() {
        return config['ENV'] === 'development';
    }

    get getPort() {
        return config['SERVER']['GENERAL']['PORT'];
    }

    get getJwtSecret() {
        return config['SERVER']['SECURITY']['JWT_SECRET'];
    }

    get getEnv() {
        return config['ENV'];
    }

    get getUrl() {
        return config['DATABASE']['URL'];
    }

    get getUrlPrefix() {
        return config['URLPREFIX'];
    }

}

/* ************************************* */
/* ********        EXPORTS      ******** */
/* ************************************* */

var configurationService = new ConfigurationService();
export { configurationService };