import { SkinProfile, MakeupSuggestion } from '../types';
import { foundations, concealers, colorCorrectors } from '../data/products';

export function getSuggestions(profile: SkinProfile): MakeupSuggestion[] {
  const suggestions: MakeupSuggestion[] = [];

  // Foundation suggestions
  const suitableFoundations = foundations.filter(foundation => {
    return foundation.suitableFor.skinTypes.includes(profile.skinType) &&
           (!foundation.suitableFor.sensitivity || 
            foundation.suitableFor.sensitivity.includes(profile.sensitivity));
  });

  if (suitableFoundations.length > 0) {
    const bestMatch = suitableFoundations[0];
    suggestions.push({
      category: 'Foundation',
      productType: 'Foundation',
      recommendation: `${bestMatch.brand} ${bestMatch.name} (${bestMatch.price}) - ${bestMatch.description}`,
      reason: `Perfect for ${profile.skinType} skin with ${profile.sensitivity} sensitivity. ${bestMatch.link}`,
    });
  }

  // Concealer suggestions
  const suitableConcealers = concealers.filter(concealer => {
    return concealer.suitableFor.skinTypes.includes(profile.skinType) &&
           (profile.concerns.some(concern => 
             concealer.suitableFor.concerns?.includes(concern)
           ));
  });

  if (suitableConcealers.length > 0) {
    const bestMatch = suitableConcealers[0];
    suggestions.push({
      category: 'Concealer',
      productType: 'Concealer',
      recommendation: `${bestMatch.brand} ${bestMatch.name} (${bestMatch.price}) - ${bestMatch.description}`,
      reason: `Ideal for your skin type and concerns. ${bestMatch.link}`,
    });
  }

  // Color corrector suggestions based on concerns
  if (profile.concerns.includes('Redness')) {
    const colorCorrector = colorCorrectors.find(cc => 
      cc.suitableFor.concerns?.includes('Redness')
    );
    if (colorCorrector) {
      suggestions.push({
        category: 'Color Corrector',
        productType: 'Color Corrector',
        recommendation: `${colorCorrector.brand} ${colorCorrector.name} (${colorCorrector.price}) - ${colorCorrector.description}`,
        reason: `Helps neutralize redness before foundation application. ${colorCorrector.link}`,
      });
    }
  }

  return suggestions;
}