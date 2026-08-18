import React, { useState } from "react";
import useResponsive from "../hooks/useResponsive.js";
import { theme, glass } from "../theme.js";

export default function Contact() {
  const { mobile } = useResponsive();
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const field = {
    width: "100%",
    padding: "12px 14px",
    background: theme.colors.surfaceLowest,
    border: "1px solid rgba(255,255,255,.10)",
    borderRadius: 9,
    color: theme.colors.text,
    fontSize: 13,
    marginTop: 7,
    transition: "all .2s ease"
  };

  return (
    <footer id="contact" style={{
      background: theme.colors.surfaceLowest,
      borderTop: "1px solid rgba(255,255,255,.05)",
      padding: mobile ? "75px 20px 130px" : "90px 64px 140px"
    }}>
      <div style={{
        maxWidth: 1440,
        margin: "0 auto"
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: mobile ? "1fr" : "1fr 1fr",
          gap: mobile ? 45 : 70,
          alignItems: "start"
        }}>
          <div>
            <h2 style={{
              margin: 0,
              fontFamily: theme.fonts.heading,
              fontSize: mobile ? 42 : 56,
              lineHeight: .95,
              letterSpacing: "-.05em",
              textTransform: "uppercase"
            }}>Let's Connect</h2>

            <p style={{
              maxWidth: 500,
              color: theme.colors.textMuted,
              fontSize: 15,
              lineHeight: 1.7,
              marginTop: 20
            }}>
              Have a project in mind or just want to say hi? I'm always open to
              discussing new opportunities and creative ideas.
            </p>

            <div style={{ display: "grid", gap: 10, marginTop: 28 }}>
              <a
                href="mailto:memonalfaz759@gmail.com"
                className="alfaz-card"
                style={{
                  ...glass,
                  padding: 17,
                  borderRadius: 12,
                  display: "flex",
                  alignItems: "center",
                  gap: 15
                }}
              >
                <div style={{
                  width: 42, height: 42, borderRadius: "50%",
                  background: "rgba(208,188,255,.10)",
                  display: "grid",
                  placeItems: "center",
                  color: theme.colors.primary
                }}>✉</div>
                <div>
                  <div style={{
                    fontFamily: theme.fonts.mono,
                    fontSize: 8,
                    letterSpacing: ".15em",
                    textTransform: "uppercase",
                    color: theme.colors.textMuted
                  }}>Email</div>
                  <div style={{ marginTop: 4, fontSize: 13 }}>memonalfaz759@gmail.com</div>
                </div>
              </a>

              <a
                href="tel:7041701707"
                className="alfaz-card"
                style={{
                  ...glass,
                  padding: 17,
                  borderRadius: 12,
                  display: "flex",
                  alignItems: "center",
                  gap: 15
                }}
              >
                <div style={{
                  width: 42, height: 42, borderRadius: "50%",
                  background: "rgba(76,215,246,.10)",
                  display: "grid",
                  placeItems: "center",
                  color: theme.colors.secondary
                }}>☎</div>
                <div>
                  <div style={{
                    fontFamily: theme.fonts.mono,
                    fontSize: 8,
                    letterSpacing: ".15em",
                    textTransform: "uppercase",
                    color: theme.colors.textMuted
                  }}>Call</div>
                  <div style={{ marginTop: 4, fontSize: 13 }}>+91 7041701707</div>
                </div>
              </a>
            </div>

            <div style={{
              display: "flex",
              gap: 25,
              marginTop: 28,
              fontFamily: theme.fonts.mono,
              fontSize: 9,
              color: theme.colors.textMuted
            }}>
              <a className="alfaz-link" href="https://github.com/AlfazMemon" target="_blank" rel="noreferrer">GitHub</a>
              <a className="alfaz-link" href="https://www.linkedin.com/in/alfaz-memon-24a702422/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="alfaz-link" href="#" onClick={(e) => e.preventDefault()}>Twitter</a>
            </div>
          </div>

          <div style={{
            ...glass,
            padding: mobile ? 18 : 26,
            borderRadius: 15
          }}>
            <form onSubmit={submit} style={{ display: "grid", gap: 17 }}>
              <label style={{
                color: theme.colors.textMuted,
                fontFamily: theme.fonts.mono,
                fontSize: 8,
                letterSpacing: ".15em",
                textTransform: "uppercase"
              }}>
                Name
                <input className="alfaz-input" required style={field} placeholder="Your Name" />
              </label>

              <label style={{
                color: theme.colors.textMuted,
                fontFamily: theme.fonts.mono,
                fontSize: 8,
                letterSpacing: ".15em",
                textTransform: "uppercase"
              }}>
                Email
                <input className="alfaz-input" required type="email" style={field} placeholder="your@email.com" />
              </label>

              <label style={{
                color: theme.colors.textMuted,
                fontFamily: theme.fonts.mono,
                fontSize: 8,
                letterSpacing: ".15em",
                textTransform: "uppercase"
              }}>
                Message
                <textarea className="alfaz-input" required rows="4" style={{ ...field, resize: "vertical" }} placeholder="How can I help you?" />
              </label>

              <button
                className="alfaz-button"
                type="submit"
                style={{
                  border: 0,
                  cursor: "pointer",
                  padding: "13px 18px",
                  borderRadius: 9,
                  background: theme.colors.primary,
                  color: "#080b13",
                  fontFamily: theme.fonts.mono,
                  fontSize: 10,
                  boxShadow: "0 0 20px rgba(208,188,255,.25)"
                }}
              >
                {sent ? "Message Ready ✓" : "Send Message →"}
              </button>
            </form>
          </div>
        </div>

        <div style={{
          textAlign: "center",
          marginTop: 70,
          color: theme.colors.textMuted,
          opacity: .5,
          fontFamily: theme.fonts.mono,
          fontSize: 8
        }}>
          © 2026 Alfaz Memon. Engineered for Performance.
        </div>
      </div>
    </footer>
  );
}