import SideBar from '../../Components/Teachers/SideBar'
import Footer from '../../Components/Teachers/Footer'
import SubmissionPanel from '../../Components/Teachers/SubmissionPanel'
export default function TeacherSubmissionBoard(){
    return(
        <section className='flex w-full bg-[#0B0F19]'>
         <SideBar/>
         <SubmissionPanel/>
         <Footer/>
        </section>
    )
}