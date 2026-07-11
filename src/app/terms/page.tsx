"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FileText, Calendar, Clock, UserCheck, User, BookOpen, 
  CreditCard, Award, ShieldAlert, AlertOctagon, Copyright, 
  Scale, RefreshCw, Mail, ArrowUp, CheckCircle2, HelpCircle 
} from "lucide-react";

// --- Static Terms Sections Data ---
const TERMS_SECTIONS = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    icon: UserCheck,
    content: "By accessing and utilizing the NextSkill platform, you explicitly agree to comply with and be legally bound by these Terms & Conditions. If you do not agree with any structural parameter or policy within this document, you must discontinue your use of our platform services immediately."
  },
  {
    id: "accounts",
    title: "2. User Accounts",
    icon: User,
    content: "To unlock engineering pathways, you must provide accurate, current, and complete registration parameters. You are entirely responsible for maintaining the confidentiality of your session authentication credentials. Any operational activity occurring under your profile namespace remains your sole legal responsibility."
  },
  {
    id: "enrollment",
    title: "3. Course Enrollment",
    icon: BookOpen,
    content: "Course registration grants a limited, non-exclusive, non-transferable runtime access license to study the selected engineering curriculum. Your active progress vectors, source code submissions, and repository sync permissions are tied directly to your individual account state variables."
  },
  {
    id: "payments",
    title: "4. Payments & Billing Matrix",
    icon: CreditCard,
    content: "All monetary transitions are finalized through secure encrypted third-party merchant routing gateways. NextSkill reserves the operational authority to modify curriculum pricing models at any time. Price adjustments will not retroactively impact completed purchases or active ongoing subscriptions."
  },
  {
    id: "certificates",
    title: "5. Verified Certificates",
    icon: Award,
    content: "Cryptographically verified completion certificates are exclusively issued to user profiles that successfully complete 100% of the active course modules, assignments, and test suites. NextSkill retains the right to audit progress metrics before generating certificate hashes."
  },
  {
    id: "responsibilities",
    title: "6. User Responsibilities",
    icon: ShieldAlert,
    content: "Students must maintain professional conduct across community channels, Discord nodes, and codebase discussion boards. You agree to respect instructors and fellow peers, and under no circumstances will you share copyrighted lesson stems or internal repository branches."
  },
  {
    id: "prohibited",
    title: "7. Prohibited Activities",
    icon: AlertOctagon,
    content: "Strict platform restrictions are enforced. You are explicitly forbidden from: credential sharing, deploying harmful malicious scripts or payloads, attempting unauthorized system boundary access, scraping structural database records, or abusing platform API endpoints."
  },
  {
    id: "intellectual-property",
    title: "8. Intellectual Property",
    icon: Copyright,
    content: "All curriculum resources, video modules, source code documentation, layout tokens, and graphic components are the exclusive intellectual property of NextSkill or its vetted instructors. Unauthorized replication, redistribution, or commercial resale is strictly prohibited."
  },
  {
    id: "liability",
    title: "9. Limitation of Liability",
    icon: Scale,
    content: "NextSkill and its parent entities shall not be held liable for any indirect, incidental, or consequential damages resulting from localized machine misconfigurations, internet network downtime, unexpected cloud database latency, or misuse of deployed software assets."
  },
  {
    id: "changes",
    title: "10. Changes to Terms",
    icon: RefreshCw,
    content: "We periodically optimize these legal frameworks to reflect updated compliance laws. Amendments take effect immediately upon deployment to this route. Your continued navigation across the learning ecosystem constitutes explicit agreement to the revised parameters."
  }
];

export default function TermsConditionsPage() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState("acceptance");

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      // Simple scroll spy logic for active sidebar tracking
      for (const sec of TERMS_SECTIONS) {
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
      const offset = 90; // offset for sticky navigation header
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
      
      {/* Visual Background Accent Blurs */}
      <div className="absolute top-20 right-[-10%] w-[450px] h-[450px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none print:hidden" />
      <div className="absolute top-[45%] left-[-10%] w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none print:hidden" />

      {/* ================= 1. HERO BANNER ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center space-y-4 print:py-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold tracking-wider text-blue-600 bg-blue-50 border border-blue-200 rounded-full uppercase print:hidden">
          <FileText className="w-3.5 h-3.5" /> Legal Framework
        </span>
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
          Terms & <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent print:text-black">Conditions</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed print:text-xs">
          Please review the systematic operational rules, account criteria responsibilities, and legal bounds governing the NextSkill educational matrix.
        </p>
      </section>

      {/* ================= 2. LEGAL METRICS BAR ================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 print:pb-2">
        <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-wrap gap-4 items-center justify-around shadow-sm max-w-md mx-auto text-xs font-bold text-slate-500 print:shadow-none print:border-none">
          <span className="flex items-center gap-1.5 uppercase tracking-wider"><Calendar className="w-4 h-4 text-blue-600" /> Updated: July 2026</span>
          <div className="h-4 w-px bg-slate-200 hidden sm:block print:hidden" />
          <span className="flex items-center gap-1.5 uppercase tracking-wider"><Clock className="w-4 h-4 text-indigo-600" /> Est. Reading: 5 Mins</span>
        </div>
      </section>

      {/* ================= 3. SIDEBAR NAVIGATION LAYOUT ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Sticky Desktop Sidebar */}
        <aside className="lg:col-span-4 sticky top-28 space-y-4 hidden lg:block print:hidden">
          <div className="bg-white border border-slate-200 rounded-[24px] p-6 shadow-sm space-y-4">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Document Nodes</h3>
            <nav className="space-y-1">
              {TERMS_SECTIONS.map((sec) => {
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

        {/* Content Container Blocks */}
        <div className="col-span-1 lg:col-span-8 space-y-6 max-w-[900px] mx-auto lg:mx-0 w-full">
          
          {/* Mobile Chip Flow List */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4 block lg:hidden shadow-sm space-y-2 print:hidden">
            <h4 className="text-[11px] font-black uppercase text-slate-400 tracking-wider">Navigate Terms</h4>
            <div className="flex flex-wrap gap-1.5">
              {TERMS_SECTIONS.map((sec) => (
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

          {/* Core Text Stack */}
          <div className="space-y-6 bg-white border border-slate-200 rounded-[24px] p-6 sm:p-10 shadow-sm print:shadow-none print:border-none print:p-0">
            {TERMS_SECTIONS.map((sec) => {
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

          {/* ================= 4. LEGAL CONTACT SYSTEM ================= */}
          <div className="bg-white border border-slate-200 rounded-[24px] p-6 sm:p-8 shadow-sm grid grid-cols-1 sm:grid-cols-2 gap-4 print:shadow-none print:border-t print:border-slate-200 print:rounded-none">
            <div className="space-y-1">
              <h4 className="text-sm font-black text-slate-900 tracking-tight flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-indigo-600 print:text-black" /> Legal Operations Council
              </h4>
              <p className="text-xs text-slate-500 leading-normal">For inquiries concerning copyright tokens or intellectual parameters.</p>
              <p className="text-xs font-bold text-blue-600 select-all font-mono">legal@nextskill.com</p>
            </div>
            
            <div className="space-y-1">
              <h4 className="text-sm font-black text-slate-900 tracking-tight flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-amber-600 print:text-black" /> Academic Support Desk
              </h4>
              <p className="text-xs text-slate-500 leading-normal">For immediate account status questions or standard platform resets.</p>
              <p className="text-xs font-bold text-blue-600 select-all font-mono">support@nextskill.com</p>
            </div>
          </div>

          {/* ================= 5. ENFORCEMENT COMPLIANCE NOTICE ================= */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[24px] p-6 sm:p-8 text-white relative overflow-hidden shadow-md print:hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_120%,rgba(245,158,11,0.1),transparent)]" />
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
              <div className="space-y-1">
                <h4 className="text-base font-black tracking-tight flex items-center justify-center sm:justify-start gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" /> Consent Acknowledgement
                </h4>
                <p className="text-blue-100 text-xs max-w-sm leading-relaxed">
                  By executing terminal connections and course configurations, you maintain continuous validation of these operational metrics.
                </p>
              </div>
              <Link href="/support" className="px-5 py-3 bg-white hover:bg-slate-50 text-blue-600 rounded-xl text-xs font-bold transition-all whitespace-nowrap active:scale-95 shadow-sm">
                Explore Support Hub
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Floating Scroll-to-Top Button */}
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