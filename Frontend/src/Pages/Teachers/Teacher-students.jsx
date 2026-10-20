import SideBar from "../../Components/Teachers/SideBar"
import StudentsDirectory from "../../Components/Teachers/StudentsDirectory"
import Footer from '../../Components/Teachers/Footer'
export default function TeacherStudent(){

    return(
        <section className="bg-[#0B0F19] flex w-screen">
           <SideBar/>
           <StudentsDirectory/>
           <Footer/>
        </section>
    )
}