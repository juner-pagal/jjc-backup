import './App.css';
import RegUsers from './components/RegUsers';
import Dashboard from './components/Dashboard';
import AdminDashboard from './components/AdminDashboard';
import Login from './components/Login';
import AdminLogin from './components/AdminLogin';
import AdminServices from './components/AdminServices';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import RegAdmin from './components/RegAdmin';
import AdminRolePricing from './components/AdminRolePricing';
import AdminBooking from './components/AdminBooking';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';


function App() {
  return (
    
    <BrowserRouter >
      <Routes>
        <Route path='/about' element={<AboutUs/>} />
        <Route path='/' element={<HomePage />} />
        <Route path="/reg" element={<RegUsers />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path='/register-admin' element={<RegAdmin />} />
        <Route path='/register' element={<RegUsers/>}/>
        <Route path="/login" element={<Login />} />
        <Route path='/admin-services' element={<AdminServices />} />
        <Route path='/admin-role-pricing' element={<AdminRolePricing />} />
        <Route path='view-booking' element={<AdminBooking />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
