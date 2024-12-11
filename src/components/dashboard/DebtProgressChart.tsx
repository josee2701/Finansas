import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import type { DebtProjection } from '../../types/types';
import { calculateDebtProjections } from '../../utils/financialUtils';

interface DebtProgressChartProps {
  debts: Debt[];
}

export function DebtProgressChart({ debts }: DebtProgressChartProps) {
  const projections = calculateDebtProjections(debts);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Debt Payoff Progress</h2>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={projections}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip
              formatter={(value) => `$${Number(value).toFixed(2)}`}
            />
            <Line
              type="monotone"
              dataKey="totalDebt"
              stroke="#ef4444"
              name="Remaining Debt"
            />
            <Line
              type="monotone"
              dataKey="totalPaid"
              stroke="#22c55e"
              name="Total Paid"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}