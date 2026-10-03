import { Award, Book, File, Grid, Menu, Terminal, Video, User, X ,LogOut} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function BottomNavigation() {
  const [open, setOpen] = useState(false);

  return (
    <footer className="flex flex-col md:hidden fixed bottom-0 w-full z-50">
      
      
      <nav 
        className={`absolute bottom-full left-0 w-full flex justify-around py-4 bg-[#161B26] border-b border-[#2979FF]/20
        origin-bottom transition-all duration-300 ease-in-out
        ${open ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"}`}
      >
        {[
          { icon: Terminal, content: "Assessments" },
          { icon: Award, content: "Grades" },
          { icon: User, content: "Profile" },
        ].map((item, index) => (
          <Link
            to={`/${item.content.toLowerCase().replace(" ", "-")}`}
            key={index}
            onClick={() => setOpen(false)} 
            className="flex flex-col gap-1 items-center cursor-pointer"
          >
            <item.icon className="text-[#2979FF]" size={20} />
            <span className="text-[#2979FF] font-['geist'] text-sm font-bold">
              {item.content}
            </span>
          </Link>
        ))}
        <button className="flex gap-4 cursor-pointer items-center border border-red-200 px-4 py-2 rounded-md bg-red-200">
         <LogOut className="text-red-500" size={20}/>
        <span className="font-['geist'] text-sm text-red-500">Log-Out</span>
       </button>
      </nav>
        
      <nav className="flex justify-between py-3 px-2.5 bg-[#161B26]">
        {[
          { icon: Grid, content: "DashBoard" },
          { icon: Book, content: "My Course" },
          { icon: File, content: "Lessons" },
          { icon: Video, content: "Classes" },
        ].map((item, index) => (
          <Link
            to={`/${item.content.toLowerCase().replace(" ", "-")}`}
            key={index}
            className="flex flex-col gap-1 items-center cursor-pointer"
          >
            <item.icon className="text-[#2979FF]" size={20} />
            <span className="text-[#2979FF] font-['geist'] text-sm font-bold">{item.content}</span>
          </Link>
        ))}
        
        <div 
          className="flex flex-col gap-1 items-center cursor-pointer"
          onClick={() => setOpen(prev => !prev)}
        >
          {open ?
          <X className="text-[#2979FF]" size={20}/>:
          <Menu className="text-[#2979FF]" size={20} />}
          <span className="text-[#2979FF] font-['geist'] text-sm font-bold">More</span>
        </div>
      </nav>
    </footer>
  );
}