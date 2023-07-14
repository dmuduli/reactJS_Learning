import "./App.css";
import ExpenseItem from "./Components/ExpenseItem/ExpenseItem";
import Products from "./Components/Products/Products";

function App() {
  return (
    <div>
      <h2>My Demo Shop</h2>
      <Products></Products>
      <ExpenseItem></ExpenseItem>
    </div>
    // <div>
    //   <h2>Expense Items</h2>
    //   <ExpenseItem></ExpenseItem>
    //   <ExpenseItem></ExpenseItem>
    //   <ExpenseItem></ExpenseItem>
    // </div>
  );
}

export default App;
