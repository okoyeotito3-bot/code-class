import { ArrowBigRight, Book, Grid2X2, LogOut, UserRound, Video, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function SideBar(){
    
    return(
        <aside className="flex-col bg-[#161B26] pt-2 gap-6 items-start hidden md:flex">
    
        <img src="brand.png" alt="Code Class Logo" className="mt-4 w-9/12"/>
        <p className="bg-[#FF4081]/10 px-2.5 py-1 rounded-[20px] text-[#FF4081] font-['Geist-Mono'] font-semibold text-sm">INSTRUCTOR PORTAL</p>
        <div className="flex flex-col gap-4">
                <Link to='/teacher-dashboard' className="flex gap-3 px-4 py-3 bg-[#2979FF]/10 rounded-md cursor-pointer">
               <Grid2X2 className="text-[#2979FF]"/>
               <span className="text-[#2979FF] font-['geist'] text-sm font-semibold">Overview</span>
            </Link>
             <Link className="flex gap-3 px-4 py-3 bg-[#2979FF]/10 rounded-md cursor-pointer">
               <UserRound className="text-[#2979FF]"/>
               <span className="text-[#2979FF] font-['geist'] text-sm font-semibold">Students</span>
            </Link>
             <Link className="flex gap-3 px-4 py-3 bg-[#2979FF]/10 rounded-md cursor-pointer">
               <Video className="text-[#2979FF]"/>
               <span className="text-[#2979FF] font-['geist'] text-sm font-semibold">Classes</span>
            </Link>
             <Link className="flex gap-3 px-4 py-3 bg-[#2979FF]/10 rounded-md cursor-pointer">
               <ArrowBigRight className="text-[#2979FF]"/>
               <span className="text-[#2979FF] font-['geist'] text-sm font-semibold">Assessments</span>
            </Link>
             <Link className="flex gap-3 px-4 py-3 bg-[#2979FF]/10 rounded-md cursor-pointer">
               <Book className="text-[#2979FF]"/>
               <span className="text-[#2979FF] font-['geist'] text-sm font-semibold">Submissions</span>
            </Link>
        </div>
        <div className="flex gap-3 px-4 py-3 cursor-pointer mt-auto">
            <LogOut className="text-[#64748B]"/>
            <span className="text-[#64748B] font-['geist'] text-sm">Log Out</span>
        </div>
        </aside>
    )
}