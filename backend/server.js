import cors from "@fastify/cors"; 
import fastify from 'fastify';
import { Server } from 'socket.io';
// import routes from '../config/router';
import middlewareInit from './config/middleware.js';
// import socketConnection from '../components/Chat/socket.io';

/**
 * @type {fastify}
 * @constant {fastify.Application}
 */
const app = fastify({ logger: false });

(async () => {
  const io = new Server(app.server);
  io.on('connection', (socket) => {
    console.log("\n new connection :", socket.id);
  })

  await app.register(cors, { 
        
  })
  /**
   * @description fastify.Application Middleware
   */
  middlewareInit(app);

  /**
   * @description fastify.Application Routes
   */
  // routes.init(app);

  /**
   * @description fastify.Application Sockets for Chat component
   */
  // socketConnection.init(io);
})();

export default app;
