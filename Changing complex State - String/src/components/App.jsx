import React, { useState } from "react";

function App() {
  // const [name,setName] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");

  const [ChangefName, setChangefName] = useState("");
  const [ChangelName, setChangelName] = useState("");

  function FName(event) {
    // console.log(event.target.value);
    setfirstName(event.target.value);
  }

  function LName(event) {
    //console.log(event.target.value);
    setlastName(event.target.value);
  }

  function CfName() {
    setChangefName(firstName);
  }

  function ClName() {
    setChangelName(lastName);
  }

  function Button(event) {
    setChangefName(firstName);
    setChangelName(lastName)
    //CfName();
    // ClName();
    console.log(ChangefName);
    // console.log(ChangelName);

    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>
        Hello {ChangefName} {ChangelName}
      </h1>

      <form>
        <input
          value={firstName}
          onChange={FName}
          name="fName"
          placeholder="First Name"
        />
        <input
          value={lastName}
          onChange={LName}
          name="lName"
          placeholder="Last Name"
        />
        <button onClick={Button}>Submit</button>
      </form>
    </div>
  );
}

export default App;
