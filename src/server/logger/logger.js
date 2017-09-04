
/* ************************************* */
/* ********       IMPORT        ******** */
/* ************************************* */
import winston from 'winston';

/* ************************************* */
/* ********        CLASS        ******** */
/* ************************************* */

class Logger {
    constructor() {
        let logger =  new (winston.Logger)({
            transports: [
                new (winston.transports.Console)({
                    colorize: true,
                    level: 'debug'
                }),
                new winston.transports.File({
                    name: 'logs',
                    filename: 'server.log',
                    json: false,
                    level: 'debug'
                })
            ],
            exceptionHandlers: [
                new (winston.transports.Console)({
                    colorize: true,
                    level: 'debug'
                }),
                new winston.transports.File({
                    name: 'exceptions',
                    filename: 'exceptions.log',
                    json: false,
                    level: 'debug'
                })
            ]
        });
        this.info = logger.info;       
        this.debug = logger.debug;       
        this.error = logger.error;       
        this.warn = logger.warn;       

    }

    connectLogger(){
        return (req, res, next) =>{

            // Wait for finish to log
            res.on('finish', function () {
                var logFunction = logger.info;

                // Select log function by status code
                if (res.statusCode) {
                    if (res.statusCode >= 300) logFunction = logger.warn;
                    if (res.statusCode >= 400) logFunction = logger.error;
                }

                // Template
                var template = req.method + ' ' + req.originalUrl + ' - ' + res.statusCode;

                // Log
                logFunction(template);
            });

            // Call next !
            next();
        }
    }
}

/* ************************************* */
/* ********        EXPORTS      ******** */
/* ************************************* */

var logger = new Logger();
export { logger };