import Form from "./expense-tracker/components/From";
import ExpenseList from "./expense-tracker/components/ExpensList";
import { useState } from "react";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";



function App() {
  const [selectedCategory, setSelectedGategory] = useState('');
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 100, category: "Groceries" },
    { id: 3, description: "ccc", amount: 1000, category: "Entertainment" },
  ]);

  const visibleExpenses = selectedCategory ? expenses.filter(e => e.category === selectedCategory) : expenses;

  return (
    <>
      <div className="mb-5">
        <Form onSubmit={(newExpense) => setExpenses([...expenses, {...newExpense, id:expenses.length + 1}])}/>
      </div>
      <div className="mb-3">
        <ExpenseFilter onSelectCategory={category => setSelectedGategory(category)}/>
      </div>
      <ExpenseList
        expenses={visibleExpenses } 
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </>
  );
}

export default App;
