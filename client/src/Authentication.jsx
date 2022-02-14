import './App.css';
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

var usernameCheck = false;
var passwordCheck = false;

function Authentication() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });
  const [disable, setDisable] = useState(true);
  const [userExists, setUserExists] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/users").then((response) => {
      setListOfUsers(response.data);
    })
  }, [])

  const username = credentials.username;
  const password = credentials.password;

  const createUser = () => {
    axios.get("http://localhost:5000/users/" + credentials.username + "/").then((response) => {
      console.log(response);
      console.log(response.data);
      if (response.data != null) {
        setUserExists(true);
      } else {
        axios.post("http://localhost:5000/users", {
          username,
          password,
        }).then((response) => {
          setListOfUsers([...listOfUsers, {
            username,
            password,
          }]);
        })
        setUserExists(false);
        navigate('/helpdesk');
      }
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

  function handleCred(event) {
    const newCred = event.target.value;
    const whichCred = event.target.name;

    setCredentials(prevValue => {
      if (whichCred === "username") {
        return {
          username: newCred,
          password: prevValue.password
        } 
      } else if (whichCred === "password") {
          return {
            username: prevValue.username,
            password: newCred
          }
        }
      }
    )
  }

  function buttonAppearance() {
    //console.log("usernameCheck: " + usernameCheck + " passwordCheck: " + passwordCheck);
    if (usernameCheck === true && passwordCheck === true) {
      setDisable(false);
      //console.log("It is enabled");
    } else {
      setDisable(true);
      //console.log("It is disabled");
    }
  }

  return (
    <div className='spacing'>
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

        <h1 className="authenticationText">Please Sign Up For the Helpdesk Application</h1>
        <h2 className="authenticationText">Make sure your username is 5 characters long and your password is 8 characters long</h2>

        <div className='inputStyling'>
          <input name="username" type="text" placeholder="username..." value={credentials.username} onChange={(event) => {
            handleCred(event);
            //setUsername(event.target.value);
            usernameLengthCheck(event);
            buttonAppearance();
          }} />
          <input name="password" type="password" placeholder='password...' value={credentials.password} onChange={(event) => {
            handleCred(event);
            //setPassword(event.target.value);
            passwordLengthCheck(event);
            buttonAppearance();
          }} />
        </div>
        <Button disabled={disable} variant="contained" color="primary" onClick={createUser}>Create Account</Button>

        {userExists === true && <h1 style={{ color: "red" }}>The user already exists and was not registered into the system</h1>}

      </div>
    </div>


  );


}

export default Authentication;

