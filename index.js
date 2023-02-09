
const express = require("express");
// const bodyParser = require("body-parser");
const { ObjectId } = require('mongodb')
// import { ObjectId } from "mongodb";
const { getDb, connectToDb } = require('./db')

const User = require('./models/user')

// require('dotenv').config()

// const mongoose = require("mongoose");

//setup express app
const app = express();
app.use(express.json())

//db connection
let db

connectToDb((err) => {
  if(!err) {
    app.listen(4000,  () => {
      console.log("Server Started: now listening for requests");
    });
    db = getDb()
  }
})

// routes
app.get('/users', (req, res) => {
  //current page
  const page = req.query.p || 0 
  const usersPerPage = 3
  
  let users = []

  db.collection('users')
    .find()
    .sort({ firstName: 1 })
    .skip(page * usersPerPage)
    .limit(usersPerPage)
    .forEach(user => users.push(user))
    .then(() => {
      res.status(200).json(users)
    })
    .catch(() => {
      res.status(500).json({error: 'Could not fetch the documents'})
    })
  
})

app.get('/users/:id', (req, res) => {

  if (ObjectId.isValid(req.params.id)) {
    db.collection('users')
      .findOne({_id: new ObjectId(req.params.id) })
      .then(doc => {
        res.status(200).json(doc)
      })
      .catch(err => {
        res.status(500).json({error: 'Could not fetch the document'})
      })
  } else {
    res.status(500).json({error: 'Not a valid doc id'})
  }
})

app.post('/users', (req, res) => {
  const user = req.body

  db.collection('users')
    .insertOne(user)
    .then(result => {
      res.status(201).json(result)
    })
    .catch(err => {
      res.status(500).json({err: 'Could not create a new document'})
    })
})

app.delete('/users/:id', (req, res) => {

  if (ObjectId.isValid(req.params.id)) {
    db.collection('users')
      .deleteOne({_id: new ObjectId(req.params.id) })
      .then(result => {
        res.status(200).json(result)
      })
      .catch(err => {
        res.status(500).json({error: 'Could not delete the document'})
      }) 
  } else {
    res.status(500).json({error: 'Not a valid doc id'})
  }
})


app.patch('/users/:id', (req, res) => {
  const updates = req.body

  if (ObjectId.isValid(req.params.id)) {
    db.collection('users')
      .updateOne({_id: new ObjectId(req.params.id)}, {$set : updates})
      .then(result => {
        res.status(200).json(result)
      })
      .catch(err => {
        res.status(500).json({error: 'Could not update the document'})
      })
  } else {
    res.status(500).json({error: 'Not a valid doc id'})
  }
})

// mongoose.set('strictQuery', true);
// //connect to mongodb
// mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
// const db = mongoose.connection
// db.on('error', (error) => console.error(error))
// db.once('open', () => console.log('Connected to Database'))
// // process.env.DATABASE_URL
// // mongoose.Promise = global.Promise;

// app.use(express.static('public'));

// app.use(bodyParser.json());
// // app.use(bodyParser.json());

// //error handling middleware
// app.use((err, req, res, next) => {
//   // console.log(err);
//   res.status(422).send({error: err.message})
// })

// //initializing routes
// app.use("/api", require("./routes/api"));

//listening for requests
