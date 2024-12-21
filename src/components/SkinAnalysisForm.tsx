import React from 'react';
import { SkinProfile } from '../types';

interface Props {
  onSubmit: (profile: SkinProfile) => void;
}

export function SkinAnalysisForm({ onSubmit }: Props) {
  const [profile, setProfile] = React.useState<SkinProfile>({
    skinType: 'normal',
    undertone: 'neutral',
    sensitivity: 'low',
    texture: 'smooth',
    concerns: [],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(profile);
  };

  const concerns = [
    'Acne',
    'Dark spots',
    'Fine lines',
    'Large pores',
    'Redness',
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Skin Type</label>
        <select
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
          value={profile.skinType}
          onChange={(e) => setProfile({ ...profile, skinType: e.target.value as any })}
        >
          <option value="oily">Oily</option>
          <option value="dry">Dry</option>
          <option value="combination">Combination</option>
          <option value="normal">Normal</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Undertone</label>
        <select
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
          value={profile.undertone}
          onChange={(e) => setProfile({ ...profile, undertone: e.target.value as any })}
        >
          <option value="warm">Warm</option>
          <option value="cool">Cool</option>
          <option value="neutral">Neutral</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Skin Sensitivity</label>
        <select
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
          value={profile.sensitivity}
          onChange={(e) => setProfile({ ...profile, sensitivity: e.target.value as any })}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Skin Texture</label>
        <select
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
          value={profile.texture}
          onChange={(e) => setProfile({ ...profile, texture: e.target.value as any })}
        >
          <option value="smooth">Smooth</option>
          <option value="rough">Rough</option>
          <option value="uneven">Uneven</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Skin Concerns</label>
        <div className="mt-2 space-y-2">
          {concerns.map((concern) => (
            <label key={concern} className="inline-flex items-center mr-4">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-pink-600 focus:ring-pink-500"
                checked={profile.concerns.includes(concern)}
                onChange={(e) => {
                  const newConcerns = e.target.checked
                    ? [...profile.concerns, concern]
                    : profile.concerns.filter((c) => c !== concern);
                  setProfile({ ...profile, concerns: newConcerns });
                }}
              />
              <span className="ml-2 text-sm text-gray-600">{concern}</span>
            </label>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
      >
        Get Makeup Suggestions
      </button>
    </form>
  );
}