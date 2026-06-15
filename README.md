# Countryside Party Rentals Dashboard

React + Vite dashboard for Countryside Party Rentals with Auth0 authentication, a landing page, and an authenticated dashboard view.

## Scripts

- `npm run dev` starts the local Vite dev server.
- `npm run build` creates a production build in `dist`.
- `npm run lint` runs ESLint across the project.
- `npm run preview` previews the production build locally.

## Project Structure

```text
src/
  Components/     Shared UI components.
  Pages/          Page-level views.
  config/         App-level configuration, such as Auth0 and navigation.
  data/           Local dashboard data.
  providers/      Third-party provider wrappers.
  utils/          Shared calculation/helpers.
```

## Notes

Auth0 setup is centralized in `src/config/auth0.js` and wrapped by `src/providers/AuthProvider.jsx` so `src/main.jsx` stays focused on rendering the app shell.
