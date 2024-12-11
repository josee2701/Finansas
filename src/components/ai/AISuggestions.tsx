import React, { useState } from 'react';
import { Lightbulb, RefreshCw } from 'lucide-react';
import type { Debt, Income, AISuggestion } from '../../types/types';
import { generateAISuggestions } from '../../utils/aiUtils';

interface AISuggestionsProps {
  debts: Debt[];
  income: Income | null;
}

export function AISuggestions({ debts, income }: AISuggestionsProps) {
  const [suggestions, setSuggestions] = useState<AISuggestion[]>([]);
  const [loading, setLoading] = useState(false);

  const handleGenerateSuggestions = () => {
    setLoading(true);
    const newSuggestions = generateAISuggestions(debts, income);
    setSuggestions(newSuggestions);
    setLoading(false);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-violet-600 to-purple-600 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Lightbulb className="w-6 h-6 text-white mr-3" />
            <h2 className="text-xl font-semibold text-white">AI Financial Advisor</h2>
          </div>
          <button
            onClick={handleGenerateSuggestions}
            disabled={loading}
            className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors duration-150 flex items-center"
          >
            {loading ? (
              <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
            ) : (
              <Lightbulb className="w-4 h-4 mr-2" />
            )}
            Get Advice
          </button>
        </div>
      </div>

      <div className="p-6 space-y-4">
        {suggestions.map((suggestion, index) => (
          <div
            key={index}
            className="p-6 rounded-xl bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-100"
          >
            <h3 className="text-lg font-semibold text-purple-900 mb-3">
              {suggestion.type.charAt(0).toUpperCase() + suggestion.type.slice(1)} Suggestion
            </h3>
            <p className="text-purple-800 mb-4">{suggestion.description}</p>
            <div className="space-y-2">
              <p className="text-sm text-purple-700">
                <strong>Impact:</strong> {suggestion.impact}
              </p>
              <p className="text-sm text-purple-700">
                <strong>Recommended Action:</strong> {suggestion.action}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}