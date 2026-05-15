import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Navbar/Sidebar';
import { 
  MdCheckCircle, 
  MdCancel, 
  MdOutlineSecurity, 
  MdHeadsetMic, 
  MdRocketLaunch, 
  MdBarChart 
} from "react-icons/md";
import { FaCrown, FaGem, FaBolt } from "react-icons/fa";

const Subscription = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Initiate",
      tagline: "Begin your creative journey",
      price: "0.00",
      period: "/month",
      icon: <FaBolt className="text-3xl text-gray-400" />,
      features: [
        { text: "Unlimited universe updates", included: true },
        { text: "500 MB Cloud storage", included: true },
        { text: "Community support access", included: true },
        { text: "Basic sector analytics", included: false },
        { text: "Custom brand identity", included: false },
      ],
      buttonText: "Begin Protocol",
      footer: "No credit card required",
      isPopular: false,
    },
    {
      name: "Elite",
      tagline: "Optimized for high-impact creators",
      price: isYearly ? "14.99" : "19.99",
      period: "/month",
      icon: <FaCrown className="text-3xl text-purple-500" />,
      features: [
        { text: "Priority universe updates", included: true },
        { text: "50 GB High-speed storage", included: true },
        { text: "Dedicated support node", included: true },
        { text: "Advanced sector analytics", included: true },
        { text: "Standard brand identity", included: true },
      ],
      buttonText: "Authorize Elite",
      footer: "Cancel anytime",
      isPopular: true,
    },
    {
      name: "Nebula",
      tagline: "Total creative dominance",
      price: isYearly ? "79.99" : "99.99",
      period: isYearly ? "/year" : "/month",
      icon: <FaGem className="text-3xl text-purple-400" />,
      features: [
        { text: "Early universe updates", included: true },
        { text: "Unlimited high-speed storage", included: true },
        { text: "Elite support concierge", included: true },
        { text: "Real-time global analytics", included: true },
        { text: "Full custom brand control", included: true },
      ],
      buttonText: "Go Nebula",
      footer: "Cancel anytime",
      isPopular: false,
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#050608] text-white font-sans overflow-x-hidden selection:bg-purple-500/30">
      <Navbar />
      <div className="flex">
        <Sidebar />
        
        <main className="w-[82%] ml-[18%] pt-32 px-16 pb-32 z-10 relative">
          {/* Cinematic Background Ambience */}
          <div className="fixed inset-0 pointer-events-none z-0">
            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-purple-900/5 rounded-full blur-[150px]"></div>
            <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-indigo-900/5 rounded-full blur-[120px]"></div>
          </div>

          {/* Header */}
          <div className="text-center mb-24 relative z-10">
             <div className="flex items-center justify-center gap-3 mb-6">
                <span className="w-12 h-[2px] bg-purple-600 rounded-full shadow-[0_0_15px_#9333ea]"></span>
                <span className="text-[11px] font-black uppercase tracking-[0.4em] text-purple-500">Subscription Protocols</span>
                <span className="w-12 h-[2px] bg-purple-600 rounded-full shadow-[0_0_15px_#9333ea]"></span>
             </div>
             <h1 className="text-6xl font-black mb-6 tracking-tighter uppercase leading-[1.1]">
               Select Your <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 italic">Power Tier</span>
             </h1>
             <p className="text-gray-500 text-lg font-bold tracking-tight max-w-2xl mx-auto opacity-80 uppercase text-[12px] tracking-[0.2em]">Unlock the full potential of the media universe</p>
             
             {/* Toggle Node */}
             <div className="mt-14 flex items-center justify-center gap-4">
                <div className="bg-[#0a0c10] p-2 rounded-3xl flex items-center border border-white/5 shadow-2xl relative overflow-hidden group">
                   <div className="absolute inset-0 bg-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   <button 
                    onClick={() => setIsYearly(false)}
                    className={`px-10 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all relative z-10 ${!isYearly ? 'bg-purple-600 text-white shadow-[0_10px_25px_rgba(147,51,234,0.3)]' : 'text-gray-700 hover:text-gray-400'}`}
                   >
                     Monthly
                   </button>
                   <button 
                    onClick={() => setIsYearly(true)}
                    className={`px-10 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all flex items-center gap-3 relative z-10 ${isYearly ? 'bg-purple-600 text-white shadow-[0_10px_25px_rgba(147,51,234,0.3)]' : 'text-gray-700 hover:text-gray-400'}`}
                   >
                     Annually <span className={`text-[8px] px-2 py-1 rounded-md transition-colors ${isYearly ? 'bg-white/20 text-white' : 'bg-purple-900/20 text-purple-600'}`}>Save 20%</span>
                   </button>
                </div>
             </div>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto mb-32 relative z-10">
            {plans.map((plan, idx) => (
              <div 
                key={idx} 
                className={`relative bg-[#0a0c10]/40 backdrop-blur-3xl rounded-[3.5rem] p-12 border transition-all duration-700 hover:-translate-y-4 group overflow-hidden ${
                  plan.isPopular 
                  ? 'border-purple-500/40 shadow-[0_40px_100px_rgba(147,51,234,0.15)] scale-105 z-20' 
                  : 'border-white/5 shadow-2xl hover:border-purple-500/20'
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-1 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
                )}
                
                <div className="text-center mb-14 relative z-10">
                  <div className={`w-20 h-20 rounded-[2.5rem] mx-auto mb-8 flex items-center justify-center transition-all duration-700 group-hover:rotate-[15deg] group-hover:scale-110 shadow-2xl ${
                    plan.isPopular ? 'bg-purple-600 shadow-purple-600/20' : 'bg-white/[0.03] border border-white/5'
                  }`}>
                     {plan.icon}
                  </div>
                  <h3 className="text-3xl font-black tracking-tighter mb-2 uppercase">{plan.name}</h3>
                  <p className="text-gray-600 text-[9px] font-black tracking-[0.3em] uppercase mb-10 opacity-60 group-hover:text-purple-500/60 transition-colors">{plan.tagline}</p>
                  <div className="flex items-end justify-center gap-2">
                     <span className="text-7xl font-black tracking-tighter">${plan.price.split('.')[0]}<span className="text-3xl opacity-50">.{plan.price.split('.')[1]}</span></span>
                     <span className="text-gray-700 font-black text-[10px] uppercase tracking-widest pb-3">{plan.period}</span>
                  </div>
                </div>

                <div className="space-y-6 mb-16 relative z-10">
                   {plan.features.map((feature, fIdx) => (
                     <div key={fIdx} className="flex items-center gap-5 text-[11px] font-black uppercase tracking-widest">
                        {feature.included 
                          ? <MdCheckCircle className="text-purple-500 text-xl flex-shrink-0" /> 
                          : <MdCancel className="text-gray-800 text-xl flex-shrink-0" />
                        }
                        <span className={feature.included ? 'text-gray-300' : 'text-gray-800 line-through'}>{feature.text}</span>
                     </div>
                   ))}
                </div>

                <button className={`w-full py-5 rounded-3xl font-black text-xs uppercase tracking-[0.3em] transition-all duration-500 shadow-2xl relative z-10 active:scale-95 border ${
                  plan.isPopular 
                  ? 'bg-purple-600 hover:bg-purple-500 text-white border-white/10 shadow-purple-900/30' 
                  : 'bg-white/[0.03] text-gray-500 hover:text-white border-white/5 hover:bg-white/[0.08]'
                }`}>
                  {plan.buttonText}
                </button>
                <p className="text-center text-[9px] text-gray-700 font-black uppercase mt-6 tracking-[0.2em] relative z-10">{plan.footer}</p>
                
                {/* Decorative Elements */}
                <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-purple-600/5 blur-[60px] rounded-full group-hover:bg-purple-600/10 transition-all duration-700"></div>
              </div>
            ))}
          </div>

          {/* Trust Features Console */}
          <div className="bg-[#0a0c10]/40 backdrop-blur-3xl border border-white/5 rounded-[4rem] p-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10 overflow-hidden group">
             <div className="absolute inset-0 bg-gradient-to-br from-purple-600/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
             {[
               { title: "Protocol Security", desc: "Military-grade encryption for your digital legacy", icon: <MdOutlineSecurity /> },
               { title: "Elite Support", desc: "Direct access to our senior engineering nodes", icon: <MdHeadsetMic /> },
               { title: "Signal Growth", desc: "Optimized delivery for maximum global reach", icon: <MdRocketLaunch /> },
               { title: "Neural Analytics", desc: "High-precision data processing for visionaries", icon: <MdBarChart /> }
             ].map((feature, idx) => (
               <div key={idx} className="flex flex-col items-center text-center group/item cursor-default relative z-10">
                  <div className="w-16 h-16 bg-white/[0.03] border border-white/5 rounded-[1.5rem] mb-6 flex items-center justify-center text-2xl text-gray-700 group-hover/item:bg-purple-600 group-hover/item:text-white group-hover/item:scale-110 transition-all duration-500 shadow-xl group-hover/item:shadow-purple-600/20">
                    {feature.icon}
                  </div>
                  <h4 className="text-[11px] font-black mb-3 uppercase tracking-[0.2em] text-white/80 group-hover/item:text-purple-400 transition-colors">{feature.title}</h4>
                  <p className="text-[10px] text-gray-600 font-bold leading-relaxed uppercase tracking-wider opacity-60 group-hover/item:opacity-100 transition-opacity">{feature.desc}</p>
               </div>
             ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Subscription;