import type { Debt } from '../types/types';

export function getUpcomingPayments(debts: Debt[]) {
  const today = new Date();
  const thirtyDaysFromNow = new Date();
  thirtyDaysFromNow.setDate(today.getDate() + 30);

  return debts
    .map((debt) => {
      const nextPaymentDate = new Date(debt.startDate);
      nextPaymentDate.setDate(debt.paymentDay);
      
      // If this month's payment date has passed, move to next month
      if (nextPaymentDate < today) {
        nextPaymentDate.setMonth(nextPaymentDate.getMonth() + 1);
      }

      return {
        ...debt,
        nextPaymentDate: nextPaymentDate.toLocaleDateString(),
      };
    })
    .filter((debt) => {
      const paymentDate = new Date(debt.nextPaymentDate);
      return paymentDate <= thirtyDaysFromNow && debt.remainingInstallments > 0;
    })
    .sort((a, b) => new Date(a.nextPaymentDate).getTime() - new Date(b.nextPaymentDate).getTime());
}