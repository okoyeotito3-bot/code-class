import { ChevronDown, Minus } from 'lucide-react';

export default function Faq(){
    return(
        <section className="flex flex-col w-full bg-[#161B26] p-4 gap-4 md:gap-16 lg:gap-16 md:py-[80px] md:px[120px] lg:py-[80px] lg:px[120px]">
            <header className=" flex flex-col gap-4 items-center">
                <p className="font-[geist-mono] font-semibold text-sm text-[#FFD600]">HAVE QUESTIONS?</p>
                <p className="font-geist font-extrabold text-lg text-[#F8FAFC]">Frequently Asked Questions</p>
            </header>
            <details className="group flex flex-col gap-2" open>
                <summary className=" flex items-center justify-between text-[#F8FAFC] font-geist font-bold text-sm gap-2 list-none 
                [&::-webkit-details-marker]:hidden cursor-pointer">
                    <span>Are the lectures recorded if I miss a live class?</span>
                     <ChevronDown className="text-[#5491FF] group-open:hidden" />
                     <Minus className="text-[#5491FF] hidden group-open:block" />
             </summary>
                <p className='text-sm font-geist text-[#94A3B8]'>Yes, every live session is immediately archived in HD and 
                    placed in your dashboard for offline learning and revision.
                </p>
            </details>
            <details className="group flex flex-col gap-2" >
                <summary className=" flex items-center justify-between text-[#F8FAFC] font-geist font-bold text-sm gap-2 list-none 
                [&::-webkit-details-marker]:hidden cursor-pointer">
                    <span>Do I need a paid CodePen subscription to join?</span>
                     <ChevronDown className="text-[#5491FF] group-open:hidden" />
                     <Minus className="text-[#5491FF] hidden group-open:block" />
             </summary>
                <p className='text-sm font-geist text-[#94A3B8]'>No. All CodeClass assignments are fully executable using CodePen's free account tier.
                </p>
            </details>
            <details className="group flex flex-col gap-2">
                <summary className=" flex items-center justify-between text-[#F8FAFC] font-geist font-bold text-sm gap-2 list-none 
                [&::-webkit-details-marker]:hidden cursor-pointer">
                    <span>What are the core prerequisites for these programs?</span>
                     <ChevronDown className="text-[#5491FF] group-open:hidden" />
                     <Minus className="text-[#5491FF] hidden group-open:block" />
             </summary>
                <p className='text-sm font-geist text-[#94A3B8]'>Our Javascript path requires basic computer knowledge and raw curiosity.
                     We construct everything from the ground up.
                </p>
            </details>
            <details className="group flex flex-col gap-2">
                <summary className=" flex items-center justify-between text-[#F8FAFC] font-geist font-bold text-sm gap-2 list-none 
                [&::-webkit-details-marker]:hidden cursor-pointer">
                    <span>Will I receive an industry-recognized certificate?</span>
                     <ChevronDown className="text-[#5491FF] group-open:hidden" />
                     <Minus className="text-[#5491FF] hidden group-open:block" />
             </summary>
                <p className='text-sm font-geist text-[#94A3B8]'>Yes. Graduates passing all assessments receive a verified cryptographic certificate
                     shareable on LinkedIn and portfolios..
                </p>
            </details>
            <details className="group flex flex-col gap-2">
                <summary className=" flex items-center justify-between text-[#F8FAFC] font-geist font-bold text-sm gap-2 list-none 
                [&::-webkit-details-marker]:hidden cursor-pointer">
                    <span>Can I request a refund if my schedule changes?</span>
                     <ChevronDown className="text-[#5491FF] group-open:hidden" />
                     <Minus className="text-[#5491FF] hidden group-open:block" />
             </summary>
                <p className='text-sm font-geist text-[#94A3B8]'>Absolutely. We offer a full, no-questions-asked refund within the first 14 days of any cohort course.
                </p>
            </details>
            <details className="group flex flex-col gap-2">
                <summary className=" flex items-center justify-between text-[#F8FAFC] font-geist font-bold text-sm gap-2 list-none 
                [&::-webkit-details-marker]:hidden cursor-pointer">
                    <span>How flexible is the weekly schedule?</span>
                     <ChevronDown className="text-[#5491FF] group-open:hidden" />
                     <Minus className="text-[#5491FF] hidden group-open:block" />
             </summary>
                <p className='text-sm font-geist text-[#94A3B8]'>Classes run twice weekly on evenings. All assignments are self-paced,
                     giving you room to align tasks around work.
                </p>
            </details>
        </section>
    )
}
