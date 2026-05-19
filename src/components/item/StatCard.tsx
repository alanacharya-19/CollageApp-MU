import { View, Text } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { NeumorphicBox } from "../ui"
import { neu } from "../ui"
import type { Stat } from "../../sample"

export default function StatCard({ item }: { item: Stat }) {
  return (
    <View style={{ flex: 1, marginHorizontal: 5 }}>
      <NeumorphicBox radius={neu.radius.md}>
        <View className="items-center py-4 px-2">
          <View className="w-9 h-9 rounded-xl items-center justify-center mb-2" style={{ backgroundColor: neu.dark + "20" }}>
            <Ionicons name={item.icon} size={16} color={neu.textMuted} />
          </View>
          <Text className="text-base font-extrabold" style={{ color: neu.text }}>{item.value}</Text>
          <Text className="text-[10px] font-semibold mt-0.5 tracking-tight" style={{ color: neu.textLight }}>{item.label}</Text>
        </View>
      </NeumorphicBox>
    </View>
  )
}
