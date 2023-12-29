const express = require('express');
require('dotenv').config()
const app = express();
const PORT = 8080;
const cors = require('cors');
const mongoose = require('mongoose');
const AboutRouter = require('./routes/About.routes')

app.use(cors());
app.use(express.json()); 

mongoose.connect(`mongodb+srv://seyagubzade:seyagubzade123@cluster0.2wwolad.mongodb.net/`).then(()=>{
    console.log("connected to db")
})

app.use("/about", AboutRouter)

app.listen(PORT, ()=>{
    console.log(`Runs on port : ${PORT}`)
})
