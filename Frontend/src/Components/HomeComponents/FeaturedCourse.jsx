import Button from "../../Utilities/Button";
import {allCourses} from '../../mockup'

export default function FeatureCourse() {
 
  const course = allCourses.find(c=>c.courseId===1)
  
  return (
    <section className=" w-full flex flex-col gap-4 p-4 md:px-20 md:py-30 lg:py-30 lg:px-20 md:gap-16 lg:gap-16">
      <header className="w-full flex flex-col gap-4">
        <p className="text-[#FF4081] text-center font-[Geist-Mono] font-semibold text-[11px]">
          PREMIUM COHORT
        </p>
        <p className="font-['geist'] font-extrabold text-2xl  text-white md:text-4xl lg:text-4xl ">
          Our Best-Selling Syllabus
        </p>
      </header>

      <div className="w-full flex flex-col md:flex-row lg:flex-row ">
        <div className="flex flex-col gap-10 p-2">
          <div className="flex flex-col w-full gap-4">
            <div className="flex gap-2 ">
              <span className="text-[#FFD600] font-semibold text-sm ">
                {course.course}
              </span>
              <span className="text-[#5491FF] font-semibold text-sm">
                {course.learningDuration}
              </span>
            </div>
            <h2 className="font-extrabold text-3xl text-[#F8FAFC] font-['geist']">
              {course.coursePubHeader}
            </h2>
            <p className="font-['geist'] font-sm text-[#94A3B8]">
              {course.courseOverView}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <img
              src={course.instructorImg}
              alt="tutor"
              className="w-7.5 h-7.5 rounded-full object-cover border border-white/20 shadow-sm"
            />
            <div className="flex flex-col gap-1">
              <p className="font-['geist'] font-bold text-sm text-white">
               {course.instructorName}
              </p>
              <p className="font-normal font-['Geist-Mono'] text-sm text-[#94A3B8]">
                {course.instructorRole}
              </p>
            </div>
          </div>
          <div className="w-full flex items-center justify-between gap-2 md:pr-6 lg:pr-6">
            <div className="flex flex-col items-start gap-1 whitespace-nowrap">
              <p className="text-[#64748B] text-3 font-['giest'] font-semibold">
                Price
              </p>
              <p className="text-[#00E676] font-[Geist-Mono] text-[32px]">
               NGN:{course.price}
              </p>
            </div>
            <Button
              text="Enroll Now"
              to="/Register"
              className="bg-[#2979FF] py-3 px-6 rounded-md mt-auto font-['geist'] font-semibold text-sm text-white cursor-pointer hover:bg-[#1D64D8] "
            />
          </div>
        </div>

        <img src="course-syllabus.png" alt="course-syllabus"  className="h-auto object-cover m-auto rounded-md"/>
      </div>
    </section>
  );
}
