import { View, Text } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { Card } from "../ui"
import { useNeu } from "../../context/ThemeContext"
import type { Stat } from "../../sample"

export default function StatCard({ item }: { item: Stat }) {
  const neu = useNeu()
  return (
    <View style={{ flex: 1, marginHorizontal: 5 }}>
      <Card radius={neu.radius.md}>
        <View className="items-center py-2">
          <View className="w-9 h-9 rounded-xl items-center justify-center mb-2" style={{ backgroundColor: neu.royal + "08" }}>
            <Ionicons name={item.icon} size={16} color={neu.royal} />
          </View>
          <Text className="text-base font-extrabold" style={{ color: neu.text }}>{item.value}</Text>
          <Text className="text-[10px] font-semibold mt-0.5 tracking-tight" style={{ color: neu.textLight }}>{item.label}</Text>
        </View>
      </Card>
    </View>
  )
}
