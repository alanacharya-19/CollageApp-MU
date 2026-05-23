import { colors } from "../../constants"

export const neu = {
  ...colors,
  radius: {
    sm: 10,
    md: 16,
    lg: 20,
    xl: 28,
    full: 999,
  },
  shadow: {
    card: {
      shadowColor: "#7C5CFC",
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.1,
      shadowRadius: 10,
      elevation: 3,
    },
    elevated: {
      shadowColor: "#7C5CFC",
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.15,
      shadowRadius: 16,
      elevation: 6,
    },
    none: {
      shadowColor: "transparent",
      shadowOpacity: 0,
      elevation: 0,
    },
  },
} as const
