import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import cors from 'cors';
import dotenv from 'dotenv'


const app = express()
dotenv.config()
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());


const CONNECTION_URL = 'mongodb+srv://roshandas:r1o2s3h4a5n6@connectify.fevvqa8.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(()=> {
    app.listen(PORT, ()=>{ console.log(`server connected on port  http://localhost:${PORT}`) })
}).catch((err)=>{
    console.log(`server not connected: ${err}`);
})


