// src/Recommender.js
import React from 'react';
import { getRecommendations } from './recommendations';

export default function Recommender() {
  const entries = JSON.parse(localStorage.getItem("moodEntries")) || [];
  const lastMood = entries[0]?.mood || "neutral";
  const { quote, spotify } = getRecommendations(lastMood);

  return (
    <div style={{
      maxWidth: 700,
      margin: "40px auto",
      padding: 24,
      borderRadius: 24,
      backgroundColor: "#fef6ff",
      boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
      textAlign: "center",
      color: "#444"
    }}>
      <h2>🎵 Recommended for your mood: <span style={{ color: "#8b5cf6" }}>{lastMood}</span></h2>
      
      <div style={{
  backgroundColor: "#f3e8ff",
  padding: "16px 24px",
  borderRadius: "16px",
  borderLeft: "5px solid #a78bfa",
  margin: "24px auto",
  fontStyle: "italic",
  fontSize: "1.25rem",
  color: "#444",
  maxWidth: 600,
  boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
}}>
  <span style={{ fontSize: "1.5rem", marginRight: 8 }}>“</span>
  {quote}
  <span style={{ fontSize: "1.5rem", marginLeft: 8 }}>”</span>
</div>


      <iframe
        src={spotify}
        width="100%"
        height="380"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        style={{ borderRadius: 16 }}
        title="Spotify Mood Playlist"
      ></iframe>
    </div>
  );
}
