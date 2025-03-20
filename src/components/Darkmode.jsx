import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

function DarkMode() {
  // Load dark mode state from localStorage or default to false
  const [isdark, setisdark] = useState(() => {
    return JSON.parse(localStorage.getItem("darkmode")) || false;
  });

  useEffect(() => {
    if (isdark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isdark]);

  const toggleDarkMode = () => {
    setisdark((prev) => !prev);
    localStorage.setItem("darkmode", JSON.stringify(!isdark));
  };

  return (
    <>
      <button
        id="linkbutton"
        onClick={toggleDarkMode}
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          padding: "10px 20px",
          background: isdark ? "black" : "white",
          color: isdark ? "white" : "black",
          border: "1px solid gray",
          borderRadius: "5px",
        }}
      >
        {isdark ? "Light Mode" : "Dark Mode"}
      </button>

      {/* This will render the child pages */}
      <Outlet />
    </>
  );
}

export default DarkMode;
