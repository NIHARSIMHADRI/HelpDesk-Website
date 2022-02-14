import React from "react";
import { Link } from 'react-router-dom';
import "./App.css"

function Home() {
    return (
        <div className="spacing">
            <h1>Please either Log In if you already have an account or Sign Up</h1>
            <h2>*App currently in test mode. Individual user data will not be stored. Users will be able to access blank helpdesk*</h2>
            <div className="links">
                <Link className="link-1" to="/signup">Sign Up</Link>
                <Link className="link-2" to="/login">Log In</Link>
            </div>   
        </div>
    )
}

    export default Home;   