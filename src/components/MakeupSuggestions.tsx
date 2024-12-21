import React from 'react';
import { SkinProfile, MakeupSuggestion } from '../types';
import { getSuggestions } from '../utils/makeupSuggestions';
import { ExternalLink } from 'lucide-react';

interface Props {
  profile: SkinProfile;
}

export function MakeupSuggestions({ profile }: Props) {
  const suggestions = getSuggestions(profile);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">Your Personalized Makeup Suggestions</h2>
      
      <div className="grid gap-6 md:grid-cols-2">
        {suggestions.map((suggestion, index) => {
          const productLink = suggestion.reason.split('https://')[1];
          const reasonWithoutLink = suggestion.reason.split('https://')[0];

          return (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 border border-pink-100 hover:border-pink-300 transition-colors"
            >
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {suggestion.category}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {suggestion.productType}
              </p>
              <div className="space-y-2">
                <p className="text-pink-600 font-medium">Recommendation:</p>
                <p className="text-gray-800">{suggestion.recommendation}</p>
                <p className="text-pink-600 font-medium mt-2">Why this works for you:</p>
                <p className="text-gray-800">{reasonWithoutLink}</p>
                {productLink && (
                  <a
                    href={`https://${productLink}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-pink-600 hover:text-pink-700 mt-2"
                  >
                    View Product <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}