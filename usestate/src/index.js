import React from "react";
import ReactDOM from "react-dom";

// class OneTimeButton extends React.Component {
//   state = {
//     clicked: false,
//   };

//   handelClick = () => {
//     this.props.onClick();
//     this.setState({ clicked: true });
//   };

//   render() {
//     return (
//       <button onClick={this.handelClick} disabled={this.state.clicked}>
//         You Can Only Click Me Once
//       </button>
//     );
//   }
// }

function OneTimeButton({ onClick }) {
  const [clicked, setClicked] = React.useState(false);
  const handleClick = () => {
    onClick();
    setClicked(true);
  };

  return (
    <button onClick={handleClick} disabled={clicked}>
      You Can Only Click Me Once
    </button>
  );
}

ReactDOM.render(
  <OneTimeButton onClick={() => alert("hi")} />,
  document.querySelector("#root")
);
