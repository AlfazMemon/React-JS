import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Profile from "./components/Profile.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";
import useResponsive from "./hooks/useResponsive.js";
import { theme } from "./theme.js";

export default function App() {
  const { mobile } = useResponsive();

  const pageStyle = {
    minHeight: "100vh",
    backgroundColor: theme.colors.background,
    color: theme.colors.text,
    fontFamily: theme.fonts.body,
    overflowX: "hidden",
    position: "relative",
    backgroundImage: `
      linear-gradient(to right, rgba(208,188,255,0.035) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(208,188,255,0.035) 1px, transparent 1px)
    `,
    backgroundSize: mobile ? "24px 24px" : "32px 32px"
  };

  return (
    <div style={pageStyle}>
      <style>{`
        html { scroll-behavior: smooth; }
        * { box-sizing: border-box; }
        body { margin: 0; background: #0b1326; }
        a { color: inherit; text-decoration: none; }
        button, input, textarea { font: inherit; }
        ::selection { background: rgba(208,188,255,.25); color: #d0bcff; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0b1326; }
        ::-webkit-scrollbar-thumb { background: #2d3449; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #d0bcff; }
        @keyframes pulseCore {
          0%,100% { transform: scale(.9); opacity: .55; }
          50% { transform: scale(1.15); opacity: 1; }
        }
        @keyframes spinSlow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes spinReverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
        @keyframes scrollDot {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(16px); opacity: 0; }
        }
        @keyframes floatGlow {
          0%,100% { transform: translate(-50%,-50%) scale(1); }
          50% { transform: translate(-50%,-50%) scale(1.08); }
        }
        .alfaz-card { transition: transform .3s ease, border-color .3s ease, box-shadow .3s ease; }
        .alfaz-card:hover {
          transform: translateY(-3px);
          border-color: rgba(208,188,255,.35) !important;
          box-shadow: 0 0 34px rgba(109,59,215,.18);
        }
        .alfaz-link:hover { color: #d0bcff !important; }
        .alfaz-button:hover { transform: translateY(-2px); filter: brightness(1.04); }
        .alfaz-input:focus {
          outline: none;
          border-color: rgba(208,188,255,.65) !important;
          box-shadow: 0 0 16px rgba(208,188,255,.10);
        }
      `}</style>

      <Navbar />
      <main style={{ position: "relative", zIndex: 2 }}>
        <Hero />
        <Profile />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  );
}