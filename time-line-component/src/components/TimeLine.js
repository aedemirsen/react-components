import timeLineData from '../data';
import TimeLineElement from "./TimeLineElement";
import React from "react";

const TimeLine = () =>timeLineData.length > 0 && (
    <div className='timeline-container'>
        {
            timeLineData.map((data,index) =>
                <TimeLineElement data={data} key={index}/>

            )
        }
    </div>
);

export default TimeLine;