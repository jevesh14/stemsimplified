# View Counter Implementation

## Overview
This implementation adds view tracking to articles across the STEM Simplified website using Firebase Firestore.

## Files Created/Modified

### New Files:
- `src/lib/firebase.ts` - Firebase configuration with your credentials
- `src/hooks/useViewCounter.ts` - Custom hook for view tracking
- `src/components/ViewCounter.tsx` - Reusable view counter component
- `src/lib/viewUtils.ts` - Utility functions for article ID generation

### Modified Files:
- `src/pages/BreakthroughBriefs.tsx` - Added view counters to articles
- `src/pages/Games.tsx` - Added view counters to quiz selection
- `src/pages/DelveDeeper.tsx` - Added view counters to articles
- `src/pages/RecentArticles.tsx` - Added view counter to the main article

## How It Works

### 1. Firebase Setup
- Uses your provided Firebase credentials
- Creates a `views` collection in Firestore
- Each document represents an article with a `count` field

### 2. View Tracking Logic
- When a user visits an article, the view count automatically increments
- Uses Firebase's `increment()` function for atomic updates
- Creates new documents if they don't exist

### 3. Article ID Convention
- Breakthrough Briefs: `breakthrough-{id}`
- Games: `game-{quiz-id}`
- Delve Deeper: `delve-{id}`
- Recent Articles: `recent-healthcare-breath`

## Usage

### Basic Usage:
```tsx
import ViewCounter from "@/components/ViewCounter";

<ViewCounter articleId="my-article-id" />
```

### With Custom Styling:
```tsx
<ViewCounter articleId="my-article-id" className="text-sm text-gray-500" />
```

## Features

✅ **Automatic View Incrementing** - Views increment when articles are loaded
✅ **Real-time Display** - Shows current view count with loading states
✅ **Error Handling** - Graceful fallbacks if Firebase is unavailable
✅ **Responsive Design** - Works on all screen sizes
✅ **Consistent Styling** - Matches your existing design system

## Firebase Collection Structure

```
views/
├── breakthrough-1/
│   └── count: 42
├── breakthrough-2/
│   └── count: 18
├── game-ai-antibiotic-resistance/
│   └── count: 15
└── delve-1/
    └── count: 7
```

## Next Steps

1. **Monitor Views**: Check your Firebase console to see view counts
2. **Add Analytics**: Consider adding more detailed tracking
3. **Popular Articles**: Create a "Most Viewed" section
4. **Admin Dashboard**: Build a view to manage article analytics

## Testing

The view counter is now live on all article pages:
- Breakthrough Briefs: Each article shows view count
- Games: Quiz selection shows view count
- Delve Deeper: Article shows view count
- Recent Articles: Main article shows view count

Every time a user visits these pages, the view count will automatically increment in your Firebase database. 