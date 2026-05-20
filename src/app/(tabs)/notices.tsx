import { useState } from "react"
import { ScrollView, View, Text, Pressable } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { neu, NeumorphicCircle, NeumorphicBox } from "../../components/ui"
import { NoticeCard } from "../../components/item"
import { notices } from "../../sample"

const filters = ["All", "Examination", "Academic", "Administrative", "General"] as const

export default function NoticesScreen() {
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
        <View className="flex-row items-center justify-between px-6 pt-14 pb-3">
          <View>
            <Text className="text-[11px] font-bold tracking-[2px]" style={{ color: neu.textLight }}>NOTICE BOARD</Text>
            <View className="flex-row items-center">
              <Text className="text-2xl font-extrabold -mt-0.5" style={{ color: neu.text }}>Notices</Text>
              {newCount > 0 && (
                <View className="ml-2.5 px-2.5 py-0.5 rounded-full" style={{ backgroundColor: neu.accent + "18" }}>
                  <Text className="text-[11px] font-extrabold" style={{ color: neu.accent }}>{newCount} new</Text>
                </View>
              )}
            </View>
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

        {/* Filter Chips */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="px-5 mt-2"
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

        {/* Stats Bar */}
        <View className="px-5 mt-5">
          <NeumorphicBox radius={neu.radius.md}>
            <View className="flex-row py-3 px-4">
              <View className="flex-1 items-center">
                <Text className="text-sm font-extrabold" style={{ color: neu.text }}>{notices.length}</Text>
                <Text className="text-[10px] font-semibold mt-0.5" style={{ color: neu.textLight }}>Total</Text>
              </View>
              <View className="w-px" style={{ backgroundColor: neu.dark + "30" }} />
              <View className="flex-1 items-center">
                <Text className="text-sm font-extrabold" style={{ color: neu.text }}>{newCount}</Text>
                <Text className="text-[10px] font-semibold mt-0.5" style={{ color: neu.accent }}>New</Text>
              </View>
              <View className="w-px" style={{ backgroundColor: neu.dark + "30" }} />
              <View className="flex-1 items-center">
                <Text className="text-sm font-extrabold" style={{ color: neu.text }}>{filtered.length}</Text>
                <Text className="text-[10px] font-semibold mt-0.5" style={{ color: neu.textLight }}>Showing</Text>
              </View>
            </View>
          </NeumorphicBox>
        </View>

        {/* Notice List */}
        <View className="px-5 mt-5">
          <View className="flex-row items-center mb-3">
            <NeumorphicCircle size={26}>
              <Ionicons name="document-text" size={13} color={neu.textMuted} />
            </NeumorphicCircle>
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
            <NeumorphicBox radius={neu.radius.xl}>
              <View className="py-14 items-center">
                <NeumorphicCircle size={60}>
                  <Ionicons name="document-text-outline" size={26} color={neu.textLight} />
                </NeumorphicCircle>
                <Text className="text-sm font-bold mt-4" style={{ color: neu.textMuted }}>No notices found</Text>
                <Text className="text-xs mt-1" style={{ color: neu.textLight }}>Try selecting a different category</Text>
              </View>
            </NeumorphicBox>
          )}
        </View>
      </ScrollView>
    </View>
  )
}
