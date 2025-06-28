import React, { useState } from 'react';
import ChatWindow from './ChatWindow';
import MoodJournal from './MoodJournal';
import Recommender from './Recommender';

function App() {
  const [view, setView] = useState("chat");

  // 💬 Shared chat history state
  const [chatHistory, setChatHistory] = useState([]);

  return (
    <div style={{ fontFamily: "'Lato', sans-serif", backgroundColor: "#f5f3ff", minHeight: "100vh" }}>
      {/* TOP NAV BAR */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "linear-gradient(to right, #a78bfa, #c4b5fd)",
        padding: "14px 32px",
        color: "#fff",
        boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
        position: "sticky",
        top: 0,
        zIndex: 100
      }}>
        <h1 style={{ margin: 0, fontSize: "1.8rem", fontWeight: "bold" }}>
          MindEase 💭
        </h1>

        <div style={{ display: "flex", gap: "28px" }}>
          {["chat", "journal", "recommender"].map((tab) => (
            <button
              key={tab}
              onClick={() => setView(tab)}
              style={{
                background: "transparent",
                border: "none",
                borderBottom: view === tab ? "3px solid #fff" : "3px solid transparent",
                color: "#fff",
                fontSize: "16px",
                fontWeight: "bold",
                cursor: "pointer",
                paddingBottom: "2px"
              }}
            >
              {tab === "chat" ? "🧠 Chat" : tab === "journal" ? "📓 Journal" : "🌈 Recommender"}
            </button>
          ))}
        </div>
      </div>

      {/* MAIN VIEW */}
      <div>
        {view === "chat" && <ChatWindow history={chatHistory} setHistory={setChatHistory} />}
        {view === "journal" && <MoodJournal />}
        {view === "recommender" && <Recommender />}
      </div>
    </div>
  );
}

export default App;
