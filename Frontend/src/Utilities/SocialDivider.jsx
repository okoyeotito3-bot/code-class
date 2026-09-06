export default function SocialDivider({dividerText}) {
  return (
    <div className="w-full">
    <div className="flex items-center justify-center gap-0.5 w-full">
       <div className="w-1/3 bg-white h-0.5"></div>
     <span className="text-[#7C7C8A]">{dividerText}</span>
     <div className="w-1/3 bg-white h-0.5"></div>
    </div>
    </div>
  );
}