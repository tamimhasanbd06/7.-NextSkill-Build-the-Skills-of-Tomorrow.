"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// Lucide React Icons (Removed Github & Linkedin to prevent build error)
import { 
  ArrowRight, BookOpen, Code, GraduationCap, Laptop, 
  Award, Users, Globe, Star, Lightbulb, Shield, CheckCircle2,
  UserCheck, Briefcase, Zap
} from "lucide-react";

// Safe Icons from React Icons package (Already tested in your Navbar/Footer)
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

// --- Framer Motion Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function AboutPage() {
  return (
    <div className="pt-20 bg-slate-50 text-slate-800 overflow-hidden relative">
      
      {/* Decorative Background Blur Circles */}
      <div className="absolute top-40 left-[-10%] w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-indigo-400/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 left-[20%] w-[500px] h-[500px] bg-amber-400/5 rounded-full blur-[120px] pointer-events-none" />

      {/* ================= 1. HERO BANNER ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div 
          className="lg:col-span-7 space-y-6"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold tracking-wider text-blue-600 bg-blue-50 border border-blue-200 rounded-full uppercase">
            <Zap className="w-3.5 h-3.5" /> Welcome to NextSkill
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">
            Empowering Learners to Build the <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-amber-500 bg-clip-text text-transparent">Skills of Tomorrow</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
            NextSkill is a modern, project-based educational platform designed to take learners beyond mere theory. Master real-world tech stack skills through hands-on architectures and gain corporate-level confidence guided by industry-expert mentors.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link href="/courses" className="px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all hover:-translate-y-0.5 flex items-center gap-2">
              Explore Courses <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="px-6 py-3.5 text-sm font-semibold text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-all hover:-translate-y-0.5">
              Contact Us
            </Link>
          </div>
        </motion.div>

        {/* Right Side: Team Illustration Image & Floating Cards */}
        <motion.div 
          className="lg:col-span-5 relative flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-full max-w-[400px] h-[400px] rounded-[32px] bg-gradient-to-tr from-blue-600 to-indigo-600 shadow-2xl relative overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80" 
              alt="NextSkill Team Collaboration" 
              className="w-full h-full object-cover opacity-85 mix-blend-multiply group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent p-8 flex flex-col justify-end text-white">
              <h3 className="text-2xl font-black mb-2">Next-Gen Tech Platform</h3>
              <p className="text-sm text-blue-100">Live projects, peer-to-peer coding sessions, and expert mentoring aligned with modern industry demand.</p>
            </div>
          </div>

          {/* Floating Card 1 */}
          <motion.div 
            className="absolute -top-6 -left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-xl flex items-center gap-3"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <div className="p-2.5 bg-amber-50 rounded-xl text-amber-600">
              <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Top Rated</p>
              <p className="text-sm font-black text-slate-800">4.9/5 Learning Platform</p>
            </div>
          </motion.div>

          {/* Floating Card 2 */}
          <motion.div 
            className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-xl flex items-center gap-3"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
          >
            <div className="p-2.5 bg-emerald-50 rounded-xl text-emerald-600">
              <UserCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Active Students</p>
              <p className="text-sm font-black text-slate-800">12,500+ Global Learners</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= 2. OUR STORY ================= */}
      <section className="bg-white border-y border-slate-200/60 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-[24px] rotate-2 scale-95 opacity-10 group-hover:rotate-1 transition-transform duration-300" />
            <div className="w-full h-[380px] rounded-[24px] border border-slate-200 overflow-hidden relative shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=700&q=80" 
                alt="Workspace Engineering Story" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-slate-900/80 backdrop-blur-md p-4 rounded-xl border border-white/10 text-center">
                <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">Est. 2026 / Global Hub</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Our Story</h2>
            <div className="text-slate-600 space-y-4 text-sm sm:text-base leading-relaxed">
              <p>
                A massive gap exists between traditional academic knowledge and modern corporate requirements. While millions of tech graduates understand theoretical syntax, they often stumble when required to ship production-ready enterprise applications independently. To break this barrier, **NextSkill** was engineered in **2026**.
              </p>
              <p>
                We have reconstructed the modern coding framework into absolute project modules. Every curriculum is regularly revised to align with current international software trends, equipping developers to write performance-optimized code from day one.
              </p>
            </div>

            {/* Micro Timeline Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-100">
              {[
                { year: "2026", label: "Platform Idea" },
                { year: "Next", label: "First Courses" },
                { year: "Active", label: "Growing Community" },
                { year: "Future", label: "Global Expansion" }
              ].map((step, idx) => (
                <div key={idx} className="space-y-1 relative">
                  <span className="block text-lg font-black text-blue-600">{step.year}</span>
                  <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider">{step.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. MISSION & VISION ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[24px] border border-slate-200 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
            <GraduationCap className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">Our Mission</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            To deliver career-focused, practical online tech education that accelerates real-world skill acquisition, preparing our students for direct integration into domestic and international enterprise roles.
          </p>
        </div>

        <div className="bg-white p-8 rounded-[24px] border border-slate-200 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
          <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">Our Vision</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            To become the most reliable and trusted online training infrastructure globally, nurturing the future line of technical architects, developers, and product managers.
          </p>
        </div>
      </section>

      {/* ================= 4. CORE VALUES ================= */}
      <section className="bg-white border-t border-slate-200/60 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Our Core Values</h2>
            <p className="text-sm text-slate-500">These fundamental principles guide every architectural course decision we make.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Innovation", desc: "We continuously evolve our engineering platform features and learning interfaces.", icon: Lightbulb, color: "bg-blue-50 text-blue-600" },
              { title: "Practical Learning", desc: "Zero fluff policy. We focus exclusively on hands-on deployment and professional Git workflows.", icon: Code, color: "bg-indigo-50 text-indigo-600" },
              { title: "Quality Content", desc: "All system design paths are structured explicitly by senior industry engineers.", icon: Award, color: "bg-amber-50 text-amber-600" },
              { title: "Accessibility", desc: "Learn completely at your own pace from anywhere in the world on modern scalable architectures.", icon: Globe, color: "bg-emerald-50 text-emerald-600" },
              { title: "Community Support", desc: "A proactive developer community offering lightning-fast debugs and solution streams.", icon: Users, color: "bg-purple-50 text-purple-600" },
              { title: "Integrity", desc: "A transparent, user-first approach ensuring high corporate value with no hidden conditions.", icon: Shield, color: "bg-rose-50 text-rose-600" }
            ].map((value, idx) => (
              <div key={idx} className="p-6 bg-slate-50 rounded-[24px] border border-slate-200/60 hover:-translate-y-1 transition-all duration-300">
                <div className={`w-10 h-10 rounded-lg ${value.color} flex items-center justify-center mb-4`}>
                  <value.icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">{value.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 5. WHY CHOOSE NEXTSKILL ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Why Choose NextSkill</h2>
          <p className="text-sm text-slate-500">What distinguishes our premium courses from generic theoretical training bootcamps.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Expert Instructors",
            "Real-world Practical Projects",
            "Lifetime Course Access & Updates",
            "Verified Completion Certificates",
            "24/7 Active Community Support",
            "Fully Mobile-Responsive Learning UI"
          ].map((feature, idx) => (
            <div key={idx} className="flex gap-4 p-5 bg-white rounded-[24px] border border-slate-200/80 shadow-sm items-start">
              <div className="p-1.5 bg-emerald-50 text-emerald-600 rounded-full mt-0.5">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-800">{feature}</h4>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                  Our curriculum is dynamically structured so developers retain immediate engineering confidence over real software modules.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= 6. MEET OUR TEAM (With Online Avatar URLs) ================= */}
      <section className="bg-white border-t border-slate-200/60 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Meet Our Team</h2>
            <p className="text-sm text-slate-500">The experienced tech minds structuring your specialized educational pipeline.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Anisur Rahman", role: "Founder & Lead Architect", bio: "Ex-Senior Full Stack Engineer with 8+ years experience.", avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=250&q=80", github: "https://github.com", linkedin: "https://linkedin.com" },
              { name: "Tahmid Hasan", role: "Co-Founder & UI/UX Expert", bio: "Figma Specialist, creating premium user experiences.", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=250&q=80", github: "https://github.com", linkedin: "https://linkedin.com" },
              { name: "Nusrat Jahan", role: "Lead App Developer", bio: "Flutter & React Native mentor with a proven track record.", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=250&q=80", github: "https://github.com", linkedin: "https://linkedin.com" },
              { name: "Fahim Ahmed", role: "Data Science Mentor", bio: "Machine Learning Researcher and Python enthusiast.", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=250&q=80", github: "https://github.com", linkedin: "https://linkedin.com" }
            ].map((member, idx) => (
              <div key={idx} className="bg-slate-50 rounded-[24px] border border-slate-200 overflow-hidden p-6 flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-slate-200 group-hover:scale-105 transition-transform duration-300">
                  <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="text-base font-bold text-slate-900">{member.name}</h4>
                <span className="text-xs text-blue-600 font-semibold mb-3 block">{member.role}</span>
                <p className="text-xs text-slate-500 mb-4 leading-relaxed max-w-[200px]">{member.bio}</p>
                
                <div className="flex gap-2">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full border border-slate-200 text-slate-400 hover:text-blue-600 transition-colors">
                    <FaLinkedinIn className="w-4 h-4" />
                  </a>
                  <a href={member.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full border border-slate-200 text-slate-400 hover:text-slate-900 transition-colors">
                    <FaGithub className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 7. OUR ACHIEVEMENTS ================= */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
          {[
            { value: "12,500+", label: "Happy Students" },
            { value: "520+", label: "Premium Courses" },
            { value: "65+", label: "Expert Mentors" },
            { value: "4.9★", label: "Average Rating" },
            { value: "35+", label: "Countries Connected" }
          ].map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <span className="block text-3xl sm:text-4xl font-black tracking-tight">{stat.value}</span>
              <span className="block text-xs font-bold text-blue-100 uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ================= 8. LEARNING JOURNEY TIMELINE ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Your Learning Journey</h2>
          <p className="text-sm text-slate-500">Your step-by-step career path structure mapped explicitly inside NextSkill.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 relative">
          {[
            { step: "01", name: "Discover", desc: "Select your desired professional technical domain path." },
            { step: "02", name: "Enroll", desc: "Join modern streams with immediate premium platform access." },
            { step: "03", name: "Learn", desc: "Go deep into weekly industry-optimized technical frameworks." },
            { step: "04", name: "Build Projects", desc: "Assemble a premium personal portfolio of complex live applications." },
            { step: "05", name: "Earn Certificate", desc: "Secure a verified global course graduation certificate code." },
            { step: "06", name: "Grow Career", desc: "Unlock structural resume support and remote interview pipelines." }
          ].map((journey, idx) => (
            <div key={idx} className="bg-white p-5 rounded-[24px] border border-slate-200 shadow-sm relative group hover:border-indigo-200 transition-colors">
              <span className="text-xs font-black text-blue-600 block mb-2 bg-blue-50 w-fit px-2 py-0.5 rounded-full">{journey.step}</span>
              <h4 className="text-base font-bold text-slate-800 mb-1">{journey.name}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">{journey.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= 9. STUDENT SUCCESS HIGHLIGHTS (With Online Headshots) ================= */}
      <section className="bg-white border-t border-slate-200/60 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Student Success Highlights</h2>
            <p className="text-sm text-slate-500">Inspirational metrics and narratives from our global platform graduates.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Sabbir Rahman", course: "Full Stack Next.js Development", job: "Software Engineer at TechGlobal", pic: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80", story: "NextSkill's project-centric training was the core component that enabled me to conquer complex senior architectural interviews." },
              { name: "Merin Sultana", course: "UI/UX Design Masterclass", job: "Product Designer at Innovate Studio", pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80", story: "Learning standard design loops directly in Figma pushed my production portfolio way past basic design concepts." },
              { name: "Asif Iqbal", course: "Flutter App Architecture", job: "Remote App Developer", pic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80", story: "The asynchronous problem-solving sessions were incredible. I landed an international remote role weeks before final code checks." }
            ].map((success, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 p-6 rounded-[24px] flex flex-col justify-between hover:shadow-sm transition-all">
                <div className="space-y-4">
                  <div className="flex gap-3 items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-slate-200">
                      <img src={success.pic} alt={success.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{success.name}</h4>
                      <p className="text-[11px] text-slate-400 font-semibold">{success.course}</p>
                    </div>
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm italic leading-relaxed">"{success.story}"</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-bold text-blue-600">
                  <Briefcase className="w-3.5 h-3.5" /> {success.job}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 10. CALL TO ACTION (CTA) ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-indigo-700 rounded-[32px] p-8 sm:p-12 text-white text-center space-y-6 relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_120%,rgba(245,158,11,0.15),transparent)]" />
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight max-w-xl mx-auto leading-tight">
            Ready to Build Your Digital Future?
          </h2>
          <p className="text-blue-100 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Join NextSkill today, expand your professional horizons, and deploy top-tier tech modules alongside veteran engineering experts.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <Link href="/courses" className="px-6 py-3.5 text-sm font-semibold text-blue-600 bg-white rounded-full hover:bg-blue-50 active:scale-95 transition-all shadow-md">
              Explore Courses
            </Link>
            <Link href="/register" className="px-6 py-3.5 text-sm font-semibold text-white bg-indigo-500/40 hover:bg-indigo-500/60 border border-white/20 rounded-full active:scale-95 transition-all">
              Join Today
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}