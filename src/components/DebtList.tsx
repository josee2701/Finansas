import React from 'react';
import { Trash2 } from 'lucide-react';
import type { Debt } from '../types/types';

interface DebtListProps {
  debts: Debt[];
  onDelete: (id: string) => void;
}

export function DebtList({ debts, onDelete }: DebtListProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Current Debts</h2>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Interest Rate</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Monthly Payment</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Remaining Payments</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {debts.map((debt) => (
              <tr key={debt.id}>
                <td className="px-6 py-4 whitespace-nowrap">{debt.description}</td>
                <td className="px-6 py-4 whitespace-nowrap">${debt.totalAmount.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap">{debt.interestRate}%</td>
                <td className="px-6 py-4 whitespace-nowrap">${debt.monthlyPayment.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap">{debt.remainingInstallments}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => onDelete(debt.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}