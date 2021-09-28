import React,{useState} from 'react';
import './App.css';
import DayTeller from './Components/DayTeller';
import Counter from './Components/My_Counter';

function App() {
  let [day, setDay] = useState(true)
  return (
    <div className={`App ${day ? "day" : "night"}`}>
      <DayTeller day= {day}/>
      <Counter/>
      <button onClick={()=>{
                setDay(!day)
            }}>
                UPDATE DAY
      </button>
    </div>

  );
}

export default App;
