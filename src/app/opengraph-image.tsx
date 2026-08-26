import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name} — ${profile.headline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Imagem de compartilhamento gerada no build — nenhum asset externo. */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #06080d 0%, #0a0d14 55%, #131a2b 100%)",
          padding: 72,
          color: "#eef2f8",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: 16,
              border: "1px solid #2b3342",
              background: "#10141d",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 24,
              fontWeight: 700,
              color: "#8aa9ff",
            }}
          >
            {profile.initials}
          </div>
          <div style={{ fontSize: 26, color: "#98a3b5" }}>{profile.name}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 78,
              fontWeight: 800,
              letterSpacing: -2.5,
              lineHeight: 1.05,
            }}
          >
            {profile.role}
          </div>
          <div
            style={{
              fontSize: 78,
              fontWeight: 800,
              letterSpacing: -2.5,
              lineHeight: 1.05,
              color: "#7ea2ff",
            }}
          >
            {`& ${profile.secondaryRole}`}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 24,
            color: "#98a3b5",
          }}
        >
          <span>Java</span>
          <span style={{ color: "#3a4356" }}>·</span>
          <span>Spring</span>
          <span style={{ color: "#3a4356" }}>·</span>
          <span>Node.js</span>
          <span style={{ color: "#3a4356" }}>·</span>
          <span>Python</span>
          <span style={{ color: "#3a4356" }}>·</span>
          <span>React</span>
          <span style={{ color: "#3a4356" }}>·</span>
          <span>PostgreSQL</span>
          <span style={{ color: "#3a4356" }}>·</span>
          <span>OpenAI</span>
        </div>
      </div>
    ),
    size,
  );
}
