import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CrewImg from "./assets/img-crewmates.jpeg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="home-container">
      <h1>Welcome to the Crewmate Creator!</h1>
      <p className="app-description">
        Here is where you can create your very own set of crewmwtes before
        sending them off into space!
      </p>
      <img src={CrewImg} />
    </div>
  );
}

export default App;
