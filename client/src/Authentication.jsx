import './App.css';
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import Button from '@mui/material/Button';

// const api = axios.create({
//   baseURL: 'localhost:5000/users'
// })

var usernameCheck = false;
var passwordCheck = false;

function Authentication() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/users").then((response) => {
      setListOfUsers(response.data);
    })
  }, [])

  const createUser = () => {
    axios.post("http://localhost:5000/users", {
      username,
      password,
    }).then((response) => {
      setListOfUsers([...listOfUsers, {
        username,
        password,
      }]);
    })
  }

  function usernameLengthCheck(event) {
    if (event.target.value.length >= 5) {
      usernameCheck = true;
    } else {
      usernameCheck = false;
    }
  }

  function passwordLengthCheck(event) {
    if (event.target.value.length >= 8) {
      passwordCheck = true;
    } else {
      passwordCheck = false;
    }
  }

  function buttonAppearance() {
    console.log("usernameCheck: " + usernameCheck + " passwordCheck: " + passwordCheck);
    if (usernameCheck === true && passwordCheck === true) {
      setDisable(false);
      console.log("It is enabled");
    } else {
      setDisable(true);
      console.log("It is disabled");
    }
  }

  return (
      <div className="authenticationPage">
      {/* <h1> Hey Dude </h1>
      {console.log(listOfUsers)}
        {listOfUsers.map((user) => {
          return (
            <div>    
              /<h1>Username: {user.username}</h1>
              <h1>Password: {user.password}</h1>
            </div>
          );
        })} */}

        <h1 class="authenticationText">Please Log In to the Helpdesk Application</h1>
        <h2 class="authenticationText">Make sure your username is 5 characters long and your password is 8 characters long</h2>

        <div className='inputStyling'>
          <input className="formStyle" type="text" placeholder="username..." onChange={(event) => {
            setUsername(event.target.value);
            usernameLengthCheck(event);
            buttonAppearance();
          }}/>
          <input className="formStyle" type="password" placeholder='password...' onChange={(event) => {
            setPassword(event.target.value);
            passwordLengthCheck(event);
            buttonAppearance();
          }}/>
        </div>
          <Button disabled={disable} variant = "contained" color = "primary" onClick={createUser}>Create Account</Button>

      </div>


  );

     
}

export default Authentication;

