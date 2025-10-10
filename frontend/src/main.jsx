import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import axios from "axios";

function Tracker() {
  const [visitorCount, setVisitorCount] = useState(0);

  // Track visitor once when app loads
  useEffect(() => {
    const trackVisitor = async () => {
      const browser = navigator.userAgent;
      const os = navigator.platform;

      try {
        await axios.post("http://localhost:5000/api/visitors", { browser, os });
        console.log("Visitor tracked successfully");
      } catch (err) {
        console.error("Visitor tracking failed:", err);
      }
    };

    trackVisitor();
  }, []);

  // Fetch visitor count
  useEffect(() => {
    const fetchVisitors = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/visitors");
        setVisitorCount(res.data.length);
      } catch (err) {
        console.error("Failed to fetch visitor count:", err);
      }
    };

    fetchVisitors();

    // Optional: refresh visitor count every 30 seconds
    const interval = setInterval(fetchVisitors, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Your main App component */}
      <App />

      {/* Live visitor count display */}
      <div style={{ 
        position: "fixed", 
        bottom: "20px", 
        right: "20px", 
        backgroundColor: "rgba(0,0,0,0.7)", 
        color: "white", 
        padding: "10px 15px", 
        borderRadius: "8px", 
        fontFamily: "sans-serif", 
        fontWeight: "bold",
        zIndex: 1000
      }}>
        Visitors: {visitorCount}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Tracker />);
