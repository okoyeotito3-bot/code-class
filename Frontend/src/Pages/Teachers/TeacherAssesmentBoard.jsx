import SideBar from "../../Components/Teachers/SideBar"
import Footer from '../../Components/Teachers/Footer'
import AssesementPanel from "../../Components/Teachers/AssesementPanel"
export default function TeacherAssesmentBoard(){
    return(
       <section className="w-full flex bg-[#0B0F19]">
         <SideBar/>
         <AssesementPanel/>
         <Footer/>
       </section>
    )
}


