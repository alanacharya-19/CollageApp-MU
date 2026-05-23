import { createContext, useContext, useState, useEffect } from "react"
import { useColorScheme } from "react-native"
import type { ReactNode } from "react"
import { colors as lightColors, type ColorScheme } from "../constants"
import { colors as darkColors } from "../constants/dark"

interface Theme {
  colors: ColorScheme
  isDark: boolean
  toggle: () => void
}

const ThemeContext = createContext<Theme>({
  colors: lightColors,
  isDark: false,
  toggle: () => {},
})

export function ThemeProvider({ children }: { children: ReactNode }) {
  const system = useColorScheme()
  const [isDark, setIsDark] = useState(system === "dark")

  useEffect(() => {
    setIsDark(system === "dark")
  }, [system])

  const toggle = () => setIsDark((p) => !p)

  return (
    <ThemeContext.Provider value={{ colors: isDark ? darkColors : lightColors, isDark, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
