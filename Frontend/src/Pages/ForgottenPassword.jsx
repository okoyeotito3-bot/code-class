import NavBar from '../Components/Navbar'
import AuthCardForgottenPass from '../Components/AuthCardForgottenPas'
import Footer from '../Components/Footer'

export default function ForgottenPassword(){
    return(
        <section className='bg-[#0B0F19] w-full flex flex-col'>
        <NavBar/>
        <AuthCardForgottenPass/>
         <Footer/>
        </section>
    )
}