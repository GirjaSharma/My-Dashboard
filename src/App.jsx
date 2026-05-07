
import { useAuth0 } from "@auth0/auth0-react";
import LandingPage from './Pages/LandingPage/LandingPage';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  const {
    isLoading, // Loading state, the SDK needs to reach Auth0 on load
    isAuthenticated,
    error,
    user, // User profile
  } = useAuth0();

  if (isLoading){
return (
  <div className="app-container">
         <div className="loading-text">Loading...</div>
  </div>
)
  }

  if(error){
    return (
      <div className="app-container">
          <div className="error">
            Something went wrong
          </div>
      </div>
    )
  }

  return isAuthenticated ? (
    <div className="app-container">
      
      <Dashboard
      user={user}
        />
    </div>
  ) : (
    <div className="app-container">
    <LandingPage 
     />
      
    </div>
  );
}

export default App;
