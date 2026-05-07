
import { useAuth0 } from "@auth0/auth0-react";
import LandingPage from './Pages/LandingPage/LandingPage';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  const {
    isLoading, // Loading state, the SDK needs to reach Auth0 on load
    isAuthenticated,
    error,
    loginWithRedirect: login, // Starts the login flow
    logout: auth0Logout, // Starts the logout flow
    user, // User profile
  } = useAuth0();

  const signup = () =>
    login({ authorizationParams: { screen_hint: "signup" } });

  const logout = () =>
    auth0Logout({ logoutParams: { returnTo: window.location.origin } });



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
    <>
      {/* <p>Logged in as {user.email}</p>

      <h1>User Profile</h1>

      <pre>{JSON.stringify(user, null, 2)}</pre> */}
      <Dashboard
      user={user}
       logout={logout} />

      {/* <button onClick={logout}>Logout</button> */}
    </>
  ) : (
    <>
      {/* {error && <p>Error: {error.message}</p>} */}
    <LandingPage signup={signup} login={login} />
      
    </>
  );
}

export default App;
