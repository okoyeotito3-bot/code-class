import { Calendar, CheckCircle, CheckIcon } from "lucide-react";
import PaystackPop from "@paystack/inline-js";
import Input from "../Utilities/Input";
import {supabase} from '../supabase'
import { FaCreditCard } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function CheckOutContent() {
const navigate = useNavigate()


  async function handlePayment(){

   const {data,error} = await supabase.auth.getUser()

   if (error || !data.user) {
    console.log("User is not logged in");
    return;
  }
  
  const paystack = new PaystackPop();
   paystack.newTransaction({
    key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
    email: data.user.email,
    amount: 299 * 100,
    currency: "NGN",

    onSuccess: (transaction) => {
      navigate('/dashboard')
    },

    onCancel: () => {
      console.log("Payment cancelled");
    },
  });
  
  }



  return (
    <section className="flex flex-col gap-12 p-4 md:flex-row lg:flex-row  md:px-20 md:pt-16 md:pb-24">
      <section className="flex flex-col gap-8">
        <header className="flex flex-col gap-3">
          <p className="text-white font-geist text-lg font-semibold">
            Complete Your Enrollment
          </p>
          <p className="text-[#94A3B8] font-geist text-sm">
            Secure payment processed instantly. Get immediate onboarding details
            post-purchase.
          </p>
        </header>
        <div className="bg-[#161B26] flex flex-col gap-5 p-6 rounded-md">
          <div className="flex justify-between">
            <div className="flex flex-col gap-1">
              <span className="text-[#2979FF] font-[Geist-mono] font-semibold text-sm">
                COHORT 4.0
              </span>
              <span className="font-bold text-sm font-geist text-white">
                JavaScript Fundamentals to Advanced
              </span>
            </div>
            <p className="text-[#00E676] font-bold font-[Geist-Mono] text-sm">
              $299
            </p>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex gap-2">
              <Calendar className="text-[#94A3B8]" />
              <span className="text-[#94A3B8] text-sm font-geist">
                12 Weeks Duration
              </span>
            </div>
            <p className="font-geist text-[#94A3B8] text-sm">
              Otito Okoye ( Senior Engineer)
            </p>
          </div>
        </div>

        <form action={handlePayment} className="flex flex-col p-8 rounded-md gap-6 bg-[#161B26]">

          <p className="text-white font-geist text-sm font-bold">
           You will be redirected to Paystack's secure
           checkout to complete your payment.
          </p>


           <Input
            type="submit"
            value="Complete Enrollment — $299"
            className="font-bold text-geist text-sm bg-[#2979FF] p-4 text-center cursor-pointer text-white rounded-md"
          />



          
          

         
        </form>
        <div className="flex gap-1 items-center justify-center">
          <CheckCircle className="text-[#00E676]" size={15} />
          <span className="text-[#94A3B8] font-geist text-sm ">
            256-bit Secure SSL
          </span>
          <CheckCircle className="text-[#00E676]" size={15} />
          <span className="text-[#94A3B8] font-geist text-sm ">
            14-Day Money-Back Guarantee
          </span>
        </div>
      </section>
      <section className="flex flex-col bg-[#161B26] gap-7 p-8">
        <p className="text-white font-extrabold font-geist text-lg">
          What You'll Get
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex gap-3">
            <CheckIcon className="text-[#2979FF]" size={15} />
            <div className="flex flex-col gap-1">
              <span className="text-white font-bold text-sm font-geist">
                Live Weekly Lectures
              </span>
              <span className="text-[#94A3B8] font-geist text-sm">
                Highly interactive sessions with expert teachers, structured QA
                modules.
              </span>
            </div>
          </div>

          <div>
            <div className="flex gap-3">
              <CheckIcon className="text-[#2979FF]" size={15} />
              <div className="flex flex-col gap-1">
                <span className="text-white font-bold text-sm font-geist">
                  CodePen Automated Pipeline
                </span>
                <span className="text-[#94A3B8] font-geist text-sm">
                  Write code inside integrated assessment workspaces, get tested
                  instantly.
                </span>
              </div>
            </div>
          </div>

          <div>
            <div className="flex gap-3">
              <CheckIcon className="text-[#2979FF]" size={15} />
              <div className="flex flex-col gap-1">
                <span className="text-white font-bold text-sm font-geist">
                  1-on-1 Senior Engineer Review
                </span>
                <span className="text-[#94A3B8] font-geist text-sm">
                  Deep architecture and execution audits, precise code grading..
                </span>
              </div>
            </div>
          </div>

          <div>
            <div className="flex gap-3">
              <CheckIcon className="text-[#2979FF]" size={15} />
              <div className="flex flex-col gap-1">
                <span className="text-white font-bold text-sm font-geist">
                  Lifetime Community Access
                </span>
                <span className="text-[#94A3B8] font-geist text-sm">
                  Join high-capacity alumni group channels, job search
                  referrals.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
            <span className="text-[#94A3B8] font-geist  text-sm font-semibold">Class starts on:</span>
            <span className="text-[#00E676] font-[Geist-Mono] font-bold text-sm">Jan 15, 2027</span>
        </div>
      </section>
    </section>
  );
}
