import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import SEOPage from './SEOPage.tsx';
import LocationPage from './LocationPage.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          
          {/* Services */}
          <Route path="/dich-vu/:slug" element={<SEOPage />} />
          
          {/* Blog / Knowledge */}
          <Route path="/kien-thuc" element={<SEOPage isBlog={true} />} />
          <Route path="/kien-thuc/:slug" element={<SEOPage isBlog={true} />} />
          
          {/* General Pages */}
          <Route path="/bang-gia" element={<SEOPage isPricing={true} />} />
          <Route path="/bang-gia-in-pet" element={<Navigate to="/bang-gia" replace />} />
          <Route path="/in-pet-gia-si" element={<Navigate to="/dich-vu/in-pet-so-luong-lon" replace />} />
          <Route path="/lien-he" element={<SEOPage isContact={true} />} />
          
          {/* Location Redirects for Cannibalization Prevention */}
          <Route path="/in-pet-binh-tan" element={<Navigate to="/in-pet-quan-binh-tan" replace />} />
          <Route path="/in-pet-tan-phu" element={<Navigate to="/in-pet-quan-tan-phu" replace />} />
          <Route path="/in-pet-tan-binh" element={<Navigate to="/in-pet-quan-tan-binh" replace />} />

          {/* Location Landing Pages (catch all fallback) */}
          <Route path="/:slug" element={<LocationPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
);
