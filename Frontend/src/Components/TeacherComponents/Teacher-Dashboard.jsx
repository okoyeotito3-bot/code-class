import { CheckCircle, File, Menu, Video } from "lucide-react";
import Header from "./Header"
export default function Dashboard(){

        const instructorData={
        instructorName:'Otito Okoye',
        instructorRole:'Senior Developer',
        instructorImg:'tutor.jpg',
        activeStudent:20,
        upComingClass:3,
        pendingSubmissions:5,
        instructorRating:'4.9/5'
    }
 const date = new Date;
 const todayDate= date.toDateString()
    return(
        <section className="w-full flex flex-col gap-8 p-10 relative">
            <Header text={`Welcome back, ${instructorData.instructorName}!`} subText={todayDate}/>


              <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-4 p-6 bg-[#161B26] rounded-md items-center self-start">
                    <span className="text-[#64748B] font-['geist'] font-bold text-sm">Active Students</span>
                    <span className="text-white font-['Geist-Mono'] text-lg font-extrabold">{instructorData.activeStudent}</span>
                </div>
                  <div className="flex flex-col gap-4 p-6 bg-[#161B26] rounded-md items-center self-start">
                    <span className="text-[#64748B] font-['geist'] font-bold text-sm">Upcoming Classes</span>
                    <span className="text-white font-['Geist-Mono'] text-lg font-extrabold">{instructorData.upComingClass}</span>
                </div>
                  <div className="flex flex-col gap-4 p-6 bg-[#161B26] rounded-md items-center self-start">
                    <span className="text-[#64748B] font-['geist'] font-bold text-sm">Pending Submissionss</span>
                    <span className="text-white font-['Geist-Mono'] text-lg font-extrabold">{instructorData.pendingSubmissions}</span>
                </div>
                  <div className="flex flex-col gap-4 p-6 bg-[#161B26] rounded-md items-center self-start">
                    <span className="text-[#64748B] font-['geist'] font-bold text-sm">Instructor Rating</span>
                    <span className="text-white font-['Geist-Mono'] text-lg font-extrabold">{instructorData.instructorRating}</span>
                </div>
              </section>

             

             <section className="flex flex-col md:flex-row lg:flex-row gap-2">

            
             <section className="bg-[#161B26] flex flex-col gap-6 p-6 rounded-md">
                <div className="flex justify-between">
                    <span className="text-white font-['geist'] text-base font-bold">Active Cohort Status</span>
                    <span className="bg-[#00E676]/10 px-2.5 py-1 rounded-[20px] text-[#00E676] font-semibold text-sm">72% AVERAGE PROGRESS</span>
                </div>
                <div className="flex flex-col gap-3">
                    <p className="text-white font-['geist'] font-bold text-2xl">JavaScript Fundamentals to Advanced</p>
                    <p className="text-[#94A3B8] text-sm font-['geist']">Your cohort is currently advancing through Module 4: Asynchronous Pipeline Engineering.
                         22 students have passed the microtask unit tests; 6 need assistance.
                    </p>
                </div>
                <div className="flex flex-col gap-2">
                   <div className="flex justify-between">
                     <span className="text-[#94A3B8] font-['geist'] text-sm">Syllabus Completion</span>
                    <span className="text-[#2979FF] font-['Geist-Mono'] text-sm">72%</span>
                   </div>
                   <div className="w-full h-2 bg-[#ccc] rounded-sm">
                    <div className="h-full w-[72%] bg-[#2979FF] rounded-sm"></div>
                   </div>
                </div>
                <div className="pt-4 flex flex-col md:flex-row lg;flex-row  gap-4 justify-between">
                    <button className="bg-[#2979FF] px-6 py-3 rounded-md text-white font-['geist'] font-semibold text-sm cursor-pointer">Schedule Live Class</button>
                    <button className="bg-[#161B26] border px-6 py-3 rounded-md text-[#94A3B8] font-['geist'] font-semibold text-sm cursor-pointer">Create Assessment</button>
                    <button className="bg-[#161B26] border px-6 py-3 rounded-md text-[#94A3B8] font-['geist'] font-semibold text-sm cursor-pointer">Review Submissions</button>
                </div>
              </section>

              <section className="flex flex-col gap-5 bg-[#161B26] p-6 rounded-md">
                <p className="text-white font-['geist'] text-base">Recent Cohort Activity</p>
                <div className="flex flex-col gap-4">
                    <div className="flex gap-3">
                        <File className="text-[#FF4081]"/>
                        <div className="flex flex-col gap-0.5">
                            <span className="text-white font-['geist']">Alex Wong submitted Assessment 2</span>
                            <span className="text-[#64748B] font-['geist'] text-sm">12 minutes ago • Action pending</span>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <Video className="text-[#2979FF]"/>
                        <div className="flex flex-col gap-0.5">
                            <span className="text-white font-['geist']">Live Class reminder sent to all students</span>
                            <span className="text-[#64748B] font-['geist'] text-sm">1 hour ago • Auto-scheduler</span>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <CheckCircle className="text-[#00E676]"/>
                        <div className="flex flex-col gap-0.5">
                            <span className="text-white font-['geist']">Graded Samantha Li's work (98/100)</span>
                            <span className="text-[#64748B] font-['geist'] text-sm">Yesterday • Feedback published</span>
                        </div>
                    </div>
                </div>
             </section>
        </section>
        </section>
    )
}