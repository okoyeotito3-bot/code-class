import AuthHeader from "../Utilities/AuthHeader";
import Input from "../Utilities/Input";
import SocialDivider from "../Utilities/SocialDivider";
import Button from "../Utilities/Button";
import { FcGoogle } from "react-icons/fc";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { CircleX } from "lucide-react";
import { useState } from "react";
import { supabase } from "../supabase";

export default function AuthCard() {
  const [SearchParam] = useSearchParams();
  const email = SearchParam.get("email");
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSignUp(formData) {
    const fullName = formData.get("fullName");
    const emailAddress = formData.get("emailAddress");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    if (password !== confirmPassword) {
      setErrorMessage('Password Mismatch');
      return;
    }

    if (
      fullName.trim() === "" ||
      emailAddress.trim() === "" ||
      password === ""
    ) {
      setErrorMessage('Fill All Field');
      return;
    }

    setPasswordError(false);

    const { data, error } = await supabase.auth.signUp({
      email: emailAddress,
      password: password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });



    if(!error){
       navigate("/payment-checkout");
    }

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
        AuthHeaderText="Create Your Account"
        AuthHeaderSubText="Join live programming classes in seconds"
      />
      <form action={handleSignUp} className="flex flex-col gap-4 w-full">
        <label className="flex flex-col gap-2">
          <span className="text-[#94A3B8] font-[Geist-Mono] font-semibold text-sm">
            Full Name
          </span>
          <Input
            type="text"
            name="fullName"
            className="px-4 py-3 rounded-md bg-[#0B0F19] flex items-center text-[#64748B] font-geist text-sm "
            placeholder="e.g. John Doe"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-[#94A3B8] font-[Geist-Mono] font-semibold text-sm">
            Email Address
          </span>
          <Input
            type="email"
            name="emailAddress"
            defaultValue={email}
            className="px-4 py-3 rounded-md bg-[#0B0F19] flex items-center text-[#64748B] font-geist text-sm"
            placeholder="name@domain.com"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-[#94A3B8] font-[Geist-Mono] font-semibold text-sm">
            Password
          </span>
          <Input
            type="password"
            name="password"
            className="px-4 py-3 rounded-md bg-[#0B0F19] flex items-center text-[#64748B] font-geist text-sm"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-[#94A3B8] font-[Geist-Mono] font-semibold text-sm">
            Confirm Password
          </span>
          <Input
            type="password"
            name="confirmPassword"
            className="px-4 py-3 rounded-md bg-[#0B0F19] flex items-center text-[#64748B] font-geist text-sm"
          />
        </label>

        {errorMessage && (
          <div className="flex gap-3 p-4 rounded-md bg-red-100 justify-center">
            <CircleX className="text-red-300" />
            <span className="text-black font-semibold">
              {errorMessage}
            </span>
          </div>
        )}

        <Input
          type="submit"
          value="Create Account"
          className="bg-[#2979FF] py-3.5 rounded-md text-sm font-semibold font-geist flex items-center justify-center"
        />
      </form>
      <SocialDivider dividerText="Or" />
      <Button
        icon={<FcGoogle />}
        text="Sign up with Google"
        className="flex items-center justify-center gap-2 py-3 rounded-md bg-[#0B0F19] w-full text-white font-geist font-semibold text-sm"
      />
      <div className="flex gap-1 items-center">
        <span className="text-[#94A3B8] font-geist text-sm">
          Already have an account?
        </span>
        <Link
          to="/login"
          className="text-[#2979FF] text-geist font-semibold text-sm"
        >
          Login
        </Link>
      </div>
    </section>
  );
}
