import SideBar from "../../Components/Shared/SideBar";
import ProfilePannel from "../../Components/Students/ProfilePannel";
import ButtomNavigation from "../../Components/Shared/ButtomNavigation";
import { studentNavItems } from "../../Components/Students/StudentNavItems";
export default function Profile() {
  return (
    <section className="bg-[#0B0F19] flex w-screen h-dvh overflow-hidden">
      <SideBar navItems={studentNavItems} />
      <ProfilePannel />
      <ButtomNavigation
        buttomNavMenu={studentNavItems.filter((item) => item.id <= 4)}
        moreMenu={studentNavItems.filter((item) => item.id > 4)}
      />
    </section>
  );
}
