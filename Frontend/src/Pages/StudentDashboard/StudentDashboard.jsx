
import SideBarFrame from "../../Components/StudentDashboardComponents/SidebarFrame";
import StudentBord from "../../Components/StudentDashboardComponents/StudentBoard";
import BottomNavigation from "../../Components/StudentDashboardComponents/ButtomNavigation";

export default function StudentDashboard() {
 
  return (
    
      <section className="bg-[#0B0F19] flex w-screen h-dvh overflow-hidden">
        <SideBarFrame/>
        <StudentBord />
        <BottomNavigation/>
    </section>
  );
}
