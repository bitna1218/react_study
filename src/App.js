import './App.css';
import { useState, useEffect } from 'react';

function Clock(){

  const [time, setTime] = useState(0);

  useEffect(()=>{
    const intervalId = setInterval(()=>{
      setTime(new Date())
    },1000);

    return () => clearInterval(intervalId);

  },[]);

  return(
    <div>
      <h2>현재 시간</h2>
      <p>{time.toLocaleString()}</p>
    </div>
  )
}


function App() {

  return (
      <div className="App">
        <Clock/>
      </div>
    );

}

export default App;
