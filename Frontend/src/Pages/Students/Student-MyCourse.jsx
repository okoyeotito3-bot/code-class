import SideBar from "../../Components/Students/SideBar";
import CoursePannel from "../../Components/Students/CoursePannel";
import BottomNavigation from "../../Components/Students/ButtomNavigation";

export default function StudentCourse() {
  return (
    <section className="bg-[#0B0F19] flex w-screen h-dvh overflow-hidden">
      <SideBar />
      <CoursePannel />
      <BottomNavigation />
    </section>
  );
}
