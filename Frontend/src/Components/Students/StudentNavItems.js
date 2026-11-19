import { Award, Book, File, Grid, Terminal, User, Video } from "lucide-react";

export const studentNavItems = [
  { id: 1, icon: Grid, label: "DashBoard", path: "/student-dashboard" },
  { id: 2, icon: Book, label: "My Course", path: "/my-course" },
  { id: 3, icon: File, label: "Lessons", path: "/lessons" },
  { id: 4, icon: Video, label: "Classes", path: "/classes" },
  { id: 5, icon: Terminal, label: "Assessments", path: "/assessments" },
  { id: 6, icon: Award, label: "Grade", path: "/grades" },
  { id: 7, icon: User, label: "Profile", path: "/profile" },
];
