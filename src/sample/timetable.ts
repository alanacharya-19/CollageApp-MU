export type Day = "Mon" | "Tue" | "Wed" | "Thu" | "Fri"

export interface ScheduleSlot {
  id: string
  day: Day
  time: string
  course: string
  code: string
  instructor: string
  room: string
  type: "Lecture" | "Lab" | "Tutorial"
}

export const timetable: ScheduleSlot[] = [
  { id: "1", day: "Mon", time: "8:00", course: "Data Structures", code: "CS301", instructor: "Dr. Chen", room: "CS Lab 2", type: "Lecture" },
  { id: "2", day: "Mon", time: "10:00", course: "Linear Algebra", code: "MATH205", instructor: "Prof. Miller", room: "LH-301", type: "Lecture" },
  { id: "3", day: "Mon", time: "14:00", course: "DS Lab", code: "CS301", instructor: "Dr. Chen", room: "CS Lab 2", type: "Lab" },
  { id: "4", day: "Tue", time: "8:00", course: "Quantum Mechanics", code: "PHY102", instructor: "Dr. Sharma", room: "SB-A", type: "Lecture" },
  { id: "5", day: "Tue", time: "11:00", course: "Technical Comm.", code: "ENG401", instructor: "Prof. Davis", room: "HL-105", type: "Tutorial" },
  { id: "6", day: "Tue", time: "15:00", course: "Physics Lab", code: "PHY102", instructor: "Dr. Sharma", room: "SB Lab", type: "Lab" },
  { id: "7", day: "Wed", time: "9:00", course: "Linear Algebra", code: "MATH205", instructor: "Prof. Miller", room: "LH-301", type: "Lecture" },
  { id: "8", day: "Wed", time: "11:00", course: "Data Structures", code: "CS301", instructor: "Dr. Chen", room: "CS Lab 2", type: "Lecture" },
  { id: "9", day: "Thu", time: "8:00", course: "Quantum Mechanics", code: "PHY102", instructor: "Dr. Sharma", room: "SB-A", type: "Lecture" },
  { id: "10", day: "Thu", time: "10:00", course: "Technical Comm.", code: "ENG401", instructor: "Prof. Davis", room: "HL-105", type: "Lecture" },
  { id: "11", day: "Fri", time: "9:00", course: "DS Tutorial", code: "CS301", instructor: "Dr. Chen", room: "CS Lab 2", type: "Tutorial" },
  { id: "12", day: "Fri", time: "11:00", course: "Math Tutorial", code: "MATH205", instructor: "Prof. Miller", room: "LH-301", type: "Tutorial" },
]
