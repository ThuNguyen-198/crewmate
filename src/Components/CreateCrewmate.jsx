import React from "react";
import { useState } from "react";
import CrewmateImg from "../assets/crewmate-1.jpeg";
import "./CreateCrewmate.css";
import { supabase } from "../client";

function CreateCrewmate() {
  const [selectedOption, setSelectedOption] = useState("");
  const [crewmate, setCrewmate] = useState({
    name: "",
    speed: "",
    color: "",
  });
  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setCrewmate({ ...crewmate, [name]: value });
    setSelectedOption(value);
    console.log(crewmate);
  };
  const createPost = async (event) => {
    event.preventDefault();
    await supabase
      .from("crewmates")
      .insert({
        name: crewmate.name,
        speed: crewmate.speed,
        color: crewmate.color,
      })
      .select();
    window.location = "/";
    console.log("post submitted");
  };
  return (
    <div className="create-crew-container">
      <h1>Create a New Crewmate</h1>
      <img src={CrewmateImg} />
      <form className="attributes" onSubmit={createPost}>
        <div className="name-box">
          <label>Name</label>
          <input
            id="name"
            name="name"
            placeholder="Enter crewmate's name..."
            onChange={handleChange}
          ></input>
        </div>
        <div className="speed-box">
          <label>Speed (mph)</label>
          <input
            id="speed"
            name="speed"
            placeholder="Enter speed in mph..."
            onChange={handleChange}
          ></input>
        </div>
        <div className="color-box">
          <label>Color</label>
          <label>
            <input
              type="radio"
              name="color"
              value="green"
              checked={selectedOption === "green"}
              onChange={handleChange}
            />
            Green
          </label>
          <label>
            <input
              type="radio"
              name="color"
              value="red"
              checked={selectedOption === "red"}
              onChange={handleChange}
            />
            Red
          </label>
          <label>
            <input
              type="radio"
              name="color"
              value="blue"
              checked={selectedOption === "blue"}
              onChange={handleChange}
            />
            Blue
          </label>
          <label>
            <input
              type="radio"
              name="color"
              value="pink"
              checked={selectedOption === "pink"}
              onChange={handleChange}
            />
            Pink
          </label>
        </div>
        <button type="submit">Create crewmate</button>
      </form>
    </div>
  );
}

export default CreateCrewmate;
