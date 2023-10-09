import React from "react";


const ExpenseSource = () => {
    return (
        <div>
          <form>
            <div>
              <label htmlFor="amount">Expence Sourse</label><br/>
              <input type="number" name="amount" id="amount" /><br/>
              <label htmlFor="amount">Amount Of Expense</label><br/>
              <input type="number" name="amount" id="amount" /><br/>
              <label htmlFor="amount">Expense Date</label><br/><br/>
              <input type="date" name="date" id="date" />
            </div>
            <button>Add Expense</button>
          </form>
          <ul>
            <li>Water bill: 300 on 5th oct</li>
           <li>Phone bill: 200 on 5th oct</li>
         </ul>
        </div>
);
};

export default ExpenseSource;