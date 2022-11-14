import timeLineData from '../data';
import TimeLineItem from "./TimeLineItem";
import React from "react";

const TimeLine = () =>timeLineData.length > 0 && (
    <div className='timeline-container'>
        {
            timeLineData.map((data,index) =>
                <TimeLineItem data={data} key={index}/>
            )
        }
    </div>
);

export default TimeLine;