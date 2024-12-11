import type { Debt, Income, AISuggestion } from '../types/types';

export function generateAISuggestions(debts: Debt[], income: Income | null): AISuggestion[] {
  const suggestions: AISuggestion[] = [];

  if (!income || debts.length === 0) return suggestions;

  // Analyze debt-to-income ratio
  const monthlyDebtPayments = debts.reduce((sum, debt) => sum + debt.monthlyPayment, 0);
  const monthlyIncome = income.salary + income.otherIncome;
  const debtToIncomeRatio = monthlyDebtPayments / monthlyIncome;

  // Prioritization suggestion
  const highestInterestDebt = [...debts].sort((a, b) => b.interestRate - a.interestRate)[0];
  suggestions.push({
    type: 'prioritization',
    description: `Focus on paying off ${highestInterestDebt.description} first due to its high interest rate of ${highestInterestDebt.interestRate}%.`,
    impact: 'Minimizes interest paid over time',
    action: 'Allocate any extra funds to this debt while maintaining minimum payments on others.',
  });

  // Refinancing suggestion if applicable
  const highInterestDebts = debts.filter(debt => debt.interestRate > 10);
  if (highInterestDebts.length > 0) {
    suggestions.push({
      type: 'refinancing',
      description: 'Consider refinancing high-interest debts to reduce interest payments.',
      impact: 'Could lower monthly payments and total interest paid',
      action: 'Research refinancing options for debts with interest rates above 10%.',
    });
  }

  // Budget adjustment if debt-to-income ratio is high
  if (debtToIncomeRatio > 0.4) {
    suggestions.push({
      type: 'adjustment',
      description: 'Your debt-to-income ratio is higher than recommended.',
      impact: 'Reduces financial stress and improves debt management',
      action: 'Review fixed expenses for potential reductions and avoid taking on new debt.',
    });
  }

  return suggestions;
}