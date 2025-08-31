# Focus on the Hopeless Foundation Website

## Overview

This is a modern, fully responsive charity foundation website for Focus on the Hopeless Foundation (Est. 2025). The website serves as the digital presence for a non-profit organization dedicated to bringing hope to underserved communities worldwide through education, community support, child welfare, and sustainable development programs. The site features an animated, interactive design with smooth scrolling, donation functionality, volunteer signup, and contact forms.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **Animations**: Framer Motion for smooth animations and scroll-triggered effects
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation

The frontend follows a component-based architecture with reusable UI components organized in a clear hierarchy. The main page is structured as sections (Hero, Mission, About, Programs, Impact, Get Involved, Contact) that are combined in the Home component.

### Backend Architecture
- **Server**: Express.js with TypeScript
- **Development Setup**: Hot module replacement with Vite integration in development
- **Storage Interface**: Abstract storage layer with in-memory implementation for development
- **API Structure**: RESTful API with /api prefix routing

The backend uses a modular architecture with separate concerns for routing, storage, and server setup. The storage interface allows for easy switching between different persistence layers.

### Database Schema
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Definition**: Shared schema definitions using Drizzle and Zod for type safety
- **User Management**: Basic user table with username/password authentication structure

The database schema is minimal but extensible, with a users table that includes UUID primary keys and unique username constraints.

### Styling and Theming
- **Design System**: Custom color scheme with Deep Blue (#0C2A6B) primary, White background, and Olive Green (#6DA34D) accent colors
- **Typography**: Inter font family for clean, modern appearance
- **Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop
- **Dark Mode**: Theme switching capability built into the CSS custom properties system

### Animation System
- **Scroll Animations**: Framer Motion's useInView hook for triggering animations on scroll
- **Interactive Elements**: Hover effects, button animations, and smooth transitions
- **Performance**: Optimized animations with proper motion preferences consideration

## External Dependencies

### Core Framework Dependencies
- React 18 with TypeScript for component-based UI development
- Vite for fast development and optimized builds
- Express.js for the backend server framework

### UI and Animation Libraries
- Radix UI primitives for accessible, unstyled components
- Framer Motion for animations and interactive effects
- Tailwind CSS for utility-first styling
- Lucide React for consistent iconography

### Database and ORM
- Drizzle ORM for type-safe database operations
- Neon Database serverless PostgreSQL for cloud database hosting
- Drizzle Kit for database migrations and schema management

### Development Tools
- TypeScript for type safety across the entire stack
- ESBuild for server-side bundling
- PostCSS with Autoprefixer for CSS processing

### Form and Data Management
- React Hook Form for efficient form handling
- Hookform Resolvers for validation integration
- Zod for runtime type validation and schema definition
- TanStack Query for server state management and caching

### External Services Integration
- Font Awesome for additional icons
- Google Fonts (Inter) for typography
- Unsplash for placeholder images in testimonials

The application is designed to be easily deployable with minimal configuration, using environment variables for database connections and other external service configurations.