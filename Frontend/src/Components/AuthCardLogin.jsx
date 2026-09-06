import AuthHeader from "../Utilities/AuthHeader";
import Input from "../Utilities/Input";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Utilities/Button";
import SocialDivider from "../Utilities/SocialDivider";
import { FcGoogle } from "react-icons/fc";
import { CircleX } from "lucide-react";
import { useState } from "react";
import { supabase } from "../supabase";

export default function AuthLoginCard() {
  const navigate = useNavigate();
  const [passwordIsWrong, setPasswordIsWrong] = useState(false);

  async function handleLogin(formData) {
    const email = formData.get("email");
    const password = formData.get("password");

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setPasswordIsWrong(true);
      return;
    }
    setPasswordIsWrong(false);
    navigate("/dashboard");
  }

  return (
    <section
      className=" m-auto
  flex flex-col 
  gap-8
  p-6 md:p-12
  rounded-sm
  bg-[#161B26]
  w-[calc(100%-2rem)]
  max-w-120"
    >
      <AuthHeader
        AuthHeaderText="Welcome Back"
        AuthHeaderSubText="Sign in to resume your curriculum"
      />
      <form action={handleLogin} className="flex flex-col gap-4">
        <label className="flex flex-col gap-2">
          <span className="text-[#94A3B8] font-semibold font-[Geist-Mono]">
            EMAIL ADDRESS
          </span>
          <Input
            type="email"
            name="email"
            placeholder="name@domain.com"
            className="bg-[#0B0F19] px-4 py-3 rounded-md  text-[#64748B]"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-[#94A3B8] font-semibold font-[Geist-Mono]">
            PASSWORD
          </span>
          <Input
            type="password"
            name="password"
            className="bg-[#0B0F19] px-4 py-3 rounded-md  text-[#64748B]"
          />
        </label>
        <div className="flex justify-between">
          <label className="flex gap-2 items-center">
            <Input type="checkbox" className="cursor-pointer" />
            <span className="text-[#94A3B8] font-geist text-sm cursor-pointer">
              Remember me
            </span>
          </label>
          <Link
            to="/Forgot-Password"
            className="text-[#2979FF] font-medium text-sm"
          >
            Forgot password?
          </Link>
        </div>
        {passwordIsWrong && (
          <div className="flex gap-3 p-4 rounded-md bg-red-100 justify-center">
            <CircleX className="text-shadow-red-300" />
            <span className="text-black font-semibold">Wrong Credentials</span>
          </div>
        )}
        <Button
          text="Sign In"
          className="bg-[#2979FF] py-3.5 text-center rounded-md"
        />
      </form>
      <SocialDivider dividerText="OR LOGIN WITH" />
      <Button
        icon={<FcGoogle />}
        text="Continue with Google"
        className="flex items-center justify-center gap-2 py-3 rounded-md bg-[#0B0F19] w-full text-white font-geist font-semibold text-sm"
      />
      <div className="flex gap-2 items-center">
        <span className="text-[#94A3B8] font-geist text-sm">
          Don't have an account?
        </span>
        <Link to="/Register" className="text-[#2979FF] font-geist text-sm">
          Sign up
        </Link>
      </div>
    </section>
  );
}
