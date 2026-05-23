import { View, Text, Pressable } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { CircleIcon } from "../ui"
import { useNeu } from "../../context/ThemeContext"
import { events } from "../../sample"
import { EventCard } from "../item"

export default function UpcomingEvents() {
  const neu = useNeu()
  return (
    <View className="mt-6 px-5">
      <View className="flex-row items-center justify-between mb-3">
        <View className="flex-row items-center">
          <CircleIcon size={26} color={neu.royal}>
            <Ionicons name="calendar" size={14} color={neu.royal} />
          </CircleIcon>
          <Text className="text-base font-bold ml-2" style={{ color: neu.text }}>Upcoming Events</Text>
        </View>
        <Pressable className="flex-row items-center">
          <Text className="text-xs font-bold" style={{ color: neu.royal }}>See all</Text>
          <Ionicons name="chevron-forward" size={12} color={neu.royal} />
        </Pressable>
      </View>
      {events.map((item) => (
        <View key={item.id} className="mb-3">
          <EventCard item={item} />
        </View>
      ))}
    </View>
  )
}
