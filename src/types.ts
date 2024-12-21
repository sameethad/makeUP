export interface SkinProfile {
  skinType: 'oily' | 'dry' | 'combination' | 'normal';
  undertone: 'warm' | 'cool' | 'neutral';
  sensitivity: 'low' | 'medium' | 'high';
  texture: 'smooth' | 'rough' | 'uneven';
  concerns: string[];
}

export interface MakeupSuggestion {
  category: string;
  productType: string;
  recommendation: string;
  reason: string;
}