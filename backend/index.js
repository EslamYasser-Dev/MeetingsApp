import server from './server.js';
import 'dotenv/config'

server.listen({port:process.env.PORT|| 3363, host: '0.0.0.0'} )
    .then((address) => console.log(`server listening on ${address}`))
    .catch((err) => console.log(err));
