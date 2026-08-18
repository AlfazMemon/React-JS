import React from "react";
import useResponsive from "../hooks/useResponsive.js";
import { theme, glass } from "../theme.js";

export default function Hero() {
  const { mobile, tablet } = useResponsive();

  const section = {
    minHeight: mobile ? "auto" : "100vh",
    maxWidth: 1440,
    margin: "0 auto",
    padding: mobile ? "90px 20px 70px" : tablet ? "100px 32px 80px" : "0 64px",
    display: "flex",
    flexDirection: mobile ? "column" : "row",
    position: "relative",
    overflow: "hidden"
  };

  const heading = {
    margin: "20px 0 18px",
    fontFamily: theme.fonts.heading,
    fontSize: mobile ? "4.1rem" : tablet ? "6.2rem" : "7.8rem",
    lineHeight: .88,
    letterSpacing: "-.06em",
    fontWeight: 700,
    textTransform: "uppercase"
  };

  const pill = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "6px 11px",
    borderRadius: 999,
    ...glass,
    color: theme.colors.secondary,
    fontFamily: theme.fonts.mono,
    fontSize: 9,
    letterSpacing: ".08em",
    textTransform: "uppercase"
  };

  const buttonBase = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    padding: "10px 18px",
    borderRadius: 999,
    fontFamily: theme.fonts.mono,
    fontSize: 10,
    letterSpacing: ".05em",
    transition: "all .2s ease"
  };

  return (
    <section id="hero" style={section}>
      <div style={{
        width: mobile ? "100%" : "50%",
        minHeight: mobile ? "auto" : "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        zIndex: 3
      }}>
        <div style={pill}>
          <span style={{
            width: 7, height: 7, borderRadius: "50%",
            background: theme.colors.secondary,
            boxShadow: `0 0 12px ${theme.colors.secondary}`
          }} />
          Open to opportunities
        </div>

        <h1 style={heading}>
          ALFAZ
          <br />
          <span style={{ color: theme.colors.primary }}>MEMON</span>
        </h1>

        <p style={{
          maxWidth: 520,
          margin: 0,
          color: theme.colors.textMuted,
          fontSize: mobile ? 14 : 16,
          lineHeight: 1.65
        }}>
          I build clean, responsive interfaces with React — and I ship them.
          Frontend Developer / Full Stack Developer / Web Developer based in Gujarat.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 25 }}>
          <a href="#projects" className="alfaz-button" style={{
            ...buttonBase,
            background: theme.colors.primary,
            color: "#080b13",
            boxShadow: "0 0 20px rgba(208,188,255,.28)"
          }}>
            View work →
          </a>

          <a href="/Alfaz_Memon_Resume_Modern(1).pdf" download className="alfaz-button" style={{
            ...buttonBase,
            border: "1px solid rgba(255,255,255,.18)",
            color: theme.colors.text
          }}>
            Download CV ↓
          </a>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: mobile ? 20 : 38,
          maxWidth: 470,
          marginTop: 38
        }}>
          {[
            ["03", "Projects"],
            ["3rd", "BCA Sem"],
            ["React", "Stack"]
          ].map(([value, label]) => (
            <div key={label}>
              <div style={{
                color: theme.colors.primary,
                fontFamily: theme.fonts.heading,
                fontSize: mobile ? 20 : 23,
                fontWeight: 600
              }}>{value}</div>
              <div style={{
                marginTop: 3,
                color: theme.colors.textMuted,
                fontFamily: theme.fonts.mono,
                fontSize: 8,
                letterSpacing: ".13em",
                textTransform: "uppercase"
              }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{
        width: mobile ? "100%" : "50%",
        minHeight: mobile ? 360 : "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative"
      }}>
        <div style={{
          position: "absolute",
          width: mobile ? 300 : 500,
          height: mobile ? 300 : 500,
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
          borderRadius: "50%",
          background: "rgba(109,59,215,.20)",
          filter: "blur(80px)",
          animation: "floatGlow 5s ease-in-out infinite"
        }} />

        <div style={{
          width: mobile ? 280 : "min(44vw, 510px)",
          aspectRatio: "1",
          position: "relative"
        }}>
          <div style={{
            position: "absolute",
            inset: 0,
            border: "1px solid rgba(208,188,255,.22)",
            borderRadius: "50%",
            animation: "spinSlow 60s linear infinite"
          }} />
          <div style={{
            position: "absolute",
            inset: mobile ? 15 : 22,
            border: "1px solid rgba(76,215,246,.18)",
            borderRadius: "50%",
            animation: "spinReverse 40s linear infinite"
          }} />
          <div style={{
            position: "absolute",
            inset: mobile ? 55 : 85,
            borderRadius: "50%",
            ...glass,
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <div style={{
              width: "100%",
              height: "100%",
              background: "radial-gradient(circle at center, rgba(208,188,255,.18), #0b1326 60%)"
            }} />
            <div style={{
              position: "absolute",
              width: mobile ? 60 : 90,
              height: mobile ? 60 : 90,
              borderRadius: "50%",
              background: "rgba(208,188,255,.28)",
              filter: "blur(25px)",
              animation: "pulseCore 3s ease-in-out infinite"
            }} />
          </div>
        </div>
      </div>

      {!mobile && (
        <div style={{
          position: "absolute",
          bottom: 70,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          color: theme.colors.textMuted,
          opacity: .5
        }}>
          <span style={{
            fontFamily: theme.fonts.mono,
            fontSize: 8,
            letterSpacing: ".2em",
            textTransform: "uppercase"
          }}>Scroll</span>
          <div style={{ width: 1, height: 38, background: "rgba(255,255,255,.2)", overflow: "hidden" }}>
            <div style={{
              width: 1, height: 14,
              background: theme.colors.primary,
              animation: "scrollDot 2s infinite"
            }} />
          </div>
        </div>
      )}
    </section>
  );
}