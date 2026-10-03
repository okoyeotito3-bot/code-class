import { Link } from "react-router-dom";
import { Play } from "lucide-react"; 

export default function Hero() {
  return (
    <section className="w-full flex gap-16 px-4 pt-10 pb-8 md:px-20 md:py-24">
      <div className=" flex flex-col gap-8">
        <h1 className="bg-[#FF4081]/10 rounded-[999px] px-2.5 py-1 text-[#FF4081] font-bold font-['Geist-Mono'] text-sm self-start">ANNOUNCING LIVE COHORT 4.0</h1>

        <h1 className="font-['geist'] font-extrabold  text-[#F8FAFC] text-2xl  md:text-5xl">
          Master Programming Through Practice, Not Theory
        </h1>

        <p className="font-['geist'] text-md text-[#94A3B8]">
          CodeClass pairs real-time expert lectures with live, hands-on CodePen
          assignments. Get reviewed and certified by senior FAANG engineers in a
          highly structured classroom environment.
        </p>

        <div className="flex flex-col md:flex-row gap-2.5 md:gap-4">

          <Link to="/Courses"
          className="bg-[#2979FF] text-center text-white px-6 py-3 rounded-md cursor-pointer hover:bg-[#2979FF]/90 w-full">
            Explore Courses
          </Link>

          <Link 
           className="flex items-center justify-center gap-2 py-3 px-3 rounded-md bg-[#161B26] text-[#94A3B8]  font-['geist'] text-xl cursor-pointer hover:bg-[#161B26]/90 w-full"
          >
            <Play />
            <span>Watch Demo</span>
          </Link>

         
        </div>
      </div>

      <img
        src="hero-visual.png"
        alt="hero-visual"
        className="hidden  md:block w-140 h-111"
      />
    </section>
  );
}
