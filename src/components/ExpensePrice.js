import React from 'react'

const ExpensePrice = (props) => {
    return (
        <React.Fragment>
           <span className='expense-item__price' >${ props.price }</span> 
        </React.Fragment>
    )
}

export default ExpensePrice
