import mongoose  from "mongoose";
import 'dotenv/config';

const MONGODB_URI =process.env.MONGO_URI || 'mongodb://localhost:27017/';

const MONGODB_DB_MAIN = process.env.MONGO_DB_NAME || 'MeetingsDB';

const MONGO_URI = `${MONGODB_URI}${MONGODB_DB_MAIN}`;

const connectOptions = {
    // parser if they find a bug in the new parse
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

export const mongoDBConnections = mongoose.createConnection(MONGO_URI, connectOptions);
