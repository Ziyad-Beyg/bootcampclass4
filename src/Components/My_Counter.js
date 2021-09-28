import React, {useState} from "react";

function Counter(){
    let [myCounter, setMyCounter] = useState(0)
    return(
        <div>
            <h1>
                Counter Value Is: {myCounter}
            </h1>
            <br/>
            <br/>
            <button onClick={()=>{
                setMyCounter(++myCounter)
            }}>
                Increase Counter
            </button>
            <button onClick={()=>{
                setMyCounter(--myCounter)
            }}>
                Decrease Counter
            </button>
            <br/>
            <br/>
        </div>
    )
}

export default Counter