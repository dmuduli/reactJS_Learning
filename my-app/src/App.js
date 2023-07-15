import "./App.css";
import ExpenseItem from "./Components/ExpenseItem/ExpenseItem";
import ProductItem from "./Components/Products/ProductItem";

function App() {
  const products = [
    {
      id: "p1",
      title: "Product 1",
      price: 30,
      description: "First Product",
    },
    {
      id: "p2",
      title: "Product 2",
      price: 50,
      description: "Second Product",
    },
    {
      id: "p3",
      title: "Product 3",
      price: 100,
      description: "Third Product",
    },
  ];
  return (
    <div>
      <h2>My Demo Shop</h2>
      <ProductItem
        title={products[0].title}
        price={products[0].price}
        description={products[0].description}
      />
      <ProductItem
        title={products[1].title}
        price={products[1].price}
        description={products[1].description}
      />
      <ProductItem
        title={products[2].title}
        price={products[2].price}
        description={products[2].description}
      />
      {/* <ProductItem title="Product 1" price="30" description="First Product" />
      <ProductItem title="Product 2" price="50" description="Second Product" />
      <ProductItem title="Product 3" price="100" description="Third Product" /> */}
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
