import React, {useEffect, useState} from 'react';
import {currentDay} from "../../services/currentHour"
import {currentHour} from "../../services/currentHour"
import {countDown} from "../../services/currentHour"

export default function CountDownPages({props1, props2}){
    const timelineHour= "14:43:00";    
    const timelineDay = "2022-02-27"; 

    const [sec,setSec]=useState(0)
    const [min,setMin]=useState(0)
    const [hour,setHour]=useState(0)
    const [day,setDay]=useState(0)
  
     
    useEffect(()=>{
        setTimeout(()=>{
            
            props1.setDateTime(currentHour());
            props2.setDateDate(currentDay());


            let total = countDown(timelineHour, timelineDay, props1.dateTime, props2.dateDate);
            setSec(total[3]);
            setMin(total[2]);
            setHour(total[1]);
            setDay(total[0]);
            
        },1000);
    },[currentHour()])

    
    


        return(
            <div className="clock-cont">
                <p className="clock-cont--time">{day} días {hour} horas {min} minutos {sec } segundos</p>
                <p>para el</p>
                <p className="clock-cont--date">{timelineDay} {timelineHour}</p>
            </div>
        )
}