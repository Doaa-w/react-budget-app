import React from 'react';
import './App.css';
import Target from './Components/Target';
import inComeSource from './Components/InComeSource';
import ExpenceSource from './Components/ExpenseSource';
import SavingsAccount from './Components/SavingsAccount';
import InComeSource from './Components/InComeSource';


function App() {
  
  //lifting state here is missing
  return (
    <div>
    <div className='Formes'>
     < InComeSource/>
     <ExpenceSource />
     <Target/>
      </div>
    <div className='Balance'>
      < SavingsAccount />
      </div>
    
      
       </div>
  );
}

export default App;
