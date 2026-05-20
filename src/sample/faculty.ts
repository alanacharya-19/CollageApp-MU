import React from "react"
import type { Ionicons } from "@expo/vector-icons"

export interface Faculty {
  id: string
  name: string
  designation: string
  department: string
  specialization: string
  experience: string
  email: string
  icon: React.ComponentProps<typeof Ionicons>["name"]
  color: string
}

export const faculty: Faculty[] = [
  {
    id: "1",
    name: "Dr. Sarah Chen",
    designation: "Professor & Head",
    department: "Computer Science",
    specialization: "Artificial Intelligence, Machine Learning",
    experience: "18 years",
    email: "sarah.chen@univ.edu",
    icon: "flask",
    color: "#4F46E5",
  },
  {
    id: "2",
    name: "Dr. James Miller",
    designation: "Professor",
    department: "Mathematics",
    specialization: "Linear Algebra, Cryptography",
    experience: "22 years",
    email: "james.miller@univ.edu",
    icon: "calculator",
    color: "#059669",
  },
  {
    id: "3",
    name: "Dr. Priya Sharma",
    designation: "Associate Professor",
    department: "Physics",
    specialization: "Quantum Mechanics, Astrophysics",
    experience: "14 years",
    email: "priya.sharma@univ.edu",
    icon: "planet",
    color: "#D97706",
  },
  {
    id: "4",
    name: "Prof. Emily Davis",
    designation: "Assistant Professor",
    department: "Electronics",
    specialization: "VLSI Design, Embedded Systems",
    experience: "10 years",
    email: "emily.davis@univ.edu",
    icon: "hardware-chip",
    color: "#7C3AED",
  },
  {
    id: "5",
    name: "Dr. Rajesh Kumar",
    designation: "Professor & Dean",
    department: "Mechanical",
    specialization: "Robotics, Thermodynamics",
    experience: "25 years",
    email: "rajesh.kumar@univ.edu",
    icon: "cog",
    color: "#DC2626",
  },
  {
    id: "6",
    name: "Dr. Anita Patel",
    designation: "Associate Professor",
    department: "Chemistry",
    specialization: "Organic Chemistry, Nanomaterials",
    experience: "16 years",
    email: "anita.patel@univ.edu",
    icon: "flask",
    color: "#0891B2",
  },
  {
    id: "7",
    name: "Prof. Michael Brown",
    designation: "Assistant Professor",
    department: "Computer Science",
    specialization: "Data Science, Big Data Analytics",
    experience: "8 years",
    email: "michael.brown@univ.edu",
    icon: "stats-chart",
    color: "#4F46E5",
  },
  {
    id: "8",
    name: "Dr. Sunita Verma",
    designation: "Professor",
    department: "Commerce",
    specialization: "Financial Accounting, Taxation",
    experience: "20 years",
    email: "sunita.verma@univ.edu",
    icon: "wallet",
    color: "#059669",
  },
]
