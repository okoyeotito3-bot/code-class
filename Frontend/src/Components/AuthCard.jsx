import AuthHeader from "../Utilities/AuthHeader";
import Input from "../Utilities/Input";
import SocialDivider from "../Utilities/SocialDivider";
import Button from "../Utilities/Button";
import { FcGoogle } from "react-icons/fc";
import { Link, useSearchParams } from "react-router-dom";

export default function AuthCard() {
  const [SearchParam] = useSearchParams();
  const email = SearchParam.get("email");
  return (
    <section className="flex flex-col items-center gap-8 p-12 rounded-sm bg-[#161B26]">
      <AuthHeader
        AuthHeaderText="Create Your Account"
        AuthHeaderSubText="Join live programming classes in seconds"
      />
      <form className="flex flex-col gap-4 w-full">
        <label className="flex flex-col gap-2">
          <span className="text-[#94A3B8] font-[Geist-Mono] font-semibold text-sm">
            Full Name
          </span>
          <Input
            type="text"
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
           defaultValue= {email }
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
            className="px-4 py-3 rounded-md bg-[#0B0F19] flex items-center text-[#64748B] font-geist text-sm"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-[#94A3B8] font-[Geist-Mono] font-semibold text-sm">
            Confirm Password
          </span>
          <Input
            type="password"
            className="px-4 py-3 rounded-md bg-[#0B0F19] flex items-center text-[#64748B] font-geist text-sm"
          />
        </label>

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
