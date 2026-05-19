import { View, Text } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { NeumorphicCircle, NeumorphicBox } from "../ui"
import { neu } from "../ui"
import { quickActions } from "../../sample"
import { QuickActionItem } from "../item"

export default function QuickActions() {
  return (
    <View className="mt-6 px-5">
      <View className="flex-row items-center mb-3">
        <NeumorphicCircle size={28}>
          <Ionicons name="grid" size={14} color={neu.textMuted} />
        </NeumorphicCircle>
        <Text className="text-base font-bold ml-2" style={{ color: neu.text }}>Quick Actions</Text>
      </View>
      <NeumorphicBox radius={neu.radius.xl}>
        <View className="p-5">
          <View className="flex-row flex-wrap justify-between">
            {quickActions.map((item) => (
              <QuickActionItem key={item.id} item={item} />
            ))}
          </View>
        </View>
      </NeumorphicBox>
    </View>
  )
}
