"use client";

import React, { useState, useEffect } from "react";
import { 
  User, Mail, Phone, Globe, Calendar, BookOpen, Award, 
  TrendingUp, Clock, Shield, LogOut, Edit3, Save, 
  CheckCircle2, Camera, Bell, Trash2, ChevronRight 
} from "lucide-react";

export default function MyProfilePage() {
  // --- Profile Core State ---
  const [profile, setProfile] = useState({
    fullName: "Alex Mercer",
    email: "alex.mercer@nextskill.com",
    phone: "+1 (555) 234-5678",
    country: "United States",
    memberSince: "October 2025"
  });

  // --- Dynamic UI States ---
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState({ ...profile });
  const [toast, setToast] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"overview" | "settings">("overview");

  // UX Feature: Toast Auto-dismiss
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  // Handle Profile Update Save
  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setProfile({ ...editedProfile });
    setIsEditing(false);
    setToast("🎉 Profile information updated successfully!");
  };

  // Mock Data: Enrolled Courses
  const enrolledCourses = [
    { id: 1, title: "Next.js 16 Ultimate Production Architecture", instructor: "Dr. Evan You", progress: 94, image: "🏗️" },
    { id: 2, title: "Advanced Microservices & Cloud Event Mesh", instructor: "Sarah Jenkins", progress: 62, image: "🌐" },
    { id: 3, title: "Tailwind CSS Premium Fluid Systems Design", instructor: "Marc Edwards", progress: 100, image: "🎨" }
  ];

  // Mock Data: Certificates
  const certificates = [
    { id: 1, name: "Full-Stack Software Engineer Credential", date: "Jan 15, 2026" },
    { id: 2, name: "Modern UI/UX Design Paradigms Mastery", date: "Dec 04, 2025" }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-4 sm:p-8 font-sans relative overflow-hidden select-none">
      
      {/* Background Ambient Blur Circles */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[110px] pointer-events-none" />

      {/* Dynamic Action Status Toast */}
      {toast && (
        <div className="fixed top-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-xl shadow-2xl border bg-emerald-950/80 border-emerald-500/30 text-emerald-400 backdrop-blur text-xs font-bold animate-fade-in">
          <CheckCircle2 className="w-4 h-4" />
          {toast}
        </div>
      )}

      <div className="max-w-6xl mx-auto space-y-6 relative z-10">
        
        {/* ================= 1️⃣ PROFILE HERO LAYER ================= */}
        <div className="w-full bg-slate-900/40 backdrop-blur-xl border border-slate-800/80 rounded-[24px] p-6 sm:p-8 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* User Bio Left Grid */}
          <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            <div className="relative group cursor-pointer">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-3xl font-black text-white shadow-xl">
                AM
              </div>
              <div className="absolute inset-0 bg-slate-950/60 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <Camera className="w-5 h-5 text-slate-300" />
              </div>
            </div>
            
            <div className="space-y-1">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <h1 className="text-2xl font-black text-white tracking-tight">{profile.fullName}</h1>
                <span className="px-2 py-0.5 bg-blue-500/10 border border-blue-500/20 rounded-md text-[9px] font-bold text-blue-400 uppercase tracking-wider">Student</span>
              </div>
              <p className="text-xs text-slate-400 font-medium">{profile.email}</p>
              <p className="text-[11px] text-slate-500 font-semibold flex items-center justify-center sm:justify-start gap-1">
                <Calendar className="w-3.5 h-3.5" /> Member Since {profile.memberSince}
              </p>
            </div>
          </div>

          {/* Quick Statistics Grid Structure */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full lg:w-auto border-t lg:border-t-0 lg:border-l border-slate-800/80 pt-6 lg:pt-0 lg:pl-8">
            <div className="text-center lg:text-left px-2">
              <span className="text-xl font-black text-blue-400 block font-mono">8</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 flex items-center justify-center lg:justify-start gap-1"><BookOpen className="w-3 h-3" /> Courses</span>
            </div>
            <div className="text-center lg:text-left px-2">
              <span className="text-xl font-black text-indigo-400 block font-mono">3</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 flex items-center justify-center lg:justify-start gap-1"><Award className="w-3 h-3" /> Certificates</span>
            </div>
            <div className="text-center lg:text-left px-2">
              <span className="text-xl font-black text-emerald-400 block font-mono">92%</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 flex items-center justify-center lg:justify-start gap-1"><TrendingUp className="w-3 h-3" /> Progress</span>
            </div>
            <div className="text-center lg:text-left px-2">
              <span className="text-xl font-black text-amber-400 block font-mono">48h</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 flex items-center justify-center lg:justify-start gap-1"><Clock className="w-3 h-3" /> Hours</span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs Header */}
        <div className="flex gap-2 border-b border-slate-800/80 pb-px">
          <button 
            onClick={() => setActiveTab("overview")}
            className={`px-4 py-2.5 font-bold text-xs tracking-wider uppercase border-b-2 transition-all cursor-pointer ${activeTab === "overview" ? "border-blue-500 text-white" : "border-transparent text-slate-500 hover:text-slate-300"}`}
          >
            Dashboard Overview
          </button>
          <button 
            onClick={() => setActiveTab("settings")}
            className={`px-4 py-2.5 font-bold text-xs tracking-wider uppercase border-b-2 transition-all cursor-pointer ${activeTab === "settings" ? "border-blue-500 text-white" : "border-transparent text-slate-500 hover:text-slate-300"}`}
          >
            Account Settings
          </button>
        </div>

        {/* ================= TAB 1: OVERVIEW CONTROLLER ================= */}
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left Column: Profile Bio Info */}
            <div className="lg:col-span-4 bg-slate-900/40 border border-slate-800/80 p-6 rounded-[24px] shadow-xl space-y-6 h-fit">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-black uppercase tracking-wider text-slate-400">User Information</h3>
                {!isEditing && (
                  <button 
                    onClick={() => setIsEditing(true)} 
                    className="p-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors text-slate-300 cursor-pointer"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {isEditing ? (
                <form onSubmit={handleSaveProfile} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block">Full Name</label>
                    <input 
                      type="text" 
                      value={editedProfile.fullName} 
                      onChange={(e) => setEditedProfile({...editedProfile, fullName: e.target.value})}
                      className="w-full px-3 py-2 bg-slate-950/60 border border-slate-800 rounded-xl text-xs font-semibold text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block">Phone Number</label>
                    <input 
                      type="text" 
                      value={editedProfile.phone} 
                      onChange={(e) => setEditedProfile({...editedProfile, phone: e.target.value})}
                      className="w-full px-3 py-2 bg-slate-950/60 border border-slate-800 rounded-xl text-xs font-semibold text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block">Country</label>
                    <input 
                      type="text" 
                      value={editedProfile.country} 
                      onChange={(e) => setEditedProfile({...editedProfile, country: e.target.value})}
                      className="w-full px-3 py-2 bg-slate-950/60 border border-slate-800 rounded-xl text-xs font-semibold text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Save className="w-3.5 h-3.5" /> Save Changes
                  </button>
                </form>
              ) : (
                <div className="space-y-4 text-xs font-medium text-slate-300">
                  <div className="flex items-center gap-3 bg-slate-950/30 p-3 rounded-xl border border-slate-800/40">
                    <User className="w-4 h-4 text-slate-500" />
                    <div>
                      <span className="block text-[9px] text-slate-500 uppercase tracking-wider font-bold">Full Name</span>
                      <span>{profile.fullName}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-950/30 p-3 rounded-xl border border-slate-800/40">
                    <Mail className="w-4 h-4 text-slate-500" />
                    <div>
                      <span className="block text-[9px] text-slate-500 uppercase tracking-wider font-bold">Email Address</span>
                      <span className="break-all">{profile.email}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-950/30 p-3 rounded-xl border border-slate-800/40">
                    <Phone className="w-4 h-4 text-slate-500" />
                    <div>
                      <span className="block text-[9px] text-slate-500 uppercase tracking-wider font-bold">Phone Connection</span>
                      <span>{profile.phone}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-950/30 p-3 rounded-xl border border-slate-800/40">
                    <Globe className="w-4 h-4 text-slate-500" />
                    <div>
                      <span className="block text-[9px] text-slate-500 uppercase tracking-wider font-bold">Country Location</span>
                      <span>{profile.country}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Enrolled Courses & Certificates */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Enrolled Courses Section */}
              <div className="bg-slate-900/40 border border-slate-800/80 p-6 rounded-[24px] shadow-xl space-y-4">
                <h3 className="text-sm font-black uppercase tracking-wider text-slate-400">Enrolled Courses</h3>
                <div className="space-y-3">
                  {enrolledCourses.map((course) => (
                    <div key={course.id} className="bg-slate-950/40 border border-slate-800/60 p-4 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group hover:border-slate-700 transition-all">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center border border-slate-800">{course.image}</div>
                        <div>
                          <h4 className="text-xs font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-1">{course.title}</h4>
                          <span className="text-[10px] text-slate-500 font-semibold">Instructor: {course.instructor}</span>
                        </div>
                      </div>
                      
                      <div className="w-full sm:w-auto flex items-center gap-4 justify-between sm:justify-end">
                        <div className="w-28 space-y-1">
                          <div className="flex justify-between text-[9px] font-bold text-slate-400">
                            <span>Progress</span>
                            <span>{course.progress}%</span>
                          </div>
                          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 rounded-full" style={{ width: `${course.progress}%` }} />
                          </div>
                        </div>
                        <button className="p-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 rounded-lg text-xs font-bold flex items-center transition-colors cursor-pointer">
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Earned Certificates Grid */}
              <div className="bg-slate-900/40 border border-slate-800/80 p-6 rounded-[24px] shadow-xl space-y-4">
                <h3 className="text-sm font-black uppercase tracking-wider text-slate-400">Earned Certificates</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {certificates.map((cert) => (
                    <div key={cert.id} className="bg-slate-950/40 border border-slate-800/60 p-4 rounded-xl flex flex-col justify-between gap-4 hover:border-slate-700 transition-all">
                      <div className="space-y-1">
                        <Award className="w-5 h-5 text-amber-500" />
                        <h4 className="text-xs font-bold text-white line-clamp-1">{cert.name}</h4>
                        <span className="text-[10px] text-slate-500 font-semibold block">Issued: {cert.date}</span>
                      </div>
                      <button 
                        onClick={() => setToast("📥 Starting secure certificate engine download...")}
                        className="w-full py-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 font-bold text-[10px] uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                      >
                        Download Certificate
                      </button>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ================= TAB 2: ACCOUNT & SECURITY SETTINGS ================= */}
        {activeTab === "settings" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Preferences Section */}
            <div className="bg-slate-900/40 border border-slate-800/80 p-6 rounded-[24px] shadow-xl space-y-6">
              <h3 className="text-sm font-black uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <Bell className="w-4 h-4 text-blue-500" /> Notification Preferences
              </h3>
              
              <div className="space-y-4 text-xs font-semibold text-slate-300">
                <label className="flex items-center justify-between p-3 bg-slate-950/30 rounded-xl border border-slate-800/40 cursor-pointer">
                  <span>Receive Email Announcements</span>
                  <input type="checkbox" defaultChecked className="w-4 h-4 accent-blue-600" />
                </label>
                <label className="flex items-center justify-between p-3 bg-slate-950/30 rounded-xl border border-slate-800/40 cursor-pointer">
                  <span>Weekly Progress Reports</span>
                  <input type="checkbox" defaultChecked className="w-4 h-4 accent-blue-600" />
                </label>
                <label className="flex items-center justify-between p-3 bg-slate-950/30 rounded-xl border border-slate-800/40 cursor-pointer">
                  <span>Mentor Direct Message Alerts</span>
                  <input type="checkbox" className="w-4 h-4 accent-blue-600" />
                </label>
              </div>
            </div>

            {/* Security Actions Block */}
            <div className="bg-slate-900/40 border border-slate-800/80 p-6 rounded-[24px] shadow-xl space-y-6">
              <h3 className="text-sm font-black uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <Shield className="w-4 h-4 text-indigo-500" /> Security Governance
              </h3>
              
              <div className="space-y-3">
                <button 
                  onClick={() => setToast("🔑 Security layer routing initiated...")}
                  className="w-full p-3 bg-slate-950/40 hover:bg-slate-950 border border-slate-800 text-slate-200 font-bold text-xs rounded-xl flex items-center justify-between transition-all cursor-pointer"
                >
                  <span>Update Password Configuration</span>
                  <ChevronRight className="w-4 h-4 text-slate-600" />
                </button>
                
                <button 
                  onClick={() => setToast("🚪 Destroying active profile token sessions...")}
                  className="w-full p-3 bg-slate-950/40 hover:bg-rose-950/30 border border-slate-800 hover:border-rose-950 text-slate-300 hover:text-rose-400 font-bold text-xs rounded-xl flex items-center justify-between transition-all cursor-pointer"
                >
                  <span className="flex items-center gap-1.5"><LogOut className="w-4 h-4" /> Account Sign Out</span>
                  <ChevronRight className="w-4 h-4 text-slate-600" />
                </button>

                <button 
                  onClick={() => setToast("⚠️ Destructive delete validation active.")}
                  className="w-full p-3 bg-rose-950/20 hover:bg-rose-950/50 border border-rose-900/30 text-rose-400 font-bold text-xs rounded-xl flex items-center justify-between transition-all cursor-pointer"
                >
                  <span className="flex items-center gap-1.5"><Trash2 className="w-4 h-4" /> Purge User Profile Record</span>
                  <ChevronRight className="w-4 h-4 text-rose-900" />
                </button>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}