import { Video, Code, ClipboardCheck, BadgeCheck } from "lucide-react";

export default function Benefits() {
  return (
    <section className="w-full flex flex-col gap-4 md:gap-16 p-2 md:px-20 md:py-30">
      <header className="flex flex-col items-center gap-4">
         <p className="bg-[#2979FF]/12 px-2.5 py-1 rounded-[20px] text-[#5491FF] font-['geist-mono'] font-semibold text-sm">THE PLATFORM ADVANTAGE</p>
         <p className="font-['geist'] font-extrabold text-xl text-white"> Designed for Practical Competence </p>
         <p className="font-['geist'] text-sm text-[#94A3B8] text-center">Why self-study books fail and bootcamps overwhelm. We engineered a robust learning environment built around execution.</p>
      </header>
      <main className="w-full flex flex-col md:flex-row gap-1.5 p-2">
       { [
      { icon: Video, title: "Live Interactive Classes", description: "No more stale pre-recorded videos. Learn live with real instructors via Google Meet integrations." },
      { icon: Code, title: "Hands-On Assessments", description: "Instantly submit your tasks directly from your CodePen workspaces. Real-time test-runner feedback." },
      { icon: ClipboardCheck, title: "Expert Grading & Feedback", description: "Every project is vetted and annotated by senior software engineers. Get precise actionable critique." },
      { icon: BadgeCheck, title: "Structured Curriculum", description: "A rigorous, step-by-step roadmap designed for long-term comprehension and interview prep." },
     ].map((benefit,index)=>{
      return(
        <div key={index} className="flex flex-col gap-6 p-8 bg-[#161B26] rounded-md">
          <div className="flex justify-between">
            {<benefit.icon className="bg-[#2979FF]/10 rounded-md text-[#2979FF]"/>}
            <span className="text-[#64748B] font-['geist-mono'] text-sm font-semibold">0{index+1}</span>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-white font-['geist'] font-bold text-xl">{benefit.title}</p>
             <p className="text-[#94A3B8] font-['geist'] text-sm">{benefit.description}</p>
          </div>
        </div>
      )
     })
     
     }
      </main>
    </section>
  );
}
