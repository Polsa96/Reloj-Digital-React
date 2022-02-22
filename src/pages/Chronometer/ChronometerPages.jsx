import { useEffect, useState } from "react";
import "./ChronometerPage.css";

export default function ChronometerPages(){
    const [chronometer, setChronometer] = useState("00:00:00");
    const [start, setStart]= useState(false);
    const [counting, setCounting] =useState(false);
    const [time, setTime]= useState(0);
    const [timeCentSec, setTimeCentSec]= useState(0);
    const [timeSec, setTimeSec]= useState(0);
    const [timeMin, setTimeMin]= useState(0);
    const [timeHour, setTimeHour]= useState(0);

    console.log ("aqui estem",time)

    

    const startCount = () =>{
        setTimeout(() =>{
            setTime(time +1)
        },10)

    }

    const restartCount = () =>{
        setStart(false);
        setCounting(false);
    }

    useEffect(()=>{
    
        if(start==true){
            startCount();
            setTimeHour(parseInt(time/360000));
            setTimeMin(parseInt((time-timeHour*360000)/6000));
            setTimeSec(parseInt((time-(timeHour*360000+timeMin*6000))/100));
            setTimeCentSec(parseInt((time-(timeHour*360000+timeMin*6000+timeSec*100))));

            setCounting(true);
        }

        if(start==false && counting==false && time>0){
            setTime(0);
            setTimeCentSec(0);
            setTimeSec(0);
            setTimeMin(0);
            setTimeHour(0);
        }

    },[time, counting, start])

    
    
    




    return(
        <div className="chronometer-cont">
            <div className="chronometer-cont--buttons">
                <button onClick={()=>time==0 ? setStart(true) : time}>Start</button>
                <button onClick={()=>setStart(false)}>Stop</button>
                <button onClick={()=>time>0 ? setStart(true) : time}>Resume</button>
                <button onClick={()=>restartCount()}>Reset</button>
            </div>

            {/* <p>{time}</p> */}
            {/* IF para que salgan 2 numeros */}
            <div className="chronometer-cont--time">
                {timeHour<10 ? <p>0{timeHour}:</p> : <p>{timeHour}:</p>}
                {timeMin<10 ? <p>0{timeMin}:</p> : <p>{timeMin}:</p>}
                {timeSec<10 ? <p>0{timeSec}:</p> : <p>{timeSec}:</p>}
                {timeCentSec<10 ? <p>0{timeCentSec}</p> : (timeCentSec>98 ? <p>99</p> : <p>{timeCentSec}</p>)}
                
                
                
            </div>

        </div>
        
    )
}