import { View, Text, ScrollView, Pressable } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { announcements } from "../../sample"
import { AnnouncementCard } from "../item"

const bg = "#E8EDF2"

export default function LatestAnnouncements() {
  return (
    <View className="mt-6">
      <View className="flex-row items-center justify-between px-5 mb-3">
        <View className="flex-row items-center">
          <View style={{ width: 26, height: 26, borderRadius: 8, backgroundColor: bg, shadowColor: "#FFFFFF", shadowOffset: { width: -2, height: -2 }, shadowOpacity: 0.8, shadowRadius: 4 }}>
            <View style={{ width: 26, height: 26, borderRadius: 8, backgroundColor: bg, shadowColor: "#C8D0D9", shadowOffset: { width: 2, height: 2 }, shadowOpacity: 0.4, shadowRadius: 4, elevation: 2, alignItems: "center", justifyContent: "center" }}>
              <Ionicons name="megaphone" size={14} color="#5B7FFF" />
            </View>
          </View>
          <Text className="text-base font-bold text-[#2D3748] ml-2">Announcements</Text>
        </View>
        <Pressable className="flex-row items-center">
          <Text className="text-xs font-bold text-[#5B7FFF]">See all</Text>
          <Ionicons name="chevron-forward" size={12} color="#5B7FFF" className="ml-0.5" />
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
