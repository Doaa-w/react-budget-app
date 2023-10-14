import React from "react";
import {useState , ChangeEvent , FormEvent } from 'react';
import App from "../App";

type savingTypes  = {
  Saving: number
 }
const savingTarget = (props:savingTypes) => {
  const [target , setTarget] = useState(0);

  const handelChange =(event :ChangeEvent<HTMLInputElement>) => { 
  setTarget (Number(event.target.value));
  };

  const handelSubmit = (event : FormEvent) => {
    event.preventDefault();
    setTarget(0);

  }


    return (
        <div>
          <form onSubmit={handelSubmit}>
              <label htmlFor="amount">Set target</label><br/>
              <input type="number" name="amount" id="amount" value={target} onChange={handelChange}/>
            <button>Reset</button>
          
          <p> Saving: {props.Saving}"</p>
          <p>Target:{target}</p>
          <p>progress is: {((props.Saving/target||1)*100)} %</p>
          <progress max={target} value={props.Saving}/>
       </form> 
       </div>
);
};

export default savingTarget;
