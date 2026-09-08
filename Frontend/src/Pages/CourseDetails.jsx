import NavBar from "../Components/Navbar";
import DetailsHero from "../Components/CourseDetails/DetailsHero";
import DeatialsContent from "../Components/CourseDetails/DetailsContent";
import Footer from "../Components/Footer";

export default function CourseDetails() {
  return (
    <section className="bg-[#0B0F19] w-full flex flex-col">
        <NavBar />
        <DetailsHero />
        <DeatialsContent />
        <Footer/>
    </section>
  );
}