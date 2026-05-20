import { View, Text } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { Card, CircleIcon } from "../ui"
import { neu } from "../ui"
import { quickActions } from "../../sample"
import { QuickActionItem } from "../item"

export default function QuickActions() {
  return (
    <View className="mt-6 px-5">
      <View className="flex-row items-center mb-3">
        <CircleIcon size={26} color={neu.royal}>
          <Ionicons name="grid" size={14} color={neu.royal} />
        </CircleIcon>
        <Text className="text-base font-bold ml-2" style={{ color: neu.text }}>Quick Actions</Text>
      </View>
      <Card>
        <View className="flex-row flex-wrap justify-between">
          {quickActions.map((item) => (
            <QuickActionItem key={item.id} item={item} />
          ))}
        </View>
      </Card>
    </View>
  )
}
