import './App.css';
import { useState } from "react";
import React from "react";
import axios from "axios";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

//var accessibility = false;

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userExists, setUserExists] = useState(true);
  const navigate = useNavigate();

  const createUser = () => {
    axios.get("http://localhost:5000/users/" + username + "/" + password + "/").then((response) => {
      if (response.data != null) {
        setUserExists(true);
        //accessibility = true;
        navigate('/helpdesk');
      } else {
        setUserExists(false);
      }
    })
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

        <h1 className="authenticationText">Please Log In the Helpdesk Application</h1>
        <h2 className="authenticationText">Make sure your username is 5 characters long and your password is 8 characters long</h2>

        <div className='inputStyling'>
          <input type="text" placeholder="username..." onChange={(event) => {
            setUsername(event.target.value);
          }}/>
          <input type="password" placeholder='password...' onChange={(event) => {
            setPassword(event.target.value);
          }}/>
        </div>
          <Button variant = "contained" color = "primary" onClick={createUser}>Log in to Account</Button>

          {userExists === false && <h1 style={{color: "red"}}>The user does not exist in the system</h1>}

      </div>


  );

     
}

export default Login;
//export {accessibility};
