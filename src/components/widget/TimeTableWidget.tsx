import { View, Text, ScrollView } from "react-native"
import { Card } from "../ui"
import { useNeu } from "../../context/ThemeContext"
import { timetable } from "../../sample"
import type { Day } from "../../sample"

const days: Day[] = ["Mon", "Tue", "Wed", "Thu", "Fri"]

export default function TimeTableWidget() {
  const neu = useNeu()
  const typeColors: Record<string, string> = {
    Lecture: neu.royal,
    Lab: "#8B5CF6",
    Tutorial: neu.cyan,
  }
  return (
    <Card radius={neu.radius.lg}>
      <Text className="text-sm font-bold mb-3" style={{ color: neu.text }}>Today's Schedule</Text>
      {days.slice(0, 3).map((day) => {
        const slots = timetable.filter((s) => s.day === day)
        return (
          <View key={day}>
            {slots.length > 0 && (
              <View className="mb-2">
                <Text className="text-[10px] font-bold tracking-wider mb-1.5" style={{ color: neu.textLight }}>{day.toUpperCase()}</Text>
                {slots.slice(0, 2).map((slot) => (
                  <View key={slot.id} className="flex-row items-center py-1.5">
                    <View className="w-14">
                      <Text className="text-[11px] font-semibold" style={{ color: neu.textMuted }}>{slot.time}</Text>
                    </View>
                    <View className="w-1 h-full rounded-full mx-2.5" style={{ backgroundColor: typeColors[slot.type] || neu.royal }} />
                    <View className="flex-1">
                      <Text className="text-xs font-bold" style={{ color: neu.text }} numberOfLines={1}>{slot.course}</Text>
                      <Text className="text-[10px]" style={{ color: neu.textLight }}>{slot.room} · {slot.type}</Text>
                    </View>
                    <View className="rounded px-2 py-0.5" style={{ backgroundColor: (typeColors[slot.type] || neu.royal) + "15" }}>
                      <Text className="text-[9px] font-bold" style={{ color: typeColors[slot.type] || neu.royal }}>{slot.type}</Text>
                    </View>
                  </View>
                ))}
              </View>
            )}
          </View>
        )
      })}
      <Text className="text-xs font-bold text-center mt-2" style={{ color: neu.royal }}>View full timetable →</Text>
    </Card>
  )
}
