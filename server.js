import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
//import routes
import postRoutes from './routes/postRoutes.js';
import userRoutes from './routes/userRoutes.js';
import exampleRoutes from './routes/exampleRoutes.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors()); 

mongoose
  .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`)
  .then(() => {
    console.log("Database connected! 😃");
  })
  .catch((error) => {
    console.log(error.message);
    console.log("🤨");
  });

  // configure our routes
app.use('/api/users',userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/examples', exampleRoutes);

//listening for rapp.use('/api/posts', postRoutes);
app.listen(3001, ()=> {
    console.log("The server is listening for requests....")
});