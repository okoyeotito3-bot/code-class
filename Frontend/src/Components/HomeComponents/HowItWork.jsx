import { LineChart, Ruler, SeparatorHorizontal } from "lucide-react";

export default function () {
  return (
    <section id='howItWorks' className="bg-[#161B26] w-full flex flex-col py-3 px-2 gap-20 md:py-24 md:px-20 lg:py-24 lg:px-20">
      <header className="flex flex-col gap-4 items-center">
        <p className="bg-[#00E676]/10 px-2.5 py-1 rounded-[20px] font-['Geist-Mono'] font-semibold text-sm tracking-tighter text-[#00E676]">
          RoadMap
        </p>
        <p className="font-['geist'] font-extrabold text-2xl md:text-4xl  text-white">
          How CodeClass Works
        </p>
      </header>
      <main className=" w-full grid px-2 md:grid-cols-4">
        {
          [{label:'Enroll in a Course',description:'Select from our expert curated paths.'},
           {label:'Attend Live Classes',description:'Interactive lectures and live Q&A.'},
           {label:'Complete Assessments',description:'Code directly inside CodePen workspaces.'},
           {label:'Get Graded & Certified',description:'Detailed review from a real software engineer.'},
          ].map((howitworks,index)=>{
            return(
              <div key={index} className="flex flex-col gap-5">
                <div className="flex gap-3 items-center">
                  <p className="w-10 h-10 flex items-center justify-center bg-[#2979FF] rounded-[20px] text-white font-['geist-mono'] text-base font-bold">{index+1}</p>
                  <hr className="flex-1 border-[#94A3B8]/40" />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-white font-bold text-lg font-['geist']">{howitworks.label}</p>
                  <p className="text-[#94A3B8] text-sm font-['geist']">{howitworks.description}</p>
                </div>
              </div>
            )
          })
        }
      </main>
    </section>
  );
}
