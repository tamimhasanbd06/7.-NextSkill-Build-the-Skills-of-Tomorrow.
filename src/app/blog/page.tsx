"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, BookOpen, Clock, Award, Star, ArrowRight, 
  Layers, Code2, MonitorPlay, Sparkles, Inbox 
} from "lucide-react";

// --- Static Course Database Array ---
const STATIC_COURSES = [
  {
    id: "fs-nextjs",
    title: "Next.js Enterprise Architecture & Full Stack Mastery",
    desc: "Build scalable web systems with the Next.js App Router, React Server Components, tRPC, PostgreSQL, and advanced Vercel optimization patterns.",
    category: "Web Development",
    level: "Advanced",
    duration: "42 Hours",
    rating: 4.9,
    reviews: 1240,
    price: "$99",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
    tags: ["Next.js", "React", "TypeScript"]
  },
  {
    id: "uiux-figma",
    title: "UI/UX Design Systems: Concept to Production Handoff",
    desc: "Master systematic layout networks, dynamic design tokens, accessible components, and advanced interactive auto-layouts inside Figma.",
    category: "UI/UX Design",
    level: "Beginner to Pro",
    duration: "28 Hours",
    rating: 4.8,
    reviews: 850,
    price: "$79",
    image: "https://images.unsplash.com/photo-1541462608141-ad4979e408c9?auto=format&fit=crop&w=600&q=80",
    tags: ["Figma", "Design Systems", "UX"]
  },
  {
    id: "flutter-apps",
    title: "Cross-Platform Mobile Architecture with Flutter",
    desc: "Architect performance-optimized Android and iOS production apps using Clean Architecture, BLoC state design patterns, and local storage engines.",
    category: "Mobile Apps",
    level: "Intermediate",
    duration: "36 Hours",
    rating: 4.9,
    reviews: 940,
    price: "$89",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80",
    tags: ["Flutter", "Dart", "Mobile"]
  },
  {
    id: "ai-python",
    title: "Practical Machine Learning & AI Engineering Pipelines",
    desc: "Integrate large language models, build predictive vector embeddings with Python, and orchestrate custom neural models over secure environments.",
    category: "Data Science & AI",
    level: "Advanced",
    duration: "48 Hours",
    rating: 4.7,
    reviews: 620,
    price: "$129",
    image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=600&q=80",
    tags: ["Python", "PyTorch", "AI"]
  },
  {
    id: "ts-backend",
    title: "Node.js Scale: High-Performance Backend Infrastructure",
    desc: "Deconstruct asynchronous loops, worker threads, clustering structures, API patterns, and Redis cache layer components with absolute strict TypeScript.",
    category: "Web Development",
    level: "Intermediate",
    duration: "32 Hours",
    rating: 4.9,
    reviews: 710,
    price: "$85",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=600&q=80",
    tags: ["Node.js", "TypeScript", "Redis"]
  },
  {
    id: "git-devops",
    title: "Git Workflow & CI/CD Pipelines for Engineering Teams",
    desc: "Master structural deployment protocols, automated unit-testing pipelines, Docker deployment containers, and advanced Git branch re-basing matrices.",
    category: "DevOps",
    level: "Beginner",
    duration: "18 Hours",
    rating: 4.8,
    reviews: 430,
    price: "$49",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=600&q=80",
    tags: ["Git", "Docker", "DevOps"]
  }
];

const CATEGORIES = ["All", "Web Development", "UI/UX Design", "Mobile Apps", "Data Science & AI", "DevOps"];

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // --- Filter Logic ---
  const filteredCourses = useMemo(() => {
    return STATIC_COURSES.filter(course => {
      const matchesCategory = activeCategory === "All" || course.category === activeCategory;
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            course.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            course.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="pt-20 bg-slate-50 text-slate-800 min-h-screen overflow-hidden relative">
      
      {/* Decorative Blur Vectors */}
      <div className="absolute top-20 left-[-10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* ================= 1. HERO BANNER ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold tracking-wider text-blue-600 bg-blue-50 border border-blue-200 rounded-full uppercase">
          <MonitorPlay className="w-3.5 h-3.5" /> NextSkill Academy
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-tight">
          Explore Vetted <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Engineering Pathways</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Skip generic theoretical tutorials. Access clean, project-focused structural directories explicitly engineered to train top-tier developers.
        </p>
      </section>

      {/* ================= 2. CONTROLS BAR (SEARCH & CHIPS) ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-4 justify-between items-center">
          
          {/* Filter Chips */}
          <div className="w-full md:w-auto overflow-x-auto flex gap-1.5 py-1 no-scrollbar justify-start scroll-smooth">
            {CATEGORIES.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap tracking-wide transition-all border active:scale-95 ${activeCategory === cat ? "bg-blue-600 text-white border-blue-600 shadow-sm" : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Field */}
          <div className="w-full md:max-w-xs relative">
            <input 
              type="text"
              placeholder="Search tech stack paths..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-500 bg-slate-50/50 focus:bg-white transition-all"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
          </div>

        </div>
      </section>

      {/* ================= 3. COURSES DIRECTORY GRID ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 min-h-[400px]">
        <AnimatePresence mode="wait">
          {filteredCourses.length > 0 ? (
            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {filteredCourses.map((course) => (
                <motion.div
                  layout
                  key={course.id}
                  className="bg-white border border-slate-200 rounded-[24px] overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                >
                  {/* Photo Head */}
                  <div className="aspect-[16/10] bg-slate-100 relative overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-slate-200/40 shadow-sm text-xs font-black text-slate-900">
                      {course.price}
                    </div>
                  </div>

                  {/* Body Metadata Modules */}
                  <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[11px] font-bold tracking-wide">
                        <span className="text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full uppercase">{course.category}</span>
                        <span className="text-slate-400 flex items-center gap-1"><Layers className="w-3.5 h-3.5" /> {course.level}</span>
                      </div>
                      
                      <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-snug line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {course.title}
                      </h3>
                      
                      <p className="text-xs sm:text-sm text-slate-500 line-clamp-3 leading-relaxed">
                        {course.desc}
                      </p>
                    </div>

                    {/* Footer Metrics */}
                    <div className="space-y-4 pt-4 border-t border-slate-100">
                      <div className="flex flex-wrap gap-1">
                        {course.tags.map((tag, i) => (
                          <span key={i} className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md">
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                        <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-slate-400" /> {course.duration}</span>
                        <span className="flex items-center gap-1 text-amber-600">
                          <Star className="w-4 h-4 fill-amber-500 text-amber-500" /> {course.rating} 
                          <span className="text-slate-400 font-normal">({course.reviews})</span>
                        </span>
                      </div>

                      <Link 
                        href={`/courses/${course.id}`}
                        className="w-full py-3 bg-slate-900 hover:bg-blue-600 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-sm active:scale-[0.99] group/btn"
                      >
                        Explore Curriculum <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            /* Empty State Matrix */
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white border border-slate-200 rounded-[24px] py-16 px-4 text-center max-w-md mx-auto flex flex-col items-center justify-center space-y-4 shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center border border-slate-100 shadow-inner">
                <Inbox className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-slate-800">No pipelines matched</h4>
                <p className="text-xs text-slate-400 max-w-xs leading-relaxed">
                  We couldn't discover any active paths matching your search filter properties. Try resetting the criteria parameters.
                </p>
              </div>
              <button 
                onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
                className="px-4 py-2 text-xs font-bold text-blue-600 hover:bg-blue-50 border border-blue-200 rounded-xl transition-all"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

    </div>
  );
}