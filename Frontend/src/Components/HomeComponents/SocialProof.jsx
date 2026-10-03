export default function SocialProof() {
  return (
    <div className="w-full bg-[#242E42] grid grid-cols-2 gap-3 p-4 mt-4  md:grid-cols-4 md:px-20 md:py-10">
      {
        [
          { value: "2,500+", label: "Active Students" },
          { value: "95%", label: "Completion Rate" },
          { value: "4.9/5", label: "Average Rating" },
         { value: "24/7", label: "Live Mentors" },
        ].map(socialProof =>{
          return(
            <div className="flex gap-1 flex-col items-center">
              <span className="text-[#5491FF] font-[Geist-Mono] font-bold text-[22px]">{socialProof.value}</span>
              <span className="font-['geist'] text-[#94A3B8] font-md text-sm">{socialProof.label}</span>
            </div>
          )
        })
      }
    </div>
  );
}
