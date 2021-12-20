import React from "react";
import Card from "./Card";

const CardList = ({ data }) => {
  return (
    <div className="card-list">
      {data.map((item) => {
        return <Card key={item.id} cardData={item} />;
      })}
    </div>
  );
};

export default CardList;
