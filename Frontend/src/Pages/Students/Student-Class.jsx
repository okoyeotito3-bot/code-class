import SideBar from "../../Components/Students/SideBar";
import ClassPannel from "../../Components/Students/ClassPannel";
import ButtomNavigation from "../../Components/Students/ButtomNavigation";

export default function Classes() {
  return (
    <section className="bg-[#0B0F19] flex w-screen h-dvh overflow-hidden">
      <SideBar />
      <ClassPannel />
      <ButtomNavigation />
    </section>
  );
}
