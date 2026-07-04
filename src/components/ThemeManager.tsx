"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Sunset, Sunrise, Clock } from "lucide-react";

export type TimeTheme = "morning" | "afternoon" | "evening" | "night";
export type ThemeMode = "auto" | TimeTheme;

interface ThemeContextType {
  theme: TimeTheme;
  mode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTimeTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTimeTheme must be used within a TimeThemeProvider");
  }
  return context;
}

const getThemeFromHour = (hour: number): TimeTheme => {
  if (hour >= 6 && hour < 12) return "morning";
  if (hour >= 12 && hour < 17) return "afternoon";
  if (hour >= 17 && hour < 20) return "evening";
  return "night";
};

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>("auto");
  const [theme, setTheme] = useState<TimeTheme>("night"); // Fallback to night
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  // Update clock & auto-theme
  useEffect(() => {
    const updateTheme = () => {
      const date = new Date();
      
      // Update formatted time
      setCurrentTime(
        date.toLocaleTimeString("en-IN", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
      );

      if (mode === "auto") {
        const hour = date.getHours();
        setTheme(getThemeFromHour(hour));
      } else {
        setTheme(mode);
      }
    };

    updateTheme(); // Initial run

    const interval = setInterval(updateTheme, 60000); // Check every minute
    return () => clearInterval(interval);
  }, [mode]);

  // Apply theme class to document
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("theme-morning", "theme-afternoon", "theme-evening", "theme-night");
    root.classList.add(`theme-${theme}`);
  }, [theme]);

  const handleModeChange = (newMode: ThemeMode) => {
    setMode(newMode);
    setIsOpen(false);
  };

  const getThemeMeta = (t: TimeTheme) => {
    switch (t) {
      case "morning":
        return { label: "Morning Sunrise", icon: Sunrise, color: "text-amber-400" };
      case "afternoon":
        return { label: "Afternoon Diamond", icon: Sun, color: "text-yellow-400" };
      case "evening":
        return { label: "Evening Sunset", icon: Sunset, color: "text-orange-400" };
      case "night":
        return { label: "Night Velvet", icon: Moon, color: "text-purple-400" };
    }
  };

  const activeMeta = getThemeMeta(theme);

  return (
    <ThemeContext.Provider value={{ theme, mode, setThemeMode: handleModeChange }}>
      {children}

      {/* Floating Theme Controller Widget */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="glass p-5 rounded-2xl mb-3 w-64 shadow-2xl border border-gold/15 backdrop-blur-md"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5">
                <div>
                  <h4 className="text-white text-xs font-semibold uppercase tracking-wider">Fragrance Ambience</h4>
                  <p className="text-[10px] text-gray mt-0.5">{currentTime} (Local Time)</p>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              </div>

              {/* Status */}
              <div className="bg-white/5 rounded-xl p-3 mb-4 flex items-center gap-3">
                <div className={`w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center`}>
                  <activeMeta.icon className={activeMeta.color} size={16} />
                </div>
                <div>
                  <span className="text-[10px] text-gray block">Active Ambience</span>
                  <span className="text-xs font-heading font-medium text-white">{activeMeta.label}</span>
                </div>
              </div>

              {/* Theme selectors */}
              <div className="space-y-1.5">
                <button
                  onClick={() => handleModeChange("auto")}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-all duration-300 cursor-pointer ${
                    mode === "auto"
                      ? "bg-gold/15 text-gold border border-gold/20"
                      : "hover:bg-white/5 text-gray hover:text-white border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Clock size={14} />
                    <span>Auto (Time-Synced)</span>
                  </div>
                  {mode === "auto" && <span className="text-[9px] font-semibold bg-gold/20 px-1.5 py-0.5 rounded text-gold-light uppercase">Active</span>}
                </button>

                <div className="h-px bg-white/5 my-2" />

                {[
                  { key: "morning", label: "Morning Sunrise", icon: Sunrise },
                  { key: "afternoon", label: "Afternoon Diamond", icon: Sun },
                  { key: "evening", label: "Evening Sunset", icon: Sunset },
                  { key: "night", label: "Night Velvet", icon: Moon },
                ].map((t) => {
                  const Icon = t.icon;
                  const isSelected = mode === t.key;
                  return (
                    <button
                      key={t.key}
                      onClick={() => handleModeChange(t.key as TimeTheme)}
                      className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs transition-all duration-300 cursor-pointer ${
                        isSelected
                          ? "bg-gold/15 text-gold border border-gold/20"
                          : "hover:bg-white/5 text-gray hover:text-white border border-transparent"
                      }`}
                    >
                      <Icon size={14} className={isSelected ? "text-gold" : "text-gray group-hover:text-white"} />
                      <span>{t.label}</span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Toggle Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg cursor-pointer border border-gold/20 relative group ${
            isOpen ? "bg-gold text-dark border-gold" : "glass text-gold hover:text-gold-light"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          layout
        >
          {/* Inner pulsating glow effect */}
          <div className="absolute inset-0 rounded-full border border-gold/20 opacity-0 group-hover:opacity-100 animate-ping pointer-events-none" style={{ animationDuration: "2s" }} />
          
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 45, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="font-medium text-lg leading-none"
              >
                ✕
              </motion.span>
            ) : (
              <motion.div
                key="active-icon"
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.7, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center relative"
              >
                {mode === "auto" && (
                  <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-500 border border-dark z-10 animate-pulse" />
                )}
                <activeMeta.icon size={20} className={isOpen ? "text-dark" : activeMeta.color} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </ThemeContext.Provider>
  );
}
