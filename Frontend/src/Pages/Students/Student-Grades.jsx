import SideBar from "../../Components/Students/SideBar";
import GradePannel from "../../Components/Students/GradePannel";
import ButtomNavigation from "../../Components/Students/ButtomNavigation";

export default function Grades() {
  return (
    <section className="bg-[#0B0F19] flex w-screen h-dvh overflow-hidden">
      <SideBar />
      <GradePannel />
      <ButtomNavigation />
    </section>
  );
}
