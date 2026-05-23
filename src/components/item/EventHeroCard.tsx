import { View, Text, Pressable } from "react-native"
import { useRouter } from "expo-router"
import { Ionicons } from "@expo/vector-icons"
import { Card } from "../ui"
import { useNeu } from "../../context/ThemeContext"
import type { UniversityEvent } from "../../sample"

export default function EventHeroCard({ item }: { item: UniversityEvent }) {
  const neu = useNeu()
  const router = useRouter()
  return (
    <Pressable onPress={() => router.push("/modal/event?id=" + item.id as any)}>
    <Card elevated>
      <View className="flex-row">
        <View className="w-20 items-center justify-center py-2 rounded-xl" style={{ backgroundColor: neu.royal + "08" }}>
          <Text className="text-xs font-bold tracking-widest" style={{ color: neu.royal }}>{item.month}</Text>
          <Text className="text-3xl font-extrabold mt-0.5" style={{ color: neu.midnight }}>{item.day}</Text>
        </View>
        <View className="flex-1 ml-4">
          <View className="flex-row items-center">
            <View className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: neu.cyan }} />
            <Text className="text-xs font-bold tracking-wide" style={{ color: neu.cyan }}>{item.type.toUpperCase()}</Text>
          </View>
          <Text className="text-lg font-bold mt-1 leading-6" style={{ color: neu.text }}>{item.title}</Text>
          <View className="flex-row items-center mt-2">
            <Ionicons name="time-outline" size={12} color={neu.textLight} />
            <Text className="text-xs ml-1.5 mr-4" style={{ color: neu.textMuted }}>{item.time}</Text>
            <Ionicons name="location-outline" size={12} color={neu.textLight} />
            <Text className="text-xs ml-1.5" style={{ color: neu.textMuted }}>{item.location}</Text>
          </View>
        </View>
      </View>
      {item.description && (
        <Text className="text-sm leading-5 mt-4" style={{ color: neu.textMuted }}>{item.description}</Text>
      )}
      <View className="flex-row items-center justify-between mt-4 pt-4" style={{ borderTopWidth: 1, borderTopColor: neu.border }}>
        <View className="flex-row items-center">
          <Ionicons name="people" size={14} color={neu.textLight} />
          <Text className="text-xs ml-1.5 font-semibold" style={{ color: neu.textMuted }}>{item.attendees.toLocaleString()} attending</Text>
        </View>
        <View className="rounded-full px-4 py-2" style={{ backgroundColor: neu.royal }}>
          <Text className="text-xs font-extrabold text-white">Register Now</Text>
        </View>
      </View>
    </Card>
    </Pressable>
  )
}
