import SideBar from "../../Components/Shared/SideBar";
import Overview from  '../../Components/Teachers/OverView'
import BottomNavigation from "../../Components/Shared/ButtomNavigation";
import { teacherNavItems } from "../../Components/Teachers/TeacherNavItems";    
export default function TeacherDashBoard(){
   
    return(
       <section className="bg-[#0B0F19] flex w-screen h-dvh overflow-hidden">
           <SideBar navItems={teacherNavItems} />
          <Overview/>
          <BottomNavigation
            navMenu={teacherNavItems.filter((item) => item.id <= 4)}
            moreNavMenu={teacherNavItems.filter((item) => item.id > 4)}
          />    
        </section>
    )
}