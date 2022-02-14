import { useThemeProps } from "@mui/material"
import React from "react"


function Bug(props) {

    const priorityColor = new Map();

    priorityColor.set(1, "green");
    priorityColor.set(2, "yellow");
    priorityColor.set(3, "red");

    function handleDelete() {
        props.onDelete(props.id);
    }


    return (
        <div className="bug-box" style={{backgroundColor:priorityColor.get(Number(props.priority))}}>
            <h1>{props.title}</h1>
            <h2>{props.priority}</h2>
            <p>{props.description}</p>
            <h2>{props.dateCreated}</h2>
            <h2>{props.status}</h2>
            <button onClick={handleDelete}>Delete Bug</button>
        </div>
    );
}

export default Bug;