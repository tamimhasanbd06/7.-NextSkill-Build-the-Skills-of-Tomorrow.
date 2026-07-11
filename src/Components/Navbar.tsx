"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, X, ChevronDown, User, LayoutDashboard, 
  Settings, LogOut, ArrowRight, BookOpen, 
  Code, GraduationCap, Laptop, LifeBuoy, ShieldCheck, FileText
} from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  hasMegaMenu?: boolean;
}

// Logged Out Navbar Items
const loggedOutItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses", hasMegaMenu: true },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// Logged In Navbar Items 
const loggedInItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses", hasMegaMenu: true },
  { label: "Add Course", href: "/items/add" },
  { label: "Manage Courses", href: "/items/manage" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

const megaMenuCourses = [
  { title: "Web Development", desc: "Next.js, React, Tailwind CSS", icon: Code, color: "text-blue-600 bg-blue-50" },
  { title: "App Development", desc: "Flutter, React Native", icon: Laptop, color: "text-indigo-600 bg-indigo-50" },
  { title: "UI/UX Design", desc: "Figma, Prototyping", icon: BookOpen, color: "text-amber-600 bg-amber-50" },
  { title: "Data Science", desc: "Python, Machine Learning", icon: GraduationCap, color: "text-emerald-600 bg-emerald-50" },
];

// Added New Platforms Links Matrix
const megaMenuLegalDocs = [
  { title: "Help & Support", href: "/support", desc: "Self-service platform solutions hub", icon: LifeBuoy, color: "text-sky-600 bg-sky-50" },
  { title: "Privacy Policy", href: "/privacy", desc: "Data privacy boundaries & keys", icon: ShieldCheck, color: "text-teal-600 bg-teal-50" },
  { title: "Terms & Conditions", href: "/terms", desc: "Ecosystem operational legal rules", icon: FileText, color: "text-rose-600 bg-rose-50" }
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  
  // Simulated Authentication State Control Variable
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const userDropdownRef = useRef<HTMLDivElement>(null);
  const megaMenuRef = useRef<HTMLDivElement>(null);

  const currentNavItems = isLoggedIn ? loggedInItems : loggedOutItems;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target as Node)) {
        setIsUserDropdownOpen(false);
      }
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
        setIsMegaMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "unset";
  }, [isMobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/80 shadow-sm"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        {/* Scroll Progress Indicator Line */}
        <div 
          className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-100"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Brand Logo Namespace */}
            <Link href="/" className="flex flex-col flex-shrink-0 group focus:outline-none">
              <span className="text-2xl font-black tracking-tight text-slate-900">
                Next<span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Skill</span>
              </span>
              <span className="text-[9px] text-slate-500 font-bold tracking-widest uppercase transition-colors group-hover:text-blue-600">
                Build the Skills of Tomorrow
              </span>
            </Link>

            {/* Desktop Link Items Array */}
            <div className="hidden lg:flex items-center space-x-1">
              {currentNavItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
                
                if (item.hasMegaMenu) {
                  return (
                    <div key={item.label} ref={megaMenuRef} className="relative">
                      <button
                        onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                        className={`px-3.5 py-2 rounded-full text-sm font-semibold transition-colors flex items-center gap-1 focus:outline-none cursor-pointer ${
                          isActive || isMegaMenuOpen ? "text-blue-600" : "text-slate-600 hover:text-blue-600"
                        }`}
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMegaMenuOpen ? "rotate-180" : ""}`} />
                      </button>

                      {/* Extended Dual Layout Mega Menu Matrix */}
                      <AnimatePresence>
                        {isMegaMenuOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 15 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-1/2 -translate-x-1/2 mt-3 w-[660px] bg-white border border-slate-200 rounded-2xl p-4 shadow-xl grid grid-cols-12 gap-4 z-50"
                          >
                            {/* Left Box: Curriculum Pathways */}
                            <div className="col-span-7 grid grid-cols-1 gap-1.5 border-r border-slate-100 pr-2">
                              <h4 className="text-[10px] font-black uppercase tracking-wider text-slate-400 px-3 mb-1">Curriculum Paths</h4>
                              {megaMenuCourses.map((course) => (
                                <Link
                                  key={course.title}
                                  href="/courses"
                                  onClick={() => setIsMegaMenuOpen(false)}
                                  className="flex gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-all duration-200 group"
                                >
                                  <div className={`p-2 rounded-lg ${course.color} h-fit`}>
                                    <course.icon className="w-4 h-4" />
                                  </div>
                                  <div>
                                    <h5 className="text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                                      {course.title}
                                    </h5>
                                    <p className="text-[11px] text-slate-500 mt-0.5">{course.desc}</p>
                                  </div>
                                </Link>
                              ))}
                            </div>

                            {/* Right Box: Dynamic Help & Legal Routes */}
                            <div className="col-span-5 grid grid-cols-1 gap-1.5 self-start">
                              <h4 className="text-[10px] font-black uppercase tracking-wider text-slate-400 px-3 mb-1">Resources Matrix</h4>
                              {megaMenuLegalDocs.map((doc) => (
                                <Link
                                  key={doc.title}
                                  href={doc.href}
                                  onClick={() => setIsMegaMenuOpen(false)}
                                  className="flex gap-2.5 p-2.5 rounded-xl hover:bg-slate-50 transition-all duration-200 group"
                                >
                                  <div className={`p-2 rounded-lg ${doc.color} h-fit`}>
                                    <doc.icon className="w-3.5 h-3.5" />
                                  </div>
                                  <div>
                                    <h5 className="text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                                      {doc.title}
                                    </h5>
                                    <p className="text-[10px] text-slate-400 leading-tight mt-0.5">{doc.desc}</p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`relative px-3.5 py-2 rounded-full text-sm font-semibold transition-colors focus:outline-none ${
                      isActive ? "text-blue-600" : "text-slate-600 hover:text-blue-600"
                    }`}
                  >
                    <span className="relative z-10">{item.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="desktop-active-underline"
                        className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-blue-600 rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Desktop User Account Trigger Parameters */}
            <div className="hidden lg:flex items-center space-x-4">
              {isLoggedIn ? (
                <div ref={userDropdownRef} className="relative">
                  <button
                    onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                    className="flex items-center gap-2 p-1 pr-3 bg-slate-50 hover:bg-slate-100 rounded-full border border-slate-200 transition-all focus:outline-none cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-semibold text-sm">
                      JD
                    </div>
                    <ChevronDown className="w-4 h-4 text-slate-500" />
                  </button>

                  <AnimatePresence>
                    {isUserDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-0 mt-3 w-56 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden z-50"
                      >
                        <div className="p-3.5 border-b border-slate-100">
                          <p className="text-sm font-semibold text-slate-800">John Doe</p>
                          <p className="text-xs text-slate-500 truncate">john.doe@example.com</p>
                        </div>
                        <div className="p-1.5 space-y-0.5">
                          <Link href="/profile" className="flex items-center gap-2 px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 rounded-lg transition-colors">
                            <User className="w-4 h-4" /> Profile
                          </Link>
                          <Link href="/items/manage" className="flex items-center gap-2 px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 rounded-lg transition-colors">
                            <LayoutDashboard className="w-4 h-4" /> Dashboard
                          </Link>
                          <Link href="/settings" className="flex items-center gap-2 px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 rounded-lg transition-colors">
                            <Settings className="w-4 h-4" /> Settings
                          </Link>
                          <hr className="border-slate-100 my-1" />
                          <button 
                            onClick={() => setIsLoggedIn(false)}
                            className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors text-left cursor-pointer"
                          >
                            <LogOut className="w-4 h-4" /> Logout
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <>
                  <Link 
                    href="/login"
                    className="px-5 py-2 text-sm font-semibold text-slate-600 border border-slate-200 rounded-full hover:bg-slate-50 transition-all duration-300 text-center"
                  >
                    Login
                  </Link>
                  <Link 
                    href="/register"
                    className="group relative px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-md shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-[2px] flex items-center gap-1.5"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </>
              )}
            </div>

            {/* Hamburger Toggle Action */}
            <div className="flex lg:hidden items-center">
              <button
                onClick={() => setIsMobileOpen(true)}
                className="p-2 text-slate-600 hover:text-blue-600 rounded-full focus:outline-none cursor-pointer"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Interaction Screen */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 lg:hidden"
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 bottom-0 left-0 w-full max-w-[300px] bg-white border-r border-slate-200 shadow-xl z-50 p-6 flex flex-col justify-between lg:hidden"
            >
              <div className="overflow-y-auto pr-1 flex-1">
                <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                  <span className="text-xl font-black text-slate-900">
                    Next<span className="text-blue-600">Skill</span>
                  </span>
                  <button
                    onClick={() => setIsMobileOpen(false)}
                    className="p-1.5 text-slate-500 hover:text-slate-800 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="py-5 flex items-center gap-3 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-semibold">
                    {isLoggedIn ? "JD" : "?"}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-800">
                      {isLoggedIn ? "John Doe" : "Guest User"}
                    </h3>
                    <p className="text-xs text-slate-500">
                      {isLoggedIn ? "Welcome Back!" : "Explore Courses & Learn"}
                    </p>
                  </div>
                </div>

                {/* Core Navigation Section List */}
                <div className="py-4 space-y-1 border-b border-slate-100">
                  <h4 className="text-[10px] font-black tracking-wider uppercase text-slate-400 px-3 mb-2">Navigation</h4>
                  {currentNavItems.map((item) => {
                    const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setIsMobileOpen(false)}
                        className={`block px-4 py-2.5 text-sm font-bold rounded-xl transition-all ${
                          isActive
                            ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600 pl-3"
                            : "text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>

                {/* Mobile Specific Support Matrix Links */}
                <div className="py-4 space-y-1">
                  <h4 className="text-[10px] font-black tracking-wider uppercase text-slate-400 px-3 mb-2">Platform Legal Links</h4>
                  {megaMenuLegalDocs.map((doc) => {
                    const isActive = pathname === doc.href;
                    return (
                      <Link
                        key={doc.title}
                        href={doc.href}
                        onClick={() => setIsMobileOpen(false)}
                        className={`block px-4 py-2.5 text-sm font-bold rounded-xl transition-all ${
                          isActive
                            ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600 pl-3"
                            : "text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                        }`}
                      >
                        {doc.title}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Drawer Actions */}
              <div className="pt-4 border-t border-slate-100 space-y-3 bg-white">
                {isLoggedIn ? (
                  <button
                    onClick={() => {
                      setIsLoggedIn(false);
                      setIsMobileOpen(false);
                    }}
                    className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-red-600 bg-red-50 hover:bg-red-100 border border-red-200 rounded-xl transition-colors cursor-pointer"
                  >
                    <LogOut className="w-4 h-4" /> Log Out
                  </button>
                ) : (
                  <>
                    <Link 
                      href="/login"
                      onClick={() => setIsMobileOpen(false)}
                      className="w-full block py-3 text-center text-sm font-semibold text-slate-600 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors"
                    >
                      Login
                    </Link>
                    <Link 
                      href="/register"
                      onClick={() => setIsMobileOpen(false)}
                      className="w-full py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-md shadow-blue-500/5 flex items-center justify-center gap-1.5"
                    >
                      Get Started <ArrowRight className="w-4 h-4" />
                    </Link>
                  </>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}