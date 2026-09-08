import NavBar from '../Components/Navbar'
import Hero from '../Components/HomeComponents/Hero'
import SocialProof from '../Components/HomeComponents/SocialProof'
import Benefits from '../Components/HomeComponents/Benefits'
import HowItWork from '../Components/HomeComponents/HowItWork'
import FeatureCourse from '../Components/HomeComponents/FeaturedCourse'
import InstructorSpotlight from '../Components/HomeComponents/InstructorSpotlight'
import WorkShowCase from '../Components/HomeComponents/WorkFlowShowcase'
import Faq from '../Components/HomeComponents/FAQ'
import FinalCta from '../Components/HomeComponents/Final-Cta'
import Footer from '../Components/Footer'

export default function Home(){
    return(
        <>
       <div className='bg-[#0B0F19] flex flex-col w-screen'>
         <NavBar/>
         <Hero/>
         <SocialProof/>
         <Benefits/>
         <HowItWork/>
         <FeatureCourse/>
         <InstructorSpotlight/>
         <WorkShowCase/>
         <Faq/>
         <FinalCta/>
         <Footer/>
       </div>
        
        
        </>
    )
}


