import BoardHeader from "./studentDashBoardHeader"
export default function GradeBoard({className}){
    return(
        <section className={`w-full flex flex-col gap-8 p-10  ${className}`}>
          <BoardHeader
           text='Grades & Feedback Hub'
           subtext='Review performance scores and detailed software engineer critiques.'
          />
          <section className="flex flex-col md:flex-row lg:flex-row gap-8">
            <div className="flex flex-col gap-6 w-full flex-2">
             <div className="bg-[#161B26] flex gap-4 p-6 rounded-md justify-between">
                   <div className="flex flex-col gap-1">
                    <span className="text-[#94A3B8] font-['geist'] text-sm">OVERALL GPA</span>
                    <span className="text-[#00E676] font-extrabold font-2xl font-['Geist-Mono']">A- (92%)</span>
                </div>
                <div className="flex flex-col gap-1">
                   <span className="text-[#94A3B8] font-['geist'] text-sm">RANK</span>
                   <span className="text-[#2979FF] font-extrabold font-2xl font-['Geist-Mono'] ">14 / 150</span>
                </div>
             </div>
             <div className="flex flex-col gap-3">
                <div className="flex flex-col md:flex-row lg:flex-row gap-4 p-5 bg-[#161B26] rounded-md justify-between">
                    <div className="flex flex-col gap-1">
                        <p className="text-white font-['geist'] font-bold text-sm">Assessment 2: Data Structures & Algorithms</p>
                        <p className="text-[#94A3B8] font-['geist'] text-sm">Graded on Jan 12, 2026</p>
                    </div>
                    <div className="flex gap-6 items-center justify-between">
                        <p className=" text-[#00E676] font-bold font-['Geist-Mono'] text-base">92/100</p>
                       <button className="bg-[#2979FF] text-center px-3 py-1.5 rounded-sm text-white font-semibold font-['geist'] text-sm cursor-pointer">View Feedback</button>
                    </div>
                </div>
                <div  className="flex flex-col md:flex-row lg:flex-row gap-4 p-5 bg-[#161B26] rounded-md justify-between">
                    <div className="flex flex-col gap-1">
                        <span  className="text-white font-['geist'] font-bold text-sm">Assessment 1: JavaScript Engine Basics</span>
                        <span className="text-[#94A3B8] font-['geist'] text-sm">Graded on Jan 5, 2026</span>
                    </div>
                     <div className="flex gap-6 items-center justify-between">
                        <p className=" text-[#00E676] font-bold font-['Geist-Mono'] text-base">92/100</p>
                       <button className="bg-[#1F2638] text-center px-3 py-1.5 rounded-sm text-white font-semibold font-['geist'] text-sm cursor-pointer">View Feedback</button>
                    </div>
                </div>
             </div>
            </div>
            <div className="bg-[#161B26] flex flex-col gap-5 p-6 flex-1">
                <p className="text-[#64748B] text-sm font-['Geist-Mono'] font-bold">DETAILED REVIEW: ASSESSMENT 2</p>
                <div className="flex gap-3 items-center">
                    <img src="tutor.jpg" alt="instructor" className="h-12 w-12 object-cover rounded-full"/>
                    <div className="flex flex-col">
                        <p className="font-['Geist'] font-bold text-sm text-white">Graded by Otito Okoye</p>
                        <p className="text-[#94A3B8] font-['geist'] text-sm">Senior Engineer</p>
                    </div>
                </div>
                <hr className="border-[#242E42]"/>
                <div className="flex flex-col gap-3">
                    <p className="text-white font-['geist'] font-bold text-sm">Mentor Critique</p>
                    <p className="text-[#94A3B8] font-['geist'] text-sm">"Excellent application of Big O optimizations in your array storage loops. Your memory complexity dropped to O(1)
                         by utilizing context markers appropriately.
                         However, watch out for runtime scoping conflicts on line 34 — prefer explicit let constraints over implicit global allocations."
                    </p>
                </div>
                <div className="bg-[#1F2638] rounded-md p-3 flex flex-col gap-2">
                    <p className="text-[#00E5FF] font-['Geist-Mono'] text-sm">Line 34 code correction suggestions:</p>
                    <p className="text-[#FF4081] font-['Geist-Mono'] text-sm">- globalCounter = 0; + let globalCounter = 0;</p>
                </div>
            </div>
          </section>
        </section>
    )
}