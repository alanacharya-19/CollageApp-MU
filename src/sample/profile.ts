export interface UserProfile {
  name: string
  id: string
  email: string
  phone: string
  department: string
  year: string
  semester: string
  cgpa: string
  avatar: string
}

export const userProfile: UserProfile = {
  name: "Alex Johnson",
  id: "STU-2024-0042",
  email: "alex.johnson@univ.edu",
  phone: "+1 (555) 123-4567",
  department: "Computer Science",
  year: "3rd Year",
  semester: "Spring 2026",
  cgpa: "8.76",
  avatar: "",
}
