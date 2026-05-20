import { useState } from "react"
import { ScrollView, View, Text, Pressable } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { neu, NeumorphicCircle, NeumorphicBox } from "../../components/ui"
import { ProgramCard } from "../../components/item"
import { programs } from "../../sample"

const filters = ["All", "Engineering", "Science", "Commerce", "Management", "Research"] as const

export default function ProgramsScreen() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filtered = programs.filter((p) => {
    if (activeFilter === "All") return true
    return p.category === activeFilter.toLowerCase()
  })

  return (
    <View className="flex-1" style={{ backgroundColor: neu.bg }}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Header */}
        <View className="flex-row items-center justify-between px-6 pt-14 pb-3">
          <View>
            <Text className="text-[11px] font-bold tracking-[2px]" style={{ color: neu.textLight }}>ACADEMIC PROGRAMS</Text>
            <Text className="text-2xl font-extrabold -mt-0.5" style={{ color: neu.text }}>Our Programs</Text>
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
                  <Ionicons name="school" size={20} color={neu.accent} />
                </View>
                <View className="ml-3">
                  <Text className="text-sm font-bold" style={{ color: neu.text }}>Explore Programs</Text>
                  <Text className="text-xs" style={{ color: neu.textMuted }}>Find the right program for your future</Text>
                </View>
              </View>
              <View className="flex-row">
                <View className="flex-1 items-center py-3 rounded-2xl" style={{ backgroundColor: neu.dark + "15" }}>
                  <Text className="text-lg font-extrabold" style={{ color: neu.text }}>{programs.length}</Text>
                  <Text className="text-[10px] font-semibold mt-0.5" style={{ color: neu.textLight }}>Programs</Text>
                </View>
                <View className="flex-1 items-center py-3 rounded-2xl mx-2" style={{ backgroundColor: neu.dark + "15" }}>
                  <Text className="text-lg font-extrabold" style={{ color: neu.text }}>5</Text>
                  <Text className="text-[10px] font-semibold mt-0.5" style={{ color: neu.textLight }}>Schools</Text>
                </View>
                <View className="flex-1 items-center py-3 rounded-2xl" style={{ backgroundColor: neu.dark + "15" }}>
                  <Text className="text-lg font-extrabold" style={{ color: neu.text }}>685</Text>
                  <Text className="text-[10px] font-semibold mt-0.5" style={{ color: neu.textLight }}>Seats</Text>
                </View>
              </View>
            </View>
          </NeumorphicBox>
        </View>

        {/* Filter Chips */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="px-5 mt-5"
          contentContainerStyle={{ paddingRight: 20 }}
        >
          {filters.map((f) => (
            <Pressable key={f} onPress={() => setActiveFilter(f)} className="mr-3 active:opacity-80">
              {activeFilter === f ? (
                <NeumorphicCircle size={36} inset>
                  <Text className="text-xs font-bold" style={{ color: neu.accent }}>{f}</Text>
                </NeumorphicCircle>
              ) : (
                <NeumorphicCircle size={36}>
                  <Text className="text-xs font-semibold" style={{ color: neu.textMuted }}>{f}</Text>
                </NeumorphicCircle>
              )}
            </Pressable>
          ))}
        </ScrollView>

        {/* Program List */}
        <View className="px-5 mt-5">
          <View className="flex-row items-center mb-3">
            <NeumorphicCircle size={26}>
              <Ionicons name="layers" size={13} color={neu.textMuted} />
            </NeumorphicCircle>
            <Text className="text-sm font-bold ml-2" style={{ color: neu.text }}>
              {activeFilter === "All" ? "All Programs" : activeFilter}
            </Text>
            <Text className="text-xs font-semibold ml-2" style={{ color: neu.textLight }}>({filtered.length})</Text>
          </View>

          {filtered.map((program) => (
            <ProgramCard key={program.id} item={program} />
          ))}

          {filtered.length === 0 && (
            <NeumorphicBox radius={neu.radius.xl}>
              <View className="py-14 items-center">
                <NeumorphicCircle size={60}>
                  <Ionicons name="school-outline" size={26} color={neu.textLight} />
                </NeumorphicCircle>
                <Text className="text-sm font-bold mt-4" style={{ color: neu.textMuted }}>No programs found</Text>
                <Text className="text-xs mt-1" style={{ color: neu.textLight }}>Try a different category</Text>
              </View>
            </NeumorphicBox>
          )}
        </View>
      </ScrollView>
    </View>
  )
}
