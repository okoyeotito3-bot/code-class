import { Play } from "lucide-react";
import { userlessonBoard } from "../../mockup";
import Header from "./Header";
import { useState } from "react";


export default function LessonPannel({ className }) {
  const [current, setCurrent] = useState(0);

  function nextCurrent() {
    if (current === userlessonBoard.length - 1) return;
    setCurrent((prevCount) => prevCount + 1);
  }

  function prevCurrent() {
    if (current <= 0) return;
    setCurrent((prevCount) => prevCount - 1);
  }

  return (
    <section className='flex flex-col flex-1 min-w-0 h-full md:flex-row'>
      <section className="bg-[#161B26] flex-col p-3 h-full gap-5 border  border-l-white/20 hidden md:flex">
        <p className='text-[#64748B] font-["Geist-Mono"] text-sm font-bold text-center'>   LESSONS </p>
         <div className="flex flex-col gap-2">
           {userlessonBoard.map((lesson, index) => (
             <div key={lesson.topic} className="flex gap-2 bg-[#2979FF]/10 rounded-md px-3 py-2.5  cursor-pointer"  onClick={() => setCurrent(index)} >
                <Play className="text-[#2979FF]" />
                 <span className='text-white text-sm font-["geist"] font-semibold'>{lesson.topic}</span>   
              </div> ))}
          </div>
      </section>

      <section className="w-full flex-col gap-8 p-10 overflow-y-auto h-full pb-24 md:pb-2 scrollbar-thin scrollbar-thumb-[#1F2638] scrollbar-track-[#0B0F19] scrollbar-thumb-rounded-md scrollbar-track-rounded-md">
        <Header
          text={`Lesson ${current + 1} : ${userlessonBoard[current].topic}`}
          subtext="Module 4: Asynchronous JavaScript Operations"
        />
        <div className="flex flex-col gap-6">
          <div className="w-full">
            <video
              src="codeclass.mp4"
              muted
              noDownload
              controls
              className="w-full rounded-md h-auto object-cover"
            ></video>
            <p className='text-[#94A3B8] font-["geist"] font-bold'>
              Watch {userlessonBoard[current].topic}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className='text-white font-bold text-base font-["geist"]'>
              Notes & Sandbox Code
            </p>
            <p className='text-[#94A3B8] font-["geist"] text-sm'>
              {userlessonBoard[current].explanation}
            </p>
            <div className='text-[#94A3B8] font-["Geist-Mono"] text-sm leading-4'>
              {userlessonBoard[current].example}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <button className=' md:col-span-2  bg-[#00E676]/10 px-5 py-2.5 rounded-md text-[#00E676] font-["geist"] font-bold text-sm cursor-pointer'>Mark as Complete</button>
            <button className="border border-white/20 px-5 py-2.5 rounded-md cursor-pointer text-white font-bold font-['geist']" onClick={prevCurrent}>Previous Lesson</button>
            <button className="bg-[#2979FF] px-5 py-2.5 rounded-md cursor-pointer text-white font-bold font-['geist']" onClick={nextCurrent}>Next Lesson</button>
          </div>

        </div>
      </section>
    </section>
  );
}
