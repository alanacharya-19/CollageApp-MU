import { View } from "react-native"
import type { ReactNode } from "react"
import { neu } from "./neu"

interface Props {
  children: ReactNode
  style?: Record<string, any>
  radius?: number
  elevated?: boolean
  noShadow?: boolean
}

export default function Card({ children, style, radius = neu.radius.lg, elevated = false, noShadow = false }: Props) {
  return (
    <View
      style={[
        {
          backgroundColor: neu.card,
          borderRadius: radius,
          padding: 16,
        },
        noShadow ? neu.shadow.none : elevated ? neu.shadow.elevated : neu.shadow.card,
        style,
      ]}
    >
      {children}
    </View>
  )
}

export function CircleIcon({
  children,
  size = 44,
  color,
}: {
  children: ReactNode
  size?: number
  color?: string
}) {
  const r = size / 2
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: r,
        backgroundColor: (color || neu.royal) + "12",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </View>
  )
}
