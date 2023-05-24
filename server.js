import express from "express";
import mongoose from "mongoose";
import { engine } from "express-handlebars";
import dotenv from "dotenv";
import doctorrouter from './routes/route.js'
import methodOverride from 'method-override'
dotenv.config();

mongoose.connect(process.env.mongConnection);

const app = express();
app.use(express.urlencoded({extended:true}));
app.use('/doctor',doctorrouter)

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');
app.use(methodOverride('_method'))





app.listen(process.env.port, () => {
    console.log(`Started application on URL: http://localhost:${process.env.port}`);
})