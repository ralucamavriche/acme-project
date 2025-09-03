## Using This Boilerplate for New Projects

### 1. Clone or Fork

- **Clone:**

  ```sh
  git clone https://github.com/ralucamavriche/react-boilerplate.git
  cd react-boilerplate
  ```

- **Fork:**
  - Click “Fork” on GitHub, then clone your fork:
    ```sh
    git clone https://github.com/<your-username>/react-boilerplate.git
    cd react-boilerplate
    ```

### 2. Start Fresh

- Remove the existing git history:
  ```sh
  rm -rf .git
  git init
  git branch -m main
  git add .
  git commit -m "Initial commit for my new project"
  ```

- Update `package.json`:
  - Change the `name`, `description`, and other fields as needed.

### 3. Install Dependencies

```sh
pnpm install
```
(or use `npm install` or `yarn install`)

### 4. Start Building

- Use the provided scripts to run, build, test, and develop your new app.
 # React Boilerplate Documentation

 ## Overview

 This project is a modern React application using Vite, TypeScript, Tailwind CSS, Storybook, and Vitest for testing. It is set up for fast development, strict linting, and easy customization.

 ---

 ## Tools & Technologies

 - **React 19**: UI library for building interactive interfaces.
 - **Vite**: Fast build tool and dev server.
 - **TypeScript**: Static typing for JavaScript.
 - **Tailwind CSS**: Utility-first CSS framework.
 - **Storybook**: Isolated UI component development and documentation.
 - **Vitest**: Unit and integration testing framework.
 - **ESLint**: Linting for code quality (optional, see setup).
 - **Prettier**: Code formatting.
 - **PostCSS**: CSS processing pipeline.

 ---

 ## Installation

 1. **Clone the repository:**
    ```sh
    git clone <your-repo-url>
    cd react-boilerplate
    ```

 2. **Install dependencies:**
    ```sh
    pnpm install
    ```
    (Or use `npm install` or `yarn install` if you prefer.)

 ---

 ## Running the App

 - **Start development server:**
   ```sh
   pnpm dev
   ```
   The app will be available at `http://localhost:5173` (default Vite port).

 ---

 ## Building for Production

 - **Build the app:**
   ```sh
   pnpm build
   ```
   Output will be in the `dist/` folder.

 - **Preview the production build:**
   ```sh
   pnpm preview
   ```

 ---

 ## Testing

 - **Run all tests:**
   ```sh
   pnpm test
   ```

 - **Run tests in watch mode:**
   ```sh
   pnpm test:watch
   ```

 - **Run tests with UI:**
   ```sh
   pnpm test:ui
   ```

 - **Check coverage:**
   ```sh
   pnpm test:coverage
   ```

 ---

 ## Storybook

 - **Start Storybook for component development:**
   ```sh
   pnpm storybook
   ```
   Storybook will be available at `http://localhost:6006`.

 - **Build Storybook static site:**
   ```sh
   pnpm build-storybook
   ```

 ---

 ## Tailwind CSS

 - **Configuration:**  
   Tailwind is configured in `tailwind.config.js` and used via `postcss.config.js` with the plugin `@tailwindcss/postcss`.
 - **Usage:**  
   Import `tailwind.css` in your main entry file (e.g., `main.tsx`). Use Tailwind utility classes in your components.

 ---

 ## Linting & Formatting

 - **Lint code (if ESLint is installed):**
   ```sh
   pnpm lint
   ```
 - **Auto-fix lint errors:**
   ```sh
   pnpm lint:fix
   ```
 - **Format code with Prettier:**
   ```sh
   pnpm format
   ```

 ---

 ## Project Structure

 ```
 src/
   components/      # Reusable UI components
   pages/           # Page-level components
   hooks/           # Custom React hooks
   styles/          # Global and Tailwind CSS
   utils/           # Utility functions
   App.tsx          # Main app component
   main.tsx         # Entry point
 public/            # Static assets
 .storybook/        # Storybook config
 dist/              # Production build output
 ```

 ---

 ## Additional Notes

 - **Environment:**  
   Uses `pnpm` for package management (fast, disk-efficient). You can use `npm` or `yarn` if preferred.
 - **Customization:**  
   Update `tailwind.config.js` and `vite.config.ts` for custom needs.
 - **Testing:**  
   All tests are written with Vitest and can be found in `*.test.ts(x)` files.

 ---

 ## Troubleshooting

 - If Tailwind styles are not applied, ensure:
   - `@tailwindcss/postcss` is installed.
   - `tailwind.css` is imported in your entry file.
   - Dev server is restarted after config changes.

 ---

 Let me know if you want this saved as a `README.md` or need further customization!
