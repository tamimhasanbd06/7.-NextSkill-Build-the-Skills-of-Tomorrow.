"use client";

import React, { useState, useEffect, useCallback } from "react";
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
  BookX
} from "lucide-react";

interface MongoCourse {
  _id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  thumbnail: string;
  bannerImage: string;
  previewVideo: string;
  category: string;
  level: string;
  language: string;
  instructor: { name: string; avatar: string; title: string };
  price: number;
  discountPrice?: number;
  duration: string;
  totalLessons: number;
  rating: number;
  totalReviews: number;
  enrolledStudents: number;
  tags: string[];
  skills: string[];
  featured: boolean;
}

const FILTERS = ["All", "Web Development", "UI/UX Design", "AI", "Data Science", "Marketing", "Mobile Development"];
const SORTS = ["Most Popular", "Highest Rated", "Price Low → High", "Price High → Low"];

export default function PopularCourses() {
  const [courses, setCourses] = useState<MongoCourse[]>([]);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeSort, setActiveSort] = useState("Most Popular");
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // Database Connected Wishlist State (Stores course IDs)
  const [wishlist, setWishlist] = useState<string[]>([]);
  
  // Demo User Email (Replace this with your auth context/session email)
  const loggedInUserEmail = "testuser@gmail.com"; 

  // Server-driven pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limitSetting = 6;

  // Debounce logic for search optimization
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
      setCurrentPage(1);
    }, 400);
    return () => clearTimeout(handler);
  }, [search]);

  // Fetch Wishlist from Database
  const fetchUserWishlist = useCallback(async () => {
    if (!loggedInUserEmail) return;
    try {
      const response = await fetch(`http://localhost:8000/api/wishlist?email=${loggedInUserEmail}`);
      const data = await response.json();
      if (data.success) {
        // Assuming backend returns an array of course IDs: ["id1", "id2"]
        setWishlist(data.wishlistIds || []);
      }
    } catch (error) {
      console.error("Failed to fetch wishlist from node pipeline:", error);
    }
  }, [loggedInUserEmail]);

  // Fetch from Express API Engine
  const fetchServerCourses = useCallback(async () => {
    setIsLoading(true);
    try {
      const urlQuery = new URLSearchParams({
        search: debouncedSearch,
        category: activeFilter,
        sort: activeSort,
        page: String(currentPage),
        limit: String(limitSetting),
      });

      const response = await fetch(`http://localhost:8000/api/courses?${urlQuery.toString()}`);
      const data = await response.json();
      
      if (data.success) {
        setCourses(data.courses);
        setTotalPages(data.pagination.totalPages);
      }
    } catch (error) {
      console.error("Failed to query Express Mongo Node pipeline:", error);
    } finally {
      setIsLoading(false);
    }
  }, [debouncedSearch, activeFilter, activeSort, currentPage]);

  useEffect(() => {
    fetchServerCourses();
    fetchUserWishlist();
  }, [fetchServerCourses, fetchUserWishlist]);

  // Database Driven Wishlist Toggle Handler
  const handleWishlistToggle = async (courseId: string) => {
    if (!loggedInUserEmail) {
      alert("Please log in to add courses to your wishlist!");
      return;
    }

    // Optimistic UI Update (ফ্রন্টএন্ডে সাথে সাথে রেসপন্স দেখানোর জন্য)
    const isAlreadyAdded = wishlist.includes(courseId);
    if (isAlreadyAdded) {
      setWishlist(prev => prev.filter(id => id !== courseId));
    } else {
      setWishlist(prev => [...prev, courseId]);
    }

    try {
      // API call to update database collection
      const response = await fetch("http://localhost:8000/api/wishlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userEmail: loggedInUserEmail,
          courseId: courseId
        }),
      });

      const data = await response.json();
      if (!data.success) {
        // রিকোয়েস্ট ফেইল হলে পূর্বের অবস্থায় ব্যাক করবে
        fetchUserWishlist();
      }
    } catch (error) {
      console.error("Error updating database wishlist collection:", error);
      fetchUserWishlist(); // Rollback on connection error
    }
  };

  return (
    <section className="relative bg-white py-24 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 text-center md:text-left max-w-xl mx-auto md:mx-0">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 border border-amber-200/60 rounded-full text-amber-700 font-semibold text-xs uppercase tracking-wider">
              🔥 Dynamic Interactive Hub
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Master In-Demand Skills with Expert-Led Courses
            </h2>
          </div>
        </div>

        {/* Filters Matrix bar */}
        <div className="space-y-4 mb-10 bg-slate-50 p-4 rounded-3xl border border-slate-200/60">
          <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
            <div className="relative w-full lg:max-w-xs bg-white rounded-full border border-slate-200 px-4 py-2 flex items-center gap-2 shadow-2xs">
              <Search className="w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search database documents..." 
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
                          onClick={() => { setActiveSort(sort); setIsSortOpen(false); setCurrentPage(1); }}
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
                onClick={() => { setActiveFilter(filter); setCurrentPage(1); }}
                className={`px-4 py-1.5 text-xs font-bold rounded-full border transition-all whitespace-nowrap
                  ${activeFilter === filter ? "bg-slate-900 border-slate-900 text-white" : "bg-white border-slate-200 text-slate-600"}`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Layout Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          <AnimatePresence mode="popLayout">
            {isLoading ? (
              Array.from({ length: 3 }).map((_, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-3xl p-4 h-[440px] animate-pulse space-y-4">
                  <div className="w-full aspect-[16/10] bg-slate-100 rounded-2xl" />
                  <div className="h-4 bg-slate-100 rounded-md w-1/4" />
                  <div className="h-5 bg-slate-100 rounded-md w-11/12" />
                  <div className="h-10 bg-slate-100 rounded-xl w-full" />
                </div>
              ))
            ) : courses.length > 0 ? (
              courses.map((course) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  key={course._id}
                  className="group relative bg-white border border-slate-200 rounded-3xl p-4 flex flex-col justify-between hover:shadow-xl hover:border-blue-500/30 transition-all duration-300 overflow-hidden"
                >
                  <div className="space-y-3.5">
                    <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 relative shadow-inner">
                      <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" />
                      <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                        {course.featured ? (
                          <span className="px-2.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider rounded-md border bg-amber-500 border-amber-600 text-white">
                            Featured
                          </span>
                        ) : <div />}
                        
                        {/* Interactive Wishlist Button Connected To MongoDB */}
                        <button 
                          onClick={(e) => { e.preventDefault(); handleWishlistToggle(course._id); }}
                          className="w-7 h-7 bg-white/95 rounded-full flex items-center justify-center text-slate-400 hover:text-red-500 pointer-events-auto transition-all shadow-xs"
                        >
                          <Heart className={`w-3.5 h-3.5 transition-colors ${wishlist.includes(course._id) ? "fill-red-500 text-red-500" : "text-slate-400"}`} />
                        </button>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider block">{course.category}</span>
                      <h3 className="text-sm font-bold text-slate-800 tracking-tight leading-snug group-hover:text-blue-600 line-clamp-2 min-h-[40px]">{course.title}</h3>
                      <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">{course.shortDescription}</p>
                    </div>

                    <div className="flex items-center gap-2 pt-0.5">
                      <img src={course.instructor?.avatar} alt={course.instructor?.name} className="w-5 h-5 rounded-full object-cover" />
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold text-slate-700">{course.instructor?.name}</span>
                        <span className="text-[9px] text-slate-400 font-medium">{course.instructor?.title}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 pt-2 border-t border-b border-slate-100 py-2.5 text-[11px] font-semibold text-slate-500">
                      <div className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                        <span>{course.rating} ({course.totalReviews})</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-slate-400" />
                        <span>{course.enrolledStudents?.toLocaleString()} Devs</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                        <span>{course.totalLessons} Lessons</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 space-y-3">
                    <div className="flex items-end justify-between">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-lg font-extrabold text-slate-900">${course.price}</span>
                        {course.discountPrice && <span className="text-xs font-medium text-slate-400 line-through">${course.discountPrice}</span>}
                      </div>
                      <div className="flex gap-1">
                        {course.skills?.slice(0, 2).map(s => (
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
                <h4 className="text-sm font-bold text-slate-800">No Custom Pipeline Courses Found</h4>
              </div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 mt-12">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              className="px-4 py-2 text-xs font-bold rounded-xl border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 disabled:opacity-40 disabled:pointer-events-none transition-all"
            >
              Previous
            </button>
            <span className="text-xs font-bold text-slate-500">
              Page {currentPage} of {totalPages}
            </span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              className="px-4 py-2 text-xs font-bold rounded-xl bg-slate-900 text-white hover:bg-blue-600 disabled:opacity-40 disabled:pointer-events-none transition-all"
            >
              Next
            </button>
          </div>
        )}

      </div>
    </section>
  );
}