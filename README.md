# RentSpree Clone

A modern property management platform built with React, TypeScript, and Tailwind CSS.

## 🏗 Architecture & Design Patterns

### Feature-First Organization
```
src/
├── features/           # Feature-based modules
│   ├── auth/          # Authentication feature
│   │   ├── components/
│   │   └── stores/
│   ├── home/          # Home page feature
│   │   └── components/
│   └── screening/     # Screening feature
│       └── components/
├── shared/            # Shared utilities and components
│   ├── components/    # Reusable UI components
│   ├── providers/     # Context providers
│   └── styles/        # Global styles
└── pages/            # Page components
```

### Component Patterns

#### 1. Presentational Components
Pure UI components that receive props and render content.

```tsx
// Example: src/components/properties/PropertyCard.tsx
interface PropertyCardProps {
  property: {
    id: number;
    title: string;
    // ...
  };
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      {/* Component content */}
    </div>
  );
}
```

#### 2. Container Components
Components that manage state and data flow.

```tsx
// Example: src/pages/Properties.tsx
export function Properties() {
  // State management and data fetching
  return (
    <div>
      <PropertyFilters />
      <PropertyList properties={properties} />
    </div>
  );
}
```

#### 3. Layout Components
Components that define page structure.

```tsx
// Example: src/components/Layout.tsx
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
```

### State Management

We use Zustand for global state management:

```tsx
// Example: src/features/auth/stores/auth.store.ts
import { create } from 'zustand';

interface AuthState {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}));
```

## 🚀 Adding New Components

### 1. Create Component File
```tsx
// src/features/example/components/ExampleComponent.tsx
export function ExampleComponent() {
  return (
    <div className="p-4">
      {/* Component content */}
    </div>
  );
}
```

### 2. Add to Page
```tsx
// src/pages/ExamplePage.tsx
import { ExampleComponent } from '../features/example/components/ExampleComponent';

export function ExamplePage() {
  return (
    <div>
      <ExampleComponent />
    </div>
  );
}
```

### 3. Add Route
```tsx
// src/App.tsx
import { ExamplePage } from './pages/ExamplePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/example" element={<ExamplePage />} />
      </Routes>
    </Router>
  );
}
```

## 🎨 Styling Patterns

We use Tailwind CSS with consistent patterns:

### 1. Layout
```tsx
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* Content */}
</div>
```

### 2. Cards
```tsx
<div className="bg-white rounded-lg shadow-sm overflow-hidden">
  {/* Card content */}
</div>
```

### 3. Buttons
```tsx
<button className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-blue-500">
  {/* Button content */}
</button>
```

## 🛠 Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Building for Production

```bash
# Create optimized production build
npm run build

# The build output will be in the 'dist' directory
```

## 🚀 Deployment

### Netlify Deployment
1. Connect your repository to Netlify
2. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18.x
3. Deploy!

## 🧪 Best Practices

1. **Component Organization**
   - Keep components small and focused
   - Use TypeScript interfaces for props
   - Implement proper error boundaries

2. **State Management**
   - Use local state for UI-specific state
   - Use Zustand for global application state
   - Keep state updates simple and predictable

3. **Performance**
   - Implement proper memoization where needed
   - Use lazy loading for routes
   - Optimize images and assets

4. **Accessibility**
   - Use semantic HTML elements
   - Include proper ARIA attributes
   - Ensure keyboard navigation works

## 📚 Additional Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Zustand Documentation](https://github.com/pmndrs/zustand)