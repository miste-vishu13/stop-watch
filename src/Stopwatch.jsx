import { useEffect, useRef, useState } from "react";

function Stopwatch()
{
    const[Running,SetRunning]=useState(false);
    const[time,setTime]=useState(0);
    const intervalIdRef=useRef(null);
    const startTimeRef=useRef(0);
    
    useEffect(()=>
    {
        if(Running)
        {
    intervalIdRef.current = setInterval(() => {
        setTime(Date.now()-startTimeRef.current)
    }, 10);
}


     return ()=>
     {
        clearInterval(intervalIdRef.current);
     }

    },[Running]);

     

    function handleStart()
    {
    
     startTimeRef.current=Date.now()-time;
        SetRunning(true);
        

     
    }
    function handleStop()
    {
       
            SetRunning(false);
        

    }
   function handleReset()
    {
        clearInterval(intervalIdRef.current);
    setTime(0);
    SetRunning(false);
    }

    function formatTime()
    {
       let hours=Math.floor(time/(1000*60*60));
       let min=Math.floor(time/(1000*60)%60);
       let sec=Math.floor(time/(1000)%60);
       let milisec=Math.floor((time%1000)/10);
       min=String(min).padStart(2,"0");
       sec=String(sec).padStart(2,"0");
       milisec=String(milisec).padStart(2,"0");

        return `${min}:${sec}:${milisec}`;
    }


    return (
         <div className="container">
            <div className="clock">{formatTime()}</div>
                <div className="button">
                    <button className="start" onClick={handleStart}>Start</button>
                    <button className="stop" onClick={handleStop}>Stop</button>
                    <button className="reset" onClick={handleReset}>Reset</button>    
            </div>

         </div>
    );
}

export default Stopwatch