import React from "react";
import ReactDOM from "react-dom/client";
import ChatSidebar from "./components/ChatSidebar";

// Create a container for the sidebar if it doesn't already exist
const containerId = "chat-sidebar-container";
let container = document.getElementById(containerId);
if (!container) {
  container = document.createElement("div");
  container.id = containerId;
  
  // Style the container as a fixed sidebar on the right
  container.style.position = "fixed";
  container.style.top = "0";
  container.style.right = "0";
  container.style.width = "300px";
  container.style.height = "100vh";
  container.style.zIndex = "9999";
  container.style.backgroundColor = "#fff";
  container.style.borderLeft = "1px solid #ccc";
  container.style.overflowY = "auto";
  
  document.body.appendChild(container);
}

// Render the ChatSidebar component into the container
const root = ReactDOM.createRoot(container);
root.render(<ChatSidebar />);
