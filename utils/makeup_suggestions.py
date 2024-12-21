from models import SkinProfile, MakeupSuggestion
from data.products import foundations, concealers, color_correctors

def get_suggestions(profile: SkinProfile) -> list[MakeupSuggestion]:
    suggestions = []

    # Foundation suggestions
    suitable_foundations = [
        f for f in foundations
        if profile.skin_type in f['suitable_for']['skin_types']
        and (not f['suitable_for'].get('sensitivity')
             or profile.sensitivity in f['suitable_for']['sensitivity'])
    ]

    if suitable_foundations:
        best_match = suitable_foundations[0]
        suggestions.append(MakeupSuggestion(
            category='Foundation',
            product_type='Foundation',
            recommendation=f"{best_match['brand']} {best_match['name']} ({best_match['price']}) - {best_match['description']}",
            reason=f"Perfect for {profile.skin_type} skin with {profile.sensitivity} sensitivity. {best_match['link']}"
        ))

    # Concealer suggestions
    suitable_concealers = [
        c for c in concealers
        if profile.skin_type in c['suitable_for']['skin_types']
        and any(concern in c['suitable_for'].get('concerns', [])
               for concern in profile.concerns)
    ]

    if suitable_concealers:
        best_match = suitable_concealers[0]
        suggestions.append(MakeupSuggestion(
            category='Concealer',
            product_type='Concealer',
            recommendation=f"{best_match['brand']} {best_match['name']} ({best_match['price']}) - {best_match['description']}",
            reason=f"Ideal for your skin type and concerns. {best_match['link']}"
        ))

    # Color corrector suggestions
    if 'Redness' in profile.concerns:
        color_corrector = next(
            (cc for cc in color_correctors
             if 'Redness' in cc['suitable_for'].get('concerns', [])),
            None
        )
        if color_corrector:
            suggestions.append(MakeupSuggestion(
                category='Color Corrector',
                product_type='Color Corrector',
                recommendation=f"{color_corrector['brand']} {color_corrector['name']} ({color_corrector['price']}) - {color_corrector['description']}",
                reason=f"Helps neutralize redness before foundation application. {color_corrector['link']}"
            ))

    return suggestions