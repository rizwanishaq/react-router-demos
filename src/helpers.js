const generateRandomColor = () => {
  const existingBudgetsLength = fetchData("budgets")?.length ?? 0;
  return `${existingBudgetsLength * 34} 65% 50%`;
};
// Local storage
export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const createBudget = ({ name, amount }) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    amount: amount,
    color: generateRandomColor(),
  };
  const existingBudgets = fetchData("budgets") ?? [];
  return localStorage.setItem(
    "budgets",
    JSON.stringify([...existingBudgets, newItem])
  );
};

export const createExpense = ({ name, amount, budgetId }) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    amount: amount,
    budgetId: budgetId,
  };
  const existingExpense = fetchData("expenses") ?? [];
  return localStorage.setItem(
    "expenses",
    JSON.stringify([...existingExpense, newItem])
  );
};

// delete item
export const deleteItem = ({ key }) => {
  return localStorage.removeItem(key);
};
