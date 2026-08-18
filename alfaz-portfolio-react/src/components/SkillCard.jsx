import React from "react";
import { theme, glass } from "../theme.js";

export default function SkillCard({ short, name, accent = "primary", wide = false }) {
  const color = accent === "secondary" ? theme.colors.secondary : theme.colors.primary;

  return (
    <div
      className="alfaz-card"
      style={{
        ...glass,
        minHeight: 150,
        gridColumn: wide ? "span 2" : "span 1",
        borderRadius: 12,
        padding: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 13
      }}
    >
      <div style={{
        color,
        fontFamily: theme.fonts.heading,
        fontSize: 28,
        fontWeight: 700
      }}>{short}</div>
      <div style={{
        color: theme.colors.textMuted,
        fontFamily: theme.fonts.mono,
        fontSize: 9,
        letterSpacing: ".13em",
        textTransform: "uppercase",
        textAlign: "center"
      }}>{name}</div>
    </div>
  );
}