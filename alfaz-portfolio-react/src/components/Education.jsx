import React from "react";
import useResponsive from "../hooks/useResponsive.js";
import { theme, glass } from "../theme.js";

export default function Education() {
  const { mobile } = useResponsive();

  return (
    <section id="education" style={{
      padding: mobile ? "80px 20px" : "130px 64px",
      position: "relative",
      overflow: "hidden"
    }}>
      <div style={{
        position: "absolute",
        left: -180,
        top: "45%",
        width: 500,
        height: 500,
        borderRadius: "50%",
        background: "rgba(76,215,246,.08)",
        filter: "blur(100px)",
        pointerEvents: "none"
      }} />

      <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <div style={{
          textAlign: "center",
          marginBottom: 55
        }}>
          <h2 style={{
            margin: 0,
            display: "inline-flex",
            alignItems: "center",
            gap: 14,
            fontFamily: theme.fonts.heading,
            fontSize: mobile ? 23 : 31,
            fontWeight: 600
          }}>
            <span style={{ width: 42, height: 1, background: theme.colors.secondary }} />
            Education Path
            <span style={{ width: 42, height: 1, background: theme.colors.secondary }} />
          </h2>
        </div>

        <div style={{ position: "relative", padding: mobile ? "20px 0" : "45px 0" }}>
          <div style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: mobile ? 18 : "50%",
            width: 1,
            transform: mobile ? "none" : "translateX(-50%)",
            background: "linear-gradient(to bottom, transparent, rgba(208,188,255,.5), transparent)"
          }} />

          <div style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: mobile ? "1fr" : "1fr 1fr",
            gap: mobile ? 20 : 70,
            alignItems: "center",
            marginBottom: 55
          }}>
            <div style={{
              textAlign: mobile ? "left" : "right",
              paddingLeft: mobile ? 45 : 0
            }}>
              <h3 style={{
                margin: 0,
                fontFamily: theme.fonts.heading,
                fontSize: mobile ? 20 : 24,
                fontWeight: 600
              }}>Bachelor of Computer Applications</h3>
              <p style={{
                color: theme.colors.primary,
                fontFamily: theme.fonts.mono,
                fontSize: 9,
                marginTop: 7
              }}>Currently in 3rd Semester</p>
            </div>

            <div style={{
              ...glass,
              padding: 20,
              borderRadius: 12,
              color: theme.colors.textMuted,
              fontSize: 12,
              lineHeight: 1.65
            }}>
              Focusing on core computer science concepts, software engineering
              principles, and practical application development.
            </div>

            <div style={{
              position: "absolute",
              left: mobile ? 18 : "50%",
              top: "50%",
              transform: "translate(-50%,-50%)",
              width: 18,
              height: 18,
              borderRadius: "50%",
              background: theme.colors.background,
              border: `3px solid ${theme.colors.secondary}`,
              boxShadow: "0 0 15px rgba(76,215,246,.5)"
            }}>
              <div style={{
                width: 5, height: 5, borderRadius: "50%",
                background: theme.colors.secondary,
                position: "absolute",
                left: "50%", top: "50%",
                transform: "translate(-50%,-50%)"
              }} />
            </div>
          </div>

          <div style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: mobile ? "1fr" : "1fr 1fr",
            gap: mobile ? 20 : 70,
            alignItems: "center",
            opacity: .48
          }}>
            <div style={{
              ...glass,
              padding: 20,
              borderRadius: 12,
              marginLeft: mobile ? 45 : 0,
              color: theme.colors.textMuted,
              fontSize: 12
            }}>Pre-University Education</div>
            <h3 style={{
              margin: 0,
              paddingLeft: mobile ? 45 : 0,
              fontFamily: theme.fonts.heading,
              fontSize: mobile ? 20 : 24
            }}>High School</h3>
            <div style={{
              position: "absolute",
              left: mobile ? 18 : "50%",
              top: "50%",
              transform: "translate(-50%,-50%)",
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: theme.colors.background,
              border: "2px solid rgba(255,255,255,.2)"
            }} />
          </div>
        </div>
      </div>
    </section>
  );
}