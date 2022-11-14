import React from "react";

const TimeLineItem = ({data}) => (
   <div className='timeline-element'>
       <div className='timeline-element-content'>
           <h2 className='title'>{data.title}</h2>
           <span className='content'>{data.text}</span>
       </div>
   </div>
);

export default TimeLineItem;