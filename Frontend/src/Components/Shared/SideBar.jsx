import { LogOut } from "lucide-react";
import { Link } from "react-router-dom";

export default function SideBar({ navItems }) {
  return (
    <section className="bg-[#161B26] h-full hidden flex-col md:flex">

      <div className="flex flex-col gap-10 w-full items-start justify-between  px-6 py-8 ">
        <img src="brand.png" alt="brandlogo" />

        <div className="flex flex-col gap-2">
          {navItems.map((item, index) => (

            <div key={index} className="flex gap-3 px-4 py-3 rounded-sm items-center cursor-pointer">
              <item.icon className="text-[#2979FF]" size={20} />
              <Link to={item.path} className="text-[#2979FF] font-['geist'] text-sm font-bold">
                {item.label}
              </Link>

            </div>
          ))}
        </div>
      </div>
    

     
      <div className="flex gap-3 px-4 py-3 rounded-sm items-center cursor-pointer mt-auto">
        <LogOut className="text-[#64748B]" size={20} />
        <span className="text-[#64748B] font-['geist'] text-sm">Logout</span>
      </div>
     
    </section>
  );
}