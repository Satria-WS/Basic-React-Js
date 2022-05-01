import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      console.log(prevItems)
      //  console.log(...prevItems);
      //  console.log(inputText);
      // console.log([...prevItems,inputText]);

      //create newArray
      // return [...prevItems, inputText];
      return [inputText, ...prevItems];
    });

    //set the input text to an empty string again
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => {
            return <li>{todoItem}</li>;
          })}
          {/* <li>{items}</li> */}
        </ul>
      </div>
    </div>
  );
}

export default App;
