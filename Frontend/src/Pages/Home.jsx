import NavBar from '../Components/Navbar'
import Hero from '../Components/Hero'
import SocialProof from '../Components/SocialProof'
import Benefits from '../Components/Benefits'

export default function Home(){
    return(
        <>
       <div className='bg-[#0B0F19]'>
         <NavBar/>
         <Hero/>
         <SocialProof/>
         <Benefits/>
       </div>
        
        
        </>
    )
}


