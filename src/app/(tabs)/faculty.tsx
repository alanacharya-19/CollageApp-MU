import { useState } from "react"
import { ScrollView, View, Text, Pressable } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { neu, NeumorphicCircle, NeumorphicBox } from "../../components/ui"
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
        <View className="flex-row items-center justify-between px-6 pt-14 pb-3">
          <View>
            <Text className="text-[11px] font-bold tracking-[2px]" style={{ color: neu.textLight }}>OUR FACULTY</Text>
            <Text className="text-2xl font-extrabold -mt-0.5" style={{ color: neu.text }}>Meet Our Team</Text>
          </View>
          <View className="flex-row items-center gap-3">
            <Pressable>
              <NeumorphicCircle size={40}>
                <Ionicons name="search-outline" size={20} color={neu.textMuted} />
              </NeumorphicCircle>
            </Pressable>
            <Pressable>
              <NeumorphicCircle size={40}>
                <Ionicons name="options-outline" size={20} color={neu.textMuted} />
              </NeumorphicCircle>
            </Pressable>
          </View>
        </View>

        {/* Stats Banner */}
        <View className="px-5 mt-2">
          <NeumorphicBox radius={neu.radius.xl}>
            <View className="p-5">
              <View className="flex-row items-center mb-4">
                <View className="w-10 h-10 rounded-2xl items-center justify-center" style={{ backgroundColor: neu.accent + "15" }}>
                  <Ionicons name="people" size={20} color={neu.accent} />
                </View>
                <View className="ml-3">
                  <Text className="text-sm font-bold" style={{ color: neu.text }}>Dedicated Educators</Text>
                  <Text className="text-xs" style={{ color: neu.textMuted }}>Experienced faculty across all departments</Text>
                </View>
              </View>
              <View className="flex-row">
                <View className="flex-1 items-center py-3 rounded-2xl" style={{ backgroundColor: neu.dark + "15" }}>
                  <Text className="text-lg font-extrabold" style={{ color: neu.text }}>{faculty.length}</Text>
                  <Text className="text-[10px] font-semibold mt-0.5" style={{ color: neu.textLight }}>Faculty</Text>
                </View>
                <View className="flex-1 items-center py-3 rounded-2xl mx-2" style={{ backgroundColor: neu.dark + "15" }}>
                  <Text className="text-lg font-extrabold" style={{ color: neu.text }}>7</Text>
                  <Text className="text-[10px] font-semibold mt-0.5" style={{ color: neu.textLight }}>Depts</Text>
                </View>
                <View className="flex-1 items-center py-3 rounded-2xl" style={{ backgroundColor: neu.dark + "15" }}>
                  <Text className="text-lg font-extrabold" style={{ color: neu.text }}>16+</Text>
                  <Text className="text-[10px] font-semibold mt-0.5" style={{ color: neu.textLight }}>Avg Yrs</Text>
                </View>
              </View>
            </View>
          </NeumorphicBox>
        </View>

        {/* Department Filter Chips */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="px-5 mt-5"
          contentContainerStyle={{ paddingRight: 20 }}
        >
          {departments.map((d) => (
            <Pressable key={d} onPress={() => setActiveDept(d)} className="mr-2 active:opacity-80">
              {activeDept === d ? (
                <NeumorphicCircle size={36} inset>
                  <Text className="text-[10px] font-bold" style={{ color: neu.accent }}>{d}</Text>
                </NeumorphicCircle>
              ) : (
                <NeumorphicCircle size={36}>
                  <Text className="text-[10px] font-semibold" style={{ color: neu.textMuted }}>{d}</Text>
                </NeumorphicCircle>
              )}
            </Pressable>
          ))}
        </ScrollView>

        {/* Faculty List */}
        <View className="px-5 mt-5">
          <View className="flex-row items-center mb-3">
            <NeumorphicCircle size={26}>
              <Ionicons name="people-outline" size={13} color={neu.textMuted} />
            </NeumorphicCircle>
            <Text className="text-sm font-bold ml-2" style={{ color: neu.text }}>
              {activeDept === "All" ? "All Faculty" : activeDept}
            </Text>
            <Text className="text-xs font-semibold ml-2" style={{ color: neu.textLight }}>({filtered.length})</Text>
          </View>

          {filtered.map((person) => (
            <FacultyCard key={person.id} item={person} />
          ))}

          {filtered.length === 0 && (
            <NeumorphicBox radius={neu.radius.xl}>
              <View className="py-14 items-center">
                <NeumorphicCircle size={60}>
                  <Ionicons name="people-outline" size={26} color={neu.textLight} />
                </NeumorphicCircle>
                <Text className="text-sm font-bold mt-4" style={{ color: neu.textMuted }}>No faculty found</Text>
                <Text className="text-xs mt-1" style={{ color: neu.textLight }}>Try a different department</Text>
              </View>
            </NeumorphicBox>
          )}
        </View>
      </ScrollView>
    </View>
  )
}
