import React from 'react';
import './App.css';
import {useState} from 'react';
import ExpenceSource from './Components/ExpenseSource';
import SavingsAccount from './Components/SavingsAccount';
import Target from './Components/Target';
import InComeSource from './Components/InComeSource';
import ReactDOM from 'react-dom/client';
import {BrowserRouter , Routes , Route, Link} from 'react-router-dom';


const App = () => {
  
  //lifting state here

  const [saving , setSaving ]=useState(0)

  const getSaving = (amount : number )=>{
    setSaving(amount)
  }
  return (
    <div> 
      
      
      <div className='Formes'>
    
     < InComeSource />
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
