import cors from 'cors';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import compression from 'compression';

/**
 * @function
 * @description Fastify middleware
 * @param {fastify.Application} app
 * @returns void
 */
 function middlewareInit (app){
    // Connect socket.io
    app.use(
        bodyParser.urlencoded({
            extended: true,
        })
    );
    app.use(bodyParser.json({
        limit: "1mb"
    }));
    app.use(compression());
    app.use(helmet());
    app.use(cors({
        allowedOrigins:'*'
    }));
}

export default middlewareInit;