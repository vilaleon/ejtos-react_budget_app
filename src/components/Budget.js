import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { dispatch, budget, currency, remaining } = useContext(AppContext);
    const [ budg, setBudg ] = useState(budget);

    const handleBudgetChange = (event) => {
        let newBudget = event.target.value;
        let totalExpenses = budget - remaining;
        if (newBudget >= 20000) {
            alert("The value cannot exceed 20,000");
        }
        else if (newBudget < totalExpenses) {
            alert("The budget cannot be less than total expenses");
        }
        else {
            setBudg(newBudget);
            dispatch({
                type: 'SET_BUDGET',
                payload: newBudget,
            })
        }
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency} 
            <input
                type = 'number'
                value = {budg}
                step = '10'
                onChange = {(event) => handleBudgetChange(event)}
            >
            </input>
            </span>
        </div>
    );
};
export default Budget;