import React from "react";
import { theme, glass } from "../theme.js";

export default function ProjectCard({
  number,
  title,
  description,
  tags,
  type = "large",
  liveUrl
}) {
  const large = type === "large";

  return (
    <article
      className="alfaz-card"
      style={{
        ...glass,
        position: "relative",
        minHeight: 510,
        borderRadius: 16,
        overflow: "hidden",
        padding: 0,
        gridColumn: large ? "span 2" : "span 1"
      }}
    >
      {/* Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: large
            ? "linear-gradient(145deg, rgba(76,215,246,.08), rgba(208,188,255,.06) 45%, rgba(6,14,32,.9))"
            : "linear-gradient(145deg, rgba(208,188,255,.08), rgba(6,14,32,.95))"
        }}
      />

      {/* Visual */}
      {large ? (
        <div
          style={{
            position: "absolute",
            left: "14%",
            right: "14%",
            top: "16%",
            height: 190,
            opacity: 0.28,
            background: `
              linear-gradient(
                90deg,
                transparent 0 8%,
                rgba(208,188,255,.35) 8% 10%,
                transparent 10% 20%,
                rgba(76,215,246,.28) 20% 23%,
                transparent 23% 34%,
                rgba(208,188,255,.35) 34% 38%,
                transparent 38% 48%,
                rgba(76,215,246,.24) 48% 53%,
                transparent 53%
              ),
              linear-gradient(to top, rgba(208,188,255,.25), transparent)
            `,
            clipPath:
              "polygon(0 100%,0 70%,14% 78%,14% 55%,30% 65%,30% 40%,45% 55%,45% 20%,61% 46%,61% 10%,78% 35%,78% 0,90% 20%,100% 0,100% 100%)"
          }}
        />
      ) : (
        <div
          style={{
            position: "absolute",
            top: 40,
            left: "50%",
            transform: "translateX(-50%) rotate(-8deg)",
            width: "70%",
            height: 180,
            borderRadius: 20,
            border: "1px solid rgba(208,188,255,.16)",
            background:
              "linear-gradient(145deg, rgba(255,255,255,.05), rgba(208,188,255,.04))",
            boxShadow: "0 0 35px rgba(208,188,255,.08)"
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              margin: 25,
              border: "2px solid rgba(76,215,246,.5)",
              boxShadow: "0 0 22px rgba(76,215,246,.25)"
            }}
          />
        </div>
      )}

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          padding: 28,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          background:
            "linear-gradient(to top, rgba(6,14,32,.98), rgba(6,14,32,.25) 75%, transparent)"
        }}
      >
        {/* Number */}
        <div
          style={{
            color: large
              ? theme.colors.primary
              : theme.colors.secondary,
            fontFamily: theme.fonts.mono,
            fontSize: 9,
            letterSpacing: ".13em",
            marginBottom: 8
          }}
        >
          {number} // {title.toUpperCase()}
        </div>

        {/* Title */}
        <h3
          style={{
            margin: "0 0 12px",
            fontFamily: theme.fonts.heading,
            fontSize: large ? 27 : 23,
            fontWeight: 600
          }}
        >
          {large ? "Financial Dashboard" : "Task Manager"}
        </h3>

        {/* Description */}
        <p
          style={{
            maxWidth: large ? 600 : 390,
            margin: "0 0 18px",
            color: theme.colors.textMuted,
            fontSize: 13,
            lineHeight: 1.7
          }}
        >
          {description}
        </p>

        {/* Tags */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 7
          }}
        >
          {tags.map((tag) => (
            <span
              key={tag}
              style={{
                padding: "5px 9px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,.10)",
                background: "rgba(255,255,255,.04)",
                color: theme.colors.text,
                fontFamily: theme.fonts.mono,
                fontSize: 8
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Live Demo Button */}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="alfaz-button"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "fit-content",
              marginTop: 14,
              padding: "8px 14px",
              borderRadius: 999,
              background: theme.colors.primary,
              color: "#080b13",
              fontFamily: theme.fonts.mono,
              fontSize: 9,
              textDecoration: "none",
              fontWeight: 600
            }}
          >
            Live Demo ↗
          </a>
        )}
      </div>
    </article>
  );
}