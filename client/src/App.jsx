import React from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css"
import Helpdesk from './Helpdesk';
import Failure from './Failure';

function App() {
    return(

        <div className = "wrapper">
            <h1>Please either sign up or log in</h1>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/helpdesk" element={<Helpdesk/>}/>
                    <Route exact path="/failure" element={<Failure/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;
