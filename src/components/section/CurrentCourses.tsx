import { View, Text } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { courses } from "../../sample"
import { CourseCard } from "../item"

const bg = "#E8EDF2"

export default function CurrentCourses() {
  return (
    <View className="mt-6 px-5">
      <View className="flex-row items-center justify-between mb-3">
        <View className="flex-row items-center">
          <View style={{ width: 26, height: 26, borderRadius: 8, backgroundColor: bg, shadowColor: "#FFFFFF", shadowOffset: { width: -2, height: -2 }, shadowOpacity: 0.8, shadowRadius: 4 }}>
            <View style={{ width: 26, height: 26, borderRadius: 8, backgroundColor: bg, shadowColor: "#C8D0D9", shadowOffset: { width: 2, height: 2 }, shadowOpacity: 0.4, shadowRadius: 4, elevation: 2, alignItems: "center", justifyContent: "center" }}>
              <Ionicons name="book" size={14} color="#5B7FFF" />
            </View>
          </View>
          <Text className="text-base font-bold text-[#2D3748] ml-2">Current Courses</Text>
        </View>
        <View className="flex-row items-center">
          <Text className="text-xs font-bold text-[#5B7FFF]">All subjects</Text>
          <Ionicons name="chevron-forward" size={12} color="#5B7FFF" />
        </View>
      </View>
      {courses.map((item) => (
        <CourseCard key={item.id} item={item} />
      ))}
    </View>
  )
}
