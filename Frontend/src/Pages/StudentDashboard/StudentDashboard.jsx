import { HamburgerIcon, MenuIcon } from "lucide-react"
import SideBarFrame from "../../Components/StudentDashboardComponents/SidebarFrame"
import StudentBord from "../../Components/StudentDashboardComponents/StudentBoard"
import { useState } from "react"

export default function StudentDashboard(){
    const[sideBarIsOpen,setSideBar]=useState(false);
    return(
        <section className="flex bg-[#0B0F19]">
         <MenuIcon onClick={()=>setSideBar(true)} className={sideBarIsOpen ?"hidden":"text-[#2979FF] cursor-pointer fixed md:hidden lg:hidden"}/>
         <main className="flex mt-auto">
            <SideBarFrame
          closeSideBar={()=>setSideBar(false)}
          className={sideBarIsOpen ? 'translate-x-0': 'translate-x-[-100%]' }
         />
         <StudentBord/>
         </main>
        </section>
    )
}
