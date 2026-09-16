import BoardHeader from "./studentDashBoardHeader"
export default function({className}){
    const upcoming=[
        {
            class:'Asynchronous JS: Event Loop & Queue microtasks',
            tutor:'Otito Okoye • Jan 15, 2026'
        },
         {
            class:'Promises & Error Handling patterns in production',
            tutor:'Otito Okoye • Jan 12, 2026'
        },
         {
            class:'Data types and typeof',
            tutor:'Otito Okoye • Jan 15, 2026'
        },
    ]
    const cohortSchedule=[
        {
            date:'Mon 7:00 PM',
            topic:'Asynchronous Deep Dive'
        },
         {
            date:'Wed 7:00 PM',
            topic:'DOM & Core Event Pipeline'
        },
         {
            date:'Fri 6:30 PM',
            topic:'Grading & Assignment Review'
        },
    ]
    return(
        <section className={`w-full flex-col p-10 gap-8   ${className}`}>
          <BoardHeader text='Live Classes' subtext='Join cohort lectures, ask questions live, and watch recordings.'/>
          <section className="flex flex-col gap-8 md:flex-row lg:flex-row"> 
            <div className="flex flex-col gap-6 flex-2">
                <div className="bg-[#161B26] flex flex-col gap-5 p-6">
                    <div className='flex flex-col gap-1.5 md:flex-row lg:flex-row justify-between'>
                        <span className="bg-[#FF4081]/10 px-2 py-1 rounded-[20px] text-[#FF4081] font-['Geist-Mono'] font-semibold text-sm text-center">FEATURED LIVE SESSION</span>
                        <span className="text-[#94A3B8] font-['geist'] text-sm">Starts in 2 days</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-white font-['geist'] text-xl font-extrabold">DOM Manipulation Deep Dive & Async Integrations</span>
                        <span className="text-[#94A3B8] font-['geist'] text-sm">Otito Okoye• Friday, Jan 17 at 7:00 PM EST</span>
                    </div>
                    <button className="bg-[#2979FF] px-6 py-3 rounded-md cursor-pointer hover:bg-[#2979FF]/80 transition-bg">Add to Calendar</button>
                </div>
                    <p className="text-[#94A3B8] font-['geist'] text-sm">UPCOMING & RECENT SESSIONS</p>
                      {upcoming.map(cl=>{
                        return(
                            <div key={cl.class} className="bg-[#161B26] flex flex-col justify-between md:flex-row lg:flex-row p-5 gap-6 rounded-md">
                              <div className="flex flex-col gap-1.5">
                                <span className="text-white font-['geist'] font-bold text-sm">{cl.class}</span>
                                <span className="text-[#94A3B8] font-['geist'] text-sm">{cl.tutor}</span>
                            </div>
                             <div className="flex gap-3 justify-between">
                              <button className="bg-[#1F2638] px-3 py-1.5 text-center text-[#94A3B8] font-['geist'] font-semibold text-sm cursor-pointer hover:bg-[#1F2638]/80 transition-all rounded-md">Watch Recording</button>
                             <button className="bg-[#00E676]/10 px-3 py-1.5 text-center text-[#00E676] font-['geist'] font-semibold text-sm cursor-pointer hover:bg-[#00E676]/20 transition-all rounded-md">Completed</button>
                            </div>
                        </div>
                        )
                      })}
            </div>
                <div className="flex-1 flex flex-col bg-[#161B26] gap-5 p-6 rounded-md self-start w-full">
               <p className="text-[#64748B] font-['Geist-Mono'] text-sm font-bold">COHORT SCHEDULE</p>
                <div className="flex flex-col gap-3">
                    {cohortSchedule.map(cl=>{
                        return(
                            <div key={cl.topic} className="flex flex-col gap-1">
                               <span className="text-[#2979FF] font-['Geist-mono'] text-sm">{cl.date}</span>
                               <span className="text-white font-['geist'] text-sm font-semibold">{cl.topic}</span> 
                            </div>

                        )
                    })}
                </div>
            </div>
          </section>
        </section>
    )
}