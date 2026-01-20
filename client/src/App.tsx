
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import LandingPage from './pages/LandingPage';
import AdminLayout from './layouts/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import Pipeline from './pages/admin/Pipeline';
import Schedule from './pages/admin/Schedule';
import Customers from './pages/admin/Customers';
import Reports from './pages/admin/Reports';
import './styles/globals.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />

                {/* Admin Routes */}
                <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<Navigate to="/admin/dashboard" replace />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="pipeline" element={<Pipeline />} />
                    <Route path="schedule" element={<Schedule />} />
                    <Route path="customers" element={<Customers />} />
                    <Route path="reports" element={<Reports />} />
                </Route>

                {/* Catch all */}
                <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
