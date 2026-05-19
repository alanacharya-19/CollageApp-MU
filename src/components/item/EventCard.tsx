import { View, Text } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { NeumorphicBox } from "../ui"
import { neu } from "../ui"
import type { UniversityEvent } from "../../sample"

export default function EventCard({ item }: { item: UniversityEvent }) {
  return (
    <NeumorphicBox radius={neu.radius.xl}>
      <View className="flex-row overflow-hidden" style={{ borderRadius: neu.radius.xl }}>
        <View className="w-[76px] items-center justify-center py-4" style={{ backgroundColor: neu.dark + "15" }}>
          <Text className="text-[10px] font-bold tracking-widest" style={{ color: neu.textMuted }}>{item.month}</Text>
          <Text className="text-2xl font-extrabold mt-0.5" style={{ color: neu.text }}>{item.day}</Text>
        </View>
        <View className="flex-1 px-4 py-3.5">
          <View className="flex-row items-center">
            <View className="w-1.5 h-1.5 rounded-full mr-2" style={{ backgroundColor: neu.accent }} />
            <Text className="text-xs font-bold" style={{ color: neu.textMuted }}>{item.type.toUpperCase()}</Text>
          </View>
          <Text className="text-sm font-bold mt-0.5" style={{ color: neu.text }}>{item.title}</Text>
          <View className="flex-row items-center mt-2">
            <Ionicons name="time-outline" size={11} color={neu.textLight} />
            <Text className="text-[11px] ml-1 mr-3" style={{ color: neu.textLight }}>{item.time}</Text>
            <Ionicons name="location-outline" size={11} color={neu.textLight} />
            <Text className="text-[11px] ml-1" style={{ color: neu.textLight }}>{item.location}</Text>
          </View>
        </View>
        <View className="justify-center pr-3">
          <View className="w-7 h-7 rounded-full items-center justify-center" style={{ backgroundColor: neu.dark + "20" }}>
            <Ionicons name="chevron-forward" size={14} color={neu.textMuted} />
          </View>
        </View>
      </View>
    </NeumorphicBox>
  )
}
