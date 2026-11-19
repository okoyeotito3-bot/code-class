import SideBar from "../../Components/Shared/SideBar";
import ClassPannel from "../../Components/Teachers/ClassPannel";
import Footer from "../../Components/Teachers/Footer";
import { teacherNavItems } from "../../Components/Teachers/TeacherNavItems";

export default function TeacherClasses() {
  return (
    <section className="bg-[#0B0F19] flex w-screen h-dvh overflow-hidden">
      <SideBar navItems={teacherNavItems} />
      <ClassPannel />
      <Footer />
    </section>
  );
}
