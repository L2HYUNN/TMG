import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses({ items }) {
  return (
    <div className="expenses">
      {items.map((item) => (
        <ExpenseItem {...item} />
      ))}
    </div>
  );
}

export default Expenses;
