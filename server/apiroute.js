var express = require('express')
var router = express.Router()
var models = require('./models/models')
var Club = models.Club
var Token = models.Token
var Student = models.Student

//REGISTER CLUB
router.post('/users/registerclub', function(req,res) {
  var newClub = new Club ({
    clubName: req.body.clubName,
    password: req.body.password,
  })
  newClub.save(function(err, club){
    if(err){
      res.json({failure: "database error"})
    } else {
      res.json({success: true})
    }
  })
})

//REGISTER STUDENT
router.post('/users/registerstudent', function(req,res) {
  var newStudent = new Student ({
    studentName: req.body.studentName,
    password: req.body.password,
  })
  newStudent.save(function(err, student){
    if(err){
      res.json({failure: "database error"})
    } else {
      res.json({success: true})
    }
  })
})

//LOGIN STUDENT
  router.post('/users/loginstudent', function(req,res) {
    var login = {
      clubName: req.body.clubName,
      password: req.body.password
    }

    Club.find(login, function(err, clubInfo) {
      if(err){
        res.json({LoginFailed: "Login Failed"})
      }
      //RESPOND TO CLIENT
      res.json({
        success: true,
        response: {
          info: clubInfo
        }
      })
    })
  })

  //LOGIN CLUB
    router.post('/users/loginclub', function(req,res) {
      var login = {
        clubName: req.body.clubName,
        password: req.body.password
      }

      Club.find(login, function(err, clubs) {
        //RESPOND TO CLIENT
        if(clubs.length>0) {
          res.json({
            success: true,
            response: {
              token: clubs[0].clubName + new Date(),
              id: clubs[0]._id
            }
          })
          //SAVE TOKEN
          var newToken = new Token ({
            userId: clubs[0]._id,
            token: clubs[0].clubName + new Date(),
            createdAt: Date.now()
          })
          newToken.save(function(err, usr){
            if(err){
              res.json({failure: "database error"})
            } else {
              res.json({success: true})
            }
          })
        }
      else {
          res.json({
            success: false,
            error: "Invalid Login"
          })
      }
    })
  })



module.exports = router
