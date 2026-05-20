import { View, Text } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { Card } from "../ui"
import { neu } from "../ui"
import type { UniversityEvent } from "../../sample"

export default function EventCard({ item }: { item: UniversityEvent }) {
  return (
    <Card>
      <View className="flex-row">
        <View className="w-[72px] items-center justify-center py-1 rounded-xl" style={{ backgroundColor: neu.royal + "08" }}>
          <Text className="text-[10px] font-bold tracking-widest" style={{ color: neu.royal }}>{item.month}</Text>
          <Text className="text-2xl font-extrabold mt-0.5" style={{ color: neu.midnight }}>{item.day}</Text>
        </View>
        <View className="flex-1 pl-4">
          <View className="flex-row items-center">
            <View className="w-1.5 h-1.5 rounded-full mr-2" style={{ backgroundColor: neu.cyan }} />
            <Text className="text-xs font-bold" style={{ color: neu.cyan }}>{item.type.toUpperCase()}</Text>
          </View>
          <Text className="text-sm font-bold mt-0.5" style={{ color: neu.text }}>{item.title}</Text>
          <View className="flex-row items-center mt-2">
            <Ionicons name="time-outline" size={11} color={neu.textLight} />
            <Text className="text-[11px] ml-1 mr-3" style={{ color: neu.textLight }}>{item.time}</Text>
            <Ionicons name="location-outline" size={11} color={neu.textLight} />
            <Text className="text-[11px] ml-1" style={{ color: neu.textLight }}>{item.location}</Text>
          </View>
        </View>
        <View className="justify-center pl-2">
          <Ionicons name="chevron-forward" size={16} color={neu.textLight} />
        </View>
      </View>
    </Card>
  )
}
