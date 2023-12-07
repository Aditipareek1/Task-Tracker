import React from "react";
import "./index.css"
import { useState } from "react";
import List from "./ItemList"

const App =()=>{
  const [elements, setElements] = useState([]);
  const [item, setItem] = useState("")

  const getItem=(event)=>{
    setItem(event.target.value);  
  }

  const addItem =()=>{
    setElements(elements.concat(item));
    setItem("");
  }

  const deleteItem=(id)=>{
    console.log(id);
    const updatedElements = [...elements.slice(0, id), ...elements.slice(id+1)]
    setElements(updatedElements)
  }
  return (
    <>
    <div className="main_div">
      <div className="center_div">
        <br/>
        <h1>Task Tracker</h1>
        <br/>
        <input type="text" placeholder="Add an Item" onChange={getItem} value={item}></input>
        <button onClick={addItem}>+</button>
        <ol>
          {elements.map((it, index)=>{
           return <List text={it}
           key ={index} 
           id={index}
           onSelect = {deleteItem}
           />
          })}
        </ol>
      </div>
    </div>
    </>
  )
}

export default App;