"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

export default function VideoShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax effects
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.7, 0.35, 0.35, 0.7]);
  const textY = useTransform(scrollYProgress, [0.1, 0.5], [60, -40]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.08]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

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
      { threshold: 0.25 }
    );

    observer.observe(video);
    return () => observer.disconnect();
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
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#0A0A0A]"
      style={{ height: "clamp(500px, 85vh, 900px)" }}
    >
      {/* Video Layer with Parallax Scale */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ scale }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "saturate(0.85) contrast(1.05)" }}
        >
          <source src="/videos/bg.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Gradient Overlays for Blending */}
      <motion.div
        className="absolute inset-0 bg-black pointer-events-none"
        style={{ opacity: overlayOpacity }}
      />
      {/* Top gradient fade — blends with section above */}
      <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-[#F7F6F3] via-[#F7F6F3]/60 to-transparent pointer-events-none z-10" />
      {/* Bottom gradient fade — blends with section below */}
      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-white via-white/60 to-transparent pointer-events-none z-10" />

      {/* Decorative Frame Borders */}
      <div className="absolute inset-6 sm:inset-10 lg:inset-16 border border-white/10 pointer-events-none z-20" />
      <div className="absolute inset-8 sm:inset-12 lg:inset-20 border border-white/[0.04] pointer-events-none z-20" />

      {/* Content Overlay */}
      <motion.div
        className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6"
        style={{ y: textY }}
      >
        {/* Tagline */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-[10px] sm:text-xs tracking-[0.35em] uppercase text-[#C5A059] font-medium mb-4"
        >
          ✦ The Essence of Luxury ✦
        </motion.span>

        {/* Main Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          viewport={{ once: true }}
          className="font-heading text-3xl sm:text-5xl lg:text-7xl text-white uppercase tracking-wide font-normal leading-[1.1] max-w-4xl"
        >
          Crafted for Those
          <br />
          <span className="italic font-light text-[#C5A059]/90">Who Dare to Stand Out</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="text-xs sm:text-sm text-white/60 font-light mt-6 max-w-lg leading-relaxed tracking-wide"
        >
          Each fragrance is a journey — from the opening note to the lingering
          trail. Discover scents that speak before you do.
        </motion.p>

        {/* Animated Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col items-center gap-2"
        >
          <span className="text-[9px] tracking-[0.3em] uppercase text-white/30 font-medium">
            Scroll to Explore
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-[#C5A059] to-transparent"
          />
        </motion.div>
      </motion.div>

      {/* Video Controls */}
      <div className="absolute bottom-8 sm:bottom-12 right-8 sm:right-12 z-30 flex items-center gap-3">
        <button
          onClick={togglePlay}
          className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/60 transition-all duration-300 cursor-pointer"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} />}
        </button>
        <button
          onClick={toggleMute}
          className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/60 transition-all duration-300 cursor-pointer"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
      </div>

      {/* Vignette Effect */}
      <div className="absolute inset-0 pointer-events-none z-[15]" style={{
        background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.45) 100%)"
      }} />
    </section>
  );
}
