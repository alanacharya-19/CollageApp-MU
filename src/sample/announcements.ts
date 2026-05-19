import React from "react"
import type { Ionicons } from "@expo/vector-icons"

export interface Announcement {
  id: string
  title: string
  description: string
  date: string
  category: "academic" | "event" | "exam" | "general" | "achievement"
  isNew?: boolean
  icon: React.ComponentProps<typeof Ionicons>["name"]
}

export const announcements: Announcement[] = [
  {
    id: "1",
    title: "Mid-Term Examination Schedule",
    description: "The final exam timetable for Spring 2026 semester has been published. Check your departmental notice board.",
    date: "May 19, 2026",
    category: "exam",
    isNew: true,
    icon: "document-text",
  },
  {
    id: "2",
    title: "Annual Tech Fest - Innovate 2026",
    description: "Registrations are now open for the biggest technical festival with prizes worth ₹2 Lakhs.",
    date: "May 17, 2026",
    category: "event",
    isNew: true,
    icon: "flash",
  },
  {
    id: "3",
    title: "Library Extended Hours",
    description: "Library will remain open 24x7 during the examination period starting from May 20th.",
    date: "May 15, 2026",
    category: "academic",
    icon: "book",
  },
  {
    id: "4",
    title: "Campus Wi-Fi Upgrade",
    description: "Network maintenance scheduled this weekend. Expect intermittent connectivity on Saturday.",
    date: "May 13, 2026",
    category: "general",
    icon: "wifi",
  },
  {
    id: "5",
    title: "Merit Scholarship Results",
    description: "Congratulations to all recipients of the Academic Excellence Scholarship for 2026-27.",
    date: "May 11, 2026",
    category: "achievement",
    icon: "trophy",
  },
]
