import React from "react";


const IncomeSource = () => {
    return (
        <div>
          <form>
            <div>
              <label htmlFor="amount">Income Source</label><br/>
              <input type="number" name="amount" id="amount" /><br/>
              <label htmlFor="amount">Amount Of Income</label><br/>
              <input type="number" name="amount" id="amount" /><br/>
              <label htmlFor="amount">Income Date</label><br/>
              <input type="date" name="date" id="date" /><br/>
            </div>
            <button>Add Income</button>
          </form>
         <ul>
            <li>Salary on oct :4000</li>
           <li>Salary on sep :4000</li>
         </ul>
        </div>
);
};

export default IncomeSource;