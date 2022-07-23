import React from 'react';
import ExpenseDate from './ExpenseDate';
import ExpenseTitle from './ExpenseTitle';
import ExpensePrice from './ExpensePrice';

const ExpenseItem = (props) => {
    return (
        <div className='expense-item'>
           <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <ExpenseTitle title={props.title} />
                <ExpensePrice price={props.price} />
            </div>
        </div>
    )
}

export default ExpenseItem