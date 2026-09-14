import {allCourses} from '../../mockup'
import { useParams } from "react-router-dom";


export default function DetailsHero() {
     const { courseId } = useParams();
    const course = allCourses.filter(c => c.courseId === Number(courseId))
  return (
    <section className="w-full flex flex-col gap-6 p-4 md:px-20 md:py-16 lg:px-20 lg:py-16">
      <div className="flex gap-2 items-center">
        <span className="text-[#64748B] font-[Geist-Mono] text-sm">COURSES</span>
        <span className="text-[#64748B] font-[Geist-Mono] text-sm">/</span>
        <span className="text-[#2979FF] font-[Geist-Mono] text-sm">{course[0].course} COHORT</span>
      </div>
      <p className="font-geist text-white font-extrabold">{course[0].coursePubHeader}</p>
      <div className="flex gap-4 items-center">
        <span className="text-[#FFD600] font-[Geist-Mono] font-semibold text-sm">Beginner to Intermediate</span>
        <span className="text-[#00E5FF] font-[Geist-Mono] font-semibold text-sm">{course[0].learningDuration}</span>
        <span className="text-[#00E676] font-[Geist-Mono] font-semibold text-sm">350+ Students Graduated</span>
      </div>
      <div className="flex items-center gap-3">
        <img src={course[0].instructorImg} alt="Instructor" className="w-9 h-9 object-cover rounded-[18px] shadow-2xl"/>
        <div className="flex flex-col gap-0.5">
            <span className="text-white font-geist text-sm font-semibold">{course[0].instructorName}</span>
            <span className="text-[#94A3B8] font-[Geist-Mono] txt-sm">{course[0].instructorRole}</span>
        </div>
      </div>
    </section>
  );
}
