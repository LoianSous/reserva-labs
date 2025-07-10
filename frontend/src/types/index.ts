export interface User {
  id: string
  name: string
  email: string
  role: "student" | "teacher" | "admin"
  department: string
  campus: string
  memberSince: string
}

export interface Lab {
  id: string
  name: string
  type: string
  category: string
  capacity: number
  status: "available" | "occupied" | "maintenance"
  equipment: string[]
}

export interface Appointment {
  id: string
  labId: string
  studentName: string
  responsibleName: string
  startDate: string
  endDate: string
  startTime: string
  endTime: string
  participants: string[]
  description: string
  notes: string
  status: "pending" | "approved" | "rejected"
}
