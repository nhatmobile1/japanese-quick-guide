# Japanese Quick Guide

Practical Japanese phrase reference for travelers and language learners.

## Purpose

Portable phrase reference tool with audio pronunciation, favorites, and offline PWA support. Organized by real-world use cases.

## Tech Stack

- **Framework:** Next.js 14.x (React 18.x)
- **Styling:** CSS with CSS Variables
- **Build:** npm
- **Deployment:** Vercel
- **Live URL:** https://japanese-quick-guide.vercel.app/

## Key Features

- 6 content tabs: Restaurant, Shopping, Conversation, Counters, Vocab, Useful
- Real-time search across phrases
- Favorites with localStorage persistence
- Dark/light mode toggle with localStorage
- Audio pronunciation (Web Speech API at 0.8x rate)
- Copy-to-clipboard on card tap
- PWA installable, offline capable
- WCAG AA/AAA color contrast

## File Structure

```
japanese-quick-guide/
├── app/
│   ├── layout.js          # Root layout, PWA config, metadata
│   ├── page.js            # Main app component ('use client')
│   └── styles.css         # Complete design system (935 lines)
├── data/
│   └── japanese-phrases-data.json
├── public/japanese-icons/
│   ├── manifest.json      # PWA manifest
│   ├── icon.svg           # Source icon (語 character)
│   ├── favicon-32x32.png
│   ├── apple-touch-icon.png
│   ├── icon-192x192.png
│   └── icon-512x512.png
├── DESIGN-SYSTEM.md       # Full design documentation
├── package.json
└── next.config.js
```

## Design System: Wabi-Sabi Editorial

Japanese aesthetic embracing intentional simplicity with strong typography hierarchy.

**Color Palette:**
- Primary accent: Japanese Indigo (Aizome) `#3d5a80`
- Secondary accent: Vermillion (Shu-iro) `#c73e3a`
- Background: Cool white/gray (`#ffffff`, `#f8f9fa`)
- Text: High contrast near-black (`#1a1d21`)

**Dark Mode:**
- Primary accent: Light blue `#58a6ff`
- Secondary: Light red `#f85149`
- Background: GitHub dark (`#0d1117`, `#161b22`)
- Text: Light gray `#e6edf3`

**Typography:**
- UI/Body: Source Sans 3
- Japanese content: Noto Sans JP

**Geometry:**
- Sharp corners (3-4px radius)
- No hover lift effects
- Border color interactions on hover/focus

**Anti-patterns avoided:**
- No cream/warm backgrounds
- No terracotta accents
- No left-border decorations
- No excessive shadows or lifts

## Content Categories

- **Restaurant:** Seating, ordering, dietary, during meal
- **Shopping:** Retail scenarios
- **Conversation:** Greetings, polite phrases
- **Counters:** Objects, people, flat/long/bound items
- **Vocabulary:** Multiple category groupings
- **Useful:** Emergency, directions, accommodation, transport

## Development

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm start        # Production server
npm run lint     # ESLint
```

## Implementation Notes

- Client-side rendered (`'use client'` directive)
- State: React hooks (useState, useEffect)
- Speech Synthesis API at 0.8x rate for natural Japanese
- localStorage for favorites and theme persistence
- Card types: PhraseCard, VocabCard, CounterCard
- CSS variables enable seamless dark/light mode switching

## Changelog

### 2026-01-30 (Design Overhaul)
Complete design overhaul from "Ghibli Garden" to "Wabi-Sabi Editorial":
- Replaced sage green (#5B8A72) with Japanese Indigo (#3d5a80)
- Added Vermillion (#c73e3a) as secondary accent
- Updated to cool neutrals (no warm tones)
- Sharp 3-4px corners instead of rounded elements
- Removed hover lift effects, using border interactions
- Added focus-visible styles for keyboard navigation
- Added prefers-reduced-motion support
- New PWA icons with 語 character on indigo background
- Updated manifest.json and layout.js with new theme color

### Previous
- Initial implementation with "Ghibli Garden" design
- 6-tab navigation with phrase categories
- Audio pronunciation with Web Speech API
- Favorites and dark mode support
- PWA offline capability

## Status

Production-ready, design updated 2026-01-30

---

## Resume Development

### Where to Pick Up

The design overhaul is complete. Potential next features:

**1. Expanded Content**
- Add more phrases to existing categories
- New categories (Medical, Technology, etc.)

**2. Study Mode**
- Flashcard-style learning with spaced repetition
- Track which phrases user has practiced

**3. Offline Audio**
- Pre-generate audio files for offline use
- Currently requires internet for Speech API

**4. Search Improvements**
- Search by romaji pronunciation
- Fuzzy matching for typos

### Related Project

This project shares the Wabi-Sabi Editorial design with:
- **japanese-grammar-app** (`/Users/nhattran/documents/projects/japanese-grammar-app`)
- Grammar reference with 129 Tofugu grammar points
- Same color palette and typography

### Key Files for Styling

- `app/styles.css` - All CSS variables and component styles
- `app/layout.js` - Theme color in metadata
- `public/japanese-icons/manifest.json` - PWA theme color
