import React, { useState } from "react";

function Testing(namea,age){


    const [toggle, setToggle] = useState(false);


    return(
        <>
            <p>{namea="JAY"}{age="20"}</p>
            
            <h1>Welcome, {namea}</h1>
            <h2>
                Again Welcome , {namea}
            </h2>
            <h3>My Age is : {age}</h3>
            <button className="btn" onClick={() => setToggle(!toggle)}>Click here</button>

            {toggle && (
                <ul>
                    <li>First Content</li>
                    <li>Second Content</li>
                    <li>Third Content</li>
                </ul>
            )}
        </>
    )
}

export default Testing;