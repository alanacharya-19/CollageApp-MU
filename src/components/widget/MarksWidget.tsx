import { View, Text } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { Card, CircleIcon } from "../ui"
import { useNeu } from "../../context/ThemeContext"

export default function MarksWidget() {
  const neu = useNeu()
  const subjects = [
    { name: "Data Structures", score: "92/100", grade: "A", color: neu.royal },
    { name: "Linear Algebra", score: "78/100", grade: "B+", color: neu.warning },
    { name: "Quantum Mechanics", score: "85/100", grade: "A-", color: neu.cyan },
  ]
  return (
    <Card radius={neu.radius.lg}>
      <View className="flex-row items-center mb-3">
        <CircleIcon size={32} color={neu.royal}>
          <Ionicons name="stats-chart" size={16} color={neu.royal} />
        </CircleIcon>
        <Text className="text-sm font-bold ml-2" style={{ color: neu.text }}>Recent Scores</Text>
      </View>
      {subjects.map((s, i) => (
        <View key={s.name} className={`flex-row items-center py-2 ${i < subjects.length - 1 ? "border-b" : ""}`} style={{ borderBottomColor: neu.border }}>
          <View className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: s.color }} />
          <Text className="flex-1 text-xs font-semibold" style={{ color: neu.text }}>{s.name}</Text>
          <Text className="text-xs font-bold mr-3" style={{ color: s.color }}>{s.grade}</Text>
          <Text className="text-[11px]" style={{ color: neu.textLight }}>{s.score}</Text>
        </View>
      ))}
      <View className="flex-row items-center justify-between mt-2 pt-2" style={{ borderTopWidth: 1, borderTopColor: neu.border }}>
        <Text className="text-xs font-semibold" style={{ color: neu.textMuted }}>CGPA</Text>
        <Text className="text-sm font-extrabold" style={{ color: neu.royal }}>8.76 / 10</Text>
      </View>
    </Card>
  )
}
