import { CheckCircle } from "lucide-react";
import AuthHeader from "../Utilities/AuthHeader";
import Input from "../Utilities/Input";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function AuthCardForgottenPass() {
  const [resetPassword, sendPasswordLink] = useState(false);

  async function handleResetPassword(formData) {
    sendPasswordLink(true);
  }
  return (
    <section
      className="m-auto
  flex flex-col 
  gap-8
  p-6 md:p-12
  rounded-sm
  bg-[#161B26]
  w-[calc(100%-2rem)]
  max-w-120"
    >
      <AuthHeader
        AuthHeaderText="Reset Your Password"
        AuthHeaderSubText="Enter your email below to reset password configs"
      />
      <form action={handleResetPassword} className="flex flex-col gap-5">
        <label className="flex flex-col gap-2">
          <span className="text-[#94A3B8] font-[Geist-Mono] text-sm font-semibold">
            EMAIL ADDRESS
          </span>
          <Input
            type="email"
            name="email"
            placeholder="name@domain.com"
            className="bg-[#0B0F19] px-4 py-3 rounded-md  text-[#64748B]"
          />
        </label>

        <Input
          type="submit"
          value="Send Reset Link"
          className="bg-[#2979FF] rounded-sm py-3.5 text-white font-geist font-semibold text-sm cursor-pointer"
        />
      </form>
      {resetPassword && (
        <div className="flex gap-3 p-4 rounded-sm bg-green-100">
          <CheckCircle className="text-[#00E676]" />
          <span className="text-[#00E676] font-geist text-sm">
            Check your email — we sent a reset link to your inbox.
          </span>
        </div>
      )}
      <div className="flex gap-1">
        <span className="text-[#94A3B8] font-geist text-sm">
          Remember your password?
        </span>
        <Link
          to="/Login"
          className="text-[#2979FF] font-geist text-sm font-semibold"
        >
          Back to login
        </Link>
      </div>
    </section>
  );
}
