import React, { useEffect, useState } from "react";

// function handleRigester(event){
//     event.preventDefault();
//     console.log();
// }

// let age = 20;

function Registerform() {

    const [input, inputData] = useState();
    const [password, setPassword] = useState();
    const [age, setAge] = useState(1);





    function increseAge(event) {
        event.preventDefault();
        setAge(age + 1);
    }

    function descrise(event){
        event.preventDefault();
        setAge(age - 1);
    }
    useEffect(() => {
        console.log("age: ", age);

    }, []);
    // const getData = (e) =>{
    //     inputData(e.target.value);
    // }

    // const getPassword = (e) =>{
    //     setPassword(e.target.value);
    // }

    const handleRigester = () => {
        console.log(input);
    }
    console.log(input);
    console.log(password);

    

    return(
        <form>
            <button onClick={descrise}>Descrice</button>
            <h1>{age}</h1>
            <button onClick={increseAge}>Increse</button>
            <div>
                <input type="text" placeholder="Enter Name" value={input} onChange={(e) => inputData(e.target.value)} />
                <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button onClick={handleRigester}>Login</button>
            </div>
        </form>
    );
}

export default Registerform