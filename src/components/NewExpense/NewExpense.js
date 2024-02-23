import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const saveExpenseDataHandler = function (newExpense) {
    const newExpenseData = {
      ...newExpense,
      id: Math.random().toString(),
    };
    props.onAddExpense(newExpenseData);
  };
  function buttonVisibilityHandler() {
    setIsButtonVisible((prevState) => !prevState);
  }
  return (
    <div className="new-expense">
      {isButtonVisible ? (
        <button onClick={buttonVisibilityHandler}> Add Expense </button>
      ) : (
        <ExpenseForm
          onCancel={buttonVisibilityHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
