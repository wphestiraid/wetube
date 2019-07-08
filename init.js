import dotenv from 'dotenv';
import './db';
import app from './app';
import './models/video';
import './models/comment';
import './models/user';

dotenv.config();

const SERVER_PORT = process.env.SERVER_PORT || 4000;

const handleListening = () =>
  console.log(`Listening on: http://localhost:${SERVER_PORT}`);

app.listen(SERVER_PORT, handleListening);
