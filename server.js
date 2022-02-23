const express = require('express');
const todoRouter = require('./router/todoRouter');
const userRouter = require('./router/userRouter');

const app = express();

const PORT = 3000;

app.use('/todos', todoRouter);
app.use('/user', userRouter);

app.listen(PORT, (req, res) => {
  console.log(`Server listening at ${PORT}`);
});
