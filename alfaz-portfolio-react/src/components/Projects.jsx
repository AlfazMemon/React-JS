import React from "react";
import useResponsive from "../hooks/useResponsive.js";
import ProjectCard from "./ProjectCard.jsx";
import { theme, glass } from "../theme.js";

export default function Projects() {
  const { mobile, tablet } = useResponsive();

  return (
    <section
      id="projects"
      style={{
        padding: mobile ? "80px 20px" : "130px 64px",
        background: "rgba(6,14,32,.42)",
        position: "relative"
      }}
    >
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        
        <div
          style={{
            position: "relative",
            marginBottom: 55,
            textAlign: "right"
          }}
        >
          <div
            style={{
              position: "absolute",
              top: -35,
              right: -5,
              fontFamily: theme.fonts.heading,
              fontSize: mobile ? "4.5rem" : "9rem",
              lineHeight: 0.9,
              fontWeight: 700,
              letterSpacing: "-.06em",
              color: "transparent",
              WebkitTextStroke: "1px rgba(218,226,253,.14)",
              opacity: 0.8,
              pointerEvents: "none"
            }}
          >
            WORK
          </div>

          <h2
            style={{
              position: "relative",
              zIndex: 2,
              margin: 0,
              display: "inline-flex",
              alignItems: "center",
              gap: 14,
              fontFamily: theme.fonts.heading,
              fontSize: mobile ? 23 : 31,
              fontWeight: 600
            }}
          >
            Things I've built.
            <span
              style={{
                width: 42,
                height: 1,
                background: theme.colors.primary
              }}
            />
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              mobile || tablet ? "1fr" : "repeat(3, 1fr)",
            gap: 12
          }}
        >
          {/* Expense Tracker */}
          <ProjectCard
            number="01"
            title="Expense Tracker"
            description="A web application to record and manage daily expenses, with an interface designed to keep tracking fast and simple."
            tags={["React", "JS"]}
            type="large"
            liveUrl="https://expensebyalfaz.netlify.app"
          />

          {/* To-Do App */}
          <ProjectCard
            number="02"
            title="To-Do App"
            description="A task manager for adding, displaying and deleting tasks, built around React state management."
            tags={["React", "Hooks"]}
            type="small"
            liveUrl="https://todoappbyalfaz.netlify.app"
          />

          {/* Project 03 */}
          <div
            className="alfaz-card"
            style={{
              ...glass,
              minHeight: 170,
              gridColumn: mobile || tablet ? "span 1" : "span 3",
              borderRadius: 16,
              border: "1px dashed rgba(255,255,255,.14)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center"
            }}
          >
            <div>
              <div
                style={{
                  color: theme.colors.textMuted,
                  fontSize: 23,
                  marginBottom: 8
                }}
              >
                ⌘
              </div>

              <div
                style={{
                  fontFamily: theme.fonts.heading,
                  color: theme.colors.textMuted,
                  fontSize: 15
                }}
              >
                Project 03 In Progress
              </div>

              <div
                style={{
                  marginTop: 8,
                  color: theme.colors.primary,
                  fontFamily: theme.fonts.mono,
                  fontSize: 9,
                  letterSpacing: ".16em"
                }}
              >
                STAY TUNED
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}