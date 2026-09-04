import { useEffect, useState } from "react";
import { supabase } from "../supabase";
import Grid from "../Utilities/Grid";
import { PlusCircle } from "lucide-react";
import Button from "../Utilities/Button";

export default function CourseGrid() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function getCourses() {
    try {
      const { data, error } = await supabase.from("courses").select("*");

      if (error) {
        throw error;
      }

      setCourses(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getCourses();
  }, []);

  const courseCards = courses.map((course) => {
    return (
      <Grid
        key={course.id}
        {...course}
        courseButton={
          <Button
            text={course.price === 0 ? "Notify me" : "Enroll Now"}
            className={
              course.price === 0
                ? "bg-[#242E42] rounded-md px-4 py-2.5 text-geist text-[#64748B] text-sm font-semibold cursor-pointer"
                : "bg-[#2979FF] rounded-md px-4 py-2.5 text-geist text-white text-sm font-semibold cursor-pointer"
            }
          />
        }
      />
    );
  });

  return (
    <section className="w-full p-4 md:px-20 md:pb-12 lg:px-20 lg:pb-12">
      <div className="grid  gap-4 md:grid-cols-3 lg:grid-cols-3">
        {loading ? (
          <h1 className="text-white font-geist">Loading Courses...</h1>
        ) : error ? (
          <h1 className="text-white font-geist">{error}</h1>
        ) : (
          <>
            {courseCards}
            <div className="flex flex-col gap-5 rounded-md p-8 bg-[#1F2638] items-center">
              <PlusCircle className="text-[#2979FF]  cursor-pointer" />
              <p className="text-white font-geist font-bold text-sm">
                Want a specific cohort?
              </p>
              <p className="text-[#94A3B8] text-sm font-geist">
                We organize live curriculums around community demand. Suggest a
                framework or language!
              </p>
              <Button
                text="Request a Syllabus"
                className="bg-[#242E42] px-4 py-2 rounded-md font-geist font-semibold text-sm text-[#94A3B8] cursor-pointer"
              />
            </div>
          </>
        )}
      </div>
    </section>
  );
}
