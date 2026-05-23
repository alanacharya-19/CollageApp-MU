import { ScrollView, View, Text, Pressable } from "react-native"
import { useRouter, useLocalSearchParams } from "expo-router"
import { Ionicons } from "@expo/vector-icons"
import { neu, Card, CircleIcon } from "../../components/ui"
import { events } from "../../sample"

export default function EventDetail() {
  const router = useRouter()
  const { id } = useLocalSearchParams<{ id: string }>()
  const item = events.find((e) => e.id === id)

  if (!item) {
    return (
      <View className="flex-1 items-center justify-center" style={{ backgroundColor: neu.bg }}>
        <Text style={{ color: neu.textMuted }}>Event not found</Text>
      </View>
    )
  }

  return (
    <View className="flex-1" style={{ backgroundColor: neu.bg }}>
      <View className="px-5 pt-14 pb-3" style={{ backgroundColor: neu.midnight }}>
        <View className="flex-row items-center">
          <Pressable onPress={() => router.back()} className="mr-4">
            <Ionicons name="arrow-back" size={22} color="#FFFFFF" />
          </Pressable>
          <Text className="text-lg font-bold text-white">Event</Text>
        </View>
      </View>
      <ScrollView className="flex-1 px-5 pt-5">
        <Card elevated radius={neu.radius.xl}>
          <View className="flex-row items-center mb-4">
            <View className="w-20 h-20 rounded-2xl items-center justify-center" style={{ backgroundColor: neu.royal + "10" }}>
              <Text className="text-xs font-bold tracking-widest" style={{ color: neu.royal }}>{item.month}</Text>
              <Text className="text-3xl font-extrabold" style={{ color: neu.text }}>{item.day}</Text>
            </View>
            <View className="flex-1 ml-4">
              <View className="flex-row items-center">
                <View className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: neu.cyan }} />
                <Text className="text-xs font-bold" style={{ color: neu.cyan }}>{item.type.toUpperCase()}</Text>
              </View>
              <Text className="text-lg font-bold mt-0.5" style={{ color: neu.text }}>{item.title}</Text>
            </View>
          </View>

          <View className="rounded-2xl p-4 mb-4" style={{ backgroundColor: neu.bg }}>
            <View className="flex-row items-center mb-3">
              <Ionicons name="time-outline" size={16} color={neu.royal} />
              <View className="ml-3">
                <Text className="text-xs font-semibold" style={{ color: neu.textMuted }}>Date & Time</Text>
                <Text className="text-sm font-bold" style={{ color: neu.text }}>{item.date} · {item.time}</Text>
              </View>
            </View>
            <View className="flex-row items-center mb-3">
              <Ionicons name="location-outline" size={16} color={neu.royal} />
              <View className="ml-3">
                <Text className="text-xs font-semibold" style={{ color: neu.textMuted }}>Location</Text>
                <Text className="text-sm font-bold" style={{ color: neu.text }}>{item.location}</Text>
              </View>
            </View>
            <View className="flex-row items-center">
              <Ionicons name="people" size={16} color={neu.royal} />
              <View className="ml-3">
                <Text className="text-xs font-semibold" style={{ color: neu.textMuted }}>Expected Attendees</Text>
                <Text className="text-sm font-bold" style={{ color: neu.text }}>{item.attendees.toLocaleString()}</Text>
              </View>
            </View>
          </View>

          {item.description && (
            <Text className="text-sm leading-6 mb-4" style={{ color: neu.textMuted }}>{item.description}</Text>
          )}

          <Pressable className="rounded-2xl py-3.5 items-center" style={{ backgroundColor: neu.royal }}>
            <Text className="text-sm font-extrabold text-white">Register for Event</Text>
          </Pressable>
        </Card>
      </ScrollView>
    </View>
  )
}
