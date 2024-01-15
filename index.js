// require('dotenv').config()

// const express = require('express')

// const app = express()

// const PORT = 8000;

// app.get('/', (req,res)=>{
//     res.send('Hello Homepage');
// })
// app.get('/login', (req,res)=>{
//     res.send(' <h1> Hello From Login </h1> ')
// })

// app.listen(process.env.PORT, ()=>{
//     console.log(`Server started at Port ${PORT}`);
// })



const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.send(' <h1> Hello Server </h1>')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
