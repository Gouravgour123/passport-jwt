// const { default: mongoose } = require("mongoose");

const { default: mongoose } = require("mongoose");

mongoose.connect("mongodb://localhost:27017/practice")
.then(()=>console.log("connected")).catch(()=>console.log("not connected"));