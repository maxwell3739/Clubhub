var mongoose = require('mongoose')
var Schema = mongoose.Schema
var passportLocalMongoose = require('passport-local-mongoose');

//MODEL FOR TOKEN
var tokenSchema = new Schema({
    userId: String,
    token: String,
    createdAt: Date
})
var Token = mongoose.model('Token', tokenSchema)

//MODEL FOR CLUB
var clubSchema = new Schema({
  clubName: String,
  password: String
})
var Club = mongoose.model('Club', clubSchema)

var studentSchema = new Schema({
  studentName: String,
  password: String
})
var Student = mongoose.model('Student', studentSchema)

module.exports = {
  Club: Club,
  Student: Student,
  Token: Token
}
