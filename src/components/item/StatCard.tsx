import { View, Text } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import type { Stat } from "../../sample"

const bg = "#E8EDF2"

export default function StatCard({ item }: { item: Stat }) {
  return (
    <View style={{ borderRadius: 18, backgroundColor: bg, flex: 1, marginHorizontal: 5 }}>
      <View style={{ borderRadius: 18, backgroundColor: bg, shadowColor: "#FFFFFF", shadowOffset: { width: -3, height: -3 }, shadowOpacity: 0.8, shadowRadius: 6 }}>
        <View style={{ borderRadius: 18, backgroundColor: bg, padding: 14, alignItems: "center", shadowColor: "#C8D0D9", shadowOffset: { width: 3, height: 3 }, shadowOpacity: 0.5, shadowRadius: 6, elevation: 3 }}>
          <View className="w-9 h-9 rounded-xl items-center justify-center mb-2" style={{ backgroundColor: item.bgColor }}>
            <Ionicons name={item.icon} size={16} color={item.color} />
          </View>
          <Text className="text-base font-extrabold text-[#2D3748]">{item.value}</Text>
          <Text className="text-[10px] font-semibold text-[#9BA6B8] mt-0.5 tracking-tight">{item.label}</Text>
        </View>
      </View>
    </View>
  )
}
