import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import "./index.css";

const toPerson = {
  name: "Alejandro Butron Perez",
  address: "Hacienda San Judas #12",
  city: "Mexico City, Mexico.",
};

const fromPerson = {
  name: "Esmeralda Leon",
  address: "Villa Florence",
  city: "Mexico City, Mexico.",
};

function AddressLabel({ person }) {
  const { name, address, city } = person;
  return (
    <>
      <p>{name}</p>
      <p>{address}</p>
      <p>{city}</p>
    </>
  );
}

function Envelope({ toPerson, fromPerson }) {
  return (
    <div className="envelope">
      <AddressLabel person={fromPerson} />
      <AddressLabel person={toPerson} />
    </div>
  );
}

ReactDOM.render(
  <Envelope toPerson={toPerson} fromPerson={fromPerson} />,
  document.querySelector("#root")
);
