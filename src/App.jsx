import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PageLayout } from './components/Layout';
import Home from './pages/Home';
import Quote from './pages/Quote';
import QuickEstimate from './pages/QuickEstimate';

export default function App() {
  return (
    <Router>
      <PageLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/quick-estimate" element={<QuickEstimate />} />
        </Routes>
      </PageLayout>
    </Router>
  );
}
