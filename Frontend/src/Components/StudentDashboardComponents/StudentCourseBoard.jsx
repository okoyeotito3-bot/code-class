import BoardHeader from "./studentDashBoardHeader";

export default function StudentCourseBoard({ className }) {
  const progress = "35";
  return (
    <section className={`flex-col p-2 w-full gap-8 ${className}`}>
      <BoardHeader
        text="My Enrolled Course"
        subtext="Track your curriculum progress and syllabus roadmaps."
      />
      <section>
        <div>
          <div>
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
            <div>
                <div>
                    <span>JavaScript</span>
                    <span>Enrolled Jan 5, 2026</span>
                </div>
                <p>JavaScript Fundamentals to Advanced</p>
            </div>
          </div>
        </div>

        <div></div>
      </section>
    </section>
  );
}
