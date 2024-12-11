import React from 'react';
import { DollarSign } from 'lucide-react';
import type { Income } from '../types/types';

interface IncomeFormProps {
  onSubmit: (income: Income) => void;
}

export function IncomeForm({ onSubmit }: IncomeFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const income = {
      salary: Number(formData.get('salary')),
      otherIncome: Number(formData.get('otherIncome')),
      fixedExpenses: Number(formData.get('fixedExpenses')),
    };

    onSubmit(income);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Income Information</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Monthly Salary</label>
          <input
            type="number"
            name="salary"
            required
            min="0"
            step="0.01"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Other Income</label>
          <input
            type="number"
            name="otherIncome"
            required
            min="0"
            step="0.01"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Fixed Monthly Expenses</label>
          <input
            type="number"
            name="fixedExpenses"
            required
            min="0"
            step="0.01"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        <DollarSign className="w-4 h-4 mr-2" />
        Update Income Information
      </button>
    </form>
  );
}