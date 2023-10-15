import {useState , ChangeEvent , FormEvent } from 'react';
import { TypesForms } from './TypesF';


const IncomeForm = () => {
 

const [income ,setIncome]= useState <TypesForms>({
  source : '',
  amount: 0 ,
  date: '' ,

});
 const[incomes , setIncomes]=useState<TypesForms[]>([])

const handelChange =(event :ChangeEvent<HTMLInputElement>) => {
 const {name , value } = event.target;
 setIncome((prevIncome) => {
  return { ... prevIncome , [name]:value};
 });
};

  const handelSubmit = (event : FormEvent) => {
    event.preventDefault();
    setIncomes((prevIncomes) => {
      return [... prevIncomes , income];
     });
  }
    return (
        <div> 
          <form onSubmit={handelSubmit} >
            <div>
              <label htmlFor="amount">Income Source</label><br/>
              <input type="text" name="source" id="source" value={income.source} onChange={handelChange}/><br/>
              <label htmlFor="amount">Amount Of Income</label><br/>
              <input type="number" name="amount" id="amount" value={income.amount} onChange={handelChange} /><br/>
              <label htmlFor="amount">Income Date</label><br/>
              <input type="date" name="date" id="date" value={income.date} onChange={handelChange} /><br/>
            <button  >Add Income </button>
            
            
              </div>
          </form>
         <ul>
          {incomes.map((income , index)=>(
          <li key={index}>
               {income.source}: {income.amount} EUR :{income.date}</li>
         
         ))}
         </ul>    
        </div>
);
};

export default IncomeForm;