"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code2, 
  Palette, 
  Smartphone, 
  Cpu, 
  PieChart, 
  Megaphone, 
  Cloud, 
  ShieldCheck,
  ArrowRight
} from "lucide-react";

interface Category {
  id: string;
  icon: React.ReactNode;
  name: string;
  tag: "popular" | "trending" | "free" | "premium" | "newest";
  count: number;
}

const CATEGORIES_DATA: Category[] = [
  { id: "cat-1", icon: <Code2 className="w-5 h-5 text-blue-600" />, name: "Web Development", tag: "popular", count: 145 },
  { id: "cat-2", icon: <Palette className="w-5 h-5 text-indigo-600" />, name: "UI/UX Design", tag: "popular", count: 92 },
  { id: "cat-3", icon: <Smartphone className="w-5 h-5 text-purple-600" />, name: "Mobile Development", tag: "trending", count: 64 },
  { id: "cat-4", icon: <Cpu className="w-5 h-5 text-amber-600" />, name: "Artificial Intelligence", tag: "trending", count: 110 },
  { id: "cat-5", icon: <PieChart className="w-5 h-5 text-emerald-600" />, name: "Data Science & Analytics", tag: "newest", count: 85 },
  { id: "cat-6", icon: <Megaphone className="w-5 h-5 text-pink-600" />, name: "Digital Marketing", tag: "free", count: 42 },
  { id: "cat-7", icon: <Cloud className="w-5 h-5 text-sky-600" />, name: "Cloud Computing", tag: "premium", count: 73 },
  { id: "cat-8", icon: <ShieldCheck className="w-5 h-5 text-red-600" />, name: "Cyber Security", tag: "premium", count: 55 }
];

const FILTERS = ["All", "Popular", "Trending", "Free", "Premium", "Newest"];

export default function PopularCategories() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredCategories = CATEGORIES_DATA.filter(cat => {
    if (activeFilter === "All") return true;
    return cat.tag === activeFilter.toLowerCase();
  });

  return (
    <section className="relative bg-slate-50 py-20 overflow-hidden select-none">
      {/* Background Micro Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-40 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 text-center md:text-left max-w-xl mx-auto md:mx-0">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-200/50 rounded-full text-blue-600 font-semibold text-xs uppercase tracking-wider">
              ✨ Popular Categories
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Choose Your Learning Path
            </h2>
            <p className="text-sm text-slate-500">
              Explore our most in-demand categories designed to help you build practical skills.
            </p>
          </div>
          <button className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 font-semibold text-sm rounded-full shadow-sm transition-all duration-300 flex-shrink-0">
            View All Categories <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Filter Chips Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 text-xs font-bold tracking-wide rounded-full border transition-all duration-300 whitespace-nowrap active:scale-[0.97]
                ${activeFilter === filter 
                  ? "bg-slate-900 border-slate-900 text-white shadow-sm" 
                  : "bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Beautiful & Minimalist Category Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((cat) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                key={cat.id}
                className="group relative bg-white border border-slate-200/80 rounded-2xl p-4 flex items-center justify-between shadow-xs hover:shadow-md hover:border-blue-500/40 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  {/* Icon Container */}
                  <div className="w-10 h-10 bg-slate-50 group-hover:bg-blue-50 rounded-xl flex items-center justify-center border border-slate-100 transition-colors duration-300 flex-shrink-0">
                    {cat.icon}
                  </div>
                  
                  {/* Category Name & Course Count */}
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold text-slate-800 tracking-tight truncate group-hover:text-blue-600 transition-colors duration-200">
                      {cat.name}
                    </h3>
                    <p className="text-[11px] font-medium text-slate-400 mt-0.5">
                      {cat.count} Courses
                    </p>
                  </div>
                </div>

                {/* Micro Arrow Action Indicator */}
                <div className="w-7 h-7 rounded-full bg-slate-50 group-hover:bg-blue-600 text-slate-400 group-hover:text-white flex items-center justify-center transition-all duration-300 flex-shrink-0">
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Fallback Empty UI State */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-12 bg-white border border-dashed border-slate-200 rounded-2xl">
            <p className="text-xs font-semibold text-slate-400">No categories found in this filter.</p>
          </div>
        )}

      </div>
    </section>
  );
}