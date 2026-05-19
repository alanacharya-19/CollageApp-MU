import React from "react"
import type { Ionicons } from "@expo/vector-icons"

export interface Stat {
  id: string
  label: string
  value: string
  icon: React.ComponentProps<typeof Ionicons>["name"]
  color: string
  bgColor: string
}

export const stats: Stat[] = [
  { id: "1", label: "Total Students", value: "12,450", icon: "people", color: "#4F46E5", bgColor: "#EEF2FF" },
  { id: "2", label: "Faculty", value: "680", icon: "school", color: "#059669", bgColor: "#ECFDF5" },
  { id: "3", label: "Programs", value: "45+", icon: "layers", color: "#D97706", bgColor: "#FFFBEB" },
  { id: "4", label: "Placements", value: "92%", icon: "trending-up", color: "#DC2626", bgColor: "#FEF2F2" },
]
