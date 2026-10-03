import SideBar from "../../Components/Students/SideBar";
import AssesmentPannel from "../../Components/Students/AssesmentPannel";
import ButtomNavigation from "../../Components/Students/ButtomNavigation";

export default function StudentCourse() {
  return (
    <section className="bg-[#0B0F19] flex w-screen h-dvh overflow-hidden">
      <SideBar />
      <AssesmentPannel />
      <ButtomNavigation />
    </section>
  );
}
