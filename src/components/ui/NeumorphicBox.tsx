import { View } from "react-native"
import type { ReactNode } from "react"

interface Props {
  children: ReactNode
  style?: Record<string, any>
  inset?: boolean
  size?: "sm" | "md" | "lg"
}

const shadowSizes = {
  sm: { darkOffset: 3, lightOffset: 2, radius: 5 },
  md: { darkOffset: 5, lightOffset: 4, radius: 10 },
  lg: { darkOffset: 8, lightOffset: 6, radius: 16 },
}

export default function NeumorphicBox({ children, style, inset = false, size = "md" }: Props) {
  const s = shadowSizes[size]
  const bg = "#E8EDF2"

  if (inset) {
    return (
      <View
        style={[
          {
            backgroundColor: bg,
            borderRadius: 20,
            borderWidth: 0.5,
            borderColor: "rgba(255,255,255,0.3)",
            shadowColor: "#C8D0D9",
            shadowOffset: { width: s.darkOffset, height: s.darkOffset },
            shadowOpacity: 0.4,
            shadowRadius: s.radius,
            elevation: s.darkOffset,
          },
          style,
        ]}
      >
        {children}
      </View>
    )
  }

  return (
    <View
      style={[
        {
          backgroundColor: bg,
          borderRadius: 20,
          padding: 1,
        },
        style,
      ]}
    >
      <View
        style={{
          backgroundColor: bg,
          borderRadius: 20,
          shadowColor: "#FFFFFF",
          shadowOffset: { width: -s.lightOffset, height: -s.lightOffset },
          shadowOpacity: 0.8,
          shadowRadius: s.radius,
        }}
      >
        <View
          style={{
            backgroundColor: bg,
            borderRadius: 20,
            shadowColor: "#C8D0D9",
            shadowOffset: { width: s.darkOffset, height: s.darkOffset },
            shadowOpacity: 0.5,
            shadowRadius: s.radius,
            elevation: s.darkOffset + 2,
          }}
        >
          {children}
        </View>
      </View>
    </View>
  )
}
