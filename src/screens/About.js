import React from "react";
import Title from "../components/Title";
import Ullist from "../components/unorderlise";






function About(){

  function Mybutton(){
    return <button>Login</button>;
  }
  return (
    <div>

    <Title h1="Node.js Docs" />
    <Title h2="Content" />
    <Title h3="Small Content" />
    <Ullist />
    <Mybutton />
    </div>
  );
}

export default About;
