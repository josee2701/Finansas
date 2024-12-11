import React from 'react';
import { Calendar } from 'lucide-react';
import type { Debt } from '../../types/types';
import { getUpcomingPayments } from '../../utils/debtUtils';

interface UpcomingPaymentsProps {
  debts: Debt[];
}

export function UpcomingPayments({ debts }: UpcomingPaymentsProps) {
  const upcomingPayments = getUpcomingPayments(debts);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
        <div className="flex items-center">
          <Calendar className="w-6 h-6 text-white mr-3" />
          <h2 className="text-xl font-semibold text-white">Upcoming Payments</h2>
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        {upcomingPayments.map((payment) => (
          <div
            key={payment.id}
            className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200 transition-transform hover:scale-[1.02] cursor-pointer"
          >
            <div>
              <p className="font-medium text-gray-900">{payment.description}</p>
              <p className="text-sm text-gray-500">Due: {payment.nextPaymentDate}</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-blue-600">${payment.monthlyPayment.toFixed(2)}</p>
              <p className="text-sm text-gray-500">
                {payment.remainingInstallments} payments left
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}