// server.js
const express = require('express');
//const mongoose = require('mongoose');
const db = require('./config/connection')
const routes = require('./routes');

const app = express();
const PORT = 3000;



app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(routes);



// Start the server
db.once('open' , ()=>{
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
})
