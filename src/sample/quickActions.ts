import React from "react"
import type { Ionicons } from "@expo/vector-icons"

export interface QuickAction {
  id: string
  label: string
  icon: React.ComponentProps<typeof Ionicons>["name"]
  color: string
  route: string
}

export const quickActions: QuickAction[] = [
  { id: "1", label: "Attendance", icon: "checkbox", color: "#2563EB", route: "/(tabs)/home" },
  { id: "2", label: "Marks", icon: "stats-chart", color: "#8B5CF6", route: "/(tabs)/home" },
  { id: "3", label: "Timetable", icon: "calendar", color: "#F59E0B", route: "/(tabs)/home" },
  { id: "4", label: "Fees", icon: "card", color: "#EF4444", route: "/(tabs)/home" },
  { id: "5", label: "Library", icon: "library", color: "#06B6D4", route: "/(tabs)/home" },
  { id: "6", label: "Profile", icon: "person", color: "#22C55E", route: "/(tabs)/home" },
]
