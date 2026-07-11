"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Star, 
  ArrowRight, 
  Play, 
  Layers, 
  Briefcase,
  TrendingUp
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";

interface SuccessStory {
  id: string;
  name: string;
  image: string;
  beforeRole: string;
  afterRole: string;
  company: string;
  course: string;
  storyText: string;
  badge: string;
  badgeColor: string;
  metrics: { lessons: number; projects: number };
  hasVideo?: boolean;
}

const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: "story-1",
    name: "Emily Carter",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    beforeRole: "Absolute Beginner",
    afterRole: "Frontend Developer",
    company: "TechNova Ltd.",
    course: "Complete React & Next.js Bootcamp",
    storyText: "The practical, portfolio-driven curriculum helped me build complex applications from scratch. I gained the raw confidence needed to crack my very first tech interview.",
    badge: "🎉 Hired in 6 Months",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
    metrics: { lessons: 32, projects: 8 },
    hasVideo: true
  },
  {
    id: "story-2",
    name: "Arif Rahman",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    beforeRole: "Graphic Designer",
    afterRole: "UI/UX Product Designer",
    company: "DevsNest Global",
    course: "Advanced Figma Masterclass & Systems",
    storyText: "Transitioning careers was terrifying, but the design tokens and prototyping frameworks taught here aligned perfectly with top-tier enterprise industry standards.",
    badge: "💼 Career Transition",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-100",
    metrics: { lessons: 24, projects: 5 }
  },
  {
    id: "story-3",
    name: "Jessica Taylor",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    beforeRole: "Junior Python Coder",
    afterRole: "AI Engineering Lead",
    company: "Cortex Labs",
    course: "Generative AI & LLM Developer Course",
    storyText: "Integrating LangChain and vector databases opened massive opportunities. Within months of graduation, I was promoted to lead our company's internal AI tools branch.",
    badge: "🚀 Promotion Achieved",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-100",
    metrics: { lessons: 42, projects: 6 },
    hasVideo: true
  },
  {
    id: "story-4",
    name: "Rahat Holmes",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    beforeRole: "Local Freelancer",
    afterRole: "Top-Rated Global Engineer",
    company: "Upwork Global",
    course: "Full-Stack Node.js & MongoDB Masterclass",
    storyText: "Mastering database indexing and secure multi-tenant OAuth allowed me to land high-ticket international contracts that previously felt completely out of reach.",
    badge: "🏆 Top Performer",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-100",
    metrics: { lessons: 30, projects: 7 }
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export default function StudentSuccessStories() {
  return (
    <section className="relative bg-white py-24 overflow-hidden select-none">
      
      {/* Background Decor Shapes */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-35 pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 text-center md:text-left max-w-xl mx-auto md:mx-0">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-200/50 rounded-full text-blue-600 font-bold text-xs uppercase tracking-wider">
              🌟 Student Success Stories
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Hear From Learners Who Achieved Their Goals
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              Discover how our graduates successfully transformed their trajectories, mastered specialized tech stack skills, and unlocked global market roles.
            </p>
          </div>
          <button className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 font-semibold text-sm rounded-full shadow-2xs transition-all duration-300 flex-shrink-0">
            View All Stories <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* STORIES 2x2 GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch"
        >
          {SUCCESS_STORIES.map((story) => (
            <motion.div
              key={story.id}
              variants={cardVariants}
              className="group relative bg-white border border-slate-200/80 rounded-3xl p-6 flex flex-col justify-between hover:shadow-xl hover:border-blue-500/30 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="space-y-5">
                
                {/* Meta Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="relative w-14 h-14 rounded-full ring-4 ring-slate-100 overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform duration-500">
                      <img src={story.image} alt={story.name} className="w-full h-full object-cover" />
                      {story.hasVideo && (
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white">
                          <Play className="w-3 h-3 fill-white animate-pulse" />
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-800 tracking-tight flex items-center gap-1.5">
                        {story.name}
                        <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
                          <FaLinkedin className="w-3.5 h-3.5" />
                        </a>
                      </h3>
                      <p className="text-xs font-semibold text-slate-500">
                        {story.afterRole} at <span className="text-slate-700 font-bold">@{story.company}</span>
                      </p>
                    </div>
                  </div>

                  <span className={`inline-flex self-start sm:self-center px-3 py-1 rounded-xl text-[10px] font-black uppercase tracking-wider border ${story.badgeColor}`}>
                    {story.badge}
                  </span>
                </div>

                {/* Transformation Block */}
                <div className="grid grid-cols-2 gap-4 bg-slate-50 border border-slate-100 p-2.5 rounded-2xl text-[11px] font-bold">
                  <div className="text-slate-400 pl-2">
                    <span className="block text-[9px] font-medium uppercase tracking-tight">Before</span>
                    <span className="truncate block mt-0.5">{story.beforeRole}</span>
                  </div>
                  <div className="text-blue-600 border-l border-slate-200/80 pl-4">
                    <span className="block text-[9px] text-slate-400 font-medium uppercase tracking-tight">After</span>
                    <span className="truncate block mt-0.5">{story.afterRole}</span>
                  </div>
                </div>

                {/* Testimonial Quote - Fixed line below */}
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Course Completed: {story.course}</span>
                  <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed italic">
                    "{story.storyText}" {/* এখানে 'story.storyText' করা হয়েছে */}
                  </p>
                </div>
              </div>

              {/* Card Footer Metric Grid */}
              <div className="mt-6 pt-4 border-t border-slate-100/80 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4 text-[11px] font-semibold text-slate-400">
                  <div className="flex items-center gap-1">
                    <Layers className="w-3.5 h-3.5" />
                    <span>{story.metrics.lessons} Modules</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>{story.metrics.projects} Projects</span>
                  </div>
                  <div className="flex items-center gap-0.5 text-amber-500 font-bold">
                    <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                    <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                    <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                    <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                    <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                  </div>
                </div>

                <button className="group/btn text-xs font-bold text-slate-900 hover:text-blue-600 flex items-center gap-1 transition-colors">
                  Read Full Journey
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                </button>
              </div>

            </motion.div>
          ))}
        </motion.div>

        {/* MOBILE FOOTER ACTION */}
        <div className="text-center mt-12 md:hidden">
          <button className="w-full py-3 bg-white border border-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2">
            View All Stories <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* TRUST STATISTICS */}
        <div className="mt-20 pt-8 border-t border-slate-200/60 grid grid-cols-2 md:grid-cols-4 gap-6 items-center text-center">
          <div>
            <h4 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">10,000+</h4>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Happy Students</p>
          </div>
          <div className="border-l border-slate-200/60">
            <h4 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">95%</h4>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Completion Rate</p>
          </div>
          <div className="border-l border-slate-200/60">
            <h4 className="text-2xl sm:text-3xl font-black text-blue-600 tracking-tight">1,200+</h4>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Career Successes</p>
          </div>
          <div className="border-l border-slate-200/60">
            <h4 className="text-2xl sm:text-3xl font-black text-amber-500 tracking-tight">4.9★</h4>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Platform Rating</p>
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div className="text-center mt-20 space-y-4 max-w-sm mx-auto">
          <p className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center justify-center gap-1.5">
            <TrendingUp className="w-4 h-4 text-emerald-500" />
            Ready to write your own success story?
          </p>
          <button className="group px-7 py-3.5 bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs uppercase tracking-wider rounded-full flex items-center justify-center gap-2 shadow-xs transition-all duration-300 active:scale-95 mx-auto">
            Explore Courses & Start Now
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        </div>

      </div>
    </section>
  );
}