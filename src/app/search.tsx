import { useState } from "react"
import { View, Text, TextInput, ScrollView, Pressable } from "react-native"
import { useRouter } from "expo-router"
import { Ionicons } from "@expo/vector-icons"
import { Card, CircleIcon } from "../components/ui"
import { useNeu } from "../context/ThemeContext"
import { notices, events, programs, faculty } from "../sample"

type Result = { id: string; title: string; subtitle: string; icon: React.ComponentProps<typeof Ionicons>["name"]; route: string; color: string }

export default function SearchScreen() {
  const neu = useNeu()
  const router = useRouter()
  const [query, setQuery] = useState("")

  const all: Result[] = [
    ...notices.map((n) => ({ id: n.id, title: n.title, subtitle: n.category, icon: n.icon, route: "/modal/notice?id=" + n.id, color: neu.royal })),
    ...events.map((e) => ({ id: e.id, title: e.title, subtitle: e.date, icon: e.icon, route: "/modal/event?id=" + e.id, color: neu.cyan })),
    ...programs.map((p) => ({ id: p.id, title: p.name, subtitle: p.degree + " · " + p.department, icon: p.icon, route: "", color: "#8B5CF6" })),
    ...faculty.map((f) => ({ id: f.id, title: f.name, subtitle: f.designation + " · " + f.department, icon: f.icon, route: "", color: neu.success })),
  ]

  const filtered = query.trim()
    ? all.filter((r) => r.title.toLowerCase().includes(query.toLowerCase()) || r.subtitle.toLowerCase().includes(query.toLowerCase()))
    : []

  return (
    <View className="flex-1" style={{ backgroundColor: neu.bg }}>
      <View className="px-5 pt-14 pb-3" style={{ backgroundColor: neu.midnight }}>
        <View className="flex-row items-center">
          <Pressable onPress={() => router.back()} className="mr-3">
            <Ionicons name="arrow-back" size={22} color="#FFFFFF" />
          </Pressable>
          <View className="flex-1 flex-row items-center rounded-2xl px-4 py-2" style={{ backgroundColor: "rgba(255,255,255,0.12)" }}>
            <Ionicons name="search" size={18} color="rgba(255,255,255,0.5)" />
            <TextInput
              autoFocus
              value={query}
              onChangeText={setQuery}
              placeholder="Search notices, events, programs..."
              placeholderTextColor="rgba(255,255,255,0.35)"
              className="flex-1 ml-2.5 text-sm text-white"
              style={{ outline: "none" }}
            />
            {query.length > 0 && (
              <Pressable onPress={() => setQuery("")}>
                <Ionicons name="close-circle" size={18} color="rgba(255,255,255,0.5)" />
              </Pressable>
            )}
          </View>
        </View>
      </View>

      <ScrollView className="flex-1 px-5 pt-5">
        {filtered.length > 0 && (
          <Text className="text-xs font-semibold mb-3" style={{ color: neu.textLight }}>{filtered.length} result{filtered.length !== 1 ? "s" : ""}</Text>
        )}
        {filtered.map((r) => (
          <Pressable key={r.id + r.title} className="mb-2 active:opacity-80" onPress={() => router.push(r.route as any)}>
            <Card radius={neu.radius.md}>
              <View className="flex-row items-center">
                <CircleIcon size={40} color={r.color}>
                  <Ionicons name={r.icon} size={18} color={r.color} />
                </CircleIcon>
                <View className="flex-1 ml-3">
                  <Text className="text-sm font-bold" style={{ color: neu.text }} numberOfLines={1}>{r.title}</Text>
                  <Text className="text-[11px] mt-0.5" style={{ color: neu.textMuted }}>{r.subtitle}</Text>
                </View>
                <Ionicons name="chevron-forward" size={16} color={neu.textLight} />
              </View>
            </Card>
          </Pressable>
        ))}
        {query.trim() && filtered.length === 0 && (
          <View className="items-center py-16">
            <CircleIcon size={60} color={neu.textLight}>
              <Ionicons name="search-outline" size={26} color={neu.textLight} />
            </CircleIcon>
            <Text className="text-sm font-bold mt-4" style={{ color: neu.textMuted }}>No results found</Text>
            <Text className="text-xs mt-1" style={{ color: neu.textLight }}>Try a different search term</Text>
          </View>
        )}
      </ScrollView>
    </View>
  )
}
