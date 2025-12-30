import React, { useState } from "react";
import { PROFILE } from "../data/profile";
import { i } from "framer-motion/client";
import "../styles/ai-assistant.css";
export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: `Hi, I’m an AI assistant built to answer questions about ${PROFILE.name}, skills, and projects.`,
    },
  ]);

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { role: "user", content: input },
      {
        role: "assistant",
        content:
          "This is a demo AI assistant. In production, responses are generated via a secure backend using OpenAI APIs.",
      },
    ]);

    setInput("");
  };

  return (
    <>
      <button className="ai-fab" onClick={() => setOpen(true)}>
        AI Assistant
      </button>

      {open && (
        <div className="ai-panel">
          <div className="ai-header">
            <h4>AI Assistant</h4>
            <button onClick={() => setOpen(false)}>×</button>
          </div>

          <div className="ai-body">
            {messages.map((msg, i) => (
              <div key={i} className={`ai-msg ${msg.role}`}>
                {msg.content}
              </div>
            ))}
          </div>

          <div className="ai-footer">
            <input
              type="text"
              placeholder="Ask about skills, projects, or experience..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </div>

          <p className="ai-note">
            Demo mode • Secure backend integration available
          </p>
        </div>
      )}
    </>
  );
}
