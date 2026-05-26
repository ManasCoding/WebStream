import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaEnvelope, FaArrowLeft } from 'react-icons/fa';
import Logo from '../Logo';

const ForgotPassword = () => {
  const [step, setStep] = useState(1); // 1: Email, 2: PIN & New Password
  const [email, setEmail] = useState("");
  const [pin, setPin] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendPin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axios.post(`${import.meta.env.VITE_API_URL || 'http://localhost:7000'}/users/forgot-password`, { email });
      toast.success("Reset PIN sent to your email!");
      setStep(2);
    } catch (err) {
      console.error("Forgot password error:", err);
      toast.error(err.response?.data?.message || "Failed to send reset link");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    setIsLoading(true);
    try {
      // Assuming endpoint for resetting password with PIN
      await axios.post(`${import.meta.env.VITE_API_URL || 'http://localhost:7000'}/users/reset-password`, { 
        email, 
        pin, 
        newPassword 
      });
      toast.success("Password reset successful! Please login.");
      // Navigate to login after success
    } catch (err) {
      console.error("Reset password error:", err);
      toast.error(err.response?.data?.message || "Failed to reset password");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050608] text-white font-sans selection:bg-purple-500/30 overflow-hidden relative flex items-center justify-center px-4">
      {/* Background Elements */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse delay-700"></div>

      <div className="w-full max-w-[450px] bg-[#0a0c10]/60 backdrop-blur-3xl border border-white/5 rounded-[2.5rem] p-10 md:p-12 shadow-2xl relative z-10 group">
        {/* Animated Glow Border */}
        <div className="absolute inset-0 rounded-[2.5rem] border border-purple-500/20 group-hover:border-purple-500/40 transition-colors pointer-events-none"></div>
        
        <div className="flex flex-col items-center mb-10">
          <Logo className="mb-8 scale-110" />
          <h1 className="text-3xl font-black mb-2 tracking-tight">
            {step === 1 ? "Forgot" : "Reset"} <span className="text-purple-500">Password</span>
          </h1>
          <p className="text-gray-500 text-sm text-center">
            {step === 1 
              ? "Enter your email and we'll send you a reset PIN." 
              : "Enter the PIN sent to your email and your new password."}
          </p>
        </div>

        {step === 1 ? (
          <form onSubmit={handleSendPin} className="space-y-6">
            <div className="space-y-2 relative">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Email Address</label>
              <div className="relative group/input">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within/input:text-purple-500 transition-colors" />
                <input 
                  className="w-full bg-[#0d1117]/80 border border-white/5 rounded-2xl py-4 px-12 outline-none focus:border-purple-500/50 transition-all text-sm placeholder:text-gray-700" 
                  type="email" 
                  placeholder="name@example.com" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white py-4 rounded-2xl font-bold shadow-xl shadow-purple-600/20 transition-all active:scale-[0.98] text-sm"
            >
              {isLoading ? "Sending..." : "Send Reset PIN"}
            </button>
          </form>
        ) : (
          <form onSubmit={handleResetPassword} className="space-y-5">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Reset PIN</label>
              <input 
                className="w-full bg-[#0d1117]/80 border border-white/5 rounded-2xl py-4 px-6 outline-none focus:border-purple-500/50 transition-all text-sm placeholder:text-center placeholder:text-gray-700 text-center tracking-[1em] font-black" 
                type="text" 
                placeholder="••••••" 
                required 
                maxLength={6}
                value={pin}
                onChange={(e) => setPin(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">New Password</label>
              <input 
                className="w-full bg-[#0d1117]/80 border border-white/5 rounded-2xl py-4 px-6 outline-none focus:border-purple-500/50 transition-all text-sm placeholder:text-gray-700" 
                type="password" 
                placeholder="••••••••••••" 
                required 
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Confirm Password</label>
              <input 
                className="w-full bg-[#0d1117]/80 border border-white/5 rounded-2xl py-4 px-6 outline-none focus:border-purple-500/50 transition-all text-sm placeholder:text-gray-700" 
                type="password" 
                placeholder="••••••••••••" 
                required 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white py-4 rounded-2xl font-bold shadow-xl shadow-purple-600/20 transition-all active:scale-[0.98] text-sm"
            >
              {isLoading ? "Resetting..." : "Update Password"}
            </button>
          </form>
        )}

        <div className="mt-8 flex justify-center">
          <Link 
            to="/login" 
            className="flex items-center justify-center gap-2 text-gray-500 hover:text-white text-sm font-bold transition-all"
          >
            <FaArrowLeft className="text-xs" />
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
