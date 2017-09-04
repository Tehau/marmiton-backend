"use strict";
import {Server} from './server/server';

let server = new Server();
(async function startUp(){
	await server.init();
	server.listen();
})();
