import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGO_URL = process.env.MONGO_URL;
const MONGO_PORT = process.env.MONGO_PORT;

mongoose.connect(`mongodb://${MONGO_URL}:${MONGO_PORT}/wetube`, {
  useNewUrlParser: true,
  useFindAndModify: false
});

const db = mongoose.connection;

const handleOpen = () => console.log('Connected to DB');
const handleError = error => console.log(`Error on DB Connection: ${error}`);

db.once('open', handleOpen);
db.on('error', handleError);
