import Button from "../Utilities/Button";
import { Play } from "lucide-react";

export default function Hero() {
  return (
    <div className="w-full flex gap-16 p-4 md:px-20 md:py-24">
      <div className=" flex flex-col gap-8  items-start">
        <img src="badge.png" alt="hero badge" />

        <h1 className="font-geist font-extrabold  text-[#F8FAFC] text-2xl  md:text-5xl lg:text-5xl">
          Master Programming Through Practice, Not Theory
        </h1>

        <p className="font-geist font-normal text-[18px] text-[#94A3B8]  leading-7">
          CodeClass pairs real-time expert lectures with live, hands-on CodePen
          assignments. Get reviewed and certified by senior FAANG engineers in a
          highly structured classroom environment.
        </p>

        <div className="flex gap-1 md:gap-4 lg:gap-4 ">
          <Button
            text="Explore Courses"
            to="/Courses"
            className="bg-[#2979FF] text-[#F8FAFC] px-6 py-3 rounded-md cursor-pointer hover:bg-[#1D64D8] whitespace-nowrap"
          />

          <Button
            icon={<Play />}
            text="Watch Demo"
            className="flex items-center gap-2 py-3 px-3 rounded-md bg-[#161B26] text-[#94A3B8]  font-geist text-xl whitespace-nowrap cursor-pointer hover:bg-[#161B15]"
          />
        </div>
      </div>

      <img
        src="hero-visual.png"
        alt="hero-visual"
        className="hidden  md:block w-140 h-111"
      />
    </div>
  );
}
