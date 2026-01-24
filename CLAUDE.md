# Japanese Quick Guide

Practical Japanese phrase reference for travelers and language learners.

## Purpose

Portable phrase reference tool with audio pronunciation, favorites, and offline PWA support. Organized by real-world use cases.

## Tech Stack

- **Framework:** Next.js 14.x (React 18.x)
- **Styling:** CSS with CSS Variables
- **Build:** npm
- **Deployment:** Next.js compatible (Vercel)

## Key Features

- 6 content tabs: Restaurant, Shopping, Conversation, Counters, Vocab, Useful
- Real-time search across phrases
- Favorites with localStorage persistence
- Dark/light mode toggle
- Audio pronunciation (Web Speech API)
- Copy-to-clipboard on card tap
- PWA installable, offline capable
- WCAG AA/AAA color contrast

## File Structure

```
japanese-quick-guide/
├── app/
│   ├── layout.js          # Root layout, PWA config
│   ├── page.js            # Main app component
│   └── styles.css         # Design system
├── data/
│   └── japanese-phrases-data.json
├── public/
│   └── japanese-icons/    # PWA icons
├── DESIGN-SYSTEM.md       # Design documentation
└── package.json
```

## Design System: "Ghibli Garden"

Soft, natural colors inspired by Studio Ghibli:
- **Accent:** Sage green (#5B8A72)
- **Secondary:** Sky blue (#7BA4C4)
- **Tertiary:** Clay pink (#D4A5A5)
- **Text:** Warm charcoal (#2D3A2E)
- **Typography:** Noto Sans JP for Japanese

Full light/dark mode support via CSS variables.

## Content Categories

- **Restaurant:** Seating, ordering, dietary, during meal
- **Shopping:** Retail scenarios
- **Conversation:** Greetings, polite phrases
- **Counters:** Objects, people, flat/long/bound items
- **Vocabulary:** Multiple category groupings
- **Useful:** Emergency, directions, accommodation, transport

## Development

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm start        # Production server
npm run lint     # ESLint
```

## Implementation Notes

- Client-side rendered (`'use client'`)
- State: React hooks (useState, useEffect)
- Speech Synthesis API at 0.8x rate
- localStorage for favorites and theme
- Card types: PhraseCard, VocabCard, CounterCard

## Status

Active development, clean working tree
