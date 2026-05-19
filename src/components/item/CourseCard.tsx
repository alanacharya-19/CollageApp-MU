import { View, Text } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import type { Course } from "../../sample"

const bg = "#E8EDF2"

export default function CourseCard({ item }: { item: Course }) {
  return (
    <View style={{ borderRadius: 24, backgroundColor: bg, marginBottom: 12 }}>
      <View style={{ borderRadius: 24, backgroundColor: bg, shadowColor: "#FFFFFF", shadowOffset: { width: -4, height: -4 }, shadowOpacity: 0.8, shadowRadius: 8 }}>
        <View style={{ borderRadius: 24, backgroundColor: bg, padding: 16, shadowColor: "#C8D0D9", shadowOffset: { width: 4, height: 4 }, shadowOpacity: 0.5, shadowRadius: 8, elevation: 4 }}>
          <View className="flex-row items-center justify-between mb-3">
            <View className="flex-row items-center">
              <View className="w-10 h-10 rounded-2xl items-center justify-center" style={{ backgroundColor: item.color + "15" }}>
                <Ionicons name="code-slash" size={18} color={item.color} />
              </View>
              <View className="ml-3">
                <Text className="text-xs font-bold" style={{ color: item.color }}>{item.code}</Text>
                <Text className="text-sm font-bold text-[#2D3748] -mt-0.5">{item.name}</Text>
              </View>
            </View>
            <View className="rounded-xl px-3 py-1.5" style={{ backgroundColor: item.color + "12" }}>
              <Text className="text-xs font-extrabold" style={{ color: item.color }}>{item.grade}</Text>
            </View>
          </View>

          <View style={{ height: 6, borderRadius: 3, backgroundColor: "#D5DDE6" }}>
            <View style={{ width: `${item.progress}%`, height: 6, borderRadius: 3, backgroundColor: item.color }} />
          </View>

          <View className="flex-row items-center justify-between mt-2.5">
            <View className="flex-row items-center">
              <Ionicons name="person-outline" size={11} color="#9BA6B8" />
              <Text className="text-[11px] text-[#9BA6B8] ml-1">{item.instructor}</Text>
            </View>
            <View className="flex-row items-center">
              <Ionicons name="location-outline" size={11} color="#9BA6B8" />
              <Text className="text-[11px] text-[#9BA6B8] ml-1">{item.room}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}
