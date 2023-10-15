import App from "../App";
import {useState , ChangeEvent , FormEvent } from 'react';

type getSavingtype  ={
  getSaving:(amount: number) => void
 } 
const SavingsAccount = (props:getSavingtype) => {

  const [transferAmount , setTransferAmount]= useState(0);

  const handelChange =(event :ChangeEvent<HTMLInputElement>) => { 
     setTransferAmount (Number(event.target.value));
    };
    
    const handelSubmit = (event : FormEvent) => {
      event.preventDefault();
     props.getSaving(transferAmount);
      setTransferAmount (0);
  
    }
  

    return (
        <div>
         <form onSubmit={handelSubmit}>
        <label htmlFor="amount">Transfer To Saving Account </label><br/>
        <input type="text" name="inputTransfer" id="inputTransferId" onChange={handelChange}/>
        <button name="transferBtnName" id="transferBtnId"> Transfer </button>
        <p> Current Balance :</p> 
         </form>
         </div>  
  );
}
export default SavingsAccount;