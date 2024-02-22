
const passport = require('passport');
const { post } = require('../Models/postModel');

const createPost = async (req, res) => {
  try {
    const newPost = new post({
      title: req.body.title,
      body: req.body.body,
      createdBy: req.user._id,
      active: req.body.active,
      geolocation: {
        latitude: req.body.latitude,
        longitude: req.body.longitude
      }
    });

    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const updatePost = async(req, res) => {
  try {
    console.log(req.params)
  const updatepost = await post.findOne({_id:req.params.id})
    if(!updatepost){res.status(400).send({succes:false,message:"post not found"})}
      let postUpdate = await post.findByIdAndUpdate(req.params.id,req.body,{new:true})
      res.status(200).send({ succes: true, message: "post updated", data: postUpdate })
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

const getPost = async (req,res)=>{
  try {
      
      let user =  await post.find();
      if(!user){
          return res.status(400).send({Success:false,message:"post is not fund"})
      }
      res.status(200).send({success:true,message:"get post",Data:user})
  } catch (error) {
      res.status(500).send({Success:false,message:"server crased"})
  }
}

const deletePost = async (req, res) => {
  const id= req.params.id
  try {
    // Delete the post
    await post.findByIdAndDelete(id);
    res.send('post deleted')
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {createPost,updatePost,deletePost,getPost};
