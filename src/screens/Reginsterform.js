import React, { useState } from "react";

// function handleRigester(event){
//     event.preventDefault();
//     console.log();
// }

// let age = 20;

function Registerform() {

    const [input, inputData] = useState();

    const getData = (e) =>{
        console.log(e.target.value);
        inputData(e.target.value);
    }

    const handleRigester = () =>{
        console.log(input);
    }

    return(
        <form>
            <div>
                <input type="text" placeholder="Enter Name" onChange={getData} />
                <input type="password" placeholder="Enter Password" />
                <button onClick={handleRigester}>Login</button>
            </div>
        </form>
    );
}

export default Registerform