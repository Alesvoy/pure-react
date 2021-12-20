import React from "react";

const Card = ({ cardData }) => {
  return (
    <div className="card">
      <h3>{cardData.title}</h3>
      <div className="card-items">
        {cardData.items.map((item) => {
          return <p key={item}>{item}</p>;
        })}
      </div>
    </div>
  );
};

export default Card;
