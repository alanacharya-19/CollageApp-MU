import { ScrollView, View, Text, Pressable } from "react-native"
import { useRouter, useLocalSearchParams } from "expo-router"
import { Ionicons } from "@expo/vector-icons"
import { neu, Card, CircleIcon } from "../../components/ui"
import { notices } from "../../sample"

export default function NoticeDetail() {
  const router = useRouter()
  const { id } = useLocalSearchParams<{ id: string }>()
  const item = notices.find((n) => n.id === id)

  if (!item) {
    return (
      <View className="flex-1 items-center justify-center" style={{ backgroundColor: neu.bg }}>
        <Text style={{ color: neu.textMuted }}>Notice not found</Text>
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
          <Text className="text-lg font-bold text-white">Notice</Text>
        </View>
      </View>
      <ScrollView className="flex-1 px-5 pt-5">
        <Card elevated radius={neu.radius.xl}>
          <View className="flex-row items-center mb-3">
            <CircleIcon size={44} color={neu.royal}>
              <Ionicons name={item.icon} size={20} color={neu.royal} />
            </CircleIcon>
            <View className="ml-3">
              <Text className="text-xs font-semibold" style={{ color: neu.royal }}>{item.category.toUpperCase()}</Text>
              <Text className="text-lg font-bold -mt-0.5" style={{ color: neu.text }}>{item.title}</Text>
            </View>
          </View>
          <View className="flex-row items-center mb-4">
            <Ionicons name="time-outline" size={13} color={neu.textLight} />
            <Text className="text-xs ml-1.5" style={{ color: neu.textLight }}>{item.date}</Text>
            {item.hasAttachment && (
              <>
                <Ionicons name="attach" size={13} color={neu.textLight} className="ml-4" />
                <Text className="text-xs ml-1" style={{ color: neu.textLight }}>Attachment</Text>
              </>
            )}
          </View>
          <Text className="text-sm leading-6" style={{ color: neu.textMuted }}>{item.description}</Text>
        </Card>
      </ScrollView>
    </View>
  )
}
