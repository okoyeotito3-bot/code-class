import NavBar from "../../Components/Navbar"
import AuthCard from "../../Components/AuthCard"
import Footer from "../../Components/Footer"
export default function RegisterPage(){
    return(
       <section className="flex flex-col bg-[#0B0F19] w-full">
         <NavBar />
          <AuthCard/>
          <Footer/>
       </section>
    )
}