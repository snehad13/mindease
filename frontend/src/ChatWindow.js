import React from 'react';
import axios from 'axios';

export default function ChatWindow({ history, setHistory }) {
  const [input, setInput] = React.useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { from: "user", text: input };
    const updatedHistory = [...history, userMessage];

    setHistory(updatedHistory);

    try {
      const mood = await detectMood(input);  // 💡 Step 1: Detect mood

      const res = await axios.post("http://127.0.0.1:5000/chat", {
        history: updatedHistory.map(msg => ({
          role: msg.from === "user" ? "user" : "assistant",
          content: msg.text
        })),
        message: input
      });

      const botMessage = { from: "bot", text: res.data.response };
      setHistory([...updatedHistory, botMessage]);
      setInput("");

      console.log("Detected mood:", mood);
      saveMoodEntry(mood);  // 💡 Save to mood journal
    } catch (err) {
      console.error("Error talking to chatbot", err);
    }
  };

  const detectMood = async (text) => {
    try {
      const res = await axios.post("http://127.0.0.1:5000/detect-mood", { message: text });
      return res.data.mood;
    } catch (err) {
      console.error("Mood detection failed", err);
      return "unknown";
    }
  };

  const saveMoodEntry = (mood) => {
    const entry = {
      mood,
      timestamp: new Date().toLocaleString()
    };
    const existing = JSON.parse(localStorage.getItem("moodEntries")) || [];
    localStorage.setItem("moodEntries", JSON.stringify([entry, ...existing]));
  };

  const formatText = (text) => {
    const escaped = text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\n/g, "<br>")
      .replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank" style="color: #4a90e2;">$1</a>');
    return escaped;
  };

  return (
    <div style={{
      minHeight: "calc(100vh - 70px)",
      backgroundColor: "#f3e8ff",
      padding: "32px 0"
    }}>
      <div style={{
        maxWidth: 700,
        margin: "0 auto",
        backgroundColor: "#fef6ff",
        borderRadius: "24px",
        padding: "20px",
        boxShadow: "0 6px 20px rgba(0,0,0,0.08)"
      }}>
        <div style={{
          border: '1px solid #ddd',
          borderRadius: 16,
          padding: 16,
          minHeight: 320,
          maxHeight: 400,
          overflowY: "auto",
          backgroundColor: "#f9fbff"
        }}>
          {history.map((m, i) => (
            <div key={i} style={{
              display: "flex",
              justifyContent: m.from === "user" ? "flex-end" : "flex-start",
              marginBottom: 10
            }}>
              <div style={{
                backgroundColor: m.from === "user" ? "#dcd3ff" : "#ebe3f9",
                padding: "10px 14px",
                borderRadius: "16px",
                color: "#333",
                maxWidth: "75%",
                boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                whiteSpace: "pre-wrap"
              }}>
                <strong>{m.from === "user" ? "You" : "🧠 Coach"}:</strong>{" "}
                <span dangerouslySetInnerHTML={{ __html: formatText(m.text) }} />
              </div>
            </div>
          ))}
        </div>

        {/* INPUT AREA */}
        <div style={{ marginTop: 16, display: "flex", gap: 8 }}>
          <textarea
            rows="2"
            style={{
              flex: 1,
              padding: 10,
              borderRadius: 14,
              border: "1px solid #bbb",
              fontFamily: "inherit",
              resize: "none",
              boxShadow: "inset 0 1px 3px rgba(0,0,0,0.05)"
            }}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="How are you feeling today?"
          />
          <button
            onClick={sendMessage}
            style={{
              padding: "10px 18px",
              backgroundColor: "#8b5cf6",
              color: "#fff",
              border: "none",
              borderRadius: 14,
              cursor: "pointer",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
