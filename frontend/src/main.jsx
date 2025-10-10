import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import axios from "axios";

function Tracker() {
  const [visitorCount, setVisitorCount] = useState(0);
  const BASE_URL = "https://fullstack-dev-portfolio.onrender.com";

  useEffect(() => {
    const trackVisitor = async () => {
      const browser = navigator.userAgent;
      const os = navigator.platform;

      try {
        await axios.post(`${BASE_URL}/api/visitors`, { browser, os });
        console.log("success");
      } catch (err) {
        console.error(err.message);
      }
    };

    trackVisitor();
  }, []);

  useEffect(() => {
    const fetchVisitors = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/visitors`);
        setVisitorCount(res.data.length || 0);
      } catch (err) {
        console.error( err.message);
      }
    };

    fetchVisitors();
    const interval = setInterval(fetchVisitors, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <App />
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "rgba(0,0,0,0.7)",
          color: "white",
          padding: "10px 15px",
          borderRadius: "8px",
          fontFamily: "sans-serif",
          fontWeight: "bold",
          zIndex: 1000,
        }}
      >
        Visitors: {visitorCount}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Tracker />);
