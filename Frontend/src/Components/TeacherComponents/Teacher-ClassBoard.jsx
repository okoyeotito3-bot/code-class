import { Calendar } from "lucide-react"
import Header from "./Header"

export default function TeacherClassBoard(){
    return(
        <section className="flex flex-col gap-8 p-10 w-full">
          <Header  text='Class Scheduling & Meet Hub' subText='Live video integrations and asynchronous classroom records'/>
          <section className="flex flex-col gap-6 md:flex-row">
            <div className="flex flex-col gap-5 p-6 bg-[#161B26] rounded-md">
                <p className="text-white font-['geist'] text-base font-bold">Schedule New Class Session</p>
                <div className="flex flex-col gap-6">
                    <p className="text-[#94A3B8] font-['geist'] font-bold text-sm">SESSION TOPIC TITLE</p>
                    <p className="bg-[#0B0F19] border rounded-md p-3 text-center text-white font-['geist'] text-sm">Asynchronous State Machines & DOM pipelines</p>
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex flex-col gap-1.5">
                        <p className="text-[#94A3B8] font-['geist'] font-bold text-sm">DATE</p>
                        <div  className="p-3 bg-[#0B0F19] rounded-md">
                            <input type="date" className="text-[#F8FAFC] font-['geist'] text-sm cursor-pointer"/>
                        </div>
                    </div>
                    <div  className="flex flex-col gap-1.5">
                        <p className="text-[#94A3B8] font-['geist'] font-bold text-sm">START TIME</p>
                      <div  className="p-3 bg-[#0B0F19] rounded-md">
                          <input type="datetime-local" className="text-[#F8FAFC] font-['geist'] text-sm cursor-pointer" />
                      </div>
                    </div>
                </div>
                <form className="flex flex-col gap-1.5">
                    <p className="text-[#94A3B8] font-bold text-sm">GOOGLE MEET VIDEO LINK</p>
                   
                      <input type="text" placeholder="meet.google.com/abc-defg-hij" className="border border-[#0B0F19] p-2 rounded-sm bg-[#0B0F19] text-[#00E676] font-['geist-mono'] text-sm"/>
                     
                 
                    <p className="text-[#94A3B8] font-['geist'] text-sms">CLASS DESCRIPTION</p>
                    <textarea name="" id="" className="text-[#94A3B8] font-['geist'] text-sm w-full bg-[#0B0F19] p-3 rounded-sm"></textarea>
                    <button className="bg-[#2979FF] px-6 py-3 rounded-md text-[#F8FAFC] font-semibold font-['geist'] mt-4 cursor-pointer">Schedule Live Lecture Session</button>
                </form>
            </div>


            <div></div>
          </section>
        </section>
    )
}