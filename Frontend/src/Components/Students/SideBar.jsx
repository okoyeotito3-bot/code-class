import {
  Award,
  Book,
  File,
  Grid,
  LogOut,
  Terminal,
  User,
  Video,
} from "lucide-react";
import { Link } from "react-router-dom";


export default function SideBar() {
  return (
   <section className='bg-[#161B26] h-full hidden flex-col justify-between px-6 py-8 md:flex'>
     <div className="flex flex-col gap-10 w-full items-start  ">
       <img src="brand.png" alt="brandlogo"/>
          <div className="flex flex-col gap-2">
             {[
            {icon:Grid,content:'DashBoard'},
            {icon:Book,content:'My Course'},
            {icon:File,content:'Lessons'},
            {icon:Video,content:'Classes'},
            {icon:Terminal,content:'Assessments'},
            {icon:Award,content:'Grades'},
            {icon: User,content:'Profile'},
          ].map((item,index)=> (<div key={index} className="flex gap-3 px-4 py-3 rounded-sm items-center cursor-pointer">
                                  <item.icon className='text-[#2979FF]' size={20}/>
                                   <Link to={`/${item.content.toLowerCase().replace(' ', '-')}`} className="text-[#2979FF] font-['geist'] text-sm font-bold">{item.content}</Link>
                                  </div>))
          
          
          }
        </div>
     </div>
          
         
       <button className="flex gap-4 cursor-pointer w-full items-center mt-auto">
         <LogOut className="text-red-200" size={20}/>
        <span className="text-[#64748B] font-['geist'] text-sm">Log-Out</span>
       </button>

      
    </section>
  );
}
