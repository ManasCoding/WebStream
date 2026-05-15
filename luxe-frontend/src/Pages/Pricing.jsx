import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlay, FaCheckCircle, FaStar, FaCrown, FaGem } from 'react-icons/fa';
import { CiSearch } from 'react-icons/ci';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      icon: <FaStar className="text-blue-500" />,
      price: "Free",
      features: ["720p Streaming", "Upload up to 2GB", "Basic Analytics", "Community Support"],
      cta: "Current Plan",
      featured: false
    },
    {
      name: "Pro",
      icon: <FaCrown className="text-amber-500" />,
      price: "$12.99",
      features: ["4K HDR Streaming", "Unlimited Uploads", "Advanced Analytics", "Priority Support", "No Ads"],
      cta: "Upgrade to Pro",
      featured: true
    },
    {
      name: "Enterprise",
      icon: <FaGem className="text-emerald-500" />,
      price: "$49.99",
      features: ["Custom Branding", "API Access", "Dedicated Manager", "Team Collaboration", "SLA Guarantee"],
      cta: "Contact Sales",
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-transparent text-white font-sans selection:bg-blue-500/30 overflow-x-hidden relative">
      {/* Dynamic Glow Orbs */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-pink-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse delay-700"></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#02040a]/80 backdrop-blur-2xl border-b border-white/5 px-6 md:px-16 py-5 flex justify-between items-center">
        <div className="flex items-center gap-12">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-lg shadow-lg shadow-blue-600/20 group-hover:scale-105 transition-transform">
              <FaPlay className="text-white text-xs ml-0.5" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-white">
              Web<span className="text-blue-500">Stream</span>
            </span>
          </Link>

          <ul className="hidden xl:flex items-center gap-8 text-[13px] font-semibold text-gray-400">
            <li><Link to="/" className="hover:text-white transition-colors cursor-pointer">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors cursor-pointer">About</Link></li>
            <li><Link to="/features" className="hover:text-white transition-colors cursor-pointer">Features</Link></li>
            <li><Link to="/categories" className="hover:text-white transition-colors cursor-pointer">Categories</Link></li>
            <li><Link to="/pricing" className="text-white transition-colors cursor-pointer">Pricing</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors cursor-pointer">Contact</Link></li>
          </ul>
        </div>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center bg-white/5 border border-white/10 rounded-xl px-4 py-2 w-72 group focus-within:border-blue-500/50 transition-all shadow-inner">
            <input 
              type="text" 
              placeholder="Search videos, channels..." 
              className="bg-transparent border-none outline-none text-xs w-full text-gray-200 placeholder:text-gray-500 font-medium"
            />
            <CiSearch className="text-gray-400 text-lg ml-2 hover:text-white transition-colors cursor-pointer" />
          </div>
          <div className="flex items-center gap-6">
            <Link to="/login" className="text-gray-300 hover:text-white text-sm font-bold transition-all">Login</Link>
            <Link to="/signup" className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-2.5 rounded-xl text-sm font-bold shadow-xl shadow-blue-600/20 transition-all active:scale-95">Sign Up</Link>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            Simple <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Pricing</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
            Choose the perfect plan for your streaming needs. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-20">
          {plans.map((plan, index) => (
            <div key={index} className={`bg-[#0a0c10] border ${plan.featured ? 'border-blue-500/50 scale-105 shadow-[0_0_50px_rgba(59,130,246,0.15)]' : 'border-white/5'} p-10 rounded-[3rem] transition-all relative overflow-hidden`}>
              {plan.featured && (
                <div className="absolute top-6 right-6 bg-blue-600 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                  Popular
                </div>
              )}
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-3xl mb-8">
                {plan.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-black">{plan.price}</span>
                {plan.price !== "Free" && <span className="text-gray-500 text-sm font-medium">/mo</span>}
              </div>
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3 text-sm text-gray-400 font-medium">
                    <FaCheckCircle className="text-blue-500 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-2xl font-bold transition-all ${plan.featured ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 hover:bg-blue-700' : 'bg-white/5 text-gray-300 hover:bg-white/10'}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-500 text-sm">
            All plans include a 14-day money-back guarantee. <br />
            Need a custom solution? <Link to="/contact" className="text-blue-500 hover:underline">Talk to us</Link>.
          </p>
        </div>
      </main>

      <footer className="py-10 text-center border-t border-white/5 bg-[#02040a] relative z-10">
        <p className="text-gray-600 text-[11px] font-medium tracking-wider">© 2024 WebStream. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Pricing;
