import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { SkinProfile } from './types';
import { SkinAnalysisForm } from './components/SkinAnalysisForm';
import { MakeupSuggestions } from './components/MakeupSuggestions';

function App() {
  const [profile, setProfile] = useState<SkinProfile | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-12 w-12 text-pink-600" />
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Perfect Makeup Match
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Get personalized makeup recommendations based on your unique skin profile
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {!profile ? (
            <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
              <SkinAnalysisForm onSubmit={setProfile} />
            </div>
          ) : (
            <div className="space-y-8">
              <MakeupSuggestions profile={profile} />
              <button
                onClick={() => setProfile(null)}
                className="inline-flex items-center px-4 py-2 border border-pink-300 text-sm font-medium rounded-md text-pink-700 bg-white hover:bg-pink-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
              >
                Start Over
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;