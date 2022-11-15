import React from "react";

const TimeLineElement = ({data}) => (
   <div className='timeline-element'>
       <div className='timeline-element-content'>
           <span className='title'>{data.title}</span>
           <time className='date'>{data.date}</time>
           <p className='content'>{data.text}</p>
           <span className='dot'></span>
       </div>
   </div>
);

export default TimeLineElement;