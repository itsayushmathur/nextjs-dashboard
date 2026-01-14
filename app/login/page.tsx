"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("Logging in...");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    const formData = new FormData(e.target);
    setLoading(true);
    setLoadingText("Logging in...");

    // simulate login
    await new Promise((res) => setTimeout(res, 500));
    setLoadingText("Loading dashboard...");

    await new Promise((res) => setTimeout(res, 500));

    console.log({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 px-4">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">
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
              placeholder=" "
              className="
                peer w-full h-12 rounded-xl
                bg-white/10 px-4 pt-4 text-white
                border border-white/15 outline-none
                focus:border-blue-400 focus:ring-2 focus:ring-blue-500/40
              "
            />

            <label
              className="
                absolute left-4 -top-2
                px-1 text-xs text-blue-300
                bg-[#1e0b3a]
                transition-all

                peer-placeholder-shown:top-3.5
                peer-placeholder-shown:text-sm
                peer-placeholder-shown:text-gray-300

                peer-focus:-top-2 peer-focus:text-xs
                peer-valid:-top-2 peer-valid:text-xs
              "
            >
              Email address
            </label>
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type="password"
              name="password"
              required
              disabled={loading}
              placeholder=" "
              className="
                peer w-full h-12 rounded-xl
                bg-white/10 px-4 pt-4 text-white
                border border-white/15 outline-none
                focus:border-purple-400 focus:ring-2 focus:ring-purple-500/40
              "
            />

            <label
              className="
                absolute left-4 -top-2
                px-1 text-xs text-purple-300
                bg-[#1e0b3a]
                transition-all

                peer-placeholder-shown:top-3.5
                peer-placeholder-shown:text-sm
                peer-placeholder-shown:text-gray-300

                peer-focus:-top-2 peer-focus:text-xs
                peer-valid:-top-2 peer-valid:text-xs
              "
            >
              Password
            </label>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full h-12 rounded-lg
                       bg-gradient-to-r from-blue-500 to-purple-600
                       text-white font-medium
                       transition-all
                       hover:scale-[1.02]
                       disabled:opacity-70"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="h-5 w-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                {loadingText}
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
