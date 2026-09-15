import { ChevronDown, CheckCircle, MinusCircle } from "lucide-react";
import Button from "../../Utilities/Button";
import {allCourses} from '../../mockup'
import { useParams } from "react-router-dom";

export default function DetailsContent() {

 

   const { courseId } = useParams();
   
   const course = allCourses.find(c => c.courseId === Number(courseId))


  
  const modulesData = course.moduleCurriculum.map((module) => {
    return (
      <details key={module.id} className="group flex flex-col gap-2">
        <summary className="text-white font-geist text-sm font-bold list-none flex gap-4 items-center [&::-webkit-details-marker]:hidden cursor-pointer">
          <span> {module.title}</span>
          <ChevronDown className="group-open:hidden text-[#2979FF]" />
          <MinusCircle className="hidden group-open:block text-[#2979FF]" />
        </summary>
        <p className="text-[#94A3B8] font-geist text-sm">{module.briefTiltle}</p>
      </details>
    );
  });


  return (
    <section className="w-full p-4 gap-8 flex flex-col md:flex-row lg:flex-row md:px-20 md:pt-16 md:pb-30 lg:px-20 lg:pt-16 lg:pb-30">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <span className="text-[#2979FF] font-bold font-[Geist-Mono] text-sm">
            COURSE OVERVIEW
          </span>
          <span className="text-[#94A3B8] font-geist text-sm">
            {course.courseOverView}
          </span>
        </div>

        <div className="flex flex-col gap-5 md:p-8 lg:p-8">
          <p className="text-white font-geist font-bold text-sm">
            What You Will Master
          </p>

          <div className="flex flex-col gap-3">
             {course.whatYouWillMaster.map(
              c =>{
                return(
                  <div className="flex gap-3 items-center">
                  <CheckCircle className="text-[#00E676] hidden md:block lg:block" />
                  <span className="text-[#94A3B8] font-gesit text-sm">
                  {c}
                 </span>
                  </div>
                )
              }
             )}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-[#2979FF] font-bold text-sm font-[Geist-Mono]">
            {course.moduleCurriculum.length}-MODULE CURRICULUM
          </p>
          <div className="flex flex-col gap-2">{modulesData}</div>
        </div>
        <div className="flex flex-col gap-3 ">
          <span className="text-white font-geist text-sm font-bold">
            Prerequisites
          </span>
          <span className="text-[#94A3B8] font-geist text-sm">
           {course.prerequisites}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-6 p-8 bg-[#161B26] rounded-md">
          <div className="flex flex-col gap-1">
            <span className="text-[#64748B] font-geist text-sm font-semibold">
              TUITION COST
            </span>
            <p className="text-[#00E676] font-[Geist-Mono]">
              NGN:{course.price} /<span className="text-[#94A3B8]"> total</span>
            </p>
          </div>
          <Button
            text={`Enroll in (${course.course})`}
            to="/Register"
            className="bg-[#2979FF] font-semibold text-sm text-center font-geist py-3.5 rounded-md text-white cursor-pointer"
          />
          <div className="flex flex-col gap-4">
            <div className="flex gap-3">
              <CheckCircle className="text-[#2979FF]" />{" "}
              <span className="text-[#94A3B8] text-sm font-geist">
                12 Weeks of Expert Coaching
              </span>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="text-[#2979FF]" />{" "}
              <span className="text-[#94A3B8] text-sm font-geist">
                24 Interactive Live Lectures
              </span>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="text-[#2979FF]" />{" "}
              <span className="text-[#94A3B8] text-sm font-geist">
                8 Custom Checked Assessments
              </span>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="text-[#2979FF]" />{" "}
              <span className="text-[#94A3B8] text-sm font-geist">
                Verifiable Cryptographic Certificate
              </span>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="text-[#2979FF]" />{" "}
              <span className="text-[#94A3B8] text-sm font-geist">
                24/7 Interactive Mentor Support
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 bg-[#161B26] p-6 rounded-md">
          <p className="text-[#2979FF] font-semibold text-sm font[Geist-Mono]">
            Instructor Spotlight
          </p>
          <div className="flex gap-3">
            <img
              src="tutor.jpg"
              alt="instructor"
              className="w-12 h-12 object-cover rounded-3xl"
            />
            <div className="flex flex-col gap-1">
              <span className="text-white font-bold text-sm font-geist">
               {course.instructorName}
              </span>
              <span className="text-[#94A3B8] font-[Geist-Mono] text-sm">
                  {course.instructorRole}
              </span>
            </div>
          </div>
          <p className="text-[#94A3B8] font-geist text-sm">
           {course.aboutInstructor}
          </p>
        </div>
      </div>
    </section>
  );
}
