import { useAuth0 } from '@auth0/auth0-react';
import Dashboard from './Pages/Dashboard/Dashboard';
import LandingPage from './Pages/LandingPage/LandingPage';
import { Route, Routes, Navigate } from 'react-router-dom';
import {Bookings} from './Pages/Dashboard/Bookings';
import {Overview} from './Pages/Dashboard/Overview';
import {Calendar} from './Pages/Dashboard/Calendar';
import {Inventory} from './Pages/Dashboard/Inventory';
import {Customers} from './Pages/Dashboard/Customers';
import {Venues} from './Pages/Dashboard/Venues';
import {Delivery} from './Pages/Dashboard/Delivery';
import {Billing} from './Pages/Dashboard/Billing';
import {Reports} from './Pages/Dashboard/Reports';
import {Settings} from './Pages/Dashboard/Settings';
import {Profile} from './Pages/Dashboard/Profile';

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
        <div>Loading...</div>
    );
  }

  if (error) {
    return (
        <div>Something went wrong</div>
    );
  }
return(
  <Routes>
    <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <LandingPage />} />
 <Route
  element={
    <ProtectedRoute isAuthenticated={isAuthenticated}>
      <Dashboard user={user} />
    </ProtectedRoute>
  }
>
  <Route path="/dashboard" element={<Overview />} />
  <Route path="/bookings" element={<Bookings />} />
  <Route path="/calendar" element={<Calendar />} />
  <Route path="/inventory" element={<Inventory />} />
  <Route path="/customers" element={<Customers />} />
  <Route path="/venues" element={<Venues />} />
  <Route path="/delivery" element={<Delivery />} />
    <Route path="/billing" element={<Billing />} />
  <Route path="/reports" element={<Reports />} />
  <Route path="/settings" element={<Settings />} />
   <Route path="/profile" element={<Profile />} />
</Route>
</Routes>
)
 
  
}

export default App;
