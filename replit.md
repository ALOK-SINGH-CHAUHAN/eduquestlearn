# ReEarth - Gamified Environmental Education Platform

## Overview

ReEarth is a gamified environmental education platform designed for students to learn about sustainability through interactive experiences. The platform enables students to earn eco-points, complete green missions, take quizzes, and track their environmental impact while competing with peers. The application combines educational content with game mechanics to make environmental learning engaging and motivating.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management with a centralized query client
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible design
- **Styling**: Tailwind CSS with custom design system variables and component variants
- **Design System**: Material Design-inspired approach with environmental green theme and gamification elements

### Component Structure
- **Layout System**: Responsive design with sidebar navigation, card-based layouts, and mobile-first approach
- **UI Library**: Comprehensive component library including forms, dialogs, tooltips, charts, and navigation elements
- **Theming**: CSS custom properties for light/dark mode support with environmental color palette
- **Accessibility**: Built on Radix UI primitives ensuring WCAG compliance and keyboard navigation

### Data Management
- **API Layer**: Custom query client with error handling and authentication support
- **Caching Strategy**: React Query handles server state caching, background updates, and optimistic updates
- **Error Handling**: Centralized error boundaries with user-friendly toast notifications
- **Authentication**: Cookie-based session management with 401 handling

### Code Organization
- **File Structure**: Feature-based organization with shared components in ui directory
- **TypeScript**: Strict type checking with proper interfaces and component prop types
- **Build System**: Vite for fast development and optimized production builds
- **Asset Management**: Path aliases for clean imports and asset resolution

## External Dependencies

### Core Libraries
- **React Ecosystem**: React 18+ with React DOM and TypeScript support
- **UI Framework**: Radix UI primitives for headless, accessible components
- **Styling**: Tailwind CSS with class-variance-authority for component variants
- **Icons**: Lucide React for consistent iconography
- **Routing**: Wouter for lightweight client-side routing

### Data & State Management
- **Server State**: TanStack React Query for API data fetching and caching
- **Forms**: React Hook Form with Hookform Resolvers for form validation
- **Charts**: Recharts for data visualization and progress tracking

### Development Tools
- **Build Tool**: Vite with React plugin for fast development
- **Type Checking**: TypeScript with strict configuration
- **Linting**: Built-in Vite error handling and development overlays
- **CSS Processing**: PostCSS with Tailwind CSS and Autoprefixer

### Specialized Components
- **Calendar**: React Day Picker for date selection
- **Carousel**: Embla Carousel for image and content carousels
- **Command Menu**: CMDK for search and command interfaces
- **Data Tables**: Custom table components with sorting and pagination
- **Drag & Drop**: Potential integration points for interactive learning modules

### Database Integration
- **ORM**: Drizzle ORM for type-safe database operations
- **Database Driver**: Neon Database serverless driver for PostgreSQL
- **Validation**: Drizzle Zod for runtime schema validation
- **Session Management**: Connect PG Simple for PostgreSQL session storage

### Utility Libraries
- **Class Management**: clsx and Tailwind Merge for conditional styling
- **Date Handling**: date-fns for date manipulation and formatting
- **Validation**: Zod for schema validation and type inference