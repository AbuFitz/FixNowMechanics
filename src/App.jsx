import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PageLayout } from './components/Layout';
import Home from './pages/Home';
import GetEstimate from './pages/GetEstimate';

export default function App() {
  return (
    <Router>
      <PageLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/estimate" element={<GetEstimate />} />
        </Routes>
      </PageLayout>
    </Router>
  );
}
