import React from 'react';
import './App.css';
// import {useDispatch, useSelector} from "react-redux";
// import {useAppSelector} from "./hooks/useAppSelector";
import {useAppDispatch} from "./hooks/useAppDispatch";
import User from "./components/User";


function App() {
    const dispatch = useAppDispatch()
  return (
    <div className="App">
        <User/>
    </div>
  );
}

export default App;
