import { Play } from "lucide-react";
import { userlessonBoard } from "../../mockup";
import BoardHeader from "../../Components/StudentDashboardComponents/studentDashBoardHeader";
import { useState } from "react";
import Button from "../../Utilities/Button";

export default function StudentLessonBoard({ className }) {
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
    <section className={`w-full ${className}`}>
      <section className="bg-[#161B26] p-6 gap-5 flex-col border border-white/20 h-full hidden md:flex lg:flex">
        <p className='text-[#64748B] font-["Geist-Mono"] text-sm font-bold'>
          LESSONS
        </p>
        <div className="flex flex-col gap-2">
          {userlessonBoard.map((lesson, index) => {
            return (
              <div
                key={lesson.topic}
                className="flex gap-2 bg-[#2979FF]/10 rounded-md  px-3 py-2.5"
              >
                {
                  <Play
                    className="text-[#2979FF] cursor-pointer"
                    onClick={() => setCurrent(index)}
                  />
                }{" "}
                <p className='text-white text-sm font-["geist"] font-semibold'>
                  {lesson.topic}
                </p>
              </div>
            );
          })}
        </div>
      </section>
      <section className="w-full flex-col gap-8 p-10">
        <BoardHeader
          text={`Lesson ${current + 1} : ${userlessonBoard[current].topic}`}
          subtext="Module 4: Asynchronous JavaScript Operations"
        />
        <div className="flex flex-col gap-6">
          <div className="w-full">
            <video
              src="codeclass.mp4"
              muted
             
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
          <div className="flex justify-between pt-4 flex-col gap-2 md:flex-row lg:flex-row">
            <Button
              text="Previous Lesson"
              className='text-center p-2 border cursor-pointer rounded-md text-[#94A3B8] font-["geist"] font-semibold text-sm'
              onClick={prevCurrent}
            />
            <div className="flex gap-3 items-center justify-between">
              <Button
                text="Mark as Complete"
                className='bg-[#00E676]/10 px-5 py-2.5 rounded-md text-[#00E676] font-["geist"] font-bold text-sm cursor-pointer'
              />
              <Button
                text="Next Lesson"
                className="bg-[#2979FF] px-5 py-2.5 rounded-md cursor-pointer text-white font-bold font-['geist']"
                onClick={nextCurrent}
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
