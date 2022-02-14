import React, {useState} from "react";
import { Navigate } from "react-router-dom"
import Header from "./Header";
import Footer from "./Footer";
import CreateBug from "./CreateBug"
import Bug from "./Bug";

function Helpdesk() {
    const [bugs, setBugs] = useState([]);

    function addBug(bug) {
        setBugs(prevBugs => {
            const allBugs = [...prevBugs, bug]

            allBugs.sort((a, b) => {
            return (a.priority > b.priority) ? 1 : -1
        })

            return allBugs;
        });

        console.log("hi");
        console.log(bugs);
    }

    function deleteBug(id) {
        setBugs((prevBugs) => {
            return prevBugs.filter((bug, index) => {
                console.log("index " + index+ " id " + id);
                return index !== id;
            }); 
        })
    }

    return (
        <div>
          <Header />
         <CreateBug onAdd={addBug} />
          {bugs.map((bug, index) => (
            <Bug
                key={index}
                id={index} 
                title={bug.title}
                priority={Number(bug.priority)}
                description={bug.description}
                dateCreated={bug.dateCreated}
                status={bug.status}
                onDelete={deleteBug}
            />
          ))}
          <Footer />
        </div>
    )
}

    export default Helpdesk;