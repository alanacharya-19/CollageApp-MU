import { View, Text } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { quickActions } from "../../sample"
import { QuickActionItem } from "../item"

const bg = "#E8EDF2"

export default function QuickActions() {
  return (
    <View className="mt-6 px-5">
      <View className="flex-row items-center mb-3">
        <View style={{ width: 26, height: 26, borderRadius: 8, backgroundColor: bg, shadowColor: "#FFFFFF", shadowOffset: { width: -2, height: -2 }, shadowOpacity: 0.8, shadowRadius: 4 }}>
          <View style={{ width: 26, height: 26, borderRadius: 8, backgroundColor: bg, shadowColor: "#C8D0D9", shadowOffset: { width: 2, height: 2 }, shadowOpacity: 0.4, shadowRadius: 4, elevation: 2, alignItems: "center", justifyContent: "center" }}>
            <Ionicons name="grid" size={14} color="#5B7FFF" />
          </View>
        </View>
        <Text className="text-base font-bold text-[#2D3748] ml-2">Quick Actions</Text>
      </View>
      <View style={{ borderRadius: 24, backgroundColor: bg }}>
        <View style={{ borderRadius: 24, backgroundColor: bg, shadowColor: "#FFFFFF", shadowOffset: { width: -4, height: -4 }, shadowOpacity: 0.8, shadowRadius: 8 }}>
          <View style={{ borderRadius: 24, backgroundColor: bg, padding: 20, shadowColor: "#C8D0D9", shadowOffset: { width: 4, height: 4 }, shadowOpacity: 0.5, shadowRadius: 8, elevation: 4 }}>
            <View className="flex-row flex-wrap justify-between">
              {quickActions.map((item) => (
                <QuickActionItem key={item.id} item={item} />
              ))}
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}
