# Auto-Generate Meal Plan — Design Spec

## Overview

Add an auto-generate feature to the Meal Plan tab. Users check which meals they need for each day of the week (breakfast, lunch, dinner), press "Generate", and the app fills in recipes using a history-aware scoring algorithm that maximizes variety.

## UX Flow

### Two-Step View in Meal Plan Tab

1. **Checklist view** — shown when user taps "New Plan" or as default when no plan exists for the current week.
   - Compact grid: 7 rows (Mon–Sun), 3 columns (Breakfast, Lunch, Dinner).
   - Each cell is a checkbox.
   - "Generate" button at the bottom.
   - First time ever: all unchecked. Subsequent times: pre-filled from last week's pattern.

2. **Weekly view** — the existing horizontal-scroll day columns with meal chips.
   - Shown after generating or when a plan already exists for the week.
   - A "New Plan" button at the top (next to "Clear Week") returns to the checklist view.

### Generate Behavior

- If meals already exist for the current week, prompt: "Replace all meals or fill empty slots only?"
  - **Replace:** clears all meals for the week, generates fresh.
  - **Fill empty:** keeps existing meals, only generates for checked slots that don't already have a recipe for that slot type.
- If no existing meals, generates directly without prompting.
- After generating, transitions to the weekly view.

### Snacks and Custom Slots

- Only breakfast, lunch, dinner appear in the checklist.
- Snacks and custom slots are added manually after generating, using the existing "+" button per day.

## Recipe Selection Algorithm

### History Tracking

- New localStorage key: `menuapp-meal-history`
- Schema: array of `{ recipeId: string, date: string, slot: string }`
- Updated when plan is generated AND when a meal is manually added via the existing flow.
- No size cap (a year of 3 meals/day ≈ 1000 entries, negligible).

### Scoring

For each checked slot (e.g., Tuesday/dinner), every recipe in the matching category is scored:

1. **Recency score** — days since this recipe was last used anywhere. Never used = maximum score (e.g., 9999). Formula: `daysSinceLastUsed` (higher = better).
2. **Same-weekday penalty** — if this recipe was used on the same weekday (e.g., a Tuesday) in history, subtract `50 / weeksSinceItHappened` points. More recent same-weekday usage = bigger penalty.
3. **Within-week uniqueness** — if this recipe is already assigned to another slot in the current generation batch, subtract 500 points. This makes repeats a last resort when there are more slots than available recipes.

### Assignment Order

- Process slots ordered by most constrained first: slots whose category has the fewest available recipes get assigned first.
- For each slot, pick the highest-scoring recipe from the matching category.
- Tie-breaking: random.

### Edge Cases

- If a category has zero recipes (e.g., user deleted all breakfast recipes), skip those slots and show a toast: "No breakfast recipes available".
- If more slots than recipes in a category, recipes will repeat — the within-week penalty ensures repeats are spread as far apart as possible.

## Checklist Pattern Memory

- New localStorage key: `menuapp-checklist-pattern`
- Schema: `{ "mon": { "breakfast": bool, "lunch": bool, "dinner": bool }, "tue": {...}, ... }`
- Saved every time the user modifies a checkbox (immediate save, not on generate).
- First time (key doesn't exist): all unchecked.

## Data Model Changes

### New localStorage Keys

| Key | Type | Description |
|-----|------|-------------|
| `menuapp-meal-history` | `Array<{recipeId, date, slot}>` | Full history of assigned meals |
| `menuapp-checklist-pattern` | `Object` | Last checked pattern per day/slot |

### Existing Keys — No Changes

- `menuapp-recipes`, `menuapp-mealplan`, `menuapp-groceries`, `menuapp-lang` — unchanged.
- Export/import does NOT include history or checklist pattern (these are local preferences, not content).

## i18n Additions (lang.js)

New keys needed:

| Key | EN | ES |
|-----|----|----|
| `generatePlan` | Generate Plan | Generar Plan |
| `newPlan` | New Plan | Nuevo Plan |
| `replaceOrFill` | Replace all meals or fill empty slots? | ¿Reemplazar todas las comidas o llenar espacios vacíos? |
| `replaceAll` | Replace All | Reemplazar Todo |
| `fillEmpty` | Fill Empty | Llenar Vacíos |
| `noRecipesInCategory` | No {category} recipes available | No hay recetas de {category} disponibles |

## Code Changes

All changes in existing files — no new files created.

### index.html

- **New CSS:** styles for `.checklist-grid`, `.checklist-row`, `.checklist-header` to support the compact grid layout.
- **New function `renderChecklistView()`** — renders the checklist grid inside `#tab-mealplan`. Reads pattern from localStorage. Wires up checkbox change listeners that save pattern immediately.
- **New function `generateMealPlan(selections)`** — takes the checked slots, runs the scoring algorithm, assigns recipes, saves to `mealPlan` and `mealHistory`, then calls `renderMealPlan()`.
- **New function `scoreRecipesForSlot(category, date, dayName, alreadyAssigned, history)`** — returns scored and sorted candidates.
- **Modified `renderMealPlan()`** — adds a "New Plan" button at the top. Checks if current week has any meals; if not, calls `renderChecklistView()` instead.
- **Modified `openAddMealFlow()` callback** — after adding a meal manually, also appends to meal history.

### lang.js

- Add the 6 new i18n keys listed above.

### recipes-data.js

- No changes.
