const express = require('express')

const app = express()

const PORT = 8000;

app.get('/', (req,res)=>{
    res.send('Hello Homepage');
})
app.get('/login', (req,res)=>{
    res.send(' <h1> Hello From Login </h1> ')
})

app.listen(PORT, ()=>{
    console.log(`Server started at Port ${PORT}`);
})