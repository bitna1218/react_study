import './App.css';
import React, { useState,useRef, useEffect } from 'react';

function App() {
  const [todoList,setTodoList] = useState([]);
  const [value,setValue] = useState("");
  const indexVal = useRef(0);

  useEffect(()=>{
    console.log("todoList 변경됨:",todoList)
  },[todoList]);

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

  function checkboxEvent(id){
    setTodoList(prev =>
      prev.map(item =>
        item.id === id ? {...item, done:!item.done} : item
      )
    );
  }

  return (
    <div className="App">
      <input type='text' value={value} onChange={inputEvent} onKeyDown={enterEvent}/>
      <button onClick={addEvent}>추가</button>
      
      <div>
        {todoList.map((item) => (
          <div key={item.id} id={item.id} style={{display: "flex"}}>
            <input type='checkbox' onChange={()=>checkboxEvent(item.id)}/>
            <div style={{textDecoration:item.done ? 'line-through':'none'}}>{item.text}</div>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default App;
