// server.js
const express = require('express');
//const mongoose = require('mongoose');
const db = require('./config/connection')
const path = require('path')
//const db = require('./config/connection')
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT||3001;



app.use(express.urlencoded({extended:true}))
app.use(express.json())
if(process.env.NODE_ENV==='production'){
  app.use(express.static(path.join(__dirname,'../client/build')))
}

app.use(routes);



// Start the server
db.once('open' , ()=>{
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
})
