from dataclasses import dataclass
from typing import List

@dataclass
class SkinProfile:
    skin_type: str
    undertone: str
    sensitivity: str
    texture: str
    concerns: List[str]

@dataclass
class MakeupSuggestion:
    category: str
    product_type: str
    recommendation: str
    reason: str