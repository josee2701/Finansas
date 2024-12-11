import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, PlusCircle, List, DollarSign } from 'lucide-react';

export function Navbar() {
  const navItems = [
    { to: '/', icon: Home, label: 'Dashboard' },
    { to: '/add-debt', icon: PlusCircle, label: 'Add Debt' },
    { to: '/debts', icon: List, label: 'View Debts' },
    { to: '/income', icon: DollarSign, label: 'Income' },
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <DollarSign className="w-8 h-8 mr-2" />
            <h1 className="text-xl font-bold">DebtTracker</h1>
          </div>
          <div className="flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `inline-flex items-center px-4 py-2 text-sm font-medium transition-colors duration-150 ${
                    isActive
                      ? 'bg-white/10 text-white'
                      : 'text-white/80 hover:bg-white/5 hover:text-white'
                  }`
                }
              >
                <item.icon className="w-4 h-4 mr-2" />
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}