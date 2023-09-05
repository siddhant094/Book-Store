import express from 'express';
import { PORT, MongoDBURL } from './config.js';
import mongoose from 'mongoose';
import { Book } from './models/bookModels.js';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

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
// );

app.get('/', (req, res) => {
    res.send('<h1>Hello There!</h1>');
});

app.use('/books', booksRoute);

mongoose
    .connect(MongoDBURL)
    .then(() => {
        console.log('app connected to database.');
        app.listen(PORT, () => {
            console.log(`app is listening to port: ${PORT}`);
        });
    })
    .catch((err) => {
        console.log(err);
    });
