import {Bell,UserRound} from 'lucide-react'
export default function BoardHeader({text,subtext}) {
       let UserImage = "";
  return (
    <header className="w-full pb-8 flex flex-col gap-4 justify-between md:flex-row lg:flex-row">
      <div className="flex flex-col gap-1">
        <span className="font-extrabold font-['geist'] text-white text-lg">
         {text}
        </span>
        <span className="text-[#94A3B8] font-['geist'] text-sm">
         {subtext}
        </span>
      </div>
      <div className="flex sm: gap-8">
        <Bell className="text-[#94A3B8]" size={20} />
        <div className="">
          {UserImage ? (
            <img src="" alt="" />
          ) : (
            <UserRound  size={20} className="text-[#94A3B8]" />
          )}
        </div>
      </div>
    </header>
  );
}
