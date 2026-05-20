import { useState } from "react"
import { ScrollView, View, Text, Pressable } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { neu, Card, CircleIcon } from "../../components/ui"
import { FacultyCard } from "../../components/item"
import { faculty } from "../../sample"

const departments = ["All", "Computer Science", "Mathematics", "Physics", "Electronics", "Mechanical", "Chemistry", "Commerce"] as const

export default function FacultyScreen() {
  const [activeDept, setActiveDept] = useState("All")

  const filtered = faculty.filter((f) => {
    if (activeDept === "All") return true
    return f.department === activeDept
  })

  return (
    <View className="flex-1" style={{ backgroundColor: neu.bg }}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Header */}
        <View className="px-6 pt-14 pb-4" style={{ backgroundColor: neu.midnight }}>
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-[11px] font-bold tracking-[2px]" style={{ color: neu.textLight }}>OUR FACULTY</Text>
              <Text className="text-2xl font-extrabold -mt-0.5 text-white">Meet Our Team</Text>
            </View>
            <View className="flex-row items-center gap-3">
              <Pressable>
                <CircleIcon size={40} color="#FFFFFF">
                  <Ionicons name="search-outline" size={20} color="#FFFFFF" />
                </CircleIcon>
              </Pressable>
              <Pressable>
                <CircleIcon size={40} color="#FFFFFF">
                  <Ionicons name="options-outline" size={20} color="#FFFFFF" />
                </CircleIcon>
              </Pressable>
            </View>
          </View>

          {/* Department Filter Chips */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-4" contentContainerStyle={{ paddingRight: 20 }}>
            {departments.map((d) => (
              <Pressable
                key={d}
                onPress={() => setActiveDept(d)}
                className="mr-2 px-4 py-2 rounded-full"
                style={{ backgroundColor: activeDept === d ? neu.royal : "rgba(255,255,255,0.12)" }}
              >
                <Text className="text-[10px] font-bold" style={{ color: activeDept === d ? "#FFFFFF" : neu.textLight }}>
                  {d}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>

        {/* Stats Banner */}
        <View className="px-5 mt-5">
          <Card elevated radius={neu.radius.xl}>
            <View className="flex-row items-center mb-4">
              <View className="w-10 h-10 rounded-2xl items-center justify-center" style={{ backgroundColor: neu.royal + "10" }}>
                <Ionicons name="people" size={20} color={neu.royal} />
              </View>
              <View className="ml-3">
                <Text className="text-sm font-bold" style={{ color: neu.text }}>Dedicated Educators</Text>
                <Text className="text-xs" style={{ color: neu.textMuted }}>Experienced faculty across all departments</Text>
              </View>
            </View>
            <View className="flex-row">
              <View className="flex-1 items-center py-3 rounded-2xl" style={{ backgroundColor: neu.bg }}>
                <Text className="text-lg font-extrabold" style={{ color: neu.text }}>{faculty.length}</Text>
                <Text className="text-[10px] font-semibold mt-0.5" style={{ color: neu.textLight }}>Faculty</Text>
              </View>
              <View className="flex-1 items-center py-3 rounded-2xl mx-2" style={{ backgroundColor: neu.bg }}>
                <Text className="text-lg font-extrabold" style={{ color: neu.text }}>7</Text>
                <Text className="text-[10px] font-semibold mt-0.5" style={{ color: neu.textLight }}>Depts</Text>
              </View>
              <View className="flex-1 items-center py-3 rounded-2xl" style={{ backgroundColor: neu.bg }}>
                <Text className="text-lg font-extrabold" style={{ color: neu.text }}>16+</Text>
                <Text className="text-[10px] font-semibold mt-0.5" style={{ color: neu.textLight }}>Avg Yrs</Text>
              </View>
            </View>
          </Card>
        </View>

        {/* Faculty List */}
        <View className="px-5 mt-5">
          <View className="flex-row items-center mb-3">
            <CircleIcon size={26} color={neu.royal}>
              <Ionicons name="people-outline" size={13} color={neu.royal} />
            </CircleIcon>
            <Text className="text-sm font-bold ml-2" style={{ color: neu.text }}>
              {activeDept === "All" ? "All Faculty" : activeDept}
            </Text>
            <Text className="text-xs font-semibold ml-2" style={{ color: neu.textLight }}>({filtered.length})</Text>
          </View>

          {filtered.map((person) => (
            <FacultyCard key={person.id} item={person} />
          ))}

          {filtered.length === 0 && (
            <Card radius={neu.radius.xl}>
              <View className="py-14 items-center">
                <CircleIcon size={60} color={neu.textLight}>
                  <Ionicons name="people-outline" size={26} color={neu.textLight} />
                </CircleIcon>
                <Text className="text-sm font-bold mt-4" style={{ color: neu.textMuted }}>No faculty found</Text>
                <Text className="text-xs mt-1" style={{ color: neu.textLight }}>Try a different department</Text>
              </View>
            </Card>
          )}
        </View>
      </ScrollView>
    </View>
  )
}
