import React, { useState } from 'react';


function CreateBug(props) {
    // priority can have values from 1 to 3 with 3 being the highest priority (string for testing)
    const [bug, setBug] = useState({
        title: "",
        priority: 0,
        description: "",
        dateCreated: "",
        status: ""
    })

    function writeBug(event) {
        const name = event.target.name;
        var value = event.target.value;
        var possibleNumber = event.target.valueAsNumber;

        setBug((prevBug) => {
            if (name === "priority") {
                if (possibleNumber > 3) {
                    possibleNumber = 3;
                } else if (possibleNumber < 1) {
                    possibleNumber = 1;
                }

                return {
                    ...prevBug,
                    [name]: possibleNumber
                }
            } else {
                return {
                    ...prevBug,
                    [name]: value
                }
            }

            // return {
            //     ...prevBug,
            //     [name]: possibleNumber || value
            // }
        })

        event.preventDefault();
    }

    function submitBug(event) {
        props.onAdd(bug)
        setBug({title:"", priority:0, description:"", dateCreated:"", status:""});
        event.preventDefault();
    }


    return (
        <div>
            <form>
                <input type="text"
                    onChange={writeBug} 
                    name="title"
                    value={bug.title}
                    placeholder="Set Title"
                />
                <input type="number"
                    onChange={writeBug}
                    name="priority"
                    value={Number(bug.priority)}
                    placeholder="Set priority level (1-3)"
                 />
                 <textarea
                    onChange={writeBug} 
                    name="description"
                    value={bug.description}
                    placeholder='Description of Bug' 
                    rows="5" 
                 />
                 <input type="date"
                    onChange={writeBug}
                    name="dateCreated"
                    value={bug.dateCreated}
                    placeholder="Date Bug was created"
                />
                <input type="text"
                    onChange={writeBug}
                    name="status"
                    value={bug.status}
                    placeholder="Status of the Bug"
                />
                <button onClick={submitBug}>
                    Add Bug
                </button>
            </form>
        </div>
    )
}


export default CreateBug;