import './App.css';
import React, { useState } from 'react';

function App() {
  const [todoList,setTodoList] = useState([]);
  const [value,setValue] = useState("");
  return (
    <div className="App">
      <input type='text' onChange={function(e){
        
        setValue(e.target.value);

      }}/>
      <button onClick={function(){
        
        setTodoList([...todoList, value])

      }}>추가</button>
      
      <div>
        {todoList.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
      
    </div>
  );
}

export default App;
