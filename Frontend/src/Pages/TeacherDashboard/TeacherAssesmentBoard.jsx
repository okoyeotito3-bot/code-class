import SideBar from "../../Components/TeacherComponents/SideBarFrame"
import Footer from '../../Components/TeacherComponents/Footer'
import TeacherAssesmentPannel from "../../Components/TeacherComponents/TeacherAssesementPanel"
export default function TeacherAssesmentBoard(){
    return(
       <section className="w-full flex bg-[#0B0F19]">
         <SideBar/>
         <TeacherAssesmentPannel/>
         <Footer/>
       </section>
    )
}