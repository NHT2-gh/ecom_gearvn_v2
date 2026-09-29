# V2 UI Components

Modern, accessible UI components built with React, TypeScript, and Tailwind CSS. All components are documented in Storybook.

## Components

### Button
**Location**: `button/`

A versatile button component with multiple variants and states.

**Features**:
- 5 variants: solid, surface, outline, ghost, plain
- 5 colors: primary, secondary, success, warning, info
- 4 sizes: sm, md, lg, xl
- Loading and disabled states
- Icon support

**Usage**:
```tsx
import Button from '@/components/v2/ui/button';

<Button variant="solid" color="primary" size="md">
  Click me
</Button>
```

**Storybook**: `V2/UI/Button`

---

### Input
**Location**: `input/`

Flexible input components for text, password, and number fields.

**Features**:
- 3 types: text, password, number
- Debouncing support
- Custom change/submit handlers
- Min value for number inputs

**Usage**:
```tsx
import Input, { TextInput, PasswordInput, NumberInput } from '@/components/v2/ui/input';

<Input type="text" placeholder="Enter text" />
<PasswordInput placeholder="Enter password" />
<NumberInput min={0} placeholder="Enter number" />
```

**Storybook**: `V2/UI/Input`

---

### Badge
**Location**: `bagde/`

Badge component for labels, tags, and status indicators.

**Features**:
- 3 variants: combo, mini, flag
- 7 colors: red, green, yellow, sky, orange, fuchsia, violet
- 3 sizes: sm, md, lg
- Icon support (mini variant)
- Closeable functionality (combo & flag variants)

**Usage**:
```tsx
import Badge from '@/components/v2/ui/bagde';
import { Star } from 'lucide-react';

<Badge variant="combo" color="red">Status</Badge>
<Badge variant="mini" icon={<Star size={12} />} color="green" />
<Badge variant="flag" color="sky" onClose={() => {}}>Tag</Badge>
```

**Storybook**: `V2/UI/Badge`

---

### Tooltip
**Location**: `tooltip/`

Tooltip component built on Radix UI for displaying contextual information.

**Features**:
- 4 positions: top, right, bottom, left
- Customizable offset
- Rich content support
- Smooth animations

**Usage**:
```tsx
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/v2/ui/tooltip';

<Tooltip>
  <TooltipTrigger asChild>
    <button>Hover me</button>
  </TooltipTrigger>
  <TooltipContent side="top" sideOffset={5}>
    <p>Tooltip content</p>
  </TooltipContent>
</Tooltip>
```

**Storybook**: `V2/UI/Tooltip`

---

### Typography
**Location**: `typography/`

Typography component with predefined text styles for consistent design.

**Features**:
- 7 heading levels (h1-36 to h7-16)
- 4 body text sizes (body-15 to body-12)
- 3 caption sizes (caption-11 to caption-9)
- 2 paragraph styles (paragraph-16, paragraph-14)
- Polymorphic rendering with `as` prop

**Usage**:
```tsx
import { Typography } from '@/components/v2/ui/typography';

<Typography level="h1-36">Heading</Typography>
<Typography level="body-14">Body text</Typography>
<Typography level="caption-11" as="span">Caption</Typography>
```

**Storybook**: `V2/UI/Typography`

---

## Development

### View in Storybook

```bash
pnpm storybook
```

Open [http://localhost:6006](http://localhost:6006)

### Creating New Components

1. Create component directory in `src/components/v2/ui/`
2. Add component files (component.tsx, types.ts, theme.ts, etc.)
3. Create `component.stories.tsx` for Storybook
4. Export from `index.ts`

### Story Template

```tsx
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import YourComponent from './your-component';

const meta = {
  title: 'V2/UI/YourComponent',
  component: YourComponent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Component description',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    // Define controls
  },
} satisfies Meta<typeof YourComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // Default props
  },
};
```

## Design System

### Colors
- **Primary**: Red (red-600, red-800)
- **Secondary**: Gray (gray-600, gray-800)
- **Success**: Green (green-600, green-800)
- **Warning**: Amber (amber-600, amber-800)
- **Info**: Blue (blue-600, blue-800)

### Sizes
- **sm**: Small
- **md**: Medium (default)
- **lg**: Large
- **xl**: Extra Large

### Variants
Components follow consistent variant patterns:
- **Solid**: Filled background
- **Surface**: Subtle background
- **Outline**: Border only
- **Ghost**: Transparent with hover
- **Plain**: Minimal styling

## Best Practices

1. **Accessibility**: All components support keyboard navigation and screen readers
2. **Responsive**: Components adapt to different screen sizes
3. **Type Safety**: Full TypeScript support with proper types
4. **Customization**: Use `className` prop for custom styling
5. **Composition**: Components can be composed together
6. **Performance**: Optimized with React.memo and proper re-render prevention

## Resources

- [Storybook Documentation](http://localhost:6006)
- [Tailwind CSS](https://tailwindcss.com)
- [Radix UI](https://www.radix-ui.com)
- [CVA](https://cva.style/docs)
