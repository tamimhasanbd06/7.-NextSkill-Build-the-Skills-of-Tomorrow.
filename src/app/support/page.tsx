"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, BookOpen, User, CreditCard, Award, Wrench, 
  HelpCircle, Mail, MessageSquare, Phone, Ticket, 
  ChevronDown, ArrowRight, ShieldQuestion, Star, Smile, 
  Clock, CheckCircle, Inbox, LifeBuoy
} from "lucide-react";

// --- Static Help Center Articles ---
const HELP_ARTICLES = [
  { id: "a1", category: "Courses", title: "How to enroll in a course", desc: "Learn how to select your engineering path and instantly initialize your learning curriculum." },
  { id: "a2", category: "Account", title: "Reset your password", desc: "Step-by-step documentation on updating security credentials and activating recovery tokens." },
  { id: "a3", category: "Certificates", title: "Download your certificate", desc: "Generate secure cryptographic completion hashes and download your verified PDFs." },
  { id: "a4", category: "Account", title: "Update your profile details", desc: "Modify system account preferences, connecting developer profiles, and avatar assets." },
  { id: "a5", category: "Payments", title: "What to do if payment failed", desc: "Troubleshoot common merchant gateway timeouts, card authentication declines, or double routing." },
  { id: "a6", category: "Courses", title: "Access purchased courses dashboard", desc: "Locate your private workspace repository, video stems, and dynamic syllabus modules." }
];

const CATEGORIES = [
  { label: "Courses", icon: BookOpen, desc: "Enrollment, modules, & tools", color: "text-blue-600 bg-blue-50" },
  { label: "Account", icon: User, desc: "Login, verification, & profile", color: "text-indigo-600 bg-indigo-50" },
  { label: "Payments", icon: CreditCard, desc: "Invoices, methods, & refunds", color: "text-amber-600 bg-amber-50" },
  { label: "Certificates", icon: Award, desc: "Verification & verification hashes", color: "text-emerald-600 bg-emerald-50" },
  { label: "Technical Support", icon: Wrench, desc: "Platform bugs & IDE syncs", color: "text-rose-600 bg-rose-50" },
  { label: "Contact Support", icon: HelpCircle, desc: "Direct communications matrix", color: "text-cyan-600 bg-cyan-50" }
];

export default function HelpSupportPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCat, setSelectedCat] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // --- Real-time Search Matrix ---
  const filteredArticles = useMemo(() => {
    return HELP_ARTICLES.filter(art => {
      const matchesCategory = !selectedCat || art.category === selectedCat;
      const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            art.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCat]);

  return (
    <div className="pt-20 bg-slate-50 text-slate-800 min-h-screen overflow-hidden relative">
      
      {/* Structural Blur Elements */}
      <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[45%] left-[-15%] w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* ================= 1. HERO BANNER & SEARCH ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 text-center space-y-6 relative z-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold tracking-wider text-blue-600 bg-blue-50 border border-blue-200 rounded-full uppercase">
          <LifeBuoy className="w-3.5 h-3.5" /> Help Center
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900">
          How Can We Help You <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Today?</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Find system documentation guides, resolve platform inquiries dynamically, or activate direct support pathways instantly.
        </p>

        {/* Global Dynamic Search Element */}
        <div className="max-w-xl mx-auto relative pt-4">
          <input 
            type="text"
            placeholder="Search login issues, payments, course access, certificates..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 text-sm focus:outline-none focus:border-blue-500 bg-white shadow-md shadow-slate-100 focus:shadow-lg transition-all"
          />
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-8" />
        </div>
      </section>

      {/* ================= 2. HELP CATEGORIES ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CATEGORIES.map((cat, idx) => {
            const isSelected = selectedCat === cat.label;
            return (
              <button
                key={idx}
                onClick={() => setSelectedCat(isSelected ? null : cat.label)}
                className={`p-6 bg-white rounded-[24px] border text-left flex items-start gap-4 transition-all hover:-translate-y-0.5 ${isSelected ? "border-blue-500 ring-2 ring-blue-500/10 shadow-md" : "border-slate-200 hover:border-slate-300 shadow-sm"}`}
              >
                <div className={`w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center ${cat.color}`}>
                  <cat.icon className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-slate-900">{cat.label}</h3>
                  <p className="text-xs text-slate-500 leading-normal">{cat.desc}</p>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* ================= 3. POPULAR HELP ARTICLES ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              {selectedCat ? `${selectedCat} Guides` : "Popular Knowledge Articles"}
            </h2>
            <p className="text-xs text-slate-400">Select structural categories above to refine document indexing parameters.</p>
          </div>
          {selectedCat && (
            <button onClick={() => setSelectedCat(null)} className="text-xs font-bold text-blue-600 hover:text-blue-700">
              Clear Filter
            </button>
          )}
        </div>

        <AnimatePresence mode="wait">
          {filteredArticles.length > 0 ? (
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {filteredArticles.map((art) => (
                <div 
                  key={art.id}
                  className="bg-white p-6 rounded-[24px] border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                      {art.category}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 leading-snug line-clamp-1 group-hover:text-blue-600 transition-colors">
                      {art.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                      {art.desc}
                    </p>
                  </div>
                  <button className="pt-4 text-xs font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 mt-2 group/link border-t border-slate-50 w-full">
                    Read Guide <ArrowRight className="w-3.5 h-3.5 transform group-hover/link:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              ))}
            </motion.div>
          ) : (
            /* Empty State Container */
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white border border-slate-200 rounded-[24px] py-12 px-4 text-center max-w-sm mx-auto flex flex-col items-center space-y-3 shadow-sm"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center border border-slate-100 shadow-inner">
                <Inbox className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-slate-800">No guides matched</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  We found zero results for "{searchQuery}". Review your query terms.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ================= 4. FAQ ACCORDION PREVIEW ================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight text-center mb-8 flex items-center justify-center gap-2">
          <ShieldQuestion className="text-amber-500 w-6 h-6" /> Common System Questions
        </h2>

        <div className="space-y-3">
          {[
            { q: "How long do I maintain course module access?", a: "All active premium registrations receive permanent lifetime curriculum infrastructure privileges alongside updates." },
            { q: "Can I sync localized system repositories directly?", a: "Yes, specific environment initialization sequences and system configuration guides are provided in the setup blocks." },
            { q: "Is there corporate multi-seat billing support?", a: "Yes, team administrators can activate explicit payment matrices and manage profile deployments from the B2B portal." },
            { q: "Where can I track active support tickets?", a: "Use the ticket tracking module below or access your localized technical dashboard area parameters." }
          ].map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden transition-all bg-white shadow-sm">
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center font-bold text-slate-800 hover:bg-slate-50 transition-colors text-sm"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isOpen ? "transform rotate-180 text-blue-600" : ""}`} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1, transition: { height: { duration: 0.2 }, opacity: { duration: 0.15 } } }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden bg-slate-50/50 border-t border-slate-100"
                    >
                      <p className="px-6 py-4 text-slate-600 text-xs sm:text-sm leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= 5. CONTACT SUPPORT CHANNELS ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-slate-200/60">
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-6 text-center lg:text-left">
          Still Need Assistance?
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "Email Support", data: "support@nextskill.com", type: "Response within 24h", icon: Mail, c: "bg-blue-50 text-blue-600" },
            { title: "Live System Chat", data: "9:00 AM – 8:00 PM", type: "Instant response agents", icon: MessageSquare, c: "bg-indigo-50 text-indigo-600" },
            { title: "Hotline Support", data: "+880 1700-123456", type: "Immediate routing", icon: Phone, c: "bg-amber-50 text-amber-600" },
            { title: "Submit a Ticket", data: "Open System Node", type: "Track platform issues", icon: Ticket, c: "bg-emerald-50 text-emerald-600" }
          ].map((ch, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all">
              <div>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3.5 ${ch.c}`}>
                  <ch.icon className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">{ch.title}</h4>
                <p className="text-sm font-bold text-slate-800 mt-0.5">{ch.data}</p>
              </div>
              <p className="text-[10px] font-semibold text-slate-400 mt-3 border-t border-slate-50 pt-2">{ch.type}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= 6. SUPPORT STATISTICS ================= */}
      <section className="bg-slate-900 text-white py-12 mt-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { v: "10,000+", label: "Questions Solved", icon: CheckCircle, color: "text-emerald-400" },
            { v: "95%", label: "Satisfaction Rate", icon: Smile, color: "text-blue-400" },
            { v: "24 Hours", label: "Average Response Time", icon: Clock, color: "text-amber-400" },
            { v: "4.9★", label: "Support Rating", icon: Star, color: "text-cyan-400" }
          ].map((stat, i) => (
            <div key={i} className="space-y-1">
              <div className="flex justify-center mb-1">
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <p className="text-2xl sm:text-3xl font-black tracking-tight">{stat.v}</p>
              <p className="text-xs text-slate-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= 7. EMERGENCY STICKY HELP CARD ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[32px] p-8 sm:p-12 text-white text-center space-y-4 relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_120%,rgba(245,158,11,0.12),transparent)]" />
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight max-w-xl mx-auto leading-tight">
            Still Stuck After Reviewing Guides?
          </h2>
          <p className="text-blue-100 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
            Our infrastructure engineering team stands prepared to unlock system roadblocks. Deploy a direct support query parameter loop immediately.
          </p>
          <div className="flex flex-wrap gap-3 justify-center pt-2">
            <Link href="/contact" className="px-5 py-3 text-xs font-bold text-blue-600 bg-white rounded-xl hover:bg-blue-50 active:scale-95 transition-all shadow-md">
              Contact Support
            </Link>
            <button className="px-5 py-3 text-xs font-bold text-white bg-indigo-500/40 hover:bg-indigo-500/60 border border-white/20 rounded-xl active:scale-95 transition-all">
              Send Message
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}