const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send("Request recieved");
})

app.listen(port, ()=>{
  console.log(`Server is listening on https://localhost:${port}`);
})