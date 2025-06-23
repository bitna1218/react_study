import './App.css';
import React, { useState,useRef } from 'react';

function App() {
  const [todoList,setTodoList] = useState([]);
  const [value,setValue] = useState("");
  const indexVal = useRef(0);

  function addEvent(){
    
    setTodoList([...todoList, { id: indexVal.current, text:value, done: false }])
    indexVal.current+=1
    setValue("");

  }

  function inputEvent(e){
    setValue(e.target.value);
  }

  function enterEvent(e){
    if(e.key === 'Enter'){
      addEvent();
    }
  }

  function checkboxEvent(){
    alert('sss')
  }

  return (
    <div className="App">
      <input type='text' value={value} onChange={inputEvent} onKeyDown={enterEvent}/>
      <button onClick={addEvent}>추가</button>
      
      <div>
        {todoList.map((item) => (
          <div key={item.id} id={item.id}><input type='checkbox' onChange={checkboxEvent}/>{item.text}</div>
        ))}
      </div>
      
    </div>
  );
}

export default App;
