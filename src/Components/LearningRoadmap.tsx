"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  BookOpen, 
  PlayCircle, 
  Code2, 
  Trophy, 
  Rocket, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";

interface RoadmapStep {
  id: number;
  icon: React.ReactNode;
  title: string;
  desc: string;
  colorClass: string;
  bgClass: string;
}

const ROADMAP_STEPS: RoadmapStep[] = [
  {
    id: 1,
    icon: <BookOpen className="w-5 h-5 text-blue-600" />,
    title: "Choose a Course",
    desc: "Browse categories and select the course that matches your goals.",
    colorClass: "border-blue-500/20 group-hover:border-blue-500",
    bgClass: "bg-blue-50"
  },
  {
    id: 2,
    icon: <PlayCircle className="w-5 h-5 text-indigo-600" />,
    title: "Start Learning",
    desc: "Watch lessons, complete quizzes, and learn at your own pace.",
    colorClass: "border-indigo-500/20 group-hover:border-indigo-500",
    bgClass: "bg-indigo-50"
  },
  {
    id: 3,
    icon: <Code2 className="w-5 h-5 text-amber-600" />,
    title: "Build Real Projects",
    desc: "Apply your knowledge by building practical, portfolio-ready projects.",
    colorClass: "border-amber-500/20 group-hover:border-amber-500",
    bgClass: "bg-amber-50"
  },
  {
    id: 4,
    icon: <Trophy className="w-5 h-5 text-emerald-600" />,
    title: "Earn Certificate",
    desc: "Complete the course assessment and receive a verified certificate.",
    colorClass: "border-emerald-500/20 group-hover:border-emerald-500",
    bgClass: "bg-emerald-50"
  },
  {
    id: 5,
    icon: <Rocket className="w-5 h-5 text-rose-600" />,
    title: "Launch Your Career",
    desc: "Use your skills to freelance, get a job, or advance your current position.",
    colorClass: "border-rose-500/20 group-hover:border-rose-500",
    bgClass: "bg-rose-50"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export default function LearningRoadmap() {
  return (
    <section className="relative bg-gradient-to-b from-white via-slate-50/40 to-white py-24 overflow-hidden select-none">
      
      {/* Background Polish Dots */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-40 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 border border-amber-200/60 rounded-full text-amber-700 font-bold text-xs uppercase tracking-wider">
            🗺️ Learning Roadmap
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Your Journey to Career Success Starts Here
          </h2>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
            Follow our proven, step-by-step learning framework designed to take you from a complete beginner to a production-ready engineering professional.
          </p>
          
          {/* Trust Metric Badge */}
          <div className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-100 rounded-full px-3 py-1 text-[11px] font-bold text-emerald-700 mt-2">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>95% of active learners complete at least one real-world project</span>
          </div>
        </div>

        {/* ================= TIMELINE MATRIX CONTAINER ================= */}
        <div className="relative">
          
          {/* Desktop Connecting Line (Hidden on Mobile) */}
          <div className="hidden lg:block absolute top-[52px] left-[5%] right-[5%] h-0.5 bg-linear-to-r from-blue-300 via-amber-300 to-rose-300 bg-[size:12px_6px] opacity-40 -z-10" />

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 relative"
          >
            {ROADMAP_STEPS.map((step, index) => (
              <motion.div
                key={step.id}
                variants={stepVariants}
                className="group relative flex flex-col items-center lg:items-start text-center lg:text-left"
              >
                {/* Mobile Vertical Connecting Line */}
                {index !== ROADMAP_STEPS.length - 1 && (
                  <div className="lg:hidden absolute top-24 bottom-[-32px] left-1/2 w-0.5 border-l-2 border-dashed border-slate-200 -z-10" />
                )}

                {/* Step Node Icon Frame */}
                <div className={`w-14 h-14 rounded-2xl ${step.bgClass} border-2 border-white flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg relative z-20`}>
                  {step.icon}
                  {/* Step Count Number Chip */}
                  <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-slate-900 text-white rounded-full flex items-center justify-center text-[10px] font-black">
                    {step.id}
                  </span>
                </div>

                {/* Content Block Meta */}
                <div className="mt-5 space-y-2 bg-white lg:bg-transparent p-5 lg:p-0 rounded-2xl border border-slate-100 lg:border-none shadow-xs lg:shadow-none w-full max-w-sm sm:max-w-md lg:max-w-none transition-all duration-300 group-hover:border-slate-200">
                  <h3 className="text-sm font-bold text-slate-800 tracking-tight group-hover:text-blue-600 transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-normal leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ================= BOTTOM METRIC & CALL TO ACTION ================= */}
        <div className="mt-20 text-center space-y-5">
          <div className="text-xs text-slate-400 font-medium">
            Average completion trajectory: <span className="text-slate-800 font-bold">8–12 weeks per specialized track</span>
          </div>
          
          <div className="space-y-4 max-w-xs mx-auto">
            <p className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Ready to begin your journey?
            </p>
            <button className="group px-7 py-3.5 bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs uppercase tracking-wider rounded-full flex items-center justify-center gap-2 shadow-sm transition-all duration-300 active:scale-95 mx-auto">
              Explore Available Paths 
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}