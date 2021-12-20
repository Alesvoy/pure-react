import React from "react";
import ReactDOM from "react-dom";

function MyThing() {
  return (
    <div className="book">
      <div className="title">The Title</div>
      <div className="author">The Author</div>
      <ul className="stats">
        <li className="rating">5 stars</li>
        <li className="isbn">12-345678-910</li>
      </ul>
    </div>
  );
}

function MyThing2() {
  return React.createElement(
    "div",
    { className: "book" },
    React.createElement("div", { className: "title" }, "The Title"),
    React.createElement("div", { className: "author" }, "The Author"),
    React.createElement(
      "ul",
      { className: "stats" },
      React.createElement("li", { className: "rating" }, "5 stars"),
      React.createElement("li", { className: "isbn" }, "12-345678-910")
    )
  );
  // return (
  //   <div className="book">
  //     <div className="title">The Title</div>
  //     <div className="author">The Author</div>
  //     <ul className="stats">
  //       <li className="rating">5 stars</li>
  //       <li className="isbn">12-345678-910</li>
  //     </ul>
  //   </div>
  // );
}

function Greeting() {
  let username = null;
  return (
    <div>
      {username === undefined || username === null
        ? "Not logged in"
        : `Hello, ${username}`}
    </div>
  );
}

function Table() {
  return (
    <table>
      <tbody>
        <tr>
          <Data />
        </tr>
      </tbody>
    </table>
  );
}

function Data() {
  return (
    <>
      <td>Inside Data!!!</td>
      <td>Inside Data!!!</td>
      <td>Inside Data!!!</td>
    </>
  );
}

ReactDOM.render(<Table />, document.querySelector("#root"));
