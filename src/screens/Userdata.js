import React from "react";
import Title from "../components/Title";

function Userdata() {
    let data = [
        {
            name:"Jay",
            email:"jay123@gmail.com",
            address:"Patan",
        },
        {
            name:"Pratik",
            email:"pratik123@gmail.com",
            address:"Ahmedabad",
        },
        {
            name:"Israr",
            email:"israr123@gmail.com",
            address:"Delhi",
        },
        {
            name:"Ishwar",
            email:"ishwar123@gmail.com",
            address:"baroda",
        },

    ];
    return(
        <div>
            {data.map(({ name, email, address}) => (
                <div>
                    <Title h1={name} />
                    <Title h3={email} />
                    <Title h3={address} />
                </div>
            ))}
        </div>
    )
}

export default Userdata