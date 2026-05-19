import { View, Text } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { stats } from "../../sample"
import { StatCard } from "../item"

export default function StatsOverview() {
  return (
    <View className="mt-6 px-5">
      <View className="flex-row items-center mb-3">
        <Ionicons name="stats-chart" size={16} color="#4F46E5" />
        <Text className="text-base font-bold text-gray-900 ml-1.5">University at a Glance</Text>
      </View>
      <View className="flex-row">
        {stats.map((item) => (
          <StatCard key={item.id} item={item} />
        ))}
      </View>
    </View>
  )
}
