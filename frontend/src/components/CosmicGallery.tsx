import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CosmicEvent {
  day: number;
  time?: string;
  desc: string;
}

interface CosmicMonth {
  month: number;
  title: string;
  epoch: string;
  color_class: string;
  events: CosmicEvent[];
}

export default function CosmicGallery() {
  const [timelineData, setTimelineData] = useState<CosmicMonth[]>([]);
  const [activeMonth, setActiveMonth] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/api/cosmic-calendar")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data: CosmicMonth[]) => {
        const ordered = [...data].sort((a, b) => a.month - b.month);
        setTimelineData(ordered);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API Error:", err);
        setLoading(false);
      });
  }, []);

  const monthNames = ["", "JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

  if (loading) return <div className="text-white p-10">Initializing DeepField Protocol...</div>;

  if (timelineData.length === 0) {
    return (
      <div className="text-white p-10">
        Backend not reachable. Please start the API on <span className="font-mono">http://localhost:8000</span>.
      </div>
    );
  }

  return (
    <div className="relative w-screen max-w-none h-[72vh] min-h-[620px] bg-[#030308] flex items-center justify-center overflow-hidden border-y border-white/5"
      style={{ marginLeft: "calc(50% - 50vw)", marginRight: "calc(50% - 50vw)" }}>
      {/* Ambient backlight */}
      <div className="pointer-events-none absolute inset-0 opacity-60"
           style={{ background: "radial-gradient(1200px 600px at 50% 55%, rgba(56,189,248,0.10), transparent 60%), radial-gradient(900px 500px at 20% 40%, rgba(168,85,247,0.10), transparent 65%), radial-gradient(900px 500px at 80% 40%, rgba(251,191,36,0.08), transparent 65%)" }} />
      {/* Screen glare */}
      <div className="pointer-events-none absolute inset-0 opacity-25"
           style={{ background: "linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.08) 22%, transparent 45%, rgba(255,255,255,0.05) 62%, transparent 100%)" }} />
      <div className="flex w-full max-w-[1400px] h-[86%] gap-3 px-6"
           style={{ perspective: "1400px" }}>
        {timelineData.map((item) => {
          const isActive = activeMonth === item.month;

          return (
            <motion.div
              key={item.month}
              layout
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
              onClick={() => setActiveMonth(isActive ? null : item.month)}
              className={[
                "relative h-full rounded-2xl overflow-hidden cursor-pointer border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_18px_60px_rgba(0,0,0,0.65)]",
                "transition-all duration-500 ease-out group select-none",
                isActive ? "flex-[4]" : "flex-1 hover:flex-[1.5]",
              ].join(" ")}
            >
              {/* Background: gradient + star dust */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color_class} opacity-95 transition-opacity duration-500`} style={{ filter: "saturate(1.25) brightness(1.18) contrast(1.06)" }} />
              <div className="absolute inset-0 opacity-45 mix-blend-screen" style={{ backgroundImage: "url(/textures/stardust.png)" }} />

              {/* Reflection (giant-screen floor bounce) */}
              <div className="absolute left-0 right-0 top-full h-[55%] opacity-28" style={{ transform: "scaleY(-1)", filter: "blur(2px)" }}>
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color_class} opacity-95`} style={{ filter: "saturate(1.15) brightness(1.05)" }} />
                <div className="absolute inset-0 opacity-35 mix-blend-screen" style={{ backgroundImage: "url(/textures/stardust.png)" }} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(0,0,0,0.95))" }} />
              </div>
              <div className="pointer-events-none absolute left-0 right-0 top-full h-[55%]" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(3,3,8,1))" }} />

              {/* Active glow */}
              {isActive && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-white/12 pointer-events-none" />
                  <div className="absolute -inset-2 opacity-70 pointer-events-none"
                       style={{ background: "radial-gradient(600px 220px at 50% 40%, rgba(255,255,255,0.14), transparent 60%)" }} />
                </>
              )}

              {/* Content */}
              <div className="absolute inset-0 p-4 flex flex-col text-white z-10">
                <div className="flex flex-col items-center mt-4">
                  <motion.span
                    layout="position"
                    className={[
                      "font-bold tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]",
                      isActive ? "text-7xl opacity-100" : "text-4xl opacity-50 group-hover:opacity-80",
                    ].join(" ")}
                  >
                    {item.month}
                  </motion.span>
                  <span className="text-[10px] tracking-[0.4em] font-mono opacity-60">{monthNames[item.month]}</span>
                </div>

                <AnimatePresence mode="wait">
                  {isActive ? (
                    <motion.div
                      key="open"
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.22 }}
                      className="mt-auto mb-4"
                    >
                      <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 mb-1">
                        {item.title}
                      </h2>
                      <div className="text-cyan-300 font-mono text-sm mb-4 border-l-2 border-cyan-500 pl-2">
                        EPOCH: {item.epoch}
                      </div>

                      <div className="space-y-3 bg-black/20 backdrop-blur-md p-3 rounded-lg border border-white/5">
                        {item.events.map((evt, idx) => (
                          <div key={idx} className="flex items-start gap-3 text-sm">
                            <span className="bg-white/10 px-1.5 py-0.5 rounded text-xs font-mono text-yellow-300 mt-0.5">
                              {item.month}.{evt.day}
                            </span>
                            <span className="text-gray-200 leading-tight">
                              {evt.desc}{" "}
                              {evt.time && <span className="opacity-60 text-xs">({evt.time})</span>}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ) : (
                    <div key="closed" className="absolute bottom-10 left-1/2 -translate-x-1/2">
                      <p className="[writing-mode:vertical-rl] text-xs tracking-widest uppercase opacity-40 whitespace-nowrap">
                        {item.epoch}
                      </p>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
