import './App.css';
import { useState, useEffect } from 'react';

function Clock(){

  const [time, setTime] = useState(new Date());

  useEffect(()=>{
    const intervalId = setInterval(()=>{
      setTime(new Date())
    },1000);

    return () => clearInterval(intervalId);

  },[]);

  const hours = time.getHours().toString().padStart(2,'0')
  const minutes = time.getMinutes().toString().padStart(2,'0')
  const seconds = time.getSeconds().toString().padStart(2,'0');

  return(
    <div>
      <h2>현재 시간</h2>
      <p>{time.toLocaleString()}</p>
      <div className="flex items-center justify-center h-screen bg-white text-white">
        <div className="flex gap-4 text-6xl font-mono">
          <FlipUnit number={hours} label="시" />
          <FlipUnit number={minutes} label="분" />
          <FlipUnit number={seconds} label="초" />
        </div>
      </div>
    </div>
  )
}


function FlipUnit({ number, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-20 h-28 bg-gray-800 rounded-xl overflow-hidden shadow-xl">
        <div className="absolute inset-0 flex items-center justify-center text-5xl transition-all duration-300 animate-cardFlipDown">
          {number}
        </div>
      </div>
      <div className="mt-2 text-sm text-gray-400">{label}</div>
    </div>
  );
}


function App() {

  return (
      <div className="App">
        <Clock/>
      </div>
    );

}

export default App;
