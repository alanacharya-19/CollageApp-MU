import { useState } from "react"
import { ScrollView, View, Text, Pressable } from "react-native"
import { useRouter } from "expo-router"
import { Ionicons } from "@expo/vector-icons"
import { Card, CircleIcon } from "../../components/ui"
import { useNeu } from "../../context/ThemeContext"
import { ProgramCard } from "../../components/item"
import { programs } from "../../sample"

const filters = ["All", "Engineering", "Science", "Commerce", "Management", "Research"] as const

export default function ProgramsScreen() {
  const neu = useNeu()
  const router = useRouter()
  const [activeFilter, setActiveFilter] = useState("All")

  const filtered = programs.filter((p) => {
    if (activeFilter === "All") return true
    return p.category === activeFilter.toLowerCase()
  })

  return (
    <View className="flex-1" style={{ backgroundColor: neu.bg }}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Header */}
        <View className="px-6 pt-14 pb-4" style={{ backgroundColor: neu.midnight }}>
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-[11px] font-bold tracking-[2px]" style={{ color: neu.textLight }}>ACADEMIC PROGRAMS</Text>
              <Text className="text-2xl font-extrabold -mt-0.5 text-white">Our Programs</Text>
            </View>
            <View className="flex-row items-center gap-3">
              <Pressable onPress={() => router.push("/search" as any)}>
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

          {/* Filter Chips */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-4" contentContainerStyle={{ paddingRight: 20 }}>
            {filters.map((f) => (
              <Pressable
                key={f}
                onPress={() => setActiveFilter(f)}
                className="mr-3 px-4 py-2 rounded-full"
                style={{ backgroundColor: activeFilter === f ? neu.royal : "rgba(255,255,255,0.12)" }}
              >
                <Text className="text-xs font-bold" style={{ color: activeFilter === f ? "#FFFFFF" : neu.textLight }}>
                  {f}
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
                <Ionicons name="school" size={20} color={neu.royal} />
              </View>
              <View className="ml-3">
                <Text className="text-sm font-bold" style={{ color: neu.text }}>Explore Programs</Text>
                <Text className="text-xs" style={{ color: neu.textMuted }}>Find the right program for your future</Text>
              </View>
            </View>
            <View className="flex-row">
              <View className="flex-1 items-center py-3 rounded-2xl" style={{ backgroundColor: neu.bg }}>
                <Text className="text-lg font-extrabold" style={{ color: neu.text }}>{programs.length}</Text>
                <Text className="text-[10px] font-semibold mt-0.5" style={{ color: neu.textLight }}>Programs</Text>
              </View>
              <View className="flex-1 items-center py-3 rounded-2xl mx-2" style={{ backgroundColor: neu.bg }}>
                <Text className="text-lg font-extrabold" style={{ color: neu.text }}>5</Text>
                <Text className="text-[10px] font-semibold mt-0.5" style={{ color: neu.textLight }}>Schools</Text>
              </View>
              <View className="flex-1 items-center py-3 rounded-2xl" style={{ backgroundColor: neu.bg }}>
                <Text className="text-lg font-extrabold" style={{ color: neu.text }}>685</Text>
                <Text className="text-[10px] font-semibold mt-0.5" style={{ color: neu.textLight }}>Seats</Text>
              </View>
            </View>
          </Card>
        </View>

        {/* Program List */}
        <View className="px-5 mt-5">
          <View className="flex-row items-center mb-3">
            <CircleIcon size={26} color={neu.royal}>
              <Ionicons name="layers" size={13} color={neu.royal} />
            </CircleIcon>
            <Text className="text-sm font-bold ml-2" style={{ color: neu.text }}>
              {activeFilter === "All" ? "All Programs" : activeFilter}
            </Text>
            <Text className="text-xs font-semibold ml-2" style={{ color: neu.textLight }}>({filtered.length})</Text>
          </View>

          {filtered.map((program) => (
            <ProgramCard key={program.id} item={program} />
          ))}

          {filtered.length === 0 && (
            <Card radius={neu.radius.xl}>
              <View className="py-14 items-center">
                <CircleIcon size={60} color={neu.textLight}>
                  <Ionicons name="school-outline" size={26} color={neu.textLight} />
                </CircleIcon>
                <Text className="text-sm font-bold mt-4" style={{ color: neu.textMuted }}>No programs found</Text>
                <Text className="text-xs mt-1" style={{ color: neu.textLight }}>Try a different category</Text>
              </View>
            </Card>
          )}
        </View>
      </ScrollView>
    </View>
  )
}
