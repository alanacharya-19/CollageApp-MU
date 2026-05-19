import { View, Text } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import type { UniversityEvent } from "../../sample"

const typeColors: Record<string, string> = {
  academic: "#4F46E5",
  cultural: "#D97706",
  sports: "#059669",
  workshop: "#7C3AED",
}

const bg = "#E8EDF2"

export default function EventCard({ item }: { item: UniversityEvent }) {
  const color = typeColors[item.type] || "#6B7280"

  return (
    <View style={{ borderRadius: 24, backgroundColor: bg, marginBottom: 12 }}>
      <View style={{ borderRadius: 24, backgroundColor: bg, shadowColor: "#FFFFFF", shadowOffset: { width: -4, height: -4 }, shadowOpacity: 0.8, shadowRadius: 8 }}>
        <View style={{ borderRadius: 24, backgroundColor: bg, shadowColor: "#C8D0D9", shadowOffset: { width: 4, height: 4 }, shadowOpacity: 0.5, shadowRadius: 8, elevation: 3 }}>
          <View className="flex-row overflow-hidden" style={{ borderRadius: 24 }}>
            <View className="w-[76px] items-center justify-center py-4" style={{ borderRadius: 24, backgroundColor: color + "10" }}>
              <Text className="text-[10px] font-bold tracking-widest" style={{ color }}>{item.month}</Text>
              <Text className="text-2xl font-extrabold mt-0.5" style={{ color }}>{item.day}</Text>
            </View>
            <View className="flex-1 px-4 py-3.5">
              <View className="flex-row items-center">
                <View className="w-1.5 h-1.5 rounded-full mr-2" style={{ backgroundColor: color }} />
                <Text className="text-xs font-bold" style={{ color }}>{item.type.toUpperCase()}</Text>
              </View>
              <Text className="text-sm font-bold text-[#2D3748] mt-0.5">{item.title}</Text>
              <View className="flex-row items-center mt-2">
                <Ionicons name="time-outline" size={11} color="#9BA6B8" />
                <Text className="text-[11px] text-[#9BA6B8] ml-1 mr-3">{item.time}</Text>
                <Ionicons name="location-outline" size={11} color="#9BA6B8" />
                <Text className="text-[11px] text-[#9BA6B8] ml-1">{item.location}</Text>
              </View>
            </View>
            <View className="justify-center pr-3">
              <View className="w-7 h-7 rounded-full items-center justify-center" style={{ backgroundColor: color + "10" }}>
                <Ionicons name="chevron-forward" size={14} color={color} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}
