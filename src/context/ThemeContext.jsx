import { createContext, useState } from "react"

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(() => {
    const stored = localStorage.getItem("theme")
    if (stored === null) return true
    return JSON.parse(stored) === "dark"
  })

  const handleDarkTheme = () => {
    setDark(!dark)
    localStorage.setItem("theme", JSON.stringify(!dark ? "dark" : "light"))
  }

  return (
    <ThemeContext.Provider value={{ dark, handleDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider }
