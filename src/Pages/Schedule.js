import React, { useEffect, useState } from 'react';
import Ghost from '../Components/Ghost/Ghost';
import LessonsList from '../Components/LessonsList/LessonsList';

import {schedule1, schedule2} from '../data/schedule';

function Schedule() {
  const [group, setGroup] = useState();
  const [day, setDay] = useState();

  const dayMap = ["ПОНЕДIЛОК", "ВIВТОРОК", "СЕРЕДА", "ЧЕТВЕР", "П'ЯТНИЦЯ"];

  useEffect(() => {
    if(localStorage.getItem('group')) setGroup(localStorage.getItem('group'));
    setDay(new Date().getDay() - 1);
  },[]);

  useEffect(() => {
    if(group) localStorage.setItem('group', group);
  },[group]);

  return (
    <>
      <header className="App-header">
      {
          group && <h1>Розклад (група {group})</h1>
        }
        {
          !group && <h1>Виберiть групу</h1>
        }
        <form className="select-group">
          <div className="form-check">
            <label>
            <input
              type="radio"
              name="react-tips"
              value="1"
              className="form-check-input"
              onClick={()=>setGroup("1")}
            />
            Група 1
          </label>
        </div>
        <div className="form-check">
          <label>
            <input
              type="radio"
              name="react-tips"
              value="2"
              className="form-check-input"
              onClick={()=> setGroup("2")}
            />
            Група 2
          </label>
        </div>
        </form>
      </header>
      <main className="App-container">
        <Ghost/>
        {group === '1' && 
          schedule1.map((list, index) => {
            return (
              <LessonsList active ={index == day} lessons={list} weekDay={dayMap[index]}/>
            )
          })
        }
        {group === '2' && 
          schedule2.map((list, index) => {
            return (
              <LessonsList active ={index == day} lessons={list} weekDay={dayMap[index]}/>
            )
          })
        }
        </main>
    </>
  );
}

export default Schedule;