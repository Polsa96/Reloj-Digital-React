import React, {useState} from 'react';
import "./ClockPages.css"
import {currentDay} from "../../services/currentHour"
import {currentHour} from "../../services/currentHour"

export default function ClockPages( {props1,props2}){


setTimeout(()=>{
    props1.setDateTime(currentHour());
    props2.setDateDate(currentDay());
},1000);


    return(
        <div className="clock-cont">
            <p className="clock-cont--time">{props1.dateTime}</p>
            <p className="clock-cont--date">{props2.dateDate}</p>
        </div>
    )
}