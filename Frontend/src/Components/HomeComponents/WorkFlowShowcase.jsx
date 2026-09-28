import { BsThreeDots } from "react-icons/bs"

export default function WorkShowCase(){
    return(
        <section className="w-full flex flex-col gap-4 p-4 lg:gap-16 md:px-20 md:py-30 lg:px-20 lg:py-30 "> 
            <header className="flex flex-col gap-4 w-full items-center">
                <p className="bg-[#00E676]/10 text-center px-2.5 py-1 rounded-[20px] text-[#00E676] font-['Geist-Mono'] font-semibold text-sm">INTEGRATION WORKFLOW</p>
                <p className="font-['geist'] font-extrabold text-[#F8FAFC] text-lg md:text-4xl">Real-Time Assessment Pipeline</p>
                <p className="font-['geist'] text-sm text-[#94A3B8]">A robust feedback loop engineered directly into CodePen,
                     ensuring your files are validated and graded in seconds.
                </p>
            </header>
            <div className="flex flex-col md:flex-row gap-6">
            {
             [
              {label:'Define Assessment',description:'Teacher defines expectations and unit-test scripts in CodeClass.'},
              {label:'Develop in CodePen',description:'Student writes responsive JS/HTML on CodePen.'},
              {label:'Submit and Test',description:"Student logs link; CodeClass's test runner evaluates the outputs."},
              {label:'Grade & Review',description:'Teacher verifies code aesthetics and issues grades.'},
             ].map((work,index) => {
                return(
                    <div className="flex flex-col bg-[#161B26] rounded-sm">
                        <div className="flex p-4 bg-[#1F2638] gap-3 items-center">
                            <div className="flex gap-1.5">
                                <p className="w-3 h-3 bg-[#EF4444] rounded-full"></p>
                                <p className="w-3 h-3 bg-[#F59E0B] rounded-full"></p>
                                <p className="w-3 h-3 bg-[#10B981] rounded-full"></p>
                            </div>
                            <p className="text-[#64748B] font-['geist-mono'] text-sm">flow_step_0{index+1}.sh</p>
                        </div>
                        <div className="flex flex-col gap-4 p-6">
                            <p className="bg-[#2979FF]/12 rounded-[20px] px-2.5 py-1 self-start text-[#5491FF] font-['geist-mono'] font-semibold text-sm">Step {index+1}</p>
                            <div className="flex flex-col gap-2">
                                <p className="text-white font-bold font-['geist'] text-base">{work.label}</p>
                                <p className="text-[#94A3B8] font-['geist'] text-sm">{work.description}</p>
                            </div>
                        </div>
                    </div>
                )
             })  
            }
            </div>
        </section>
    )
}