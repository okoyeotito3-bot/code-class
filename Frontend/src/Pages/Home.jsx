import NavBar from '../Components/Navbar'
import Hero from '../Components/Hero'
import SocialProof from '../Components/SocialProof'
import Benefits from '../Components/Benefits'
import HowItWork from '../Components/HowItWork'
import FeatureCourse from '../Components/FeaturedCourse'
import InstructorSpotlight from '../Components/InstructorSpotlight'
import WorkShowCase from '../Components/WorkFlowShowcase'
import Faq from '../Components/FAQ'
import FinalCta from '../Components/Final-Cta'
import Footer from '../Components/Footer'

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
         <WorkShowCase/>
         <Faq/>
         <FinalCta/>
         <Footer/>
       </div>
        
        
        </>
    )
}


