import React from 'react';
import './App.css';
import Target from './Components/Target';
import {useState} from 'react';
import ExpenceSource from './Components/ExpenseSource';
import SavingsAccount from './Components/SavingsAccount';
import InComeSource from './Components/InComeSource';


const App = () => {
  
  //lifting state here

  const [saving , setSaving ]=useState(0)

  const getSaving = (amount : number )=>{
    setSaving(amount)
  }
  return (
    <div>
    <div className='Formes'>
     < InComeSource/>
     <ExpenceSource />
     <Target Saving={saving} />
      </div>
    <div id='Balance'>
      < SavingsAccount  getSaving ={getSaving}/>
      </div>
    
      
       </div>
  );
}

export default App;
