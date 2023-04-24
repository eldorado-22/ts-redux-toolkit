import React from 'react';
import './App.css';
// import {useDispatch, useSelector} from "react-redux";
// import {useAppSelector} from "./hooks/useAppSelector";
import {useAppDispatch} from "./hooks/useAppDispatch";


function App() {
    const dispatch = useAppDispatch()
  return (
    <div className="App">
      <h1>1</h1>
      <button>increment</button>
      <button>decrement</button>
    </div>
  );
}

export default App;
