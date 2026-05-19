export interface Course {
  id: string
  code: string
  name: string
  instructor: string
  progress: number
  grade: string
  color: string
  room: string
}

export const courses: Course[] = [
  { id: "1", code: "CS301", name: "Data Structures & Algorithms", instructor: "Dr. Sarah Chen", progress: 78, grade: "A", color: "#4F46E5", room: "CS Lab 2" },
  { id: "2", code: "MATH205", name: "Linear Algebra", instructor: "Prof. James Miller", progress: 65, grade: "B+", color: "#059669", room: "LH-301" },
  { id: "3", code: "PHY102", name: "Quantum Mechanics", instructor: "Dr. Priya Sharma", progress: 45, grade: "B", color: "#D97706", room: "Science Block A" },
  { id: "4", code: "ENG401", name: "Technical Communication", instructor: "Prof. Emily Davis", progress: 90, grade: "A+", color: "#7C3AED", room: "HL-105" },
]
