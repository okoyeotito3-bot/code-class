import { CheckIcon } from "lucide-react";
import Button from "../Utilities/Button";
export default function PaymentSuccesCard() {
  return (
    <section className="flex flex-col gap-10 px-20 py-24 bg-[#0B0F19] items-center">
      <CheckIcon size={30} className="text-white bg-green-900 rounded-md" />
      <div className="flex flex-col items-center gap-4">
        <span className="font-geist  font-extrabold text-lg text-white">
          Enrollment Confirmed!
        </span>
        <span className="text-[#94A3B8] font-geist text-sm">
          You're now enrolled in JavaScript Fundamentals to Advanced. A receipt
          and onboarding email have been sent.
        </span>
      </div>
      <div className="bg-[#161B26] flex flex-col gap-4 p-6 rounded-md">
        <p className="text-white font-bold text-sm">Onboarding Summary</p>
        <div>
          <div className="flex justify-between">
            <span className="text-[#94A3B8] font-geist text-sm">Cohort</span>
            <span className="text-white font-semibold">Cohort 4.0</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#94A3B8] font-geist text-sm">
              Start Date
            </span>
            <span className="text-white font-semibold">Jan 15, 2027</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#94A3B8] font-geist text-sm">
              First Class
            </span>
            <span className="text-white font-semibold">7:00 PM EST</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#94A3B8] font-geist text-sm">
              Access Status
            </span>
            <span className="text-white font-semibold">
              Active (Instant Access)
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-4 justify-center">
        <Button
          text="Go to Dashboard"
          to="/dashboard"
          className="bg-[#2979FF] px-8 py-3.5 rounded-md text-white font-geist text-sm whitespace-nowrap"
        />
        <Button
          text="View Course Schedule"
          className="bg-[#161B26] px-8 py-3.5 rounded-md text-white font-geist text-sm whitespace-nowrap"
        />
      </div>
    </section>
  );
}
