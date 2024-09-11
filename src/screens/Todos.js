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

    function onHandleClick(){
            alert("YOu Are Gret Man")
    }
    function Mybutton(){
      }

      const products = [
        { title: 'Cabbage', age: '21', id: 1 },
        { title: 'Garlic',id: 2 },
        { title: 'Apple',  age: '29',id: 3 },
      ];

      const listItems = products.map(product =>
        <li key={product.id}>
          {/* {product.title} */}
          <br></br>
          {product.age}
        </li>
      );

    return(
        <div className="container">
            <div className="inputfield">
                <Title h1="To Do List" />
                <input type="text" placeholder="Enter your task" value={initial} onChange={getInput} />
                <button className="todo-btn" onClick={getData}>Add Task Button</button>
            </div>
            <ul>
                {data.map((curVal, index) => {
                    return(
                        <>
                        <li className="task-list">
                        <p>{curVal}</p>
                        <span id="deletetodo" onClick={() => dataDelete(index)}>Delete Button</span>
                        </li>
                        </>
                    )
                })}
            </ul>
            <button onClick={onHandleClick} >Login</button>
            <ul>{listItems}</ul>
           
        </div>
    );
}

export default Todos;