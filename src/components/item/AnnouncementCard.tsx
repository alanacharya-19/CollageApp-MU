import { View, Text, Pressable } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { NeumorphicBox } from "../ui"
import { neu } from "../ui"
import type { Announcement } from "../../sample"

export default function AnnouncementCard({ item }: { item: Announcement }) {
  return (
    <Pressable className="mr-4 w-72 active:opacity-80">
      <NeumorphicBox radius={neu.radius.xl}>
        <View className="p-4">
          <View className="flex-row items-center mb-3">
            <View className="w-10 h-10 rounded-xl items-center justify-center" style={{ backgroundColor: neu.dark + "25" }}>
              <Ionicons name={item.icon || "megaphone"} size={18} color={neu.textMuted} />
            </View>
            <View className="flex-row items-center ml-2">
              <View className="rounded-full px-2.5 py-0.5" style={{ backgroundColor: neu.dark + "20" }}>
                <Text className="text-[10px] font-semibold" style={{ color: neu.textMuted }}>{item.category}</Text>
              </View>
              {item.isNew && (
                <View className="ml-1.5 w-2 h-2 rounded-full" style={{ backgroundColor: neu.accent }} />
              )}
            </View>
          </View>
          <Text className="text-[15px] font-bold leading-5 mb-1" style={{ color: neu.text }}>{item.title}</Text>
          <Text className="text-xs leading-4" style={{ color: neu.textMuted }} numberOfLines={2}>{item.description}</Text>
          <View className="flex-row items-center mt-3 pt-3" style={{ borderTopWidth: 1, borderTopColor: neu.dark + "30" }}>
            <Ionicons name="time-outline" size={12} color={neu.textLight} />
            <Text className="text-[11px] ml-1" style={{ color: neu.textLight }}>{item.date}</Text>
          </View>
        </View>
      </NeumorphicBox>
    </Pressable>
  )
}
