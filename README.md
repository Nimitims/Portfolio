
  # Profile Interaction Design

  Matric number : 22120613037
  Name : Oloyede Oluwalonimi Francis

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.


  ## Deployment note: SPA routing on Vercel 🔧

  This project uses client-side routing with React Router's `BrowserRouter`. When you deploy to static hosts like Vercel, deep links (e.g., `/archive`, `/dome`) will return `NOT_FOUND` unless the server is configured to serve `index.html` for unknown paths.

  To fix this, add a `vercel.json` with a rewrite that sends all requests to `/index.html` (already included in this repo). This allows the client router to handle routes correctly and prevents 404s on refresh or direct visits to in-app URLs.

  Alternatively, you can switch to `HashRouter` to avoid server rewrites, but that changes URLs to include `#` (less desirable for SEO and sharing).


  