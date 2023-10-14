import React from 'react';
import './App.css';
import {useState} from 'react';
import { InComeSource, ExpenceSource , Target , SavingsAccount } from './Components/importes';


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
