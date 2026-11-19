import SideBar from "../../Components/Shared/SideBar";
import GradePannel from "../../Components/Students/GradePannel";
import ButtomNavigation from "../../Components/Shared/ButtomNavigation";
import { studentNavItems } from "../../Components/Students/StudentNavItems";
export default function Grades() {
  return (
    <section className="bg-[#0B0F19] flex w-screen h-dvh overflow-hidden">
      <SideBar navItems={studentNavItems} />
      <GradePannel />
      <ButtomNavigation
        navMenu={studentNavItems.filter((item) => item.id <= 4)}
        moreNavMenu={studentNavItems.filter((item) => item.id > 4)}
      />
    </section>
  );
}
