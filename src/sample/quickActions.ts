import React from "react"
import type { Ionicons } from "@expo/vector-icons"

export interface QuickAction {
  id: string
  label: string
  icon: React.ComponentProps<typeof Ionicons>["name"]
  gradient: [string, string]
  route: string
}

export const quickActions: QuickAction[] = [
  { id: "1", label: "Attendance", icon: "checkbox", gradient: ["#4F46E5", "#6366F1"], route: "/(tabs)/home" },
  { id: "2", label: "Marks", icon: "stats-chart", gradient: ["#059669", "#10B981"], route: "/(tabs)/home" },
  { id: "3", label: "Timetable", icon: "calendar", gradient: ["#D97706", "#F59E0B"], route: "/(tabs)/home" },
  { id: "4", label: "Fees", icon: "card", gradient: ["#DC2626", "#EF4444"], route: "/(tabs)/home" },
  { id: "5", label: "Library", icon: "library", gradient: ["#7C3AED", "#8B5CF6"], route: "/(tabs)/home" },
  { id: "6", label: "Profile", icon: "person", gradient: ["#0891B2", "#06B6D4"], route: "/(tabs)/home" },
]
