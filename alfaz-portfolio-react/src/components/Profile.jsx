import React from "react";
import useResponsive from "../hooks/useResponsive.js";
import SkillCard from "./SkillCard.jsx";
import { theme, glass } from "../theme.js";

export default function Profile() {
  const { mobile, tablet } = useResponsive();

  return (
    <section id="profile" style={{
      padding: mobile ? "80px 20px" : "130px 64px",
      position: "relative"
    }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ position: "relative", marginBottom: 55 }}>
          <div style={{
            position: "absolute",
            top: -35,
            left: -5,
            fontFamily: theme.fonts.heading,
            fontSize: mobile ? "4.5rem" : "9rem",
            lineHeight: .9,
            fontWeight: 700,
            letterSpacing: "-.06em",
            color: "transparent",
            WebkitTextStroke: "1px rgba(218,226,253,.14)",
            opacity: .8,
            pointerEvents: "none"
          }}>PROFILE</div>

          <h2 style={{
            position: "relative",
            zIndex: 2,
            margin: 0,
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontFamily: theme.fonts.heading,
            fontSize: mobile ? 23 : 31,
            fontWeight: 600
          }}>
            <span style={{ width: 42, height: 1, background: theme.colors.primary }} />
            Technical Profile
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: mobile ? "1fr" : tablet ? "1fr" : "5fr 7fr",
          gap: mobile ? 35 : 60,
          position: "relative",
          zIndex: 2
        }}>
          <div style={{
            color: theme.colors.textMuted,
            fontSize: 14,
            lineHeight: 1.75
          }}>
            <p style={{
              color: theme.colors.text,
              fontSize: 18,
              fontWeight: 600,
              marginTop: 0
            }}>Learning fast, building faster.</p>

            <p>
              BCA student currently in the 3rd semester with a strong interest in
              web development and hands-on experience building responsive,
              interactive web applications.
            </p>

            <p>
              Looking for a frontend, full stack or web development role where I
              can apply my skills on real-world projects, learn modern technologies
              and contribute to a development team.
            </p>

            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 20 }}>
              {["Web Development", "Full Stack"].map(item => (
                <span key={item} style={{
                  padding: "6px 10px",
                  border: "1px solid rgba(208,188,255,.20)",
                  background: "rgba(45,52,73,.45)",
                  borderRadius: 999,
                  color: theme.colors.primary,
                  fontFamily: theme.fonts.mono,
                  fontSize: 9
                }}>{item}</span>
              ))}
            </div>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: mobile ? "repeat(2, 1fr)" : "repeat(3, 1fr)",
            gap: 10
          }}>
            <SkillCard short="Re" name="React.js" />
            <SkillCard short="Js" name="JavaScript" accent="secondary" />
            <SkillCard short="Ts" name="TypeScript" accent="text" />
            <SkillCard short="</>" name="HTML/CSS" accent="text" />
            <div
              className="alfaz-card"
              style={{
                ...glass,
                minHeight: 150,
                gridColumn: mobile ? "span 2" : "span 2",
                borderRadius: 12,
                padding: 20,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 12
              }}
            >
              <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 10,
                color: theme.colors.textMuted,
                fontFamily: theme.fonts.mono,
                fontSize: 9
              }}>
                Bootstrap <span>•</span> C <span>•</span> C++ 
              </div>
              <div style={{
                color: theme.colors.textMuted,
                opacity: .55,
                fontFamily: theme.fonts.mono,
                fontSize: 8,
                letterSpacing: ".13em",
                textTransform: "uppercase"
              }}>Additional</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}