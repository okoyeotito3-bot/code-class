import Button from '../Utilities/Button'


export default function FeatureCourse(){
    return(
        <section className=" w-full flex flex-col gap-4 p-4 md:py-[80px] md:px-[120px] lg:py-[40px] lg:px-[120px] md:gap-16 lg:gap-16">
            <header className="w-full flex flex-col gap-4">
                <p className="text-[#FF4081] text-center font-[Geist-Mono] font-semibold text-[11px]">PREMIUM COHORT</p>
                <p className="font-geist font-extrabold text-2xl  text-[#F8FAFC] md:text-[36px] lg:text-[36px] ">Our Best-Selling Syllabus</p>
            </header>

            <div className="w-full flex flex-col md:flex-row lg:flex-row ">
                <div className="flex flex-col gap-[40px] p-2">

                <div className='flex flex-col w-full gap-4'>
                    <div className='flex gap-2 '>
                        <span className='text-[#FFD600] font-semibold text-sm '>Javascript</span>
                        <span className='text-[#5491FF] font-semibold text-sm'>12 weeks</span>
                    </div>
                    <h2 className='font-extrabold text-3xl text-[#F8FAFC] font-geist '>JavaScript Fundamentals to Advanced</h2>
                    <p className='font-geist font-sm text-[#94A3B8]'>Become a master of vanilla JavaScript. Deeply understand the internals, 
                        execute complex asynchronous tasks, 
                        and learn how to package and optimize modern build files.
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <img 
                     src="tutor.jpg" 
                     alt="tutor" 
                     className="w-[30px] h-[30px] rounded-full object-cover border border-white/20 shadow-sm" 
                    />
                    <div className="flex flex-col gap-1">
                        <p className="font-geist font-bold text-[14px] text-[#F8FAFC]">Otito Okoye</p>
                        <p className="font-normal font-[Geist-Mono] text-3 text-[#94A3B8]">Software Enginner</p>
                    </div>
                </div>
                <div className='w-full flex items-center justify-between gap-2 md:pr-6 lg:pr-6'>
                    <div className='flex flex-col items-start gap-1 whitespace-nowrap'>
                      <p className='text-[#64748B] text-3 font-gesit font-semibold'>Price</p>  
                      <p className='text-[#00E676] font-[Geist-Mono] text-[32px]'>$199 <small className='text-[#94A3B8]'>/ total</small></p>
                    </div>
                    <Button 
                    text='Enroll Now'
                    className='bg-[#2979FF] py-3 px-6 rounded-[6px] mt-auto font-geist font-semibold text-[14px] text-[#F8FAFC] cursor-pointer  hover:bg-[#1D64D8] whitespace-nowrap'
                    />
                </div>
                </div>
         
                <img src="course-syllabus.png" alt="course-syllabus" />
            </div>
        </section>
    )
}