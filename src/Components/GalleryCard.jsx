import { React, useState } from "react";
import pink from "../assets/crewmates-color/pink.png";
import "./GalleryCard.css";
import { supabase } from "../client";
import { Link } from "react-router-dom";

function GalleryCard({ imageURL, name, speed, color, id }) {
  const [displayOptions, setDisplayOptions] = useState(false);
  const changeDisplay = () => {
    setDisplayOptions(!displayOptions);
    console.log(displayOptions);
  };
  async function onDeleteCrewmate() {
    const { data, error } = await supabase
      .from("crewmates")
      .delete()
      .eq("id", id);
    console.log(id);
    window.location = "/crewmates-gallery";
  }
  return (
    <div className={`crew-card ${color}`}>
      <ion-icon
        name="ellipsis-horizontal-outline"
        onClick={changeDisplay}
      ></ion-icon>
      <div className={`options ${displayOptions ? "display" : "no-display"}`}>
        <p>Edit</p>
        <p onClick={onDeleteCrewmate}>Delete </p>
      </div>
      <img src={imageURL} alt={`${color}crewmate`} />
      <p>Name of Crewmate: {name}</p>
      <p>Speed of Crewmate: {speed}</p>
      <p>Color of Crewmate: {color}</p>
      <Link className="card-link" to={`/crewmates-gallery/${id}`}>
        <div className="edit-btn">Edit Crewmate</div>
      </Link>
    </div>
  );
}

export default GalleryCard;
