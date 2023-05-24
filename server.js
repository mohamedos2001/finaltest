import express from "express"
import { engine } from 'express-handlebars';
import mongoose from "mongoose";
import dotenv from 'dotenv'
import subjectrouter from './routes/subjects.js'
import methodOverride from 'method-override'

dotenv.config()

mongoose.connect(process.env.mongoconnect)
const app =express();
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'))
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');



app.use('/subjects',subjectrouter)







app.listen(process.env.port,()=>{
    console.log(`started the appliction on http://localhost:${process.env.port}`)
})