import React from 'react';
import type { AmortizationRow } from '../types/types';

interface AmortizationTableProps {
  rows: AmortizationRow[];
  debtDescription: string;
}

export function AmortizationTable({ rows, debtDescription }: AmortizationTableProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Amortization Schedule - {debtDescription}</h3>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment #</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Principal</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Interest</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Balance</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {rows.map((row) => (
              <tr key={row.paymentNumber}>
                <td className="px-6 py-4 whitespace-nowrap">{row.paymentNumber}</td>
                <td className="px-6 py-4 whitespace-nowrap">{row.paymentDate}</td>
                <td className="px-6 py-4 whitespace-nowrap">${row.payment.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap">${row.principal.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap">${row.interest.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap">${row.remainingBalance.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}