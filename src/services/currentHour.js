const twoDigits = ((number)=>{
    if(number<10){
        return ("0"+number).slice(-2);
    }else{
        return number;
    }

})


export function currentHour() {
   
    var today = new Date();
    var time = twoDigits(today.getHours()) + ":" + twoDigits(today.getMinutes()) + ":" + twoDigits(today.getSeconds());
    // var appDateTime = time+' '+date;
    return time;
}

export function currentDay() {

    const twoDigits = ((number)=>{
        if(number<10){
            return ("0"+number).slice(-2);
        }else{
            return number;
        }
    })
    
    var today = new Date();
    var date = today.getFullYear()+'-'+twoDigits(today.getMonth()+1)+'-'+twoDigits(today.getDate());

    return date;
}


export function countDown(timelineHour, timelineDay, dateTime, dateDate){
    let timelineDayArrow = timelineDay.split("-");
    let timelineHourArrow = timelineHour.split(":");

    let dateDateArrow = dateDate.split("-"); //any
    let dateTimeArrow = dateTime.split(":"); //hores
    
    let timelineTotal=timelineDayArrow[2]*3600*24+timelineHourArrow[0]*3600+timelineHourArrow[1]*60+timelineHourArrow[2]*1;
    let dateTotal=dateDateArrow[2]*3600*24+dateTimeArrow[0]*3600+dateTimeArrow[1]*60+dateTimeArrow[2]*1+1;

    let difference=timelineTotal-dateTotal;
    

    let day=parseInt(difference/(24*3600));
    let hour=parseInt((difference-(day*24*3600))/3600);
    let min=parseInt((difference-(day*24*3600+hour*3600))/60);
    let sec=parseInt((difference-(day*24*3600+hour*3600+min*60)));

    console.log(day,":",hour,":",min,":",sec);
    return [day,hour,min,sec];
    

}