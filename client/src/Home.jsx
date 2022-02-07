import React from "react";
import { Link } from 'react-router-dom';
import "./App.css"

function Home() {
    return (
        <div>
            <h1>Please either Log In if you already have an account or Sign Up</h1>
            <h2>*App currently in test mode. Individual user data will not be stored. Users will be able to access blank helpdesk*</h2>
            <div className="links">
                <Link to="/signup">Sign Up</Link>
                <Link to="/login">Log In</Link>
            </div>   
        </div>
    )
}

    export default Home;   