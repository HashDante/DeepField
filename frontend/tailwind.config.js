/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  safelist: [
    "from-red-900","via-orange-800","to-red-950",
    "from-slate-900","via-gray-800","to-black",
    "from-gray-900","via-indigo-900","to-black",
    "from-orange-900","via-rose-900","to-slate-950",
    "from-purple-900","via-indigo-900","to-slate-900",
    "from-fuchsia-900","via-violet-900","to-slate-950",
    "from-amber-900","via-yellow-800","to-slate-950",
    "from-blue-900","via-cyan-900","to-slate-900",
    "from-teal-900","via-emerald-900","to-slate-900",
    "from-emerald-900","via-lime-900","to-slate-950",
    "from-sky-900","via-blue-900","to-slate-950",
    "from-yellow-700","via-amber-800","to-slate-900",
  ],
  theme: { extend: {} },
  plugins: [],
};
