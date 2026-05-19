import { View, Text, Pressable } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import type { Announcement } from "../../sample"

const categoryStyles: Record<string, { bg: string; badge: string; label: string }> = {
  academic: { bg: "#EEF2FF", badge: "#4F46E5", label: "Academic" },
  event: { bg: "#FFFBEB", badge: "#D97706", label: "Event" },
  exam: { bg: "#FEF2F2", badge: "#DC2626", label: "Exam" },
  general: { bg: "#ECFEFF", badge: "#0891B2", label: "General" },
  achievement: { bg: "#F0FDF4", badge: "#059669", label: "Achievement" },
}

const bg = "#E8EDF2"

export default function AnnouncementCard({ item }: { item: Announcement }) {
  const style = categoryStyles[item.category] || categoryStyles.general

  return (
    <Pressable className="mr-4 w-72" style={{ borderRadius: 24, backgroundColor: bg }}>
      <View style={{ borderRadius: 24, backgroundColor: bg, shadowColor: "#FFFFFF", shadowOffset: { width: -4, height: -4 }, shadowOpacity: 0.8, shadowRadius: 8 }}>
        <View style={{ borderRadius: 24, backgroundColor: bg, padding: 16, shadowColor: "#C8D0D9", shadowOffset: { width: 4, height: 4 }, shadowOpacity: 0.5, shadowRadius: 8, elevation: 4 }}>
          <View className="flex-row items-center mb-3">
            <View className="w-10 h-10 rounded-xl items-center justify-center" style={{ backgroundColor: style.bg }}>
              <Ionicons name={item.icon} size={18} color={style.badge} />
            </View>
            <View className="ml-2 flex-row items-center">
              <View className="rounded-full px-2.5 py-0.5" style={{ backgroundColor: style.bg }}>
                <Text style={{ color: style.badge }} className="text-[10px] font-semibold">{style.label}</Text>
              </View>
              {item.isNew && (
                <View className="ml-1.5 w-2 h-2 rounded-full" style={{ backgroundColor: "#DC2626" }} />
              )}
            </View>
          </View>
          <Text className="text-[15px] font-bold text-[#2D3748] leading-5 mb-1">{item.title}</Text>
          <Text className="text-xs text-[#6B7A8F] leading-4" numberOfLines={2}>{item.description}</Text>
          <View className="flex-row items-center mt-3 pt-3 border-t border-[#D5DDE6]">
            <Ionicons name="time-outline" size={12} color="#9BA6B8" />
            <Text className="text-[11px] text-[#9BA6B8] ml-1">{item.date}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  )
}
