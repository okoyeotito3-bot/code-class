import { supabase } from "../supabase";
import NavBar from "../Components/Navbar";
import CourseHero from "../Components/CourseHero";
import CourseGrid from "../Components/CourseGrid";
import Footer from "../Components/Footer";
export default function CoursePage() {
  return (
    <section className="bg-[#0B0F19] w-full flex flex-col">
      <NavBar />
      <CourseHero />
      <CourseGrid />
      <Footer />
    </section>
  );
}
