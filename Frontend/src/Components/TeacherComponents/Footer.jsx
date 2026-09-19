import { ArrowBigRight, Book, Grid2X2, LogOut, UserRound, Video} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <footer className="fixed z-50 bottom-0 w-full flex justify-between bg-[#0B0F19] md:hidden">
             <Link to='/teacher-dashboard' className="flex flex-col gap-1 p-2 items-center bg-[#2979FF]/10 rounded-md cursor-pointer">
               <Grid2X2 className="text-[#2979FF]"/>
                <span className="text-[#2979FF] font-['geist'] text-sm font-semibold">Overview</span>
            </Link>
             <Link  to="/teacher-student" className="flex flex-col gap-1 p-2 items-center bg-[#2979FF]/10 rounded-md cursor-pointer">
               <UserRound className="text-[#2979FF]"/>
                 <span className="text-[#2979FF] font-['geist'] text-sm font-semibold">Students</span>
            
            </Link>
             <Link  className="flex flex-col gap-1 p-2 items-center bg-[#2979FF]/10 rounded-md cursor-pointer">
               <Video className="text-[#2979FF]"/>
              <span className="text-[#2979FF] font-['geist'] text-sm font-semibold">Classes</span>
            </Link>
             <Link  className="flex flex-col gap-1 p-2 items-center bg-[#2979FF]/10 rounded-md cursor-pointer">
               <ArrowBigRight className="text-[#2979FF]"/>
                     <span className="text-[#2979FF] font-['geist'] text-sm font-semibold">Assessments</span>
            </Link>
             <Link  className="flex flex-col gap-1 p-2 items-center bg-[#2979FF]/10 rounded-md cursor-pointer">
               <Book className="text-[#2979FF]"/>
                <span className="text-[#2979FF] font-['geist'] text-sm font-semibold">Submissions</span>
            </Link>
        </footer>
    )
}