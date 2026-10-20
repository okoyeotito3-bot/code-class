import { Bell } from "lucide-react";

export default function Header({text,subText}){
    const instructorData={
        instructorName:'Otito Okoye',
        instructorRole:'Senior Developer',
        instructorImg:'tutor.jpg'
    }

    return(
        <header className="flex flex-col gap-2 md:flex-row lg:flex-row justify-between w-full">
            <div className="flex flex-col gap-1">
                <span className="text-white font-['geist'] font-extrabold text-lg">{text}</span>
                <span className="text-[#94A3B8] font-['geist'] text-sm">{subText}</span>
            </div>
            <div className="hidden gap-4 items-center md:flex lg:flex">
             <Bell className="fill-[#161B26] text-[#94A3B8]"/>
             <div className="flex items-center gap-3">
                <div className="flex flex-col gap-0.5">
                    <span className="text-white font-['geist'] font-bold text-sm">{instructorData.instructorName}</span>
                    <span className="text-[#FF4081] text-sm font-['Geist-Mono']">{instructorData.instructorRole}</span>
                </div>
                <img src={instructorData.instructorImg} alt="instructor image" className="w-10 h-10 rounded-full object-cover"/>
             </div>
            </div>
        </header>
    )
}