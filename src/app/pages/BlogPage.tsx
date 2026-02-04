import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Search,
  Tag,
  ChevronRight,
  TrendingUp,
  Clock,
  User,
  BookOpen
} from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { Input } from "@/app/components/ui/input";

// Blog Data
const blogPosts = [
  {
    title: "Leasehold & Freehold Reform Act Explained",
    date: "6 Jan 2026",
    category: "Property News",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
    url: "https://www.cairds.co.uk/blog/what-is-the-leasehold-freehold-reform-act-does-it-affect-selling-my-house/",
    summary: "Essential for buyers and sellers: breaking down the jargon and explaining what the new reforms mean for your property sale.",
  },
  {
    title: "Under Offer vs Sold STC",
    date: "3 Dec 2025",
    category: "Selling Guides",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=800",
    url: "https://www.cairds.co.uk/blog/under-offer-vs-sold-stc-the-key-differences/",
    summary: "Clear explanation of the differences between 'Under Offer' and 'Sold Subject to Contract', and what each stage means.",
  },
  {
    title: "Is Shared Ownership a Good Idea?",
    date: "4 Nov 2025",
    category: "Buying Advice",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=800",
    url: "https://www.cairds.co.uk/blog/is-shared-ownership-a-good-idea/",
    summary: "A practical guide to shared ownership schemes, weighing the pros and cons to help you decide if it's the right choice.",
  },
  {
    title: "Essential Questions to Ask When Buying",
    date: "1 Oct 2025",
    category: "Buying Advice",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=800",
    url: "https://www.cairds.co.uk/blog/questions-to-ask-when-buying-a-house/",
    summary: "Don't get caught out. Here are the essential questions every savvy buyer should ask before making an offer.",
  },
  {
    title: "How Do I Remortgage?",
    date: "1 Sep 2025",
    category: "Finance",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
    url: "https://www.cairds.co.uk/blog/how-do-i-remortgage/",
    summary: "A step-by-step guide to remortgaging, including tips for getting the best deal and timing your switch perfectly.",
  },
  {
    title: "Home Buyers Protection Insurance",
    date: "7 Aug 2025",
    category: "Finance",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
    url: "https://www.cairds.co.uk/blog/home-buyers-protection-insurance-what-is-it-and-do-you-need-it/",
    summary: "What does Home Buyers Protection Insurance cover? We explain whether it's worth considering for your next move.",
  },
];

const featuredPost = {
  title: "London Property Market Forecast 2026",
  date: "15 Jan 2026",
  category: "Market Insights",
  readTime: "8 min read",
  image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070",
  summary: "An in-depth analysis of the property trends shaping Epsom, Ashtead and the wider London commuter belt for the year ahead.",
};

const categories = ["All", "Property News", "Buying Advice", "Selling Guides", "Finance", "Market Insights"];

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">

      {/* Cinematic Hero */}
      <section className="relative h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden bg-[var(--primary)] text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1512453979798-5ea904f18481?q=80&w=2070"
            alt="Library"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)] via-[var(--primary)]/60 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-4xl mx-auto"
          >
            <Badge className="bg-white/10 backdrop-blur-md text-[var(--gold)] border-white/20 px-4 py-2 mb-6 text-xs tracking-widest uppercase font-bold">
              The Journal
            </Badge>
            <h1 className="text-5xl md:text-7xl font-serif font-medium leading-tight mb-6">
              Property <span className="text-[var(--gold)] italic">Insights</span>
            </h1>
            <p className="text-xl text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
              Expert advice, market updates, and practical guides for buyers, sellers, and landlords in Surrey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 -mt-20 relative z-20">
        <div className="container mx-auto px-6 lg:px-12">

          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-white rounded-[32px] overflow-hidden shadow-xl border border-slate-100 mb-20 grid lg:grid-cols-2 gap-0"
          >
            <div className="relative h-[400px] lg:h-auto overflow-hidden">
              <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-6 left-6">
                <Badge className="bg-white/90 backdrop-blur-md text-[var(--primary)] text-xs font-bold uppercase tracking-wider border-0">
                  {featuredPost.category}
                </Badge>
              </div>
            </div>
            <div className="p-10 lg:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-4 text-slate-500 text-sm mb-4 font-medium">
                <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {featuredPost.date}</span>
                <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {featuredPost.readTime}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--primary)] mb-6 hover:text-[var(--gold)] transition-colors cursor-pointer">
                {featuredPost.title}
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                {featuredPost.summary}
              </p>
              <div>
                <Button className="h-12 px-8 rounded-full bg-[var(--primary)] text-white font-bold hover:bg-[var(--primary)]/90">
                  Read Article <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Filtering & Search */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${activeCategory === cat
                      ? "bg-[var(--primary)] text-white shadow-md"
                      : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:border-slate-300"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search articles..."
                className="pl-10 h-11 rounded-full border-slate-200 bg-white"
              />
            </div>
          </div>

          {/* Blog Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts
              .filter(post => activeCategory === "All" || post.category === activeCategory)
              .map((post, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeIn}
                  className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all h-full flex flex-col"
                >
                  <div className="relative h-60 overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[var(--primary)]">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-slate-400 text-xs font-bold uppercase tracking-wider mb-4">
                      <span>{post.date}</span>
                      <span className="h-1 w-1 rounded-full bg-slate-300"></span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-serif font-bold text-[var(--primary)] mb-3 group-hover:text-[var(--gold)] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                      {post.summary}
                    </p>
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-bold text-[var(--primary)] group-hover:text-[var(--gold)] transition-colors mt-auto"
                    >
                      Read More <ChevronRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
          </motion.div>

          {/* Newsletter Signup */}
          <div className="mt-24 bg-[var(--primary)] rounded-3xl p-10 lg:p-16 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--gold)] opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white opacity-5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <TrendingUp className="h-10 w-10 text-[var(--gold)] mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Stay Ahead of the Market</h2>
              <p className="text-white/70 mb-8 text-lg">
                Join 5,000+ local residents. Get the latest property news, market updates, and exclusive invitations delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  placeholder="Enter your email"
                  className="h-12 rounded-full border-white/20 bg-white/10 text-white placeholder:text-white/50 focus:border-[var(--gold)]"
                />
                <Button className="h-12 px-8 rounded-full bg-[var(--gold)] text-[var(--primary)] font-bold hover:bg-white transition-colors">
                  Subscribe
                </Button>
              </div>
              <p className="text-white/40 text-xs mt-6">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
