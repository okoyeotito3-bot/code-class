import SideBar from "../../Components/Shared/SideBar";
import BottomNavigation from "../../Components/Shared/ButtomNavigation";
import SubmissionPanel from "../../Components/Teachers/SubmissionPanel";
import { teacherNavItems } from "../../Components/Teachers/TeacherNavItems";

export default function TeacherSubmissionBoard() {
  return (
    <section className="bg-[#0B0F19] flex w-screen h-dvh overflow-hidden">
      <SideBar navItems={teacherNavItems} />
      <SubmissionPanel />
      <BottomNavigation
        navMenu={teacherNavItems.filter((item) => item.id <= 4)}
        moreNavMenu={teacherNavItems.filter((item) => item.id > 4)}
      />
    </section>
  );
}
