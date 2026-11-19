import { Book, File, Grid, Terminal, User } from "lucide-react";

export const teacherNavItems = [
  { icon: Grid, label: "Overview", path: "/teacher-dashboard" },
  { icon: User, label: "Students", path: "/teacher-student" },
  { icon: File, label: "Classes", path: "/teacher-classes" },
  { icon: Terminal, label: "Assessments", path: "/teacher-assessments" },
  { icon: Book, label: "Submissions", path: "/teacher-submission" },
];
