import React from "react"
import type { Ionicons } from "@expo/vector-icons"

export interface Notice {
  id: string
  title: string
  description: string
  date: string
  category: "academic" | "administrative" | "examination" | "general" | "emergency"
  isNew?: boolean
  hasAttachment?: boolean
  icon: React.ComponentProps<typeof Ionicons>["name"]
}

export const notices: Notice[] = [
  {
    id: "1",
    title: "Mid-Term Examination Schedule",
    description: "The final exam timetable for Spring 2026 semester has been published. Students are requested to check their departmental notice boards and download the schedule from the student portal.",
    date: "May 19, 2026",
    category: "examination",
    isNew: true,
    hasAttachment: true,
    icon: "document-text",
  },
  {
    id: "2",
    title: "Library Extended Hours Notification",
    description: "The university library will remain open 24x7 starting May 20th till the end of examination period. All students can avail this facility with valid ID cards.",
    date: "May 17, 2026",
    category: "general",
    isNew: true,
    icon: "book",
  },
  {
    id: "3",
    title: "Campus Maintenance Advisory",
    description: "There will be a scheduled power shutdown in Block A & B on May 22nd from 9:00 AM to 2:00 PM for electrical maintenance. All academic activities will be relocated.",
    date: "May 16, 2026",
    category: "administrative",
    hasAttachment: true,
    icon: "settings",
  },
  {
    id: "4",
    title: "Scholarship Application Deadline",
    description: "Last date to apply for the Merit cum Means Scholarship 2026-27 has been extended to May 30th. Eligible students must submit their applications online.",
    date: "May 15, 2026",
    category: "academic",
    icon: "trophy",
  },
  {
    id: "5",
    title: "Emergency Evacuation Drill",
    description: "Mandatory fire safety and evacuation drill scheduled for all students on May 24th at 10:00 AM. Attendance is compulsory for all hostel residents.",
    date: "May 14, 2026",
    category: "emergency",
    isNew: true,
    icon: "warning",
  },
  {
    id: "6",
    title: "Internship Opportunity Notice",
    description: "Leading tech companies are offering summer internship positions for pre-final year students. Check the placement cell for eligibility criteria and application process.",
    date: "May 12, 2026",
    category: "academic",
    hasAttachment: true,
    icon: "briefcase",
  },
  {
    id: "7",
    title: "Hostel Room Allotment 2026-27",
    description: "Online applications for hostel room allotment for the upcoming academic year are now open. The last date for submission is June 10th.",
    date: "May 10, 2026",
    category: "administrative",
    icon: "business",
  },
  {
    id: "8",
    title: "Anti-Ragging Committee Notice",
    description: "As per Supreme Court guidelines, the Anti-Ragging Committee has been reconstituted for 2026-27. Students can file complaints anonymously through the portal.",
    date: "May 8, 2026",
    category: "general",
    icon: "shield-checkmark",
  },
]
