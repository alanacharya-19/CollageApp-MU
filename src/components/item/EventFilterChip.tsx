import { Text, Pressable } from "react-native"
import { NeumorphicCircle } from "../ui"
import { neu } from "../ui"

interface Props {
  label: string
  active: boolean
  onPress: () => void
}

export default function EventFilterChip({ label, active, onPress }: Props) {
  return (
    <Pressable onPress={onPress} className="mr-3 active:opacity-80">
      {active ? (
        <NeumorphicCircle size={36} inset>
          <Text className="text-xs font-bold" style={{ color: neu.accent }}>{label}</Text>
        </NeumorphicCircle>
      ) : (
        <NeumorphicCircle size={36}>
          <Text className="text-xs font-semibold" style={{ color: neu.textMuted }}>{label}</Text>
        </NeumorphicCircle>
      )}
    </Pressable>
  )
}
