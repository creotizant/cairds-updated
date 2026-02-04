import CommercialPage from './pages/CommercialPage';
import NewBuildHomesPage from './pages/NewBuildHomesPage';
import PropertyServicesPage from './pages/PropertyServicesPage';
import LivingInEpsomPage from './pages/LivingInEpsomPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { PropertiesPage } from './pages/PropertiesPage';
import { PropertyDetailPage } from './pages/PropertyDetailPage';
import { SellingPage } from './pages/SellingPage';
import { HouseSalesPage } from './pages/HouseSalesPage';
import { SellingNewBuildPage } from './pages/SellingNewBuildPage';
import { SellingLandPage } from './pages/SellingLandPage';
import { SoldPropertiesPage } from './pages/SoldPropertiesPage';
import { BuyingPage } from './pages/BuyingPage';
import PurchasePropertyPage from './pages/PurchasePropertyPage';
import BuyingNewHomePage from './pages/BuyingNewHomePage';
import { RentingPage } from './pages/RentingPage';
import { LandlordsPage } from './pages/LandlordsPage';
import LandlordServicesPage from './pages/LandlordServicesPage';
import RecentlyLetPage from './pages/RecentlyLetPage';
import ReviewsPage from './pages/ReviewsPage';

import { AboutUsPage } from './pages/AboutUsPage';
import { ContactPage } from './pages/ContactPage';

import BlogPage from './pages/BlogPage';
import EpsomLettingsOfficePage from './pages/EpsomLettingsOfficePage';
import EpsomOfficePage from './pages/EpsomOfficePage';

import LetPropertiesPage from './pages/LetPropertiesPage';
import AshteadOfficePage from './pages/AshteadOfficePage';
import IndependentMortgagesPage from './pages/IndependentMortgagesPage';
import CharitySupportPage from './pages/CharitySupportPage';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            {/* Main routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/properties" element={<PropertiesPage />} />
            <Route path="/property/:id" element={<PropertyDetailPage />} />

            {/* Selling routes */}
            <Route path="/selling" element={<SellingPage />} />
            <Route path="/selling/house-sales" element={<HouseSalesPage />} />
            <Route path="/selling-new-build" element={<SellingNewBuildPage />} />
            <Route path="/selling/land" element={<SellingLandPage />} />
            <Route path="/sold-properties" element={<SoldPropertiesPage />} />

            {/* Buying routes */}
            <Route path="/buying" element={<BuyingPage />} />
            <Route path="/buying/purchase-property" element={<PurchasePropertyPage />} />
            <Route path="/buying-new-home" element={<BuyingNewHomePage />} />
            <Route path="/a-guide-to-living-in-epsom" element={<LivingInEpsomPage />} />

            {/* Renting routes */}
            <Route path="/renting" element={<RentingPage />} />

            {/* Landlords routes */}
            <Route path="/landlords" element={<LandlordsPage />} />
            <Route path="/landlords/services" element={<LandlordServicesPage />} />
            <Route path="/recently-let" element={<RecentlyLetPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />

            {/* About & Contact */}
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/contact-us" element={<ContactPage />} />

            {/* Blog, Offices, and Lettings */}
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/epsom-lettings-office" element={<EpsomLettingsOfficePage />} />
            <Route path="/epsom-office" element={<EpsomOfficePage />} />
            <Route path="/let-properties" element={<LetPropertiesPage />} />
            <Route path="/ashtead-office" element={<AshteadOfficePage />} />
            <Route path="/charity-support" element={<CharitySupportPage />} />
            <Route path="/independent-mortgages" element={<IndependentMortgagesPage />} />
            <Route path="/commercial" element={<CommercialPage />} />
            <Route path="/new-build-homes" element={<NewBuildHomesPage />} />
            <Route path="/property-services" element={<PropertyServicesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
