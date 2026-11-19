import SideBar from "../../Components/Shared/SideBar";
import StudentsDirectory from "../../Components/Teachers/StudentsDirectory"
import BottomNavigation from "../../Components/Shared/ButtomNavigation";
import { teacherNavItems } from "../../Components/Teachers/TeacherNavItems";
export default function TeacherStudent(){

    return(
         <section className="bg-[#0B0F19] flex w-screen h-dvh overflow-hidden">
           <SideBar navItems={teacherNavItems} />
           <StudentsDirectory/>
           <BottomNavigation
             navMenu={teacherNavItems.filter((item) => item.id <= 4)}
             moreNavMenu={teacherNavItems.filter((item) => item.id > 4)}
           />
        </section>
    )
}