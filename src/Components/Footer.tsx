"use client";

import React from "react";
import Link from "next/link";
import { 
  FaGithub, 
  FaLinkedinIn, 
  FaFacebookF, 
  FaXTwitter 
} from "react-icons/fa6";
import { 
  MdOutlineMail, 
  MdOutlinePhone, 
  MdOutlineLocationOn, 
  MdOutlineAccessTime,
  MdKeyboardArrowUp
} from "react-icons/md";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-50 border-t border-slate-200/80 overflow-hidden text-slate-600 select-none">
      
      {/* 1. Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Column 1: Logo & Socials - Updated to NextSkill */}
          <div className="lg:col-span-1 space-y-4">
            <Link href="/" className="flex flex-col focus:outline-none group">
              <span className="text-2xl font-black tracking-tight text-slate-900">
                Next<span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Skill</span>
              </span>
              <span className="text-[9px] text-slate-500 font-bold tracking-widest uppercase transition-colors group-hover:text-blue-600">
                Build the Skills of Tomorrow
              </span>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed">
              Empowering learners with professional, production-ready, and project-focused tech architectures.
            </p>
            
            {/* Social Icons using React Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 bg-white border border-slate-200 rounded-full hover:text-blue-600 hover:border-blue-200 hover:shadow-sm transition-all duration-200 cursor-pointer"
              >
                <FaGithub className="w-4 h-4" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 bg-white border border-slate-200 rounded-full hover:text-blue-600 hover:border-blue-200 hover:shadow-sm transition-all duration-200 cursor-pointer"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 bg-white border border-slate-200 rounded-full hover:text-blue-600 hover:border-blue-200 hover:shadow-sm transition-all duration-200 cursor-pointer"
              >
                <FaFacebookF className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 bg-white border border-slate-200 rounded-full hover:text-blue-600 hover:border-blue-200 hover:shadow-sm transition-all duration-200 cursor-pointer"
              >
                <FaXTwitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2.5 text-sm font-medium">
              {["Home", "Courses", "About", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="text-slate-500 hover:text-blue-600 transition-colors duration-200 block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">Resources</h3>
            <ul className="space-y-2.5 text-sm font-medium">
              {["Help Center", "FAQ", "Privacy Policy", "Terms & Conditions"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`} className="text-slate-500 hover:text-blue-600 transition-colors duration-200 block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info - Updated Support Domain */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-3 text-sm font-medium text-slate-500">
              <li className="flex items-center gap-2.5">
                <MdOutlineMail className="w-4 h-4 text-slate-400" />
                <span className="hover:text-blue-600 transition-colors cursor-pointer">support@nextskill.com</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MdOutlinePhone className="w-4 h-4 text-slate-400" />
                <span>+880 1234 567890</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MdOutlineLocationOn className="w-4 h-4 text-slate-400" />
                <span>Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MdOutlineAccessTime className="w-4 h-4 text-slate-400" />
                <span>Sun - Thu: 9AM - 6PM</span>
              </li>
            </ul>
          </div>

          {/* Column 5: Newsletter */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">Newsletter</h3>
            <p className="text-sm text-slate-500">
              Subscribe to get latest updates and course offers directly in your inbox.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <div className="relative flex items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full pl-4 pr-24 py-2.5 text-sm bg-white border border-slate-200 rounded-full focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all text-slate-800"
                />
                <button
                  type="submit"
                  className="absolute right-1 px-4 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 rounded-full transition-all duration-200 cursor-pointer"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-[11px] text-slate-400 pl-2">
                No spam, unsubscribe anytime.
              </p>
            </form>
          </div>

        </div>
      </div>

      {/* 2. Bottom Bar - Updated with NextSkill */}
      <div className="border-t border-slate-200/60 bg-slate-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500">
          <div>
            &copy; {currentYear} NextSkill. All rights reserved.
          </div>
          
          <div className="flex items-center gap-1">
            Made with <span className="text-red-500">❤️</span> using <span className="text-blue-600 font-semibold">Next.js</span> &amp; <span className="text-blue-600 font-semibold">TypeScript</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-0.5 px-3 py-2 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl shadow-sm text-slate-600 hover:text-blue-600 transition-all duration-200 focus:outline-none cursor-pointer"
          >
            Back to Top
            <MdKeyboardArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

    </footer>
  );
}