import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App() {
  return (
    <div>
      <ErrorBox>The world is ending</ErrorBox>
      <br />
      <FirstChildOnly>
        <p>First</p>
        <p>Second</p>
        <p>Third</p>
      </FirstChildOnly>
      <br />
      <LastChildOnly>
        <p>First</p>
        <p>Second</p>
        <p>Third</p>
      </LastChildOnly>
      <br />
      <Head number={4}>
        <p>First</p>
        <p>Second</p>
        <p>Third</p>
        <p>Fourth</p>
        <p>Fifth</p>
        <p>Sixth</p>
        <p>Seventh</p>
      </Head>
      <br />
      <Tail number={3}>
        <p>First</p>
        <p>Second</p>
        <p>Third</p>
        <p>Fourth</p>
        <p>Fifth</p>
        <p>Sixth</p>
        <p>Seventh</p>
      </Tail>
      <br />
      <Dialog>
        <Title>Message</Title>
        <Body>From hello</Body>
        <Footer>Footer</Footer>
      </Dialog>
    </div>
  );
}

function ErrorBox({ children }) {
  return <div className="error">{children}</div>;
}

function FirstChildOnly({ children }) {
  return <div>{children[0]}</div>;
}

function LastChildOnly({ children }) {
  return <div>{children[children.length - 1]}</div>;
}

function Head({ number, children }) {
  const arr = [];
  for (let i = 0; i < number; i++) {
    arr.push(children[i]);
  }

  return <div>{arr}</div>;
}

function Tail({ number, children }) {
  const arr = [];
  for (let i = children.length - 1; number > 0; number--, i--) {
    arr.push(children[i]);
  }

  return <div>{arr}</div>;
}

function Dialog({ children }) {
  console.log(children);
  return (
    <div>
      {children[0]}
      {children[1]}
      {children[2]}
    </div>
  );
}

function Title({ children }) {
  return <h1>{children}</h1>;
}

function Body({ children }) {
  return <p>{children}</p>;
}

function Footer({ children }) {
  return <p>{children}</p>;
}

ReactDOM.render(<App />, document.querySelector("#root"));
