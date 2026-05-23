import { View, Text } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { CircleIcon } from "../ui"
import { useNeu } from "../../context/ThemeContext"
import { courses } from "../../sample"
import { CourseCard } from "../item"

export default function CurrentCourses() {
  const neu = useNeu()
  return (
    <View className="mt-6 px-5">
      <View className="flex-row items-center justify-between mb-3">
        <View className="flex-row items-center">
          <CircleIcon size={26} color={neu.royal}>
            <Ionicons name="book" size={14} color={neu.royal} />
          </CircleIcon>
          <Text className="text-base font-bold ml-2" style={{ color: neu.text }}>Current Courses</Text>
        </View>
        <View className="flex-row items-center">
          <Text className="text-xs font-bold" style={{ color: neu.royal }}>All subjects</Text>
          <Ionicons name="chevron-forward" size={12} color={neu.royal} />
        </View>
      </View>
      {courses.map((item) => (
        <View key={item.id} className="mb-3">
          <CourseCard item={item} />
        </View>
      ))}
    </View>
  )
}
