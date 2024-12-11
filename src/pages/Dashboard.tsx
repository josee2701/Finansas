import React from 'react';
import { FinancialSummary } from '../components/dashboard/FinancialSummary';
import { UpcomingPayments } from '../components/dashboard/UpcomingPayments';
import { DebtChart } from '../components/dashboard/DebtChart';
import { DebtProgressChart } from '../components/dashboard/DebtProgressChart';
import { AISuggestions } from '../components/ai/AISuggestions';
import type { Debt, Income } from '../types/types';

interface DashboardProps {
  debts: Debt[];
  income: Income | null;
}

export function Dashboard({ debts, income }: DashboardProps) {
  return (
    <div className="space-y-6">
      <FinancialSummary debts={debts} income={income} />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <UpcomingPayments debts={debts} />
        <DebtChart debts={debts} />
      </div>

      <DebtProgressChart debts={debts} />
      
      <AISuggestions debts={debts} income={income} />
    </div>
  );
}