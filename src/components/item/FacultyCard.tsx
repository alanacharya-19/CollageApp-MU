import { View, Text, Pressable } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { Card } from "../ui"
import { neu } from "../ui"
import type { Faculty } from "../../sample"

export default function FacultyCard({ item }: { item: Faculty }) {
  return (
    <Pressable className="active:opacity-90 mb-3">
      <Card>
        <View className="flex-row items-center">
          <View className="w-14 h-14 rounded-full items-center justify-center" style={{ backgroundColor: neu.royal + "08" }}>
            <Text className="text-lg font-extrabold" style={{ color: neu.royal }}>
              {item.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
            </Text>
          </View>
          <View className="flex-1 ml-3">
            <Text className="text-sm font-bold" style={{ color: neu.text }}>{item.name}</Text>
            <Text className="text-xs font-semibold mt-0.5" style={{ color: neu.cyan }}>{item.designation}</Text>
            <View className="flex-row items-center mt-1">
              <Ionicons name="business-outline" size={11} color={neu.textLight} />
              <Text className="text-[11px] ml-1" style={{ color: neu.textMuted }}>{item.department}</Text>
            </View>
          </View>
          <Ionicons name="chevron-forward" size={16} color={neu.textLight} />
        </View>
        <View className="flex-row items-center mt-3 pt-3" style={{ borderTopWidth: 1, borderTopColor: neu.border }}>
          <Ionicons name="flask-outline" size={11} color={neu.textLight} />
          <Text className="text-[11px] ml-1 flex-1" style={{ color: neu.textMuted }} numberOfLines={1}>{item.specialization}</Text>
        </View>
        <View className="flex-row items-center mt-1.5">
          <View className="flex-row items-center">
            <Ionicons name="time-outline" size={11} color={neu.textLight} />
            <Text className="text-[11px] ml-1" style={{ color: neu.textMuted }}>{item.experience}</Text>
          </View>
          <View className="mx-3 w-px h-3" style={{ backgroundColor: neu.border }} />
          <View className="flex-row items-center flex-1">
            <Ionicons name="mail-outline" size={11} color={neu.textLight} />
            <Text className="text-[11px] ml-1" style={{ color: neu.textMuted }} numberOfLines={1}>{item.email}</Text>
          </View>
        </View>
      </Card>
    </Pressable>
  )
}
