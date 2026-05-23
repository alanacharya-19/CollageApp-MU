import { ScrollView, View, Text, Pressable } from "react-native"
import { useRouter, useLocalSearchParams } from "expo-router"
import { Ionicons } from "@expo/vector-icons"
import { neu, Card, CircleIcon } from "../../components/ui"
import { faculty } from "../../sample"

export default function FacultyDetail() {
  const router = useRouter()
  const { id } = useLocalSearchParams<{ id: string }>()
  const item = faculty.find((f) => f.id === id)

  if (!item) {
    return (
      <View className="flex-1 items-center justify-center" style={{ backgroundColor: neu.bg }}>
        <Text style={{ color: neu.textMuted }}>Faculty not found</Text>
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
          <Text className="text-lg font-bold text-white">Faculty</Text>
        </View>
      </View>
      <ScrollView className="flex-1 px-5 pt-5">
        <Card elevated radius={neu.radius.xl}>
          <View className="items-center mb-5 py-2">
            <CircleIcon size={72} color={item.color}>
              <Text className="text-2xl font-extrabold" style={{ color: item.color }}>
                {item.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
              </Text>
            </CircleIcon>
            <Text className="text-lg font-bold mt-3" style={{ color: neu.text }}>{item.name}</Text>
            <Text className="text-xs font-bold" style={{ color: neu.cyan }}>{item.designation}</Text>
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
              <Ionicons name="flask-outline" size={16} color={neu.royal} />
              <View className="ml-3">
                <Text className="text-xs font-semibold" style={{ color: neu.textMuted }}>Specialization</Text>
                <Text className="text-sm font-bold" style={{ color: neu.text }}>{item.specialization}</Text>
              </View>
            </View>
            <View className="flex-row items-center mb-3" style={{ borderTopWidth: 1, borderTopColor: neu.border, paddingTop: 12 }}>
              <Ionicons name="time-outline" size={16} color={neu.royal} />
              <View className="ml-3">
                <Text className="text-xs font-semibold" style={{ color: neu.textMuted }}>Experience</Text>
                <Text className="text-sm font-bold" style={{ color: neu.text }}>{item.experience}</Text>
              </View>
            </View>
            <View className="flex-row items-center" style={{ borderTopWidth: 1, borderTopColor: neu.border, paddingTop: 12 }}>
              <Ionicons name="mail-outline" size={16} color={neu.royal} />
              <View className="ml-3">
                <Text className="text-xs font-semibold" style={{ color: neu.textMuted }}>Email</Text>
                <Text className="text-sm font-bold" style={{ color: neu.text }}>{item.email}</Text>
              </View>
            </View>
          </View>
        </Card>
      </ScrollView>
    </View>
  )
}
