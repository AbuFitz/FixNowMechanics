import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PageLayout } from './components/Layout';
import Home from './pages/Home';
import GetEstimate from './pages/GetEstimate';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import ServiceAreas from './pages/ServiceAreas';
import Blog from './pages/Blog';

// Location Pages
import WatfordPage from './pages/locations/Watford';
import StAlbansPage from './pages/locations/StAlbans';
import LutonPage from './pages/locations/Luton';
import DunstablePage from './pages/locations/Dunstable';
import MiltonKeynesPage from './pages/locations/MiltonKeynes';
import AylesburyPage from './pages/locations/Aylesbury';
import StevenagePage from './pages/locations/Stevenage';
import HatfieldPage from './pages/locations/Hatfield';
import NorthLondonPage from './pages/locations/NorthLondon';

// Blog Posts
import EngineWarningLightPost from './pages/blog/EngineWarningLight';
import MobileMechanicVsGaragePost from './pages/blog/MobileMechanicVsGarage';

export default function App() {
  return (
    <Router>
      <PageLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/estimate" element={<GetEstimate />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/locations" element={<ServiceAreas />} />
          <Route path="/blog" element={<Blog />} />
          
          {/* Location Pages */}
          <Route path="/locations/watford" element={<WatfordPage />} />
          <Route path="/locations/st-albans" element={<StAlbansPage />} />
          <Route path="/locations/luton" element={<LutonPage />} />
          <Route path="/locations/dunstable" element={<DunstablePage />} />
          <Route path="/locations/milton-keynes" element={<MiltonKeynesPage />} />
          <Route path="/locations/aylesbury" element={<AylesburyPage />} />
          <Route path="/locations/stevenage" element={<StevenagePage />} />
          <Route path="/locations/hatfield" element={<HatfieldPage />} />
          <Route path="/locations/north-london" element={<NorthLondonPage />} />
          
          {/* Blog Posts */}
          <Route path="/blog/engine-warning-light-guide" element={<EngineWarningLightPost />} />
          <Route path="/blog/mobile-mechanic-vs-garage" element={<MobileMechanicVsGaragePost />} />
        </Routes>
      </PageLayout>
    </Router>
  );
}
