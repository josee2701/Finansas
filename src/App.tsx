import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Dashboard } from './pages/Dashboard';
import { DebtForm } from './components/DebtForm';
import { IncomeForm } from './components/IncomeForm';
import { DebtList } from './components/DebtList';
import type { Debt, Income } from './types/types';

function App() {
  const [debts, setDebts] = useState<Debt[]>([]);
  const [income, setIncome] = useState<Income | null>(null);

  const handleAddDebt = (newDebt: Omit<Debt, 'id'>) => {
    const debt: Debt = {
      ...newDebt,
      id: crypto.randomUUID(),
    };
    setDebts((prev) => [...prev, debt]);
  };

  const handleDeleteDebt = (id: string) => {
    setDebts((prev) => prev.filter((debt) => debt.id !== id));
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Dashboard debts={debts} income={income} />} />
            <Route
              path="/add-debt"
              element={<DebtForm onSubmit={handleAddDebt} />}
            />
            <Route
              path="/debts"
              element={<DebtList debts={debts} onDelete={handleDeleteDebt} />}
            />
            <Route
              path="/income"
              element={<IncomeForm onSubmit={setIncome} />}
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;