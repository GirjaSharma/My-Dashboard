import { useAuth0 } from '@auth0/auth0-react';
import Dashboard from './Pages/Dashboard/Dashboard';
import LandingPage from './Pages/LandingPage/LandingPage';
import { Route, Routes, Navigate } from 'react-router-dom';
import {OrdersPage} from './Pages/Orders/OrdersPage';
import {Overview} from './Pages/Dashboard/Overview';

const ProtectedRoute=({children, isAuthenticated})=>{
return isAuthenticated ? 
    children
   : <Navigate to="/" />
  }

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
return(
  <Routes>
    <Route path="/" element={<LandingPage />} />
 <Route
  element={
    <ProtectedRoute isAuthenticated={isAuthenticated}>
      <Dashboard user={user} />
    </ProtectedRoute>
  }
>
  <Route path="/dashboard" element={<Overview />} />
  <Route path="/orders" element={<OrdersPage />} />
</Route>
</Routes>
)
 
  
}

export default App;
