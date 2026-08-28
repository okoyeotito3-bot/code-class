import NavBar from '../Components/Navbar'
import Hero from '../Components/Hero'
import SocialProof from '../Components/SocialProof'
import Benefits from '../Components/Benefits'
import HowItWork from '../Components/HowItWork'
import FeatureCourse from '../Components/FeaturedCourse'
import InstructorSpotlight from '../Components/InstructorSpotlight'

export default function Home(){
    return(
        <>
       <div className='bg-[#0B0F19]'>
         <NavBar/>
         <Hero/>
         <SocialProof/>
         <Benefits/>
         <HowItWork/>
         <FeatureCourse/>
         <InstructorSpotlight/>
       </div>
        
        
        </>
    )
}


