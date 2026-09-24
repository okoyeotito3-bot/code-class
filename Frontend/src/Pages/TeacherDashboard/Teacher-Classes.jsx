import SideBar from "../../Components/TeacherComponents/SideBarFrame"
import TeacherClassBoard from "../../Components/TeacherComponents/Teacher-ClassBoard"
import Footer from '../../Components/TeacherComponents/Footer'
export default function TeacherClasses(){
    return(
        <section className="flex w-screen bg-[#0B0F19]">
           <SideBar/>
           <TeacherClassBoard/>
           <Footer/>
        </section>
    )
}