import { useState } from "react"
import { ScrollView, View, Text, Pressable } from "react-native"
import { useRouter } from "expo-router"
import { Ionicons } from "@expo/vector-icons"
import { Card, CircleIcon } from "../../components/ui"
import { useNeu } from "../../context/ThemeContext"
import { NoticeCard } from "../../components/item"
import { notices } from "../../sample"

const filters = ["All", "Examination", "Academic", "Administrative", "General"] as const

export default function NoticesScreen() {
  const neu = useNeu()
  const router = useRouter()
  const [activeFilter, setActiveFilter] = useState("All")

  const filtered = notices.filter((n) => {
    if (activeFilter === "All") return true
    return n.category === activeFilter.toLowerCase()
  })

  const newCount = notices.filter((n) => n.isNew).length

  return (
    <View className="flex-1" style={{ backgroundColor: neu.bg }}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Header */}
        <View className="px-6 pt-14 pb-4" style={{ backgroundColor: neu.midnight }}>
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-[11px] font-bold tracking-[2px]" style={{ color: neu.textLight }}>NOTICE BOARD</Text>
              <View className="flex-row items-center">
                <Text className="text-2xl font-extrabold -mt-0.5 text-white">Notices</Text>
                {newCount > 0 && (
                  <View className="ml-2.5 px-2.5 py-0.5 rounded-full" style={{ backgroundColor: neu.warning + "25" }}>
                    <Text className="text-[11px] font-extrabold" style={{ color: neu.warning }}>{newCount} new</Text>
                  </View>
                )}
              </View>
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

        {/* Stats Bar */}
        <View className="px-5 mt-5">
          <Card radius={neu.radius.md}>
            <View className="flex-row py-2">
              <View className="flex-1 items-center">
                <Text className="text-sm font-extrabold" style={{ color: neu.text }}>{notices.length}</Text>
                <Text className="text-[10px] font-semibold mt-0.5" style={{ color: neu.textLight }}>Total</Text>
              </View>
              <View className="w-px" style={{ backgroundColor: neu.border }} />
              <View className="flex-1 items-center">
                <Text className="text-sm font-extrabold" style={{ color: neu.text }}>{newCount}</Text>
                <Text className="text-[10px] font-semibold mt-0.5" style={{ color: neu.warning }}>New</Text>
              </View>
              <View className="w-px" style={{ backgroundColor: neu.border }} />
              <View className="flex-1 items-center">
                <Text className="text-sm font-extrabold" style={{ color: neu.text }}>{filtered.length}</Text>
                <Text className="text-[10px] font-semibold mt-0.5" style={{ color: neu.textLight }}>Showing</Text>
              </View>
            </View>
          </Card>
        </View>

        {/* Notice List */}
        <View className="px-5 mt-5">
          <View className="flex-row items-center mb-3">
            <CircleIcon size={26} color={neu.royal}>
              <Ionicons name="document-text" size={13} color={neu.royal} />
            </CircleIcon>
            <Text className="text-sm font-bold ml-2" style={{ color: neu.text }}>
              {activeFilter === "All" ? "All Notices" : activeFilter}
            </Text>
            <Text className="text-xs font-semibold ml-2" style={{ color: neu.textLight }}>({filtered.length})</Text>
          </View>

          {filtered.map((notice) => (
            <View key={notice.id} className="mb-3">
              <NoticeCard item={notice} />
            </View>
          ))}

          {filtered.length === 0 && (
            <Card radius={neu.radius.xl}>
              <View className="py-14 items-center">
                <CircleIcon size={60} color={neu.textLight}>
                  <Ionicons name="document-text-outline" size={26} color={neu.textLight} />
                </CircleIcon>
                <Text className="text-sm font-bold mt-4" style={{ color: neu.textMuted }}>No notices found</Text>
                <Text className="text-xs mt-1" style={{ color: neu.textLight }}>Try selecting a different category</Text>
              </View>
            </Card>
          )}
        </View>
      </ScrollView>
    </View>
  )
}
