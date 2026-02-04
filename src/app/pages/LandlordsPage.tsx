import { PageHero } from '@/app/components/PageHero';
import { Button } from '@/app/components/ui/button';
import { Link } from 'react-router-dom';
import { TrendingUp, Shield, Users, FileText, ArrowRight } from 'lucide-react';

export function LandlordsPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero 
        title="Landlord Services"
        description="Comprehensive property management and lettings services"
        gradient="from-green-600 to-green-700"
      />

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Professional Lettings & Management
            </h2>
            <p className="text-gray-700 text-lg">
              Whether you're a first-time landlord or have an extensive portfolio, we provide tailored services to maximize your rental income and protect your investment.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Maximise Rent</h3>
              <p className="text-sm text-gray-600">Achieve the best rental yield</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Full Protection</h3>
              <p className="text-sm text-gray-600">Comprehensive insurance options</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Quality Tenants</h3>
              <p className="text-sm text-gray-600">Thorough tenant referencing</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <FileText className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Legal Compliance</h3>
              <p className="text-sm text-gray-600">All regulations covered</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Letting Only Service</h3>
              <p className="text-gray-700 mb-6">
                Perfect for experienced landlords who want to manage the property themselves but need help finding quality tenants.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-rose-600 rounded-full mt-2" />
                  <span className="text-gray-700">Market appraisal and pricing advice</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-rose-600 rounded-full mt-2" />
                  <span className="text-gray-700">Professional photography and marketing</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-rose-600 rounded-full mt-2" />
                  <span className="text-gray-700">Accompanied viewings</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-rose-600 rounded-full mt-2" />
                  <span className="text-gray-700">Full tenant referencing</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-rose-600 rounded-full mt-2" />
                  <span className="text-gray-700">Tenancy agreement preparation</span>
                </li>
              </ul>
              <Button className="w-full bg-rose-600 hover:bg-rose-700">Learn More</Button>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Full Management Service</h3>
              <p className="text-gray-700 mb-6">
                Complete peace of mind with our full property management service handling everything from tenant finding to maintenance.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-rose-600 rounded-full mt-2" />
                  <span className="text-gray-700">Everything in Letting Only, plus:</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-rose-600 rounded-full mt-2" />
                  <span className="text-gray-700">Rent collection and arrears management</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-rose-600 rounded-full mt-2" />
                  <span className="text-gray-700">Property inspections</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-rose-600 rounded-full mt-2" />
                  <span className="text-gray-700">Maintenance coordination</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-rose-600 rounded-full mt-2" />
                  <span className="text-gray-700">Tenant liaison</span>
                </li>
              </ul>
              <Button className="w-full bg-rose-600 hover:bg-rose-700">Learn More</Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Link to="/landlords/services" className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-2 flex items-center justify-between">
                Landlord Services
                <ArrowRight className="h-5 w-5 text-rose-600" />
              </h3>
              <p className="text-gray-600 text-sm">
                Detailed breakdown of our landlord support services
              </p>
            </Link>

            <Link to="/recently-let" className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-2 flex items-center justify-between">
                Recently Let Properties
                <ArrowRight className="h-5 w-5 text-rose-600" />
              </h3>
              <p className="text-gray-600 text-sm">
                See what we've recently let in the area
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Let Your Property?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Get a free rental valuation and discuss the best letting strategy for your property
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-rose-600 hover:bg-rose-700">
              Get a Rental Valuation
            </Button>
            <Link to="/contact-us">
              <Button size="lg" variant="outline">
                Contact Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
