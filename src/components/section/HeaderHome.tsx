import { View, Text, Pressable } from "react-native"
import { useRouter } from "expo-router"
import { Ionicons } from "@expo/vector-icons"
import { CircleIcon } from "../ui"
import { useNeu } from "../../context/ThemeContext"

export default function HeaderHome() {
  const neu = useNeu()
  const router = useRouter()

  return (
    <View className="flex-row items-center justify-between px-6 pt-14 pb-4" style={{ backgroundColor: neu.midnight }}>
      <Pressable className="flex-row items-center" onPress={() => router.push("/modal/profile" as any)}>
        <CircleIcon size={44} color={neu.cyan}>
          <Ionicons name="person" size={22} color={neu.cyan} />
        </CircleIcon>
        <View className="ml-3">
          <Text className="text-xs font-medium" style={{ color: neu.textLight }}>Welcome back,</Text>
          <Text className="text-lg font-bold -mt-1" style={{ color: "#FFFFFF" }}>Alex Johnson</Text>
        </View>
      </Pressable>
      <View className="flex-row items-center gap-3">
        <Pressable onPress={() => router.push("/search" as any)}>
          <CircleIcon size={40} color="#FFFFFF">
            <Ionicons name="search-outline" size={20} color="#FFFFFF" />
          </CircleIcon>
        </Pressable>
        <Pressable onPress={() => router.push("/(tabs)/notices" as any)}>
          <CircleIcon size={40} color="#FFFFFF">
            <View className="relative">
              <Ionicons name="notifications-outline" size={20} color="#FFFFFF" />
              <View style={{ position: "absolute", top: -6, right: -6, width: 18, height: 18, borderRadius: 9, alignItems: "center", justifyContent: "center", backgroundColor: neu.error, zIndex: 10 }}>
                <Text className="text-white text-[9px] font-bold">3</Text>
              </View>
            </View>
          </CircleIcon>
        </Pressable>
      </View>
    </View>
  )
}
