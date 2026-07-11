"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Users2, 
  FolderGit2, 
  Infinity as InfinityIcon, 
  Award, 
  Laptop, 
  MessagesSquare, 
  ArrowRight,
  Star
} from "lucide-react";

// Feature Interface
interface Feature {
  id: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
}

// 6 Premium Feature Cards Data
const FEATURES_DATA: Feature[] = [
  {
    id: "feat-1",
    icon: <Users2 className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform duration-300" />,
    title: "Expert Instructors",
    desc: "Learn directly from experienced professionals with real-world industry knowledge."
  },
  {
    id: "feat-2",
    icon: <FolderGit2 className="w-5 h-5 text-indigo-600 group-hover:scale-110 transition-transform duration-300" />,
    title: "Practical Projects",
    desc: "Build portfolio-ready, industry-relevant projects with every course module."
  },
  {
    id: "feat-3",
    icon: <InfinityIcon className="w-5 h-5 text-purple-600 group-hover:scale-110 transition-transform duration-300" />,
    title: "Lifetime Access",
    desc: "Enroll once and get unlimited lifelong access to updated lecture resources."
  },
  {
    id: "feat-4",
    icon: <Award className="w-5 h-5 text-amber-600 group-hover:scale-110 transition-transform duration-300" />,
    title: "Verified Certificates",
    desc: "Earn high-value, verifiable completion credentials to boost your CV value."
  },
  {
    id: "feat-5",
    icon: <Laptop className="w-5 h-5 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />,
    title: "Flexible Learning",
    desc: "Study at your own pace on any modern mobile, desktop, or tablet device."
  },
  {
    id: "feat-6",
    icon: <MessagesSquare className="w-5 h-5 text-pink-600 group-hover:scale-110 transition-transform duration-300" />,
    title: "Community Support",
    desc: "Interact inside private active discourse forums with peer developers."
  }
];

// Stats Data
const STATS_DATA = [
  { label: "Active Students", value: "10,000+" },
  { label: "Premium Courses", value: "500+" },
  { label: "Expert Mentors", value: "50+" },
  { label: "Average Rating", value: "4.9★", isAccent: true }
];

// Framer Motion Variants for Stagger Effect
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
};

export default function WhyChooseUs() {
  return (
    <section className="relative bg-gradient-to-b from-white via-slate-50/50 to-white py-24 overflow-hidden select-none">
      
      {/* Premium Background Decor Shapes */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-indigo-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-200/50 rounded-full text-blue-600 font-bold text-xs uppercase tracking-wider">
            ⭐ Why Choose Us
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Thousands of Learners Trust CourseHub
          </h2>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-normal">
            Learn from industry experts with practical, career-focused course guidelines, lifetime content access, and active engineering forums.
          </p>
        </div>

        {/* ================= MAIN CONTENT LAYOUT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Premium Interactive Illustration Preview */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative group"
          >
            {/* Soft Ambient Shadow Layer */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-indigo-500/5 rounded-3xl blur-2xl -z-10 group-hover:scale-105 transition-transform duration-500" />
            
            {/* Main Interactive Student Dashboard Mock Image */}
            <div className="relative border border-slate-200 bg-white p-3 rounded-3xl shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" 
                alt="Students learning online" 
                className="w-full h-auto rounded-2xl object-cover"
              />
              
              {/* Floating Mini Overlay Chip Badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-xs border border-slate-100 rounded-2xl p-3 shadow-xl flex items-center gap-3 animate-bounce-slow">
                <div className="w-9 h-9 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-500">
                  <Star className="w-4 h-4 fill-amber-500" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800">4.9/5 Rating</h4>
                  <p className="text-[10px] text-slate-400 font-medium">By 10k+ verified developers</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 2x3 Feature Card Grid Matrix */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {FEATURES_DATA.map((feat) => (
              <motion.div
                key={feat.id}
                variants={cardVariants}
                className="group relative bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs hover:shadow-md hover:border-blue-500/40 transition-all duration-300 min-h-[140px] flex flex-col justify-start overflow-hidden"
              >
                {/* Micro Ambient Hover Glow Node */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="space-y-3">
                  {/* Styled Icon Wrapper */}
                  <div className="w-10 h-10 bg-slate-50 group-hover:bg-blue-50 rounded-xl flex items-center justify-center border border-slate-100/80 transition-colors duration-300 flex-shrink-0">
                    {feat.icon}
                  </div>
                  
                  {/* Content Blocks */}
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-slate-800 tracking-tight group-hover:text-blue-600 transition-colors duration-200">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-normal leading-relaxed line-clamp-2">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>

        {/* ================= TRUST STATISTICS HORIZONTAL ROW ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20 pt-8 border-t border-slate-200/60 grid grid-cols-2 md:grid-cols-4 gap-6 items-center text-center bg-slate-50/50 rounded-3xl p-6 border border-slate-100"
        >
          {STATS_DATA.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <h4 className={`text-2xl sm:text-3xl font-black tracking-tight 
                ${stat.isAccent ? "text-amber-500" : "text-slate-900"}`}
              >
                {stat.value}
              </h4>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* ================= BOTTOM CTA CONTEXT ================= */}
        <div className="text-center mt-16 space-y-4 max-w-sm mx-auto">
          <p className="text-xs font-bold text-slate-700 tracking-wide">
            Ready to start your premium learning journey?
          </p>
          <button className="group px-6 py-3 bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs uppercase tracking-wider rounded-full flex items-center justify-center gap-2 shadow-sm shadow-slate-900/5 transition-all duration-300 active:scale-95 mx-auto">
            Explore All Courses 
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        </div>

      </div>
    </section>
  );
}