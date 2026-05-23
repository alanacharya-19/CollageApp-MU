import { View, Text } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { Card, CircleIcon } from "../ui"
import { neu } from "../ui"

export default function AttendanceWidget() {
  const pct = 87
  const color = pct >= 85 ? neu.success : pct >= 75 ? neu.warning : neu.error

  return (
    <Card radius={neu.radius.lg}>
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center">
          <CircleIcon size={42} color={color}>
            <Ionicons name="checkbox" size={20} color={color} />
          </CircleIcon>
          <View className="ml-3">
            <Text className="text-xs font-semibold" style={{ color: neu.textMuted }}>Attendance</Text>
            <Text className="text-lg font-extrabold -mt-0.5" style={{ color: neu.text }}>{pct}%</Text>
          </View>
        </View>
        <View className="items-end">
          <View className="flex-row items-center">
            <View className="w-2 h-2 rounded-full mr-1.5" style={{ backgroundColor: neu.success }} />
            <Text className="text-[11px] font-semibold" style={{ color: neu.textMuted }}>42/48</Text>
          </View>
          <Text className="text-[10px] mt-0.5" style={{ color: neu.textLight }}>classes</Text>
        </View>
      </View>
      <View className="mt-3 h-2 rounded-full" style={{ backgroundColor: neu.border }}>
        <View className="h-full rounded-full" style={{ width: `${pct}%`, backgroundColor: color }} />
      </View>
    </Card>
  )
}
