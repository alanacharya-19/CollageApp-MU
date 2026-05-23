import { View, Text, ScrollView, Pressable } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { CircleIcon } from "../ui"
import { useNeu } from "../../context/ThemeContext"
import { announcements } from "../../sample"
import { AnnouncementCard } from "../item"

export default function LatestAnnouncements() {
  const neu = useNeu()
  return (
    <View className="mt-6">
      <View className="flex-row items-center justify-between px-5 mb-3">
        <View className="flex-row items-center">
          <CircleIcon size={26} color={neu.royal}>
            <Ionicons name="megaphone" size={14} color={neu.royal} />
          </CircleIcon>
          <Text className="text-base font-bold ml-2" style={{ color: neu.text }}>Announcements</Text>
        </View>
        <Pressable className="flex-row items-center">
          <Text className="text-xs font-bold" style={{ color: neu.royal }}>See all</Text>
          <Ionicons name="chevron-forward" size={12} color={neu.royal} />
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
