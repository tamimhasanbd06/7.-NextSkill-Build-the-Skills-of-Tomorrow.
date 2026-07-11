"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  BarChart, 
  Bar,
  Cell
} from "recharts";
import { 
  Users, 
  BookOpen, 
  GraduationCap, 
  Star, 
  TrendingUp,
  Award
} from "lucide-react";

// Types
interface StatCard {
  id: string;
  icon: React.ReactNode;
  value: string;
  label: string;
  desc: string;
  borderColor: string;
}

// 4 Premium Count Cards Data
const STATS_CARDS: StatCard[] = [
  {
    id: "stat-1",
    icon: <Users className="w-5 h-5 text-blue-600" />,
    value: "12,500+",
    label: "Active Students",
    desc: "Growing every month",
    borderColor: "hover:border-blue-500/40"
  },
  {
    id: "stat-2",
    icon: <BookOpen className="w-5 h-5 text-indigo-600" />,
    value: "520+",
    label: "Premium Courses",
    desc: "Expert-vetted paths",
    borderColor: "hover:border-indigo-500/40"
  },
  {
    id: "stat-3",
    icon: <GraduationCap className="w-5 h-5 text-emerald-600" />,
    value: "65+",
    label: "Expert Instructors",
    desc: "Top industry leaders",
    borderColor: "hover:border-emerald-500/40"
  },
  {
    id: "stat-4",
    icon: <Star className="w-5 h-5 text-amber-600" />,
    value: "4.9/5",
    label: "Average Rating",
    desc: "Rated by professionals",
    borderColor: "hover:border-amber-500/40"
  }
];

// Mock Chart Data
const ENROLLMENT_DATA = [
  { name: "Jan", Students: 4000 },
  { name: "Feb", Students: 5500 },
  { name: "Mar", Students: 7200 },
  { name: "Apr", Students: 8100 },
  { name: "May", Students: 10500 },
  { name: "Jun", Students: 12500 }
];

const CATEGORY_DATA = [
  { name: "Web Dev", Courses: 145, color: "#3b82f6" },
  { name: "UI/UX", Courses: 92, color: "#6366f1" },
  { name: "AI & ML", Courses: 110, color: "#f59e0b" },
  { name: "Marketing", Courses: 64, color: "#ec4899" },
  { name: "Data Sci", Courses: 85, color: "#10b981" }
];

// Animation Framework Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
};

export default function LearningStatistics() {
  return (
    <section className="relative bg-white py-24 overflow-hidden select-none">
      
      {/* Background Polish Grid & Circles */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-35 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-indigo-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-200/50 rounded-full text-blue-600 font-bold text-xs uppercase tracking-wider">
            📊 Learning Statistics
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Trusted by Thousands of Learners Worldwide
          </h2>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
            See how our growing learning community is achieving measurable career success through elite, high-quality distributed online education.
          </p>
        </div>

        {/* ================= MAIN INTERACTIVE ROW GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Left Block: 2x2 Interactive Stats Grid (60% Desktop Layout) */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {STATS_CARDS.map((card) => (
              <motion.div
                key={card.id}
                variants={itemVariants}
                className={`group bg-white border border-slate-200/80 rounded-2xl p-5 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300 min-h-[140px] ${card.borderColor}`}
              >
                <div className="space-y-3">
                  <div className="w-9 h-9 bg-slate-50 group-hover:bg-slate-100 rounded-xl flex items-center justify-center border border-slate-100 transition-colors duration-300">
                    {card.icon}
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-slate-900 tracking-tight">
                      {card.value}
                    </h4>
                    <p className="text-xs font-bold text-slate-700 mt-0.5 tracking-tight">
                      {card.label}
                    </p>
                  </div>
                </div>
                <p className="text-[11px] text-slate-400 font-normal border-t border-slate-100/80 pt-2 mt-2">
                  {card.desc}
                </p>
              </motion.div>
            ))}

            {/* Premium Interactive Live Progress Card */}
            <motion.div 
              variants={itemVariants}
              className="sm:col-span-2 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-5 text-white flex flex-col justify-between shadow-sm"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold tracking-wide">Course Completion Rate</span>
                </div>
                <span className="text-xs font-black text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-md border border-amber-400/20">95% Global</span>
              </div>
              <div className="mt-4 space-y-1.5">
                <div className="w-full bg-slate-700/60 h-2 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-400 h-full w-[95%] rounded-full" />
                </div>
                <div className="flex items-center justify-between text-[10px] text-slate-400 font-medium">
                  <span>Student Success Criteria reached</span>
                  <span className="text-slate-300 flex items-center gap-0.5"><TrendingUp className="w-3 h-3 text-emerald-400" /> +18% MoM</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Block: Area Chart Grid Showcase (40% Desktop Layout) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 bg-slate-50 border border-slate-200/60 rounded-3xl p-5 flex flex-col justify-between shadow-inner"
          >
            <div className="mb-4">
              <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Monthly Student Enrollment</h3>
              <p className="text-[11px] text-slate-400 font-normal mt-0.5">Live platform account acquisition updates</p>
            </div>
            
            <div className="w-full h-48 md:h-56 text-[10px] font-semibold text-slate-400">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={ENROLLMENT_DATA} margin={{ top: 5, right: 5, left: -25, bottom: 0 }}>
                  <XAxis dataKey="name" stroke="#94a3b8" tickLine={false} />
                  <YAxis stroke="#94a3b8" tickLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: "#0f172a", border: "none", borderRadius: "12px", color: "#fff", fontSize: "11px" }}
                    itemStyle={{ color: "#3b82f6" }}
                  />
                  <defs>
                    <linearGradient id="colorStudents" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Area type="monotone" dataKey="Students" stroke="#3b82f6" strokeWidth={2.5} fillOpacity={1} fill="url(#colorStudents)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

        </div>

        {/* ================= SECONDARY ROW: CATEGORY DATA BAR CHART ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white border border-slate-200/80 rounded-3xl p-5 md:p-6 shadow-2xs"
        >
          <div className="mb-6">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Courses Distributed By Category</h3>
            <p className="text-[11px] text-slate-400 font-normal mt-0.5">Total live library catalog configurations</p>
          </div>

          <div className="w-full h-44 text-[10px] font-semibold text-slate-400">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={CATEGORY_DATA} margin={{ top: 5, right: 5, left: -25, bottom: 0 }} barSize={32}>
                <XAxis dataKey="name" stroke="#94a3b8" tickLine={false} />
                <YAxis stroke="#94a3b8" tickLine={false} />
                <Tooltip
                  contentStyle={{ backgroundColor: "#0f172a", border: "none", borderRadius: "12px", color: "#fff", fontSize: "11px" }}
                  cursor={{ fill: '#f8fafc' }}
                />
                <Bar dataKey="Courses" radius={[6, 6, 0, 0]}>
                  {CATEGORY_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* ================= BOTTOM METRICS COMPLEMENT STRIP ================= */}
        <div className="mt-14 pt-6 border-t border-slate-200/50 flex flex-wrap justify-center items-center gap-x-12 gap-y-4 text-center text-slate-400 text-xs font-bold uppercase tracking-wider">
          <div><span className="text-slate-800 font-black">10K+</span> Students</div>
          <div><span className="text-slate-800 font-black">520+</span> Courses</div>
          <div><span className="text-slate-800 font-black">65+</span> Mentors</div>
          <div><span className="text-slate-800 font-black">4.9★</span> Global Rating</div>
        </div>

      </div>
    </section>
  );
}