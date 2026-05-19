import { View, Text, Pressable } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { NeumorphicCircle } from "../ui"
import { neu } from "../ui"
import { events } from "../../sample"
import { EventCard } from "../item"

export default function UpcomingEvents() {
  return (
    <View className="mt-6 px-5">
      <View className="flex-row items-center justify-between mb-3">
        <View className="flex-row items-center">
          <NeumorphicCircle size={28}>
            <Ionicons name="calendar" size={14} color={neu.textMuted} />
          </NeumorphicCircle>
          <Text className="text-base font-bold ml-2" style={{ color: neu.text }}>Upcoming Events</Text>
        </View>
        <Pressable className="flex-row items-center">
          <Text className="text-xs font-bold" style={{ color: neu.accent }}>See all</Text>
          <Ionicons name="chevron-forward" size={12} color={neu.accent} />
        </Pressable>
      </View>
      {events.map((item) => (
        <EventCard key={item.id} item={item} />
      ))}
    </View>
  )
}
