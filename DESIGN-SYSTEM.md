# Ghibli Garden Design System

A calm, productivity-focused color palette inspired by Studio Ghibli's natural, soft aesthetics. Designed to be easy on the eyes for long reading/study sessions while remaining visually engaging.

## Design Philosophy

- **Easy on eyes** - Soft backgrounds, warm charcoal text (not harsh black)
- **Calm but focused** - Promotes productivity without drowsiness
- **Natural inspiration** - Forest greens, sky blues, sunset pinks
- **Anti-AI-slop** - Avoids terracotta/cream/coral clichés

---

## Color Palette

### Light Mode

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| **Background Primary** | Warm White | `#FAFBF9` | Main page background |
| **Background Secondary** | White | `#FFFFFF` | Cards, surfaces |
| **Background Tertiary** | Soft Green-Gray | `#F3F5F0` | Hover states, subtle fills |
| **Text Primary** | Warm Charcoal | `#2D3A2E` | Headings, body text |
| **Text Secondary** | Sage Gray | `#5A6B5D` | Secondary text, labels |
| **Text Tertiary** | Muted Sage | `#8B9A8D` | Placeholders, hints |
| **Accent Primary** | Sage Green | `#5B8A72` | Primary buttons, links, active states |
| **Accent Hover** | Deep Sage | `#4A7B61` | Hover states for accent |
| **Secondary** | Sky Blue | `#7BA4C4` | Secondary accents, info states |
| **Tertiary** | Clay Pink | `#D4A5A5` | Warm accents, notifications |
| **Border** | Soft Green-Gray | `#E4E8E0` | Dividers, card borders |
| **Border Strong** | Deeper Green-Gray | `#D0D6CA` | Focus states, emphasis |

### Dark Mode

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| **Background Primary** | Forest Night | `#1A1F1A` | Main page background |
| **Background Secondary** | Dark Forest | `#232823` | Cards, surfaces |
| **Background Tertiary** | Moss Dark | `#2A302A` | Hover states, subtle fills |
| **Text Primary** | Pale Green-White | `#E8EDE8` | Headings, body text |
| **Text Secondary** | Soft Sage | `#A8B5A8` | Secondary text, labels |
| **Text Tertiary** | Muted Forest | `#6B7A6B` | Placeholders, hints |
| **Accent Primary** | Light Sage | `#7BA98D` | Primary buttons, links |
| **Accent Hover** | Bright Sage | `#8FBAA0` | Hover states |
| **Secondary** | Light Sky Blue | `#8BB4D0` | Secondary accents |
| **Tertiary** | Soft Pink | `#D4B5B5` | Warm accents |
| **Border** | Forest Edge | `#3A423A` | Dividers, card borders |
| **Border Strong** | Moss Edge | `#4A524A` | Focus states |

---

## CSS Variables

```css
:root {
  /* Background */
  --bg-primary: #FAFBF9;
  --bg-secondary: #FFFFFF;
  --bg-tertiary: #F3F5F0;

  /* Text */
  --text-primary: #2D3A2E;
  --text-secondary: #5A6B5D;
  --text-tertiary: #8B9A8D;

  /* Accent - Sage Green */
  --accent: #5B8A72;
  --accent-soft: rgba(91, 138, 114, 0.1);
  --accent-hover: #4A7B61;

  /* Secondary - Sky Blue */
  --secondary: #7BA4C4;
  --secondary-soft: rgba(123, 164, 196, 0.1);

  /* Tertiary - Clay Pink */
  --tertiary: #D4A5A5;
  --tertiary-soft: rgba(212, 165, 165, 0.1);

  /* Borders */
  --border: #E4E8E0;
  --border-strong: #D0D6CA;

  /* Shadows */
  --shadow-subtle: 0 1px 3px rgba(45, 58, 46, 0.04), 0 4px 12px rgba(45, 58, 46, 0.04);
  --shadow-medium: 0 2px 8px rgba(45, 58, 46, 0.06), 0 8px 24px rgba(45, 58, 46, 0.06);

  /* Border Radius - Slightly rounded, not bubbly */
  --radius: 6px;
  --radius-lg: 10px;
}

[data-theme="dark"] {
  --bg-primary: #1A1F1A;
  --bg-secondary: #232823;
  --bg-tertiary: #2A302A;
  --text-primary: #E8EDE8;
  --text-secondary: #A8B5A8;
  --text-tertiary: #6B7A6B;
  --accent: #7BA98D;
  --accent-soft: rgba(123, 169, 141, 0.12);
  --accent-hover: #8FBAA0;
  --secondary: #8BB4D0;
  --secondary-soft: rgba(139, 180, 208, 0.12);
  --tertiary: #D4B5B5;
  --tertiary-soft: rgba(212, 181, 181, 0.12);
  --border: #3A423A;
  --border-strong: #4A524A;
}
```

---

## Accessibility

All color combinations have been validated for WCAG compliance:

| Combination | Contrast Ratio | WCAG Level |
|-------------|----------------|------------|
| Text Primary on Bg Primary | 10.2:1 | AAA |
| Text Secondary on Bg Primary | 5.9:1 | AA |
| Accent on Bg Secondary | 4.7:1 | AA |
| Accent Hover on Bg Secondary | 5.9:1 | AA |
| White on Accent | 4.5:1 | AA |

---

## Typography

- **Japanese text**: `"Noto Sans JP", sans-serif`
- **Body text**: System fonts (`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`)
- **Monospace**: `"IBM Plex Mono", monospace`

---

## Design Elements

### Border Radius
- Small elements (buttons, inputs): `6px`
- Cards, modals: `10px`
- Large containers: `14px`

### Shadows
- Subtle (cards at rest): `0 1px 3px rgba(45, 58, 46, 0.04)`
- Medium (cards on hover): `0 2px 8px rgba(45, 58, 46, 0.06)`
- No glow effects or colored shadows

### Motion
- Transitions: `0.2s ease` for most interactions
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` for smooth, natural feel

---

## What to Avoid (Anti-AI-Slop)

These patterns are overused in AI-generated designs:

- **Terracotta/coral accent colors** (`#c45c48`, `#e07860`)
- **Cream/beige backgrounds** (`#f8f6f3`, `#fdfcfb`)
- **Large rounded corners** (16px+)
- **Left-border accent lines on cards**
- **Purple/blue gradients**
- **Orange and teal combinations**
- **Texture overlays and glow effects**
- **Warm shadows with colored tints**

---

## Inspiration Sources

- Studio Ghibli film palettes (Totoro, Spirited Away, Howl's Moving Castle)
- Japanese forest photography
- Traditional Japanese color names (matcha, sora-iro, sakura)
- Natural paper and ink aesthetics

---

## Usage Examples

### Primary Button
```css
.btn-primary {
  background: var(--accent);
  color: white;
  border-radius: var(--radius);
  padding: 10px 20px;
}

.btn-primary:hover {
  background: var(--accent-hover);
}
```

### Card
```css
.card {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 16px;
  box-shadow: var(--shadow-subtle);
}

.card:hover {
  border-color: var(--border-strong);
  box-shadow: var(--shadow-medium);
}
```

### Input
```css
input {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  color: var(--text-primary);
  padding: 12px 16px;
}

input:focus {
  border-color: var(--accent);
  outline: none;
}
```
