# ACME Invoice Management App

This project is a modern, responsive web application for managing invoices and customers, built with React, TypeScript, and Tailwind CSS.

## Features

- **Customer Management**: View, search, and paginate through a list of customers. Each customer has details such as name, email, amount, status, and creation date.
- **Invoice Management**: Create, edit, and view invoices for customers. Invoice forms are fully controlled and support validation.
- **Pagination**: API-driven pagination for customer and invoice lists, with navigation controls and accurate page counts.
- **Search**: Real-time search for customers and invoices, with results updating as you type.
- **Loading States**: Skeleton loaders and spinners provide feedback during data fetching.
- **API Integration**: All data is fetched from a backend API with support for pagination and search queries.
- **Accessibility**: Semantic HTML, keyboard navigation, and accessible components.
- **Testing**: Comprehensive unit and integration tests using Vitest and React Testing Library.
- **Storybook**: Isolated component development and documentation with Storybook.
- **Responsive Design**: Mobile-first, works on all screen sizes.

## Tech Stack
- React 18
- TypeScript
- Tailwind CSS
- Vite
- React Router
- Vitest & React Testing Library
- Storybook

## Getting Started

1. **Install dependencies:**
   ```sh
   pnpm install
   # or
   npm install
   ```
2. **Start the development server:**
   ```sh
   pnpm dev
   # or
   npm run dev
   ```
3. **Run tests:**
   ```sh
   pnpm test
   # or
   npm test
   ```
4. **Run Storybook:**
   ```sh
   pnpm storybook
   # or
   npm run storybook
   ```
## Deployment / Live Demo

The app can be deployed to any static hosting service (e.g., Vercel, Netlify, GitHub Pages) or your own server. After building, deploy the contents of the `dist` folder.

**Live Demo:**
> [https://acme-project-g5ta1gyvn-ralucamavriches-projects.vercel.app/](https://acme-project-g5ta1gyvn-ralucamavriches-projects.vercel.app/)

**To build for production:**
```sh
pnpm build
# or
npm run build
```
The output will be in the `dist/` directory.

## Folder Structure
- `src/components/` — Reusable UI components (Customers, Invoices, Buttons, Forms, etc.)
- `src/pages/` — Page-level components (InvoicesPage, CustomersPage, etc.)
- `src/hooks/` — Custom React hooks for data fetching and state management
- `src/services/api/` — API service functions for backend integration
- `src/types/` — TypeScript type definitions
- `src/utils/` — Utility functions (formatting, etc.)

## API
- The app expects a REST API with endpoints for customers and invoices, supporting pagination and search:
  - `GET /api/customers?page=1&limit=6&search=...`
  - `GET /api/invoices?page=1&limit=6&search=...`

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
MIT
