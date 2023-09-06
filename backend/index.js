import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';
// import cors from 'cors';

const app = express();

dotenv.config();

// body-parser
app.use(express.json());

//Middleware for handling CORS Policy
// app.use(cors());
// app.use(
//     cors({
//         origin: 'http://localhost:3000/',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type'],
//     })
// // );
// const corsConfig = {
//     origin: '',
//     credentials: true,
//     methods: ['GET', 'POST', 'PUT', 'DELETE']
// }
// app.use(cors(corsConfig))
// app.options("", cors(corsConfig))
try {
    app.get('/', (req, res) => {
        res.send('Hello There!');
        // console.log(res);
        // console.log(req);
    });
} catch (error) {
    console.log(error);
}

// app.use('/books', booksRoute);

mongoose
    .connect(
        'mongodb+srv://pandeysiddhant21:bWTp82wib2cgZvZJ@book-store-mern.6a5oqhk.mongodb.net/books-collection?retryWrites=true&w=majority'
    )
    .then(() => {
        console.log('app connected to database.');
        app.listen(5555, () => {
            console.log(`app is listening to port: 5555`);
        });
    })
    .catch((err) => {
        console.log(err);
    });
