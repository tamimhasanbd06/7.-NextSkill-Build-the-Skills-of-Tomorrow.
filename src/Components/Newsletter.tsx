"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, 
  CheckCircle, 
  Sparkles, 
  Loader2, 
  Users, 
  ArrowRight,
  ShieldCheck
} from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic Structural Email Validation Matrix
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");

    // Simulating API Core Network Latency
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1500);
  };

  return (
    <section className="relative py-20 overflow-hidden select-none bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Card Container with Premium Gradients */}
        <div className="relative bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl border border-white/10">
          
          {/* Ambient Decorative Light Glows */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] opacity-5 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* LEFT COLUMN: TEXT CONTENT MODULE (7/12) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 border border-white/10 rounded-full text-blue-400 font-bold text-xs uppercase tracking-wider backdrop-blur-md">
                <Mail className="w-3.5 h-3.5" /> Newsletter
              </div>
              
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Never Miss New Courses & <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Learning Resources</span>
              </h2>
              
              <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Join thousands of software developers receiving weekly production tutorials, verified roadmap announcements, career insights, and exclusive student ecosystem perks.
              </p>

              {/* Benefits Checked List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-md mx-auto lg:mx-0 pt-2 text-xs sm:text-sm font-semibold text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Weekly Tech Articles</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>New Course Releases</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Exclusive Student Offers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Career Roadmap Matrix</span>
                </div>
              </div>

              {/* Social Proof Subscriber Counter Badge */}
              <div className="pt-4 flex items-center justify-center lg:justify-start gap-2.5 text-xs text-slate-400 font-medium">
                <div className="flex items-center gap-1 bg-white/5 border border-white/5 px-2.5 py-1 rounded-lg text-amber-400 font-bold">
                  <Users className="w-3.5 h-3.5" />
                  <span>25,000+ Developers</span>
                </div>
                <span>Already Subscribed</span>
              </div>
            </div>

            {/* RIGHT COLUMN: SUBSCRIPTION INTERACTION PANEL (5/12) */}
            <div className="lg:col-span-5 w-full max-w-md mx-auto">
              <AnimatePresence mode="wait">
                {status !== "success" ? (
                  <motion.div
                    key="form-container"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-white/(0.03) backdrop-blur-md border border-white/10 p-6 sm:p-8 rounded-3xl shadow-xl space-y-4"
                  >
                    <div className="text-center lg:text-left space-y-1">
                      <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest block">Exclusive Bonus</span>
                      <h4 className="text-sm font-bold text-white tracking-tight flex items-center justify-center lg:justify-start gap-1">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400 fill-amber-400" /> Subscribe & Get Frontend Roadmap PDF
                      </h4>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-3">
                      <div className="relative">
                        <input 
                          type="email"
                          placeholder="Enter your email address"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (status === "error") setStatus("idle");
                          }}
                          disabled={status === "loading"}
                          className="w-full pl-4 pr-4 py-3.5 bg-white/5 focus:bg-white/10 border border-white/10 focus:border-blue-500/50 rounded-xl text-sm font-medium text-white placeholder-slate-400 shadow-inner outline-none transition-all"
                        />
                      </div>

                      {/* Client Side Field Validation Error Notice */}
                      {status === "error" && (
                        <p className="text-xs text-rose-400 font-bold pl-1">{errorMessage}</p>
                      )}

                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/50 text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 active:scale-98 shadow-md"
                      >
                        {status === "loading" ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" /> Subscribing...
                          </>
                        ) : (
                          <>
                            Subscribe Now <ArrowRight className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>
                    </form>

                    {/* Operational Compliance Anti-Spam Trust Notice */}
                    <div className="flex items-center justify-center gap-1 text-[11px] text-slate-400 font-medium pt-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-slate-500" />
                      <span>No spam. Unsubscribe dynamically anytime.</span>
                    </div>

                  </motion.div>
                ) : (
                  /* Animated Success Acknowledgment Terminal Block */
                  <motion.div
                    key="success-container"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-emerald-500/10 border border-emerald-500/20 p-8 rounded-3xl text-center space-y-4 shadow-xl"
                  >
                    <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-md">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-base font-bold text-white">Thanks for Subscribing!</h4>
                      <p className="text-xs text-slate-300 leading-relaxed max-w-xs mx-auto">
                        Your developer node verification is active. Check your inbox shortly for system welcome documentation and the Frontend Roadmap PDF.
                      </p>
                    </div>
                    <button 
                      onClick={() => setStatus("idle")}
                      className="text-xs text-emerald-400 hover:text-emerald-300 font-bold underline cursor-pointer"
                    >
                      Subscribe another email
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}