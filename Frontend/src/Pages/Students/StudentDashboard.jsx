import SideBar from "../../Components/Students/SideBar";
import OverView from "../../Components/Students/OverView";
import BottomNavigation from "../../Components/Students/ButtomNavigation";

export default function StudentDashboard() {
  return (
    <section className="bg-[#0B0F19] flex w-screen h-dvh overflow-hidden">
      <SideBar />
      <OverView />
      <BottomNavigation />
    </section>
  );
}
