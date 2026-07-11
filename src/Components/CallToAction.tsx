"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  GraduationCap, 
  BookOpen, 
  Users, 
  Star,
  CheckCircle,
  Trophy
} from "lucide-react";

// Floating Cards Floating Animation Pattern
const floatAnimation = (delay: number) => ({
  animate: {
    y: [0, -12, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay
    }
  }
});

export default function CallToAction() {
  return (
    <section className="relative py-24 overflow-hidden bg-white select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Banner Container with Premium Deep Gradient Stack */}
        <div className="relative bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-900 rounded-[32px] p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl border border-white/10">
          
          {/* Ambient Lighting & Mesh Dot Grid Pattern Overlay */}
          <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-[0.03] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* ================= LEFT COLUMN: CONVERSION CONTENT MATRIX (7/12) ================= */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left relative z-10">
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 border border-white/10 rounded-full text-blue-300 font-bold text-xs uppercase tracking-wider backdrop-blur-md">
                🚀 Start Your Journey Today
              </div>
              
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight sm:leading-[1.15]">
                Build Real Skills.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-amber-300">
                  Grow Your Career.
                </span>
              </h2>
              
              <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Join a growing global community of technical learners. Gain practical engineering skills through real-world production projects and earn certificates that showcase your achievements.
              </p>

              {/* Action Buttons Interface Wrapper */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button className="group w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all duration-300 active:scale-98">
                  Explore Courses 
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </button>
                <button className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center transition-all duration-300 active:scale-98">
                  Become an Instructor
                </button>
              </div>

              {/* Horizontal Split Line Divider */}
              <div className="h-px bg-white/10 my-8 w-full" />

              {/* Trust Statistics Strip Matrix */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center lg:text-left">
                <div className="space-y-0.5">
                  <div className="text-lg sm:text-xl font-black text-white flex items-center justify-center lg:justify-start gap-1">
                    <GraduationCap className="w-4 h-4 text-blue-400" /> 12.5K+
                  </div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Active Students</div>
                </div>
                <div className="space-y-0.5 border-l border-white/10 sm:pl-4">
                  <div className="text-lg sm:text-xl font-black text-white flex items-center justify-center lg:justify-start gap-1">
                    <BookOpen className="w-4 h-4 text-indigo-400" /> 520+
                  </div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Expert Courses</div>
                </div>
                <div className="space-y-0.5 border-l border-white/10 pl-2 sm:pl-4">
                  <div className="text-lg sm:text-xl font-black text-white flex items-center justify-center lg:justify-start gap-1">
                    <Users className="w-4 h-4 text-emerald-400" /> 65+
                  </div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Tech Mentors</div>
                </div>
                <div className="space-y-0.5 border-l border-white/10 pl-2 sm:pl-4">
                  <div className="text-lg sm:text-xl font-black text-amber-400 flex items-center justify-center lg:justify-start gap-0.5">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" /> 4.9
                  </div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Average Rating</div>
                </div>
              </div>

            </div>

            {/* ================= RIGHT COLUMN: INTERACTIVE VISUAL FRAME (5/12) ================= */}
            <div className="hidden lg:col-span-5 relative lg:flex items-center justify-center h-[400px]">
              
              {/* Card A: Course Progress Monitor Layer */}
              <motion.div 
                variants={floatAnimation(0)}
                animate="animate"
                className="absolute top-8 left-0 bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-2xl p-4 w-56 shadow-xl"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">Next.js Masterclass</span>
                  <span className="text-xs font-bold text-white">80%</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div className="bg-blue-500 h-full w-[80%] rounded-full" />
                </div>
                <div className="mt-2 text-[9px] font-semibold text-slate-400 flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-emerald-400" /> Core Module 12 Complete
                </div>
              </motion.div>

              {/* Card B: Verified Certificate Earned Badge Node */}
              <motion.div 
                variants={floatAnimation(1.5)}
                animate="animate"
                className="absolute bottom-12 right-4 bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-2xl p-4 w-52 shadow-xl flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Trophy className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <span className="text-[9px] font-bold text-amber-400 uppercase tracking-widest block">Verification Pass</span>
                  <h4 className="text-xs font-bold text-white tracking-tight">Certificate Earned</h4>
                  <span className="text-[10px] font-medium text-slate-400 block mt-0.5">ID: #920-TRX</span>
                </div>
              </motion.div>

              {/* Card C: Floating Core Platform Metric Counter */}
              <motion.div 
                variants={floatAnimation(0.7)}
                animate="animate"
                className="absolute top-1/2 left-1/3 bg-white text-slate-900 rounded-2xl p-4 shadow-2xl border border-slate-100 flex items-center gap-3"
              >
                <div className="flex -space-x-2 overflow-hidden">
                  <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Student" />
                  <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Student" />
                  <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Student" />
                </div>
                <div className="text-[11px] font-bold tracking-tight text-slate-800 leading-none">
                  Join 12,500+ <br />
                  <span className="text-slate-400 text-[9px] font-medium">Active Learners</span>
                </div>
              </motion.div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}