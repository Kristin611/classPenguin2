// server.js
const express = require('express');
//const mongoose = require('mongoose');
const db = require('./config/connection')
const routes = require('./routes');

const app = express();
const PORT = 3000;

// Connect to MongoDB
//mongoose.connect('mongodb://localhost/social_network', { useNewUrlParser: true, useUnifiedTopology: true });

// Define Mongoose models (User and Thought)
// const User = mongoose.model('User', { name: String, email: String, friends: [String] });
// const Thought = mongoose.model('Thought', { content: String, reactions: [{ type: String }] });


app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(routes);



// Start the server
db.once('open' , ()=>{
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
})
