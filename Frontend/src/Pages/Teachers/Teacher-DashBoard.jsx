import SideBar from "../../Components/Shared/SideBar";
import Overview from  '../../Components/Teachers/OverView'
import Footer from "../../Components/Teachers/Footer"
import { teacherNavItems } from "../../Components/Teachers/TeacherNavItems";    
export default function TeacherDashBoard(){
   
    return(
       <section className="bg-[#0B0F19] flex w-screen h-dvh overflow-hidden">
           <SideBar navItems={teacherNavItems} />
          <Overview/>
          <Footer/>
        </section>
    )
}