import React, { useState } from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css"
import Helpdesk from './Helpdesk';
import Authentication from './Authentication';
import Login from "./Login"
import Failure from './Failure';
import Home from './Home';
//import {accessibility} from './Login'

function App() {
// const [token, setToken] = useState();

// if (!token) {
//     return <Authentication setToken={setToken} />
// }

    return(

        <div className = "wrapper">
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>   
                    <Route exact path="/signup" element={<Authentication/>}/>
                    <Route exact path="/login" element={<Login/>}/>
                    <Route exact path="/helpdesk" element={<Helpdesk/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;
