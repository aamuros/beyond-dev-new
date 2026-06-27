# Mega Menu: Expanding Background — Exact Jitter Match

## Context

The current implementation in `floating-navbar.tsx` has the expanding bg working but diverges from Jitter's reference in several structural and animation details. The goal is to match the Jitter/Linear pattern **as exactly as possible** within the floating-pill constraint.

## Reference Analysis (Jitter's `mainNavBg`)

### Architecture
Jitter's header structure:
```
<header>                          ← fixed, z-11, NO visual styling
  <div class="container">
    <div class="mainNavBg"></div>  ← z-2, ALL visual styling (bg, radius, shadow, border)
    <div class="grid">             ← z-3, nav items float above bg
      <nav>...</nav>
    </div>
  </div>
  <div class="backdrop"></div>
</header>
```

Key insight: **The `<header>` and container have NO visual styling.** The `mainNavBg` is the sole visual surface. Nav items render above it via z-index.

### Exact CSS States

**Default (closed):**
```css
.mainNavBg {
  position: absolute;
  left: 50%;
  top: 3.45rem;              /* 1441px+  (3.9rem at 1025px+, 1.5rem mobile) */
  width: calc(100% + 8rem);  /* 1441px+  (+6rem at 1025px+, +2rem mobile) */
  height: 10rem;             /* 1441px+  (9rem at 1025px+, 7rem mobile) */
  opacity: 0;
  transform: translateX(-50%) translateY(-12rem);
  border-radius: 2rem;       /* 1025px+  (1rem mobile) */
  border-bottom: 1px solid #f2f1f3;
  box-shadow: 0 6.2rem 1.7rem 0 transparent, 0 4rem 1.6rem 0 rgba(0,0,0,.01),
              0 2.2rem 1.3rem 0 rgba(0,0,0,.02), 0 1rem 1rem 0 rgba(0,0,0,.04),
              0 .2rem .5rem 0 rgba(0,0,0,.04);
  will-change: transform;
  z-index: 2;
  pointer-events: none;
  transition: border-radius .5s cubic-bezier(.25,.46,.45,.94),
              box-shadow .1s cubic-bezier(.25,.46,.45,.94);
}
```

**Active (open) — JS-driven inline styles + class toggle:**
```css
/* Inline styles set by JS/GSAP: */
.mainNavBg {
  opacity: 1;
  transform: translate(-50%, 0%) translate(0px, -35px);
  height: 666px;   /* dynamically measured to fit submenu content */
  width: 1728px;   /* computed: viewport width + 8rem at 1441px+ */
}

/* Class-based (.hasSubmenu on header): */
.mainNavBg {
  border-radius: 4rem;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  box-shadow: 0 400px 200px rgba(0,0,0,.1), 0 160px 160px rgba(0,0,0,.08),
              0 40px 80px rgba(0,0,0,.1);
  pointer-events: auto;
}
```

### Animation Breakdown
1. **Transform**: `translateX(-50%) translateY(-12rem)` → `translate(-50%, 0%) translate(0px, -35px)`
   - Centers horizontally via `left: 50%` + `translateX(-50%)`
   - Slides down from 12rem above (hidden) to 35px above its `top` position (overlaps nav bar bottom)
2. **Height**: `9rem` → `666px` (dynamic) — grows downward to cover submenu
3. **Opacity**: `0` → `1`
4. **Border-radius**: `2rem` (all) → `4rem` with flat top — smooth CSS transition
5. **Box-shadow**: subtle → heavy — CSS transition
6. **Pointer-events**: `none` → `auto`

### The `-35px` Y-offset Explained
The bg's `top` is `3.45rem` (34.5px). The `translate(0px, -35px)` pulls it UP by 35px, so its effective top is ~0px (the header's top edge). This means the bg covers from the header top down through the submenu. Nav items at z-3 float above it.

## Current Implementation Gaps

| Aspect | Jitter | Current Beyond-Dev | Gap |
|--------|--------|-------------------|-----|
| Visual surface owner | `mainNavBg` only | Both `<nav>` AND expanding bg | **Double rendering** — `<nav>` has its own bg/radius/shadow |
| Bg position | `left:50%; translateX(-50%)` | `left:0; w-full` | No centering transform |
| Bg width | `calc(100% + 6rem)` extends beyond container | `w-full` matches nav exactly | No width extension |
| Bg height | Dynamic (JS-measured submenu height) | `calc(100% + 340px)` fixed offset | Fixed offset, not adaptive |
| Bg `top` | `3.9rem` from header top | `top:0` inside nav | Different positioning model |
| Y-offset on open | `translate(0px, -35px)` pulls bg up | `y: 0` (no pull-up) | No overlap with nav bar |
| Border-radius (open) | `4rem` with flat top | `20px 20px 0 0` | Much smaller radius |
| `<nav>` visual styling | None (structural only) | Full bg/radius/shadow/border | Should be removed |
| Height transition | CSS `transition` on height | Framer Motion `animate` | Mixed animation approach |

## Implementation Plan

### Step 1: Move ALL visual styling from `<nav>` to the expanding bg div

The `<nav>` element currently has `bg-white`, `border-b`, `border-radius`, `box-shadow`, and `transition`. These should all move to the expanding bg div. The `<nav>` becomes a structural wrapper only.

**Remove from `<nav>`:**
- `bg-white`
- `border-b border-[#f2f1f3]`
- `transition-[border-radius,box-shadow]`
- The inline `style` object (borderRadius, boxShadow, overflow)

**Add to `<nav>`:**
- `overflow: visible` (keep this, needed for bg to extend below)
- `relative` (keep, positioning context for bg)

The expanding bg div inherits all the visual properties that were on `<nav>`.

### Step 2: Reposition the expanding bg to match Jitter's positioning model

Change the expanding bg from `absolute left-0 top-0` inside `<nav>` to use Jitter's centering approach:

```tsx
<motion.div
  className={cn(
    "absolute z-[2]",
    "pointer-events-none",
    activeMenu && "pointer-events-auto",
    "transition-[border-radius,box-shadow] duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
  )}
  style={{
    willChange: "transform",
    left: "50%",
    top: 0,
    width: "100%",
    height: bgHeight,           // dynamic, measured from submenu
    backgroundColor: "#fff",
    borderBottom: "1px solid #f2f1f3",
    borderRadius: activeMenu ? "0 0 2.5rem 2.5rem" : "1.25rem",
    boxShadow: activeMenu
      ? "0 400px 200px rgba(0,0,0,0.1), 0 160px 160px rgba(0,0,0,0.08), 0 40px 80px rgba(0,0,0,0.1)"
      : "0 62px 17px 0 rgba(0,0,0,0), 0 40px 16px 0 rgba(0,0,0,0.01), 0 22px 13px 0 rgba(0,0,0,0.02), 0 10px 10px 0 rgba(0,0,0,0.04), 0 2px 5px 0 rgba(0,0,0,0.04)",
  }}
  animate={activeMenu
    ? { opacity: 1, x: "-50%", y: 0 }
    : { opacity: 0, x: "-50%", y: "-8rem" }
  }
  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
/>
```

**Key changes:**
- `left: 50%` + Framer `x: "-50%"` for centering (matches Jitter's `translateX(-50%)`)
- `top: 0` — bg starts at nav's top edge
- `y: 0` when active (not negative, since the bg should align with nav top)
- `y: "-8rem"` when inactive — slides up and hides (Jitter uses `-12rem` but our pill is smaller)
- Border-radius: `0 0 2.5rem 2.5rem` when open (flat top, rounded bottom — Jitter uses `4rem` but that's too large for our pill)

**Note on border-radius:** Jitter uses `border-radius: 4rem; border-top-left-radius: 0; border-top-right-radius: 0` which gives 64px bottom corners. For our floating pill (which has `20px` / `1.25rem` radius), using `2.5rem` (40px) for bottom corners when open provides a proportional match. The flat top creates the seamless connection with the pill's bottom edge.

### Step 3: Make the bg height dynamic (match Jitter's JS-measured height)

Jitter measures the active submenu's content height and sets the bg height accordingly. Implement this with a ref on the submenu panel:

```tsx
const [bgHeight, setBgHeight] = useState<string | number>("100%");
const menuPanelRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  if (activeMenu && menuPanelRef.current) {
    const panelHeight = menuPanelRef.current.offsetHeight;
    const navHeight = navRef.current?.offsetHeight ?? 100;
    setBgHeight(navHeight + panelHeight);
  } else {
    setBgHeight("100%");
  }
}, [activeMenu]);
```

Pass `menuPanelRef` to `MegaMenuPanel` and attach it to the panel's outermost div.

### Step 4: Update `MegaMenuPanel` — remove visual wrapper, keep content

The `MegaMenuPanel` currently has no visual styling (it was already removed in a previous iteration). Verify it remains purely content-focused:

- Keep `motion.div` for enter/exit animation
- Keep `absolute top-full left-1/2 -translate-x-1/2 z-[3]` positioning
- Keep content layout (flex with items + featured section)
- Attach `menuPanelRef` for height measurement
- Remove `w-[min(calc(100vw-2rem),680px)]` — let the panel width match the bg width (use `w-full` or a fixed width that matches the nav pill)

### Step 5: Adjust border-radius values for the floating pill

Jitter uses `4rem` (64px) bottom corners because their header is full-width. For our `max-w-5xl` floating pill with `1.25rem` (20px) default radius:

- **Closed**: `1.25rem` all around (matches pill shape)
- **Open**: `0 0 1.25rem 1.25rem` (flat top, pill-radius bottom)

This maintains visual consistency — the bottom corners of the open menu match the pill's corner radius.

### Step 6: Add the `will-change: transform` and `z-index: 2` to bg

Already present. Verify `z-index: 2` on bg and `z-index: 3` on nav items wrapper and CTA buttons div.

### Step 7: Verify backdrop, scroll pinning, link dimming

These are already implemented and working:
- ✅ Backdrop overlay at z-1 with opacity transition
- ✅ Scroll pinning via `activeMenuRef` early return in scroll handler
- ✅ Link dimming with `opacity-35` on non-active items
- ✅ Escape key closes menu
- ✅ Click-outside closes menu

### Step 8: Verify responsive behavior

The expanding bg pattern is desktop-only (`lg:` breakpoint and above). Mobile uses the accordion drawer (unchanged).

At `lg` (1024px+):
- Bg: `border-radius: 1.25rem`, width matches nav pill
- Open: flat top, extends below pill

At `xl` (1280px+) and larger:
- Same behavior, bg width scales with nav pill width

## Files to Modify

- `src/components/layout/floating-navbar.tsx` — sole file

## Specific Code Changes

### Change 1: `<nav>` element — strip visual styling

**Before** (lines 572-586):
```tsx
<nav
  className={cn(
    "relative flex items-center",
    "h-[100px] px-4",
    "bg-white",
    "border-b border-[#f2f1f3]",
    "transition-[border-radius,box-shadow] duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
  )}
  style={{
    borderRadius: activeMenu ? "20px 20px 0 0" : "20px",
    boxShadow: activeMenu
      ? "0 400px 200px rgba(0,0,0,0.1), 0 160px 160px rgba(0,0,0,0.08), 0 40px 80px rgba(0,0,0,0.1)"
      : "0 62px 17px 0 rgba(0,0,0,0), 0 40px 16px 0 rgba(0,0,0,0.01), 0 22px 13px 0 rgba(0,0,0,0.02), 0 10px 10px 0 rgba(0,0,0,0.04), 0 2px 5px 0 rgba(0,0,0,0.04)",
    overflow: "visible",
  }}
>
```

**After:**
```tsx
<nav
  className="relative flex items-center h-[100px] px-4"
  style={{ overflow: "visible" }}
>
```

### Change 2: Expanding bg — Jitter-accurate positioning and styling

**Before** (lines 588-608):
```tsx
<motion.div
  animate={activeMenu ? { opacity: 1, y: 0 } : { opacity: 0, y: "-12rem" }}
  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
  className={cn(
    "absolute left-0 top-0 z-[2]",
    "w-full",
    "bg-white border-b border-[#f2f1f3]",
    "pointer-events-none",
    activeMenu && "pointer-events-auto",
    "transition-[height,border-radius,box-shadow] duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
  )}
  style={{
    willChange: "transform",
    height: activeMenu ? "calc(100% + 340px)" : "100%",
    borderRadius: activeMenu ? "20px 20px 0 0" : "20px",
    boxShadow: activeMenu
      ? "0 400px 200px rgba(0,0,0,0.1), 0 160px 160px rgba(0,0,0,0.08), 0 40px 80px rgba(0,0,0,0.1)"
      : "0 62px 17px 0 rgba(0,0,0,0), 0 40px 16px 0 rgba(0,0,0,0.01), 0 22px 13px 0 rgba(0,0,0,0.02), 0 10px 10px 0 rgba(0,0,0,0.04), 0 2px 5px 0 rgba(0,0,0,0.04)",
  }}
/>
```

**After:**
```tsx
<motion.div
  animate={activeMenu
    ? { opacity: 1, x: "-50%", y: 0 }
    : { opacity: 0, x: "-50%", y: "-8rem" }
  }
  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
  className={cn(
    "absolute z-[2]",
    "pointer-events-none",
    activeMenu && "pointer-events-auto",
    "transition-[border-radius,box-shadow] duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
  )}
  style={{
    willChange: "transform",
    left: "50%",
    top: 0,
    width: "100%",
    height: bgHeight,
    backgroundColor: "#fff",
    borderBottom: "1px solid #f2f1f3",
    borderRadius: activeMenu ? "0 0 1.25rem 1.25rem" : "1.25rem",
    boxShadow: activeMenu
      ? "0 400px 200px rgba(0,0,0,0.1), 0 160px 160px rgba(0,0,0,0.08), 0 40px 80px rgba(0,0,0,0.1)"
      : "0 62px 17px 0 rgba(0,0,0,0), 0 40px 16px 0 rgba(0,0,0,0.01), 0 22px 13px 0 rgba(0,0,0,0.02), 0 10px 10px 0 rgba(0,0,0,0.04), 0 2px 5px 0 rgba(0,0,0,0.04)",
  }}
/>
```

### Change 3: Add dynamic height measurement

Add state and ref for bg height:

```tsx
const [bgHeight, setBgHeight] = useState<string | number>("100%");
const menuPanelRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  if (activeMenu && menuPanelRef.current && navRef.current) {
    const panelHeight = menuPanelRef.current.offsetHeight;
    const navHeight = navRef.current.offsetHeight;
    setBgHeight(navHeight + panelHeight);
  } else {
    setBgHeight("100%");
  }
}, [activeMenu]);
```

Pass `menuPanelRef` to `MegaMenuPanel` and attach to its outermost element.

### Change 4: `MegaMenuPanel` — attach ref for height measurement

Add `panelRef` prop:

```tsx
function MegaMenuPanel({
  menu,
  onClose,
  panelRef,
}: {
  menu: MegaMenuData;
  onClose: () => void;
  panelRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <motion.div
      ref={panelRef}
      // ... rest unchanged
    >
```

## Validation

1. Open each mega menu — white bg should expand downward from the pill with smooth animation
2. The bg should have flat top corners and rounded bottom corners matching the pill radius
3. Switch between triggers — bg stays visible, content crossfades
4. Close menu (backdrop/mouse-leave/Escape) — bg retracts upward
5. Scroll while menu open — navbar stays pinned
6. Resize to mobile — accordion drawer works unchanged
7. No layout shift or overflow issues
8. The bg should NOT be visible outside the pill when closed (opacity: 0, translated above)
9. The bg should extend below the pill when open, covering the full submenu content area
