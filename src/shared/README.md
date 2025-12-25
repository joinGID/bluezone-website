# Shared Directory

This directory contains reusable code that can be used across multiple modules.

## Structure

```
shared/
├─ components/     # Reusable UI components (Button, Input, Modal, etc.)
├─ hooks/          # Reusable custom hooks
├─ utils/          # Utility functions (formatters, validators, etc.)
└─ constants/      # Global constants
```

## Usage Guidelines

### Components
Place truly reusable UI components here. Examples:
- Button, Input, Card
- Modal, Dropdown, Tooltip
- Layout components (Header, Footer)

### Hooks
Custom hooks that can be used across modules:
- `useDebounce`, `useLocalStorage`
- `useMediaQuery`, `useClickOutside`

### Utils
Pure utility functions:
- Date formatters
- String manipulators
- Validation helpers
- API helpers

### Constants
Application-wide constants:
- API endpoints
- Configuration values
- Enum-like objects

## Example Usage

```javascript
// Importing shared components
import { Button, Card } from '@/shared/components';

// Importing shared hooks
import { useDebounce } from '@/shared/hooks';

// Importing shared utils
import { formatDate, validateEmail } from '@/shared/utils';

// Importing shared constants
import { API_ENDPOINTS } from '@/shared/constants';
```

## Best Practices

1. **Keep it Generic**: Only add truly reusable code
2. **Document Well**: Add JSDoc comments for complex utilities
3. **Test**: Shared code should be well-tested
4. **Avoid Module Dependencies**: Don't import from specific modules
