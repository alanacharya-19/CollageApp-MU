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
  { id: "1", label: "Attendance", icon: "checkbox", color: "#2563EB", route: "/modal/profile" },
  { id: "2", label: "Marks", icon: "stats-chart", color: "#8B5CF6", route: "/modal/profile" },
  { id: "3", label: "Timetable", icon: "calendar", color: "#F59E0B", route: "/modal/profile" },
  { id: "4", label: "Fees", icon: "card", color: "#EF4444", route: "/modal/profile" },
  { id: "5", label: "Library", icon: "library", color: "#06B6D4", route: "/search" },
  { id: "6", label: "Profile", icon: "person", color: "#22C55E", route: "/modal/profile" },
]
