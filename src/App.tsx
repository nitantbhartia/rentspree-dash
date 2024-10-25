import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Properties } from './pages/Properties';
import { Applications } from './pages/Applications';
import { Screening } from './pages/Screening';
import { RentCollection } from './pages/RentCollection';
import { TenantScreening } from './pages/TenantScreening';
import { Signup } from './pages/Signup';
import { Footer } from './components/Footer';

// In a real application, this would be in an environment variable
const GOOGLE_CLIENT_ID = "your-google-client-id.apps.googleusercontent.com";

export function App() {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/properties" element={<Properties />} />
              <Route path="/applications" element={<Applications />} />
              <Route path="/screening" element={<Screening />} />
              <Route path="/payments" element={<RentCollection />} />
              <Route path="/tenant-screening" element={<TenantScreening />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </GoogleOAuthProvider>
  );
}