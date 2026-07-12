"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  Eye, EyeOff, Lock, Mail, User, ArrowRight, ShieldCheck, 
  RefreshCw, AlertCircle, CheckCircle2, Globe 
} from "lucide-react";

export default function SignUpPage() {
  const router = useRouter();

  // --- Form States ---
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  // --- Toggle States ---
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // --- UI/UX States ---
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const nameInputRef = useRef<HTMLInputElement>(null);

  // UX: Autofocus on Full Name Field
  useEffect(() => {
    nameInputRef.current?.focus();
  }, []);

  // UX: Toast Auto-dismiss
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3500);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  // --- Real-time Password Strength Calculator ---
  const getPasswordStrength = () => {
    if (!password) return { label: "Empty", score: 0, color: "bg-slate-800" };
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (score <= 2) return { label: "Weak 🔴", score, color: "bg-rose-500" };
    if (score <= 4) return { label: "Medium 🟡", score, color: "bg-amber-500" };
    return { label: "Strong 🟢", score, color: "bg-emerald-500" };
  };

  const strength = getPasswordStrength();

  // --- Form Validation & Submission ---
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // 1. Required Fields Validation
    if (!fullName.trim() || !email.trim() || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    // 2. Email Format Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // 3. Password Strength Requirement Check
    if (strength.score < 3) {
      setError("Password is too weak. Ensure it meets the security metrics.");
      return;
    }

    // 4. Password Match Indicator Validation
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // 5. Terms & Conditions Checkbox Validation
    if (!agreeTerms) {
      setError("You must agree to the Terms & Conditions.");
      return;
    }

    setIsLoading(true);

    // Simulated Registration API Loop
    setTimeout(() => {
      setIsLoading(false);
      
      if (email === "existing@nextskill.com") {
        setError("Email already registered.");
        setToast({ type: "error", message: "Registration failed." });
      } else {
        setToast({ type: "success", message: "🎉 Account Created Successfully!" });
        setTimeout(() => router.push("/login"), 1500);
      }
    }, 2000);
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-12 bg-slate-900 text-slate-100 font-sans relative overflow-hidden select-none">
      
      {/* Background Blurs */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Dynamic Toast System */}
      {toast && (
        <div className={`fixed top-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-xl shadow-2xl border text-xs font-bold transition-all duration-300 ${
          toast.type === "success" 
            ? "bg-emerald-950/80 border-emerald-500/30 text-emerald-400 backdrop-blur" 
            : "bg-rose-950/80 border-rose-500/30 text-rose-400 backdrop-blur"
        }`}>
          {toast.type === "success" ? <CheckCircle2 className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
          {toast.message}
        </div>
      )}

      {/* ================= LEFT SIDE: HERO ILLUSTRATION (Desktop Only) ================= */}
      <div className="hidden lg:col-span-5 relative lg:flex flex-col justify-between p-12 border-r border-slate-800 bg-slate-950/40 backdrop-blur-md z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center font-black text-white">NS</div>
          <span className="text-sm font-black tracking-wider uppercase text-white">NextSkill</span>
        </div>

        <div className="space-y-4 max-w-sm">
          <h1 className="text-4xl font-black text-white leading-tight tracking-tight">
            Create Your <br />
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Account</span>
          </h1>
          <p className="text-xs text-slate-400 leading-relaxed font-medium">
            Start learning today and unlock unlimited opportunities with NextSkill.
          </p>
        </div>

        {/* Floating Cards */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-slate-900/60 border border-slate-800 p-3.5 rounded-2xl shadow-lg">
            <span className="block text-base font-black text-blue-400 font-mono">12,500+</span>
            <span className="block text-[9px] uppercase font-bold text-slate-500">Students</span>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 p-3.5 rounded-2xl shadow-lg">
            <span className="block text-base font-black text-indigo-400 font-mono">520+</span>
            <span className="block text-[9px] uppercase font-bold text-slate-500">Courses</span>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 p-3.5 rounded-2xl shadow-lg">
            <span className="block text-base font-black text-emerald-400 font-mono">65+</span>
            <span className="block text-[9px] uppercase font-bold text-slate-500">Expert Mentors</span>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 p-3.5 rounded-2xl shadow-lg">
            <span className="block text-base font-black text-amber-400 font-mono">4.9 ★</span>
            <span className="block text-[9px] uppercase font-bold text-slate-500">Rating</span>
          </div>
        </div>
      </div>

      {/* ================= RIGHT SIDE: REGISTRATION FORM CARD ================= */}
      <div className="col-span-1 lg:col-span-7 flex items-center justify-center p-6 sm:p-12 z-10 overflow-y-auto">
        <div className="w-full max-w-md space-y-6 bg-slate-900/50 backdrop-blur-xl border border-slate-800/80 p-8 sm:p-10 rounded-[24px] shadow-2xl relative">
          
          <div className="space-y-1.5">
            <h2 className="text-2xl font-black text-white tracking-tight">Create Account</h2>
            <p className="text-xs text-slate-400 font-medium">Fill in the details to establish your cloud profile.</p>
          </div>

          {error && (
            <div className="p-3 bg-rose-950/40 border border-rose-500/20 rounded-xl text-xs font-semibold text-rose-400 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-500 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSignUp} className="space-y-3.5">
            {/* Full Name */}
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Full Name</label>
              <div className="relative group">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-blue-500 transition-colors" />
                <input
                  ref={nameInputRef}
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  disabled={isLoading}
                  placeholder="John Doe"
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-950/40 border border-slate-800 rounded-xl text-xs font-medium text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/80 focus:bg-slate-950 transition-all"
                />
              </div>
            </div>

            {/* Email Address */}
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-blue-500 transition-colors" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                  placeholder="name@example.com"
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-950/40 border border-slate-800 rounded-xl text-xs font-medium text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/80 focus:bg-slate-950 transition-all"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Password</label>
              <div className="relative group">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-blue-500 transition-colors" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-10 py-2.5 bg-slate-950/40 border border-slate-800 rounded-xl text-xs font-medium text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/80 focus:bg-slate-950 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-500 hover:text-slate-300"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              {/* Real-time Password Strength Meter Bar */}
              {password && (
                <div className="space-y-1 pt-1">
                  <div className="flex justify-between text-[9px] font-bold text-slate-400">
                    <span>Strength: {strength.label}</span>
                    <span>Min. 8 chars, mixed case, symbols</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${strength.color} transition-all duration-500`} 
                      style={{ width: `${(strength.score / 5) * 100}%` }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Confirm Password */}
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Confirm Password</label>
                {confirmPassword && (
                  <span className={`text-[9px] font-bold uppercase tracking-wide ${password === confirmPassword ? "text-emerald-400" : "text-rose-400"}`}>
                    {password === confirmPassword ? "Match ✅" : "Mismatch ❌"}
                  </span>
                )}
              </div>
              <div className="relative group">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-blue-500 transition-colors" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  disabled={isLoading}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-10 py-2.5 bg-slate-950/40 border border-slate-800 rounded-xl text-xs font-medium text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/80 focus:bg-slate-950 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-500 hover:text-slate-300"
                >
                  {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Terms and Conditions Checkbox */}
            <div className="pt-1">
              <label className="flex items-start gap-2.5 cursor-pointer group text-xs text-slate-400 select-none">
                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  className="w-4 h-4 mt-0.5 rounded border-slate-800 text-blue-600 bg-slate-950 accent-blue-600"
                />
                <span className="font-semibold leading-normal">
                  I agree to the{" "}
                  <Link href="/terms" className="text-blue-400 font-bold hover:underline">Terms & Conditions</Link>
                  {" "}and{" "}
                  <Link href="/privacy" className="text-blue-400 font-bold hover:underline">Privacy Policy</Link>.
                </span>
              </label>
            </div>

            {/* Submit Action Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl text-xs shadow-lg shadow-blue-600/10 flex items-center justify-center gap-2 transition-all active:scale-[0.99] disabled:opacity-50 cursor-pointer"
            >
              {isLoading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" /> Creating Account...
                </>
              ) : (
                <>
                  Create Account <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative flex py-1 items-center text-slate-600">
            <div className="flex-grow border-t border-slate-800"></div>
            <span className="flex-shrink mx-4 text-[9px] font-black tracking-widest uppercase">OR</span>
            <div className="flex-grow border-t border-slate-800"></div>
          </div>

          {/* Google Social Registration Button */}
          <button
            type="button"
            onClick={() => setToast({ type: "info" as any, message: "Google Identity Provider loop active." })}
            className="w-full py-2.5 bg-slate-950/60 hover:bg-slate-950 border border-slate-800 text-slate-200 font-bold rounded-xl text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <Globe className="w-4 h-4 text-red-400" /> Continue with Google
          </button>

          {/* Bottom Redirect Link */}
          <p className="text-center text-xs font-semibold text-slate-400">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-400 font-bold hover:underline ml-0.5">
              Sign In →
            </Link>
          </p>

          {/* Security Banner Card Footer */}
          <div className="pt-4 border-t border-slate-800/80 flex items-center justify-center gap-1.5 text-[9px] font-bold text-slate-500 uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>🔒 Secure Registration Architecture Enabled</span>
          </div>

        </div>
      </div>

    </div>
  );
}