import Button from '../Utilities/Button'
import UnorderedList from '../Utilities/UnorderedList'
import { Menu,X } from "lucide-react";
import {useState} from 'react'


export default function NavBar(){

const [menuIsOpen,setMenu]=useState(false)

function handleMenu(){
    setMenu(prev => !prev)
}


   return(
 <>

<nav className='w-full h-20 flex justify-between p-4 items-center md:px-20'>
    
    <img src="brand.png" alt="codeclass logo" className="w-[120px] h-auto md:w-[148px]"/>
        
     <UnorderedList
      className='hidden text-[14px]  gap-8 md:flex md:w-[252px] md:h-[18px]'
      list1='Courses'
      list2='How It Works'
      list3='Pricing'
     />
    

    <div className='hidden gap-4  items-center md:flex md:w-[230px] md:h-[42px] '>
     <Button text="Login" className='w-[37px] h-[18px] font-geist font-medium text-[14px] text-[#94A3B8]  cursor-pointer'/>
     <Button text="Start Learning " className='w-[177px] h-[42px] flex items-center justify-center  rounded-[6px] py-3 px-6 bg-[#2979FF] text-[#F8FAFC] cursor-pointer hover:bg-[#1D64D8]'/>
    </div>


   <button 
    className='text-[#94A3B8] md:hidden'
    onClick={handleMenu}>
    {menuIsOpen ? <X/> : <Menu/>}
   </button>
    
    
</nav>

{menuIsOpen && (
  <div className='flex justify-between gap-4  py-1 md:hidden'>

    
     <UnorderedList
       className="flex flex-col gap-4 px-4 md:hidden "
       list1='Courses'
       list2='How It Works'
       list3='Pricing'

     />

    <div className='flex flex-col gap-4 border'>
     <Button text="Login" className='w-[37px] h-[18px] font-geist font-medium text-[14px] text-[#94A3B8] m-auto cursor-pointer'/>
     <Button text="Start Learning " className='w-[177px] h-[42px] flex items-center justify-center  rounded-[6px] py-3 px-6 bg-[#2979FF] text-[#F8FAFC] cursor-pointer hover:bg-[#1D64D8]'/>
    </div>

  
  </div>
)}

 </> 

)}

