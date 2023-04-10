import React from "react";
import { useState } from "react";
import GalleryCard from "./GalleryCard";
import pink from "../assets/crewmates-color/pink.png";
import green from "../assets/crewmates-color/green.png";
import red from "../assets/crewmates-color/red.webp";
import plain from "../assets/crewmates-color/default.jpeg";
import "./CrewmatesGallery.css";
import { useEffect } from "react";
import { supabase } from "../client";
import { Link } from "react-router-dom";

function CrewmatesGallery() {
  const [crewmateList, setCrewmateList] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let { data: list, error } = await supabase.from("crewmates").select("*");
      if (error) {
        console.log(error);
      } else {
        setCrewmateList(list);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="gallery-container">
      <h1>Your Crewmate Gallery</h1>
      <div className="gallery">
        {crewmateList &&
          crewmateList.map((crewmate, index) => (
            <Link
              className="card-link"
              to={`/crewmates-gallery/${crewmate.id}`}
            >
              <GalleryCard
                imageURL={
                  crewmate.color === "pink"
                    ? pink
                    : crewmate.color === "green"
                    ? green
                    : crewmate.color === "red"
                    ? red
                    : plain
                }
                name={crewmate.name}
                speed={crewmate.speed}
                color={crewmate.color}
                id={crewmate.id}
                key={index}
              />
            </Link>
          ))}
      </div>
    </div>
  );
}

export default CrewmatesGallery;
