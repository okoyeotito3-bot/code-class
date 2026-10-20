import SideBar from "../../Components/Teachers/SideBar"
import Overview from  '../../Components/Teachers/OverView'
import Footer from "../../Components/Teachers/Footer"
export default function TeacherDashBoard(){
   
    return(
        <section className="flex bg-[#0B0F19] w-screen">
          <SideBar/>
          <Overview/>
          <Footer/>
        </section>
    )
}