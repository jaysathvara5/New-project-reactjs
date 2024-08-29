import React from "react"
import Title from "../components/Title";

function Home() {
  return(
    <div>
      <div>
        <Title h1="Kitchen365" />
      </div>
      <div>
        <ul>
          <li><a href="/Home">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Home;