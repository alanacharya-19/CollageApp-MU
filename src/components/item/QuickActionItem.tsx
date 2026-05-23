import { View, Text, Pressable } from "react-native"
import { useRouter } from "expo-router"
import { Ionicons } from "@expo/vector-icons"
import { CircleIcon } from "../ui"
import { useNeu } from "../../context/ThemeContext"
import type { QuickAction } from "../../sample"

export default function QuickActionItem({ item }: { item: QuickAction }) {
  const neu = useNeu()
  const router = useRouter()
  return (
    <Pressable className="items-center mb-4 w-[30%] active:opacity-80" onPress={() => router.push(item.route as any)}>
      <CircleIcon size={56} color={item.color}>
        <Ionicons name={item.icon} size={24} color={item.color} />
      </CircleIcon>
      <Text className="text-[11px] font-semibold mt-2 tracking-tight" style={{ color: neu.textMuted }}>{item.label}</Text>
    </Pressable>
  )
}
