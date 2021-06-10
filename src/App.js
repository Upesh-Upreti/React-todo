import React, { useState } from "react";
import "./App.css";

function App() {

  setInterval(updateTime, 1000);

  let now = new Date().toLocaleString();

  const [time, setTime] = useState("")
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

 

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }
  
  function updateTime(){
    let newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }
  return (
    <div className="container" onload="updateTime">
      <div class="time">{time}</div>
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
          {items.map((todoItem) => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
