import { View, Text, ScrollView, Pressable } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { NeumorphicCircle } from "../ui"
import { neu } from "../ui"
import { announcements } from "../../sample"
import { AnnouncementCard } from "../item"

export default function LatestAnnouncements() {
  return (
    <View className="mt-6">
      <View className="flex-row items-center justify-between px-5 mb-3">
        <View className="flex-row items-center">
          <NeumorphicCircle size={28}>
            <Ionicons name="megaphone" size={14} color={neu.textMuted} />
          </NeumorphicCircle>
          <Text className="text-base font-bold ml-2" style={{ color: neu.text }}>Announcements</Text>
        </View>
        <Pressable className="flex-row items-center">
          <Text className="text-xs font-bold" style={{ color: neu.accent }}>See all</Text>
          <Ionicons name="chevron-forward" size={12} color={neu.accent} />
        </Pressable>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingLeft: 20, paddingRight: 8, paddingBottom: 4 }}>
        {announcements.map((item) => (
          <AnnouncementCard key={item.id} item={item} />
        ))}
      </ScrollView>
    </View>
  )
}
