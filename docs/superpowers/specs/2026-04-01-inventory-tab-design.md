# Inventory Tab — Design Spec

## Overview

New Inventory tab between Meal Plan and Grocery List. Users track what ingredients they currently have. Grocery list generation subtracts inventory amounts, skipping items where the remaining need is negligible (<10%).

## Tab Position

Recipes | Meal Plan | **Inventory** | Grocery List

## Data Model

New localStorage key: `menuapp-inventory`

Schema: `Array<{ name: { en: string, es: string }, amount: number, unit: string }>`

Matching key: `nameEn.toLowerCase() + '|' + unit` (same as grocery list).

## UI

Two sections:

1. **From Recipes** — all unique ingredients across all recipes (starter + custom). Each row shows ingredient name, current inventory amount (editable), and unit. Amount defaults to 0. Tap amount to edit inline.

2. **Custom Items** — manually added items not found in any recipe. Text input + amount + unit selector at the bottom to add.

## Smart Grocery Subtraction

When "Generate from Meal Plan" runs in the Grocery List tab:

1. Calculate total needed per ingredient (existing logic).
2. For each ingredient, look up inventory by matching key.
3. If inventory >= needed: skip entirely.
4. If inventory < needed: add (needed - inventory) to grocery list.
5. If (needed - inventory) < 10% of needed: skip (smart threshold).

## i18n

| Key | EN | ES |
|-----|----|----|
| inventory | Inventory | Inventario |
| fromRecipes | From Recipes | De Recetas |
| customItems | Custom Items | Artículos Personalizados |
| setAmount | Set amount | Establecer cantidad |
| tapToSet | Tap to set | Toca para establecer |
| inventoryEmpty | Track ingredients you have at home. | Registra los ingredientes que tienes en casa. |

## Export/Import

Inventory data included in export JSON and restored on import (both merge and replace modes).

## Code Changes

### index.html
- New tab button in bottom bar with pantry icon
- New `#tab-inventory` content div
- CSS for inventory list rows
- `renderInventory()` function
- Modified `renderGroceryList()` generate logic to subtract inventory
- Modified export/import to include inventory

### lang.js
- 6 new i18n keys
