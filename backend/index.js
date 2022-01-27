import express, { Router } from "express";
import mongoose from "mongoose";
import route from "./route/routes.js";
import cors from 'cors';
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use("/users", route);




const PORT = 8000;
const URL = 'mongodb+srv://neha:neha@crud.tdd6p.mongodb.net/cruddb?retryWrites=true&w=majority';

mongoose.connect(URL, { useNewUrlParser : true}).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });

}).catch(error => {
    console.log("Error: ", error.message);

})

