// const { MongoClient } = require('mongodb')
// const mongoose = require('mongoose')

const { MongoClient } = require("mongodb");

// mongoose.set('strictQuery', true);

let dbConnection
let uri = 'mongodb+srv://oolaoluwatobi:123ola@cluster0.g928usv.mongodb.net/'
// 'mongodb://0.0.0.0:27017/usersDB'

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect(uri)
      .then((client) => {
        dbConnection = client.db() 
        return cb()
      })
      .catch(err => {
        console.log(err)
        return cb(err)
      })
  },
  getDb: () => dbConnection
}