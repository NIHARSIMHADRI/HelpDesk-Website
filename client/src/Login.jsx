import './App.css';
import { useState } from "react";
import React from "react";
import axios from "axios";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

//var accessibility = false;

function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });
  //const [username, setUsername] = useState("");
  //const [password, setPassword] = useState("");
  const [userExists, setUserExists] = useState(true);
  const navigate = useNavigate();

  const createUser = () => {
    axios.get("http://localhost:5000/users/" + credentials.username + "/" + credentials.password + "/").then((response) => {
      console.log("http://localhost:5000/users/" + credentials.username + "/" + credentials.password + "/");
      console.log(response.data);
      if (response.data != null) {
        setUserExists(true);
        //accessibility = true;
        navigate('/helpdesk');
      } else {
        setUserExists(false);
      }
    })
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

        <h1 className="authenticationText">Please Log In the Helpdesk Application</h1>
        <h2 className="authenticationText">Make sure your username is 5 characters long and your password is 8 characters long</h2>

        <div className='inputStyling'>
          <input name="username" type="text" placeholder="username..." value = {credentials.username} onChange={(event) => {
            handleCred(event);
            //setUsername(event.target.value);
          }} />
          <input name="password" type="password" placeholder='password...' value = {credentials.password} onChange={(event) => {
            handleCred(event);
            //setPassword(event.target.value);
          }} />
        </div>
        <Button variant="contained" color="primary" onClick={createUser}>Log in to Account</Button>

        {userExists === false && <h1 style={{ color: "red" }}>The user does not exist in the system</h1>}

      </div>
    </div>


  );


}

export default Login;
//export {accessibility};
