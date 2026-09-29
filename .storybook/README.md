# Storybook Configuration

This directory contains the Storybook configuration for the V2 components.

## Files

### main.ts
Main Storybook configuration file that defines:
- **Stories location**: `../src/**/*.stories.@(js|jsx|mjs|ts|tsx)`
- **Framework**: `@storybook/nextjs-vite` (Next.js 15 with Vite)
- **Addons**:
  - `@chromatic-com/storybook` - Visual testing
  - `@storybook/addon-vitest` - Vitest integration
  - `@storybook/addon-a11y` - Accessibility testing
  - `@storybook/addon-docs` - Auto-generated documentation
  - `@storybook/addon-onboarding` - Onboarding guide
- **Static directory**: `../public` for assets

### preview.ts
Global configuration for story rendering:
- **Tailwind CSS**: Imports `globals.css` for styling
- **Actions**: Auto-captures events matching `^on[A-Z].*`
- **Controls**: Expanded by default with color/date matchers
- **Backgrounds**: Light (default), Dark, Gray options
- **Viewport**: Mobile, Tablet, Desktop presets

## Customization

### Adding New Addons

Edit `main.ts`:
```typescript
addons: [
  // ... existing addons
  '@storybook/addon-your-addon',
],
```

### Modifying Global Parameters

Edit `preview.ts`:
```typescript
const preview: Preview = {
  parameters: {
    // Add or modify parameters here
  },
};
```

### Custom Decorators

Add decorators in `preview.ts`:
```typescript
const preview: Preview = {
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
  // ... parameters
};
```

## Running Storybook

```bash
# Development mode
pnpm storybook

# Build static version
pnpm build-storybook
```

## Resources

- [Storybook Configuration](https://storybook.js.org/docs/configure)
- [Next.js Framework](https://storybook.js.org/docs/get-started/frameworks/nextjs)
- [Addons](https://storybook.js.org/docs/addons)
