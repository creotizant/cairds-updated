import { PageHero } from '@/app/components/PageHero';
import { Button } from '@/app/components/ui/button';
import { Link } from 'react-router-dom';
import { ReactNode } from 'react';

interface SimplePageProps {
  title: string;
  description: string;
  content: ReactNode;
  gradient?: string;
}

export function SimplePage({ title, description, content, gradient }: SimplePageProps) {
  return (
    <div className="min-h-screen bg-white">
      <PageHero title={title} description={description} gradient={gradient} />
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg">
            {content}
          </div>
          <div className="max-w-4xl mx-auto mt-12 text-center">
            <Link to="/contact-us">
              <Button size="lg" className="bg-rose-600 hover:bg-rose-700">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// Specific page exports
export function PurchasePropertyPage() {
  return (
    <SimplePage
      title="Purchase a Property"
      description="Your guide to buying property with Cairds"
      content={
        <div className="text-gray-700">
          <p>
            Purchasing a property is one of the most significant financial decisions you'll make. At Cairds, we're committed to making the process as smooth and stress-free as possible.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Buying Process</h2>
          <p>
            From your initial property search through to completion, our experienced team will guide you every step of the way. We'll help you find the right property, negotiate the best price, and coordinate with solicitors and mortgage advisors to ensure a successful purchase.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What to Expect</h2>
          <ul>
            <li>Access to the widest range of properties in the area</li>
            <li>Expert advice on property values and local market conditions</li>
            <li>Flexible viewing arrangements to suit your schedule</li>
            <li>Guidance through the offer and negotiation process</li>
            <li>Support with mortgage and legal arrangements</li>
            <li>Regular updates throughout the purchase process</li>
          </ul>
        </div>
      }
    />
  );
}

export function BuyingNewHomePage() {
  return (
    <SimplePage
      title="Buying a New Build Home"
      description="Everything you need to know about purchasing new-build properties"
      content={
        <div className="text-gray-700">
          <p>
            New build homes offer many advantages including modern design, energy efficiency, and the opportunity to customize your living space. Our team has extensive experience with new build developments and can guide you through the unique aspects of this type of purchase.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Benefits of New Builds</h2>
          <ul>
            <li>Modern, energy-efficient design means lower running costs</li>
            <li>10-year NHBC or similar warranty for peace of mind</li>
            <li>Often no onward chain for faster completion</li>
            <li>Potential to customize finishes and layouts</li>
            <li>Access to Help to Buy schemes and incentives</li>
            <li>Latest building regulations and safety standards</li>
          </ul>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What We Offer</h2>
          <p>
            Our team has strong relationships with major developers in the area and can provide early access to new developments. We'll explain the reservation process, help you understand any incentives available, and ensure you're fully informed throughout your purchase.
          </p>
        </div>
      }
    />
  );
}

export function LivingInEpsomPage() {
  return (
    <SimplePage
      title="A Guide to Living in Epsom"
      description="Discover why Epsom is a great place to call home"
      content={
        <div className="text-gray-700">
          <p>
            Epsom is a thriving market town in Surrey, offering the perfect blend of suburban tranquility and excellent transport links to London. With its rich history, outstanding schools, and vibrant community, it's no wonder Epsom is one of Surrey's most sought-after locations.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Transport Links</h2>
          <p>
            Epsom station provides regular services to London Waterloo and Victoria, with journey times of around 35 minutes. The town also benefits from excellent road links, with the M25 easily accessible for connections to Heathrow and Gatwick airports.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Schools & Education</h2>
          <p>
            The area is home to numerous outstanding schools, including several rated 'Outstanding' by Ofsted. Popular choices include Epsom College, Rosebery School, and many excellent primary schools.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Leisure & Amenities</h2>
          <p>
            Epsom offers a wide range of shops, restaurants, and leisure facilities. The famous Epsom Downs Racecourse hosts the Derby, while the town center features major retailers and independent boutiques. Beautiful parks and countryside are right on the doorstep.
          </p>
        </div>
      }
    />
  );
}

export function LetPropertiesPage() {
  return (
    <SimplePage
      title="Properties to Let"
      description="Browse our available rental properties"
      gradient="from-purple-600 to-purple-700"
      content={
        <div className="text-gray-700">
          <p>
            We have a wide range of rental properties available across Epsom, Ashtead, and the surrounding areas. From modern apartments to family homes, our lettings team can help you find your ideal rental property.
          </p>
          <p className="mt-4">
            All our rental properties are fully managed and maintained to the highest standards. Contact us to discuss your requirements and arrange viewings.
          </p>
        </div>
      }
    />
  );
}

export function LandlordServicesPage() {
  return (
    <SimplePage
      title="Landlord Services"
      description="Comprehensive property management for landlords"
      gradient="from-green-600 to-green-700"
      content={
        <div className="text-gray-700">
          <p>
            Our dedicated landlord services team provides everything you need to successfully let and manage your property. From tenant finding to full management, we offer flexible packages to suit your needs.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Services Include</h2>
          <ul>
            <li>Free rental valuations</li>
            <li>Professional property marketing</li>
            <li>Comprehensive tenant referencing</li>
            <li>Rent collection and arrears management</li>
            <li>Property inspections</li>
            <li>Maintenance coordination</li>
            <li>Full compliance with all regulations</li>
            <li>24/7 emergency contact line</li>
          </ul>
        </div>
      }
    />
  );
}

export function RecentlyLetPage() {
  return (
    <SimplePage
      title="Recently Let Properties"
      description="View properties we've recently let"
      gradient="from-green-600 to-green-700"
      content={
        <div className="text-gray-700">
          <p>
            These properties have been successfully let by our lettings team. See the quality and range of rental properties we manage across the area.
          </p>
          <p className="mt-4">
            If you're a landlord looking to let your property, or a tenant searching for your next home, contact our lettings team to discuss your requirements.
          </p>
        </div>
      }
    />
  );
}

export function CommercialPage() {
  return (
    <SimplePage
      title="Commercial Property Services"
      description="Expert commercial property sales and lettings"
      gradient="from-gray-700 to-gray-900"
      content={
        <div className="text-gray-700">
          <p>
            Cairds offers comprehensive commercial property services for businesses looking to buy, sell, or let commercial premises. Our commercial team has extensive experience across retail, office, and industrial properties.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Services We Offer</h2>
          <ul>
            <li>Commercial sales and acquisitions</li>
            <li>Commercial lettings</li>
            <li>Business valuations</li>
            <li>Investment property advice</li>
            <li>Lease negotiations</li>
            <li>Property management</li>
          </ul>
        </div>
      }
    />
  );
}

export function NewHomesPage() {
  return (
    <SimplePage
      title="New Build Homes"
      description="Discover our new build developments"
      content={
        <div className="text-gray-700">
          <p>
            Cairds works with leading developers across Surrey to bring you the finest new build homes. From contemporary apartments to luxury family houses, our new homes team can help you find your perfect new build property.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose a New Build?</h2>
          <ul>
            <li>Modern, energy-efficient design</li>
            <li>10-year warranty included</li>
            <li>Customize to your taste</li>
            <li>Help to Buy schemes available</li>
            <li>Lower maintenance costs</li>
            <li>Latest safety and building standards</li>
          </ul>
        </div>
      }
    />
  );
}

export function ConveyancingPage() {
  return (
    <SimplePage
      title="Conveyancing Services"
      description="Professional legal services for property transactions"
      content={
        <div className="text-gray-700">
          <p>
            We work with trusted conveyancing solicitors to ensure your property transaction proceeds smoothly. Our recommended conveyancers offer competitive fixed fees and excellent service.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What is Conveyancing?</h2>
          <p>
            Conveyancing is the legal process of transferring property ownership from seller to buyer. It involves various checks, searches, and legal work to ensure the transaction is completed correctly.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Recommended Services</h2>
          <ul>
            <li>Fixed fee quotes available</li>
            <li>Experienced property solicitors</li>
            <li>Fast turnaround times</li>
            <li>Regular updates throughout the process</li>
            <li>No sale, no fee options available</li>
          </ul>
        </div>
      }
    />
  );
}

export function MortgageAdvicePage() {
  return (
    <SimplePage
      title="Independent Mortgage Advice"
      description="Expert mortgage advice for your property purchase"
      content={
        <div className="text-gray-700">
          <p>
            We work with independent mortgage advisors who can search the whole market to find you the best mortgage deal. Whether you're a first-time buyer or experienced homeowner, our advisors can help.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Services Include</h2>
          <ul>
            <li>Whole of market mortgage search</li>
            <li>First-time buyer specialist advice</li>
            <li>Remortgage and product transfers</li>
            <li>Buy-to-let mortgages</li>
            <li>Protection insurance advice</li>
            <li>Application support and submission</li>
          </ul>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Use a Mortgage Advisor?</h2>
          <p>
            An independent mortgage advisor can save you time and money by searching hundreds of mortgage products to find the best deal for your circumstances. They can also help with complex cases and provide ongoing support throughout your application.
          </p>
        </div>
      }
    />
  );
}

export function BlogPage() {
  return (
    <SimplePage
      title="Property Blog"
      description="Latest property news, tips, and market insights"
      content={
        <div className="text-gray-700">
          <p>
            Welcome to the Cairds property blog. Here you'll find the latest news, expert tips, market insights, and advice on buying, selling, letting, and renting property in Surrey and beyond.
          </p>
          <p className="mt-4">
            Our blog covers everything from first-time buyer guides to property investment advice, local area spotlights, and market trends. Check back regularly for new articles from our team of property experts.
          </p>
        </div>
      }
    />
  );
}
