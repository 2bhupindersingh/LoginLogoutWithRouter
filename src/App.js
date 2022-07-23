import './App.css';
import ExpenseItemList from './components/ExpenseItemList';

function App() {
  const dataItem = [
    {
      id:0,
      title:'Car Insurance',
      date:new Date(2022, 1, 8),
      price:200
    },
    {
      id:1,
      title:'Car Insurance 1',
      date:new Date(2022, 2, 20),
      price:400
    },
    {
      id:2,
      title:'Car Insurance 2',
      date:new Date(2022, 3, 10),
      price:500
    }
  ]
  return (
    <div className="App">
     <ExpenseItemList items={dataItem}  />
    </div>
  );
}

export default App;
