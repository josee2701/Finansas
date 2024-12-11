export interface Debt {
  id: string;
  description: string;
  totalAmount: number;
  interestRate: number;
  startDate: string;
  paymentDay: number;
  installments: number;
  remainingInstallments: number;
  monthlyPayment: number;
}

export interface Income {
  salary: number;
  otherIncome: number;
  fixedExpenses: FixedExpense[];
}

export interface FixedExpense {
  id: string;
  description: string;
  amount: number;
  category: string;
}

export interface AmortizationRow {
  paymentNumber: number;
  paymentDate: string;
  payment: number;
  principal: number;
  interest: number;
  remainingBalance: number;
}

export interface DebtProjection {
  month: string;
  totalDebt: number;
  totalPaid: number;
  progress: number;
}

export interface AISuggestion {
  type: 'prioritization' | 'refinancing' | 'adjustment';
  description: string;
  impact: string;
  action: string;
}