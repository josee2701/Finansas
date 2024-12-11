import React from 'react';
import { DollarSign, TrendingDown, CreditCard, PiggyBank } from 'lucide-react';
import type { Debt, Income } from '../../types/types';
import { calculateDisposableIncome } from '../../utils/financialUtils';

interface FinancialSummaryProps {
  debts: Debt[];
  income: Income | null;
}

export function FinancialSummary({ debts, income }: FinancialSummaryProps) {
  if (!income) return null;

  const totalDebt = debts.reduce((sum, debt) => sum + debt.totalAmount, 0);
  const monthlyPayments = debts.reduce((sum, debt) => sum + debt.monthlyPayment, 0);
  const disposableIncome = calculateDisposableIncome(income, monthlyPayments);
  const totalIncome = income.salary + income.otherIncome;

  const summaryItems = [
    {
      title: 'Monthly Income',
      value: totalIncome,
      icon: DollarSign,
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      title: 'Total Debt',
      value: totalDebt,
      icon: TrendingDown,
      gradient: 'from-rose-500 to-pink-500',
    },
    {
      title: 'Monthly Payments',
      value: monthlyPayments,
      icon: CreditCard,
      gradient: 'from-blue-500 to-indigo-500',
    },
    {
      title: 'Disposable Income',
      value: disposableIncome,
      icon: PiggyBank,
      gradient: 'from-violet-500 to-purple-500',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {summaryItems.map((item) => (
        <div
          key={item.title}
          className="relative overflow-hidden rounded-xl bg-gradient-to-br text-white shadow-lg"
          style={{
            background: `linear-gradient(135deg, var(--${item.gradient}-from), var(--${item.gradient}-to))`,
          }}
        >
          <div className="absolute right-0 top-0 opacity-10">
            <item.icon className="w-24 h-24 -mr-6 -mt-6 transform rotate-12" />
          </div>
          <div className="p-6">
            <p className="text-sm font-medium text-white/80">{item.title}</p>
            <p className="mt-2 text-3xl font-bold">${item.value.toFixed(2)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}