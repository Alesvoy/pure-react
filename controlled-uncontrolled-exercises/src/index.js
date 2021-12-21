import React, { useRef, useState, useEffect, useReducer } from "react";
import ReactDOM from "react-dom";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function firstNameChange(e) {
    setFirstName(e.target.value);
  }

  function lastNameChange(e) {
    setLastName(e.target.value);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(lastName);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [lastName]);

  return (
    <div>
      <h1>App!</h1>
      <label htmlFor="firstName">Firstname:</label>
      <input
        type="text"
        name="firstName"
        id="firstName"
        value={firstName}
        onChange={firstNameChange}
      />
      <br />
      <label htmlFor="lastName">Lastname:</label>
      <input
        type="text"
        name="lastName"
        id="lastName"
        value={lastName}
        onChange={lastNameChange}
      />
      <h3>{firstName === "" ? "" : `Hello ${firstName} ${lastName}!`}</h3>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
