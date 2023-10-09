import React from "react";

const Target = () => {
    return (
        <div>
          <form>
            <div>
              <label htmlFor="amount">Set target</label><br/>
              <input type="number" name="amount" id="amount" />
            </div>
            <button>Reset</button>
          </form>
          <p> Saving: 100</p>
          <p>Target:2000</p>
          <progress max="2000" value={100}/>
        </div>
);
};

export default Target;
