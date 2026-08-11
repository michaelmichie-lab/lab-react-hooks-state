import React from 'react'

function DarkModeToggle({ isDarkMode, darkMode, onToggleDarkMode }) {
  const activeDarkMode = isDarkMode ?? darkMode

  return (
    <button type="button" onClick={onToggleDarkMode}>
      Toggle {activeDarkMode ? 'Light' : 'Dark'} Mode
    </button>
  )
}

export default DarkModeToggle