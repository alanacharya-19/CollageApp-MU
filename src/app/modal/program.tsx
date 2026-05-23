import { ScrollView, View, Text, Pressable } from "react-native"
import { useRouter, useLocalSearchParams } from "expo-router"
import { Ionicons } from "@expo/vector-icons"
import { neu, Card, CircleIcon } from "../../components/ui"
import { programs } from "../../sample"

export default function ProgramDetail() {
  const router = useRouter()
  const { id } = useLocalSearchParams<{ id: string }>()
  const item = programs.find((p) => p.id === id)

  if (!item) {
    return (
      <View className="flex-1 items-center justify-center" style={{ backgroundColor: neu.bg }}>
        <Text style={{ color: neu.textMuted }}>Program not found</Text>
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
          <Text className="text-lg font-bold text-white">Program</Text>
        </View>
      </View>
      <ScrollView className="flex-1 px-5 pt-5">
        <Card elevated radius={neu.radius.xl}>
          <View className="flex-row items-center mb-4">
            <CircleIcon size={52} color={neu.royal}>
              <Ionicons name={item.icon} size={24} color={neu.royal} />
            </CircleIcon>
            <View className="flex-1 ml-4">
              <Text className="text-xs font-bold" style={{ color: neu.cyan }}>{item.degree}</Text>
              <Text className="text-lg font-bold mt-0.5" style={{ color: neu.text }}>{item.name}</Text>
            </View>
          </View>

          <View className="rounded-2xl p-4 mb-4" style={{ backgroundColor: neu.bg }}>
            <View className="flex-row items-center mb-3">
              <Ionicons name="business-outline" size={16} color={neu.royal} />
              <View className="ml-3">
                <Text className="text-xs font-semibold" style={{ color: neu.textMuted }}>Department</Text>
                <Text className="text-sm font-bold" style={{ color: neu.text }}>{item.department}</Text>
              </View>
            </View>
            <View className="flex-row items-center mb-3" style={{ borderTopWidth: 1, borderTopColor: neu.border, paddingTop: 12 }}>
              <Ionicons name="time-outline" size={16} color={neu.royal} />
              <View className="ml-3">
                <Text className="text-xs font-semibold" style={{ color: neu.textMuted }}>Duration</Text>
                <Text className="text-sm font-bold" style={{ color: neu.text }}>{item.duration}</Text>
              </View>
            </View>
            <View className="flex-row items-center" style={{ borderTopWidth: 1, borderTopColor: neu.border, paddingTop: 12 }}>
              <Ionicons name="people-outline" size={16} color={neu.royal} />
              <View className="ml-3">
                <Text className="text-xs font-semibold" style={{ color: neu.textMuted }}>Available Seats</Text>
                <Text className="text-sm font-bold" style={{ color: neu.text }}>{item.seats}</Text>
              </View>
            </View>
          </View>

          <Text className="text-sm leading-6 mb-4" style={{ color: neu.textMuted }}>{item.description}</Text>

          <Pressable className="rounded-2xl py-3.5 items-center" style={{ backgroundColor: neu.royal }}>
            <Text className="text-sm font-extrabold text-white">Apply Now</Text>
          </Pressable>
        </Card>
      </ScrollView>
    </View>
  )
}
