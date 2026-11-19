import { Book, File, Grid, Terminal, User } from "lucide-react";

export const teacherNavItems = [
  { id: 1, icon: Grid, label: "Overview", path: "/teacher-dashboard" },
  { id: 2, icon: User, label: "Students", path: "/teacher-student" },
  { id: 3, icon: File, label: "Classes", path: "/teacher-classes" },
  { id: 4, icon: Terminal, label: "Assessments", path: "/teacher-assessments" },
  { id: 5, icon: Book, label: "Submissions", path: "/teacher-submission" },
];
