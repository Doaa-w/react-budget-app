import React from "react";
import {useState , ChangeEvent , FormEvent } from 'react';

const savingTarget = () => {
  const [target , setTarget] = useState(0);

  const handelChange =(event :ChangeEvent<HTMLInputElement>) => { 
  setTarget (Number(event.target.value));
  };

  const handelSubmit = (event : FormEvent) => {
    event.preventDefault();
    setTarget (0);

  }


    return (
        <div>
          <form onSubmit={handelSubmit}>
              <label htmlFor="amount">Set target</label><br/>
              <input type="number" name="amount" id="amount" value={target} onChange={handelChange}/>
            <button>Reset</button>
          </form>
          <p> Saving: "Transfer"</p>
          <p>Target:{target}</p><br/>
          <progress max="5000" value={target}/>
        </div>
);
};

export default savingTarget;
