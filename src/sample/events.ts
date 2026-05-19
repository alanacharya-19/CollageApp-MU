import React from "react"
import type { Ionicons } from "@expo/vector-icons"

export interface UniversityEvent {
  id: string
  title: string
  date: string
  month: string
  day: string
  time: string
  location: string
  type: "academic" | "cultural" | "sports" | "workshop"
  attendees: number
  icon: React.ComponentProps<typeof Ionicons>["name"]
}

export const events: UniversityEvent[] = [
  {
    id: "1",
    title: "Tech Symposium 2026",
    date: "May 25, 2026",
    month: "MAY",
    day: "25",
    time: "10:00 AM - 5:00 PM",
    location: "Main Auditorium",
    type: "academic",
    attendees: 1200,
    icon: "flask",
  },
  {
    id: "2",
    title: "Cultural Fest - Rhythms",
    date: "Jun 2, 2026",
    month: "JUN",
    day: "02",
    time: "9:00 AM onwards",
    location: "Open Air Theatre",
    type: "cultural",
    attendees: 2500,
    icon: "musical-notes",
  },
  {
    id: "3",
    title: "Inter-Department Football",
    date: "Jun 5, 2026",
    month: "JUN",
    day: "05",
    time: "3:00 PM - 6:00 PM",
    location: "University Sports Ground",
    type: "sports",
    attendees: 400,
    icon: "football",
  },
  {
    id: "4",
    title: "AI & ML Workshop Series",
    date: "Jun 10, 2026",
    month: "JUN",
    day: "10",
    time: "2:00 PM - 5:00 PM",
    location: "CS Seminar Hall",
    type: "workshop",
    attendees: 150,
    icon: "code-slash",
  },
]
