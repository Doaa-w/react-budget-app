import React from "react";

const SavingsAccount = () => {
    return (
        <>

        <p> Current Balance : 4000 </p> 
        <label>Transfer To Saving Account </label><br/>
        <input type="text" name="inputTransfer" id="inputTransfer"/><br/>
        <button name="transfer" id="transferBtn"> Transfer </button>
         </>  
  );
}
export default SavingsAccount;