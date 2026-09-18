import SideBar from "../../Components/TeacherComponents/SideBarFrame"
import Dashboard from "../../Components/TeacherComponents/Teacher-Dashboard"
import Footer from "../../Components/TeacherComponents/Footer"
export default function TeacherDashBoard(){
   
    return(
        <section className="flex bg-[#0B0F19] w-screen">
          <SideBar/>
          <Dashboard/>
          <Footer/>
        </section>
    )
}