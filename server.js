const express = require('express');
require('./DbConnection/mongoose')
const { postRoute } = require('./Routers/postRouter');
const { userRouter } = require('./Routers/userRouter');

const app = express();
const PORT = 3400;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/user',userRouter)
app.use('/post',postRoute)
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
