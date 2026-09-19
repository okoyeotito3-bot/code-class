import SideBar from "../../Components/TeacherComponents/SideBarFrame"
import TeacherStudentBoard from "../../Components/TeacherComponents/Teacher-StudentBoard"
import Footer from '../../Components/TeacherComponents/Footer'
export default function TeacherStudent(){

    return(
        <section className="bg-[#0B0F19] flex w-screen">
           <SideBar/>
           <TeacherStudentBoard/>
           <Footer/>
        </section>
    )
}