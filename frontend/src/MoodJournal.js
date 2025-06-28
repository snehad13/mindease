import React, { useEffect, useState } from 'react';

export default function MoodJournal() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("moodEntries")) || [];
    setEntries(stored);
  }, []);

 const getMoodEmoji = (mood) => {
  if (!mood || typeof mood !== "string") return "❓";

  switch (mood.toLowerCase()) {
    case "joy": return "😊";
    case "sadness": return "😢";
    case "anger": return "😠";
    case "fear": return "😨";
    case "love": return "❤️";
    case "surprise": return "😲";
    case "neutral": return "😐";
    default: return "🫧";
  }
};


  return (
    <div style={{
      minHeight: "100vh",
      padding: "40px 20px",
      background: "linear-gradient(to bottom, #f5f0ff, #ffffff)",
      fontFamily: "'Lato', sans-serif"
    }}>
      
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: 20
      }}>
        {entries.length === 0 ? (
          <p style={{ textAlign: "center", color: "#888", gridColumn: "1 / -1" }}>No mood entries found.</p>
        ) : (
          entries.map((entry, index) => (
            <div key={index} style={{
              padding: 20,
              borderRadius: 20,
              background: "linear-gradient(135deg, #f3e7ff, #f9f9ff)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
              textAlign: "center",
              transition: "transform 0.2s",
              fontWeight: "500"
            }}>
              <div style={{ fontSize: "2rem", marginBottom: 8 }}>
                {getMoodEmoji(entry.mood)}
              </div>
              <div style={{ fontSize: "1.2rem", color: "#333" }}>
                {entry.mood ? entry.mood.charAt(0).toUpperCase() + entry.mood.slice(1) : "Unknown"}
              </div>
              <div style={{ fontSize: "0.9rem", color: "#777", marginTop: 6 }}>
                {entry.timestamp || "Unknown time"}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
