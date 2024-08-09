//cloudinary --> store image and mp3 files
// cors --> to connect backend and frontend 
// express --> to create backend apis 
// mongoose to managae our database
// multer using this we can uploaad images and mp3 that we get from the frontend

import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import songRouter from './src/routes/songRoute.js';
import connectDB from './src/config/mongodb.js';
import connectCloudinary from './src/config/cloudinary.js';
import albumRouter from './src/routes/albumRoute.js';

// app config
const app = express();
const port =process.env.PORT || 4000;
connectDB();
connectCloudinary();


// middlewares
app.use(express.json());
//hi
app.use(cors());

// intializing routes
app.use("/api/song", songRouter)
app.use('/api/album',albumRouter)

app.get('/',(req,res)=> res.send("API working"))

app.listen(port,()=>console.log(`Server started on ${port}`));