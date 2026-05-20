import { View, Text, Pressable } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { NeumorphicBox } from "../ui"
import { neu } from "../ui"
import type { Notice } from "../../sample"

const categoryMeta: Record<string, { label: string }> = {
  academic: { label: "Academic" },
  administrative: { label: "Administrative" },
  examination: { label: "Examination" },
  general: { label: "General" },
  emergency: { label: "Emergency" },
}

export default function NoticeCard({ item }: { item: Notice }) {
  const meta = categoryMeta[item.category] || categoryMeta.general

  return (
    <Pressable className="active:opacity-80">
      <NeumorphicBox radius={neu.radius.xl}>
        <View className="p-4">
          <View className="flex-row items-start">
            <View className="w-10 h-10 rounded-2xl items-center justify-center" style={{ backgroundColor: neu.dark + "20" }}>
              <Ionicons name={item.icon} size={18} color={neu.textMuted} />
            </View>
            <View className="flex-1 ml-3">
              <View className="flex-row items-center">
                <View className="rounded-full px-2.5 py-0.5" style={{ backgroundColor: neu.dark + "20" }}>
                  <Text className="text-[10px] font-bold" style={{ color: neu.textMuted }}>{meta.label}</Text>
                </View>
                {item.isNew && (
                  <View className="ml-1.5 px-2 py-0.5 rounded-full" style={{ backgroundColor: neu.accent + "20" }}>
                    <Text className="text-[9px] font-extrabold" style={{ color: neu.accent }}>NEW</Text>
                  </View>
                )}
              </View>
              <Text className="text-sm font-bold mt-1 leading-5" style={{ color: neu.text }}>{item.title}</Text>
              <Text className="text-xs leading-4 mt-1" style={{ color: neu.textMuted }} numberOfLines={2}>{item.description}</Text>
              <View className="flex-row items-center mt-3 pt-3" style={{ borderTopWidth: 1, borderTopColor: neu.dark + "25" }}>
                <Ionicons name="time-outline" size={11} color={neu.textLight} />
                <Text className="text-[11px] ml-1 mr-4" style={{ color: neu.textLight }}>{item.date}</Text>
                {item.hasAttachment && (
                  <>
                    <Ionicons name="attach" size={11} color={neu.textLight} />
                    <Text className="text-[11px] ml-1" style={{ color: neu.textLight }}>Attachment</Text>
                  </>
                )}
              </View>
            </View>
            <Ionicons name="chevron-forward" size={16} color={neu.textLight} style={{ marginTop: 4 }} />
          </View>
        </View>
      </NeumorphicBox>
    </Pressable>
  )
}
