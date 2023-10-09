import React from 'react';
import './App.css';
import Target from './Components/Target';
import IncomeSource from './Components/IncomeSource';
import ExpenceSource from './Components/ExpenseSource';
import SavingsAccount from './Components/SavingsAccount';

function App() {
  return (
    <>
    <div className='Conain-Forms'>
     < IncomeSource/>
     <ExpenceSource />
     <Target/>
      </div>
    <div>
      < SavingsAccount/>
      </div>
    
      
       </>
  );
}

export default App;
