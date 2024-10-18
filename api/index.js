import express from 'express'
import mongoose from 'mongoose'
import dotenv, { config } from 'dotenv'
dotenv.config()

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('Connected to mongoDB');
}).catch((err) => {
    console.log(err)
});

const app = express()

app.listen(3000, () => {
    console.log('Server is Running on port 3000')
})