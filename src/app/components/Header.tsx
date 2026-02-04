import { Link, useLocation } from 'react-router-dom';
import { Menu, User, Phone } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/app/components/ui/navigation-menu';

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Helper to determine active state
  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[var(--primary)] text-white shadow-xl backdrop-blur-xl supports-[backdrop-filter]:bg-[var(--primary)]/90">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group" onClick={scrollToTop}>
            {/* Simple Text Logo or Replace with SVG */}
            <div className="flex flex-col">
              <span className="text-2xl lg:text-3xl font-serif font-bold tracking-tight !text-white group-hover:!text-[var(--gold)] transition-colors">
                Cairds
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold)] font-medium -mt-1 hidden sm:block">
                Estate Agents
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">

                {/* Selling */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-10 px-4 text-sm font-medium !text-white hover:!text-[var(--gold)] !bg-transparent hover:bg-white/5 focus:bg-white/5 data-[state=open]:bg-white/5 transition-all rounded-full">
                    Selling
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-2 p-4 bg-white rounded-2xl shadow-xl border border-slate-100">

                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/selling/house-sales" className="block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-50 group">
                            <div className="text-sm font-bold text-[var(--primary)] group-hover:text-[var(--gold)]">House Sales</div>
                            <p className="line-clamp-2 text-xs leading-snug text-slate-500">
                              Start your journey with a valuation
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/selling-new-build" className="block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-50 group">
                            <div className="text-sm font-bold text-[var(--primary)] group-hover:text-[var(--gold)]">Selling a New Build</div>
                            <p className="line-clamp-2 text-xs leading-snug text-slate-500">
                              Specialist advice for developers
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/selling/land" className="block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-50 group">
                            <div className="text-sm font-bold text-[var(--primary)] group-hover:text-[var(--gold)]">Selling Land</div>
                            <p className="line-clamp-2 text-xs leading-snug text-slate-500">
                              Unlock the potential of your land
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/sold-properties" className="block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-50 group">
                            <div className="text-sm font-bold text-[var(--primary)] group-hover:text-[var(--gold)]">Recently Sold</div>
                            <p className="line-clamp-2 text-xs leading-snug text-slate-500">
                              See our track record in your area
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Buying */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-10 px-4 text-sm font-medium !text-white hover:!text-[var(--gold)] !bg-transparent hover:bg-white/5 focus:bg-white/5 data-[state=open]:bg-white/5 transition-all rounded-full">
                    Buying
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-2 p-4 bg-white rounded-2xl shadow-xl border border-slate-100">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/buying/purchase-property" className="block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-50 group">
                            <div className="text-sm font-bold text-[var(--primary)] group-hover:text-[var(--gold)]">Purchase a Property</div>
                            <p className="line-clamp-2 text-xs leading-snug text-slate-500">
                              Find your dream home in Surrey
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/buying-new-home" className="block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-50 group">
                            <div className="text-sm font-bold text-[var(--primary)] group-hover:text-[var(--gold)]">Buying a New Build</div>
                            <p className="line-clamp-2 text-xs leading-snug text-slate-500">
                              Modern living & developments
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* New Build Homes */}
                <NavigationMenuItem>
                  <Link
                    to="/new-build-homes"
                    className="inline-flex h-10 w-max items-center justify-center rounded-full px-4 py-2 text-sm font-medium !text-white transition-colors hover:bg-white/10 hover:!text-[var(--gold)]"
                  >
                    New Homes
                  </Link>
                </NavigationMenuItem>

                {/* Renting */}
                <NavigationMenuItem>
                  <Link
                    to="/renting"
                    className="inline-flex h-10 w-max items-center justify-center rounded-full px-4 py-2 text-sm font-medium !text-white transition-colors hover:bg-white/10 hover:!text-[var(--gold)]"
                  >
                    Renting
                  </Link>
                </NavigationMenuItem>

                {/* Landlords */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-10 px-4 text-sm font-medium !text-white hover:!text-[var(--gold)] !bg-transparent hover:bg-white/5 focus:bg-white/5 data-[state=open]:bg-white/5 transition-all rounded-full">
                    Landlords
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-2 p-4 bg-white rounded-2xl shadow-xl border border-slate-100">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/landlords/services" className="block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-50 group">
                            <div className="text-sm font-bold text-[var(--primary)] group-hover:text-[var(--gold)]">Landlord Services</div>
                            <p className="line-clamp-2 text-xs leading-snug text-slate-500">
                              Letting & management solutions
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/recently-let" className="block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-50 group">
                            <div className="text-sm font-bold text-[var(--primary)] group-hover:text-[var(--gold)]">Recently Let</div>
                            <p className="line-clamp-2 text-xs leading-snug text-slate-500">
                              Browse our success stories
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Commercial */}
                <NavigationMenuItem>
                  <Link
                    to="/commercial"
                    className="inline-flex h-10 w-max items-center justify-center rounded-full px-4 py-2 text-sm font-medium !text-white transition-colors hover:bg-white/10 hover:!text-[var(--gold)]"
                  >
                    Commercial
                  </Link>
                </NavigationMenuItem>

                {/* About Us */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-10 px-4 text-sm font-medium !text-white hover:!text-[var(--gold)] !bg-transparent hover:bg-white/5 focus:bg-white/5 data-[state=open]:bg-white/5 transition-all rounded-full">
                    About
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[500px] grid-cols-2 gap-2 p-4 bg-white rounded-2xl shadow-xl border border-slate-100">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/independent-mortgages" className="block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-50 group">
                            <div className="text-sm font-bold text-[var(--primary)] group-hover:text-[var(--gold)]">Mortgages</div>
                            <p className="line-clamp-2 text-xs leading-snug text-slate-500">Expert financial advice</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/about-us" className="block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-50 group">
                            <div className="text-sm font-bold text-[var(--primary)] group-hover:text-[var(--gold)]">Our Story</div>
                            <p className="line-clamp-2 text-xs leading-snug text-slate-500">History & values</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/epsom-office" className="block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-50 group">
                            <div className="text-sm font-bold text-[var(--primary)] group-hover:text-[var(--gold)]">Epsom Sales</div>
                            <p className="line-clamp-2 text-xs leading-snug text-slate-500">Contact our sales team</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/epsom-lettings-office" className="block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-50 group">
                            <div className="text-sm font-bold text-[var(--primary)] group-hover:text-[var(--gold)]">Epsom Lettings</div>
                            <p className="line-clamp-2 text-xs leading-snug text-slate-500">Contact our lettings team</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/ashtead-office" className="block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-50 group">
                            <div className="text-sm font-bold text-[var(--primary)] group-hover:text-[var(--gold)]">Ashtead Office</div>
                            <p className="line-clamp-2 text-xs leading-snug text-slate-500">Sales & lettings in Ashtead</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/charity-support" className="block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-50 group">
                            <div className="text-sm font-bold text-[var(--primary)] group-hover:text-[var(--gold)]">Charity Support</div>
                            <p className="line-clamp-2 text-xs leading-snug text-slate-500">Community initiatives</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/blog" className="block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-50 group">
                            <div className="text-sm font-bold text-[var(--primary)] group-hover:text-[var(--gold)]">Blog</div>
                            <p className="line-clamp-2 text-xs leading-snug text-slate-500">Property news & insights</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/reviews" className="block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-50 group">
                            <div className="text-sm font-bold text-[var(--primary)] group-hover:text-[var(--gold)]">Reviews</div>
                            <p className="line-clamp-2 text-xs leading-snug text-slate-500">Client success stories</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <Link to="/contact-us">
              <Button className="hidden lg:flex bg-white/5 border border-white/20 text-white hover:bg-[var(--gold)] hover:border-[var(--gold)] hover:text-[var(--primary)] rounded-full px-6 transition-all duration-300 backdrop-blur-sm font-medium">
                Contact
              </Button>
            </Link>
            <Link to="/selling/house-sales">
              <Button className="hidden md:flex bg-[var(--gold)] hover:bg-white hover:text-[var(--primary)] text-[var(--primary)] font-bold rounded-full border border-[var(--gold)] transition-all">
                Book Valuation
              </Button>
            </Link>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white hover:bg-white/10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'Selling', path: '/selling' },
                { name: 'Buying', path: '/buying' },
                { name: 'New Homes', path: '/new-build-homes' },
                { name: 'Renting', path: '/renting' },
                { name: 'Landlords', path: '/landlords' },
                { name: 'Commercial', path: '/commercial' },
                { name: 'About', path: '/about-us' },
                { name: 'Reviews', path: '/reviews' },
                { name: 'Contact', path: '/contact-us' },
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    scrollToTop();
                  }}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2 px-2">
                <Link to="/selling/house-sales" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-[var(--gold)] text-[var(--primary)] font-bold rounded-lg">Book Valuation</Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
