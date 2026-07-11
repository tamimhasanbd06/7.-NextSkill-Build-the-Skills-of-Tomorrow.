"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { 
  FaPlay, 
  FaStar, 
  FaAward, 
  FaUserPlus, 
  FaArrowRight, 
  FaGoogle, 
  FaMicrosoft, 
  FaMeta, 
  FaAmazon, 
  FaArrowDown,
  FaMagnifyingGlass 
} from "react-icons/fa6";

const TYPING_WORDS = ["React.js", "Next.js", "TypeScript", "AI Models"];

const NOTIFICATIONS = [
  "Ahmed enrolled in Next.js Masterclass",
  "Sadia started UI/UX Bootcamp",
  "Tamim unlocked Python Certificate",
  "Nisha joined AI & Data Science Career Path"
];

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [notiIndex, setNotiIndex] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [studentsCount, setStudentsCount] = useState(9850);

  const containerRef = useRef<HTMLDivElement>(null);

  // Ultra-smooth spring physics parameters for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // FIXED: useTransform hooks used instead of inline .transform()
  const transformX1 = useTransform(smoothX, (v) => v * -1.4);
  const transformY1 = useTransform(smoothY, (v) => v * -1.4);

  const transformX2 = useTransform(smoothX, (v) => v * 1.1);
  const transformY2 = useTransform(smoothY, (v) => v * -1.1);

  const transformX3 = useTransform(smoothX, (v) => v * -0.7);
  const transformY3 = useTransform(smoothY, (v) => v * 1.3);

  const transformX4 = useTransform(smoothX, (v) => v * 1.3);
  const transformY4 = useTransform(smoothY, (v) => v * 0.7);

  // 1. Typing Animation Logic
  useEffect(() => {
    const currentWord = TYPING_WORDS[wordIndex];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText(currentWord.substring(0, typedText.length - 1));
      }, 40);
    } else {
      timer = setTimeout(() => {
        setTypedText(currentWord.substring(0, typedText.length + 1));
      }, 80);
    }

    if (!isDeleting && typedText === currentWord) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && typedText === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % TYPING_WORDS.length);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, wordIndex]);

  // 2. Rotating Notifications
  useEffect(() => {
    const interval = setInterval(() => {
      setNotiIndex((prev) => (prev + 1) % NOTIFICATIONS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  // 3. Live Counter Simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setStudentsCount((prev) => prev + Math.floor(Math.random() * 2) + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // 4. Parallax Mouse Tracker
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    const x = (clientX / innerWidth) - 0.5;
    const y = (clientY / innerHeight) - 0.5;

    mouseX.set(x * 30); 
    mouseY.set(y * 30); 
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen bg-slate-50 pt-32 pb-16 flex flex-col justify-between overflow-hidden select-none"
    >
      {/* Background Micro Grid and Ambient Blur Blobs */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_10%,#000_60%,transparent_100%)] opacity-50 pointer-events-none" />
      <div className="absolute -top-20 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-blue-300/10 to-indigo-400/10 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-amber-200/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center z-10 my-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center w-full">
          
          {/* ================= LEFT SIDE ================= */}
          <div className="lg:col-span-6 space-y-7 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-slate-200 shadow-sm rounded-full text-slate-800 font-medium text-xs tracking-wide"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Top Tier Education Platform
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.05]">
              Master Skills That <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-indigo-500 bg-clip-text text-transparent min-h-[70px] inline-block pb-1">
                Shape Your {typedText}
                <span className="text-blue-600 font-light ml-1 animate-[pulse_0.8s_infinite]">|</span>
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-500 max-w-lg mx-auto lg:mx-0 leading-relaxed font-normal">
              Accelerate your technology career with engineered paths, production-level codebases, and verified direct mentorship models.
            </p>

            {/* Full-Width Minimalist Search Bar */}
            <div className="max-w-md mx-auto lg:mx-0 p-1.5 bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-slate-300 rounded-full flex items-center gap-2 transition-all duration-300">
              <div className="flex items-center gap-3 pl-3.5 w-full">
                <FaMagnifyingGlass className="text-slate-400 text-sm flex-shrink-0" />
                <input 
                  type="text" 
                  placeholder="What do you want to learn today?"
                  className="w-full py-2 bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400 font-medium"
                />
              </div>
              <button className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 active:scale-[0.98] text-white font-medium text-xs tracking-wide rounded-full transition-all flex-shrink-0 shadow-sm">
                Search
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1">
              <button className="group px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-full shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2.5">
                Explore Tech Paths
                <FaArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button 
                onClick={() => setIsVideoOpen(true)}
                className="px-6 py-3.5 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-semibold text-sm rounded-full shadow-sm transition-all duration-200 flex items-center gap-2.5"
              >
                <span className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 text-[10px]">
                  <FaPlay className="ml-0.5" />
                </span>
                Watch System Demo
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-3 text-slate-500">
              <div className="flex -space-x-2 overflow-hidden">
                {[
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
                ].map((src, i) => (
                  <img key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover shadow-sm" src={src} alt="user avatar" />
                ))}
              </div>
              <p className="text-xs font-medium text-slate-500">
                Trusted by <span className="text-slate-900 font-bold">{studentsCount.toLocaleString()}</span> platform developers globally.
              </p>
            </div>
          </div>

          {/* ================= RIGHT SIDE INTERACTIVE PREVIEW ================= */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[460px] lg:min-h-[520px]">
            
            <motion.div 
              style={{ x: smoothX, y: smoothY }}
              className="relative w-full max-w-[460px] aspect-[4/3] bg-white border border-slate-200 rounded-[32px] p-3.5 shadow-2xl shadow-slate-200/80 z-10 transition-shadow duration-500 hover:shadow-slate-300/60"
            >
              <div className="w-full h-full bg-slate-950 rounded-[22px] relative overflow-hidden group shadow-inner">
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80" 
                  alt="Architecture Hub Preview" 
                  className="w-full h-full object-cover opacity-40 mix-blend-luminosity scale-100 group-hover:scale-[1.03] transition-transform duration-[1000ms] cubic-bezier(0.16, 1, 0.3, 1)" 
                />
                <button 
                  onClick={() => setIsVideoOpen(true)}
                  className="absolute inset-0 m-auto w-14 h-14 bg-white hover:bg-blue-600 text-slate-900 hover:text-white rounded-full flex items-center justify-center shadow-xl transition-all duration-300 active:scale-90"
                >
                  <FaPlay className="text-xs ml-0.5" />
                </button>
                <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-md text-[10px] text-slate-200 font-semibold tracking-wide px-3 py-1.5 rounded-xl border border-white/5">
                  Production Preview Interface
                </div>
              </div>
            </motion.div>

            {/* Floating Element 1 */}
            <motion.div 
              style={{ x: transformX1, y: transformY1 }}
              className="absolute -top-2 left-6 bg-white border border-slate-200 shadow-xl rounded-2xl p-3 flex items-center gap-3 z-20 max-w-[190px]"
            >
              <div className="w-9 h-9 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center font-bold text-sm">TS</div>
              <div>
                <h4 className="text-xs font-bold text-slate-800 truncate">TypeScript Pro</h4>
                <div className="flex items-center gap-0.5 text-[9px] text-amber-500 mt-0.5">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
              </div>
            </motion.div>

            {/* Floating Element 2 */}
            <motion.div 
              style={{ x: transformX2, y: transformY2 }}
              className="absolute top-16 -right-2 bg-white border border-slate-200 shadow-lg rounded-full px-4 py-2 flex items-center gap-2 z-20"
            >
              <div className="p-1 bg-emerald-50 text-emerald-600 rounded-full"><FaAward className="text-xs" /></div>
              <span className="text-xs font-bold text-slate-800 whitespace-nowrap tracking-wide">ISO Verified</span>
            </motion.div>

            {/* Floating Element 3 */}
            <motion.div 
              style={{ x: transformX3, y: transformY3 }}
              className="absolute bottom-8 -left-4 bg-white border border-slate-200 shadow-xl rounded-2xl p-4 text-center min-w-[110px] z-20"
            >
              <span className="text-2xl font-black text-blue-600 tracking-tight">99.4%</span>
              <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Success Rate</p>
            </motion.div>

            {/* Floating Element 4 */}
            <motion.div 
              style={{ x: transformX4, y: transformY4 }}
              className="absolute bottom-2 right-4 bg-slate-900 shadow-xl rounded-2xl p-3 flex items-center gap-3 z-20 text-white"
            >
              <div className="p-2 bg-blue-500/10 text-blue-400 rounded-xl"><FaUserPlus className="text-xs" /></div>
              <div>
                <span className="block text-[9px] text-slate-400 font-medium tracking-wide">Engine Queue</span>
                <span className="text-xs font-semibold text-white">+250 Active</span>
              </div>
            </motion.div>

            {/* Toast Streams */}
            <div className="absolute top-1/3 -right-14 z-30 hidden sm:block pointer-events-none">
              <AnimatePresence mode="wait">
                <motion.div
                  key={notiIndex}
                  initial={{ opacity: 0, x: 20, y: 5, scale: 0.96 }}
                  animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -15, scale: 0.96 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white/95 backdrop-blur-md border border-slate-200 px-4 py-3 rounded-xl shadow-xl shadow-slate-200/40 max-w-[210px] text-xs font-medium text-slate-700 flex items-center gap-2.5"
                >
                  <span className="flex-shrink-0 text-sm">⚡</span>
                  <span className="leading-snug">{NOTIFICATIONS[notiIndex]}</span>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-t border-slate-200/60 pt-10 mt-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-center md:text-left">
          
          <div className="md:col-span-5 space-y-2.5">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Consolidated Infrastructure</span>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-slate-400 text-lg">
              <FaGoogle className="hover:text-slate-700 transition-colors duration-200" />
              <FaMicrosoft className="hover:text-slate-700 transition-colors duration-200" />
              <FaMeta className="hover:text-slate-700 transition-colors duration-200" />
              <FaAmazon className="hover:text-slate-700 transition-colors duration-200" />
              <span className="font-extrabold tracking-tighter text-xs sm:text-sm hover:text-slate-700 transition-colors duration-200 cursor-default">NETFLIX</span>
            </div>
          </div>

          <div className="md:col-span-5 flex justify-center md:justify-start items-center gap-8 sm:gap-12 border-t border-b md:border-none border-slate-200/40 py-5 md:py-0">
            <div>
              <span className="block text-2xl font-extrabold text-slate-900 tracking-tight">10k+</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Engineers</span>
            </div>
            <div>
              <span className="block text-2xl font-extrabold text-slate-900 tracking-tight">500+</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Modules</span>
            </div>
            <div>
              <span className="block text-2xl font-extrabold text-slate-900 tracking-tight">50+</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Architects</span>
            </div>
            <div>
              <span className="block text-2xl font-extrabold text-slate-900 tracking-tight flex items-center justify-center md:justify-start gap-0.5">4.9</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Score Index</span>
            </div>
          </div>

          <div className="md:col-span-2 flex flex-col items-center justify-center md:items-end">
            <div className="flex flex-col items-center text-slate-400/80 gap-1 animate-bounce cursor-pointer">
              <span className="text-[9px] font-bold uppercase tracking-widest">Scroll</span>
              <FaArrowDown className="w-2.5 h-2.5 text-blue-600" />
            </div>
          </div>

        </div>
      </div>

      {/* ================= MODAL WITH DEDICATED DEVELOPMENT COURSE VIDEO ================= */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoOpen(false)}
            className="fixed inset-0 z-[100] bg-slate-950/40 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div 
              initial={{ scale: 0.97, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.97, y: 15 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl bg-black aspect-video rounded-2xl overflow-hidden shadow-2xl relative border border-white/10"
            >
              {/* FIXED: Added a real, dedicated ed-tech introductory video link */}
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/bMknfKXIFA8?autoplay=1" 
                title="React Course Introduction Overview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}