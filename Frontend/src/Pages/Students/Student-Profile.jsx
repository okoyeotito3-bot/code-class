import SideBar from "../../Components/Students/SideBar";
import ProfilePannel from "../../Components/Students/ProfilePannel";
import BottomNavigation from "../../Components/Students/ButtomNavigation";

export default function Profile() {
  return (
    <section className="bg-[#0B0F19] flex w-screen h-dvh overflow-hidden">
      <SideBar />
      <ProfilePannel />
      <BottomNavigation />
    </section>
  );
}
