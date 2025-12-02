import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PageLayout } from './components/Layout';
import Home from './pages/Home';
import GetEstimate from './pages/GetEstimate';
import ServicesLocations from './pages/ServicesLocations';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';

export default function App() {
  return (
    <Router>
      <PageLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/estimate" element={<GetEstimate />} />
          <Route path="/services" element={<ServicesLocations />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsConditions />} />
        </Routes>
      </PageLayout>
    </Router>
  );
}
