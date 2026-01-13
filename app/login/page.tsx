"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    const formData = new FormData(e.target);
    setLoading(true);

    // Simulate async login
    await new Promise((res) => setTimeout(res, 2000));

    console.log({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    // ✅ Redirect after successful login
    router.push("/dashboard");
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0b0f1a]">
      {/* Background blobs */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-500/30 blur-3xl animate-floatSlow" />
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-purple-500/30 blur-3xl animate-floatSlow delay-500" />

      {/* Card */}
      <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl animate-fadeInUp">
        <h1 className="text-3xl font-semibold text-white text-center mb-2">
          Welcome Back
        </h1>
        <p className="text-sm text-gray-400 text-center mb-8">
          Sign in to your account
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div className="relative">
            <input
              type="email"
              name="email"
              required
              disabled={loading}
              className="peer w-full rounded-lg bg-white/10 px-4 pt-5 pb-2 text-white
                         border border-white/10 outline-none transition
                         focus:border-blue-500 focus:bg-white/15
                         disabled:opacity-60"
            />
            <label className="absolute left-4 top-3 text-sm text-gray-400 transition-all
                              peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-400
                              peer-valid:-top-2 peer-valid:text-xs">
              Email
            </label>
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type="password"
              name="password"
              required
              disabled={loading}
              className="peer w-full rounded-lg bg-white/10 px-4 pt-5 pb-2 text-white
                         border border-white/10 outline-none transition
                         focus:border-purple-500 focus:bg-white/15
                         disabled:opacity-60"
            />
            <label className="absolute left-4 top-3 text-sm text-gray-400 transition-all
                              peer-focus:-top-2 peer-focus:text-xs peer-focus:text-purple-400
                              peer-valid:-top-2 peer-valid:text-xs">
              Password
            </label>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            aria-busy={loading}
            className="relative w-full h-12 rounded-lg
                       bg-gradient-to-r from-blue-500 to-purple-600
                       text-white font-medium
                       transition-all duration-300
                       hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/30
                       active:scale-[0.97]
                       disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="h-5 w-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                Logging in…
              </span>
            ) : (
              "Log In"
            )}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-400">
          Forgot your password?{" "}
          <span className="text-blue-400 cursor-pointer hover:underline">
            Reset
          </span>
        </p>
      </div>
    </main>
  );
}
