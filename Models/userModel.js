const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String},
    mobile:{type:String},
    city:{type:String}
})

const userModels = new mongoose.model("user",userSchema)

module.exports = {userModels}