import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

dotenv.config();

const port = process.env.port || 5500;

// body-parser
app.use(express.json());

//Middleware for handling CORS Policy
app.use(cors());
// app.use(
//     cors({
//         origin: 'http://localhost:3000/',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type'],
//     })
// // );

app.get('/', (req, res) => {
    res.send('<h1>Hello There!</h1>');
});

app.use('/books', booksRoute);

mongoose
    .connect(process.env.MongoDBURL)
    .then(() => {
        console.log('app connected to database.');
        app.listen(port, () => {
            console.log(`app is listening to port: ${port}`);
        });
    })
    .catch((err) => {
        console.log(err);
    });
