# ACME Invoice Management App

This project is a modern, responsive web application for managing invoices and customers, built with **React**, **TypeScript**, and **Tailwind CSS**.

**Live Demo:** [https://vercel.com/ralucamavriches-projects/acme-project](https://vercel.com/ralucamavriches-projects/acme-project)

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Folder Structure](#folder-structure)
- [API](#api)
  - [Invoices](#invoices)
  - [Error Responses](#error-responses)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Customer Management:** View, search, and paginate through a list of customers. Each customer has details such as name, email, amount, status, and creation date.  
- **Invoice Management:** Create, edit, and view invoices for customers. Invoice forms are fully controlled and support validation.  
- **Pagination:** API-driven pagination for customer and invoice lists, with navigation controls and accurate page counts.  
- **Search:** Real-time search for customers and invoices, with results updating as you type.  
- **Loading States:** Skeleton loaders and spinners provide feedback during data fetching.  
- **API Integration:** All data is fetched from a backend API with support for pagination and search queries.  
- **Accessibility:** Semantic HTML, keyboard navigation, and accessible components.  
- **Testing:** Comprehensive unit and integration tests using Vitest and React Testing Library.  
- **Storybook:** Isolated component development and documentation with Storybook.  
- **Responsive Design:** Mobile-first, works on all screen sizes.  

---

## Tech Stack

- React 18  
- TypeScript  
- Tailwind CSS  
- Vite  
- React Router  
- Vitest & React Testing Library  
- Storybook  

---

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
## Deployment

The app can be deployed to any static hosting service (e.g., Vercel, Netlify, GitHub Pages) or your own server. After building, deploy the contents of the `dist` folder.

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
The app expects a RESTful API with endpoints for managing customers and invoices. All endpoints return JSON. Pagination and search are supported. Below is a summary of the available endpoints, request/response formats, and authentication requirements.

### Invoices

#### List invoices

- **Endpoint:** `GET /api/invoices?page=1&limit=6&search=...`  
- **Query parameters:**
  - `page` (number, optional): Page number (default: 1)
  - `limit` (number, optional): Items per page (default: 6)
  - `search` (string, optional): Search term

- **Response:**
```json
[
  {
    "id": "1",
    "customerName": "Terrance Sawayn",
    "customerEmail": "Osborne2@gmail.com",
    "customerAvatar": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/10.jpg",
    "amount": "848.69",
    "isPaid": false,
    "createdAt": "2025-04-19T17:40:06.192Z",
    "updatedAt": "2025-09-16T09:16:08.175Z"
  },
  {
    "id": "2",
    "customerName": "Roderick Corwin",
    "customerEmail": "Burdette.Johns95@hotmail.com",
    "customerAvatar": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/70.jpg",
    "amount": "648.83",
    "isPaid": false,
    "createdAt": "2025-01-18T00:53:17.689Z",
    "updatedAt": "2025-09-15T23:16:34.373Z"
  }
]
```
- **Get customer by ID**
  - `GET /api/invoices/{id}`
  - **Response:** Same as a single item in the list above.
 
### Error Responses

- Standard error format:
  ```json
  {
    "error": "Not found"
  }

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
MIT
