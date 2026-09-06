import NavBar from '../Components/Navbar'
import AuthLoginCard from '../Components/AuthCardLogin'
import Footer from '../Components/Footer'
export default function LoginPage(){

    return(
     <section className='flex flex-col  bg-[#0B0F19]'>
        <NavBar/>
        <AuthLoginCard/>
        <Footer/>
     </section>
    )
}