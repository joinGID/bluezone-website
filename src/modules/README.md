# Modules Directory

This directory contains feature-based modules for the application. Each module is self-contained with its own components, hooks, services, and business logic.

## Module Structure

Each module follows this structure:

```
module-name/
├─ components/     # UI components specific to this module
├─ containers/     # Container components (connected to state/data)
├─ constants/      # Module-specific constants
├─ hooks/          # Custom React hooks for this module
├─ services/       # API calls and data fetching for this module
└─ index.js        # Barrel export file
```

## Usage Pattern

### Creating a New Module

1. Create a new folder in `src/modules/` with your module name
2. Add the necessary subdirectories based on your needs
3. Create an `index.js` to export public APIs

### Example Module Export (`index.js`)

```javascript
// Export components
export { default as RoomCard } from './components/RoomCard';
export { default as RoomList } from './components/RoomList';

// Export hooks
export { useRooms } from './hooks/useRooms';

// Export services
export { roomService } from './services/roomService';

// Export constants
export * from './constants/roomConstants';
```

### Importing from Modules

```javascript
// In your pages or other modules
import { RoomCard, useRooms } from '@/modules/rooms';
```

## Module Guidelines

1. **Self-Contained**: Each module should be independent and not directly import from other modules
2. **Use Shared**: For cross-module functionality, use the `shared/` directory
3. **Clear Exports**: Always use barrel exports (`index.js`) to expose public APIs
4. **Naming**: Use descriptive names that reflect the feature domain

## Available Modules

- **about**: About page module
- **rooms**: Room management and display
- **services**: Shared services module
- **contact**: Contact form and related functionality
