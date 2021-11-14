import React from 'react';
import './LessonsList.scss';

import {time} from '../../data/schedule';

function LessonsList({lessons, weekDay, active}) {
  return (
    <div className={`lesson-list ${active ? "active" : ""}`}>
      <div className={`lesson-title ${active ? "active" : ""}`}>{weekDay}</div>
    {lessons.map((lesson, index)=>{
      return(
        <div className="lesson-item" key={index}>
          <div className="lesson-name">{time[index]}: {lesson.name}</div>
          <div className="lesson-teacher">Викладач: {lesson.teacher}</div>
          { lesson.zoom &&
            <a href={lesson.zoom} target="_blank" rel="noreferrer" className="lesson-link">zoom</a>
          }
        </div>
      )
    })}
    </div>
  )
}

export default LessonsList;