
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
const [menuIsOpen,setMenu]=useState(false)


  return (
    <>
      <nav className="w-full h-20 flex justify-between p-4 items-center md:px-20">
        <img
          src="brand.png"
          alt="codeclass logo"
          className="w-30 h-auto md:w-37"
        />

        <nav className="hidden text-[14px] gap-8 md:flex md:w-63 md:h-4.5">
          <Link to="/Courses" className=" font-['geist'] font-medium text-[#94A3B8]   cursor-pointer">Courses</Link>
          <a href="/#howItWorks" className=" font-['geist'] font-medium text-[#94A3B8]   cursor-pointer">How It Works</a>
          <a href="#Pricing" className=" font-['geist'] font-medium text-[#94A3B8]   cursor-pointer">Pricing</a>
        </nav>

        <nav className="hidden gap-4 items-center md:flex md:w-57.5 md:h-10.5 ">
          <Link to="/Login"
           className="w-9.25 h-4.5 font-['geist']  text-sm text-[#94A3B8] cursor-pointer" >
             Login
           </Link>
           
          <Link to="/register"
             className="w-44.25 h-10.5 flex items-center justify-center rounded-md py-3 px-6 bg-[#2979FF]  text-[#F8FAFC] cursor-pointer hover:bg-[#1D64D8]">
              Start Learning
           </Link>
        </nav>

        <button className="text-[#94A3B8] cursor-pointer md:hidden" onClick={()=> setMenu(prev => !prev)}>
          {menuIsOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {menuIsOpen && (
        <div className="flex flex-col justify-between gap-4 py-1 md:hidden lg:hidden">
          <nav className="flex flex-col gap-4 px-4 md:hidden lg:hidden">
            <Link to="/Courses" className=" font-['geist'] font-medium text-[#94A3B8] cursor-pointer">Courses</Link>
            <a href="howItWorks" className=" font-['geist'] font-medium text-[#94A3B8] cursor-pointer">How It Works</a>
            <a href="Pricing" className=" font-['geist'] font-medium text-[#94A3B8]  cursor-pointer">Pricing</a>
          </nav>

          <nav className="flex flex-col gap-4 px-4">
            <Link to="/login" className="w-44.25 text-center py-3 px-6 font-['geist'] text-sm font-bold text-white rounded-md  cursor-pointer border-2">
            Login</Link>
            <Link to="/register" className="w-44.25 text-center rounded-md py-3 px-6 font-bold bg-[#2979FF] text-white cursor-pointer hover:bg-[#1D64D8]">
            Start Learning</Link>
          </nav>
        </div>
      )}
    </>
  );
}
