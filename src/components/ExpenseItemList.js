import React from 'react';
import  './ExpenseItem.css';
import ExpenseItem from './ExpenseItem';
const ExpenseItemList = (props) => {
   
    return (
        <div>
        <ExpenseItem title={props.items[0].title} date={props.items[0].date} price={props.items[0].price}>
       </ExpenseItem>
       <ExpenseItem title={props.items[1].title} date={props.items[1].date} price={props.items[1].price}>
       </ExpenseItem>
       <ExpenseItem title={props.items[2].title} date={props.items[2].date} price={props.items[2].price}>
       </ExpenseItem>
        </div>
    )
}

export default ExpenseItemList
