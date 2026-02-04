import { Link } from 'react-router-dom';
import { Button } from '@/app/components/ui/button';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Home, TrendingUp, Users, Award, ArrowRight, CheckCircle2 } from 'lucide-react';

export function SellingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-gradient-to-r from-rose-600 to-rose-700">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Sell Your Property with Cairds
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Expert guidance and proven results to achieve the best price for your property
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-50">
              Book a Free Valuation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Speak to an Expert
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Sell with Cairds?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Over 25 years of experience in the property market
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-4">
                <TrendingUp className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Best Market Price</h3>
              <p className="text-gray-600 text-sm">
                We achieve an average of 98.5% of asking price for our clients
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-4">
                <Users className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Expert Team</h3>
              <p className="text-gray-600 text-sm">
                Dedicated property experts with local market knowledge
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-4">
                <Home className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Extensive Marketing</h3>
              <p className="text-gray-600 text-sm">
                Professional photography and marketing on major property portals
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-4">
                <Award className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Award Winning</h3>
              <p className="text-gray-600 text-sm">
                Recognized for excellence in estate agency services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Selling Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple, transparent, and tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="relative">
              <div className="bg-rose-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mb-4">
                1
              </div>
              <h3 className="font-semibold text-xl mb-3">Free Valuation</h3>
              <p className="text-gray-600">
                One of our experts will visit your property to provide an accurate market valuation and discuss your selling goals.
              </p>
            </div>

            <div className="relative">
              <div className="bg-rose-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mb-4">
                2
              </div>
              <h3 className="font-semibold text-xl mb-3">Marketing & Viewings</h3>
              <p className="text-gray-600">
                We create professional listings with photography and market your property across all major portals. We handle all viewings on your behalf.
              </p>
            </div>

            <div className="relative">
              <div className="bg-rose-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mb-4">
                3
              </div>
              <h3 className="font-semibold text-xl mb-3">Sale & Completion</h3>
              <p className="text-gray-600">
                We negotiate offers, manage the sales process, and guide you through to successful completion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Our Selling Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/selling/house-sales" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-2 flex items-center justify-between">
                House Sales
                <ArrowRight className="h-5 w-5 text-rose-600" />
              </h3>
              <p className="text-gray-600 text-sm">
                Comprehensive service for selling residential properties
              </p>
            </Link>

            <Link to="/selling-new-build" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-2 flex items-center justify-between">
                Selling New Builds
                <ArrowRight className="h-5 w-5 text-rose-600" />
              </h3>
              <p className="text-gray-600 text-sm">
                Specialist service for new-build properties
              </p>
            </Link>

            <Link to="/selling/land" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-2 flex items-center justify-between">
                Selling Land
                <ArrowRight className="h-5 w-5 text-rose-600" />
              </h3>
              <p className="text-gray-600 text-sm">
                Expert guidance on selling land for development
              </p>
            </Link>

            <Link to="/sold-properties" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-2 flex items-center justify-between">
                Recently Sold
                <ArrowRight className="h-5 w-5 text-rose-600" />
              </h3>
              <p className="text-gray-600 text-sm">
                View our recent successful sales
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              What's Included in Our Service
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Accurate market valuation',
                'Professional photography',
                'Floor plans and EPC',
                'Listing on major property portals',
                'Dedicated sales negotiator',
                'Regular progress updates',
                'Accompanied viewings',
                'Offer negotiation',
                'Sales progression support',
                'Marketing materials',
                'Expert local knowledge',
                'No sale, no fee options available'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-rose-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-rose-600">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Sell Your Property?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
            Get started with a free, no-obligation valuation from one of our expert team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-50">
              Book Your Free Valuation
            </Button>
            <Link to="/contact-us">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
