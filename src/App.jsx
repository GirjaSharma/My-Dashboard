import { useAuth0 } from '@auth0/auth0-react';
import Dashboard from './Pages/Dashboard/Dashboard';
import LandingPage from './Pages/LandingPage/LandingPage';

function App() {
  const {
    isLoading,
    isAuthenticated,
    error,
    user,
  } = useAuth0();

  if (isLoading) {
    return (
      <div className="app-container">
        <div className="loading-text">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app-container">
        <div className="error">Something went wrong</div>
      </div>
    );
  }

  return isAuthenticated ? (
    <Dashboard user={user} />
  ) : (
    <LandingPage />
  );
}

export default App;
