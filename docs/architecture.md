# Project Architecture

This document outlines the modular architecture and directory structure for the BlueZone project.

## Directory Structure

The project follows a modular, feature-based organization to ensure scalability and maintainability.

### `src/modules/`
Contains feature-specific code. Each module is self-contained.
- **`components/`**: UI components specific to the module.
- **`containers/`**: Connected components handling state or data fetching.
- **`constants/`**: Module-specific configuration and static data.
- **`hooks/`**: Custom hooks local to the feature.
- **`services/`**: API calls and domain logic.
- **`index.js`**: Barrel export for the module's public API.

### `src/shared/`
Contains reusable code used across multiple modules.
- **`components/`**: Global UI elements (Buttons, Navbar, Layouts).
- **`hooks/`**: Universal hooks (scrolling, media queries).
- **`utils/`**: Helper functions (formatting, validation).
- **`constants/`**: Global application configuration.

## Key Principles

1. **Self-Contained Modules**: Modules should not directly import from other modules. Use the `shared/` directory for common code.
2. **Barrel Exports**: Always use `index.js` in module roots to expose components and functions clearly.
3. **Typography Standards**: Follow the "Bold Heading, Light Body" rule as defined in the Brand Identity guide.
4. **Consistency**: Use standardized color tokens (`habitat`, `bone`, `sage`) instead of hardcoded hex values.
