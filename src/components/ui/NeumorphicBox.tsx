import { View } from "react-native"
import type { ReactNode } from "react"
import { neu } from "./neu"

interface Props {
  children: ReactNode
  style?: Record<string, any>
  inset?: boolean
  radius?: number
}

export default function NeumorphicBox({ children, style, inset = false, radius = neu.radius.lg }: Props) {
  const s = inset ? neu.shadow.inset : neu.shadow.raised

  if (inset) {
    return (
      <View
        style={[
          {
            backgroundColor: neu.insetBg,
            borderRadius: radius,
            shadowColor: neu.dark,
            shadowOffset: { width: s.darkOffset, height: s.darkOffset },
            shadowOpacity: s.darkOpacity,
            shadowRadius: s.radius,
            elevation: s.elevation,
          },
          style,
        ]}
      >
        <View
          style={{
            backgroundColor: neu.insetBg,
            borderRadius: radius,
            shadowColor: neu.light,
            shadowOffset: { width: s.lightOffset, height: s.lightOffset },
            shadowOpacity: s.lightOpacity,
            shadowRadius: s.radius,
          }}
        >
          {children}
        </View>
      </View>
    )
  }

  return (
    <View
      style={[
        {
          backgroundColor: neu.surface,
          borderRadius: radius,
          shadowColor: neu.light,
          shadowOffset: { width: s.lightOffset, height: s.lightOffset },
          shadowOpacity: s.lightOpacity,
          shadowRadius: s.radius,
        },
        style,
      ]}
    >
      <View
        style={{
          backgroundColor: neu.surface,
          borderRadius: radius,
          shadowColor: neu.dark,
          shadowOffset: { width: s.darkOffset, height: s.darkOffset },
          shadowOpacity: s.darkOpacity,
          shadowRadius: s.radius,
          elevation: s.elevation,
        }}
      >
        {children}
      </View>
    </View>
  )
}

export function NeumorphicCircle({
  children,
  size = 44,
  inset = false,
}: {
  children: ReactNode
  size?: number
  inset?: boolean
}) {
  const radius = size / 2
  const s = inset ? neu.shadow.inset : neu.shadow.flat

  if (inset) {
    return (
      <View
        style={{
          width: size,
          height: size,
          borderRadius: radius,
          backgroundColor: neu.insetBg,
          alignItems: "center",
          justifyContent: "center",
          shadowColor: neu.dark,
          shadowOffset: { width: s.darkOffset, height: s.darkOffset },
          shadowOpacity: s.darkOpacity,
          shadowRadius: s.radius,
          elevation: s.elevation,
        }}
      >
        <View
          style={{
            width: size,
            height: size,
            borderRadius: radius,
            backgroundColor: neu.insetBg,
            alignItems: "center",
            justifyContent: "center",
            shadowColor: neu.light,
            shadowOffset: { width: s.lightOffset, height: s.lightOffset },
            shadowOpacity: s.lightOpacity,
            shadowRadius: s.radius,
          }}
        >
          {children}
        </View>
      </View>
    )
  }

  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: radius,
        backgroundColor: neu.surface,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: neu.light,
        shadowOffset: { width: s.lightOffset, height: s.lightOffset },
        shadowOpacity: s.lightOpacity,
        shadowRadius: s.radius,
      }}
    >
      <View
        style={{
          width: size,
          height: size,
          borderRadius: radius,
          backgroundColor: neu.surface,
          alignItems: "center",
          justifyContent: "center",
          shadowColor: neu.dark,
          shadowOffset: { width: s.darkOffset, height: s.darkOffset },
          shadowOpacity: s.darkOpacity,
          shadowRadius: s.radius,
          elevation: s.elevation + 1,
        }}
      >
        {children}
      </View>
    </View>
  )
}
