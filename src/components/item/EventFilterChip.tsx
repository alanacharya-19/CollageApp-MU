import { Text, Pressable } from "react-native"
import { CircleIcon } from "../ui"
import { neu } from "../ui"

interface Props {
  label: string
  active: boolean
  onPress: () => void
}

export default function EventFilterChip({ label, active, onPress }: Props) {
  if (active) {
    return (
      <Pressable onPress={onPress} className="mr-3 active:opacity-80">
        <Pressable className="px-4 py-2 rounded-full" style={{ backgroundColor: neu.royal }}>
          <Text className="text-xs font-bold text-white">{label}</Text>
        </Pressable>
      </Pressable>
    )
  }
  return (
    <Pressable onPress={onPress} className="mr-3 active:opacity-80">
      <Pressable className="px-4 py-2 rounded-full" style={{ backgroundColor: neu.card, ...neu.shadow.card }}>
        <Text className="text-xs font-semibold" style={{ color: neu.textMuted }}>{label}</Text>
      </Pressable>
    </Pressable>
  )
}
