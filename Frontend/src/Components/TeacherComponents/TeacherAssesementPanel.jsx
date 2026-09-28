import { Book } from "lucide-react"
import Header from "./Header"
import { useState } from "react"
export default function TeacherAssesmentPannel(){
const [assements,setAssesments]=useState(null)
    function handleAssesment(FormData){
        setAssesments({
            assesmentTitle:FormData.get('assesmentTitle'),
            rubiricsBreakdown:FormData.get('GR Breakdown'),
            instructions:FormData.get('instructions')
        })
    
     

    }

    const date = new Date()
    const todayDate=date.toLocaleTimeString()
    const submitedStudents =18
    const totalStudents =28
    return(
        <section className="flex flex-col gap-8 p-10 w-full">
           <Header text='Assessment Design & grading pipeline' subText='Author assignments, set validation rules, and establish rubrics'/>
           <section className="flex gap-6 flex-col md:flex-row">
            <form action={handleAssesment} className="flex flex-col bg-[#161B26] rounded-md p-6 gap-5 flex-2">
                <p className="text-white font-['geist'] font-bold text-base">Create New Core Assessment Task</p>
                <label className="flex flex-col gap-1.5">
                    <p className="text-sm font-bold font-['geist'] text-[#94A3B8]">ASSESSMENT TITLE</p>
                    <input name="assesmentTitle"
                        type="text" placeholder="Assessment 4: Webpack and Vite Pipeline Integrations"
                        className="bg-[#0B0F19] rounded-md p-3 text-sm font-['geist'] text-white"/>
                </label>
                <label className="flex flex-col gap-1.5">
                    <p className="text-sm font-bold font-['geist'] text-[#94A3B8]">GRADING RUBRIC BREAKDOWN</p>
                    <input name="GR Breakdown"
                     type="text" placeholder="Assessment 4: Webpack and Vite Pipeline Integrations"
                     className="bg-[#0B0F19] rounded-md p-3 text-sm font-['geist']  text-white"/>
                </label>
                <label className="flex flex-col gap-1.5">
                    <p className="text-sm font-bold font-['geist'] text-[#94A3B8]">INSTRUCTIONS & GUIDES (RICH TEXT)</p>
                    <textarea name='instructions' defaultValue='Students must load our custom codeclass-engine script from the window object, compile their production file inside their specific CodePen workspace, and trigger 4/4 passing unit assertions.'
                    className="bg-[#0B0F19] rounded-md p-3  text-sm font-['geist']  text-white" ></textarea>
                </label>
                
                    <button className="bg-[#2979FF] px-6 py-3 rounded-md text-center cursor-pointer font-semibold font-['geist'] text-sm text-white">Publish Assessment Live</button>
            </form>
            <section className="flex flex-col gap-6">
                {
                  assements ?
                  (<div className="flex flex-col gap-5 p-6 bg-[#161B26] rounded-md">
                    <p className="text-white font-['geist'] text-base font-bold">Active Assessments</p>
                    <div className="flex flex-col gap-3 justify-between p-4 bg-[#0B0F19] rounded-md">
                        <div className="flex gap-4 items-center">
                            <p className="bg-[#00E676]/10 px-2.5 py-1 rounded-[20px] text-sm font-semibold font-['geist-mono'] text-[#00E676]">ACTIVE</p>
                            <div className="flex flex-col gap-1">
                              <p className="text-white font-['geist'] text-sm font-bold">Assessment 3: {assements.assesmentTitle}</p>
                              <p className="text-[#94A3B8] text-sm font-['geist']">Assigned {todayDate} • {submitedStudents} / {totalStudents} Submissions Completed</p>
                            </div>
                        </div>
                        <button className="bg-[#2979FF]/10 p-2 text-[#2979FF] font-semibold font-['geist'] cursor-pointer rounded-sm">Send Alert</button>
                    </div>
                </div>):
                (
                    <div className="flex flex-col items-center justify-center gap-3 p-10 bg-[#161B26] rounded-md text-center">
              <Book color="#64748B" size={32} />
              <p className="text-[#F8FAFC] font-['geist'] font-semibold text-sm">
                No asesment scheduled
              </p>
              <p className="text-[#94A3B8] font-['geist'] text-xs">
                Fill out the form to set Assesment.
              </p>
            </div>
                )
                  
                }
            </section>
           </section>
        </section>
    )
}