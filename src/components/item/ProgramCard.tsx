import { View, Text, Pressable } from "react-native"
import { useRouter } from "expo-router"
import { Ionicons } from "@expo/vector-icons"
import { Card } from "../ui"
import { neu } from "../ui"
import type { Program } from "../../sample"

export default function ProgramCard({ item }: { item: Program }) {
  const router = useRouter()
  return (
    <Pressable className="active:opacity-90 mb-3" onPress={() => router.push("/modal/program?id=" + item.id as any)}>
      <Card>
        <View className="flex-row items-center">
          <View className="w-12 h-12 rounded-2xl items-center justify-center" style={{ backgroundColor: neu.royal + "08" }}>
            <Ionicons name={item.icon} size={22} color={neu.royal} />
          </View>
          <View className="flex-1 ml-3">
            <View className="flex-row items-center">
              <Text className="text-[11px] font-bold" style={{ color: neu.cyan }}>{item.degree}</Text>
              <Text className="text-[11px] ml-2" style={{ color: neu.textLight }}>{item.department}</Text>
            </View>
            <Text className="text-sm font-bold mt-0.5 leading-5" style={{ color: neu.text }}>{item.name}</Text>
          </View>
        </View>
        <Text className="text-xs leading-4 mt-3" style={{ color: neu.textMuted }} numberOfLines={2}>{item.description}</Text>
        <View className="flex-row items-center mt-3 pt-3" style={{ borderTopWidth: 1, borderTopColor: neu.border }}>
          <View className="flex-row items-center">
            <Ionicons name="time-outline" size={11} color={neu.textLight} />
            <Text className="text-[11px] ml-1 font-semibold" style={{ color: neu.textMuted }}>{item.duration}</Text>
          </View>
          <View className="mx-3 w-px h-3" style={{ backgroundColor: neu.border }} />
          <View className="flex-row items-center">
            <Ionicons name="people-outline" size={11} color={neu.textLight} />
            <Text className="text-[11px] ml-1 font-semibold" style={{ color: neu.textMuted }}>{item.seats} seats</Text>
          </View>
        </View>
      </Card>
    </Pressable>
  )
}
