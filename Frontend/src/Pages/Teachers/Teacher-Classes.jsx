import SideBar from "../../Components/Teachers/SideBar"
import ClassPannel from "../../Components/Teachers/ClassPannel"
import Footer from '../../Components/Teachers/Footer'
export default function TeacherClasses(){
    return(
        <section className="flex w-screen bg-[#0B0F19]">
           <SideBar/>
           <ClassPannel/>
           <Footer/>
        </section>
    )
}