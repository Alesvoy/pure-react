import React from "react";
import ReactDOM from "react-dom";
import CardList from "./components/CardList";

import "./index.css";

const App = () => {
  return (
    <>
      <CardList data={cards} />
    </>
  );
};

const cards = [
  {
    id: 1,
    title: "Phone Features",
    items: [
      "Subwoofer",
      "Non-porous, washable",
      "Wings",
      "Beveled Bezel",
      "Bezeled Bevel",
      "Seedless",
    ],
  },
  {
    id: 2,
    title: "Tablet Features",
    items: ["Subwoofer", "Non-porous, washable", "Wings", "Beveled Bezel"],
  },
  {
    id: 3,
    title: "Car Features",
    items: ["Bezeled Bevel", "Seedless"],
  },
];

ReactDOM.render(<App />, document.querySelector("#root"));
