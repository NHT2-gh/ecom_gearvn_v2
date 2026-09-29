# Skeleton Loading Component

A custom skeleton loading component inspired by `react-loading-skeleton`, designed to provide smooth loading states for your components.

## Features

- ✨ **Automatic sizing** - Adapts to your component's styles
- 🎨 **Themeable** - Global and per-component styling
- 🌊 **Smooth animation** - Beautiful shimmer effect
- 🎯 **TypeScript support** - Full type safety
- 🌓 **Dark mode** - Automatic dark theme support
- ⚡ **Lightweight** - No external dependencies

## Installation

The component is already set up in your project. Just import the CSS in your root layout:

```tsx
// In your app/layout.tsx or _app.tsx
import '@/components/v2/skeleton/skeleton.css';
```

## Basic Usage

### Simple Skeleton

```tsx
import { Skeleton } from '@/components/v2/skeleton';

function MyComponent() {
  return <Skeleton />;
}
```

### Multiple Lines

```tsx
<Skeleton count={5} />
```

### Custom Dimensions

```tsx
<Skeleton width={200} height={40} />
<Skeleton width="80%" height="2rem" />
```

### Circle (for avatars)

```tsx
<Skeleton circle width={50} height={50} />
```

## Theming

### Global Theme

Wrap your app or section with `SkeletonTheme`:

```tsx
import { SkeletonTheme } from '@/components/v2/skeleton';

function App() {
  return (
    <SkeletonTheme config={{ 
      baseColor: "#202020", 
      highlightColor: "#444" 
    }}>
      <YourComponents />
    </SkeletonTheme>
  );
}
```

### Per-Component Styling

```tsx
<Skeleton 
  baseColor="#e0e0e0" 
  highlightColor="#f5f5f5"
  borderRadius="0.5rem"
/>
```

## Best Practices

### ✅ DO: Build Skeleton States Into Components

```tsx
function ProductCard({ product, isLoading }) {
  if (isLoading) {
    return (
      <div className="product-card">
        <Skeleton height={200} />
        <Skeleton count={2} />
        <Skeleton width="60%" />
      </div>
    );
  }
  
  return (
    <div className="product-card">
      <img src={product.image} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
    </div>
  );
}
```

### ❌ DON'T: Create Separate Skeleton Screens

Instead of creating a separate `ProductCardSkeleton` component, integrate the loading state directly into `ProductCard`.

However, for complex components like your `ProductCard`, we've created `ProductCardSkeleton` as a convenience component.

## Props Reference

### Skeleton Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `count` | `number` | `1` | Number of skeleton lines |
| `width` | `string \| number` | `"100%"` | Width of skeleton |
| `height` | `string \| number` | - | Height of skeleton |
| `circle` | `boolean` | `false` | Render as circle |
| `borderRadius` | `string \| number` | `"0.25rem"` | Border radius |
| `baseColor` | `string` | `"#ebebeb"` | Base color |
| `highlightColor` | `string` | `"#f5f5f5"` | Highlight color |
| `duration` | `number` | `1.5` | Animation duration (seconds) |
| `enableAnimation` | `boolean` | `true` | Enable/disable animation |
| `inline` | `boolean` | `false` | Display inline |
| `className` | `string` | - | Custom CSS class |
| `style` | `CSSProperties` | - | Inline styles |

### SkeletonTheme Props

| Prop | Type | Description |
|------|------|-------------|
| `config` | `SkeletonThemeConfig` | Theme configuration object |

All `Skeleton` props can be used in the theme config to set defaults.

## Examples

### Product Card with Loading State

```tsx
import { Skeleton } from '@/components/v2/skeleton';

function ProductCard({ product, isLoading }) {
  return (
    <article className="product-card">
      <div className="product-image">
        {isLoading ? (
          <Skeleton height={200} />
        ) : (
          <img src={product.image} alt={product.name} />
        )}
      </div>
      
      <div className="product-info">
        <h3>{isLoading ? <Skeleton /> : product.name}</h3>
        <p>{isLoading ? <Skeleton width="60%" /> : product.price}</p>
      </div>
    </article>
  );
}
```

### User Profile with Avatar

```tsx
function UserProfile({ user, isLoading }) {
  return (
    <div className="flex items-center gap-4">
      {isLoading ? (
        <Skeleton circle width={48} height={48} />
      ) : (
        <Avatar src={user.avatar} />
      )}
      
      <div>
        <h4>{isLoading ? <Skeleton width={120} /> : user.name}</h4>
        <p>{isLoading ? <Skeleton width={80} /> : user.email}</p>
      </div>
    </div>
  );
}
```

### Custom Highlight Background

```tsx
<Skeleton 
  customHighlightBackground="linear-gradient(
    90deg, 
    var(--base-color) 40%, 
    var(--highlight-color) 50%, 
    var(--base-color) 60%
  )" 
/>
```

## Integration with Your Project

### Using with TanStack Query

Based on your existing infinite query setup:

```tsx
import { useProductsCollection } from '@/hooks/queries/use-products';
import { ProductCardSkeleton } from '@/components/card/product-card-skeleton';

function ProductList({ slug }) {
  const { data, isLoading, isFetching } = useProductsCollection(slug);
  
  if (isLoading) {
    return <ProductCardSkeleton count={8} />;
  }
  
  return (
    <div className="product-grid">
      {data.pages.flatMap(page => page.products).map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
      {isFetching && <ProductCardSkeleton count={4} />}
    </div>
  );
}
```

### Dark Theme

The skeleton automatically adapts to dark mode using CSS media queries. You can also customize it:

```tsx
<SkeletonTheme config={{ 
  baseColor: "#1a1a1a", 
  highlightColor: "#2a2a2a" 
}}>
  <YourDarkModeContent />
</SkeletonTheme>
```

## Performance Tips

1. **Reuse skeleton components** - Create skeleton versions of your most common components
2. **Match dimensions** - Make skeletons match your actual content size for smooth transitions
3. **Disable animation on slow devices** - Use `enableAnimation={false}` if needed
4. **Use count prop** - More efficient than rendering multiple `<Skeleton />` components

## Troubleshooting

### Skeleton width is 0

If parent has `display: flex`, set explicit width on skeleton:

```tsx
<Skeleton width="100%" />
```

### Height is off by a few pixels

Set explicit height or ensure parent has proper line-height:

```tsx
<Skeleton height="1.5rem" />
```

## License

Part of your e-commerce project.
