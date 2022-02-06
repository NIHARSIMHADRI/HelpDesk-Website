const express = require('express'); //Line 1
const mongoose = require('mongoose');

//mongoose.connect("mongodb://localhost:27017/usersDB", { useNewUrlParser: true });

const userSchema = new mongoose.Schema ({
    username: {
        type: String,
        minLength: [5, "username must at least be 5 characters"],
        required: true,
    },
    password: {
        type: String,
        minLength: [8, "password must at least be 8 characters"],       
        required: true,
    },
});

const User = mongoose.model("User", userSchema);

module.exports = User;

// const user = new User({
//     username: "Jilllopioh",
//     password: "yippy"
// });

// User.find(function(err, users){
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(users[0].username);
//     }
// })

//user.save();

//const app = express(); //Line 2
//const port = process.env.PORT || 5000;
//process.env.PORT || 5000; //Line 3  

// // This displays message that the server running and listening to specified port
// app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

// // create a GET route
// app.get('/', (req, res) => { //Line 9
//   res.send("There is a secure connection"); //Line 10
// }); //Line 11
