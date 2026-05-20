import { View, Text, Pressable } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { CircleIcon } from "../ui"
import { neu } from "../ui"

export default function HeaderHome() {
  return (
    <View className="flex-row items-center justify-between px-6 pt-14 pb-4" style={{ backgroundColor: neu.midnight }}>
      <View className="flex-row items-center">
        <CircleIcon size={44} color={neu.cyan}>
          <Ionicons name="person" size={22} color={neu.cyan} />
        </CircleIcon>
        <View className="ml-3">
          <Text className="text-xs font-medium" style={{ color: neu.textLight }}>Welcome back,</Text>
          <Text className="text-lg font-bold -mt-1" style={{ color: "#FFFFFF" }}>Alex Johnson</Text>
        </View>
      </View>
      <View className="flex-row items-center gap-3">
        <Pressable>
          <CircleIcon size={40} color="#FFFFFF">
            <Ionicons name="scan-outline" size={20} color="#FFFFFF" />
          </CircleIcon>
        </Pressable>
        <Pressable>
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
