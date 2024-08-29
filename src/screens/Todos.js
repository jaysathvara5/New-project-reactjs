import React, { useState } from "react";
import Title from "../components/Title";

function Todos() {
    
    const [initial, setInitial] = useState();
    const [data, setData] = useState([]);

    const getInput = (event) =>{
        console.log(event.target.value);
        setInitial(event.target.value);
    }

    const getData = () =>{
        console.log(initial);
        let store = [...data, initial];
        setData(store);
        setInitial("");
    }

    const dataDelete = (index) =>{
        console.log(index);
        let filterData =  data.filter((curElem, id) => {
            return id != index
        })
        setData(filterData)
    }
    console.log(data);
    return(
        <div className="container">
            <div className="inputfield">
                <Title h1="To Do List" />
                <input type="text" placeholder="Enter your task" value={initial} onChange={getInput} />
                <button className="todo-btn" onClick={getData}>Add Task</button>
            </div>
            {data.map((curVal, index) => {
                return(
                    <>
                    <div className="task-list">
                        <p>{curVal}</p>
                        <span id="deletetodo" onClick={() => dataDelete(index)}>Delete</span>
                    </div>
                    </>
                )
            })}
        </div>
    );
}

export default Todos;