import { View, Text, Pressable } from "react-native"
import { Ionicons } from "@expo/vector-icons"

const bg = "#E8EDF2"

export default function HeaderHome() {
  return (
    <View className="flex-row items-center justify-between px-6 pt-14 pb-4">
      <View className="flex-row items-center">
        <Pressable>
          <View style={{ borderRadius: 16, backgroundColor: bg }}>
            <View style={{ borderRadius: 16, backgroundColor: bg, shadowColor: "#FFFFFF", shadowOffset: { width: -3, height: -3 }, shadowOpacity: 0.8, shadowRadius: 6 }}>
              <View style={{ borderRadius: 16, backgroundColor: bg, shadowColor: "#C8D0D9", shadowOffset: { width: 3, height: 3 }, shadowOpacity: 0.5, shadowRadius: 6, elevation: 3 }}>
                <View className="w-11 h-11 rounded-2xl items-center justify-center">
                  <Ionicons name="person" size={22} color="#5B7FFF" />
                </View>
              </View>
            </View>
          </View>
        </Pressable>
        <View className="ml-3">
          <Text className="text-xs font-medium text-[#9BA6B8]">Welcome back,</Text>
          <Text className="text-lg font-bold text-[#2D3748] -mt-1">Alex Johnson</Text>
        </View>
      </View>
      <View className="flex-row items-center gap-3">
        <Pressable>
          <View style={{ borderRadius: 14, backgroundColor: bg }}>
            <View style={{ borderRadius: 14, backgroundColor: bg, shadowColor: "#FFFFFF", shadowOffset: { width: -2, height: -2 }, shadowOpacity: 0.8, shadowRadius: 4 }}>
              <View style={{ borderRadius: 14, backgroundColor: bg, shadowColor: "#C8D0D9", shadowOffset: { width: 2, height: 2 }, shadowOpacity: 0.5, shadowRadius: 4, elevation: 2 }}>
                <View className="w-10 h-10 rounded-xl items-center justify-center">
                  <Ionicons name="scan-outline" size={20} color="#6B7A8F" />
                </View>
              </View>
            </View>
          </View>
        </Pressable>
        <Pressable>
          <View style={{ borderRadius: 14, backgroundColor: bg }}>
            <View style={{ borderRadius: 14, backgroundColor: bg, shadowColor: "#FFFFFF", shadowOffset: { width: -2, height: -2 }, shadowOpacity: 0.8, shadowRadius: 4 }}>
              <View style={{ borderRadius: 14, backgroundColor: bg, shadowColor: "#C8D0D9", shadowOffset: { width: 2, height: 2 }, shadowOpacity: 0.5, shadowRadius: 4, elevation: 2 }}>
                <View className="w-10 h-10 rounded-xl items-center justify-center relative">
                  <Ionicons name="notifications-outline" size={20} color="#6B7A8F" />
                  <View className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 rounded-full bg-[#FF6B6B] items-center justify-center">
                    <Text className="text-white text-[9px] font-bold">3</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </Pressable>
      </View>
    </View>
  )
}
