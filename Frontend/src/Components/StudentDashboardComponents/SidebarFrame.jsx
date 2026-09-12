import {
  Award,
  Book,
  File,
  Grid,
  LogOut,
  Terminal,
  User,
  Video,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";


export default function SideBarFrame({logOutOfDashaorad,closeSideBar,className}) {
  return (
   <section
  className={`bg-[#161B26] flex-col px-6 py-8 transition-transform duration-500 md:flex lg:flex ${className}`}>
      <div className="flex flex-col gap-20">
      <div className="flex justify-between">
          <img src="brand.png" alt="brandlogo" />
          <X className="text-[#2979FF] cursor-pointer md:hidden lg:hidden" size={20} onClick={closeSideBar}/>
      </div>
        <div className="flex flex-col gap-2 items-start">
          <div className="flex gap-3 px-4 py-3 rounded-sm items-center cursor-pointer  w-full">
            <Grid  className="text-[#2979FF]" size={20}/>
            <Link to='/student-dashboard' className="text-[#2979FF] font-['geist'] text-sm font-bold">DashBoard</Link>
          </div>
          <div className="flex gap-3 px-4 py-3 rounded-sm items-center cursor-pointer  w-full">
            <Book className="text-[#2979FF]" size={20}/>
            <Link to='/student-course' className="text-[#2979FF] font-['geist'] text-sm font-bold">My Course</Link>
          </div>
          <div className="flex gap-3 px-4 py-3 rounded-sm items-center cursor-pointer  w-full">
            <File className="text-[#2979FF]" size={20}/>
            <p className="text-[#2979FF] font-['geist'] text-sm font-bold">Lessons</p>
          </div>
          <div className="flex gap-3 px-4 py-3 rounded-sm items-center cursor-pointer  w-full">
            <Video className="text-[#2979FF]" size={20}/>
            <p className="text-[#2979FF] font-['geist'] text-sm font-bold">Classes</p>
          </div>
          <div className="flex gap-3 px-4 py-3 rounded-sm items-center cursor-pointer  w-full">
            <Terminal className="text-[#2979FF]" size={20}/>
            <p className="text-[#2979FF] font-['geist'] text-sm font-bold">Assessments</p>
          </div>
          <div className="flex gap-3 px-4 py-3 rounded-sm items-center cursor-pointer  w-full">
            <Award className="text-[#2979FF]" size={20}/>
            <p className="text-[#2979FF] font-['geist'] text-sm font-bold">Grade</p>
          </div>
          <div className="flex gap-3 px-4 py-3 rounded-sm items-center cursor-pointer  w-full">
            <User className="text-[#2979FF]" size={20}/>
            <p className="text-[#2979FF] font-['geist'] text-sm font-bold">Profile</p>
          </div>
        </div>

       <div className="flex gap-4 cursor-pointer w-full items-center" onClick={logOutOfDashaorad}>
         <LogOut className="text-red-200" size={20}/>
        <p className="text-[#64748B] font-['geist'] text-sm">Log-Out</p>
       </div>
      </div>
    </section>
  );
}
