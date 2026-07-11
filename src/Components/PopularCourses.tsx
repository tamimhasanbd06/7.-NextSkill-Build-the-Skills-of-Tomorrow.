"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  ChevronDown, 
  Star, 
  Users, 
  Clock, 
  BookOpen, 
  Heart, 
  ArrowRight,
  ChevronDown as ArrowDownIcon,
  ChevronUp as ArrowUpIcon,
  BookX
} from "lucide-react";

interface Course {
  id: string;
  image: string;
  badge: "Bestseller" | "Featured" | null;
  category: string;
  title: string;
  desc: string;
  instructor: { name: string; avatar: string };
  rating: number;
  students: number;
  duration: string;
  lessons: number;
  price: number;
  oldPrice?: number;
  skills: string[];
}

// 8 Premium Production Ready Cards with Online Unsplash Images
const COURSES_DATA: Course[] = [
  {
    id: "course-1",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=600&q=80",
    badge: "Bestseller",
    category: "Web Development",
    title: "Complete Next.js 14 & TypeScript Ultimate Bootcamp",
    desc: "Build production-ready fullstack applications with App Router and Server Actions.",
    instructor: { name: "Dr. Angela Yu", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" },
    rating: 4.9,
    students: 12540,
    duration: "28 Hours",
    lessons: 24,
    price: 49,
    oldPrice: 99,
    skills: ["React", "Next.js", "TypeScript"]
  },
  {
    id: "course-2",
    image: "https://images.unsplash.com/photo-1541462608141-ad4979e408c9?auto=format&fit=crop&w=600&q=80",
    badge: "Featured",
    category: "UI/UX Design",
    title: "Advanced Figma Masterclass: Production Design Systems",
    desc: "Master auto-layout, complex prototyping, and design tokens configuration.",
    instructor: { name: "John Doe", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" },
    rating: 4.8,
    students: 8420,
    duration: "18 Hours",
    lessons: 16,
    price: 39,
    oldPrice: 79,
    skills: ["Figma", "UI Design", "Tokens"]
  },
  {
    id: "course-3",
    image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=600&q=80",
    badge: "Bestseller",
    category: "AI",
    title: "Generative AI & LLM Developer Course with Python",
    desc: "Integrate OpenAI, LangChain, and vector databases for dynamic software agents.",
    instructor: { name: "Sam Altman", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" },
    rating: 4.9,
    students: 19850,
    duration: "34 Hours",
    lessons: 42,
    price: 89,
    skills: ["Python", "OpenAI", "LangChain"]
  },
  {
    id: "course-4",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    badge: null,
    category: "Data Science",
    title: "Data Science, Machine Learning & Pipelines Bootcamp",
    desc: "Comprehensive guide to data architectures, NumPy pipelines, and predictive analysis.",
    instructor: { name: "Sarah Connor", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" },
    rating: 4.7,
    students: 6310,
    duration: "45 Hours",
    lessons: 58,
    price: 59,
    oldPrice: 120,
    skills: ["Python", "Pandas", "Tensorflow"]
  },
  {
    id: "course-5",
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=600&q=80",
    badge: "Featured",
    category: "Web Development",
    title: "Full-Stack Node.js, Express & MongoDB Masterclass",
    desc: "Build highly scalable production backends, API routes, and robust OAuth systems.",
    instructor: { name: "Brad Traversy", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80" },
    rating: 4.8,
    students: 14200,
    duration: "30 Hours",
    lessons: 32,
    price: 45,
    oldPrice: 89,
    skills: ["Node.js", "Express", "MongoDB"]
  },
  {
    id: "course-6",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    badge: "Bestseller",
    category: "Marketing",
    title: "Digital Marketing & Funnel Optimization Masterclass",
    desc: "Master growth hacking, SEO ranking signals, and precision brand conversions.",
    instructor: { name: "Neil Patel", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&q=80" },
    rating: 4.7,
    students: 9800,
    duration: "20 Hours",
    lessons: 18,
    price: 29,
    oldPrice: 59,
    skills: ["SEO", "Google Ads", "Growth"]
  },
  {
    id: "course-7",
    image: "https://images.unsplash.com/photo-1601972599720-36938d4ecd31?auto=format&fit=crop&w=600&q=80",
    badge: null,
    category: "UI/UX Design",
    title: "Mobile App Product UX Design Fundamentals",
    desc: "In-depth frameworks for behavioral product styling and iOS/Android interface patterns.",
    instructor: { name: "MKBHD", avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=100&q=80" },
    rating: 4.9,
    students: 7400,
    duration: "15 Hours",
    lessons: 14,
    price: 35,
    skills: ["UX Design", "Wireframes", "Mobile"]
  },
  {
    id: "course-8",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80",
    badge: "Bestseller",
    category: "AI",
    title: "Deep Learning Specialization & Computer Vision",
    desc: "Build CNNs, RNNs, and object localization pipelines with TensorFlow and Keras.",
    instructor: { name: "Andrew Ng", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" },
    rating: 5.0,
    students: 22400,
    duration: "50 Hours",
    lessons: 64,
    price: 99,
    oldPrice: 199,
    skills: ["Deep Learning", "TensorFlow", "CV"]
  }
];

const FILTERS = ["All", "Web Development", "UI/UX", "AI", "Data Science", "Marketing"];
const SORTS = ["Most Popular", "Highest Rated", "Price Low → High", "Price High → Low"];

export default function PopularCourses() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeSort, setActiveSort] = useState("Most Popular");
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [wishlist, setWishlist] = useState<string[]>([]);
  
  // Show only 4 cards initially, expansions show all 8 cards (2 rows of 4)
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const processedCourses = COURSES_DATA.filter(course => {
    const matchFilter = activeFilter === "All" || course.category === activeFilter;
    const matchSearch = course.title.toLowerCase().includes(search.toLowerCase()) || 
                        course.desc.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  }).sort((a, b) => {
    if (activeSort === "Highest Rated") return b.rating - a.rating;
    if (activeSort === "Price Low → High") return a.price - b.price;
    if (activeSort === "Price High → Low") return b.price - a.price;
    return b.students - a.students;
  });

  const displayedCourses = processedCourses.slice(0, visibleCount);

  return (
    <section className="relative bg-white py-24 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 text-center md:text-left max-w-xl mx-auto md:mx-0">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 border border-amber-200/60 rounded-full text-amber-700 font-semibold text-xs uppercase tracking-wider">
              🔥 Most Popular Courses
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Master In-Demand Skills with Expert-Led Courses
            </h2>
            <p className="text-sm text-slate-500">
              Choose from our most popular courses designed to help you gain practical engineering skills.
            </p>
          </div>
        </div>

        {/* Search, Filter & Sort Row */}
        <div className="space-y-4 mb-10 bg-slate-50 p-4 rounded-3xl border border-slate-200/60">
          <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
            <div className="relative w-full lg:max-w-xs bg-white rounded-full border border-slate-200 px-4 py-2 flex items-center gap-2 shadow-2xs">
              <Search className="w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search courses..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-transparent text-sm text-slate-800 outline-none w-full placeholder:text-slate-400 font-medium"
              />
            </div>

            <div className="relative w-full lg:w-auto">
              <button 
                onClick={() => setIsSortOpen(!isSortOpen)}
                className="w-full lg:w-48 bg-white border border-slate-200 rounded-full px-4 py-2 flex items-center justify-between gap-2 text-xs font-bold text-slate-700 shadow-2xs"
              >
                <span>Sort: {activeSort}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>
              <AnimatePresence>
                {isSortOpen && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setIsSortOpen(false)} />
                    <motion.div 
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      className="absolute right-0 mt-1.5 w-full lg:w-48 bg-white border border-slate-200 rounded-2xl p-1.5 shadow-xl z-50"
                    >
                      {SORTS.map(sort => (
                        <button
                          key={sort}
                          onClick={() => { setActiveSort(sort); setIsSortOpen(false); }}
                          className={`w-full text-left px-3 py-2 text-xs font-semibold rounded-xl ${activeSort === sort ? "bg-blue-50 text-blue-600" : "text-slate-600 hover:bg-slate-50"}`}
                        >
                          {sort}
                        </button>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => { setActiveFilter(filter); setVisibleCount(4); }}
                className={`px-4 py-1.5 text-xs font-bold rounded-full border transition-all whitespace-nowrap
                  ${activeFilter === filter ? "bg-slate-900 border-slate-900 text-white" : "bg-white border-slate-200 text-slate-600"}`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Grid Setup: 4 Columns per row on Desktop */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          <AnimatePresence mode="popLayout">
            {isLoading ? (
              Array.from({ length: 4 }).map((_, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-3xl p-4 h-[440px] animate-pulse space-y-4">
                  <div className="w-full aspect-[16/10] bg-slate-100 rounded-2xl" />
                  <div className="h-4 bg-slate-100 rounded-md w-1/4" />
                  <div className="h-5 bg-slate-100 rounded-md w-11/12" />
                  <div className="h-10 bg-slate-100 rounded-xl w-full" />
                </div>
              ))
            ) : displayedCourses.length > 0 ? (
              displayedCourses.map((course) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  key={course.id}
                  className="group relative bg-white border border-slate-200 rounded-3xl p-4 flex flex-col justify-between hover:shadow-xl hover:border-blue-500/30 transition-all duration-300 overflow-hidden"
                >
                  <div className="space-y-3.5">
                    <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 relative shadow-inner">
                      <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" />
                      <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                        {course.badge ? (
                          <span className={`px-2.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider rounded-md border
                            ${course.badge === "Bestseller" ? "bg-amber-500 border-amber-600 text-white" : "bg-blue-600 border-blue-700 text-white"}`}>
                            {course.badge}
                          </span>
                        ) : <div />}
                        <button 
                          onClick={(e) => { e.preventDefault(); setWishlist(prev => prev.includes(course.id) ? prev.filter(i => i !== course.id) : [...prev, course.id]); }}
                          className="w-7 h-7 bg-white/95 rounded-full flex items-center justify-center text-slate-400 hover:text-red-500 pointer-events-auto transition-all"
                        >
                          <Heart className={`w-3.5 h-3.5 ${wishlist.includes(course.id) ? "fill-red-500 text-red-500" : ""}`} />
                        </button>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider block">{course.category}</span>
                      <h3 className="text-sm font-bold text-slate-800 tracking-tight leading-snug group-hover:text-blue-600 line-clamp-2 min-h-[40px]">{course.title}</h3>
                      <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">{course.desc}</p>
                    </div>

                    <div className="flex items-center gap-2 pt-0.5">
                      <img src={course.instructor.avatar} alt={course.instructor.name} className="w-5 h-5 rounded-full object-cover" />
                      <span className="text-xs font-semibold text-slate-500">{course.instructor.name}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 pt-2 border-t border-b border-slate-100 py-2.5 text-[11px] font-semibold text-slate-500">
                      <div className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                        <span>{course.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-slate-400" />
                        <span>{course.students.toLocaleString()} Devs</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                        <span>{course.lessons} Lessons</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 space-y-3">
                    <div className="flex items-end justify-between">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-lg font-extrabold text-slate-900">${course.price}</span>
                        {course.oldPrice && <span className="text-xs font-medium text-slate-400 line-through">${course.oldPrice}</span>}
                      </div>
                      <div className="flex gap-1">
                        {course.skills.slice(0, 2).map(s => (
                          <span key={s} className="px-1.5 py-0.5 bg-slate-50 border border-slate-100 text-[9px] font-bold text-slate-500 rounded-sm">{s}</span>
                        ))}
                      </div>
                    </div>
                    <button className="group/btn w-full px-4 py-2.5 bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-all duration-300">
                      View Details
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-16 text-center border border-dashed border-slate-200 bg-slate-50/50 rounded-3xl space-y-2">
                <BookX className="w-6 h-6 mx-auto text-slate-400" />
                <h4 className="text-sm font-bold text-slate-800">No Courses Found</h4>
              </div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Toggle Action Container (Show More / Show Less) */}
        {processedCourses.length > 4 && (
          <div className="flex justify-center mt-12">
            {visibleCount === 4 ? (
              <button 
                onClick={() => setVisibleCount(8)}
                className="group px-6 py-3 bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs uppercase tracking-wider rounded-full flex items-center gap-2 shadow-md transition-all duration-300 active:scale-95"
              >
                Show More Courses
                <ArrowDownIcon className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </button>
            ) : (
              <button 
                onClick={() => setVisibleCount(4)}
                className="group px-6 py-3 bg-white border border-slate-200 text-slate-800 hover:border-blue-500 hover:text-blue-600 font-bold text-xs uppercase tracking-wider rounded-full flex items-center gap-2 shadow-xs transition-all duration-300 active:scale-95"
              >
                Show Less List
                <ArrowUpIcon className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
              </button>
            )}
          </div>
        )}

      </div>
    </section>
  );
}