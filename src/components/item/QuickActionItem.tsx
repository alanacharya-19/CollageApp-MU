import { View, Text, Pressable } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import type { QuickAction } from "../../sample"

const bg = "#E8EDF2"

export default function QuickActionItem({ item }: { item: QuickAction }) {
  return (
    <Pressable className="items-center mb-4 w-[30%] active:opacity-80">
      <View style={{ borderRadius: 20, backgroundColor: bg }}>
        <View style={{ borderRadius: 20, backgroundColor: bg, shadowColor: "#FFFFFF", shadowOffset: { width: -3, height: -3 }, shadowOpacity: 0.8, shadowRadius: 6 }}>
          <View style={{ borderRadius: 20, backgroundColor: bg, shadowColor: "#C8D0D9", shadowOffset: { width: 3, height: 3 }, shadowOpacity: 0.5, shadowRadius: 6, elevation: 3 }}>
            <View style={{ width: 56, height: 56, borderRadius: 20, alignItems: "center", justifyContent: "center" }}>
              <Ionicons name={item.icon} size={24} color={item.gradient[0]} />
            </View>
          </View>
        </View>
      </View>
      <Text className="text-[11px] font-semibold text-[#6B7A8F] mt-2 tracking-tight">{item.label}</Text>
    </Pressable>
  )
}
