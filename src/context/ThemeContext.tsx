import { createContext, useContext, useState, useEffect, useMemo } from "react"
import { useColorScheme } from "react-native"
import type { ReactNode } from "react"
import { colors as lightColors, type ColorScheme } from "../constants"
import { colors as darkColors } from "../constants/dark"
import { radii, shadows } from "../components/ui/neu"

interface Theme {
  colors: ColorScheme
  neu: ColorScheme & { radius: typeof radii; shadow: typeof shadows }
  isDark: boolean
  toggle: () => void
}

type NeuType = {
  [key: string]: any
  radius: typeof radii
  shadow: typeof shadows
}

const defaultNeu: NeuType = { ...lightColors, radius: radii, shadow: shadows }

const ThemeContext = createContext<Theme>({
  colors: lightColors,
  neu: defaultNeu,
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

  const colors: ColorScheme = isDark ? darkColors : lightColors
  const neu: NeuType = useMemo(() => ({ ...colors, radius: radii, shadow: shadows }), [colors])

  return (
    <ThemeContext.Provider value={{ colors, neu, isDark, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
export const useNeu = () => useTheme().neu
