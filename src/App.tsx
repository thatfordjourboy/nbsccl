import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MotionConfig } from 'motion/react';
import { Suspense, lazy } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';
import { ErrorBoundary } from './components/ErrorBoundary';
import { ScrollToTop } from './components/ScrollToTop';
import { Seo } from './components/Seo';

const HomePage = lazy(() => import('./components/pages/HomePage').then(m => ({ default: m.HomePage })));
const AboutPage = lazy(() => import('./components/pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ConstructionPage = lazy(() => import('./components/pages/ConstructionPage').then(m => ({ default: m.ConstructionPage })));
const CommoditiesPage = lazy(() => import('./components/pages/CommoditiesPage').then(m => ({ default: m.CommoditiesPage })));
const ImportExportPage = lazy(() => import('./components/pages/ImportExportPage').then(m => ({ default: m.ImportExportPage })));
const GoldPage = lazy(() => import('./components/pages/GoldPage').then(m => ({ default: m.GoldPage })));
const ManufacturingPage = lazy(() => import('./components/pages/ManufacturingPage').then(m => ({ default: m.ManufacturingPage })));
const MerchandisePage = lazy(() => import('./components/pages/MerchandisePage').then(m => ({ default: m.MerchandisePage })));
const ContactPage = lazy(() => import('./components/pages/ContactPage').then(m => ({ default: m.ContactPage })));
const PrivacyPolicyPage = lazy(() => import('./components/pages/PrivacyPolicyPage').then(m => ({ default: m.PrivacyPolicyPage })));
const NotFoundPage = lazy(() => import('./components/pages/NotFoundPage').then(m => ({ default: m.NotFoundPage })));
const TermsOfServicePage = lazy(() => import('./components/pages/TermsOfServicePage').then(m => ({ default: m.TermsOfServicePage })));

export default function App() {
  return (
    <Router>
      <MotionConfig reducedMotion="user">
      <ErrorBoundary>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <ScrollToTop />
            <Seo />
            <Suspense fallback={<div className="p-8" role="status">Loading...</div>}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/construction" element={<ConstructionPage />} />
                <Route path="/commodities" element={<CommoditiesPage />} />
                <Route path="/import-export" element={<ImportExportPage />} />
                <Route path="/gold" element={<GoldPage />} />
                <Route path="/manufacturing" element={<ManufacturingPage />} />
                <Route path="/merchandise" element={<MerchandisePage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/privacy" element={<PrivacyPolicyPage />} />
                <Route path="/terms" element={<TermsOfServicePage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <Toaster />
        </div>
      </ErrorBoundary>
      </MotionConfig>
    </Router>
  );
}