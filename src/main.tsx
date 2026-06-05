import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
          <Route path="/lien-he" element={<SEOPage isContact={true} />} />
          
          {/* Location Landing Pages (catch all fallback) */}
          <Route path="/:slug" element={<LocationPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
);
