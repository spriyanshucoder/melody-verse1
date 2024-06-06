import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

const app = express();

app.listen(3000, () => {
  console.log('Server listening on port 3000  ');
});


app.use("/api/user", userRoutes);


//backend/api me hai to kya karna hai run ke liye node ./api/index.js     cd.. for root after that  npm init-y for package.json make folder on melody verse after that install express after that write common express after that package.json change type: module afte that better package.json me script me we will add dev: nodemon api/index.js  start: node api/index.js then if i run npm run dev ----nodemon yeah
//move gitignore to client side
//npm i mongoose in root
//mongodb--
//npm i dotenv
