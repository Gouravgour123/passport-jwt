
const jwt = require('jsonwebtoken');
const { userModels } = require('../Models/userModel');

const registration = async (req,res)=>{
    const {name,email,password,mobile,city}=req.body;
    const user = await userModels.findOne({email:email});
    console.log(user)
    if(user){
        return res.status(404).send({success:false, message:"email is already exist"})
    }
    const newuser = await userModels.create({...req.body});
    res.status(200).send({success:true,message:"registration succesfully",data:newuser})
}



const login = async(req,res)=>{
    const {email,password}=req.body;
    const user = await userModels.findOne({email:email})
    if(!user){
        return res.status(404).send({Success:false,message:"email is not exist"})
    }  
    if (user.password !== password) {
        return res.status(401).send({ success: false, message: "Incorrect password" });
    }
    let token = jwt.sign({user:user},"gour", { expiresIn: '1h' })
    await res.setHeader("token",token)
    res.status(200).send({ success: true, message: "Login successful", data: user,token:token });
}

  

module.exports = {registration,login}