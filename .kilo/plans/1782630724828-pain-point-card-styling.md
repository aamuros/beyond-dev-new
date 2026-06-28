# Pain Points Card Styling Update

## Goal
Apply colored backgrounds and refined styling to the last 3 "problem" section cards, matching the design pattern from the Jitter reference card.

## Color Assignments
| Card | Index | Color |
|------|-------|-------|
| Paper & Notebooks | 0 | Keep current `rgb(243, 243, 245)` |
| Messy Spreadsheets | 1 | `#05BAFF` |
| Messenger & Facebook | 2 | `#A981FF` |
| Screenshots as Records | 3 | `#F5FF63` |

## Files to Modify

### 1. `src/components/sections/pain-points.tsx`

- Add a `colors` array mapping each card index to its background color
- Pass the color as an inline `style` prop (alongside existing `top`/`marginBottom`) on the `<li>` element
- Set the `.pain-point-card__header` background to match the card color (so the GIF area blends seamlessly)

### 2. `src/app/globals.css`

**Card base (`.pain-point-card`):**
- Change `background-color` to use a CSS custom property: `background-color: var(--card-bg, rgb(243, 243, 245))`
- Add a new class `.pain-point-card--colored` with the box-shadow:
  ```css
  box-shadow: 0 18.7rem 5.2rem 0 transparent, 0 11.9rem 4.8rem 0 rgba(0,0,0,.01), 0 6.7rem 4rem 0 rgba(0,0,0,.05), 0 3rem 3rem 0 rgba(0,0,0,.09), 0 .7rem 1.6rem 0 rgba(0,0,0,.1);
  ```

**Card header (`.pain-point-card__header`):**
- Change `background-color` to use the same custom property: `background-color: var(--card-bg, rgb(243, 243, 245))`

**GIF background color clash fix:**
- The GIFs have a white/light background that clashes with the colored card backgrounds.
- Set `.pain-point-card__header` background to inherit from the card (via inline style or CSS custom property).
- If the GIFs have baked-in white backgrounds (not transparent), the implementer should check. If not transparent, the header background won't be visible through the GIF itself but will prevent white seams at edges. If transparent backgrounds are needed, the GIF assets may need to be replaced with transparent versions — this is out of scope for CSS-only changes.
- To pass the card color to the header, use a CSS custom property on the `<li>` (e.g., `--card-bg`) and reference it in `.pain-point-card__header { background-color: var(--card-bg, rgb(243, 243, 245)); }`.

**Box-shadow scope:**
- Apply box-shadow only to the last 3 colored cards (not card 0).
- Add a modifier class or conditionally apply via inline style.

## Implementation Steps

1. **`globals.css`**:
   - Update `.pain-point-card` to use `background-color: var(--card-bg, rgb(243, 243, 245))`
   - Update `.pain-point-card__header` to use `background-color: var(--card-bg, rgb(243, 243, 245))`
   - Add `.pain-point-card--colored` class with the layered box-shadow
2. **`pain-points.tsx`**:
   - Add a `colors` array: `[null, "#05BAFF", "#A981FF", "#F5FF63"]`
   - For cards with a color, set `style={{ "--card-bg": color } as React.CSSProperties}` and add `pain-point-card--colored` class
   - Card 0 keeps default grey, no extra class
3. Verify GIF backgrounds — if white/baked-in, consider replacing with transparent GIFs (separate task)
4. Test at all breakpoints (mobile, 1025px+, 1441px+)

## Validation
- Visual check: cards 1-3 should have colored backgrounds visible behind and around the GIF
- Border-radius: no square corners visible at any breakpoint
- Box-shadow: layered shadow visible below each card
- Text styling: already matches reference (padding, gap, font sizes)
