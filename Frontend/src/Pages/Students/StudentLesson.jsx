import SideBar from "../../Components/Shared/SideBar";
import LessonPannel from "../../Components/Students/LessonPannel";
import ButtomNavigation from "../../Components/Shared/ButtomNavigation";
import { studentNavItems } from "../../Components/Students/StudentNavItems";  

export default function LessonBoard() {
  return (
    <section className="bg-[#0B0F19] flex w-screen h-dvh overflow-hidden">
      <SideBar   navItems={studentNavItems}/>
      <LessonPannel />
       <ButtomNavigation 
            navMenu={studentNavItems.filter(item => item.id <= 4)}
            moreNavMenu={studentNavItems.filter(item => item.id > 4)}
            />
    </section>
  );
}
