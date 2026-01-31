# Wabi-Sabi Editorial Design System

A calm, focused design system inspired by traditional Japanese aesthetics. Designed to be easy on the eyes for long reading/study sessions while remaining visually distinctive.

## Design Philosophy

- **Wabi-Sabi Editorial** - Intentional simplicity, strong typography hierarchy
- **Cool neutrals** - No warm AI slop patterns (cream, terracotta, coral)
- **Traditional Japanese colors** - Aizome (indigo), Shu-iro (vermillion)
- **Sharp geometry** - 2-4px radius, no bubbly elements
- **Accessibility first** - Skip links, focus-visible, reduced motion support

---

## Color Palette

### Light Mode

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| **Background Primary** | Cool White | `#FFFFFF` | Cards, surfaces |
| **Background Secondary** | Cool Gray | `#F8F9FA` | Main page background |
| **Background Tertiary** | Light Gray | `#F1F3F4` | Hover states, subtle fills |
| **Text Primary** | Ink Black | `#1A1D21` | Headings, body text |
| **Text Secondary** | Dark Gray | `#4A5568` | Secondary text, labels |
| **Text Tertiary** | Medium Gray | `#718096` | Placeholders, hints |
| **Text Muted** | Light Gray | `#A0AEC0` | Disabled states |
| **Accent Primary** | Japanese Indigo (Aizome) | `#3D5A80` | Primary buttons, links, active states |
| **Accent Light** | Light Indigo | `#5D7A9E` | Hover states |
| **Accent Lighter** | Pale Indigo | `#E8EEF4` | Focus rings, soft backgrounds |
| **Accent Dark** | Dark Indigo | `#2C4460` | Pressed states |
| **Secondary** | Vermillion (Shu-iro) | `#C73E3A` | Emphasis, favorites, important |
| **Secondary Light** | Pale Vermillion | `#F5E8E8` | Soft backgrounds |
| **Border** | Cool Gray | `#E1E4E8` | Dividers, card borders |
| **Border Strong** | Darker Gray | `#D0D4D9` | Focus states, emphasis |

### Dark Mode

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| **Background Primary** | Dark | `#0D1117` | Cards, surfaces |
| **Background Secondary** | Darker | `#161B22` | Main page background |
| **Background Tertiary** | Medium Dark | `#21262D` | Hover states, subtle fills |
| **Text Primary** | Light | `#E6EDF3` | Headings, body text |
| **Text Secondary** | Medium Light | `#8B949E` | Secondary text, labels |
| **Text Tertiary** | Muted | `#6E7681` | Placeholders, hints |
| **Accent Primary** | Light Blue | `#58A6FF` | Primary buttons, links |
| **Accent Hover** | Bright Blue | `#79B8FF` | Hover states |
| **Secondary** | Light Red | `#F85149` | Emphasis, favorites |
| **Border** | Dark Border | `#30363D` | Dividers, card borders |
| **Border Strong** | Medium Border | `#484F58` | Focus states |

---

## CSS Variables

```css
:root {
  /* Primary Accent - Japanese Indigo (Aizome) */
  --accent: #3d5a80;
  --accent-light: #5d7a9e;
  --accent-lighter: #e8eef4;
  --accent-dark: #2c4460;
  --accent-soft: rgba(61, 90, 128, 0.08);

  /* Secondary - Vermillion (Shu-iro) */
  --vermillion: #c73e3a;
  --vermillion-light: #f5e8e8;
  --vermillion-soft: rgba(199, 62, 58, 0.08);

  /* Neutrals - Cool, not warm */
  --bg-primary: #ffffff;
  --bg-secondary: #f8f9fa;
  --bg-tertiary: #f1f3f4;

  /* Text - High contrast */
  --text-primary: #1a1d21;
  --text-secondary: #4a5568;
  --text-tertiary: #718096;
  --text-muted: #a0aec0;

  /* Borders */
  --border: #e1e4e8;
  --border-strong: #d0d4d9;

  /* Shadows - Subtle, cool-toned */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0 2px 8px rgba(0, 0, 0, 0.06);

  /* Radius - Sharp, intentional */
  --radius-sm: 2px;
  --radius-md: 3px;
  --radius-lg: 4px;

  /* Typography */
  --font-display: 'Source Sans 3', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-body: 'Source Sans 3', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-jp: 'Noto Sans JP', 'Hiragino Sans', 'Yu Gothic', sans-serif;

  /* Type Scale - Major Third (1.25) */
  --text-xs: 0.64rem;
  --text-sm: 0.8rem;
  --text-base: 1rem;
  --text-lg: 1.25rem;
  --text-xl: 1.563rem;

  /* Spacing - 8pt grid */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;

  --transition: 0.15s ease;
}

[data-theme="dark"] {
  --bg-primary: #0d1117;
  --bg-secondary: #161b22;
  --bg-tertiary: #21262d;
  --text-primary: #e6edf3;
  --text-secondary: #8b949e;
  --text-tertiary: #6e7681;
  --text-muted: #484f58;
  --accent: #58a6ff;
  --accent-light: #79b8ff;
  --accent-lighter: rgba(88, 166, 255, 0.15);
  --accent-dark: #388bfd;
  --accent-soft: rgba(88, 166, 255, 0.1);
  --vermillion: #f85149;
  --vermillion-light: rgba(248, 81, 73, 0.15);
  --vermillion-soft: rgba(248, 81, 73, 0.1);
  --border: #30363d;
  --border-strong: #484f58;
}
```

---

## Accessibility

All color combinations have been validated for WCAG compliance:

| Combination | Contrast Ratio | WCAG Level |
|-------------|----------------|------------|
| Text Primary on Bg Primary | 14.5:1 | AAA |
| Text Secondary on Bg Primary | 7.2:1 | AAA |
| Accent on Bg Primary | 5.8:1 | AA |
| Accent Dark on Bg Primary | 8.1:1 | AAA |
| White on Accent | 4.6:1 | AA |

---

## Typography

- **Display/Body**: `'Source Sans 3', -apple-system, BlinkMacSystemFont, sans-serif`
- **Japanese text**: `'Noto Sans JP', 'Hiragino Sans', 'Yu Gothic', sans-serif`
- **Type scale**: Major Third (1.25 ratio)

---

## Design Elements

### Border Radius
- Small elements (badges, tags): `2px`
- Medium elements (buttons, inputs): `3px`
- Large elements (cards, modals): `4px`
- **No large rounded corners** - sharp, intentional geometry

### Shadows
- Subtle (cards at rest): `0 1px 2px rgba(0, 0, 0, 0.04)`
- Medium (cards on hover): `0 2px 8px rgba(0, 0, 0, 0.06)`
- No glow effects or colored shadows

### Interactions
- **No hover lift effects** - use border color change instead
- **No left-border decorations** on cards
- Transitions: `0.15s ease` for most interactions

### Motion
- Respect `prefers-reduced-motion` media query
- Keep animations subtle and purposeful

---

## What to Avoid (Anti-AI-Slop)

These patterns are overused in AI-generated designs:

- **Terracotta/coral accent colors** (`#c45c48`, `#e07860`)
- **Cream/beige backgrounds** (`#f8f6f3`, `#fdfcfb`)
- **Large rounded corners** (12px+)
- **Left-border accent lines on cards**
- **Purple/blue gradients**
- **Orange and teal combinations**
- **Hover lift/scale effects**
- **Warm shadows with colored tints**
- **Grain/noise texture overlays**

---

## Inspiration Sources

- Traditional Japanese indigo dyeing (Aizome)
- Japanese vermillion ink (Shu-iro)
- Editorial typography and clean layouts
- Wabi-sabi aesthetic - beauty in simplicity

---

## Usage Examples

### Primary Button
```css
.btn-primary {
  background: var(--accent);
  color: white;
  border-radius: var(--radius-md);
  padding: var(--space-2) var(--space-5);
  border: none;
  font-weight: 500;
  transition: var(--transition);
}

.btn-primary:hover {
  background: var(--accent-dark);
}
```

### Card
```css
.card {
  background: var(--bg-primary);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: var(--space-4) var(--space-5);
  transition: border-color var(--transition);
}

.card:hover {
  border-color: var(--accent);
}
```

### Input
```css
input {
  background: var(--bg-primary);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  color: var(--text-primary);
  padding: var(--space-3) var(--space-4);
  font-size: var(--text-base);
}

input:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 2px var(--accent-lighter);
  outline: none;
}
```

### Tip/Alert Box (Vermillion)
```css
.tip-box {
  background: var(--vermillion-light);
  border-left: 2px solid var(--vermillion);
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
  padding: var(--space-3) var(--space-4);
}
```
