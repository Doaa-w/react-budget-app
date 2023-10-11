
const SavingsAccount = () => {
  function Saving(props :number ){
    //lifting state here is missing

  }
  
    return (
        <div>

        <p> Current Balance : 4000 </p> <br/>
        <label>Transfer To Saving Account </label><br/>
        <input type="text" name="inputTransfer" id="inputTransferId"/>
        <button name="transferBtnName" id="transferBtnId"> Transfer </button>
         </div>  
  );
}
export default SavingsAccount;