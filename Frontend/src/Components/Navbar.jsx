import Button from "../Utilities/Button";
import UnorderedList from "../Utilities/UnorderedList";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [menuIsOpen, setMenu] = useState(false);

  function handleMenu() {
    setMenu((prev) => !prev);
  }

  return (
    <>
      <nav className="w-full h-20 flex justify-between p-4 items-center md:px-20">
        <img
          src="brand.png"
          alt="codeclass logo"
          className="w-30 h-auto md:w-37"
        />

        <UnorderedList
          className="hidden text-[14px] gap-8 md:flex md:w-63 md:h-4.5"
          list1="Courses"
          to1="/Courses"
          list2="How It Works"
          to2="/How It Works"
          list3="Pricing"
          to3="Pricing"
        />

        <div className="hidden gap-4  items-center md:flex md:w-57.5 md:h-10.5 ">
          <Button
            text="Login"
            to="/Login"
            className="w-9.25 h-4.5 font-geist font-medium text-[14px] text-[#94A3B8]  cursor-pointer"
          />
          <Button
            text="Start Learning"
            to="/Register"
            className="w-44.25 h-10.5 flex items-center justify-center rounded-md py-3 px-6 bg-[#2979FF] text-[#F8FAFC] cursor-pointer hover:bg-[#1D64D8]"
          />
        </div>

        <button className="text-[#94A3B8] md:hidden" onClick={handleMenu}>
          {menuIsOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {menuIsOpen && (
        <div className="flex flex-col justify-between gap-4 py-1 md:hidden lg:hidden">
          <UnorderedList
            className="flex flex-col gap-4 px-4 md:hidden lg:hidden"
            list1="Courses"
            to1="/Courses"
            list2="How It Works"
            to2="/How It Works"
            list3="Pricing"
            to3="Pricing"
          />

          <div className="flex flex-col gap-4 px-4">
            <Button
              text="Login"
              to="/Login"
              className="w-44.25 flex items-center justify-start py-3 px-6 font-geist text-sm font-bold text-white cursor-pointer"
            />
            <Button
              text="Start Learning"
              to="/Register"
              className="w-44.25 flex items-center justify-center rounded-md py-3 px-6 font-bold bg-[#2979FF] text-white cursor-pointer hover:bg-[#1D64D8]"
            />
          </div>
        </div>
      )}
    </>
  );
}
