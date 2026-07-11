"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Star, 
  Users, 
  BookOpen, 
  ArrowRight, 
  CheckCircle2 
} from "lucide-react";
// react-icons থেকে সোশ্যাল আইকন ইমপোর্ট করা হয়েছে
import { FaLinkedin, FaGithub } from "react-icons/fa6";

// Instructor Interface
interface Instructor {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  experience: string;
  rating: number;
  students: string;
  courses: number;
  bio: string;
  specialization: string[];
  linkedin: string;
  github: string;
}

// 4 Premium Instructor Mock Data with Online Images
const INSTRUCTORS_DATA: Instructor[] = [
  {
    id: "inst-1",
    name: "Sarah Johnson",
    role: "Senior Frontend Engineer",
    company: "Google",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    experience: "8+ Years Exp",
    rating: 4.9,
    students: "12K+",
    courses: 14,
    bio: "Passionate educator helping developers build production-ready, accessible web applications.",
    specialization: ["React", "Next.js", "TypeScript"],
    linkedin: "#",
    github: "#"
  },
  {
    id: "inst-2",
    name: "Michael Chen",
    role: "Principal Data Scientist",
    company: "Meta",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    experience: "10+ Years Exp",
    rating: 4.9,
    students: "18K+",
    courses: 9,
    bio: "Specializing in large language models, automated pipelines, and neural network scaling architectures.",
    specialization: ["Python", "PyTorch", "LLMs"],
    linkedin: "#",
    github: "#"
  },
  {
    id: "inst-3",
    name: "Emma Wilson",
    role: "Lead Product Designer",
    company: "Figma",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    experience: "7+ Years Exp",
    rating: 4.8,
    students: "9K+",
    courses: 11,
    bio: "Crafting modern design frameworks and system architectures optimized for seamless user adoption.",
    specialization: ["Figma", "UI/UX", "Systems"],
    linkedin: "#",
    github: "#"
  },
  {
    id: "inst-4",
    name: "David Brown",
    role: "Head of Cyber Security",
    company: "Microsoft",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    experience: "9+ Years Exp",
    rating: 5.0,
    students: "6K+",
    courses: 8,
    bio: "Securing modern enterprise networks and training next-gen white-hat penetration specialists.",
    specialization: ["Linux", "SecOps", "Penetration"],
    linkedin: "#",
    github: "#"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
};

export default function FeaturedInstructors() {
  return (
    <section className="relative bg-slate-50/50 py-24 overflow-hidden select-none">
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-indigo-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 text-center md:text-left max-w-xl mx-auto md:mx-0">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-200/50 rounded-full text-blue-600 font-bold text-xs uppercase tracking-wider">
              👨‍🏫 Featured Instructors
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Learn from Industry Experts
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              Meet our world-class, experienced mentors who bring verified industry expertise straight into your personalized engineering curriculum.
            </p>
          </div>
          <button className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 font-semibold text-sm rounded-full shadow-2xs transition-all duration-300 flex-shrink-0">
            View All Instructors <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* INSTRUCTORS GRID MATRIX */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
        >
          {INSTRUCTORS_DATA.map((mentor) => (
            <motion.div
              key={mentor.id}
              variants={cardVariants}
              className="group relative bg-white border border-slate-200/80 rounded-3xl p-5 flex flex-col justify-between hover:shadow-xl hover:border-blue-500/30 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="space-y-4 text-center">
                {/* Profile Media Frame */}
                <div className="relative w-24 h-24 mx-auto rounded-full ring-4 ring-slate-100/80 group-hover:ring-blue-500/20 overflow-hidden transition-all duration-500">
                  <img 
                    src={mentor.image} 
                    alt={mentor.name} 
                    className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-1 right-1 bg-white rounded-full p-0.5 shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 fill-blue-50" />
                  </div>
                </div>

                {/* Info Affiliation */}
                <div>
                  <h3 className="text-base font-bold text-slate-800 tracking-tight flex items-center justify-center gap-1">
                    {mentor.name}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mt-0.5">
                    {mentor.role}
                  </p>
                  <span className="inline-block mt-1 text-[10px] font-bold text-blue-600 bg-blue-50/80 border border-blue-100 px-2 py-0.5 rounded-md">
                    @{mentor.company}
                  </span>
                </div>

                <div className="inline-block px-2.5 py-0.5 bg-slate-50 border border-slate-100 text-[10px] font-bold text-slate-400 rounded-md">
                  {mentor.experience}
                </div>

                <p className="text-xs text-slate-400 font-normal leading-relaxed line-clamp-2 min-h-[36px]">
                  {mentor.bio}
                </p>

                <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
                  {mentor.specialization.map((skill) => (
                    <span key={skill} className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-medium rounded-md">
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Metric Tracker */}
                <div className="grid grid-cols-3 gap-2 border-t border-slate-100/80 pt-3 text-[11px] font-semibold text-slate-500">
                  <div className="space-y-0.5">
                    <div className="flex items-center justify-center gap-0.5 text-amber-500 font-bold">
                      <Star className="w-3 h-3 fill-amber-500" />
                      <span>{mentor.rating}</span>
                    </div>
                    <p className="text-[9px] text-slate-400 uppercase tracking-tight font-bold">Rating</p>
                  </div>
                  <div className="space-y-0.5 border-l border-r border-slate-100">
                    <div className="text-slate-800 font-bold flex items-center justify-center gap-0.5">
                      <Users className="w-3 h-3 text-slate-400" />
                      <span>{mentor.students}</span>
                    </div>
                    <p className="text-[9px] text-slate-400 uppercase tracking-tight font-bold">Devs</p>
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-slate-800 font-bold flex items-center justify-center gap-0.5">
                      <BookOpen className="w-3 h-3 text-slate-400" />
                      <span>{mentor.courses}</span>
                    </div>
                    <p className="text-[9px] text-slate-400 uppercase tracking-tight font-bold">Courses</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-5 pt-3 border-t border-slate-100/50 flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <a href={mentor.linkedin} className="w-8 h-8 rounded-xl bg-slate-50 text-slate-400 hover:text-blue-600 hover:bg-blue-50 border border-slate-100/80 flex items-center justify-center transition-all">
                    <FaLinkedin className="w-3.5 h-3.5" />
                  </a>
                  <a href={mentor.github} className="w-8 h-8 rounded-xl bg-slate-50 text-slate-400 hover:text-slate-900 hover:bg-slate-100 border border-slate-100/80 flex items-center justify-center transition-all">
                    <FaGithub className="w-3.5 h-3.5" />
                  </a>
                </div>
                
                <button className="group/btn flex-1 px-3 py-2 bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1 transition-all duration-300">
                  View Courses
                  <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                </button>
              </div>

            </motion.div>
          ))}
        </motion.div>

        {/* MOBILE FOOTER ACTION */}
        <div className="text-center mt-12 md:hidden">
          <button className="w-full py-3 bg-white border border-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2">
            View All Instructors <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* BOTTOM FOOTER SECTION */}
        <div className="text-center mt-16 space-y-2">
          <p className="text-xs font-semibold text-slate-400">
            Want to learn from more global engineering experts?
          </p>
          <button className="text-xs font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 transition-colors">
            Explore All Instructors Matrix <span>→</span>
          </button>
        </div>

      </div>
    </section>
  );
}