import express, { Request, Response } from 'express';
import userRoute from './route/userRoute'
import dotenv from 'dotenv';
import { UserController } from './controller/UserController';
dotenv.config();

const app = express();

const port = process.env.PORT;


app.use(express.json());

app.use('/users', userRoute);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
