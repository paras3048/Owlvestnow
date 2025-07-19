import React, { useState, useEffect } from 'react';
import { X, Twitter, MessageCircle, Mail, Users, ChevronDown,Activity, ExternalLink, Calendar, Target, Shield, Brain, BarChart3, Globe, ShieldCheck, BarChart2, Code2, Layers } from 'lucide-react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add mouse move listener
    document.addEventListener('mousemove', updateCursorPosition);

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [role="button"]');
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'Vision', id: 'vision' },
    { label: 'What Are We Building', id: 'building' },
    { label: 'Co-Founders', id: 'cofounders' },
    { label: 'RMS', id: 'roadmap' },
    { label: 'Whitepaper', id: 'whitepaper' },
    { label: 'Contact', id: 'contact' }
  ];

  const socialLinks = [
    { icon: Twitter, label: 'Twitter/X', url: 'https://x.com/owlvestnow' },
    { icon: MessageCircle, label: 'Telegram', url: 'https://t.me/owlvestnow' },
    { icon: Users, label: 'Discord', url: 'https://discord.gg/rYcg8MaDay' },
    { icon: Mail, label: 'LinkedIn', url: 'https://linkedin.com/company/owlvest' }
  ];

  const features = [
    {
      icon: BarChart2,
      title: 'On-Chain Insights',
      description: 'Track startup performance, funding progress, and milestones with full transparency.'
    },
    {
      icon: ShieldCheck,
      title: 'Verified Access',
      description: 'Invest securely in vetted startups and real-world assets through tokenized ownership.'
    },
    {
      icon: Code2,
      title: 'Smart Execution',
      description: 'Automated deals, treasury visibility, and secure fund control via smart contracts.'
    },
    {
      icon: Layers,
      title: 'Tokenized Equity',
      description: 'Own NFT/SFT-based equity with optional trading and built-in liquidity access.'
    },
    {
      icon: Users,
      title: 'Community Governance',
      description: 'Shape the platform’s future through decentralized, protocol-level decision-making'
    }
  ];

  const coFounders = [
    {
      name: 'Talha Aftab',
      title: 'CEO & Co-founder',
      bio: 'Business Administration student with deep experience in legal-tech, token strategy, and product architecture. Formerly with Barings Law (UK) and Sensible International , Talha built Owlvest’s token model and platform ideation.',
      avatar: '/images/Talha.jpg'
    },
    {
      name: 'Bilal Aftab',
      title: 'COO & Co-founder',
      bio: 'MSc International Business (University of Edinburgh), a recognized trader on Binance and NYSE investor through Robinhood. Bilal oversees business development, partnerships, and fiscal expansion.',
      avatar: '/images/Aftab.jpg'
    }
  ];

  const roadmapItems = [
    {
      quarter: 'Q3 2025',
      title: 'MVP Launch',
      description: 'Core platform launch with basic DeFi yield farming capabilities'
    },
    {
      quarter: 'Q4 2025',
      title: 'Token Launch',
      description: 'OWLVEST token public sale and DEX listing with governance features'
    },
    {
      quarter: 'Q1 2026',
      title: 'Community Portal',
      description: 'Full community dashboard with social features and DAO governance'
    },
    {
      quarter: 'Q2 2026',
      title: 'AI Integration',
      description: 'Advanced AI-powered portfolio optimization and risk management tools'
    },
    {
      quarter: 'Q3 2026',
      title: 'Mobile App',
      description: 'Native iOS and Android apps with full platform functionality'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-x-hidden cursor-none relative">
      {/* Dark Glowing Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-blue-600/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-purple-500/6 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-indigo-600/8 rounded-full blur-3xl"></div>
      </div>
      
      {/* Custom Cursor */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-all duration-150 ease-out ${
          isHovering ? 'scale-150' : 'scale-100'
        }`}
        style={{
          transform: `translate(${cursorPosition.x - 8}px, ${cursorPosition.y - 8}px)`,
        }}
      >
        <div
          className={`w-4 h-4 rounded-full transition-all duration-150 ${
            isHovering 
              ? 'bg-purple-400 shadow-[0_0_20px_rgba(116,76,249,0.8)]' 
              : 'bg-purple-500 shadow-[0_0_15px_rgba(116,76,249,0.6)]'
          }`}
          style={{
            background: isHovering 
              ? 'radial-gradient(circle, rgba(116,76,249,0.9) 0%, rgba(116,76,249,0.4) 70%, transparent 100%)'
              : 'radial-gradient(circle, rgba(116,76,249,0.8) 0%, rgba(116,76,249,0.3) 70%, transparent 100%)',
          }}
        />
      </div>

      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Hamburger Button for Mobile */}
<div className="flex md:hidden">
  <button
    aria-label="Open navigation menu"
    onClick={() => setMobileNavOpen(!mobileNavOpen)}
    className="p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
  >
    {/* Use a Lucide icon, for example <ChevronDown /> or your preferred menu icon */}
    <svg width={28} height={28} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="7" width="20" height="2" rx="1" />
      <rect x="4" y="13" width="20" height="2" rx="1" />
      <rect x="4" y="19" width="20" height="2" rx="1" />
    </svg>
  </button>
</div>

            {/* Left - Logo */}
            <div className="flex-shrink-0">
              <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center">
  <img
    src="/images/logo.jpg"
    alt="Owlvest Logo"
    className="w-full h-full object-contain"
    draggable={false}
  />
</div>

            </div>

            {/* Center - Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Right - Connect Button */}
            <div className="flex-shrink-0">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Connect with Owlvest
              </button>
            </div>
          </div>
        </div>
      </header>
{/* Mobile Nav Drawer */}
{mobileNavOpen && (
  <div className="fixed top-16 left-0 w-full bg-black/90 z-50 flex flex-col items-center py-8 space-y-6 md:hidden">
    {navItems.map((item) => (
      <button
        key={item.id}
        onClick={() => {
          scrollToSection(item.id);
          setMobileNavOpen(false);
        }}
        className="text-white text-lg font-semibold py-2 w-full text-center hover:bg-white/10 transition"
      >
        {item.label}
      </button>
    ))}
  </div>
)}

{/* Hero Section – Fixed for Single-Line Subline */}
<section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
  
  {/* Futuristic Background Shapes */}
  <div className="absolute inset-0 z-0 pointer-events-none">
    <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
    <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-2xl animate-pulse delay-200" />
    <div className="absolute top-1/2 left-1/5 w-64 h-64 bg-pink-500/10 rounded-full blur-2xl animate-pulse delay-500" />
  </div>

  {/* Content */}
  <div className="text-center z-10">
    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent animate-gradient">
      O W L V E S T
    </h1>
<p className="text-xl md:text-2xl font-semibold mx-auto md:whitespace-nowrap whitespace-normal bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent animate-gradient tracking-wide shadow-md">
  Unlocking global startup investing through decentralized finance
</p>
  </div>
</section>



      {/* Vision Section */}
      <section id="vision" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Vision
          </h2>
          <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              At Owlvest, we’re building a decentralized fintech platform that unlocks global access to early-stage, revenue-generating startups. Our mission is to democratize startup investing by merging blockchain, compliance, and real-time transparency, removing traditional gatekeepers and enabling scalable, trusted, and tokenized access to high-potential opportunities across sectors and borders.
            </p>
          </div>
        </div>
      </section>

      {/* What Are We Building Section */}
      <section id="building" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            What Are We Building
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Co-Founders Section */}
      <section id="cofounders" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Co-Founders
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {coFounders.map((founder, index) => (
              <div
                key={index}
                className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl text-center hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={founder.avatar}
                  alt={founder.name}
                  className="w-32 h-32 rounded-lg mx-auto mb-6 border-4 border-purple-500/30 object-cover"
                />
                <h3 className="text-2xl font-bold mb-3 text-white">{founder.name}</h3>
                <p className="text-purple-400 font-medium mb-4 text-lg">{founder.title}</p>
                <p className="text-gray-300 leading-relaxed">{founder.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Token Risk Mitigation Strategy (RMS) Section */}
<section id="roadmap" className="py-20 px-4 sm:px-6 lg:px-8">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
      Token Risk Mitigation Strategy (RMS)
    </h2>
    
    <div className="space-y-8">

      {/* Extended Lockups */}
      <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300 flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
            {/* Lockups Icon */}
            <ShieldCheck className="w-6 h-6 text-white" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-1">Lockups</h3>
          <p className="text-gray-300 leading-relaxed">Extended lockups for team and partners</p>
        </div>
      </div>

      {/* Smart Contract Audits */}
      <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300 flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
            {/* Audits Icon */}
            <Activity className="w-6 h-6 text-white" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-1">Audits</h3>
          <p className="text-gray-300 leading-relaxed">Smart contract audits and compliance gating</p>
        </div>
      </div>

      {/* Real-time Treasury Tracking */}
      <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300 flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
            {/* Tracking Icon */}
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-1">Tracking</h3>
          <p className="text-gray-300 leading-relaxed">Real-time treasury tracking via dashboards</p>
        </div>
      </div>

      {/* Multisig Operations */}
      <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300 flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
            {/* Multisig Icon */}
            <Users className="w-6 h-6 text-white" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-1">Multisig</h3>
          <p className="text-gray-300 leading-relaxed">Multisig wallet operations with DAO pathways</p>
        </div>
      </div>

      {/* Risk Protection */}
      <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300 flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
            {/* Protection Icon */}
            <Shield className="w-6 h-6 text-white" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-1">Protection</h3>
          <p className="text-gray-300 leading-relaxed">Risk scoring and investor protection models</p>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* Whitepaper Section */}
      <section id="whitepaper" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Whitepaper
          </h2>
          
          <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl">
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Explore our whitepaper to dive into Owlvest’s technical architecture, tokenomics, and long-term vision
            </p>
            
            <a
  href="https://www.notion.so/Owlvest-Official-Whitepaper-232acab71bfb80058b0ad4525985a051"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex"
>
  <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
    <span className="mr-2">Read our full Whitepaper</span>
    <ExternalLink className="w-5 h-5" />
  </button>
</a>

          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative mb-12">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="h-1 w-32 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
            </div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Coming Soon
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            The future of decentralized investment is almost here
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Contact
          </h2>
          
          <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl">
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Ready to be part of the future of decentralized investing? Connect with our team today.
            </p>
            
            <div className="mb-8">
              <a
                href="mailto:hello@owlvest.com"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg mr-4"
              >
                <Mail className="w-5 h-5 mr-2" />
                hello@owlvest.com
              </a>
            </div>
            
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="backdrop-blur-xl bg-white/5 border-t border-white/10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center">
  <img
    src="/images/logo.jpg"
    alt="Owlvest Logo"
    className="w-full h-full object-contain"
    draggable={false}
  />
</div>

              <p className="text-gray-400 text-sm">© 2025 OWLVEST. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Social Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
          
          <div className="relative backdrop-blur-xl bg-black/60 rounded-2xl p-8 border border-white/20 shadow-2xl max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-white">Connect with Owlvest</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                    <social.icon className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-white">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;