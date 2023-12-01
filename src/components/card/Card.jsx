import React from "react";
import "./Card.style.css";
import { useNavigate } from "react-router-dom";
import { NOTE_PREFIX } from "../../constants/editor";
const Card = ({ card }) => {
  const { title, desc, timeStamp } = card;
  const navigate = useNavigate();

  return (
    <div
      className="card-container"
      onClick={() => {
        navigate(`/editor/${title}/?mode=read-only&id=${card.id}`);
      }}
    >
      <p className="subheading1">{title}</p>
      <p>{desc}</p>
      <div className="time_stamp">
        <p className="subheading2">{timeStamp.time}</p>
        <p className="subheading2">{timeStamp.date}</p>
      </div>
    </div>
  );
};

export default Card;
