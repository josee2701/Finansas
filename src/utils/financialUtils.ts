import type { Debt, Income, DebtProjection } from '../types/types';

export function calculateDisposableIncome(income: Income, monthlyDebtPayments: number): number {
  const totalFixedExpenses = income.fixedExpenses.reduce((sum, expense) => sum + expense.amount, 0);
  return income.salary + income.otherIncome - totalFixedExpenses - monthlyDebtPayments;
}

export function calculateDebtProjections(debts: Debt[]): DebtProjection[] {
  const projections: DebtProjection[] = [];
  let totalDebt = debts.reduce((sum, debt) => sum + debt.totalAmount, 0);
  let totalPaid = 0;

  // Project for the next 24 months
  for (let i = 0; i < 24; i++) {
    const date = new Date();
    date.setMonth(date.getMonth() + i);
    const monthlyPayment = debts.reduce((sum, debt) => sum + debt.monthlyPayment, 0);
    
    totalPaid += monthlyPayment;
    totalDebt -= monthlyPayment;

    if (totalDebt < 0) totalDebt = 0;

    projections.push({
      month: date.toLocaleDateString('default', { month: 'short', year: 'numeric' }),
      totalDebt,
      totalPaid,
      progress: (totalPaid / (totalPaid + totalDebt)) * 100,
    });

    if (totalDebt === 0) break;
  }

  return projections;
}