import { type } from "os";
import {useState , ChangeEvent , FormEvent } from 'react';
import { typesF } from './TypesF';

  
 const ExpenseForm = () => {
const [expense ,setExpense]= useState<typesF> ({
  source : '',
  amount: 0 ,
  date: '' ,

});
 const[expenses , setExpenses]=useState<typesF[]>([])

const handelChange =(event :ChangeEvent<HTMLInputElement>) => {
 const {name , value } = event.target;
 setExpense((prevexpense) => {
  return { ... prevexpense , [name]:value};
 });
};


  const handelSubmit = (event : FormEvent) => {
    event.preventDefault();
    setExpenses((prevExpenses) => {
      return [... prevExpenses , expense];
     });
  }

    return (
        <div>
          <form onSubmit={handelSubmit}>
            <div>
              <label htmlFor="amount">Expense Sourse</label><br/>
              <input type="text" name="source" id="expense" value={expense.source} onChange={handelChange}/><br/>
              <label htmlFor="amount">Amount Of Expense</label><br/>
              <input type="number" name="amount" id="amount" value={expense.amount} onChange={handelChange}/><br/>
              <label htmlFor="amount">Expense Date</label><br/>
              <input type="date" name="date" id="date" value={expense.date}  onChange={handelChange} />
            </div>
            <button>Add Expense</button>
          </form>
          <ul>
          {expenses.map((expense , index)=>(
          <li key={index}>
               {expense.source}: {expense.amount} EUR :{expense.date}</li>
         
         ))}
         </ul>   
        </div>
);
};

export default ExpenseForm;