import './App.css';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
        <div>{count}</div>
        <div className="button-group">
          <button onClick={()=> setCount(count+1)}>+</button>
          <button onClick={()=>{ 
            if(count-1 < 0){
              alert('마이너스 !!!');
              return
            }
            setCount(count-1)     
            }}>-</button>
          <button onClick={()=> setCount(0) }>Reset</button>
        </div>

    </div>
  );
}

export default App;
