import React, { useState } from "react";

function ChatSidebar() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, input]);
    setInput("");
  };

  return (
    <div style={{ padding: "10px", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ marginBottom: "10px" }}>Chat</h2>
      <div style={{ maxHeight: "60vh", overflowY: "auto", borderBottom: "1px solid #ddd", marginBottom: "10px" }}>
        {messages.map((msg, index) => (
          <p key={index} style={{ borderBottom: "1px solid #eee", padding: "5px 0" }}>
            {msg}
          </p>
        ))}
      </div>
      <div style={{ display: "flex" }}>
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ flex: 1, padding: "5px", border: "1px solid #ccc" }}
        />
        <button
          onClick={sendMessage}
          style={{ marginLeft: "5px", padding: "5px 10px", background: "#4F46E5", color: "#fff", border: "none", cursor: "pointer" }}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatSidebar;
