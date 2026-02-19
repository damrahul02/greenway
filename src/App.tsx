import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';

import Services from './sections/Services';
import WhyIELTSPage from './pages/WhyIELTSPage';
import WhyOTHMPage from './pages/WhyOTHMPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import FacultiesPage from './pages/FacultiesPage';
import EventsPage from './pages/EventsPage';
import BlogPage from './pages/BlogPage';
import AdmissionPage from './pages/AdmissionPage';
import CareerPage from './pages/CareerPage';
import PoliciesPage from './pages/PoliciesPage';
import PlaceholderPage from './pages/PlaceholderPage';
import Journey from './sections/Journey';
import WhyChoose from './sections/WhyChoose';
import Statistics from './sections/Statistics';
import Testimonials from './sections/Testimonials';
import GoogleReviews from './sections/GoogleReviews';
import CTA from './sections/CTA';
import Footer from './sections/Footer';
import EnrollPage from './pages/EnrollPage';

// Scroll to top on route change
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

// Main Home Page Component
const HomePage = () => {
  return (
    <>
      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        {/* About section moved to separate page */}

        {/* Services/Programmes Section */}
        <Services />



        {/* Journey Section */}
        <Journey />

        {/* Why Choose Section */}
        <WhyChoose />

        {/* Statistics Section */}
        <Statistics />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Google Reviews Section */}
        <GoogleReviews />

        {/* CTA Section */}
        <CTA />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

// Main App Component
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Preload critical images
    const images = [
      '/about-image.jpg',
      '/graduation-image.jpg',
      '/student-1.jpg',
      '/student-2.jpg',
      '/student-3.jpg',
      '/student-4.jpg',
    ];

    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
          {/* Loading Screen */}
          {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

          {/* Main Content */}
          {!isLoading && (
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/enroll" element={<EnrollPage />} />
                <Route path="/apply-now" element={<EnrollPage />} />
                <Route path="/why-ielts" element={<WhyIELTSPage />} />
                <Route path="/why-othm" element={<WhyOTHMPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/about" element={<AboutPage />} />

                {/* Pages */}
                <Route path="/faculties" element={<FacultiesPage />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/admission" element={<AdmissionPage />} />
                <Route path="/career" element={<CareerPage />} />
                <Route path="/policies" element={<PoliciesPage />} />
              </Routes>
            </>
          )}
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
