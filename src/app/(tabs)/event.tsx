import { useState } from "react"
import { ScrollView, View, Text, Pressable } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { neu, NeumorphicCircle, NeumorphicBox } from "../../components/ui"
import { EventFilterChip, EventHeroCard, EventCard } from "../../components/item"
import { events } from "../../sample"
import type { UniversityEvent } from "../../sample"

const filters = ["All", "Academic", "Cultural", "Sports", "Workshop", "Career"] as const

const typeMap: Record<string, UniversityEvent["type"]> = {
  All: "academic",
  Academic: "academic",
  Cultural: "cultural",
  Sports: "sports",
  Workshop: "workshop",
  Career: "career",
}

export default function EventScreen() {
  const [activeFilter, setActiveFilter] = useState("All")

  const featured = events.find((e) => e.featured)
  const filtered = events.filter((e) => {
    if (activeFilter === "All") return true
    return e.type === typeMap[activeFilter]
  })

  return (
    <View className="flex-1" style={{ backgroundColor: neu.bg }}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Header */}
        <View className="flex-row items-center justify-between px-6 pt-14 pb-3">
          <View>
            <Text className="text-[11px] font-bold tracking-[2px]" style={{ color: neu.textLight }}>UNIVERSITY EVENTS</Text>
            <Text className="text-2xl font-extrabold -mt-0.5" style={{ color: neu.text }}>Discover Events</Text>
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
            <EventFilterChip key={f} label={f} active={activeFilter === f} onPress={() => setActiveFilter(f)} />
          ))}
        </ScrollView>

        {/* Featured Event */}
        {featured && activeFilter === "All" && (
          <View className="px-5 mt-5">
            <View className="flex-row items-center mb-3">
              <NeumorphicCircle size={26}>
                <Ionicons name="sparkles" size={13} color={neu.accent} />
              </NeumorphicCircle>
              <Text className="text-sm font-bold ml-2" style={{ color: neu.text }}>Featured Event</Text>
            </View>
            <EventHeroCard item={featured} />
          </View>
        )}

        {/* All Events */}
        <View className="px-5 mt-6">
          <View className="flex-row items-center justify-between mb-3">
            <View className="flex-row items-center">
              <NeumorphicCircle size={26}>
                <Ionicons name="list" size={13} color={neu.textMuted} />
              </NeumorphicCircle>
              <Text className="text-sm font-bold ml-2" style={{ color: neu.text }}>
                {activeFilter === "All" ? "All Events" : activeFilter}
              </Text>
              <Text className="text-xs font-semibold ml-2" style={{ color: neu.textLight }}>({filtered.length})</Text>
            </View>
            <View style={{ borderRadius: neu.radius.full, backgroundColor: neu.dark + "25", paddingHorizontal: 10, paddingVertical: 4 }}>
              <Text className="text-[10px] font-bold" style={{ color: neu.textMuted }}>This Month</Text>
            </View>
          </View>

          {filtered.map((event) => (
            <View key={event.id} className="mb-3">
              <EventCard item={event} />
            </View>
          ))}

          {filtered.length === 0 && (
            <NeumorphicBox radius={neu.radius.lg}>
              <View className="py-12 items-center">
                <NeumorphicCircle size={56}>
                  <Ionicons name="calendar-outline" size={24} color={neu.textLight} />
                </NeumorphicCircle>
                <Text className="text-sm font-bold mt-4" style={{ color: neu.textMuted }}>No events found</Text>
                <Text className="text-xs mt-1" style={{ color: neu.textLight }}>Try a different filter</Text>
              </View>
            </NeumorphicBox>
          )}
        </View>
      </ScrollView>
    </View>
  )
}
