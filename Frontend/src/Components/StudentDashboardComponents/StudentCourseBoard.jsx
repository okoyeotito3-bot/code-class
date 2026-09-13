import { Check, Key, Lock } from "lucide-react";
import BoardHeader from "./studentDashBoardHeader";
import userboard from "../../mockup";

export default function StudentCourseBoard({ className }) {
  const progress = "35";

  return (
    <section className={`flex-col p-2 w-full gap-8 ${className}`}>
      <BoardHeader
        text="My Enrolled Course"
        subtext="Track your curriculum progress and syllabus roadmaps."
      />
      <section className="flex gap-8 w-full">
        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-col items-start md:flex-row lg:flex-row gap-6 p-8 md:items-center lg:items-center">
            <div
              className="flex justify-center items-center h-20 w-20 rounded-[50%]"
              style={{
                background: `conic-gradient(#2979FF 0% ${progress}%, #242E42 ${progress}% 100%)`,
              }}
            >
              <div className="bg-[#242E42] w-18 h-18 rounded-full flex justify-center items-center text-sm font-['Geist-Mono'] font-bold">
                {progress}%
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <span className="text-[#FFD600] font-['Geist-Mono'] font-semibold text-sm">
                  JavaScript
                </span>
                <span className="text-[#64748B] font-['geist'] text-sm">
                  Enrolled Jan 5, 2026
                </span>
              </div>
              <p className="text-white text-lg font-['geist'] font-extrabold">
                JavaScript Fundamentals to Advanced
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 md:gap-6 lg:gap-6 md:flex-row lg:flex-row">
            <div className="bg-[#161B26] flex flex-col p-5 gap-2 rounded-md">
              <p className="font-['geist'] text-white text-sm">Lessons</p>
              <p className="text-[#2979FF] font-['Geist-Mono'] font-bold text-xl">8/24 Done</p>
            </div>
            <div className="bg-[#161B26] flex flex-col p-5 gap-2 rounded-md">
              <p className="font-['geist'] text-white text-sm">Assessments</p>
              <p className=" text-[#FF4081] font-['Geist-Mono'] font-bold text-xl">2/8 Submitted</p>
            </div>
            <div className="bg-[#161B26] flex flex-col p-5 gap-2 rounded-md">
              <p className="font-['geist'] text-white text-sm">Current GPA Status</p>
              <p className="text-[#00E676] font-['Geist-Mono'] font-bold text-xl">Grade: A-</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[#94A3B8] font-bold text-sm font-['Geist-Mono']">
              Syllabus Breakdown
            </p>
            {userboard.map((course, index) => {
              return (
                <div
                  key={course.topic}
                  className="bg-[#0B0F19] flex gap-5 p-6 rounded-md items-center"
                >
                  {!course.inProgress && !course.isLocked ? (
                    <Check className="text-[#00E676]" />
                  ) : (
                    <h5 className="bg-[#2979FF] rounded-lg text-white p-2 font-['geist'] text-sm">
                      {index + 2}
                    </h5>
                  )}
                  <div className="flex flex-col gap-1">
                    <span className="text-white text-base font-['geist'] font-bold">
                      {course.topic}
                    </span>
                    <span className="text-[#94A3B8] font-['geist'] text-sm">
                      {course.subtopic}
                    </span>
                  </div>
                  {course.inProgress && (
                    <p className="text-[#2979FF] font-['geist'] text-sm">
                      IN PROGRESS
                    </p>
                  )}
                  {course.isLocked && <Lock className="text-[#64748B]" />}
                </div>
              );
            })}
          </div>
        </div>

        <div></div>
      </section>
    </section>
  );
}
