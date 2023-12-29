const mongoose = require("mongoose");

const About = mongoose.model("About", new mongoose.Schema({
    icon: String,
    title: String,
    description: String,
    date: String
}))

module.exports = {About}