"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Clock, 
  Calendar, 
  Flame,
  BookOpen
} from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  desc: string;
  image: string;
  category: string;
  readTime: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  isTrending?: boolean;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-1",
    title: "10 React Best Practices Every Developer Should Know in 2026",
    desc: "Clean code architecture pattern layouts, optimized state updates, and advanced hooks paradigms for production-scale web products.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=600&q=80",
    category: "Web Development",
    readTime: "6 min read",
    date: "July 10, 2026",
    author: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
    },
    isTrending: true
  },
  {
    id: "blog-2",
    title: "Mastering Next.js App Router & Server Actions Fluidly",
    desc: "Deep dive into dynamic nested styling layout models, data caching mechanisms, and security contexts with real global deployments.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
    category: "Next.js",
    readTime: "8 min read",
    date: "July 08, 2026",
    author: {
      name: "Michael Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    }
  },
  {
    id: "blog-3",
    title: "AI Tools Every Software Engineer Should Core Harness",
    desc: "Boost your code velocity by integrating large language contextual modules directly inside secure isolated development terminal workspaces.",
    image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=600&q=80",
    category: "AI & Trends",
    readTime: "5 min read",
    date: "July 05, 2026",
    author: {
      name: "Emma Wilson",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
    }
  }
];

const POPULAR_TOPICS = [
  "React", "Next.js", "TypeScript", "AI", "Career Guidance", "UI/UX Design", "Node.js", "DevOps"
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export default function LatestBlog() {
  return (
    <section className="relative bg-slate-50/40 py-24 overflow-hidden select-none">
      
      {/* Aesthetic Design Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 text-center md:text-left max-w-xl mx-auto md:mx-0">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-200/50 rounded-full text-blue-600 font-bold text-xs uppercase tracking-wider">
              📝 Latest Blog
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Learn Beyond the Classroom
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              Stay fully updated with practical software engineering tutorials, industry career guides, and actionable architectural blueprints.
            </p>
          </div>
          <button className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 font-semibold text-sm rounded-full shadow-2xs transition-all duration-300 flex-shrink-0">
            View All Articles <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* ================= BLOG GRID MATRIX ================= */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        >
          {BLOG_POSTS.map((post) => (
            <motion.article
              key={post.id}
              variants={cardVariants}
              className="group bg-white border border-slate-200/80 rounded-3xl flex flex-col justify-between hover:shadow-xl hover:border-blue-500/20 transition-all duration-300 overflow-hidden"
            >
              <div>
                {/* Media Presentation Frame */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Category Pill Tag Overlay */}
                  <div className="absolute top-4 left-4 flex gap-1.5">
                    <span className="px-2.5 py-1 bg-white/90 backdrop-blur-xs text-slate-800 font-bold text-[10px] rounded-lg tracking-wide uppercase shadow-xs">
                      {post.category}
                    </span>
                    {post.isTrending && (
                      <span className="px-2 py-1 bg-amber-500 text-white font-bold text-[10px] rounded-lg flex items-center gap-0.5 shadow-xs">
                        <Flame className="w-3 h-3 fill-white" />
                        Trending
                      </span>
                    )}
                  </div>
                </div>

                {/* Text Context Area */}
                <div className="p-6 space-y-3.5">
                  <div className="flex items-center gap-4 text-[11px] font-semibold text-slate-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-extrabold text-slate-800 tracking-tight line-clamp-2 leading-snug group-hover:text-blue-600 transition-colors duration-200">
                    {post.title}
                  </h3>
                  
                  <p className="text-xs text-slate-400 font-normal leading-relaxed line-clamp-3">
                    {post.desc}
                  </p>
                </div>
              </div>

              {/* Card Bottom Meta Segment Footer */}
              <div className="px-6 pb-6 pt-4 border-t border-slate-50 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name} 
                    className="w-7 h-7 rounded-full object-cover ring-2 ring-slate-100"
                  />
                  <span className="text-xs font-semibold text-slate-600">By {post.author.name}</span>
                </div>

                <button className="group/btn text-xs font-bold text-blue-600 flex items-center gap-1 transition-colors">
                  Read Article
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                </button>
              </div>

            </motion.article>
          ))}
        </motion.div>

        {/* ================= POPULAR CHIPS MATRIX ================= */}
        <div className="mt-16 border-t border-slate-200/60 pt-10 text-center space-y-4">
          <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-400 uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" /> Popular Topics
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
            {POPULAR_TOPICS.map((topic) => (
              <button 
                key={topic}
                className="px-4 py-2 bg-white border border-slate-200/80 hover:border-blue-500/30 hover:text-blue-600 text-slate-600 text-xs font-bold rounded-xl shadow-2xs cursor-pointer transition-all duration-200"
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

        {/* ================= MOBILE FOOTER ACTION ================= */}
        <div className="text-center mt-12 md:hidden">
          <button className="w-full py-3 bg-white border border-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2">
            View All Articles <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* ================= BOTTOM CTA ================= */}
        <div className="text-center mt-16">
          <button className="group inline-flex items-center gap-2 text-xs font-black text-slate-800 uppercase tracking-wider hover:text-blue-600 transition-colors">
            Explore More Learning Resources 
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
          </button>
        </div>

      </div>
    </section>
  );
}