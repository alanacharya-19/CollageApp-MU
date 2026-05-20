import { View, Text } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { Card } from "../ui"
import { neu } from "../ui"
import type { Course } from "../../sample"

export default function CourseCard({ item }: { item: Course }) {
  return (
    <Card>
      <View className="flex-row items-center justify-between mb-3">
        <View className="flex-row items-center">
          <View className="w-10 h-10 rounded-2xl items-center justify-center" style={{ backgroundColor: neu.royal + "08" }}>
            <Ionicons name="code-slash" size={18} color={neu.royal} />
          </View>
          <View className="ml-3">
            <Text className="text-xs font-bold" style={{ color: neu.royal }}>{item.code}</Text>
            <Text className="text-sm font-bold -mt-0.5" style={{ color: neu.text }}>{item.name}</Text>
          </View>
        </View>
        <View className="rounded-xl px-3 py-1.5" style={{ backgroundColor: neu.border }}>
          <Text className="text-xs font-extrabold" style={{ color: neu.text }}>{item.grade}</Text>
        </View>
      </View>
      <View style={{ height: 6, borderRadius: 3, backgroundColor: neu.border }}>
        <View style={{ width: `${item.progress}%`, height: 6, borderRadius: 3, backgroundColor: neu.royal }} />
      </View>
      <View className="flex-row items-center justify-between mt-2.5">
        <View className="flex-row items-center">
          <Ionicons name="person-outline" size={11} color={neu.textLight} />
          <Text className="text-[11px] ml-1" style={{ color: neu.textLight }}>{item.instructor}</Text>
        </View>
        <View className="flex-row items-center">
          <Ionicons name="location-outline" size={11} color={neu.textLight} />
          <Text className="text-[11px] ml-1" style={{ color: neu.textLight }}>{item.room}</Text>
        </View>
      </View>
    </Card>
  )
}
