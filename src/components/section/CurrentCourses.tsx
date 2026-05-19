import { View, Text } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { NeumorphicCircle } from "../ui"
import { neu } from "../ui"
import { courses } from "../../sample"
import { CourseCard } from "../item"

export default function CurrentCourses() {
  return (
    <View className="mt-6 px-5">
      <View className="flex-row items-center justify-between mb-3">
        <View className="flex-row items-center">
          <NeumorphicCircle size={28}>
            <Ionicons name="book" size={14} color={neu.textMuted} />
          </NeumorphicCircle>
          <Text className="text-base font-bold ml-2" style={{ color: neu.text }}>Current Courses</Text>
        </View>
        <View className="flex-row items-center">
          <Text className="text-xs font-bold" style={{ color: neu.accent }}>All subjects</Text>
          <Ionicons name="chevron-forward" size={12} color={neu.accent} />
        </View>
      </View>
      {courses.map((item) => (
        <CourseCard key={item.id} item={item} />
      ))}
    </View>
  )
}
