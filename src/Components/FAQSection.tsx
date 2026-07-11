"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  HelpCircle, 
  ChevronDown, 
  ArrowRight, 
  MessageSquare,
  ThumbsUp,
  ThumbsDown,
  Check
} from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "courses" | "certificates" | "payments" | "support";
  isPopular?: boolean;
}

const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    category: "courses",
    isPopular: true,
    question: "How do I enroll in a course and start learning?",
    answer: "Simply create a free account, browse our interactive course catalog, select your preferred engineering track, and complete the secure checkout process to get instant lifetime dashboard access."
  },
  {
    id: "faq-2",
    category: "certificates",
    isPopular: true,
    question: "Will I receive a verifiable certificate after course completion?",
    answer: "Yes, absolutely. Once you complete all module video lessons, assignments, and the final capstone project, a unique verifiable PDF certificate will be generated automatically linked to your student identity profile."
  },
  {
    id: "faq-3",
    category: "courses",
    question: "Do I get lifetime access to my purchased courses?",
    answer: "Yes. All individual course purchases come with unrestricted lifetime access. This includes all future update video modules, newly added resources, and ongoing community server access without extra fees."
  },
  {
    id: "faq-4",
    category: "courses",
    question: "Do I need any prior programming experience to start?",
    answer: "Most of our foundation tracks start completely from absolute scratch assuming zero background knowledge. However, advanced masterclasses specify any required prerequisites right inside their overview cards."
  },
  {
    id: "faq-5",
    category: "payments",
    question: "What domestic and international payment methods are supported?",
    answer: "We support all major global credit/debit cards (Visa, Mastercard, Amex), secure digital wallets, and popular local mobile banking channels (bKash, Nagad, Rocket) via our secure integrated payment gateway."
  },
  {
    id: "faq-6",
    category: "support",
    question: "How can I contact my instructor or the support team if I get stuck?",
    answer: "Every course includes access to a dedicated premium community server. You can post code snippets directly in active support channels where dedicated technical mentors resolve bugs 24/7."
  }
];

const CATEGORIES = [
  { id: "all", label: "All Questions" },
  { id: "courses", label: "Courses" },
  { id: "certificates", label: "Certificates" },
  { id: "payments", label: "Payments" },
  { id: "support", label: "Support" }
];

export default function FAQSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [openId, setOpenId] = useState<string | null>("faq-1");
  const [feedback, setFeedback] = useState<Record<string, "yes" | "no">>({});

  const filteredFAQs = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      const matchesCategory = activeCategory === "all" || item.category === activeCategory;
      const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  const handleFeedback = (id: string, type: "yes" | "no") => {
    setFeedback(prev => ({ ...prev, [id]: type }));
  };

  return (
    <section className="relative bg-white py-24 overflow-hidden select-none">
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-35 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Setup */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-200/50 rounded-full text-blue-600 font-bold text-xs uppercase tracking-wider">
            ❓ Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Everything You Need to Know Before You Start
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed">
            Clear away doubts instantly. Find direct, practical answers regarding course access mechanics, project evaluation pathways, certificates, and secure payments.
          </p>
        </div>

        {/* Filter Systems */}
        <div className="max-w-3xl mx-auto mb-12 space-y-6">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
            <input 
              type="text"
              placeholder="Search your question here..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 bg-slate-50 focus:bg-white border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 rounded-2xl text-sm font-medium text-slate-800 placeholder-slate-400 shadow-2xs outline-none transition-all"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs font-bold rounded-xl border cursor-pointer transition-all duration-200 ${
                  activeCategory === cat.id 
                    ? "bg-slate-900 border-slate-900 text-white shadow-xs" 
                    : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Accordion Matrix Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-8">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-8 relative overflow-hidden shadow-xl">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-600/20 rounded-full blur-2xl pointer-events-none" />
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 border border-white/10">
                <HelpCircle className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold tracking-tight mb-2">Still have unanswered questions?</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                If you can't find the exact technical solution inside our architecture system index, connect with our deployment desk engineers directly.
              </p>
              <div className="space-y-3">
                <button className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 transition-all duration-200 active:scale-98">
                  <MessageSquare className="w-3.5 h-3.5" /> Contact Live Support
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <AnimatePresence mode="popLayout">
              {filteredFAQs.length > 0 ? (
                filteredFAQs.map((faq) => {
                  const isOpen = openId === faq.id;
                  return (
                    <motion.div
                      key={faq.id}
                      layout
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${
                        isOpen ? "border-blue-500/40 shadow-md" : "border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <button
                        onClick={() => setOpenId(isOpen ? null : faq.id)}
                        className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left font-bold text-slate-800 text-sm sm:text-base outline-none"
                      >
                        <span className="flex items-center gap-2">
                          {faq.question}
                          {faq.isPopular && (
                            <span className="px-2 py-0.5 bg-amber-100 text-amber-800 border border-amber-200 text-[9px] font-black uppercase tracking-wide rounded-md">
                              🔥 Most Asked
                            </span>
                          )}
                        </span>
                        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-blue-600" : ""}`} />
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                          >
                            <div className="px-5 pb-5 pt-1 border-t border-slate-50 space-y-4">
                              <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">
                                {faq.answer}
                              </p>
                              <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs">
                                <span className="text-slate-400 font-medium">Was this helpful?</span>
                                <div className="flex items-center gap-1.5">
                                  {feedback[faq.id] ? (
                                    <span className="text-emerald-600 font-bold flex items-center gap-1 text-[11px]">
                                      <Check className="w-3.5 h-3.5" /> Thanks for your feedback!
                                    </span>
                                  ) : (
                                    <>
                                      <button 
                                        onClick={() => handleFeedback(faq.id, "yes")}
                                        className="px-2.5 py-1 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-600 font-semibold rounded-md flex items-center gap-1"
                                      >
                                        <ThumbsUp className="w-3 h-3 text-slate-400" /> Yes
                                      </button>
                                      <button 
                                        onClick={() => handleFeedback(faq.id, "no")}
                                        className="px-2.5 py-1 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-600 font-semibold rounded-md flex items-center gap-1"
                                      >
                                        <ThumbsDown className="w-3 h-3 text-slate-400" /> No
                                      </button>
                                    </>
                                  )}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })
              ) : (
                <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                  <p className="text-sm font-bold text-slate-700">No matching questions found</p>
                  <button 
                    onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}
                    className="text-xs font-bold text-blue-600 hover:underline mt-2"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </AnimatePresence>
          </div>

        </div>

        <div className="text-center mt-20">
          <button className="group inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors">
            Can't find your answer? Contact Our Support Team
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        </div>

      </div>
    </section>
  );
}