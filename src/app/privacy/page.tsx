"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Shield, Calendar, FileText, Database, Eye, Cookie, 
  Lock, Globe, Scale, RefreshCw, Mail, ArrowUp, CheckCircle, HelpCircle
} from "lucide-react";

// --- Static Privacy Sections Data ---
const PRIVACY_SECTIONS = [
  {
    id: "introduction",
    title: "1. Introduction",
    icon: FileText,
    content: "Welcome to NextSkill. We respect your digital privacy and are deeply committed to protecting the personal information you share with our platforms. This Privacy Policy outlines the explicit data collection boundaries, processing protocols, and protective storage metrics managed across our educational infrastructure networks when you interface with our services."
  },
  {
    id: "information-we-collect",
    title: "2. Information We Collect",
    icon: Database,
    content: "To deliver optimal engineering curricula workflows, NextSkill collects minimal essential identifier properties. This includes account profile credentials (full name, email addresses, and optional developer profile metadata), runtime learning progress metrics (course engagement scores, quiz tracking data, and completion timestamps), and basic environment logs (browser agents, network routing parameters, and analytical request payloads)."
  },
  {
    id: "how-we-use-information",
    title: "3. How We Use Information",
    icon: Eye,
    content: "Your collected data parameters are applied strictly to maintain ecosystem reliability. Core operational utilization vectors include: authenticating portal user sessions, initializing active course enrollment trees, generating dynamic cryptographically verified certificates, processing technical support ticket queries, and sending non-promotional runtime infrastructure event updates."
  },
  {
    id: "cookies",
    title: "4. Cookie Policies",
    icon: Cookie,
    content: "NextSkill implements standard browser cookies and local storage tokens to preserve persistence states. These small localized payloads permit our system nodes to recognize active authorization tokens across routing shifts, monitor local platform performance, remember workspace interface preferences, and generate unified anonymous diagnostic analytics."
  },
  {
    id: "data-security",
    title: "5. Data Security Operations",
    icon: Lock,
    content: "We enforce strict security methodologies to safeguard NextSkill parameters. All transmission processes are isolated inside Secure Socket Layer (SSL/TLS) encryption loops. Databases operate under strict role-based access control paradigms, state variables are hashed natively using industry-standard cryptographic keys, and token-based parameters govern third-party pipeline bridges."
  },
  {
    id: "third-party-services",
    title: "6. Third-Party Integrations",
    icon: Globe,
    content: "Our static codebase connects securely to reliable third-party infrastructure dependencies for specific core processing workflows. These trusted networks include Firebase for distributed session management, MongoDB systems for raw curriculum tracking parameters, Google Analytics for global request tracing, and Stripe pipelines for secure runtime invoice checkouts."
  },
  {
    id: "your-rights",
    title: "7. Your Rights & Profiles",
    icon: Scale,
    content: "As an engineering platform student, you maintain complete mastery over your information assets. You retain the right to modify profile values through your account hub, request complete exports of collected course performance indicators, revoke authorization preferences, or request systematic permanent profile deletion from our system nodes."
  },
  {
    id: "policy-updates",
    title: "8. Policy Framework Updates",
    icon: RefreshCw,
    content: "NextSkill reserves the structural authority to periodically update this privacy framework to accommodate new software compliance metrics. When adjustments occur, modified versions will be deployed instantly to this route, resetting the verification notice metadata at the top block of the page layer."
  }
];

export default function PrivacyPolicyPage() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState("introduction");

  // --- Scroll Listeners for UI Features ---
  useEffect(() => {
    const handleScroll = () => {
      // Toggle back to top visible state
      setShowScrollTop(window.scrollY > 400);

      // Simple scroll spy logic for active section tracking
      for (const sec of PRIVACY_SECTIONS) {
        const el = document.getElementById(sec.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 200) {
            setActiveSection(sec.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToElement = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 90; // account for fixed header layout
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="pt-20 bg-slate-50 text-slate-800 min-h-screen relative selection:bg-blue-500/10 print:bg-white print:text-black">
      
      {/* Dynamic Background Accents */}
      <div className="absolute top-20 left-[-10%] w-[450px] h-[450px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none print:hidden" />
      <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none print:hidden" />

      {/* ================= 1. HERO BANNER ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center space-y-4 print:py-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold tracking-wider text-blue-600 bg-blue-50 border border-blue-200 rounded-full uppercase print:hidden">
          <Shield className="w-3.5 h-3.5" /> Security Protocol
        </span>
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
          Your Privacy <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent print:text-black">Matters to Us</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed print:text-xs">
          NextSkill values your user privacy bounds. Explore our structural documentation details outlining exactly how metrics are collected, guarded, and maintained.
        </p>
      </section>

      {/* ================= 2. LAST UPDATED METADATA CARD ================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 print:pb-2">
        <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center justify-between shadow-sm max-w-xs mx-auto text-xs font-bold text-slate-500 print:shadow-none print:border-none">
          <span className="flex items-center gap-1.5 uppercase tracking-wider"><Calendar className="w-4 h-4 text-blue-600" /> Last Updated</span>
          <span className="text-slate-800 bg-slate-100 px-2.5 py-1 rounded-md font-mono">July 2026</span>
        </div>
      </section>

      {/* ================= 3. SIDEBAR LAYOUT ARCHITECTURE ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Sticky Table of Contents Sidebar */}
        <aside className="lg:col-span-4 sticky top-28 space-y-4 hidden lg:block print:hidden">
          <div className="bg-white border border-slate-200 rounded-[24px] p-6 shadow-sm space-y-4">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Table of Contents</h3>
            <nav className="space-y-1">
              {PRIVACY_SECTIONS.map((sec) => {
                const isActive = activeSection === sec.id;
                return (
                  <button
                    key={sec.id}
                    onClick={() => scrollToElement(sec.id)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-bold tracking-wide transition-all ${isActive ? "bg-blue-600 text-white shadow-sm" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"}`}
                  >
                    {sec.title}
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* Core Main Privacy Content Container */}
        <div className="col-span-1 lg:col-span-8 space-y-6 max-w-[900px] mx-auto lg:mx-0 w-full">
          
          {/* Mobile Accordion/Flow List for Table of Contents */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4 block lg:hidden shadow-sm space-y-2 print:hidden">
            <h4 className="text-[11px] font-black uppercase text-slate-400 tracking-wider">Document Jump Sections</h4>
            <div className="flex flex-wrap gap-1.5">
              {PRIVACY_SECTIONS.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => scrollToElement(sec.id)}
                  className="px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-600 active:bg-blue-50 active:text-blue-600"
                >
                  {sec.title.split(". ")[1]}
                </button>
              ))}
            </div>
          </div>

          {/* Privacy Text Stack */}
          <div className="space-y-6 bg-white border border-slate-200 rounded-[24px] p-6 sm:p-10 shadow-sm print:shadow-none print:border-none print:p-0">
            {PRIVACY_SECTIONS.map((sec) => {
              const IconComponent = sec.icon;
              return (
                <div 
                  key={sec.id} 
                  id={sec.id} 
                  className="space-y-3 pt-6 first:pt-0 border-t border-slate-100 first:border-t-0 scroll-mt-28 print:pt-4"
                >
                  <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight flex items-center gap-2">
                    <IconComponent className="w-4 h-4 text-blue-600 print:text-black" /> {sec.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed text-justify font-normal">
                    {sec.content}
                  </p>
                </div>
              );
            })}
          </div>

          {/* ================= 4. CONTACT INFORMATION NODES ================= */}
          <div className="bg-white border border-slate-200 rounded-[24px] p-6 sm:p-8 shadow-sm grid grid-cols-1 sm:grid-cols-2 gap-4 print:shadow-none print:border-t print:border-slate-200 print:rounded-none">
            <div className="space-y-1">
              <h4 className="text-sm font-black text-slate-900 tracking-tight flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-indigo-600 print:text-black" /> Privacy Officer Node
              </h4>
              <p className="text-xs text-slate-500 leading-normal">Reach out regarding standard operational security framework guidelines.</p>
              <p className="text-xs font-bold text-blue-600 select-all font-mono">privacy@nextskill.com</p>
            </div>
            
            <div className="space-y-1">
              <h4 className="text-sm font-black text-slate-900 tracking-tight flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-amber-600 print:text-black" /> Core Support Channels
              </h4>
              <p className="text-xs text-slate-500 leading-normal">For standard student account assistance or parameter reset queries.</p>
              <p className="text-xs font-bold text-blue-600 select-all font-mono">support@nextskill.com</p>
            </div>
          </div>

          {/* ================= 5. ACCEPTANCE POLICY MATRICES ================= */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[24px] p-6 sm:p-8 text-white relative overflow-hidden shadow-md print:hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_120%,rgba(245,158,11,0.1),transparent)]" />
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
              <div className="space-y-1">
                <h4 className="text-base font-black tracking-tight flex items-center justify-center sm:justify-start gap-1.5">
                  <CheckCircle className="w-4 h-4 text-amber-400" /> Acceptance Matrix
                </h4>
                <p className="text-blue-100 text-xs max-w-sm leading-relaxed">
                  By interfacing with the active NextSkill learning repository, you implicitly accept the data processing terms outlined above.
                </p>
              </div>
              <Link href="/contact" className="px-5 py-3 bg-white hover:bg-slate-50 text-blue-600 rounded-xl text-xs font-bold transition-all whitespace-nowrap active:scale-95 shadow-sm">
                Contact Technical Hub
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Dynamic Back-To-Top Trigger Floating Module */}
      <div className={`fixed bottom-6 right-6 z-50 print:hidden transition-all duration-300 ${showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-10 h-10 bg-slate-900 text-white rounded-xl shadow-lg border border-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors group active:scale-95"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4 transform group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>

    </div>
  );
}