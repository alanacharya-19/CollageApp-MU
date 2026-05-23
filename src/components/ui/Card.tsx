import { View } from "react-native"
import type { ReactNode } from "react"
import { useNeu } from "../../context/ThemeContext"

interface Props {
  children: ReactNode
  style?: Record<string, any>
  radius?: number
  elevated?: boolean
  noShadow?: boolean
  accent?: boolean
}

export default function Card({ children, style, radius, elevated = false, noShadow = false, accent = false }: Props) {
  const _neu = useNeu()
  const r = radius ?? _neu.radius.lg
  return (
    <View
      style={[
        {
          backgroundColor: _neu.card,
          borderRadius: r,
          padding: 16,
          overflow: "hidden",
        },
        noShadow ? _neu.shadow.none : elevated ? _neu.shadow.elevated : _neu.shadow.card,
        style,
      ]}
    >
      {accent && (
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            backgroundColor: _neu.royal,
          }}
        />
      )}
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
  const _neu = useNeu()
  const r = size / 2
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: r,
        backgroundColor: (color || _neu.royal) + "12",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </View>
  )
}
