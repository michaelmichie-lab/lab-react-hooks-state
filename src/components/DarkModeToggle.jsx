import React from "react";

// Controlled by App: receives the current darkMode boolean plus the
// setter, and flips it on click. The button's own label is derived
// from darkMode, so it always shows the *next* mode you'll switch to.
function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <button onClick={() => setDarkMode((prevMode) => !prevMode)}>
      {darkMode ? "Toggle Light Mode" : "Toggle Dark Mode"}
    </button>
  );
}

export default DarkModeToggle;