
  # Profile Interaction Design

  Matric number : 22120613037
  Name : Oloyede Oluwalonimi Francis

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.


  ## Build Verification Tests 🧪

  This project includes test scripts to verify build configuration and catch issues before deploying.

  ### Quick Configuration Check
  ```bash
  npm run test:build
  ```
  Verifies configuration files, dependencies, and setup without running a full build.

  ### Full Build Verification
  ```bash
  npm run test:build:full
  ```
  Performs a complete build and verifies the output is correct.

  ### Combined Verification
  ```bash
  npm run verify
  ```
  Runs configuration checks followed by a full build.

  **When to use:**
  - Before deploying to production
  - After making configuration changes
  - To troubleshoot build issues
  - In CI/CD pipelines

  See [`scripts/README.md`](./scripts/README.md) for detailed documentation.

  ## Deployment note: SPA routing on Vercel 🔧

  This project uses client-side routing with React Router's `BrowserRouter`. When you deploy to static hosts like Vercel, deep links (e.g., `/archive`, `/dome`) will return `NOT_FOUND` unless the server is configured to serve `index.html` for unknown paths.

  To fix this, add a `vercel.json` with a rewrite that sends all requests to `/index.html` (already included in this repo). This allows the client router to handle routes correctly and prevents 404s on refresh or direct visits to in-app URLs.

  Alternatively, you can switch to `HashRouter` to avoid server rewrites, but that changes URLs to include `#` (less desirable for SEO and sharing).

  
