import { MenuIcon } from "lucide-react";
import SideBarFrame from "../../Components/StudentDashboardComponents/SidebarFrame";
import StudentCourseBoard from "../../Components/StudentDashboardComponents/StudentCourseBoard";
import { useState } from "react";

export default function StudentCourse() {
  const [sideBarIsOpen, setSideBar] = useState(false);
  return (
    <section className="flex bg-[#0B0F19] w-full ">
      {!sideBarIsOpen && (
        <MenuIcon
          onClick={() => setSideBar(true)}
          className="text-[#2979FF] cursor-pointer fixed right-0 md:hidden"
        />
      )}

      <main className="flex border w-full">
        <SideBarFrame
          closeSideBar={() => setSideBar(false)}
          className={sideBarIsOpen ? "flex" : "hidden"}
        />
       <StudentCourseBoard
       className={sideBarIsOpen ? "hidden" : "flex"}
       />
      </main>
    </section>
  );
}
