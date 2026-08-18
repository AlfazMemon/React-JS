import React from "react";
import useResponsive from "../hooks/useResponsive.js";
import { theme, glass } from "../theme.js";

export default function Navbar() {
  const { mobile } = useResponsive();

  const navStyle = {
    position: "fixed",
    left: "50%",
    bottom: mobile ? 16 : 28,
    transform: "translateX(-50%)",
    zIndex: 50,
    display: "flex",
    alignItems: "center",
    gap: mobile ? 16 : 24,
    padding: mobile ? "9px 15px" : "11px 19px",
    borderRadius: 999,
    ...glass,
    border: "1px solid rgba(255,255,255,.10)",
    boxShadow: "0 12px 35px rgba(0,0,0,.35)"
  };

  const iconStyle = {
    fontFamily: theme.fonts.mono,
    fontSize: mobile ? 13 : 15,
    color: theme.colors.textMuted,
    transition: "color .2s ease"
  };

  const items = [
    ["⌂", "hero"],
    ["♙", "profile"],
    ["▣", "projects"],
    ["◇", "education"],
    ["✉", "contact"]
  ];

  return (
    <nav style={navStyle} aria-label="Portfolio navigation">
      {items.map(([icon, id]) => (
        <a
          key={id}
          href={`#${id}`}
          className="alfaz-link"
          style={iconStyle}
          aria-label={id}
        >
          {icon}
        </a>
      ))}
    </nav>
  );
}