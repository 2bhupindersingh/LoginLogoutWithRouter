const ExpenseDate  = (props) => {
    const expenseDate = props.date.toLocaleString('en-US',{ month: 'long' });
    const expenseDay = props.date.toLocaleString('en-US',{ day: 'numeric' });
    const expenseYear = props.date.getFullYear('en-US',{ year: 'numeric' });
return(
    <div>
    <div>{expenseDate}</div>
    <div>{expenseDay}</div>
    <div>{expenseYear}</div>
    </div>
)
}
export default ExpenseDate