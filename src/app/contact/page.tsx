"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// Lucide React Icons for clear structural elements
import { 
  Mail, Phone, MapPin, Clock, MessageSquare, 
  HelpCircle, ChevronDown, CheckCircle2, AlertCircle, 
  ArrowRight, Send, Loader2, ShieldCheck, HelpCircle as FaqIcon
} from "lucide-react";

// Safe Icons from React Icons package for the Social and UI grid
import { FaGithub, FaLinkedinIn, FaFacebookF, FaXTwitter, FaYoutube } from "react-icons/fa6";

// --- Framer Motion Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function ContactPage() {
  // --- Form States ---
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    category: "general",
    message: ""
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // --- Accordion State for FAQs ---
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // --- Form Handlers ---
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulated API call (MongoDB logic/Email endpoint goes here)
    try {
      await new Promise(resolve => setTimeout(resolve, 1800));
      setSubmitSuccess(true);
      setFormData({ fullName: "", email: "", subject: "", category: "general", message: "" });
    } catch (err) {
      console.error("Submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20 bg-slate-50 text-slate-800 overflow-hidden relative min-h-screen">
      
      {/* Decorative Background Blur Shapes */}
      <div className="absolute top-20 left-[-10%] w-[450px] h-[450px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-[35%] right-[-10%] w-[550px] h-[550px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* ================= 1. HERO BANNER ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold tracking-wider text-blue-600 bg-blue-50 border border-blue-200 rounded-full uppercase">
            <Phone className="w-3.5 h-3.5" /> Contact Us
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-tight">
            We're Here to Help You <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-amber-500 bg-clip-text text-transparent">Succeed</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Have a question about our courses, corporate programs, or need technical assistance? Our dedicated support team is always ready to assist you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <a href="#contact-form" className="px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition-all hover:-translate-y-0.5">
              Contact Support
            </a>
            <Link href="/courses" className="px-6 py-3.5 text-sm font-semibold text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-all hover:-translate-y-0.5">
              Explore Courses
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ================= 2. CONTACT INFORMATION ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { title: "Email Address", desc: "support@nextskill.com", info: "Response within 24 hours", icon: Mail, color: "text-blue-600 bg-blue-50" },
            { title: "Phone Support", desc: "+880 1700-123456", info: "Direct Hotline", icon: Phone, color: "text-indigo-600 bg-indigo-50" },
            { title: "Main Office", desc: "Dhaka, Bangladesh", info: "Corporate HQ Infrastructure", icon: MapPin, color: "text-amber-600 bg-amber-50" },
            { title: "Live Support", desc: "9:00 AM – 8:00 PM", info: "Saturday to Thursday", icon: MessageSquare, color: "text-emerald-600 bg-emerald-50" }
          ].map((item, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeInUp}
              className="bg-white p-6 rounded-[24px] border border-slate-200 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-4`}>
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-sm font-semibold text-slate-700 select-all">{item.desc}</p>
              </div>
              <p className="text-xs text-slate-400 mt-3 border-t border-slate-100 pt-2">{item.info}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= 3. CONTACT FORM & SIDE INFO ================= */}
      <section id="contact-form" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Side: Office Details, Business Hours & Social Grid */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Office Address Card */}
          <div className="bg-white p-6 sm:p-8 rounded-[24px] border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <MapPin className="text-blue-600 w-5 h-5" /> Visit Our Office
            </h3>
            <div className="text-sm sm:text-base text-slate-600 space-y-1">
              <p className="font-semibold text-slate-800">NextSkill Tower, Level 7</p>
              <p>Plot 42, Sector 11, Uttara</p>
              <p>Dhaka, Bangladesh</p>
              <p className="text-xs text-slate-400 font-mono mt-1">Postal Code: 1230</p>
            </div>
          </div>

          {/* Business Hours Card */}
          <div className="bg-white p-6 sm:p-8 rounded-[24px] border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Clock className="text-indigo-600 w-5 h-5" /> Business Hours
            </h3>
            <div className="divide-y divide-slate-100 text-sm">
              <div className="flex justify-between py-2.5">
                <span className="font-medium text-slate-600">Monday – Friday</span>
                <span className="font-bold text-slate-800">9:00 AM – 8:00 PM</span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="font-medium text-slate-600">Saturday</span>
                <span className="font-bold text-slate-800">10:00 AM – 5:00 PM</span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="font-medium text-slate-600">Sunday</span>
                <span className="font-bold text-rose-500 uppercase tracking-wider text-xs bg-rose-50 px-2 py-0.5 rounded-full">Closed</span>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Connect Globally</h4>
            <div className="flex flex-wrap gap-2.5">
              {[
                { icon: FaLinkedinIn, url: "https://linkedin.com", label: "LinkedIn", hover: "hover:bg-blue-600 hover:text-white" },
                { icon: FaGithub, url: "https://github.com", label: "GitHub", hover: "hover:bg-slate-900 hover:text-white" },
                { icon: FaFacebookF, url: "https://facebook.com", label: "Facebook", hover: "hover:bg-blue-700 hover:text-white" },
                { icon: FaXTwitter, url: "https://x.com", label: "X / Twitter", hover: "hover:bg-black hover:text-white" },
                { icon: FaYoutube, url: "https://youtube.com", label: "YouTube", hover: "hover:bg-red-600 hover:text-white" }
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 transition-all ${social.hover} shadow-sm active:scale-95`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Right Side: Interactive Validated Form Container */}
        <div className="lg:col-span-7">
          <div className="bg-white p-6 sm:p-8 rounded-[24px] border border-slate-200 shadow-sm relative">
            
            <AnimatePresence mode="wait">
              {!submitSuccess ? (
                <motion.form 
                  key="contact-form"
                  onSubmit={handleSubmit} 
                  className="space-y-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="border-b border-slate-100 pb-3 mb-2">
                    <h2 className="text-2xl font-black text-slate-900">Send Us a Message</h2>
                    <p className="text-xs sm:text-sm text-slate-400">Fill in the technical criteria parameters below to reach out.</p>
                  </div>

                  {/* Grid System for Form Elements */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Full Name *</label>
                      <input 
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none bg-slate-50/50 ${errors.fullName ? "border-rose-400 focus:border-rose-500 bg-rose-50/10" : "border-slate-200 focus:border-blue-500 focus:bg-white"}`}
                      />
                      {errors.fullName && <p className="text-xs font-medium text-rose-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.fullName}</p>}
                    </div>

                    {/* Email Address */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Email Address *</label>
                      <input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none bg-slate-50/50 ${errors.email ? "border-rose-400 focus:border-rose-500 bg-rose-50/10" : "border-slate-200 focus:border-blue-500 focus:bg-white"}`}
                      />
                      {errors.email && <p className="text-xs font-medium text-rose-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Subject */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Subject *</label>
                      <input 
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Inquiry Topic"
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none bg-slate-50/50 ${errors.subject ? "border-rose-400 focus:border-rose-500 bg-rose-50/10" : "border-slate-200 focus:border-blue-500 focus:bg-white"}`}
                      />
                      {errors.subject && <p className="text-xs font-medium text-rose-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.subject}</p>}
                    </div>

                    {/* Category Dropdown */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Category</label>
                      <div className="relative">
                        <select 
                          name="category"
                          value={formData.category}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm transition-all bg-slate-50/50 focus:outline-none focus:border-blue-500 focus:bg-white appearance-none cursor-pointer"
                        >
                          <option value="general">General Inquiry</option>
                          <option value="support">Technical Support</option>
                          <option value="partnership">Partnership / B2B</option>
                          <option value="refund">Refund Request</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-3.5 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Message Textarea */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Your Message *</label>
                    <textarea 
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Type your message description detail here..."
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none bg-slate-50/50 ${errors.message ? "border-rose-400 focus:border-rose-500 bg-rose-50/10" : "border-slate-200 focus:border-blue-500 focus:bg-white"}`}
                    />
                    {errors.message && <p className="text-xs font-medium text-rose-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl transition-all shadow-md shadow-blue-500/10 hover:shadow-blue-500/20 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" /> Processing Submission...
                      </>
                    ) : (
                      <>
                        Send Message <Send className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                /* Success Notification View Card */
                <motion.div 
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4 flex flex-col items-center"
                >
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center shadow-inner">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Message Sent Successfully!</h3>
                  <p className="text-sm text-slate-500 max-w-sm">
                    Thank you for reaching out. Your data parameter payload has been dispatched, and our team will get in touch soon.
                  </p>
                  <button 
                    onClick={() => setSubmitSuccess(false)}
                    className="mt-2 text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 border-b border-transparent hover:border-blue-600 transition-all"
                  >
                    Submit another response
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>
      </section>

      {/* ================= 4. QUICK FAQ SECTION ================= */}
      <section className="bg-white border-y border-slate-200/60 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight flex items-center justify-center gap-2">
              <FaqIcon className="text-amber-500 w-7 h-7" /> Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-500">Quick answers to common procedural and platform queries.</p>
          </div>

          <div className="space-y-4">
            {[
              { q: "How can I enroll in a course?", a: "Navigate to our Courses directory module, choose your specific path structure, and click 'Enroll Now' to activate checkout workflows immediately." },
              { q: "How do I contact an instructor?", a: "Upon course access activation, premium private community Discord channels and direct system message nodes become available for direct communication." },
              { q: "Do you provide certificates?", a: "Yes. Every course path includes dynamic verified certificate tracking hash codes upon 100% video module and repository project submission completion." },
              { q: "Can I request a refund?", a: "We maintain a flexible 7-day technical verification return matrix policy if the active curriculum structure does not match expectations." }
            ].map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden transition-all bg-slate-50/30">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-slate-50/50 font-bold text-slate-800 transition-colors text-sm sm:text-base"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isOpen ? "transform rotate-180 text-blue-600" : ""}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1, transition: { height: { duration: 0.25 }, opacity: { duration: 0.2 } } }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-white border-t border-slate-100"
                      >
                        <p className="px-6 py-4 text-slate-600 text-xs sm:text-sm leading-relaxed">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="text-center pt-2">
            <Link href="/faq" className="inline-flex items-center gap-1 text-sm font-bold text-blue-600 hover:text-blue-700 transition-all border-b border-transparent hover:border-blue-600 pb-0.5">
              View All FAQs <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= 5. RESPONSIVE GOOGLE MAP EMBED ================= */}
      <section className="w-full h-[400px] bg-slate-200 relative border-b border-slate-200">
        <iframe 
          title="NextSkill Corporate Headquarters Office Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m3!1d3648.4312879590407!2d90.39527717612711!3d23.874314120358825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c46b6de1b4ef%3A0x2f9749eb40375f42!2sUttara%20Sector%2011%20Park!5e0!3m2!1sen!2sbd!4v1710000000000!5m2!1sen!2sbd" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale opacity-90 contrast-125 focus:outline-none"
        />
      </section>

      {/* ================= 6. BOTTOM CALL TO ACTION (CTA) ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-indigo-700 rounded-[32px] p-8 sm:p-12 text-white text-center space-y-6 relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_120%,rgba(245,158,11,0.15),transparent)]" />
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight max-w-xl mx-auto leading-tight">
            Ready to Start Learning?
          </h2>
          <p className="text-blue-100 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Unlock your competitive software development metrics immediately. Deploy industry-vetted tech branches on our modern learning architecture.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <Link href="/courses" className="px-6 py-3.5 text-sm font-semibold text-blue-600 bg-white rounded-full hover:bg-blue-50 active:scale-95 transition-all shadow-md">
              Explore Courses
            </Link>
            <Link href="/register" className="px-6 py-3.5 text-sm font-semibold text-white bg-indigo-500/40 hover:bg-indigo-500/60 border border-white/20 rounded-full active:scale-95 transition-all">
              Join NextSkill
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}