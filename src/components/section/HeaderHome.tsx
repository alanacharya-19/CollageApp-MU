import { View, Text, Pressable } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { NeumorphicCircle } from "../ui"
import { neu } from "../ui"

export default function HeaderHome() {
  return (
    <View className="flex-row items-center justify-between px-6 pt-14 pb-4">
      <View className="flex-row items-center">
        <Pressable>
          <NeumorphicCircle size={44}>
            <Ionicons name="person" size={22} color={neu.accent} />
          </NeumorphicCircle>
        </Pressable>
        <View className="ml-3">
          <Text className="text-xs font-medium" style={{ color: neu.textLight }}>Welcome back,</Text>
          <Text className="text-lg font-bold -mt-1" style={{ color: neu.text }}>Alex Johnson</Text>
        </View>
      </View>
      <View className="flex-row items-center gap-3">
        <Pressable>
          <NeumorphicCircle size={40}>
            <Ionicons name="scan-outline" size={20} color={neu.textMuted} />
          </NeumorphicCircle>
        </Pressable>
        <Pressable>
          <NeumorphicCircle size={40}>
            <View className="relative">
              <Ionicons name="notifications-outline" size={20} color={neu.textMuted} />
              <View className="absolute -top-1.5 -right-1.5 w-4.5 h-4.5 rounded-full items-center justify-center" style={{ backgroundColor: neu.accent }}>
                <Text className="text-white text-[9px] font-bold">3</Text>
              </View>
            </View>
          </NeumorphicCircle>
        </Pressable>
      </View>
    </View>
  )
}
