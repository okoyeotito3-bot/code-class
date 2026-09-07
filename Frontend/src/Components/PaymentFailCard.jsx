import { AlertCircle } from "lucide-react";
import { FcCancel } from "react-icons/fc";
import Button from '../Utilities/Button'

export default function PaymentFailCard() {
  return (
    <section className="flex flex-col m-auto gap-20 p-8 md:w-2/3 lg:w-2/3  md:px-20 lg:px-20 md:py-30 lg:py-30">
      <FcCancel size={30} className="text-[#EF4444]"/>
      <div className="flex flex-col gap-4">
        <p className="text-extrabold font-geist text-white text-lg">Payment Failed</p>
        <p className="text-[#94A3B8] font-geist text-sm">
          Your card was declined. Please try again or use a different payment
          method.
        </p>
      </div>
      <div className="flex gap-3 p-4 bg-[#161B26]">
        <AlertCircle size={30} className="text-[#F59E0B]"/>
        <p className="text-[#94A3B8] text-sm font-geist">
          Reason: Insufficient funds or temporary processor downtime. Feel free
          to try again or choose standard support pathways.
        </p>
      </div>
     
        <Button text='Try Again' className='bg-[#2979FF] px-8 py-3.5 rounded-md text-white font-geist font-bold'/>
        
    </section>
  );
}
