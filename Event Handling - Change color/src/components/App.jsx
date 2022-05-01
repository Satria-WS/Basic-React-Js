import React, { useState } from "react";

function App(props) {
  const [headingText, setHeadingText] = useState("You Win");

  function handleClick() {
    alert("Hello");
  }
  // Chahnge color#1...................................................
  function GGover(event) {
    const myStyle = (event.target.style.background = "black");
    // const myStyle = event.target.style.background = props.Warna;
    return myStyle;
  }

  function GGout(event) {
    const myStyle = (event.target.style.background = "white");
    return myStyle;
  }
  //......................................................................................................

  // Chahnge color#2...................................................
  const [isMouseOver, setMouseOver] = useState(false);

  function handleMouseOver() {
    setMouseOver(true);
  }
  function handleMouseOut() {
    setMouseOver(false);
  }
  //......................................................................................................

  function Jancok() {
    const Change = <h1>ChangeJancok</h1>;
    return Change;
  }

  function Hello() {
    const Change = <h1>Hello Hello</h1>;
    return Change;
  }

  return (
    <div className="container">
      {/* <Hello /> */}

      <h1> Result: {headingText}</h1>

      <input type="text" placeholder="Login" />
      <input type="text" placeholder="Password" />
      <button onClick={handleClick}>Submit</button>
      {/* Button Change Color #1 */}
      <button onMouseOver={GGover} onMouseOut={GGout}>
        GG
      </button>

      {/* Button Color */}
      <br />
      <button style={{ backgroundColor: "orange", fontSize: 40 }}>
        Orange
      </button>
      <Jancok />
      <Hello />
      <br />
      {/* Button Change Color #2 */}
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Change Color #2
      </button>
    </div>
  );
}

export default App;
