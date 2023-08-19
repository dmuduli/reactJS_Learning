import "./App.css";
import Expenses from "./Components/ExpenseItem/Expenses";
import ProductItem from "./Components/Products/ProductItem";
import NewExpense from "./Components/NewExpense/NewExpense";
import Concepts from "./Components/Concepts/Concepts";
import KeyConceptImg from "./assets/images/key-img.jpg";
import ComponentImg from "./assets/images/component-img.jpg";
import StateImg from "./assets/images/state-img.jpg";
import EventImg from "./assets/images/event-img.jpg";
import Todo from "./Components/Todo/Todo";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      price: "$94.23",
      date: new Date(),
    },
    {
      id: "e2",
      title: "Car Insurance",
      price: "$1398",
      date: new Date(),
    },
    {
      id: "e3",
      title: "Gorcery",
      price: "$120",
      date: new Date(),
    },
  ];
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
  const reactConcepts = [
    {
      id: "rc1",
      title: "Key React Concepts",
      image: KeyConceptImg,
      description: "Selected key React concepts you should know about.",
    },
    {
      id: "rc2",
      title: "Components",
      image: ComponentImg,
      description:
        "Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.",
    },
    {
      id: "rc3",
      title: "State",
      image: StateImg,
      description:
        "State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.",
    },
    {
      id: "rc4",
      title: "Events",
      image: EventImg,
      description:
        "Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.",
    },
  ];
  return (
    <div className="app">
      <NewExpense />

      <Expenses items={expenses} />

      <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight my-4">
        My Demo Shop
      </h2>
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
      {/* <ExpenseItem></ExpenseItem> */}

      <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight my-4">
        React Concepts
      </h2>
      <Concepts items={reactConcepts} />
      <Todo />
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
