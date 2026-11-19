import SideBar from "../../Components/Shared/SideBar";
import StudentsDirectory from "../../Components/Teachers/StudentsDirectory"
import Footer from '../../Components/Teachers/Footer'
import { teacherNavItems } from "../../Components/Teachers/TeacherNavItems";
export default function TeacherStudent(){

    return(
         <section className="bg-[#0B0F19] flex w-screen h-dvh overflow-hidden">
           <SideBar navItems={teacherNavItems} />
           <StudentsDirectory/>
           <Footer/>
        </section>
    )
}