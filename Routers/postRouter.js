const express = require('express');
const { updatePost, deletePost, createPost, getPost } = require('../Controller/postController');

const verifyToken = require('../Helper/passportAuthenticate');
const postRoute = express()

postRoute.post('/create', verifyToken, createPost)
postRoute.put('/update/:id', verifyToken, updatePost)
postRoute.get('/getPost', verifyToken, getPost)
postRoute.delete('/delete/:id', verifyToken, deletePost)

module.exports = {postRoute}