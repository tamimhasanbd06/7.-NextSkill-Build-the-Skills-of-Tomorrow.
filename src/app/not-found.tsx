"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  Home, BookOpen, ArrowLeft, Search, HelpCircle, 
  ChevronRight, Compass, FileText, Mail 
} from "lucide-react";

export default function NotFound() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/courses?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center p-6 font-sans relative overflow-hidden select-none">
      
      {/* Background Premium Ambient Lights */}
      <div className="absolute top-[-25%] left-[-20%] w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-15%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Decorative Floating Shapes */}
      <div className="absolute top-1/4 right-10 w-3 h-3 bg-amber-500/30 rounded-full animate-ping pointer-events-none hidden md:block" />
      <div className="absolute bottom-1/4 left-12 w-4 h-4 bg-blue-500/20 rounded-xl rotate-45 animate-pulse pointer-events-none hidden md:block" />

      {/* Main Glassmorphism 404 Container */}
      <div className="w-full max-w-2xl bg-slate-900/40 backdrop-blur-xl border border-slate-800/80 p-8 sm:p-12 rounded-[24px] shadow-2xl text-center space-y-8 relative z-10">
        
        {/* 1 & 3. 404 Neon Large Typography Illustration */}
        <div className="relative inline-block select-none pointer-events-none">
          <h1 className="text-8xl sm:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-slate-700 via-slate-800 to-slate-950 font-mono opacity-50">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center animate-bounce duration-1000">
            <HelpCircle className="w-20 h-20 text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
          </div>
        </div>

        {/* 2. Error Badge Component */}
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-[10px] font-black tracking-widest text-amber-400 uppercase">
            🚫 Error 404
          </span>
        </div>

        {/* Headings & Sub-titles */}
        <div className="space-y-2 max-w-md mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Oops! Page Not Found</h2>
          <p className="text-xs sm:text-sm text-slate-400 font-medium leading-relaxed">
            The page you're looking for doesn't exist, may have been moved, or the URL may be incorrect.
          </p>
        </div>

        {/* 5. Course Search Module Grid */}
        <form onSubmit={handleSearch} className="max-w-md mx-auto relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-blue-500 transition-colors" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search courses..."
            className="w-full pl-11 pr-24 py-3 bg-slate-950/40 border border-slate-800 rounded-xl text-xs font-medium text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/80 focus:bg-slate-950 transition-all shadow-inner"
          />
          <button 
            type="submit" 
            className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg text-[10px] uppercase tracking-wider transition-colors cursor-pointer"
          >
            Find
          </button>
        </form>

        {/* 6. Adaptive UX Action Grid Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-md mx-auto pt-2">
          <button
            onClick={() => router.back()}
            className="w-full py-2.5 bg-slate-950/60 hover:bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-300 font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all active:scale-[0.98] cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Go Back
          </button>

          <Link
            href="/"
            className="w-full py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-lg shadow-blue-600/10 transition-all active:scale-[0.98]"
          >
            <Home className="w-3.5 h-3.5" /> Back to Home
          </Link>

          <Link
            href="/courses"
            className="w-full py-2.5 bg-slate-950/60 hover:bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-300 font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all active:scale-[0.98]"
          >
            <BookOpen className="w-3.5 h-3.5" /> Explore Courses
          </Link>
        </div>

        {/* Divider Setup */}
        <div className="border-t border-slate-800/80 max-w-md mx-auto pt-6"></div>

        {/* 7. Popular Context Navigation Footer Links */}
        <div className="space-y-3">
          <span className="text-[9px] font-black tracking-widest text-slate-500 uppercase block">Popular Navigation Nodes</span>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-400">
            <Link href="/about" className="hover:text-blue-400 transition-colors flex items-center gap-0.5 group">
              <Compass className="w-3 h-3 text-slate-600 group-hover:text-blue-500" /> About
            </Link>
            <Link href="/blog" className="hover:text-blue-400 transition-colors flex items-center gap-0.5 group">
              <FileText className="w-3 h-3 text-slate-600 group-hover:text-blue-500" /> Blog
            </Link>
            <Link href="/contact" className="hover:text-blue-400 transition-colors flex items-center gap-0.5 group">
              <Mail className="w-3 h-3 text-slate-600 group-hover:text-blue-500" /> Contact
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}