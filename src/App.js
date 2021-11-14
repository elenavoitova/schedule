import React, { useEffect } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import Schedule from './Pages/Schedule';
import './App.css';

//import { useDispatch, useSelector } from 'react-redux';


export default function App(props) {


  useEffect(() => {
  }, [])

  return (
    <div className="App">
        <Route exact
          path="/"
          component={() => <Schedule />}
        />
    </div>
  );
}