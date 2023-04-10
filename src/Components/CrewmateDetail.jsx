import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../client";
import pink from "../assets/crewmates-color/pink.png";
import green from "../assets/crewmates-color/green.png";
import red from "../assets/crewmates-color/red.webp";
import plain from "../assets/crewmates-color/default.jpeg";
import "./CrewmateDetail.css";

const CrewmateDetail = () => {
  let params = useParams();
  const [crewmate, setCrewmate] = useState({});
  useEffect(() => {
    async function getCrewmate() {
      let { data: crewmate, error } = await supabase
        .from("crewmates")
        .select("*")
        .eq("id", params.id);
      if (error) {
        console.log(error);
      } else {
        setCrewmate(crewmate[0]);
      }
    }
    getCrewmate();
  }, [params.id]);
  console.log(crewmate.name);

  return (
    <div className="detail-container">
      <h1> Crewmate: {crewmate.name}</h1>
      <p>Speed: {crewmate.speed}</p>
      <p>Color: {crewmate.color}</p>
      <img
        src={
          crewmate.color === "pink"
            ? pink
            : crewmate.color === "green"
            ? green
            : crewmate.color === "red"
            ? red
            : plain
        }
      />
      <p>
        You may want to find a crewmate with higher speed, this one is kind of
        slow.
      </p>
      <button>Edit</button>
    </div>
  );
};

export default CrewmateDetail;
