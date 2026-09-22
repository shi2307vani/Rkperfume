"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Pause, Volume2, VolumeX } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax: video scales up slightly as you scroll, content fades
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.4], [0, -60]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoaded = () => setIsLoaded(true);
    video.addEventListener("loadeddata", handleLoaded);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
            setIsPlaying(true);
          } else {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(video);

    return () => {
      video.removeEventListener("loadeddata", handleLoaded);
      observer.disconnect();
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden bg-[#0A0A0A]"
    >
      {/* ══════════ VIDEO BACKGROUND LAYER ══════════ */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ scale: videoScale }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.55) saturate(0.9) contrast(1.05)" }}
        >
          <source src="/videos/bg1.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* ══════════ GRADIENT OVERLAYS ══════════ */}
      {/* Cinematic vignette — dark edges for depth */}
      <div
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 45%, transparent 0%, rgba(10,10,10,0.5) 100%)",
        }}
      />
      {/* Bottom gradient — blends hero into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none z-[2]" />
      {/* Top subtle darkening for navbar readability */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/30 to-transparent pointer-events-none z-[2]" />

      {/* ══════════ DECORATIVE FRAME ══════════ */}
      <div className="absolute inset-6 sm:inset-8 lg:inset-12 border border-white/[0.08] pointer-events-none z-[3]" />

      {/* ══════════ LOADING STATE ══════════ */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isLoaded ? 0 : 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 bg-[#0A0A0A] z-[5] pointer-events-none"
      />

      {/* ══════════ MAIN CONTENT ══════════ */}
      <motion.div
        className="relative z-[4] h-full flex flex-col items-center justify-center text-center px-6"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="w-8 h-px bg-[#C8A97E]" />
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-[#C8A97E] font-medium">
            Pune&apos;s Finest Perfumery
          </span>
          <span className="w-8 h-px bg-[#C8A97E]" />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-[2.6rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6rem] text-white font-normal leading-[1.05] tracking-tight uppercase max-w-5xl"
        >
          The Art of Scent,
          <br />
          <span className="italic font-light text-[#C8A97E]">
            Crafted in Pune
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="text-[13px] sm:text-sm md:text-base text-white/55 font-light mt-6 max-w-xl leading-relaxed tracking-wide"
        >
          Pure Arabian attars, luxury Eau de Parfums & artisanal inspired
          fragrances — handcrafted compositions starting from{" "}
          <strong className="text-white font-medium">₹599 - ₹649</strong>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-10"
        >
          <Link
            href="/collections"
            className="group px-8 py-4 bg-white text-[#1A2024] text-[11px] sm:text-xs tracking-[0.2em] font-semibold uppercase hover:bg-[#C8A97E] hover:text-white transition-all duration-500 inline-flex items-center gap-2.5"
          >
            <span>Explore Collections</span>
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

          <Link
            href="/contact"
            className="px-8 py-4 border border-white/25 text-white text-[11px] sm:text-xs tracking-[0.2em] font-medium uppercase hover:bg-white/10 hover:border-white/50 transition-all duration-500 backdrop-blur-sm"
          >
            Visit Boutique
          </Link>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mt-12 text-[10px] sm:text-[11px] tracking-[0.15em] uppercase text-white/35 font-medium"
        >
          <span>100% Authentic</span>
          <span className="w-1 h-1 rounded-full bg-[#C8A97E]/60" />
          <span>Pan-India Delivery</span>
          <span className="w-1 h-1 rounded-full bg-[#C8A97E]/60" />
          <span>In-Store Testing</span>
        </motion.div>
      </motion.div>

      {/* ══════════ SCROLL INDICATOR ══════════ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-20 sm:bottom-16 left-1/2 -translate-x-1/2 z-[4] flex flex-col items-center gap-2"
      >
        <span className="text-[9px] tracking-[0.3em] uppercase text-white/25 font-medium">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-[#C8A97E]/60 to-transparent"
        />
      </motion.div>

      {/* ══════════ VIDEO CONTROLS ══════════ */}
      <div className="absolute bottom-20 sm:bottom-10 right-6 sm:right-10 z-[5] flex items-center gap-2.5">
        <button
          onClick={togglePlay}
          className="w-9 h-9 rounded-full bg-white/[0.07] backdrop-blur-md border border-white/[0.1] flex items-center justify-center text-white/50 hover:text-white hover:bg-white/15 transition-all duration-300 cursor-pointer"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? <Pause size={14} /> : <Play size={14} />}
        </button>
        <button
          onClick={toggleMute}
          className="w-9 h-9 rounded-full bg-white/[0.07] backdrop-blur-md border border-white/[0.1] flex items-center justify-center text-white/50 hover:text-white hover:bg-white/15 transition-all duration-300 cursor-pointer"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
        </button>
      </div>
    </section>
  );
}
