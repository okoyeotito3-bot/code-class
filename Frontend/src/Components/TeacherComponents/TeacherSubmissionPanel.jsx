import { Check, CircleCheck } from "lucide-react"
import Header from "./Header"
export default function TeacherSubmissionPannel(){
    return(
        <section className="flex flex-col gap-8 p-10 w-full">
          <Header text='Assessment Grading Center' subText='Directly grade and write feedback for student submissions'/>
          <section className="flex gap-6 flex-col md:flex-row">
            <div className="flex flex-col bg-[#161B26] gap-4 p-6 rounded-md">
                <p className="font-['geist'] text-white font-bold text-base">Submissions List</p>
                <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-2 p-3 bg-[#2979FF]/10">
                        <div className="flex justify-between">
                            <p className="text-white font-['geist'] font-bold text-sm">Alex Wong</p>
                            <p className="text-[#FF4081] font-['geist-mono'] text-sm">UNGRADED</p>
                        </div>
                        <p className="text-[#94A3B8] font-['geist'] text-sm">Submitted Jan 14 at 4:32 PM</p>
                    </div>

                    <div className="flex flex-col gap-2 p-3 bg-[#2979FF]/10">
                        <div  className="flex justify-between">
                            <p className="text-white font-['geist'] font-bold text-sm">Samantha Li</p>
                            <p className="text-[#FF4081] font-['geist-mono'] text-sm">GRADED</p>
                        </div>
                        <p  className="text-[#00E676] font-['geist'] text-sm">98/100 • Graded Jan 14</p>
                    </div>

                </div>
            </div>

            <div className="flex flex-col gap-6 p-6 bg-[#161B26] rounded-md flex-2">
                <p className="text-white font-['geist'] text-base">Grade Assessment</p>
                <div className="flex flex-col gap-2">
                    <p className="text-[#94A3B8] font-['geist'] text-sm">SCORE OUT OF 100</p>
                    <input type="text" className="p-3 rounded-md bg-[#0B0F19] text-[#00E676] font-['geist-mono'] text-base font-bold"/>
                </div>
                <div className="flex flex-col gap-2.5">
                    <p className="text-[#94A3B8] font-['geist'] font-bold text-sm">RUBRIC ALIGNMENTS</p>
                    <div className="flex gap-2 items-center">
                        <CircleCheck className="text-[#00E676]" size={20}/>
                        <span className="text-white font-['geist'] text-sm">Pipeline Setup (40/40)</span>
                    </div>
                    <div className="flex gap-2 items-center">
                        <CircleCheck  className="text-[#00E676]" size={20}/>
                        <span className="text-white font-['geist'] text-sm">Microtask Logic (38/40)</span>
                    </div>
                    <div className="flex gap-2 items-center">
                        <CircleCheck  className="text-[#00E676]" size={20}/>
                        <span className="text-white font-['geist'] text-sm">Clean modular layout (14/20)</span>
                    </div>
                </div>
                <hr className="text-[#242E42]"/>
                <div className="flex flex-col gap-2">
                    <p className="text-[#94A3B8] font-['geist'] text-sm">Clean modular layout (14/20)</p>
                    <textarea name="" className="bg-[#0B0F19] p-3 rounded-md text-[#94A3B8] font-['geist'] text-sm" defaultValue='Fantastic optimization on your compilation microtasks queue, 
                    Alex! You had a small syntax error on your close bindings in webpack line 12, but overall outstanding performance!'></textarea>
                </div>
                <button className="text-center bg-[#2979FF] p-4 rounded-md text-sm font-semibold text-white cursor-pointer">Submit Grade & Feedback</button>
            </div>
          </section>
        </section>
    )
}