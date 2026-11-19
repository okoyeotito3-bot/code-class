import SideBar from "../../Components/Shared/SideBar";
import Footer from '../../Components/Teachers/Footer'
import AssesementPanel from "../../Components/Teachers/AssesementPanel"
import { teacherNavItems } from "../../Components/Teachers/TeacherNavItems";
export default function TeacherAssesmentBoard(){
    return(
       <section className="bg-[#0B0F19] flex w-screen h-dvh overflow-hidden">
            <SideBar navItems={teacherNavItems} />
         <AssesementPanel/>
         <Footer/>
       </section>
    )
}


