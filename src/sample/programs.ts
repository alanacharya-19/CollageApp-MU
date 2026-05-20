import React from "react"
import type { Ionicons } from "@expo/vector-icons"

export interface Program {
  id: string
  name: string
  degree: "B.Tech" | "M.Tech" | "B.Sc" | "M.Sc" | "B.Com" | "MBA" | "Ph.D"
  department: string
  duration: string
  seats: number
  description: string
  icon: React.ComponentProps<typeof Ionicons>["name"]
  category: "engineering" | "science" | "commerce" | "management" | "research"
}

export const programs: Program[] = [
  {
    id: "1",
    name: "Computer Science & Engineering",
    degree: "B.Tech",
    department: "School of Engineering",
    duration: "4 Years",
    seats: 120,
    description: "Comprehensive program covering algorithms, data structures, AI, machine learning, and software engineering principles.",
    icon: "desktop",
    category: "engineering",
  },
  {
    id: "2",
    name: "Electronics & Communication",
    degree: "B.Tech",
    department: "School of Engineering",
    duration: "4 Years",
    seats: 90,
    description: "Focus on electronic devices, communication systems, VLSI design, and embedded systems with hands-on lab training.",
    icon: "hardware-chip",
    category: "engineering",
  },
  {
    id: "3",
    name: "Mechanical Engineering",
    degree: "B.Tech",
    department: "School of Engineering",
    duration: "4 Years",
    seats: 90,
    description: "Covers thermodynamics, fluid mechanics, manufacturing processes, CAD/CAM, and robotics.",
    icon: "cog",
    category: "engineering",
  },
  {
    id: "4",
    name: "Physics",
    degree: "B.Sc",
    department: "School of Sciences",
    duration: "3 Years",
    seats: 60,
    description: "Study of fundamental principles of matter, energy, quantum mechanics, and astrophysics with research opportunities.",
    icon: "planet",
    category: "science",
  },
  {
    id: "5",
    name: "Chemistry",
    degree: "B.Sc",
    department: "School of Sciences",
    duration: "3 Years",
    seats: 60,
    description: "Organic, inorganic, and physical chemistry with modern analytical techniques and laboratory experience.",
    icon: "flask",
    category: "science",
  },
  {
    id: "6",
    name: "Mathematics",
    degree: "B.Sc",
    department: "School of Sciences",
    duration: "3 Years",
    seats: 50,
    description: "Pure and applied mathematics including algebra, calculus, differential equations, and statistical methods.",
    icon: "calculator",
    category: "science",
  },
  {
    id: "7",
    name: "Commerce",
    degree: "B.Com",
    department: "School of Commerce",
    duration: "3 Years",
    seats: 100,
    description: "Accounting, finance, taxation, and business law with practical training in financial software and auditing.",
    icon: "wallet",
    category: "commerce",
  },
  {
    id: "8",
    name: "Business Administration",
    degree: "MBA",
    department: "School of Management",
    duration: "2 Years",
    seats: 60,
    description: "Advanced management education covering strategy, marketing, finance, operations, and leadership skills.",
    icon: "trending-up",
    category: "management",
  },
  {
    id: "9",
    name: "Computer Science (Research)",
    degree: "Ph.D",
    department: "School of Engineering",
    duration: "5 Years",
    seats: 15,
    description: "Doctoral program focused on original research in AI, cybersecurity, data science, or distributed systems.",
    icon: "rocket",
    category: "research",
  },
  {
    id: "10",
    name: "Data Science & Analytics",
    degree: "M.Sc",
    department: "School of Sciences",
    duration: "2 Years",
    seats: 40,
    description: "Interdisciplinary program combining statistics, computer science, and domain knowledge for data-driven decision making.",
    icon: "stats-chart",
    category: "science",
  },
]
