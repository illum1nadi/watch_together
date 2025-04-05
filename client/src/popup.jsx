import React from "react";
import ReactDOM from "react-dom/client";

function Popup() {
  const openSidebar = async () => {
    try {
      // Query the active tab in the current window
      let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      // Inject the content script (sidebar) into the active tab
      await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["content.js"] // Must match the built filename from Vite
      });
      window.close(); // Optionally close the popup after injection
    } catch (error) {
      console.error("Error injecting content script:", error);
    }
  };

  return (
    <div style={{ padding: "10px", fontFamily: "Arial, sans-serif" }}>
      <h2>Watch Together Chat</h2>
      <button 
        onClick={openSidebar} 
        style={{ padding: "8px 12px", backgroundColor: "#4F46E5", color: "#fff", border: "none", cursor: "pointer" }}
      >
        Open Chat Sidebar
      </button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("popup-root"));
root.render(<Popup />);
