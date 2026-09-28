import SideBar from '../../Components/TeacherComponents/SideBarFrame'
import Footer from '../../Components/TeacherComponents/Footer'
import TeacherSubmissionPannel from '../../Components/TeacherComponents/TeacherSubmissionPanel'
export default function TeacherSubmissionBoard(){
    return(
        <section className='flex w-full bg-[#0B0F19]'>
         <SideBar/>
         <TeacherSubmissionPannel/>
         <Footer/>
        </section>
    )
}