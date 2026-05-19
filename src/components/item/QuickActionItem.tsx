import { View, Text, Pressable } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { NeumorphicCircle } from "../ui"
import { neu } from "../ui"
import type { QuickAction } from "../../sample"

export default function QuickActionItem({ item }: { item: QuickAction }) {
  return (
    <Pressable className="items-center mb-4 w-[30%] active:opacity-80">
      <NeumorphicCircle size={56}>
        <Ionicons name={item.icon} size={24} color={neu.textMuted} />
      </NeumorphicCircle>
      <Text className="text-[11px] font-semibold mt-2 tracking-tight" style={{ color: neu.textMuted }}>{item.label}</Text>
    </Pressable>
  )
}
