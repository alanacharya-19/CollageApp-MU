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
  type: "academic" | "cultural" | "sports" | "workshop" | "career"
  attendees: number
  icon: React.ComponentProps<typeof Ionicons>["name"]
  featured?: boolean
  description?: string
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
    featured: true,
    description: "Annual technical symposium featuring keynote speakers, paper presentations, hackathons and coding competitions.",
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
    description: "A grand celebration of music, dance, drama and arts showcasing talent from across the university.",
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
    description: "Annual football championship between departments. Semi-finals and finals on the same day.",
  },
  {
    id: "4",
    title: "AI & ML Workshop",
    date: "Jun 10, 2026",
    month: "JUN",
    day: "10",
    time: "2:00 PM - 5:00 PM",
    location: "CS Seminar Hall",
    type: "workshop",
    attendees: 150,
    icon: "code-slash",
    description: "Hands-on workshop on building machine learning models with Python. Bring your laptops!",
  },
  {
    id: "5",
    title: "Placement Drive - TechCorp",
    date: "Jun 15, 2026",
    month: "JUN",
    day: "15",
    time: "9:00 AM - 4:00 PM",
    location: "Placement Cell",
    type: "career",
    attendees: 300,
    icon: "briefcase",
    description: "TechCorp is hiring final year students. Registrations open for all branches.",
  },
  {
    id: "6",
    title: "Photography Exhibition",
    date: "Jun 18, 2026",
    month: "JUN",
    day: "18",
    time: "10:00 AM - 6:00 PM",
    location: "Fine Arts Block",
    type: "cultural",
    attendees: 500,
    icon: "camera",
    description: "Showcasing the best photographs captured by students throughout the year.",
  },
  {
    id: "7",
    title: "Research Paper Submission",
    date: "Jun 20, 2026",
    month: "JUN",
    day: "20",
    time: "11:59 PM (Deadline)",
    location: "Online Portal",
    type: "academic",
    attendees: 200,
    icon: "document-text",
    description: "Last date to submit research papers for the University Journal of Science & Technology.",
  },
  {
    id: "8",
    title: "Yoga & Wellness Camp",
    date: "Jun 22, 2026",
    month: "JUN",
    day: "22",
    time: "6:00 AM - 8:00 AM",
    location: "University Lawn",
    type: "workshop",
    attendees: 100,
    icon: "leaf",
    description: "Free yoga session open to all students and staff. Morning refreshments provided.",
  },
]
