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
        console.error(err.message);
      }
    };

    fetchVisitors();
    const interval = setInterval(fetchVisitors, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <App />
      <div className="fixed bottom-5 right-5 bg-black/70
               text-white px-4 py-2 rounded-lg font-sans font-bold z-50
                sm:bottom-4 sm:right-4 sm:px-3 sm:py-1
                xs:bottom-3 xs:right-3 xs:px-2 xs:py-1 text-sm
                md:text-base
                lg:text-lg
                ">
        Visitors: {visitorCount}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Tracker />);
