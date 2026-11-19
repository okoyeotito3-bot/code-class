import SideBar from "../../Components/Shared/SideBar";
import OverView from "../../Components/Students/OverView";
import ButtomNavigation from "../../Components/Shared/ButtomNavigation";
import { studentNavItems } from "../../Components/Students/StudentNavItems";

export default function StudentDashboard() {
 
  return (
    <section className="bg-[#0B0F19] flex w-screen h-dvh overflow-hidden">
      <SideBar navItems={studentNavItems} />
      <OverView />
      <ButtomNavigation
        navMenu={studentNavItems.filter((item) => item.id <= 4)}
        moreNavMenu={studentNavItems.filter((item) => item.id > 4)}
      />
    </section>
  );
}
