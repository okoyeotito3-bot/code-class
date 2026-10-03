import SideBar from "../../Components/Students/SideBar";
import LessonPannel from "../../Components/Students/LessonPannel";
import ButtomNavigation from "../../Components/Students/ButtomNavigation";

export default function LessonBoard() {
  return (
    <section className="bg-[#0B0F19] flex w-screen h-dvh overflow-hidden">
      <SideBar />
      <LessonPannel />
      <ButtomNavigation />
    </section>
  );
}
