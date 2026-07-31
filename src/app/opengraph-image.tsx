import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#0a0a0c",
          color: "#f2f2f0",
          fontFamily: "monospace",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#3b82f6", marginBottom: 24 }}>
          N.R
        </div>
        <div style={{ display: "flex", fontSize: 56, fontWeight: 700, maxWidth: 900 }}>
          {profile.name}
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#8a8a92", marginTop: 20, maxWidth: 900 }}>
          {profile.title}
        </div>
      </div>
    ),
    size
  );
}
