const express = require('express'); //Line 1
const mongoose = require('mongoose');
const cors = require("cors");
//require("dotenv").config({ path: "./config.env" });
const app = express(); //Line 2
const port = process.env.PORT || 5000;
//const herokuServer = "https://secure-ridge-12824.herokuapp.com/localhost:5000";
const UserModel = require("./models/Users");

// const corsOptions = {
//    mode: "cors",
//    origin:'*', 
//    credentials:'include',            //access-control-allow-credentials:true
//    optionSuccessStatus:200,
// }

mongoose.connect("mongodb://localhost:27017/usersDB", { useNewUrlParser: true });

app.use(cors());
//app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.route("/users").get(function(req, res){
  UserModel.find(function(err, foundUsers){
    if (!err) {
      res.json(foundUsers);
    } else {
      res.json(err);
    }
  })
}).post(function(req, res){
  console.log(req.body.username);
  console.log(req.body.password);

  const newUser = new UserModel({
    username: req.body.username,
    password: req.body.password
  });

  newUser.save(function(err){
    if (!err) {
      res.json("User was successfully added");
    } else {
      res.json(err);
    }
  });
}).delete(function(req, res){
  UserModel.deleteMany(function(err){
    if (!err){
      res.json("All articles were deleted");
    } else {
      res.json(err);
    }
  })
});

app.route("/users/:userTasks").get(function(req, res){
  UserModel.findOne({username: req.params.userTasks}, function(err, foundUser){
    if (!err){
      res.json(foundUser); 
    } else {
      res.json(err);
    }
  });
});

app.route("/users/changeAccount/:changeCredentials").put(function(req, res){
  UserModel.replaceOne(
    {password: req.params.changeCredentials},
    {username: req.body.username, password: req.body.password},
    function(err) {
      if (!err) {
        res.json("Password has been changed")
      }
    }
  )
}).patch(function(req, res){
  UserModel.findOneAndUpdate(
    {password: req.params.changeCredentials},
    {$set: req.body},
    function(err){
      if (!err){
        res.json("The user's password was updated");
      }
    }
  )
}).delete(function(req, res){
  UserModel.deleteOne(
    {password: req.params.changeCredentials},
      function(err){
        if (!err){
          res.json("Account has been deleted");
        }
      }
  )
})

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

// create a GET route
app.get('/', (req, res) => { //Line 9
  res.json("There is a secure connection"); //Line 10
}); //Line 11