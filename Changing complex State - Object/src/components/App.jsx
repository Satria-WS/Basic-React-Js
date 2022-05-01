import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  const [contactSubmit, setcontactSubmit] = useState({
    fNameSubmit: "",
    lNameSubmit: "",
    emailNameSubmit: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    // console.log(value);

    setContact((prevValue) => {
      console.log(prevValue);
      // console.log(value);
      //console.log(prevValue.fName);
      // console.log(prevValue.lName);
      // console.log(prevValue.email);

      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email
        };
      } else if (name === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value
        };
      }
    });
  }

  function submitChange(event) {
    setcontactSubmit(() => {
      return {
        fNameSubmit: contact.fName,
        lNameSubmit: contact.lName,
        emailNameSubmit: contact.email
      };
    });

    event.preventDefault();
  }
  /* */

  return (
    <div className="container">
      <h1>
        Hello {contactSubmit.fNameSubmit} {contactSubmit.lNameSubmit}{" "}
        {contactSubmit.emailNameSubmit}
        {/* Hello {contact.fName} {contact.lName} */}
      </h1>
      <p>{/*{contact.email}*/}</p>
      <form>
        <input
          onChange={handleChange}
          value={contact.fName}
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          value={contact.lName}
          name="lName"
          placeholder="Last Name"
        />
        <input
          onChange={handleChange}
          value={contact.email}
          name="email"
          placeholder="Email"
        />
        <button onClick={submitChange}>Submit</button>
      </form>
    </div>
  );
}

export default App;
